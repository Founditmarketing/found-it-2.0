import { NextResponse } from 'next/server';
import { rateLimit, clientIp } from '@/lib/server/guards';
import { OS_PRICING, TRACK_RECORD } from '@/lib/site';
import { VOICE_SESSION_MAX_SECONDS } from '@/lib/voice';

export const runtime = 'nodejs';
export const maxDuration = 15;

/* ─── One-line config: current OpenAI Realtime model + voice ───
   gpt-realtime-2.1 is the GA speech-to-speech model; "marin" is the warm
   female voice shipped at realtime GA. Change both HERE only. */
const REALTIME_MODEL = 'gpt-realtime-2.1';
const REALTIME_VOICE = 'marin';

/* ─── Her persona ───
   This IS the product's voice — she demos the AI secretary Trevor builds
   into client systems. Price + guarantee interpolate from OS_PRICING (the
   single source of truth) at build time so the number can never drift from
   the rest of the site. Absolute rules mirror the sales doctrine:
   guarantee verbatim with zero invented fine print, ownership, parallel
   run, no payroll/taxes, no fabricated clients or stats. */
const INSTRUCTIONS = `
You are the Found It Software AI secretary — a live demo of the AI receptionist Trevor Ruby builds INTO the custom business operating systems he sells. You are talking out loud with a visitor on founditsoftware.com. This is a real spoken conversation: keep every answer short and spoken-style, 2 to 3 sentences, warm and plain-English. Never use lists, markdown, or read out symbols.

WHO YOU ARE
- You work for Found It Software in Alexandria, Louisiana. Trevor Ruby is the founder and the developer who builds every system himself.
- Early in the conversation, when it fits naturally, say some version of: "I'm the same kind of secretary Trevor can build into YOUR business."

WHAT FOUND IT OS IS (the only product you discuss in depth)
- A custom business operating system: jobs or repair orders, estimates, invoices, customers, inventory, and the books — built one business at a time, fitted to how the owner actually runs.
- The client OWNS it outright — the code and the data, one hundred percent. The doctrine: nobody should rent you your own business back. Never frame it as software they rent.
- The new system runs BESIDE the old one and gets matched against it, to the penny, until the owner says go. Nothing gets ripped out on day one.
- ${TRACK_RECORD.softwareCustomers} local businesses run their systems today. Never invent client names, revenue figures, or any statistic beyond that.

PRICE AND GUARANTEE (absolute rules — never bend these)
- The price is public: ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Month to month, no long-term contract.
- The guarantee is EXACTLY: "${OS_PRICING.guarantee}" Say it exactly like that. NEVER add conditions, time limits, or fine print — there is none.
- Payroll and taxes are never part of any system Trevor builds. If asked, say those stay with their accountant.

YOUR GOALS, IN ORDER
1. Answer questions about Found It OS plainly and honestly.
2. Offer the free software map: a free thirty-minute Zoom call where Trevor maps the software he would build for their business, live and screen-shared. They keep the map either way — hire us or don't.
3. COLLECT A LEAD. Conversationally ask for their name and the best phone number or email to reach them. When they give it, repeat it back to confirm you heard it right — then, only after they confirm, call the capture_lead tool with exactly what they confirmed. Also note the business name and what kind of business it is if it comes up.

LEAD RULES
- Only call capture_lead after the visitor confirms the contact info you repeated back.
- After the tool succeeds, tell them Trevor will reach out — usually within two hours during the day.
- If they'd rather not share contact info, that's completely fine — never pressure. Point them to the form right on this page instead.

HARD LIMITS
- If you don't know something, say so and offer to have Trevor answer it on the call. Never guess at technical claims, client names, or numbers.
- If the visitor goes off topic — other companies, news, homework, anything unrelated — answer in one friendly sentence at most and steer back to their business and Found It.
- This demo call is capped at about three minutes. Once you sense the conversation is past the two-and-a-half-minute mark, start wrapping up: offer the free software map and ask for their name and number if you don't have it yet.
- Open your very first turn with a short greeting: introduce yourself as Found It's AI secretary, mention they can just talk to you like a person, and ask what kind of business they run.
`.trim();

