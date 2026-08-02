import type { Metadata } from 'next';
import { LakeCharlesWebDesignContent } from './content';
import { buildFAQSchema, buildServiceSchema, buildBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Lake Charles Web Design | Websites That Win Bids',
  description:
    'Web design for Lake Charles contractors and service businesses. Mobile-first, fast-loading, owned by you. Live in 2 weeks or less.',
  openGraph: {
    title: 'Lake Charles Web Design | Websites That Win Bids',
    description: 'Web design for Lake Charles contractors. Live in 2 weeks or less.',
    type: 'website',
    url: 'https://founditmarketing.com/lp/lake-charles/web-design',
    images: [{ url: '/og-image-v2.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/lp/lake-charles/web-design' },
};

const faqItems = [
  { question: 'How long does it take?', answer: "2 weeks or less from kickoff to launch. Larger builds with custom integrations may take slightly longer, but you get a firm timeline on the first call." },
  { question: 'How much does a new website cost?', answer: "We quote a clear, flat price up front based on what your business actually needs. No hourly surprises and no scope-creep invoices. You'll know the full number before you commit." },
  { question: 'Do you work with industrial and B2B businesses?', answer: "Yes, it's most of what we do. Trucking, construction, fabrication, oilfield services, manufacturing. We know how to build for procurement managers, not just consumers." },
  { question: 'Who owns the website?', answer: "You do. Your domain, your code, your content, your hosting account. If you ever leave, you take everything with you. No lock-in." },
  { question: 'What if I need changes after launch?', answer: "60 days of free post-launch optimization is included. After that, most clients move to a maintenance plan starting at $250/mo. No long-term contracts." },
  { question: 'What if you miss the launch date?', answer: "If your site isn't ready on the date we promise, we take $500 off the final invoice. We stand behind our timeline." },
];

const faqSchema = buildFAQSchema(faqItems);
const serviceSchema = buildServiceSchema({
  name: 'Web Design Services',
  serviceType: 'Web Design',
  description: 'Custom web design for industrial and commercial businesses in Lake Charles and Southwest Louisiana.',
  url: '/lp/lake-charles/web-design',
  areaServed: [
    { type: 'City', name: 'Lake Charles' },
    { type: 'AdministrativeArea', name: 'Lake Charles MSA' },
    { type: 'State', name: 'Louisiana' },
  ],
});
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Lake Charles Web Design', url: '/lp/lake-charles/web-design' },
]);

export default function LakeCharlesWebDesignLP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LakeCharlesWebDesignContent />
    </>
  );
}
