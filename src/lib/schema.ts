/* ─── Structured Data Helpers ─── */
/* Reusable JSON-LD schema builders for SEO / Rich Results */

import { phoneTel } from './phone';

export interface FAQItemData {
  question: string;
  answer: string;
}

/**
 * Build a valid FAQPage JSON-LD object from an array of Q&A items.
 * @see https://schema.org/FAQPage
 */
export function buildFAQSchema(items: FAQItemData[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * Build a standard LocalBusiness / ProfessionalService JSON-LD object.
 * Reads phone from the centralized phone utility.
 */
export function buildLocalBusinessSchema(overrides?: {
  description?: string;
  priceRange?: string;
  areaServed?: unknown[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Found It Marketing',
    url: 'https://founditmarketing.com',
    telephone: `+1${phoneTel}`,
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
    ...(overrides?.description && { description: overrides.description }),
    priceRange: overrides?.priceRange || '$$$',
    ...(overrides?.areaServed && { areaServed: overrides.areaServed }),
    sameAs: [
      'https://www.facebook.com/founditmarketing',
      'https://www.instagram.com/founditmarketing',
    ],
  };
}
