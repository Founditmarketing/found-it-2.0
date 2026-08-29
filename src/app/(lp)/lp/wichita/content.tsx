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
import { AskTheOS } from '@/components/os/AskTheOS';
import { MessageSquare } from 'lucide-react';
import { OS_PRICING } from '@/lib/site';
import { BOOKING_URL } from '@/lib/booking';

/* Wichita, Kansas ad landing page — Tom's territory. Rebuilt 8/13 to the
   same conversion architecture as /lp/walkthrough: the page CONTINUES the
   ad's question instead of restarting the pitch.
     ad promise ("who owes me money?") → hero answers it → Edwards Roofing
     proof w/ real numbers → the touchable demo → the bigger one-system
     reveal → risk reversal → pricing → one CTA.
   One conversion goal: the walk-through call, where Tom shows what theirs
   would look like. No marketing-era reviews, no PDF magnet,
   no exit links on this page. The local promise is Tom on the call; the
   build team behind him is the same one behind every screen on the rail.
   Claims stay inside the doctrine: own the code and data, parallel run
   penny-matched, month-to-month; the money-back guarantee was retired 8/14
   — the offer line is OS_PRICING.promise, verbatim.
   The only numbers allowed: $3,000/$2,000 (OS_PRICING), 30-minute call,
   and Cory Edwards' audited figures ($195,882.75 receivables / $19,000
   error). Customer counts retired 8/16 — never reintroduce one. Never add
   invoice counts or any other detail to them. */

const faqItems = [
  {
    question: 'What actually happens on the call?',
    answer:
      "A video call with Tom, about 30 minutes, screen-shared. We send the link. You tell him how your business runs. He shows you what we'd build if it were ours: jobs, estimates, invoices, the books.",
  },
  {
    question: "Aren't you a Louisiana company?",
    answer:
      'Yes. Found It Software is built in Alexandria, Louisiana. Tom is our man in Wichita. He runs your call and walks your business with you. The team behind him built every system on this page.',
  },
  {
    question: 'What does it cost?',
    answer: `The price is public: ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Month-to-month. Cancel anytime and the system stays yours.`,
  },
  {
    question: 'Do I have to switch off my current software on day one?',
    answer:
      "No. The new system runs beside the old one, penny-matched, until you trust it. Nothing switches until you say go. That's the rule on every fitting.",
  },
  {
    question: 'Do I really own it?',
    answer:
      'Yes. The code and the data are yours, 100%. Nobody rents you your own business back.',
  },
  {
    question: 'Do you take everyone who signs up?',
    answer:
      "No. We build one business at a time, a handful of new fittings a month. The call is where both sides decide. If it's not a fit, Tom tells you straight.",
  },
  {
    question: "What if it doesn't work out?",
    answer:
      "You leave. It's month-to-month, cancel anytime with 30 days' notice. You keep the code and the data.",
  },
];

