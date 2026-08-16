import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Google Ads Management for Local Businesses',
  description:
    'Google Ads management from a team with 13+ years in marketing. Weekly optimization, real conversion tracking, transparent reporting, no contracts. Based in Alexandria, LA.',
  alternates: { canonical: '/google-ads-management' },
  openGraph: {
    title: 'Google Ads Management for Local Businesses | Found It Marketing',
    description:
      'A team with 13+ years in marketing. Weekly optimization, conversion tracking, no contracts.',
    type: 'website',
    url: 'https://www.founditsoftware.com/google-ads-management',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const data: PillarData = {
  name: 'Google Ads Management',
  slug: '/google-ads-management',
  serviceType: 'PPC Management',
  schemaDescription:
    'Google Ads management for local service businesses, backed by 13+ years in marketing. Weekly optimization, conversion tracking, and transparent reporting with no contracts.',
  eyebrow: 'Google Ads Management',
  headline: 'Google Ads That Make the Phone Ring,',
  headlineAccent: 'Not Just Burn Budget.',
  intro:
    `Found It Marketing has managed marketing campaigns for ${TRACK_RECORD.yearsInBusiness} years. We run Google Ads for local service businesses with weekly hands-on optimization, real conversion tracking, and reporting you can actually read. You own your account and data, always.`,
  ctaLabel: 'Get My Free Ad Audit',
  formSource: 'service_google_ads',
  formPageSlug: 'google-ads-management',
  formHeading: 'Get Your Free Google Ads Audit',
  stats: [
    { value: TRACK_RECORD.yearsInBusiness, label: 'Years in Marketing' },
    { value: TRACK_RECORD.googleRating, label: 'Google Rating' },
  ],
  definitionHeading: 'What Is Google Ads Management?',
  definition:
    'Google Ads management is the ongoing service of planning, building, and optimizing paid search campaigns so a business shows up — profitably — when customers search for what it offers. Done right, it means tight keyword targeting, airtight conversion tracking, continuous bid and budget tuning, and clear reporting on cost per lead and return on ad spend. At Found It Marketing, a senior strategist manages your account hands-on every week, inside your own Google Ads account.',
  includedHeading: 'What Our Google Ads Management Includes',
  included: [
    { title: 'Account Audit', detail: 'A full review of your existing account to find wasted spend, missed opportunities, and quick wins.' },
    { title: 'Campaign Build & Structure', detail: 'Tightly themed campaigns and ad groups built around real buyer intent, not guesswork.' },
    { title: 'Keywords & Negatives', detail: 'Ongoing search-term mining and negative-keyword work so you stop paying for clicks that never convert.' },
    { title: 'Conversion Tracking', detail: 'Proper tracking for calls, forms, and bookings — because you cannot optimize what you cannot measure.' },
    { title: 'Bid Strategy', detail: 'Smart bidding tuned to your real goals, with a human watching it instead of letting the algorithm run wild.' },
    { title: 'Transparent Reporting', detail: 'Monthly reporting on cost per lead, lead quality, and ROI — the numbers that matter, in plain English.' },
  ],
  approachHeading: 'How We Manage Your Account',
  approachIntro:
    `After ${TRACK_RECORD.yearsInBusiness} years, we have learned that Google Ads is won in the weekly details, not set-and-forget automation.`,
  approach: [
    { step: '01', title: 'Audit & Plan', detail: 'We audit your account (or build from scratch), find the leaks, and map a plan with realistic projections.' },
    { step: '02', title: 'Build & Launch', detail: 'We structure campaigns around buyer intent, write the ads, and set up airtight conversion tracking.' },
    { step: '03', title: 'Optimize Weekly', detail: 'Every week we refine keywords, negatives, bids, and creative to drive cost per lead down and quality up.' },
    { step: '04', title: 'Report & Scale', detail: 'You get clear monthly reporting, and once the numbers work, we scale what is profitable.' },
  ],
  audienceHeading: 'Who Google Ads Is Right For',
  audience: [
    'Local service businesses that need leads and calls now',
    'Companies with a clear customer value worth $300+ per job',
    'Owners tired of agencies that set-and-forget their account',
    'Businesses currently wasting spend on the wrong keywords',
    'Anyone who wants to own their ad account and data',
    'Service-area businesses that want to dominate their region',
  ],
  chipsHeading: 'Where We Run Your Ads',
  chips: ['Google Search', 'Performance Max', 'YouTube Ads', 'Display', 'Google Maps / Local', 'Shopping'],
  result: {
    headline: 'What Results Look Like',
    stats: [
      { value: '10x', label: 'Best Client ROAS' },
      { value: '3x', label: 'Qualified Intake' },
      { value: '90 Days', label: 'To Real Traction' },
    ],
    narrative:
      'One client was spending $4,200/month with no idea what was working. We rebuilt their campaigns around their best services, set up real call tracking, and cut the junk keywords. Ninety days later: $42K/month in new revenue — a 10x return.',
  },
  mistakesHeading: 'Common Google Ads Mistakes We Fix',
  mistakes: [
    { title: 'No negative keywords', detail: 'Ads showing for irrelevant searches quietly drain budget. We mine search terms weekly and exclude the waste.' },
    { title: 'Broken or missing conversion tracking', detail: 'If calls and forms are not tracked correctly, you are optimizing blind. We fix tracking first, always.' },
    { title: 'Over-relying on broad match + Smart Bidding', detail: 'Handing Google full control without guardrails burns money. We give the algorithm the right signals and watch it.' },
    { title: 'Sending clicks to a weak landing page', detail: 'A great ad to a slow, confusing page still loses. We make sure the destination converts.' },
  ],
  pricingHeading: 'What It Costs',
  pricing:
    'Most local businesses invest between $1,500 and $5,000/month in ad spend, plus a flat management fee scoped to your account. The right number depends on what a customer is worth to you and how fast you want to grow — you will get specific projections in your free audit. No long-term contracts; month-to-month, cancel anytime.',
  whyUsHeading: 'Why Businesses Choose Found It Marketing',
  whyUs: [
    `${TRACK_RECORD.yearsInBusiness} years running local ad accounts.`,
    '2026 CLEDA Highest Traded Revenue Award winner.',
    'You own your Google Ads account, conversion history, and data — keep everything if you leave.',
    'No long-term contracts. Month-to-month. Cancel anytime.',
    'A senior strategist runs your account every week. No hand-offs to interns.',
  ],
  faqHeading: 'Google Ads Management FAQ',
  faq: [
    { question: 'How much should I spend on Google Ads?', answer: 'Most local businesses start between $1,500 and $5,000/month in ad spend. The right number depends on what a customer is worth to you and how fast you want to grow. You will get specific projections in the free audit.' },
    { question: 'How fast will I see results?', answer: 'Most clients see leads in the first week. Real optimization — where cost per lead drops and lead quality climbs — takes about 60 to 90 days. Anyone promising overnight results is either lying or burning your budget.' },
    { question: 'Who actually manages my account?', answer: 'A senior strategist, not a junior who Googles the answers. The same person who audits your account optimizes it every week, and you will know exactly who to call.' },
    { question: 'Do I own my ad account and data?', answer: 'Yes. We work inside your own Google Ads account. Your campaigns, conversion history, and data are yours. If you ever leave, you keep everything we built.' },
    { question: 'Is there a contract?', answer: 'No. Month-to-month, cancel anytime with 30 days notice. We keep clients by getting results, not by locking them in.' },
  ],
  relatedReading: [
    { title: 'What Is A Software Map?', href: '/blog/what-is-a-software-map' },
    { title: 'The Rent Isn’t the Problem. The Hostage Is.', href: '/blog/rented-software-no-data-rights' },
  ],
  finalCtaHeadline: 'Get a Free Google Ads Audit',
  finalCtaSub: 'See exactly where your budget is leaking and what we would change — before you spend another dollar. No pitch, no obligation.',
};

export default function GoogleAdsManagementPillar() {
  return <ServicePillar data={data} />;
}
