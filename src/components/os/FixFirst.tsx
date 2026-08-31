'use client';

/* ─── FixFirst: "What Would Yours Fix First?" made personal ───
   Trevor 8/28: "maybe they could tell us what type of business they have and
   we could generate something for them to think about." The three static
   doors stay as the default; type a business and the machine that builds
   the software writes three fixes for THAT business, live. The generation
   is the demo — same play as Ask It, but about the visitor.
   8/28 night: the answer TYPES itself (Trevor: "wouldn't it be cooler…") —
   card shells land empty, the machine fills them left to right with a live
   caret, close line follows. Same per-char timer pattern as AskTheOS. */

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { ArrowRight, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { trackCTAClick } from '@/lib/analytics';

type Fix = { label: string; detail: string };

const DEFAULT_CARDS = [
  { label: 'Money you’re owed', detail: 'and can’t see', href: '#proof' },
  { label: 'Work falling through the cracks', detail: 'quotes, follow-ups, reorders', href: '#reel' },
  { label: 'Too many systems', detail: 'none of them talking', href: '#foundit-os' },
];

const CHAR_MS = 14; // typing speed, AskTheOS family

export function FixFirst({ compact = false, panel = false }: { compact?: boolean; panel?: boolean } = {}) {
  // panel = the desktop machine window: no label (the chrome carries it),
  // ghost preview lines before generation, otherwise compact behavior.
  const slim = compact || panel;
  const [business, setBusiness] = useState('');
  const [phase, setPhase] = useState<'idle' | 'thinking' | 'done'>('idle');
  const [fixes, setFixes] = useState<Fix[] | null>(null);
  const [typed, setTyped] = useState<Fix[]>([]);
  const [cardsDone, setCardsDone] = useState(0);
  const [closeText, setCloseText] = useState('');
  const [closeVisible, setCloseVisible] = useState(false);
  const [note, setNote] = useState('');
  const reduce = useReducedMotion();
  const timers = useRef<number[]>([]);

  useEffect(() => {
    // Warm the function while the visitor reads the headline — the first
    // submit then lands on a booted container instead of a cold start.
    fetch('/api/fix-first').catch(() => {});
    return () => timers.current.forEach((t) => window.clearTimeout(t));
  }, []);

  // The field announces itself: the placeholder types example businesses on a
  // loop with a live caret, so the pill unmistakably reads as "type here."
  // The loop yields the moment the field is focused (Trevor 8/29: "when
  // someone clicks... stop typing") and resumes on blur if still empty.
  const SAMPLES = ['tire shop', 'plant nursery', 'roofing crew', 'bail bonds office', 'equipment dealer', 'law office'];
  const [ph, setPh] = useState('');
  const [focused, setFocused] = useState(false);
  useEffect(() => {
    if (focused) { setPh(''); return; }
    if (reduce) { setPh('tire shop, plant nursery, roofing crew…'); return; }
    let alive = true;
    let si = 0;
    const ids: number[] = [];
    const later = (fn: () => void, ms: number) => { const id = window.setTimeout(() => { if (alive) fn(); }, ms); ids.push(id); };
    function typeOut(word: string, i: number) {
      setPh(word.slice(0, i));
      if (i < word.length) later(() => typeOut(word, i + 1), 55);
      else later(() => erase(word, word.length), 1600);
    }
    function erase(word: string, i: number) {
      setPh(word.slice(0, i));
      if (i > 0) later(() => erase(word, i - 1), 22);
      else { si = (si + 1) % SAMPLES.length; later(() => typeOut(SAMPLES[si], 0), 350); }
    }
    typeOut(SAMPLES[0], 0);
    return () => { alive = false; ids.forEach((id) => window.clearTimeout(id)); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce, focused]);

  function playTyping(fx: Fix[]) {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
    if (reduce) {
      setTyped(fx);
      setCardsDone(3);
      setCloseVisible(true);
      return;
    }
    setTyped(fx.map(() => ({ label: '', detail: '' })));
    setCardsDone(0);
    setCloseVisible(false);
    let start = 200;
    fx.forEach((f, ci) => {
      const labelMs = f.label.length * CHAR_MS;
      const detailMs = f.detail.length * CHAR_MS;
      f.label.split('').forEach((_, i) =>
        timers.current.push(window.setTimeout(() =>
          setTyped((prev) => prev.map((p, j) => (j === ci ? { ...p, label: f.label.slice(0, i + 1) } : p))),
          start + i * CHAR_MS)));
      f.detail.split('').forEach((_, i) =>
        timers.current.push(window.setTimeout(() =>
          setTyped((prev) => prev.map((p, j) => (j === ci ? { ...p, detail: f.detail.slice(0, i + 1) } : p))),
          start + labelMs + 90 + i * CHAR_MS)));
      const cardEnd = start + labelMs + 90 + detailMs;
      timers.current.push(window.setTimeout(() => setCardsDone(ci + 1), cardEnd + 50));
      // Next card starts before this one finishes — the sweep feels alive.
      start += Math.round((labelMs + detailMs) * 0.65) + 90;
    });
    const allDone = start + Math.round((fx[2].label.length + fx[2].detail.length) * CHAR_MS * 0.35) + 250;
    timers.current.push(window.setTimeout(() => setCloseVisible(true), allDone));
  }

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
        setCloseText(String(data.close || ''));
        setPhase('done');
        playTyping(data.fixes);
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
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
    setFixes(null);
    setTyped([]);
    setCardsDone(0);
    setCloseText('');
    setCloseVisible(false);
    setNote('');
    setBusiness('');
    setPhase('idle');
  }

  const showGenerated = phase === 'done' && fixes;

  return (
    <div className={slim ? '' : 'opacity-0 animate-reveal-up delay-400'}>
      {!panel && (
        <p className={`text-center font-black uppercase text-primary ${compact ? 'text-xs tracking-[0.2em]' : 'text-sm tracking-[0.25em]'}`}>
          {/* The employee frame: an employee DOES. */}
          {compact ? 'What Would Yours Do First?' : 'What Would Yours Fix First?'}
        </p>
      )}
      {!slim && (
        <p className="text-center text-sm text-muted-foreground font-medium mt-2 mb-6">
          Tell it what you run. It writes what yours would fix.
        </p>
      )}
      {compact && <div className="mb-4" />}

      {/* The ask: one joined command pill — input and trigger share the object. */}
      <form
        onSubmit={(e) => { e.preventDefault(); generate(); }}
        className="max-w-xl mx-auto mb-8"
      >
        <div
          className={`flex items-center gap-2 rounded-full border-2 bg-white/[0.06] p-1.5 pl-4 transition-all ${
            phase === 'thinking'
              ? 'border-primary/60'
              : 'border-white/25 focus-within:border-primary/70 focus-within:shadow-[0_0_0_4px_rgba(255,85,0,0.15)] hover:border-white/40'
          }`}
        >
          <span aria-hidden className="font-mono text-primary font-black text-base select-none">&gt;</span>
          <div className="relative flex-1 min-w-0">
            {/* text-base below md: iOS zooms into any focused input under
                16px — 16px on phones kills the zoom, desktop keeps 14px. */}
            <input
              type="text"
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              maxLength={80}
              placeholder=""
              aria-label="What kind of business do you run?"
              className="w-full h-10 bg-transparent text-base md:text-sm font-medium text-foreground caret-[#FF5500] selection:bg-primary/30 focus:outline-none"
            />
            {business.length === 0 && !focused && (
              <span aria-hidden className="absolute inset-y-0 left-0 flex items-center text-base md:text-sm font-medium text-white/50 pointer-events-none">
                {ph}
                {!reduce && <span className="text-primary animate-pulse">▍</span>}
              </span>
            )}
          </div>
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
          {/* No boxes (Trevor 8/28): three written lines — the bold wound
              flows into its muted detail as one sentence the machine types. */}
          <div className="max-w-xl mx-auto min-h-[10.5rem] space-y-5 text-left">
            {fixes!.map((f, i) => {
              const t = typed[i] ?? { label: '', detail: '' };
              const labelLive = t.label.length < f.label.length;
              const detailLive = !labelLive && t.detail.length < f.detail.length;
              return (
                <Link key={i} href="/map" className="group block">
                  <p className="text-base sm:text-lg leading-relaxed">
                    <span className="font-black text-foreground group-hover:text-primary transition-colors">
                      {t.label}
                      {labelLive && <span aria-hidden className="text-primary animate-pulse">▍</span>}
                    </span>
                    {!labelLive && t.detail && ' '}
                    <span className="text-muted-foreground font-medium">
                      {t.detail}
                      {detailLive && <span aria-hidden className="text-primary animate-pulse">▍</span>}
                    </span>
                  </p>
                </Link>
              );
            })}
          </div>
          <p
            className={`text-center text-sm text-white/80 font-medium max-w-xl mx-auto mt-6 leading-relaxed transition-opacity duration-500 ${
              closeVisible && closeText ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {closeText}
          </p>
          <div
            className={`flex items-center justify-center gap-6 mt-5 transition-opacity duration-500 ${
              closeVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Compact (mobile) and the panel have the big /map action nearby —
                no duplicate link inside the answer. */}
            {!slim && (
              <Link
                href="/map"
                className="text-xs font-black uppercase tracking-wider text-primary inline-flex items-center gap-1 hover:gap-2 transition-all"
                onClick={() => trackCTAClick('fix_first_map')}
              >
                Show Me What You’d Build <ArrowRight className="w-3 h-3" />
              </Link>
            )}
            <button
              type="button"
              onClick={reset}
              className="text-xs font-bold text-muted-foreground inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <RotateCcw className="w-3 h-3" /> Try another
            </button>
          </div>
        </>
      ) : panel ? (
        /* The waiting machine: dim ghost lines show where the answer lands. */
        <div className="space-y-4 text-left opacity-35 select-none" aria-hidden>
          {DEFAULT_CARDS.map((c) => (
            <p key={c.href} className="text-base leading-relaxed">
              <span className="font-black text-foreground">{c.label}</span>{' '}
              <span className="text-muted-foreground font-medium">{c.detail}</span>
            </p>
          ))}
        </div>
      ) : compact ? null : (
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
