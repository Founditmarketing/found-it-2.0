'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

interface Testimonial {
  quote: string;
  name: string;
  business: string;
  town: string;
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
  { value: '250+', label: 'Local businesses served' },
  { value: '<5 sec', label: 'Lead follow-up speed' },
  { value: '4.9★', label: 'Average client rating' },
  { value: '46', label: 'States we operate in' },
];

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export function SocialProof({
  eyebrow = 'Proof',
  heading = 'Local businesses',
  headingAccent = 'trust us to run their pipeline.',
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
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-60">
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
              <p className="text-[10px] lg:text-xs font-black uppercase tracking-[0.12em] text-muted-foreground/60 mt-2">
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
                  <p className="text-xs text-muted-foreground/70 font-medium truncate">
                    {t.business} · {t.town}
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
