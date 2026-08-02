import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { OS_PRICING, TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Found It OS — Custom Operating Systems for Local Businesses',
  description:
    `Found It OS is a custom AI operating system fitted to your business — register, inventory, customers, website, and a built-in AI in one system you own outright. ${OS_PRICING.monthly}/mo plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}, guaranteed: ${OS_PRICING.guarantee} ${TRACK_RECORD.softwareCustomers} software customers and growing. Based in Alexandria, LA.`,
  alternates: { canonical: '/foundit-os' },
  openGraph: {
    title: 'Found It OS — Custom Operating Systems for Local Businesses | Found It Marketing',
    description:
      `One system for your whole business — fitted to how you actually run it, proven beside your old system, and yours forever. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. ${OS_PRICING.guarantee}`,
    type: 'website',
    url: 'https://founditmarketing.com/foundit-os',
    images: [{ url: '/og-image-v2.png', width: 1200, height: 630 }],
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
    `Found It OS is a custom AI-powered business operating system built one business at a time — point of sale, inventory, customer database, service tickets, website, and a built-in AI assistant in a single system the client owns outright. Fitted in weeks, migrated with zero downtime by running beside the legacy system until the books match to the penny. ${OS_PRICING.monthly} per month plus a one-time ${OS_PRICING.setup} migration and setup, backed by a love-it-or-your-money-back guarantee.`,
  eyebrow: 'Found It OS',
  headline: 'Stop Renting Your Software —',
  headlineAccent: 'Own Your Whole System.',
  intro:
    `Right now a software company controls your register, your inventory, and your customer list — and would hold all three hostage if you tried to leave. Found It OS ends that: one system fitted to how your business actually runs — the register, the inventory, the customers, the tickets, the website, and an AI that knows all of it — and you own it outright. It is fitted in weeks, not months, and nothing switches until the new system has run beside your old one and matched it to the penny. ${TRACK_RECORD.softwareCustomers} local businesses have already said yes — and counting.`,
  ctaLabel: 'Get My Free Fitting',
  formSource: 'service_foundit_os',
  formPageSlug: 'foundit-os',
  formHeading: 'Get Your Free Fitting',
  stats: [
    { value: TRACK_RECORD.softwareCustomers, label: 'Software Customers' },
    { value: 'To the ¢', label: 'Matched Every Night' },
    { value: '100%', label: 'Yours — Code & Data' },
    { value: '0 Hrs', label: 'Downtime at Switch' },
  ],
  definitionHeading: 'What Is a Business Operating System?',
  definition:
    'A business operating system is one piece of software that runs your whole operation — sales, inventory, customers, invoices, service work, and your website — instead of five subscriptions taped together. Off-the-shelf software makes you run your business its way. Found It OS is the opposite: we study how your business actually works, then build the system around it. You get one screen your team actually uses, one customer database instead of paper tickets and memory, and an AI that can answer questions about your own business in plain English — and at the end, you own it. The code, the data, everything.',
  includedHeading: 'What Every Found It OS Includes',
  included: [
    {
      title: 'Fitted, Not Templated',
      detail:
        'We sit down in your business and map how it really runs — then build the system around your process, not the other way around.',
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
        'Ask it questions in plain English — who bought what, what is running low, who has not been in lately — and it answers from your own books.',
    },
    {
      title: 'Books That Show Their Work',
      detail:
        'Every sale, refund, and edit lands in one permanent journal with automatic nightly backups. Your accountant can check every penny.',
    },
    {
      title: 'You Own It',
      detail:
        'Month-to-month, no contracts. You own the code, the data, and the system. If we ever part ways, it stays yours.',
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
        'Your old system keeps running. The new one runs quietly beside it, and every night we check the two against each other — to the penny.',
    },
    {
      step: '03',
      title: 'You Say Go',
      detail:
        'Nothing switches until the numbers have matched day after day and you give the word. The switch itself costs you zero hours of downtime.',
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
    headline: 'The Penny Test',
    stats: [
      { value: '2', label: 'Systems Running Side by Side' },
      { value: 'Nightly', label: 'Books Checked Against Books' },
      { value: '$0.00', label: 'Difference Before You Switch' },
    ],
    narrative:
      'Before any business switches to Found It OS, the new system has to earn it. It runs beside the register you already trust, and every night the two sets of books go side by side until the difference is zero. Not close. Zero. When they match day after day and you are ready, you give the word. No rip-out weekend. No leap of faith. That is the whole test, and no install skips it.',
  },
  galleryHeading: 'Not Mockups. Screenshots.',
  galleryIntro:
    'Straight off the screens of systems we have fitted — an auto shop, a shed dealer, a clothier. Every one custom-built, every one owned by the business running it.',
  gallery: [
    {
      src: '/os-screens/tonys-shop-os-v1.png',
      alt: 'Tony’s Shop OS dashboard — the parking lot of declined jobs, priced and ready for win-back texts',
      title: 'Tony’s Shop OS',
      kind: 'European Auto Repair',
      detail: 'The parking lot: every declined job on the books — named, priced, and one tap from a win-back text.',
    },
    {
      src: '/os-screens/lonestar-os-v1.png',
      alt: 'Lonestar OS desk — sales pipeline from unprocessed to delivered with dollars at every stage',
      title: 'Lonestar OS',
      kind: 'Shed Dealer & Builder',
      detail: 'One pipeline from sold to delivered — every building, every dollar, every hand-off on one desk.',
    },
    {
      src: '/os-screens/house-system-v1.png',
      alt: 'The House System register — a ticket rung with three lines and a live total',
      title: 'The House System',
      kind: 'Menswear Retail',
      detail: 'The register that remembers — tickets, clients, inventory, and the books in one place.',
    },
  ],
  mistakesHeading: 'Why Business Software Usually Goes Wrong',
  mistakes: [
    {
      title: 'Renting forever',
      detail:
        'Big-name POS and software companies charge you rent forever, raise prices when they want, and hold your data if you try to leave. You never own a thing.',
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
        'Most switches mean a scary weekend cutover and lost data. We never rip anything out — the new system proves itself beside the old one first.',
    },
  ],
  pricingHeading: 'What It Costs',
  pricing:
    `The whole price, printed right here: ${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. No per-register fees, no surprise add-ons, no contracts — month-to-month, and if we ever part ways, the system stays yours. And it is guaranteed: ${OS_PRICING.guarantee} For comparison, a traditional custom software build runs $50,000 to $150,000, takes 3 to 6 months, and bills 15 to 20% a year in maintenance. This is custom-software ownership without the custom-software invoice.`,
  whyUsHeading: 'Why Businesses Choose Found It OS',
  whyUs: [
    `${TRACK_RECORD.softwareCustomers} software customers and growing — real local businesses running or being fitted right now.`,
    `Guaranteed: ${OS_PRICING.guarantee} Month-to-month, no contracts — the system has to earn it every month.`,
    `${TRACK_RECORD.yearsInBusiness} years building digital products and marketing systems for local businesses.`,
    'You own 100% of the code and the data. If we ever part ways, the system stays yours.',
    'Proven before it ships: the new system runs beside your old one until the books match to the penny.',
    'Built-in AI that answers questions about your own business in plain English.',
    'A local Alexandria team you can actually reach — 2026 CLEDA Highest Traded Revenue Award winner.',
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
        'Nothing, until the new system has earned it. Your old system keeps running while Found It OS runs beside it, and every night the two are checked against each other to the penny. Your existing data — even handwritten invoices and paper records — gets brought in during the fitting. You switch only when the numbers have proven themselves and you say go.',
    },
    {
      question: 'Who owns the system?',
      answer:
        'You do. The code, the data, the whole system — it is your asset. There are no contracts; it is month-to-month, and if we ever part ways, the system stays yours and keeps running.',
    },
    {
      question: 'How long does a fitting take?',
      answer:
        'Weeks, not months — not the 3-to-6-month slog a traditional custom shop quotes. You get a firm timeline at your free fitting, and nothing switches until the side-by-side numbers have matched and you give the word.',
    },
    {
      question: 'What does it cost?',
      answer:
        `${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. That is the whole number — no per-register fees, no surprise add-ons, no contracts. For comparison, a traditional custom software shop quotes $50,000 to $150,000 for the same ownership.`,
    },
    {
      question: 'What does "love it or your money back" mean?',
      answer:
        'Exactly what it says. If you do not love it, you get your money back. The guarantee exists because the system has to earn its keep every month, not because we expect to write refunds.',
    },
    {
      question: 'You charge monthly too. How is that not renting?',
      answer:
        'Because you can leave. When you rent software, the company holds your data and dares you to switch. With Found It OS the system is already yours — code and data — so the monthly only covers backups, support, and new features. We have to earn it every single month, because the day we stop earning it, you cancel and keep the whole system. That is the difference ownership makes.',
    },
    {
      question: 'Do I need a technical person on staff?',
      answer:
        'No. It is built to be run by the people already behind your counter, we handle backups and support, and everything is documented. If you ever want to take it in-house, you inherit a clean, fully owned system.',
    },
  ],
  relatedReading: [
    { title: 'Custom App Development', href: '/app-development' },
    { title: 'Stop Fearing AI. Start Weaponizing It.', href: '/blog/weaponize-ai' },
  ],
  finalCtaHeadline: 'See Your Business on Its Own OS',
  finalCtaSub:
    `Tell us how your business runs today — the register, the paper, the workarounds — and we will map what your own operating system would look like. Free, in person if you are local, no obligation. And the system itself is guaranteed: ${OS_PRICING.guarantee}`,
};

export default function FoundItOSPillar() {
  return <ServicePillar data={data} />;
}
