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
import { Gauge } from 'lucide-react';
import { TRACK_RECORD, OS_PRICING } from '@/lib/site';

/* Google Ads LP — "parts counter software" keyword theme (outdoor power,
   small engine, ag / equipment dealers — any counter that sells parts off
   supplier price files). THE ONE THING, in the owner's words: every part
   priced from today's supplier cost at MY markup; a STOP at the counter
   before anything sells below cost; price proposals I approve in batches
   by supplier, never one line at a time; QuickBooks stays until I say
   switch. The mechanism is THE GOVERNOR.
   CONTENT LAW: the story is anonymous and qualitative — "a Louisiana
   outdoor-power dealer" whose counter was quoting prices that had not
   changed in fifteen years. No name, no part counts, no proposal counts,
   no dollar figures from any real account. Pricing renders from OS_PRICING
   only; the offer line is OS_PRICING.promise, verbatim. */

const faqItems = [
  {
    question: 'What is The Governor?',
    answer:
      'A floor under every part you sell. Your supplier files load. Every part is priced from today’s cost at your markup. When a part is about to ring below cost, the counter stops and asks. That is the whole thing.',
  },
  {
    question: 'What does it cost?',
    answer: `The price is public: ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel}, setup included. Flat. Every counter seat and every location included. Month-to-month. Cancel anytime and the system stays yours.`,
  },
  {
    question: 'Do I drop QuickBooks on day one?',
    answer:
      'No. QuickBooks stays. The new system runs beside it, penny-matched every night, until you trust it. Nothing switches until you say switch. The counter never stops selling.',
  },
  {
    question: 'Who sees what?',
    answer:
      'Roles. The counter sees the sell price and the stop. The parts manager sees the queue. The owner sees cost, markup, and the totals. Nobody sees more than their job needs.',
  },
  {
    question: 'One of my suppliers only sends PDFs. Does that break it?',
    answer:
      'No. We load what they send. Spreadsheet, CSV, PDF, a price book someone scanned. If a human can read it, we can load it. New files load as they come in.',
  },
  {
    question: 'Do I really own it?',
    answer:
      'Yes. The code and the data are yours, 100%. Nobody rents you your own business back.',
  },
  {
    question: 'Do you take every dealer that signs up?',
    answer:
      "No. We fit a handful of new businesses a month, one at a time. The walk-through is where both sides decide. If it's not a fit, we tell you straight.",
  },
  {
    question: "What if it doesn't work out?",
    answer:
      "You leave. It's month-to-month, cancel anytime with 30 days' notice. You keep the code and the data.",
  },
];

export function PartsCounterLPContent() {
  return (
    <LPLayout ctaLabel="Let's Talk">
      <LPNav />

      <LPSplitHero
        headline="Your Counter Is Selling At 2011 Prices."
        headlineAccent="The Governor Fixes That."
        subheadline="For outdoor power, small engine, ag, and equipment dealers. Every part priced from today’s supplier cost at your markup. A stop at the counter before anything sells below cost. Price changes you approve in batches, by supplier, never one line at a time. QuickBooks stays until you say switch. You own it outright."
        highlight={'A Louisiana outdoor-power dealer’s counter was quoting prices that had not changed in fifteen years. The supplier cost had. Nobody at the counter could tell.'}
        highlightIcon={Gauge}
        voiceAgent
        stats={[
          { value: 'Live', label: 'Real systems running now' },
          { value: 'Today’s', label: 'Cost on every part' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Google rating' },
        ]}
        formHeading="See What Yours Would Look Like"
        formSource="lp_parts_counter"
        formPageSlug="parts-counter"
        formQualify
        formFitGate
        formPrivacyNote={`The price is public: ${OS_PRICING.monthly}/mo, setup included. Month-to-month. One job: ${OS_PRICING.promise}`}
      />

      {/* Proof block directly under the hero stays OFF, same as roofing
          (Trevor 9/5). The story on this page is anonymous by content law. */}

      {/* THE REEL (8/22): one day inside a business on a Found It OS — replaces the screenshot rails */}
      <div className="max-w-[1100px] mx-auto px-4 py-10">
        <AutomationReel />
      </div>

      <ObjectionBullets
        bullets={[
          {
            title: '“I Don’t Want Anybody Touching My Books.”',
            detail:
              'We don’t. QuickBooks stays where it is. The Governor runs beside it, penny-matched every night. When you say switch, you switch. Until then, nothing in your books moves.',
          },
          {
            title: '“Whose Margin Rule Is It?”',
            detail:
              'Yours. You set the markup, by supplier, by line, by category if you want. We never pick a number for you. The system holds the rule you gave it and nothing else.',
          },
          {
            title: '“I Don’t Want The Counter Guy Seeing My Numbers.”',
            detail:
              'He doesn’t. The counter sees a sell price and a stop. Cost, markup, and totals sit behind the owner’s login. Everybody sees exactly their job and nothing past it.',
          },
          {
            title: '“My Suppliers All Send Something Different.”',
            detail:
              'They do. Spreadsheets, CSVs, PDFs, a price book from 2011. Files load as they come. Each one fills the queue for that supplier. You approve the batch. The counter reads the new prices.',
          },
          {
            title: '“I Don’t Want Software Telling My People No.”',
            detail:
              'The stop is a floor, not a lock. When a part is about to sell below cost, the counter stops and asks. Anyone you allow can say yes and ring it. Nothing sells below cost by accident. That is the only rule.',
          },
        ]}
      />

      <ProcessSteps
        heading="How It Works"
        steps={[
          {
            number: '01',
            title: 'Load One Supplier File',
            description:
              'Pick one supplier. Send us the last price file they sent you. We load it. That is the whole first step.',
          },
          {
            number: '02',
            title: 'Set Your Markup',
            description:
              'You tell us the rule. By supplier, by category, by line. It is your number. We type it in once.',
          },
          {
            number: '03',
            title: 'The Queue Fills',
            description:
              'Every part on that file gets a proposed price: today’s cost at your markup. Nothing changes yet. It waits in a queue, by supplier, for you.',
          },
          {
            number: '04',
            title: 'You Approve Batches',
            description:
              'One screen. One supplier. You look at the batch and approve it. Never one line at a time. The next file fills the next queue.',
          },
          {
            number: '05',
            title: 'The Counter Reads Live Prices',
            description: `From then on the counter sells at the price you approved, from today’s cost. Anything about to ring below cost stops and asks. QuickBooks stays until you say switch. ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel}, setup included, month-to-month. You own it.`,
          },
        ]}
      />

      <FAQSection items={faqItems} />

      <LPFormSection
        kicker="Free Walk-Through"
        qualify
        fitGate
        heading="See What Yours Would Look Like"
        subheading="Tell us about your counter. We take a handful of new fittings a month. If yours is a fit, we come walk it, about an hour, at your place. If it's not, we tell you straight."
        benefits={[
          'We come to your dealership, in person, free',
          'You see the app we’d build if we owned your parts counter',
          `The price is public: ${OS_PRICING.monthly}/mo, setup included. Every seat included`,
          `Month-to-month. One job: ${OS_PRICING.promise}`,
        ]}
        source="lp_parts_counter"
        pageSlug="parts-counter"
      />
    </LPLayout>
  );
}
