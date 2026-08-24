'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { Check, ArrowRight, Layers, Smartphone, Bot } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { AskTheOS } from '@/components/os/AskTheOS';
import { AutomationReel } from '@/components/os/AutomationReel';
import { FounderByline } from '@/components/FounderByline';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { AWARD, OS_PRICING, TRACK_RECORD } from '@/lib/site';
import { staff } from '@/lib/team';
import { usePersonalization } from '@/lib/personalization';

// World-class intro animation bezier
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1);

/* ─── Data ─── */

/* The 90%: custom AI software. Marketing lives in the slim band below the grid. */
const services = [
  {
    name: 'Business Operating Systems',
    result: 'One system runs the register, the inventory, the customers, and the website — and you own it.',
    href: '/foundit-os',
    cta: 'Get a Fitting',
    icon: Layers,
    accent: 'from-orange-500/20 to-amber-500/5',
  },
  {
    name: 'AI That Knows Your Business',
    result: 'A built-in AI that answers from your own books, in plain English. It reads your books; it can’t write them.',
    href: '/foundit-os',
    cta: 'See It Inside Found It OS',
    icon: Bot,
    accent: 'from-violet-500/20 to-purple-500/5',
  },
  {
    name: 'Custom Apps',
    result: 'iOS, Android, and web apps scoped with you in person. Fixed price, and you own the code.',
    href: '/app-development',
    cta: "Let's Talk",
    icon: Smartphone,
    accent: 'from-blue-500/20 to-cyan-500/5',
  },
];

/* THE FLOOR — every shipped system drifting past on two counter-rotating
   rails: desktops one way, phones the other. Rail data lives in
   src/lib/os-screens.ts (shared with the LP rails). */

/* The 10%: the marketing engine, compressed into one row of links. */
const marketingLinks = [
  { name: 'Google Ads', href: '/google-ads-management' },
  { name: 'AI Search', href: '/ai-search-optimization' },
  { name: 'Social Media', href: '/social-media-management' },
  { name: 'AI Automation', href: '/ai-marketing' },
];

const proofPoints = [
  { value: 'Live', label: 'Real Systems', detail: 'Local businesses running or being fitted on their own systems now' },
  { value: '100%', label: 'Owned', detail: 'The client owns the system outright — always' },
  { value: '$0.00', label: 'Nightly Difference', detail: 'New system runs beside the old one until the books match' },
  { value: '0', label: 'Contracts', detail: 'Month-to-month — the system earns it every month' },
];

const differentiators = [
  { title: 'No lock-in.', detail: 'Month-to-month, cancel anytime with 30 days’ notice.' },
  { title: 'You own everything.', detail: 'Your software, your ad accounts, your code, your data. Nothing held hostage.' },
  { title: 'Senior strategist, not interns.', detail: 'Not a junior who Googles the answers.' },
];

