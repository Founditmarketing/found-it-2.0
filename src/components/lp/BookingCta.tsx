'use client';

import { ArrowRight } from 'lucide-react';
import { trackBookingClick } from '@/lib/analytics';
import { BOOKING_URL, isBookingUrl } from '@/lib/booking';

interface BookingCtaProps {
  /** Analytics source tag, e.g. 'lp_walkthrough_hero'. */
  source: string;
  /** Button label — keep it message-matched: "Book My Free Zoom Call". */
  label?: string;
  /** Booking URL override. Defaults to the shared BOOKING_URL config constant. */
  bookingUrl?: string;
  /** Anchor scrolled to when no booking URL is set (never a dead link). */
  fallbackHref?: string;
  /** The line that demotes the form to a fallback. Pass '' to hide it. */
  fallbackNote?: string;
  /** Quiet outline styling for when the FORM is the primary conversion and
   *  this button is the hot-visitor shortcut under it. Orange keeps its one
   *  job on the page: the submit button. */
  secondary?: boolean;
  className?: string;
}

const primaryButtonClass =
  'w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black uppercase italic tracking-tighter text-base py-4 px-7 rounded-xl hover:opacity-90 active:scale-[0.99] transition-all shadow-lg shadow-primary/20';

const secondaryButtonClass =
  'w-full inline-flex items-center justify-center gap-2 bg-white/[0.04] border border-border/30 text-white/85 font-black uppercase italic tracking-tighter text-sm py-3.5 px-6 rounded-xl hover:border-primary/40 hover:text-white active:scale-[0.99] transition-all';

/**
 * The hybrid booking CTA: a primary "Book my free Zoom call" button, then a
 * line handing off to the lead form below it.
 *
 * - BOOKING_URL set  → the button opens the calendar in a new tab and fires
 *   trackBookingClick analytics.
 * - BOOKING_URL empty → the button gracefully scrolls to the lead form
 *   (fallbackHref), so the live page is never a dead link before the URL is set.
 *
 * The form itself is rendered by the caller directly under this component and is
 * left completely untouched — this only adds the button + the demotion line.
 */
export function BookingCta({
  source,
  label = 'Book My Free Video Call',
  bookingUrl = BOOKING_URL,
  fallbackHref = '#lp-form',
  fallbackNote = "Or just leave your number and we'll call you to set it up.",
  secondary = false,
  className = '',
}: BookingCtaProps) {
  const hasUrl = isBookingUrl(bookingUrl);
  const buttonClass = secondary ? secondaryButtonClass : primaryButtonClass;

  return (
    <div className={className}>
      {hasUrl ? (
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackBookingClick(source)}
          className={buttonClass}
        >
          {label}
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>
      ) : (
        <a href={fallbackHref} className={buttonClass}>
          {label}
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>
      )}

      {fallbackNote && (
        <p className="mt-3 mb-4 text-center text-sm font-bold text-white/70">
          {fallbackNote}
        </p>
      )}
    </div>
  );
}
