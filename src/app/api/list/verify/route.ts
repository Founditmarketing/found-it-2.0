import { NextResponse } from 'next/server';
import { rateLimit, clientIp } from '@/lib/server/guards';

/* /list gate — SMS one-time code via Twilio Verify.

   Two actions over JSON POST:
     { action: 'start', phone }        → texts a 6-digit code to the cell
     { action: 'check', phone, code }  → confirms the code

   Twilio Verify sends from Twilio's own pre-registered channels, so it is
   NOT blocked by the 10DLC/A2P registration the marketing number lacks.
   The REST API is called directly with fetch — no SDK dependency.

   DEGRADATION: if TWILIO_ACCOUNT_SID / TWILIO_AUTH_TOKEN /
   TWILIO_VERIFY_SERVICE_SID are not all set, BOTH actions answer
   { ok: true, skipped: true } and the gate falls back to the cell-only
   behavior it had before verification existed — nothing is texted, nothing
   is verified, the lead still posts to /api/lead without the verified note.

   Never logs the phone or the code. */

export const runtime = 'nodejs';
export const maxDuration = 15;

const TWILIO_VERIFY = 'https://verify.twilio.com/v2/Services';

/* Rate limits — best-effort, in-memory, per server instance (see guards.ts):
     start: 3 per phone / 10 min, 8 per IP / 10 min
     check: 5 tries per code (fresh budget on every new code), 20 per IP / 10 min
   Twilio enforces its own ceilings on top (5 sends and 5 checks per
   verification); ours just keep a bot from running up the SMS bill. */
const TEN_MIN = 10 * 60_000;
const START_PER_PHONE = 3;
const START_PER_IP = 8;
const CHECKS_PER_CODE = 5;
const CHECKS_PER_IP = 20;

/** Wrong-code tries per phone for the current code. Cleared whenever a new
    code goes out; entries expire with the code (Twilio's default TTL is
    10 minutes). Returns false once the budget for this code is spent. */
const checkTries = new Map<string, { n: number; exp: number }>();

function bumpCheckTries(phone: string): boolean {
  const now = Date.now();
  const cur = checkTries.get(phone);
  const entry = cur && cur.exp > now ? cur : { n: 0, exp: now + TEN_MIN };
  entry.n += 1;
  checkTries.set(phone, entry);
  if (checkTries.size > 5000) {
    for (const [k, v] of checkTries) if (v.exp <= now) checkTries.delete(k);
  }
  return entry.n <= CHECKS_PER_CODE;
}

/** E.164 for a US cell: ten digits, or eleven with a leading 1. Area code
    and exchange can't start with 0 or 1 (NANP), which drops the obvious
    fakes before they cost a Twilio call. */
function toE164(raw: unknown): string | null {
  if (typeof raw !== 'string') return null;
  let d = raw.replace(/\D/g, '');
  if (d.length === 11 && d.startsWith('1')) d = d.slice(1);
  if (d.length !== 10) return null;
  if (/^[01]/.test(d) || /^[01]/.test(d.slice(3))) return null;
  return `+1${d}`;
}

type TwilioEnv = { sid: string; token: string; service: string };

function twilioEnv(): TwilioEnv | null {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const service = process.env.TWILIO_VERIFY_SERVICE_SID;
  return sid && token && service ? { sid, token, service } : null;
}

type TwilioReply = {
  status: number;
  body: { status?: string; code?: number; message?: string };
};

async function twilio(
  env: TwilioEnv,
  path: 'Verifications' | 'VerificationCheck',
  form: Record<string, string>,
): Promise<TwilioReply> {
  const res = await fetch(`${TWILIO_VERIFY}/${env.service}/${path}`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${env.sid}:${env.token}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(form).toString(),
    cache: 'no-store',
  });
  const body = (await res.json().catch(() => ({}))) as TwilioReply['body'];
  return { status: res.status, body };
}

type Failure = { error: string; status: number };

/** Plain-English reasons a send didn't go out. Twilio error codes:
    https://www.twilio.com/docs/api/errors (60200-series = Verify). */