/* Realtime function tool — the model emits structured lead data; the BROWSER
   executes it by POSTing /api/lead (see VoiceAgentWidget). */
const CAPTURE_LEAD_TOOL = {
  type: 'function',
  name: 'capture_lead',
  description:
    "Save the visitor's contact info as a lead for Trevor to follow up. Call ONLY after the visitor has confirmed their name and a phone number or email out loud.",
  parameters: {
    type: 'object',
    properties: {
      name: { type: 'string', description: "The visitor's name, as they confirmed it." },
      phone: { type: 'string', description: 'Phone number as digits, if given.' },
      email: { type: 'string', description: 'Email address, if given.' },
      businessName: { type: 'string', description: 'Their business name, if mentioned.' },
      industry: { type: 'string', description: 'Kind of business, e.g. "auto repair shop".' },
      notes: { type: 'string', description: 'One-sentence summary of what they asked about or need.' },
    },
    required: ['name'],
  },
} as const;

/**
 * POST /api/voice/session — mints a short-lived OpenAI Realtime client
 * secret so the browser can open a WebRTC call WITHOUT ever seeing the real
 * key. Missing key → clean 503 so the widget falls back to "line busy" and
 * the page never breaks.
 *
 * Guardrails (same in-memory pattern as /api/lead):
 *  - 3 sessions / 10 min per IP — a curious visitor can retry, a bot can't farm.
 *  - 40 sessions / hour per server instance — caps the cost blast radius even
 *    across many IPs.
 *  - The ephemeral token itself expires in 120s if the call never connects;
 *    call length is capped client-side at VOICE_SESSION_MAX_SECONDS.
 */
export async function POST(req: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Voice line unavailable.' }, { status: 503 });
  }

  if (!rateLimit(`voice:${clientIp(req)}`, 3, 10 * 60_000)) {
    return NextResponse.json({ error: 'Line busy — try again in a few minutes.' }, { status: 429 });
  }
  if (!rateLimit('voice:instance', 40, 60 * 60_000)) {
    return NextResponse.json({ error: 'Line busy — try again in a few minutes.' }, { status: 429 });
  }

  try {
    const res = await fetch('https://api.openai.com/v1/realtime/client_secrets', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        expires_after: { anchor: 'created_at', seconds: 120 },
        session: {
          type: 'realtime',
          model: REALTIME_MODEL,
          instructions: INSTRUCTIONS,
          audio: {
            input: {
              // Live "you said" captions in the widget.
              transcription: { model: 'gpt-4o-mini-transcribe' },
              // Field-tested 8/13, round 2: volume-based VAD was unfixable in
              // real rooms (0.5 heard ghosts, 0.85 went deaf). Semantic VAD
              // decides turns from what's being SAID — noise-robust by design.
              // eagerness=low: she waits until the caller actually finishes.
              noise_reduction: { type: 'near_field' },
              turn_detection: {
                type: 'semantic_vad',
                eagerness: 'low',
              },
            },
            output: { voice: REALTIME_VOICE },
          },
          tools: [CAPTURE_LEAD_TOOL],
          tool_choice: 'auto',
        },
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error(`[voice/session] OpenAI mint failed ${res.status}: ${detail.slice(0, 300)}`);
      return NextResponse.json({ error: 'Voice line unavailable.' }, { status: 502 });
    }

    const data = await res.json();
    return NextResponse.json({
      token: data.value,
      expiresAt: data.expires_at,
      model: REALTIME_MODEL,
      maxSeconds: VOICE_SESSION_MAX_SECONDS,
    });
  } catch (err) {
    console.error('[voice/session] mint error', err);
    return NextResponse.json({ error: 'Voice line unavailable.' }, { status: 502 });
  }
}
