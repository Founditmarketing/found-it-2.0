import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Google Ads Management for Local Businesses',
  description:
    'Google Ads management from a team with 13+ years in marketing. Weekly tuning, real conversion tracking, clear reports, no contracts. Alexandria, LA.',
  alternates: { canonical: '/google-ads-management' },
  openGraph: {
    title: 'Google Ads Management for Local Businesses | Found It Software',
    description:
      'A team with 13+ years in marketing. Weekly tuning, conversion tracking, no contracts.',
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
    'Google Ads management for local service businesses. 13+ years in marketing. Weekly tuning, conversion tracking, clear reports, no contracts.',
  eyebrow: 'Google Ads Management',
  headline: 'Google Ads That Make the Phone Ring,',
  headlineAccent: 'Not Just Burn Budget.',
  intro:
    `We have run ads for ${TRACK_RECORD.yearsInBusiness} years. We manage Google Ads for local service businesses. Hands-on work every week, real conversion tracking, and reports you can read. You own your account and data, always.`,
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
    'Google Ads management means planning, building, and tuning your paid search ads so you show up when customers search, and make money doing it. Done right, it means tight keywords, solid conversion tracking, and clear reports on cost per lead. Here, a senior strategist works your account every week, inside your own Google Ads account.',
  includedHeading: 'What Our Google Ads Management Includes',
  included: [
    { title: 'Account Audit', detail: 'We review your account and find wasted spend and quick wins.' },
    { title: 'Campaign Build & Structure', detail: 'Campaigns built around what real buyers search, not guesswork.' },
    { title: 'Keywords & Negatives', detail: 'Weekly negative-keyword work so you stop paying for junk clicks.' },
    { title: 'Conversion Tracking', detail: 'We track calls, forms, and bookings. You cannot fix what you cannot see.' },
    { title: 'Bid Strategy', detail: 'Smart bidding with a human watching it, not the algorithm running wild.' },
    { title: 'Transparent Reporting', detail: 'Monthly reports on cost per lead and ROI, in plain English.' },
  ],
  approachHeading: 'How We Manage Your Account',
  approachIntro:
    `After ${TRACK_RECORD.yearsInBusiness} years, we know Google Ads is won in the weekly details, not set-and-forget.`,
  approach: [
    { step: '01', title: 'Audit & Plan', detail: 'We audit your account, find the leaks, and map a plan.' },
    { step: '02', title: 'Build & Launch', detail: 'We build the campaigns, write the ads, and set up conversion tracking.' },
    { step: '03', title: 'Tune Weekly', detail: 'Every week we tune keywords, bids, and ads to drive cost per lead down.' },
    { step: '04', title: 'Report & Scale', detail: 'You get a clear monthly report. When the numbers work, we scale what makes money.' },
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
      'One client spent $4,200/month with no idea what was working. We rebuilt the campaigns, set up real call tracking, and cut the junk keywords. Ninety days later: $42K/month in new revenue. A 10x return.',
  },
  mistakesHeading: 'Common Google Ads Mistakes We Fix',
  mistakes: [
    { title: 'No negative keywords', detail: 'Ads showing for the wrong searches drain budget. We cut the waste every week.' },
    { title: 'Broken or missing conversion tracking', detail: 'If calls and forms are not tracked, you are flying blind. We fix tracking first.' },
    { title: 'Over-relying on broad match + Smart Bidding', detail: 'Handing Google full control burns money. We give it the right signals and watch it.' },
    { title: 'Sending clicks to a weak landing page', detail: 'A great ad sent to a slow page still loses. We make sure the page converts.' },
  ],
  pricingHeading: 'What It Costs',
  pricing:
    'Most local businesses spend $1,500 to $5,000/month on ads, plus a flat management fee. The right number depends on what a customer is worth to you. Your free audit spells it out. No contracts. Month-to-month, cancel anytime.',
  whyUsHeading: 'Why Businesses Choose Found It Marketing',
  whyUs: [
    `${TRACK_RECORD.yearsInBusiness} years running local ad accounts.`,
    '2026 CLEDA Highest Traded Revenue Award winner.',
    'You own your Google Ads account and data. If you leave, you keep everything.',
    'No long-term contracts. Month-to-month. Cancel anytime.',
    'A senior strategist runs your account every week. No hand-offs to interns.',
  ],
  faqHeading: 'Google Ads Management FAQ',
  faq: [
    { question: 'How much should I spend on Google Ads?', answer: 'Most start between $1,500 and $5,000/month. It depends on what a customer is worth to you. Your free audit spells it out.' },
    { question: 'How fast will I see results?', answer: 'Leads often come the first week. Real gains take 60 to 90 days. Anyone promising overnight results is burning your budget.' },
    { question: 'Who actually manages my account?', answer: 'A senior strategist. The same person every week, and you know who to call.' },
    { question: 'Do I own my ad account and data?', answer: 'Yes. We work inside your own account. If you leave, you keep everything.' },
    { question: 'Is there a contract?', answer: 'No. Month-to-month, cancel anytime with 30 days notice.' },
  ],
  relatedReading: [
    { title: 'How Every Fitting Starts', href: '/blog/what-is-a-software-map' },
    { title: 'The Rent Isn’t the Problem. The Hostage Is.', href: '/blog/rented-software-no-data-rights' },
  ],
  finalCtaHeadline: 'Get a Free Google Ads Audit',
  finalCtaSub: 'See where your budget leaks before you spend another dollar. No pitch, no obligation.',
};

export default function GoogleAdsManagementPillar() {
  return <ServicePillar data={data} />;
}
