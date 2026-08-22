'use client';

import { LPLayout } from '@/components/lp/LPLayout';
import { LPSplitHero } from '@/components/lp/LPSplitHero';
import { ObjectionBullets } from '@/components/lp/ObjectionBullets';
import { ProcessSteps } from '@/components/lp/ProcessSteps';
import { LPFormSection } from '@/components/lp/LPFormSection';
import { FounderVideo } from '@/components/lp/FounderVideo';
import { FAQSection } from '@/components/lp/FAQSection';
import { LPNav } from '@/components/lp/LPNav';
import { OsRail } from '@/components/os/OsRail';
import { AskTheOS } from '@/components/os/AskTheOS';
import { VoiceAgentWidget } from '@/components/lp/VoiceAgentWidget';
import { FounderByline } from '@/components/FounderByline';
import { railDesktops, railPhones } from '@/lib/os-screens';
import { MessageSquare, type LucideIcon } from 'lucide-react';
import { OS_PRICING, MAP_VALUE } from '@/lib/site';
import { BOOKING_URL } from '@/lib/booking';

/* One template for every hook-test ad LP (walkthrough architecture, 8/14).
   ONLY the hero copy and the attribution tags vary per page — everything
   after the hero is the audited, reviewed funnel: form-primary conversion,
   Edwards proof, pain mirror, touchable demo + the voice secretary, the
   rails, mechanism, price at the FAQ. Adding a new hook to
   test = one thin content.tsx passing hero copy, never a copied page.
   Claims stay inside the doctrine: the money-back guarantee was retired
   8/14 (the offer line is OS_PRICING.promise, verbatim),
   sanctioned numbers only ($2,200/$2,000, 30-minute call, Cory Edwards'
   $195,882.75 / $19,000 — customer counts retired 8/16, never reintroduce
   one), no "Zoom" anywhere — the booking page delivers Google Meet, so
   copy says "video call".
   POSTURE (8/16): selective, not begging. The scarcity is real and stated
   as plain fact — builds happen one business at a time, a handful of new
   fittings a month — never fabricated (no counters, no "slots left"). The
   map stays free and theirs either way; whether we build it is a separate
   conversation, decided by both sides.
   THE GATE (8/16): the map is no longer open to anyone — the fit check is
   step one of getting it. Both form slots render the quiz (formFitGate /
   fitGate); qualified gets the form and the calendar, NOT A FIT gets the
   kind dismissal and no capture. */

export interface AdLpHero {
  badge?: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
  highlight?: string;
  highlightIcon?: LucideIcon;
}

interface AdLpTemplateProps {
  hero: AdLpHero;
  /** Route slug — drives voice-lead + page attribution, e.g. 'walkthrough'. */
  slug: string;
  /** Attribution prefix, e.g. 'lp_walkthrough' → lp_walkthrough_hero/_footer. */
  sourcePrefix: string;
  /** she-answers hook (8/15): the AI secretary IS the ad's promise, so she
   *  moves into the hero — first screen on every phone. The mid-page widget
   *  section is skipped so one page never mounts her twice. The 8/14 audit
   *  demoted her from heroes when she captured nothing; she captures now
   *  (capture_lead + after-call form + text fallback), so this is a fair
   *  re-test scoped to pages that opt in. */
  voiceHero?: boolean;
}

const faqItems = [
  {
    question: 'What actually happens on the call?',
    answer:
      "It's a video call — we send the link — about 30 minutes, screen-shared. We map the software we'd build for your business — jobs, estimates, invoices, the books — and show you what a system built around how you run would answer, like “who owes me money right now?” from your own books. You keep the map.",
  },
  {
    question: 'What does it cost?',
    answer: `The price is public: ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Month-to-month — cancel anytime, and the system stays yours.`,
  },
  {
    question: 'Do I have to switch off my current software on day one?',
    answer:
      "No. Nothing switches until you say go. Your new system runs beside the old one, and every night the two sets of books get compared — invoice by invoice — until you trust it. That's the rule on every fitting we do.",
  },
  {
    question: 'Do I really own it?',
    answer:
      'Yes. The code and the data are yours, 100%. Nobody should rent you your own business back. That is the whole reason Found It Software exists.',
  },
  {
    question: "If I own it, why is there a monthly fee?",
    answer: `You're not paying for permission to use your own software. The ${OS_PRICING.monthly} covers hosting, nightly backups, support you can actually call, and new features as your business grows. Stop paying and the work stops — not your software. The code and your data stay yours.`,
  },
  {
    question: 'Do you take everyone who signs up?',
    answer:
      "No. Systems get built one business at a time, and we take a handful of new fittings a month — so the call is where both sides decide whether this is a fit. If it isn't, we tell you straight, tell you what we'd do instead, and you keep the map.",
  },
  {
    question: "What if it doesn't work out?",
    answer:
      "Then you leave — it's month-to-month, cancel anytime with 30 days' notice. The system keeps running, and your customer list, invoices, and books go with you.",
  },
];

