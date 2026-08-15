'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CalendarCheck, CheckCircle2, Download } from 'lucide-react';
import {
  trackGuideThanksView,
  trackGuidePdfOpen,
  trackBookingClick,
} from '@/lib/analytics';
import { GUIDE_PDF_PATH, GUIDE_DOWNLOAD_NAME, GUIDE_TITLE } from '@/lib/guide';
import { BOOKING_URL, isBookingUrl } from '@/lib/booking';
import { OS_PRICING } from '@/lib/site';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/** One next step, not three: the booking CTA is the only primary action.
    The direct PDF link is the safety net for browsers that ate the download. */
export default function GuideThanksClient() {
  useEffect(() => {
    trackGuideThanksView();
  }, []);

  const bookingLive = isBookingUrl(BOOKING_URL);

  return (
    <main className="bg-transparent text-foreground min-h-[100svh] flex items-center justify-center py-16 lg:py-24 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-primary/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[640px] mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease, type: 'spring', bounce: 0.4 }}
          className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-8 border border-primary/20"
        >
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
            Guide On Its Way
          </p>
          <h1 className="text-4xl sm:text-5xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            It&apos;s Downloading.
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-md mx-auto leading-relaxed mb-4">
            Your copy of <span className="text-foreground font-bold">&ldquo;{GUIDE_TITLE}&rdquo;</span>{' '}
            should be in your downloads right now.
          </p>

          {/* Safety net: some mobile browsers swallow programmatic downloads. */}
          <a
            href={GUIDE_PDF_PATH}
            download={GUIDE_DOWNLOAD_NAME}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackGuidePdfOpen('lp_guide_thanks')}
            className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors mb-12"
          >
            <Download className="w-4 h-4 text-primary" aria-hidden="true" />
            Didn&apos;t start? Open the PDF here
          </a>

          {/* THE one next step */}
          <div className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl p-8 lg:p-10 text-left mb-10">
            <p className="text-primary font-mono text-[10px] font-black uppercase tracking-[0.3em] mb-3 opacity-80">
              While it&apos;s fresh
            </p>
            <h2 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground mb-4">
              Book Your Free <span className="text-primary">Software Map Call.</span>
            </h2>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-6">
              Page 4 of the guide is the fitting — here&apos;s step one. About 30 minutes: we map
              the app we&apos;d build if we owned your business, live. You keep the map, hire us
              or don&apos;t. One job: {OS_PRICING.promise}
            </p>
            {bookingLive ? (
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackBookingClick('lp_guide_thanks')}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black uppercase italic tracking-tighter text-base py-4 rounded-xl hover:opacity-90 active:scale-[0.99] transition-all shadow-lg shadow-primary/20"
              >
                <CalendarCheck className="w-5 h-5" aria-hidden="true" />
                Book My Free Map Call
              </a>
            ) : (
              // BOOKING_URL unset → the site's existing contact/booking path.
              <Link
                href="/contact"
                onClick={() => trackBookingClick('lp_guide_thanks')}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black uppercase italic tracking-tighter text-base py-4 rounded-xl hover:opacity-90 active:scale-[0.99] transition-all shadow-lg shadow-primary/20"
              >
                <CalendarCheck className="w-5 h-5" aria-hidden="true" />
                Book My Free Map Call
              </Link>
            )}
          </div>

          <p className="text-xs text-faint font-medium">
            Free &amp; no obligation. Month-to-month — cancel anytime, and the system stays yours.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
