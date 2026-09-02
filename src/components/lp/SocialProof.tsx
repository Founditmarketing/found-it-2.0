'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TRACK_RECORD } from '@/lib/site';

const ease = [0.16, 1, 0.3, 1] as const;

interface Testimonial {
  quote: string;
  name: string;
  /** Optional business name (shown if provided). */
  business?: string;
  /** Optional town/location (shown if provided). */
  town?: string;
  /** Optional headshot path. Falls back to initials avatar. */
  image?: string;
}

interface StatBand {
  value: string;
  label: string;
}

interface SocialProofProps {
  eyebrow?: string;
  heading?: string;
  headingAccent?: string;
  stats?: StatBand[];
  testimonials: Testimonial[];
}

const defaultStats: StatBand[] = [
  { value: '<5 sec', label: 'Lead follow-up speed' },
  { value: `${TRACK_RECORD.googleRating}★`, label: 'Average Google rating' },
  { value: TRACK_RECORD.yearsInBusiness, label: 'Years in business' },
];

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

/** Official multi-color Google "G" mark — used to signal a verified Google review. */
function GoogleGlyph() {
  return (
    <svg viewBox="0 0 48 48" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

export function SocialProof({
  eyebrow = 'Proof',
  heading = 'Local businesses',
  headingAccent = 'run their pipeline on this.',
  stats = defaultStats,
  testimonials,
}: SocialProofProps) {
  return (
    <section className="relative py-20 lg:py-28" aria-label="Client results and testimonials">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* ─── Heading ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: ease as any }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
            {eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground">
            {heading}{' '}
            <span className="text-primary">{headingAccent}</span>
          </h2>
        </motion.div>

        {/* ─── Hard numbers band ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: ease as any }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 mb-12 lg:mb-16"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl p-5 lg:p-6 text-center hover:border-primary/20 transition-colors"
            >
              <p className="text-3xl lg:text-4xl font-black text-primary italic tracking-tighter leading-none">
                {stat.value}
              </p>
              <p className="text-[10px] lg:text-xs font-black uppercase tracking-[0.12em] text-faint mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ─── Testimonials ─── */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: ease as any }}
              className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-3xl p-6 lg:p-8 flex flex-col hover:border-primary/20 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4 shrink-0" aria-hidden="true" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" aria-hidden="true" />
                ))}
              </div>

              <p className="text-foreground/90 font-medium leading-relaxed flex-grow mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-5 border-t border-border/10">
                {t.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-primary/20"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-sm font-black text-primary tracking-tight">
                      {initials(t.name)}
                    </span>
                  </div>
                )}
                <div className="min-w-0">
                  <p className="text-sm font-black text-foreground truncate">{t.name}</p>
                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground/70 font-medium truncate">
                    <GoogleGlyph />
                    {[t.business, t.town].filter(Boolean).join(' · ') || 'Verified Google review'}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
