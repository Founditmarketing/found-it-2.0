import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Google Ads Management for Local Businesses',
  description:
    'Google Ads management from a team with 13+ years in marketing and millions in managed ad spend. Weekly optimization, real conversion tracking, and transparent reporting — no contracts. Based in Alexandria, LA, serving 48 states.',
  alternates: { canonical: '/google-ads-management' },
  openGraph: {
    title: 'Google Ads Management for Local Businesses | Found It Marketing',
    description:
      'A team with 13+ years in marketing and millions in managed ad spend. Weekly optimization, conversion tracking, no contracts.',
    type: 'website',
    url: 'https://founditmarketing.com/google-ads-management',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const data: PillarData = {
  name: 'Google Ads Management',
  slug: '/google-ads-management',
  serviceType: 'PPC Management',
  schemaDescription:
    'Google Ads management for local service businesses, backed by 13+ years in marketing and millions in managed ad spend. Weekly optimization, conversion tracking, and transparent reporting with no contracts.',
  eyebrow: 'Google Ads Management',
  headline: 'Google Ads That Make the Phone Ring,',
  headlineAccent: 'Not Just Burn Budget.',
  intro:
    `Found It Marketing has managed marketing campaigns for ${TRACK_RECORD.yearsInBusiness} years and overseen ${TRACK_RECORD.adSpendManagedLong}. We run Google Ads for local service businesses with weekly hands-on optimization, real conversion tracking, and reporting you can actually read — and you own your account and data, always.`,
  ctaHref: '/lp/google-ads-management#lp-form',
  ctaLabel: 'Get a Free Account Audit',
  stats: [
    { value: TRACK_RECORD.yearsInBusiness, label: 'Years in Marketing' },
    { value: TRACK_RECORD.adSpendManaged, label: 'In Managed Ad Spend' },
    { value: TRACK_RECORD.socialAccountsManaged, label: 'Local Businesses Served' },
    { value: TRACK_RECORD.statesServed, label: 'States We Operate In' },
  ],
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
    `After ${TRACK_RECORD.yearsInBusiness} years and ${TRACK_RECORD.adSpendManagedLong}, we have learned that Google Ads is won in the weekly details, not set-and-forget automation.`,
  approach: [
    { step: '01', title: 'Audit & Plan', detail: 'We audit your account (or build from scratch), find the leaks, and map a plan with realistic projections.' },
    { step: '02', title: 'Build & Launch', detail: 'We structure campaigns around buyer intent, write the ads, and set up airtight conversion tracking.' },
    { step: '03', title: 'Optimize Weekly', detail: 'Every week we refine keywords, negatives, bids, and creative to drive cost per lead down and quality up.' },
    { step: '04', title: 'Report & Scale', detail: 'You get clear monthly reporting, and once the numbers work, we scale what is profitable.' },
  ],
  chipsHeading: 'Where We Run Your Ads',
  chips: ['Google Search', 'Performance Max', 'YouTube Ads', 'Display', 'Google Maps / Local', 'Shopping'],
  result: {
    headline: 'What Results Look Like',
    stats: [
      { value: '3x', label: 'Qualified Intake' },
      { value: '44%', label: 'Lower Cost Per Lead' },
      { value: '90 Days', label: 'To Real Traction' },
    ],
    narrative:
      'One firm was running ads to a slow website with a buried form and no real conversion tracking. We rebuilt the funnel, fixed tracking, and optimized the account weekly. Within 90 days, qualified intake tripled and cost per acquisition dropped by 44%.',
  },
  whyUsHeading: 'Why Businesses Choose Found It Marketing',
  whyUs: [
    `${TRACK_RECORD.yearsInBusiness} years of experience and ${TRACK_RECORD.adSpendManagedLong}.`,
    'You own your Google Ads account, conversion history, and data — keep everything if you leave.',
    'No long-term contracts. Month-to-month. Cancel anytime.',
    'A senior strategist runs your account every week. No hand-offs to interns.',
    'Free audit: if we cannot find at least $500 in wasted spend, we send you a $50 gift card for your time.',
    'Local to Alexandria, LA — real people, real phone number.',
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
    { title: '5 Common PPC Mistakes Costing You Money', href: '/blog/common-ppc-mistakes' },
  ],
  finalCtaHeadline: 'Stop Guessing With Your Ad Budget.',
  finalCtaSub: 'Get a free account audit. 15 minutes with Trevor — no pitch, just where your money is leaking.',
};

export default function GoogleAdsManagementPillar() {
  return <ServicePillar data={data} />;
}
