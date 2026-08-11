'use client';

import { LPLayout } from '@/components/lp/LPLayout';
import { LPSplitHero } from '@/components/lp/LPSplitHero';
import { SocialProof } from '@/components/lp/SocialProof';
import { ObjectionBullets } from '@/components/lp/ObjectionBullets';
import { ProcessSteps } from '@/components/lp/ProcessSteps';
import { LPFormSection } from '@/components/lp/LPFormSection';
import { FAQSection } from '@/components/lp/FAQSection';
import { LPNav } from '@/components/lp/LPNav';
import { OsRail } from '@/components/os/OsRail';
import { MessageSquare } from 'lucide-react';
import { TRACK_RECORD, OS_PRICING } from '@/lib/site';
import { reviews } from '@/lib/reviews';

/** Verbatim Google-review text from the canonical source — never paraphrase. */
const quoteBy = (name: string) => reviews.find((r) => r.name === name)?.quote ?? '';

/* Wichita, Kansas ad landing page — Tom's territory. Same doctrine as every
   LP: own the code and data, parallel run penny-matched, month-to-month,
   guarantee rendered from OS_PRICING only. The local promise is Tom at your
   shop; the build team behind him is the same one behind every screen on
   the rail below. */

const railShots = [
  {
    src: '/os-screens/flywheel-os-today-v1.png',
    alt: "Flywheel OS dashboard — the day's quotes, invoices, and profit tiles",
    title: 'Flywheel OS',
    kind: 'Tire & Auto Shop',
  },
  {
    src: '/os-screens/flywheel-os-mobile-quick-v1.png',
    alt: 'Flywheel OS quick quote on a phone — a tire size field with a snap-the-sidewall camera option',
    title: 'The 30-Second Quote',
    kind: 'Flywheel OS',
    portrait: true,
  },
  {
    src: '/os-screens/tonys-shop-os-v1.png',
    alt: 'Tony’s Shop OS dashboard — the parking lot of declined jobs, priced and ready for win-back texts',
    title: 'Tony’s Shop OS',
    kind: 'European Auto Repair',
  },
  {
    src: '/os-screens/brians-foundation-mobile-estimates-v1.png',
    alt: 'Brian’s Foundation Repair OS on a phone — the estimate book with speak-it-in intake',
    title: 'Speak It In',
    kind: 'Brian’s Foundation',
    portrait: true,
  },
  {
    src: '/os-screens/lonestar-os-v1.png',
    alt: 'Lonestar OS desk — sales pipeline from unprocessed to delivered with dollars at every stage',
    title: 'Lonestar OS',
    kind: 'Shed Dealer & Builder',
  },
  {
    src: '/os-screens/procarpet-os-mobile-estimates-v1.png',
    alt: 'Pro Carpet OS estimates on a phone — the ladder chasing every estimate that is out the door',
    title: 'The Ladder',
    kind: 'Pro Carpet OS',
    portrait: true,
  },
  {
    src: '/os-screens/house-system-v1.png',
    alt: 'The House System register — a ticket rung with three lines and a live total',
    title: 'The House System',
    kind: 'Menswear Retail',
  },
];

const faqItems = [
  {
    question: 'What actually happens on the walkthrough?',
    answer:
      'Tom comes to your shop, walks your operation with you, and shows you what a system built around how you run would answer — questions like “who owes me money right now?” answered from your own books. It takes about an hour. No deck, no Zoom link, no obligation.',
  },
  {
    question: "Aren't you a Louisiana company?",
    answer:
      'Found It Software is built in Alexandria, Louisiana — and Tom is our man in Wichita. He walks your operation in person; the team behind him is the same one that built every system on this page.',
  },
  {
    question: 'What does it cost?',
    answer: `The price is public: ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Month-to-month. ${OS_PRICING.guarantee}`,
  },
  {
    question: 'Do I have to switch off my current software on day one?',
    answer:
      "No. Nothing switches until you say go. Your new system runs beside the old one and gets matched against it — to the penny — until you trust it. That's the rule on every fitting we do.",
  },
  {
    question: 'Do I really own it?',
    answer:
      'Yes. The code and the data are yours, 100%. Nobody should rent you your own business back. That is the whole reason Found It Software exists.',
  },
  {
    question: "What if I don't love it?",
    answer: `${OS_PRICING.guarantee} That's the entire guarantee — no fine print to read, because there isn't any.`,
  },
];

