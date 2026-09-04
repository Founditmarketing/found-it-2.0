'use client';

/* ─── The Shipwright's cycle-one artifact (9/4; visual-pop pass same day) ───
 * The redacted work order, the authority matrix, and the honest scoreboard,
 * shown as a document under stage light instead of described. EVERY line
 * restates a fact the post body already publishes — nothing new is claimed,
 * and the scoreboard is human-checked and dated per the About-page ONE RULE
 * (nothing may merely look live). Update STATUS by hand when the owner
 * decides; this page is a living field report. */

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

const MONO = 'font-mono text-[9px] font-black uppercase tracking-[0.18em]';

const STATUS = {
  checked: 'Checked by a person · Sep 4, 2026',
};

const ORDER_ROWS: [string, string][] = [
  ['Cycle', 'Before dawn · cycle one'],
  ['Sources read', 'Its own gap lists and screen-usage events · what the e-commerce market shipped that week · what new technology unlocks'],
  ['Evidence', '114 carts reached checkout and left in fourteen days · $498,691.18 gross cart value · the board showing them was looked at, never worked'],
  ['Selected', 'A morning call queue — the five biggest walkaways, ranked by dollars, freshness, and whether the customer has bought before. Phone numbers first; an AI-drafted script in the company’s own voice.'],
  ['Scoring rule', 'A dollar counts only when the order lands in the books. Never when a button gets tapped.'],
  ['Estimated effort', 'Two and a half days · every file to touch named in the build order'],
  ['Skipped on purpose', '“Buzzing phones before the queue ranks dollars is noise-first plumbing… right build, wrong week.” · “Five to seven days of chassis and on day seven the owner feels nothing.”'],
  ['Forbidden', 'Auto-dialing · sending anything to a customer without a person committing it'],
];

const AUTHORITY: [string, boolean][] = [
  ['Read its own gap lists', true],
  ['Inspect screens looked at, never worked', true],
  ['Research the market and new tech', true],
  ['Write one proposal a week', true],
  ['Modify production code', false],
  ['Contact a customer', false],
  ['Auto-dial anybody', false],
  ['Grade its own homework', false],
];

