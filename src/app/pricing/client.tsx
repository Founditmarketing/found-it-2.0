'use client';

/* ─── /pricing — THE GUCCI LAW (Trevor 9/5, verbatim): "let the price speak
   for itself... I am the luxury. It's bespoke. Made for you, just for you.
   Don't make them work, and don't fucking justify the price. Just state it
   like it's fucking Gucci."
   The old page answered questions nobody had asked yet — a rent-paradox Q&A,
   four reassurance checkmarks, a catalog card. Now: the number, colossal;
   the promise; the bespoke line; doctrine stated as fact, never as defense;
   the monthly's scope folded behind one tap (the 8/29 claim-hygiene lists
   survive verbatim — in the cabinet, not on the counter); the house close.
   Never re-add a justification block, a "why we charge" heading, or a
   marketing row to this page. */

import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { OS_PRICING } from '@/lib/site';
import TheAsk from '@/components/TheAsk';

export default function PricingClient() {
  const reduce = useReducedMotion();
  const enter = (delay: number): Record<string, unknown> => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, type: 'spring', stiffness: 120, damping: 18 },
  });

  return (
    <main className="bg-transparent text-foreground pt-36 lg:pt-48 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>
      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.p
            {...enter(0)}
            className="font-mono text-[10px] sm:text-xs font-black uppercase tracking-[0.35em] text-primary mb-10"
          >
            Found It OS &middot; Bespoke &middot; Built for one business at a time
          </motion.p>

          {/* THE NUMBER — it speaks for itself. */}
          <motion.h1
            {...enter(0.1)}
            className="text-7xl sm:text-8xl lg:text-[8.5rem] font-black italic tracking-tighter text-primary tabular-nums leading-none"
          >
            {OS_PRICING.monthly}
            <span className="text-2xl lg:text-3xl text-muted-foreground font-bold not-italic tracking-tight">/mo</span>
          </motion.h1>
          <motion.p
            {...enter(0.22)}
            className="mt-4 text-3xl sm:text-4xl font-black italic tracking-tighter text-foreground tabular-nums leading-none"
          >
            <span className="text-faint font-bold not-italic">+</span> {OS_PRICING.setup}
            <span className="text-base text-muted-foreground font-bold not-italic tracking-tight"> setup &middot; once</span>
          </motion.p>

          <motion.p
            {...enter(0.38)}
            className="mt-12 text-2xl sm:text-3xl lg:text-4xl font-black italic tracking-tighter leading-[1.05] text-foreground max-w-2xl mx-auto"
          >
            {OS_PRICING.promise}
          </motion.p>

          <motion.p
            {...enter(0.5)}
            className="mt-10 font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground"
          >
            Month-to-Month &middot; No Per-Seat Fees &middot; The Code and the Data Are Yours
          </motion.p>
          <motion.p
            {...enter(0.58)}
            className="mt-2 font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-faint"
          >
            Stop Paying and the Work Stops &middot; Not Your Software
          </motion.p>

          {/* The scope, in the cabinet — one tap, both lists verbatim. */}
          <motion.div {...enter(0.68)} className="mt-14 max-w-xl mx-auto text-left">
            <details className="group border border-border/20 rounded-2xl overflow-hidden bg-card/10">
              <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-mono text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                  The monthly, in writing
                </span>
                <span className="text-primary font-black text-xl transition-transform group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="font-mono text-[9px] font-black uppercase tracking-[0.25em] text-primary mb-2.5">Covered</p>
                  <ul className="space-y-2">
                    {[
                      'Hosting and nightly backups',
                      'Support — you text or call, a human answers',
                      'Bug fixes, security patches, and updates',
                      'Ongoing fitting: the small workflow improvements that come up as you run',
                      'New modules as we agree on them — that’s the point of ownership',
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="text-[13px] text-foreground font-medium leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[9px] font-black uppercase tracking-[0.25em] text-faint mb-2.5">
                    Agreed first, priced separately
                  </p>
                  <ul className="space-y-2">
                    {[
                      'A major new module or a whole new division — scoped and priced before it’s built, never surprise-billed',
                      'Hardware: tablets, printers, check stock',
                      'Third-party services that bill on their own: phone lines, card processing, AI usage',
                      'Payroll and tax filing — never built, at any price. That work belongs to a person who signs their name to it',
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <span className="text-faint font-black leading-4">&middot;</span>
                        <span className="text-[13px] text-muted-foreground font-medium leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
            {/* Custom-apps line OFF (Trevor 9/5: "we dont do this") */}
          </motion.div>
        </div>

        {/* The house close */}
        <TheAsk />
      </div>
    </main>
  );
}
