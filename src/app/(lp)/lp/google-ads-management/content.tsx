'use client';

import { useEffect } from 'react';
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
import { GoogleAdsHero } from '@/components/lp/GoogleAdsHero';
import { ClientLogoBar } from '@/components/lp/ClientLogoBar';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2, ArrowRight, Phone, Calendar } from 'lucide-react';
import Link from 'next/link';
import { trackCallClick } from '@/lib/analytics';

const ease = [0.16, 1, 0.3, 1] as const;
const PHONE = process.env.NEXT_PUBLIC_JOHN_PHONE || '3182800115';
const PHONE_DISPLAY = PHONE.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || '';

/* ─── Data ─── */

const benefits = [
  { title: 'Wasted Spend Eliminated', description: 'We audit every dollar. Negative keywords, bid strategies, and audience refinement eliminate clicks that never convert.' },
  { title: 'Local-First Targeting', description: 'Geo-fencing, radius targeting, and location-specific ad copy that puts you in front of customers actively searching in your area.' },
  { title: 'Conversion Tracking That Works', description: 'Phone calls, form fills, direction requests — we track every conversion type so you know exactly what your ad spend produces.' },
  { title: 'Landing Pages That Convert', description: 'Every campaign gets custom landing pages built for conversion — not generic templates that waste your traffic.' },
  { title: 'Transparent Reporting', description: 'Real-time dashboards showing leads, cost-per-lead, and ROI. No vanity metrics. No smoke and mirrors.' },
  { title: 'No Long-Term Contracts', description: "Month-to-month. If we're not delivering results, you can walk. That's how confident we are." },
];

const processSteps = [
  { number: '01', title: 'Free Campaign Audit', description: 'We dissect your current ads (or build a strategy from scratch), analyze competitors, and identify the highest-ROI opportunities in your market.' },
  { number: '02', title: 'Campaign Architecture', description: 'Custom campaign structure, keyword research, ad copy, and conversion-optimized landing pages — all built by our senior team.' },
  { number: '03', title: 'Launch & Scale', description: 'We launch, monitor daily, and optimize relentlessly. Weekly reports, monthly strategy calls, and continuous improvement.' },
];

const painPoints = [
  { title: 'Watching $5K/mo disappear with no clear ROI', sub: "Your reports look fine but the phone isn't ringing." },
  { title: "Your agency reports look great but your phone isn't ringing", sub: 'Vanity metrics dressed up as performance.' },
  { title: "You don't know which keywords actually drive revenue", sub: "Without proper conversion tracking, you're flying blind." },
  { title: "You've been on autopilot for 6+ months with no real optimization", sub: 'Set-and-forget is set-and-bleed.' },
];

const faqItems = [
  { question: 'How much should I spend on Google Ads?', answer: "Most local service businesses start between $1,500-$5,000/month in ad spend. The right number depends on your average customer value, your local competition, and how aggressive you want to grow. We'll model it out for you in the free audit — including what a realistic ROI looks like at each spend level." },
  { question: 'How quickly will I see results?', answer: "New campaigns typically generate leads within the first week. Real optimization — where cost per lead drops meaningfully — usually takes 60-90 days as Google's algorithm learns from your conversion data. Anyone promising overnight results is either lying or burning through your budget on bad clicks." },
  { question: 'Do you manage the ad spend or just charge a management fee?', answer: 'We charge a separate management fee on top of your ad spend. You pay Google directly through your own account. We never mark up ad spend or hide costs in a single bundled invoice — full transparency, every dollar accounted for.' },
  { question: 'What industries do you specialize in?', answer: "We manage Google Ads for 250+ local service businesses including medical practices, law firms, contractors, dealerships, home services, and professional services. If you've got a service-based business with a definable customer area, we know how to run ads for you." },
  { question: 'What if I already have a Google Ads account?', answer: "Even better — we can audit what's already running and usually find quick wins in week one. We work inside your existing account so you keep full ownership and historical data. If you ever leave, you keep everything we built." },
  { question: 'Is there a contract?', answer: "No. Month-to-month, cancel anytime with 30 days notice. The only reason to lock clients into long contracts is if you can't deliver results consistently — we can, so we don't." },
];

const tiers = [
  { name: 'Starter', price: '$1,500', period: '/mo', target: 'For businesses spending $1K-$5K/mo in ad spend', tag: null, features: ['Weekly optimization', 'Monthly strategy call', 'Real-time reporting dashboard', 'Conversion tracking setup'] },
  { name: 'Growth', price: '$2,500', period: '/mo', target: 'For businesses spending $5K-$15K/mo in ad spend', tag: 'Most Popular', features: ['Everything in Starter', 'Bi-weekly strategy calls', 'A/B testing on ads and landing pages', 'Quarterly creative refresh'] },
  { name: 'Scale', price: 'Custom', period: '', target: 'For businesses spending $15K+/mo in ad spend', tag: null, features: ['Everything in Growth', 'Dedicated senior strategist', 'Multi-campaign management', 'Custom integrations'] },
];

