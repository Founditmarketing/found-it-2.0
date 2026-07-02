import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { TRACK_RECORD, REVENUE_CLAIM } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Social Media Management for Local Businesses',
  description:
    'Done-for-you social media management from a team with 13+ years in marketing and millions in managed ad spend across hundreds of local businesses. Content, strategy, and paid social that drive calls and bookings. Alexandria, LA.',
  alternates: { canonical: '/social-media-management' },
  openGraph: {
    title: 'Social Media Management for Local Businesses | Found It Marketing',
    description:
      'A team with 13+ years in marketing managing social for hundreds of local businesses. Content + paid social that drives calls.',
    type: 'website',
    url: 'https://founditmarketing.com/social-media-management',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const data: PillarData = {
  name: 'Social Media Management',
  slug: '/social-media-management',
  serviceType: 'Social Media Marketing',
  schemaDescription:
    'Done-for-you social media management for local businesses: content creation, strategy, paid social, and reporting focused on calls and leads — backed by 13+ years in marketing and millions in managed ad spend.',
  eyebrow: 'Social Media Management',
  headline: 'Social Media That Gets Calls,',
  headlineAccent: 'Not Just Likes.',
  intro:
    `Found It Marketing has managed marketing for ${TRACK_RECORD.yearsInBusiness} years and creates social media for ${TRACK_RECORD.socialAccountsManagedLong} across ${TRACK_RECORD.statesServed} states. We run a done-for-you content engine — graphics, copy, video, scheduling, and paid social — built to turn scrolls into booked calls. You approve everything; we handle the rest.`,
  ctaLabel: 'Get My Free Strategy Session',
  formSource: 'service_social',
  formPageSlug: 'social-media-management',
  formHeading: 'Get Your Free Social Strategy Session',
  stats: [
    { value: TRACK_RECORD.yearsInBusiness, label: 'Years in Marketing' },
    { value: TRACK_RECORD.socialAccountsManaged, label: 'Local Businesses Served' },
    { value: REVENUE_CLAIM.figure, label: 'Client Revenue Generated' },
    { value: TRACK_RECORD.statesServed, label: 'States We Operate In' },
  ],
  definitionHeading: 'What Does Social Media Management Actually Do?',
  definition:
    'Social media management is the done-for-you service of planning, creating, scheduling, and reporting on the content that goes out on your business profiles — and, when it makes sense, running paid social ads on top of it. The goal is not likes; it is calls, leads, and bookings. At Found It Marketing we build a repeatable content engine around your brand voice, publish consistently, amplify the winners with paid budget, and report on the metrics that actually move your business.',
  includedHeading: 'What Our Social Media Management Includes',
  included: [
    { title: 'Content Creation', detail: 'Graphics, captions, and short-form video direction built around your brand voice — not generic stock posts.' },
    { title: 'Strategy & Calendar', detail: 'A platform-specific content calendar mapped to your offers, seasons, and local market.' },
    { title: 'Paid Social Ads', detail: 'Targeted Facebook, Instagram, and TikTok ads that put the right offer in front of nearby customers.' },
    { title: 'Community Management', detail: 'We monitor comments and messages so leads never sit unanswered.' },
    { title: 'Google Business Profile', detail: 'Profile posts, updates, and optimization to strengthen your local map presence.' },
    { title: 'Real Reporting', detail: 'Monthly reports on calls, leads, and bookings — the metrics that move your business, not vanity likes.' },
  ],
  approachHeading: 'Our Approach: A Content Engine, Not Random Posting',
  approachIntro:
    `Most social media fails because it is sporadic and unmeasured. After ${TRACK_RECORD.yearsInBusiness} years, we have learned consistency plus strategy beats volume every time.`,
  approach: [
    { step: '01', title: 'Learn Your Voice', detail: 'We start by understanding your business, your customers, and what makes you different.' },
    { step: '02', title: 'Build the Engine', detail: 'We create a repeatable content system: themes, formats, and a calendar designed to publish consistently and convert.' },
    { step: '03', title: 'Publish & Amplify', detail: 'We produce and schedule everything, then amplify the best-performing content with targeted paid social.' },
    { step: '04', title: 'Measure & Refine', detail: 'Every month we report on real outcomes and double down on what is driving calls and bookings.' },
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
      'One local restaurant was posting phone photos with generic captions. We built a real content strategy: behind-the-scenes kitchen content, seasonal menu highlights, and targeted Instagram ads within a 15-mile radius. Ninety days later, Friday and Saturday nights were consistently booked.',
  },
  mistakesHeading: 'Why Most Social Media Fails',
  mistakes: [
    { title: 'Posting only when you remember', detail: 'Sporadic posting never compounds. A content engine on a calendar is the single biggest predictor of results.' },
    { title: 'Chasing likes instead of leads', detail: 'Vanity metrics feel good but pay nothing. We track calls, leads, and bookings and optimize for those.' },
    { title: 'Generic, off-brand content', detail: 'Stock posts from a stranger overseas do not sound like you. We learn your voice and create content that converts.' },
    { title: 'Organic with no amplification', detail: 'Great posts with zero budget barely reach anyone. We put paid behind proven winners to scale them.' },
  ],
  pricingHeading: 'What It Costs',
  pricing:
    'Pricing is simple and flat, scoped to the platforms and posting volume you need, with no setup fees that lock you in. Most local businesses spend less on professional social management than on a single part-time hire. Paid ad budget is separate and set with you. Month-to-month, cancel anytime.',
  whyUsHeading: 'Why Businesses Choose Found It Marketing',
  whyUs: [
    `${TRACK_RECORD.yearsInBusiness} years of marketing experience and ${TRACK_RECORD.adSpendManagedLong}.`,
    '2026 CLEDA Highest Traded Revenue Award winner.',
    `Trusted with social media for ${TRACK_RECORD.socialAccountsManagedLong} across ${TRACK_RECORD.statesServed} states.`,
    'We create everything; you just approve before it goes live.',
    'We track calls and bookings, not vanity likes.',
    'No long-term contracts. Month-to-month. Cancel anytime.',
  ],
  faqHeading: 'Social Media Management FAQ',
  faq: [
    { question: 'Which platforms do you manage?', answer: 'Facebook, Instagram, LinkedIn, TikTok, YouTube, and Google Business Profile. Most local businesses see the strongest return starting with Facebook and Instagram.' },
    { question: 'Do you create the content or do I?', answer: 'We create everything: graphics, copy, video direction, and scheduling. You just approve before it goes live. Nothing posts without your green light.' },
    { question: 'How much does social media management cost?', answer: 'Pricing is simple and flat, scoped to the platforms and posting volume you need, with no setup fees. You get a clear monthly number up front.' },
    { question: 'How long until I see results?', answer: 'Reach and engagement usually move in the first month. Real traction — more calls, leads, and bookings — typically takes about 90 days of consistent, strategic posting.' },
    { question: 'Is there a contract?', answer: 'No. Month-to-month. We recommend 90 days to see real traction, but we never lock you in.' },
  ],
  relatedReading: [
    { title: 'How Much Should a Local Business Spend on Social Media?', href: '/blog/local-business-social-media-budget' },
    { title: 'Organic vs. Paid Social: What Local Businesses Actually Need', href: '/blog/organic-vs-paid-social-local-business' },
    { title: 'What a Real Social Media Content Engine Looks Like', href: '/blog/social-media-content-engine' },
  ],
  finalCtaHeadline: 'Get a Free Social Strategy Session',
  finalCtaSub: 'Tell us about your business and we will build you a custom 30-day content plan you can start using immediately. No pitch, no obligation.',
};

export default function SocialMediaManagementPillar() {
  return <ServicePillar data={data} />;
}
