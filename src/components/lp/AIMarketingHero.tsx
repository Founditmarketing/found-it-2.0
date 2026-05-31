'use client';

import { motion } from 'framer-motion';
import { Zap, MapPin, Phone } from 'lucide-react';
import { LeadFormEmbed } from './LeadFormEmbed';
import { trackCallClick } from '@/lib/analytics';
import { phoneHref, phoneDisplay, CALLRAIL_CLASS } from '@/lib/phone';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface StatChip {
  value: string;
  label: string;
}

interface AIMarketingHeroProps {
  headline: string;
  headlineAccent: string;
  subheadline: string;
  /** Highlighted speed/outcome element (e.g. responds in 5 seconds) */
  speedHighlight?: string;
  stats?: StatChip[];
  formSource?: string;
  formPageSlug?: string;
  formHeading?: string;
}

export function AIMarketingHero({
  headline,
  headlineAccent,
  subheadline,
  speedHighlight,
  stats = [],
  formSource = 'lp_ai_marketing',
  formPageSlug = 'ai-marketing',
  formHeading = 'Book Your Free In-Person AI Demo',
}: AIMarketingHeroProps) {
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
            {/* Local badge — moved up here, concise */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <MapPin className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">
                100% Local — We Come To You
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[10vw] sm:text-[7vw] lg:text-[3.6vw] leading-[0.95] tracking-tight font-black font-heading uppercase italic text-white mb-5">
              {headline}{' '}
              <span className="text-primary">{headlineAccent}</span>
            </h1>

            {/* Tightened one-line subhead */}
            <p className="text-lg sm:text-xl text-white/70 font-medium mb-6 max-w-xl leading-relaxed">
              {subheadline}
            </p>

            {/* Speed highlight — the best stat, surfaced */}
            {speedHighlight && (
              <div className="inline-flex items-center gap-3 bg-white/[0.04] border border-primary/20 rounded-xl px-4 py-3 mb-8">
                <span className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-primary fill-primary/40" aria-hidden="true" />
                </span>
                <span className="text-sm sm:text-base font-bold text-white leading-tight">
                  {speedHighlight}
                </span>
              </div>
            )}

            {/* Stat chips */}
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
                    <p className="text-[9px] font-black uppercase tracking-[0.12em] text-white/40 mt-1.5">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Secondary phone CTA */}
            <a
              href={phoneHref}
              onClick={() => trackCallClick()}
              className={`inline-flex items-center gap-3 text-white/60 hover:text-primary transition-colors group ${CALLRAIL_CLASS}`}
            >
              <span className="w-10 h-10 rounded-xl bg-white/[0.04] border border-border/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
              </span>
              <span className="text-sm font-bold">
                Prefer to talk? <span className="text-white font-black italic tracking-tighter">{phoneDisplay}</span>
              </span>
            </a>
          </motion.div>

          {/* ─── Right: Form (above the fold) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="lg:col-span-5"
          >
            <LeadFormEmbed
              heading={formHeading}
              source={formSource}
              pageSlug={formPageSlug}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
