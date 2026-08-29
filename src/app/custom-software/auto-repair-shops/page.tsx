import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { OS_PRICING } from '@/lib/site';

export const metadata: Metadata = {
  title: 'The AI-Powered Tekmetric Alternative You Own',
  description:
    `The Tekmetric alternative you own. Work orders, parts board, and AI that answers from your records. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. ${OS_PRICING.promise}`,
  alternates: { canonical: '/custom-software/auto-repair-shops' },
  openGraph: {
    title: 'The AI-Powered Tekmetric Alternative You Own | Found It Software',
    description:
      `One system for your whole shop. Work orders, parts board, customer book, invoicing, and an AI service desk. Fitted to your shop, owned by you. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Month-to-month. Cancel anytime, the system stays yours.`,
    type: 'website',
    url: 'https://www.founditsoftware.com/custom-software/auto-repair-shops',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

/** Parse a display sticker like '$2,200' into the numeric 2200 for JSON-LD. */
const usd = (sticker: string) => Number(sticker.replace(/[^0-9.]/g, ''));

const data: PillarData = {
  name: 'Auto Repair Shop Software',
  slug: '/custom-software/auto-repair-shops',
  serviceType: 'Custom Auto Repair Shop Management Software',
  offers: [
    { price: usd(OS_PRICING.monthly), priceCurrency: 'USD', unitCode: 'MON', name: OS_PRICING.monthlyLabel },
    { price: usd(OS_PRICING.setup), priceCurrency: 'USD', name: OS_PRICING.setupLabel },
  ],
  schemaDescription:
    `Custom shop management software for independent auto repair shops. Work orders, parts and waiting board, customer book, invoicing, and an AI service desk in one system the shop owns outright. Old records are migrated in. Nothing switches until the new system runs beside the old one and matches it. ${OS_PRICING.monthly} per month plus a one-time ${OS_PRICING.setup} migration and setup. Built to simplify the owner's life and make the business more profitable.`,
  eyebrow: 'Found It OS · The Tekmetric Alternative',
  headline: 'The AI-Powered',
  headlineAccent: 'Tekmetric Alternative You Own.',
  intro:
    `Tekmetric is a good system. But you rent it forever, and your shop's history lives in their cloud. We build the AI-powered shop system you own. We already moved a real shop off a Tekmetric-class system, about ten years of records. On the way in, the AI found about $270K in forgotten, unbilled work. One system for your whole shop. Work orders, parts board, customer book, invoicing, and an AI service desk. You own it, code and data. Nothing switches until the new system runs beside your old one and matches it. The price is on this page.`,
  ctaLabel: "Show Me What You’d Build",
  formSource: 'service_custom_software_auto_repair_shops',
  formPageSlug: 'custom-software-auto-repair-shops',
  formHeading: 'Start your Software Map',
  stats: [
    { value: '~$270K', label: 'Unbilled Work Found in One Migration' },
    { value: '~10 Yrs', label: 'of Records Migrated In' },
    { value: 'Live', label: 'Real Systems Running Now' },
    { value: '100%', label: 'Yours, Code & Data' },
  ],
  demoVideo: {
    src: '/tonys-os-demo-v2.mp4',
    poster: '/tonys-os-demo-poster.jpg',
    heading: 'Look Inside a Real Shop’s System',
    sub: "A 35-second tour of Found It OS running a live European auto shop. The money on the board, an AI that answers from the shop's records, and the secretary that texts back after hours. Customer names are placeholders.",
  },
  definitionHeading: 'What Makes It the AI-Powered Alternative?',
  definition:
    "It does every job a Tekmetric-class system does. Write the work order, track the parts, ring the invoice, keep the customer book. Then it adds two things a rented system cannot. First, the AI reads YOUR data, so you can ask about any record in plain English. Second, you own the software and the data. We map how your shop runs, build around your process, and migrate your old records in. Day one starts with your real history, not an empty screen. No per-seat rent. If you ever leave, every record leaves with you.",
  includedHeading: 'What a Shop OS Includes',
  included: [
    {
      title: 'Work Orders',
      detail:
        'Every job on one screen, from write-up to paid. Who brought the car in, what was found, what was approved, what was declined.',
    },
    {
      title: 'The Parts & Waiting Board',
      detail:
        'One board shows what every car in the lot is waiting on. Nothing sits forgotten. Nobody has to ask around the shop.',
    },
    {
      title: 'Your Customer Book',
      detail:
        'Every customer, every vehicle, every visit. One database you own, instead of an old system and memory.',
    },
    {
      title: 'Invoicing That Matches the Work',
      detail:
        'Invoices come straight off the work order. What got done is what gets billed. Nothing finished leaves unbilled.',
    },
    {
      title: 'An AI Service Desk',
      detail:
        'Ask your shop questions in plain English. Who declined brakes last quarter. Which regulars went quiet. What is sitting unbilled. It answers from your own records, because it read every one during migration.',
    },
    {
      title: 'You Own It',
      detail:
        'The code, the data, the whole system is yours. If we ever part ways, it stays in your shop and keeps running.',
    },
  ],
  approachHeading: 'How a Fitting Works',
  approach: [
    {
      step: '01',
      title: 'The Fitting',
      detail:
        'We come to your shop and map how it really runs. How a car gets written up, how parts get chased, what lives on paper. That becomes the blueprint.',
    },
    {
      step: '02',
      title: 'The Migration',
      detail:
        'Your old records come in. Customers, vehicles, history. This is where the surprises surface, like the work your old system quietly lost track of.',
    },
    {
      step: '03',
      title: 'Built Beside Your Old System',
      detail:
        'Your current system keeps running. The new one runs beside it on your real data until the two match. No leap of faith.',
    },
    {
      step: '04',
      title: 'You Say Go, We Stay On',
      detail:
        'Nothing switches until the numbers prove out and you give the word. After that, backups, support you can call, and new features as the shop grows.',
    },
  ],
  audienceHeading: 'Who This Is For',
  audience: [
    'Independent shops renting a monthly management system',
    'Shops still writing up jobs on paper tickets',
    'European and specialty shops generic software never fits',
    'Owners whose history sits in an old system they distrust',
    'Shops burned by a data-hostage switch before',
    'Anyone who wants to ask their records a question and get an answer',
  ],
  chipsHeading: 'What It Runs',
  chips: [
    'Work Orders',
    'Parts & Waiting Board',
    'Customer Book',
    'Invoicing',
    'AI Service Desk',
    'Your Website',
    'AI-First Core',
  ],
  result: {
    headline: 'The $270K Parking Lot',
    stats: [
      { value: '1', label: 'Louisiana Auto Shop' },
      { value: '~10 Yrs', label: 'of Records Migrated' },
      { value: '~$270K', label: 'Unbilled Work Surfaced' },
    ],
    narrative:
      'We fitted a full shop system for one Louisiana auto shop, running on about ten years of migrated records. During that migration, the system found about $270,000 in forgotten, unbilled work. The shop called it the parking lot. It was there the whole time. The old software just never showed it. A good migration can pay for itself before the new system goes live. What is sleeping in your old system?',
  },
  mistakesHeading: 'Why Shop Software Usually Goes Wrong',
  mistakes: [
    {
      title: 'Renting forever, leaving with nothing',
      detail:
        'Shops renting Tekmetric-class systems pay every month and never own a thing. Leave, and you might get an export of your records — the working system that runs the shop stays theirs.',
    },
    {
      title: 'Generic software, forced workarounds',
      detail:
        "Off-the-shelf software is built for every shop, so it fits no shop. The parts chase ends up on a whiteboard and half the history stays in someone's head.",
    },
    {
      title: 'The abandoned back catalog',
      detail:
        'When shops switch systems, the old records usually get left behind. Whatever was unbilled or forgotten in there is gone for good.',
    },
    {
      title: 'Rip-and-replace weekends',
      detail:
        'Most switches mean a scary cutover and crossed fingers. We never rip anything out. The new system proves itself beside the old one first.',
    },
  ],
  pricingHeading: 'What It Costs',
  pricing:
    `The whole price, printed right here: ${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. The migration brings your old records in. No per-writer fees, no add-ons. Month-to-month, and the system stays yours. One job: ${OS_PRICING.promise} The monthly covers backups, support, and new features. The system itself is already your asset.`,
  whyUsHeading: 'Why Shops Choose Found It OS',
  whyUs: [
    'A shop system we built runs a real independent auto shop today, on about ten years of migrated records.',
    `Real local businesses run their own systems right now, or are getting fitted.`,
    'You own 100% of the code and the data.',
  ],
  faqHeading: 'Auto Repair Shop Software FAQ',
  faq: [
    {
      question: 'Can you migrate my shop off Tekmetric?',
      answer:
        'Yes. That is the core of what we do. We already moved a real shop off a Tekmetric-class system, about ten years of customers, vehicles, and work orders. The new system runs beside the old one until the two match. Nothing switches until you give the word.',
    },
    {
      question: 'Is Found It OS a Tekmetric alternative?',
      answer:
        'Yes. It covers the same jobs. Work orders, parts tracking, customer history, invoicing. Two differences: it is fitted to how your shop runs, and you own it. The code and the data are yours, not rented.',
    },
    {
      question: 'What happens to the years of records in my current system?',
      answer:
        'They get migrated in, so day one starts with your real history, not an empty screen. One Louisiana shop brought about ten years of records over. Everything worth keeping comes with you.',
    },
    {
      question: 'What does auto repair shop software cost?',
      answer:
        `${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. That is the whole number. No per-writer fees, no surprise add-ons.`,
    },
    {
      question: 'Will my shop go down during the switch?',
      answer:
        'No. Your current system keeps running while the new one runs beside it. Nothing switches until the numbers match and you give the word.',
    },
    {
      question: 'Who owns the system and the data?',
      answer:
        'You do. The code, the customer book, every work order. If we ever part ways, it stays in your shop and keeps running.',
    },
    {
      question: 'Do I need a computer person on staff?',
      answer:
        'No. The people already behind your counter can run it. We handle backups and support. The fastest way to find anything is to ask the AI in plain English.',
    },
  ],
  relatedReading: [
    { title: 'Found It OS - Custom Operating Systems for Local Businesses', href: '/foundit-os' },
    { title: 'Custom Software for Local Businesses', href: '/custom-software' },
    { title: 'Custom Software for Car Dealerships', href: '/custom-software/car-dealerships' },
    { title: 'Custom Software for Retail Stores', href: '/custom-software/retail-stores' },
  ],
  finalCtaHeadline: 'Put the AI-Powered Alternative in Your Shop',
  finalCtaSub:
    `Tell us how your shop runs today. The system you rent, the whiteboard, the paper. We will show you what your own shop OS would look like, records and all. In person if you are local.`,
};

export default function AutoRepairShopSoftwarePillar() {
  return <ServicePillar data={data} />;
}
