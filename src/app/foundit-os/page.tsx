import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { OS_PRICING } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Found It OS — The AI Employee Your Business Owns',
  description:
    `Found It OS is custom software + AI employee, built around your business. It answers, it types, it chases what you're owed, and you own it outright. ${OS_PRICING.monthly}/mo plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Alexandria, LA.`,
  alternates: { canonical: '/foundit-os' },
  openGraph: {
    title: 'Found It OS — Custom Operating Systems for Local Businesses | Found It Software',
    description:
      `One system for your whole business, built to fit it, and yours forever. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. ${OS_PRICING.promise}`,
    type: 'website',
    url: 'https://www.founditsoftware.com/foundit-os',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
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
    `Found It OS is a custom AI business operating system built one business at a time. Point of sale, inventory, customers, service tickets, website, and an AI employee that answers the phone, drafts follow-ups, and chases receivables, in one system the client owns outright. It runs beside the old system until the books match to the penny, so there is no rip-and-replace weekend. ${OS_PRICING.monthly} per month plus a one-time ${OS_PRICING.setup} for migration and setup.`,
  eyebrow: 'The Software Version of Your Business',
  headline: 'It Answers. It Types. It Chases.',
  headlineAccent: 'You Own It.',
  intro:
    `Custom software + AI employee, built around your business. It answers the phone, types the paperwork, and chases what you're owed. You own it outright — the code and the data.`,
  heroDefinition:
    `We study how your company actually runs and build one system around it — phone, paperwork, customers, jobs, books — with an AI employee inside.`,
  heroPriceLine: `${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup · Month-to-month · You own the code and data`,
  ctaLabel: 'Show Me Mine',
  formSource: 'service_foundit_os',
  formPageSlug: 'foundit-os',
  formHeading: 'Start your Software Map',
  /* THE GATE (Trevor 8/16): the fit check stands where the open form stood —
     qualified gets the form, NOT A FIT gets the kind dismissal, no capture. */
  fitGate: true,
  stats: [
    { value: 'Live', label: 'Systems Running Now' },
    { value: 'To the ¢', label: 'Matched Every Night' },
    { value: '100%', label: 'Yours. Code & Data' },
    { value: 'None', label: 'Rip-and-Replace Weekend' },
  ],
  voiceDemo: true,
  driveOs: true,
  compareCtas: [
    { label: 'Compared to Grok', href: '/vs-grok' },
    { label: 'Compared to Viktor', href: '/vs-viktor' },
  ],
  proof: {
    kicker: 'Named result · Edwards Roofing, Central Louisiana',
    headline: "It doesn't just look good.",
    headlineAccent: 'It finds what the old system missed.',
    stats: [
      { value: '$195,882.75', label: 'surfaced in open receivables the day the system read the books' },
      { value: '$19,000', label: 'bookkeeping error caught — carried for years by the old software' },
    ],
    href: '/case-studies/edwards-roofing',
    hrefLabel: 'Read the case study',
    qualifier: 'Actual result from one client. Results depend on the business and its records.',
  },
  reelTransition: 'That was a tire shop. This is a nursery. Every Found It OS is different, because every business is.',
  automationReel: true,
  definitionHeading: 'What Is a Business Operating System?',
  definition:
    'One piece of software that runs the whole operation — sales, inventory, customers, invoices, service, website — instead of five subscriptions taped together. Big platforms sell off the rack. This one is made to measure. And you own it all: the code, the data, everything.',
  includedHeading: 'What Every Found It OS Includes',
  included: [
    {
      title: 'Fitted, Not Templated',
      detail:
        'We study how your business really runs. Then we build the system around it.',
    },
    {
      title: 'The Operational Core',
      detail:
        'Customers, sales, jobs, inventory, invoicing, service, scheduling — and the books that feed your accountant. Payroll, taxes, and trust accounting stay with the licensed professionals responsible for them.',
    },
    {
      title: 'Your Website, Wired In',
      detail:
        'Your website and your system share one brain. Change a price once and it shows up everywhere.',
    },
    {
      title: 'An AI Employee on Every Shift',
      detail:
        'Answers the phone, drafts follow-ups, chases what you’re owed, files paperwork from a photo. It can read your books. It cannot write them.',
    },
    {
      title: 'Books That Show Their Work',
      detail:
        'Every sale, refund, and edit lands in one permanent journal, backed up every night. Your accountant can check every penny.',
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
        'We come to your business and walk every flow — how a sale rings, how inventory moves, what lives on paper.',
    },
    {
      step: '02',
      title: 'Built Beside Your Old System',
      detail:
        'Your old system keeps running. The new one runs beside it, checked against it every night, line by line.',
    },
    {
      step: '03',
      title: 'You Say Go',
      detail:
        'Nothing switches until the numbers match night after night — and you say go.',
    },
    {
      step: '04',
      title: 'We Stay On',
      detail:
        'Nightly backups, support you can actually call, new features as you grow.',
    },
  ],
  audienceHeading: 'Built for the Owner Who Still Knows How Everything Works',
  audience: [
    'Owner-led companies, roughly $1M–$20M a year',
    'Where paper, spreadsheets, or one indispensable employee still carries part of the operation',
    'Dealer & retail — register, inventory, customer book, invoicing',
    'Trade & service — calls, estimates, scheduling, jobs, collections',
    'Wholesale & accounts — orders, pull sheets, terms, receivables',
    'The owner sits in the fitting. That’s where the system comes from.',
  ],
  result: {
    headline: 'Before Anything Switches',
    stats: [
      { value: '2', label: 'Systems Running Side by Side' },
      { value: 'Nightly', label: 'Books Checked Against Books' },
      { value: '$0.00', label: 'Difference Before You Switch' },
    ],
    narrative:
      'The new system has to earn it. Nightly difference hits zero, then you say go.',
  },
  mistakesHeading: 'Why Business Software Usually Goes Wrong',
  mistakes: [
    {
      title: 'Renting forever',
      detail:
        'Big platforms charge rent forever and keep the working system if you leave. They rent you your own business back.',
    },
    {
      title: 'Generic software, forced workarounds',
      detail:
        'Built for everyone, so it fits no one. Half the business stays on paper and in people’s heads.',
    },
    {
      title: 'The custom software invoice',
      detail:
        'Custom shops quote $50,000–$150,000, take 3–6 months, and bill 15–20% a year to keep it running. A single local business was never their customer.',
    },
    {
      title: 'Rip-and-replace migrations',
      detail:
        'Most switches mean a scary weekend and lost data. We never rip anything out.',
    },
  ],
  trust: {
    headline: 'Built like your business depends on it.',
    headlineAccent: 'Because it does.',
    items: [
      {
        title: 'One business, one isolated database',
        detail: 'Your records never share a database with another company’s. Nightly backups with point-in-time recovery.',
      },
      {
        title: 'A ledger nobody can silently rewrite',
        detail: 'Money history is append-only. Corrections post on the record; originals stay visible.',
      },
      {
        title: 'The AI reads. It cannot spend or rewrite history.',
        detail: 'Drafts wait for the owner’s tap. It never touches the books on its own.',
      },
      {
        title: 'If Found It disappears, your system doesn’t',
        detail: 'You hold the code, the data, the accounts, and the transfer documentation.',
      },
    ],
  },
  pricingHeading: 'The Whole Price',
  offerCard: {
    monthly: OS_PRICING.monthly,
    setup: OS_PRICING.setup,
    bullets: [
      'Month-to-month — no long-term contract',
      'Hosting and nightly backups',
      'Support from a human who knows the system',
      'Security fixes and updates',
      'Ongoing workflow improvements',
      'The code and the data remain yours',
      'Major new divisions scoped in writing first',
      'No per-register or per-seat fees',
    ],
    promise: OS_PRICING.promise,
    kicker: 'The system earns the next month, every month.',
  },
  faqHeading: 'Found It OS FAQ',
  faq: [
    {
      question: 'What exactly is Found It OS?',
      answer:
        'One system for your whole business. Point of sale, inventory, customers, invoices, service tickets, and your website, with an AI employee working inside it. Built around how you run, and you own it outright.',
    },
    {
      question: 'What does "AI employee" actually mean?',
      answer:
        'Work the system does itself: answers the phone, drafts follow-ups, sends payment reminders, files paperwork from a photo. Your people approve what matters. It never touches the books on its own.',
    },
    {
      question: 'What happens to my old system and my data?',
      answer:
        'Nothing yet. It keeps running while Found It OS runs beside it, checked nightly. Your data comes in during the fitting — even the handwritten invoices. You switch when the numbers match.',
    },
    {
      question: 'Who owns the system?',
      answer:
        'You do. The code, the data, all of it. If we ever part ways, it stays yours and keeps running.',
    },
    {
      question: 'What does it cost?',
      answer:
        `${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. That is the whole number. No per-register fees, no surprise add-ons.`,
    },
    {
      question: "What if it doesn't work out?",
      answer:
        "Then you cancel with thirty days' notice. The system keeps running, and everything in it is still yours.",
    },
  ],
  relatedReading: [
    { title: 'Same Job Title. Different Deal. (vs the other AI employees)', href: '/blog/ai-employee-vs-ai-employee' },
    { title: 'Custom Software by Industry', href: '/custom-software' },
    { title: 'Auto Repair Shop Software You Own', href: '/custom-software/auto-repair-shops' },
    { title: 'Contractor & Field Service Software You Own', href: '/custom-software/contractors' },
    { title: 'Custom App Development', href: '/app-development' },
    { title: 'The Free Walkthrough, Explained', href: '/blog/what-is-a-software-map' },
    { title: 'You Can Export the Nouns. They Keep the Verbs.', href: '/blog/rented-software-no-data-rights' },
  ],
  finalCtaHeadline: 'See What Yours Would Do First',
  finalCtaSub:
    `Tell us how your business runs today. If it's a fit, we show you what your AI employee would take off your people first. If it's not, we say so.`,
};

export default function FoundItOSPillar() {
  return <ServicePillar data={data} />;
}
