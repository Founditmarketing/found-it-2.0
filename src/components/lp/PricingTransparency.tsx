'use client';

import { motion } from 'framer-motion';
import { DollarSign, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ease = [0.16, 1, 0.3, 1] as const;

export function PricingTransparency() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-[900px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 1, ease: ease as any }}
          className="bg-card/15 backdrop-blur-2xl border border-primary/20 rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-14 shadow-2xl text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8">
              <DollarSign className="w-8 h-8 text-primary" />
            </div>

            <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">Investment</p>

            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.85] mb-8 text-foreground">
              Transparent Pricing
            </h2>

            <div className="space-y-6 text-left max-w-xl mx-auto">
              <div className="bg-card/20 border border-border/20 rounded-2xl p-6">
                <p className="text-2xl lg:text-3xl font-black text-primary italic tracking-tighter mb-2">$8,500 – $25,000+</p>
                <p className="text-muted-foreground font-medium">Custom builds start at $8,500. Most clients invest $12–25K for a full conversion-focused build.</p>
              </div>

              <div className="bg-card/20 border border-border/20 rounded-2xl p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-2">What&apos;s Included</p>
                <p className="text-foreground font-medium">Design, development, copywriting collaboration, launch, and <span className="text-primary font-bold">60 days of post-launch optimization</span>.</p>
              </div>

              <div className="bg-card/20 border border-border/20 rounded-2xl p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-2">Ongoing Support</p>
                <p className="text-foreground font-medium">Monthly maintenance plans from <span className="text-primary font-bold">$250/mo</span> — includes content updates, security patches, and performance monitoring.</p>
              </div>
            </div>

            <Link href="#lp-form" className="mt-10 inline-block">
              <motion.div whileTap={{ scale: 0.97 }}
                className="bg-primary text-primary-foreground font-black uppercase italic tracking-tighter py-4 px-10 rounded-xl text-sm flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow"
              >
                Get a Custom Quote <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
