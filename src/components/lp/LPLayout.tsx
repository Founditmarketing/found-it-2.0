'use client';

import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { trackCallClick, trackStickyCTAClick } from '@/lib/analytics';
import { SafePhone } from '@/components/landing/SafePhone';
import { LiquidOrbs } from '@/components/landing/LiquidOrbs';

interface LPLayoutProps {
  children: React.ReactNode;
  /** Page-level headline for the sticky bar CTA */
  ctaLabel?: string;
}

export function LPLayout({ children, ctaLabel = 'Get Your Free Proposal' }: LPLayoutProps) {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ─── Interactive liquid-light orbs ─── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <LiquidOrbs />
      </div>

      {/* ─── Content ─── */}
      <div className="relative z-10">{children}</div>

      {/* ─── Exit-intent offer (desktop, once per session) ─── */}

      {/* ─── Mobile Sticky CTA Bar ─── */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/30 px-4 py-3 flex items-center gap-3 safe-bottom"
      >
        <SafePhone
          onClick={() => trackCallClick()}
          className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 border border-border/30 shrink-0"
          ariaLabel="Call us"
        >
          <Phone className="w-5 h-5 text-primary" />
        </SafePhone>
        <Link href="#lp-form" className="flex-1" onClick={() => trackStickyCTAClick()}>
          <motion.div
            whileTap={{ scale: 0.97 }}
            className="w-full bg-primary text-primary-foreground font-black uppercase italic tracking-tighter py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
          >
            {ctaLabel}
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
