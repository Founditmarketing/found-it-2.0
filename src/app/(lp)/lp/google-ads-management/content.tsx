'use client';

import { LPLayout, LPNav, FAQSection, LPFormSection, LPFooter, LPSplitHero, SocialProof, TeamCollageSection, FounderVideo } from '@/components/lp';
import { ObjectionBullets } from '@/components/lp/ObjectionBullets';
import { ProofBlock } from '@/components/lp/ProofBlock';
import { VideoTestimonials } from '@/components/portfolio/VideoTestimonials';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { TrendingUp } from 'lucide-react';
import { TRACK_RECORD } from '@/lib/site';
import { reviews } from '@/lib/reviews';

const ease = [0.16, 1, 0.3, 1] as const;

/** Verbatim Google-review text from the canonical source — never paraphrase. */
const quoteBy = (name: string) => reviews.find((r) => r.name === name)?.quote ?? '';

const faqItems = [
  {
    question: 'How much should I spend on Google Ads?',
    answer: "Most local businesses start between $1,500 and $5,000/month in ad spend. The right number depends on what a customer is worth to you and how fast you want to grow. You'll get specific projections in the free audit.",
  },
  {
    question: 'How fast will I see results?',
    answer: "Most clients see leads in the first week. Real optimization, where your cost per lead drops and lead quality climbs, takes about 60 to 90 days. Anyone promising overnight results is either lying or burning your budget.",
  },
  {
    question: "What's the catch with the free audit?",
    answer: "There isn't one. We review your account, show you where money is leaking, and hand you the plan. If we can't find at least $500 in wasted spend, we send you a $50 gift card for your time. You keep the findings either way.",
  },
  {
    question: 'Who actually manages my account?',
    answer: "A senior strategist, not a junior who Googles the answers. The same person who audits your account is the one optimizing it every week. You'll know exactly who to call.",
  },
  {
    question: 'Do I own my ad account and data?',
    answer: "Yes. We work inside your own Google Ads account. Your campaigns, conversion history, and data are yours. If you ever leave, you keep everything we built.",
  },
  {
    question: 'Is there a contract?',
    answer: "No. Month-to-month, cancel anytime with 30 days notice. We keep clients by getting results, not by locking them in.",
  },
  {
    question: 'What if it just doesn\u2019t work for my business?',
    answer: "Then you fire us, and you keep the account, the data, and everything we built. No long-term lock-in. We only stay if the numbers make sense for you.",
  },
];

export function GoogleAdsLPContent() {
  return (
    <LPLayout ctaLabel="Get My Free Ad Audit">
      <LPNav />

      <LPSplitHero
        headline="Turn Ad Spend Into Customers,"
        headlineAccent="Not Junk Clicks."
        subheadline="Google Ads management by a senior digital marketing team: we audit your account, cut the wasted spend, and rebuild around the leads that actually become customers."
        highlight="One client turned $4,200/mo in ad spend into $42,000/mo in revenue — a 10x return."
        highlightIcon={TrendingUp}
        stats={[
          { value: TRACK_RECORD.socialAccountsManaged, label: 'Local businesses served' },
          { value: '10x', label: 'Best client ROAS' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Google rating' },
        ]}
        formHeading="Get My Free Ad Audit"
        formSource="lp_google_ads"
        formPageSlug="google-ads-management"
      />

      {/* The face behind the ad — 55-sec one-take from Trevor, captions burned in. */}
      <FounderVideo
        eyebrow="Meet The Developer"
        heading="55 Seconds From"
        headingAccent="The Guy Who Builds It."
        body="No sales team, no account manager — you'd be talking to the developer. One custom app replaces the subscriptions you're renting, and you own it: the code, the data, everything. Press play, then grab the free software map below."
        videoSrc="/founder-intro-v1.mp4"
        poster="/founder-intro-poster-v1.jpg"
        orientation="portrait"
        portraitRatio="9 / 16"
        ctaText="Get A Free Software Map"
        ctaHref="#lp-form"
      />

      <SocialProof
        heading="Real owners,"
        headingAccent="real phone calls."
        stats={[
          { value: TRACK_RECORD.socialAccountsManaged, label: 'Local businesses served' },
          { value: `${TRACK_RECORD.yearsInBusiness}`, label: 'Years running ads' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Average Google rating' },
          { value: '0', label: 'Long-term contracts' },
        ]}
        testimonials={[
          { quote: quoteBy('David Roshto'), name: 'David Roshto' },
          { quote: quoteBy('Emanuele Romiti'), name: 'Emanuele Romiti' },
          { quote: quoteBy('William Whiddon'), name: 'William Whiddon' },
        ]}
      />

      {/* Filmed client testimonials — click-to-play, zero video bytes until pressed */}
      <div className="max-w-[1200px] mx-auto px-6">
        <VideoTestimonials />
      </div>

      <ProofBlock
        headline="One Client Turned $4,200/mo Into"
        headlineAccent="$42,000 in New Revenue."
        stats={[
          { value: '$4,200', label: 'Monthly Ad Spend' },
          { value: '$42,000', label: 'Monthly Revenue' },
          { value: '10x', label: 'Return on Ad Spend' },
        ]}
        narrative="They were spending $4,200/month with no idea what was working. We rebuilt their campaigns around their best services, set up real call tracking, and cut the junk keywords. 90 days later: $42K/month in new revenue. 10x return."
      />

      <ObjectionBullets
        bullets={[
          {
            title: 'See Wasted Spend in Week One.',
            detail: "Most clients find money leaking in the very first audit. Real optimization kicks in over the first 60 to 90 days.",
          },
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
            detail: "Tired of faceless agencies hiding behind Zoom? We are based right here, and we'll gladly drive to you and review your strategy in person.",
          },
        ]}
      />

      <TeamCollageSection ctaLabel="Get My Free Ad Audit" />

      <LPFormSection
        heading="Get My Free Ad Audit"
        subheading="You'll get a 5-minute video breakdown of your ad account showing exactly where you're bleeding money, what your competitors are bidding on, and 3 changes you can make today to get cheaper leads."
        benefits={[
          '5-minute video breakdown of your ad account',
          'Actionable list of wasted spend and junk keywords',
          'Guaranteed to find $500 in waste, or we send a $50 gift card',
          '📍 Local to the area? We are 100% willing to do this strategy session in person at your office.',
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
              Worst case, we send you a $50 Amazon gift card for wasting your time. Best case, you stop wasting money next week.
            </p>
            <Link href="#lp-form">
              <LiquidButton className="px-12 h-16 text-base sm:text-lg tracking-[0.05em] shadow-2xl shadow-primary/20">
                Get My Free Ad Audit
              </LiquidButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <LPFooter />
    </LPLayout>
  );
}
