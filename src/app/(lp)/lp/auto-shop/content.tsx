'use client';

import { LPLayout } from '@/components/lp/LPLayout';
import { LPSplitHero } from '@/components/lp/LPSplitHero';
import { ObjectionBullets } from '@/components/lp/ObjectionBullets';
import { ProcessSteps } from '@/components/lp/ProcessSteps';
import { LPFormSection } from '@/components/lp/LPFormSection';
import { FAQSection } from '@/components/lp/FAQSection';
import { LPNav } from '@/components/lp/LPNav';
import { FounderVideo } from '@/components/lp/FounderVideo';
import { AutomationReel } from '@/components/os/AutomationReel';
import { Wrench } from 'lucide-react';
import { TRACK_RECORD, OS_PRICING } from '@/lib/site';

/* Google Ads LP — "auto repair shop software" keyword theme.
   Message match: the searcher is a shop owner pricing shop management
   systems, tired of per-seat fees and data he doesn't own. Proof point
   stays anonymous per content law: "a real Alexandria European auto shop"
   — never a name. Pricing renders from OS_PRICING only; the money-back
   guarantee was retired 8/14 — the offer line is OS_PRICING.promise, verbatim.
   Harmonized 8/14 to the ad-page audit structure: Cory's named-numbers
   proof directly under the hero, no marketing-era reviews, no PDF magnet,
   public price at the point of commitment. */

const faqItems = [
  {
    question: 'What does it actually replace?',
    answer:
      'The whole stack. Repair orders, estimates, parts, payments, scheduling, and the books. One system, fitted to how your shop already works.',
  },
  {
    question: 'What does it cost?',
    answer: `The price is public: ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Flat. No per-seat fees. Every writer and every tech is included. Month-to-month. Cancel anytime and the system stays yours.`,
  },
  {
    question: 'Do I have to switch off my current shop software on day one?',
    answer:
      'No. The new system runs beside the old one, penny-matched, until you trust it. Nothing switches until you say go.',
  },
  {
    question: 'Do I really own it?',
    answer:
      'Yes. The code and the data are yours, 100%. Nobody rents you your own business back.',
  },
  {
    question: 'Do you take every shop that signs up?',
    answer:
      "No. We fit a handful of new businesses a month, one at a time. The walk-through is where both sides decide. If it's not a fit, we tell you straight.",
  },
  {
    question: "What if it doesn't work out?",
    answer:
      "You leave. It's month-to-month, cancel anytime with 30 days' notice. You keep the code and the data.",
  },
];

export function AutoShopLPContent() {
  return (
    <LPLayout ctaLabel="Let's Talk">
      <LPNav />

      <LPSplitHero
        headline="Auto Repair Shop Software"
        headlineAccent="You Own. No Per-Seat Fees."
        subheadline="Repair orders, parts, payments, and the books. One system, fitted to how your shop really runs. You own it outright. A real European auto shop in Alexandria runs on it today."
        highlight={'“Which declined jobs are worth a win-back text?” Answered from your own repair orders, with prices attached.'}
        highlightIcon={Wrench}
        voiceAgent
        stats={[
          { value: 'Live', label: 'Real systems running now' },
          { value: '$0', label: 'Per-seat fees, ever' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Google rating' },
        ]}
        formHeading="See What Yours Would Look Like"
        formSource="lp_auto_shop"
        formPageSlug="auto-shop"
        formQualify
        formFitGate
        formPrivacyNote={`The price is public: ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. Month-to-month. One job: ${OS_PRICING.promise}`}
      />

      {/* Proof directly under the hero — a named local business and numbers
          too specific to be invented. */}
      <FounderVideo
        eyebrow="Real Local Business. Real Numbers."
        heading="The Biggest Roofer In Cenla"
        headingAccent="Owns His Whole System."
        body="Cory Edwards, Edwards Roofing. The system audited his books to the penny. It found $195,882.75 sitting in open receivables. It caught a $19,000 bookkeeping error his old software never saw. Here's what he says about owning it."
        videoSrc="/cory-ownership-v4.mp4"
        poster="/cory-ownership-poster-v4.jpg"
        founderName="Cory Edwards"
        captionText="Watch the 20-sec clip"
        ctaText="Let's Talk"
        ctaHref="#lp-form"
        secondaryLink={{ label: 'See how Edwards Roofing runs theirs', href: '/case-studies/edwards-roofing' }}
      />

      {/* THE REEL (8/22): one day inside a business on a Found It OS — replaces the screenshot rails */}
      <div className="max-w-[1100px] mx-auto px-4 py-10">
        <AutomationReel />
      </div>

      <ObjectionBullets
        bullets={[
          {
            title: '“I Already Pay For Shop Software.”',
            detail: `Add it up: seat fees, the accounting subscription, the texting add-on, the reports module. You're renting your own shop back, one line item at a time. Here the price is public: ${OS_PRICING.monthly}/mo flat, every writer and tech included. And the system is yours.`,
          },
          {
            title: '“Switching Systems Could Wreck My Shop.”',
            detail:
              "It could. That's why we never cut over. Your new system runs BESIDE your current software, penny-matched every night. The old one stays plugged in until the numbers match and you say go. You never bet the shop on a switch.",
          },
          {
            title: '“What Happens To My Data If I Leave?”',
            detail:
              'You keep it. You always had it. The code and the data are yours from day one: customers, vehicles, repair orders, history, the books.',
          },
          {
            title: '“My Shop Doesn’t Run Like Anyone Else’s.”',
            detail:
              "Good. This is not a template. It's fitted. We walk your shop and learn how work moves, from phone call to picked-up car. Then we build around that. Euro, diesel, tires, general repair. The system bends to the shop, not the other way around.",
          },
        ]}
      />

      <ProcessSteps
        heading="How It Works"
        steps={[
          {
            number: '01',
            title: 'We Walk Your Shop. Free.',
            description:
              'About an hour at your place. We walk the shop with you: the phones, the write-ups, the parts, the books. Then we show you the app we’d build if we owned your shop. You add or take away. We’re deciding too: is this a fit? If not, we tell you straight.',
          },
          {
            number: '02',
            title: 'It Runs Beside Your Old System',
            description:
              'We build it in weeks, not quarters. It runs beside your current shop software, penny-matched every night, until you trust it. Nothing switches until you say go.',
          },
          {
            number: '03',
            title: 'You Own It',
            description: `The code and the data are yours, 100%. ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel}, ${OS_PRICING.setup} ${OS_PRICING.setupLabel}, month-to-month. No long-term contracts. Cancel anytime and the system stays yours.`,
          },
        ]}
      />

      <FAQSection items={faqItems} />

      <LPFormSection
        kicker="Free Walk-Through"
        qualify
        fitGate
        heading="See What Yours Would Look Like"
        subheading="Tell us about your shop. We take a handful of new fittings a month. If yours is a fit, we come walk it, about an hour, at your place. If it's not, we tell you straight."
        benefits={[
          'We come to your shop, in person, free',
          'You see the app we’d build if we owned your shop',
          `The price is public: ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. Flat, no per-seat fees`,
          `Month-to-month. One job: ${OS_PRICING.promise}`,
        ]}
        source="lp_auto_shop"
        pageSlug="auto-shop"
      />
    </LPLayout>
  );
}
