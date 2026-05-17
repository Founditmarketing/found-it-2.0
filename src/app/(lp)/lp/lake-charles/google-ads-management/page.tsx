import type { Metadata } from 'next';
import { LakeCharlesGoogleAdsContent } from './content';
import { buildFAQSchema, buildLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Lake Charles Google Ads Management | PPC Agency for Industrial & Commercial Businesses | Found It Marketing',
  description:
    'Google Ads management for Lake Charles industrial, construction, and service businesses. Weekly optimization, transparent reporting, no contracts. Free audit with John.',
  openGraph: {
    title: 'Lake Charles Google Ads Management | PPC Agency for Industrial & Commercial Businesses | Found It Marketing',
    description:
      'Google Ads management for Lake Charles industrial, construction, and service businesses. Weekly optimization, transparent reporting, no contracts.',
    type: 'website',
    url: 'https://founditmarketing.com/lp/lake-charles/google-ads-management',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lake Charles Google Ads Management | Found It Marketing',
    description:
      'Google Ads management for Lake Charles industrial, construction, and service businesses. Weekly optimization, transparent reporting, no contracts.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/lp/lake-charles/google-ads-management' },
};

/* ─── FAQ Data (server-rendered for SEO) ─── */
const faqItems = [
  {
    question: 'Do you have experience with industrial and contractor businesses?',
    answer:
      "Yes. We manage Google Ads for contractors, oilfield service businesses, manufacturers, automotive companies, and industrial suppliers. We know the search terms your buyers use and we know how to filter out residential leads when you only want commercial work.",
  },
  {
    question: 'How much should I spend on Google Ads?',
    answer:
      "Most industrial and commercial service businesses start between $2,000-$8,000/month in ad spend. The right number depends on your average customer value, your local competition, and how aggressively you want to grow. We'll model it out in your free audit — including realistic ROI projections at each spend level.",
  },
  {
    question: 'How quickly will I see results?',
    answer:
      "New campaigns typically generate leads within the first week. Real optimization — where cost per lead drops meaningfully — usually takes 60-90 days as Google's algorithm learns from your conversion data. Anyone promising overnight results is either lying or burning your budget on bad clicks.",
  },
  {
    question: 'What if I\'m already running ads with another agency?',
    answer:
      "Even better — we'll audit what's already running and usually find quick wins in week one. We work inside your existing account so you keep ownership and historical data. If you ever leave us, you keep everything we built.",
  },
  {
    question: 'Will you mark up my ad spend?',
    answer:
      "No. You pay Google directly through your own account. We charge a separate management fee. No bundled invoices, no hidden margins, no spend markup. Full transparency, every dollar accounted for.",
  },
  {
    question: 'Is there a contract?',
    answer:
      "No. Month-to-month, cancel anytime with 30 days notice. We earn your business every month — that's the only sustainable model.",
  },
];

/* ─── JSON-LD Schemas (server-rendered in document head) ─── */
const faqSchema = buildFAQSchema(faqItems);

const localBusinessSchema = buildLocalBusinessSchema({
  description:
    'Google Ads management and digital marketing agency serving industrial, construction, and energy businesses across Southwest Louisiana.',
  areaServed: [
    { '@type': 'City', name: 'Lake Charles', containedInPlace: { '@type': 'State', name: 'Louisiana' } },
    { '@type': 'State', name: 'Louisiana' },
    { '@type': 'State', name: 'Texas' },
    { '@type': 'Country', name: 'United States' },
  ],
});

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Google Ads Management',
  description:
    'Expert Google Ads management for industrial, construction, and commercial service businesses in Lake Charles and Southwest Louisiana. Weekly optimization, conversion tracking, transparent reporting.',
  provider: {
    '@type': 'Organization',
    name: 'Found It Marketing',
    url: 'https://founditmarketing.com',
  },
  areaServed: [
    { '@type': 'City', name: 'Lake Charles' },
    { '@type': 'AdministrativeArea', name: 'Lake Charles MSA' },
    { '@type': 'State', name: 'Louisiana' },
  ],
  serviceType: 'PPC Management',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://founditmarketing.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://founditmarketing.com/solutions' },
    { '@type': 'ListItem', position: 3, name: 'Lake Charles Google Ads Management', item: 'https://founditmarketing.com/lp/lake-charles/google-ads-management' },
  ],
};

export default function LakeCharlesGoogleAdsLP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LakeCharlesGoogleAdsContent />
    </>
  );
}
