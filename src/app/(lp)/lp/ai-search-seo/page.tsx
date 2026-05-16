import type { Metadata } from 'next';
import { AISearchSEOContent } from './content';
import { buildFAQSchema, buildLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'AI Search Optimization & Local SEO | Found It Marketing',
  description: 'Make sure your business shows up when customers ask ChatGPT, Perplexity, and Google AI for recommendations. Free AI visibility audit. Louisiana + Texas.',
  openGraph: {
    title: 'AI Search Optimization & Local SEO | Found It Marketing',
    description: 'Make sure your business shows up when customers ask AI for recommendations. Free AI visibility audit.',
    type: 'website',
    url: 'https://founditmarketing.com/lp/ai-search-seo',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'AI Search Optimization & Local SEO | Found It Marketing' },
  robots: { index: true, follow: true },
  alternates: { canonical: '/lp/ai-search-seo' },
};

const faqItems = [
  { question: 'What is GEO (Generative Engine Optimization)?', answer: 'GEO is the discipline of making your business visible and recommended by AI search engines — ChatGPT, Perplexity, Google AI Overviews, Gemini, and others. Where SEO targets ranking on a search results page, GEO targets being the answer when an AI assistant responds to a buying question. Different signals, different content structures, different authority models.' },
  { question: 'Is traditional SEO dead?', answer: "No, but it's not enough anymore. Strong SEO still feeds the AI engines — they pull from sites that already rank well. But ranking #1 on Google doesn't guarantee an AI will recommend you. You need both layers working together." },
  { question: 'How long until I start showing up in AI search?', answer: "Most clients see initial mentions in AI responses within 60-90 days of starting GEO work. Consistent visibility across multiple AI platforms typically takes 4-6 months. AI engines update their training and retrieval systems on different schedules, so it's not as predictable as traditional SEO — but the trend is clear." },
  { question: 'Do you guarantee rankings?', answer: "No. Anyone who guarantees rankings in Google or AI search is either lying or about to get penalized. We guarantee strategy, execution, transparent reporting, and that we use the same approach we use for ourselves — not outcomes we can't fully control. The agencies that promise rankings are the ones to avoid." },
  { question: "What's the difference between SEO and GEO?", answer: "SEO optimizes for ranking on search results pages — keywords, backlinks, on-page optimization, technical performance. GEO optimizes for being cited by AI assistants — entity authority, structured data, AI-citable content patterns, and presence across the sources AI engines pull from. They overlap but they're not the same skill set." },
  { question: 'How does AI search optimization actually work?', answer: "Three layers: (1) Make sure your business is a clear entity that AI engines can understand — schema markup, consistent NAP data, knowledge graph presence. (2) Build content specifically structured for AI citation — authoritative, factual, structured in Q&A and comparison formats. (3) Build the authority signals AI engines use to decide who to recommend — reviews, expert mentions, industry directory presence, and high-quality backlinks from trusted sources." },
];

const faqSchema = buildFAQSchema(faqItems);
const localBusinessSchema = buildLocalBusinessSchema();

const serviceSchema = [
  { '@context': 'https://schema.org', '@type': 'Service', name: 'AI Search Optimization (GEO)', description: 'Generative Engine Optimization — make your business visible in ChatGPT, Perplexity, Google AI Overviews, and Gemini.', provider: { '@type': 'Organization', name: 'Found It Marketing' }, areaServed: { '@type': 'Country', name: 'United States' } },
  { '@context': 'https://schema.org', '@type': 'Service', name: 'Local SEO', description: 'Google Business Profile optimization, local citations, review management, and local content strategy for service businesses.', provider: { '@type': 'Organization', name: 'Found It Marketing' }, areaServed: { '@type': 'Country', name: 'United States' } },
];

export default function AISearchSEOPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      {serviceSchema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <AISearchSEOContent />
    </>
  );
}
