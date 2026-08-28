'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { AISEO_PRICING, FOUNDING, OS_PRICING } from '@/lib/site';

const ease = [0.16, 1, 0.3, 1] as const;

/* 8/18 audit rebuild: this is FOUND IT OS pricing — one number, one thought.
   MARKETING SALES DEAD (8/26): the marketing rows are gone. The only services
   below the OS are AI Search Optimization (the sole marketing offer, prices
   printed from AISEO_PRICING) and Custom App Development (software). Never
   re-add a marketing row. */

/* Outcome-first, one objection dead per line (8/19, Trevor: "we can do
   better"). Declaratives only — restraint law bans staging the buyer's
   questions in his own voice. The stop-paying line lives in the rent-paradox
   block below, not here (once per page). */
const osFeatures = [
  'First we show you what we’d build if we owned your company. Free, about thirty minutes, screen-shared, before you pay anything',
  'You keep working your old software like today. The new system fills itself beside it until the numbers match and you say go',
  'Leave with 30 days’ notice and the system leaves with you, still running',
  'Month to month. The system earns the next month, every month',
];

/* The two services that exist beside the OS. Prices printed, per doctrine. */
const otherRows = [
  {
    name: 'AI Search Optimization',
    model: `${AISEO_PRICING.standard}/mo standard, ${AISEO_PRICING.premium}/mo ${AISEO_PRICING.premiumLabel}`,
    href: '/ai-search-optimization',
  },
  { name: 'Custom App Development', model: 'Fixed project price, set on a free call', href: '/app-development' },
];

export default function PricingClient() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/[0.02] rounded-full blur-[150px]" />
      </div>
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: ease as any }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">Found It OS Pricing</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            The Whole Price.{' '}
            <span className="text-primary">Printed.</span>
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            Almost nobody in custom software will put a number on the page. Here&rsquo;s ours.
          </p>
          {/* The one fit-check line on this page (by law: exactly one). */}
          <p className="mt-4">
            <Link href="/fit" className="text-sm font-bold text-primary hover:underline">
              Not sure you&apos;re who we build for? Check your fit. 60 seconds →
            </Link>
          </p>
        </motion.div>

        {/* THE price */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="bg-card/20 backdrop-blur-xl border border-primary/25 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-primary/10 mb-6"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-2">Found It OS</p>
              <p className="text-4xl lg:text-5xl font-black text-foreground italic tracking-tighter">
                {OS_PRICING.monthly}<span className="text-lg text-muted-foreground font-bold not-italic"> {OS_PRICING.monthlyLabel}</span>
              </p>
              <p className="text-xl font-black text-muted-foreground italic tracking-tighter mt-1">
                + {OS_PRICING.setup} <span className="text-sm font-bold not-italic">{OS_PRICING.setupLabel}</span>
              </p>
              {/* The founding-accounts counter — pips read 14/20 from
                  FOUNDING in lib/site.ts (one number to bump as spots fill).
                  Retire the whole block once taken === total. */}
              <div className="mt-4">
                <div className="flex items-center gap-1.5 mb-2">
                  {Array.from({ length: FOUNDING.total }, (_, k) => (
                    <span
                      key={k}
                      className={`h-3 w-3 rounded-[4px] ${
                        k < FOUNDING.taken
                          ? 'bg-primary'
                          : 'border border-primary/40 bg-transparent'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  Regular price: <span className="text-foreground font-black">{OS_PRICING.monthly}/mo</span>. The first{' '}
                  {FOUNDING.total} founding accounts: <span className="text-foreground font-black">{FOUNDING.price}/mo for life</span>.{' '}
                  <span className="text-primary font-black">{FOUNDING.total - FOUNDING.taken} founding slots remain.</span>
                </p>
              </div>
            </div>
            {/* The promise stands alone — a declaration, not a labeled
                footnote. Verbatim, once on this page. */}
            <p className="text-xl lg:text-2xl font-black text-primary italic tracking-tighter max-w-sm lg:text-right leading-tight">
              {OS_PRICING.promise}
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 mb-8">
            {osFeatures.map((f, j) => (
              <div key={j} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground font-medium">{f}</span>
              </div>
            ))}
          </div>
          {/* THE GATE (8/16): the OS fitting starts at the fit check, not the
              open contact form — qualified gets the call. */}
          <Link href="/fit">
            <motion.div whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto sm:inline-flex text-center font-black uppercase italic tracking-tighter py-4 px-10 rounded-xl text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity items-center justify-center gap-2"
            >
              Are We a Fit? 60 Seconds. <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>

        {/* THE RENT PARADOX — P0 (8/18 audit): answer the question the price
            just raised, before the visitor has to think it. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="bg-card/10 border border-border/20 rounded-3xl p-8 lg:p-10 mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground mb-4">
            If You Own It, Why Is There a Monthly Fee?
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground font-medium leading-relaxed max-w-3xl">
            You&rsquo;re not paying to use your own software. The monthly covers{' '}
            <span className="text-foreground font-bold">hosting, nightly backups, support you can
            actually call, and new features as your business grows.</span>{' '}
            <span className="text-foreground font-bold">Stop paying and the work stops, not your
            software.</span> Cancel with 30 days&rsquo; notice and the system leaves with you. The
            code and the data.
          </p>
        </motion.div>

        {/* The rest of the catalog — visibly secondary by design. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="bg-card/5 border border-border/10 rounded-2xl p-6 lg:p-8 mb-16"
        >
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-faint mb-1">Beyond the OS</p>
          <h3 className="text-sm font-black tracking-tighter text-foreground mb-2">Everything Else We Build</h3>
          <p className="text-xs text-muted-foreground font-medium leading-relaxed mb-5 max-w-2xl">
            Two things, priced in writing before you pay. Found It no longer takes new marketing
            clients. AI Search Optimization is the one exception, because being the answer when
            someone asks an AI who to hire is worth paying for.
          </p>
          <div className="divide-y divide-border/10">
            {otherRows.map((row) => (
              <div key={row.href} className="py-3 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <p className="text-sm font-bold text-foreground sm:w-56 shrink-0">{row.name}</p>
                <p className="text-xs text-muted-foreground font-medium flex-grow">{row.model}</p>
                <Link href={row.href} className="text-xs text-primary font-bold whitespace-nowrap hover:underline">
                  Details →
                </Link>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="text-center py-16 border-t border-border/10"
        >
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
            Show Us How Your Business Runs.
          </h2>
          <p className="text-lg text-muted-foreground font-medium italic mb-8 max-w-md mx-auto">
            We&rsquo;ll show you what we&rsquo;d build if it were ours. If it&rsquo;s not a fit, we tell you straight.
          </p>
          <div className="flex justify-center">
            <Link href="/fit" className="w-full sm:w-auto max-w-sm">
              <LiquidButton className="w-full sm:w-auto px-10 h-14 text-base tracking-[0.05em] shadow-2xl shadow-primary/20">
                Are We a Fit? 60 Seconds.
              </LiquidButton>
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
