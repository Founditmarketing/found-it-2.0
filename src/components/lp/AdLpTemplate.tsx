'use client';

import { LPLayout } from '@/components/lp/LPLayout';
import { LPSplitHero } from '@/components/lp/LPSplitHero';
import { ObjectionBullets } from '@/components/lp/ObjectionBullets';
import { ProcessSteps } from '@/components/lp/ProcessSteps';
import { LPFormSection } from '@/components/lp/LPFormSection';
import { FounderVideo } from '@/components/lp/FounderVideo';
import { FAQSection } from '@/components/lp/FAQSection';
import { LPNav } from '@/components/lp/LPNav';
import { AskTheOS } from '@/components/os/AskTheOS';
import { AutomationReel } from '@/components/os/AutomationReel';
import { VoiceAgentWidget } from '@/components/lp/VoiceAgentWidget';
import { FounderByline } from '@/components/FounderByline';
import { MessageSquare, type LucideIcon } from 'lucide-react';
import { OS_PRICING } from '@/lib/site';
import { BOOKING_URL } from '@/lib/booking';

/* One template for every hook-test ad LP (walkthrough architecture, 8/14).
   ONLY the hero copy and the attribution tags vary per page — everything
   after the hero is the audited, reviewed funnel: form-primary conversion,
   Edwards proof, pain mirror, touchable demo + the voice secretary, the
   rails, mechanism, price at the FAQ. Adding a new hook to
   test = one thin content.tsx passing hero copy, never a copied page.
   Claims stay inside the doctrine: the money-back guarantee was retired
   8/14 (the offer line is OS_PRICING.promise, verbatim),
   sanctioned numbers only ($3,000/$2,000, 30-minute call, Cory Edwards'
   $195,882.75 / $19,000 — customer counts retired 8/16, never reintroduce
   one), no "Zoom" anywhere — the booking page delivers Google Meet, so
   copy says "video call".
   POSTURE (8/16): selective, not begging. The scarcity is real and stated
   as plain fact — builds happen one business at a time, a handful of new
   fittings a month — never fabricated (no counters, no "slots left"). The
   walkthrough is free either way; whether we build it is a separate
   conversation, decided by both sides.
   THE GATE (8/16): the walkthrough is not open to anyone — the fit check is
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
      "A video call, about 30 minutes, screen-shared. We send the link. We walk your business with you. Jobs, estimates, invoices, the books. Then we show you what we'd build if it were ours.",
  },
  {
    question: 'What does it cost?',
    answer: `The price is public: ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel} plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Month-to-month. Cancel anytime. The system stays yours.`,
  },
  {
    question: 'Do I have to switch off my current software on day one?',
    answer:
      "No. Your new system runs beside your old one. Every night we match the two books, invoice by invoice, until you trust it. Nothing switches until you say go.",
  },
  {
    question: 'Do I really own it?',
    answer:
      'Yes. The code and the data are yours, 100%. Nobody should rent you your own business back.',
  },
  {
    question: "If I own it, why is there a monthly fee?",
    answer: `The ${OS_PRICING.monthly} covers hosting, nightly backups, real support, and new features as you grow. Stop paying and the work stops, not your software. The code and your data stay yours.`,
  },
  {
    question: 'Do you take everyone who signs up?',
    answer:
      "No. We build one business at a time, a handful of new fittings a month. On the call, both sides decide if this is a fit. If it's not a fit, we tell you straight.",
  },
  {
    question: "What if it doesn't work out?",
    answer:
      "You leave. It's month-to-month, cancel anytime with 30 days' notice. The system keeps running. Your customers, invoices, and books go with you.",
  },
];

export function AdLpTemplate({ hero, slug, sourcePrefix, voiceHero = false }: AdLpTemplateProps) {
  return (
    // No bookingUrl on LPLayout on purpose: the sticky bar scrolls to the
    // hero FORM — the form is the primary conversion (8/14 audit).
    <LPLayout ctaLabel="Let's Talk">
      <LPNav />

      <LPSplitHero
        badge={hero.badge ?? 'Custom Software Built Around Your Business'}
        headline={hero.headline}
        headlineAccent={hero.headlineAccent}
        subheadline={hero.subheadline}
        highlight={
          hero.highlight ??
          '“You currently have $195,882.75 in open receivables.” A real system said that, the day it read one roofer’s books.'
        }
        highlightIcon={hero.highlightIcon ?? MessageSquare}
        showAward={false}
        showBooking
        bookingSecondary
        bookingLabel="Pick My Time On The Calendar"
        bookingUrl={BOOKING_URL}
        formHeading="See What Yours Would Look Like"
        formSource={`${sourcePrefix}_hero`}
        formPageSlug={slug}
        formSubheading="Name and number. We build one business at a time. If yours is a fit, we show you what we'd build if it were ours. Free, about thirty minutes, screen-shared. If it's not a fit, we tell you straight."
        formCtaLabel="Let's Talk"
        formCompact
        formQualify
        formFitGate
        formSuccessNote="Done. Trevor calls you back to set up your walkthrough."
        formPrivacyNote="No spam, no list. One human replies."
        voiceAgent={voiceHero}
        nextSteps={[
          'Leave your name and number.',
          "We call you back. If it's a fit, we walk your business with you live and show you what we'd build if it were ours.",
          "If it's not a fit, we tell you straight.",
        ]}
        nextStepsNote="If you hire us, the new system runs beside your old one, penny-matched every night, until you say go. Nobody rips anything out on day one."
      />

      {/* The face (8/19): the byline, not the pitch — the 8/14 order that
          pulled the founder self-pitch video stands; Cory below is the proof,
          Trevor is the author who signs it. */}
      <div className="max-w-3xl mx-auto px-4 -mt-2 mb-6">
        <FounderByline
          align="center"
          line="He’s the one who calls you back."
        />
      </div>

      {/* Proof directly under the hero — a named local business and numbers
          too specific to be invented. Specificity beats skepticism. */}
      <FounderVideo
        eyebrow="Real Local Business. Real Numbers."
        heading="The Biggest Roofer In Cenla"
        headingAccent="Owns His Whole System."
        body="Cory Edwards, Edwards Roofing. His system found $195,882.75 sitting in open receivables. It caught a $19,000 bookkeeping error his old software never saw. Here's what he says about owning it."
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
            We replace the mess with one system.{' '}
            <span className="text-white font-bold">
              Customers → estimates → jobs → invoices → payments → the books.
            </span>{' '}
            Built around how you already run. And unlike the software you&rsquo;re renting now,{' '}
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
              &ldquo;Who owes me money right now?&rdquo; Try it here. This one runs a demo book.
              Tap a question. Yours would answer from{' '}
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
                Rather talk than tap? Every system comes with an AI secretary. She answers,
                schedules estimates, and enters customers herself.{' '}
                <span className="text-primary">Try ours live.</span>
              </p>
              <VoiceAgentWidget pageSlug={slug} />
            </div>
          )}

          <p className="text-center mt-10">
            <a
              href="#lp-form"
              className="text-primary font-bold uppercase tracking-wide text-sm hover:underline"
            >
              Want yours to answer? Let&apos;s talk →
            </a>
          </p>
        </div>
      </section>

      {/* The reveal: not another app — THE app. The reel is the proof:
          one day inside a business on a Found It OS, nobody at the desk. */}
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
            business. You own it outright.{' '}
            <span className="text-white font-bold">
              Real local businesses
            </span>{' '}
            run on systems we built. Here&rsquo;s one day inside one, nobody at the desk:
          </p>
        </div>
        {/* THE REEL (8/19): automations in motion, not dashboards at rest. */}
        <div className="max-w-[1100px] mx-auto px-4 pb-6">
          <AutomationReel />
        </div>
      </section>

      <ObjectionBullets
        bullets={[
          {
            title: 'Your old system stays plugged in',
            detail:
              'You keep working your old system like today. The new one fills itself beside it. We check the two against each other every night. Nothing switches until the numbers match and you say go.',
          },
          {
            title: 'Who sees your numbers',
            detail:
              "Everyone gets their own login, limited to their role. The AI can read your books. It can't write to them. Everything is backed up every night. It's your data, period.",
          },
        ]}
      />

      <ProcessSteps
        heading="How The Fitting Works"
        steps={[
          {
            number: '01',
            title: 'We Walk It. Live.',
            description:
              "About 30 minutes on a video call, screen-shared. We walk your business with you. Jobs, estimates, invoices, the books. Think yours is too complicated? Complicated is where software shines. Then one question: if we owned your company, what app would we build? We show you on the call. You add to it or take away. If it's not a fit, we tell you straight.",
          },
          {
            number: '02',
            title: 'We Fit The System Beside Your Old One',
            description:
              'What we showed you becomes your system, built around how you run, fitted in weeks. It runs beside your current software, same jobs, same totals on both screens, until you trust it. Nothing switches until you say go.',
          },
          {
            number: '03',
            title: 'You Own It',
            description: `The code and the data are yours, 100%. ${OS_PRICING.monthly} ${OS_PRICING.monthlyLabel}, ${OS_PRICING.setup} ${OS_PRICING.setupLabel}, month-to-month. Cancel anytime. The system stays yours.`,
          },
        ]}
      />

      <FAQSection items={faqItems} />

      <LPFormSection
        heading="See What Yours Would Look Like."
        kicker="The Fitting"
        qualify
        fitGate
        ctaLabel="Let's Talk"
        mobileFormFirst
        showBooking
        bookingSecondary
        bookingLabel="Pick My Time On The Calendar"
        bookingUrl={BOOKING_URL}
        subheading="Tell us how it runs today. We'll show you what we'd build if it were ours. Free, about thirty minutes, screen-shared. Whether we build it is a separate conversation."
        benefits={[
          'We walk your business with you, live, screen-shared',
          'You see the app we’d build if we owned your company. Add to it or take away',
          "A handful of new fittings a month, one business at a time. If it's not a fit, we tell you straight",
          `The price is public: ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. No surprises at the end`,
          `Month-to-month. One job: ${OS_PRICING.promise}`,
        ]}
        source={`${sourcePrefix}_footer`}
        pageSlug={slug}
      />
    </LPLayout>
  );
}
