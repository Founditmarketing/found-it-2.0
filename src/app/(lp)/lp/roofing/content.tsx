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

/* Trade-contractor captures drift past first: foundation, carpet, field ops. */
const isTradeScreen = (s: { kind: string }) => /contractor|carpet|windmill/i.test(s.kind);
const tradeDesktops = railLeading(railDesktops, isTradeScreen);
const tradePhones = railLeading(railPhones, (s) => /foundation|carpet|field/i.test(s.kind));

const faqItems = [
  {
    question: 'Is the $19,000 story real?',
    answer:
      "Yes. A Louisiana roofing company moved its book into a system we built and we audited it against the old software line by line, to the cent. About $19,000 in bookkeeping errors surfaced — entries dropped, doubled, or miscategorized — that the old tools had quietly absorbed. That audit isn't a sales stunt; penny-matching the old book is a standard part of every fitting.",
  },
  {
    question: 'What does it replace?',
    answer:
      'The scatter. Estimates, invoices, payments, job costs, crew scheduling, and the book itself live in one system — every dollar tied to a job, every job tied to the ledger. No more re-typing an estimate into an invoice app and hoping the book catches up at tax time.',
  },
  {
    question: 'What does it cost?',
    answer: `The price is public: ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Flat — office and every crew included. Month-to-month — cancel anytime, and the system stays yours.`,
  },
  {
    question: 'Do I have to drop my current CRM on day one?',
    answer:
      'No. Nothing switches until you say go. Your new system runs beside whatever you use now and gets matched against it — to the penny — until you trust it. Jobs keep moving the whole time.',
  },
  {
    question: 'Do I really own it?',
    answer:
      'Yes. The code and the data are yours, 100% — every job, every customer, every dollar of history. Nobody should rent you your own business back. That is the whole reason Found It Software exists.',
  },
  {
    question: 'Do you take every company that signs up?',
    answer:
      "No. Systems get fitted one business at a time — a handful of new fittings a month — so the walk-through is where both sides decide whether this is a fit. If it isn't, we tell you straight, tell you what we'd do instead, and you keep the map.",
  },
  {
    question: "What if it doesn't work out?",
    answer:
      "Then you leave — it's month-to-month, cancel anytime with 30 days' notice, and you keep the code and the data.",
  },
];

export function RoofingLPContent() {
  return (
    <LPLayout ctaLabel="Get A Free Software Map">
      <LPNav />

      <LPSplitHero
        headline="Where'd The Job Money Go?"
        headlineAccent="Roofing Software That Knows."
        subheadline="Right now your job money lives in an estimate app, an invoice app, a card reader, and a book nobody fully trusts. This is one ledger instead — every dollar tied to a job, every job tied to the book, checkable to the cent. Fitted to how your crews actually run, and you own it outright."
        highlight={'We audited one Louisiana roofing company’s book to the cent — and surfaced about $19,000 in bookkeeping errors the old software hid.'}
        highlightIcon={Scale}
        voiceAgent
        stats={[
          { value: 'Live', label: 'Real systems running now' },
          { value: 'To the ¢', label: 'How your book ties out' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Google rating' },
        ]}
        formHeading="Get A Free Software Map"
        formSource="lp_roofing"
        formPageSlug="roofing"
        formQualify
        formPrivacyNote={`The price is public: ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. Month-to-month. One job: ${OS_PRICING.promise}`}
      />

      {/* Proof directly under the hero — he's a ROOFER on the roofing page:
          the strongest possible match of proof to visitor. */}
      <FounderVideo
        eyebrow="Real Local Roofer. Real Numbers."
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

      {/* Not mockups — the systems themselves, trade-contractor screens leading */}
      <div className="py-6 space-y-5">
        <OsRail items={tradeDesktops} dir="left" href="#lp-form" size="sm" />
        <OsRail items={tradePhones} dir="right" href="#lp-form" size="sm" />
      </div>

      <ObjectionBullets
        bullets={[
          {
            title: '“My Numbers Live In Five Different Places.”',
            detail:
              'An estimate app, an invoice app, a card reader, a spreadsheet, and QuickBooks — and none of them agree. Here there is one ledger. Every estimate, invoice, payment, and cost lands against its job, and the book is the sum of the jobs. When the numbers disagree, the system tells you — not your accountant, next April.',
          },
          {
            title: '“I Don’t Trust Software With My Money.”',
            detail:
              "Don't trust it — check it. Your new ledger runs BESIDE your current book and gets penny-matched against it every night until they agree. That audit is how one Louisiana roofing company surfaced about $19,000 in errors its old software had been hiding. The system earns trust before it earns the job.",
          },
          {
            title: '“Roofing CRMs Lock You In.”',
            detail:
              "They rent you a login and hold your job history hostage. This one you own — the code and the data, 100%, month-to-month, no long-term contract. Leave any month and everything is still yours. Nobody rents you your own business back.",
          },
          {
            title: '“My Crews Won’t Touch New Software.”',
            detail:
              "It's built phones-first, around how your crews already work — not around a training manual. Photos, job status, and payments from the driveway. If a step doesn't match how your crews run, we refit the step. The system bends to the crew, not the other way around.",
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
              'About an hour at your shop or your job site. We walk how a job moves from lead to final payment — and map the app we’d build if we owned your roofing company. You add to it or take away. And we’re deciding the same thing you are: whether this is a fit. If it isn’t — either direction — we tell you straight, tell you what we’d do instead, and you keep the map.',
          },
          {
            number: '02',
            title: 'One Ledger, Penny-Matched Beside Your Book',
            description:
              'The map becomes your system — every job dollar in one ledger, fitted in weeks. It runs in parallel with your current book and gets matched against it to the cent, every night, until you trust it. Nothing switches until you say go.',
          },
          {
            number: '03',
            title: 'You Own It',
            description: `The code and the data are yours, 100%. ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel}, ${OS_PRICING.setup} ${OS_PRICING.setupLabel}, month-to-month — no long-term contracts. Cancel anytime, and the system stays yours.`,
          },
        ]}
      />

      <FAQSection items={faqItems} />

      <LPFormSection
        kicker="Free Software Map"
        qualify
        heading="Get A Free Software Map"
        subheading="Tell us about your operation. We take a handful of new fittings a month — if yours is a fit, we come walk it, about an hour, at your shop or your site. If it's not, we'll tell you straight. You keep the map either way."
        benefits={[
          'We come to your shop or site, in person — free',
          'You keep the map: the app we’d build if we owned your roofing company',
          `The price is public: ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup — office and crews included`,
          `Month-to-month. One job: ${OS_PRICING.promise}`,
        ]}
        source="lp_roofing"
        pageSlug="roofing"
      />
    </LPLayout>
  );
}
