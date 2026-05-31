'use client';

import { LPLayout } from '@/components/lp/LPLayout';
import { LPSplitHero } from '@/components/lp/LPSplitHero';
import { SocialProof } from '@/components/lp/SocialProof';
import { FounderVideo } from '@/components/lp/FounderVideo';
import { ObjectionBullets } from '@/components/lp/ObjectionBullets';
import { ProcessSteps } from '@/components/lp/ProcessSteps';
import { LPFormSection } from '@/components/lp/LPFormSection';
import { FAQSection } from '@/components/lp/FAQSection';
import { LPNav } from '@/components/lp/LPNav';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export function AppDevelopmentLPContent() {
  return (
    <LPLayout ctaLabel="Book Your Free In-Person App Blueprint">
      <LPNav />

      <LPSplitHero
        headline="Don't Outsource Your App."
        headlineAccent="Build It Here."
        subheadline="A fast, native-feeling app for iOS and Android, architected and built by a local team you can actually sit down with."
        highlight="You get a fixed price and a guaranteed delivery date before you sign anything."
        highlightIcon={ShieldCheck}
        stats={[
          { value: '250+', label: 'Local businesses' },
          { value: 'iOS+Android', label: 'Native build' },
          { value: '4.9★', label: 'Google rating' },
        ]}
        formHeading="Book Your Free App Blueprint"
        formSource="lp_app_development"
        formPageSlug="app-development"
      />

      <SocialProof
        heading="Builds owners"
        headingAccent="can count on."
        stats={[
          { value: '250+', label: 'Local businesses served' },
          { value: '15+', label: 'Years building software' },
          { value: '4.9★', label: 'Average Google rating' },
          { value: '48', label: 'States we operate in' },
        ]}
        testimonials={[
          {
            quote: 'Extremely responsive, and they use a great app that makes collaboration and communication seamless. So glad to have this team.',
            name: 'Smith Lake Rentals & Sales',
          },
          {
            quote: "They stand out in every way. They take the time to understand your business, your goals, and what will actually move the needle.",
            name: 'Tyler Griffin',
          },
          {
            quote: "Been working with them for years. Anytime we need something, they're right on it.",
            name: 'Cory Chandler',
          },
        ]}
      />

      <FounderVideo
        eyebrow="Meet Your Local Team"
        heading="No time zones."
        headingAccent="No language barriers."
        body="Building an app with an overseas shop usually means midnight calls and missed expectations. We'll come to your office, whiteboard the whole build with you, and stay reachable through launch and beyond."
        founderName="Trevor Ruby"
        videoSrc="/app-intro-web.mp4"
        poster="/app-intro-poster.jpg"
        orientation="portrait"
        portraitRatio="9 / 16"
        ctaText="Book Your Free In-Person App Blueprint"
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

      <LPFormSection
        heading="Book Your Free In-Person App Blueprint"
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
                Book Your Free In-Person App Blueprint
              </LiquidButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </LPLayout>
  );
}
