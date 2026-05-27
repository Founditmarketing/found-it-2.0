'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { LiquidButton } from '@/components/ui/LiquidButton';
import Link from 'next/link';
import { useRef, useEffect } from 'react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const orchestrator = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.4 } } };
const lineReveal = { hidden: { y: '110%', rotateX: -25, opacity: 0 }, visible: { y: '0%', rotateX: 0, opacity: 1, transition: { duration: 1.2, ease } } };
const fadeRise = { hidden: { y: 40, opacity: 0, filter: 'blur(8px)' }, visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 1, ease } } };

/* ─── SVG Line Chart Path ─── */
const chartPath = 'M 0 120 C 30 115, 60 100, 90 95 C 120 90, 150 80, 180 60 C 210 40, 240 50, 270 35 C 300 20, 330 25, 360 10';

const metrics = [
  { label: 'Conversions', value: '47', x: '10%', y: '15%', delay: 1.4 },
  { label: 'CPL', value: '$32', x: '65%', y: '5%', delay: 1.6 },
  { label: 'ROAS', value: '4.2x', x: '75%', y: '60%', delay: 1.8 },
];

function DashboardMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [5, -5]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-5, 5]), { stiffness: 100, damping: 20 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    };
    el.addEventListener('mousemove', handleMouseMove);
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div ref={containerRef} style={{ rotateX, rotateY, perspective: 1200 }}
      className="relative w-full max-w-[440px] mx-auto"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-primary/10 rounded-[3rem] blur-3xl scale-110 pointer-events-none" />

      {/* Dashboard card */}
      <div className="relative bg-card/20 backdrop-blur-2xl border border-border/20 rounded-[2rem] p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/60">Google Ads Dashboard</p>
            <p className="text-xs text-muted-foreground/40 font-mono mt-0.5">Last 30 days</p>
          </div>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
            <div className="w-2 h-2 rounded-full bg-primary/40" />
          </div>
        </div>

        {/* Chart */}
        <div className="relative h-[140px] mb-4">
          <svg viewBox="0 0 360 130" className="w-full h-full" preserveAspectRatio="none">
            {/* Grid lines */}
            {[30, 60, 90, 120].map(y => (
              <line key={y} x1="0" y1={y} x2="360" y2={y} stroke="currentColor" strokeWidth="0.5" className="text-white/5" />
            ))}
            {/* Gradient fill */}
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(20, 100%, 55%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(20, 100%, 55%)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path d={chartPath + ' L 360 130 L 0 130 Z'} fill="url(#chartGrad)"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}
            />
            {/* Line */}
            <motion.path d={chartPath} fill="none" stroke="hsl(20, 100%, 55%)" strokeWidth="2.5" strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>
        </div>

        {/* Mini stats row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Clicks', value: '1,247', change: '+18%' },
            { label: 'Leads', value: '47', change: '+32%' },
            { label: 'Spend', value: '$4.2K', change: '-12% CPL' },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + i * 0.1, duration: 0.5, ease }}
              className="bg-white/[0.03] border border-white/5 rounded-lg p-2 text-center"
            >
              <p className="text-[9px] text-muted-foreground/40 font-bold uppercase">{s.label}</p>
              <p className="text-sm font-black text-foreground tracking-tight">{s.value}</p>
              <p className="text-[9px] font-bold text-emerald-400/80">{s.change}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating metric cards */}
      {metrics.map((m, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: m.delay, duration: 0.6, ease }}
          className="absolute bg-background/90 backdrop-blur-xl border border-primary/20 rounded-xl px-3 py-2 shadow-lg shadow-primary/5"
          style={{ left: m.x, top: m.y }}
        >
          <p className="text-[8px] font-bold text-primary/60 uppercase">{m.label}</p>
          <p className="text-sm font-black text-foreground tracking-tight">{m.value}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function GoogleAdsHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden border-b border-border/10 pt-32 lg:pt-40 pb-16 lg:pb-24">
      <motion.div style={{ y, opacity }} className="flex-grow flex items-center relative z-10 w-full">
        <div className="max-w-[1440px] mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div variants={orchestrator} initial="hidden" animate="visible" className="lg:col-span-6 max-w-2xl" style={{ perspective: '1200px' }}>
              <motion.p variants={fadeRise} className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-5 opacity-80">Google Ads Management</motion.p>
              <div className="overflow-hidden mb-1 py-1">
                <motion.h1 variants={lineReveal} className="text-white text-[9vw] sm:text-[7vw] md:text-[5vw] lg:text-[3.5vw] leading-[0.9] tracking-tight font-black font-heading uppercase italic origin-bottom-left">
                  Stop Wasting
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-6 py-1">
                <motion.h1 variants={lineReveal} className="text-white text-[9vw] sm:text-[7vw] md:text-[5vw] lg:text-[3.5vw] leading-[0.9] tracking-tight font-black font-heading uppercase italic origin-bottom-left">
                  Ad <motion.span className="text-primary inline-block" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1.0, ease }}>Spend.</motion.span>
                </motion.h1>
              </div>
              <motion.p variants={fadeRise} className="text-base sm:text-lg md:text-xl text-white/70 font-medium mb-8 leading-relaxed max-w-xl">
                We manage Google Ads for 250+ businesses across Louisiana, Texas, and beyond. Transparent reporting, weekly optimization, no long-term contracts. Talk to Trevor.
              </motion.p>
              <motion.div variants={fadeRise}>
                <Link href="#lp-form" className="w-full sm:w-auto inline-block">
                  <LiquidButton className="w-full sm:w-auto px-8 sm:px-12 h-14 sm:h-16 text-sm sm:text-base tracking-normal sm:tracking-[0.1em] shadow-2xl shadow-primary/20">
                    Get Your Free Campaign Audit
                  </LiquidButton>
                </Link>
              </motion.div>
            </motion.div>
            {/* Dashboard Visual — desktop only */}
            <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 1.4, ease }}
              className="lg:col-span-6 hidden md:block"
            >
              <DashboardMockup />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
