'use client';

import { LPLayout, LPNav, FAQSection, LPFormSection, LPFooter, LPSplitHero, SocialProof, TeamCollageSection, FounderVideo } from '@/components/lp';
import { ObjectionBullets } from '@/components/lp/ObjectionBullets';
import { ProofBlock } from '@/components/lp/ProofBlock';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { Sparkles } from 'lucide-react';
import { TRACK_RECORD } from '@/lib/site';
import { reviews } from '@/lib/reviews';

const ease = [0.16, 1, 0.3, 1] as const;

/** Verbatim Google-review text from the canonical source — never paraphrase. */
const quoteBy = (name: string) => reviews.find((r) => r.name === name)?.quote ?? '';

const faqItems = [
  {
    question: 'What is AI search optimization?',
    answer: "It's making sure your business is the answer when people ask AI tools like ChatGPT, Perplexity, or Google AI for a recommendation in your industry. AI engines use different signals than Google's blue links, so it takes a different playbook.",
  },
  {
    question: 'Is traditional SEO dead?',
    answer: "No, but ranking #1 on Google no longer guarantees AI will recommend you. You need both working together. We handle the classic local SEO and the new AI visibility layer at the same time.",
  },
  {
    question: 'How is this different from the SEO I might already pay for?',
    answer: "Most SEO stops at Google rankings. We also structure your content, schema, and citations so the large language models behind ChatGPT, Gemini, and Perplexity pull you in as the recommended local option.",
  },
  {
    question: 'How long until I show up in AI search?',
    answer: "Most clients see initial AI mentions within 60 to 90 days. Consistent visibility across multiple platforms takes 4 to 6 months. We track it and report monthly so you can see the movement.",
  },
  {
    question: 'How do I know it\u2019s actually working?',
    answer: "Every month you get a report showing where AI recommends you, where it doesn't yet, and what we're doing about it, alongside your organic traffic and call volume. Real signals, not vanity metrics.",
  },
  {
    question: 'Is there a contract?',
    answer: "No. Month-to-month, cancel anytime with 30 days notice. You keep all the work we've done, including the content and schema, if you leave.",
  },
  {
    question: 'What if it doesn\u2019t move the needle?',
    answer: "Then you cancel, and you keep everything we built. We earn the relationship every month with reporting you can actually read, not with a long contract.",
  },
];

export function AISearchSEOContent() {
  return (
    <LPLayout ctaLabel="Get My Free AI Audit">
      <LPNav />

      <LPSplitHero
        headline="Get Recommended When AI Picks"
        headlineAccent="Your Industry."
        subheadline="AI search optimization for local businesses: your customers are asking ChatGPT, Gemini, and Google AI who to hire. We make sure the answer is you."
        highlight="We run a live scan of your visibility across every major AI engine, free, at your office."
        highlightIcon={Sparkles}
        stats={[
          { value: TRACK_RECORD.socialAccountsManaged, label: 'Local businesses served' },
          { value: '4', label: 'AI engines tracked' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Google rating' },
        ]}
        formHeading="Get My Free AI Audit"
        formSource="lp_ai_seo"
        formPageSlug="ai-search-seo"
      />

      {/* The face behind the ad — 55-sec one-take from Trevor, captions burned in. */}
      <FounderVideo
        eyebrow="Meet The Developer"
        heading="55 Seconds From"
        headingAccent="The Guy Who Builds It."
        body="No sales team, no account manager — you'd be talking to the developer. One custom app replaces the subscriptions you're renting, and you own it: the code, the data, everything. Press play, then grab the free software map below."
        videoSrc="/founder-intro-v1.mp4"
        poster="/founder-intro-poster-v1.jpg"
        orientation="portrait"
        portraitRatio="9 / 16"
        ctaText="Get A Free Software Map"
        ctaHref="#lp-form"
      />

      <SocialProof
        heading="Owners who went from invisible"
        headingAccent="to found."
        stats={[
          { value: TRACK_RECORD.socialAccountsManaged, label: 'Local businesses served' },
          { value: `${TRACK_RECORD.yearsInBusiness}`, label: 'Years doing SEO' },
          { value: `${TRACK_RECORD.googleRating}★`, label: 'Average Google rating' },
          { value: '0', label: 'Long-term contracts' },
        ]}
        testimonials={[
          { quote: quoteBy('A. C.'), name: 'A. C.' },
          { quote: quoteBy('Ironclad'), name: 'Ironclad' },
          { quote: quoteBy('Reddirt Mahindra'), name: 'Reddirt Mahindra' },
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
        narrative="This business wasn't showing up in any AI search results. We rebuilt their content structure, added schema markup, got them into the directories AI engines pull from, and optimized for the question formats AI uses. 90 days later: recommended on ChatGPT, Perplexity, Google AI Overviews, and Gemini."
      />

      <ObjectionBullets
        bullets={[
          {
            title: 'This Is Not Traditional SEO.',
            detail: "SEO gets you ranked on Google. AI optimization gets you recommended by ChatGPT, Perplexity, and Gemini. Different game, different playbook.",
          },
          {
            title: 'We Track What AI Says About You.',
            detail: "Monthly reports showing where AI recommends you, where it doesn't, and what we're doing about it.",
          },
          {
            title: 'No Contracts. Cancel Anytime.',
            detail: "Month-to-month. 30 days notice. You keep all the work we've done.",
          },
          {
            title: '100% Local. We Come To Your Office.',
            detail: "Tired of faceless agencies hiding behind Zoom? We are based right here, and we'll gladly drive to you and review your strategy in person.",
          },
        ]}
      />

      <TeamCollageSection ctaLabel="Get My Free AI Audit" />

      <LPFormSection
        heading="Get My Free AI Audit"
        subheading="We'll check where your business shows up in AI search, and where it doesn't. Takes 24 hours."
        benefits={[
          'AI visibility scan across ChatGPT, Perplexity, Gemini, and Google AI',
          'Competitor AI visibility comparison',
          'Custom action plan, yours to keep either way',
          '📍 Local to the area? We are 100% willing to do this strategy session in person at your office.',
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
