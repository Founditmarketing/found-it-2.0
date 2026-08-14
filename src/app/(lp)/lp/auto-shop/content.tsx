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
import { Wrench } from 'lucide-react';
import { TRACK_RECORD, OS_PRICING } from '@/lib/site';

/* Google Ads LP — "auto repair shop software" keyword theme.
   Message match: the searcher is a shop owner pricing shop management
   systems, tired of per-seat fees and data he doesn't own. Proof point
   stays anonymous per content law: "a real Alexandria European auto shop"
   — never a name. Pricing renders from OS_PRICING only; the guarantee is
   verbatim with no invented conditions.
   Harmonized 8/14 to the ad-page audit structure: Cory's named-numbers
   proof directly under the hero, no marketing-era reviews, no PDF magnet,
   public price at the point of commitment. */

/* Shop-relevant captures drift past first: Tony's + Flywheel screens. */
const isShopScreen = (s: { kind: string }) => /auto|tire/i.test(s.kind);
const shopDesktops = railLeading(railDesktops, isShopScreen);
const shopPhones = railLeading(railPhones, (s) => /flywheel/i.test(s.kind));

const faqItems = [
  {
    question: 'What does it actually replace?',
    answer:
      'The stack. Repair orders, estimates, parts, payments, scheduling, and the books run in one system fitted to how your shop already works — instead of a shop management subscription here, an accounting subscription there, and a card reader that talks to neither. A real European auto shop in Alexandria runs its whole operation on it today.',
  },
  {
    question: 'What does it cost?',
    answer: `The price is public: ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Flat. No per-seat fees, no per-bay fees, no per-location fees — every service writer and every tech is included. Month-to-month. ${OS_PRICING.guarantee}`,
  },
  {
    question: 'Do I have to switch off my current shop software on day one?',
    answer:
      "No. Nothing switches until you say go. Your new system runs beside the old one and gets matched against it — to the penny — until you trust it. Your shop never bets a single repair order on a cutover.",
  },
  {
    question: 'Do I really own it?',
    answer:
      'Yes. The code and the data are yours, 100% — every customer record, every repair order, every invoice. Nobody should rent you your own business back. That is the whole reason Found It Software exists.',
  },
  {
    question: "What if I don't love it?",
    answer: `${OS_PRICING.guarantee} That's the entire guarantee — no fine print to read, because there isn't any.`,
  },
];

export function AutoShopLPContent() {
  return (
    <LPLayout ctaLabel="Get A Free Software Map">
      <LPNav />

      <LPSplitHero
        headline="Auto Repair Shop Software"
        headlineAccent="You Own. No Per-Seat Fees."
        subheadline="Repair orders, parts, payments, and the books — one system fitted to how your shop actually runs, and you own it outright. A real European auto shop in Alexandria runs its whole operation on it today. No per-seat fees. No data held hostage. No 'export request' when you want your own customer list."
        highlight={'“Which declined jobs are worth a win-back text?” — answered from your own repair orders, with prices attached.'}
        highlightIcon={Wrench}
        voiceAgent
        stats={[
          { value: TRACK_RECORD.softwareCustomers, label: 'Local businesses running it' },
          { value: '$0', label: 'Per-seat fees, ever' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Google rating' },
        ]}
        formHeading="Get A Free Software Map"
        formSource="lp_auto_shop"
        formPageSlug="auto-shop"
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

      {/* Not mockups — the systems themselves, shop screens leading */}
      <div className="py-6 space-y-5">
        <OsRail items={shopDesktops} dir="left" href="#lp-form" size="sm" />
        <OsRail items={shopPhones} dir="right" href="#lp-form" size="sm" />
      </div>

      {/* The face behind the ad — 27-sec one-take from Trevor. */}
      <FounderVideo
        eyebrow="Meet The Developer"
        heading="27 Seconds From"
        headingAccent="The Guy Who Builds It."
        body="No sales team, no account manager — you'd be talking to the developer. One custom app replaces the shop-software subscriptions you're renting, and you own it: the code, the data, everything. Press play, then book the free walkthrough below."
        videoSrc="/founder-intro-v2.mp4"
        poster="/founder-intro-poster-v2.jpg"
        ctaText="Get A Free Software Map"
        ctaHref="#lp-form"
      />

      <ObjectionBullets
        bullets={[
          {
            title: '“I Already Pay For Shop Software.”',
            detail: `Add it up: the shop management seat fees, the accounting subscription, the texting add-on, the reports module. You're renting your own operation back, one line item at a time. Here the price is public — ${OS_PRICING.monthly}/mo flat, every writer and every tech included — and the system it buys is yours.`,
          },
          {
            title: '“Switching Systems Could Wreck My Shop.”',
            detail:
              'It could — which is why we never cut over. Your new system runs BESIDE your current software, penny-matched against it every night. The old one stays plugged in until the numbers match and you say go. You never bet the shop on a migration.',
          },
          {
            title: '“What Happens To My Data If I Leave?”',
            detail:
              "You keep it — because you always had it. The code and the data are yours from day one: customers, vehicles, repair orders, history, the books. Nobody rents you your own business back. Cancel any month and the system is still yours.",
          },
          {
            title: '“My Shop Doesn’t Run Like Anyone Else’s.”',
            detail:
              "Good — this isn't configured off a template, it's fitted. We walk your shop, map how work actually moves from phone call to picked-up car, and build around that. Euro specialist, diesel, tires, general repair — the system bends to the shop, not the other way around.",
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
              'About an hour at your place. We walk the operation with you — the phones, the write-ups, the parts ordering, the books — and map the app we’d build if we owned your shop. You add to it or take away. If it’s not for you, we shake hands and you keep the map.',
          },
          {
            number: '02',
            title: 'It Runs Beside Your Old System',
            description:
              'The map becomes your system — fitted in weeks, not quarters. It runs in parallel with your current shop software and gets penny-matched against it every night until you trust it. Nothing switches until you say go.',
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
        kicker="Free Software Map"
        heading="Get A Free Software Map"
        subheading="Drop your name and number. We call, you pick the time, and we come to your shop — about an hour. You keep the map whether you hire us or not. No deck, no pressure, nothing to cancel."
        benefits={[
          'We come to your shop, in person — free',
          'You keep the map: the app we’d build if we owned your shop',
          `The price is public: ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup — flat, no per-seat fees`,
          `Month-to-month. ${OS_PRICING.guarantee}`,
        ]}
        source="lp_auto_shop"
        pageSlug="auto-shop"
      />
    </LPLayout>
  );
}
