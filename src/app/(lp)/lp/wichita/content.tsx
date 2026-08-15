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
import { AskTheOS } from '@/components/os/AskTheOS';
import { railDesktops, railPhones } from '@/lib/os-screens';
import { MessageSquare } from 'lucide-react';
import { TRACK_RECORD, OS_PRICING } from '@/lib/site';
import { BOOKING_URL } from '@/lib/booking';

/* Wichita, Kansas ad landing page — Tom's territory. Rebuilt 8/13 to the
   same conversion architecture as /lp/walkthrough: the page CONTINUES the
   ad's question instead of restarting the pitch.
     ad promise ("who owes me money?") → hero answers it → Edwards Roofing
     proof w/ real numbers → the touchable demo → the bigger one-system
     reveal → founder → risk reversal → pricing → one CTA.
   One conversion goal: the software map (Tom's video call is the delivery
   mechanism, not the product). No marketing-era reviews, no PDF magnet,
   no exit links on this page. The local promise is Tom on the call; the
   build team behind him is the same one behind every screen on the rail.
   Claims stay inside the doctrine: own the code and data, parallel run
   penny-matched, month-to-month; the money-back guarantee was retired 8/14
   — the offer line is OS_PRICING.promise, verbatim.
   The only numbers allowed: $2,200/$2,000 (OS_PRICING), the 12+ count
   (TRACK_RECORD), 30-minute call, and Cory Edwards' audited figures
   ($195,882.75 receivables / $19,000 error). Never add invoice counts or
   any other detail to them. */

const faqItems = [
  {
    question: 'What actually happens on the call?',
    answer:
      "It's a video call with Tom — we send the link — about 30 minutes, screen-shared. He maps the software we'd build for your business — jobs, estimates, invoices, the books — and shows you what a system built around how you run would answer, like “who owes me money right now?” from your own books. You keep the map.",
  },
  {
    question: "Aren't you a Louisiana company?",
    answer:
      'Found It Software is built in Alexandria, Louisiana — and Tom is our man in Wichita. He runs your video call and maps your business with you; the team behind him is the same one that built every system on this page.',
  },
  {
    question: 'What does it cost?',
    answer: `The price is public: ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Month-to-month — cancel anytime, and the system stays yours.`,
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
    question: "What if it doesn't work out?",
    answer:
      "Then you leave — it's month-to-month, cancel anytime with 30 days' notice, and you keep the code and the data.",
  },
];

