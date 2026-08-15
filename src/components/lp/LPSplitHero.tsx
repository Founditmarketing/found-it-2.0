'use client';

import { MapPin, Zap, Trophy, Target, type LucideIcon } from 'lucide-react';
import { LeadFormEmbed } from './LeadFormEmbed';
import { BookingCta } from './BookingCta';
import { VoiceAgentWidget } from './VoiceAgentWidget';
import { BOOKING_URL } from '@/lib/booking';
import { AWARD } from '@/lib/site';
import { usePersonalization } from '@/lib/personalization';

interface StatChip {
  value: string;
  label: string;
}

interface LPSplitHeroProps {
  /** @deprecated No longer rendered (8/14 audit — the trust line under the
   *  pitch carries these facts as a sentence). Still accepted so the LP
   *  pages passing it keep compiling; delete the prop once they are cleaned. */
  stats?: StatChip[];
  /** Small badge above the headline. */
  badge?: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
  /** Surfaced strongest line: an outcome, proof point, or speed promise. */
  highlight?: string;
  /** Icon for the highlight chip. */
  highlightIcon?: LucideIcon;
  /** Show the award trust chip above the headline. */
  showAward?: boolean;
  formHeading: string;
  formSource: string;
  formPageSlug: string;
  /** Line under the form heading — what happens after the tap. */
  formSubheading?: string;
  /** Submit-button label — repeat the page's promise verbatim. */
  formCtaLabel?: string;
  /** Name + phone only; optional fields collapse behind a toggle. */
  formCompact?: boolean;
  /** Success-state line. */
  formSuccessNote?: string;
  /** Reassurance line under the button — price, month-to-month, or the
   *  OS_PRICING.promise line goes HERE (money-back guarantee retired 8/14). */
  formPrivacyNote?: string;
  /** Ask the revenue band on the hero form; gates ad conversions (OS LPs). */
  formQualify?: boolean;
  /** "What happens next" — 3 short lines rendered right under the form,
   *  so the time-delay question is answered at the exact point of commitment. */
  nextSteps?: string[];
  /** One doctrine line under the steps (e.g. runs-beside-your-old-system). */
  nextStepsNote?: string;
  /** OPT-IN hybrid booking CTA. Off by default so every other LP that shares
   *  this hero is untouched. When true, a primary "book my video call"
   *  button sits above the form, opening bookingUrl in a new tab when set,
   *  else scrolling to the form. */
  showBooking?: boolean;
  /** Booking URL for the hybrid CTA. Defaults to the shared BOOKING_URL. */
  bookingUrl?: string;
  /** Booking button label — keep it message-matched. */
  bookingLabel?: string;
  /** Line that demotes the form to the fallback under the booking button. */
  bookingFallbackNote?: string;
  /** Booking-only: hide the lead form entirely so the booking button is the
   *  single CTA. Also drops the "leave your number" fallback line. */
  bookingOnly?: boolean;
  /** Form-first hybrid: the lead form is the PRIMARY conversion and the
   *  booking button renders quietly UNDER it for hot visitors. Cold ad
   *  traffic won't commit to a 30-minute call as step one — but it will
   *  leave a name and number. Ignored when bookingOnly is set. */
  bookingSecondary?: boolean;
  /** Public price + reassurance, rendered directly under the CTA button — the
   *  point of commitment is exactly where the no-surprises line belongs. */
  ctaFootnote?: string;
  /** OPT-IN: live AI-secretary voice demo as a first-class hero element
   *  (OS landing pages). Off by default so every other LP sharing this hero
   *  is untouched. Renders right under the highlight chip — first screen on
   *  mobile, where the ad traffic lands. */
  voiceAgent?: boolean;
}

/** Only markets we actually serve get named in the badge — a geolocation
 *  cookie naming some other town reads as a lie on the first line. */
const SERVED_CITIES = new Set([
  'Alexandria', 'Pineville', 'Boyce', 'Ball', 'Woodworth', 'Lecompte',
  'Wichita', 'Derby', 'Andover', 'Newton', 'Haysville',
]);

