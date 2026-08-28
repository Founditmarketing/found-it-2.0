import type { Metadata } from 'next';
import { AISearchSEOContent } from './content';
import { buildFAQSchema, buildServiceSchema, buildBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'AI Search Optimization | Show Up When AI Recommends Your Industry',
  description:
    'Make sure your business is the answer when customers ask ChatGPT, Perplexity, or Google AI. Free visibility audit. No contracts.',
  openGraph: {
    title: 'AI Search Optimization | Show Up When AI Recommends',
    description: 'Make sure your business is the answer when customers ask AI. Free visibility audit.',
    type: 'website',
    url: 'https://www.founditsoftware.com/lp/ai-search-seo',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/ai-search-optimization' },
};

const faqItems = [
  { question: 'What is AI search optimization?', answer: "It's making sure your business is the answer when people ask AI tools like ChatGPT, Perplexity, or Google AI for a recommendation in your industry. AI engines use different signals than Google's blue links, so it takes a different playbook." },
  { question: 'Is traditional SEO dead?', answer: "No, but ranking #1 on Google no longer means AI will recommend you. You need both working together. We handle the classic local SEO and the new AI visibility layer at the same time." },
  { question: 'How is this different from the SEO I might already pay for?', answer: "Most SEO stops at Google rankings. We also structure your content, schema, and citations so the large language models behind ChatGPT, Gemini, and Perplexity pull you in as the recommended local option." },
  { question: 'How long until I show up in AI search?', answer: "Most clients see initial AI mentions within 60 to 90 days. Consistent visibility across multiple platforms takes 4 to 6 months. We track it and report monthly so you can see the movement." },
  { question: "How do I know it's actually working?", answer: "Every month you get a report showing where AI recommends you, where it doesn't yet, and what we're doing about it, alongside your organic traffic and call volume. Real signals, not vanity metrics." },
  { question: 'Is there a contract?', answer: "No. Month-to-month, cancel anytime with 30 days notice. You keep all the work we've done, including the content and schema, if you leave." },
  { question: "What if it doesn't move the needle?", answer: "Then you cancel, and you keep everything we built. We earn the relationship every month with reporting you can actually read, not with a long contract." },
];

const faqSchema = buildFAQSchema(faqItems);
const serviceSchema = [
  buildServiceSchema({
    name: 'AI Search Optimization (GEO)',
    serviceType: 'Generative Engine Optimization',
    description: 'Make your business visible in ChatGPT, Perplexity, Google AI Overviews, and Gemini.',
    url: '/lp/ai-search-seo',
  }),
  buildServiceSchema({
    name: 'Local SEO',
    serviceType: 'Local SEO',
    description: 'Google Business Profile optimization, local citations, and review management.',
    url: '/lp/ai-search-seo',
  }),
];
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'AI Search Optimization', url: '/lp/ai-search-seo' },
]);

export default function AISearchSEOPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {serviceSchema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <AISearchSEOContent />
    </>
  );
}
