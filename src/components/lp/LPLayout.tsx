'use client';

import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { trackCallClick, trackStickyCTAClick } from '@/lib/analytics';
import { phoneHref, CALLRAIL_CLASS } from '@/lib/phone';

interface LPLayoutProps {
  children: React.ReactNode;
  /** Page-level headline for the sticky bar CTA */
  ctaLabel?: string;
}

export function LPLayout({ children, ctaLabel = 'Get Your Free Proposal' }: LPLayoutProps) {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ─── Ambient Background Blobs ─── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="blur-blob w-[600px] h-[600px] bg-primary/20 -top-48 -left-48" />
        <div className="blur-blob w-[500px] h-[500px] bg-primary/10 bottom-24 right-[-200px]" />
      </div>

      {/* ─── Content ─── */}
      <div className="relative z-10">{children}</div>

      {/* ─── Mobile Sticky CTA Bar ─── */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/30 px-4 py-3 flex items-center gap-3 safe-bottom"
      >
        <a
          href={phoneHref}
          onClick={() => trackCallClick()}
          className={`flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 border border-border/30 shrink-0 ${CALLRAIL_CLASS}`}
          aria-label="Call us"
        >
          <Phone className="w-5 h-5 text-primary" />
        </a>
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
