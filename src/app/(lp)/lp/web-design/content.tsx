'use client';

import { LPLayout, LPNav, FAQSection, LPFormSection, LPFooter, LPSplitHero, SocialProof, TeamCollageSection, FounderVideo } from '@/components/lp';
import { ObjectionBullets } from '@/components/lp/ObjectionBullets';
import { ProofBlock } from '@/components/lp/ProofBlock';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { Clock } from 'lucide-react';
import { TRACK_RECORD } from '@/lib/site';
import { reviews } from '@/lib/reviews';

const ease = [0.16, 1, 0.3, 1] as const;

/** Verbatim Google-review text from the canonical source — never paraphrase. */
const quoteBy = (name: string) => reviews.find((r) => r.name === name)?.quote ?? '';

const faqItems = [
  {
    question: 'How long does it take to build?',
    answer: "2 weeks or less from kickoff to launch. Larger sites with custom features may take slightly longer, but you'll get a firm timeline on the first call.",
  },
  {
    question: 'How much does a new website cost?',
    answer: "Most local business sites land in a clear, flat range we'll quote you up front. No hourly surprises, no scope-creep invoices. You'll know the full price before you commit to anything.",
  },
  {
    question: 'Who owns the website?',
    answer: "You do. Your domain, your code, your content, your hosting account. If you ever leave, you take everything. No lock-in, no hostage games.",
  },
  {
    question: 'Will my new site actually show up on Google?',
    answer: "Yes. Every build ships with the technical SEO foundation in place: fast load times, clean structure, mobile-first design, and proper schema. It's built to be found, not just to look good.",
  },
  {
    question: 'Do you write the content and handle photos?',
    answer: "We can. We'll write conversion-focused copy and guide your photos (or arrange them). You approve everything before it goes live.",
  },
  {
    question: 'What if I need changes after launch?',
    answer: "60 days of free post-launch optimization is included. After that, most clients move to a maintenance plan starting at $250/mo. No long-term contracts.",
  },
  {
    question: 'What happens if you miss the launch date?',
    answer: "If your site isn't ready to launch on the date we promise, we take $500 off the final invoice. We put our money where our timeline is.",
  },
];

export function WebDesignLPContent() {
  return (
    <LPLayout ctaLabel="Get My Free Mockup Review">
      <LPNav />

      <LPSplitHero
        headline="Your Website Is Costing You Leads."
        headlineAccent="Let's Fix It."
        subheadline="A fast, modern site that makes your phone ring, built around the way your best customers actually buy."
        highlight="Live in 2 weeks or less, or we take $500 off your final invoice."
        highlightIcon={Clock}
        stats={[
          { value: TRACK_RECORD.socialAccountsManaged, label: 'Local businesses served' },
          { value: '2 wks', label: 'Typical build' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Google rating' },
        ]}
        formHeading="Get My Free Mockup Review"
        formSource="lp_web_design"
        formPageSlug="web-design"
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
        heading="Sites that owners"
        headingAccent="are proud to share."
        stats={[
          { value: TRACK_RECORD.socialAccountsManaged, label: 'Local businesses served' },
          { value: '2 wks', label: 'Typical time to launch' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Average Google rating' },
          { value: '0', label: 'Long-term contracts' },
        ]}
        testimonials={[
          { quote: quoteBy('Justin Morgan'), name: 'Justin Morgan' },
          { quote: quoteBy('Angela'), name: 'Angela' },
          { quote: quoteBy('Boo Wilkerson'), name: 'Boo Wilkerson', business: 'Area Wide Paving' },
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
        narrative="Their old site loaded in 6 seconds on mobile and the contact form was buried 3 clicks deep. We rebuilt from scratch with custom design, fast code, and a clear path to call or request a quote. 90 days later, qualified calls tripled."
      />

      <ObjectionBullets
        bullets={[
          {
            title: 'Live in 2 Weeks or Less, Guaranteed.',
            detail: "If your site isn't ready to launch on the date we promise, we take $500 off the final invoice.",
          },
          {
            title: 'You Own Everything.',
            detail: "Your domain, your code, your content. No lock-in. Leave anytime and take it all with you.",
          },
          {
            title: '60 Days of Free Changes After Launch.',
            detail: "We don't disappear after go-live. Post-launch tweaks and optimization are included.",
          },
          {
            title: '100% Local. We Come To Your Office.',
            detail: "Tired of faceless agencies hiding behind Zoom? We are based right here, and we'll gladly drive to you and review your strategy in person.",
          },
        ]}
      />

      <TeamCollageSection ctaLabel="Get My Free Mockup Review" />

      <LPFormSection
        heading="Get My Free Mockup Review"
        subheading="Tell us about your business and we'll show you what a site that actually converts looks like for your market."
        benefits={[
          'The Competitor Gap Analysis: exactly why your top 3 competitors are outranking and out-converting you.',
          'Your Free Custom Mockup: a designed concept of what your new, high-converting homepage should look like.',
          'No Strings Attached: take our mockup and research to any agency. We just want to prove our value first.',
          '📍 Local to the area? We are 100% willing to do this strategy session in person at your office.',
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
              Make sure you do too. Talk to Trevor, 15 minutes, no pitch, just a straight answer on what your site could be.
            </p>
            <Link href="#lp-form">
              <LiquidButton className="px-12 h-16 text-base sm:text-lg tracking-[0.05em] shadow-2xl shadow-primary/20">
                Get My Free Mockup Review
              </LiquidButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <LPFooter />
    </LPLayout>
  );
}
