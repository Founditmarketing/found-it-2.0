import type { Metadata } from 'next';
import { LakeCharlesWebDesignContent } from './content';
import { buildFAQSchema, buildLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Lake Charles Web Design | Websites That Win Bids',
  description:
    'Web design for Lake Charles contractors and service businesses. Mobile-first, fast-loading, owned by you. Live in 6 weeks.',
  openGraph: {
    title: 'Lake Charles Web Design | Websites That Win Bids',
    description: 'Web design for Lake Charles contractors. Live in 6 weeks.',
    type: 'website',
    url: 'https://founditmarketing.com/lp/lake-charles/web-design',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/lp/lake-charles/web-design' },
};

const faqItems = [
  { question: 'How long does it take?', answer: "4 to 6 weeks from kickoff to launch. Larger builds with custom integrations extend to 8-10 weeks. You get a firm timeline on the first call." },
  { question: 'Do you work with industrial and B2B businesses?', answer: "Yes — it's most of what we do. Trucking, construction, fabrication, oilfield services, manufacturing. We know how to build for procurement managers, not just consumers." },
  { question: 'What if I need changes after launch?', answer: "60 days of free post-launch optimization is included. After that, most clients move to a maintenance plan starting at $250/mo. No long-term contracts." },
];

const faqSchema = buildFAQSchema(faqItems);
const localBusinessSchema = buildLocalBusinessSchema({
  description: 'Custom web design for industrial and commercial businesses in Southwest Louisiana.',
  areaServed: [
    { '@type': 'City', name: 'Lake Charles', containedInPlace: { '@type': 'State', name: 'Louisiana' } },
    { '@type': 'State', name: 'Louisiana' },
    { '@type': 'Country', name: 'United States' },
  ],
});

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Design Services',
  description: 'Custom web design for industrial and commercial businesses in Lake Charles and Southwest Louisiana.',
  provider: { '@type': 'Organization', name: 'Found It Marketing', url: 'https://founditmarketing.com' },
  areaServed: [
    { '@type': 'City', name: 'Lake Charles' },
    { '@type': 'AdministrativeArea', name: 'Lake Charles MSA' },
    { '@type': 'State', name: 'Louisiana' },
  ],
  serviceType: 'Web Design',
};

export default function LakeCharlesWebDesignLP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <LakeCharlesWebDesignContent />
    </>
  );
}
