'use client';

import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

interface Stat {
  value: string;
  label: string;
}

interface ProofBlockProps {
  headline: string;
  headlineAccent?: string;
  stats: [Stat, Stat, Stat];
  narrative: string;
  disclaimer?: string;
}

export function ProofBlock({
  headline,
  headlineAccent,
  stats,
  narrative,
  disclaimer = 'Real client. Results anonymized for confidentiality. Your results will vary.',
}: ProofBlockProps) {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-[900px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: ease as any }}
          className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl lg:rounded-3xl overflow-hidden"
        >
          {/* Eyebrow */}
          <div className="bg-gradient-to-r from-primary/10 via-amber-500/5 to-transparent px-6 lg:px-10 py-4 border-b border-border/10">
            <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] opacity-80">Proof</p>
          </div>

          <div className="p-6 lg:p-10 space-y-8">
            {/* Headline */}
            <h3 className="text-xl md:text-3xl lg:text-4xl font-black uppercase italic tracking-tighter leading-[0.95] text-foreground">
              {headline}{' '}
              {headlineAccent && <span className="text-primary">{headlineAccent}</span>}
            </h3>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 lg:gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: ease as any }}
                  className="bg-primary/5 border border-primary/10 rounded-xl p-3 lg:p-5 text-center"
                >
                  <p className="text-xl lg:text-3xl font-black text-primary italic tracking-tighter">{stat.value}</p>
                  <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.15em] text-faint mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Narrative */}
            <p className="text-muted-foreground font-medium leading-relaxed text-sm lg:text-base">
              {narrative}
            </p>

            {/* Disclaimer */}
            {disclaimer && (
              <p className="text-xs text-faint italic">{disclaimer}</p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
