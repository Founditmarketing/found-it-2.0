import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateObject } from 'ai';
import { googleAiApiKey } from '@/lib/server/ai-key';
import { escapeHtml, rateLimit, clientIp } from '@/lib/server/guards';

export const runtime = 'nodejs';
export const maxDuration = 30;

/* ─── SPEAK IT IN, on the public site ───
   The new client talks; the model SORTS what was said into the onboarding
   fields — it never invents. Review happens client-side (the human commits),
   then submit lands the whole thing in Trevor's inbox. Same guard stack as
   /api/lead: honeypot, per-IP rate limit, size caps. */

const google = createGoogleGenerativeAI({ apiKey: googleAiApiKey });

const personSchema = z.object({
  name: z.string().max(400).default(''),
  role: z.string().max(400).default(''),
  cell: z.string().max(400).default(''),
  email: z.string().max(400).default(''),
  officeGeneral: z
    .boolean()
    .default(false)
    .describe('true ONLY if this is clearly the person who runs the office day to day'),
});

const fieldsSchema = z.object({
  businessLegal: z.string().max(400).default(''),
  businessGoesBy: z.string().max(400).default(''),
  address: z.string().max(400).default(''),
  mainPhone: z.string().max(400).default(''),
  businessEmail: z.string().max(400).default(''),
  website: z.string().max(400).default(''),
  people: z.array(personSchema).max(8).default([]),
  toolsToday: z.string().max(400).default('').describe('software and systems they run on today, comma separated'),
  toolThatHurts: z.string().max(400).default(''),
  jobsComeIn: z.string().max(400).default(''),
  whoAnswers: z.string().max(400).default(''),
  estimatesToday: z.string().max(400).default(''),
  howTheyGetPaid: z.string().max(400).default(''),
  crews: z.string().max(400).default(''),
  services: z.string().max(400).default(''),
  accessNotes: z.string().max(400).default('').describe('anything about logins, domains, exports, who holds the passwords'),
  oneThing: z.string().max(400).default('').describe('the ONE thing they most want fixed in the first two weeks'),
  kickoffTimes: z.string().max(400).default(''),
  reachNumber: z.string().max(400).default(''),
  anythingElse: z.string().max(400).default(''),
});

export type OnboardingFields = z.infer<typeof fieldsSchema>;

const extractBody = z.object({
  action: z.literal('extract'),
  transcript: z.string().min(20).max(24000),
  hp: z.string().max(200).optional(),
});

const submitBody = z.object({
  action: z.literal('submit'),
  fields: fieldsSchema,
  transcript: z.string().max(24000).optional(),
  hp: z.string().max(200).optional(),
});

const FIELD_LABELS: [keyof OnboardingFields, string][] = [
  ['businessLegal', 'Legal / billing name'],
  ['businessGoesBy', 'Goes by'],
  ['address', 'Address'],
  ['mainPhone', 'Main phone'],
  ['businessEmail', 'Business email'],
  ['website', 'Website / domain'],
  ['toolsToday', 'Runs on today'],
  ['toolThatHurts', 'What hurts most'],
  ['jobsComeIn', 'How jobs come in'],
  ['whoAnswers', 'Who answers / after hours'],
  ['estimatesToday', 'How estimates go out'],
  ['howTheyGetPaid', 'How they get paid'],
  ['crews', 'Crews / trucks'],
  ['services', 'Services'],
  ['accessNotes', 'Access / logins'],
  ['oneThing', 'THE ONE THING'],
  ['kickoffTimes', 'Kickoff times'],
  ['reachNumber', 'Best number'],
  ['anythingElse', 'Anything else'],
];

