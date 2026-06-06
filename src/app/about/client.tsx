'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Phone, MapPin, Trophy } from 'lucide-react';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { trackCallClick } from '@/lib/analytics';
import { phoneHref, phoneDisplay, CALLRAIL_CLASS } from '@/lib/phone';
import { AWARD } from '@/lib/site';

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: '13+', label: 'Years in Business' },
  { value: '100+', label: 'Clients Served' },
  { value: '48', label: 'States Reached' },
  { value: '0', label: 'Long-Term Contracts' },
];

const services = [
  { name: 'Google Ads Management', desc: 'Weekly optimization, real conversion tracking, transparent reporting.', href: '/lp/google-ads-management' },
  { name: 'Custom Web Design', desc: 'Fast, mobile-first websites that turn visitors into calls. You own everything.', href: '/lp/web-design' },
  { name: 'AI Search Optimization', desc: 'Get recommended by ChatGPT, Perplexity, and Google AI.', href: '/lp/ai-search-seo' },
  { name: 'Social Media Management', desc: 'Real content, real strategy. We create it, you approve it.', href: '/lp/social-media-management' },
];

const differentiators = [
  'You own everything — your accounts, your code, your data.',
  'No long-term contracts. Month-to-month. Cancel anytime.',
  'Senior strategist on every account. No hand-offs to interns.',
  'Based in Alexandria, LA. Real people, real phone number.',
];

const serviceArea = ['Louisiana', 'Mississippi', 'East Texas', 'Southern Arkansas'];

export default function AboutPage() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/[0.02] rounded-full blur-[150px]" />
      </div>
      <div className="max-w-[900px] mx-auto px-6 relative z-10">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: ease as any }}
          className="mb-20"
        >
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-60">About Us</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            We Help Local Businesses{' '}
            <span className="text-primary">Get More Customers.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
            Found It Marketing is a digital marketing agency based in Alexandria, Louisiana. We do Google Ads, web design, SEO, and AI search optimization for local businesses across the country. No fluff, no jargon, no long-term contracts.
          </p>

          {/* Award trust chip */}
          <div className="mt-8 inline-flex items-center gap-3 bg-amber-400/10 border border-amber-400/25 rounded-2xl px-5 py-3">
            <Trophy className="w-5 h-5 text-amber-400 shrink-0" aria-hidden="true" />
            <span className="text-sm font-bold text-foreground leading-tight">
              {AWARD.year} {AWARD.full} <span className="text-muted-foreground font-medium">— {AWARD.issuer}</span>
            </span>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-card/15 border border-border/20 rounded-2xl p-5 text-center">
              <p className="text-3xl font-black text-primary italic tracking-tighter">{stat.value}</p>
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* How We're Different */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-foreground">
            How We&apos;re Different
          </h2>
          <div className="space-y-5">
            {differentiators.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground font-bold text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Where We Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6 text-foreground">
            Where We Work
          </h2>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mb-8">
            We&apos;re a local team first. If you&apos;re in Louisiana, Mississippi, East Texas, or up into southern Arkansas, we&apos;ll come to you, sit down at your office, and build your strategy face-to-face. Everywhere else, we deliver the same senior-level work remotely.
          </p>
          <div className="flex flex-wrap gap-3">
            {serviceArea.map((region, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-card/15 border border-primary/20 rounded-full px-4 py-2 text-sm font-bold text-foreground"
              >
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                {region}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-foreground">
            What We Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((svc, i) => (
              <Link key={i} href={svc.href} className="group bg-card/10 border border-border/20 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-sm font-black uppercase italic tracking-tighter text-foreground mb-1 group-hover:text-primary transition-colors">{svc.name}</h3>
                <p className="text-xs text-muted-foreground font-medium leading-relaxed">{svc.desc}</p>
                <span className="text-xs text-primary font-bold flex items-center gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
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
            Call Trevor.{' '}
            <span className="text-primary">15 Minutes.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium italic mb-8 max-w-md mx-auto">
            No pitch. No pressure. Just a conversation about your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/lp/google-ads-management#lp-form">
              <LiquidButton className="px-10 h-14 text-base tracking-[0.05em] shadow-2xl shadow-primary/20">
                Book a Free Call
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
