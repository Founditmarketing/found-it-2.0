'use client';

/* ─── THE DEMO HERO — the identity line as an event (Trevor 9/5:
 * "inspire me - recreate this section") ───
 * One authored moment, played once on arrival: the headline lands sentence
 * by sentence (entrance spring), the five domain chips fly in scattered and
 * dock (receipt spring), the arrow draws itself, and ONE SYSTEM · YOURS
 * stamps down (refusal spring) with a static glow breathing in behind it —
 * the equation the section used to state, performed instead.
 * All three springs are the sanctioned house set; everything degrades to
 * static under prefers-reduced-motion. */

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { PersonalizedChip } from '@/components/PersonalizedChip';

const EASE = [0.16, 1, 0.3, 1] as const;

export function DemoHero({
  eyebrow,
  headline,
  headlineAccent,
  chips,
  ctaLabel,
  ctaHref,
  watchHref,
  priceLine,
}: {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  chips: { items: string[]; result: string };
  ctaLabel: string;
  ctaHref: string;
  watchHref: string;
  priceLine?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, margin: '-80px' });
  const reduce = useReducedMotion();
  const on = reduce ? true : seen;
  const sentences = (headline.match(/[^.]+\./g) || [headline]).map((s) => s.trim());
  const accentDelay = sentences.length * 0.14 + 0.22;

  return (
    <div ref={ref}>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] opacity-80">{eyebrow}</p>
        <PersonalizedChip />
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-8">
        {sentences.map((s, i) => (
          <motion.span
            key={s}
            className="inline-block mr-[0.3em]"
            initial={reduce ? false : { opacity: 0, y: 26, scale: 0.97 }}
            animate={on ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: i * 0.14, type: 'spring', stiffness: 120, damping: 18 }}
          >
            {s}
          </motion.span>
        ))}
        <motion.span
          className="inline-block text-primary"
          initial={reduce ? false : { opacity: 0, y: 26, scale: 0.94 }}
          animate={on ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: accentDelay, type: 'spring', stiffness: 120, damping: 18 }}
        >
          {headlineAccent}
        </motion.span>
      </h1>

      {/* The equation, performed: scatter → dock → draw → stamp. */}
      <div
        className="flex flex-wrap items-center gap-2 max-w-2xl"
        aria-label={chips.items.join(', ') + ' — ' + chips.result}
      >
        {chips.items.map((w, i) => (
          <motion.span
            key={w}
            className="inline-flex items-center h-8 px-3.5 rounded-full border border-border/30 bg-card/20 font-mono text-[11px] font-black uppercase tracking-[0.14em] text-muted-foreground"
            initial={reduce ? false : { opacity: 0, x: (i - 2) * 26, y: i % 2 ? -22 : 26, rotate: i % 2 ? -6 : 5 }}
            animate={on ? { opacity: 1, x: 0, y: 0, rotate: 0 } : {}}
            transition={{ delay: 0.7 + i * 0.11, type: 'spring', stiffness: 260, damping: 22 }}
          >
            {w}
          </motion.span>
        ))}
        <motion.span
          aria-hidden
          className="text-primary font-black text-lg mx-1 origin-left"
          initial={reduce ? false : { opacity: 0, scaleX: 0 }}
          animate={on ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 1.35, duration: 0.3, ease: EASE }}
        >
          →
        </motion.span>
        <motion.span
          className="relative inline-flex"
          initial={reduce ? false : { opacity: 0, scale: 0.5 }}
          animate={on ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.52, type: 'spring', stiffness: 300, damping: 16 }}
        >
          {/* glow-behind, static, ≤0.15 orange per the house rule */}
          <span aria-hidden className="absolute -inset-4 rounded-full bg-[radial-gradient(closest-side,rgba(255,85,0,0.15),transparent)]" />
          <span className="relative inline-flex items-center h-9 px-4 rounded-full bg-primary text-primary-foreground font-mono text-[11px] font-black uppercase tracking-[0.14em]">
            {chips.result}
          </span>
        </motion.span>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mt-10"
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={on ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.72, duration: 0.5, ease: EASE }}
      >
        <Link
          href={ctaHref}
          className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm shadow-[0_14px_44px_-10px_rgba(255,85,0,0.45)] hover:opacity-90 active:scale-[0.99] transition-all"
        >
          {ctaLabel}
        </Link>
        <Link
          href={watchHref}
          className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-card/40 border border-border/20 text-foreground font-bold uppercase tracking-wider text-sm hover:border-primary/30 transition-colors"
        >
          Watch It Run
        </Link>
      </motion.div>

      {priceLine && (
        <motion.p
          className="mt-5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground"
          initial={reduce ? false : { opacity: 0 }}
          animate={on ? { opacity: 1 } : {}}
          transition={{ delay: 1.9, duration: 0.5, ease: EASE }}
        >
          {priceLine}
        </motion.p>
      )}
    </div>
  );
}
