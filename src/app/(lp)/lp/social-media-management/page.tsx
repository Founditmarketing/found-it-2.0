import type { Metadata } from 'next';
import { SocialMediaLPContent } from './content';
import { buildFAQSchema, buildLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Social Media Management Services | Found It Marketing',
  description: 'Organic social, paid ads, and full-stack social media management for businesses across Louisiana and Texas. Real strategy. Real engagement. Real leads.',
  openGraph: { title: 'Social Media Management | Found It Marketing', description: 'Organic social, paid ads, and full-stack social strategy. 100+ businesses managed.', type: 'website', url: 'https://founditmarketing.com/lp/social-media-management' },
  robots: { index: true, follow: true },
  alternates: { canonical: '/lp/social-media-management' },
};

const faqItems = [
  { question: 'Which platforms do you manage?', answer: 'Facebook, Instagram, LinkedIn, TikTok, and Google Business Profile. Most local businesses see the highest ROI from Facebook + Instagram, which is where we typically recommend starting.' },
  { question: 'Do you create the content or do I provide it?', answer: 'We create everything — photography direction, graphic design, copywriting, and scheduling. You just approve. If you have existing brand assets or photos, we incorporate those too.' },
  { question: 'Can I approve posts before they go live?', answer: 'Absolutely. Every post goes through an approval workflow before publishing. You see everything in advance and can request changes. Nothing goes live without your green light.' },
  { question: "What's included in paid ads management?", answer: 'Campaign strategy, audience research, creative production, A/B testing, weekly optimization, and detailed performance reporting. You pay ad spend directly to the platform — full transparency.' },
  { question: 'Is there a contract?', answer: 'Month-to-month. We recommend a 90-day initial commitment to see real traction, but we never lock you in. Results earn your business, not paperwork.' },
];

const faqSchema = buildFAQSchema(faqItems);
const localBusinessSchema = buildLocalBusinessSchema({ priceRange: '$$' });

export default function SocialMediaLP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <SocialMediaLPContent />
    </>
  );
}
