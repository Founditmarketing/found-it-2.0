'use client';

import { LPLayout, LPNav, FAQSection, LPFormSection, LPFooter } from '@/components/lp';
import { HormoziHero } from '@/components/lp/HormoziHero';
import { ObjectionBullets } from '@/components/lp/ObjectionBullets';
import { ProofBlock } from '@/components/lp/ProofBlock';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';

const ease = [0.16, 1, 0.3, 1] as const;

const faqItems = [
  {
    question: 'How long does it take to build?',
    answer: "4 to 6 weeks from kickoff to launch. Larger sites with custom features extend to 8–10 weeks. You'll get a firm timeline on the first call.",
  },
  {
    question: 'Who owns the website?',
    answer: "You do. Your domain, your code, your content, your hosting account. If you ever leave, you take everything. No lock-in, no hostage games.",
  },
  {
    question: 'What if I need changes after launch?',
    answer: "60 days of free post-launch optimization is included. After that, most clients move to a maintenance plan starting at $250/mo. No long-term contracts.",
  },
];

export function WebDesignLPContent() {
  return (
    <LPLayout ctaLabel="Get a Free Concept Call">
      <LPNav />

      <HormoziHero
        headline="Get a Website That Makes"
        headlineAccent="Your Phone Ring."
        subheadline="We build fast, mobile-first websites that turn visitors into calls and quotes. Live in 6 weeks. You own everything."
        ctaText="Get a Free Concept Call"
        frictionReducer="15-minute call. Zero obligation. Free mockup concept included."
      />

      <ObjectionBullets
        bullets={[
          {
            title: 'You own everything.',
            detail: "Your domain, your code, your content. No lock-in. Leave anytime — take it all with you.",
          },
          {
            title: '60 days of free changes after launch.',
            detail: "We don't disappear after go-live. Post-launch tweaks and optimization are included.",
          },
          {
            title: 'Live in 4–6 weeks.',
            detail: "Not 4 months. You get a firm timeline on the first call.",
          },
        ]}
      />

      <ProofBlock
        headline="One Client Tripled Their Qualified Calls"
        headlineAccent="in 90 Days."
        stats={[
          { value: '3x', label: 'Qualified Calls' },
          { value: '94', label: 'Lighthouse Score' },
          { value: '2.1s', label: 'Load Time' },
        ]}
        narrative="Their old site loaded in 6 seconds on mobile and the contact form was buried 3 clicks deep. We rebuilt from scratch — custom design, fast code, and a clear path to call or request a quote. 90 days later, qualified calls tripled."
      />

      <LPFormSection
        heading="See Your Site Reimagined"
        subheading="Tell us about your business and we'll show you what a site that actually converts looks like for your market."
        benefits={[
          'Competitive website teardown',
          'Custom design direction and mockup concept',
          'Zero obligation — the insights are yours to keep',
        ]}
        source="lp_web_design"
        pageSlug="web-design"
      />

      <FAQSection items={faqItems} />

      {/* ─── Bottom CTA ─── */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
        <div className="max-w-[700px] mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
              Your Competitors Already{' '}
              <span className="text-primary">Look the Part.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium italic mb-8 max-w-lg mx-auto leading-relaxed">
              Make sure you do too. Talk to John — 15 minutes, no pitch, just a straight answer on what your site could be.
            </p>
            <Link href="#lp-form">
              <LiquidButton className="px-12 h-16 text-base sm:text-lg tracking-[0.05em] shadow-2xl shadow-primary/20">
                Get a Free Concept Call
              </LiquidButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <LPFooter />
    </LPLayout>
  );
}
