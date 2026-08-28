'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { LeadFormEmbed } from '@/components/lp/LeadFormEmbed';
import type { IndustryData } from './data';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* MARKETING SALES DEAD (8/26): AI Search is the only marketing offer left. */
const marketingLinks = [
  { label: 'AI Search / SEO', href: '/ai-search-optimization' },
];

/* Industries without their own sanctioned captures still open with pictures:
   the strongest cross-trade shots, honestly labeled. */
const DEFAULT_SCREENS: { src: string; alt: string; caption: string }[] = [
  {
    src: '/os-screens/lonestar-os-desk-v1.png',
    alt: 'Lonestar OS desk, 30-day sold total, the build pipeline, and escalations a human should look at (demo data)',
    caption: 'A shed builder’s desk. Thirty days of sales, every build on the line, and the problems pulled to the top.',
  },
  {
    src: '/os-screens/roxanne-os-intake-v2.png',
    alt: 'Order intake, an order pasted as it came in, every line captured, the odd one held in red (demo data)',
    caption: 'A nursery’s order intake. Paste the order as it came in. Every line captured, the odd one held in red, never dropped.',
  },
  {
    src: '/os-screens/lawyer-os-prescription-v1.png',
    alt: 'A law firm’s Prescription Watch, every date entered by hand, red when ignored (demo data)',
    caption: 'A law firm’s deadline watch. It refuses to compute a date, and it never lets one slip out of sight.',
  },
];

/* Where an industry has a dedicated system page, send readers there. */
const PILLAR_LINKS: Record<string, { label: string; href: string }> = {
  contractors: { label: 'See the contractor systems on screen', href: '/custom-software/contractors' },
  retail: { label: 'See the House System on screen', href: '/custom-software/retail-stores' },
  dealerships: { label: 'See the dealership system', href: '/custom-software/car-dealerships' },
};

export default function IndustryPageClient({ data }: { data: IndustryData }) {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/[0.02] rounded-full blur-[150px]" />
      </div>
      <div className="max-w-[900px] mx-auto px-6 relative z-10">

        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="mb-10 text-xs font-bold uppercase tracking-[0.2em] text-faint">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2 text-faint">/</span>
          <span className="text-foreground">{data.name} Software</span>
        </nav>

        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">Custom Software · {data.name}</p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            {data.headline.split('.')[0]}
            {data.headline.includes('.') && <span className="text-primary">.{data.headline.split('.').slice(1).join('.')}</span>}
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl leading-relaxed mb-8">
            {data.subline}
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Link href="#lead-form">
              <LiquidButton className="px-10 h-14 text-base tracking-[0.05em] shadow-2xl shadow-primary/20">
                {data.ctaText}
              </LiquidButton>
            </Link>
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 border border-primary/15 rounded-xl px-4 py-2 text-center">
                <p className="text-2xl font-black text-primary italic tracking-tighter">{data.heroStat.value}</p>
                <p className="text-[9px] font-black uppercase tracking-[0.15em] text-faint">{data.heroStat.label}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── The system, on screen — pictures FIRST, prose after ── */}
        {(() => {
          const screens = data.screens?.length ? data.screens : DEFAULT_SCREENS;
          const note = data.screens?.length
            ? data.screensNote
            : 'These run other Louisiana businesses today. Yours gets fitted the same way. Demo data on every screen.';
          const heading = data.screens?.length ? 'The System, On Screen' : 'Live Systems, On Screen';
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground mb-8">
                {heading}
              </h2>
              <div className="space-y-10">
                {screens.map((s, i) => (
                  <motion.figure
                    key={s.src}
                    initial={{ opacity: 0, y: 28, scale: 0.985 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    whileHover={{ scale: 1.012 }}
                    transition={{ delay: i * 0.06, duration: 0.65, ease }}
                    className="m-0"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.src}
                      alt={s.alt}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      className="w-full rounded-2xl border border-border/20 shadow-2xl shadow-black/40"
                    />
                    <figcaption className="text-sm text-muted-foreground font-medium leading-relaxed mt-3">
                      {s.caption}
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
              {note && (
                <p className="text-xs text-faint font-medium leading-relaxed mt-6">{note}</p>
              )}
            </motion.div>
          );
        })()}

        {/* ── Definition (answer-first) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground mb-5">
            {data.definitionHeading}
          </h2>
          <div className="border-l-4 border-primary pl-6">
            <p className="text-lg text-muted-foreground font-medium leading-relaxed">{data.definition}</p>
          </div>
        </motion.div>

        {/* ── Pain Points ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground mb-8">
            The Problem
          </h2>
          <div className="space-y-5">
            {data.painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease }}
                className="bg-card/10 border border-border/15 rounded-2xl p-5 lg:p-6"
              >
                <h3 className="text-sm font-black uppercase italic tracking-tighter text-foreground mb-1">{point.title}</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Solutions ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground mb-8">
            How We Fix It
          </h2>
          <div className="space-y-5">
            {data.solutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease }}
                className="flex items-start gap-4"
              >
                <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase italic tracking-tighter text-foreground">{sol.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed mt-1">{sol.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Pillar deep-link + the 10% marketing band ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          {PILLAR_LINKS[data.slug] && (
            <Link
              href={PILLAR_LINKS[data.slug].href}
              className="group flex items-center justify-between bg-card/15 border border-primary/25 rounded-2xl px-6 py-5 mb-6 hover:border-primary/50 transition-colors"
            >
              <span className="text-sm font-black uppercase italic tracking-tighter text-foreground">{PILLAR_LINKS[data.slug].label}</span>
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
          <div className="bg-card/5 border border-border/10 rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div className="shrink-0">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-faint mb-1">One More Thing</p>
              <p className="text-sm font-black uppercase italic tracking-tighter text-foreground">Be the Answer AI Gives</p>
            </div>
            <p className="text-xs text-muted-foreground font-medium leading-relaxed flex-grow">
              When someone asks ChatGPT who to hire in your trade, the same team makes sure it says you.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 shrink-0">
              {marketingLinks.map((m) => (
                <Link key={m.href} href={m.href} className="text-xs text-primary font-bold hover:underline whitespace-nowrap">
                  {m.label} →
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Lead form ── */}
        <motion.div
          id="lead-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16 scroll-mt-28"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
                {data.ctaText}
              </h2>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-6">
                Tell us how your business runs today. The software, the paper, the workarounds. We&rsquo;ll show you what we&rsquo;d build if it were ours. Free, about thirty minutes, screen-shared. If it&rsquo;s not a fit, we tell you straight.
              </p>
            </div>
            <LeadFormEmbed heading={data.ctaText} source={data.formSource} pageSlug={`industry-${data.slug}`} />
          </div>
        </motion.div>

        {/* ── FAQ ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground mb-8">
            {data.name} Software FAQ
          </h2>
          <div className="space-y-8">
            {data.faqs.map((f) => (
              <div key={f.question}>
                <h3 className="text-base font-black text-foreground mb-2">{f.question}</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center py-16 border-t border-border/10"
        >
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
            Thirty Minutes.{' '}<span className="text-primary">See What Yours Would Look Like.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium italic mb-8 max-w-md mx-auto">
            A free fitting for {data.name.toLowerCase()} businesses. We walk your operation, screen-shared, and show you what we&rsquo;d build.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#lead-form">
              <LiquidButton className="px-10 h-14 text-base tracking-[0.05em] shadow-2xl shadow-primary/20">
                {data.ctaText}
              </LiquidButton>
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
