'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Quote } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

export function CaseStudy() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 1.2, ease: ease as any }}
          className="bg-card/15 backdrop-blur-2xl border border-border/20 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary/10 via-amber-500/5 to-transparent px-8 lg:px-14 py-6 border-b border-border/10">
            <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] opacity-60">Featured Case Study</p>
          </div>

          <div className="p-8 lg:p-14 space-y-10">
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground">
              How a Premium Law Firm <span className="text-primary">Tripled</span> Their Qualified Intake Calls
            </h3>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-8">
              {[
                { value: '3x', label: 'Qualified Calls' },
                { value: '94', label: 'Lighthouse Score' },
                { value: '2.1s', label: 'Load Time' },
              ].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6, ease: ease as any }}
                  className="bg-primary/5 border border-primary/10 rounded-2xl p-4 lg:p-6 text-center"
                >
                  <p className="text-2xl lg:text-4xl font-black text-primary italic tracking-tighter">{stat.value}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Narrative */}
            <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
              <p>The firm was running Google Ads to a WordPress site built on a premium theme. Traffic was there. Conversions weren&apos;t. The site loaded in 6+ seconds on mobile, the intake form was buried three clicks deep, and the design looked identical to four other firms in their market.</p>
              <p>We rebuilt from scratch on Next.js — custom design, conversion-first architecture, and a streamlined intake flow that reduced form friction by 70%. Within 90 days, qualified intake calls tripled and cost-per-acquisition dropped by 44%.</p>
            </div>

            {/* Quote */}
            <div className="relative bg-card/20 border border-border/20 rounded-2xl p-6 lg:p-8">
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <p className="text-foreground italic font-bold text-lg leading-relaxed mb-4">
                &ldquo;We didn&apos;t just get a new website — we got a new pipeline. The phone hasn&apos;t stopped ringing since launch.&rdquo;
              </p>
              <p className="text-sm text-muted-foreground font-black uppercase tracking-wider">— Managing Partner, [Name Redacted]</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
