'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { X, Download, ArrowRight } from 'lucide-react';
import { trackExitIntent } from '@/lib/analytics';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

interface ExitIntentProps {
  headline?: string;
  subheadline?: string;
  ctaLabel?: string;
  magnetTitle?: string;
}

export function ExitIntent({
  headline = "Wait — before you go.",
  subheadline = "Download our free guide and make sure you ask the right questions before hiring any web designer.",
  ctaLabel = "Download the Free Guide",
  magnetTitle = "The Founder's Guide to Choosing a Web Designer",
}: ExitIntentProps) {
  const [show, setShow] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const handleTrigger = useCallback(() => {
    if (hasShown) return;
    setShow(true);
    setHasShown(true);
    trackExitIntent();
    try {
      sessionStorage.setItem('fi_exit_shown', 'true');
    } catch {}
  }, [hasShown]);

  useEffect(() => {
    // Check if already shown this session
    try {
      if (sessionStorage.getItem('fi_exit_shown')) {
        setHasShown(true);
        return;
      }
    } catch {}

    // Only enable on desktop (>1024px)
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    // Delay activation by 5 seconds so it doesn't fire immediately
    const timer = setTimeout(() => {
      const handler = (e: MouseEvent) => {
        if (e.clientY < 5) {
          handleTrigger();
        }
      };
      document.addEventListener('mouseout', handler);
      return () => document.removeEventListener('mouseout', handler);
    }, 5000);

    return () => clearTimeout(timer);
  }, [handleTrigger]);

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm"
            onClick={() => setShow(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.4, ease }}
            className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-[201] sm:w-full sm:max-w-lg"
          >
            <div className="bg-background border border-border/30 rounded-[2rem] shadow-2xl overflow-hidden relative">
              {/* Close */}
              <button
                onClick={() => setShow(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              {/* Top accent */}
              <div className="h-1.5 bg-gradient-to-r from-primary via-amber-500 to-primary" />

              <div className="p-8 sm:p-10 text-center">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Download className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter mb-3 text-foreground">
                  {headline}
                </h3>

                <p className="text-muted-foreground font-medium mb-6 leading-relaxed max-w-sm mx-auto">
                  {subheadline}
                </p>

                {/* Lead magnet card */}
                <div className="bg-card/30 border border-border/20 rounded-2xl p-5 mb-6 text-left">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 mb-2">
                    Free Download
                  </p>
                  <p className="font-black text-foreground italic tracking-tight leading-snug">
                    {magnetTitle}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    10 Questions to Ask Before You Sign Anything
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="#lp-form"
                  onClick={() => setShow(false)}
                  className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-black uppercase italic tracking-tighter py-4 rounded-xl text-sm hover:shadow-lg hover:shadow-primary/20 transition-shadow"
                >
                  {ctaLabel}
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="text-[10px] text-muted-foreground/40 mt-4 uppercase tracking-widest">
                  No spam. Instant access.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
