import type { Metadata } from 'next';
import { AISearchSEOContent } from './content';

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

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is GEO (Generative Engine Optimization)?', acceptedAnswer: { '@type': 'Answer', text: 'GEO is the practice of optimizing your business to appear in AI-generated search results — ChatGPT, Perplexity, Google AI Overviews, and Gemini. It involves entity optimization, AI-citable content architecture, and structured data designed for answer engines.' } },
    { '@type': 'Question', name: 'Is traditional SEO dead?', acceptedAnswer: { '@type': 'Answer', text: 'No. Traditional SEO feeds the AI engines — they pull from the same sources. SEO is now the foundation that GEO builds on. You need both.' } },
    { '@type': 'Question', name: 'How long until I start showing up in AI search?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients see initial AI mentions within 60-90 days. Full optimization across all platforms typically takes 4-6 months of consistent work.' } },
    { '@type': 'Question', name: 'Do you guarantee rankings?', acceptedAnswer: { '@type': 'Answer', text: 'No. Anyone who guarantees rankings in Google or AI search is either lying or about to get penalized. We guarantee strategy, execution, and transparent reporting — not outcomes we can\'t control.' } },
    { '@type': 'Question', name: "What's the difference between SEO and GEO?", acceptedAnswer: { '@type': 'Answer', text: 'SEO optimizes for traditional search engine results pages. GEO optimizes for AI-generated answers. SEO focuses on keywords and links; GEO focuses on entity authority, structured data, and AI-citable content.' } },
    { '@type': 'Question', name: 'How does AI search optimization actually work?', acceptedAnswer: { '@type': 'Answer', text: 'We optimize your business entity across knowledge graphs, build content structured for AI citation, implement advanced schema markup, and build the authority signals that AI engines use to recommend businesses.' } },
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org', '@type': 'ProfessionalService',
  name: 'Found It Marketing', url: 'https://founditmarketing.com', telephone: '+13182800115',
  address: { '@type': 'PostalAddress', streetAddress: '3803 Rue Left Bank', addressLocality: 'Alexandria', addressRegion: 'LA', postalCode: '71303', addressCountry: 'US' },
  geo: { '@type': 'GeoCoordinates', latitude: 31.2829, longitude: -92.4812 },
  priceRange: '$$$',
};

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
