'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { LiquidButton } from '@/components/ui/LiquidButton';
import Link from 'next/link';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

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

const mockupSites = [
  { name: 'Spurgeon Law', gradient: 'from-amber-900/80 via-yellow-800/50 to-amber-700/30' },
  { name: 'Orlando Lifestyle Dentistry', gradient: 'from-emerald-900/70 via-teal-800/50 to-green-700/30' },
  { name: 'Henly Homes', gradient: 'from-slate-800/80 via-zinc-700/50 to-stone-600/30' },
];

function BrowserMockup({ name, gradient, className }: { name: string; gradient: string; className?: string }) {
  return (
    <div className={`rounded-xl overflow-hidden border border-white/10 shadow-2xl ${className || ''}`}>
      <div className="bg-white/5 backdrop-blur-sm px-3 py-2 flex items-center gap-2 border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 bg-white/5 rounded-md px-3 py-0.5 text-[9px] text-white/30 font-mono truncate">
          {name.toLowerCase().replace(/\s/g, '')}.com
        </div>
      </div>
      <div className={`h-[140px] sm:h-[180px] bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        <span className="text-white/80 font-black italic tracking-tighter text-sm sm:text-base drop-shadow-lg">{name}</span>
      </div>
    </div>
  );
}

export function WebDesignHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden border-b border-border/10 pt-32 lg:pt-40 pb-16 lg:pb-24">
      <motion.div style={{ y, opacity }} className="flex-grow flex items-center relative z-10 w-full">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left — Copy */}
            <motion.div variants={orchestrator} initial="hidden" animate="visible" className="lg:col-span-6 max-w-2xl" style={{ perspective: '1200px' }}>
              <motion.p variants={fadeRise} className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-5 opacity-80">
                Custom Web Design
              </motion.p>
              <div className="overflow-hidden mb-1 py-1">
                <motion.h1 variants={lineReveal} className="text-white text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[3.5vw] leading-[0.9] tracking-tight font-black font-heading uppercase italic origin-bottom-left">
                  Websites That Don&apos;t Look Like
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-6 py-1">
                <motion.h1 variants={lineReveal} className="text-white text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[3.5vw] leading-[0.9] tracking-tight font-black font-heading uppercase italic origin-bottom-left">
                  Everyone{' '}
                  <motion.span className="text-primary inline-block" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1.0, ease }}>
                    Else&apos;s.
                  </motion.span>
                </motion.h1>
              </div>
              <motion.p variants={fadeRise} className="text-base sm:text-lg md:text-xl text-white/70 font-medium mb-8 leading-relaxed max-w-xl">
                Custom-coded sites for law firms, medical practices, contractors, and luxury brands. No templates. No theme stores. Built to convert, designed to last.
              </motion.p>
              <motion.div variants={fadeRise} className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="#lp-form" className="w-full sm:w-auto">
                  <LiquidButton className="w-full sm:w-auto px-8 sm:px-12 h-14 sm:h-16 text-sm sm:text-base tracking-normal sm:tracking-[0.1em] shadow-2xl shadow-primary/20">
                    See Your Site Reimagined — Free Concept Call
                  </LiquidButton>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — Browser Mockup Stack */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: -8 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: 0.8, duration: 1.4, ease }}
              className="lg:col-span-6 relative hidden md:block"
              style={{ perspective: '1200px' }}
            >
              <div className="relative w-full max-w-[480px] mx-auto">
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
                  <div className="absolute -top-4 -left-6 w-[85%] z-0 opacity-60" style={{ transform: 'rotateY(8deg) rotateX(2deg)' }}>
                    <BrowserMockup name={mockupSites[0].name} gradient={mockupSites[0].gradient} />
                  </div>
                  <div className="absolute top-6 left-4 w-[90%] z-10 opacity-80" style={{ transform: 'rotateY(4deg) rotateX(1deg)' }}>
                    <BrowserMockup name={mockupSites[1].name} gradient={mockupSites[1].gradient} />
                  </div>
                  <div className="relative z-20 ml-10 mt-16 w-[95%]" style={{ transform: 'rotateY(-2deg) rotateX(-1deg)' }}>
                    <BrowserMockup name={mockupSites[2].name} gradient={mockupSites[2].gradient} className="ring-1 ring-primary/20" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
