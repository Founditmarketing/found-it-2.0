import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { OS_PRICING, TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Found It OS — The AI Employee Your Business Owns',
  description:
    `Found It OS is custom software with an AI employee, built around your business. It answers, it types, it chases what you're owed, and you own it outright. ${OS_PRICING.monthly}/mo plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Alexandria, LA.`,
  alternates: { canonical: '/foundit-os' },
  openGraph: {
    title: 'Found It OS — Custom Operating Systems for Local Businesses | Found It Software',
    description:
      `One system for your whole business, built to fit it, and yours forever. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. ${OS_PRICING.promise}`,
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
    `Found It OS is a custom AI business operating system built one business at a time. Point of sale, inventory, customers, service tickets, website, and an AI employee that answers the phone, drafts follow-ups, and chases receivables, in one system the client owns outright. It runs beside the old system until the books match to the penny, so the switch has zero downtime. ${OS_PRICING.monthly} per month plus a one-time ${OS_PRICING.setup} for migration and setup.`,
  eyebrow: 'Found It OS',
  headline: 'It Answers. It Types. It Chases.',
  headlineAccent: 'You Own It.',
  intro:
    `Found It OS is custom software with an AI employee, built around your business. It answers the phone and takes a real message. It types the paperwork your people re-key today. It chases the estimates and the money owed so nobody has to. And unlike every subscription on your card, you own it outright: the code and the data. Nothing switches until it has run beside your old system and matched it to the penny.`,
  ctaLabel: "Show Me What You’d Build",
  formSource: 'service_foundit_os',
  formPageSlug: 'foundit-os',
  formHeading: 'Start your Software Map',
  /* THE GATE (Trevor 8/16): the fit check stands where the open form stood —
     qualified gets the form, NOT A FIT gets the kind dismissal, no capture. */
  fitGate: true,
  stats: [
    { value: 'Live', label: 'Real Systems Running Now' },
    { value: 'To the ¢', label: 'Matched Every Night' },
    { value: '100%', label: 'Yours. Code & Data' },
    { value: '0 Hrs', label: 'Downtime at Switch' },
  ],
  voiceDemo: true,
  automationReel: true,
  definitionHeading: 'What Is a Business Operating System?',
  definition:
    'A business operating system is one piece of software that runs your whole operation. Sales, inventory, customers, invoices, service work, and your website in one place, not five subscriptions taped together. Big platforms sell off the rack, built for everyone. Found It OS is made to measure. We study how your business works, then build the system around it. One screen your team uses. One customer list. An AI that answers questions about your business in plain English. And you own it all. The code, the data, everything.',
  includedHeading: 'What Every Found It OS Includes',
  included: [
    {
      title: 'Fitted, Not Templated',
      detail:
        'We study how your business really runs. Then we build the system around it.',
    },
    {
      title: 'The Whole Operation',
      detail:
        'Point of sale, inventory, customers, invoices, service tickets, scheduling. Whatever your business runs on, in one system.',
    },
    {
      title: 'Your Website, Wired In',
      detail:
        'Your website and your system share one brain. Change a price once and it shows up everywhere.',
    },
    {
      title: 'An AI Employee on Every Shift',
      detail:
        'It answers the phone, drafts the follow-up texts, chases what you are owed, and files paperwork from a photo. Ask it anything about your books in plain English. It can read them. It cannot write them.',
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
        'We come to your business and walk every flow. How a sale rings, how inventory moves, what lives on paper. That is what we build from.',
    },
    {
      step: '02',
      title: 'Built Beside Your Old System',
      detail:
        'Your old system keeps running. The new one runs beside it. Every night we check the two against each other. Same sales, same totals, line by line.',
    },
    {
      step: '03',
      title: 'You Say Go',
      detail:
        'Nothing switches until the numbers match day after day and you say go. The switch takes zero downtime.',
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
    'Owners still doing office work at nine o’clock at night',
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
    'The AI Employee',
  ],
  result: {
    headline: 'Before Anything Switches',
    stats: [
      { value: '2', label: 'Systems Running Side by Side' },
      { value: 'Nightly', label: 'Books Checked Against Books' },
      { value: '$0.00', label: 'Difference Before You Switch' },
    ],
    narrative:
      'The new system has to earn it. It runs beside the register you trust until the nightly difference is zero. Then you say go.',
  },
  mistakesHeading: 'Why Business Software Usually Goes Wrong',
  mistakes: [
    {
      title: 'Renting forever',
      detail:
        'Big-name platforms charge rent forever, raise prices when they want, and keep the working system if you try to leave. They rent you your own business back.',
    },
    {
      title: 'Generic software, forced workarounds',
      detail:
        'Off-the-shelf systems are built for everyone, so they fit no one. Your team keeps half the business on paper and in their heads.',
    },
    {
      title: 'The custom software invoice',
      detail:
        'Custom shops quote $50,000–$150,000, take 3–6 months, and bill 15–20% a year to keep it running. A single local business was never their customer.',
    },
    {
      title: 'Rip-and-replace migrations',
      detail:
        'Most switches mean a scary weekend cutover and lost data. We never rip anything out.',
    },
  ],
  pricingHeading: 'What It Costs',
  pricing:
    `The whole price, printed right here. ${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. No per-register fees. Major new divisions or standalone modules are scoped in writing before work begins. Month to month, and the system stays yours. ${OS_PRICING.promise} Custom software you own, without the custom software invoice.`,
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
        'One system for your whole business. Point of sale, inventory, customers, invoices, service tickets, and your website, with an AI employee working inside it. Built around how you run, and you own it outright.',
    },
    {
      question: 'What does "AI employee" actually mean?',
      answer:
        'Work the system does itself. It answers the phone and takes a real message. It drafts the follow-up texts on open estimates. It sends the payment reminders. It reads paperwork from a photo and files it. Your people approve what matters, and it never touches the books on its own.',
    },
    {
      question: 'What happens to my old system and my data?',
      answer:
        'Nothing yet. Your old system keeps running while Found It OS runs beside it, checked against it every night. Your data, even handwritten invoices, comes in during the fitting. You switch when the numbers match and you say go.',
    },
    {
      question: 'Who owns the system?',
      answer:
        'You do. The code, the data, all of it. If we ever part ways, it stays yours and keeps running.',
    },
    {
      question: 'How long does a fitting take?',
      answer:
        'Weeks, not months. You get a firm timeline at your fitting. Nothing switches until you say go.',
    },
    {
      question: 'What does it cost?',
      answer:
        `${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. That is the whole number. No per-register fees, no surprise add-ons.`,
    },
    {
      question: 'Do you take every business that asks?',
      answer:
        "No. We build one business at a time, a handful of new fittings a month. If it's not a fit, we say so and tell you what we'd do instead.",
    },
    {
      question: "What if it doesn't work out?",
      answer:
        "Then you cancel with thirty days' notice. The system keeps running, and everything in it is still yours.",
    },
    {
      question: 'What does the monthly cover?',
      answer:
        'Backups, support, and new features. The system and the data are already yours, so the monthly buys upkeep, not access.',
    },
    {
      question: 'Is it safe? Who can see what?',
      answer:
        'Everyone gets their own login, limited to their role. The front desk sees the front desk. The books stay with the owner. The AI can read your books. It cannot write to them. Backed up every night. Your data, period.',
    },
    {
      question: 'My business is too complicated for software. Can you really fit it?',
      answer:
        'Complicated is where custom software wins. Off-the-rack systems break exactly where your business gets interesting. Those weird parts are what we study first, and the system gets built around them.',
    },
    {
      question: 'Do I need a technical person on staff?',
      answer:
        'No. It is built for the people already behind your counter. We handle backups and support. If you ever take it in-house, you inherit a clean system you fully own.',
    },
  ],
  relatedReading: [
    { title: 'Same Job Title. Different Deal. (vs the other AI employees)', href: '/blog/ai-employee-vs-ai-employee' },
    { title: 'Custom Software by Industry', href: '/custom-software' },
    { title: 'Auto Repair Shop Software You Own', href: '/custom-software/auto-repair-shops' },
    { title: 'Contractor & Field Service Software You Own', href: '/custom-software/contractors' },
    { title: 'Custom App Development', href: '/app-development' },
    { title: 'The Free Walkthrough, Explained', href: '/blog/what-is-a-software-map' },
    { title: 'The Rent Isn’t the Problem. The Hostage Is.', href: '/blog/rented-software-no-data-rights' },
  ],
  finalCtaHeadline: 'See What Yours Would Do First',
  finalCtaSub:
    `Tell us how your business runs today. The phone, the paper, the chasing. If yours is a fit, we show you what your own AI employee would take off your people first. If it's not, we tell you straight.`,
};

export default function FoundItOSPillar() {
  return <ServicePillar data={data} />;
}
