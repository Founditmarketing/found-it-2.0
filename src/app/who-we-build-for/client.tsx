'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { OS_PRICING } from '@/lib/site';
import TheAsk from '@/components/TheAsk';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* WHO WE BUILD FOR — recognition first (9/5 rebuild on the external critique,
   filtered through Trevor: "dont take all of his advicce remember simplicity
   and beauty and dont overwhelm us with lots of words"). The old page led
   with the rejection ("We Don't Build For Everyone" + criteria + exclusions)
   — a filter, not an invitation. Now: the owner recognizes himself in four
   questions, sees two real builds, hears the price flat (Gucci law), and the
   walls stay TRUE but compact — one mono strip, with the full WHY in the
   fine-detail cabinet. "Sick of renting software" is GONE as a qualification:
   ownership is the payoff, never the entrance exam. The house close ends it. */

const QUESTIONS = [
  'Where’s that order?',
  'Did they pay?',
  'What did we promise?',
  'Who’s following up?',
];

const RECOGNIZE = [
  'Owner-run',
  'Roughly $1M–$20M a year',
  'Dealers',
  'Contractors',
  'Wholesale',
  'Retail',
  'Professional practices',
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
      'A fitting maps how the business really runs, and only the owner can decide to change it. Bring the office manager or the bookkeeper too — the person who knows where it gets stuck is what makes the map true. An info packet cannot.',
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
        {/* Hero — recognition, not requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-14 md:mb-20"
        >
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
            Who We Build For
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-8">
            For the Owner{' '}
            <span className="text-primary">Everyone Still Has to Ask.</span>
          </h1>

          {/* The four questions, as objects */}
          <div className="flex flex-wrap gap-2 mb-8" aria-label={QUESTIONS.join(' ')}>
            {QUESTIONS.map((q) => (
              <span
                key={q}
                className="inline-flex items-center h-9 px-4 rounded-full border border-border/30 bg-card/20 font-mono text-[11px] sm:text-xs font-black uppercase tracking-[0.12em] text-muted-foreground"
              >
                {q}
              </span>
            ))}
          </div>

          <p className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter leading-[0.95] text-foreground mb-6">
            Your business has grown.{' '}
            <span className="text-primary">Too much of the system is still you.</span>
          </p>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl leading-relaxed">
            We build the system around how you run &mdash; custom software with an AI employee
            inside. <span className="text-foreground font-bold">And you own the code and the data.</span>
          </p>
        </motion.div>

        {/* Recognize your business — chips, not criteria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-14 md:mb-20"
        >
          <p className="font-mono text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-primary mb-4">
            Recognize your business?
          </p>
          <div className="flex flex-wrap gap-2">
            {RECOGNIZE.map((r) => (
              <span
                key={r}
                className="inline-flex items-center h-8 px-3.5 rounded-full border border-primary/25 bg-primary/[0.06] font-mono text-[11px] font-black uppercase tracking-[0.12em] text-foreground/90"
              >
                {r}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Two real builds — different businesses, different software */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14 md:mb-20"
        >
          <Link
            href="/blog/nursery-management-software"
            className="group bg-card/10 border border-border/20 rounded-2xl p-6 lg:p-7 hover:border-primary/40 transition-colors"
          >
            <p className="font-mono text-[9px] font-black uppercase tracking-[0.25em] text-faint mb-2">A wholesale nursery</p>
            <p className="text-base font-black uppercase italic tracking-tighter text-foreground leading-tight">
              Messy broker orders become checked pull sheets{' '}
              <span className="text-primary group-hover:ml-1 transition-all" aria-hidden>→</span>
            </p>
          </Link>
          <Link
            href="/case-studies"
            className="group bg-card/10 border border-border/20 rounded-2xl p-6 lg:p-7 hover:border-primary/40 transition-colors"
          >
            <p className="font-mono text-[9px] font-black uppercase tracking-[0.25em] text-faint mb-2">An auto shop</p>
            <p className="text-base font-black uppercase italic tracking-tighter text-foreground leading-tight">
              The service desk, live on its own migrated records{' '}
              <span className="text-primary group-hover:ml-1 transition-all" aria-hidden>→</span>
            </p>
          </Link>
        </motion.div>

        {/* The room */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-14 md:mb-20"
        >
          <p className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter leading-[0.95] text-foreground mb-3">
            Bring the person who knows{' '}
            <span className="text-primary">where it gets stuck.</span>
          </p>
          <p className="text-base text-muted-foreground font-medium max-w-2xl leading-relaxed">
            The owner in the room to say go &mdash; and the office manager or bookkeeper who lives
            in it every day.
          </p>
        </motion.div>

        {/* The number and the walls — stated flat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-10"
        >
          <p className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">
            {OS_PRICING.monthly}/mo + {OS_PRICING.setup} setup &middot; Month-to-Month &middot; Printed on Purpose
          </p>
          <p className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-faint">
            No Restaurants &middot; No Payroll &middot; No Tax Filing &middot; No Trust Accounting &middot; Ever
          </p>
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

        {/* The house close */}
        <TheAsk />
      </div>
    </main>
  );
}
