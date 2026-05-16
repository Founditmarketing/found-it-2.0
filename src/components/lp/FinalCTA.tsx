'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';

const ease = [0.16, 1, 0.3, 1] as const;

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
      <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: ease as any }}>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] mb-6 text-foreground">
            Your Competitors Won the Last Decade With{' '}
            <span className="text-primary drop-shadow-[0_0_20px_rgba(249,115,22,0.2)]">Better Marketing.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium italic mb-10 max-w-2xl mx-auto leading-relaxed">
            Win the next one with a better website. Talk to John.
          </p>
          <Link href="#lp-form">
            <LiquidButton className="px-12 h-18 text-base sm:text-lg tracking-[0.1em] shadow-2xl shadow-primary/20">
              Start My Project
            </LiquidButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
