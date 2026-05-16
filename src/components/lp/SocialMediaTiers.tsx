'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import Link from 'next/link';

const ease = [0.16, 1, 0.3, 1] as const;

const tiers = [
  {
    name: 'Organic Only', price: '$800', period: '/mo', tag: null,
    features: ['12 posts per month', 'Content calendar + strategy', 'Community management', 'Monthly performance reporting'],
    border: 'border-border/20', hover: 'hover:border-border/30',
  },
  {
    name: 'Paid Ads Only', price: '$1,500', period: '/mo min', tag: null,
    features: ['Facebook + Instagram ads', 'Creative production', 'Audience research & targeting', 'Weekly optimization', '15% of ad spend'],
    border: 'border-border/20', hover: 'hover:border-border/30',
  },
  {
    name: 'Full Stack', price: '$2,200', period: '/mo + spend', tag: 'Recommended',
    features: ['Everything in Organic + Paid', 'Unified strategy', 'Higher creative volume', 'Priority support', 'Monthly strategy call'],
    border: 'border-primary/30', hover: 'hover:border-primary/40',
  },
];

export function SocialMediaTiers() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }} className="text-center mb-16">
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-60">Packages</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground">Pick Your Play</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: ease as any }}
              className={`bg-card/15 backdrop-blur-xl border ${tier.border} ${tier.hover} rounded-[2rem] p-8 text-center relative overflow-hidden transition-all duration-500 flex flex-col`}
            >
              {tier.tag && (
                <span className="absolute top-4 right-4 text-[9px] font-black uppercase tracking-[0.2em] text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                  {tier.tag}
                </span>
              )}
              <h3 className="text-lg font-black uppercase italic tracking-tighter mb-4 text-foreground">{tier.name}</h3>
              <p className="text-4xl font-black text-primary italic tracking-tighter mb-1">{tier.price}<span className="text-lg text-muted-foreground/60">{tier.period}</span></p>
              <p className="text-xs text-muted-foreground/60 font-bold mb-6">Starting at</p>
              <div className="space-y-3 text-left flex-1">
                {tier.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary/60 mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground font-medium">{f}</span>
                  </div>
                ))}
              </div>
              <Link href="#lp-form" className="mt-8 block">
                <motion.div whileTap={{ scale: 0.97 }}
                  className={`w-full font-black uppercase italic tracking-tighter py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-shadow ${
                    tier.tag ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' : 'bg-white/5 text-foreground border border-border/30 hover:border-primary/30'
                  }`}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
