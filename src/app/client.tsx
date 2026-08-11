'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useReducedMotion } from 'framer-motion';
import { Check, ArrowRight, Phone, Layers, Smartphone, Bot, Trophy, TrendingUp } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { OsRail } from '@/components/os/OsRail';
import { AskTheOS } from '@/components/os/AskTheOS';
import { railDesktops, railPhones } from '@/lib/os-screens';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { trackCallClick } from '@/lib/analytics';
import { SafePhone, SafePhoneText } from '@/components/landing/SafePhone';
import { ReviewMarquee } from '@/components/landing/ReviewMarquee';
import { PortfolioStrip } from '@/components/portfolio/PortfolioStrip';
import { AWARD, OS_PRICING, REVENUE_CLAIM, TRACK_RECORD } from '@/lib/site';
import { staff } from '@/lib/team';
import { usePersonalization } from '@/lib/personalization';

/* The ROAS chart only appears after a hover/tap on the ROAS proof card (second
   tile), so lazy-load it client-side — this keeps recharts (~100KB+) out of the
   initial homepage bundle entirely. */
const RoasChart = dynamic(
  () => import('@/components/landing/RoasChart').then((m) => m.RoasChart),
  { ssr: false }
);

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
    cta: 'Get a Free Fitting',
    icon: Layers,
    accent: 'from-orange-500/20 to-amber-500/5',
  },
  {
    name: 'AI That Knows Your Business',
    result: 'A built-in AI that answers from your own books, in plain English — who bought what, what is running low, who has not been in. It reads your books; it can’t write them.',
    href: '/foundit-os',
    cta: 'See It Inside Found It OS',
    icon: Bot,
    accent: 'from-violet-500/20 to-purple-500/5',
  },
  {
    name: 'Custom Apps',
    result: 'iOS, Android, and web apps blueprinted in person — fixed price, and you own the code.',
    href: '/app-development',
    cta: 'Get a Free App Blueprint',
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
  { value: TRACK_RECORD.softwareCustomers, label: 'Software Customers', detail: 'Real local businesses running or being fitted now' },
  { value: '100%', label: 'Owned', detail: 'The code and the data are the client’s — always' },
  { value: '$0.00', label: 'The Penny Test', detail: 'New system runs beside the old one until the books match' },
  { value: '0', label: 'Contracts', detail: 'Month-to-month — the system earns it every month' },
];

const differentiators = [
  { title: OS_PRICING.guarantee, detail: 'Every Found It OS install is guaranteed: if you don’t love your system, you get your money back. Month-to-month, no contracts — our customers stay because they love it, not because they’re locked in.' },
  { title: 'You own everything.', detail: 'Your software, your ad accounts, your code, your data. Nothing held hostage.' },
  { title: 'Senior strategist, not interns.', detail: 'A senior strategist works on your account. Not a junior who Googles the answers.' },
];

/* Rotating hero outcomes — each must complete "We Help [audience] ___".
   All software, all doctrine — the marketing lines are gone on purpose. */
const OUTCOMES = [
  'Own Their Software.',
  'Run Their Whole Business.',
  'Fire Their Rented Software.',
  'Automate the Busywork.',
  'Get Their Time Back.',
];

