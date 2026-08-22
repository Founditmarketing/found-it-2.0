import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { OS_PRICING, TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Found It OS — Custom Operating Systems for Local Businesses',
  description:
    `Found It OS is a custom AI operating system fitted to your business — register, inventory, customers, website, and a built-in AI in one system you own outright. ${OS_PRICING.monthly}/mo plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}, built to simplify the owner's life and make the business more profitable. Based in Alexandria, LA.`,
  alternates: { canonical: '/foundit-os' },
  openGraph: {
    title: 'Found It OS — Custom Operating Systems for Local Businesses | Found It Software',
    description:
      `One system for your whole business — fitted to how you actually run it, proven beside your old system, and yours forever. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. ${OS_PRICING.promise}`,
    type: 'website',
    url: 'https://www.founditsoftware.com/foundit-os',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

/** Parse a display sticker like '$2,200' into the numeric 2200 for JSON-LD. */
const usd = (sticker: string) => Number(sticker.replace(/[^0-9.]/g, ''));

const data: PillarData = {
  name: 'Found It OS',
  slug: '/foundit-os',
  serviceType: 'Custom Business Operating System',
  offers: [
    { price: usd(OS_PRICING.monthly), priceCurrency: 'USD', unitCode: 'MON', name: OS_PRICING.monthlyLabel },
    { price: usd(OS_PRICING.setup), priceCurrency: 'USD', name: OS_PRICING.setupLabel },
  ],
  schemaDescription:
    `Found It OS is a custom AI-powered business operating system built one business at a time — point of sale, inventory, customer database, service tickets, website, and a built-in AI assistant in a single system the client owns outright. Fitted in weeks, migrated with zero downtime by running beside the legacy system until the books match to the penny. ${OS_PRICING.monthly} per month plus a one-time ${OS_PRICING.setup} migration and setup, built to simplify the owner's life and make the business more profitable.`,
  eyebrow: 'Found It OS',
  headline: 'Stop Renting Your Software —',
  headlineAccent: 'Own Your Whole System.',
  intro:
    `Try to leave the software you rent today and count what you keep: not the register, not the inventory, not your own customer list. Found It OS ends that — one system fitted to how your business actually runs, and you own it outright. Fitted in weeks, and nothing switches until it has run beside your old system and matched it to the penny.`,
  ctaLabel: 'Get Fitted',
  formSource: 'service_foundit_os',
  formPageSlug: 'foundit-os',
  formHeading: 'Get Fitted',
  /* THE GATE (Trevor 8/16): the fit check stands where the open form stood —
     qualified gets the form, NOT A FIT gets the kind dismissal, no capture. */
  fitGate: true,
  stats: [
    { value: 'Live', label: 'Real Systems Running Now' },
    { value: 'To the ¢', label: 'Matched Every Night' },
    { value: '100%', label: 'Yours — Code & Data' },
    { value: '0 Hrs', label: 'Downtime at Switch' },
  ],
  voiceDemo: true,
  automationReel: true,
  definitionHeading: 'What Is a Business Operating System?',
  definition:
    'A business operating system is one piece of software that runs your whole operation — sales, inventory, customers, invoices, service work, and your website — instead of five subscriptions taped together. Think of it like a suit: the big platforms sell off the rack — built for everyone, tight in all the wrong places. Found It OS is made to measure: we study how your business actually works, then build the system around it. One screen your team actually uses, one customer database, an AI that answers questions about your own business in plain English — and at the end, you own it. The code, the data, everything.',
  includedHeading: 'What Every Found It OS Includes',
  included: [
    {
      title: 'Fitted, Not Templated',
      detail:
        'We map how your business really runs, then build the system around your process.',
    },
    {
      title: 'The Whole Operation',
      detail:
        'Point of sale, inventory, customer database, invoices, service tickets, scheduling — whatever your business runs on, in one system.',
    },
    {
      title: 'Your Website, Wired In',
      detail:
        'Your website and your system share one brain. Update a product or a price once and it shows up everywhere.',
    },
    {
      title: 'AI That Knows Your Business',
      detail:
        'Ask in plain English — who bought what, what is running low, who has not been in — and it answers from your own books. It reads them; it cannot write them.',
    },
    {
      title: 'Books That Show Their Work',
      detail:
        'Every sale, refund, and edit lands in one permanent journal with automatic nightly backups. Your accountant can check every penny.',
    },
    {
      title: 'You Own It',
      detail:
        'You own the code, the data, and the system. If we ever part ways, it stays yours.',
    },
  ],
  approachHeading: 'How a Fitting Works',
  approach: [
    {
      step: '01',
      title: 'The Fitting',
      detail:
        'We come to your business and map every flow — how a sale rings, how inventory moves, what lives on paper. That becomes the blueprint.',
    },
    {
      step: '02',
      title: 'Built Beside Your Old System',
      detail:
        'Your old system keeps running. The new one runs quietly beside it, and every night we check the two against each other — same sales, same totals, line by line.',
    },
    {
      step: '03',
      title: 'You Say Go',
      detail:
        'Nothing switches until the numbers have matched day after day and you give the word — and the switch itself costs zero hours of downtime.',
    },
    {
      step: '04',
      title: 'We Stay On',
      detail:
        'Nightly backups, support you can actually call, and new features as your business grows. Local, reachable, in person when you need us.',
    },
  ],
  audienceHeading: 'Who This Is For',
  audience: [
    'Retail stores stuck on an aging register or terminal POS',
    'Repair and service shops running on paper tickets',
    'Businesses renting software that fights them',
    'Owners whose customer list lives in someone’s head',
    'Companies quoted $50K+ by custom software shops',
    'Anyone who wants to own their system instead of renting it',
  ],
  chipsHeading: 'What It Can Run',
  chips: [
    'Point of Sale',
    'Inventory',
    'Customer Database',
    'Invoicing',
    'Service Tickets',
    'Scheduling',
    'Your Website',
    'AI Assistant',
  ],
  result: {
    headline: 'Before Anything Switches',
    stats: [
      { value: '2', label: 'Systems Running Side by Side' },
      { value: 'Nightly', label: 'Books Checked Against Books' },
      { value: '$0.00', label: 'Difference Before You Switch' },
    ],
    narrative:
      'The new system has to earn it: it runs beside the register you already trust until the nightly difference is zero. Then you give the word.',
  },
  mistakesHeading: 'Why Business Software Usually Goes Wrong',
  mistakes: [
    {
      title: 'Renting forever',
      detail:
        'Big-name platforms charge rent forever, raise prices when they want, and hold your data if you try to leave. They rent you your own business back.',
    },
    {
      title: 'Generic software, forced workarounds',
      detail:
        'Off-the-shelf systems are built for everyone, which means they fit no one. Your team ends up keeping half the business on paper and in their heads.',
    },
    {
      title: 'The custom software invoice',
      detail:
        'Traditional custom shops quote $50,000–$150,000, take 3–6 months, and bill 15–20% a year in maintenance. A single local business was never their customer.',
    },
    {
      title: 'Rip-and-replace migrations',
      detail:
        'Most switches mean a scary weekend cutover and lost data. We never rip anything out.',
    },
  ],
  pricingHeading: 'What It Costs',
  pricing:
    `The whole price, printed right here: ${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. No per-register fees and no add-ons. Month-to-month, and the system stays yours. One job: ${OS_PRICING.promise} This is custom-software ownership without the custom-software invoice.`,
  whyUsHeading: 'Why Businesses Choose Found It OS',
  whyUs: [
    `Real local businesses running or being fitted on their own systems right now.`,
    'You own 100% of the code and the data.',
    'Proven beside your old system until both sets of books agree, night after night.',
    'Built-in AI that answers questions about your own business in plain English.',
    `${TRACK_RECORD.yearsInBusiness} years building for local businesses.`,
  ],
  faqHeading: 'Found It OS FAQ',
  faq: [
    {
      question: 'What exactly is Found It OS?',
      answer:
        'It is a custom operating system for your business — point of sale, inventory, customers, invoices, service tickets, and your website in one system, with a built-in AI assistant. It is built around how your business actually runs, and you own it outright.',
    },
    {
      question: 'What happens to my old system and my data?',
      answer:
        'Nothing, until the new system has earned it. Your old system keeps running while Found It OS runs beside it, checked against it nightly, sale for sale. Your existing data — even handwritten invoices — comes in during the fitting. You switch when the numbers have proven themselves and you say go.',
    },
    {
      question: 'Who owns the system?',
      answer:
        'You do. The code, the data, the whole system — it is your asset. If we ever part ways, it stays yours and keeps running.',
    },
    {
      question: 'How long does a fitting take?',
      answer:
        'Weeks, not months. You get a firm timeline at your fitting; nothing switches until you give the word.',
    },
    {
      question: 'What does it cost?',
      answer:
        `${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. That is the whole number — no per-register fees and no surprise add-ons.`,
    },
    {
      question: 'Do you take every business that asks?',
      answer:
        "No. Every system is built one business at a time, and we take a handful of new fittings a month. The fitting is where both sides decide — if it's not a fit, we say so, and tell you what we'd do instead.",
    },
    {
      question: "What if it doesn't work out?",
      answer:
        "Then you cancel. Thirty days' notice. The system keeps running, and everything in it — the customers, the invoices, the books — is still yours.",
    },
    {
      question: 'What does the monthly cover?',
      answer:
        'Backups, support, and new features. The system and the data are already yours, so the monthly buys upkeep, not access.',
    },
    {
      question: 'Is it safe? Who can see what?',
      answer:
        'Everyone on your team gets their own login, limited to their role — the front desk sees the front desk, the books stay with the owner. The AI can read your books; it cannot write to them. Everything is backed up every night. It is your data, period.',
    },
    {
      question: 'My business is too complicated for software. Can you really fit it?',
      answer:
        'Complicated is where custom software thrives. Off-the-rack systems break down exactly where your business gets interesting — the weird workflows, the exceptions, the things only you do. Those are the parts we map first, and the system gets built around them. Complicated businesses are why we exist.',
    },
    {
      question: 'Do I need a technical person on staff?',
      answer:
        'No. It is built to be run by the people already behind your counter, we handle backups and support, and everything is documented. If you ever want to take it in-house, you inherit a clean, fully owned system.',
    },
  ],
  relatedReading: [
    { title: 'Custom Software by Industry — the full map', href: '/custom-software' },
    { title: 'Auto Repair Shop Software You Own', href: '/custom-software/auto-repair-shops' },
    { title: 'Contractor & Field Service Software You Own', href: '/custom-software/contractors' },
    { title: 'Custom App Development', href: '/app-development' },
    { title: 'What Is A Software Map?', href: '/blog/what-is-a-software-map' },
    { title: 'The Rent Isn’t the Problem. The Hostage Is.', href: '/blog/rented-software-no-data-rights' },
  ],
  finalCtaHeadline: 'See Your Business on Its Own OS',
  finalCtaSub:
    `Tell us how your business runs today — the register, the paper, the workarounds. Systems get built one business at a time, a handful of new fittings a month — if yours is a fit, we map what your own operating system would look like, in person if you are local. If it's not, we'll tell you straight — and tell you what we'd do instead.`,
};

export default function FoundItOSPillar() {
  return <ServicePillar data={data} />;
}
