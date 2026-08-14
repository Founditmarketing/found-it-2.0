'use client';

import { LPLayout } from '@/components/lp/LPLayout';
import { LPSplitHero } from '@/components/lp/LPSplitHero';
import { ObjectionBullets } from '@/components/lp/ObjectionBullets';
import { ProcessSteps } from '@/components/lp/ProcessSteps';
import { LPFormSection } from '@/components/lp/LPFormSection';
import { FAQSection } from '@/components/lp/FAQSection';
import { LPNav } from '@/components/lp/LPNav';
import { FounderVideo } from '@/components/lp/FounderVideo';
import { OsRail } from '@/components/os/OsRail';
import { railDesktops, railPhones, railLeading } from '@/lib/os-screens';
import { ShieldCheck } from 'lucide-react';
import { TRACK_RECORD, OS_PRICING } from '@/lib/site';

/* Google Ads LP — "dealership management software" keyword theme
   (equipment / outdoor power / trailer dealers, NOT car lots).
   Message match: the searcher's pain is stale part prices — QuickBooks
   costs frozen years ago, distributor price files never loaded, the
   counter quoting below cost without knowing. The story is the margin
   governor. Pricing renders from OS_PRICING only; the guarantee is
   verbatim with no invented conditions; Cory Edwards is the one named
   client (his numbers are sanctioned on-page).
   Harmonized 8/14 to the ad-page audit structure: Cory's named-numbers
   proof directly under the hero, no marketing-era reviews, no PDF magnet,
   public price at the point of commitment. */

/* Dealer-relevant captures drift past first: sales-pipeline + quote screens. */
const isDealerScreen = (s: { kind: string }) => /dealer|tire/i.test(s.kind);
const dealerDesktops = railLeading(railDesktops, isDealerScreen);
const dealerPhones = railLeading(railPhones, (s) => /flywheel/i.test(s.kind));

const faqItems = [
  {
    question: 'What exactly is the margin governor?',
    answer:
      "A floor under every part you sell. Your distributor cost files load into the system automatically, every part reprices at the margin you set, and the counter physically cannot ring a sale below cost — the system won't let it happen. No more discovering at year-end that the counter had been quoting off prices from years ago.",
  },
  {
    question: 'Our part prices in QuickBooks are years old. Is that a problem?',
    answer:
      "It's the normal starting point — most dealerships we walk are quoting off whatever cost QuickBooks last saw, sometimes 15 years ago. Loading your current distributor price files and repricing the catalog at your margin is part of the fitting. That's what the setup fee pays for.",
  },
  {
    question: 'What does it cost?',
    answer: `The price is public: ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Flat — every counter seat, every location included. Month-to-month. ${OS_PRICING.guarantee}`,
  },
  {
    question: 'Do I have to switch off my current system on day one?',
    answer:
      'No. Nothing switches until you say go. Your new system runs beside the old one and gets matched against it — to the penny — until you trust it. The counter never stops selling while we fit it.',
  },
  {
    question: 'Do I really own it?',
    answer:
      'Yes. The code and the data are yours, 100% — inventory, part history, customers, the books. Nobody should rent you your own business back. That is the whole reason Found It Software exists.',
  },
  {
    question: "What if I don't love it?",
    answer: `${OS_PRICING.guarantee} That's the entire guarantee — no fine print to read, because there isn't any.`,
  },
];

