'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AskTheOS } from '@/components/os/AskTheOS';
import { FixFirst } from '@/components/os/FixFirst';
import { AutomationReel } from '@/components/os/AutomationReel';
import { ShipLog } from '@/components/os/ShipLog';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { OS_PRICING, OS_SLOTS, TRACK_RECORD, MAP_VALUE } from '@/lib/site';

// World-class intro animation bezier
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* Three Fittings — one source of truth, rendered twice: a 3-col grid on
   desktop, a snap-scroll swipe deck on phones (9/3, Trevor: "looks good on
   computer but remake the section for phone"). */
const FITTINGS = [
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
] as const;

export default function HomePage() {
  return (
    <div className="bg-transparent text-foreground relative overflow-hidden">

      {/* ═══════════════════════════════════════════
          HERO = THE PAIN (Trevor 8/27 pm, after the conversion report: the
          demo was arriving before the sale started. Order now: problem →
          what would yours fix first → proof → THEN the reel → price.
          The reel stayed the star of its own section below; it just no
          longer opens cold. No customer counts here, ever (retired 8/16).
      ═══════════════════════════════════════════ */}
      <section className="relative pt-28 lg:pt-36 pb-20 md:pb-28 overflow-hidden">
        {/* Hero gradient wash + one authored light source behind the headline */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-transparent to-transparent pointer-events-none" />
        <div
          aria-hidden
          className="absolute left-1/2 top-16 -translate-x-1/2 w-[52rem] h-[26rem] rounded-full bg-primary/[0.07] blur-[120px] pointer-events-none"
        />

        {/* ═══ MOBILE HERO — its own animal (Trevor 8/28: "totally custom
            for mobile"). Four-word claim, one support line, straight to the
            console. No paragraph, no door cards, one CTA after the machine. ═══ */}
        <div className="relative z-10 px-5 text-center md:hidden">
          <p className="opacity-0 animate-reveal-up-sm delay-200 text-primary font-mono text-[10px] font-black uppercase tracking-[0.35em] mb-4">
            Owned Software &middot; Not SaaS
          </p>
          <h1 className="opacity-0 animate-reveal-up delay-200 text-[13.5vw] leading-[0.9] tracking-tight font-black font-heading uppercase italic text-white">
            It Answers.<br />It Types.<br />It Chases.<br />
            <span className="text-primary">You Own It.</span>
          </h1>
          <p className="opacity-0 animate-reveal-up-sm delay-300 mt-4 text-sm text-white/75 font-medium">
            Custom software + AI employee. Built around your business. The phone, the paperwork, the money owed. Handled.
          </p>
          <div className="opacity-0 animate-reveal-up delay-400 mt-8">
            <FixFirst compact />
          </div>
          <div className="opacity-0 animate-reveal-up-sm delay-400 mt-8">
            <Link
              href="/map"
              className="flex items-center justify-center w-full h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm active:opacity-90"
            >
              Show Me What You'd Build
            </Link>
            <p className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              Month-to-month &middot; You keep everything
            </p>
          </div>
        </div>

        {/* ═══ DESKTOP HERO — remade 8/28 ("add sizzle"): the employee frame,
            verbs cascading in one at a time on the left; on the right, the
            machine itself in a live console window, already typing. ═══ */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 hidden md:block">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            <div className="text-left">
              <p className="opacity-0 animate-reveal-up-sm delay-200 text-primary font-mono text-[10px] lg:text-xs font-black uppercase tracking-[0.4em] mb-6">
                Owned Software &middot; The Opposite of SaaS
              </p>
              <h1 className="font-black font-heading uppercase italic text-white leading-[0.92] tracking-tight text-[clamp(2.8rem,4.8vw,4.6rem)]">
                <span className="block opacity-0 animate-reveal-up" style={{ animationDelay: '0.25s' }}>It Answers.</span>
                <span className="block opacity-0 animate-reveal-up" style={{ animationDelay: '0.45s' }}>It Types.</span>
                <span className="block opacity-0 animate-reveal-up" style={{ animationDelay: '0.65s' }}>It Chases.</span>
                <span className="block opacity-0 animate-reveal-up text-primary" style={{ animationDelay: '0.9s' }}>You Own It.</span>
              </h1>
              <p className="opacity-0 animate-reveal-up-sm mt-6 text-lg text-white/80 font-medium max-w-md leading-relaxed" style={{ animationDelay: '1.1s' }}>
                Custom software + AI employee. Built around your business. The phone,
                the paperwork, the money owed. <span className="text-white font-bold">Handled.</span> And
                you own it outright. The code and the data.
              </p>
              <div className="opacity-0 animate-reveal-up-sm flex items-center gap-3 mt-8" style={{ animationDelay: '1.25s' }}>
                <Link
                  href="/map"
                  className="inline-flex items-center justify-center px-9 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
                >
                  Show Me What You'd Build
                </Link>
                <Link
                  href="/fit"
                  className="inline-flex items-center justify-center px-7 h-14 rounded-full border border-border/25 text-foreground/90 font-black uppercase tracking-wider text-sm hover:border-primary/50 hover:text-foreground transition-colors"
                >
                  Are We a Fit?
                </Link>
              </div>
              <p className="opacity-0 animate-reveal-up-sm mt-6 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground" style={{ animationDelay: '1.35s' }}>
                {TRACK_RECORD.yearsInBusiness} years serving local businesses &middot; Month-to-month &middot; No long-term commitment
              </p>
            </div>

            {/* The machine window: chrome + the console, already typing. */}
            <div className="opacity-0 animate-reveal-up" style={{ animationDelay: '0.7s' }}>
              <div className="rounded-2xl overflow-hidden border border-border/25 bg-card/20 shadow-2xl shadow-black/50 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-3 px-4 py-2.5 bg-black/60 border-b border-border/15">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  </div>
                  <p className="font-mono text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground">
                    What Would Yours Do First?
                  </p>
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>
                <div className="p-6 lg:p-7">
                  <FixFirst panel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THREE FITTINGS — proof before demonstration. Another owner's
          numbers open the sale; our screens close it below.
      ═══════════════════════════════════════════ */}
      <section id="proof" className="relative py-16 md:py-28 scroll-mt-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center mb-12"
          >
            <div className="w-10 h-[3px] bg-primary/70 rounded-full mb-7 mx-auto" aria-hidden />
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.88] text-foreground mb-5">
              Three Fittings.
            </h2>
            <p className="text-muted-foreground font-medium text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
              Real businesses, real numbers. This is what happens when the system fits.
            </p>
          </motion.div>
          {/* Desktop: the three-up grid, unchanged. */}
          <div className="hidden lg:grid grid-cols-3 gap-5">
            {FITTINGS.map((f, i) => (
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

          {/* Phones: a swipe deck — one fitting per card, snap-scroll, the
              next card peeking so the thumb knows what to do. Three tall
              stacked cards read like homework; three swipes read like a
              deck of receipts. */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="lg:hidden"
          >
            <div className="-mx-6 px-6 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {FITTINGS.map((f, i) => (
                <div
                  key={f.kind}
                  className="snap-center shrink-0 w-[82vw] max-w-[340px] bg-card/10 backdrop-blur-sm border border-border/15 rounded-3xl p-6 flex flex-col"
                >
                  <div className="flex items-baseline justify-between mb-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">{f.kind}</p>
                    <p className="font-mono text-[10px] font-bold text-faint tabular-nums">{i + 1}/{FITTINGS.length}</p>
                  </div>
                  <p className="text-[13px] text-muted-foreground font-medium leading-snug mb-2.5">{f.before}</p>
                  <p className="text-[13px] text-foreground font-bold leading-snug mb-5">{f.after}</p>
                  <div className="mt-auto pt-4 border-t border-border/15">
                    <p className="text-2xl font-black text-primary italic tracking-tighter leading-tight">{f.number}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-faint mt-1 mb-3.5">{f.numberLabel}</p>
                    <Link href={f.href} className="text-xs text-primary font-bold inline-flex items-center gap-1.5">
                      {f.link} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
              {/* trailing breather so card 3 can snap center */}
              <div aria-hidden className="shrink-0 w-2" />
            </div>
            <p className="mt-3 text-center font-mono text-[10px] font-black uppercase tracking-[0.24em] text-faint">
              swipe <span className="text-primary">→</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE REEL — the demonstration, now that the sale has started.
          (8/19): automations in motion, not dashboards at rest.
      ═══════════════════════════════════════════ */}
      <section id="reel" className="relative py-16 md:py-28 scroll-mt-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center mb-10 lg:mb-12"
          >
            <div className="w-10 h-[3px] bg-primary/70 rounded-full mb-7 mx-auto" aria-hidden />
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.88] text-foreground mb-5 uppercase italic">
              Watch It Work.
            </h2>
            <p className="text-muted-foreground font-medium text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              One day inside a business on a Found It OS &mdash; custom AI software
              we build and you own outright. Nobody at the desk.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <AutomationReel />
          </motion.div>

          {/* The filter, not an invitation (Trevor 8/25: "let them work to
              get to me"). The first real ask comes on the flagship card. */}
          <div className="flex justify-center mt-10">
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
      <section id="foundit-os" className="relative py-16 md:py-28 scroll-mt-20">
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
              <div className="w-10 h-[3px] bg-primary/70 rounded-full mb-7" aria-hidden />
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] text-foreground mb-5">
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
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-faint mt-1">Month-to-Month · No Long-Term Commitment</p>
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
                  {OS_SLOTS.taken} of {OS_SLOTS.total} onboarding openings committed.{' '}
                  <span className="text-muted-foreground font-medium">
                    We onboard a few at a time &mdash; every system is migrated, run beside the
                    old one, and proven before the next fitting opens. At {OS_SLOTS.total} accounts
                    we pause new fittings until this group is fully live.
                  </span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <Link href="/map" className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity">
                  Show Me What You'd Build
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
          THE SHIP LOG — velocity as receipts (Trevor 8/31:
          "let em know they cant keep up even if they tried").
          The Fleet marquee came OUT the same day (Trevor: "two scrolly
          things is too much and i like the new one") — one marquee max. */}
      <ShipLog />

      {/* ═══════════════════════════════════════════
          ASK THE OS — the demo beat, self-serve
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 md:py-28">
        <div className="max-w-[1000px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center mb-10"
          >
            <div className="w-10 h-[3px] bg-primary/70 rounded-full mb-7 mx-auto" aria-hidden />
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.88] text-foreground mb-5">
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
              href="/map"
              className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
            >
              Show Me What You'd Build
            </Link>
          </motion.div>
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
            <div className="w-10 h-[3px] bg-primary/70 rounded-full mb-7 mx-auto" aria-hidden />
            <p className="text-xs font-black uppercase tracking-[0.25em] text-muted-foreground mb-4">
              We don&rsquo;t build this for everyone.{' '}
              <Link href="/fit" className="text-primary hover:underline">Check your fit in 60 seconds</Link>
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.88] mb-5 text-foreground">
              Walk Out With the Map.
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground font-medium mb-10 max-w-lg mx-auto leading-relaxed">
              Show us how your business runs today. We&rsquo;ll hand you the map of what
              we&rsquo;d build &mdash; every screen, every automation, on paper. About thirty
              minutes, screen-shared, and the map is yours to keep either way;{' '}
              {MAP_VALUE.line}. If it&rsquo;s not a fit, we tell you straight.
            </p>
            <div className="flex justify-center">
              <Link href="/map" className="w-full sm:w-auto max-w-sm">
                <LiquidButton className="w-full sm:w-auto px-12 h-16 text-base sm:text-lg tracking-[0.08em] shadow-2xl shadow-primary/25">
                  Show Me What You'd Build
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
