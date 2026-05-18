'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { LiquidButton } from '@/components/ui/LiquidButton';
import Link from 'next/link';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface HormoziHeroProps {
  headline: string;
  headlineAccent: string;
  subheadline: string;
  ctaText: string;
  ctaHref?: string;
  frictionReducer?: string;
}

export function HormoziHero({
  headline,
  headlineAccent,
  subheadline,
  ctaText,
  ctaHref = '#lp-form',
  frictionReducer,
}: HormoziHeroProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-[85dvh] flex flex-col justify-center overflow-hidden pt-28 lg:pt-36 pb-16 lg:pb-24">
      <motion.div style={{ opacity }} className="flex-grow flex items-center relative z-10 w-full">
        <div className="max-w-[900px] mx-auto px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            {/* Headline */}
            <h1 className="text-[9vw] sm:text-[7vw] md:text-[5vw] lg:text-[3.2vw] leading-[1] tracking-tight font-black font-heading uppercase italic text-white mb-6">
              {headline}{' '}
              <span className="text-primary">{headlineAccent}</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              {subheadline}
            </p>

            {/* CTA */}
            <Link href={ctaHref} className="inline-block">
              <LiquidButton className="px-10 sm:px-14 h-16 sm:h-18 text-base sm:text-lg tracking-[0.05em] shadow-2xl shadow-primary/20">
                {ctaText}
              </LiquidButton>
            </Link>

            {/* Friction reducer */}
            {frictionReducer && (
              <p className="mt-4 text-sm text-white/40 font-medium">
                {frictionReducer}
              </p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
