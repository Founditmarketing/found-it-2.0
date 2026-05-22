import type { Metadata } from 'next';
import { GoogleAdsLPContent } from './content';
import { buildFAQSchema, buildLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Google Ads Management | Get More Leads in 60 Days',
  description:
    'Google Ads management that gets results. Weekly optimization, transparent reporting, no contracts. Free audit included.',
  openGraph: {
    title: 'Google Ads Management | Get More Leads in 60 Days',
    description:
      'Google Ads management that gets results. Weekly optimization, no contracts. Free audit.',
    type: 'website',
    url: 'https://founditmarketing.com/lp/google-ads-management',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Management | Get More Leads in 60 Days',
    description: 'Google Ads management that gets results. Weekly optimization, no contracts. Free audit.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/lp/google-ads-management' },
};

const faqItems = [
  { question: 'How much should I spend on Google Ads?', answer: "Most local businesses start between $1,500-$5,000/month in ad spend. The right number depends on what a customer is worth to you and how fast you want to grow. We'll give you specific numbers in the free audit." },
  { question: 'How fast will I see results?', answer: "Most clients see leads in the first week. Real optimization — where your cost per lead drops and lead quality goes up — takes about 60 days. Anyone promising overnight results is either lying or burning your budget." },
  { question: 'Is there a contract?', answer: "No. Month-to-month. Cancel anytime with 30 days notice. We keep clients by getting results, not by locking them in." },
];

const faqSchema = buildFAQSchema(faqItems);
const localBusinessSchema = buildLocalBusinessSchema();

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Google Ads Management',
  description: 'Google Ads management for local service businesses. Weekly optimization, conversion tracking, transparent reporting.',
  provider: { '@type': 'Organization', name: 'Found It Marketing', url: 'https://founditmarketing.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: 'PPC Management',
};

export default function GoogleAdsLP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <GoogleAdsLPContent />
    </>
  );
}
