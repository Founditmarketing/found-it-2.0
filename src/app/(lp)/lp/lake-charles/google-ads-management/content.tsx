'use client';

import {
  LPLayout,
  LPNav,
  TrustBar,
  BenefitsGrid,
  ProcessSteps,
  FAQSection,
  LPFormSection,
  LPFooter,
  ExitIntent,
} from '@/components/lp';
import { LPHero } from '@/components/lp/LPHero';
import { ClientLogoBar } from '@/components/lp/ClientLogoBar';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight, Phone, Calendar, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { trackCallClick } from '@/lib/analytics';
import { phoneHref, phoneDisplay, CALLRAIL_CLASS } from '@/lib/phone';

const ease = [0.16, 1, 0.3, 1] as const;
const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || '';

/* ─── Pain Points ─── */
const painPoints = [
  { title: "Spending $3K+/month and your phone barely rings", sub: "Vanity metrics are dressed up to look like performance. Real metrics are calls, quotes, and signed work." },
  { title: "Your agency reports on clicks and impressions, not bids and revenue", sub: "Click-through rate doesn't pay your crew." },
  { title: "You don't know which keywords actually drive jobs", sub: "Without proper conversion tracking, you're flying blind." },
  { title: "You've been on autopilot for 6+ months with no real optimization", sub: "Set-and-forget on Google Ads is set-and-bleed." },
];

/* ─── Service Features ─── */
const benefits = [
  { title: 'Weekly Optimization', description: "Most agencies 'manage' monthly. We optimize weekly, prune wasted spend, scale winners." },
  { title: 'Industrial Vertical Experience', description: "We've run ads for contractors, fabricators, oilfield, automotive, and commercial service businesses. We know your search terms and your buyers." },
  { title: 'Real Conversion Tracking', description: "Call tracking, form submission tracking, offline conversions imported from your CRM. Google's algorithm learns from real revenue, not just form fills." },
  { title: 'Transparent Reporting Dashboard', description: "You see what we see. Every keyword, every conversion, every dollar — live." },
  { title: 'No Long-Term Contracts', description: "Month-to-month. Cancel anytime with 30 days notice." },
  { title: 'You Own Your Account', description: "Always. We work inside YOUR Google Ads account. If you ever leave, you keep everything." },
];

/* ─── Process Steps ─── */
const processSteps = [
  { number: '01', title: 'Free Campaign Audit', description: 'We dissect your current ads (or build a strategy from scratch), analyze competitors, and identify the highest-ROI opportunities in your market.' },
  { number: '02', title: 'Campaign Architecture', description: 'Custom campaign structure, keyword research, ad copy, and conversion-optimized landing pages — all built by our senior team.' },
  { number: '03', title: 'Launch & Scale', description: 'We launch, monitor daily, and optimize relentlessly. Weekly reports, monthly strategy calls, and continuous improvement.' },
];

/* ─── FAQ Items (client-side for accordion) ─── */
const faqItems = [
  { question: 'Do you have experience with industrial and contractor businesses?', answer: "Yes. We manage Google Ads for contractors, oilfield service businesses, manufacturers, automotive companies, and industrial suppliers. We know the search terms your buyers use and we know how to filter out residential leads when you only want commercial work." },
  { question: 'How much should I spend on Google Ads?', answer: "Most industrial and commercial service businesses start between $2,000-$8,000/month in ad spend. The right number depends on your average customer value, your local competition, and how aggressively you want to grow. We'll model it out in your free audit — including realistic ROI projections at each spend level." },
  { question: 'How quickly will I see results?', answer: "New campaigns typically generate leads within the first week. Real optimization — where cost per lead drops meaningfully — usually takes 60-90 days as Google's algorithm learns from your conversion data. Anyone promising overnight results is either lying or burning your budget on bad clicks." },
  { question: "What if I'm already running ads with another agency?", answer: "Even better — we'll audit what's already running and usually find quick wins in week one. We work inside your existing account so you keep ownership and historical data. If you ever leave us, you keep everything we built." },
  { question: 'Will you mark up my ad spend?', answer: "No. You pay Google directly through your own account. We charge a separate management fee. No bundled invoices, no hidden margins, no spend markup. Full transparency, every dollar accounted for." },
  { question: 'Is there a contract?', answer: "No. Month-to-month, cancel anytime with 30 days notice. We earn your business every month — that's the only sustainable model." },
];

