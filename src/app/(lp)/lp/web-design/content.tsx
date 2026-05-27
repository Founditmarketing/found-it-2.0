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
    question: 'How long does it take to build?',
    answer: "2 weeks or less from kickoff to launch. Larger sites with custom features may take slightly longer, but you'll get a firm timeline on the first call.",
  },
  {
    question: 'Who owns the website?',
    answer: "You do. Your domain, your code, your content, your hosting account. If you ever leave, you take everything. No lock-in, no hostage games.",
  },
  {
    question: 'What if I need changes after launch?',
    answer: "60 days of free post-launch optimization is included. After that, most clients move to a maintenance plan starting at $250/mo. No long-term contracts.",
  },
];

export function WebDesignLPContent() {
  return (
    <LPLayout ctaLabel="Claim Your Free In-Person Mockup Review">
      <LPNav />

      <HormoziHero
        headline="Your Website is Costing You Leads. "
        headlineAccent="Let’s Fix It in 2 Weeks or Less."
        subheadline="We'll come directly to your office, map out a custom web strategy, and present your free mockup concept in person. No missed deadlines. No hostage games."
        ctaText="Claim Your Free In-Person Mockup Review"
        frictionReducer="15-minute intro call (or we can meet at your office!). We design a concept for free. Zero obligation."
      />

      <ObjectionBullets
        bullets={[
          {
            title: '100% Local. We come to your office.',
            detail: "Tired of faceless agencies hiding behind Zoom? We are based right here. We'll gladly drive to your office, shake your hand, and review your strategy in person.",
          },
          {
            title: 'You own everything.',
            detail: "Your domain, your code, your content. No lock-in. Leave anytime — take it all with you.",
          },
          {
            title: '60 days of free changes after launch.',
            detail: "We don't disappear after go-live. Post-launch tweaks and optimization are included.",
          },
          {
            title: 'Live in 2 weeks or less, guaranteed.',
            detail: "If your site isn't ready to launch on the date we promise, we take $500 off the final invoice.",
          },
        ]}
      />

      <ProofBlock
        headline="One Client Tripled Their Qualified Calls"
        headlineAccent="in 90 Days."
        stats={[
          { value: '3x', label: 'Qualified Calls' },
          { value: '94', label: 'Lighthouse Score' },
          { value: '2.1s', label: 'Load Time' },
        ]}
        narrative="Their old site loaded in 6 seconds on mobile and the contact form was buried 3 clicks deep. We rebuilt from scratch — custom design, fast code, and a clear path to call or request a quote. 90 days later, qualified calls tripled."
      />

      <LPFormSection
        heading="Book Your Free In-Person Strategy Session"
        subheading="Tell us about your business and we'll show you what a site that actually converts looks like for your market."
        benefits={[
          'The Competitor Gap Analysis: We’ll show you exactly why your top 3 competitors are outranking you and out-converting you.',
          'Your Free Custom Mockup: A custom-designed concept of what your new, high-converting homepage should look like.',
          'No Strings Attached: You can take our mockup and competitor research and give it to another agency. We just want to prove our value first.',
          '📍 Local to the area? We are 100% willing to do this strategy session in person at your office.',
        ]}
        source="lp_web_design"
        pageSlug="web-design"
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
              Make sure you do too. Talk to Trevor — 15 minutes, no pitch, just a straight answer on what your site could be.
            </p>
            <Link href="#lp-form">
              <LiquidButton className="px-12 h-16 text-base sm:text-lg tracking-[0.05em] shadow-2xl shadow-primary/20">
                Claim Your Free In-Person Mockup Review
              </LiquidButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <LPFooter />
    </LPLayout>
  );
}
