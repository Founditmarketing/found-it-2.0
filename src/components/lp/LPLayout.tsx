'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { trackCallClick, trackStickyCTAClick, trackBookingClick, initScrollDepth } from '@/lib/analytics';
import { isBookingUrl } from '@/lib/booking';
import { SafePhone } from '@/components/landing/SafePhone';
import { LiquidOrbs } from '@/components/landing/LiquidOrbs';

interface LPLayoutProps {
  children: React.ReactNode;
  /** Page-level headline for the sticky bar CTA */
  ctaLabel?: string;
  /** OPT-IN: pass the shared BOOKING_URL from a Zoom-offer LP so the sticky bar
   *  button opens the booking calendar in a new tab (once the URL is set)
   *  instead of scrolling to the form. Defaults to empty so every other LP
   *  keeps its scroll-to-form behavior, untouched. */
  bookingUrl?: string;
}

export function LPLayout({
  children,
  ctaLabel = 'Get Your Free Proposal',
  bookingUrl = '',
}: LPLayoutProps) {
  const bookingLive = isBookingUrl(bookingUrl);
  // The sticky bar gets out of the way whenever a real form is on screen:
  // two near-identical orange buttons stacked in thumb range at the moment
  // of conversion is how mis-taps and hesitation happen — and the bar was
  // physically covering the bottom form's fields.
  const [formVisible, setFormVisible] = useState(false);
  useEffect(() => {
    const forms = document.querySelectorAll('[data-lead-form]');
    if (!forms.length) return;
    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target);
          else visible.delete(e.target);
        }
        setFormVisible(visible.size > 0);
      },
      { threshold: 0.15 },
    );
    forms.forEach((f) => io.observe(f));
    return () => io.disconnect();
  }, []);

  // Scroll-depth funnel events, labeled by path so every LP segments cleanly.
  useEffect(() => initScrollDepth(window.location.pathname), []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ─── Interactive liquid-light orbs ─── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <LiquidOrbs />
      </div>

      {/* ─── Content ─── */}
      <div className="relative z-10">{children}</div>

      {/* ─── Exit-intent offer (desktop, once per session) ─── */}

      {/* ─── Mobile Sticky CTA Bar ───
          No entrance delay: the swipe-back decision happens in the first
          two seconds, which is exactly when this used to be invisible. */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: formVisible ? 100 : 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/30 px-4 py-3 flex items-center gap-3 safe-bottom"
      >
        <SafePhone
          onClick={() => trackCallClick()}
          className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 border border-border/30 shrink-0"
          ariaLabel="Call us"
        >
          <Phone className="w-5 h-5 text-primary" />
        </SafePhone>
        {bookingLive ? (
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
            onClick={() => {
              trackStickyCTAClick();
              trackBookingClick('sticky_bar');
            }}
          >
            <motion.div
              whileTap={{ scale: 0.97 }}
              className="w-full bg-primary text-primary-foreground font-black uppercase italic tracking-tighter py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              {ctaLabel}
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </a>
        ) : (
          <Link href="#lp-form" className="flex-1" onClick={() => trackStickyCTAClick()}>
            <motion.div
              whileTap={{ scale: 0.97 }}
              className="w-full bg-primary text-primary-foreground font-black uppercase italic tracking-tighter py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              {ctaLabel}
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        )}
      </motion.div>
    </div>
  );
}
