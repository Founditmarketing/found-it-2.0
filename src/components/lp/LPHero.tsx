'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { Shield, Star, Clock } from 'lucide-react';
import Link from 'next/link';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const orchestrator = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
};

const lineReveal = {
  hidden: { y: '110%', rotateX: -25, opacity: 0 },
  visible: {
    y: '0%',
    rotateX: 0,
    opacity: 1,
    transition: { duration: 1.2, ease },
  },
};

const fadeRise = {
  hidden: { y: 40, opacity: 0, filter: 'blur(8px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 1, ease },
  },
};

const accentLine = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.8, ease },
  },
};

interface LPHeroProps {
  /** Line 1 of headline */
  line1: string;
  /** Line 2 — the accented portion */
  line2: string;
  /** Orange-highlighted word in line2 */
  accentWord: string;
  /** Subheadline paragraph */
  subheadline: string;
  /** CTA button text */
  ctaText?: string;
  /** Trust badges below CTA */
  badges?: { icon: React.ElementType; text: string }[];
}

const defaultBadges = [
  { icon: Shield, text: 'No Long-Term Commitment' },
  { icon: Star, text: '13+ Years' },
  { icon: Clock, text: '24hr Response' },
];

export function LPHero({
  line1,
  line2,
  accentWord,
  subheadline,
  ctaText = 'Get Your Free Proposal',
  badges = defaultBadges,
}: LPHeroProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Split line2 to wrap the accent word
  const parts = line2.split(accentWord);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden border-b border-border/10 pt-32 lg:pt-48 pb-16 lg:pb-24 bg-transparent">
      <motion.div
        style={{ y, opacity }}
        className="flex-grow flex items-center relative z-10 w-full overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-6 w-full relative">
          <motion.div
            variants={orchestrator}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
            style={{ perspective: '1200px' }}
          >
            {/* Line 1 */}
            <div className="mb-0 py-1 lg:py-2 text-left w-full overflow-hidden">
              <motion.h1
                variants={lineReveal}
                className="text-white text-[11vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] leading-[0.85] tracking-tight font-black font-heading select-none uppercase italic origin-bottom-left"
              >
                {line1}
              </motion.h1>
            </div>

            {/* Line 2 */}
            <div className="mb-0 py-1 lg:py-2 text-left w-full overflow-hidden">
              <motion.h1
                variants={lineReveal}
                className="text-white text-[11.5vw] sm:text-[11vw] md:text-[8.5vw] lg:text-[6.5vw] leading-[0.85] tracking-tight font-black font-heading select-none uppercase italic pb-4 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] origin-bottom-left"
              >
                {parts[0]}
                <motion.span
                  className="text-primary inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.0, ease }}
                >
                  {accentWord}
                </motion.span>
                {parts[1] || ''}
              </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.div
              variants={fadeRise}
              className="flex items-stretch mb-8 max-w-[95%] sm:max-w-2xl"
            >
              <motion.div
                variants={accentLine}
                className="w-1 bg-primary rounded-full origin-top shrink-0"
              />
              <p className="text-base sm:text-lg md:text-2xl text-white/80 pl-4 sm:pl-8 font-medium drop-shadow-md bg-black/5 sm:bg-black/10 backdrop-blur-[1px] sm:backdrop-blur-[2px] p-2 rounded-r-lg">
                {subheadline}
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeRise} className="flex flex-col sm:flex-row items-start gap-4 w-full">
              <Link href="#lp-form" className="w-full sm:w-auto">
                <LiquidButton className="w-full sm:w-auto px-8 sm:px-14 h-16 sm:h-20 text-base sm:text-xl tracking-normal sm:tracking-[0.15em] shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-transform">
                  {ctaText}
                </LiquidButton>
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeRise}
              className="flex flex-wrap items-center gap-6 mt-8"
            >
              {badges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-white/80 text-sm">
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="font-bold uppercase tracking-wider text-xs">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
