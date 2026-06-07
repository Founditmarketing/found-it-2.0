'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, ArrowRight, Phone, Megaphone, Globe, Cpu, Share2, Trophy, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { trackCallClick } from '@/lib/analytics';
import { phoneHref, phoneDisplay, CALLRAIL_CLASS } from '@/lib/phone';
import { ReviewMarquee } from '@/components/landing/ReviewMarquee';
import { AWARD } from '@/lib/site';
import { staff } from '@/lib/team';

// World-class intro animation bezier
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ─── Data ─── */

const services = [
  {
    name: 'Google Ads',
    result: 'Get more leads from your ad spend — or stop paying us.',
    href: '/lp/google-ads-management',
    cta: 'Get a Free Audit',
    icon: Megaphone,
    accent: 'from-orange-500/20 to-amber-500/5',
  },
  {
    name: 'Web Design',
    result: 'A website that makes your phone ring. Live in 2 weeks or less.',
    href: '/lp/web-design',
    cta: 'Get a Free Concept Call',
    icon: Globe,
    accent: 'from-blue-500/20 to-cyan-500/5',
  },
  {
    name: 'AI Search',
    result: 'Show up when ChatGPT and Google AI recommend your industry.',
    href: '/lp/ai-search-seo',
    cta: 'Get a Free AI Audit',
    icon: Cpu,
    accent: 'from-violet-500/20 to-purple-500/5',
  },
  {
    name: 'Social Media',
    result: 'Content that gets calls, not just likes. We create it all.',
    href: '/lp/social-media-management',
    cta: 'Get a Free Content Plan',
    icon: Share2,
    accent: 'from-emerald-500/20 to-teal-500/5',
  },
];

const proofPoints = [
  { value: '10x', label: 'ROAS', detail: '$4.2K/mo spend → $42K/mo revenue' },
  { value: '3x', label: 'Calls', detail: 'Tripled qualified calls in 90 days' },
  { value: '#1', label: 'AI Rec', detail: 'Only recommendation in ChatGPT' },
  { value: '750', label: 'Calls', detail: '750 organic calls in 5 months' },
];

const differentiators = [
  { title: 'No contracts.', detail: 'Month-to-month options on everything.' },
  { title: 'You own everything.', detail: 'Your ad accounts, your code, your data. Nothing held hostage.' },
  { title: 'Senior strategist, not interns.', detail: 'A senior strategist works on your account. Not a junior who Googles the answers.' },
];

export default function HomePage() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <div className="bg-transparent text-foreground relative overflow-hidden">

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-[92dvh] flex flex-col justify-center pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
        {/* Drifting glow orbs — confined to the hero only */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-15%] left-[-10%] w-[45vw] h-[45vw] bg-[radial-gradient(ellipse_at_center,rgba(255,85,0,0.18)_0%,transparent_70%)] rounded-full animate-drift-1 motion-reduce:animate-none transform-gpu will-change-transform" />
          <div className="absolute top-[8%] right-[-10%] w-[40vw] h-[40vw] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.16)_0%,transparent_70%)] rounded-full animate-drift-2 animation-delay-2000 motion-reduce:animate-none transform-gpu will-change-transform" />
          <div className="absolute bottom-[-20%] left-[25%] w-[50vw] h-[50vw] bg-[radial-gradient(ellipse_at_center,rgba(234,88,12,0.15)_0%,transparent_70%)] rounded-full animate-drift-3 animation-delay-4000 motion-reduce:animate-none transform-gpu will-change-transform" />
        </div>
        {/* Hero gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-transparent to-transparent pointer-events-none" />

        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10 flex-grow flex items-center">
          <div className="max-w-[1000px] mx-auto px-6 w-full text-center">
            <div>
              {/* Eyebrow */}
              <p className="opacity-0 animate-reveal-up-sm delay-100 text-primary font-mono text-[10px] sm:text-xs font-black uppercase tracking-[0.5em] mb-5">
                Found It Marketing — Alexandria, LA
              </p>

              {/* Award trust chip */}
              <div className="opacity-0 animate-reveal-up-sm delay-100 flex justify-center mb-8 px-6">
                <span className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/25 rounded-2xl px-4 py-2 max-w-full">
                  <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
                  <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.12em] sm:tracking-[0.2em] text-amber-300 leading-snug text-center">
                    {AWARD.year} · {AWARD.label} Award
                  </span>
                </span>
              </div>

              {/* Headline */}
              <h1 className="opacity-0 animate-reveal-up delay-200 text-[10vw] sm:text-[8vw] md:text-[5.5vw] lg:text-[4vw] leading-[0.88] tracking-tight font-black font-heading uppercase italic text-white mb-7">
                We Help Local Businesses{' '}
                <span className="text-primary drop-shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                  Get More Customers.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="opacity-0 animate-reveal-up-sm delay-300 text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                Google Ads. Web design. SEO. AI search. No contracts, no jargon, no interns on your account. Just results you can measure.
              </p>

              {/* Revenue impact proof */}
              <div className="opacity-0 animate-reveal-up-sm delay-300 flex justify-center mb-10">
                <span className="inline-flex items-center gap-2.5 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5">
                  <TrendingUp className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base font-bold text-white">
                    <span className="text-primary font-black italic">$2.3B+</span> generated in client revenue
                  </span>
                </span>
              </div>

              {/* CTA cluster */}
              <div className="opacity-0 animate-reveal-up-sm delay-400 flex flex-col items-center gap-5">
                <Link href="#services">
                  <LiquidButton className="px-12 sm:px-16 h-16 sm:h-[72px] text-base sm:text-lg tracking-[0.08em] shadow-2xl shadow-primary/25">
                    See What We Do
                  </LiquidButton>
                </Link>
                <div className="flex items-center gap-6">
                  <a href={phoneHref} onClick={() => trackCallClick()} className={`flex items-center gap-2 text-white/40 hover:text-primary transition-colors text-sm font-bold ${CALLRAIL_CLASS}`}>
                    <Phone className="w-4 h-4" /> {phoneDisplay}
                  </a>
                  <span className="text-white/10 text-xs">|</span>
                  <span className="text-xs text-white/25 font-medium">Free audit on every service</span>
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
          SERVICES — 4 premium cards with icons
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
            <p className="text-primary font-mono text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-50">Services</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.88] text-foreground mb-5">
              What We Do
            </h2>
            <p className="text-muted-foreground font-medium text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
              Four services. Each one comes with a free audit so you can see what we&apos;d do — before you spend a dollar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
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
              <p className="text-primary font-mono text-[10px] font-black uppercase tracking-[0.5em] opacity-60">Real Results</p>
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
                    className="bg-gradient-to-b from-primary/[0.06] to-primary/[0.02] border border-primary/10 rounded-2xl p-5 text-center hover:border-primary/20 transition-colors duration-300"
                  >
                    <p className="text-3xl lg:text-4xl font-black text-primary italic tracking-tighter drop-shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                      {point.value}
                    </p>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/50 mt-1.5 mb-2.5">{point.label}</p>
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
                When you call about your campaigns, you reach the same senior team that built them — right here in Alexandria, Louisiana. No call centers, no interns, no handoffs.
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
              <Link href="/lp/google-ads-management#lp-form">
                <LiquidButton className="px-12 h-16 text-base sm:text-lg tracking-[0.08em] shadow-2xl shadow-primary/25">
                  Book a Free Call
                </LiquidButton>
              </Link>
              <a href={phoneHref} onClick={() => trackCallClick()} className={`flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-bold ${CALLRAIL_CLASS}`}>
                <Phone className="w-4 h-4" /> {phoneDisplay}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