export default function HomePage() {
  const { scrollY } = useScroll();
  // The hero fade-on-scroll is a desktop-only flourish; touch devices keep the
  // hero pinned. The pin is routed through a MotionValue (instead of
  // conditionally swapping the style prop) so it always wins, even mid-scroll.
  const heroPin = useMotionValue(1); // 1 = pinned fully visible, 0 = fade with scroll
  const [fadeCapable, setFadeCapable] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px) and (pointer: fine)');
    const update = () => setFadeCapable(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    heroPin.set(fadeCapable ? 0 : 1);
  }, [fadeCapable, heroPin]);

  const heroOpacity = useTransform([scrollY, heroPin], ([y, pin]: number[]) =>
    pin ? 1 : 1 - clamp01(y / 500)
  );
  const heroY = useTransform([scrollY, heroPin], ([y, pin]: number[]) =>
    pin ? 0 : clamp01(y / 500) * 80
  );
  const { city, industry } = usePersonalization();

  const audienceLine = industry && city
    ? `${city} ${industry}`
    : industry
      ? `Local ${industry}`
      : city
        ? `${city} Businesses`
        : 'Local Businesses';

  return (
    <div className="bg-transparent text-foreground relative overflow-hidden">

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-[92dvh] flex flex-col justify-center pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
        {/* Hero gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-transparent to-transparent pointer-events-none" />

        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10 flex-grow flex items-center">
          <div className="max-w-[1000px] mx-auto px-6 w-full text-center">
            <div>
              {/* Headline (personalized by city/industry when known) —
                  pain-first per the 8/18 audit: name the pile before the fix. */}
              <h1 className="opacity-0 animate-reveal-up delay-200 text-[10vw] sm:text-[8vw] md:text-[5.5vw] lg:text-[4vw] leading-[0.88] tracking-tight font-black font-heading uppercase italic text-white mb-7">
                {audienceLine} Run On Software They Don&rsquo;t Own.
              </h1>

              {/* Subheadline */}
              <p className="opacity-0 animate-reveal-up-sm delay-300 text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
                We replace the pile with one system built around how your company actually runs.
                You own it — the code and the data.
              </p>

              {/* Primary ask — THE ask, sitewide (audit 8/18: one CTA that
                  names what you receive). One button, nothing beside it. */}
              <div className="opacity-0 animate-reveal-up-sm delay-400 flex justify-center">
                <Link
                  href="/foundit-os#lead-form"
                  className="inline-flex items-center justify-center px-10 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
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
                One System Runs Your Whole Business — And You Own It.
              </h2>
              <p className="text-muted-foreground font-medium text-base lg:text-lg leading-relaxed mb-8 max-w-2xl">
                The register, the inventory, the customers, the website, and an AI that knows all of it. It proves itself beside your old system, matched to the penny, before anything switches.{' '}
                <span className="text-foreground font-bold">Nobody rents you your own business back.</span>
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
          THE RENT PARADOX — P0 from the 8/18 audit: "if I own it, why am I
          paying monthly?" is the question every visitor asks right after the
          price. Answer it before they have to think.
      ═══════════════════════════════════════════ */}
      <section className="relative py-12 lg:py-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="bg-card/10 backdrop-blur-xl border border-border/15 rounded-3xl p-8 lg:p-12"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-[0.9] text-foreground mb-5">
              If You Own It, What Does {OS_PRICING.monthly} a Month Pay For?
            </h2>
            <p className="text-muted-foreground font-medium text-base lg:text-lg leading-relaxed mb-8 max-w-2xl">
              Not permission. You&rsquo;re paying us to <span className="text-foreground font-bold">host, maintain,
              support, and keep building</span> your system — new features as your business grows, backups every
              night, a person who answers when you call.{' '}
              <span className="text-foreground font-bold">Stop paying and the work stops — not your software.</span>{' '}
              The code and your data stay yours, and the system keeps running wherever you take it.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background/40 border border-border/20 rounded-2xl p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-faint mb-3">Rented Software</p>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                  Pay forever. The vendor owns the platform. Leave, and you keep whatever the export
                  window lets out.
                </p>
              </div>
              <div className="bg-primary/[0.06] border border-primary/25 rounded-2xl p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3">Found It</p>
                <p className="text-sm text-foreground font-medium leading-relaxed">
                  Built around you. You own it — every customer record, every invoice. Leave with 30 days&rsquo; notice, and
                  the system leaves with you.
                </p>
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
              Every Found It OS ships with an AI that reads your books. This one is running a demo book — tap a question. Yours would answer from <span className="text-white font-bold">yours</span>.
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
          OS SCREENS — the software itself, on screen
      ═══════════════════════════════════════════ */}
      <section className="relative py-12 lg:py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.88] text-foreground mb-5">
              This Is What Automated Looks Like.
            </h2>
            <p className="text-muted-foreground font-medium text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
              One day inside a business that runs on a Found It OS — 8:02 AM to the next morning,
              nobody at the desk. Everything that moves, moves by itself. Watch:
            </p>
          </motion.div>

          {/* THE REEL (8/19): automations in motion, not dashboards at rest. */}
          <AutomationReel />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DIFFERENTIATORS — 3 horizontal pills
      ═══════════════════════════════════════════ */}
      <section className="relative py-12 lg:py-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease }}
                className="bg-card/10 backdrop-blur-sm border border-border/15 rounded-2xl p-5 lg:p-6 group hover:border-primary/20 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-sm font-black tracking-tighter text-foreground">{item.title}</p>
                </div>
                <p className="text-xs text-muted-foreground/70 font-medium leading-relaxed pl-9">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES — 3 premium cards with icons
      ═══════════════════════════════════════════ */}
      <section id="services" className="relative py-16 lg:py-28 scroll-mt-20">
        {/* Section glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/5 to-transparent pointer-events-none" />

        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.88] text-foreground mb-5">
              What We Build
            </h2>
            <p className="text-muted-foreground font-medium text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
              We are a custom AI software company. Systems, assistants, apps, and the websites wired into them — built one business at a time, owned by you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease }}
              >
                <Link href={svc.href} className="group relative block bg-card/10 backdrop-blur-sm border border-border/15 rounded-2xl lg:rounded-3xl p-7 lg:p-9 hover:border-primary/25 transition-all duration-500 h-full overflow-hidden">
                  {/* Card gradient accent */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${svc.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl lg:rounded-3xl`} />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <svc.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <p className="text-xs font-black uppercase tracking-[0.25em] text-primary/70">{svc.name}</p>
                    </div>
                    <p className="text-foreground font-bold text-sm lg:text-base leading-relaxed mb-5">{svc.result}</p>
                    <span className="text-xs text-primary font-bold flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300">
                      {svc.cta} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* The other 10% — the marketing engine, one slim band */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mt-6 bg-card/5 border border-border/10 rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
          >
            <div className="shrink-0">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-faint mb-1">Need Customers Too?</p>
              <p className="text-sm font-black tracking-tighter text-foreground">The Marketing Engine</p>
            </div>
            <p className="text-xs text-muted-foreground font-medium leading-relaxed flex-grow">
              We spent 13 years bringing local businesses customers. We still do — for the companies
              we build systems for.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 shrink-0">
              {marketingLinks.map((m) => (
                <Link key={m.href} href={m.href} className="text-xs text-primary font-bold hover:underline whitespace-nowrap">
                  {m.name} →
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROOF — 4 real results in a premium card
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 lg:py-28">
        <div className="max-w-[1000px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="bg-card/10 backdrop-blur-xl border border-border/15 rounded-3xl overflow-hidden shadow-2xl shadow-black/20"
          >
            <div className="p-7 lg:p-10">
              {/* Terms-as-proof tiles. The ROAS "10x Trajectory" scrubber that
                  used to render below them was a marketing-era ad-spend curve —
                  confusing on a software homepage; retired 8/16 (Trevor). */}
              <h3 className="text-xl md:text-3xl lg:text-4xl font-black tracking-tighter leading-[0.92] text-foreground mb-4">
                Changing The Software That Runs Your Business Is Terrifying.
              </h3>
              <p className="text-muted-foreground font-medium text-base lg:text-lg leading-relaxed mb-10 max-w-2xl">
                So we don&rsquo;t make you switch. The new system runs beside your old one, the books
                get checked against the books every night, and nothing changes hands until you look
                at both screens, see the same number, and say go.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                {proofPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease }}
                    className="bg-gradient-to-b from-primary/[0.06] to-primary/[0.02] border border-primary/10 rounded-2xl p-5 text-center transition-colors duration-300 hover:border-primary/20"
                  >
                    <p className="text-3xl lg:text-4xl font-black text-primary italic tracking-tighter">
                      {point.value}
                    </p>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-faint mt-1.5 mb-2.5">{point.label}</p>
                    <p className="text-[11px] text-muted-foreground/70 font-medium leading-relaxed">{point.detail}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link href="/case-studies" className="inline-flex items-center gap-2 text-xs text-primary font-bold hover:gap-3 transition-all duration-300 group">
                  See all case studies <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MANIFESTO — the mission, in the founder's words
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[30vh] bg-primary/[0.04] rounded-full blur-[100px]" />
        </div>
        <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.92] text-foreground">
              &ldquo;We want to free the world from rental software.&rdquo;
            </p>
            <FounderByline
              align="center"
              className="mt-7"
              line="Founder, Found It Software. Builds every system himself."
            />
            <p className="mt-6 text-base lg:text-lg text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed">
              Off-the-shelf software is off the rack. Yours is made to measure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MEET THE TEAM — trust band with real team photo
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.88] text-foreground mb-5">
                Real People. Real Local Team.
              </h2>
              <p className="text-muted-foreground font-medium text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
                When you call about your system, you reach the same senior team that built it — right here in Alexandria, Louisiana. Your call never routes through a call center.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  `${TRACK_RECORD.yearsInBusiness} years in business`,
                  `${AWARD.year} ${AWARD.label} Award winner`,
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
              <Link href="/about" className="inline-flex items-center gap-2 text-sm text-primary font-bold hover:gap-3 transition-all duration-300 group">
                Meet the team <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Staff collage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="grid grid-cols-3 gap-3"
            >
              {staff.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease }}
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
                    <p className="text-[11px] font-black tracking-tighter text-white leading-none">{member.name}</p>
                    <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-primary mt-1">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
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
                before: 'Orders texted in by fifteen brokers, hand-copied to paper — 44 plants nearly missed the truck.',
                after: 'Paste the text in. Every line captured. Anything odd flags red instead of falling off.',
                number: 'Lines in = lines on the sheet',
                numberLabel: 'the rule the system enforces',
                href: '/blog/what-is-a-software-map',
                link: 'See how her system was built',
              },
              {
                kind: 'The Shed Builder',
                before: 'A Texas shed maker — dealer lots, shops, drivers — renting the software that ran all of it.',
                after: 'Sales counter to delivery wizard on one system he’ll own outright.',
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
              We don&rsquo;t build this for everyone —{' '}
              <Link href="/fit" className="text-primary hover:underline">check your fit in 60 seconds</Link>
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
          </motion.div>
        </div>
      </section>

    </div>
  );
}
