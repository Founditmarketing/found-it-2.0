'use client';

/* ─── VisitorCapture: the standing "leave your info" pill ───
   No auto-popup, ever (Trevor 8/11: big popups are lame). A small pill sits
   bottom-left on every page; tapping it opens the same two-field card, which
   posts to the existing /api/lead pipe (rate-limited, honeypotted server-side).
   Submit → thanks, then the pill retires for good (localStorage). Closing the
   card just collapses it back to the pill. */

import { useCallback, useEffect, useState } from 'react';
import { PhoneCall, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const KEY = 'fi_capture_v1'; // { done?: true } — legacy snoozeUntil keys are ignored

function readState(): { done?: boolean } {
  try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { return {}; }
}
function writeState(v: { done?: boolean }) {
  try { localStorage.setItem(KEY, JSON.stringify(v)); } catch { /* private mode */ }
}

const looksLikeEmail = (v: string) => /.+@.+\..+/.test(v);

export function VisitorCapture() {
  const [ready, setReady] = useState(false); // avoids SSR/localStorage mismatch
  const [done, setDone] = useState(false);
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [hp, setHp] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    setDone(Boolean(readState().done));
    setReady(true);
  }, []);

  const submit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const who = contact.trim();
    if (!name.trim() || !who) { setError('Both fields, real quick.'); return; }
    setBusy(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'site_visitor_capture',
          name: name.trim(),
          ...(looksLikeEmail(who) ? { email: who } : { phone: who }),
          message: `Call-back pill · page: ${pathname}`,
          hp,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSent(true);
      writeState({ done: true });
      window.setTimeout(() => { setOpen(false); setDone(true); }, 2600);
    } catch {
      setError("Didn't go through — mind trying once more?");
    } finally {
      setBusy(false);
    }
  }, [name, contact, hp, pathname]);

  if (!ready || done) return null;

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        aria-expanded={false}
        aria-label="Get a call back — leave your name and number"
        className="fixed bottom-4 left-4 z-[70] inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2.5 text-xs font-black uppercase tracking-tight shadow-lg shadow-black/40 hover:opacity-90 transition-opacity"
      >
        <PhoneCall className="w-3.5 h-3.5" aria-hidden="true" />
        Get a call back
      </button>
    );
  }

  return (
    <div
      className="fixed bottom-4 left-4 z-[70] w-[calc(100vw-2rem)] max-w-sm rounded-2xl border border-border bg-background shadow-2xl p-5 animate-in slide-in-from-bottom-4 fade-in duration-300"
      role="dialog"
      aria-label="Get a call back"
    >
      <button
        onClick={() => setOpen(false)}
        aria-label="Close"
        className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
      >
        <X className="w-4 h-4" />
      </button>

      {sent ? (
        <p className="text-sm font-bold text-foreground pr-6">
          Got it — a real person (Trevor) will say hi. 👋
        </p>
      ) : (
        <>
          <p className="text-sm font-black uppercase tracking-tight text-foreground pr-6">
            Real quick — who are we talking to?
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Leave a name and an email or number and a real person will say hi. No spam, ever.
          </p>
          <form onSubmit={submit} className="mt-3 space-y-2">
            {/* honeypot — humans never see it */}
            <input
              type="text"
              value={hp}
              onChange={(e) => setHp(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Email or phone"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {error && <p className="text-xs font-bold text-destructive">{error}</p>}
            <button
              type="submit"
              disabled={busy}
              className="w-full rounded-lg bg-primary text-primary-foreground font-black uppercase tracking-tight text-sm py-2 hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {busy ? 'Sending…' : "That's me"}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
