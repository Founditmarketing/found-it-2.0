'use client';

import { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Rocket, Zap, Crown, Building2, ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0, filter: 'blur(4px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { ease, duration: 1.1 },
  },
};

interface WebsiteTier {
  slug: string;
  name: string;
  hook: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  accent: string;
}

const tiers: WebsiteTier[] = [
  {
    slug: 'ignite',
    name: 'Ignite',
    hook: 'Launch with confidence.',
    description:
      'Professional template-based design infused with your brand identity. Mobile-optimized, fast, and SEO-ready from day one.',
    icon: Rocket,
    features: [
      'Brand-integrated responsive design',
      'SEO-optimized architecture',
      'Mobile-first performance',
      'Lead capture forms',
      'Google Analytics integration',
    ],
    accent: 'from-orange-500/20 to-amber-500/10',
  },
  {
    slug: 'accelerate',
    name: 'Accelerate',
    hook: 'Outpace your competition.',
    description:
      'Custom-designed website with conversion optimization baked into every pixel. Advanced integrations and data-driven design.',
    icon: Zap,
    features: [
      'Everything in Ignite, plus:',
      'Custom UI/UX design',
      'Conversion rate optimization',
      'Advanced third-party integrations',
      'Content strategy & architecture',
      'A/B testing infrastructure',
    ],
    accent: 'from-orange-500/25 to-red-500/10',
  },
  {
    slug: 'dominate',
    name: 'Dominate',
    hook: 'Own your market.',
    description:
      'Full custom build with AI-powered features, advanced analytics, and ongoing optimization to keep you ahead.',
    icon: Crown,
    features: [
      'Everything in Accelerate, plus:',
      'AI-powered features & chatbots',
      'Custom application development',
      'Advanced analytics & reporting',
      'Ongoing performance optimization',
      'Priority support & dedicated team',
    ],
    accent: 'from-orange-500/30 to-rose-500/15',
  },
  {
    slug: 'empire',
    name: 'Empire',
    hook: 'Scale without limits.',
    description:
      'Multi-location enterprise solution. Custom microsites per location, centralized management, franchise-ready infrastructure.',
    icon: Building2,
    features: [
      'Everything in Dominate, plus:',
      'Multi-location microsite system',
      'Centralized content management',
      'Franchise-ready infrastructure',
      'Custom API & data pipelines',
      'Enterprise SLA & white-glove onboarding',
    ],
    accent: 'from-orange-500/30 to-primary/20',
  },
];

/* ─── Collapsible Feature List (mobile only) ─── */
function TierCard({ tier, index }: { tier: WebsiteTier; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Link href={`/websites/${tier.slug}`} className="block group h-full">
      <div className="relative bg-card border border-border/40 p-6 sm:p-8 lg:p-12 rounded-[2rem] sm:rounded-[3rem] flex flex-col h-full hover:border-primary/50 transition-all duration-700 ease-liquid shadow-xl hover:shadow-2xl overflow-hidden">
        {/* Hover gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${tier.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

        <div className="relative z-10">
          {/* Tier badge */}
          <div className="flex items-center justify-between mb-4 sm:mb-8">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 bg-primary/10 rounded-xl sm:rounded-2xl border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <tier.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-card-foreground text-2xl sm:text-3xl lg:text-4xl font-black italic uppercase tracking-tighter">
                  {tier.name}
                </h3>
                <p className="text-primary text-xs sm:text-sm font-bold italic mt-0.5">
                  {tier.hook}
                </p>
              </div>
            </div>
            <span className="text-primary/20 text-6xl sm:text-8xl font-black italic leading-none select-none hidden sm:block">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Description — always visible */}
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-8 font-medium">
            {tier.description}
          </p>

          {/* Features — collapsible on mobile, always shown on desktop */}
          <div className="hidden sm:block">
            <ul className="space-y-3 mb-8">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className={feature.startsWith('Everything') ? 'text-primary font-bold italic' : ''}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile: collapsible */}
          <div className="sm:hidden">
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setExpanded(!expanded); }}
              className="flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest mb-3"
            >
              {expanded ? 'Hide' : 'See'} Features
              <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-300', expanded && 'rotate-180')} />
            </button>
            <AnimatePresence>
              {expanded && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                  className="space-y-2 overflow-hidden mb-4"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span className={feature.startsWith('Everything') ? 'text-primary font-bold italic' : ''}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-primary font-black uppercase italic tracking-tighter text-sm group-hover:gap-4 transition-all duration-500">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function WebsiteTiersSection() {
  return (
    <section className="bg-background py-16 sm:py-24 lg:py-32 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        {/* Decorative blobs */}
        <div className="blur-blob w-[500px] h-[500px] bg-primary/10 -top-40 -right-40" />
        <div className="blur-blob w-[400px] h-[400px] bg-blue-500/5 bottom-0 -left-40" />

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, ease }}
          className="mb-12 sm:mb-24"
        >
          <span className="text-primary font-mono text-sm font-bold uppercase tracking-[0.2em] mb-4 sm:mb-8 block border-l-4 border-primary pl-4">
            CUSTOM WEB DESIGN
          </span>
          <h2 className="text-foreground text-oversized mb-4">
            Your Website, <span className="text-primary">Your Tier.</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-xl max-w-3xl font-medium border-l-8 border-primary pl-4 sm:pl-8 mt-4 sm:mt-8">
            From ambitious startups to multi-location empires, we have a website tier engineered for exactly where you are — and where you&apos;re going.
          </p>
        </motion.div>

        {/* Tier Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 lg:gap-10"
        >
          {tiers.map((tier, index) => (
            <motion.div key={tier.name} variants={itemVariants}>
              <TierCard tier={tier} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
