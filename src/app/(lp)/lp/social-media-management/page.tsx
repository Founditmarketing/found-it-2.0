import type { Metadata } from 'next';
import { SocialMediaLPContent } from './content';
import { buildFAQSchema, buildServiceSchema, buildBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Social Media Management | Content That Gets Calls, Not Just Likes',
  description:
    'Social media management for local businesses. Real content, real strategy, real leads. Free 30-day content plan. No contracts.',
  openGraph: {
    title: 'Social Media Management | Content That Gets Calls',
    description: 'Social media management for local businesses. Free 30-day content plan.',
    type: 'website',
    url: 'https://founditmarketing.com/lp/social-media-management',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Management | Content That Gets Calls',
    description: 'Social media management for local businesses. Free 30-day content plan.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/social-media-management' },
};

const faqItems = [
  { question: 'Which platforms do you manage?', answer: "Facebook, Instagram, LinkedIn, TikTok, and Google Business Profile. Most local businesses get the best results starting with Facebook and Instagram." },
  { question: 'Do you create the content or do I?', answer: "We create everything: graphics, copy, and scheduling. You just approve before it goes live. Nothing posts without your green light." },
  { question: 'How much does social media management cost?', answer: "We keep pricing simple and flat, scoped to the platforms and posting volume you need. You'll get a clear monthly number up front, with no setup fees that lock you in." },
  { question: 'Do you shoot photos and video too?', answer: "Yes. We can produce content for you or direct what you capture on your phone, then turn it into a steady stream of posts, reels, and ads. You stay in full control of what goes out." },
  { question: 'How fast will I see results?', answer: "Reach and engagement usually move in the first month. Real traction, more calls and bookings, typically takes about 90 days of consistent, strategic posting. We recommend giving it that runway." },
  { question: 'How do you measure success?', answer: "We track calls, leads, and bookings, not likes. Every month you get a report showing what actually moved the needle for your business, with the vanity metrics left where they belong." },
  { question: 'Is there a contract?', answer: "No. Month-to-month. We recommend 90 days to see real traction, but we never lock you in." },
];

const faqSchema = buildFAQSchema(faqItems);
const serviceSchema = buildServiceSchema({
  name: 'Social Media Management',
  serviceType: 'Social Media Marketing',
  description: 'Done-for-you social media management for local businesses: content creation, strategy, and reporting focused on calls and leads.',
  url: '/lp/social-media-management',
});
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Social Media Management', url: '/lp/social-media-management' },
]);

export default function SocialMediaLP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SocialMediaLPContent />
    </>
  );
}