export function AdLpTemplate({ hero, slug, sourcePrefix, voiceHero = false }: AdLpTemplateProps) {
  return (
    // No bookingUrl on LPLayout on purpose: the sticky bar scrolls to the
    // hero FORM — the form is the primary conversion (8/14 audit).
    <LPLayout ctaLabel="Get My Software Map">
      <LPNav />

      <LPSplitHero
        badge={hero.badge ?? 'Custom Software Built Around Your Business'}
        headline={hero.headline}
        headlineAccent={hero.headlineAccent}
        subheadline={hero.subheadline}
        highlight={
          hero.highlight ??
          '“You currently have $195,882.75 in open receivables.” — a real system’s real answer, the day it went through one roofer’s books'
        }
        highlightIcon={hero.highlightIcon ?? MessageSquare}
        showAward={false}
        showBooking
        bookingSecondary
        bookingLabel="Pick My Time On The Calendar"
        bookingUrl={BOOKING_URL}
        formHeading="Get A Free Software Map Of Your Business"
        formSource={`${sourcePrefix}_hero`}
        formPageSlug={slug}
        formSubheading={`Name and number. We build one business at a time and take a handful of new fittings a month — if yours is a fit, we map the software we'd build for it, and ${MAP_VALUE.line}. Here, it's yours either way.`}
        formCtaLabel="Get My Software Map"
        formCompact
        formQualify
        formFitGate
        formSuccessNote="Done — we'll call you back, usually within 2 hours, to start your map."
        formPrivacyNote="We reply within two hours."
        voiceAgent={voiceHero}
        nextSteps={[
          'Leave your name and number.',
          "We call you back. If your business is a fit, we map it with you — live, screen-shared. If it isn't, we tell you straight, and tell you what we'd do instead.",
          'You keep the map either way.',
        ]}
        nextStepsNote="And if you do hire us: the new system runs beside your old one, penny-matched every night, until you say go. Nobody rips anything out on day one."
      />

      {/* The face (8/19): the byline, not the pitch — the 8/14 order that
          pulled the founder self-pitch video stands; Cory below is the proof,
          Trevor is the author who signs it. */}
      <div className="max-w-3xl mx-auto px-4 -mt-2 mb-6">
        <FounderByline
          align="center"
          line="Builds every system himself — and he’s the one who calls you back."
        />
      </div>

      {/* Proof directly under the hero — a named local business and numbers
          too specific to be invented. Specificity beats skepticism. */}
      <FounderVideo
        eyebrow="Real Local Business. Real Numbers."
        heading="The Biggest Roofer In Cenla"
        headingAccent="Owns His Whole System."
        body="Cory Edwards, Edwards Roofing. The system audited his books to the penny and found $195,882.75 sitting in open receivables — then caught a $19,000 bookkeeping error his old software never saw. Here's what he says about owning it."
        videoSrc="/cory-ownership-v4.mp4"
        poster="/cory-ownership-poster-v4.jpg"
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

      {/* The ad's hook, made touchable: runnable before anyone gives up a
          phone number. */}
      <section className="py-14 lg:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.88] text-foreground mb-5">
              Ask It. <span className="text-primary">It Answers.</span>
            </h2>
            <p className="text-muted-foreground font-medium text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
              &ldquo;Who owes me money right now?&rdquo; — here&rsquo;s that exact thing. This one
              runs a demo book. Tap a question. Yours would answer from{' '}
              <span className="text-white font-bold">your own books</span>.
            </p>
          </div>
          <AskTheOS />

          {/* HER — same demo, out loud. Out of the hero (8/14 audit): above
              the fold she out-competed the form while capturing nothing;
              down here she closes — she takes a message mid-call, and if the
              clock beats her the widget asks for the number itself.
              (voiceHero pages mount her in the hero instead — never twice.) */}
          {!voiceHero && (
            <div className="mt-12 max-w-xl mx-auto">
              <p className="text-center text-sm sm:text-base font-bold text-white/80 mb-4 [text-wrap:balance]">
                Rather talk than tap? Every system comes with an AI secretary who answers,
                schedules estimates, and enters customers herself —{' '}
                <span className="text-primary">try ours live.</span>
              </p>
              <VoiceAgentWidget pageSlug={slug} />
            </div>
          )}

          <p className="text-center mt-10">
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
          it exists: real systems from real local businesses, not mockups. */}
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
            business, and you own it outright.{' '}
            <span className="text-white font-bold">
              Real local businesses
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

      <ObjectionBullets
        bullets={[
          {
            title: 'Your old system stays plugged in',
            detail:
              'You keep working your old system exactly like today — the new one fills itself alongside it, and we check the two against each other every night. Nothing switches until the numbers match and you say go. You never bet the shop on a cutover.',
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
            title: 'We Map It. Live.',
            description:
              'About 30 minutes on a video call, screen-shared. We walk your operation with you — jobs, estimates, invoices, the books. Think your operation’s too complicated? That’s where software thrives — when it gets complicated. Then we put our heads to one question: if we owned your company, what app would we build? We map it out on the call. You add to it or take away. And we’re deciding the same thing you are: whether this is a fit. If it isn’t — either direction — we tell you straight, tell you what we’d do instead, and you keep the map.',
          },
          {
            number: '02',
            title: 'We Fit The System Beside Your Old One',
            description:
              'The map becomes your system — built around how you run, fitted in weeks. It runs in parallel with your current software — same jobs, same totals on both screens — until you trust it. Nothing switches until you say go.',
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
        qualify
        fitGate
        ctaLabel="Get My Software Map"
        mobileFormFirst
        showBooking
        bookingSecondary
        bookingLabel="Pick My Time On The Calendar"
        bookingUrl={BOOKING_URL}
        subheading="We map the software we'd build for your business — with you, live, screen-shared. The map is free and you keep it. Whether we build it is a separate conversation."
        benefits={[
          'We map your business with you — live, screen-shared',
          'You keep the map: the app we’d build if we owned your company — add to it or take away',
          "A handful of new fittings a month, one business at a time — if it's not a fit, we tell you straight",
          `The price is public: ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup — no surprises at the end`,
          `Month-to-month. One job: ${OS_PRICING.promise}`,
        ]}
        source={`${sourcePrefix}_footer`}
        pageSlug={slug}
      />
    </LPLayout>
  );
}
