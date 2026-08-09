'use client';

import { LPLayout } from '@/components/lp/LPLayout';
import { LPSplitHero } from '@/components/lp/LPSplitHero';
import { SocialProof } from '@/components/lp/SocialProof';
import { ObjectionBullets } from '@/components/lp/ObjectionBullets';
import { ProcessSteps } from '@/components/lp/ProcessSteps';
import { LPFormSection } from '@/components/lp/LPFormSection';
import { FAQSection } from '@/components/lp/FAQSection';
import { LPNav } from '@/components/lp/LPNav';
import { MessageSquare } from 'lucide-react';
import { TRACK_RECORD, OS_PRICING } from '@/lib/site';
import { reviews } from '@/lib/reviews';

/** Verbatim Google-review text from the canonical source — never paraphrase. */
const quoteBy = (name: string) => reviews.find((r) => r.name === name)?.quote ?? '';

/* Ad-traffic landing page for the Found It OS VSL campaign.
   Every ad in the batch closes on the same sentence — "tap below and we'll
   come walk your operation free" — so the hero repeats that offer verbatim.
   Claims here stay inside the doctrine: own the code and data, parallel run
   penny-matched, month-to-month, guarantee rendered from OS_PRICING only. */

const faqItems = [
  {
    question: 'What actually happens on the walkthrough?',
    answer:
      "Exactly what the ad says. We come to your shop, walk your operation with you, and show you what a system built around how you run would answer — questions like “who owes me money right now?” answered from your own books. It takes about an hour. No deck, no Zoom link, no obligation.",
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

export function WalkthroughLPContent() {
  return (
    <LPLayout ctaLabel="Book My Free Walkthrough">
      <LPNav />

      <LPSplitHero
        headline="We'll Come Walk Your Operation."
        headlineAccent="Free."
        subheadline="An AI business system built around how you actually run — jobs, estimates, invoices, scheduling — and you own it outright. The walkthrough is where it starts: we show up, look at your operation, and show you exactly what yours would answer."
        highlight={'Ask it “who owes me money right now?” — you get the list, from your own books.'}
        highlightIcon={MessageSquare}
        stats={[
          { value: TRACK_RECORD.softwareCustomers, label: 'Local businesses running it' },
          { value: '0', label: 'Long-term contracts' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Google rating' },
        ]}
        formHeading="Book My Free Walkthrough"
        formSource="lp_walkthrough"
        formPageSlug="walkthrough"
      />

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
              "Every other software company rents you a seat and keeps the keys. We build the system, hand you the code and the data, and you own them outright. Nobody rents you your own business back.",
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
            title: 'We Come To You.',
            detail:
              "We're local — Alexandria, Louisiana. The walkthrough happens at your shop, on your floor, looking at your real operation. Not on a Zoom call with a sales rep.",
          },
        ]}
      />

      <ProcessSteps
        heading="How The Walkthrough Works"
        steps={[
          {
            number: '01',
            title: 'We Walk Your Operation — Free',
            description:
              'About an hour at your place. We look at how the work actually flows — jobs, estimates, invoices, the books — and show you what a system fitted to your operation would answer. If it’s not for you, we shake hands and you’ve lost nothing.',
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
        subheading="Tell us who you are and we'll call to set a time to come walk your operation. No deck, no pressure — just your shop and straight answers."
        benefits={[
          'We come to your shop, in person — free',
          'See what an AI system on YOUR books would answer',
          `Public pricing: ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup — no surprises at the end`,
          `Month-to-month. ${OS_PRICING.guarantee}`,
        ]}
        source="lp_walkthrough"
        pageSlug="walkthrough"
      />
    </LPLayout>
  );
}
