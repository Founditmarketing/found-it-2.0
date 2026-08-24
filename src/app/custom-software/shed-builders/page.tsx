import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { OS_PRICING, TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Shed Builder Software You Own - ShedSuite Alternative',
  description:
    `Shed builder software you own outright. Orders, dealer lots, build queue, delivery, rent-to-own. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. ${OS_PRICING.promise}`,
  alternates: { canonical: '/custom-software/shed-builders' },
  openGraph: {
    title: 'Shed Builder Software You Own Outright | Found It Software',
    description:
      `One system for your whole yard. Orders, dealer lots, build queue, delivery, and rent-to-own. Fitted to how you run, and yours forever. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Month-to-month. Cancel anytime, the system stays yours.`,
    type: 'website',
    url: 'https://www.founditsoftware.com/custom-software/shed-builders',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

/** Parse a display sticker like '$2,200' into the numeric 2200 for JSON-LD. */
const usd = (sticker: string) => Number(sticker.replace(/[^0-9.]/g, ''));

const data: PillarData = {
  name: 'Shed Builder Software',
  slug: '/custom-software/shed-builders',
  serviceType: 'Custom Shed Builder & Portable Building Dealer Software',
  offers: [
    { price: usd(OS_PRICING.monthly), priceCurrency: 'USD', unitCode: 'MON', name: OS_PRICING.monthlyLabel },
    { price: usd(OS_PRICING.setup), priceCurrency: 'USD', name: OS_PRICING.setupLabel },
  ],
  schemaDescription:
    `Custom operating system for shed builders and portable building dealers. Orders, dealer lots, build queue, delivery scheduling, and rent-to-own tracking in one system the business owns outright. An alternative to renting ShedSuite-class software with per-unit fees. Records are migrated in, and nothing switches until the new system runs beside the old one and matches it. ${OS_PRICING.monthly} per month plus a one-time ${OS_PRICING.setup} migration and setup. Built to simplify the owner's life and make the business more profitable.`,
  eyebrow: 'Found It OS · Shed Builders',
  headline: 'Stop Paying Rent on',
  headlineAccent: 'Every Building You Sell.',
  intro:
    `Most shed software charges per unit. The more buildings you move, the bigger the bill. And your orders, dealer records, and RTO contracts live on someone else's servers. Found It OS is the other way. One system fitted to how your yard runs. Orders, dealer lots, the build queue, delivery scheduling, rent-to-own tracking. You own it outright, code and data. We built exactly this for a Texas shed manufacturer replacing a ShedSuite-class system. Nothing switches until the new system runs beside your old one and matches it.`,
  ctaLabel: 'Get Fitted',
  formSource: 'service_shed_builders',
  formPageSlug: 'custom-software-shed-builders',
  formHeading: 'Get Fitted',
  stats: [
    { value: 'Live', label: 'Real Systems Running Now' },
    { value: '$0', label: 'Per-Building Fees' },
    { value: '100%', label: 'Yours, Code & Data' },
    { value: '0 Hrs', label: 'Downtime at Switch' },
  ],
  definitionHeading: 'What Is Shed Builder Software?',
  definition:
    "Shed builder software runs the whole life of a building. The order, the build, the haul, and the payments. Not a sales binder, a paper build sheet, and a driver's memory. A real system tracks every order from sold to set, shows every dealer lot on one screen, feeds the shop a clean build queue, schedules deliveries, and keeps rent-to-own accounts straight. Off-the-shelf versions rent you that and charge by the unit. Found It OS builds it around your operation, and you own it. The code, the data, everything. Ask it a question in plain English. Which lots are low, what is in the queue, who is behind on RTO. It answers from your own books.",
  includedHeading: 'What a Shed Builder OS Includes',
  included: [
    {
      title: 'One Order Desk',
      detail:
        'Every building from sold to delivered on one pipeline. Who bought it, what options, where it stands, what is owed. Not a binder and three phone calls.',
    },
    {
      title: 'Dealer Lots on One Screen',
      detail:
        'Every lot, every unit, every consignment in one place. No more calling around to find out what is sitting where.',
    },
    {
      title: 'The Build Queue',
      detail:
        'Paper build sheets get lost and smudged. The queue puts every spec in front of the shop in order, and the office sees where each build stands.',
    },
    {
      title: 'Delivery Scheduling',
      detail:
        'Hauls scheduled against the queue, not a whiteboard. The driver, the customer, and the office all see the same date.',
    },
    {
      title: 'Rent-to-Own Tracking',
      detail:
        'Every RTO contract, payment, and balance in one ledger. Who is current, who is behind, what each account is worth. No spreadsheet on the side.',
    },
    {
      title: 'Spoken Order Intake',
      detail:
        'Talk the order in. Size, options, lot, customer. The AI sorts it into a clean draft. A human reviews and confirms before anything hits the books.',
    },
  ],
  approachHeading: 'How a Fitting Works',
  approach: [
    {
      step: '01',
      title: 'The Fitting',
      detail:
        'We map how your operation really runs. How an order comes in, how a build sheet reaches the shop, how a haul gets scheduled, how RTO money moves. That becomes the blueprint.',
    },
    {
      step: '02',
      title: 'Your Records Come With You',
      detail:
        'Orders, dealer inventory, RTO contracts, customer history. Migrated in, not abandoned. Even the paper comes along.',
    },
    {
      step: '03',
      title: 'Proven Beside the Old System',
      detail:
        'Your current system keeps running. The new one runs beside it until the two match, day after day. Then you give the word.',
    },
    {
      step: '04',
      title: 'We Stay On',
      detail:
        'Nightly backups, support you can call, and new features as the operation grows.',
    },
  ],
  audienceHeading: 'Who This Is For',
  audience: [
    'Shed and portable building manufacturers tired of per-unit software fees',
    'Dealers juggling multiple lots with no single picture of inventory',
    'Shops still running builds off paper build sheets',
    'Operations carrying rent-to-own accounts in a spreadsheet',
    "Anyone whose order book lives in a binder and someone's head",
    'Builders who want to own their system instead of renting it',
  ],
  chipsHeading: 'What It Can Run',
  chips: [
    'Orders',
    'Dealer Lots',
    'Build Queue',
    'Delivery Scheduling',
    'Rent-to-Own',
    'Spoken Order Intake',
    'Customer Book',
    'Your Website',
    'AI Assistant',
  ],
  result: {
    headline: 'Built for a Texas Shed Maker',
    stats: [
      { value: '6', label: 'Functions, One System' },
      { value: 'End-to-End', label: 'Phase 1 Verified' },
      { value: '$0', label: 'Per-Unit Fees' },
    ],
    narrative:
      'A Texas shed manufacturer came to us renting a ShedSuite-class system. We fitted them a full system of their own. Orders, dealer lots, the build queue, delivery scheduling, and rent-to-own tracking on one desk. Plus spoken order intake: talk the order in, the AI sorts it, a human confirms it. Phase 1 is built and verified end-to-end, from a sold order through to delivery. Fitted to how they run, owned by them.',
  },
  mistakesHeading: 'Why Shed Software Usually Goes Wrong',
  mistakes: [
    {
      title: 'The per-unit toll',
      detail:
        "The standard model charges by the building. Your best month becomes the software company's best month, and the bill grows forever. You never own a thing.",
    },
    {
      title: 'Dealer-lot chaos',
      detail:
        "When lot inventory lives in texts, calls, and a dealer's notebook, nobody knows what is on the ground. Units sit, sales stall, the office finds out last.",
    },
    {
      title: 'Paper build sheets',
      detail:
        'A paper build sheet can be lost, misread, or built wrong. The shop deserves a queue it can trust, and the office deserves to see where every build stands.',
    },
    {
      title: 'Rip-and-replace switches',
      detail:
        'Most switches mean a scary cutover weekend and records left behind. We never rip anything out. Your records come with you, and the new system proves itself beside the old one first.',
    },
  ],
  pricingHeading: 'What It Costs',
  pricing:
    `The whole price, printed right here: ${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. Sell more buildings and the price stays the same. No per-unit or per-lot fees. Month-to-month, and the system stays yours, code and data. One job: ${OS_PRICING.promise} Compare that to software that takes a toll on every unit and holds your records if you try to leave.`,
  whyUsHeading: 'Why Shed Builders Choose Found It OS',
  whyUs: [
    'We already built this for the shed industry. A full system fitted to a Texas shed manufacturer replacing a ShedSuite-class system, Phase 1 verified end-to-end.',
    `Real local businesses run their own systems right now.`,
    'You own 100% of the code and the data.',
  ],
  faqHeading: 'Shed Builder Software FAQ',
  faq: [
    {
      question: 'Is Found It OS a ShedSuite alternative?',
      answer:
        'Yes. We built a full system for a Texas shed manufacturer to replace a ShedSuite-class system. Orders, dealer lots, build queue, delivery, rent-to-own. The difference is the model. ShedSuite is rental software. Found It OS is built around your operation, you own it outright, and there are no per-unit fees.',
    },
    {
      question: 'Do you charge per building like other shed software?',
      answer:
        `No. The price is published and flat: ${OS_PRICING.monthly} a month plus a one-time ${OS_PRICING.setup} for migration and setup. Sell ten buildings or a hundred, the price does not move. No per-unit, per-lot, or per-user fees.`,
    },
    {
      question: 'What happens to my existing orders, dealer records, and RTO contracts?',
      answer:
        'They come with you. Orders, lot inventory, rent-to-own accounts, customer history, even what lives on paper. Nothing gets abandoned, and nothing switches until the new system matches the old one.',
    },
    {
      question: 'Can my dealers use it on their lots?',
      answer:
        'Yes. Every lot and every unit on one screen, so the office and the lots see the same inventory. The fitting maps how your dealer network works. Consignment, company lots, or both.',
    },
    {
      question: 'What is spoken order intake?',
      answer:
        'You talk the order in. Building, size, options, customer, lot. The AI sorts what you said into a clean draft order, and a human confirms it before it hits the books. Built for how orders really happen: in the yard, on the phone.',
    },
    {
      question: 'Who owns the system?',
      answer:
        'You do. The code, the data, the whole system. Rented shed software holds your order history and RTO book and dares you to switch. Ownership ends that.',
    },
    {
      question: 'Is this in production at a shed company today?',
      answer:
        'The first shed-industry build, for a Texas manufacturer, has Phase 1 built and verified end-to-end. From a sold order through dealer lots, the build queue, delivery, and rent-to-own. Nothing switches until the system proves itself beside your old one.',
    },
  ],
  relatedReading: [
    { title: 'Found It OS - Custom Operating Systems for Local Businesses', href: '/foundit-os' },
    { title: 'Custom Software for Local Businesses', href: '/custom-software' },
    { title: 'Custom Software for Home Builders', href: '/custom-software/home-builders' },
    { title: 'Custom Software for Car Dealerships', href: '/custom-software/car-dealerships' },
  ],
  finalCtaHeadline: 'See Your Yard on Its Own OS',
  finalCtaSub:
    `Tell us how your operation runs today. The order binder, the build sheets, the lot calls, the RTO spreadsheet. We will map what your own operating system would look like. In person if you are local.`,
};

export default function ShedBuildersPillar() {
  return <ServicePillar data={data} />;
}
