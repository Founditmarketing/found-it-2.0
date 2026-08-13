'use client';

import { LPLayout, LPNav, FAQSection, LPFormSection, LPFooter, LPSplitHero, SocialProof, TeamCollageSection, FounderVideo } from '@/components/lp';
import { ObjectionBullets } from '@/components/lp/ObjectionBullets';
import { ProofBlock } from '@/components/lp/ProofBlock';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { ShieldCheck } from 'lucide-react';
import { TRACK_RECORD } from '@/lib/site';
import { reviews } from '@/lib/reviews';

const ease = [0.16, 1, 0.3, 1] as const;

/** Verbatim Google-review text from the canonical source — never paraphrase. */
const quoteBy = (name: string) => reviews.find((r) => r.name === name)?.quote ?? '';

const faqItems = [
  {
    question: 'Do you have experience with industrial and contractor businesses?',
    answer: "Yes. We manage Google Ads for contractors, oilfield service companies, manufacturers, and industrial suppliers. We know your search terms, and we know how to filter out residential leads when you only want commercial work.",
  },
  {
    question: 'How much should I spend on Google Ads?',
    answer: "Most industrial and commercial businesses start between $2,000 and $8,000/month. The right number depends on what a customer is worth to you. You'll get specific projections in the free audit.",
  },
  {
    question: "What's the catch with the free audit?",
    answer: "There isn't one. We review your account, show you where money is leaking, and hand you the plan. If we can't find at least $500 in wasted spend, we send you a $50 gift card for your time. You keep the findings either way.",
  },
  {
    question: 'Who actually manages my account?',
    answer: "A senior strategist, not an intern. The same person who audits your account is the one optimizing it every week, and you'll know exactly who to call.",
  },
  {
    question: 'Do I own my ad account and data?',
    answer: "Yes. We work inside your own Google Ads account. Your campaigns, conversion history, and data are yours, and you keep everything we built if you leave.",
  },
  {
    question: 'Is there a contract?',
    answer: "No. Month-to-month, cancel anytime with 30 days notice. We keep clients by getting results, not by locking them in.",
  },
];

export function LakeCharlesGoogleAdsContent() {
  return (
    <LPLayout ctaLabel="Get My Free Audit">
      <LPNav />

      <LPSplitHero
        badge="Serving Lake Charles & SW Louisiana"
        headline="More Commercial Leads From Google Ads in"
        headlineAccent="Lake Charles."
        subheadline="We run Google Ads for contractors, fabricators, and service businesses across Southwest Louisiana. Real tracking, weekly optimization, no contracts."
        highlight="We'll find at least $500 in wasted spend on your free review, or we send you a $50 gift card."
        highlightIcon={ShieldCheck}
        stats={[
          { value: TRACK_RECORD.socialAccountsManaged, label: 'Local businesses served' },
          { value: '10x', label: 'Best client ROAS' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Google rating' },
        ]}
        formHeading="Get My Free Audit"
        formSource="lp_google_ads_lc"
        formPageSlug="lake-charles-google-ads"
      />

      {/* The face behind the ad — 27-sec one-take from Trevor. */}
      <FounderVideo
        eyebrow="Meet The Developer"
        heading="27 Seconds From"
        headingAccent="The Guy Who Builds It."
        body="No sales team, no account manager — you'd be talking to the developer. One custom app replaces the subscriptions you're renting, and you own it: the code, the data, everything. Press play, then grab the free software map below."
        videoSrc="/founder-intro-v2.mp4"
        poster="/founder-intro-poster-v2.jpg"
        ctaText="Get A Free Software Map"
        ctaHref="#lp-form"
      />

      <SocialProof
        heading="Southwest Louisiana owners,"
        headingAccent="real phone calls."
        stats={[
          { value: TRACK_RECORD.socialAccountsManaged, label: 'Local businesses served' },
          { value: `${TRACK_RECORD.yearsInBusiness}`, label: 'Years running ads' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Average Google rating' },
          { value: '0', label: 'Long-term contracts' },
        ]}
        testimonials={[
          { quote: quoteBy('David Roshto'), name: 'David Roshto' },
          { quote: quoteBy('William Whiddon'), name: 'William Whiddon' },
          { quote: quoteBy('Santos Mendez'), name: 'Santos Mendez' },
        ]}
      />

      <ProofBlock
        headline="One Louisiana Business Turned $4,200/mo Into"
        headlineAccent="$42,000 in New Revenue."
        stats={[
          { value: '$4,200', label: 'Monthly Ad Spend' },
          { value: '$42,000', label: 'Monthly Revenue' },
          { value: '10x', label: 'Return on Ad Spend' },
        ]}
        narrative="They were spending $4,200/month with no idea what was working. We rebuilt their campaigns around their highest-margin services, set up call tracking from first ring to signed contract, and cut the wasted keywords. 90 days later: $42K/month in new revenue."
      />

      <ObjectionBullets
        bullets={[
          {
            title: 'You Own Your Ad Account.',
            detail: "We work inside YOUR Google Ads account. Nothing is held hostage. Ever.",
          },
          {
            title: 'No Contracts. Cancel Anytime.',
            detail: "Month-to-month. 30 days notice. You keep everything we built if you leave.",
          },
          {
            title: '100% Local. We Come To Your Office.',
            detail: "We're just 90 minutes away in Alexandria. We'll gladly drive to your office, shake your hand, and review your strategy in person.",
          },
        ]}
      />

      <TeamCollageSection ctaLabel="Get My Free Audit" />

      <LPFormSection
        heading="Get Your Free Audit"
        subheading="Tell us what you're spending, what's not working, and we'll show you where the money is going."
        benefits={[
          'Full campaign audit with wasted spend breakdown',
          'Competitor keyword analysis for your market',
          'Custom plan, yours to keep either way',
          '📍 Local to Louisiana? We are 100% willing to do this strategy session in person at your office.',
        ]}
        source="lp_google_ads_lc"
        pageSlug="lake-charles-google-ads"
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
              Worst case, you get a free audit. Best case, you stop wasting money next week.
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
