'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Target, Flame, ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface MarketingTier {
  id: string;
  name: string;
  tagline: string;
  icon: LucideIcon;
  inheritsFrom: string | null;
  features: string[];
}

const tiers: MarketingTier[] = [
  {
    id: 'foundation',
    name: 'Foundation',
    tagline: 'Get found.',
    icon: Search,
    inheritsFrom: null,
    features: [
      'GEO / SEO Baseline Optimization',
      'Google Business Profile Setup & Optimization',
      'Monthly Analytics & Performance Reporting',
      'Search-Friendly Content Architecture',
      'Reputation Monitoring & Alerts',
      'Secure Cloud Hosting & Domain Services',
      'Lead Capture Form Integration',
    ],
  },
  {
    id: 'velocity',
    name: 'Velocity',
    tagline: 'Accelerate growth.',
    icon: TrendingUp,
    inheritsFrom: 'Foundation',
    features: [
      'Monthly Local & Organic SEO Optimizations',
      'Professional Blog Content Creation',
      'Social Media Content & Management',
      'Call Tracking & Recording',
      'Quarterly Strategy Sessions with Dedicated Strategist',
      'Competitor Monitoring & Benchmarking',
    ],
  },
  {
    id: 'authority',
    name: 'Authority',
    tagline: 'Own your market.',
    icon: Target,
    inheritsFrom: 'Velocity',
    features: [
      'Google PPC & Search Ad Campaign Management',
      'AI-Powered Smart Bidding Optimization',
      'Custom High-Converting Landing Pages',
      'Conversion Rate Optimization (CRO)',
      'Meta / Facebook & Instagram Ad Campaigns',
      'Bi-Weekly Performance Reporting & Calls',
    ],
  },
  {
    id: 'dominion',
    name: 'Dominion',
    tagline: 'Total market dominance.',
    icon: Flame,
    inheritsFrom: 'Authority',
    features: [
      'Generative Engine Optimization (GEO)',
      'Answer Engine Optimization (AEO)',
      'YouTube Video Ad Management',
      'Omni-Channel Campaign Orchestration',
      'Dedicated Senior Strategist & Direct Line',
      'Weekly Reporting & Real-Time Dashboard',
      'Custom AI Data Pipelines & Insights',
    ],
  },
];

export function MarketingPackagesSection() {
  const [activeId, setActiveId] = useState('foundation');
  const activeTier = tiers.find((t) => t.id === activeId) || tiers[0];

  return (
    <section className="bg-background py-16 sm:py-24 lg:py-32 overflow-hidden relative border-t border-border/10">
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        {/* Decorative */}
        <div className="blur-blob w-[500px] h-[500px] bg-primary/8 top-20 -left-40" />

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, ease }}
          className="mb-12 sm:mb-24"
        >
          <span className="text-primary font-mono text-sm font-bold uppercase tracking-[0.2em] mb-4 sm:mb-8 block border-l-4 border-primary pl-4">
            MARKETING PACKAGES
          </span>
          <h2 className="text-foreground text-oversized mb-4">
            Growth on <span className="text-primary">Your Terms.</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-xl max-w-3xl font-medium border-l-8 border-primary pl-4 sm:pl-8 mt-4 sm:mt-8">
            Every tier builds on the last. Start where you are, scale as you grow. No wasted spend — just a proven ladder to market dominance.
          </p>
        </motion.div>

        {/* Tier Selector Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
          {/* Mobile: horizontal scroll tabs */}
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 w-full h-auto bg-card/30 p-1.5 sm:p-2 rounded-2xl sm:rounded-[2rem] border border-border/50 mb-8 sm:mb-16 shadow-lg backdrop-blur-xl relative z-10 overflow-x-auto gap-1 sm:gap-0 no-scrollbar">
            {tiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setActiveId(tier.id)}
                className={cn(
                  'text-muted-foreground font-black uppercase italic tracking-tighter py-3 sm:py-6 px-4 sm:px-4 text-xs sm:text-sm rounded-xl sm:rounded-[1.5rem] transition-all duration-500 text-center whitespace-nowrap shrink-0',
                  activeId === tier.id
                    ? 'bg-primary text-primary-foreground shadow-2xl shadow-primary/30 scale-[1.02] sm:scale-[1.05] z-20'
                    : 'hover:bg-primary/5 hover:text-primary'
                )}
              >
                {tier.name}
              </button>
            ))}
          </div>

          {/* Active Tier Content */}
          <motion.div
            key={activeTier.id}
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease }}
            className="bg-card border border-border/50 rounded-[2rem] sm:rounded-[4rem] p-6 sm:p-12 lg:p-20 relative z-10 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 sm:gap-12 items-start">
              {/* Left: Info */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <activeTier.icon
                    className="w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-primary"
                    strokeWidth={1}
                  />
                  <div>
                    <p className="text-primary text-[10px] sm:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                      {activeTier.tagline}
                    </p>
                    <h3 className="text-card-foreground font-black text-3xl sm:text-4xl lg:text-6xl italic uppercase tracking-tighter leading-none">
                      {activeTier.name}
                    </h3>
                  </div>
                </div>

                {activeTier.inheritsFrom && (
                  <p className="text-primary/80 font-bold italic text-sm sm:text-lg mb-4 sm:mb-8 border-l-4 border-primary/40 pl-4 sm:pl-6">
                    Includes everything from {activeTier.inheritsFrom}, plus:
                  </p>
                )}

                {/* Feature List */}
                <ul className="space-y-2.5 sm:space-y-4">
                  {activeTier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 sm:gap-4">
                      <div className="p-0.5 sm:p-1 bg-primary/10 rounded-md sm:rounded-lg mt-0.5 shrink-0">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" strokeWidth={2.5} />
                      </div>
                      <span className="text-muted-foreground text-sm sm:text-base lg:text-lg font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: CTA */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center lg:sticky lg:top-8">
                <div className="bg-background/40 backdrop-blur-2xl border border-primary/20 rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 text-center w-full shadow-2xl">
                  <p className="text-card-foreground text-xl sm:text-2xl lg:text-3xl font-black italic uppercase tracking-tighter mb-2">
                    Custom Pricing
                  </p>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-6 sm:mb-8 font-medium">
                    Every business is different. We price yours on the strategy session.
                  </p>
                  <Link href="/contact">
                    <button className="w-full bg-primary text-primary-foreground font-black uppercase italic tracking-tighter py-4 sm:py-5 px-6 sm:px-8 rounded-xl sm:rounded-2xl text-sm sm:text-lg hover:scale-[1.03] active:scale-[0.97] transition-transform shadow-2xl shadow-primary/30 flex items-center justify-center gap-2 sm:gap-3">
                      Get Your Strategy Session
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </Link>
                </div>

                {/* Cumulative Visual */}
                <div className="mt-6 sm:mt-8 flex items-center gap-2 sm:gap-3 opacity-60">
                  {tiers.map((t, i) => (
                    <div
                      key={t.id}
                      className={cn(
                        'h-1.5 sm:h-2 rounded-full transition-all duration-500',
                        tiers.findIndex((x) => x.id === activeId) >= i
                          ? 'bg-primary w-6 sm:w-8'
                          : 'bg-border w-3 sm:w-4'
                      )}
                    />
                  ))}
                  <span className="text-[8px] sm:text-[9px] text-muted-foreground uppercase tracking-[0.3em] font-bold ml-1 sm:ml-2">
                    Cumulative
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