function RotatingOutcome() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      if (!document.hidden) setI((v) => (v + 1) % OUTCOMES.length);
    }, 3000);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <span className="block relative text-primary drop-shadow-[0_0_30px_rgba(249,115,22,0.15)]">
      {/* widest phrase reserves the line height/width to prevent layout shift */}
      <span className="invisible" aria-hidden="true">Fire Their Rented Software.</span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={i}
          initial={{ y: '0.7em', opacity: 0, filter: 'blur(6px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-0.7em', opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.55, ease }}
          className="absolute inset-x-0 top-0"
        >
          {OUTCOMES[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function HomePage() {
  const { scrollY } = useScroll();
  // The hero fade-on-scroll is a desktop-only flourish; touch devices keep the
  // hero pinned. The pin is routed through a MotionValue (instead of
  // conditionally swapping the style prop) so it always wins, even mid-scroll.
  const heroPin = useMotionValue(1); // 1 = pinned fully visible, 0 = fade with scroll
  const [fadeCapable, setFadeCapable] = useState(false);
  const [showChart, setShowChart] = useState(false);

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
              {/* Award trust chip */}
              <div className="opacity-0 animate-reveal-up-sm delay-100 flex justify-center mb-8 px-6">
                <span className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/25 rounded-2xl px-4 py-2 max-w-full">
                  <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
                  <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.12em] sm:tracking-[0.2em] text-amber-300 leading-snug text-center">
                    {AWARD.year} · {AWARD.label} Award
                  </span>
                </span>
              </div>

              {/* Headline (personalized by city/industry when known) */}
              <h1 className="opacity-0 animate-reveal-up delay-200 text-[10vw] sm:text-[8vw] md:text-[5.5vw] lg:text-[4vw] leading-[0.88] tracking-tight font-black font-heading uppercase italic text-white mb-7">
                We Help{' '}
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={audienceLine}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.45, ease }}
                    className="inline-block"
                  >
                    {audienceLine}
                  </motion.span>
                </AnimatePresence>{' '}
                <RotatingOutcome />
              </h1>

              {/* Subheadline */}
              <p className="opacity-0 animate-reveal-up-sm delay-300 text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                Your whole business on one screen, in your hand — custom AI software fitted to how you actually run, and you own it outright, code and data. Nobody rents you your own business back. Guaranteed: <span className="text-white font-bold">{OS_PRICING.guarantee}</span>
              </p>

              {/* Revenue impact proof — canonical claim + methodology, always together */}
              <div className="opacity-0 animate-reveal-up-sm delay-300 flex flex-col items-center gap-2.5 mb-10">
                <span className="inline-flex items-center gap-2.5 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5">
                  <TrendingUp className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base font-bold text-white">
                    <span className="text-primary font-black italic">{REVENUE_CLAIM.figure}</span> {REVENUE_CLAIM.label}
                  </span>
                </span>
                <span className="text-[11px] text-white/80 font-medium leading-snug max-w-md px-4">
                  {REVENUE_CLAIM.methodology}
                </span>
              </div>

              {/* Primary ask — the fitting; the wow lives one scroll down */}
              <div className="opacity-0 animate-reveal-up-sm delay-400">
                <Link
                  href="/foundit-os#lead-form"
                  className="inline-flex items-center justify-center px-10 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
                >
                  Get My Free Fitting
                </Link>
                <div className="flex items-center justify-center gap-6 mt-6">
                  <Link href="#foundit-os" className="text-xs font-black uppercase italic tracking-tighter text-white/80 hover:text-primary transition-colors">
                    Meet Found It OS ↓
                  </Link>
                  <span className="text-white/10 text-xs">|</span>
                  <SafePhone onClick={() => trackCallClick()} className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors text-sm font-bold">
                    <Phone className="w-4 h-4" /> <SafePhoneText />
                  </SafePhone>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="opacity-0 animate-fade-in delay-700 absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-5 h-8 rounded-full border-2 border-white/10 flex items-start justify-center p-1">
            <style jsx>{`
              @keyframes scroll-bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(8px); }
              }
              .animate-scroll-bounce {
                animation: scroll-bounce 2s ease-in-out infinite;
              }
            `}</style>
            <div className="w-1 h-2 bg-primary/40 rounded-full animate-scroll-bounce" />
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
              <p className="text-primary font-mono text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-80">The Flagship · Found It OS</p>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground mb-5">
                One System Runs Your Whole Business —{' '}
                <span className="text-primary">And You Own It.</span>
              </h2>
              <p className="text-muted-foreground font-medium text-base lg:text-lg leading-relaxed mb-8 max-w-2xl">
                The register, the inventory, the customers, the website, and an AI that knows all of it — custom-built around how your business actually runs. It proves itself beside your old system, matched to the penny, before anything switches.{' '}
                <span className="text-foreground font-bold">Nobody rents you your own business back.</span>
              </p>

              {/* The whole price, printed */}
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3">
                The Whole Price, Printed — Same Number for Everybody
              </p>
              <div className="flex flex-col sm:flex-row sm:items-stretch gap-3 mb-4">
                <div className="flex-1 bg-background/40 border border-border/20 rounded-2xl px-6 py-4">
                  <p className="text-2xl lg:text-3xl font-black text-primary italic tracking-tighter">{OS_PRICING.monthly}<span className="text-sm text-muted-foreground font-bold not-italic"> {OS_PRICING.monthlyLabel}</span></p>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-faint mt-1">Month-to-Month · No Contracts</p>
                </div>
                <div className="flex-1 bg-background/40 border border-border/20 rounded-2xl px-6 py-4">
                  <p className="text-2xl lg:text-3xl font-black text-primary italic tracking-tighter">{OS_PRICING.setup}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-faint mt-1">{OS_PRICING.setupLabel}</p>
                </div>
                <div className="flex-1 bg-primary/10 border border-primary/25 rounded-2xl px-6 py-4">
                  <p className="text-lg lg:text-xl font-black text-foreground italic tracking-tighter leading-tight">{OS_PRICING.guarantee}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-primary mt-1">Guaranteed</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground/80 font-medium leading-relaxed mb-8 max-w-2xl">
                A traditional custom software shop quotes $50,000–$150,000 and takes 3–6 months. {TRACK_RECORD.softwareCustomers} software customers and growing — real local businesses running or being fitted right now.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/foundit-os" className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity">
                  See Found It OS <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link href="/foundit-os#lead-form" className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-card/40 border border-border/20 text-foreground font-bold uppercase tracking-wider text-sm hover:border-primary/30 transition-colors">
                  Get a Free Fitting
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
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.88] text-foreground mb-5">
              Ask It. <span className="text-primary">It Answers.</span>
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

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center mt-8"
          >
            <Link
              href="/foundit-os#lead-form"
              className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
            >
              Get Yours Answering — Free Fitting
            </Link>
          </motion.p>
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
            <p className="text-primary font-mono text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-50">On Screen</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.88] text-foreground mb-5">
              Not Mockups. <span className="text-primary">Screenshots.</span>
            </h2>
            <p className="text-muted-foreground font-medium text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
              Straight off the screens of systems we&apos;ve fitted — an auto shop, a tire shop, a shed dealer, a clothier, a windmill maker, a carpet cleaner, a foundation crew. Every one custom-built, every one owned by the business running it.
            </p>
          </motion.div>

        </div>

        {/* THE FLOOR — full-bleed evidence rails. Desktops drift left in
            browser chrome; phones drift right in bezels. Hover pauses a row;
            reduced motion swaps the drift for manual scroll. */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="space-y-6 lg:space-y-8"
        >
          <OsRail items={railDesktops} dir="left" href="/foundit-os" size="md" />
          <OsRail items={railPhones} dir="right" href="/foundit-os" size="md" />
        </motion.div>
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
                  <p className="text-sm font-black uppercase italic tracking-tighter text-foreground">{item.title}</p>
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
            <p className="text-primary font-mono text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-50">90% Software · 10% Marketing</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.88] text-foreground mb-5">
              What We Build
            </h2>
            <p className="text-muted-foreground font-medium text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
              We are a custom AI software company. Systems, assistants, apps, and the websites wired into them — built one business at a time, owned by you. Every one starts with a free first step.
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
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-faint mb-1">The Other 10%</p>
              <p className="text-sm font-black uppercase italic tracking-tighter text-foreground">The Marketing Engine</p>
            </div>
            <p className="text-xs text-muted-foreground font-medium leading-relaxed flex-grow">
              Ads, AI search, and social for the businesses we build for — each one starts with a free audit.
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
            {/* Card header */}
            <div className="bg-gradient-to-r from-primary/10 via-amber-500/5 to-transparent px-7 lg:px-10 py-5 border-b border-border/10">
              <p className="text-primary font-mono text-[10px] font-black uppercase tracking-[0.5em] opacity-80">Real Results</p>
            </div>

            <div className="p-7 lg:p-10">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-black uppercase italic tracking-tighter leading-[0.92] text-foreground mb-10">
                Here&apos;s What Happened for{' '}
                <span className="text-primary">Our Clients.</span>
              </h3>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                {proofPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease }}
                    onMouseEnter={i === 1 ? () => setShowChart(true) : undefined}
                    onClick={i === 1 ? () => setShowChart((s) => !s) : undefined}
                    className={`bg-gradient-to-b from-primary/[0.06] to-primary/[0.02] border rounded-2xl p-5 text-center transition-colors duration-300 ${
                      i === 1
                        ? `cursor-pointer ${showChart ? 'border-primary/40' : 'border-primary/10 hover:border-primary/30'}`
                        : 'border-primary/10 hover:border-primary/20'
                    }`}
                  >
                    <p className="text-3xl lg:text-4xl font-black text-primary italic tracking-tighter drop-shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                      {point.value}
                    </p>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-faint mt-1.5 mb-2.5">{point.label}</p>
                    <p className="text-[11px] text-muted-foreground/70 font-medium leading-relaxed">{point.detail}</p>
                    {i === 1 && (
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary mt-2">
                        {showChart ? 'Charted below' : 'Hover to chart it'}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>

              <AnimatePresence>{showChart && <RoasChart />}</AnimatePresence>

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
            <p className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.92] text-foreground">
              &ldquo;We want to free the world from{' '}
              <span className="text-primary drop-shadow-[0_0_25px_rgba(249,115,22,0.15)]">rental software</span>.&rdquo;
            </p>
            <p className="mt-5 text-xs font-black uppercase tracking-[0.25em] text-muted-foreground">— Trevor Ruby, Founder</p>
            <p className="mt-6 text-base lg:text-lg text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed">
              Off-the-shelf software is off the rack. Yours is made to measure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PORTFOLIO STRIP — real client builds, links to /web-design#portfolio
      ═══════════════════════════════════════════ */}
      <div className="max-w-[1000px] mx-auto px-6">
        <PortfolioStrip />
      </div>

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
              <p className="text-primary font-mono text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-50">Meet The Team</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.88] text-foreground mb-5">
                Real People.{' '}
                <span className="text-primary drop-shadow-[0_0_25px_rgba(249,115,22,0.12)]">Real Local Team.</span>
              </h2>
              <p className="text-muted-foreground font-medium text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
                When you call about your system or your campaigns, you reach the same senior team that built them — right here in Alexandria, Louisiana. No call centers, no interns, no handoffs.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  `${TRACK_RECORD.yearsInBusiness} years in business, ${TRACK_RECORD.adSpendManagedLong}`,
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
                    <p className="text-[11px] font-black uppercase italic tracking-tighter text-white leading-none">{member.name}</p>
                    <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-primary mt-1">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          REVIEWS — animated marquee of real client reviews
      ═══════════════════════════════════════════ */}
      <ReviewMarquee />

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
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.88] mb-5 text-foreground">
              Call Trevor.{' '}
              <span className="text-primary drop-shadow-[0_0_25px_rgba(249,115,22,0.12)]">15 Minutes.</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground font-medium italic mb-10 max-w-lg mx-auto leading-relaxed">
              No pitch. No pressure. Just a straight conversation about what would actually work for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link href="/contact">
                <LiquidButton className="px-12 h-16 text-base sm:text-lg tracking-[0.08em] shadow-2xl shadow-primary/25">
                  Book a Free Call
                </LiquidButton>
              </Link>
              <SafePhone onClick={() => trackCallClick()} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-bold">
                <Phone className="w-4 h-4" /> <SafePhoneText />
              </SafePhone>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