export async function POST(req: Request) {
  const ip = clientIp(req);
  if (!rateLimit(`onboarding:${ip}`, 12, 10 * 60 * 1000) || !rateLimit('onboarding:global', 100, 10 * 60 * 1000)) {
    return NextResponse.json({ error: 'Give it a minute and try again.' }, { status: 429 });
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: 'Bad request.' }, { status: 400 });
  }
  const action = (raw as { action?: string })?.action;

  if (action === 'extract') {
    const parsed = extractBody.safeParse(raw);
    if (!parsed.success) return NextResponse.json({ error: 'Bad request.' }, { status: 400 });
    if (parsed.data.hp) return NextResponse.json({ ok: true, fields: {} }); // bots think they won
    if (!googleAiApiKey) return NextResponse.json({ error: 'The sorter is offline. Type into the boxes below instead.' }, { status: 503 });
    try {
      const { object } = await generateObject({
        model: google('gemini-2.5-flash'),
        maxOutputTokens: 2048,
        providerOptions: { google: { thinkingConfig: { thinkingBudget: 0 } } },
        schema: fieldsSchema,
        system:
          'You sort a business owner\'s spoken rambling into onboarding fields for their new custom software. HARD RULES: use ONLY what was actually said; when something was not mentioned, leave the field an empty string; NEVER invent names, numbers, tools, or facts; keep the owner\'s own words and phrasing where you can; phone numbers formatted (318) 555-0100 style when digits were given. The speech-to-text may have mangled words — fix obvious mishearings only when the intent is unmistakable.',
        prompt: `Sort this into the fields:\n\n${parsed.data.transcript}`,
      });
      return NextResponse.json({ ok: true, fields: object });
    } catch {
      return NextResponse.json({ error: 'The sorter choked. Say it again or type into the boxes below.' }, { status: 502 });
    }
  }

  if (action === 'submit') {
    const parsed = submitBody.safeParse(raw);
    if (!parsed.success) return NextResponse.json({ error: 'Bad request.' }, { status: 400 });
    if (parsed.data.hp) return NextResponse.json({ ok: true });
    const f = parsed.data.fields;
    const biz = (f.businessGoesBy || f.businessLegal || 'New client').replace(/\s+/g, ' ').slice(0, 80);

    const rows = FIELD_LABELS.filter(([k]) => String(f[k] ?? '').trim())
      .map(
        ([k, label]) =>
          `<tr><td style="padding:6px 10px;color:#888;font-size:12px;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 10px;font-size:14px">${escapeHtml(String(f[k]))}</td></tr>`,
      )
      .join('');
    const people = f.people
      .filter((p) => p.name.trim())
      .map(
        (p) =>
          `<tr><td style="padding:5px 10px;font-size:13px"><b>${escapeHtml(p.name)}</b>${p.officeGeneral ? ' ⭐' : ''}</td><td style="padding:5px 10px;font-size:13px">${escapeHtml(p.role)}</td><td style="padding:5px 10px;font-size:13px">${escapeHtml(p.cell)}</td><td style="padding:5px 10px;font-size:13px">${escapeHtml(p.email)}</td></tr>`,
      )
      .join('');

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:640px">
        <p style="font-size:11px;letter-spacing:2px;color:#FF5500;font-weight:800">ONBOARDING — SPOKEN IN ON THE SITE</p>
        <h2 style="margin:4px 0 14px">${escapeHtml(biz)}</h2>
        <table style="border-collapse:collapse;width:100%;border:1px solid #eee">${rows}</table>
        ${people ? `<p style="font-size:12px;color:#888;margin:16px 0 4px">PEOPLE (⭐ = runs the office)</p><table style="border-collapse:collapse;width:100%;border:1px solid #eee">${people}</table>` : ''}
        ${parsed.data.transcript?.trim() ? `<p style="font-size:12px;color:#888;margin:16px 0 4px">WHAT THEY ACTUALLY SAID</p><div style="border:1px solid #eee;padding:10px;font-size:13px;color:#444;white-space:pre-wrap">${escapeHtml(parsed.data.transcript)}</div>` : ''}
      </div>`;

    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'Found It Software <contact@founditmarketing.com>',
        to: ['trevor@founditmarketing.com', 'trevorruby@gmail.com'],
        subject: `ONBOARDING: ${biz}`,
        html,
      });
    } catch {
      return NextResponse.json({ error: "Didn't send. Try once more." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: 'Bad request.' }, { status: 400 });
}
