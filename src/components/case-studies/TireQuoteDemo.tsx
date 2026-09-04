'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Timer } from 'lucide-react';

const QUERY = '265/70R17';

const ROWS = [
  { name: 'Gulf Supply', cost: '$142.10', otd: '$196.40', winner: false },
  { name: 'Delta Warehouse', cost: '$128.75', otd: '$181.20', winner: true },
  { name: 'Bayou Tire Co', cost: '$150.00', otd: '$204.85', winner: false },
] as const;

export default function TireQuoteDemo() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [typed, setTyped] = useState(0);
  const [step, setStep] = useState(0);
  const [tenths, setTenths] = useState(0);
  const timers = useRef<number[]>([]);
  const clock = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e) setInView(e.isIntersecting);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || reduced) return;
    const at = (ms: number, fn: () => void) => timers.current.push(window.setTimeout(fn, ms));
    const stopClock = () => {
      if (clock.current !== null) {
        window.clearInterval(clock.current);
        clock.current = null;
      }
    };
    const runCycle = () => {
      setTyped(0);
      setStep(0);
      setTenths(0);
      for (let i = 1; i <= QUERY.length; i++) at(200 + i * 90, () => setTyped(i));
      at(1250, () => {
        setStep(1);
        clock.current = window.setInterval(() => setTenths((t) => t + 1), 100);
      });
      at(1650, () => setStep(2));
      at(2150, () => setStep(3));
      at(2650, () => setStep(4));
      at(3150, () => setStep(5));
      at(3350, () => setStep(6));
      at(3550, () => setStep(7));
      at(3950, () => {
        setStep(8);
        stopClock();
      });
      at(4450, () => setStep(9));
      at(6300, runCycle);
    };
    runCycle();
    return () => {
      timers.current.forEach((t) => window.clearTimeout(t));
      timers.current = [];
      stopClock();
    };
  }, [inView, reduced]);

  const done = reduced;
  const shown = done ? QUERY.length : typed;
  const s = done ? 9 : step;
  const clockText = done ? '2.7' : (tenths / 10).toFixed(1);

  return (
    <div ref={boxRef} className="relative flex min-h-[300px] w-full flex-col justify-center gap-4 p-6 md:aspect-[16/10] md:min-h-0">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
          Flywheel OS — Parts Search
        </span>
        <span className={`flex items-center gap-1.5 font-mono text-sm tabular-nums ${s >= 8 ? 'text-primary' : 'text-muted-foreground'}`}>
          <Timer className="h-3.5 w-3.5" />
          {clockText}s
        </span>
      </div>

      <div className="flex items-center gap-2.5 rounded-lg border border-muted-foreground/20 px-3.5 py-2.5">
        <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
        <span className="font-mono text-sm text-foreground">{QUERY.slice(0, shown)}</span>
        {!done && s === 0 && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.7 }}
            className="inline-block h-4 w-[2px] bg-primary"
          />
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="grid grid-cols-[1fr_5.5rem_6.5rem] gap-2 px-3 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
          <span>Supplier</span>
          <span className="text-right">Cost</span>
          <span className="text-right">Out the door</span>
        </div>
        {ROWS.map((row, i) => {
          const rowIn = s >= i + 2;
          const otdIn = s >= i + 5;
          const win = s >= 8 && row.winner;
          return (
            <motion.div
              key={row.name}
              initial={false}
              animate={{ opacity: rowIn ? 1 : 0, x: rowIn ? 0 : -14 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={`grid grid-cols-[1fr_5.5rem_6.5rem] items-center gap-2 rounded-lg border px-3 py-2 ${
                win ? 'border-primary bg-primary/10' : 'border-muted-foreground/15'
              }`}
            >
              <span className="flex items-center gap-2 truncate text-sm text-foreground">
                {row.name}
                {win && (
                  <motion.span
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-black"
                  >
                    Quote it
                  </motion.span>
                )}
              </span>
              <span className="text-right font-mono text-sm tabular-nums text-muted-foreground">{row.cost}</span>
              <motion.span
                initial={false}
                animate={{ opacity: otdIn ? 1 : 0, y: otdIn ? 0 : 4 }}
                transition={{ duration: 0.25 }}
                className={`text-right font-mono text-sm tabular-nums ${win ? 'font-bold text-primary' : 'text-foreground'}`}
              >
                {row.otd}
              </motion.span>
            </motion.div>
          );
        })}
      </div>

      <div className="flex h-6 items-center justify-center">
        <motion.span
          initial={false}
          animate={{ opacity: s >= 9 ? 1 : 0, scale: s >= 9 ? 1 : 1.15 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="text-sm font-black uppercase tracking-[0.2em] text-foreground"
        >
          The 30-second quote<span className="text-primary">.</span>
        </motion.span>
      </div>

      <span className="absolute bottom-2 right-3 text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60">
        demo data
      </span>
    </div>
  );
}
