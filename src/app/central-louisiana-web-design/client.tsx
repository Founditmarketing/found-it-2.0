'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { trackCallClick } from '@/lib/analytics';
import { phoneHref, phoneDisplay, CALLRAIL_CLASS } from '@/lib/phone';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface GeoClientProps {
  region: string;
  city: string;
  service: 'web-design' | 'google-ads-management' | 'ai-search-seo' | 'social-media-management';
}

const serviceLabels: Record<string, { headline: string; sub: string; cta: string }> = {
  'web-design': {
    headline: 'Web Design',
    sub: 'Custom websites that turn visitors into calls. Mobile-first, fast-loading, built to convert.',
    cta: 'Get a Free Concept Call',
  },
  'google-ads-management': {
    headline: 'Google Ads & Digital Marketing',
    sub: 'Get more leads from Google Ads. Real conversion tracking, weekly optimization, transparent reporting.',
    cta: 'Get a Free Audit',
  },
  'ai-search-seo': {
    headline: 'SEO & AI Search Optimization',
    sub: 'Show up on Google and in AI search results. ChatGPT, Perplexity, Google AI — we make sure you are the answer.',
    cta: 'Get a Free AI Audit',
  },
  'social-media-management': {
    headline: 'Social Media Management',
    sub: 'Content that gets calls, not just likes. We create it, you approve it, your phone rings.',
    cta: 'Get a Free Content Plan',
  },
};

export default function GeoClient({ region, city, service }: GeoClientProps) {
  const svc = serviceLabels[service];

  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/[0.02] rounded-full blur-[150px]" />
      </div>
      <div className="max-w-[800px] mx-auto px-6 relative z-10">

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="text-center mb-16">
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-60">{region}, Louisiana</p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            {svc.headline} in{' '}<span className="text-primary">{region}.</span>
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed mb-10">
            {svc.sub} Based right here in {city} — not a remote agency guessing at your market.
          </p>
          <Link href={`/lp/${service}#lp-form`}>
            <LiquidButton className="px-10 h-14 text-base tracking-[0.05em] shadow-2xl shadow-primary/20">{svc.cta}</LiquidButton>
          </Link>
          <p className="text-sm text-muted-foreground/50 font-medium mt-4">Free. No contracts. No commitment.</p>
        </motion.div>

        {/* Why local */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}
          className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl p-8 lg:p-10 mb-10"
        >
          <h3 className="text-lg font-black uppercase italic tracking-tighter text-foreground mb-5">Why Local Matters</h3>
          <div className="space-y-4">
            {[
              `We are based in ${city}. Same market, same community, same time zone.`,
              'We understand Central Louisiana businesses — contractors, medical, retail, dealerships.',
              'When you call, you talk to the person doing the work. Not a call center.',
              'Month-to-month. No contracts. Cancel anytime.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6, ease }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16"
        >
          {[
            { label: 'Google Ads', href: '/lp/google-ads-management' },
            { label: 'Web Design', href: '/lp/web-design' },
            { label: 'AI Search / SEO', href: '/lp/ai-search-seo' },
            { label: 'Social Media', href: '/lp/social-media-management' },
          ].map((item, i) => (
            <Link key={i} href={item.href} className="group flex items-center justify-between bg-card/10 border border-border/15 rounded-xl px-5 py-4 hover:border-primary/25 transition-all">
              <span className="text-sm font-bold text-foreground">{item.label}</span>
              <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}
          className="text-center py-12 border-t border-border/10"
        >
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
            Call Trevor.{' '}<span className="text-primary">He&apos;s Local.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link href={`/lp/${service}#lp-form`}>
              <LiquidButton className="px-10 h-14 text-base tracking-[0.05em] shadow-2xl shadow-primary/20">Book a Free Call</LiquidButton>
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
