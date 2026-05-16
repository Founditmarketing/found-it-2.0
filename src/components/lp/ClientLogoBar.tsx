'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;
const logos = Array.from({ length: 6 }, (_, i) => `Client ${i + 1}`);

interface ClientLogoBarProps {
  tagline?: string;
  reviewCount?: string;
  rating?: string;
}

export function ClientLogoBar({
  tagline = 'Trusted by 250+ local businesses across Louisiana, Texas, and 46 other states',
  reviewCount = '200+',
  rating = '4.9',
}: ClientLogoBarProps) {
  return (
    <section className="relative py-10 lg:py-14 border-b border-border/10">
      <div className="max-w-[1440px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }}>
          {/* Tagline */}
          <p className="text-center text-xs text-muted-foreground/50 font-bold uppercase tracking-[0.2em] mb-6">{tagline}</p>

          {/* Logo row */}
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 mb-6">
            {logos.map((name, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4, ease: ease as any }}
                className="w-[120px] h-[48px] bg-gradient-to-br from-amber-900/20 via-yellow-800/10 to-amber-700/5 border border-amber-500/10 rounded-xl flex items-center justify-center hover:border-amber-500/20 transition-colors"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-amber-400/40">{name}</span>
              </motion.div>
            ))}
          </div>

          {/* Review bar + Google Partner */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            {/* Stars */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-foreground">{rating}</span>
              <span className="text-xs text-muted-foreground/60 font-medium">from {reviewCount} reviews</span>
            </div>

            <div className="hidden sm:block w-px h-5 bg-border/30" />

            {/* Google Partner placeholder */}
            <div className="flex items-center gap-2 bg-white/[0.03] border border-border/20 rounded-lg px-3 py-1.5">
              <div className="w-5 h-5 rounded bg-gradient-to-br from-blue-500/30 to-green-500/30 flex items-center justify-center">
                <span className="text-[8px] font-black text-white/60">G</span>
              </div>
              <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-wider">Google Partner</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
