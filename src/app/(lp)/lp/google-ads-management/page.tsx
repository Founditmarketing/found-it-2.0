import type { Metadata } from 'next';
import { GoogleAdsLPContent } from './content';

export const metadata: Metadata = {
  title: 'Google Ads Management for Local Businesses | Found It Marketing',
  description:
    'Transparent, weekly-optimized Google Ads management. No contracts. You own your account. Free audit included. Trusted by 250+ businesses across Louisiana, Texas, and 46 other states.',
  openGraph: {
    title: 'Google Ads Management for Local Businesses | Found It Marketing',
    description:
      'Transparent, weekly-optimized Google Ads management. No contracts. Free audit included. 250+ businesses served.',
    type: 'website',
    url: 'https://founditmarketing.com/lp/google-ads-management',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/lp/google-ads-management' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much should I spend on Google Ads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most local service businesses start between $1,500-$5,000/month in ad spend. The right number depends on your average customer value, your local competition, and how aggressive you want to grow. We'll model it out for you in the free audit — including what a realistic ROI looks like at each spend level.",
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly will I see results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "New campaigns typically generate leads within the first week. Real optimization — where cost per lead drops meaningfully — usually takes 60-90 days as Google's algorithm learns from your conversion data. Anyone promising overnight results is either lying or burning through your budget on bad clicks.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you manage the ad spend or just charge a management fee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We charge a separate management fee on top of your ad spend. You pay Google directly through your own account. We never mark up ad spend or hide costs in a single bundled invoice — full transparency, every dollar accounted for.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries do you specialize in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We manage Google Ads for 250+ local service businesses including medical practices, law firms, contractors, dealerships, home services, and professional services. If you've got a service-based business with a definable customer area, we know how to run ads for you.",
      },
    },
    {
      '@type': 'Question',
      name: 'What if I already have a Google Ads account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Even better — we can audit what's already running and usually find quick wins in week one. We work inside your existing account so you keep full ownership and historical data. If you ever leave, you keep everything we built.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a contract?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Month-to-month, cancel anytime with 30 days notice. The only reason to lock clients into long contracts is if you can't deliver results consistently — we can, so we don't.",
      },
    },
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Found It Marketing',
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
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
  priceRange: '$$$',
  sameAs: [
    'https://www.facebook.com/founditmarketing',
    'https://www.instagram.com/founditmarketing',
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Google Ads Management',
  description:
    'Expert Google Ads management for local service businesses. Campaign architecture, weekly optimization, conversion tracking, and transparent reporting.',
  provider: {
    '@type': 'Organization',
    name: 'Found It Marketing',
    url: 'https://founditmarketing.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: 'PPC Management',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://founditmarketing.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://founditmarketing.com/solutions',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Google Ads Management',
      item: 'https://founditmarketing.com/lp/google-ads-management',
    },
  ],
};

export default function GoogleAdsLP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GoogleAdsLPContent />
    </>
  );
}
