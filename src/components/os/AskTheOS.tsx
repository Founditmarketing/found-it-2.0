'use client';

/* ─── AskTheOS: the demo beat, self-serve ───
   The playbook's close is the live demo — "ask it who owes me money right
   now." This is that moment on the homepage: a Found It OS window running a
   clearly-labeled synthetic book. Tap a question, the answer types itself,
   the UI materializes. No backend — every answer is staged data, and the
   window says so in the chrome. */

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

type Row = { name: string; note: string; amount: string; tag?: string };

interface Answer {
  id: string;
  question: string;
  lead: string;
  rows?: Row[];
  bars?: { label: string; amount: string; pct: number }[];
  penny?: { old: string; next: string };
  footer: string;
}

const ANSWERS: Answer[] = [
  {
    id: 'owes',
    question: 'Who owes me money right now?',
    lead: 'Four open invoices — $9,406.17 outstanding.',
    rows: [
      { name: 'R. Boudreaux', note: 'Full replacement', amount: '$4,120.00', tag: '62 days' },
      { name: 'M. Guidry', note: 'Install + haul-off', amount: '$2,651.00', tag: '19 days' },
      { name: 'S. Fontenot', note: 'Annual service', amount: '$2,250.00', tag: '8 days' },
      { name: 'T. Landry', note: 'Service call', amount: '$385.17', tag: '31 days' },
    ],
    footer: 'Names and amounts — each one a tap from a reminder text.',
  },
  {
    id: 'compare',
    question: 'How did last week compare to last year?',
    lead: 'Up $4,890 on the same week last year.',
    bars: [
      { label: 'Same week last year', amount: '$18,240', pct: 62 },
      { label: 'Last week', amount: '$23,130', pct: 100 },
    ],
    footer: 'Answered from the books — not a spreadsheet you have to build first.',
  },
  {
    id: 'sleeping',
    question: 'What’s sleeping in my old system?',
    lead: '$27,400 in declined and forgotten work.',
    rows: [
      { name: 'Declined quotes', note: '11 jobs', amount: '$18,900' },
      { name: 'Unbilled work', note: '3 tickets', amount: '$6,250' },
      { name: 'Lapsed annual services', note: '5 customers', amount: '$2,250' },
    ],
    footer: 'One real migration surfaced ~$270K of this for one shop. What’s in yours?',
  },
  {
    id: 'penny',
    question: 'Do the books match?',
    lead: 'Matched to the penny — 14 nights straight.',
    penny: { old: '$48,201.17', next: '$48,201.17' },
    footer: 'Nothing switches until this reads $0.00 night after night — and you say go.',
  },
];

