'use client';

import { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import {
  Brain,
  BarChart3,
  MousePointerClick,
  Layers,
  TrendingUp,
  HeartHandshake,
  ChevronDown,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0, filter: 'blur(4px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { ease, duration: 0.9 },
  },
};

interface PlatformFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: PlatformFeature[] = [
  {
    icon: Brain,
    title: 'AI-Powered GEO Engine',
    description:
      'We reverse-engineer what AI models want, structuring your digital presence to be the answer Google, ChatGPT, and Gemini recommend.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time KPI Dashboard',
    description:
      'Track every dollar of ad spend with custom data pipelines. See leads, revenue, and ROI as it happens — not in a monthly PDF.',
  },
  {
    icon: MousePointerClick,
    title: 'Conversion Architecture',
    description:
      'Every page is engineered for conversion with heat mapping, A/B testing, and AI-driven UX optimization.',
  },
  {
    icon: Layers,
    title: 'Omni-Channel Orchestration',
    description:
      'Unified campaigns across Google, Meta, YouTube, and AI platforms — managed from one strategic command center.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description:
      'AI models forecast market trends and recommend budget allocation before your competitors even notice the shift.',
  },
  {
    icon: HeartHandshake,
    title: 'White-Glove Partnership',
    description:
      'Dedicated strategist with a direct line. The average agency keeps clients 8 months. Our average tenure? Over 5 years.',
  },
];

/* ─── Compact mobile card with tap-to-expand ─── */
function FeatureCard({ feature }: { feature: PlatformFeature }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = feature.icon;

  return (
    <motion.div
      variants={itemVariants}
      className="group relative bg-card border border-border/40 rounded-2xl sm:rounded-[2.5rem] hover:border-primary/50 transition-all duration-700 ease-liquid shadow-xl hover:shadow-2xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Desktop: full content always shown */}
      <div className="hidden sm:block p-8 lg:p-10 relative z-10">
        <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20 w-fit mb-8 group-hover:bg-primary/20 transition-colors shadow-[0_0_30px_rgba(255,85,0,0.08)]">
          <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
        </div>
        <h3 className="text-card-foreground text-xl lg:text-2xl font-black italic uppercase tracking-tighter mb-4 leading-tight">
          {feature.title}
        </h3>
        <p className="text-muted-foreground text-sm lg:text-base leading-relaxed font-medium">
          {feature.description}
        </p>
      </div>

      {/* Mobile: compact with tap-to-expand */}
      <div className="sm:hidden relative z-10">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center gap-3 p-4 text-left"
        >
          <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20 shrink-0">
            <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </div>
          <h3 className="text-card-foreground text-base font-black italic uppercase tracking-tighter leading-tight flex-1">
            {feature.title}
          </h3>
          <ChevronDown className={cn('w-4 h-4 text-primary shrink-0 transition-transform duration-300', expanded && 'rotate-180')} />
        </button>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease }}
              className="overflow-hidden"
            >
              <p className="text-muted-foreground text-xs leading-relaxed font-medium px-4 pb-4">
                {feature.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function PlatformSection() {
  return (
    <section className="bg-background py-16 sm:py-24 lg:py-32 overflow-hidden relative border-t border-border/10">
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        {/* Decorative */}
        <div className="blur-blob w-[600px] h-[600px] bg-primary/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, ease }}
          className="mb-10 sm:mb-24"
        >
          <span className="text-primary font-mono text-sm font-bold uppercase tracking-[0.2em] mb-4 sm:mb-8 block border-l-4 border-primary pl-4">
            WHY FOUND IT
          </span>
          <h2 className="text-foreground text-oversized mb-4">
            <span className="text-primary">Our Approach</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-xl max-w-3xl font-medium border-l-8 border-primary pl-4 sm:pl-8 mt-4 sm:mt-8">
            Every agency offers web design and SEO. We built an intelligence layer that makes the difference between showing up and dominating.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
