'use client';

import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const painPoints = [
  { title: 'Built on a template thousands of others are using', description: 'Your brand deserves more than a $49 theme from ThemeForest. Visitors can tell.' },
  { title: 'Slow load times killing your SEO and conversions', description: 'Every second of load time costs you 7% in conversions. Most template sites load in 5+ seconds.' },
  { title: "Phone isn't ringing despite the traffic", description: "Traffic without conversion architecture is just expensive vanity. Design should drive action." },
  { title: 'Looks dated next to your top competitors', description: 'If your competitor\'s site looks better, they\'re getting the call. First impressions are final.' },
];

export function PainPoints() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }} className="text-center mb-16">
          <p className="text-red-400/80 font-mono text-xs font-black uppercase tracking-[0.4em] mb-4">The Problem</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground">
            Why Your Current Site<br />
            <span className="text-red-400/80">Isn&apos;t Converting</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {painPoints.map((point, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7, ease: ease as any }}
              className="bg-red-500/[0.03] border border-red-500/10 rounded-2xl p-6 lg:p-8 hover:border-red-500/20 transition-all duration-500 group"
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                <AlertTriangle className="w-5 h-5 text-red-400/80" />
              </div>
              <h3 className="text-lg font-black uppercase italic tracking-tighter mb-2 text-foreground">{point.title}</h3>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
