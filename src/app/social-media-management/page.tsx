import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Social Media Management for Local Businesses',
  description:
    'Done-for-you social media management. 13+ years in marketing. Content and paid social that drive calls and bookings. Alexandria, LA.',
  alternates: { canonical: '/social-media-management' },
  openGraph: {
    title: 'Social Media Management for Local Businesses | Found It Software',
    description:
      '13+ years in marketing. We run social for local businesses. Content plus paid ads that drive calls.',
    type: 'website',
    url: 'https://www.founditsoftware.com/social-media-management',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const data: PillarData = {
  name: 'Social Media Management',
  slug: '/social-media-management',
  serviceType: 'Social Media Marketing',
  schemaDescription:
    'Done-for-you social media management for local businesses. Content, strategy, paid social, and reports focused on calls and leads. 13+ years in marketing.',
  eyebrow: 'Social Media Management',
  headline: 'Social Media That Gets Calls,',
  headlineAccent: 'Not Just Likes.',
  intro:
    `We have run marketing for ${TRACK_RECORD.yearsInBusiness} years. We handle it all: graphics, copy, video, scheduling, and paid ads. Built to turn scrolls into booked calls. You approve everything. We do the rest.`,
  ctaLabel: 'Get My Free Strategy Session',
  formSource: 'service_social',
  formPageSlug: 'social-media-management',
  formHeading: 'Get Your Free Social Strategy Session',
  stats: [
    { value: TRACK_RECORD.yearsInBusiness, label: 'Years in Marketing' },
    { value: TRACK_RECORD.googleRating, label: 'Google Rating' },
  ],
  definitionHeading: 'What Does Social Media Management Actually Do?',
  definition:
    'Social media management means we plan, create, schedule, and report on everything posted to your business profiles. When it makes sense, we run paid ads on top. The goal is not likes. It is calls, leads, and bookings. We build around your voice, post steadily, and put budget behind the winners.',
  includedHeading: 'What Our Social Media Management Includes',
  included: [
    { title: 'Content Creation', detail: 'Graphics, captions, and short video built around your voice. No stock posts.' },
    { title: 'Strategy & Calendar', detail: 'A content calendar mapped to your offers, seasons, and market.' },
    { title: 'Paid Social Ads', detail: 'Facebook, Instagram, and TikTok ads that put your offer in front of nearby customers.' },
    { title: 'Community Management', detail: 'We watch comments and messages so leads never sit unanswered.' },
    { title: 'Google Business Profile', detail: 'Posts and updates that strengthen your spot on the map.' },
    { title: 'Real Reporting', detail: 'Monthly reports on calls, leads, and bookings. Not vanity likes.' },
  ],
  approachHeading: 'A Content Engine, Not Random Posting',
  approachIntro:
    `Most social fails because it is random and unmeasured. After ${TRACK_RECORD.yearsInBusiness} years, we know steady posting with a plan wins.`,
  approach: [
    { step: '01', title: 'Learn Your Voice', detail: 'We learn your business, your customers, and what makes you different.' },
    { step: '02', title: 'Build the Engine', detail: 'We build a repeatable system: themes, formats, and a calendar.' },
    { step: '03', title: 'Publish & Amplify', detail: 'We make and schedule everything, then put ad budget behind the winners.' },
    { step: '04', title: 'Measure & Refine', detail: 'Every month we report and double down on what drives calls.' },
  ],
  audienceHeading: "Who This Is For",
  audience: [
    'Local businesses posting inconsistently (or not at all)',
    'Owners with no time to create content themselves',
    'Companies getting likes but no calls or bookings',
    'Service businesses that want a steady stream of content',
    'Brands ready to combine organic content with paid social',
    'Anyone tired of faceless overseas content factories',
  ],
  chipsHeading: 'Platforms We Manage',
  chips: ['Facebook', 'Instagram', 'TikTok', 'LinkedIn', 'YouTube', 'Google Business Profile'],
  result: {
    headline: 'What Results Look Like',
    stats: [
      { value: '3x', label: 'Weekend Bookings' },
      { value: '400%', label: 'Follower Growth' },
      { value: '12K', label: 'Monthly Reach' },
    ],
    narrative:
      'One restaurant posted phone photos with dull captions. We built a real plan: kitchen videos, menu highlights, and Instagram ads within 15 miles. Ninety days later, Friday and Saturday nights stayed booked.',
  },
  mistakesHeading: 'Why Most Social Media Fails',
  mistakes: [
    { title: 'Posting only when you remember', detail: 'Random posting never adds up. A calendar is the biggest predictor of results.' },
    { title: 'Chasing likes instead of leads', detail: 'Likes feel good but pay nothing. We track calls, leads, and bookings.' },
    { title: 'Generic, off-brand content', detail: 'Stock posts from a stranger do not sound like you. We learn your voice.' },
    { title: 'Organic with no amplification', detail: 'Great posts with zero budget barely reach anyone. We put money behind proven winners.' },
  ],
  pricingHeading: 'What It Costs',
  pricing:
    'Pricing is flat and scoped to the platforms and volume you need. No setup fees. Most businesses spend less than one part-time hire. Ad budget is separate and set with you. Month-to-month, cancel anytime.',
  whyUsHeading: 'Why Businesses Choose Found It Marketing',
  whyUs: [
    `${TRACK_RECORD.yearsInBusiness} years of marketing experience.`,
    '2026 CLEDA Highest Traded Revenue Award winner.',
    'We create everything. You approve before it goes live.',
    'We track calls and bookings, not vanity likes.',
    'No long-term contracts. Month-to-month. Cancel anytime.',
  ],
  faqHeading: 'Social Media Management FAQ',
  faq: [
    { question: 'Which platforms do you manage?', answer: 'Facebook, Instagram, LinkedIn, TikTok, YouTube, and Google Business Profile. Most start with Facebook and Instagram.' },
    { question: 'Do you create the content or do I?', answer: 'We create everything. You approve before it goes live. Nothing posts without your green light.' },
    { question: 'How much does social media management cost?', answer: 'Flat pricing scoped to the platforms and volume you need. No setup fees. You get a clear number up front.' },
    { question: 'How long until I see results?', answer: 'Reach moves in the first month. More calls and bookings usually take about 90 days.' },
    { question: 'Is there a contract?', answer: 'No. Month-to-month. We suggest 90 days to see real traction, but we never lock you in.' },
  ],
  relatedReading: [
    { title: 'What Is A Software Map?', href: '/blog/what-is-a-software-map' },
    { title: 'The Rent Isn’t the Problem. The Hostage Is.', href: '/blog/rented-software-no-data-rights' },
  ],
  finalCtaHeadline: 'Get a Free Social Strategy Session',
  finalCtaSub: 'Tell us about your business. We will build you a 30-day content plan you can use right away. No pitch, no obligation.',
};

export default function SocialMediaManagementPillar() {
  return <ServicePillar data={data} />;
}
