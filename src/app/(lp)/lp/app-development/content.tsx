'use client';

import { LPLayout } from '@/components/lp/LPLayout';
import { HormoziHero } from '@/components/lp/HormoziHero';
import { ObjectionBullets } from '@/components/lp/ObjectionBullets';
import { ProcessSteps } from '@/components/lp/ProcessSteps';
import { LPFormSection } from '@/components/lp/LPFormSection';
import { FAQSection } from '@/components/lp/FAQSection';
import { LPNav } from '@/components/lp/LPNav';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { motion } from 'framer-motion';

export function AppDevelopmentLPContent() {
  return (
    <LPLayout ctaLabel="Book Your Free In-Person App Blueprint">
      <LPNav />

      <HormoziHero
        headline="Don't Outsource Your App."
        headlineAccent="Let's Build It Here."
        subheadline="Your business needs an app, but you don't want to deal with overseas developers or bloated agencies. We'll come directly to your office, map out the entire app architecture for free, and give you a firm timeline. Local to Louisiana? Let's meet face-to-face."
        ctaText="Book Your Free In-Person App Blueprint"
        frictionReducer="Takes 15 minutes. We come to you. You get a full blueprint to keep."
      />

      <ObjectionBullets
        bullets={[
          {
            title: '100% Local. We come to your office.',
            detail: "Tired of faceless agencies hiding behind Zoom? We'll gladly drive to your office, shake your hand, and review your strategy in person.",
          },
          {
            title: 'You Own the Codebase.',
            detail: "If you ever decide to bring development in-house, the code is yours. No hostage situations.",
          },
          {
            title: 'Fixed Timelines & Budgets.',
            detail: "We don't do 'scope creep.' You get a fixed price and a guaranteed delivery date before you sign anything.",
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
            question: 'Who owns the code?',
            answer: "You do. You own the intellectual property, the source code, and the developer accounts. We build it, but it's 100% your asset.",
          },
          {
            question: 'Do you build for both iOS and Android?',
            answer: "Yes. We use modern cross-platform frameworks to deploy native-feeling apps to both the Apple App Store and Google Play Store simultaneously, saving you time and money.",
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
