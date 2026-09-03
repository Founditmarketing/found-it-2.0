'use client';

/* ─── The ten-second argument (why-they-cant-compete) ───
 * The reader presses EXPORT MY BUSINESS. Three CSVs arrive. Then the page
 * says what didn't: the scheduler, the automations, the phone logic, the
 * ledger. Second press shows the other exit — the Found It handover, where
 * the relationship ends and the system stays. No fake terminal, no
 * exploding logos; the distinction lands before the essay starts. */

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const EXPORT_FILES = ['customers.csv', 'jobs.csv', 'invoices.csv'];
const HANDOVER_FILES = [
  'source-repository',
  'production-database',
  'backups',
  'deployment-control',
  'credentials',
  'documentation',
  'right-to-use-another-developer',
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function ExportDemo() {
  const [stage, setStage] = useState<'idle' | 'exported' | 'handover'>('idle');
  const reduce = useReducedMotion();

  const chip = (name: string, i: number, tone: 'gray' | 'orange') => (
    <motion.span
      key={name}
      initial={reduce ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: reduce ? 0 : 0.15 + i * 0.22, duration: 0.35, ease: ease as any }}
      className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 font-mono text-[12px] font-bold ${
        tone === 'orange'
          ? 'border-primary/40 bg-primary/[0.07] text-foreground'
          : 'border-border/30 bg-card/30 text-foreground/80'
      }`}
    >
      <span className={tone === 'orange' ? 'text-primary' : 'text-muted-foreground'} aria-hidden>▤</span>
      {name}
    </motion.span>
  );

  return (
    <div className="max-w-3xl mx-auto px-6 mb-10">
      <div className="border border-border/25 rounded-[1.75rem] bg-card/10 p-6 md:p-8 text-center">
        {stage === 'idle' && (
          <div>
            <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-faint mb-4">
              Try the deal most software offers
            </p>
            <button
              type="button"
              onClick={() => setStage('exported')}
              className="px-8 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 active:scale-[0.98] transition-all"
            >
              Export My Business
            </button>
          </div>
        )}

        <AnimatePresence mode="wait">
          {stage === 'exported' && (
            <motion.div key="exp" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }}>
              <p className="font-mono text-[11px] font-black uppercase tracking-[0.2em] text-emerald-400 mb-4">
                Export complete.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {EXPORT_FILES.map((f, i) => chip(f, i, 'gray'))}
              </div>
              <motion.div
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: reduce ? 0 : 1.1, duration: 0.5 }}
              >
                <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed max-w-md mx-auto mb-4">
                  Your customer records came with you. Your scheduler, automations, phone logic,
                  permissions, workflows, and ledger did not.
                </p>
                <p className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-foreground mb-5">
                  You exported the data. <span className="text-primary">You did not export the business.</span>
                </p>
                <button
                  type="button"
                  onClick={() => setStage('handover')}
                  className="px-6 h-12 rounded-full border border-primary/50 text-primary font-black uppercase tracking-wider text-xs hover:bg-primary/10 transition-colors"
                >
                  Show Me the Other Exit
                </button>
              </motion.div>
            </motion.div>
          )}

          {stage === 'handover' && (
            <motion.div key="hand" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }}>
              <p className="font-mono text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-4">
                The Found It handover
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {HANDOVER_FILES.map((f, i) => chip(f, i, 'orange'))}
              </div>
              <motion.p
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: reduce ? 0 : 1.8, duration: 0.5 }}
                className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-foreground"
              >
                The relationship ended. <span className="text-primary">The system stayed.</span>
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
