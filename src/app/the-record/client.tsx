'use client';

/* ─── THE RECORD — restrained on purpose (Trevor 8/29: "more professional,
   less salesy"). This page reads like an audit report, not a landing page:
   the panel is the centerpiece, the copy is methodology, the close is a
   pair of quiet links. Understatement is the credibility play here.
   HONESTY LAW: the panel below is a clearly-labeled DEMONSTRATION with
   sample numbers — real client strips appear one blessing at a time, and
   their counters start at zero. No fake receipt ever renders as real. */

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { LiveRecord } from '@/lib/record-live';

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

const METHOD = [
  {
    n: '01',
    t: 'The system writes it',
    d: 'At midnight the system runs its own reconciliation: every dollar billed against every dollar collected and outstanding, to the cent. It writes one row with the date, the result, and the totals. There is no manual entry anywhere in the pipeline.',
  },
  {
    n: '02',
    t: 'A missing night is visible',
    d: 'A Record renders only when its newest row is current. If a nightly check did not run, that gap shows here in place of a number. Nothing on this page can be a stale figure presented as tonight’s.',
  },
  {
    n: '03',
    t: 'A failed night stays on the ledger',
    d: 'A night that does not reconcile resets the public streak, and the row remains in the ledger permanently. That is what makes the matched nights meaningful.',
  },
];

/** A live strip: real rows, read from the system's own database at render. */
function LiveStrip({ record }: { record: LiveRecord }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease }}
      className="mb-32 md:mb-44"
    >
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] sm:tracking-[0.35em] text-muted-foreground mb-3">
        Live · read from the ledger at render
      </p>
      <div className="rounded-3xl overflow-hidden border border-primary/25 bg-card/15 backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-border/15 bg-black/40">
          <div>
            <p className="font-heading font-black uppercase italic tracking-tight text-lg">
              {record.name}<span className="text-primary">.</span>
            </p>
            <p className="font-mono text-[11px] text-muted-foreground">{record.descriptor}</p>
          </div>
          <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Live
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {/* Streak cell spans full width on mobile — same bounded-strip fix
              as the demo panel (5695e41), so a long streak's ticks can wrap. */}
          <div className="p-6 border-b lg:border-b-0 lg:border-r border-border/15 col-span-2 lg:col-span-1 min-w-0">
            <p className="font-heading font-black text-5xl text-primary tracking-tight">{record.streak}</p>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-muted-foreground mt-2 leading-relaxed">
              Night{record.streak === 1 ? '' : 's'} balanced<br />to the penny
            </p>
            <div className="flex flex-wrap gap-[3px] mt-4 max-w-[420px]" aria-hidden>
              {record.nights.slice(0, 41).reverse().map((n) => (
                <div
                  key={n.date}
                  className={`h-5 w-2 rounded-[3px] ${n.status === 'green' ? 'bg-emerald-400/75' : 'bg-red-500/80'}`}
                />
              ))}
            </div>
          </div>
          {record.stats.map((s, i) => (
            <div key={s.label} className={`p-6 border-b lg:border-b-0 ${i === 0 ? 'border-r' : 'lg:border-r'} border-border/15`}>
              <p className={`font-heading font-black text-3xl sm:text-4xl tracking-tight ${
                s.tone === 'green' ? 'text-emerald-400' : s.tone === 'red' ? 'text-red-500' : ''
              }`}>
                {s.value}
              </p>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-muted-foreground mt-2 leading-relaxed whitespace-pre-line">
                {s.label}
              </p>
            </div>
          ))}
          <div className="p-6">
            <p className="font-heading font-black text-3xl sm:text-4xl tracking-tight">{record.lastNight.slice(5).replace('-', '/')}</p>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-muted-foreground mt-2 leading-relaxed">
              Newest night<br />certified
            </p>
          </div>
        </div>
        <div className="px-6 py-3.5 border-t border-border/15 bg-black/30 font-mono text-[11.5px] text-muted-foreground">
          Every figure above was read from this system&rsquo;s own append-only ledger when this page loaded.
          No number was typed by a person. The counter started at zero and earns one night at a time.
        </div>
      </div>
    </motion.section>
  );
}

