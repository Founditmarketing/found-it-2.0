'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { usePersonalization } from '@/lib/personalization';

/** Renders a "Serving {City} {Industry}" chip only when we actually know
    something about the visitor; renders nothing otherwise. */
export function PersonalizedChip({ className = '' }: { className?: string }) {
  const { city, industry } = usePersonalization();
  if (!city && !industry) return null;

  const label = city && industry
    ? `Serving ${city} ${industry}`
    : city
      ? `Serving ${city} Businesses`
      : `Built for ${industry}`;

  return (
    <AnimatePresence>
      <motion.span
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`inline-flex items-center gap-2 bg-primary/10 border border-primary/25 rounded-full px-4 py-1.5 ${className}`}
      >
        <MapPin className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
        <span className="text-[11px] font-black uppercase tracking-[0.18em] text-primary">{label}</span>
      </motion.span>
    </AnimatePresence>
  );
}
