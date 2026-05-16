import type { Metadata } from 'next';
import { GoogleAdsLPContent } from './content';

export const metadata: Metadata = {
  title: 'Google Ads Management for Local Businesses | Found It Marketing',
  description:
    'Stop wasting ad spend. Our Google Ads management delivers real leads for local service businesses — plumbers, contractors, medical practices & more. Free audit included.',
  openGraph: {
    title: 'Google Ads Management for Local Businesses | Found It Marketing',
    description:
      'Stop wasting ad spend. Get real leads with expert Google Ads management from a 13-year agency veteran. Free strategy session.',
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
        text: 'Most local service businesses start between $1,500-$5,000/month in ad spend. The right number depends on your average customer value, your local competition, and how aggressive you want to grow. We\'ll model it out for you in the free audit — including what a realistic ROI looks like at each spend level.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly will I see results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New campaigns typically generate leads within the first week. Real optimization — where cost per lead drops meaningfully — usually takes 60-90 days as Google\'s algorithm learns from your conversion data. Anyone promising overnight results is either lying or burning through your budget on bad clicks.',
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
        text: 'We manage Google Ads for 250+ local service businesses including medical practices, law firms, contractors, dealerships, home services, and professional services. If you\'ve got a service-based business with a definable customer area, we know how to run ads for you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I already have a Google Ads account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Even better — we can audit what\'s already running and usually find quick wins in week one. We work inside your existing account so you keep full ownership and historical data. If you ever leave, you keep everything we built.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a contract?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Month-to-month, cancel anytime with 30 days notice. The only reason to lock clients into long contracts is if you can\'t deliver results consistently — we can, so we don\'t.',
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
  priceRange: '$$$',
};

export default function GoogleAdsLP() {
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
      <GoogleAdsLPContent />
    </>
  );
}