export function WichitaLPContent() {
  return (
    // No bookingUrl on LPLayout on purpose: the sticky bar scrolls to the
    // hero FORM now — the form is the primary conversion (8/14 audit).
    <LPLayout ctaLabel="Let's Talk">
      <LPNav />

      {/* The hero IS the ad's question — an uninterrupted thought from click
          to page. Stats row = the Edwards audit, not generic badges. */}
      <LPSplitHero
        badge="Custom Software Built Around Your Business"
        headline="Who Owes You Money"
        headlineAccent="Right Now?"
        subheadline="Could your current software answer that in five seconds? Ours can. We put your whole operation into one custom system: customers, jobs, estimates, invoices, the books. Built around the way you actually work. And you own it. Sign up below and Tom, our man in Wichita, shows you what yours would look like."
        highlight={'“You currently have $195,882.75 in open receivables.” A real system’s real answer, the day it went through one roofer’s books.'}
        highlightIcon={MessageSquare}
        showAward={false}
        showBooking
        bookingSecondary
        bookingLabel="Pick My Time On The Calendar"
        bookingUrl={BOOKING_URL}
        formHeading="See What Yours Would Look Like"
        formSource="lp_wichita_hero"
        formPageSlug="wichita"
        formSubheading="Name and number. We take a handful of new fittings a month. If yours is a fit, Tom shows you what we'd build. If it's not, he tells you straight."
        formCtaLabel="Let's Talk"
        formCompact
        formQualify
        formFitGate
        formSuccessNote="Done. Tom will call you back."
        formPrivacyNote="We reply within two hours."
        nextSteps={[
          'Leave your name and number.',
          "Tom calls you back. If your business is a fit, he walks it with you live, screen-shared, and shows you what we'd build. If not, he tells you straight.",
          'Free, about thirty minutes. You see what we’d build if it were ours.',
        ]}
        nextStepsNote="And if you do hire us: the new system runs beside your old one, penny-matched every night, until you say go. Nobody rips anything out on day one."
      />

      {/* Proof directly under the hero — a named business and numbers too
          specific to be invented. Specificity beats skepticism. */}
      <FounderVideo
        eyebrow="Real Business. Real Numbers."
        heading="This Roofer"
        headingAccent="Owns His Whole System."
        body="Cory Edwards, Edwards Roofing. The system audited his books to the penny. It found $195,882.75 sitting in open receivables. It caught a $19,000 bookkeeping error his old software never saw. Here's what he says about owning it."
        videoSrc="/cory-ownership-v4.mp4"
        poster="/cory-ownership-poster-v4.jpg"
        founderName="Cory Edwards"
        captionText="Watch the 20-sec clip"
        ctaText="Let's Talk"
        ctaHref="#lp-form"
        secondaryLink={{ label: 'See how Edwards Roofing runs theirs', href: '/case-studies/edwards-roofing' }}
      />

      {/* The mirror — make them say "that's my company" before any mechanism
          talk. Six places → one system (8/14 audit). */}
      <section className="py-14 lg:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.88] text-foreground mb-6">
            How Many Places Does Your Business{' '}
            <span className="text-primary">Live Right Now?</span>
          </h2>
          <p className="text-lg sm:text-xl font-bold text-white/90 leading-relaxed mb-5 [text-wrap:balance]">
            Estimates over here. Jobs somewhere else. Invoices in QuickBooks. Customer history in
            somebody&rsquo;s head. Follow-ups buried in text messages.
          </p>
          <p className="text-muted-foreground font-medium text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            We replace the mess with one system built around how you already run. And unlike the
            software you&rsquo;re renting now, <span className="text-white font-bold">you own it</span>.
          </p>
        </div>
      </section>

      {/* The ad's hook, made touchable: the exact answer the click promised,
          runnable before anyone gives up a phone number. */}
      <section className="py-14 lg:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.88] text-foreground mb-5">
              Ask It. <span className="text-primary">It Answers.</span>
            </h2>
            <p className="text-muted-foreground font-medium text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
              You clicked for &ldquo;who owes me money right now?&rdquo; Here&rsquo;s that exact
              thing. This one runs a demo book. Tap a question. Yours would answer from{' '}
              <span className="text-white font-bold">your own books</span>.
            </p>
          </div>
          <AskTheOS />
          <p className="text-center mt-8">
            <a
              href="#lp-form"
              className="text-primary font-bold uppercase tracking-wide text-sm hover:underline"
            >
              Want yours to answer? See what yours would look like →
            </a>
          </p>
        </div>
      </section>

      {/* The reveal: not another app — THE app. The rail is the proof that
          it exists: real systems from real businesses, not mockups. */}
      <section className="pt-14 lg:pt-20 pb-6">
        <div className="max-w-4xl mx-auto px-4 text-center mb-10">
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
            The Bigger Idea
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.88] text-foreground mb-5">
            This Isn&rsquo;t Another App. It&rsquo;s <span className="text-primary">The App.</span>
          </h2>
          <p className="text-muted-foreground font-medium text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Customers → estimates → jobs → invoices → the books. One system, built around your
            business. You own it: the code and the data.{' '}
            <span className="text-white font-bold">
              Real businesses
            </span>{' '}
            run on systems we built. Here&rsquo;s one day inside one of them, nobody at the
            desk:
          </p>
        </div>
        <div className="max-w-[1100px] mx-auto px-4 pb-6">
          <AutomationReel />
        </div>
      </section>

      <ObjectionBullets
        bullets={[
          {
            title: 'Your old system stays plugged in',
            detail:
              'Your new system runs BESIDE your current software, penny-matched every night, until the numbers match and you say go. You never bet the shop on a switch.',
          },
          {
            title: 'Who sees your numbers',
            detail:
              "Everyone gets their own login, limited to their role. The AI can read your books. It cannot write to them. Everything is backed up every night. It's your data, period.",
          },
        ]}
      />

      <ProcessSteps
        heading="How It Works"
        steps={[
          {
            number: '01',
            title: 'Tom Shows You Yours. Live.',
            description:
              'About 30 minutes on a video call, screen-shared. Tom walks your operation with you: jobs, estimates, invoices, the books. Think yours is too complicated? Complicated is where software shines. Then one question: if we owned your company, what app would we build? Tom shows you on the call. You add or take away. We’re deciding too: is this a fit? If not, Tom tells you straight.',
          },
          {
            number: '02',
            title: 'We Fit The System Beside Your Old One',
            description:
              'We build it in weeks, around how you run. It runs beside your current software, penny-matched every night, until you trust it. Nothing switches until you say go.',
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
        heading="See What Yours Would Look Like."
        kicker="Free Walk-Through"
        qualify
        fitGate
        ctaLabel="Let's Talk"
        mobileFormFirst
        showBooking
        bookingSecondary
        bookingLabel="Pick My Time On The Calendar"
        bookingUrl={BOOKING_URL}
        subheading="Tell us how your Wichita business runs today. Tom shows you what we'd build if it were ours. Free, about thirty minutes, screen-shared. If it's not a fit, he tells you straight."
        benefits={[
          'Tom walks your business with you, live, screen-shared',
          'You see the app we’d build if we owned your company',
          `The price is public: ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. No surprises at the end`,
          `Month-to-month. One job: ${OS_PRICING.promise}`,
        ]}
        source="lp_wichita_footer"
        pageSlug="wichita"
      />
    </LPLayout>
  );
}
