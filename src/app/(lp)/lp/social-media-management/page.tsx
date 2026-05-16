import type { Metadata } from 'next';
import { SocialMediaLPContent } from './content';

export const metadata: Metadata = {
  title: 'Social Media Management Services | Found It Marketing',
  description: 'Organic social, paid ads, and full-stack social media management for businesses across Louisiana and Texas. Real strategy. Real engagement. Real leads.',
  openGraph: { title: 'Social Media Management | Found It Marketing', description: 'Organic social, paid ads, and full-stack social strategy. 100+ businesses managed.', type: 'website', url: 'https://founditmarketing.com/lp/social-media-management' },
  robots: { index: true, follow: true },
  alternates: { canonical: '/lp/social-media-management' },
};

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Which platforms do you manage?', acceptedAnswer: { '@type': 'Answer', text: 'We manage Facebook, Instagram, LinkedIn, TikTok, and Google Business Profile. Most clients focus on Facebook + Instagram as the highest-ROI platforms for local businesses.' } },
    { '@type': 'Question', name: 'Do you create the content or do I provide it?', acceptedAnswer: { '@type': 'Answer', text: 'We create everything — photography direction, graphic design, copywriting, and scheduling. You just approve. If you have existing brand assets or photos, we incorporate those too.' } },
    { '@type': 'Question', name: 'Can I approve posts before they go live?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Every post goes through an approval workflow before publishing. You see everything in advance and can request changes.' } },
    { '@type': 'Question', name: "What's included in paid ads management?", acceptedAnswer: { '@type': 'Answer', text: 'Campaign strategy, audience research, creative production, A/B testing, weekly optimization, and detailed performance reporting. You pay ad spend directly to the platform.' } },
    { '@type': 'Question', name: 'Is there a contract?', acceptedAnswer: { '@type': 'Answer', text: 'Month-to-month. We recommend a 90-day initial commitment to see real traction, but we never lock you in. Results earn your business, not paperwork.' } },
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org', '@type': 'ProfessionalService',
  name: 'Found It Marketing', url: 'https://founditmarketing.com', telephone: '+13182800115',
  address: { '@type': 'PostalAddress', streetAddress: '3803 Rue Left Bank', addressLocality: 'Alexandria', addressRegion: 'LA', postalCode: '71303', addressCountry: 'US' },
  priceRange: '$$',
};

export default function SocialMediaLP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <SocialMediaLPContent />
    </>
  );
}
