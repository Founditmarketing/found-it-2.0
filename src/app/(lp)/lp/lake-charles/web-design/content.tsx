'use client';

import { LPLayout, LPNav, FAQSection, LPFormSection, LPFooter, LPSplitHero, SocialProof, TeamCollageSection } from '@/components/lp';
import { ObjectionBullets } from '@/components/lp/ObjectionBullets';
import { ProofBlock } from '@/components/lp/ProofBlock';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { Clock } from 'lucide-react';
import { TRACK_RECORD } from '@/lib/site';
import { reviews } from '@/lib/reviews';

const ease = [0.16, 1, 0.3, 1] as const;

/** Verbatim Google-review text from the canonical source — never paraphrase. */
const quoteBy = (name: string) => reviews.find((r) => r.name === name)?.quote ?? '';

const faqItems = [
  {
    question: 'How long does it take?',
    answer: "2 weeks or less from kickoff to launch. Larger builds with custom integrations may take slightly longer, but you get a firm timeline on the first call.",
  },
  {
    question: 'How much does a new website cost?',
    answer: "We quote a clear, flat price up front based on what your business actually needs. No hourly surprises and no scope-creep invoices. You'll know the full number before you commit.",
  },
  {
    question: 'Do you work with industrial and B2B businesses?',
    answer: "Yes, it's most of what we do. Trucking, construction, fabrication, oilfield services, manufacturing. We know how to build for procurement managers, not just consumers.",
  },
  {
    question: 'Who owns the website?',
    answer: "You do. Your domain, your code, your content, your hosting account. If you ever leave, you take everything with you. No lock-in.",
  },
  {
    question: 'What if I need changes after launch?',
    answer: "60 days of free post-launch optimization is included. After that, most clients move to a maintenance plan starting at $250/mo. No long-term contracts.",
  },
  {
    question: 'What if you miss the launch date?',
    answer: "If your site isn't ready on the date we promise, we take $500 off the final invoice. We stand behind our timeline.",
  },
];

export function LakeCharlesWebDesignContent() {
  return (
    <LPLayout ctaLabel="Get a Free Concept Call">
      <LPNav />

      <LPSplitHero
        badge="Serving Lake Charles & SW Louisiana"
        headline="A Website That Wins Bids in"
        headlineAccent="Lake Charles."
        subheadline="Built for contractors, fabricators, and service businesses across Southwest Louisiana. No templates. Mobile-first. You own everything."
        highlight="Live in 2 weeks or less, or we take $500 off your final invoice."
        highlightIcon={Clock}
        stats={[
          { value: TRACK_RECORD.socialAccountsManaged, label: 'Local businesses served' },
          { value: '2 wks', label: 'Typical build' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Google rating' },
        ]}
        formHeading="Get a Free Concept Call"
        formSource="lp_web_design_lc"
        formPageSlug="lake-charles-web-design"
      />

      <SocialProof
        heading="Southwest Louisiana owners"
        headingAccent="who trust us."
        stats={[
          { value: TRACK_RECORD.socialAccountsManaged, label: 'Local businesses served' },
          { value: '2 wks', label: 'Typical time to launch' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Average Google rating' },
          { value: '0', label: 'Long-term contracts' },
        ]}
        testimonials={[
          { quote: quoteBy('Boo Wilkerson'), name: 'Boo Wilkerson', business: 'Area Wide Paving' },
          { quote: quoteBy('Justin Morgan'), name: 'Justin Morgan' },
          { quote: quoteBy('Creighton Harmon'), name: 'Creighton Harmon' },
        ]}
      />

      <ProofBlock
        headline="One Client Tripled Their Qualified Inquiries"
        headlineAccent="in 60 Days."
        stats={[
          { value: '3x', label: 'Qualified Inquiries' },
          { value: '+40%', label: 'Avg Deal Size' },
          { value: '<30 days', label: 'First Lead' },
        ]}
        narrative="They came to us with a site that looked dated and didn't convert. We rebuilt on a modern stack with real specs, a finance calculator, and conversion-optimized forms. Within 60 days, inquiry volume tripled and average deal size increased 40%."
      />

      <ObjectionBullets
        bullets={[
          {
            title: 'Live in 2 Weeks or Less, Guaranteed.',
            detail: "If your site isn't ready to launch on the date we promise, we take $500 off the final invoice.",
          },
          {
            title: 'You Own Everything.',
            detail: "Your domain, your code, your content. No lock-in. Leave anytime and take it all with you.",
          },
          {
            title: '60 Days of Free Changes After Launch.',
            detail: "We don't disappear after go-live. Post-launch tweaks and optimization are included.",
          },
          {
            title: '100% Local. We Come To Your Office.',
            detail: "We're just 90 minutes away in Alexandria. We'll gladly drive to your office, shake your hand, and review your strategy in person.",
          },
        ]}
      />

      <TeamCollageSection ctaLabel="Get a Free Concept Call" />

      <LPFormSection
        heading="See Your Site Reimagined"
        subheading="Tell us about your business and we'll show you what a site that wins bids looks like for your market."
        benefits={[
          'Competitive website teardown',
          'Custom design direction and mockup concept',
          'Zero obligation, the insights are yours to keep',
          '📍 Local to Louisiana? We are 100% willing to do this strategy session in person at your office.',
        ]}
        source="lp_web_design_lc"
        pageSlug="lake-charles-web-design"
      />

      <FAQSection items={faqItems} />

      {/* ─── Bottom CTA ─── */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
        <div className="max-w-[700px] mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
              Your Competitors Already{' '}
              <span className="text-primary">Look the Part.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium italic mb-8 max-w-lg mx-auto leading-relaxed">
              Make sure you do too. Talk to Trevor, 15 minutes, no pitch, just a straight answer.
            </p>
            <Link href="#lp-form">
              <LiquidButton className="px-12 h-16 text-base sm:text-lg tracking-[0.05em] shadow-2xl shadow-primary/20">
                Get a Free Concept Call
              </LiquidButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <LPFooter />
    </LPLayout>
  );
}
