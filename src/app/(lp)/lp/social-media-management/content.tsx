'use client';

import { LPLayout, LPNav, FAQSection, LPFormSection, LPFooter, LPSplitHero, SocialProof, TeamCollageSection } from '@/components/lp';
import { ObjectionBullets } from '@/components/lp/ObjectionBullets';
import { ProofBlock } from '@/components/lp/ProofBlock';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { MessageSquare } from 'lucide-react';
import { TRACK_RECORD } from '@/lib/site';
import { reviews } from '@/lib/reviews';

const ease = [0.16, 1, 0.3, 1] as const;

/** Verbatim Google-review text from the canonical source — never paraphrase. */
const quoteBy = (name: string) => reviews.find((r) => r.name === name)?.quote ?? '';

const faqItems = [
  {
    question: 'Which platforms do you manage?',
    answer: "Facebook, Instagram, LinkedIn, TikTok, and Google Business Profile. Most local businesses get the best results starting with Facebook and Instagram.",
  },
  {
    question: 'Do you create the content or do I?',
    answer: "We create everything: graphics, copy, and scheduling. You just approve before it goes live. Nothing posts without your green light.",
  },
  {
    question: 'How much does social media management cost?',
    answer: "We keep pricing simple and flat, scoped to the platforms and posting volume you need. You'll get a clear monthly number up front, with no setup fees that lock you in.",
  },
  {
    question: 'Do you shoot photos and video too?',
    answer: "Yes. We can produce content for you or direct what you capture on your phone, then turn it into a steady stream of posts, reels, and ads. You stay in full control of what goes out.",
  },
  {
    question: 'How fast will I see results?',
    answer: "Reach and engagement usually move in the first month. Real traction, more calls and bookings, typically takes about 90 days of consistent, strategic posting. We recommend giving it that runway.",
  },
  {
    question: 'How do you measure success?',
    answer: "We track calls, leads, and bookings, not likes. Every month you get a report showing what actually moved the needle for your business, with the vanity metrics left where they belong.",
  },
  {
    question: 'Is there a contract?',
    answer: "No. Month-to-month. We recommend 90 days to see real traction, but we never lock you in.",
  },
];

export function SocialMediaLPContent() {
  return (
    <LPLayout ctaLabel="Get My Free Strategy Session">
      <LPNav />

      <LPSplitHero
        headline="Social Media That Gets Calls,"
        headlineAccent="Not Just Likes."
        subheadline="A done-for-you content engine that turns scrolls into booked calls, built and managed by a local team."
        highlight="We create every post and ad. You just approve, and we report on calls, not likes."
        highlightIcon={MessageSquare}
        stats={[
          { value: '3x', label: 'Best client growth' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Google rating' },
        ]}
        formHeading="Get My Free Strategy Session"
        formSource="lp_social"
        formPageSlug="social-media"
      />

      <SocialProof
        heading="Content that owners"
        headingAccent="actually see results from."
        stats={[
          { value: `${TRACK_RECORD.yearsInBusiness}`, label: 'Years in marketing' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Average Google rating' },
          { value: '0', label: 'Long-term contracts' },
        ]}
        testimonials={[
          { quote: quoteBy('Creighton Harmon'), name: 'Creighton Harmon' },
          { quote: quoteBy('Donald Ruby'), name: 'Donald Ruby' },
          { quote: quoteBy("Everything's Albright"), name: "Everything's Albright" },
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
        narrative="They were posting phone photos with generic captions. We built a real content strategy: behind-the-scenes kitchen content, seasonal menu highlights, and targeted Instagram ads within 15 miles. 90 days later, Friday and Saturday nights are packed."
      />

      <ObjectionBullets
        bullets={[
          {
            title: 'We Create Everything. You Just Approve.',
            detail: "Graphics, copy, scheduling, all done for you. Nothing goes live without your sign-off.",
          },
          {
            title: 'We Track Calls and Leads, Not Likes.',
            detail: "Monthly reports show what actually moved the needle: leads, calls, bookings. Not vanity metrics.",
          },
          {
            title: 'No Contracts. Cancel Anytime.',
            detail: "Month-to-month. We earn your business every month by getting results, not by locking you in.",
          },
          {
            title: '100% Local. We Come To Your Office.',
            detail: "Tired of faceless agencies hiding behind Zoom? We are based right here, and we'll gladly drive to you and review your strategy in person.",
          },
        ]}
      />

      <TeamCollageSection ctaLabel="Get My Free Strategy Session" />

      <LPFormSection
        heading="Get My Free Strategy Session"
        subheading="Tell us about your business and we'll build you a custom content calendar you can start using immediately."
        benefits={[
          'Custom 30-day content calendar',
          'Platform-specific strategy',
          'Zero obligation, the plan is yours to keep',
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
              Get a real strategy. 15 minutes with Trevor, no pitch, just a plan.
            </p>
            <Link href="#lp-form">
              <LiquidButton className="px-12 h-16 text-base sm:text-lg tracking-[0.05em] shadow-2xl shadow-primary/20">
                Get My Free Strategy Session
              </LiquidButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <LPFooter />
    </LPLayout>
  );
}
