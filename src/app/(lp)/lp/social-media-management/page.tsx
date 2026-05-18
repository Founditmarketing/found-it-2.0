import type { Metadata } from 'next';
import { SocialMediaLPContent } from './content';
import { buildFAQSchema, buildLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Social Media Management | Content That Gets Calls, Not Just Likes | Found It Marketing',
  description:
    'Social media management for local businesses. Real content, real strategy, real leads. Free 30-day content plan. No contracts.',
  openGraph: {
    title: 'Social Media Management | Content That Gets Calls | Found It Marketing',
    description: 'Social media management for local businesses. Free 30-day content plan.',
    type: 'website',
    url: 'https://founditmarketing.com/lp/social-media-management',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/lp/social-media-management' },
};

const faqItems = [
  { question: 'Which platforms do you manage?', answer: "Facebook, Instagram, LinkedIn, TikTok, and Google Business Profile. Most local businesses get the best results starting with Facebook + Instagram." },
  { question: 'Do you create the content or do I?', answer: "We create everything — graphics, copy, scheduling. You just approve before it goes live. Nothing posts without your green light." },
  { question: 'Is there a contract?', answer: "No. Month-to-month. We recommend 90 days to see real traction, but we never lock you in." },
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