function startFailure(r: TwilioReply): Failure {
  switch (r.body.code) {
    case 60200:
      return { error: "That doesn't look like a number we can text.", status: 400 };
    case 60205:
      return { error: "That number can't receive texts — use your cell.", status: 400 };
    case 60203:
      return { error: 'Too many codes sent to that number. Give it a few minutes.', status: 429 };
    case 60212:
      return { error: 'Hang on — a code is already on its way.', status: 429 };
    default:
      console.error('[list/verify] start failed', r.status, r.body.code);
      return { error: "Couldn't send the code right now.", status: r.status === 429 ? 429 : 502 };
  }
}

function checkFailure(r: TwilioReply): Failure {
  // A wrong code is an HTTP 200 with status "pending" — not an error to Twilio.
  if (r.status === 200) {
    return { error: "That code isn't right. Check the text and try again.", status: 400 };
  }
  switch (r.body.code) {
    case 20404:
      return { error: 'That code expired. Send a new one.', status: 400 };
    case 60202:
      return { error: 'Too many tries. Send a new code and try again.', status: 429 };
    default:
      console.error('[list/verify] check failed', r.status, r.body.code);
      return { error: "Couldn't check the code right now.", status: r.status === 429 ? 429 : 502 };
  }
}

function fail({ error, status }: Failure) {
  return NextResponse.json({ ok: false, error }, { status });
}

function ok(extra?: Record<string, unknown>) {
  return NextResponse.json({ ok: true, ...extra });
}

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return fail({ error: 'Bad request.', status: 400 });
  }
  const b = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>;
  const action = b.action;
  if (action !== 'start' && action !== 'check') {
    return fail({ error: 'Bad request.', status: 400 });
  }

  // Honeypot tripped (same hidden field the gate sends to /api/lead): answer
  // like success and text nothing. /api/lead swallows the lead on its side
  // the same way, so the bot "unlocks" a page and nobody gets a text.
  if (typeof b.hp === 'string' && b.hp) return ok();

  const phone = toE164(b.phone);
  if (!phone) {
    return fail({ error: "That doesn't look like a US cell — ten digits, please.", status: 400 });
  }

  // No Twilio env → degrade to the cell-only gate. See header comment.
  const env = twilioEnv();
  if (!env) return ok({ skipped: true });

  const ip = clientIp(req);

  if (action === 'start') {
    if (
      !rateLimit(`verify-start:ip:${ip}`, START_PER_IP, TEN_MIN) ||
      !rateLimit(`verify-start:phone:${phone}`, START_PER_PHONE, TEN_MIN)
    ) {
      return fail({ error: 'Too many codes sent. Give it a few minutes and try again.', status: 429 });
    }
    try {
      const r = await twilio(env, 'Verifications', { To: phone, Channel: 'sms' });
      if (r.status === 201 || r.status === 200) {
        checkTries.delete(phone); // fresh code, fresh budget
        return ok();
      }
      return fail(startFailure(r));
    } catch {
      return fail({ error: "Couldn't send the code right now.", status: 502 });
    }
  }

  // action === 'check'. The UI asks for 6 digits; Twilio services can be set
  // to 4–10, so the server stays tolerant of the service config.
  const code = typeof b.code === 'string' ? b.code.replace(/\D/g, '') : '';
  if (code.length < 4 || code.length > 10) {
    return fail({ error: 'Enter the 6-digit code from the text.', status: 400 });
  }
  if (!rateLimit(`verify-check:ip:${ip}`, CHECKS_PER_IP, TEN_MIN) || !bumpCheckTries(phone)) {
    return fail({ error: 'Too many tries. Send a new code and try again.', status: 429 });
  }
  try {
    const r = await twilio(env, 'VerificationCheck', { To: phone, Code: code });
    if (r.status === 200 && r.body.status === 'approved') {
      checkTries.delete(phone);
      return ok();
    }
    return fail(checkFailure(r));
  } catch {
    return fail({ error: "Couldn't check the code right now.", status: 502 });
  }
}
