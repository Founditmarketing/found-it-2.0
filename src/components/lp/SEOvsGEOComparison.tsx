'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const seoItems = [
  'Google Business Profile optimization',
  'Local citations & directory listings',
  'Local content & landing pages',
  'Review generation & management',
  'Schema markup for local search',
];

const geoItems = [
  'Entity optimization for AI knowledge graphs',
  'AI-citable content architecture',
  'Structured data for answer engines',
  'Authority signals AI engines look for',
  'Multi-platform AI visibility (ChatGPT, Perplexity, Gemini, AI Overviews)',
];

export function SEOvsGEOComparison() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }} className="text-center mb-16">
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-60">What We Do</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground">
            SEO + GEO = <span className="text-primary">Total Visibility</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-medium italic max-w-2xl mx-auto">
            GEO is the new layer on top of SEO — not a replacement. You need both.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Traditional SEO */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }}
            className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-[2rem] p-8 lg:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-black uppercase italic tracking-tighter text-foreground">Traditional Local SEO</h3>
            </div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-400/60 mb-4">The Foundation</p>
            <div className="space-y-3">
              {seoItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400/60 mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* GEO */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }}
            className="bg-card/15 backdrop-blur-xl border border-primary/20 rounded-[2rem] p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-black uppercase italic tracking-tighter text-foreground">AI Search Optimization (GEO)</h3>
            </div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-primary/60 mb-4">The New Layer</p>
            <div className="space-y-3 relative z-10">
              {geoItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-primary/60 mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
