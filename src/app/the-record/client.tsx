'use client';

/* ─── THE RECORD — the page (Trevor 8/29: "a whole page dedicated to this
   concept"). Systems that publish their own receipts: the nightly check
   writes one row, the page reads the rows, and the streak does the talking.
   HONESTY LAW: the panel below is a clearly-labeled DEMONSTRATION with
   sample numbers — real client strips appear here one blessing at a time,
   and their counters start at zero. No fake receipt ever renders as real. */

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const NIGHTS = 41;

/** The streak strip: one tick per night, lighting up in sequence. */
function Ticks({ play }: { play: boolean }) {
  const [lit, setLit] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!play) return;
    if (reduce) { setLit(NIGHTS); return; }
    let i = 0;
    const t = window.setInterval(() => {
      i += 1;
      setLit(i);
      if (i >= NIGHTS) window.clearInterval(t);
    }, 45);
    return () => window.clearInterval(t);
  }, [play, reduce]);
  return (
    <div className="flex flex-wrap gap-[3px] mt-5 max-w-[420px]" aria-hidden>
      {Array.from({ length: NIGHTS }).map((_, i) => (
        <div
          key={i}
          className={`h-5 w-2 rounded-[3px] transition-colors duration-200 ${
            i < lit ? (i === NIGHTS - 1 ? 'bg-primary' : 'bg-emerald-400/75') : 'bg-white/[0.06]'
          }`}
        />
      ))}
    </div>
  );
}

/** Counts up to a value once in view. */
function Counter({ to, prefix = '', play }: { to: number; prefix?: string; play: boolean }) {
  const [n, setN] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!play) return;
    if (reduce) { setN(to); return; }
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [play, to, reduce]);
  return <>{prefix}{n.toLocaleString()}</>;
}

export default function TheRecordClient() {
  const demoRef = useRef<HTMLDivElement>(null);
  const inView = useInView(demoRef, { once: true, amount: 0.4 });

  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-24 relative overflow-hidden">
      {/* one authored light source, same family as the homepage hero */}
      <div
        aria-hidden
        className="absolute left-1/2 top-10 -translate-x-1/2 w-[54rem] h-[26rem] rounded-full bg-primary/[0.07] blur-[130px] pointer-events-none"
      />

      <div className="max-w-[980px] mx-auto px-6 relative z-10">
        {/* ── hero ── */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] mb-5">
            Receipts, Not Reviews
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-heading uppercase italic tracking-tighter leading-[0.88] mb-6">
            The Record<span className="text-primary">.</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
            Every system we run checks its own books at midnight and keeps the score.
            Nights matched to the penny. Money through the pipe. Discrepancies found.{' '}
            <span className="text-white font-bold">No number on this page is ever typed by a person.</span>
          </p>
        </motion.header>

        {/* ── the demonstration panel ── */}
        <motion.div
          ref={demoRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="mb-4"
        >
          <div className="rounded-3xl overflow-hidden border border-border/20 bg-card/15 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-border/15 bg-black/40">
              <p className="font-heading font-black uppercase italic tracking-tight text-lg">
                The Record<span className="text-primary">.</span>
              </p>
              <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
                Demonstration · sample numbers
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,0.85fr)_minmax(0,0.85fr)]">
              <div className="p-6 lg:p-7 border-b lg:border-b-0 lg:border-r border-border/15 col-span-2 lg:col-span-1 min-w-0">
                <p className="font-heading font-black text-5xl lg:text-6xl text-primary tracking-tight">
                  <Counter to={NIGHTS} play={inView} />
                </p>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-muted-foreground mt-2 leading-relaxed">
                  Nights matched<br />to the penny
                </p>
                <Ticks play={inView} />
              </div>
              <div className="p-6 lg:p-7 border-r border-border/15">
                <p className="font-heading font-black text-4xl lg:text-5xl tracking-tight">
                  <Counter to={184220} prefix="$" play={inView} />
                </p>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-muted-foreground mt-2 leading-relaxed">
                  Processed through<br />the system
                </p>
              </div>
              <div className="p-6 lg:p-7 lg:border-r border-border/15">
                <p className="font-heading font-black text-4xl lg:text-5xl tracking-tight">
                  <Counter to={312} play={inView} />
                </p>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-muted-foreground mt-2 leading-relaxed">
                  Orders through<br />the pipe
                </p>
              </div>
              <div className="p-6 lg:p-7 border-t lg:border-t-0 border-border/15 col-span-2 lg:col-span-1">
                <p className="font-heading font-black text-4xl lg:text-5xl tracking-tight text-emerald-400">0</p>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-muted-foreground mt-2 leading-relaxed">
                  Discrepancies<br />found
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 px-6 py-3.5 border-t border-border/15 bg-black/30 font-mono text-[11.5px] text-muted-foreground">
              <span>
                Last check: 12:04 AM · billed = collected + open, to the cent · difference{' '}
                <span className="text-emerald-400 font-semibold">$0.00</span>
              </span>
              <span>Backed up nightly · 41/41</span>
            </div>
          </div>
        </motion.div>
        <p className="text-center text-xs text-muted-foreground font-medium mb-20">
          Sample numbers, real mechanics. Each client&rsquo;s live Record appears below as they
          put their name to it — and every counter starts at zero.
        </p>

        {/* ── how it stays honest ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-black font-heading uppercase italic tracking-tighter text-center mb-10">
            How a Number Earns This Page
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                t: 'The system writes it',
                d: 'At midnight the system runs its own audit: every dollar billed against every dollar collected and owed, to the cent. It writes one row — the date, the result, the totals. Nobody types anything.',
              },
              {
                t: 'A missing night shows',
                d: 'The page refuses to render a Record whose newest row is stale. There is no such thing as a receipt from last month presented as today. If the check didn’t run, you’d see that too.',
              },
              {
                t: 'A red night stays red',
                d: 'If a night ever doesn’t match, the streak resets in public and the row stays in the ledger. That is exactly what makes the green ones worth something.',
              },
            ].map((c) => (
              <div key={c.t} className="bg-card/15 border border-border/20 rounded-2xl p-6">
                <h3 className="font-black text-foreground uppercase italic tracking-tight text-lg mb-3">
                  {c.t}
                </h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── why ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl lg:text-4xl font-black font-heading uppercase italic tracking-tighter mb-5">
            Static Case Studies Age.<br />
            <span className="text-primary">A Streak Grows.</span>
          </h2>
          <p className="text-base lg:text-lg text-white/80 font-medium leading-relaxed">
            Anyone can write a case study. A counter that has to survive every midnight is a
            different kind of claim. The systems on this page run real businesses in the wild —
            registers, work orders, payment plans, real money — and each one proves itself again
            tonight, or you&rsquo;ll see it didn&rsquo;t.
          </p>
        </motion.div>

        {/* ── close ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/before-after"
              className="inline-flex items-center justify-center gap-2 px-9 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
            >
              See the Before &amp; After <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/map"
              className="inline-flex items-center justify-center px-8 h-14 rounded-full border border-border/25 text-foreground/90 font-black uppercase tracking-wider text-sm hover:border-primary/50 hover:text-foreground transition-colors"
            >
              Show Me What You&rsquo;d Build
            </Link>
          </div>
          <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
            Owned software &middot; proven beside the old system &middot; then proven every night after
          </p>
        </motion.div>
      </div>
    </main>
  );
}
