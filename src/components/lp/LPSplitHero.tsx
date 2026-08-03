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
}

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
}: LPSplitHeroProps) {
  const { city, industry } = usePersonalization();
  const badgeText = city ? `100% Local — Serving ${city}` : badge;

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

          {/* ─── Right: Form (above the fold) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="lg:col-span-5"
          >
            <LeadFormEmbed heading={formHeading} source={formSource} pageSlug={formPageSlug} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
