'use client';

/* ─── VisitorCapture: the polite "who are we talking to?" card ───
   Slides up bottom-right after the visitor has actually engaged (9 seconds or
   35% scroll, whichever first). One name field, one email-or-phone field, posts
   to the existing /api/lead pipe (rate-limited, honeypotted server-side).
   Frequency rules: submit → never shown again; dismiss → snoozed 7 days.
   Deliberately NOT a gate — the site stays fully usable behind it. */

import { useCallback, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const KEY = 'fi_capture_v1'; // { done?: true, snoozeUntil?: epoch-ms }

function readState(): { done?: boolean; snoozeUntil?: number } {
  try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { return {}; }
}
function writeState(v: { done?: boolean; snoozeUntil?: number }) {
  try { localStorage.setItem(KEY, JSON.stringify(v)); } catch { /* private mode */ }
}

const looksLikeEmail = (v: string) => /.+@.+\..+/.test(v);

export function VisitorCapture() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [hp, setHp] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const st = readState();
    if (st.done || (st.snoozeUntil && Date.now() < st.snoozeUntil)) return;
    // NOTE: no cross-mount "armed" ref here — React StrictMode double-runs effects in dev,
    // and a ref that survives the first cleanup permanently disarms the second mount.
    // The effect's own cleanup is the correct guard.
    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      setOpen(true);
      window.removeEventListener('scroll', onScroll);
    };
    const timer = window.setTimeout(show, 9000);
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max > 0.35) show();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.clearTimeout(timer); window.removeEventListener('scroll', onScroll); };
  }, []);

  const dismiss = useCallback(() => {
    setOpen(false);
    writeState({ snoozeUntil: Date.now() + 7 * 24 * 3600 * 1000 });
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
          message: `Visitor capture card · page: ${pathname}`,
          hp,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSent(true);
      writeState({ done: true });
      window.setTimeout(() => setOpen(false), 2600);
    } catch {
      setError("Didn't go through — mind trying once more?");
    } finally {
      setBusy(false);
    }
  }, [name, contact, hp, pathname]);

  if (!open) return null;

  return (
    <div
      className="fixed bottom-4 right-4 z-[70] w-[calc(100vw-2rem)] max-w-sm rounded-2xl border border-border bg-background shadow-2xl p-5 animate-in slide-in-from-bottom-4 fade-in duration-300"
      role="dialog"
      aria-label="Say hello"
    >
      <button
        onClick={dismiss}
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
