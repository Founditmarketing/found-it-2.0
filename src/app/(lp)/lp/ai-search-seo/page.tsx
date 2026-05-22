import type { Metadata } from 'next';
import { AISearchSEOContent } from './content';
import { buildFAQSchema, buildLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'AI Search Optimization | Show Up When AI Recommends Your Industry',
  description:
    'Make sure your business is the answer when customers ask ChatGPT, Perplexity, or Google AI. Free visibility audit. No contracts.',
  openGraph: {
    title: 'AI Search Optimization | Show Up When AI Recommends',
    description: 'Make sure your business is the answer when customers ask AI. Free visibility audit.',
    type: 'website',
    url: 'https://founditmarketing.com/lp/ai-search-seo',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/lp/ai-search-seo' },
};

const faqItems = [
  { question: 'What is AI search optimization?', answer: "It's making sure your business shows up when people ask AI tools like ChatGPT, Perplexity, or Google AI for recommendations in your industry. Different from traditional SEO — AI engines use different signals to decide who to recommend." },
  { question: 'Is traditional SEO dead?', answer: "No, but it's not enough anymore. Ranking #1 on Google doesn't guarantee AI will recommend you. You need both working together." },
  { question: 'How long until I show up in AI search?', answer: "Most clients see initial AI mentions within 60-90 days. Consistent visibility across multiple platforms takes 4-6 months. We track it and report monthly." },
];

const faqSchema = buildFAQSchema(faqItems);
const localBusinessSchema = buildLocalBusinessSchema();

const serviceSchema = [
  { '@context': 'https://schema.org', '@type': 'Service', name: 'AI Search Optimization (GEO)', description: 'Make your business visible in ChatGPT, Perplexity, Google AI Overviews, and Gemini.', provider: { '@type': 'Organization', name: 'Found It Marketing' }, areaServed: { '@type': 'Country', name: 'United States' } },
  { '@context': 'https://schema.org', '@type': 'Service', name: 'Local SEO', description: 'Google Business Profile optimization, local citations, and review management.', provider: { '@type': 'Organization', name: 'Found It Marketing' }, areaServed: { '@type': 'Country', name: 'United States' } },
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