/* ─── Form Tracking ─── */
function useFormConversionTracking() {
  useEffect(() => {
    const GADS_CONVERSION = process.env.NEXT_PUBLIC_GADS_CONVERSION_ID;
    const handleMessage = (e: MessageEvent) => {
      if (typeof e.data !== 'string' && typeof e.data !== 'object') return;
      const data = typeof e.data === 'string' ? e.data : JSON.stringify(e.data);
      const isFormSubmit = data.includes('form-submit') || data.includes('form-success') || data.includes('form_submitted') || data.includes('formSubmitted');
      if (isFormSubmit && typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'lead_submit', { event_category: 'conversion', source: 'google-ads-mgmt-lp' });
        if (GADS_CONVERSION) window.gtag('event', 'conversion', { send_to: GADS_CONVERSION });
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);
}

export function GoogleAdsLPContent() {
  useFormConversionTracking();

  return (
    <LPLayout ctaLabel="Get Free Audit">
      <LPNav />
      <GoogleAdsHero />
      <ClientLogoBar />
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

      <BenefitsGrid heading="Google Ads That Actually Work" subheading="Most agencies set and forget. We obsess over every dollar." benefits={benefits} />
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
                How a Dental Practice Turned <span className="text-primary">$4,200/mo</span> Into $42K Monthly Revenue
              </h3>
              <div className="grid grid-cols-3 gap-4 lg:gap-8">
                {[{ value: '$4,200', label: 'Monthly Ad Spend' }, { value: '$42,000', label: 'Monthly New Revenue' }, { value: '10X', label: 'Return on Ad Spend' }].map((stat, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6, ease: ease as any }}
                    className="bg-primary/5 border border-primary/10 rounded-2xl p-4 lg:p-6 text-center"
                  >
                    <p className="text-2xl lg:text-4xl font-black text-primary italic tracking-tighter">{stat.value}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-muted-foreground font-medium leading-relaxed">
                When this practice came to us, they were spending $4,200/month on Google Ads with no clear ROI tracking. We rebuilt their campaign architecture around high-value procedures, wired in proper conversion tracking from call-to-close, and cut wasted spend on low-intent keywords. Within 90 days, they were generating $42K in new monthly recurring revenue from Google Ads — a 10x return on ad spend.
              </p>
              <p className="text-xs text-muted-foreground/40 italic">Real client. Results anonymized for confidentiality. Specific results vary by industry and market.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── John CTA (Enhanced) ─── */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 1.2, ease: ease as any }}
            className="relative bg-card/20 backdrop-blur-2xl border border-border/20 rounded-[2rem] lg:rounded-[3rem] p-8 md:p-14 shadow-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-start">
              {/* Left — John info */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <motion.div whileHover={{ scale: 1.05, rotate: -2 }}
                  className="w-28 h-28 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent border-2 border-primary/20 flex items-center justify-center shadow-2xl shadow-primary/10 mb-6"
                >
                  <span className="text-4xl lg:text-5xl font-black text-primary italic tracking-tighter">J</span>
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter leading-[0.9] mb-2 text-foreground">
                  Your Campaigns, Managed by a Veteran
                </h3>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60 mb-4">Senior Strategist — 13 years managing Google Ads</p>
                <p className="text-base text-muted-foreground font-medium italic leading-relaxed mb-6 max-w-md">
                  John has personally managed over $2M in ad spend for local businesses. Every strategy session, every optimization, every report — it&apos;s him. Not a junior account manager reading from a script.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link href="#lp-form">
                    <motion.div whileTap={{ scale: 0.97 }}
                      className="bg-primary text-primary-foreground font-black uppercase italic tracking-tighter py-3.5 px-8 rounded-xl text-sm flex items-center gap-2 shadow-lg shadow-primary/20"
                    >
                      Schedule My Free Call <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                  <a href={`tel:${PHONE}`} onClick={() => trackCallClick()} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-bold">
                    <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              {/* Right — Calendly placeholder */}
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

      {/* ─── Honest Pricing ─── */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }} className="text-center mb-16">
            <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-60">Investment</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground">Honest Pricing</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {tiers.map((tier, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: ease as any }}
                className={`bg-card/15 backdrop-blur-xl border rounded-[2rem] p-8 text-center relative overflow-hidden transition-all duration-500 flex flex-col ${tier.tag ? 'border-primary/30' : 'border-border/20 hover:border-border/30'}`}
              >
                {tier.tag && <span className="absolute top-4 right-4 text-[9px] font-black uppercase tracking-[0.2em] text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">{tier.tag}</span>}
                <h3 className="text-lg font-black uppercase italic tracking-tighter mb-2 text-foreground">{tier.name}</h3>
                <p className="text-4xl font-black text-primary italic tracking-tighter mb-1">{tier.price}<span className="text-lg text-muted-foreground/60">{tier.period}</span></p>
                <p className="text-xs text-muted-foreground/60 font-bold mb-2">Management fee</p>
                <p className="text-xs text-muted-foreground font-medium italic mb-6">{tier.target}</p>
                <div className="space-y-3 text-left flex-1">
                  {tier.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary/60 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground font-medium">{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="#lp-form" className="mt-8 block">
                  <motion.div whileTap={{ scale: 0.97 }}
                    className={`w-full font-black uppercase italic tracking-tighter py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-shadow ${tier.tag ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' : 'bg-white/5 text-foreground border border-border/30 hover:border-primary/30'}`}
                  >
                    Get Started <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground/40 mt-8 font-medium">No setup fees. Month-to-month. You own your Google Ads account — always.</p>
        </div>
      </section>

      <LPFormSection heading="Get Your Free Google Ads Audit" subheading="We'll review your current campaigns (or build a plan from scratch) and show you exactly where you're leaving money on the table."
        benefits={['Full campaign audit with wasted spend analysis', 'Competitor ad strategy breakdown', 'Custom bid & keyword recommendations', 'Zero obligation — the audit is yours to keep']}
      />
      <FAQSection items={faqItems} />
      <LPFooter />

      <ExitIntent
        headline="Before you go — grab the audit checklist."
        subheadline="The 12 things every healthy Google Ads account should have. We use this internally for every audit."
        magnetTitle="Google Ads Audit Checklist"
        ctaLabel="Send Me The Checklist"
      />
    </LPLayout>
  );
}
