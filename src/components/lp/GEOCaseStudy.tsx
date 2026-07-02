'use client';

import { motion } from 'framer-motion';
import { Quote, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

export function GEOCaseStudy() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 1.2, ease: ease as any }}
          className="bg-card/15 backdrop-blur-2xl border border-border/20 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl"
        >
          <div className="bg-gradient-to-r from-primary/10 via-amber-500/5 to-transparent px-8 lg:px-14 py-6 border-b border-border/10">
            <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] opacity-80">Featured Case Study</p>
          </div>
          <div className="p-8 lg:p-14 space-y-10">
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground">
              How a Louisiana Medical Practice Went From <span className="text-red-400">Invisible</span> to <span className="text-primary">AI-Recommended</span>
            </h3>

            {/* Before/After */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-500/[0.05] border border-red-500/15 rounded-2xl p-6">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-red-400/80 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> Before GEO
                </p>
                <div className="bg-black/30 rounded-xl p-4 font-mono text-sm text-white/70 space-y-2 border border-white/5">
                  <p className="text-white/80 text-xs">ChatGPT response:</p>
                  <p>&quot;Here are some well-regarded dermatology practices in Louisiana: <span className="text-white/30">[3 competitors listed, client not mentioned]</span>&quot;</p>
                </div>
                <p className="mt-3 text-xs text-red-400/60 font-bold">Not mentioned in any AI search results</p>
              </div>
              <div className="bg-primary/[0.05] border border-primary/15 rounded-2xl p-6">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-primary/80 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> After GEO (90 Days)
                </p>
                <div className="bg-black/30 rounded-xl p-4 font-mono text-sm text-white/70 space-y-2 border border-primary/10">
                  <p className="text-white/80 text-xs">ChatGPT response:</p>
                  <p>&quot;One highly recommended option is <span className="text-primary font-bold">[Client Practice]</span>, known for their advanced treatments and excellent patient reviews...&quot;</p>
                </div>
                <p className="mt-3 text-xs text-primary/80 font-bold">Cited in 4 of 5 AI search queries</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-8">
              {[
                { value: '4/5', label: 'AI Query Mentions' },
                { value: '340%', label: 'Organic Traffic Growth' },
                { value: '2.8x', label: 'New Patient Inquiries' },
              ].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6, ease: ease as any }}
                  className="bg-primary/5 border border-primary/10 rounded-2xl p-4 lg:p-6 text-center"
                >
                  <p className="text-2xl lg:text-4xl font-black text-primary italic tracking-tighter">{stat.value}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-faint mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <div className="relative bg-card/20 border border-border/20 rounded-2xl p-6 lg:p-8">
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <p className="text-foreground italic font-bold text-lg leading-relaxed mb-4">
                &ldquo;We had no idea AI search was a thing until Trevor showed us we were completely invisible. Three months later, ChatGPT recommends us by name. Our patient inquiries have nearly tripled.&rdquo;
              </p>
              <p className="text-sm text-muted-foreground font-black uppercase tracking-wider">— Practice Manager, [Name Redacted]</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
