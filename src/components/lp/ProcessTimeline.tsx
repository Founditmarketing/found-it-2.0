'use client';

import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  { week: 'Week 1', title: 'Discovery & Strategy', description: 'Deep dive into your business, competitors, audience, and conversion goals. We map your entire digital strategy before touching a pixel.' },
  { week: 'Week 2', title: 'Design Concepts', description: 'Custom mockups for your key pages. We iterate until you love it — no generic templates, no compromises.' },
  { week: 'Weeks 3–4', title: 'Build & Iterate', description: 'Pixel-perfect development on a modern stack. You see progress in real time and can request changes throughout.' },
  { week: 'Week 5', title: 'Launch & Optimize', description: 'We launch, set up analytics, and run 60 days of post-launch optimization to maximize conversions.' },
];

export function ProcessTimeline() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }} className="text-center mb-16 lg:mb-24">
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-60">The Timeline</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground">Concept to Launch</h2>
        </motion.div>

        {/* Desktop: horizontal */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: ease as any }}
            className="absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60 origin-left z-0"
          />
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.7, ease: ease as any }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-[104px] h-[104px] rounded-full bg-background border-2 border-primary/30 flex items-center justify-center mb-6 shadow-lg shadow-primary/5">
                  <span className="text-3xl font-black text-primary italic tracking-tighter">0{i + 1}</span>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 mb-2">{step.week}</p>
                <h3 className="text-lg font-black uppercase italic tracking-tighter mb-3 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden relative pl-8">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-primary/20" />
          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6, ease: ease as any }}
                className="relative"
              >
                <div className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center">
                  <span className="text-xs font-black text-primary">{i + 1}</span>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 mb-1">{step.week}</p>
                <h3 className="text-lg font-black uppercase italic tracking-tighter mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
