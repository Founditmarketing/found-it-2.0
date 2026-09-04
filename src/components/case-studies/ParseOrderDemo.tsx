'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, AlertTriangle, MessageSquare } from 'lucide-react';

interface ParsedRow {
  qty: string;
  item: string;
  flagged: boolean;
  note: string;
}

const ROWS: ParsedRow[] = [
  { qty: '30', item: 'Knock Out Rose · 3 gal', flagged: false, note: 'caught' },
  { qty: '15', item: 'Loropetalum · 3 gal', flagged: false, note: 'caught' },
  { qty: '—', item: '“that jasmine from last time”', flagged: true, note: 'needs a human · ambiguous' },
  { qty: '2', item: 'Pine Straw · pallet', flagged: false, note: 'caught' },
];

/* step 1 = bubble in, steps 2–5 = rows land, step 6 = stamp. */
const STEP_TIMES = [400, 1600, 2300, 3000, 3700, 4700];
const CYCLE_MS = 6600; // last step + ~1.9s rest, then wipe and loop

const ease = [0.16, 1, 0.3, 1] as const;

export default function ParseOrderDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const [reduced, setReduced] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reduced || !inView) return;
    const timers: number[] = [];
    const runCycle = () => {
      setStep(0);
      STEP_TIMES.forEach((t, i) => {
        timers.push(window.setTimeout(() => setStep(i + 1), t));
      });
      timers.push(window.setTimeout(runCycle, CYCLE_MS));
    };
    runCycle();
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [reduced, inView]);

  /* Reduced motion: render the final settled frame, no timers. */
  const shown = reduced ? STEP_TIMES.length : step;

  return (
    <div
      ref={ref}
      className="relative flex min-h-[300px] w-full flex-col justify-center gap-4 p-5 sm:p-7 md:aspect-[16/10]"
    >
      <span className="absolute right-3 top-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
        demo data
      </span>

      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
        Order intake · watch it work
      </p>

      {/* Incoming text bubble — space always reserved, no layout shift */}
      <motion.div
        animate={{ opacity: shown >= 1 ? 1 : 0, y: shown >= 1 ? 0 : 10 }}
        transition={{ duration: 0.5, ease }}
        className="max-w-md rounded-2xl rounded-tl-sm border border-border bg-muted/40 px-4 py-3"
      >
        <span className="mb-1 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <MessageSquare className="h-3 w-3" aria-hidden /> incoming text
        </span>
        <p className="text-sm leading-relaxed text-foreground">
          need 30 knockouts 3g, 15 loropetalum, that jasmine from last time, 2 pallets pine straw
        </p>
      </motion.div>

      {/* Parsed order table */}
      <div className="rounded-xl border border-border/60">
        <div className="grid grid-cols-[3.5rem_1fr_auto] gap-2 border-b border-border/60 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
          <span>Qty</span>
          <span>Item</span>
          <span>Status</span>
        </div>
        {ROWS.map((row, i) => {
          const visible = shown >= i + 2;
          return (
            <motion.div
              key={row.item}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 6, scale: visible ? 1 : 0.985 }}
              transition={{ duration: 0.45, ease }}
              className={`grid grid-cols-[3.5rem_1fr_auto] items-center gap-2 px-4 py-2 text-sm ${
                i > 0 ? 'border-t border-border/40' : ''
              } ${row.flagged ? 'bg-red-400/5' : ''}`}
            >
              <span className="font-mono tabular-nums text-foreground">{row.qty}</span>
              <span className={row.flagged ? 'text-red-400' : 'text-foreground'}>{row.item}</span>
              <span
                className={`flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] ${
                  row.flagged ? 'text-red-400' : 'text-primary'
                }`}
              >
                {row.flagged ? (
                  <AlertTriangle className="h-3 w-3" aria-hidden />
                ) : (
                  <Check className="h-3 w-3" aria-hidden />
                )}
                {row.note}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Closing stamp — fixed slot so nothing jumps */}
      <motion.p
        animate={{ opacity: shown >= 6 ? 1 : 0, y: shown >= 6 ? 0 : 8 }}
        transition={{ duration: 0.5, ease }}
        className="text-sm font-heading font-semibold text-foreground"
      >
        <span className="text-primary">Caught or flagged.</span> Never dropped.
      </motion.p>
    </div>
  );
}
