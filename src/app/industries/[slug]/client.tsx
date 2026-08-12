'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { LeadFormEmbed } from '@/components/lp/LeadFormEmbed';
import { trackCallClick } from '@/lib/analytics';
import { SafePhone, SafePhoneText } from '@/components/landing/SafePhone';
import { OsRail } from '@/components/os/OsRail';
import { railDesktops, railPhones } from '@/lib/os-screens';
import type { IndustryData } from './data';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* The 10%: marketing, one slim band near the bottom — never primary. */
const marketingLinks = [
  { label: 'Google Ads', href: '/google-ads-management' },
  { label: 'AI Search / SEO', href: '/ai-search-optimization' },
  { label: 'Social Media', href: '/social-media-management' },
];

/* Where an industry has a dedicated system page, send readers there. */
const PILLAR_LINKS: Record<string, { label: string; href: string }> = {
  contractors: { label: 'See the contractor systems on screen', href: '/custom-software/contractors' },
  retail: { label: 'See the House System on screen', href: '/custom-software/retail-stores' },
  dealerships: { label: 'See the dealership system', href: '/custom-software/car-dealerships' },
};

/* One mixed evidence rail: desktops and phones interleaved. */
const railMix = [
  ...railDesktops.flatMap((d, i) => (railPhones[i] ? [d, railPhones[i]] : [d])),
  ...railPhones.slice(railDesktops.length),
];

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

        {/* ── The stable, drifting past — not mockups, screenshots ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="relative left-1/2 -translate-x-1/2 w-screen mb-16"
        >
          <OsRail items={railMix} href={PILLAR_LINKS[data.slug]?.href || '/custom-software'} size="sm" />
        </motion.div>

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
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-faint mb-1">The Other 10%</p>
              <p className="text-sm font-black uppercase italic tracking-tighter text-foreground">Marketing, When You Want It</p>
            </div>
            <p className="text-xs text-muted-foreground font-medium leading-relaxed flex-grow">
              When you want customers on top of the system, the same team runs the ads and the AI search.
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
                Tell us how your business runs today — the software, the paper, the workarounds — and we will map the system we would build if it were ours. You keep the map either way. No pitch, no obligation.
              </p>
              <p className="text-sm text-muted-foreground">
                Prefer to talk? Call{' '}
                <SafePhone onClick={() => trackCallClick()} className="text-primary font-bold"><SafePhoneText /></SafePhone>{' '}
                or{' '}
                <Link href="/contact" className="text-primary font-bold hover:underline">book a call</Link>.
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
            Call Trevor.{' '}<span className="text-primary">15 Minutes.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium italic mb-8 max-w-md mx-auto">
            A free fitting for {data.name.toLowerCase()} businesses — we walk your operation and map the system. No pitch, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#lead-form">
              <LiquidButton className="px-10 h-14 text-base tracking-[0.05em] shadow-2xl shadow-primary/20">
                {data.ctaText}
              </LiquidButton>
            </Link>
            <SafePhone onClick={() => trackCallClick()} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-bold">
              <Phone className="w-4 h-4" /> <SafePhoneText />
            </SafePhone>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
