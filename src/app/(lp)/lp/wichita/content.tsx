'use client';

import { LPLayout } from '@/components/lp/LPLayout';
import { LPSplitHero } from '@/components/lp/LPSplitHero';
import { SocialProof } from '@/components/lp/SocialProof';
import { ObjectionBullets } from '@/components/lp/ObjectionBullets';
import { ProcessSteps } from '@/components/lp/ProcessSteps';
import { LPFormSection } from '@/components/lp/LPFormSection';
import { DigDeeper } from '@/components/lp/DigDeeper';
import { FAQSection } from '@/components/lp/FAQSection';
import { LPNav } from '@/components/lp/LPNav';
import { OsRail } from '@/components/os/OsRail';
import { AskTheOS } from '@/components/os/AskTheOS';
import { railDesktops, railPhones } from '@/lib/os-screens';
import { MessageSquare } from 'lucide-react';
import { TRACK_RECORD, OS_PRICING } from '@/lib/site';
import { BOOKING_URL } from '@/lib/booking';
import { reviews } from '@/lib/reviews';

/** Verbatim Google-review text from the canonical source — never paraphrase. */
const quoteBy = (name: string) => reviews.find((r) => r.name === name)?.quote ?? '';

/* Wichita, Kansas ad landing page — Tom's territory. Offer: a free Zoom call
   where Tom maps the software we'd build for the visitor's business, live and
   screen-shared. Hybrid booking button opens the calendar when BOOKING_URL is
   set (src/lib/booking.ts), else falls back to the leave-your-number form.
   Same doctrine as every LP: own the code and data, parallel run penny-matched,
   month-to-month, guarantee rendered from OS_PRICING only. The local promise is
   Tom on the call with you; the build team behind him is the same one behind
   every screen on the rail below. */

const faqItems = [
  {
    question: 'What actually happens on the call?',
    answer:
      "It's a free Zoom call with Tom, about 30 minutes, screen-shared. He maps the software we'd build for your business — jobs, estimates, invoices, the books — and shows you what a system built around how you run would answer, like “who owes me money right now?” from your own books. You keep the map either way. No deck, no obligation.",
  },
  {
    question: "Aren't you a Louisiana company?",
    answer:
      'Found It Software is built in Alexandria, Louisiana — and Tom is our man in Wichita. He runs your free Zoom and maps your business with you; the team behind him is the same one that built every system on this page.',
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
    <LPLayout ctaLabel="Book My Free Zoom Call" bookingUrl={BOOKING_URL}>
      <LPNav />

      <LPSplitHero
        headline="Wichita: One System That Runs The Whole Shop."
        headlineAccent="You Own It."
        subheadline="Seven subscriptions that were never made for you, replaced by one app built around how you run — jobs, estimates, invoices, the books. Book a free Zoom call and Tom will map the software we'd build for your business, live on the call. You keep the map either way, hire us or don't."
        highlight={'Ask it “who owes me money right now?” — names and amounts, from your own books.'}
        highlightIcon={MessageSquare}
        showAward={false}
        inlineCta
        showBooking
        bookingUrl={BOOKING_URL}
        stats={[
          { value: TRACK_RECORD.softwareCustomers, label: 'Local businesses running it' },
          { value: '0', label: 'Long-term contracts' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Google rating' },
        ]}
        formHeading="Book My Free Zoom Call"
        formSource="lp_wichita_hero"
        formPageSlug="wichita"
        formSubheading="Prefer Tom set it up for you? Leave your name and number — Tom calls, you pick a time for a 30-minute Zoom. Nothing to cancel."
        formCtaLabel="Call Me To Set It Up"
        formCompact
        formSuccessNote="Done. One quick call to pick the time for your Zoom — you choose, Tom maps your business live."
        formPrivacyNote={`${OS_PRICING.guarantee} Free & no obligation — we reply within 2 hours.`}
        nextSteps={[
          'Book the call — pick a time that works.',
          'Tom maps your business on a 30-minute Zoom, screen-shared.',
          "You keep the map. Hire us or don't.",
        ]}
        nextStepsNote="And if you do hire us: the new system runs beside your old one, penny-matched every night, until you say go. Nobody rips anything out on day one."
      />

      {/* Not mockups — the systems themselves, drifting past both ways */}
      <div className="py-6 space-y-5">
        <OsRail items={railDesktops} dir="left" href="#lp-form" size="sm" />
        <OsRail items={railPhones} dir="right" href="#lp-form" size="sm" />
      </div>

      {/* The ad's hook, made touchable: the demo the visitor can run
          themselves before ever giving up a phone number. */}
      <section className="py-14 lg:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.88] text-foreground mb-5">
              Ask It. <span className="text-primary">It Answers.</span>
            </h2>
            <p className="text-muted-foreground font-medium text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
              The ad said &ldquo;who owes me money right now?&rdquo; — here&rsquo;s that exact thing.
              This one runs a demo book. Tap a question. Yours would answer from{' '}
              <span className="text-white font-bold">your own books</span>.
            </p>
          </div>
          <AskTheOS />
          <p className="text-center mt-8">
            <a
              href="#lp-form"
              className="text-primary font-bold uppercase tracking-wide text-sm hover:underline"
            >
              Want yours to answer? Book the free Zoom call →
            </a>
          </p>
        </div>
      </section>

      <SocialProof
        heading={`${TRACK_RECORD.softwareCustomers}+ shops and businesses`}
        headingAccent="run on systems we built."
        stats={[
          { value: TRACK_RECORD.softwareCustomers, label: 'Local businesses running it' },
          { value: OS_PRICING.monthly, label: 'Flat, public price' },
          { value: '100%', label: 'Yours — code and data' },
          { value: '0', label: 'Long-term contracts' },
        ]}
        testimonials={[{ quote: quoteBy('Cory Chandler'), name: 'Cory Chandler' }]}
      />

      <ObjectionBullets
        bullets={[
          {
            title: '“This Seems Too Good To Be True.”',
            detail: `Exactly right — it is. The catch is it comes with us: Tom on a Zoom with you, a public price, and a one-sentence guarantee — ${OS_PRICING.guarantee} No fine print, because it doesn't need any.`,
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
        heading="How The Free Zoom Call Works"
        steps={[
          {
            number: '01',
            title: 'Tom Maps It. Live. Free.',
            description:
              'About 30 minutes on Zoom, screen-shared. Tom walks your operation with you — jobs, estimates, invoices, the books. Think your operation’s too complicated? That’s where software thrives — when it gets complicated. Then we put our heads to one question: if we owned your company, what app would we build? We map it out on the call. You add to it or take away. If it’s not for you, you shake hands and keep the map. You’ve lost nothing.',
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
        heading="Book My Free Zoom Call"
        kicker="Free Zoom Call"
        ctaLabel="Call Me To Set It Up"
        mobileFormFirst
        showBooking
        bookingUrl={BOOKING_URL}
        subheading="Book a free Zoom call and Tom will map the software we'd build for your Wichita business — live, on the call. You keep the map either way, hire us or don't. Prefer Tom set it up? Just leave your number below."
        benefits={[
          'A free 30-minute Zoom with Tom — we map your business live, screen-shared',
          'You keep the map: the app we’d build if we owned your company — add to it or take away',
          `The price is public: ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup — no surprises at the end`,
          `Month-to-month. ${OS_PRICING.guarantee}`,
        ]}
        source="lp_wichita_footer"
        pageSlug="wichita"
      />

      <DigDeeper />
    </LPLayout>
  );
}
