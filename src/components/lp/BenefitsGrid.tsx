'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Script from 'next/script';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';

const ease = [0.16, 1, 0.3, 1] as const;

interface BenefitsGridProps {
  heading?: string;
  subheading?: string;
  benefits: { title: string; description: string }[];
}

export function BenefitsGrid({
  heading = "What You Get",
  subheading,
  benefits,
}: BenefitsGridProps) {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: ease as any }}
          className="text-center mb-16 lg:mb-24"
        >
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
            The Advantage
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground max-w-4xl mx-auto">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-6 text-lg text-muted-foreground font-medium italic max-w-2xl mx-auto">
              {subheading}
            </p>
          )}
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: ease as any }}
              className="bg-card/15 backdrop-blur-xl border border-border/15 rounded-2xl p-6 lg:p-8 hover:border-primary/20 hover:bg-card/25 transition-all duration-500 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-black uppercase italic tracking-tighter mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
