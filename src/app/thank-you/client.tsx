'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, CalendarCheck } from 'lucide-react';
import { useEffect } from 'react';
import { trackThankYouConversion, trackCalendlyOpen } from '@/lib/analytics';
import { LINKS } from '@/lib/site';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/** Config-gated booking calendar — renders only when a URL is set in site.ts. */
const bookingUrl: string = LINKS.bookingCalendar;

export default function ThankYouClient() {
  useEffect(() => {
    trackThankYouConversion();
  }, []);

  return (
    <main className="bg-transparent text-foreground min-h-[80vh] flex items-center justify-center pt-32 lg:pt-40 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-primary/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[640px] mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease, type: "spring", bounce: 0.4 }}
          className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-8 border border-primary/20"
        >
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease }}>
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
            Submission Successful
          </p>
          <h1 className="text-4xl sm:text-5xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            You&apos;re In.
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-md mx-auto leading-relaxed mb-10">
            We&apos;ve got your information. Trevor will call you back.
          </p>

          {/* Next step: book a time */}
          {bookingUrl && (
            <div className="flex flex-col items-center gap-4 mb-12">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCalendlyOpen()}
                className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors"
              >
                <CalendarCheck className="w-4 h-4 text-primary" aria-hidden="true" />
                Skip the wait — pick a time
              </a>
            </div>
          )}

          {/* While you wait */}
          <div className="bg-card/10 border border-border/15 rounded-2xl p-6 mb-10 text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-faint mb-2">
              While you wait
            </p>
            <Link href="/case-studies" className="group flex items-center justify-between gap-4">
              <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                See the results we&apos;ve gotten for businesses like yours
              </span>
              <ArrowRight className="w-4 h-4 text-primary shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card/40 hover:bg-card/60 backdrop-blur-md border border-border/20 rounded-full text-sm font-bold uppercase tracking-wider transition-all hover:border-primary/30 text-foreground group"
          >
            <ArrowLeft className="w-4 h-4 text-primary group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
