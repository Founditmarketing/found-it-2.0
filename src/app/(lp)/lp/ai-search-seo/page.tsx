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
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is GEO (Generative Engine Optimization)?', acceptedAnswer: { '@type': 'Answer', text: 'GEO is the discipline of making your business visible and recommended by AI search engines — ChatGPT, Perplexity, Google AI Overviews, Gemini, and others. Where SEO targets ranking on a search results page, GEO targets being the answer when an AI assistant responds to a buying question. Different signals, different content structures, different authority models.' } },
    { '@type': 'Question', name: 'Is traditional SEO dead?', acceptedAnswer: { '@type': 'Answer', text: 'No, but it is not enough anymore. Strong SEO still feeds the AI engines — they pull from sites that already rank well. But ranking #1 on Google does not guarantee an AI will recommend you. You need both layers working together.' } },
    { '@type': 'Question', name: 'How long until I start showing up in AI search?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients see initial mentions in AI responses within 60-90 days of starting GEO work. Consistent visibility across multiple AI platforms typically takes 4-6 months.' } },
    { '@type': 'Question', name: 'Do you guarantee rankings?', acceptedAnswer: { '@type': 'Answer', text: 'No. Anyone who guarantees rankings in Google or AI search is either lying or about to get penalized. We guarantee strategy, execution, transparent reporting, and that we use the same approach we use for ourselves — not outcomes we cannot fully control.' } },
    { '@type': 'Question', name: 'What is the difference between SEO and GEO?', acceptedAnswer: { '@type': 'Answer', text: 'SEO optimizes for ranking on search results pages — keywords, backlinks, on-page optimization, technical performance. GEO optimizes for being cited by AI assistants — entity authority, structured data, AI-citable content patterns, and presence across the sources AI engines pull from.' } },
    { '@type': 'Question', name: 'How does AI search optimization actually work?', acceptedAnswer: { '@type': 'Answer', text: 'Three layers: (1) Make sure your business is a clear entity that AI engines can understand — schema markup, consistent NAP data, knowledge graph presence. (2) Build content specifically structured for AI citation. (3) Build the authority signals AI engines use to decide who to recommend — reviews, expert mentions, and high-quality backlinks from trusted sources.' } },
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
