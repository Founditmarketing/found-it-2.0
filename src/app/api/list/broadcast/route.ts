import { NextResponse } from 'next/server';

/**
 * List broadcast pipe — moves the "hey" campaign off personal Gmail and onto
 * Resend Broadcasts (verified domain, native unsubscribe, metrics).
 *
 * Why a route and not a local script: RESEND_API_KEY is a Sensitive env var on
 * Vercel (unreadable locally by design), so the only place the key exists is
 * this deployment. The route is a thin, authenticated proxy over three Resend
 * primitives — segments, contacts, broadcasts — driven from Trevor's shell.
 *
 * Auth: header `x-broadcast-secret` must equal LIST_BROADCAST_SECRET. If that
 * env var is missing the route refuses everything (503) — there is no
 * unauthenticated mode.
 *
 * Actions (JSON body, `action` field):
 *   segment   { name }                              → { segmentId }
 *   contacts  { segmentId, contacts: [{ email, first_name? }] }
 *                                                   → { created, skipped, failed: [{ email, error }] }
 *   broadcast { segmentId, subject, text, html?, name?, from?, replyTo?, scheduledAt? }
 *                                                   → { broadcastId, scheduled }
 *   cancel    { broadcastId }                       → Resend's response
 *   status    { broadcastId }                       → Resend's broadcast object
 *
 * Contacts are created one request at a time with a short pause — Resend's
 * default rate limit is 2 requests/second. Keep chunks at ≤100 per call so a
 * chunk finishes well inside the function's maxDuration.
 */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 300;

const RESEND = 'https://api.resend.com';
const DEFAULT_FROM = 'Trevor Ruby <trevor@founditmarketing.com>';
const DEFAULT_REPLY_TO = 'trevorruby@gmail.com';
const MAX_CONTACTS_PER_CALL = 100;
const CONTACT_PAUSE_MS = 550;

type Contact = { email: string; first_name?: string; last_name?: string };

function unauthorized() {
  return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
}

function authorized(req: Request): boolean {
  const secret = process.env.LIST_BROADCAST_SECRET;
  if (!secret) return false;
  const given = req.headers.get('x-broadcast-secret') || '';
  // Constant-time-ish compare; lengths differ → false without leaking timing on the prefix.
  if (given.length !== secret.length) return false;
  let diff = 0;
  for (let i = 0; i < secret.length; i++) diff |= given.charCodeAt(i) ^ secret.charCodeAt(i);
  return diff === 0;
}

