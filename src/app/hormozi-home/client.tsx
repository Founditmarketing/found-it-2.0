'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Phone, Star } from 'lucide-react';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { trackCallClick } from '@/lib/analytics';
import { phoneHref, phoneDisplay, CALLRAIL_CLASS } from '@/lib/phone';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ─── Data ─── */

const services = [
  {
    name: 'Google Ads',
    result: 'Get more leads from your ad spend — or stop paying us.',
    href: '/lp/google-ads-management',
    cta: 'Get a Free Audit',
  },
  {
    name: 'Web Design',
    result: 'A website that makes your phone ring. Live in 2 weeks or less.',
    href: '/lp/web-design',
    cta: 'Get a Free Concept Call',
  },
  {
    name: 'AI Search',
    result: 'Show up when ChatGPT and Google AI recommend your industry.',
    href: '/lp/ai-search-seo',
    cta: 'Get a Free AI Audit',
  },
  {
    name: 'Social Media',
    result: 'Content that gets calls, not just likes. We create it all.',
    href: '/lp/social-media-management',
    cta: 'Get a Free Content Plan',
  },
];

const proofPoints = [
  { value: '10x', label: 'ROAS', detail: 'Google Ads client: $4.2K/mo spend → $42K/mo revenue' },
  { value: '3x', label: 'Calls', detail: 'Web design client tripled qualified calls in 90 days' },
  { value: '#1', label: 'AI Rec', detail: 'Client became the only recommendation in ChatGPT' },
  { value: '750', label: 'Calls', detail: 'Auto shop: 750 organic calls in 5 months' },
];

const differentiators = [
  { title: 'No contracts.', detail: 'Month-to-month on everything. Cancel anytime with 30 days notice.' },
  { title: 'You own everything.', detail: 'Your ad accounts, your code, your data. Nothing held hostage.' },
  { title: 'Senior strategist, not interns.', detail: 'Trevor works on your account. Not a junior who Googles the answers.' },
];

export default function HormoziHome() {
  return (
    <main className="bg-transparent text-foreground relative overflow-hidden">

      {/* ═══════════════════════════════════════════
          HERO — One promise, one CTA
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-[85dvh] flex flex-col justify-center pt-28 lg:pt-36 pb-16 lg:pb-24">
        <div className="max-w-[900px] mx-auto px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-6 opacity-60">
              Found It Marketing — Alexandria, LA
            </p>
            <h1 className="text-[9vw] sm:text-[7vw] md:text-[5vw] lg:text-[3.5vw] leading-[0.9] tracking-tight font-black font-heading uppercase italic text-white mb-6">
              We Help Local Businesses{' '}
              <span className="text-primary">Get More Customers.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              Google Ads. Web design. SEO. AI search. No contracts, no jargon, no interns on your account. Just a direct line to a senior strategist.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <Link href="#services">
                <LiquidButton className="px-10 sm:px-14 h-16 sm:h-18 text-base sm:text-lg tracking-[0.05em] shadow-2xl shadow-primary/20">
                  See What We Do
                </LiquidButton>
              </Link>
              <a href={phoneHref} onClick={() => trackCallClick()} className={`flex items-center gap-2 text-white/50 hover:text-primary transition-colors text-sm font-bold ${CALLRAIL_CLASS}`}>
                <Phone className="w-4 h-4" /> {phoneDisplay}
              </a>
            </div>
            <p className="text-sm text-white/30 font-medium">
              Free audit on every service. Zero obligation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3 DIFFERENTIATORS — Why us
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="space-y-6">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease }}
                className="flex items-start gap-4 group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-black uppercase italic tracking-tighter text-foreground leading-snug">{item.title}</p>
                  <p className="text-sm text-muted-foreground font-medium mt-1 leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES — 4 cards, each links to LP
      ═══════════════════════════════════════════ */}
      <section id="services" className="relative py-16 lg:py-24 scroll-mt-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground font-medium text-lg max-w-lg mx-auto">
              Four services. Each one comes with a free audit so you can see exactly what we&apos;d do before you spend a dollar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease }}
              >
                <Link href={svc.href} className="group block bg-card/10 border border-border/20 rounded-2xl p-6 lg:p-8 hover:border-primary/30 transition-all duration-300 h-full">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-primary/60 mb-2">{svc.name}</p>
                  <p className="text-foreground font-bold text-sm leading-relaxed mb-4">{svc.result}</p>
                  <span className="text-xs text-primary font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    {svc.cta} <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROOF — 4 real results
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-[900px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl lg:rounded-3xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary/10 via-amber-500/5 to-transparent px-6 lg:px-10 py-4 border-b border-border/10">
              <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] opacity-60">Real Results</p>
            </div>
            <div className="p-6 lg:p-10">
              <h3 className="text-xl md:text-3xl font-black uppercase italic tracking-tighter leading-[0.95] text-foreground mb-8">
                Here&apos;s What Happened for{' '}
                <span className="text-primary">Our Clients.</span>
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {proofPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5, ease }}
                    className="bg-primary/5 border border-primary/10 rounded-xl p-4 text-center"
                  >
                    <p className="text-2xl lg:text-3xl font-black text-primary italic tracking-tighter">{point.value}</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.15em] text-muted-foreground/60 mt-1 mb-2">{point.label}</p>
                    <p className="text-[10px] text-muted-foreground font-medium leading-relaxed">{point.detail}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link href="/case-studies" className="text-xs text-primary font-bold hover:underline inline-flex items-center gap-1">
                  See all case studies <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BOTTOM CTA
      ═══════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
        <div className="max-w-[700px] mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
              Talk to Trevor.{' '}
              <span className="text-primary">15 Minutes.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium italic mb-8 max-w-lg mx-auto leading-relaxed">
              No pitch. No junior account managers. Just a candid conversation about what would actually work for your business.
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
      </section>

    </main>
  );
}