export function DealershipLPContent() {
  return (
    <LPLayout ctaLabel="Get A Free Software Map">
      <LPNav />

      <LPSplitHero
        headline="Quoting 15-Year-Old Prices?"
        headlineAccent="Dealer Software That Knows Cost."
        subheadline="For equipment, outdoor power, and trailer dealers still quoting off part prices QuickBooks last saw years ago. Your distributor price files load automatically, every part reprices at your margin, and the counter cannot ring a sale below cost. One system — parts, sales, service, the books — fitted to your dealership, and you own it outright."
        highlight={'A distributor price file lands → every part on your shelf reprices at your margin. Automatically.'}
        highlightIcon={ShieldCheck}
        voiceAgent
        stats={[
          { value: TRACK_RECORD.softwareCustomers, label: 'Local businesses running it' },
          { value: '0', label: 'Below-cost sales allowed' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Google rating' },
        ]}
        formHeading="Get A Free Software Map"
        formSource="lp_dealership"
        formPageSlug="dealership"
        formPrivacyNote={`The price is public: ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. Month-to-month. ${OS_PRICING.guarantee}`}
      />

      {/* Proof directly under the hero — a named local business and numbers
          too specific to be invented. */}
      <FounderVideo
        eyebrow="Real Local Business. Real Numbers."
        heading="The Biggest Roofer In Cenla"
        headingAccent="Owns His Whole System."
        body="Cory Edwards, Edwards Roofing. The system audited his books to the penny and found $195,882.75 sitting in open receivables — then caught a $19,000 bookkeeping error his old software never saw. Here's what he says about owning it."
        videoSrc="/cory-ownership-v3.mp4"
        poster="/cory-ownership-poster-v3.jpg"
        founderName="Cory Edwards"
        captionText="Watch the 20-sec clip"
        ctaText="Get A Free Software Map"
        ctaHref="#lp-form"
        secondaryLink={{ label: 'See how Edwards Roofing runs theirs', href: '/case-studies/edwards-roofing' }}
      />

      {/* Not mockups — the systems themselves, dealer screens leading */}
      <div className="py-6 space-y-5">
        <OsRail items={dealerDesktops} dir="left" href="#lp-form" size="sm" />
        <OsRail items={dealerPhones} dir="right" href="#lp-form" size="sm" />
      </div>

      {/* The face behind the ad — 27-sec one-take from Trevor. */}
      <FounderVideo
        eyebrow="Meet The Developer"
        heading="27 Seconds From"
        headingAccent="The Guy Who Builds It."
        body="No sales team, no account manager — you'd be talking to the developer. One custom app replaces the dealership-software subscriptions you're renting, and you own it: the code, the data, everything. Press play, then book the free walkthrough below."
        videoSrc="/founder-intro-v2.mp4"
        poster="/founder-intro-poster-v2.jpg"
        ctaText="Get A Free Software Map"
        ctaHref="#lp-form"
      />

      <ObjectionBullets
        bullets={[
          {
            title: '“Our Part Prices Are 15 Years Old.”',
            detail:
              "That's exactly who this is built for. Most dealerships quote off whatever cost the system last saw — and every stale price is margin walking out the door. We load your current distributor files during the fitting, reprice the whole catalog at your margin, and from then on the floor holds itself.",
          },
          {
            title: '“Nobody Here Has Time To Load Price Files.”',
            detail:
              "Nobody should. The price files your distributors send — spreadsheets, CSVs, portal downloads — load automatically. When a distributor moves cost, your prices move with it, at your margin. The counter never quotes off a stale number again, and no one at your dealership had to type anything.",
          },
          {
            title: '“We Can’t Stop The Counter To Switch Systems.”',
            detail:
              'You never stop. Your new system runs BESIDE the old one, penny-matched against it every night. The counter keeps ringing sales on the system it knows until the numbers match and you say go. You never bet the dealership on a cutover.',
          },
          {
            title: '“I’ve Been Burned By Dealer Software Before.”',
            detail:
              `Most dealer platforms rent you a seat and hold your data. This one you own — the code and the data, 100%, month-to-month, no long-term contract. Nobody rents you your own business back. And the guarantee is one sentence: ${OS_PRICING.guarantee}`,
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
              'About an hour at your place. We walk the counter, the yard, the service bay, and the books with you — and map the app we’d build if we owned your dealership. You add to it or take away. If it’s not for you, we shake hands and you keep the map.',
          },
          {
            number: '02',
            title: 'We Load Your Costs. It Runs Beside The Old System.',
            description:
              'Your distributor price files load in, every part reprices at your margin, and the whole system runs in parallel with your current setup — penny-matched against it every night until you trust it. Nothing switches until you say go.',
          },
          {
            number: '03',
            title: 'You Own It',
            description: `The code and the data are yours, 100%. ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel}, ${OS_PRICING.setup} ${OS_PRICING.setupLabel}, month-to-month — no long-term contracts. ${OS_PRICING.guarantee}`,
          },
        ]}
      />

      <FAQSection items={faqItems} />

      <LPFormSection
        heading="Get A Free Software Map"
        subheading="Drop your name and number. We call, you pick the time, and we come to your dealership — about an hour. You keep the map whether you hire us or not. No deck, no pressure, nothing to cancel."
        benefits={[
          'We come to your dealership, in person — free',
          'You keep the map: the app we’d build if we owned your dealership',
          `The price is public: ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup — every seat included`,
          `Month-to-month. ${OS_PRICING.guarantee}`,
        ]}
        source="lp_dealership"
        pageSlug="dealership"
      />
    </LPLayout>
  );
}
