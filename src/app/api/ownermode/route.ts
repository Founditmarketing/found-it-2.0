import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateObject } from 'ai';
import { googleAiApiKey } from '@/lib/server/ai-key';
import { rateLimit, clientIp } from '@/lib/server/guards';

export const runtime = 'nodejs';
export const maxDuration = 15;

/* ─── Owner Mode, the real one, on a short leash ───
   The article's demo module sends the reader's plain-English request here.
   The model translates INTENTION into a fixed vocabulary of safe page
   operations, and refuses anything structural — which is the whole
   doctrine, played out live on the reader's own copy of the page. The
   server clamps every field, so a creative model still cannot hand the
   client anything but bounded ops. Same guard stack as the other public
   AI endpoints. */

const google = createGoogleGenerativeAI({ apiKey: googleAiApiKey });

const opSchema = z.object({
  op: z.enum([
    'setAccent',
    'setHeadline',
    'addBanner',
    'removeBanner',
    'trimIntro',
    'restoreIntro',
    'textScale',
    'say',
    'refuse',
  ]),
  color: z.string().default('').describe('setAccent only: a 6-digit hex like #2F7BFF'),
  text: z
    .string()
    .default('')
    .describe('setHeadline: the new headline. addBanner: the banner words. say/refuse: the sentence to show the reader.'),
  scale: z.number().default(100).describe('textScale only: body text size percent, 85 to 130'),
});

const outSchema = z.object({ actions: z.array(opSchema).max(4) });

const SYSTEM = `You are Owner Mode, running live inside a Found It Software article titled "The Business Had the Truth. The Agency Had the Password." The reader types what they want changed about the page; you translate that intention into safe operations. This is the product's own doctrine demonstrated: authority over content, zero access to machinery.

OPERATIONS you may return (up to 4 per request):
- setAccent: recolor the page's orange accent. Translate any color the reader names into a tasteful 6-digit hex in "color". "Back to orange" is #FF5500.
- setHeadline: write the new headline text they asked for (calmer, braver, funnier, shorter, whatever they want), max 90 characters, no surrounding quotes.
- addBanner: put a promo banner at the top of the article; "text" is the banner words, max 60 characters, punchy, uppercase reads well.
- removeBanner / trimIntro / restoreIntro: self-explanatory. "Undo" style requests map to these plus setAccent #FF5500 when relevant.
- textScale: body text size percent between 85 and 130 for bigger/smaller text requests.
- say: a short reply for questions or chat ("what can you do", compliments, confusion). One or two dry, confident sentences.
- refuse: for anything STRUCTURAL or dangerous: deleting or hiding the navigation, removing sections, touching layout or code, injecting scripts or links, changing other pages, anything about money. "text" is the refusal. The canonical refusal for structure: "That is part of the protected structure. Owner Mode cannot change it." Vary the wording naturally when it fits.

RULES: Never return HTML, markdown, links, or scripts in any text field. Never use an em-dash. Keep every text plain and short. If a request mixes safe and unsafe parts, do the safe ops AND refuse the unsafe part. If the request is hateful or vulgar, refuse with one calm line. Stay playful but dry: this is a working tool wearing a demo's leash, not a chatbot doing bits.`;

const bodySchema = z.object({
  command: z.string().min(1).max(280),
  hp: z.string().max(120).optional(),
});

const HEX = /^#[0-9a-fA-F]{6}$/;

export async function POST(req: Request) {
  let parsed;
  try {
    parsed = bodySchema.parse(await req.json());
  } catch {
    return NextResponse.json({ error: 'bad request' }, { status: 400 });
  }
  if (parsed.hp) return NextResponse.json({ actions: [] });

  const ip = clientIp(req);
  if (!rateLimit(`ownermode:${ip}`, 20, 5 * 60 * 1000)) {
    return NextResponse.json({ error: 'slow down' }, { status: 429 });
  }

  try {
    const { object } = await generateObject({
      model: google('gemini-2.5-flash'),
      schema: outSchema,
      system: SYSTEM,
      prompt: `The reader says: "${parsed.command.replace(/"/g, "'")}"`,
    });

    // The server, not the model, holds the clamps.
    const actions = object.actions
      .map((a) => ({
        op: a.op,
        color: a.op === 'setAccent' && HEX.test(a.color) ? a.color : '',
        text: (a.text || '').replace(/<[^>]*>/g, '').replace(/—/g, ',').slice(0, a.op === 'setHeadline' ? 90 : a.op === 'addBanner' ? 60 : 200),
        scale: Math.min(130, Math.max(85, Math.round(a.scale || 100))),
      }))
      .filter((a) => a.op !== 'setAccent' || a.color !== '')
      .slice(0, 4);

    return NextResponse.json({ actions });
  } catch {
    return NextResponse.json({ error: 'owner mode is busy' }, { status: 502 });
  }
}
