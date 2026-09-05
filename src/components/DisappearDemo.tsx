'use client';

/* ─── MAKE FOUND IT DISAPPEAR — the ownership claim as a machine ───
 * Born on /about (9/3), pulled off it (Trevor 9/5: "save it for later"),
 * remounted 9/5 on /owned-software — the page whose manifest it proves.
 * The visitor removes Found It and watches the business keep running while
 * the six handover items walk in one by one. The six lines must stay in
 * substance-lockstep with the Owned Software Standard (agreements match). */

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

const HANDOVER = [
  'The complete runnable source-code repository',
  'The production database and backups, in a usable format',
  'The hosting account, or a documented transfer of deployment',
  'The credentials and configuration documentation',
  'The legal right for any developer to maintain and modify the system',
  'A plain list of the third-party services that still bill on their own',
];

export function DisappearDemo({ showStandardLink = true }: { showStandardLink?: boolean }) {
  const [gone, setGone] = useState(false);
  const reduce = useReducedMotion();
  return (
    <div className="border border-border/25 rounded-[2rem] overflow-hidden bg-card/10">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Found It side */}
        <div className={`p-6 md:p-8 border-b sm:border-b-0 sm:border-r border-border/20 transition-all duration-700 ${gone ? 'opacity-35 saturate-0' : ''}`}>
          <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-faint mb-2">Found It Software</p>
          <p className="flex items-center gap-2 text-lg font-black uppercase italic tracking-tight text-foreground">
            <span className={`w-2.5 h-2.5 rounded-full ${gone ? 'bg-red-500/80' : 'bg-emerald-400 animate-pulse'}`} aria-hidden />
            {gone ? 'Offline' : 'Online'}
          </p>
          <p className="mt-3 text-sm text-muted-foreground font-medium leading-relaxed">
            {gone
              ? 'Support stopped. Invoices from us stopped. That’s all that stopped.'
              : 'Builds, support, new features, the nightly watch.'}
          </p>
        </div>
        {/* The business side */}
        <div className="p-6 md:p-8">
          <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-faint mb-2">Your Business System</p>
          <p className="flex items-center gap-2 text-lg font-black uppercase italic tracking-tight text-foreground">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden />
            Running
          </p>
          <ul className="mt-3 space-y-1.5" aria-live="polite">
            {HANDOVER.map((item, i) => (
              <AnimatePresence key={item}>
                {gone && (
                  <motion.li
                    initial={reduce ? false : { opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reduce ? 0 : 0.25 + i * 0.35, duration: 0.45, ease: ease as any }}
                    className="flex items-start gap-2 text-sm font-medium text-foreground/90"
                  >
                    <span className="text-emerald-400 font-black mt-px" aria-hidden>✓</span>
                    {item}
                  </motion.li>
                )}
              </AnimatePresence>
            ))}
            {!gone && (
              <li className="text-sm text-muted-foreground font-medium leading-relaxed">
                Your registers, your books, your customers, your phone — on code and data your business owns.
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="p-6 md:p-8 border-t border-border/20 text-center">
        {!gone ? (
          <button
            type="button"
            onClick={() => setGone(true)}
            className="px-10 h-16 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm md:text-base shadow-[0_14px_44px_-10px_rgba(255,85,0,0.45)] hover:opacity-90 active:scale-[0.98] transition-all"
          >
            Make Found It Disappear
          </button>
        ) : (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduce ? 0 : 2.6, duration: 0.6 }}
          >
            <p className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-foreground">
              The builder left. <span className="text-primary">The business didn&rsquo;t.</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground font-medium">
              That is not a metaphor. It is the deal &mdash; thirty days&rsquo; notice, and all six items above go with you.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
              {showStandardLink && (
                <Link href="/owned-software" className="inline-flex items-center justify-center px-6 h-12 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-xs hover:opacity-90 transition-opacity">
                  Open the Owned Software Standard
                </Link>
              )}
              <Link href="/security" className="inline-flex items-center justify-center px-6 h-12 rounded-full border border-border/30 text-foreground/90 font-black uppercase tracking-wider text-xs hover:border-primary/50 transition-colors">
                What happens if we fail
              </Link>
            </div>
            <button
              type="button"
              onClick={() => setGone(false)}
              className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-faint hover:text-foreground transition-colors"
            >
              Resume support →
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
