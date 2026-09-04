'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';

const MSG =
  "Hey Mr. Landry, still want us out Thursday for the duct side? The estimate's good through Friday.";

const ROWS = [
  { name: 'M. Landry', job: 'Duct cleaning · full house', amount: '$1,840', age: 6 },
  { name: 'K. Broussard', job: 'Attic insulation', amount: '$3,150', age: 4 },
  { name: 'T. Guidry', job: 'Mini-split · two zones', amount: '$7,620', age: 2 },
] as const;

// phases: 0 rows in · 1 typing · 2 button pulse · 3 press · 4 queued+tick · 5 stamp
export default function ChaseDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const [reduced, setReduced] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [phase, setPhase] = useState(0);
  const [chars, setChars] = useState(0);
  const [ticked, setTicked] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const on = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  useEffect(() => {
    if (reduced || !inView) return;
    setPhase(0);
    setChars(0);
    setTicked(false);
    const timers: ReturnType<typeof setTimeout>[] = [];
    const at = (ms: number, fn: () => void) => timers.push(setTimeout(fn, ms));
    at(900, () => setPhase(1));
    for (let i = 1; i <= MSG.length; i++) at(900 + i * 26, () => setChars(i));
    const typed = 900 + MSG.length * 26;
    at(typed + 400, () => setPhase(2));
    at(typed + 1650, () => setPhase(3));
    at(typed + 1950, () => {
      setPhase(4);
      setTicked(true);
    });
    at(typed + 2750, () => setPhase(5));
    at(typed + 4650, () => setCycle((c) => c + 1));
    return () => timers.forEach(clearTimeout);
  }, [cycle, inView, reduced]);

  const anim = !reduced;
  const p = reduced ? 5 : phase;
  const shown = reduced ? MSG.length : chars;
  const isTicked = reduced ? true : ticked;
  const started = reduced || inView;

  return (
    <div ref={ref} className="relative flex min-h-[300px] w-full flex-col justify-center p-5 sm:p-7 md:aspect-[16/10]">
      <AnimatePresence mode="wait">
        <motion.div
          key={cycle}
          initial={false}
          exit={anim ? { opacity: 0 } : undefined}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-baseline justify-between">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Follow-up queue</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60">demo data</span>
          </div>

          <div className="flex flex-col">
            {ROWS.map((r, i) => {
              const queued = i === 0 && p >= 4;
              const age = r.age + (isTicked && i === 1 ? 1 : 0);
              return (
                <motion.div
                  key={r.name}
                  initial={anim ? { opacity: 0, x: -14 } : false}
                  animate={started ? { opacity: 1, x: 0 } : { opacity: 0, x: -14 }}
                  transition={{ delay: 0.12 * i, duration: 0.4, ease: 'easeOut' }}
                  className="flex items-center justify-between gap-3 border-b border-foreground/10 py-2.5"
                >
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-foreground">{r.name}</div>
                    <div className="truncate text-xs text-muted-foreground">{r.job}</div>
                  </div>
                  <div className="flex shrink-0 items-center gap-4">
                    <span className="font-mono text-sm tabular-nums text-foreground">{r.amount}</span>
                    {queued ? (
                      <motion.span
                        initial={anim ? { opacity: 0, scale: 0.8 } : false}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex w-28 items-center justify-end gap-1 text-xs font-semibold text-primary"
                      >
                        <Check size={13} strokeWidth={3} /> queued
                      </motion.span>
                    ) : (
                      <span className={`w-28 text-right text-xs ${i === 0 ? 'text-red-400' : 'text-muted-foreground'}`}>
                        sent{' '}
                        <motion.span
                          key={age}
                          initial={anim ? { opacity: 0, y: 5 } : false}
                          animate={{ opacity: 1, y: 0 }}
                          className="inline-block font-mono tabular-nums"
                        >
                          {age}
                        </motion.span>{' '}
                        days ago
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex min-h-[104px] flex-col gap-3">
            <motion.div
              initial={anim ? { opacity: 0, y: 8, scale: 0.97 } : false}
              animate={p >= 1 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 8, scale: 0.97 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="h-[62px] max-w-[440px] overflow-hidden rounded-xl rounded-tl-sm border border-foreground/10 px-3.5 py-2"
            >
              <p className="text-xs leading-relaxed text-foreground">
                {MSG.slice(0, shown)}
                {anim && p === 1 && <span className="animate-pulse text-primary">▍</span>}
              </p>
            </motion.div>
            <div className="flex h-8 items-center justify-between gap-3">
              <motion.button
                type="button"
                tabIndex={-1}
                initial={anim ? { opacity: 0 } : false}
                animate={{
                  opacity: p >= 2 ? (p >= 4 ? 0.55 : 1) : 0,
                  scale: p === 2 ? [1, 1.045, 1] : p === 3 ? 0.93 : 1,
                }}
                transition={
                  p === 2
                    ? { scale: { duration: 0.9, repeat: Infinity, ease: 'easeInOut' }, opacity: { duration: 0.3 } }
                    : { duration: 0.18 }
                }
                className="rounded-full bg-primary px-4 py-1.5 text-xs font-black text-black"
              >
                Approve · a person always sends
              </motion.button>
              <motion.span
                initial={anim ? { opacity: 0, y: 6 } : false}
                animate={p >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                transition={{ duration: 0.4 }}
                className="text-right text-[10px] font-black uppercase tracking-[0.2em]"
              >
                <span className="text-foreground">It never forgets. </span>
                <span className="text-primary">You always approve.</span>
              </motion.span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
