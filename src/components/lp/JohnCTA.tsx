'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ease = [0.16, 1, 0.3, 1] as const;

interface JohnCTAProps {
  /** Section heading */
  heading?: string;
  /** Section sub-text */
  body?: string;
  /** CTA button label */
  ctaLabel?: string;
}

export function JohnCTA({
  heading = "Talk to Trevor",
  body = "Trevor has run this company for 13+ years. When you call, you talk to him — no junior account managers, no runaround.",
  ctaLabel = 'Schedule My Free Call',
}: JohnCTAProps) {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: ease as any }}
          className="relative bg-card/20 backdrop-blur-2xl border border-border/20 rounded-[2rem] lg:rounded-[3rem] p-8 md:p-14 lg:p-20 shadow-2xl overflow-hidden group"
        >
          {/* Gradient hover effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
            {/* Avatar / Brand Mark */}
            <div className="lg:col-span-3 flex justify-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="w-32 h-32 lg:w-48 lg:h-48 rounded-[2rem] bg-gradient-to-br from-primary/30 via-primary/10 to-transparent border-2 border-primary/20 flex items-center justify-center shadow-2xl shadow-primary/10"
              >
                <span className="text-5xl lg:text-7xl font-black text-primary italic tracking-tighter">T</span>
              </motion.div>
            </div>

            {/* Content */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6 text-foreground">
                {heading}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-medium italic leading-relaxed max-w-xl mx-auto lg:mx-0">
                {body}
              </p>
            </div>

            {/* Actions */}
            <div className="lg:col-span-3 flex flex-col gap-4 items-center lg:items-end">
              <Link href="#lp-form" className="w-full lg:w-auto">
                <motion.div
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-primary text-primary-foreground font-black uppercase italic tracking-tighter py-4 px-8 rounded-2xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow"
                >
                  {ctaLabel}
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
