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
        subheadline="All those subscriptions you're paying that were never made for you? One app instead — jobs, estimates, invoices, scheduling, the books — fitted to how you actually run, and you own it outright. Tom shows up at your shop, walks your operation with you, and shows you exactly what yours would answer."
        highlight={'Ask it “who owes me money right now?” — names and amounts, from your own books.'}
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
            title: '“This Seems Too Good To Be True.”',
            detail: `Exactly right — it is. The catch is it comes with us: Tom at your shop in person, a public price, and a one-sentence guarantee — ${OS_PRICING.guarantee} No fine print, because it doesn't need any.`,
          },
          {
            title: '“What If It Breaks? We Depend On This.”',
            detail:
              'Your new system runs BESIDE your current software, penny-matched against it every night. The old one stays plugged in until the numbers match and you say go. You never bet the shop on a cutover.',
          },
          {
            title: '“Wait — There’s A Monthly Fee? I Thought I Owned It.”',
            detail:
              "You do own it — the code and the data, 100%, and no long-term contracts. The fee is maintenance: security, updates, and new features, like your phone gets. Our customers stay because they love it, not because they're locked in.",
          },
          {
            title: '“Is It Safe? Who Sees My Numbers?”',
            detail:
              "Everyone gets their own login, limited to their role. The AI can read your books — it can't write to them. Everything is backed up every night. It's your data, period.",
          },
        ]}
      />

      <ProcessSteps
        heading="How The Walkthrough Works"
        steps={[
          {
            number: '01',
            title: 'Tom Walks It. We Map It. Free.',
            description:
              'About an hour at your place. Tom walks the operation with you — jobs, estimates, invoices, the books. Think your operation’s too complicated? That’s where software thrives — when it gets complicated. Then we put our heads to one question: if we owned your company, what app would we build? We map it out. You add to it or take away. If it’s not for you, you shake hands and keep the map. You’ve lost nothing.',
          },
          {
            number: '02',
            title: 'We Fit The System Beside Your Old One',
            description:
              'The map becomes your system — built around how you run, fitted in weeks. It runs in parallel with your current software and gets penny-matched against it every night until you trust it. Nothing switches until you say go.',
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
        heading="Book My Free Walkthrough"
        subheading="Drop your name and number. Tom calls, you pick the time, and he comes to your shop — about an hour. You keep the map whether you hire us or not. No deck, no pressure, nothing to cancel."
        benefits={[
          'Tom comes to your Wichita shop, in person — free',
          'You keep the map: the app we’d build if we owned your company — add to it or take away',
          `The price is public: ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup — no surprises at the end`,
          `Month-to-month. ${OS_PRICING.guarantee}`,
        ]}
        source="lp_wichita"
        pageSlug="wichita"
      />
    </LPLayout>
  );
}
