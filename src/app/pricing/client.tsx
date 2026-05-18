'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { trackCallClick } from '@/lib/analytics';
import { phoneHref, phoneDisplay, CALLRAIL_CLASS } from '@/lib/phone';

const ease = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    name: 'Google Ads Management',
    price: 'Custom Quote',
    features: ['Weekly optimization', 'Real conversion tracking', 'Transparent reporting dashboard', 'You own your ad account'],
    cta: 'Get a Free Audit',
    href: '/lp/google-ads-management',
  },
  {
    name: 'Custom Web Design',
    price: 'Custom Quote',
    features: ['Custom design — no templates', 'Mobile-first, fast-loading', '60 days free post-launch support', 'You own the code and domain'],
    cta: 'Get a Free Concept Call',
    href: '/lp/web-design',
  },
  {
    name: 'AI Search Optimization',
    price: 'Custom Quote',
    features: ['ChatGPT, Perplexity, Google AI', 'Monthly visibility tracking', 'Schema + entity optimization', 'Competitive AI audit'],
    cta: 'Get a Free AI Audit',
    href: '/lp/ai-search-seo',
  },
  {
    name: 'Social Media Management',
    price: 'Custom Quote',
    features: ['We create all content', 'You approve before posting', 'Paid + organic strategy', 'Monthly performance reports'],
    cta: 'Get a Free Content Plan',
    href: '/lp/social-media-management',
  },
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
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-60">Pricing</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            Know Exactly What{' '}
            <span className="text-primary">You&apos;re Paying For.</span>
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            Flat fees. No hidden costs. No long-term contracts. Month-to-month on everything. Cancel anytime.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: ease as any }}
              className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl p-6 lg:p-8 flex flex-col"
            >
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary/60 mb-2">{svc.name}</p>
              <p className="text-2xl lg:text-3xl font-black text-foreground italic tracking-tighter mb-5">{svc.price}</p>
              <div className="space-y-3 flex-grow mb-6">
                {svc.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground font-medium">{f}</span>
                  </div>
                ))}
              </div>
              <Link href={svc.href}>
                <motion.div whileTap={{ scale: 0.97 }}
                  className="w-full text-center font-black uppercase italic tracking-tighter py-3.5 rounded-xl text-sm bg-card/30 border border-border/20 text-foreground hover:border-primary/30 hover:text-primary transition-all flex items-center justify-center gap-2"
                >
                  {svc.cta} <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Fine Print */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="bg-card/10 border border-border/20 rounded-2xl p-6 lg:p-8 mb-16"
        >
          <h3 className="text-sm font-black uppercase italic tracking-tighter text-foreground mb-4">How It Works</h3>
          <div className="space-y-3">
            {[
              'No setup fees on ads management.',
              'Web design is a one-time build cost. Maintenance plans start at $250/mo after launch.',
              'You pay ad spend directly to Google — we never mark it up or bundle it.',
              'Month-to-month on all services. Cancel with 30 days notice.',
              'Custom quotes available for multi-service bundles.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-primary text-xs font-black mt-0.5">•</span>
                <p className="text-sm text-muted-foreground font-medium">{item}</p>
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
            Not Sure What You Need?{' '}
            <span className="text-primary">Ask John.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium italic mb-8 max-w-md mx-auto">
            15-minute call. No pitch. He&apos;ll tell you what makes sense for your business and budget.
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
