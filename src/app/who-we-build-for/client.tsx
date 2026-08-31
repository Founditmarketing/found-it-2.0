'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, X, ChevronDown } from 'lucide-react';
import { OS_PRICING } from '@/lib/site';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* WHO WE BUILD FOR — the selective posture as a page. SPARSE by law: the
   main read lands in a glance; the longer WHY lives behind "The fine
   detail". Every turn-down is TRUE (no theater), and the fit check is the
   door. */

const who = [
  'Owner-operated',
  'Roughly $1M–$20M a year',
  'Sells parts, product, or service, on accounts and terms',
  'Sick of renting software',
  'The owner will sit with us for an hour',
];

const turnDown = [
  'Restaurants',
  'Payroll or taxes. Your accountant keeps those, always',
  'Trust or escrow accounting',
  'Owners who won’t be in the room',
  'Anyone shopping for the cheapest option',
];

const fineDetail: { title: string; detail: string }[] = [
  {
    title: 'Why the $1M–$20M band',
    detail:
      `Big enough that ${OS_PRICING.monthly} a month pays for itself fast. Small enough that the owner still runs the room. That is the whole method. Under the band but the office is drowning anyway? Take the fit check. Paper-heavy service businesses punch above their revenue.`,
  },
  {
    title: 'Why no restaurants',
    detail:
      'Restaurant POS systems are good at their job. Custom software would cost you more and serve you worse. So we say so.',
  },
  {
    title: 'Why payroll and taxes never',
    detail:
      'A mistake there lands on real paychecks and real tax filings. Your accountant keeps both, always. The system hands them clean books.',
  },
  {
    title: 'Why no trust or escrow accounting',
    detail:
      'Money held for someone else has rules we refuse to be clever about. Wrong tool, wrong builder. We tell lawyers the same thing.',
  },
  {
    title: 'Why the owner has to be in the room',
    detail:
      'A fitting maps how the business really runs. Only the owner knows that. Only the owner can decide to change it. An info packet cannot.',
  },
  {
    title: 'Why not the cheapest option',
    detail:
      `The price is printed: ${OS_PRICING.monthly} a month plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. If cheapest is the goal, we are not it. We would rather say that now.`,
  },
];

export default function WhoClient() {
  const [open, setOpen] = useState(false);

  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-24 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-14"
        >
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
            Who It&apos;s For
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-5">
            We Don&apos;t Build{' '}
            <span className="text-primary">For Everyone.</span>
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto">
            One business at a time, a handful of new fittings a month. The list stays short on purpose.
          </p>
        </motion.div>

        {/* Who / who not */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="bg-card/15 backdrop-blur-xl border border-primary/25 rounded-2xl p-6 lg:p-8"
          >
            <h2 className="text-xl font-black uppercase italic tracking-tighter text-primary mb-5">
              Who We Build For
            </h2>
            <ul className="space-y-4">
              {who.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-foreground font-bold leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease }}
            className="bg-card/10 backdrop-blur-xl border border-border/20 rounded-2xl p-6 lg:p-8"
          >
            <h2 className="text-xl font-black uppercase italic tracking-tighter text-foreground mb-5">
              Who We Turn Down
            </h2>
            <ul className="space-y-4">
              {turnDown.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-md bg-card/40 border border-border/30 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-muted-foreground" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-muted-foreground font-bold leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Close + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <p className="text-base text-foreground font-bold mb-6">
            Either way, the look is free. We show you what we'd build, and you decide.
          </p>
          <Link
            href="/fit"
            className="inline-flex items-center justify-center px-10 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
          >
            Check Your Fit in 60 Seconds
          </Link>
        </motion.div>

        {/* The fine detail — the clearly-marked door for the thorough reader */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="bg-card/10 backdrop-blur-xl border border-border/20 rounded-2xl overflow-hidden"
        >
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="fine-detail-panel"
            className="w-full flex items-center justify-between px-6 lg:px-8 py-5 text-left group"
          >
            <span className="text-sm font-black uppercase italic tracking-tighter text-foreground group-hover:text-primary transition-colors">
              The Fine Detail. Why every line above is true
            </span>
            <ChevronDown
              className={`w-4 h-4 text-primary shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
          <motion.div
            initial={false}
            animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.4, ease }}
            style={{ overflow: 'hidden' }}
            id="fine-detail-panel"
            aria-hidden={!open}
          >
            <div className="px-6 lg:px-8 pb-7 space-y-5">
              {fineDetail.map((f) => (
                <div key={f.title} className="border-l-[3px] border-primary/60 pl-5">
                  <p className="text-sm font-black tracking-tighter text-foreground mb-1">{f.title}</p>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{f.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