export function AskTheOS() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [typed, setTyped] = useState('');
  const [answerVisible, setAnswerVisible] = useState(false);
  const reduce = useReducedMotion();
  const hostRef = useRef<HTMLDivElement>(null);
  const inView = useInView(hostRef, { once: true, amount: 0.45 });
  const timers = useRef<number[]>([]);

  const active = ANSWERS.find((a) => a.id === activeId) || null;

  const ask = useCallback(
    (id: string) => {
      timers.current.forEach((t) => window.clearTimeout(t));
      timers.current = [];
      const a = ANSWERS.find((x) => x.id === id);
      if (!a) return;
      setActiveId(id);
      setAnswerVisible(false);
      if (reduce) {
        setTyped(a.lead);
        setAnswerVisible(true);
        return;
      }
      setTyped('');
      // The one authored moment: the answer types itself, then the UI lands.
      a.lead.split('').forEach((_, i) => {
        timers.current.push(
          window.setTimeout(() => setTyped(a.lead.slice(0, i + 1)), 240 + i * 16)
        );
      });
      timers.current.push(
        window.setTimeout(() => setAnswerVisible(true), 240 + a.lead.length * 16 + 120)
      );
    },
    [reduce]
  );

  // Fire the first question when the window scrolls into view.
  useEffect(() => {
    if (inView && !activeId) ask('owes');
  }, [inView, activeId, ask]);

  useEffect(() => () => timers.current.forEach((t) => window.clearTimeout(t)), []);

  return (
    <div ref={hostRef} className="rounded-2xl overflow-hidden border border-border/25 bg-card/20 shadow-2xl shadow-black/50">
      {/* Window chrome */}
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 bg-black/60 border-b border-border/15">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="ml-3 text-[11px] font-black uppercase tracking-[0.2em] text-foreground">
            Found It <span className="text-primary">OS</span>
          </span>
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-faint whitespace-nowrap">Demo books · Synthetic</span>
      </div>

      <div className="p-5 sm:p-7 lg:p-9">
        {/* Question chips */}
        <div className="flex flex-wrap gap-2.5 mb-7" role="group" aria-label="Ask the OS a question">
          {ANSWERS.map((a) => {
            const on = a.id === activeId;
            return (
              <button
                key={a.id}
                onClick={() => ask(a.id)}
                aria-pressed={on}
                className={`rounded-full px-4 py-2 text-xs sm:text-[13px] font-black uppercase tracking-tight transition-colors duration-300 ${
                  on
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card/40 border border-border/25 text-foreground hover:border-primary/50'
                }`}
              >
                {a.question}
              </button>
            );
          })}
        </div>

        {/* Answer canvas */}
        <div className="min-h-[280px] sm:min-h-[260px]" aria-live="polite">
          {active && (
            <>
              <p className="font-heading text-xl sm:text-2xl lg:text-3xl font-black italic tracking-tight text-foreground mb-6">
                {typed}
                {!answerVisible && !reduce && <span className="text-primary animate-pulse">▍</span>}
              </p>

              <AnimatePresence mode="wait">
                {answerVisible && (
                  <motion.div
                    key={active.id}
                    initial={reduce ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease }}
                  >
                    {active.rows && (
                      <div className="space-y-2">
                        {active.rows.map((r, i) => (
                          <motion.div
                            key={r.name}
                            initial={reduce ? false : { opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: reduce ? 0 : i * 0.09, duration: 0.45, ease }}
                            className="flex items-center justify-between gap-3 rounded-xl bg-background/60 border border-border/20 px-4 py-3"
                          >
                            <div className="min-w-0">
                              <p className="text-sm font-black text-foreground truncate">{r.name}</p>
                              <p className="text-xs text-muted-foreground font-medium truncate">{r.note}</p>
                            </div>
                            <div className="flex items-center gap-3 shrink-0">
                              {r.tag && <span className="chip">{r.tag}</span>}
                              <span className="text-sm font-black text-foreground [font-variant-numeric:tabular-nums]">{r.amount}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {active.bars && (
                      <div className="space-y-5 pt-2">
                        {active.bars.map((b, i) => (
                          <div key={b.label}>
                            <div className="flex items-baseline justify-between mb-1.5">
                              <span className="text-xs font-black uppercase tracking-[0.15em] text-faint">{b.label}</span>
                              <span className="text-sm font-black text-foreground [font-variant-numeric:tabular-nums]">{b.amount}</span>
                            </div>
                            <div className="h-3 rounded-full bg-background/60 border border-border/20 overflow-hidden">
                              <motion.div
                                initial={reduce ? { width: `${b.pct}%` } : { width: 0 }}
                                animate={{ width: `${b.pct}%` }}
                                transition={{ delay: reduce ? 0 : 0.15 + i * 0.2, duration: 0.9, ease }}
                                className={i === active.bars!.length - 1 ? 'h-full rounded-full bg-primary' : 'h-full rounded-full bg-white/25'}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {active.penny && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-stretch pt-1">
                        <div className="rounded-xl bg-background/60 border border-border/20 px-4 py-4 text-center">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-faint mb-1.5">Your old system</p>
                          <p className="text-lg font-black text-foreground [font-variant-numeric:tabular-nums]">{active.penny.old}</p>
                        </div>
                        <div className="rounded-xl bg-background/60 border border-border/20 px-4 py-4 text-center">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-faint mb-1.5">Found It OS</p>
                          <p className="text-lg font-black text-foreground [font-variant-numeric:tabular-nums]">{active.penny.next}</p>
                        </div>
                        <motion.div
                          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: reduce ? 0 : 0.5, duration: 0.5, ease }}
                          className="rounded-xl bg-primary px-4 py-4 text-center"
                        >
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/70 mb-1.5">Difference</p>
                          <p className="text-lg font-black text-primary-foreground [font-variant-numeric:tabular-nums]">$0.00</p>
                        </motion.div>
                      </div>
                    )}

                    <p className="text-sm text-muted-foreground font-medium leading-relaxed mt-6 max-w-xl">{active.footer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
