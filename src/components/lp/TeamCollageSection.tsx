'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { staff } from '@/lib/team';

const ease = [0.16, 1, 0.3, 1] as const;

interface TeamCollageSectionProps {
  /** CTA button label. */
  ctaLabel?: string;
  /** CTA destination (defaults to the on-page form). */
  ctaHref?: string;
}

export function TeamCollageSection({
  ctaLabel = 'Book Your Free Call',
  ctaHref = '#lp-form',
}: TeamCollageSectionProps) {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: ease as any }}
          >
            <p className="text-primary font-mono text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-50">Meet Your Local Team</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.88] text-foreground mb-5">
              Real People.{' '}
              <span className="text-primary">Real Local Team.</span>
            </h2>
            <p className="text-muted-foreground font-medium text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
              When you call, you reach the same senior team that does the work — right here in Alexandria, Louisiana. No call centers, no interns, no handoffs.
            </p>
            <div className="space-y-4 mb-8">
              {[
                '13+ years in business, millions in managed ad spend',
                '2026 CLEDA Highest Traded Revenue Award winner',
                'A senior strategist on every account',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-foreground font-bold text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center px-8 h-12 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
            >
              {ctaLabel}
            </Link>
          </motion.div>

          {/* Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: ease as any }}
            className="grid grid-cols-3 gap-3"
          >
            {staff.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: ease as any }}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-border/20 bg-card/30"
              >
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role}, Found It Marketing`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: member.objectPosition || 'center' }}
                  sizes="(max-width: 1024px) 30vw, 16vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-2.5 pt-6">
                  <p className="text-[11px] font-black uppercase italic tracking-tighter text-white leading-none">{member.name}</p>
                  <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-primary mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