export default function ShipwrightArtifact() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="max-w-3xl mx-auto px-6 mb-10">
      {/* the score today — honest, big, first */}
      <p className={`${MONO} text-faint text-center mb-3 tracking-[0.24em]`}>The score today · cycle one</p>
      <div className="grid grid-cols-3 border-y border-border/15 divide-x divide-border/10 mb-8">
        {[
          ['Code shipped', '0'],
          ['Customers contacted', '0'],
          ['Revenue claimed', '$0.00'],
        ].map(([l, v]) => (
          <div key={l} className="py-4 px-3 text-center">
            <p className="text-3xl sm:text-4xl font-black italic tracking-tighter text-foreground leading-none tabular-nums">{v}</p>
            <p className={`${MONO} text-faint mt-2 leading-tight`}>{l}</p>
          </div>
        ))}
      </div>

      {/* The artifact. Clean Stage Rule (background-clean-stage, 9/3): dim
          orange over near-black reads as brown mud — the radial "stage
          light" and the primary-tinted card field both broke it and turned
          the whole region swampy on real screens. The ground stays neutral;
          the pop lives in the border, the tight edge shadow, the orange
          type, and the chips. */}
      <div className="relative">
        <div className="relative border border-primary/30 rounded-2xl bg-card/15 overflow-hidden shadow-[0_0_50px_-26px] shadow-primary/30">
          <div className="px-5 sm:px-7 pt-5 flex flex-wrap items-baseline justify-between gap-2">
            <p className={`${MONO} text-primary tracking-[0.24em]`}>Shipwright · Cycle 01</p>
            <p className={`${MONO} text-faint`}>Real client · name withheld at the owner’s request</p>
          </div>

          <div className="px-5 sm:px-7 py-5">
            <p className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter text-foreground leading-[0.95]">
              Abandoned-checkout <span className="text-primary">call queue</span>
            </p>
            <p className="mt-3 text-2xl sm:text-3xl font-black italic tracking-tighter text-primary leading-none">
              $498,691.18
              <span className="block sm:inline mt-1.5 sm:mt-0 sm:ml-3 sm:align-middle text-sm font-bold not-italic text-muted-foreground tracking-normal">
                114 carts · est. 2.5 days
              </span>
            </p>
            <p className={`${MONO} text-faint mt-2`}>Gross cart value — not booked revenue, not a recovery forecast</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-md border border-amber-400/50 px-3 py-1.5">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
              </span>
              <span className={`${MONO} text-amber-400 tracking-[0.2em]`}>Awaiting the owner · build authority: none</span>
            </p>
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="order"
                initial={reduce ? false : { opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={reduce ? undefined : { opacity: 0, height: 0 }}
                transition={{ duration: 0.35 }}
                className="border-t border-primary/20 overflow-hidden"
              >
                <div className="divide-y divide-border/10">
                  {ORDER_ROWS.map(([k, v], i) => (
                    <motion.div
                      key={k}
                      initial={reduce ? false : { opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: reduce ? 0 : 0.08 + i * 0.06, duration: 0.3 }}
                      className="px-5 sm:px-7 py-3 grid grid-cols-[110px_1fr] sm:grid-cols-[130px_1fr] gap-4 items-baseline"
                    >
                      <p className={`${MONO} text-primary/80`}>{k}</p>
                      <p className="text-sm text-muted-foreground font-medium leading-relaxed">{v}</p>
                    </motion.div>
                  ))}

                  {/* authority matrix — permission as architecture */}
                  <div className="px-5 sm:px-7 py-5">
                    <p className={`${MONO} text-faint mb-3`}>Authority matrix</p>
                    <div className="flex flex-wrap gap-2">
                      {AUTHORITY.map(([action, allowed], i) => (
                        <motion.span
                          key={action}
                          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: reduce ? 0 : 0.5 + i * 0.05, duration: 0.25 }}
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold ${
                            allowed
                              ? 'border-emerald-400/30 bg-emerald-400/[0.06] text-emerald-400'
                              : 'border-red-500/30 bg-red-500/[0.06] text-red-400'
                          }`}
                        >
                          <span aria-hidden>{allowed ? '✓' : '✕'}</span>
                          {action}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* the gate — one word, the owner's */}
                  <div className="px-5 sm:px-7 py-6 text-center">
                    <p className={`${MONO} text-faint mb-4`}>
                      observe → rank → propose →{' '}
                      <span className="text-amber-400 border border-amber-400/50 rounded px-1.5 py-0.5">owner gate</span>{' '}
                      → build → prove → remember
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <span className="inline-flex items-center justify-center px-10 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase italic tracking-tighter text-2xl" aria-hidden>
                        Go
                      </span>
                      <span className={`${MONO} text-faint`}>or</span>
                      <span className="inline-flex items-center justify-center px-10 h-14 rounded-full border border-border/40 text-muted-foreground font-black uppercase italic tracking-tighter text-2xl" aria-hidden>
                        Skip
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-bold text-foreground">
                      One word. <span className="text-primary">The owner’s.</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="border-t border-primary/20 px-5 sm:px-7 py-4 flex flex-wrap items-center justify-between gap-3 bg-background/40">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              className={
                open
                  ? 'text-xs font-black uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors'
                  : 'inline-flex items-center justify-center px-6 h-11 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-xs hover:opacity-90 transition-opacity'
              }
            >
              {open ? 'Close the work order' : 'Open the redacted work order →'}
            </button>
            <Link href="/blog/giving-owners-full-control" className={`${MONO} text-faint hover:text-foreground transition-colors`}>
              The same walls as Owner Mode
            </Link>
          </div>
        </div>
      </div>
      <p className={`${MONO} text-faint mt-4`}>{STATUS.checked} · this page updates when the owner decides</p>
    </div>
  );
}
