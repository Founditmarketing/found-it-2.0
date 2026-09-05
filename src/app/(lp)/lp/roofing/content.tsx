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
import { Scale } from 'lucide-react';
import { TRACK_RECORD, OS_PRICING } from '@/lib/site';

/* Google Ads LP — "roofing business software" / roofing CRM alternative.
   Message match: the searcher's pain is job money scattered across an
   estimate app, an invoice app, and a book nobody trusts. The story is
   ONE ledger, tied to the penny — proven by a real client book audited to
   the cent that surfaced ~$19k of bookkeeping errors. The client stays
   anonymous per content law ("a Louisiana roofing company") — never a
   name, never a number we can't stand behind. Pricing renders from
   OS_PRICING only; the money-back guarantee was retired 8/14 — the offer
   line is OS_PRICING.promise, verbatim. */

const faqItems = [
  {
    question: 'Is the $19,000 story real?',
    answer:
      "Yes. A Louisiana roofing company moved its book into our system. We audited it against the old software, line by line, to the cent. About $19,000 in errors surfaced: entries dropped, doubled, or filed wrong. That audit is not a stunt. We penny-match the old book on every fitting.",
  },
  {
    question: 'What does it replace?',
    answer:
      'The scatter. Estimates, invoices, payments, job costs, crew scheduling, and the book live in one system. No more re-typing the same job into three apps.',
  },
  {
    question: 'What does it cost?',
    answer: `The price is public: ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Flat. Office and every crew included. Month-to-month. Cancel anytime and the system stays yours.`,
  },
  {
    question: 'Do I have to drop my current CRM on day one?',
    answer:
      'No. The new system runs beside whatever you use now, penny-matched, until you trust it. Nothing switches until you say go. Jobs keep moving the whole time.',
  },
  {
    question: 'Do I really own it?',
    answer:
      'Yes. The code and the data are yours, 100%. Nobody rents you your own business back.',
  },
  {
    question: 'Do you take every company that signs up?',
    answer:
      "No. We fit a handful of new businesses a month, one at a time. The walk-through is where both sides decide. If it's not a fit, we tell you straight.",
  },
  {
    question: "What if it doesn't work out?",
    answer:
      "You leave. It's month-to-month, cancel anytime with 30 days' notice. You keep the code and the data.",
  },
];

export function RoofingLPContent() {
  return (
    <LPLayout ctaLabel="Let's Talk">
      <LPNav />

      <LPSplitHero
        headline="Where'd The Job Money Go?"
        headlineAccent="Roofing Software That Knows."
        subheadline="Right now your job money lives in an estimate app, an invoice app, a card reader, and a book nobody trusts. This is one ledger instead. Every dollar tied to a job. Every job tied to the book, checkable to the cent. Fitted to how your crews run. You own it outright."
        highlight={'We audited one Louisiana roofing company’s book to the cent. It surfaced about $19,000 in errors the old software hid.'}
        highlightIcon={Scale}
        voiceAgent
        stats={[
          { value: 'Live', label: 'Real systems running now' },
          { value: 'To the ¢', label: 'How your book ties out' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Google rating' },
        ]}
        formHeading="See What Yours Would Look Like"
        formSource="lp_roofing"
        formPageSlug="roofing"
        formQualify
        formFitGate
        formPrivacyNote={`The price is public: ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. Month-to-month. One job: ${OS_PRICING.promise}`}
      />

      {/* Proof directly under the hero — he's a ROOFER on the roofing page:
          the strongest possible match of proof to visitor. */}
      {/* Cory proof block OFF (Trevor 9/5) */}

      {/* THE REEL (8/22): one day inside a business on a Found It OS — replaces the screenshot rails */}
      <div className="max-w-[1100px] mx-auto px-4 py-10">
        <AutomationReel />
      </div>

      <ObjectionBullets
        bullets={[
          {
            title: '“My Numbers Live In Five Different Places.”',
            detail:
              'Here there is one ledger. Every estimate, invoice, payment, and cost lands on its job. The book is the sum of the jobs. When numbers disagree, the system tells you. Not your accountant, next April.',
          },
          {
            title: '“I Don’t Trust Software With My Money.”',
            detail:
              "Don't trust it. Check it. Your new ledger runs BESIDE your current book, penny-matched every night, until they agree. That audit is how one Louisiana roofing company found about $19,000 in errors. The system earns trust before it earns the job.",
          },
          {
            title: '“Roofing CRMs Lock You In.”',
            detail:
              'They rent you a login and hold your job history hostage. This one you own: the code and the data, 100%. Leave any month and everything is still yours.',
          },
          {
            title: '“My Crews Won’t Touch New Software.”',
            detail:
              "It's built phones-first, around how your crews already work. Photos, job status, and payments from the driveway. If a step doesn't fit your crews, we refit the step. The system bends to the crew, not the other way around.",
          },
        ]}
      />

      <ProcessSteps
        heading="How It Works"
        steps={[
          {
            number: '01',
            title: 'We Walk Your Operation. Free.',
            description:
              'About an hour at your shop or job site. We walk how a job moves from lead to final payment. Then we show you the app we’d build if we owned your roofing company. You add or take away. We’re deciding too: is this a fit? If not, we tell you straight.',
          },
          {
            number: '02',
            title: 'One Ledger, Penny-Matched Beside Your Book',
            description:
              'We build it in weeks. Every job dollar in one ledger. It runs beside your current book, matched to the cent every night, until you trust it. Nothing switches until you say go.',
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
        subheading="Tell us about your operation. We take a handful of new fittings a month. If yours is a fit, we come walk it, about an hour, at your shop or your site. If it's not, we tell you straight."
        benefits={[
          'We come to your shop or site, in person, free',
          'You see the app we’d build if we owned your roofing company',
          `The price is public: ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. Office and crews included`,
          `Month-to-month. One job: ${OS_PRICING.promise}`,
        ]}
        source="lp_roofing"
        pageSlug="roofing"
      />
    </LPLayout>
  );
}