export default function TheRecordClient({
  foundit,
  clients = [],
}: {
  foundit?: LiveRecord | null;
  clients?: LiveRecord[];
}) {
  const demoRef = useRef<HTMLDivElement>(null);
  const inView = useInView(demoRef, { once: true, amount: 0.4 });

  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-24 relative overflow-hidden">
      {/* one authored light source, dimmer than the homepage hero */}
      <div
        aria-hidden
        className="absolute left-1/2 top-10 -translate-x-1/2 w-[54rem] h-[26rem] rounded-full bg-primary/[0.05] blur-[130px] pointer-events-none"
      />

      <div className="max-w-[980px] mx-auto px-6 relative z-10">
        {/* ── header ── */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-24 md:mb-32"
        >
          <p className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] sm:tracking-[0.35em] text-muted-foreground mb-5">
            Nightly reconciliation, published live
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-heading uppercase italic tracking-tighter leading-[0.88] mb-6">
            The Record<span className="text-primary">.</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
            Every system we operate reconciles its own books at midnight: billed against
            collected and outstanding, to the cent. The result is written to a ledger and
            published here.{' '}
            <span className="text-white font-semibold">No number on this page is entered by hand.</span>
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
            <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4 px-6 py-4 border-b border-border/15 bg-black/40">
              <p className="font-heading font-black uppercase italic tracking-tight text-lg whitespace-nowrap">
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
                <p className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                  <Counter to={184220} prefix="$" play={inView} />
                </p>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-muted-foreground mt-2 leading-relaxed">
                  Processed through<br />the system
                </p>
              </div>
              <div className="p-6 lg:p-7 lg:border-r border-border/15">
                <p className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                  <Counter to={312} play={inView} />
                </p>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-muted-foreground mt-2 leading-relaxed">
                  Orders through<br />the pipe
                </p>
              </div>
              <div className="p-6 lg:p-7 border-t lg:border-t-0 border-border/15 col-span-2 lg:col-span-1 text-center lg:text-left">
                <p className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-emerald-400">0</p>
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
        <p className="text-center text-xs text-muted-foreground font-medium mb-32 md:mb-44">
          Sample numbers, real mechanics. Client Records appear here as each owner signs off
          on publishing, and every counter starts at zero.
        </p>

        {/* ── the live strips — first name on the page is our own,
             every client below it put their own name there ── */}
        {foundit && <LiveStrip record={foundit} />}
        {clients.map((c) => (
          <LiveStrip key={c.name} record={c} />
        ))}

        {/* ── methodology ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-32 md:mb-44"
        >
          <div className="w-10 h-[3px] bg-primary/70 rounded-full mb-7" aria-hidden />
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-muted-foreground mb-3">
            Methodology
          </p>
          <h2 className="text-3xl lg:text-4xl font-black font-heading uppercase tracking-tight mb-8">
            How these numbers are produced
          </h2>
          <div className="divide-y divide-border/15 border-y border-border/15">
            {METHOD.map((m) => (
              <div key={m.n} className="grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_14rem_1fr] gap-x-4 gap-y-2 py-7">
                <p className="font-mono text-sm font-semibold text-primary/80 pt-0.5">{m.n}</p>
                <h3 className="font-bold text-foreground tracking-tight text-base">{m.t}</h3>
                <p className="col-span-2 sm:col-span-1 text-sm text-muted-foreground font-medium leading-relaxed max-w-xl">
                  {m.d}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── why it exists ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-32 md:mb-44 max-w-2xl"
        >
          <div className="w-10 h-[3px] bg-primary/70 rounded-full mb-7" aria-hidden />
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-muted-foreground mb-3">
            Why we publish it
          </p>
          <p className="text-base lg:text-lg text-white/80 font-medium leading-relaxed">
            A written case study is the author&rsquo;s claim. A reconciliation streak is the
            system&rsquo;s. The systems reported on this page run operating businesses, with
            registers, work orders, and payment plans behind the figures, and every number is
            re-earned each night.
          </p>
        </motion.section>

        {/* ── quiet close ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="border-t border-border/15 pt-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10">
            {/* Arrows ride inline with the last word so a wrapped label
                doesn't strand the icon at the far edge. */}
            <Link
              href="/before-after"
              className="text-sm font-bold text-foreground/90 hover:text-primary transition-colors"
            >
              What these systems replaced<ArrowRight className="inline w-4 h-4 ml-1.5 align-[-3px] text-primary" />
            </Link>
            <Link
              href="/fit"
              className="text-sm font-bold text-foreground/90 hover:text-primary transition-colors"
            >
              What a system for your business would include<ArrowRight className="inline w-4 h-4 ml-1.5 align-[-3px] text-primary" />
            </Link>
          </div>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Owned software · proven beside the old system · then proven every night after
          </p>
        </motion.section>
      </div>
    </main>
  );
}
