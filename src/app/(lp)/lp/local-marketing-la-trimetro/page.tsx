import type { Metadata } from 'next';
import { LocalMarketingTriMetroContent } from './content';
import { buildFAQSchema, buildServiceSchema, buildBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Local Marketing Agency in Louisiana | Alexandria, Lake Charles & Cenla',
  description:
    'A local Louisiana marketing team you can actually meet. Google Ads, web design, and SEO from named senior strategists in Alexandria. No contracts. Free strategy call.',
  openGraph: {
    title: 'Local Marketing Agency in Louisiana | Alexandria, Lake Charles & Cenla',
    description:
      'Google Ads, web design, and SEO from a named senior team in Alexandria, LA. No contracts. Free in-person strategy call.',
    type: 'website',
    url: 'https://founditmarketing.com/lp/local-marketing-la-trimetro',
    images: [{ url: '/og-image-v2.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/lp/local-marketing-la-trimetro' },
};

const faqItems = [
  { question: 'Are you actually local, or a national agency with a local phone number?', answer: "We're headquartered in Alexandria, Louisiana, and the whole senior team lives and works here. We've served Central and Southwest Louisiana for 13+ years — and we'll drive to your office for the first strategy session to prove it." },
  { question: 'Who actually works on my account?', answer: "A named senior strategist — not a rotating cast of juniors. You'll know exactly who runs your ads, who built your site, and who picks up when you call." },
  { question: "I've been burned by a big agency before. How are you different?", answer: "No contracts (month-to-month, cancel with 30 days notice), you own everything (your ad account, your website, your data), and you can look us in the eye. When you can drive to the office of the people spending your money, accountability stops being a marketing word." },
  { question: 'What services do you actually handle?', answer: "Google Ads, web design, SEO, AI search visibility, and social media — the full local marketing stack. Most clients start with one service and a free audit." },
  { question: 'How much does it cost?', answer: "It depends on the service and your market — most local businesses invest $1,500–$5,000/month all-in. You'll get real numbers on the strategy call, not a teaser quote." },
  { question: 'Is there a contract?', answer: "No. Month-to-month, cancel anytime with 30 days notice. We keep clients by getting results, not by locking them in." },
];

const faqSchema = buildFAQSchema(faqItems);
const serviceSchema = buildServiceSchema({
  name: 'Local Marketing Services',
  serviceType: 'Marketing Agency',
  description: 'Full-service local marketing — Google Ads, web design, SEO, and AI search — for businesses in Alexandria, Lake Charles, and Central Louisiana.',
  url: '/lp/local-marketing-la-trimetro',
  areaServed: [
    { type: 'City', name: 'Alexandria' },
    { type: 'City', name: 'Pineville' },
    { type: 'City', name: 'Lake Charles' },
    { type: 'AdministrativeArea', name: 'Central Louisiana' },
    { type: 'State', name: 'Louisiana' },
  ],
});
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Local Marketing — Louisiana Tri-Metro', url: '/lp/local-marketing-la-trimetro' },
]);

export default function LocalMarketingTriMetroLP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LocalMarketingTriMetroContent />
    </>
  );
}
