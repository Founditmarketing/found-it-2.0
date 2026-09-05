'use client';

/* ─── THE ASK — the one CTA, sitewide (Trevor 9/5) ───
 * Born as the About-page close ("give me a CTA that's beautiful and
 * inviting"), promoted to the house close when he saw it: "SEE HOW CLEAN
 * IT IS... THAT CLEANNESS AND ABILITY TO COMMUNICATE A WHOLE LOT WITHOUT
 * A LOT OF READING IS WHEN THIS AI SHIT GETS REALLY MAGICAL."
 * ~25 words, air, one door. Headline/sub can vary per page; the shape,
 * the button, and the restraint never do. Never add a paragraph to this. */

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ease = [0.16, 1, 0.3, 1] as const;

export default function TheAsk({
  headline = (
    <>
      Bring us <span className="text-primary">the ugly part.</span>
    </>
  ),
  sub = (
    <>
      Sixty seconds. A straight answer. <span className="text-foreground font-bold">Nothing to prepare.</span>
    </>
  ),
  label = 'Start the Fit Check',
  href = '/fit',
}: {
  headline?: React.ReactNode;
  sub?: React.ReactNode;
  label?: string;
  href?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: ease as any }}
      className="text-center py-24 md:py-40 border-t border-border/10"
    >
      <div className="w-10 h-[3px] bg-primary/70 rounded-full mx-auto mb-10" aria-hidden />
      <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.88] text-foreground [text-wrap:balance]">
        {headline}
      </h2>
      <p className="mt-6 text-lg md:text-xl text-muted-foreground font-medium">{sub}</p>
      <div className="mt-10 md:mt-12 px-6">
        <Link
          href={href}
          className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-12 h-16 rounded-full bg-gradient-to-b from-[#FF6414] to-[#FF5500] text-primary-foreground font-black uppercase tracking-wider text-base shadow-[0_18px_50px_-12px_rgba(255,85,0,0.5)] transition-all duration-300 hover:shadow-[0_22px_70px_-12px_rgba(255,85,0,0.65)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
        >
          {label}
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden />
        </Link>
      </div>
      <p className="mt-7 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-faint">
        or text (318) 713-3781 &middot; Trevor answers
      </p>
    </motion.div>
  );
}
