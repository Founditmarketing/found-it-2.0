'use client';

import { useState } from 'react';
import { LPLayout, LPNav, TrustBar, JohnCTA, FAQSection, LPFormSection, LPFooter, ExitIntent } from '@/components/lp';
import { FinalCTA } from '@/components/lp/FinalCTA';
import { AISearchHero } from '@/components/lp/AISearchHero';
import { AIVisibilityWidget } from '@/components/lp/AIVisibilityWidget';
import { EducationSection } from '@/components/lp/EducationSection';
import { SEOvsGEOComparison } from '@/components/lp/SEOvsGEOComparison';
import { GEOCaseStudy } from '@/components/lp/GEOCaseStudy';
import { motion } from 'framer-motion';
import { LiquidButton } from '@/components/ui/LiquidButton';
import Link from 'next/link';

const faqItems = [
  { question: 'What is GEO (Generative Engine Optimization)?', answer: 'GEO is the discipline of making your business visible and recommended by AI search engines — ChatGPT, Perplexity, Google AI Overviews, Gemini, and others. Where SEO targets ranking on a search results page, GEO targets being the answer when an AI assistant responds to a buying question. Different signals, different content structures, different authority models.' },
  { question: 'Is traditional SEO dead?', answer: "No, but it's not enough anymore. Strong SEO still feeds the AI engines — they pull from sites that already rank well. But ranking #1 on Google doesn't guarantee an AI will recommend you. You need both layers working together." },
  { question: 'How long until I start showing up in AI search?', answer: "Most clients see initial mentions in AI responses within 60-90 days of starting GEO work. Consistent visibility across multiple AI platforms typically takes 4-6 months. AI engines update their training and retrieval systems on different schedules, so it's not as predictable as traditional SEO — but the trend is clear." },
  { question: 'Do you guarantee rankings?', answer: "No. Anyone who guarantees rankings in Google or AI search is either lying or about to get penalized. We guarantee strategy, execution, transparent reporting, and that we use the same approach we use for ourselves — not outcomes we can't fully control. The agencies that promise rankings are the ones to avoid." },
  { question: "What's the difference between SEO and GEO?", answer: "SEO optimizes for ranking on search results pages — keywords, backlinks, on-page optimization, technical performance. GEO optimizes for being cited by AI assistants — entity authority, structured data, AI-citable content patterns, and presence across the sources AI engines pull from. They overlap but they're not the same skill set." },
  { question: 'How does AI search optimization actually work?', answer: "Three layers: (1) Make sure your business is a clear entity that AI engines can understand — schema markup, consistent NAP data, knowledge graph presence. (2) Build content specifically structured for AI citation — authoritative, factual, structured in Q&A and comparison formats. (3) Build the authority signals AI engines use to decide who to recommend — reviews, expert mentions, industry directory presence, and high-quality backlinks from trusted sources." },
];

export function AISearchSEOContent() {
  const [businessName, setBusinessName] = useState('');

  const personalizedCTA = businessName
    ? `Help ${businessName} Show Up in AI Search →`
    : 'Get Your Free AI Visibility Audit';

  return (
    <LPLayout ctaLabel={personalizedCTA}>
      <LPNav />
      <AISearchHero />
      <AIVisibilityWidget onBusinessNameCaptured={setBusinessName} />
      <TrustBar stats={[
        { value: '60%', label: 'Searches Without Clicks' },
        { value: '500M+', label: 'Weekly ChatGPT Users' },
        { value: '13+', label: 'Years in SEO' },
        { value: '48', label: 'States Served' },
      ]} />
      <EducationSection />
      <SEOvsGEOComparison />
      <GEOCaseStudy />
      <JohnCTA
        heading="Get a Free AI Visibility Audit"
        body="John will personally walk you through where your business is showing up in AI search — and where it's not. No pitch, no pressure. Just a candid look at your AI visibility with actionable recommendations you can implement immediately."
        ctaLabel="Book My Free 20-Min Audit"
      />
      <LPFormSection
        heading={businessName ? `Get ${businessName}'s AI Visibility Report` : 'Get Your Free AI Visibility Audit'}
        subheading="Tell us about your business and we'll deliver a complete AI visibility analysis within 24 hours."
        benefits={[
          'Full AI search visibility scan (ChatGPT, Perplexity, Gemini, AI Overviews)',
          'Competitive AI visibility comparison',
          'Custom GEO strategy recommendations',
          'Zero obligation — the audit is yours to keep',
        ]}
        source="lp_ai_seo"
        pageSlug="ai-search-seo"
      />
      <FAQSection items={faqItems} />

      {/* Final CTA — custom for this page */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
        <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] mb-6 text-foreground">
              Your Customers Are Asking AI For Recommendations{' '}
              <span className="text-primary drop-shadow-[0_0_20px_rgba(249,115,22,0.2)]">Right Now.</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium italic mb-10 max-w-2xl mx-auto leading-relaxed">
              Make sure your business is the answer. Book your free audit with John.
            </p>
            <Link href="#lp-form">
              <LiquidButton className="px-12 h-18 text-base sm:text-lg tracking-[0.1em] shadow-2xl shadow-primary/20">
                {personalizedCTA}
              </LiquidButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <LPFooter />
      <ExitIntent
        headline="Don't leave without this."
        subheadline="Download the 2026 GEO Playbook — learn how to get your business cited by ChatGPT, Perplexity, and Google AI."
        magnetTitle="The 2026 GEO Playbook"
        ctaLabel="Download the Free Playbook"
      />
    </LPLayout>
  );
}
