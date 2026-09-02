'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { LiquidButton } from '@/components/ui/LiquidButton';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const verticals = ['lawyer', 'dentist', 'contractor', 'agency', 'restaurant', 'plumber'];

const orchestrator = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
};
const lineReveal = {
  hidden: { y: '110%', rotateX: -25, opacity: 0 },
  visible: { y: '0%', rotateX: 0, opacity: 1, transition: { duration: 1.2, ease } },
};
const fadeRise = {
  hidden: { y: 40, opacity: 0, filter: 'blur(8px)' },
  visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 1, ease } },
};

export function AISearchHero() {
  const [verticalIndex, setVerticalIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVerticalIndex((prev) => (prev + 1) % verticals.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden border-b border-border/10 pt-32 lg:pt-40 pb-16 lg:pb-24">
      <div className="flex-grow flex items-center relative z-10 w-full">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <motion.div variants={orchestrator} initial="hidden" animate="visible" className="max-w-5xl" style={{ perspective: '1200px' }}>
            <motion.p variants={fadeRise} className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-5 opacity-80">
              AI Search Optimization + Local SEO
            </motion.p>

            <div className="overflow-hidden mb-1 py-1">
              <motion.h1 variants={lineReveal} className="text-white text-[7vw] sm:text-[5.5vw] md:text-[4.5vw] lg:text-[3.2vw] leading-[0.95] tracking-tight font-black font-heading uppercase italic origin-bottom-left">
                When Someone Asks ChatGPT
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-1 py-1">
              <motion.h1 variants={lineReveal} className="text-white text-[7vw] sm:text-[5.5vw] md:text-[4.5vw] lg:text-[3.2vw] leading-[0.95] tracking-tight font-black font-heading uppercase italic origin-bottom-left">
                For The Best{' '}
                <span className="relative inline-block min-w-[180px] sm:min-w-[240px] text-left align-bottom">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={verticals[verticalIndex]}
                      initial={{ y: 30, opacity: 0, filter: 'blur(4px)' }}
                      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                      exit={{ y: -30, opacity: 0, filter: 'blur(4px)' }}
                      transition={{ duration: 0.4, ease }}
                      className="text-primary inline-block"
                    >
                      {verticals[verticalIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-6 py-1">
              <motion.h1 variants={lineReveal} className="text-white text-[7vw] sm:text-[5.5vw] md:text-[4.5vw] lg:text-[3.2vw] leading-[0.95] tracking-tight font-black font-heading uppercase italic origin-bottom-left">
                In Your City — <motion.span className="text-primary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}>Does Your Business Come Up?</motion.span>
              </motion.h1>
            </div>

            <motion.p variants={fadeRise} className="text-base sm:text-lg md:text-xl text-white/70 font-medium mb-8 leading-relaxed max-w-3xl">
              60% of Google searches now end without a click. ChatGPT has 500M+ weekly users. AI is the new search engine. We build the signals that make your business the answer.
            </motion.p>

            <motion.div variants={fadeRise} className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="#ai-widget" className="w-full sm:w-auto">
                <LiquidButton className="w-full sm:w-auto px-8 sm:px-12 h-14 sm:h-16 text-sm sm:text-base tracking-normal sm:tracking-[0.1em] shadow-2xl shadow-primary/20">
                  Get Your Free AI Visibility Audit
                </LiquidButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
