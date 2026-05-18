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
    question: 'What is AI search optimization?',
    answer: "It's making sure your business shows up when people ask AI tools like ChatGPT, Perplexity, or Google AI for recommendations in your industry. Different from traditional SEO — AI engines use different signals to decide who to recommend.",
  },
  {
    question: 'Is traditional SEO dead?',
    answer: "No, but it's not enough anymore. Ranking #1 on Google doesn't guarantee AI will recommend you. You need both working together.",
  },
  {
    question: 'How long until I show up in AI search?',
    answer: "Most clients see initial AI mentions within 60-90 days. Consistent visibility across multiple platforms takes 4-6 months. We track it and report monthly.",
  },
];

export function AISearchSEOContent() {
  return (
    <LPLayout ctaLabel="Get My Free AI Audit">
      <LPNav />

      <HormoziHero
        headline="Show Up When AI Recommends"
        headlineAccent="Your Industry."
        subheadline="Your customers are asking ChatGPT, Perplexity, and Google AI who to hire. We make sure the answer is you. Free audit — no commitment."
        ctaText="Get My Free AI Visibility Audit"
        frictionReducer="Takes 2 minutes. We'll show you exactly where you stand."
      />

      <ObjectionBullets
        bullets={[
          {
            title: 'This is not traditional SEO.',
            detail: "SEO gets you ranked on Google. AI optimization gets you recommended by ChatGPT, Perplexity, and Gemini. Different game, different playbook.",
          },
          {
            title: "We track what AI says about you.",
            detail: "Monthly reports showing where AI recommends you, where it doesn't, and what we're doing about it.",
          },
          {
            title: 'No contracts. Cancel anytime.',
            detail: "Month-to-month. 30 days notice. You keep all the work we've done.",
          },
        ]}
      />

      <ProofBlock
        headline="One Client Went From Invisible to"
        headlineAccent="AI-Recommended in 90 Days."
        stats={[
          { value: '0→4', label: 'AI Platforms Citing Them' },
          { value: '+180%', label: 'Organic Traffic' },
          { value: '90 days', label: 'Time to First AI Mention' },
        ]}
        narrative="This business wasn't showing up in any AI search results. We rebuilt their content structure, added schema markup, got them into the directories AI engines pull from, and optimized for the question formats AI uses. 90 days later — recommended on ChatGPT, Perplexity, Google AI Overviews, and Gemini."
      />

      <LPFormSection
        heading="Get Your Free AI Visibility Audit"
        subheading="We'll check where your business shows up in AI search — and where it doesn't. Takes 24 hours."
        benefits={[
          'AI visibility scan across ChatGPT, Perplexity, Gemini, Google AI',
          'Competitor AI visibility comparison',
          'Custom action plan — yours to keep either way',
        ]}
        source="lp_ai_seo"
        pageSlug="ai-search-seo"
      />

      <FAQSection items={faqItems} />

      {/* ─── Bottom CTA ─── */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
        <div className="max-w-[700px] mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: ease as any }}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
              Your Customers Are Asking AI{' '}
              <span className="text-primary">Right Now.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium italic mb-8 max-w-lg mx-auto leading-relaxed">
              Make sure your business is the answer. Book your free audit.
            </p>
            <Link href="#lp-form">
              <LiquidButton className="px-12 h-16 text-base sm:text-lg tracking-[0.05em] shadow-2xl shadow-primary/20">
                Get My Free AI Audit
              </LiquidButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <LPFooter />
    </LPLayout>
  );
}
