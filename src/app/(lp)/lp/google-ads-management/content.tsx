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
    question: 'How much should I spend on Google Ads?',
    answer: "Most local businesses start between $1,500–$5,000/month in ad spend. The right number depends on what a customer is worth to you and how fast you want to grow. We'll give you specific numbers in the free audit.",
  },
  {
    question: 'How fast will I see results?',
    answer: "Most clients see leads in the first week. Real optimization — where your cost per lead drops and lead quality goes up — takes about 60 days. Anyone promising overnight results is either lying or burning your budget.",
  },
  {
    question: 'Is there a contract?',
    answer: "No. Month-to-month. Cancel anytime with 30 days notice. We keep clients by getting results, not by locking them in.",
  },
];

export function GoogleAdsLPContent() {
  return (
    <LPLayout ctaLabel="Get My Free Audit">
      <LPNav />

      <HormoziHero
        headline="Get More Leads From Your Google Ads —"
        headlineAccent="in 60 Days."
        subheadline="We find what's wasting your money, cut it, and show you the results every week. Free audit — no commitment."
        ctaText="Get My Free Audit"
        frictionReducer="Takes 2 minutes. No contracts, ever."
      />

      <ObjectionBullets
        bullets={[
          {
            title: 'No contracts. Cancel anytime.',
            detail: "Month-to-month. 30 days notice. You keep everything we built if you leave.",
          },
          {
            title: 'You own your ad account.',
            detail: "We work inside YOUR Google Ads account. Nothing is held hostage. Ever.",
          },
          {
            title: 'See results in week one.',
            detail: "Most clients find wasted spend in the first audit. Real optimization kicks in by day 60.",
          },
        ]}
      />

      <ProofBlock
        headline="One Client Turned $4,200/mo Into"
        headlineAccent="$42,000 in New Revenue."
        stats={[
          { value: '$4,200', label: 'Monthly Ad Spend' },
          { value: '$42,000', label: 'Monthly Revenue' },
          { value: '10x', label: 'Return on Ad Spend' },
        ]}
        narrative="They were spending $4,200/month with no idea what was working. We rebuilt their campaigns around their best services, set up real call tracking, and cut the junk keywords. 90 days later — $42K/month in new revenue. 10x return."
      />

      <LPFormSection
        heading="Get Your Free Audit"
        subheading="Tell us what you're spending, what's not working, and we'll show you where the money is going."
        benefits={[
          'Full campaign audit with wasted spend breakdown',
          'Competitor keyword analysis',
          'Custom recommendation plan — yours to keep either way',
        ]}
        source="lp_google_ads"
        pageSlug="google-ads-management"
      />

      <FAQSection items={faqItems} />

      {/* ─── Bottom CTA ─── */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
        <div className="max-w-[700px] mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
              Stop Guessing.{' '}
              <span className="text-primary">Start Growing.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium italic mb-8 max-w-lg mx-auto leading-relaxed">
              Worst case — you get a free audit. Best case — you stop wasting money next week.
            </p>
            <Link href="#lp-form">
              <LiquidButton className="px-12 h-16 text-base sm:text-lg tracking-[0.05em] shadow-2xl shadow-primary/20">
                Get My Free Audit
              </LiquidButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <LPFooter />
    </LPLayout>
  );
}
