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
   switch. The mechanism is THE GOVERNOR (named only in the FAQ; the
   hero names the category). Claims track what ships: markup rules by
   supplier / category / global (no per-line scope), supplier loads are
   spreadsheet or CSV, the counter role hides totals/balances/queue, and
   the to-the-cent match is the books mirror, not the pricing engine.
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
      'No. QuickBooks stays. The new system runs beside it, and your books are matched to the cent before anything switches. Nothing switches until you say switch. The counter never stops selling.',
  },
  {
    question: 'Who sees what?',
    answer:
      'Roles. The counter sees the part, its price, and the stop. The parts manager sees the queue. Totals, balances, and the approval queue sit behind the owner’s login. Nobody sees more than their job needs.',
  },
  {
    question: 'My suppliers all send different files. Does that break it?',
    answer:
      'No. Spreadsheet or CSV, whatever format they send it in, loads as it comes. Each supplier’s file fills that supplier’s queue. If one of yours only sends a PDF price book, bring the file to the walk-through. That is a fitting question and we answer it in the room.',
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
        headline="Your Counter Is Selling At Fifteen-Year-Old Prices."
        headlineAccent="Parts Counter Software That Prices From Today’s Cost."
        subheadline="Every part priced from today’s supplier cost at your markup. A stop at the counter before anything sells below cost. QuickBooks stays until you say switch. You own it outright."
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
              'We don’t. QuickBooks stays where it is. The system runs beside it, and your books are matched to the cent before anything switches. When you say switch, you switch. Until then, nothing in your books moves.',
          },
          {
            title: '“Whose Margin Rule Is It?”',
            detail:
              'Yours. You set the markup, by supplier, by category, or one number for everything. We never pick a number for you. The system holds the rule you gave it and nothing else.',
          },
          {
            title: '“I Don’t Want The Counter Guy Seeing My Numbers.”',
            detail:
              'He doesn’t. The counter sees the part, its price, and the stop. Your totals, your balances, and your approval queue sit behind the owner’s login. Everybody sees exactly their job and nothing past it.',
          },
          {
            title: '“My Suppliers All Send Something Different.”',
            detail:
              'They do. Spreadsheet or CSV, whatever format they send, or a price book nobody has touched in fifteen years. Files load as they come. Each one fills the queue for that supplier. You approve the batch. The counter reads the new prices.',
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
            title: 'We Walk Your Counter. Free.',
            description:
              'About an hour at your dealership. We walk how a part goes from the supplier file to the ticket. Then we show you the app we’d build if we owned your parts counter. You add or take away. We’re deciding too: is this a fit? If not, we tell you straight.',
          },
          {
            number: '02',
            title: 'One Supplier File. Your Markup.',
            description:
              'Pick one supplier. Send us the last price file they sent you. We load it. You tell us the rule: by supplier, by category, or one number for everything. We type it in once. Every part on that file gets a proposed price, today’s cost at your markup, and waits in a queue for you.',
          },
          {
            number: '03',
            title: 'You Approve The Batch. The Counter Reads Live Prices.',
            description:
              'One screen. One supplier. You look at the batch and approve it. Never one line at a time. From then on the counter sells at the price you approved, from today’s cost. Anything about to ring below cost stops and asks. QuickBooks stays until you say switch.',
          },
          {
            number: '04',
            title: 'You Own It',
            description: `The code and the data are yours, 100%. ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel}, setup included, month-to-month. No long-term contracts. Cancel anytime and the system stays yours.`,
          },
        ]}
      />

      <FAQSection items={faqItems} />

      <LPFormSection
        kicker="Free Walk-Through"
        qualify
        fitGate
        heading="See What Yours Would Look Like"
        subheading="Outdoor power, small engine, ag, and equipment dealers. Tell us about your counter. We take a handful of new fittings a month. If yours is a fit, we come walk it, about an hour, at your place. If it's not, we tell you straight."
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
