'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { OS_PRICING } from '@/lib/site';

const ease = [0.16, 1, 0.3, 1] as const;

/* 8/18 audit rebuild: this is FOUND IT OS pricing — one number, one thought.
   The marketing services still price honestly (flat fees, scoped in writing)
   but live in a contained, visibly secondary block. Only approved numbers:
   OS_PRICING is the site's ONLY sticker price; marketing rows carry fee
   MODELS, not invented stickers. */

const osFeatures = [
  'Starts with the software map — a $2,000 engagement on its own, yours before you pay anything',
  'Runs beside your old system until the books match to the penny',
  'You own the code and the data — if we part ways, the system stays yours',
  'Month-to-month — no contracts',
];

/* Contained marketing pricing: compact rows, one link each. */
const marketingRows = [
  { name: 'Google Ads Management', model: 'Flat monthly fee — scoped on the free audit', href: '/google-ads-management' },
  { name: 'Custom Web Design', model: 'Flat project quote — full number before any code', href: '/web-design' },
  { name: 'AI Search Optimization', model: 'Flat monthly fee — scoped after the free AI audit', href: '/ai-search-optimization' },
  { name: 'Social Media Management', model: 'Flat monthly fee — scoped to platforms and volume', href: '/social-media-management' },
  { name: 'Custom App Development', model: 'Fixed project price — scoped at a free blueprint', href: '/app-development' },
  { name: 'AI Lead Response', model: 'Flat monthly fee — live in 1 to 2 weeks', href: '/ai-marketing' },
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
              Not sure you&apos;re who we build for? Check your fit — 60 seconds →
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
            </div>
            <p className="text-base lg:text-lg font-black text-foreground italic tracking-tight max-w-xs lg:text-right">
              One job: {OS_PRICING.promise}
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
              open contact form — qualified gets the map and the call. */}
          <Link href="/fit">
            <motion.div whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto sm:inline-flex text-center font-black uppercase italic tracking-tighter py-4 px-10 rounded-xl text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity items-center justify-center gap-2"
            >
              Get My Software Map <ArrowRight className="w-4 h-4" />
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
            You&rsquo;re not paying for permission to use your own software. The monthly covers{' '}
            <span className="text-foreground font-bold">hosting, nightly backups, support you can
            actually call, and new features as your business grows.</span>{' '}
            <span className="text-foreground font-bold">Stop paying and the work stops — not your
            software.</span> Cancel with 30 days&rsquo; notice and the system leaves with you: the
            code and the data.
          </p>
        </motion.div>

        {/* Contained marketing pricing — visibly secondary by design. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="bg-card/5 border border-border/10 rounded-2xl p-6 lg:p-8 mb-16"
        >
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-faint mb-1">Need Customers Too?</p>
          <h3 className="text-sm font-black tracking-tighter text-foreground mb-2">Marketing Pricing</h3>
          <p className="text-xs text-muted-foreground font-medium leading-relaxed mb-5 max-w-2xl">
            Thirteen years of it, for the companies we build systems for. Every service is a flat
            fee, in writing, before you pay — you own your ad accounts, your site, your code.
          </p>
          <div className="divide-y divide-border/10">
            {marketingRows.map((row) => (
              <div key={row.href} className="py-3 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <p className="text-sm font-bold text-foreground sm:w-56 shrink-0">{row.name}</p>
                <p className="text-xs text-muted-foreground font-medium flex-grow">{row.model}</p>
                <Link href={row.href} className="text-xs text-primary font-bold whitespace-nowrap hover:underline">
                  Details →
                </Link>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-muted-foreground/70 font-medium mt-4">
            Ad spend goes directly to Google — never marked up, never bundled.
          </p>
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
            We&rsquo;ll map the system we&rsquo;d build for it. You keep the map either way.
          </p>
          <div className="flex justify-center">
            <Link href="/fit" className="w-full sm:w-auto max-w-sm">
              <LiquidButton className="w-full sm:w-auto px-10 h-14 text-base tracking-[0.05em] shadow-2xl shadow-primary/20">
                Get My Software Map
              </LiquidButton>
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
