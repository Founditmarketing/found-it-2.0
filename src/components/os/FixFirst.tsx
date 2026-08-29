'use client';

/* ─── FixFirst: "What Would Yours Fix First?" made personal ───
   Trevor 8/28: "maybe they could tell us what type of business they have and
   we could generate something for them to think about." The three static
   doors stay as the default; type a business and the machine that builds
   the software writes three fixes for THAT business, live. The generation
   is the demo — same play as Ask It, but about the visitor. */

import { useState } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { trackCTAClick } from '@/lib/analytics';

type Fix = { label: string; detail: string };

const DEFAULT_CARDS = [
  { label: 'Money you’re owed', detail: 'and can’t see', href: '#proof' },
  { label: 'Work falling through the cracks', detail: 'quotes, follow-ups, reorders', href: '#reel' },
  { label: 'Too many systems', detail: 'none of them talking', href: '#foundit-os' },
];

export function FixFirst() {
  const [business, setBusiness] = useState('');
  const [phase, setPhase] = useState<'idle' | 'thinking' | 'done'>('idle');
  const [fixes, setFixes] = useState<Fix[] | null>(null);
  const [close, setClose] = useState('');
  const [note, setNote] = useState('');

  async function generate() {
    const what = business.trim();
    if (what.length < 3 || phase === 'thinking') return;
    setPhase('thinking');
    setNote('');
    trackCTAClick('fix_first_generate');
    try {
      const r = await fetch('/api/fix-first', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ business: what }),
      });
      if (!r.ok) throw new Error(String(r.status));
      const data = await r.json();
      if (data.ok && Array.isArray(data.fixes) && data.fixes.length === 3) {
        setFixes(data.fixes);
        setClose(String(data.close || ''));
        setPhase('done');
      } else {
        // Not a business (or the model declined) — keep the doors, nudge plainly.
        setNote(data.close || 'Tell me what you actually run and I’ll take a real swing.');
        setPhase('idle');
      }
    } catch {
      setNote('Couldn’t reach the machine just now. The three below are the usual suspects.');
      setPhase('idle');
    }
  }

  function reset() {
    setFixes(null);
    setClose('');
    setNote('');
    setBusiness('');
    setPhase('idle');
  }

  const showGenerated = phase === 'done' && fixes;

  return (
    <div className="opacity-0 animate-reveal-up delay-400">
      <p className="text-center text-sm font-black uppercase tracking-[0.25em] text-primary mb-5">
        What Would Yours Fix First?
      </p>

      {/* The ask: their business, their answer. */}
      <form
        onSubmit={(e) => { e.preventDefault(); generate(); }}
        className="flex flex-col sm:flex-row gap-2 max-w-xl mx-auto mb-5"
      >
        <input
          type="text"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          maxLength={80}
          placeholder="Tell it what you run. Tire shop, plant nursery, roofing crew…"
          aria-label="What kind of business do you run?"
          className="flex-1 h-12 rounded-full bg-card/10 border border-border/15 px-5 text-sm font-medium text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/50"
        />
        <button
          type="submit"
          disabled={phase === 'thinking' || business.trim().length < 3}
          className="h-12 px-6 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-xs disabled:opacity-40 hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          {phase === 'thinking' ? 'Sizing it up…' : 'Show me mine'}
        </button>
      </form>
      {note && (
        <p className="text-center text-xs text-muted-foreground font-medium mb-4">{note}</p>
      )}

      {showGenerated ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {fixes!.map((f, i) => (
              <Link
                key={i}
                href="/map"
                className="group bg-card/10 border border-primary/30 rounded-2xl px-6 py-5 text-center hover:border-primary/60 transition-colors"
              >
                <p className="text-sm font-black text-foreground leading-snug">{f.label}</p>
                <p className="text-xs text-muted-foreground font-medium mt-1">{f.detail}</p>
                <p className="text-xs text-primary font-bold mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Show me <ArrowRight className="w-3 h-3" />
                </p>
              </Link>
            ))}
          </div>
          {close && (
            <p className="text-center text-sm text-white/80 font-medium max-w-xl mx-auto mt-5 leading-relaxed">
              {close}
            </p>
          )}
          <div className="flex items-center justify-center gap-5 mt-4">
            <Link
              href="/map"
              className="text-xs font-black uppercase tracking-wider text-primary inline-flex items-center gap-1 hover:gap-2 transition-all"
              onClick={() => trackCTAClick('fix_first_map')}
            >
              Show Me What You’d Build <ArrowRight className="w-3 h-3" />
            </Link>
            <button
              type="button"
              onClick={reset}
              className="text-xs font-bold text-muted-foreground inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <RotateCcw className="w-3 h-3" /> Try another
            </button>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {DEFAULT_CARDS.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="group bg-card/10 border border-border/15 rounded-2xl px-6 py-5 text-center hover:border-primary/40 transition-colors"
            >
              <p className="text-sm font-black text-foreground leading-snug">{c.label}</p>
              <p className="text-xs text-muted-foreground font-medium mt-1">{c.detail}</p>
              <p className="text-xs text-primary font-bold mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Show me <ArrowRight className="w-3 h-3" />
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
