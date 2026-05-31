import type { Metadata } from 'next';
import { LakeCharlesGoogleAdsContent } from './content';
import { buildFAQSchema, buildLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Lake Charles Google Ads Management | More Leads in 60 Days',
  description:
    'Google Ads management for Lake Charles businesses. Weekly optimization, transparent reporting, no contracts. Free audit included.',
  openGraph: {
    title: 'Lake Charles Google Ads Management | More Leads in 60 Days',
    description: 'Google Ads management for Lake Charles businesses. Weekly optimization, no contracts. Free audit.',
    type: 'website',
    url: 'https://founditmarketing.com/lp/lake-charles/google-ads-management',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/lp/lake-charles/google-ads-management' },
};

const faqItems = [
  { question: 'Do you have experience with industrial and contractor businesses?', answer: "Yes. We manage Google Ads for contractors, oilfield service companies, manufacturers, and industrial suppliers. We know your search terms, and we know how to filter out residential leads when you only want commercial work." },
  { question: 'How much should I spend on Google Ads?', answer: "Most industrial and commercial businesses start between $2,000 and $8,000/month. The right number depends on what a customer is worth to you. You'll get specific projections in the free audit." },
  { question: "What's the catch with the free audit?", answer: "There isn't one. We review your account, show you where money is leaking, and hand you the plan. If we can't find at least $500 in wasted spend, we send you a $50 gift card for your time. You keep the findings either way." },
  { question: 'Who actually manages my account?', answer: "A senior strategist, not an intern. The same person who audits your account is the one optimizing it every week, and you'll know exactly who to call." },
  { question: 'Do I own my ad account and data?', answer: "Yes. We work inside your own Google Ads account. Your campaigns, conversion history, and data are yours, and you keep everything we built if you leave." },
  { question: 'Is there a contract?', answer: "No. Month-to-month, cancel anytime with 30 days notice. We keep clients by getting results, not by locking them in." },
];

const faqSchema = buildFAQSchema(faqItems);
const localBusinessSchema = buildLocalBusinessSchema({
  description: 'Google Ads management for industrial and commercial businesses in Southwest Louisiana.',
  areaServed: [
    { '@type': 'City', name: 'Lake Charles', containedInPlace: { '@type': 'State', name: 'Louisiana' } },
    { '@type': 'State', name: 'Louisiana' },
    { '@type': 'Country', name: 'United States' },
  ],
});

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Google Ads Management',
  description: 'Google Ads management for industrial and commercial businesses in Lake Charles and Southwest Louisiana.',
  provider: { '@type': 'Organization', name: 'Found It Marketing', url: 'https://founditmarketing.com' },
  areaServed: [
    { '@type': 'City', name: 'Lake Charles' },
    { '@type': 'AdministrativeArea', name: 'Lake Charles MSA' },
    { '@type': 'State', name: 'Louisiana' },
  ],
  serviceType: 'PPC Management',
};

export default function LakeCharlesGoogleAdsLP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <LakeCharlesGoogleAdsContent />
    </>
  );
}
