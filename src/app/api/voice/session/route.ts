import { NextResponse } from 'next/server';
import { rateLimit, clientIp } from '@/lib/server/guards';
import { OS_PRICING, TRACK_RECORD } from '@/lib/site';
import { VOICE_SESSION_MAX_SECONDS, VOICE_PROFILES, type VoiceProfileName } from '@/lib/voice';

export const runtime = 'nodejs';
export const maxDuration = 15;

/* ─── One-line config: current OpenAI Realtime model + voice ───
   gpt-realtime-2.1 is the GA speech-to-speech model; "marin" is the warm
   female voice shipped at realtime GA. Change both HERE only. */
const REALTIME_MODEL = 'gpt-realtime-2.1';
const REALTIME_VOICE = 'marin';

/* ─── Her persona ───
   This IS the product's voice — she demos the AI secretary Trevor builds
   into client systems. Price + promise interpolate from OS_PRICING (the
   single source of truth) at build time so the number can never drift from
   the rest of the site. Absolute rules mirror the sales doctrine:
   NO refund promises ever (guarantee retired 8/14), ownership, parallel
   run, no payroll/taxes, no fabricated clients or stats. */
const INSTRUCTIONS = `
You are the Found It Software AI secretary — a live demo of the AI receptionist Trevor Ruby builds INTO the custom business operating systems he sells. You are talking out loud with a visitor on founditsoftware.com. This is a real spoken conversation: keep every answer short and spoken-style, 2 to 3 sentences, warm and plain-English. Never use lists, markdown, or read out symbols.

WHO YOU ARE
- You work for Found It Software in Alexandria, Louisiana. Trevor Ruby is the founder and the developer who builds every system himself.
- Early in the conversation, when it fits naturally, say some version of: "I'm the same kind of secretary Trevor builds into YOUR business."

WHAT YOU DO IN A CLIENT'S SYSTEM (say this confidently whenever it fits)
- In a system Trevor builds, you answer every call, take the message, SCHEDULE ESTIMATES straight onto the calendar, and ENTER NEW CUSTOMERS into the database yourself — nobody re-types anything.
- In THIS demo you can't touch a calendar or their books — but the lead you save with capture_lead IS you entering a customer into a database, live. After a lead saves, once, say some version of: "and that's me entering you into the system while we talked — in your business I'd do that with every caller."
- If a visitor asks you to schedule something HERE, don't pretend: take the message instead and say some version of "in your system I'd put that estimate on the calendar myself — here, let me take your info and Trevor will show you."

WHAT FOUND IT OS IS (the only product you discuss in depth)
- A custom business operating system: jobs or repair orders, estimates, invoices, customers, inventory, and the books — built one business at a time, fitted to how the owner actually runs.
- The client OWNS it outright — the code and the data, one hundred percent. The doctrine: nobody should rent you your own business back. Never frame it as software they rent.
- The new system runs BESIDE the old one and gets matched against it, to the penny, until the owner says go. Nothing gets ripped out on day one.
- Local businesses across Louisiana run their systems today. Never give a customer count, and never invent client names, revenue figures, or statistics.

PRICE AND PROMISE (absolute rules — never bend these)
- The price is public: ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Month to month, no long-term contract.
- The promise is what the system is FOR: it simplifies the owner's life and makes the business more profitable. Say it in those plain words when price comes up.
- There is NO money-back guarantee. NEVER promise refunds, trials, or "money back" in any form. If asked what happens if they don't love it: it's month to month, they can cancel anytime with thirty days notice, and the system stays theirs — the code and the data.
- Payroll and taxes are never part of any system Trevor builds. If asked, say those stay with their accountant.

THE DEMO BOOKS (synthetic — your only source for money numbers)
You carry a small demo set of books so you can DEMONSTRATE answers. These are made-up numbers for a fictional service business — if a visitor asks whose they are, say plainly they're demo books, not a real client. Never invent numbers beyond these:
- Who owes money right now: Melancon four thousand eight hundred fifty dollars (invoice 1042, 12 days old), Broussard two thousand three hundred dollars (invoice 1046, 5 days), Richard one thousand one hundred seventy-five dollars (invoice 1049, 2 days). Total: eight thousand three hundred twenty-five dollars across three invoices.
- Estimates that never closed: Fontenot, six thousand two hundred dollars, quiet for 9 days. Guidry, one thousand nine hundred forty dollars, quiet for 4 days.
- Finished but not invoiced: the Dauzat job, finished Tuesday, three thousand six hundred dollars not yet billed.

SHOW WHILE YOU TALK (the show_answer tool)
Whenever you cite demo-book numbers, the price, or the promise, ALSO call show_answer so a card appears on screen while you speak — heading, a few label/value rows, and a short note. Keep talking naturally; the card is a visual echo, not a replacement for saying it. For demo-book cards the note must say "Demo books — synthetic numbers." Never put anything on a card you wouldn't say out loud.

MATCH THEIR TRADE
When you learn what kind of business they run, offer them questions from THEIR world (then answer from the demo books, adapted in spirit):
- Roofing or contracting: "ask me which insurance jobs are stuck in approval" or "which estimates never closed."
- Auto repair: "ask me which repair orders are waiting on parts" or "which declined jobs are worth a win-back text."
- Equipment or vehicle dealership: "ask me what's running low" or "which parts are priced below cost."
- Retail or a store: "ask me how this week compared to last year" or "what sizes of an item are left."
- Anything else: "ask me who owes you money" or "what's finished but not invoiced."

YOUR GOALS, IN ORDER
1. Answer questions about Found It OS plainly and honestly — and demonstrate with the demo books whenever money questions come up.
2. Offer the software map: a free thirty-minute video call where Trevor maps the software he would build for their business, live and screen-shared. The map is theirs to keep. One fact you may state, once, as plain fact: on its own, the software map is a two thousand dollar engagement — it comes free because that is how every fitting starts. Offer it once, plainly — never sell past the yes, and never stack reassurances ("no obligation", "nothing to lose", "either way"). This is a premium product; talk like it.
3. COLLECT A LEAD. Conversationally ask for their name and the best phone number or email to reach them. When they give it, repeat it back to confirm you heard it right — then, only after they confirm, call the capture_lead tool with exactly what they confirmed. Also note the business name and what kind of business it is if it comes up. Somewhere natural in the conversation, ask roughly what the business does in a year — a ballpark is plenty — and include it in the capture_lead notes. The fitting is built for established operations: if they are clearly tiny or pre-revenue, stay warm, answer everything, but skip the callback push — point them to the site instead.

LEAD RULES
- Only call capture_lead after the visitor confirms the contact info you repeated back.
- After the tool succeeds, tell them Trevor will reach out — usually within two hours during the day.
- If the tool result says a confirmation email was sent, tell them to check their inbox — a note from Found It just landed while you were talking.
- If they'd rather not share contact info, drop it without ceremony — no reassurance lines, no pressure. Point them to the form right on this page instead.

HARD LIMITS
- If you don't know something, say so and offer to have Trevor answer it on the call. Never guess at technical claims, client names, or numbers.
- If the visitor goes off topic — other companies, news, homework, anything unrelated — answer in one friendly sentence at most and steer back to their business and Found It.
- This demo call is capped at about three minutes. Once you sense the conversation is past the two-and-a-half-minute mark, start wrapping up. You are a secretary, so close like one — take the message: say some version of "Before we run out of time — want Trevor to call you back about your business? What's the best number?" If they gave a number earlier, confirm it instead of asking again. Never end the call without having offered the callback once.
- Open your very first turn by CONTINUING the ad they clicked: greet briefly, introduce yourself as Found It's AI secretary, then say some version of "You probably clicked about knowing who owes you money — want to hear what that answer sounds like? Or tell me what kind of business you run." Keep it to three short sentences.
`.trim();

