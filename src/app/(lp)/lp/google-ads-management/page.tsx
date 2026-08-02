import type { Metadata } from 'next';
import { GoogleAdsLPContent } from './content';
import { buildFAQSchema, buildServiceSchema, buildBreadcrumbSchema } from '@/lib/schema';

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
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Management | Get More Leads in 60 Days',
    description: 'Google Ads management that gets results. Weekly optimization, no contracts. Free audit.',
    images: ['/og-image-v3.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/google-ads-management' },
};

const faqItems = [
  { question: 'How much should I spend on Google Ads?', answer: "Most local businesses start between $1,500 and $5,000/month in ad spend. The right number depends on what a customer is worth to you and how fast you want to grow. You'll get specific projections in the free audit." },
  { question: 'How fast will I see results?', answer: "Most clients see leads in the first week. Real optimization, where your cost per lead drops and lead quality climbs, takes about 60 to 90 days. Anyone promising overnight results is either lying or burning your budget." },
  { question: "What's the catch with the free audit?", answer: "There isn't one. We review your account, show you where money is leaking, and hand you the plan. If we can't find at least $500 in wasted spend, we send you a $50 gift card for your time. You keep the findings either way." },
  { question: 'Who actually manages my account?', answer: "A senior strategist, not a junior who Googles the answers. The same person who audits your account is the one optimizing it every week. You'll know exactly who to call." },
  { question: 'Do I own my ad account and data?', answer: "Yes. We work inside your own Google Ads account. Your campaigns, conversion history, and data are yours. If you ever leave, you keep everything we built." },
  { question: 'Is there a contract?', answer: "No. Month-to-month, cancel anytime with 30 days notice. We keep clients by getting results, not by locking them in." },
  { question: "What if it just doesn't work for my business?", answer: "Then you fire us, and you keep the account, the data, and everything we built. No long-term lock-in. We only stay if the numbers make sense for you." },
];

const faqSchema = buildFAQSchema(faqItems);
const serviceSchema = buildServiceSchema({
  name: 'Google Ads Management',
  serviceType: 'PPC Management',
  description: 'Google Ads management for local service businesses. Weekly optimization, conversion tracking, transparent reporting.',
  url: '/lp/google-ads-management',
});
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Google Ads Management', url: '/lp/google-ads-management' },
]);

export default function GoogleAdsLP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GoogleAdsLPContent />
    </>
  );
}
