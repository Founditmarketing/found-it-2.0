'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Search, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';

const ease = [0.16, 1, 0.3, 1] as const;

interface GEOPricingProps {
  businessName?: string;
}

export function GEOPricing({ businessName }: GEOPricingProps) {
  const ctaText = businessName
    ? `Put ${businessName} in AI Search Results`
    : 'Get Started — Free Audit Included';

  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }} className="text-center mb-16">
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">Investment</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground">
            Transparent Pricing
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Local SEO */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0, duration: 0.7, ease: ease as any }}
            className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-[2rem] p-8 text-center hover:border-border/30 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-6">
              <Search className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-black uppercase italic tracking-tighter mb-2 text-foreground">Local SEO</h3>
            <p className="text-4xl font-black text-foreground italic tracking-tighter mb-1">$1,200<span className="text-lg text-faint">/mo</span></p>
            <p className="text-xs text-faint font-bold mb-6">Starting at</p>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed">Google Business Profile, local citations, review management, and local content strategy.</p>
          </motion.div>

          {/* GEO */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7, ease: ease as any }}
            className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-[2rem] p-8 text-center hover:border-primary/20 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-black uppercase italic tracking-tighter mb-2 text-foreground">AI Search (GEO)</h3>
            <p className="text-4xl font-black text-foreground italic tracking-tighter mb-1">$1,800<span className="text-lg text-faint">/mo</span></p>
            <p className="text-xs text-faint font-bold mb-6">Starting at</p>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed">Entity optimization, AI-citable content, structured data, and multi-platform AI visibility.</p>
          </motion.div>

          {/* Bundle */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7, ease: ease as any }}
            className="bg-card/15 backdrop-blur-xl border-2 border-primary/30 rounded-[2rem] p-8 text-center relative overflow-hidden"
          >
            <span className="absolute top-4 right-4 text-[9px] font-black uppercase tracking-[0.2em] text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">Most Popular</span>
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-black uppercase italic tracking-tighter mb-2 text-foreground">SEO + GEO Bundle</h3>
            <p className="text-4xl font-black text-primary italic tracking-tighter mb-1">$2,500<span className="text-lg text-faint">/mo</span></p>
            <p className="text-xs text-faint font-bold mb-6">Combined</p>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed">Complete local domination — traditional search + AI search. Most clients choose this.</p>
          </motion.div>
        </div>

        {/* Free audit note */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6, ease: ease as any }}
          className="text-center mt-10"
        >
          <p className="text-sm text-muted-foreground font-medium mb-6">
            <span className="text-primary font-bold">Free audit included</span> with every engagement.
          </p>
          <Link href="#lp-form">
            <motion.span whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-black uppercase italic tracking-tighter py-4 px-10 rounded-xl text-sm shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow"
            >
              {ctaText} <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
