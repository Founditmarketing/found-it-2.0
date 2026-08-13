'use client';

import { LPLayout } from '@/components/lp/LPLayout';
import { LPSplitHero } from '@/components/lp/LPSplitHero';
import { SocialProof } from '@/components/lp/SocialProof';
import { ObjectionBullets } from '@/components/lp/ObjectionBullets';
import { ProcessSteps } from '@/components/lp/ProcessSteps';
import { LPFormSection } from '@/components/lp/LPFormSection';
import { FAQSection } from '@/components/lp/FAQSection';
import { GuideDownloadSection } from '@/components/lp/GuideDownloadSection';
import { LPNav } from '@/components/lp/LPNav';
import { FounderVideo } from '@/components/lp/FounderVideo';
import { OsRail } from '@/components/os/OsRail';
import { railDesktops, railPhones, railLeading } from '@/lib/os-screens';
import { Scale } from 'lucide-react';
import { TRACK_RECORD, OS_PRICING } from '@/lib/site';
import { reviews } from '@/lib/reviews';

/** Verbatim Google-review text from the canonical source — never paraphrase. */
const quoteBy = (name: string) => reviews.find((r) => r.name === name)?.quote ?? '';

/* Google Ads LP — "roofing business software" / roofing CRM alternative.
   Message match: the searcher's pain is job money scattered across an
   estimate app, an invoice app, and a book nobody trusts. The story is
   ONE ledger, tied to the penny — proven by a real client book audited to
   the cent that surfaced ~$19k of bookkeeping errors. The client stays
   anonymous per content law ("a Louisiana roofing company") — never a
   name, never a number we can't stand behind. Pricing renders from
   OS_PRICING only; the guarantee is verbatim with no invented conditions. */

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
    answer: `The price is public: ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Flat — office and every crew included. Month-to-month. ${OS_PRICING.guarantee}`,
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
    question: "What if I don't love it?",
    answer: `${OS_PRICING.guarantee} That's the entire guarantee — no fine print to read, because there isn't any.`,
  },
];

export function RoofingLPContent() {
  return (
    <LPLayout ctaLabel="Get A Free Software Map">
      <LPNav />

      <LPSplitHero
        headline="Roofing Business Software"
        headlineAccent="That Ties Out To The Penny."
        subheadline="Right now your job money lives in an estimate app, an invoice app, a card reader, and a book nobody fully trusts. This is one ledger instead — every dollar tied to a job, every job tied to the book, checkable to the cent. Fitted to how your crews actually run, and you own it outright."
        highlight={'We audited one Louisiana roofing company’s book to the cent — and surfaced about $19,000 in bookkeeping errors the old software hid.'}
        highlightIcon={Scale}
        stats={[
          { value: TRACK_RECORD.softwareCustomers, label: 'Local businesses running it' },
          { value: 'To the ¢', label: 'How your book ties out' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Google rating' },
        ]}
        formHeading="Get A Free Software Map"
        formSource="lp_roofing"
        formPageSlug="roofing"
      />

      {/* Not mockups — the systems themselves, trade-contractor screens leading */}
      <div className="py-6 space-y-5">
        <OsRail items={tradeDesktops} dir="left" href="#lp-form" size="sm" />
        <OsRail items={tradePhones} dir="right" href="#lp-form" size="sm" />
      </div>

      {/* The face behind the ad — 27-sec one-take from Trevor. */}
      <FounderVideo
        eyebrow="Meet The Developer"
        heading="27 Seconds From"
        headingAccent="The Guy Who Builds It."
        body="No sales team, no account manager — you'd be talking to the developer. One custom app replaces the scatter of subscriptions you're renting, and you own it: the code, the data, everything. Press play, then book the free walkthrough below."
        videoSrc="/founder-intro-v2.mp4"
        poster="/founder-intro-poster-v2.jpg"
        ctaText="Get A Free Software Map"
        ctaHref="#lp-form"
      />

      <SocialProof
        heading="Local contractors"
        headingAccent="run their whole operation on it."
        stats={[
          { value: TRACK_RECORD.softwareCustomers, label: 'Local businesses running it' },
          { value: OS_PRICING.monthly, label: 'Flat, public price' },
          { value: '100%', label: 'Yours — code and data' },
          { value: '0', label: 'Long-term contracts' },
        ]}
        testimonials={[
          { quote: quoteBy('Cory Chandler'), name: 'Cory Chandler' },
          { quote: quoteBy("Everything's Albright"), name: "Everything's Albright" },
          { quote: quoteBy('David Roshto'), name: 'David Roshto' },
        ]}
      />

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
              'About an hour at your shop or your job site. We walk how a job moves from lead to final payment — and map the app we’d build if we owned your roofing company. You add to it or take away. If it’s not for you, we shake hands and you keep the map.',
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
            description: `The code and the data are yours, 100%. ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel}, ${OS_PRICING.setup} ${OS_PRICING.setupLabel}, month-to-month — no long-term contracts. ${OS_PRICING.guarantee}`,
          },
        ]}
      />

      <FAQSection items={faqItems} />

      {/* The lighter ask — "What Do I Get?" gated PDF for visitors not ready
          to book. Distinct source tag keeps guide leads separate. */}
      <GuideDownloadSection page="roofing" />

      <LPFormSection
        heading="Get A Free Software Map"
        subheading="Drop your name and number. We call, you pick the time, and we come to you — about an hour. You keep the map whether you hire us or not. No deck, no pressure, nothing to cancel."
        benefits={[
          'We come to your shop or site, in person — free',
          'You keep the map: the app we’d build if we owned your roofing company',
          `The price is public: ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup — office and crews included`,
          `Month-to-month. ${OS_PRICING.guarantee}`,
        ]}
        source="lp_roofing"
        pageSlug="roofing"
      />
    </LPLayout>
  );
}
