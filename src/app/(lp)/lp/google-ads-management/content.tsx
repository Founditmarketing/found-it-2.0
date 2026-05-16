'use client';

import {
  LPLayout,
  LPNav,
  LPHero,
  TrustBar,
  BenefitsGrid,
  ProcessSteps,
  JohnCTA,
  FAQSection,
  LPFormSection,
  LPFooter,
} from '@/components/lp';
import { Target, BarChart3, DollarSign, Users, TrendingUp, Search } from 'lucide-react';

/* ─── Page-Specific Data ─── */

const benefits = [
  {
    title: 'Wasted Spend Eliminated',
    description:
      'We audit every dollar. Negative keywords, bid strategies, and audience refinement eliminate clicks that never convert.',
  },
  {
    title: 'Local-First Targeting',
    description:
      'Geo-fencing, radius targeting, and location-specific ad copy that puts you in front of customers actively searching in your area.',
  },
  {
    title: 'Conversion Tracking That Works',
    description:
      'Phone calls, form fills, direction requests — we track every conversion type so you know exactly what your ad spend produces.',
  },
  {
    title: 'Landing Pages That Convert',
    description:
      'Every campaign gets custom landing pages built for conversion — not generic templates that waste your traffic.',
  },
  {
    title: 'Transparent Reporting',
    description:
      'Real-time dashboards showing leads, cost-per-lead, and ROI. No vanity metrics. No smoke and mirrors.',
  },
  {
    title: 'No Long-Term Contracts',
    description:
      'Month-to-month. If we\'re not delivering results, you can walk. That\'s how confident we are.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Free Campaign Audit',
    description:
      'We dissect your current ads (or build a strategy from scratch), analyze competitors, and identify the highest-ROI opportunities in your market.',
  },
  {
    number: '02',
    title: 'Campaign Architecture',
    description:
      'Custom campaign structure, keyword research, ad copy, and conversion-optimized landing pages — all built by our senior team.',
  },
  {
    number: '03',
    title: 'Launch & Scale',
    description:
      'We launch, monitor daily, and optimize relentlessly. Weekly reports, monthly strategy calls, and continuous improvement.',
  },
];

const faqItems = [
  {
    question: 'How much should I spend on Google Ads?',
    answer:
      'It depends on your market, competition, and goals. Most local service businesses see strong results starting at $1,500-$3,000/month in ad spend. We\'ll recommend a budget during your free strategy session based on real data from your market.',
  },
  {
    question: 'How quickly will I see results?',
    answer:
      'Most clients see their first qualified leads within the first 1-2 weeks of launch. Google Ads delivers traffic immediately — the optimization and scaling happen over the first 60-90 days as we accumulate conversion data.',
  },
  {
    question: 'Do you manage the ad spend or just charge a management fee?',
    answer:
      'You own your Google Ads account and pay Google directly for ad spend. We charge a separate management fee for our strategy, optimization, and reporting work. Full transparency, always.',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'We\'ve managed campaigns for contractors, medical practices, dealerships, law firms, real estate agents, and retail businesses across 48 states. Our strategies are industry-specific, not one-size-fits-all.',
  },
  {
    question: 'What if I already have a Google Ads account?',
    answer:
      'Perfect — we\'ll start with a free audit of your existing campaigns. We typically find 20-40% wasted spend that can be reallocated to higher-performing keywords and audiences.',
  },
  {
    question: 'Is there a contract?',
    answer:
      'No long-term contracts. We work month-to-month because we believe results should earn your business, not paperwork. Most clients stay 3+ years because the ROI speaks for itself.',
  },
];

export function GoogleAdsLPContent() {
  return (
    <LPLayout ctaLabel="Get Free Audit">
      <LPNav />
      <LPHero
        line1="Stop Wasting"
        line2="Ad Spend."
        accentWord="Spend."
        subheadline="We manage Google Ads campaigns that deliver real leads for local service businesses — not vanity clicks. 13+ years. 250+ campaigns. Zero BS."
        ctaText="Get Your Free Campaign Audit"
      />
      <TrustBar
        stats={[
          { value: '250+', label: 'Campaigns Managed' },
          { value: '3.2x', label: 'Avg. ROAS' },
          { value: '-38%', label: 'Avg. Cost Per Lead' },
          { value: '48', label: 'States Served' },
        ]}
      />
      <BenefitsGrid
        heading="Google Ads That Actually Work"
        subheading="Most agencies set and forget. We obsess over every dollar."
        benefits={benefits}
      />
      <ProcessSteps
        heading="From Audit to Revenue"
        steps={processSteps}
      />
      <JohnCTA
        heading="Your Campaigns, Managed by a Veteran — Not an Intern"
        body="John has personally managed over $2M in ad spend for local businesses. Every strategy session, every optimization, every report — it's him. Not a junior account manager reading from a script."
      />
      <LPFormSection
        heading="Get Your Free Google Ads Audit"
        subheading="We'll review your current campaigns (or build a plan from scratch) and show you exactly where you're leaving money on the table."
        benefits={[
          'Full campaign audit with wasted spend analysis',
          'Competitor ad strategy breakdown',
          'Custom bid & keyword recommendations',
          'Zero obligation — the audit is yours to keep',
        ]}
      />
      <FAQSection items={faqItems} />
      <LPFooter />
    </LPLayout>
  );
}
