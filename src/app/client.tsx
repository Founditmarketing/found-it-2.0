'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AskTheOS } from '@/components/os/AskTheOS';
import { AutomationReel } from '@/components/os/AutomationReel';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { OS_PRICING, OS_SLOTS } from '@/lib/site';

// World-class intro animation bezier
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function HomePage() {
  return (
    <div className="bg-transparent text-foreground relative overflow-hidden">

      {/* ═══════════════════════════════════════════
          HERO = THE REEL (Trevor 8/27: "get rid of our hero section and go
          right for the automations"). The old landlord headline is retired;
          the proof IS the opener now. Order: reel → pricing → the rest.
          The h1 stays short so the reel stays the star; the sub carries the
          identity the old hero used to (custom, AI, owned outright).
      ═══════════════════════════════════════════ */}
      <section className="relative pt-28 lg:pt-36 pb-12 lg:pb-20 overflow-hidden">
        {/* Hero gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-10 lg:mb-12">
            <h1 className="opacity-0 animate-reveal-up delay-200 text-[13vw] sm:text-[9vw] md:text-[7vw] lg:text-[5vw] leading-[0.88] tracking-tight font-black font-heading uppercase italic text-white mb-6">
              Watch It Work.
            </h1>
            <p className="opacity-0 animate-reveal-up-sm delay-300 text-base sm:text-lg lg:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
              One day inside a business on a Found It OS &mdash; custom AI software
              we build and you own outright. Nobody at the desk.
            </p>
          </div>

          {/* THE REEL (8/19): automations in motion, not dashboards at rest. */}
          <div className="opacity-0 animate-reveal-up delay-400">
            <AutomationReel />
          </div>

          {/* The filter, not an invitation (Trevor 8/25: "let them work to
              get to me"). No "Let's Talk" above the fold — the first real
              ask comes on the flagship card below. */}
          <div className="opacity-0 animate-reveal-up-sm delay-400 flex justify-center mt-10">
            <Link
              href="/fit"
              className="inline-flex items-center justify-center px-10 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
            >
              Are We a Fit? 60 Seconds.
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FLAGSHIP — Found It OS, the site's primary offer
      ═══════════════════════════════════════════ */}
      <section id="foundit-os" className="relative py-12 lg:py-20 scroll-mt-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="relative bg-card/10 backdrop-blur-xl border border-primary/20 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 p-8 lg:p-12">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-[0.9] text-foreground mb-5">
                One System Runs Your Whole Business. And You Own It.
              </h2>
              <p className="text-muted-foreground font-medium text-base lg:text-lg leading-relaxed mb-8 max-w-2xl">
                The register, the inventory, the customers, the website, and an AI that knows all of it. The AI reads your books. It cannot write them. It runs beside your old system, matched to the penny, until you say go.{' '}
                <span className="text-foreground font-bold">Nobody rents you your own business back.</span>{' '}
                The monthly pays for hosting, support, and new features. Stop paying and the work stops. Not your software.
              </p>

              {/* The whole price, printed */}
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3">
                What It Costs
              </p>
              <div className="flex flex-col sm:flex-row sm:items-stretch gap-3 mb-8">
                <div className="flex-1 bg-background/40 border border-border/20 rounded-2xl px-6 py-4">
                  <p className="text-2xl lg:text-3xl font-black text-primary italic tracking-tighter">{OS_PRICING.monthly}<span className="text-sm text-muted-foreground font-bold not-italic"> {OS_PRICING.monthlyLabel}</span></p>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-faint mt-1">Month-to-Month · No Contracts</p>
                </div>
                <div className="flex-1 bg-background/40 border border-border/20 rounded-2xl px-6 py-4">
                  <p className="text-2xl lg:text-3xl font-black text-primary italic tracking-tighter">{OS_PRICING.setup}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-faint mt-1">{OS_PRICING.setupLabel}</p>
                </div>
                <div className="flex-1 bg-primary/10 border border-primary/25 rounded-2xl px-6 py-4">
                  <p className="text-lg lg:text-xl font-black text-foreground italic tracking-tighter leading-tight">{OS_PRICING.promise}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-primary mt-1">One Job</p>
                </div>
              </div>

              {/* The twenty seats (Trevor 8/25): a hard cap, said plainly.
                  Count lives in OS_SLOTS — bump `taken` by hand as accounts
                  sign; never let this strip say a number that isn't true. */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 -mt-4 mb-8 bg-background/40 border border-border/20 rounded-2xl px-6 py-4">
                <div className="flex items-center gap-[5px] shrink-0" aria-hidden="true">
                  {Array.from({ length: OS_SLOTS.total }).map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < OS_SLOTS.taken
                          ? 'h-4 w-[7px] rounded-full bg-primary'
                          : 'h-4 w-[7px] rounded-full bg-white/10 border border-white/20'
                      }
                    />
                  ))}
                </div>
                <p className="text-sm font-bold text-foreground leading-snug">
                  {OS_SLOTS.taken} of {OS_SLOTS.total} seats spoken for.{' '}
                  <span className="text-muted-foreground font-medium">
                    At {OS_SLOTS.total} accounts we stop taking new ones.
                  </span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <Link href="/foundit-os#lead-form" className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity">
                  Let's Talk
                </Link>
                <Link href="/foundit-os" className="inline-flex items-center gap-2 text-sm text-primary font-bold hover:gap-3 transition-all">
                  See Found It OS <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ASK THE OS — the demo beat, self-serve
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-[1000px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.88] text-foreground mb-5">
              Ask It. It Answers.
            </h2>
            <p className="text-muted-foreground font-medium text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
              Every Found It OS ships with an AI that reads your books. This one runs a demo book. Tap a question. Yours would answer from <span className="text-white font-bold">yours</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <AskTheOS />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mt-8 max-w-sm sm:max-w-none mx-auto"
          >
            <Link
              href="/foundit-os#lead-form"
              className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
            >
              Let's Talk
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THREE FITTINGS — software proof replaces the marketing review
          marquee (audit 8/18: the reviews are real credibility, but no longer
          the MOST RELEVANT credibility; ReviewMarquee still lives on the
          marketing pages). The mess before, the screen after, the number
          where one is sanctioned.
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.88] text-foreground mb-5">
              Three Fittings.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {[
              {
                kind: 'The Roofer',
                before: 'Jobs in one app, invoices in another, receivables in nobody’s.',
                after: 'His system audited his own books the day it went live.',
                number: '$195,882.75',
                numberLabel: 'found in open receivables',
                href: '/case-studies/edwards-roofing',
                link: 'Read the case study',
              },
              {
                kind: 'The Nursery',
                before: 'Fifteen brokers texting orders in, hand-copied to paper. 44 plants nearly missed the truck.',
                after: 'Paste the text in. Every line captured. Anything odd flags red instead of falling off.',
                number: 'Lines in = lines on the sheet',
                numberLabel: 'the rule the system enforces',
                href: '/blog/what-is-a-software-map',
                link: 'See how her system was built',
              },
              {
                kind: 'The Shed Builder',
                before: 'A Texas shed maker with dealer lots, shops, and drivers, renting the software that ran it all.',
                after: 'Sales counter to delivery on one system he will own outright.',
                number: 'Sale → build → delivered',
                numberLabel: 'one pipeline, one login',
                href: '/foundit-os',
                link: 'See Found It OS',
              },
            ].map((f, i) => (
              <motion.div
                key={f.kind}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease }}
                className="bg-card/10 backdrop-blur-sm border border-border/15 rounded-3xl p-7 flex flex-col hover:border-primary/25 transition-colors"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-4">{f.kind}</p>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-3">{f.before}</p>
                <p className="text-sm text-foreground font-bold leading-relaxed mb-6">{f.after}</p>
                <div className="mt-auto pt-5 border-t border-border/15">
                  <p className="text-xl lg:text-2xl font-black text-primary italic tracking-tighter leading-tight">{f.number}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-faint mt-1 mb-4">{f.numberLabel}</p>
                  <Link href={f.href} className="text-xs text-primary font-bold inline-flex items-center gap-1.5 hover:gap-3 transition-all">
                    {f.link} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BOTTOM CTA
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        {/* CTA ambient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[40vh] bg-primary/[0.03] rounded-full blur-[100px]" />
        </div>

        <div className="max-w-[700px] mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] text-muted-foreground mb-4">
              We don&rsquo;t build this for everyone.{' '}
              <Link href="/fit" className="text-primary hover:underline">Check your fit in 60 seconds</Link>
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.88] mb-5 text-foreground">
              Show Us How Your Business Runs.
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground font-medium mb-10 max-w-lg mx-auto leading-relaxed">
              Tell us how it runs today. We&rsquo;ll show you what we&rsquo;d build if it were ours.
              Free, about thirty minutes, screen-shared. If it&rsquo;s not a fit, we tell you straight.
            </p>
            <div className="flex justify-center">
              <Link href="/foundit-os#lead-form" className="w-full sm:w-auto max-w-sm">
                <LiquidButton className="w-full sm:w-auto px-12 h-16 text-base sm:text-lg tracking-[0.08em] shadow-2xl shadow-primary/25">
                  Let's Talk
                </LiquidButton>
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground font-medium">
              Or text{' '}
              <a href="sms:+13187133781" className="text-primary font-bold hover:underline whitespace-nowrap">
                (318) 713-3781
              </a>
              . Trevor answers.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
