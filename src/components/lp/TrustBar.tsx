'use client';

import { motion } from 'framer-motion';
import { TRACK_RECORD } from '@/lib/site';

const liquidEasing = [0.16, 1, 0.3, 1] as const;

interface TrustBarProps {
  stats?: { value: string; label: string }[];
}

const defaultStats = [
  { value: TRACK_RECORD.yearsInBusiness, label: 'Years in Business' },
  { value: `${TRACK_RECORD.googleRating}★`, label: 'Google Rating' },
  { value: '0', label: 'Long-Term Contracts' },
];

export function TrustBar({ stats = defaultStats }: TrustBarProps) {
  return (
    <section className="relative py-12 lg:py-16 border-b border-border/10 bg-card/5">
      <div className="max-w-[1440px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: liquidEasing as any }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: liquidEasing as any }}
              className="text-center group"
            >
              <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary italic tracking-tighter leading-none drop-shadow-[0_0_20px_rgba(249,115,22,0.15)] group-hover:drop-shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-500">
                {stat.value}
              </p>
              <p className="mt-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-faint">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
