import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { OS_PRICING, TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Shed Builder Software You Own — ShedSuite Alternative',
  description:
    `Custom shed builder software you own outright — orders, dealer lots, build queue, delivery, rent-to-own. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. ${OS_PRICING.promise}`,
  alternates: { canonical: '/custom-software/shed-builders' },
  openGraph: {
    title: 'Shed Builder Software You Own Outright | Found It Marketing',
    description:
      `One system for your whole yard — orders, dealer lots, build queue, delivery, and rent-to-own, fitted to how you actually run and yours forever. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Month-to-month — cancel anytime, and the system stays yours.`,
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
    `Custom operating system for shed builders and portable building dealers — orders, dealer lots, build queue, delivery scheduling, and rent-to-own tracking in one system the business owns outright. Built as an alternative to renting ShedSuite-class software with per-unit fees. Records are professionally migrated in, and nothing switches until the new system runs beside the old one and matches it. ${OS_PRICING.monthly} per month plus a one-time ${OS_PRICING.setup} migration and setup, built to simplify the owner’s life and make the business more profitable.`,
  eyebrow: 'Found It OS · Shed Builders',
  headline: 'Stop Paying Rent on',
  headlineAccent: 'Every Building You Sell.',
  intro:
    `Most software in the shed world charges per unit — the more buildings you move, the bigger the bill — and your orders, your dealer records, and your RTO contracts live on someone else's servers the whole time. Found It OS is the other way to do it: one system fitted to how your yard actually runs — orders, dealer lots, the build queue, delivery scheduling, rent-to-own tracking — and you own it outright, code and data. We built exactly this for a Texas shed manufacturer replacing a ShedSuite-class system, and nothing switches until the new system has run beside your old one and matched it.`,
  ctaLabel: 'Get Fitted',
  formSource: 'service_shed_builders',
  formPageSlug: 'custom-software-shed-builders',
  formHeading: 'Get Fitted',
  stats: [
    { value: 'Live', label: 'Real Systems Running Now' },
    { value: '$0', label: 'Per-Building Fees' },
    { value: '100%', label: 'Yours — Code & Data' },
    { value: '0 Hrs', label: 'Downtime at Switch' },
  ],
  definitionHeading: 'What Is Shed Builder Software?',
  definition:
    'Shed builder software runs the whole life of a building — the order, the build, the haul, and the payments — instead of leaving it scattered across a sales binder, a paper build sheet, and a driver\'s memory. A real system tracks every order from sold to set, shows every dealer lot on one screen, feeds the shop a clean build queue, schedules deliveries, and keeps rent-to-own accounts straight. Off-the-shelf versions rent you that capability and charge by the unit. Found It OS builds it around your operation instead — and at the end, you own it. The code, the data, everything. Ask it a question in plain English — which lots are low, what\'s in the queue, who\'s behind on RTO — and it answers from your own books.',
  includedHeading: 'What a Shed Builder OS Includes',
  included: [
    {
      title: 'One Order Desk',
      detail:
        'Every building from sold to delivered on one pipeline — who bought it, what options, where it stands, and what\'s owed — instead of a binder and three phone calls.',
    },
    {
      title: 'Dealer Lots on One Screen',
      detail:
        'Every lot, every unit, every consignment in one place. No more calling around to find out what\'s actually sitting where — the chaos of scattered lots ends here.',
    },
    {
      title: 'The Build Queue',
      detail:
        'Paper build sheets get lost, smudged, and rebuilt from memory. The queue puts every spec in front of the shop in order, and the office sees exactly where each build stands.',
    },
    {
      title: 'Delivery Scheduling',
      detail:
        'Hauls scheduled against the queue, not against a whiteboard. The driver, the customer, and the office all see the same date.',
    },
    {
      title: 'Rent-to-Own Tracking',
      detail:
        'Every RTO contract, payment, and balance in one ledger — who\'s current, who\'s behind, and what each account is worth, without a spreadsheet on the side.',
    },
    {
      title: 'Spoken Order Intake',
      detail:
        'Talk the order in — size, options, lot, customer — and the AI sorts it into a clean draft. A human reviews and confirms before anything hits the books.',
    },
  ],
  approachHeading: 'How a Fitting Works',
  approach: [
    {
      step: '01',
      title: 'The Fitting',
      detail:
        'We map how your operation really runs — how an order comes in, how a build sheet reaches the shop, how a haul gets scheduled, how RTO money moves. That becomes the blueprint.',
    },
    {
      step: '02',
      title: 'Your Records Come With You',
      detail:
        'Orders, dealer inventory, RTO contracts, customer history — professionally migrated in, not abandoned in the old system. Even the paper comes along.',
    },
    {
      step: '03',
      title: 'Proven Beside the Old System',
      detail:
        'Your current system keeps running. The new one runs beside it until the two match, day after day. Nothing switches until they do and you give the word.',
    },
    {
      step: '04',
      title: 'We Stay On',
      detail:
        'Nightly backups, support you can actually call, and new features as the operation grows.',
    },
  ],
  audienceHeading: 'Who This Is For',
  audience: [
    'Shed and portable building manufacturers tired of per-unit software fees',
    'Dealers juggling multiple lots with no single picture of inventory',
    'Shops still running builds off paper build sheets',
    'Operations carrying rent-to-own accounts in a spreadsheet',
    'Anyone whose order book lives in a binder and someone\'s head',
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
      'A Texas shed manufacturer came to us renting a ShedSuite-class system. We fitted them a full operating system of their own: orders, dealer lots, the build queue, delivery scheduling, and rent-to-own tracking on one desk — plus spoken order intake, where someone talks the order in, the AI sorts it, and a human confirms it before it touches the books. Phase 1 is built and verified end-to-end, the whole spine exercised from a sold order through to delivery. Fitted to how they run, owned by them — not a template with their logo on it.',
  },
  mistakesHeading: 'Why Shed Software Usually Goes Wrong',
  mistakes: [
    {
      title: 'The per-unit toll',
      detail:
        'The standard model in this industry charges by the building. Your best month becomes the software company\'s best month, and the bill grows with you forever. You never own a thing.',
    },
    {
      title: 'Dealer-lot chaos',
      detail:
        'When lot inventory lives in texts, phone calls, and a dealer\'s notebook, nobody knows what\'s actually on the ground. Units sit, sales stall, and the office finds out last.',
    },
    {
      title: 'Paper build sheets',
      detail:
        'A build sheet that lives on paper can be lost, misread, or built wrong. The shop deserves a queue it can trust — and the office deserves to see where every build stands.',
    },
    {
      title: 'Rip-and-replace switches',
      detail:
        'Most software changes mean a scary cutover weekend and records left behind. We never rip anything out — your records are professionally migrated in, and the new system proves itself beside the old one first.',
    },
  ],
  pricingHeading: 'What It Costs',
  pricing:
    `The whole price, printed right here: ${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. No per-unit fees, no per-lot fees, no charge that grows because you sold more buildings. Month-to-month, and the system stays yours, code and data. One job: ${OS_PRICING.promise} Compare that to renting software that takes a toll on every unit and holds your records if you try to leave.`,
  whyUsHeading: 'Why Shed Builders Choose Found It OS',
  whyUs: [
    'We have already built this for the shed industry — a full operating system fitted to a Texas shed manufacturer replacing a ShedSuite-class system, Phase 1 verified end-to-end.',
    `Real local businesses running or being fitted on their own systems right now.`,
    'You own 100% of the code and the data.',
  ],
  faqHeading: 'Shed Builder Software FAQ',
  faq: [
    {
      question: 'Is Found It OS a ShedSuite alternative?',
      answer:
        'Yes, in the most direct sense: we built a full operating system for a Texas shed manufacturer fitted to replace a ShedSuite-class system — orders, dealer lots, build queue, delivery scheduling, and rent-to-own tracking. The difference is the model. ShedSuite is established rental software for this industry; Found It OS is a custom system built around your specific operation that you own outright, with a published price and no per-unit fees.',
    },
    {
      question: 'Do you charge per building like other shed software?',
      answer:
        `No. The price is published and flat: ${OS_PRICING.monthly} a month plus a one-time ${OS_PRICING.setup} for migration and setup. Sell ten buildings or a hundred — the price does not move. There are no per-unit, per-lot, or per-user fees.`,
    },
    {
      question: 'What happens to my existing orders, dealer records, and RTO contracts?',
      answer:
        'They come with you. During the fitting, your records get professionally migrated into the new system — orders, lot inventory, rent-to-own accounts, customer history, even what lives on paper. Nothing gets abandoned in the old system, and nothing switches until the new system has run beside the old one and matched it.',
    },
    {
      question: 'Can my dealers use it on their lots?',
      answer:
        'That is the point of the dealer-lot side: every lot and every unit on one screen, so the office and the lots finally see the same inventory. The system is fitted to how your dealer network actually operates — consignment, company lots, or both — during the fitting.',
    },
    {
      question: 'What is spoken order intake?',
      answer:
        'You talk the order in — building, size, options, customer, lot — and the AI sorts what you said into a clean draft order. A human reviews and confirms it before it hits the books. It is built for how orders actually happen: standing in the yard, on the phone, not seated at a keyboard.',
    },
    {
      question: 'Who owns the system?',
      answer:
        'You do. The code, the data, the whole system — it is your asset. When you rent shed software, the company holds your order history and your RTO book and dares you to switch. Ownership ends that.',
    },
    {
      question: 'Is this in production at a shed company today?',
      answer:
        'The first shed-industry build — for a Texas manufacturer — has Phase 1 built and verified end-to-end: the full spine from a sold order through dealer lots, the build queue, delivery, and rent-to-own tracking. Nothing switches until the system has proven itself beside your old one.',
    },
  ],
  relatedReading: [
    { title: 'Found It OS — Custom Operating Systems for Local Businesses', href: '/foundit-os' },
    { title: 'Custom Software for Local Businesses', href: '/custom-software' },
    { title: 'Custom Software for Home Builders', href: '/custom-software/home-builders' },
    { title: 'Custom Software for Car Dealerships', href: '/custom-software/car-dealerships' },
  ],
  finalCtaHeadline: 'See Your Yard on Its Own OS',
  finalCtaSub:
    `Tell us how your operation runs today — the order binder, the build sheets, the lot calls, the RTO spreadsheet — and we will map what your own operating system would look like. In person if you are local.`,
};

export default function ShedBuildersPillar() {
  return <ServicePillar data={data} />;
}