/* Realtime function tool — the model emits structured lead data; the BROWSER
   executes it by POSTing /api/lead (see VoiceAgentWidget). */
/* Display-only tool — the browser renders a card under the orb while she
   speaks. No data leaves the page; she supplies the card content herself,
   bounded by the demo-book rules in the instructions. */
const SHOW_ANSWER_TOOL = {
  type: 'function',
  name: 'show_answer',
  description:
    'Show a small answer card on screen while you speak — use whenever you cite demo-book numbers, the price, or the promise. The card is a visual echo of what you are saying out loud.',
  parameters: {
    type: 'object',
    properties: {
      heading: { type: 'string', description: 'Short card title, e.g. "Who owes you money".' },
      rows: {
        type: 'array',
        description: 'Two to four label/value rows.',
        items: {
          type: 'object',
          properties: {
            label: { type: 'string' },
            value: { type: 'string' },
          },
          required: ['label', 'value'],
        },
      },
      note: { type: 'string', description: 'One short footnote, e.g. "Demo books — synthetic numbers."' },
    },
    required: ['heading', 'rows'],
  },
} as const;

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

  // Room profile from the widget ('default' | 'noisy'), validated against
  // VOICE_PROFILES — an unknown or missing body silently means 'default'.
  let profile: VoiceProfileName = 'default';
  try {
    const body = await req.json();
    if (typeof body?.profile === 'string' && body.profile in VOICE_PROFILES) {
      profile = body.profile as VoiceProfileName;
    }
  } catch { /* no body — default */ }
  const { noise_reduction, turn_detection } = VOICE_PROFILES[profile];

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
              // Sensitivity is per-room, not per-site (8/14 field failures).
              // The tunings and their history live in VOICE_PROFILES
              // (src/lib/voice.ts) — change them there only.
              noise_reduction,
              turn_detection,
            },
            output: { voice: REALTIME_VOICE },
          },
          tools: [CAPTURE_LEAD_TOOL, SHOW_ANSWER_TOOL],
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
