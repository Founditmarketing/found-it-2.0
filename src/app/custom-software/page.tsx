import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { AWARD, OS_PRICING, TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Custom Business Software You Own — Built for Small Business',
  description:
    `Custom business software built for one business at a time — you own it outright, records migrated in. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. ${OS_PRICING.promise}`,
  alternates: { canonical: '/custom-software' },
  openGraph: {
    title: 'Custom Business Software — Fitted to One Business at a Time | Found It Software',
    description:
      `Custom AI-powered operating systems fitted to your business — your jobs, your register, your customer book — with your records migrated in. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Month-to-month — cancel anytime, and the system stays yours.`,
    type: 'website',
    url: 'https://www.founditsoftware.com/custom-software',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

/** Parse a display sticker like '$2,200' into the numeric 2200 for JSON-LD. */
const usd = (sticker: string) => Number(sticker.replace(/[^0-9.]/g, ''));

const data: PillarData = {
  name: 'Custom Business Software',
  slug: '/custom-software',
  serviceType: 'Custom Business Software Development',
  offers: [
    { price: usd(OS_PRICING.monthly), priceCurrency: 'USD', unitCode: 'MON', name: OS_PRICING.monthlyLabel },
    { price: usd(OS_PRICING.setup), priceCurrency: 'USD', name: OS_PRICING.setupLabel },
  ],
  schemaDescription:
    `Custom AI-powered business operating systems built one business at a time — the register, the dispatch board, the customer book, the jobs, and the website in a single system the client owns outright. Years of existing records are migrated in, and nothing switches until the new system has run beside the old one and matched it. First working screens in days, not quarters; cutover only after the parallel run proves it. ${OS_PRICING.monthly} per month plus a one-time ${OS_PRICING.setup} for migration and setup — built to simplify the owner’s life and make the business more profitable.`,
  eyebrow: 'Custom Software',
  // 8/18 audit: the old accent ("not for an industry") argued with our own
  // industry pages. The enemy is the AVERAGE company, not the vertical.
  headline: 'Built for Your Company —',
  headlineAccent: 'Not the Average Company in Your Industry.',
  intro:
    `An AI-powered operating system fitted to one business at a time — your records migrated in, first working screens live in days. Nothing switches until it runs beside your old system and matches it.`,
  ctaLabel: "Start the 60-Second Fit Check",
  formSource: 'service_custom_software',
  formPageSlug: 'custom-software',
  formHeading: 'Start your Software Map',
  stats: [
    { value: 'Live', label: 'Real Systems Running Now' },
    { value: '6', label: 'Industries Fitted or In Fitting' },
    { value: '100%', label: 'Yours — Code & Data' },
    { value: 'Days', label: 'To Install, Not Quarters' },
  ],
  voiceDemo: true,
  automationReel: true,
  definitionHeading: 'What Is Custom Business Software?',
  definition:
    'A system built around how one business actually runs — its jobs, its register, its customer book — instead of a rented industry average. We map yours, build around it, migrate your records in, and put an AI on top that answers from your own data. When it’s done, you own it. The code, the data, everything.',
  includedHeading: 'What Every System We Build Includes',
  included: [
    {
      title: 'Fitted to One Business: Yours',
      detail:
        'We map how your shop actually runs, then build the system around your process. Nothing starts from a template or an industry edition.',
    },
    {
      title: 'Your Records, Migrated In',
      detail:
        'Years of customers, jobs, and invoices come with you — not abandoned in the old one.',
    },
    {
      title: 'The Whole Operation',
      detail:
        'Whatever your business runs on — register to website — in one system.',
    },
    {
      title: 'AI That Answers From Your Data',
      detail:
        'Ask in plain English — who bought what, what’s running behind, who hasn’t been in lately.',
    },
    {
      title: 'Proven Before Anything Switches',
      detail:
        'The new system runs beside your old one until the two match, and you switch when it has earned it.',
    },
    {
      title: 'You Own It Outright',
      detail:
        'The code, the data, the whole system is your asset. If we ever part ways, it stays yours and keeps running.',
    },
  ],
  approachHeading: 'How a Fitting Works',
  approach: [
    {
      step: '01',
      title: 'The Fitting',
      detail:
        'We sit down in your business and map every flow — how a job comes in, how a sale rings, what lives on paper.',
    },
    {
      step: '02',
      title: 'The Migration',
      detail:
        'Customers, jobs, invoices, history — migrated in. Nothing gets abandoned.',
    },
    {
      step: '03',
      title: 'Side by Side',
      detail:
        'Your old system keeps running beside the new one until the two match. Nothing switches early.',
    },
    {
      step: '04',
      title: 'You Say Go',
      detail:
        'When the numbers have matched and you give the word, you switch — in days, not quarters.',
    },
  ],
  audienceHeading: 'Who This Is For',
  audience: [
    'Auto repair shops renting Tekmetric-class shop systems',
    'Field service crews dispatching from a whiteboard and a group text',
    'Retail stores stuck on an aging register or terminal POS',
    'Shed builders and dealers tracking orders in spreadsheets',
    'Car dealerships whose website and inventory live on a vendor’s platform',
    'Home builders and contractors running jobs on paper and memory',
  ],
  chipsHeading: 'What a Fitted System Can Run',
  chips: [
    'Register / POS',
    'Dispatch Board',
    'Customer Book',
    'Jobs & Tickets',
    'Inventory',
    'Invoicing',
    'Scheduling',
    'Your Website',
    'AI Assistant',
  ],
  result: {
    headline: 'Real Installs, Not Demos',
    stats: [
      { value: 'Live', label: 'Auto Shop on Migrated Records' },
      { value: 'Live', label: 'Field Service, Real Leads' },
      { value: '1', label: 'Retail Core — Never Forked' },
    ],
    narrative:
      'A Louisiana auto shop runs its service desk on its own migrated records — live, not sample data. A field service company takes real leads through its system in production every day. Retail stores are being fitted to one shared core — staging registers in evaluation, zero forks. Shed builders, car dealerships, and home builders are being fitted now. None of these are mockups. They are businesses that own their software.',
  },
  mistakesHeading: 'Why Off-the-Shelf Software Goes Wrong',
  mistakes: [
    {
      title: 'Built for an “industry,” not for you',
      detail:
        'An industry average fits no one. Half the business ends up on paper and in your team’s heads.',
    },
    {
      title: 'Rent forever, own nothing',
      detail:
        'Rent for as long as you stay, price hikes at will, your data held if you leave. You never own a thing.',
    },
    {
      title: 'The switch that abandons your records',
      detail:
        'Starting from zero throws away years of customers, jobs, and history. We migrate it in instead.',
    },
    {
      title: 'The leap-of-faith cutover',
      detail:
        'A rip-and-replace weekend bets the business on software you have never run. We never do it.',
    },
  ],
  pricingHeading: 'The Price Is on the Website',
  pricing:
    `${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. That is the whole number, published right here — no “call for pricing,” no per-seat fees. Major additions are scoped in writing before work begins. Month-to-month, and the system stays yours. One job: ${OS_PRICING.promise}`,
  whyUsHeading: 'Why Businesses Choose Found It',
  whyUs: [
    `Real local businesses running or being fitted on their own systems right now.`,
    `${TRACK_RECORD.yearsInBusiness} years building digital products and marketing systems for local businesses.`,
    'You own 100% of the code and the data.',
    'Nothing switches until the new system has run beside the old one and matched it.',
    'Built-in AI that answers from your own books in plain English.',
    `A local Alexandria team you can actually reach — ${AWARD.year} ${AWARD.label} Award winner.`,
  ],
  faqHeading: 'Custom Business Software FAQ',
  faq: [
    {
      question: 'What does custom business software cost?',
      answer:
        `${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup — the whole price, published on this site. Traditional custom development prices a single local business out of the market; Found It OS is the same ownership at a price you can read before you ever pick up the phone.`,
    },
    {
      question: 'Is this an alternative to Tekmetric, ShedSuite, or Buildertrend?',
      answer:
        'Yes — that is exactly the seat it takes. Capable systems — but rented, and built for an industry, not for your business. A Found It OS install is fitted to one business — yours — owned outright, your records migrated in, not abandoned. Nothing switches until the new system has run beside your current one and matched it.',
    },
    {
      question: 'What happens to my years of records when I switch?',
      answer:
        'They come with you. Migration is part of the fitting — customers, jobs, invoices, history — so day one starts with everything you have built, not a blank screen. One of our live installs, a Louisiana auto shop, runs entirely on its own migrated records.',
    },
    {
      question: 'How long does it take to install?',
      answer:
        'Days, not quarters. Fitted to how you already run, there is no six-month rollout and no retraining around somebody else’s workflow. And the switch itself only happens after the new system has run beside your old one and matched it.',
    },
    {
      question: 'Who owns the software when it’s done?',
      answer:
        'You do. The code, the data, the whole system — it is your asset. The monthly covers backups, support, and new features — the day we stop earning it, you cancel and keep everything.',
    },
    {
      question: 'My business isn’t one of the industries listed. Can you still build for it?',
      answer:
        'Yes. The industry pages below are where systems are live or in fitting — but the method is the same everywhere. If your business runs on jobs, customers, and a register in any form, it can be fitted.',
    },
    {
      question: 'What if it doesn’t work out?',
      answer:
        'Then you cancel. Thirty days’ notice. You keep the code and the data, and the system keeps running.',
    },
  ],
  relatedReading: [
    { title: 'Found It OS — the operating system itself', href: '/foundit-os' },
    { title: 'Custom Software for Auto Repair Shops', href: '/custom-software/auto-repair-shops' },
    { title: 'Custom Software for Shed Builders', href: '/custom-software/shed-builders' },
    { title: 'Custom Software for Car Dealerships', href: '/custom-software/car-dealerships' },
    { title: 'Custom Software for Contractors', href: '/custom-software/contractors' },
    { title: 'The House System — Retail POS You Own', href: '/custom-software/retail-stores' },
    { title: 'Custom Software for Home Builders', href: '/custom-software/home-builders' },
  ],
  finalCtaHeadline: 'See What a Fitted System Looks Like',
  finalCtaSub:
    `Tell us how your business runs today — the register, the paper, the workarounds — and we will show you what your own operating system would look like. In person if you are local.`,
};

export default function CustomSoftwarePillar() {
  return <ServicePillar data={data} />;
}