export function WichitaLPContent() {
  return (
    <LPLayout ctaLabel="Book My Free Walkthrough">
      <LPNav />

      <LPSplitHero
        headline="Wichita: We'll Come Walk Your Operation."
        headlineAccent="Free."
        subheadline="An AI business system built around how you actually run — jobs, estimates, invoices, scheduling — and you own it outright. The walkthrough is where it starts: Tom shows up at your shop, looks at your operation, and shows you exactly what yours would answer."
        highlight={'Ask it “who owes me money right now?” — you get the list, from your own books.'}
        highlightIcon={MessageSquare}
        stats={[
          { value: TRACK_RECORD.softwareCustomers, label: 'Local businesses running it' },
          { value: '0', label: 'Long-term contracts' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Google rating' },
        ]}
        formHeading="Book My Free Walkthrough"
        formSource="lp_wichita"
        formPageSlug="wichita"
      />

      {/* Not mockups — the systems themselves, drifting past */}
      <div className="py-6">
        <OsRail items={railShots} href="#lp-form" size="sm" />
      </div>

      <SocialProof
        heading="Local owners"
        headingAccent="run their whole operation on it."
        stats={[
          { value: TRACK_RECORD.softwareCustomers, label: 'Local businesses running it' },
          { value: OS_PRICING.monthly, label: 'Flat, public price' },
          { value: '100%', label: 'Yours — code and data' },
          { value: '0', label: 'Long-term contracts' },
        ]}
        testimonials={[
          { quote: quoteBy('Cory Chandler'), name: 'Cory Chandler' },
          { quote: quoteBy('David Roshto'), name: 'David Roshto' },
          { quote: quoteBy('Smith Lake Rentals & Sales'), name: 'Smith Lake Rentals & Sales' },
        ]}
      />

      <ObjectionBullets
        bullets={[
          {
            title: 'You Own It. Code And Data — 100%.',
            detail:
              'Every other software company rents you a seat and keeps the keys. We build the system, hand you the code and the data, and you own them outright. Nobody rents you your own business back.',
          },
          {
            title: 'Nothing Switches Until It Matches To The Penny.',
            detail:
              'Your new system runs BESIDE your current software, checked against it nightly, until the numbers match to the penny and you say go. You never bet the shop on a cutover.',
          },
          {
            title: `Month-To-Month. ${OS_PRICING.guarantee}`,
            detail:
              "No long-term contracts, no lock-in. The guarantee is one sentence with no fine print, because it doesn't need any.",
          },
          {
            title: 'Tom Comes To You.',
            detail:
              'The walkthrough happens at your shop, on your floor, looking at your real operation — with Tom, our man in Wichita. Not on a Zoom call with a sales rep.',
          },
        ]}
      />

      <ProcessSteps
        heading="How The Walkthrough Works"
        steps={[
          {
            number: '01',
            title: 'Tom Walks Your Operation — Free',
            description:
              'About an hour at your place. He looks at how the work actually flows — jobs, estimates, invoices, the books — and shows you what a system fitted to your operation would answer. If it’s not for you, you shake hands and you’ve lost nothing.',
          },
          {
            number: '02',
            title: 'We Fit The System Beside Your Old One',
            description:
              'Built around how you run, fitted in weeks. It runs in parallel with your current software and gets penny-matched against it every night until you trust it. Nothing switches until you say go.',
          },
          {
            number: '03',
            title: 'You Own It',
            description: `The code and the data are yours, 100%. ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel}, ${OS_PRICING.setup} ${OS_PRICING.setupLabel}, month-to-month. ${OS_PRICING.guarantee}`,
          },
        ]}
      />

      <FAQSection items={faqItems} />

      <LPFormSection
        heading="Book My Free Walkthrough"
        subheading="Tell us who you are and Tom will call to set a time to come walk your operation. No deck, no pressure — just your shop and straight answers."
        benefits={[
          'Tom comes to your Wichita shop, in person — free',
          'See what an AI system on YOUR books would answer',
          `Public pricing: ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup — no surprises at the end`,
          `Month-to-month. ${OS_PRICING.guarantee}`,
        ]}
        source="lp_wichita"
        pageSlug="wichita"
      />
    </LPLayout>
  );
}
