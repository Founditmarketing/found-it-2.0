import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Web Design & Development for Local Businesses',
  description:
    'Custom, conversion-focused web design built on Next.js by a team with 13+ years in marketing. Fast, mobile-first websites that turn visitors into calls — and you own the code. Alexandria, LA, serving 48 states.',
  alternates: { canonical: '/web-design' },
  openGraph: {
    title: 'Web Design & Development for Local Businesses | Found It Marketing',
    description:
      'Custom, conversion-focused websites built on Next.js. Fast, mobile-first, and you own the code.',
    type: 'website',
    url: 'https://founditmarketing.com/web-design',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const data: PillarData = {
  name: 'Web Design',
  slug: '/web-design',
  serviceType: 'Web Design',
  schemaDescription:
    'Custom, conversion-focused web design and development built on Next.js. Fast, mobile-first websites engineered to generate leads, with full client ownership of the code. Backed by 13+ years in marketing.',
  eyebrow: 'Web Design & Development',
  headline: 'Websites That Turn Visitors',
  headlineAccent: 'Into Phone Calls.',
  intro:
    `Found It Marketing builds custom, conversion-focused websites on modern technology — not slow, templated themes. With ${TRACK_RECORD.yearsInBusiness} years in marketing behind every build, we design for one outcome: turning visitors into calls and booked appointments. And you own everything: the code, the domain, and the hosting.`,
  ctaLabel: 'Get My Free Concept Call',
  formSource: 'service_web_design',
  formPageSlug: 'web-design',
  formHeading: 'Get Your Free Concept Call',
  stats: [
    { value: TRACK_RECORD.yearsInBusiness, label: 'Years in Marketing' },
    { value: '2 Wk', label: 'Typical Launch' },
    { value: '$2.3B+', label: 'Client Revenue Generated' },
    { value: TRACK_RECORD.statesServed, label: 'States We Operate In' },
  ],
  definitionHeading: 'What Makes a Website "Convert"?',
  definition:
    'A converting website is one engineered to turn visitors into customers — not just to look pretty. That means it loads fast (every second of delay costs roughly 7% of conversions), works flawlessly on mobile where most local searches happen, makes the next step obvious, and removes friction from contacting you. We build on Next.js with conversion architecture baked into every page, plus the technical SEO foundation that helps the site get found in the first place.',
  includedHeading: 'What Every Build Includes',
  included: [
    { title: 'Custom Design', detail: 'A site designed around your brand and your customers — never a recycled template four competitors also use.' },
    { title: 'Conversion Architecture', detail: 'Every page engineered to drive action: clear calls to action, fast paths to contact, and friction removed.' },
    { title: 'Mobile-First & Fast', detail: 'Built to load fast and look right on phones first, where most local searches happen.' },
    { title: 'Technical SEO Foundation', detail: 'Clean structure, proper schema, and Core Web Vitals focus so the site is built to be found.' },
    { title: 'Integrations', detail: 'Booking, forms, CRM, chat, and tracking wired in so the site works with your business, not against it.' },
    { title: 'You Own Everything', detail: 'Your domain, your code, your hosting account. If you ever leave, you take it all.' },
  ],
  approachHeading: 'How We Build Your Website',
  approach: [
    { step: '01', title: 'Discovery', detail: 'We learn your business, your customers, and the actions you want visitors to take.' },
    { step: '02', title: 'Design', detail: 'We design a custom, conversion-focused layout and get your sign-off before building.' },
    { step: '03', title: 'Build', detail: 'We develop a fast, mobile-first site with technical SEO and tracking baked in.' },
    { step: '04', title: 'Launch & Optimize', detail: 'We launch on a firm timeline and include 60 days of post-launch optimization.' },
  ],
  audienceHeading: "Who This Is For",
  audience: [
    'Businesses with a slow, dated, or non-converting website',
    'Companies running ads to a page that does not convert',
    'Owners who want to own their code and not be held hostage',
    'Service businesses that need to rank and get found locally',
    'Brands that look identical to every competitor in their market',
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
      'One firm was running ads to a WordPress site that loaded in 6+ seconds with an intake form buried three clicks deep. We rebuilt from scratch on Next.js with a conversion-first architecture and a streamlined intake flow. Within 90 days, qualified intake tripled and cost per acquisition dropped 44%.',
  },
  mistakesHeading: 'Why Most Local Websites Fail',
  mistakes: [
    { title: 'Slow load times', detail: 'Template-heavy sites often load in 5+ seconds on mobile, bleeding conversions and hurting SEO. We build for speed.' },
    { title: 'Buried calls to action', detail: 'If the phone number and form are hard to find, visitors leave. We make the next step obvious on every screen.' },
    { title: 'Looks like everyone else', detail: 'A premium theme four competitors also use does not build trust. We design something distinctly yours.' },
    { title: 'No technical SEO', detail: 'A beautiful site nobody can find is worthless. Every build ships with clean structure and schema.' },
  ],
  pricingHeading: 'What It Costs',
  pricing:
    'Most local business websites land in a clear, flat range we quote up front based on what you actually need — no hourly surprises, no scope-creep invoices. Larger custom builds with advanced integrations cost more. You will know the full price before you commit, and 60 days of post-launch optimization is included.',
  whyUsHeading: 'Why Businesses Choose Found It Marketing',
  whyUs: [
    `${TRACK_RECORD.yearsInBusiness} years of marketing experience informing every design decision.`,
    '2026 CLEDA Highest Traded Revenue Award winner.',
    'You own the code, domain, and hosting — no lock-in, no hostage situations.',
    'Conversion-first design: built to generate leads, not just win design awards.',
    'Firm launch timelines — if we miss the date we promise, we take $500 off the invoice.',
    '60 days of free post-launch optimization included.',
  ],
  faqHeading: 'Web Design FAQ',
  faq: [
    { question: 'How long does it take to build?', answer: '2 weeks or less from kickoff to launch for most local business sites. Larger sites with custom features may take slightly longer, but you get a firm timeline on the first call.' },
    { question: 'Who owns the website?', answer: 'You do. Your domain, your code, your content, your hosting account. If you ever leave, you take everything. No lock-in.' },
    { question: 'Will my new site actually show up on Google?', answer: 'Yes. Every build ships with the technical SEO foundation in place: fast load times, clean structure, mobile-first design, and proper schema. It is built to be found, not just to look good.' },
    { question: 'How much does a new website cost?', answer: "Most local business sites land in a clear, flat range we'll quote up front. No hourly surprises, no scope-creep invoices. You will know the full price before you commit." },
    { question: 'What if I need changes after launch?', answer: '60 days of free post-launch optimization is included. After that, most clients move to a maintenance plan starting at $250/mo. No long-term contracts.' },
  ],
  relatedReading: [
    { title: 'Dominating the Map Pack: Your Guide to Local SEO', href: '/blog/local-seo-dominance' },
  ],
  finalCtaHeadline: 'Get a Free Concept Call',
  finalCtaSub: 'Tell us about your business and we will show you how a faster, conversion-focused site could grow it. No pitch, no obligation.',
};

export default function WebDesignPillar() {
  return <ServicePillar data={data} />;
}