async function resend(path: string, init: RequestInit & { json?: unknown } = {}) {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('RESEND_API_KEY missing on this deployment.');
  const { json, ...rest } = init;
  const res = await fetch(`${RESEND}${path}`, {
    ...rest,
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      ...(rest.headers || {}),
    },
    body: json !== undefined ? JSON.stringify(json) : rest.body,
    cache: 'no-store',
  });
  const text = await res.text();
  let data: unknown = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = { raw: text };
  }
  if (!res.ok) {
    let msg = `Resend ${res.status}`;
    if (data && typeof data === 'object' && 'message' in data) {
      const m = (data as { message?: unknown }).message;
      if (m) msg = String(m);
    }
    const err = new Error(msg) as Error & { status?: number; data?: unknown };
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data as Record<string, unknown>;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

export async function POST(req: Request) {
  if (!process.env.LIST_BROADCAST_SECRET) {
    return NextResponse.json({ error: 'Broadcast pipe not configured.' }, { status: 503 });
  }
  if (!authorized(req)) return unauthorized();

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'Bad JSON.' }, { status: 400 });
  }
  const action = String(body.action || '');

  try {
    if (action === 'segment') {
      const name = String(body.name || '').trim();
      if (!name) return NextResponse.json({ error: 'name required.' }, { status: 400 });
      const seg = await resend('/segments', { method: 'POST', json: { name } });
      return NextResponse.json({ segmentId: seg.id, name: seg.name });
    }

    if (action === 'contacts') {
      const segmentId = String(body.segmentId || '').trim();
      const raw = Array.isArray(body.contacts) ? (body.contacts as Contact[]) : [];
      if (!segmentId) return NextResponse.json({ error: 'segmentId required.' }, { status: 400 });
      if (!raw.length) return NextResponse.json({ error: 'contacts required.' }, { status: 400 });
      if (raw.length > MAX_CONTACTS_PER_CALL) {
        return NextResponse.json({ error: `Max ${MAX_CONTACTS_PER_CALL} contacts per call.` }, { status: 400 });
      }
      let created = 0;
      let skipped = 0;
      const failed: { email: string; error: string }[] = [];
      for (const c of raw) {
        const email = String(c?.email || '').trim().toLowerCase();
        if (!EMAIL_RE.test(email)) {
          skipped++;
          continue;
        }
        const payload: Record<string, unknown> = { email, segments: [{ id: segmentId }] };
        if (c.first_name) payload.first_name = String(c.first_name).slice(0, 80);
        if (c.last_name) payload.last_name = String(c.last_name).slice(0, 80);
        try {
          await resend('/contacts', { method: 'POST', json: payload });
          created++;
        } catch (e) {
          const err = e as Error & { status?: number };
          // 409 = already exists at the account level → attach to the segment instead.
          if (err.status === 409) {
            try {
              await resend(`/contacts/${encodeURIComponent(email)}/segments/${segmentId}`, { method: 'POST' });
              created++;
            } catch (e2) {
              failed.push({ email, error: (e2 as Error).message });
            }
          } else {
            failed.push({ email, error: err.message });
          }
        }
        await sleep(CONTACT_PAUSE_MS);
      }
      return NextResponse.json({ created, skipped, failed });
    }

    if (action === 'broadcast') {
      const segmentId = String(body.segmentId || '').trim();
      const subject = String(body.subject || '').trim();
      const text = String(body.text || '');
      const html = body.html ? String(body.html) : undefined;
      if (!segmentId || !subject || !text) {
        return NextResponse.json({ error: 'segmentId, subject, text required.' }, { status: 400 });
      }
      if (!text.includes('{{{RESEND_UNSUBSCRIBE_URL}}}')) {
        return NextResponse.json({ error: 'text must include {{{RESEND_UNSUBSCRIBE_URL}}}.' }, { status: 400 });
      }
      const created = await resend('/broadcasts', {
        method: 'POST',
        json: {
          segment_id: segmentId,
          from: String(body.from || DEFAULT_FROM),
          reply_to: String(body.replyTo || DEFAULT_REPLY_TO),
          subject,
          text,
          ...(html ? { html } : {}),
          name: String(body.name || subject),
        },
      });
      const broadcastId = String(created.id);
      const scheduledAt = body.scheduledAt ? String(body.scheduledAt) : undefined;
      const sent = await resend(`/broadcasts/${broadcastId}/send`, {
        method: 'POST',
        json: scheduledAt ? { scheduled_at: scheduledAt } : {},
      });
      return NextResponse.json({ broadcastId, scheduled: scheduledAt || 'now', send: sent });
    }

    if (action === 'send') {
      // One-to-one transactional sends (individually written bodies), paced
      // to Resend's 2 req/s. ≤50 per call so a chunk finishes inside maxDuration.
      const raw = Array.isArray(body.emails) ? (body.emails as { to: string; subject: string; text: string }[]) : [];
      if (!raw.length) return NextResponse.json({ error: 'emails required.' }, { status: 400 });
      if (raw.length > 50) return NextResponse.json({ error: 'Max 50 emails per call.' }, { status: 400 });
      const from = String(body.from || DEFAULT_FROM);
      const replyTo = String(body.replyTo || DEFAULT_REPLY_TO);
      const sent: { to: string; id: string }[] = [];
      const failed: { to: string; error: string }[] = [];
      for (const m of raw) {
        const to = String(m?.to || '').trim().toLowerCase();
        const subject = String(m?.subject || '').trim();
        const text = String(m?.text || '');
        if (!EMAIL_RE.test(to) || !subject || !text) {
          failed.push({ to, error: 'bad to/subject/text' });
          continue;
        }
        try {
          const r = await resend('/emails', { method: 'POST', json: { from, to: [to], reply_to: replyTo, subject, text } });
          sent.push({ to, id: String(r.id) });
        } catch (e) {
          failed.push({ to, error: (e as Error).message });
        }
        await sleep(CONTACT_PAUSE_MS);
      }
      return NextResponse.json({ sent, failed });
    }

    if (action === 'cancel') {
      const broadcastId = String(body.broadcastId || '').trim();
      if (!broadcastId) return NextResponse.json({ error: 'broadcastId required.' }, { status: 400 });
      const r = await resend(`/broadcasts/${broadcastId}/cancel`, { method: 'POST' });
      return NextResponse.json(r);
    }

    if (action === 'status') {
      const broadcastId = String(body.broadcastId || '').trim();
      if (!broadcastId) return NextResponse.json({ error: 'broadcastId required.' }, { status: 400 });
      const r = await resend(`/broadcasts/${broadcastId}`, { method: 'GET' });
      return NextResponse.json(r);
    }

    return NextResponse.json({ error: 'Unknown action.' }, { status: 400 });
  } catch (e) {
    const err = e as Error & { status?: number; data?: unknown };
    return NextResponse.json(
      { error: err.message || 'Resend call failed.', detail: err.data ?? null },
      { status: 502 },
    );
  }
}
