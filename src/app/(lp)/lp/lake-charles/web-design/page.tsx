import type { Metadata } from 'next';
import { LakeCharlesWebDesignContent } from './content';
import { buildFAQSchema, buildLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Lake Charles Web Design | Custom Websites for Industrial & Commercial Businesses | Found It Marketing',
  description:
    'Custom web design for Lake Charles industrial, construction, and energy businesses. Mobile-first, conversion-optimized, owned by you. Free concept call with John.',
  openGraph: {
    title: 'Lake Charles Web Design | Custom Websites for Industrial & Commercial Businesses | Found It Marketing',
    description:
      'Custom web design for Lake Charles industrial, construction, and energy businesses. Mobile-first, conversion-optimized, owned by you.',
    type: 'website',
    url: 'https://founditmarketing.com/lp/lake-charles/web-design',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lake Charles Web Design | Custom Websites for Industrial & Commercial Businesses',
    description:
      'Custom web design for Lake Charles industrial, construction, and energy businesses. Mobile-first, conversion-optimized, owned by you.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/lp/lake-charles/web-design' },
};

/* ─── FAQ Data (server-rendered for SEO) ─── */
const faqItems = [
  {
    question: 'Do you work with B2B industrial businesses?',
    answer:
      "Yes — it's a big part of what we do. Our portfolio includes commercial trucking, construction, fabrication, oilfield services, utility contractors, and industrial supply businesses. We understand the buyer journey for a quote request from a procurement manager versus an emergency call from a foreman.",
  },
  {
    question: 'Can your site integrate with our CRM or quoting system?',
    answer:
      "Yes. We integrate with most major CRMs (HubSpot, Salesforce, Pipedrive, Zoho), and we can build custom integrations with quoting tools, parts databases, or operational software. Tell us what you use during the discovery call and we'll scope it.",
  },
  {
    question: 'How long does the full process take?',
    answer:
      "A standard build is 4-6 weeks from kickoff to launch. Larger sites with custom integrations or 25+ pages extend to 8-10 weeks. We give you a firm timeline after the discovery call.",
  },
  {
    question: 'What if our business has technical specs, certifications, or compliance content?',
    answer:
      "We've built sites with detailed certification displays, equipment specs, MSDS documents, and ISN/safety compliance content. We know how to make technical content accessible without dumbing it down — your buyers should be able to find what they need fast.",
  },
  {
    question: 'Do you build for mobile-first?',
    answer:
      "Yes. Your buyers are checking you from trucks, job sites, and trailers. We design mobile-first and test on real devices, not just browser emulators. Every site we launch hits 90+ Lighthouse mobile performance.",
  },
  {
    question: 'What if we need ongoing updates after launch?',
    answer:
      "Included: 60 days of free post-launch optimization. After that, most clients move to a monthly maintenance plan starting at $250/mo — covers content updates, security patches, performance monitoring, and ongoing optimization. No long contracts.",
  },
];

/* ─── JSON-LD Schemas (server-rendered in document head) ─── */
const faqSchema = buildFAQSchema(faqItems);

const localBusinessSchema = buildLocalBusinessSchema({
  description:
    'Custom web design and digital marketing agency serving industrial, construction, and energy businesses across Southwest Louisiana.',
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
  name: 'Web Design Services',
  description:
    'Custom web design for industrial, construction, and commercial businesses in the Lake Charles metro and Southwest Louisiana. Mobile-first, conversion-optimized, fully owned by the client.',
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
  serviceType: 'Web Design',
};

export default function LakeCharlesWebDesignLP() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <LakeCharlesWebDesignContent />
    </>
  );
}
