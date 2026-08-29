'use client';

/* ─── FixFirst: "What Would Yours Fix First?" made personal ───
   Trevor 8/28: "maybe they could tell us what type of business they have and
   we could generate something for them to think about." The three static
   doors stay as the default; type a business and the machine that builds
   the software writes three fixes for THAT business, live. The generation
   is the demo — same play as Ask It, but about the visitor.
   Polish pass 8/28: the input is the hero's second focal object — one joined
   command pill, button inside; generated cards stagger in; the doors carry
   less repeated chrome. */

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
      <p className="text-center text-sm font-black uppercase tracking-[0.25em] text-primary">
        What Would Yours Fix First?
      </p>
      <p className="text-center text-sm text-muted-foreground font-medium mt-2 mb-6">
        Tell it what you run. It writes what yours would fix.
      </p>

      {/* The ask: one joined command pill — input and trigger share the object. */}
      <form
        onSubmit={(e) => { e.preventDefault(); generate(); }}
        className="max-w-xl mx-auto mb-8"
      >
        <div
          className={`flex items-center gap-1 rounded-full border bg-white/[0.03] p-1.5 pl-5 transition-colors ${
            phase === 'thinking' ? 'border-primary/50' : 'border-border/20 focus-within:border-primary/50'
          }`}
        >
          <input
            type="text"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            maxLength={80}
            placeholder="Tire shop, plant nursery, roofing crew…"
            aria-label="What kind of business do you run?"
            className="flex-1 min-w-0 h-10 bg-transparent text-sm font-medium text-foreground placeholder:text-muted-foreground caret-[#FF5500] selection:bg-primary/30 focus:outline-none"
          />
          <button
            type="submit"
            disabled={phase === 'thinking' || business.trim().length < 3}
            className="h-10 px-5 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-xs disabled:opacity-40 hover:opacity-90 transition-opacity whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {phase === 'thinking' ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-3 h-3 rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground animate-spin" />
                Sizing it up
              </span>
            ) : (
              'Show me mine'
            )}
          </button>
        </div>
        {note && (
          <p className="text-center text-xs text-muted-foreground font-medium mt-3">{note}</p>
        )}
      </form>

      {showGenerated ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {fixes!.map((f, i) => (
              <Link
                key={i}
                href="/map"
                style={{ animationDelay: `${i * 120}ms` }}
                className="opacity-0 animate-reveal-up group bg-card/10 border border-primary/30 rounded-2xl px-6 py-6 text-center hover:border-primary/60 hover:bg-primary/[0.04] transition-colors flex flex-col justify-between"
              >
                <div>
                  <p className="text-sm font-black text-foreground leading-snug">{f.label}</p>
                  <p className="text-xs text-muted-foreground font-medium mt-1.5 leading-relaxed">{f.detail}</p>
                </div>
                <p className="text-[11px] text-primary font-bold uppercase tracking-wider mt-4 inline-flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                  Show me <ArrowRight className="w-3 h-3" />
                </p>
              </Link>
            ))}
          </div>
          {close && (
            <p className="opacity-0 animate-reveal-up delay-300 text-center text-sm text-white/80 font-medium max-w-xl mx-auto mt-6 leading-relaxed">
              {close}
            </p>
          )}
          <div className="opacity-0 animate-reveal-up delay-400 flex items-center justify-center gap-6 mt-5">
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
              className="group bg-card/10 border border-border/15 rounded-2xl px-6 py-6 text-center hover:border-primary/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <p className="text-sm font-black text-foreground leading-snug">{c.label}</p>
                <p className="text-xs text-muted-foreground font-medium mt-1.5 leading-relaxed">{c.detail}</p>
              </div>
              <p className="text-[11px] text-primary/80 font-bold uppercase tracking-wider mt-4 inline-flex items-center justify-center gap-1 opacity-70 group-hover:opacity-100 group-hover:gap-2 transition-all">
                Show me <ArrowRight className="w-3 h-3" />
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
