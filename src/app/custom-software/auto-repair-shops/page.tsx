import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { OS_PRICING, TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'The AI-Powered Tekmetric Alternative You Own',
  description:
    `The AI-powered Tekmetric alternative shops own outright — work orders, parts board, and an AI that answers from your own records. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. ${OS_PRICING.promise}`,
  alternates: { canonical: '/custom-software/auto-repair-shops' },
  openGraph: {
    title: 'The AI-Powered Tekmetric Alternative You Own | Found It Marketing',
    description:
      `One system for your whole shop — work orders, the parts board, your customer book, invoicing, and an AI service desk — fitted to how you run and owned by you. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Month-to-month — cancel anytime, and the system stays yours.`,
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
    `Custom shop management software for independent auto repair shops — work orders, the parts and waiting board, customer book, invoicing, and an AI service desk in one system the shop owns outright. Existing records are professionally migrated in, and nothing switches until the new system has run beside the old one and matched it. ${OS_PRICING.monthly} per month plus a one-time ${OS_PRICING.setup} migration and setup, built to simplify the owner’s life and make the business more profitable.`,
  eyebrow: 'Found It OS · The Tekmetric Alternative',
  headline: 'The AI-Powered',
  headlineAccent: 'Tekmetric Alternative You Own.',
  intro:
    `Tekmetric is a capable system — and you will rent it forever, by the month, with your shop's history living in their cloud. We build the other kind: the AI-powered shop system you own. We have already moved a real shop off a Tekmetric-class system — roughly ten years of records professionally migrated — and the AI read every line on the way in, surfacing about $270K in forgotten, unbilled work their old software never showed them. One system fitted to how your shop actually runs — work orders, the parts and waiting board, your customer book, invoicing, and an AI service desk — and you own it, code and data. Nothing switches until the new system has run beside your old one and matched it. The price is published right on this page. You'll never rent software that almost fits again.`,
  ctaLabel: 'Get My Free Fitting',
  formSource: 'service_custom_software_auto_repair_shops',
  formPageSlug: 'custom-software-auto-repair-shops',
  formHeading: 'Get Your Free Fitting',
  stats: [
    { value: '~$270K', label: 'Unbilled Work Found in One Migration' },
    { value: '~10 Yrs', label: 'of Records Migrated In' },
    { value: TRACK_RECORD.softwareCustomers, label: 'Software Customers' },
    { value: '100%', label: 'Yours — Code & Data' },
  ],
  demoVideo: {
    src: '/tonys-os-demo-v2.mp4',
    poster: '/tonys-os-demo-poster.jpg',
    heading: 'Look Inside a Real Shop’s System',
    sub: 'A 35-second tour of Found It OS running a live European auto shop — the money on the board, an AI that answers from the shop’s own records, digital inspections, and the secretary that texts back after hours. Customer names shown are placeholders.',
  },
  definitionHeading: 'What Makes It the AI-Powered Alternative?',
  definition:
    "It covers every job a Tekmetric-class system does — write the work order, track the parts, ring the invoice, keep the customer book — then adds the two things a rented platform cannot give you. First, it is AI-first: every record in your shop’s history is something you can ask about in plain English, because the AI reads YOUR data, not a template’s. Second, at the end, the software and the data belong to you. We study how your shop actually runs, build the system around your process, and migrate your existing records in so day one starts with your real history, not an empty screen. No per-seat rent forever. No data held hostage if you ever leave.",
  includedHeading: 'What a Shop OS Includes',
  included: [
    {
      title: 'Work Orders',
      detail:
        'Every job on one screen, from write-up to paid — who brought the car in, what was found, what was approved, what got declined.',
    },
    {
      title: 'The Parts & Waiting Board',
      detail:
        'One board that shows what every car in the lot is waiting on, so nothing sits forgotten and nobody has to ask around the shop.',
    },
    {
      title: 'Your Customer Book',
      detail:
        'Every customer, every vehicle, every visit — in one database you own, instead of scattered across an old system and memory.',
    },
    {
      title: 'Invoicing That Matches the Work',
      detail:
        'Invoices come straight off the work order, so what got done is what gets billed — and nothing finished goes out the door unbilled.',
    },
    {
      title: 'An AI Service Desk',
      detail:
        'The part no rented system matches: ask your shop questions in plain English — who declined brakes last quarter, which regulars have gone quiet, what is sitting unbilled — and it answers from your own records, because it read every one of them during migration.',
    },
    {
      title: 'You Own It',
      detail:
        'Month-to-month, no contracts. The code, the data, the whole system is yours. If we ever part ways, it stays in your shop and keeps running.',
    },
  ],
  approachHeading: 'How a Fitting Works',
  approach: [
    {
      step: '01',
      title: 'The Fitting',
      detail:
        'We come to your shop and map how it really runs — how a car gets written up, how parts get chased, what lives on paper and in heads. That becomes the blueprint.',
    },
    {
      step: '02',
      title: 'The Migration',
      detail:
        'Your existing records get professionally brought in — customers, vehicles, history. This is where the surprises surface: the migration reads everything sitting in your old system, including the work it was quietly losing track of.',
    },
    {
      step: '03',
      title: 'Built Beside Your Old System',
      detail:
        'Your current system keeps running. The new one runs beside it on your real data, and the two get checked against each other until they match. No leap of faith.',
    },
    {
      step: '04',
      title: 'You Say Go — and We Stay On',
      detail:
        'Nothing switches until the numbers have proven themselves and you give the word. After that: backups, support you can actually call, and new features as the shop grows.',
    },
  ],
  audienceHeading: 'Who This Is For',
  audience: [
    'Independent shops renting a monthly management system',
    'Shops still running write-ups on paper tickets',
    'European and specialty shops generic software never quite fits',
    'Owners whose customer history lives in an old system they distrust',
    'Shops that have been burned by a data-hostage switch before',
    'Anyone who wants to ask their own records a question and get an answer',
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
      'We fitted a complete shop operating system for one Louisiana auto shop — work orders, the parts and waiting board, customer book, invoicing, an AI service desk — running on their real migrated data, roughly ten years of records. During that migration, the system surfaced about $270,000 in forgotten and unbilled work sitting in their old system. The shop called it the parking lot. It had been there the whole time; the old software just never showed it. That is the honest case for a professional migration: it can pay for itself before the new system even goes live. What is sleeping in your old system?',
  },
  galleryHeading: 'Not Mockups. Screenshots.',
  galleryIntro:
    'Straight off the screens of shop systems we have fitted — the day on one board, a tire quote priced out the door in seconds, and the parking lot that surfaced $270K. Desktop and phone. Fitted, not templated.',
  showcase: [
    {
      img: '/os-screens/flywheel-os-today-v1.png',
      imgAlt: "Flywheel OS dashboard — the day's quotes, invoices, and profit tiles with aging and open-quote widgets",
      phone: '/os-screens/flywheel-os-mobile-quick-v2.png',
      phoneAlt: 'Flywheel OS quick quote on a phone — a tire size field with a snap-the-sidewall camera option',
      title: 'Flywheel OS',
      kind: 'Tire & Auto Shop',
      detail:
        'The whole day on one screen — quotes, invoices, and profit counted live. And in the pocket: type the size or snap the sidewall, the 30-second answer from the parking lot.',
    },
    {
      img: '/os-screens/flywheel-os-quote-v1.png',
      imgAlt: 'Flywheel OS quote screen — a tire size typed in and every supplier priced out the door in seconds',
      phone: '/os-screens/flywheel-os-mobile-board-v2.png',
      phoneAlt: 'Flywheel OS estimate board on a phone — open orders with dollars on the board and win-back cards',
      title: 'The Quote Screen',
      kind: 'Flywheel OS · Tire & Auto Shop',
      detail:
        'Type a tire size — every supplier, every price, out the door in seconds. No customer form first. The board rides along: every open order and every dollar, from anywhere in the shop.',
    },
    {
      img: '/os-screens/tonys-shop-os-v1.png',
      imgAlt: 'Tony’s Shop OS dashboard — the parking lot of declined jobs, priced and ready for win-back texts',
      title: 'Tony’s Shop OS',
      kind: 'European Auto Repair',
      detail: 'The parking lot: every declined job on the books — named, priced, and one tap from a win-back text. This is the system that surfaced ~$270K in forgotten work.',
    },
  ],
  mistakesHeading: 'Why Shop Software Usually Goes Wrong',
  mistakes: [
    {
      title: 'Renting forever, leaving with nothing',
      detail:
        'Shops renting Tekmetric-class management systems pay month after month and never own a thing — and if they ever leave, years of work orders and customer history typically stay behind in the old vendor\'s system.',
    },
    {
      title: 'Generic software, forced workarounds',
      detail:
        'Off-the-shelf shop systems are built for every shop, which means they fit no shop. The parts chase ends up on a whiteboard and half the history stays in someone\'s head.',
    },
    {
      title: 'The abandoned back catalog',
      detail:
        'When shops do switch systems, the old records usually get left behind — and whatever was unbilled, declined, or forgotten in there is gone for good. One Louisiana shop had about $270K sleeping in theirs.',
    },
    {
      title: 'Rip-and-replace weekends',
      detail:
        'Most switches mean a scary cutover and crossed fingers. We never rip anything out — the new system proves itself beside the old one on your real data first.',
    },
  ],
  pricingHeading: 'What It Costs',
  pricing:
    `The whole price, printed right here: ${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup — and the migration is where your old records get professionally brought in, not abandoned. No per-writer fees, no surprise add-ons, no contracts. Month-to-month, and if we ever part ways, the system stays yours. One job: ${OS_PRICING.promise} Shops renting a monthly management system pay rent forever and own nothing at the end. Here, the monthly covers backups, support, and new features — the system itself is already your asset.`,
  whyUsHeading: 'Why Shops Choose Found It OS',
  whyUs: [
    'We have already built a complete shop operating system for a real independent auto shop — work orders, parts board, customer book, invoicing, AI service desk — running on roughly ten years of its real migrated records.',
    'That migration surfaced about $270K in forgotten and unbilled work sitting in the shop\'s old system. Migration is not a chore here; it is where the money hides.',
    `${TRACK_RECORD.softwareCustomers} software customers and growing — real local businesses running or being fitted right now.`,
    `Month-to-month, no contracts — the system has to earn it every month. Our customers stay because they love it, not because they’re locked in.`,
    'You own 100% of the code and the data. If we ever part ways, the system stays in your shop.',
    'Proven before it ships: the new system runs beside your old one on your real data until the two match.',
    'AI-first, not AI-added: the system reads your entire migrated history, so the AI answers about YOUR shop — declined jobs, quiet regulars, what is waiting on parts, what is sleeping unbilled.',
  ],
  faqHeading: 'Auto Repair Shop Software FAQ',
  faq: [
    {
      question: 'Can you migrate my shop off Tekmetric?',
      answer:
        'That is the core of what we do. We have already moved a real shop off a Tekmetric-class system — roughly ten years of customers, vehicles, and work orders professionally migrated in. The old system gets read completely (that full read is how one shop surfaced about $270K in unbilled work), the new system runs beside it on your real data until the two match, and nothing switches until you give the word.',
    },
    {
      question: 'Is Found It OS a Tekmetric alternative?',
      answer:
        'In function, yes. Tekmetric-class systems are capable shop management platforms you rent by the month. Found It OS covers the same jobs — work orders, parts tracking, customer history, invoicing — with two differences: it is fitted to how your specific shop runs instead of templated, and at the end you own it. The code, the data, the system — yours, not rented.',
    },
    {
      question: 'What happens to the years of records in my current system?',
      answer:
        'They get professionally migrated in — customers, vehicles, and history — so day one starts with your shop\'s real past, not an empty screen. In one Louisiana shop\'s migration, that meant roughly ten years of records. Your old system is not abandoned; it is read completely, and everything worth keeping comes with you.',
    },
    {
      question: 'Is the $270K story real?',
      answer:
        'Yes. During one Louisiana shop\'s migration, the system surfaced about $270,000 in forgotten and unbilled work that had been sitting in their old system for years. We are not promising your shop has the same money sleeping in it — but we have seen what a full read of an old system can turn up, and you will know what is in yours before you switch.',
    },
    {
      question: 'What does auto repair shop software cost?',
      answer:
        `${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. That is the whole number — no per-writer fees, no surprise add-ons, no contracts. Month-to-month — cancel anytime, and the system stays yours.`,
    },
    {
      question: 'Will my shop go down during the switch?',
      answer:
        'No. Your current system keeps running while the new one runs beside it on your real migrated data, and the two get checked against each other until they match. Nothing switches until the numbers have proven themselves and you give the word.',
    },
    {
      question: 'Who owns the system and the data?',
      answer:
        'You do. The code, the customer book, every work order — it is your asset. It is month-to-month with no contracts, and if we ever part ways, the system stays in your shop and keeps running. That is the opposite of the usual arrangement, where leaving means losing your history.',
    },
    {
      question: 'Do I need a computer person on staff?',
      answer:
        'No. It is built to be run by the people already behind your counter — writers, techs, the front desk. We handle backups and support, and the AI service desk means the fastest way to find anything is to ask in plain English.',
    },
  ],
  relatedReading: [
    { title: 'Found It OS — Custom Operating Systems for Local Businesses', href: '/foundit-os' },
    { title: 'Custom Software for Local Businesses', href: '/custom-software' },
    { title: 'Custom Software for Car Dealerships', href: '/custom-software/car-dealerships' },
    { title: 'Custom Software for Retail Stores', href: '/custom-software/retail-stores' },
  ],
  finalCtaHeadline: 'Put the AI-Powered Alternative in Your Shop',
  finalCtaSub:
    `Tell us how your shop runs today — the system you rent, the whiteboard, the paper — and we will map what your own shop OS would look like, records migrated in and all. Free, in person if you are local, no obligation. And the deal stays simple: month-to-month, cancel anytime, and the system stays yours.`,
};

export default function AutoRepairShopSoftwarePillar() {
  return <ServicePillar data={data} />;
}
