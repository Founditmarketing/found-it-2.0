'use client';

import { LPLayout } from '@/components/lp/LPLayout';
import { LPSplitHero } from '@/components/lp/LPSplitHero';
import { SocialProof } from '@/components/lp/SocialProof';
import { ObjectionBullets } from '@/components/lp/ObjectionBullets';
import { ProcessSteps } from '@/components/lp/ProcessSteps';
import { LPFormSection } from '@/components/lp/LPFormSection';
import { TeamCollageSection } from '@/components/lp/TeamCollageSection';
import { FAQSection } from '@/components/lp/FAQSection';
import { LPNav } from '@/components/lp/LPNav';
import { FounderVideo } from '@/components/lp/FounderVideo';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { TRACK_RECORD } from '@/lib/site';
import { reviews } from '@/lib/reviews';

/** Verbatim Google-review text from the canonical source — never paraphrase. */
const quoteBy = (name: string) => reviews.find((r) => r.name === name)?.quote ?? '';

export function AppDevelopmentLPContent() {
  return (
    <LPLayout ctaLabel="Get My Free App Blueprint">
      <LPNav />

      <LPSplitHero
        headline="Don't Outsource Your App."
        headlineAccent="Build It Here."
        subheadline="A fast, native-feeling app for iOS and Android, architected and built by a local team you can actually sit down with."
        highlight="You get a fixed price and a guaranteed delivery date before you sign anything."
        highlightIcon={ShieldCheck}
        stats={[
          { value: TRACK_RECORD.socialAccountsManaged, label: 'Local businesses served' },
          { value: 'iOS+Android', label: 'Native build' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Google rating' },
        ]}
        formHeading="Get My Free App Blueprint"
        formSource="lp_app_development"
        formPageSlug="app-development"
      />

      {/* The face behind the ad — 55-sec one-take from Trevor, captions burned in. */}
      <FounderVideo
        eyebrow="Meet The Developer"
        heading="55 Seconds From"
        headingAccent="The Guy Who Builds It."
        body="No sales team, no account manager — you'd be talking to the developer. Custom apps that combine the software you're renting into one new app you own: the code, the data, everything. Press play, then grab the free blueprint below."
        videoSrc="/founder-intro-v2.mp4"
        poster="/founder-intro-poster-v2.jpg"
        ctaText="Get My Free App Blueprint"
        ctaHref="#lp-form"
      />

      <SocialProof
        heading="Builds owners"
        headingAccent="can count on."
        stats={[
          { value: TRACK_RECORD.socialAccountsManaged, label: 'Local businesses served' },
          { value: `${TRACK_RECORD.yearsInBusiness}`, label: 'Years building software' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Average Google rating' },
          { value: '0', label: 'Long-term contracts' },
        ]}
        testimonials={[
          { quote: quoteBy('Smith Lake Rentals & Sales'), name: 'Smith Lake Rentals & Sales' },
          { quote: quoteBy('Tyler Griffin'), name: 'Tyler Griffin' },
          { quote: quoteBy('Cory Chandler'), name: 'Cory Chandler' },
        ]}
      />

      <ObjectionBullets
        bullets={[
          {
            title: 'Fixed Timelines & Budgets.',
            detail: "We don't do scope creep. You get a fixed price and a guaranteed delivery date before you sign anything.",
          },
          {
            title: 'You Own the Codebase.',
            detail: "If you ever decide to bring development in-house, the code is yours. No hostage situations.",
          },
          {
            title: '100% Local. We Come To Your Office.',
            detail: "Tired of faceless agencies hiding behind Zoom? We'll gladly drive to you and map out the build in person.",
          },
        ]}
      />

      <ProcessSteps
        heading="Our App Development Process"
        steps={[
          {
            number: '01',
            title: 'In-Person Blueprinting',
            description: "We meet at your office to map out the exact features, user flows, and architecture your app needs to succeed.",
          },
          {
            number: '02',
            title: 'Design & Prototyping',
            description: "We build an interactive prototype so you can click through the app and feel exactly how it works before we write a single line of code.",
          },
          {
            number: '03',
            title: 'Development & Launch',
            description: "We engineer a lightning-fast, native-feeling app for iOS and Android, handle the App Store submissions, and guarantee our delivery date.",
          },
        ]}
      />

      <TeamCollageSection ctaLabel="Get My Free App Blueprint" />

      <LPFormSection
        heading="Get My Free App Blueprint"
        subheading="Tell us about your app idea and we'll come to your office to architect the entire build."
        benefits={[
          'Full technical architecture and database mapping',
          'Interactive UI/UX concept review',
          'Fixed-price quote and guaranteed timeline',
          '📍 Local to Louisiana? We are 100% willing to do this strategy session in person at your office.',
        ]}
        source="lp_app_development"
        pageSlug="app-development"
      />

      <FAQSection
        items={[
          {
            question: 'How long does it take to build an app?',
            answer: "Most business utility and customer-facing apps take 8 to 12 weeks from kickoff to App Store launch. You'll get a firm, guaranteed timeline on our first call.",
          },
          {
            question: 'How much does an app cost?',
            answer: "We quote a fixed price after the free blueprint, based on the exact features you need. No hourly billing, no scope-creep invoices. You approve the full number before any work begins.",
          },
          {
            question: 'Who owns the code?',
            answer: "You do. You own the intellectual property, the source code, and the developer accounts. We build it, but it's 100% your asset.",
          },
          {
            question: 'Do you build for both iOS and Android?',
            answer: "Yes. We use modern cross-platform frameworks to deploy native-feeling apps to both the Apple App Store and Google Play Store at once, saving you time and money.",
          },
          {
            question: 'What happens after launch?',
            answer: "We don't disappear at go-live. We handle store submissions, monitor the launch, and offer simple maintenance plans for updates and new features as your business grows.",
          },
          {
            question: 'Do I need a technical team to run it?',
            answer: "No. We build it to be maintained, document everything, and hand over clean accounts. If you ever bring development in-house later, your team inherits a tidy, fully owned codebase.",
          },
        ]}
      />

      <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
        <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 text-white">
              Ready to build your app locally?
            </h2>
            <p className="text-xl font-medium mb-12 opacity-90 text-white max-w-2xl mx-auto">
              Stop dealing with time zones and language barriers. Let's build your app right here.
            </p>
            <Link href="#lp-form">
              <LiquidButton className="px-12 h-16 text-base sm:text-lg tracking-[0.05em] shadow-2xl shadow-black/20 bg-white text-primary hover:bg-white/90">
                Get My Free App Blueprint
              </LiquidButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </LPLayout>
  );
}
