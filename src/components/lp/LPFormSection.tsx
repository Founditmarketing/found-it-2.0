'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Phone } from 'lucide-react';
import { trackCallClick } from '@/lib/analytics';
import { SafePhone, SafePhoneText } from '@/components/landing/SafePhone';
import { NativeLeadForm } from '@/components/forms/NativeLeadForm';
import { BookingCta } from './BookingCta';
import { BOOKING_URL } from '@/lib/booking';

const ease = [0.16, 1, 0.3, 1] as const;

interface LPFormSectionProps {
  heading?: string;
  subheading?: string;
  benefits?: string[];
  /** Source tag for attribution (e.g. 'lp_google_ads') */
  source?: string;
  /** Page slug for attribution (e.g. 'google-ads-management') */
  pageSlug?: string;
  /** Tiny kicker above the heading. The default is marketing vocabulary —
   *  software LPs must override it ('Free Walkthrough'), because 'strategy
   *  session' is the exact salesman identity that audience was burned by. */
  kicker?: string;
  /** Submit-button label passed through to the form. */
  ctaLabel?: string;
  /** On mobile, render the form ABOVE the copy so a deep-link lands on
   *  inputs, not on a benefits essay. */
  mobileFormFirst?: boolean;
  /** OPT-IN hybrid booking CTA above the form. Off by default so every other
   *  LP sharing this section is untouched. */
  showBooking?: boolean;
  /** Booking URL for the hybrid CTA. Defaults to the shared BOOKING_URL. */
  bookingUrl?: string;
  /** Booking button label — keep it message-matched. */
  bookingLabel?: string;
  /** Line that demotes the form to the fallback under the booking button. */
  bookingFallbackNote?: string;
}

export function LPFormSection({
  heading = 'Get Your Free Growth Strategy',
  subheading = "Tell us about your business and we'll deliver a custom growth plan within 24 hours.",
  benefits = [
    'Full competitive analysis',
    'Custom strategy roadmap',
    'Zero obligation — keep the plan either way',
  ],
  source = 'lp_general',
  pageSlug = 'general',
  kicker = 'Free Strategy Session',
  ctaLabel,
  mobileFormFirst = false,
  showBooking = false,
  bookingUrl = BOOKING_URL,
  bookingLabel = 'Book My Free Zoom Call',
  bookingFallbackNote = "Or just leave your number and we'll call you to set it up.",
}: LPFormSectionProps) {
  return (
    // lp-form-bottom: the hero form owns #lp-form now — this section used
    // to steal the anchor and teleport visitors seven screens down.
    <section id="lp-form-bottom" className="relative py-20 lg:py-32 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: ease as any }}
          className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start"
        >
          {/* Left — Copy & Benefits */}
          <div className={`lg:col-span-5 lg:sticky lg:top-32 ${mobileFormFirst ? 'order-2 lg:order-none' : ''}`}>
            <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
              {kicker}
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] mb-6 text-foreground">
              {heading}
            </h2>
            <p className="text-lg text-muted-foreground font-medium italic mb-10 leading-relaxed">
              {subheading}
            </p>

            {/* Benefits */}
            <div className="space-y-5 mb-10">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: ease as any }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground font-bold text-sm">{benefit}</p>
                </motion.div>
              ))}
            </div>

            {/* Phone fallback */}
            <div className="bg-card/20 backdrop-blur-xl border border-border/20 rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-faint font-black mb-3">
                Prefer to talk?
              </p>
              <SafePhone
                onClick={() => trackCallClick()}
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <span className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </span>
                <SafePhoneText className="text-2xl font-black italic tracking-tighter" />
              </SafePhone>
            </div>
          </div>

          {/* Right — Form */}
          <div className={`lg:col-span-7 ${mobileFormFirst ? 'order-1 lg:order-none' : ''}`}>
            {/* Hybrid CTA: primary "Book my free Zoom call" button, then the
                form demoted to the leave-your-number fallback. Opt-in. */}
            {showBooking && (
              <BookingCta
                source={source}
                label={bookingLabel}
                bookingUrl={bookingUrl}
                fallbackNote={bookingFallbackNote}
              />
            )}
            <NativeLeadForm source={source} pageSlug={pageSlug} showBusiness ctaLabel={ctaLabel} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
