import type { Metadata } from 'next';
import { WebDesignLPContent } from './content';

export const metadata: Metadata = {
  title: 'Custom Web Design Services | Found It Marketing',
  description:
    'Custom-coded websites for premium businesses across Louisiana and Texas. Built for conversion. Owned by you. See our portfolio.',
  openGraph: {
    title: 'Custom Web Design Services | Found It Marketing',
    description:
      'Custom-coded websites for premium businesses. No templates. No page builders. Built to convert, designed to last.',
    type: 'website',
    url: 'https://founditmarketing.com/lp/web-design',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Web Design Services | Found It Marketing',
    description:
      'Custom-coded websites for premium businesses. No templates. No page builders. Built to convert, designed to last.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/lp/web-design' },
};

/* ─── FAQ Schema (JSON-LD) ─── */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who owns the website when it\'s built?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You do. We build it on your domain, your hosting (or ours if you prefer), and you have full administrative access from day one. No proprietary lock-in, ever.',
      },
    },
    {
      '@type': 'Question',
      name: 'What CMS do you use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build primarily with Next.js and React for maximum performance. For content-heavy sites, we integrate headless CMS solutions like Sanity or Contentful so you can edit pages without touching code.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle hosting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — we offer managed hosting on Vercel with global CDN, automatic SSL, and 99.99% uptime. You can also self-host if you prefer. We\'ll hand over everything.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you redesign my existing site?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We redesign, rebuild, and migrate existing sites regularly. We preserve your SEO equity and domain authority while upgrading your design, performance, and conversion architecture.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the full process take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most projects launch within 4-6 weeks. Simpler sites can be ready in 2-3 weeks. Enterprise builds with custom features and integrations may take 8-12 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I need changes after launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every build includes 60 days of post-launch optimization. After that, our monthly maintenance plans start at $250/mo and include content updates, security patches, and performance monitoring.',
      },
    },
  ],
};

/* ─── LocalBusiness Schema ─── */
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Found It Marketing',
  description: 'Custom web design and digital marketing agency serving businesses across Louisiana, Texas, and 48 states.',
  url: 'https://founditmarketing.com',
  telephone: '+13182800115',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3803 Rue Left Bank',
    addressLocality: 'Alexandria',
    addressRegion: 'LA',
    postalCode: '71303',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.2829,
    longitude: -92.4812,
  },
  areaServed: [
    { '@type': 'State', name: 'Louisiana' },
    { '@type': 'State', name: 'Texas' },
    { '@type': 'Country', name: 'United States' },
  ],
  priceRange: '$$$',
};

export default function WebDesignLP() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <WebDesignLPContent />
    </>
  );
}
