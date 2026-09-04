'use client';

/* ─── The cancellation, performed (rented-software post, 9/3) ───
 * A tiny working business flow: CALL → QUOTE → SCHEDULE → INVOICE →
 * PAYMENT → BANK. One button cancels the software: the arrows vanish, the
 * verbs go dark, and four noun-files remain. "The records came with you.
 * What happened next did not." RESTORE ACCESS resets it. No fake
 * terminal, no lock art — the reader understands the article before
 * reading it. */

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const VERBS = ['CALL', 'QUOTE', 'SCHEDULE', 'INVOICE', 'PAYMENT', 'BANK'];
const NOUNS = ['customers.xlsx', 'jobs.xlsx', 'invoices.xlsx', 'payments.xlsx'];

export default function CancelDemo() {
  const [dead, setDead] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="max-w-3xl mx-auto px-6 mb-10">
      <div className="border border-border/25 rounded-[1.75rem] bg-card/10 p-6 md:p-8 text-center">
        {/* the flow */}
        <div className="flex flex-wrap items-center justify-center gap-y-2.5 mb-6" aria-live="polite">
          {VERBS.map((v, i) => (
            <span key={v} className="flex items-center">
              <span
                className={`rounded-lg border px-2.5 py-1.5 font-mono text-[11px] font-black tracking-[0.08em] transition-all duration-700 ${
                  dead
                    ? 'border-border/15 text-muted-foreground/40 saturate-0 opacity-50'
                    : 'border-primary/35 bg-primary/[0.06] text-foreground'
                }`}
              >
                {v}
              </span>
              {i < VERBS.length - 1 && (
                <span
                  className={`mx-1.5 font-mono text-[11px] transition-opacity duration-500 ${
                    dead ? 'opacity-0' : 'text-primary'
                  }`}
                  aria-hidden
                >
                  →
                </span>
              )}
            </span>
          ))}
        </div>

        {!dead ? (
          <button
            type="button"
            onClick={() => setDead(true)}
            className="px-8 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 active:scale-[0.98] transition-all"
          >
            Cancel the Software
          </button>
        ) : (
          <AnimatePresence>
            <motion.div key="dead" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {NOUNS.map((f, i) => (
                  <motion.span
                    key={f}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduce ? 0 : 0.2 + i * 0.18, duration: 0.35 }}
                    className="inline-flex items-center gap-2 rounded-lg border border-border/30 bg-card/30 px-3.5 py-2 font-mono text-[12px] font-bold text-foreground/80"
                  >
                    <span className="text-muted-foreground" aria-hidden>▤</span>
                    {f}
                  </motion.span>
                ))}
              </div>
              <motion.div
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: reduce ? 0 : 1.1, duration: 0.5 }}
              >
                <p className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-foreground mb-5">
                  The records came with you. <span className="text-primary">What happened next did not.</span>
                </p>
                <button
                  type="button"
                  onClick={() => setDead(false)}
                  className="font-mono text-[11px] uppercase tracking-[0.15em] text-faint hover:text-foreground transition-colors"
                >
                  Restore access →
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