/* ─── Pricing Tiers ─── */
const tiers = [
  {
    name: 'Starter',
    price: '$1,500',
    spend: '$1K–$5K/mo ad spend',
    features: ['Weekly optimization', 'Monthly strategy call', 'Real-time reporting dashboard', 'Conversion tracking setup'],
    popular: false,
  },
  {
    name: 'Growth',
    price: '$2,500',
    spend: '$5K–$15K/mo ad spend',
    features: ['Everything in Starter', 'Bi-weekly strategy calls', 'A/B testing on ads and landing pages', 'Quarterly creative refresh'],
    popular: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    spend: '$15K+/mo ad spend',
    features: ['Everything in Growth', 'Dedicated senior strategist', 'Multi-campaign management', 'Custom integrations'],
    popular: false,
  },
];

/* ─── Case Study Stats ─── */
const caseStudyStats = [
  { value: '$4,200', label: 'Monthly Ad Spend' },
  { value: '$42,000', label: 'Monthly New Revenue' },
  { value: '10x', label: 'Return on Ad Spend' },
];

export function LakeCharlesGoogleAdsContent() {
  return (
    <LPLayout ctaLabel="Get Free Audit">
      <LPNav />
      <LPHero
        line1="Google Ads That Generate"
        line2="Bids, Not Just Clicks."
        accentWord="Clicks."
        subheadline="We manage Google Ads for industrial, construction, and service businesses across Southwest Louisiana. Real conversion tracking. Weekly optimization. No long-term contracts. Talk to John."
        ctaText="Get a Free Audit of Your Account"
      />
      <ClientLogoBar tagline="Managing Google Ads for industrial and service businesses across Louisiana and Texas." />

      <TrustBar stats={[
        { value: '250+', label: 'Campaigns Managed' },
        { value: '3.2x', label: 'Avg. ROAS' },
        { value: '-38%', label: 'Avg. Cost Per Lead' },
        { value: '48', label: 'States Served' },
      ]} />

      {/* ─── Pain Points ─── */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }} className="text-center mb-14">
            <p className="text-red-400/80 font-mono text-xs font-black uppercase tracking-[0.4em] mb-4">The Problem</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground">Sound Familiar?</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {painPoints.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6, ease: ease as any }}
                className="bg-red-500/[0.03] border border-red-500/10 rounded-2xl p-6 hover:border-primary/20 transition-all duration-500 group"
              >
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-3 group-hover:bg-red-500/20 transition-colors">
                  <span className="text-red-400 font-black text-sm">✕</span>
                </div>
                <h3 className="text-sm font-black uppercase italic tracking-tighter mb-1.5 text-foreground leading-snug">{p.title}</h3>
                <p className="text-xs text-muted-foreground font-medium italic">{p.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BenefitsGrid heading="Here's What We Do Differently" subheading="Most agencies set and forget. We obsess over every dollar." benefits={benefits} />
      <ProcessSteps heading="From Audit to Revenue" steps={processSteps} />

      {/* ─── Case Study ─── */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 1.2, ease: ease as any }}
            className="bg-card/15 backdrop-blur-2xl border border-border/20 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <div className="bg-gradient-to-r from-primary/10 via-amber-500/5 to-transparent px-8 lg:px-14 py-6 border-b border-border/10">
              <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] opacity-60">Proof</p>
            </div>
            <div className="p-8 lg:p-14 space-y-10">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground">
                How a Louisiana Commercial Service Business Turned <span className="text-primary">$4,200/mo</span> Into $42K Monthly Revenue
              </h3>
              <div className="grid grid-cols-3 gap-4 lg:gap-8">
                {caseStudyStats.map((stat, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6, ease: ease as any }}
                    className="bg-primary/5 border border-primary/10 rounded-2xl p-4 lg:p-6 text-center"
                  >
                    <p className="text-2xl lg:text-4xl font-black text-primary italic tracking-tighter">{stat.value}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-muted-foreground font-medium leading-relaxed">
                This client came to us spending $4,200/month on Google Ads with no clear ROI tracking. We rebuilt their campaign architecture around their highest-margin services, wired in proper call-to-close conversion tracking, and cut wasted spend on low-intent keywords. Within 90 days they were generating $42K in new monthly recurring revenue from Google Ads — a 10x return on ad spend.
              </p>
              <p className="text-xs text-muted-foreground/40 italic">Real client. Results anonymized for confidentiality. Specific results vary by industry and market.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Pricing Tiers ─── */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }} className="text-center mb-14">
            <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-60">Investment</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground">Transparent Pricing</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: ease as any }}
                className={`relative bg-card/15 backdrop-blur-2xl border rounded-[2rem] p-8 shadow-2xl flex flex-col ${
                  tier.popular ? 'border-primary/40 ring-1 ring-primary/20' : 'border-border/20'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">Most Popular</span>
                  </div>
                )}
                <p className="text-xs font-black uppercase tracking-[0.2em] text-primary/60 mb-2">{tier.name}</p>
                <p className="text-3xl lg:text-4xl font-black text-foreground italic tracking-tighter mb-1">{tier.price}<span className="text-base text-muted-foreground font-medium">/mo</span></p>
                <p className="text-xs text-muted-foreground/60 font-medium mb-6">{tier.spend}</p>
                <div className="space-y-3 flex-grow">
                  {tier.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="#lp-form" className="mt-8 block">
                  <motion.div whileTap={{ scale: 0.97 }}
                    className={`w-full text-center font-black uppercase italic tracking-tighter py-3.5 rounded-xl text-sm transition-shadow ${
                      tier.popular
                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40'
                        : 'bg-card/30 border border-border/20 text-foreground hover:border-primary/30'
                    }`}
                  >
                    Get Started
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground/60 font-medium">
            No setup fees. Month-to-month. You own your Google Ads account — always.
          </p>
        </div>
      </section>

      {/* ─── John CTA ─── */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 1.2, ease: ease as any }}
            className="relative bg-card/20 backdrop-blur-2xl border border-border/20 rounded-[2rem] lg:rounded-[3rem] p-8 md:p-14 shadow-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-start">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <motion.div whileHover={{ scale: 1.05, rotate: -2 }}
                  className="w-28 h-28 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent border-2 border-primary/20 flex items-center justify-center shadow-2xl shadow-primary/10 mb-6"
                >
                  <span className="text-4xl lg:text-5xl font-black text-primary italic tracking-tighter">J</span>
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter leading-[0.9] mb-2 text-foreground">
                  Get a Free Audit. No Commitment.
                </h3>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60 mb-4">Senior Strategist — 13 years managing Google Ads</p>
                <p className="text-base text-muted-foreground font-medium italic leading-relaxed mb-6 max-w-md">
                  John will personally walk you through your current account or build a forecast if you&apos;re not running ads yet. No junior account managers, no sales scripts — just a candid conversation about your business.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link href="#lp-form">
                    <motion.div whileTap={{ scale: 0.97 }}
                      className="bg-primary text-primary-foreground font-black uppercase italic tracking-tighter py-3.5 px-8 rounded-xl text-sm flex items-center gap-2 shadow-lg shadow-primary/20"
                    >
                      Schedule My Free Audit <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                  <a href={phoneHref} onClick={() => trackCallClick()} className={`flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-bold ${CALLRAIL_CLASS}`}>
                    <Phone className="w-4 h-4" /> {phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="bg-card/10 border border-border/20 rounded-2xl p-6 lg:p-8 min-h-[300px] flex flex-col items-center justify-center">
                {CALENDLY_URL ? (
                  <iframe src={CALENDLY_URL} className="w-full h-[400px] rounded-xl border-0" title="Schedule a call with John" />
                ) : (
                  <div className="text-center space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
                      <Calendar className="w-7 h-7 text-primary" />
                    </div>
                    <p className="text-sm font-black uppercase italic tracking-tighter text-foreground">Calendly Embed Loads Here</p>
                    <p className="text-xs text-muted-foreground/60 max-w-xs">Set <code className="bg-white/5 px-1.5 py-0.5 rounded text-primary/60 text-[10px]">NEXT_PUBLIC_CALENDLY_URL</code> to enable live scheduling.</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <LPFormSection
        heading="Get Your Free Google Ads Audit"
        subheading="We'll review your current campaigns (or build a plan from scratch) and show you exactly where you're leaving money on the table."
        benefits={['Full campaign audit with wasted spend analysis', 'Competitor ad strategy breakdown', 'Custom bid & keyword recommendations', 'Zero obligation — the audit is yours to keep']}
        source="lp_google_ads_lc"
        pageSlug="lake-charles-google-ads"
      />

      <FAQSection items={faqItems} />

      {/* ─── Final CTA ─── */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
        <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: ease as any }}>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] mb-6 text-foreground">
              Stop Guessing.{' '}
              <span className="text-primary drop-shadow-[0_0_20px_rgba(249,115,22,0.2)]">Start Growing.</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium italic mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a 15-minute call with John. Worst case, you get a free audit. Best case, you stop wasting money next week.
            </p>
            <Link href="#lp-form">
              <LiquidButton className="px-12 h-18 text-base sm:text-lg tracking-[0.1em] shadow-2xl shadow-primary/20">
                Talk to John
              </LiquidButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <LPFooter />

      <ExitIntent
        headline="Before you go — grab the audit checklist."
        subheadline="The 12 things every healthy Google Ads account should have. We use this internally for every client audit."
        magnetTitle="Google Ads Audit Checklist"
        ctaLabel="Send Me The Checklist"
      />
    </LPLayout>
  );
}