export function LPSplitHero({
  badge = '100% Local — We Come To You',
  headline,
  headlineAccent,
  subheadline,
  highlight,
  highlightIcon: HighlightIcon = Zap,
  showAward = true,
  formHeading,
  formSource,
  formPageSlug,
  formSubheading,
  formCtaLabel,
  formCompact = false,
  formSuccessNote,
  formPrivacyNote,
  formQualify = false,
  nextSteps,
  nextStepsNote,
  showBooking = false,
  bookingUrl = BOOKING_URL,
  bookingLabel = 'Book My Free Video Call',
  bookingFallbackNote = "Or just leave your number and we'll call you to set it up.",
  bookingOnly = false,
  bookingSecondary = false,
  ctaFootnote,
  voiceAgent = false,
}: LPSplitHeroProps) {
  const { city, industry } = usePersonalization();
  // bookingOnly wins over bookingSecondary (as the prop doc promises) — the
  // raw flags combined would otherwise render a hero with no CTA and no form.
  const secondaryBooking = bookingSecondary && !bookingOnly;
  const badgeText =
    city && SERVED_CITIES.has(city) ? `100% Local — Serving ${city}` : badge;

  // The subheadline's first sentence is the challenge line — it gets the
  // strong voice; the rest of the paragraph settles under the demo. Copy
  // arrives as one prop and ships verbatim, only the hierarchy is authored.
  const splitAt = subheadline.search(/[.?!]\s/);
  const subLead = splitAt > -1 ? subheadline.slice(0, splitAt + 1) : subheadline;
  const subRest = splitAt > -1 ? subheadline.slice(splitAt + 1).trim() : '';

  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-36 pb-16 lg:pb-24">
      {/* One authored atmosphere moment: a slow warm bloom behind the
          question, not another bordered box in the stack. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-[-10%] w-[70vw] max-w-[900px] aspect-square rounded-full bg-primary/[0.07] blur-[130px]"
      />
      <div className="max-w-[1440px] mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* ─── Left: Pitch ───
              No JS-gated entrance here: this column IS the mobile LCP element,
              and a framer-motion opacity-0 start left the whole pitch invisible
              until hydration (~10s LCP on throttled mobile). Above-the-fold
              content renders visible; motion polish lives below the fold.
              Order is the narrative on every viewport: the question, the
              challenge line, then HER — the live answer — before anything
              else asks for a scroll. */}
          <div className="lg:col-span-7 min-w-0">
            <h1 className="text-[11vw] sm:text-[6.5vw] lg:text-[3.6vw] leading-[0.95] tracking-tight font-black font-heading uppercase italic text-white [text-wrap:balance] mb-4 lg:mb-5">
              {headline}{' '}
              <span className="text-primary">{headlineAccent}</span>
            </h1>

            <p className="text-lg sm:text-2xl font-bold text-white/95 tracking-tight mb-5 max-w-xl leading-snug [text-wrap:balance]">
              {subLead}
            </p>

            {/* Live voice demo — she IS the answer to the headline, so she
                sits directly under it: first screen on every phone. Mic
                permission happens on tap inside the widget, never on load. */}
            {voiceAgent && (
              <VoiceAgentWidget pageSlug={formPageSlug} className="mb-6" />
            )}

            {subRest && (
              <p className="text-[15px] sm:text-base text-white/60 font-medium mb-6 max-w-xl leading-relaxed">
                {subRest}
              </p>
            )}

            {highlight && (
              <div className="flex items-start gap-3 mb-7 max-w-xl">
                <HighlightIcon className="w-4 h-4 text-primary shrink-0 mt-[3px]" aria-hidden="true" />
                <p className="text-sm sm:text-[15px] font-bold text-white/85 leading-snug">
                  {highlight}
                </p>
              </div>
            )}

            {/* Trust facts as one quiet line — chips read as decoration, a
                sentence reads as fact. Same data the old badge row carried. */}
            {(badge || industry || showAward) && (
              <p className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] font-black uppercase tracking-[0.18em] text-white/40">
                {badge && (
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" aria-hidden="true" />
                    {badgeText}
                  </span>
                )}
                {industry && (
                  <>
                    <span aria-hidden="true" className="text-white/20">·</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Target className="w-3 h-3" aria-hidden="true" />
                      Built for {industry}
                    </span>
                  </>
                )}
                {showAward && (
                  <>
                    <span aria-hidden="true" className="text-white/20">·</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Trophy className="w-3 h-3" aria-hidden="true" />
                      {AWARD.year} · {AWARD.label}
                    </span>
                  </>
                )}
              </p>
            )}
          </div>

          {/* ─── Right: Form (above the fold) ───
              The id lives HERE, on the nearest real form — the sticky bar
              and every #lp-form link used to teleport seven screens down
              to the bottom section while this form sat one swipe away. */}
          {/* Same rule as the pitch column: the form is the conversion element —
              it renders visible immediately, never behind hydration. */}
          <div id="lp-form" className="lg:col-span-5 min-w-0 scroll-mt-24">
            {/* Hybrid CTA: primary "book my video call" button, then the
                form demoted to the leave-your-number fallback directly under
                it. Opt-in — off for every other LP sharing this hero. */}
            {showBooking && !secondaryBooking && (
              <BookingCta
                source={formSource}
                label={bookingLabel}
                bookingUrl={bookingUrl}
                fallbackNote={bookingOnly ? '' : bookingFallbackNote}
              />
            )}

            {/* The public price lives at the point of commitment — nobody
                should tap a "free" button wondering what the catch costs. */}
            {showBooking && !secondaryBooking && ctaFootnote && (
              <p className="mt-3 text-center text-[13px] font-bold text-white/70 leading-snug [text-wrap:balance]">
                {ctaFootnote}
              </p>
            )}

            {!bookingOnly && (
              <LeadFormEmbed
                heading={formHeading}
                source={formSource}
                pageSlug={formPageSlug}
                subheading={formSubheading}
                ctaLabel={formCtaLabel}
                compact={formCompact}
                qualify={formQualify}
                successNote={formSuccessNote}
                {...(formPrivacyNote !== undefined ? { privacyNote: formPrivacyNote } : {})}
              />
            )}

            {/* Hot-visitor shortcut: the calendar under the form, quiet. */}
            {showBooking && secondaryBooking && (
              <div className="mt-4">
                <p className="mb-2.5 text-center text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                  Ready now? Skip the call-back —
                </p>
                <BookingCta
                  secondary
                  source={formSource}
                  label={bookingLabel}
                  bookingUrl={bookingUrl}
                  fallbackNote=""
                />
              </div>
            )}

            {/* "What happens next" — kills the time-delay unknown at the
                point of commitment: three concrete beats, then the
                runs-beside-your-old-system doctrine so nobody pictures a
                day-one rip-out. */}
            {nextSteps && nextSteps.length > 0 && (
              <div className="mt-5 bg-white/[0.03] border border-border/20 rounded-2xl p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-3.5">
                  What happens next
                </p>
                <ol className="space-y-3">
                  {nextSteps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-md bg-primary text-primary-foreground font-black text-xs flex items-center justify-center shrink-0 mt-[1px]">
                        {i + 1}
                      </span>
                      <span className="text-sm font-bold text-white/85 leading-snug">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
                {nextStepsNote && (
                  <p className="mt-4 pt-4 border-t border-border/20 text-xs text-white/60 font-medium leading-relaxed">
                    {nextStepsNote}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
