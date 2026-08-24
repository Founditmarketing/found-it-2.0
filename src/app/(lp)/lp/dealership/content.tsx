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
import { ShieldCheck } from 'lucide-react';
import { TRACK_RECORD, OS_PRICING } from '@/lib/site';

/* Google Ads LP — "dealership management software" keyword theme
   (equipment / outdoor power / trailer dealers, NOT car lots).
   Message match: the searcher's pain is stale part prices — QuickBooks
   costs frozen years ago, distributor price files never loaded, the
   counter quoting below cost without knowing. The story is the margin
   governor. Pricing renders from OS_PRICING only; the money-back guarantee
   was retired 8/14 (the offer line is OS_PRICING.promise, verbatim); Cory
   Edwards is the one named client (his numbers are sanctioned on-page).
   Harmonized 8/14 to the ad-page audit structure: Cory's named-numbers
   proof directly under the hero, no marketing-era reviews, no PDF magnet,
   public price at the point of commitment. */

const faqItems = [
  {
    question: 'What exactly is the margin governor?',
    answer:
      'A floor under every part you sell. Your distributor cost files load automatically. Every part reprices at your margin. The counter cannot ring a sale below cost.',
  },
  {
    question: 'Our part prices in QuickBooks are years old. Is that a problem?',
    answer:
      "It's the normal starting point. We load your current price files and reprice the catalog at your margin during the fitting. That's what the setup fee pays for.",
  },
  {
    question: 'What does it cost?',
    answer: `The price is public: ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Flat. Every counter seat and location included. Month-to-month. Cancel anytime and the system stays yours.`,
  },
  {
    question: 'Do I have to switch off my current system on day one?',
    answer:
      'No. The new system runs beside the old one, penny-matched, until you trust it. Nothing switches until you say go. The counter never stops selling.',
  },
  {
    question: 'Do I really own it?',
    answer:
      'Yes. The code and the data are yours, 100%. Nobody rents you your own business back.',
  },
  {
    question: 'Do you take every dealership that signs up?',
    answer:
      "No. We fit a handful of new businesses a month, one at a time. The walk-through is where both sides decide. If it's not a fit, we tell you straight.",
  },
  {
    question: "What if it doesn't work out?",
    answer:
      "You leave. It's month-to-month, cancel anytime with 30 days' notice. You keep the code and the data.",
  },
];

export function DealershipLPContent() {
  return (
    <LPLayout ctaLabel="Let's Talk">
      <LPNav />

      <LPSplitHero
        headline="Quoting 15-Year-Old Prices?"
        headlineAccent="Dealer Software That Knows Cost."
        subheadline="For equipment, outdoor power, and trailer dealers quoting off part prices QuickBooks last saw years ago. Your distributor price files load automatically. Every part reprices at your margin. The counter cannot ring a sale below cost. One system for parts, sales, service, and the books. You own it outright."
        highlight={'A distributor price file lands → every part on your shelf reprices at your margin. Automatically.'}
        highlightIcon={ShieldCheck}
        voiceAgent
        stats={[
          { value: 'Live', label: 'Real systems running now' },
          { value: '0', label: 'Below-cost sales allowed' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Google rating' },
        ]}
        formHeading="See What Yours Would Look Like"
        formSource="lp_dealership"
        formPageSlug="dealership"
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
            title: '“Our Part Prices Are 15 Years Old.”',
            detail:
              "That's who this is built for. Every stale price is margin walking out the door. We load your current distributor files, reprice the whole catalog at your margin, and the floor holds itself from then on.",
          },
          {
            title: '“Nobody Here Has Time To Load Price Files.”',
            detail:
              'Nobody should. The price files your distributors send load automatically. When a distributor moves cost, your prices move with it, at your margin. Nobody types a thing.',
          },
          {
            title: '“We Can’t Stop The Counter To Switch Systems.”',
            detail:
              'You never stop. Your new system runs BESIDE the old one, penny-matched every night. The counter keeps ringing sales on the system it knows until you say go. You never bet the dealership on a switch.',
          },
          {
            title: '“I’ve Been Burned By Dealer Software Before.”',
            detail:
              "Most dealer platforms rent you a seat and hold your data. This one you own: the code and the data, 100%. Month-to-month. Leave with 30 days' notice and everything is still yours.",
          },
        ]}
      />

      <ProcessSteps
        heading="How It Works"
        steps={[
          {
            number: '01',
            title: 'We Walk Your Dealership. Free.',
            description:
              'About an hour at your place. We walk the counter, the yard, the service bay, and the books. Then we show you the app we’d build if we owned your dealership. You add or take away. We’re deciding too: is this a fit? If not, we tell you straight.',
          },
          {
            number: '02',
            title: 'We Load Your Costs. It Runs Beside The Old System.',
            description:
              'Your price files load in. Every part reprices at your margin. The whole system runs beside your current setup, penny-matched every night, until you trust it. Nothing switches until you say go.',
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
        subheading="Tell us about your dealership. We take a handful of new fittings a month. If yours is a fit, we come walk it, about an hour, at your place. If it's not, we tell you straight."
        benefits={[
          'We come to your dealership, in person, free',
          'You see the app we’d build if we owned your dealership',
          `The price is public: ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. Every seat included`,
          `Month-to-month. One job: ${OS_PRICING.promise}`,
        ]}
        source="lp_dealership"
        pageSlug="dealership"
      />
    </LPLayout>
  );
}
