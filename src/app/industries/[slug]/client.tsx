'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { trackCallClick } from '@/lib/analytics';
import { phoneHref, phoneDisplay, CALLRAIL_CLASS } from '@/lib/phone';
import type { IndustryData } from './data';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const services = [
  { label: 'Google Ads', href: '/lp/google-ads-management' },
  { label: 'Web Design', href: '/lp/web-design' },
  { label: 'AI Search / SEO', href: '/lp/ai-search-seo' },
  { label: 'Social Media', href: '/lp/social-media-management' },
];

export default function IndustryPageClient({ data }: { data: IndustryData }) {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/[0.02] rounded-full blur-[150px]" />
      </div>
      <div className="max-w-[900px] mx-auto px-6 relative z-10">

        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-60">{data.name}</p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            {data.headline.split('.')[0]}
            {data.headline.includes('.') && <span className="text-primary">.{data.headline.split('.').slice(1).join('.')}</span>}
            {!data.headline.includes('.') && ''}
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl leading-relaxed mb-8">
            {data.subline}
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Link href="/lp/google-ads-management#lp-form">
              <LiquidButton className="px-10 h-14 text-base tracking-[0.05em] shadow-2xl shadow-primary/20">
                {data.ctaText}
              </LiquidButton>
            </Link>
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 border border-primary/15 rounded-xl px-4 py-2 text-center">
                <p className="text-2xl font-black text-primary italic tracking-tighter">{data.heroStat.value}</p>
                <p className="text-[9px] font-black uppercase tracking-[0.15em] text-muted-foreground/50">{data.heroStat.label}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Pain Points — 3 bullets ── */}
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

        {/* ── Solutions — 3 bullets ── */}
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

        {/* ── Services — links to LPs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground mb-6">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((svc, i) => (
              <Link key={i} href={svc.href} className="group flex items-center justify-between bg-card/10 border border-border/15 rounded-xl px-5 py-4 hover:border-primary/25 transition-all">
                <span className="text-sm font-bold text-foreground">{svc.label}</span>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
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
            Free audit for {data.name.toLowerCase()} businesses. No pitch, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/lp/google-ads-management#lp-form">
              <LiquidButton className="px-10 h-14 text-base tracking-[0.05em] shadow-2xl shadow-primary/20">
                {data.ctaText}
              </LiquidButton>
            </Link>
            <a href={phoneHref} onClick={() => trackCallClick()} className={`flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-bold ${CALLRAIL_CLASS}`}>
              <Phone className="w-4 h-4" /> {phoneDisplay}
            </a>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
