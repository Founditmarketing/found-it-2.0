'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Zap, Trophy, Target, type LucideIcon } from 'lucide-react';
import { LeadFormEmbed } from './LeadFormEmbed';
import { trackCallClick } from '@/lib/analytics';
import { SafePhone, SafePhoneText } from '@/components/landing/SafePhone';
import { AWARD } from '@/lib/site';
import { usePersonalization } from '@/lib/personalization';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface StatChip {
  value: string;
  label: string;
}

interface LPSplitHeroProps {
  /** Small badge above the headline. */
  badge?: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
  /** Surfaced strongest line: a guarantee, outcome, or speed promise. */
  highlight?: string;
  /** Icon for the highlight chip. */
  highlightIcon?: LucideIcon;
  stats?: StatChip[];
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
  /** Reassurance line under the button — put the guarantee HERE. */
  formPrivacyNote?: string;
  /** Render a primary CTA + call/text line in the pitch column, so the
   *  first screen has something to DO before any scrolling happens. */
  inlineCta?: boolean;
  /** "What happens next" — 3 short lines rendered right under the form,
   *  so the time-delay question is answered at the exact point of commitment. */
  nextSteps?: string[];
  /** One doctrine line under the steps (e.g. runs-beside-your-old-system). */
  nextStepsNote?: string;
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
  stats = [],
  showAward = true,
  formHeading,
  formSource,
  formPageSlug,
  formSubheading,
  formCtaLabel,
  formCompact = false,
  formSuccessNote,
  formPrivacyNote,
  inlineCta = false,
  nextSteps,
  nextStepsNote,
}: LPSplitHeroProps) {
  const { city, industry } = usePersonalization();
  const badgeText =
    city && SERVED_CITIES.has(city) ? `100% Local — Serving ${city}` : badge;

  return (
    <section className="relative overflow-hidden pt-28 lg:pt-36 pb-16 lg:pb-24">
      <div className="max-w-[1440px] mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* ─── Left: Pitch ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-7"
          >
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {badge && (
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">
                    {badgeText}
                  </span>
                </div>
              )}
              {industry && (
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
                  <Target className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">
                    Built for {industry}
                  </span>
                </div>
              )}
              {showAward && (
                <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/25 rounded-2xl px-4 py-1.5 max-w-full">
                  <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
                  <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.12em] sm:tracking-[0.2em] text-amber-300 leading-snug">
                    {AWARD.year} · {AWARD.label}
                  </span>
                </div>
              )}
            </div>

            <h1 className="text-[9vw] sm:text-[6.5vw] lg:text-[3.4vw] leading-[0.98] tracking-tight font-black font-heading uppercase italic text-white mb-5">
              {headline}{' '}
              <span className="text-primary">{headlineAccent}</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 font-medium mb-6 max-w-xl leading-relaxed">
              {subheadline}
            </p>

            {highlight && (
              <div className="inline-flex items-center gap-3 bg-white/[0.04] border border-primary/20 rounded-xl px-4 py-3 mb-8">
                <span className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <HighlightIcon className="w-5 h-5 text-primary" aria-hidden="true" />
                </span>
                <span className="text-sm sm:text-base font-bold text-white leading-tight">
                  {highlight}
                </span>
              </div>
            )}

            {/* The first screen must have something to DO — on mobile the
                form is a full swipe away, and the swipe-back decision
                happens before the sticky bar even animates in. */}
            {inlineCta && (
              <div className="mb-8 flex flex-col sm:flex-row sm:items-center gap-3">
                <a
                  href="#lp-form"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black uppercase italic tracking-tighter text-base py-4 px-7 rounded-xl hover:opacity-90 active:scale-[0.99] transition-all shadow-lg shadow-primary/20"
                >
                  {formHeading} →
                </a>
                <a
                  href="sms:+13182800115"
                  className="inline-flex items-center justify-center gap-2 text-sm font-bold text-white/80 hover:text-primary transition-colors py-2"
                >
                  or text Trevor: (318) 280-0115
                </a>
              </div>
            )}

            {stats.length > 0 && (
              <div className="grid grid-cols-3 gap-3 max-w-md mb-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease }}
                    className="bg-primary/5 border border-primary/10 rounded-xl p-3 text-center"
                  >
                    <p className="text-xl lg:text-2xl font-black text-primary italic tracking-tighter leading-none">
                      {stat.value}
                    </p>
                    <p className="text-[9px] font-black uppercase tracking-[0.12em] text-white/80 mt-1.5">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            <SafePhone
              onClick={() => trackCallClick()}
              className="inline-flex items-center gap-3 text-white/80 hover:text-primary transition-colors group"
            >
              <span className="w-10 h-10 rounded-xl bg-white/[0.04] border border-border/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
              </span>
              <span className="text-sm font-bold">
                Prefer to talk? <SafePhoneText className="text-white font-black italic tracking-tighter" />
              </span>
            </SafePhone>
          </motion.div>

          {/* ─── Right: Form (above the fold) ───
              The id lives HERE, on the nearest real form — the sticky bar
              and every #lp-form link used to teleport seven screens down
              to the bottom section while this form sat one swipe away. */}
          <motion.div
            id="lp-form"
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="lg:col-span-5 scroll-mt-24"
          >
            <LeadFormEmbed
              heading={formHeading}
              source={formSource}
              pageSlug={formPageSlug}
              subheading={formSubheading}
              ctaLabel={formCtaLabel}
              compact={formCompact}
              successNote={formSuccessNote}
              {...(formPrivacyNote !== undefined ? { privacyNote: formPrivacyNote } : {})}
            />

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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
