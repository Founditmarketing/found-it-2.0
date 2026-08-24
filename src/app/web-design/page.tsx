import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { PortfolioGallery } from '@/components/portfolio/PortfolioGallery';
import { TRACK_RECORD, AWARD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Web Design & Development for Local Businesses',
  description:
    'Custom web design built on Next.js. Fast, mobile-first sites that turn visitors into calls. You own the code. Alexandria, LA. See 12 live builds.',
  alternates: { canonical: '/web-design' },
  openGraph: {
    title: 'Web Design & Development for Local Businesses | Found It Software',
    description:
      'Custom websites built on Next.js. Fast, mobile-first, and you own the code.',
    type: 'website',
    url: 'https://www.founditsoftware.com/web-design',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const data: PillarData = {
  name: 'Web Design',
  slug: '/web-design',
  serviceType: 'Web Design',
  schemaDescription:
    'Custom web design and development built on Next.js. Fast, mobile-first websites that bring in leads. Clients own the code. Built to wire into the system that runs your business.',
  eyebrow: 'Web Design & Development',
  headline: 'Websites That Turn Visitors',
  headlineAccent: 'Into Phone Calls.',
  intro:
    `We build custom websites, not slow templates. With ${TRACK_RECORD.yearsInBusiness} years in marketing behind every build, we design for one thing: turning visitors into calls. And you own it all. The code, the domain, the hosting.`,
  ctaLabel: 'Get My Free Concept Call',
  formSource: 'service_web_design',
  formPageSlug: 'web-design',
  formHeading: 'Get Your Free Concept Call',
  stats: [
    { value: TRACK_RECORD.yearsInBusiness, label: 'Years in Marketing' },
    { value: '2 Wk', label: 'Typical Launch' },
    { value: TRACK_RECORD.googleRating, label: 'Google Rating' },
    { value: '12', label: 'Live Builds Below' },
  ],
  definitionHeading: 'What Makes a Website "Convert"?',
  definition:
    'A converting website turns visitors into customers, not just heads. It loads fast (every second of delay costs roughly 7% of conversions). It works on mobile, where most local searches happen. It makes the next step easy. We build on Next.js with that baked into every page, plus the technical SEO that helps the site get found.',
  includedHeading: 'What Every Build Includes',
  included: [
    { title: 'Custom Design', detail: 'Designed around your brand and your customers. Never a template four competitors also use.' },
    { title: 'Conversion Architecture', detail: 'Every page pushes one action. Clear buttons and fast paths to contact you.' },
    { title: 'Mobile-First & Fast', detail: 'Loads fast and looks right on phones, where most local searches happen.' },
    { title: 'Technical SEO Foundation', detail: 'Clean structure and proper schema so the site gets found.' },
    { title: 'Integrations', detail: 'Booking, forms, CRM, chat, and tracking wired in from day one.' },
    { title: 'You Own Everything', detail: 'Your domain, your code, your hosting account. If you ever leave, you take it all.' },
  ],
  approachHeading: 'How We Build Your Website',
  approach: [
    { step: '01', title: 'Discovery', detail: 'We learn your business, your customers, and what you want visitors to do.' },
    { step: '02', title: 'Design', detail: 'We design a custom layout and get your sign-off before we build.' },
    { step: '03', title: 'Build', detail: 'We build a fast, mobile-first site with SEO and tracking baked in.' },
    { step: '04', title: 'Launch & Tune', detail: 'We launch on a firm date. Then we keep tuning it for 60 days, included.' },
  ],
  audienceHeading: "Who This Is For",
  audience: [
    'Businesses with a slow, dated, or non-converting website',
    'Companies running ads to a page that does not convert',
    'Owners who want to own their code and not be held hostage',
    'Service businesses that need to rank and get found locally',
    'Brands that look just like every competitor',
    'Anyone who wants a site live in about 2 weeks',
  ],
  chipsHeading: 'Built With Modern Technology',
  chips: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Structured Data / SEO', 'Core Web Vitals'],
  result: {
    headline: 'What Results Look Like',
    stats: [
      { value: '3x', label: 'Qualified Intake' },
      { value: '44%', label: 'Lower Cost Per Lead' },
      { value: '70%', label: 'Less Form Friction' },
    ],
    narrative:
      'One firm ran ads to a WordPress site that took 6+ seconds to load. The intake form was three clicks deep. We rebuilt it on Next.js with a simple intake flow. Within 90 days, qualified intake tripled and cost per acquisition dropped 44%.',
  },
  mistakesHeading: 'Why Most Local Websites Fail',
  mistakes: [
    { title: 'Slow load times', detail: 'Template sites often take 5+ seconds to load on a phone. That bleeds leads and hurts SEO. We build for speed.' },
    { title: 'Buried calls to action', detail: 'If the phone number and form are hard to find, visitors leave. We make the next step obvious on every screen.' },
    { title: 'Looks like everyone else', detail: 'A theme four competitors also use does not build trust. We design something that is yours.' },
    { title: 'No technical SEO', detail: 'A beautiful site nobody can find is worthless. Every build ships with clean structure and schema.' },
  ],
  pricingHeading: 'What It Costs',
  pricing:
    'Most local business websites land in a flat range we quote up front. No hourly surprises. Bigger custom builds cost more. You know the full price before you commit, and 60 days of tuning after launch is included.',
  whyUsHeading: 'Why Businesses Choose Found It Marketing',
  whyUs: [
    `${TRACK_RECORD.yearsInBusiness} years of marketing behind every design choice.`,
    `${AWARD.year} ${AWARD.label} Award winner.`,
    'You own the code, domain, and hosting outright.',
    'Built to get you leads, not just look pretty.',
    'Firm launch dates. You get yours on the first call.',
    '60 days of free tuning after launch.',
  ],
  faqHeading: 'Web Design FAQ',
  faq: [
    { question: 'How long does it take to build?', answer: '2 weeks or less for most local sites. You get a firm date on the first call.' },
    { question: 'Who owns the website?', answer: 'You do. Your domain, your code, your hosting. If you leave, you take everything.' },
    { question: 'Will my new site actually show up on Google?', answer: 'Yes. Every build ships fast, mobile-first, with clean structure and schema. It is built to be found.' },
    { question: 'How much does a new website cost?', answer: 'Most local sites land in a flat range we quote up front. The number holds.' },
    { question: 'What if I need changes after launch?', answer: '60 days of free tuning is included. After that, maintenance plans start at $250/mo. No contracts.' },
  ],
  relatedReading: [
    { title: 'What Is A Software Map?', href: '/blog/what-is-a-software-map' },
    { title: 'The Rent Isn’t the Problem. The Hostage Is.', href: '/blog/rented-software-no-data-rights' },
  ],
  finalCtaHeadline: 'Get a Free Concept Call',
  finalCtaSub: 'Tell us about your business. We will show you how a faster site could grow it. The call is free. You decide from there.',
};

export default function WebDesignPillar() {
  return (
    <>
      <ServicePillar data={data} />
      <PortfolioGallery />
    </>
  );
}
