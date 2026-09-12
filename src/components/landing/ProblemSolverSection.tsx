'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ArrowRight,
  TrendingUp,
  BarChartBig,
  Code2,
  AlertTriangle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const floatIcon = {
  y: [0, -8, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as any
  }
};

const problems = [
  {
    value: 'low-traffic',
    trigger: 'Low Website Traffic',
    title: 'The SEO & Content Pillar',
    description:
      "Our GEO framework is designed to build topical authority. We don't just rank for keywords; we create a web of content that makes you the definitive answer for both search engines and AI assistants, driving a consistent flow of high-intent organic traffic.",
    link: '/contact?problem=website',
    icon: TrendingUp,
  },
  {
    value: 'bad-ads',
    trigger: 'Poor Ad ROI',
    title: 'The PPC & AI Bidding Pillar',
    description:
      "Stop wasting money on clicks that don't convert. Our AI-powered bidding models analyze thousands of data points in real-time to find your most profitable audiences and maximize your return on ad spend across Google and social platforms.",
    link: '/contact?problem=google',
    icon: BarChartBig,
  },
  {
    value: 'ai-search',
    trigger: 'Disappearing in AI Search',
    title: 'The GEO & Gemini Pillar',
    description:
      "In 2025, half of all searches will end with an AI answer, not a click. We use Google's Gemini models to reverse-engineer what AI wants, structuring your digital presence to become the authoritative answer that AI models rely on and recommend.",
    link: '/contact?problem=ai',
    icon: Code2,
  },
  {
    value: 'no-conversions',
    trigger: "Website Isn't Converting",
    title: 'The Custom AI Websites Pillar',
    description:
      "A beautiful website is useless if it doesn't convert. We build custom, high-performance websites integrated with CRO best practices and AI-driven user experience optimizations to turn your visitors into customers.",
    link: '/contact?problem=website',
    icon: AlertTriangle,
  },
] as const;

type ProblemValue = (typeof problems)[number]['value'];

export function ProblemSolverSection() {
  const [activeProblemValue, setActiveProblemValue] =
    useState<ProblemValue>('low-traffic');

  const activeProblem =
    problems.find((p) => p.value === activeProblemValue) || problems[0];
  const ActiveIcon = activeProblem.icon;

  return (
    <section className="bg-background py-24 lg:py-32 border-b">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-foreground text-oversized mb-4">
            What&apos;s Holding You{' '}
            <span className="text-primary">
              Back?
            </span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl border-l-[12px] border-primary pl-8 mt-12 font-medium">
            Every business faces unique challenges. Select your biggest obstacle
            below to see how we dismantle it.
          </p>
        </div>

        <div className="w-full relative">
          {/* Decorative Bleed Artifact */}
          <div className="absolute -left-20 top-40 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto bg-card/30 p-2 rounded-[2rem] border border-border/50 mb-16 shadow-lg backdrop-blur-xl relative z-10">
            {problems.map((problem) => (
              <button
                key={problem.value}
                onClick={() => setActiveProblemValue(problem.value)}
                className={cn(
                  'text-muted-foreground font-black uppercase italic tracking-tighter py-6 px-4 text-sm rounded-[1.5rem] transition-all duration-500 text-center',
                  activeProblemValue === problem.value
                    ? 'bg-primary text-primary-foreground shadow-2xl shadow-primary/30 scale-[1.05] z-20'
                    : 'hover:bg-primary/5 hover:text-primary'
                )}
              >
                {problem.trigger}
              </button>
            ))}
          </div>

          <motion.div
            key={activeProblem.value}
            initial={{ opacity: 0, y: 40, scale: 0.98, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-card border border-border/50 rounded-[4rem] p-12 lg:p-24 grid lg:grid-cols-12 gap-12 items-center relative z-10 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent pointer-events-none" />

            <div className="lg:col-span-8 relative z-10">
              <motion.div animate={floatIcon}>
                <ActiveIcon
                  className="w-16 h-16 lg:w-24 lg:h-24 text-primary mb-12"
                  strokeWidth={1}
                />
              </motion.div>
              <h3 className="text-card-foreground font-black text-4xl lg:text-6xl italic uppercase tracking-tighter mb-8 leading-none">
                {activeProblem.title}
              </h3>
              <p className="text-muted-foreground text-lg lg:text-2xl leading-relaxed max-w-3xl font-medium italic">
                {activeProblem.description}
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground font-black h-20 px-12 hover:scale-105 active:scale-95 transition-transform uppercase italic tracking-tighter text-xl w-full lg:w-auto shadow-2xl shadow-primary/30"
              >
                <Link href={activeProblem.link} className="flex items-center">
                  Solve This Now
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
