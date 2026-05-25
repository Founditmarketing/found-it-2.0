'use client';

import { LPLayout, LPNav, FAQSection, LPFormSection, LPFooter } from '@/components/lp';
import { HormoziHero } from '@/components/lp/HormoziHero';
import { ObjectionBullets } from '@/components/lp/ObjectionBullets';
import { ProofBlock } from '@/components/lp/ProofBlock';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';

const ease = [0.16, 1, 0.3, 1] as const;

const faqItems = [
  {
    question: 'Which platforms do you manage?',
    answer: "Facebook, Instagram, LinkedIn, TikTok, and Google Business Profile. Most local businesses get the best results starting with Facebook + Instagram.",
  },
  {
    question: 'Do you create the content or do I?',
    answer: "We create everything — graphics, copy, scheduling. You just approve before it goes live. Nothing posts without your green light.",
  },
  {
    question: 'Is there a contract?',
    answer: "No. Month-to-month. We recommend 90 days to see real traction, but we never lock you in.",
  },
];

export function SocialMediaLPContent() {
  return (
    <LPLayout ctaLabel="Get My Free Content Plan">
      <LPNav />

      <HormoziHero
        headline="Social Media That Gets Calls,"
        headlineAccent="Not Just Likes."
        subheadline="We create the content, run the ads, and track what actually brings in business. You just approve. Free 30-day content plan included."
        ctaText="Get My Free Content Plan"
        frictionReducer="15-minute intro call (or we can meet at your office!). Zero obligation. The plan is yours to keep."
      />

      <ObjectionBullets
        bullets={[
          {
            title: '100% Local. We come to your office.',
            detail: "Tired of faceless agencies hiding behind Zoom? We are based right here. We'll gladly drive to your office, shake your hand, and review your strategy in person.",
          },
          {
            title: "We create everything. You just approve.",
            detail: "Graphics, copy, scheduling — all done for you. Nothing goes live without your sign-off.",
          },
          {
            title: "We track calls and leads, not likes.",
            detail: "Monthly reports show what actually moved the needle — leads, calls, bookings. Not vanity metrics.",
          },
          {
            title: 'No contracts. Cancel anytime.',
            detail: "Month-to-month. We earn your business every month by getting results, not by locking you in.",
          },
        ]}
      />

      <ProofBlock
        headline="One Restaurant Tripled Weekend Reservations"
        headlineAccent="in 90 Days."
        stats={[
          { value: '3x', label: 'Weekend Bookings' },
          { value: '400%', label: 'Follower Growth' },
          { value: '12K', label: 'Monthly Reach' },
        ]}
        narrative="They were posting phone photos with generic captions. We built a real content strategy — behind-the-scenes kitchen content, seasonal menu highlights, and targeted Instagram ads within 15 miles. 90 days later, Friday and Saturday nights are packed."
      />

      <LPFormSection
        heading="Get Your Free 30-Day Content Plan"
        subheading="Tell us about your business and we'll build you a custom content calendar you can start using immediately."
        benefits={[
          'Custom 30-day content calendar',
          'Platform-specific strategy',
          'Zero obligation — the plan is yours to keep',
          '📍 Local to the area? We are 100% willing to do this strategy session in person at your office.',
        ]}
        source="lp_social"
        pageSlug="social-media"
      />

      <FAQSection items={faqItems} />

      {/* ─── Bottom CTA ─── */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
        <div className="max-w-[700px] mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
              Stop Posting{' '}
              <span className="text-primary">Into the Void.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium italic mb-8 max-w-lg mx-auto leading-relaxed">
              Get a real strategy. 15 minutes with John — no pitch, just a plan.
            </p>
            <Link href="#lp-form">
              <LiquidButton className="px-12 h-16 text-base sm:text-lg tracking-[0.05em] shadow-2xl shadow-primary/20">
                Get My Free Content Plan
              </LiquidButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <LPFooter />
    </LPLayout>
  );
}