export function WichitaLPContent() {
  return (
    // No bookingUrl on LPLayout on purpose: the sticky bar scrolls to the
    // hero FORM now — the form is the primary conversion (8/14 audit).
    <LPLayout ctaLabel="Get My Software Map">
      <LPNav />

      {/* The hero IS the ad's question — an uninterrupted thought from click
          to page. Stats row = the Edwards audit, not generic badges. */}
      <LPSplitHero
        badge="Custom Software Built Around Your Business"
        headline="Who Owes You Money"
        headlineAccent="Right Now?"
        subheadline="Could your current software answer that in five seconds? Ours can. And that's only one question your business could answer. We put your whole operation — customers, jobs, estimates, invoices, the books — into one custom system built around the way you actually work. And you own it. Sign up below and Tom, our man in Wichita, maps yours for you — the map is yours."
        highlight={'“You currently have $195,882.75 in open receivables.” — a real system’s real answer, the day it went through one roofer’s books'}
        highlightIcon={MessageSquare}
        showAward={false}
        showBooking
        bookingSecondary
        bookingLabel="Pick My Time On The Calendar"
        bookingUrl={BOOKING_URL}
        formHeading="Get A Free Software Map Of Your Business"
        formSource="lp_wichita_hero"
        formPageSlug="wichita"
        formSubheading="Name and number. Tom maps the software we would build for your business and walks you through it. The map is yours."
        formCtaLabel="Get My Software Map"
        formCompact
        formSuccessNote="Done — Tom will call you back, usually within 2 hours, to start your map."
        formPrivacyNote="We reply within two hours."
        nextSteps={[
          'Leave your name and number.',
          'Tom calls you back and maps your business with you — live, screen-shared.',
          'You keep the map.',
        ]}
        nextStepsNote="And if you do hire us: the new system runs beside your old one, penny-matched every night, until you say go. Nobody rips anything out on day one."
      />

      {/* Proof directly under the hero — a named business and numbers too
          specific to be invented. Specificity beats skepticism. */}
      <FounderVideo
        eyebrow="Real Business. Real Numbers."
        heading="This Roofer"
        headingAccent="Owns His Whole System."
        body="Cory Edwards, Edwards Roofing. The system audited his books to the penny and found $195,882.75 sitting in open receivables — then caught a $19,000 bookkeeping error his old software never saw. Here's what he says about owning it."
        videoSrc="/cory-ownership-v3.mp4"
        poster="/cory-ownership-poster-v3.jpg"
        founderName="Cory Edwards"
        captionText="Watch the 20-sec clip"
        ctaText="Get My Software Map"
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
            We replace the mess with one system —{' '}
            <span className="text-white font-bold">
              customers → estimates → jobs → invoices → payments → the books
            </span>{' '}
            — built around how you already run. And unlike the software you&rsquo;re renting now,{' '}
            <span className="text-white font-bold">you own it</span>.
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
              You clicked for &ldquo;who owes me money right now?&rdquo; — here&rsquo;s that exact
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
              Want yours to answer? Get your software map →
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
            Customers → estimates → jobs → invoices → the books — one system, built around your
            business, and you own it: the code and the data.{' '}
            <span className="text-white font-bold">
              {TRACK_RECORD.softwareCustomers} businesses
            </span>{' '}
            run on systems we built. These aren&rsquo;t mockups — they&rsquo;re the systems
            themselves:
          </p>
        </div>
        <div className="space-y-5">
          <OsRail items={railDesktops} dir="left" href="#lp-form" size="sm" />
          <OsRail items={railPhones} dir="right" href="#lp-form" size="sm" />
        </div>
      </section>

      {/* The face behind the build team — 27-sec one-take from Trevor. */}
      <FounderVideo
        eyebrow="Meet The Developer"
        heading="27 Seconds From"
        headingAccent="The Guy Who Builds It."
        body="Tom fronts the call — this is the developer behind every screen above. One custom app replaces the subscriptions you're renting, and you own it: the code, the data, everything. Press play, then grab the software map below."
        videoSrc="/founder-intro-v2.mp4"
        poster="/founder-intro-poster-v2.jpg"
        ctaText="Get My Software Map"
        ctaHref="#lp-form"
      />

      <ObjectionBullets
        bullets={[
          {
            title: 'Your old system stays plugged in',
            detail:
              'Your new system runs BESIDE your current software, penny-matched against it every night. The old one stays plugged in until the numbers match and you say go. You never bet the shop on a cutover.',
          },
          {
            title: 'Who sees your numbers',
            detail:
              "Everyone gets their own login, limited to their role. The AI can read your books — it can't write to them. Everything is backed up every night. It's your data, period.",
          },
        ]}
      />

      <ProcessSteps
        heading="How The Software Map Works"
        steps={[
          {
            number: '01',
            title: 'Tom Maps It. Live.',
            description:
              'About 30 minutes on a video call, screen-shared. Tom walks your operation with you — jobs, estimates, invoices, the books. Think your operation’s too complicated? That’s where software thrives — when it gets complicated. Then we put our heads to one question: if we owned your company, what app would we build? We map it out on the call. You add to it or take away. If it’s not for you, you shake hands and keep the map.',
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
            description: `The code and the data are yours, 100%. ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel}, ${OS_PRICING.setup} ${OS_PRICING.setupLabel}, month-to-month — no long-term contracts. Cancel anytime, and the system stays yours.`,
          },
        ]}
      />

      <FAQSection items={faqItems} />

      <LPFormSection
        heading="Let's Map Your Business."
        kicker="Software Map"
        ctaLabel="Get My Software Map"
        mobileFormFirst
        showBooking
        bookingSecondary
        bookingLabel="Pick My Time On The Calendar"
        bookingUrl={BOOKING_URL}
        subheading="Tom maps the software we'd build for your Wichita business — with you, live, screen-shared. You keep the map."
        benefits={[
          'Tom maps your business with you — live, screen-shared',
          'You keep the map: the app we’d build if we owned your company — add to it or take away',
          `The price is public: ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup — no surprises at the end`,
          `Month-to-month. One job: ${OS_PRICING.promise}`,
        ]}
        source="lp_wichita_footer"
        pageSlug="wichita"
      />
    </LPLayout>
  );
}
