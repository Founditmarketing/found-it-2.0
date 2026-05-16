'use client';

import { useState } from 'react';
import { LPLayout, LPNav, TrustBar, JohnCTA, FAQSection, LPFormSection, LPFooter, ExitIntent } from '@/components/lp';
import { FinalCTA } from '@/components/lp/FinalCTA';
import { AISearchHero } from '@/components/lp/AISearchHero';
import { AIVisibilityWidget } from '@/components/lp/AIVisibilityWidget';
import { EducationSection } from '@/components/lp/EducationSection';
import { SEOvsGEOComparison } from '@/components/lp/SEOvsGEOComparison';
import { GEOCaseStudy } from '@/components/lp/GEOCaseStudy';
import { GEOPricing } from '@/components/lp/GEOPricing';
import { motion } from 'framer-motion';
import { LiquidButton } from '@/components/ui/LiquidButton';
import Link from 'next/link';

const faqItems = [
  { question: 'What is GEO (Generative Engine Optimization)?', answer: 'GEO is the practice of optimizing your business to appear in AI-generated search results — ChatGPT, Perplexity, Google AI Overviews, and Gemini. It involves entity optimization, AI-citable content architecture, and structured data designed for answer engines. Think of it as SEO for the AI era.' },
  { question: 'Is traditional SEO dead?', answer: 'Absolutely not. Traditional SEO feeds the AI engines — they pull from the same sources Google does. SEO is now the foundation that GEO builds on top of. You need both to achieve total visibility. Neglecting either leaves money on the table.' },
  { question: 'How long until I start showing up in AI search?', answer: 'Most clients see initial AI mentions within 60-90 days. Full optimization across all major platforms (ChatGPT, Perplexity, Google AI Overviews, Gemini) typically takes 4-6 months of consistent work. The earlier you start, the bigger your competitive advantage.' },
  { question: 'Do you guarantee rankings?', answer: 'No. Anyone who guarantees rankings in Google or AI search is either lying or about to get penalized. We guarantee strategy, execution, and transparent reporting — not outcomes we can\'t control. What we can tell you: our process works, our clients see results, and we\'ll show you the data every month.' },
  { question: "What's the difference between SEO and GEO?", answer: 'SEO optimizes for traditional search engine results pages — you\'re trying to rank #1 on Google. GEO optimizes for AI-generated answers — you\'re trying to be the business AI recommends. SEO focuses on keywords and backlinks; GEO focuses on entity authority, structured data, and content AI engines can cite.' },
  { question: 'How does AI search optimization actually work?', answer: 'We optimize your business entity across knowledge graphs, build content specifically structured for AI citation, implement advanced schema markup, and build the authority signals that AI engines use to decide which businesses to recommend. It\'s a combination of technical optimization and strategic content architecture.' },
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
      <GEOPricing businessName={businessName} />
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
