import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { OS_PRICING, TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'The House System - Retail POS You Own',
  description:
    `The House System is a retail POS you own outright. Register, inventory, households, layaway, and AI over your own books. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. ${OS_PRICING.promise}`,
  alternates: { canonical: '/custom-software/retail-stores' },
  openGraph: {
    title: 'The House System - Retail POS You Own | Found It Software',
    description:
      `The House System. One system for your whole store. Register, inventory, customer book, layaway. Fitted to how you sell, and yours forever. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Month-to-month. Cancel anytime, the system stays yours.`,
    type: 'website',
    url: 'https://www.founditsoftware.com/custom-software/retail-stores',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

/** Parse a display sticker like '$2,200' into the numeric 2200 for JSON-LD. */
const usd = (sticker: string) => Number(sticker.replace(/[^0-9.]/g, ''));

const data: PillarData = {
  name: 'The House System',
  slug: '/custom-software/retail-stores',
  serviceType: 'Retail Point of Sale Operating System',
  offers: [
    { price: usd(OS_PRICING.monthly), priceCurrency: 'USD', unitCode: 'MON', name: OS_PRICING.monthlyLabel },
    { price: usd(OS_PRICING.setup), priceCurrency: 'USD', name: OS_PRICING.setupLabel },
  ],
  schemaDescription:
    `The House System is Found It's retail point of sale, a system independent stores own outright. Register, inventory, customer households, layaway and special orders, and a built-in AI that answers questions from the store's own sales history in plain English. Old records are migrated in, and the new system runs beside the old register until the books match to the penny. ${OS_PRICING.monthly} per month plus a one-time ${OS_PRICING.setup} migration and setup. Built to simplify the owner's life and make the business more profitable.`,
  eyebrow: 'The House System · Retail',
  headline: 'The House System.',
  headlineAccent: 'A Register That Remembers.',
  intro:
    `The House System was built for the established independent store whose operation is scattered. Inventory in the POS. Customer history in the processor's cloud. Layaway in a binder under the counter. Special orders in somebody's memory. We call it the House System because it thinks in households, not transactions. One system: the register, the inventory, the customer book, layaway, special orders, and an AI that answers from your own sales history. You own it outright. Your records get migrated in, and nothing switches until the new register runs beside your old one and matches it to the penny.`,
  ctaLabel: "Show Me What You’d Build",
  formSource: 'service_custom_software_retail_stores',
  formPageSlug: 'custom-software-retail-stores',
  formHeading: 'Start your Software Map',
  stats: [
    { value: 'Live', label: 'Real Systems Running Now' },
    { value: '1', label: 'Retail Core, Never Forked' },
    { value: 'Est. 1946', label: 'Oldest Store Fitted' },
    { value: '$0', label: 'Per-Terminal Fees' },
  ],
  definitionHeading: 'What Is the House System?',
  definition:
    "The House System is a point of sale that is your property. The code, the database, the customer history. Not a subscription you rent by the terminal. We built one retail core: register, inventory, customer households, layaway and special orders, and an ask-anything AI over the store's own history. We fit it to your store instead of making your store fit it. Every customer, ticket, and year of history gets migrated in. Ask the new register a question in plain English and it answers from your own books. No per-terminal fees. No vendor holding your customer list.",
  includedHeading: 'What Every Retail Fitting Includes',
  included: [
    {
      title: 'The Register',
      detail:
        'Rings sales, returns, and exchanges on one screen your staff learns fast. Every ticket lands in a permanent journal your accountant can check.',
    },
    {
      title: 'Inventory That Matches the Floor',
      detail:
        'What the system says you have is what is on the shelf. Receive it, count it, sell it. One number, not three.',
    },
    {
      title: 'A Customer Book With a Memory',
      detail:
        'Customers and households, with every purchase attached, back as far as your records go.',
    },
    {
      title: 'Layaway & Special Orders',
      detail:
        'Layaway, deposits, and special orders tracked in the system instead of a binder under the counter.',
    },
    {
      title: 'Ask the House',
      detail:
        'Ask in plain English. Who bought this brand last year. What is not moving. Who has not been in since spring. It answers from your own history.',
    },
    {
      title: 'You Own It',
      detail:
        'The code, the data, the customer book. Yours. If we ever part ways, the register keeps ringing and it stays yours.',
    },
  ],
  approachHeading: 'How a Retail Fitting Works',
  approach: [
    {
      step: '01',
      title: 'The Fitting',
      detail:
        'We stand at your counter and map how the store really runs. How a sale rings, how layaway works, where the customer book lives. That becomes the blueprint.',
    },
    {
      step: '02',
      title: 'Your Records Come With You',
      detail:
        'Every customer, ticket, and year of history we can pull from your current system gets migrated into the new one.',
    },
    {
      step: '03',
      title: 'Proven Beside Your Old Register',
      detail:
        'Your current POS keeps running. The new one runs beside it, and every night the two sets of books go side by side until the difference is zero.',
    },
    {
      step: '04',
      title: 'You Say Go, We Stay On',
      detail:
        'Nothing switches until the numbers match and you give the word. After that, nightly backups, support you can call, and new features as the store grows.',
    },
  ],
  audienceHeading: 'Who This Is For',
  audience: [
    'Independent retail stores paying per-terminal POS fees',
    "Stores whose customer history is trapped in a processor's cloud",
    'Multi-generation stores with decades of records worth keeping',
    'Shops running layaway and special orders out of a binder',
    'Clothing, furniture, appliance, and specialty retailers',
    'Any owner who wants to own the register instead of renting it',
  ],
  chipsHeading: 'What It Runs',
  chips: [
    'Register',
    'Inventory',
    'Customer Book',
    'Households',
    'Layaway',
    'Special Orders',
    'Nightly Books',
    'Ask the House',
  ],
  result: {
    headline: 'One House, Many Stores',
    stats: [
      { value: '1', label: 'Retail Core' },
      { value: 'Staging', label: 'Registers in Evaluation' },
      { value: '0', label: 'Forks of the Code' },
    ],
    narrative:
      'We built the House System core once. Register, inventory, households, layaway, and Ask the House. Then we fitted it store by store: a luxury menswear shop, an appliance and furniture store in business since 1946, among others. One core, many fits, zero forks of the code. Staging registers are in evaluation now. No store switches until the side-by-side numbers earn it.',
  },
  mistakesHeading: 'Where Retail POS Usually Goes Wrong',
  mistakes: [
    {
      title: 'Renting by the terminal',
      detail:
        'Cloud POS pricing grows with your counter. More terminals, more rent, forever. You never own a thing.',
    },
    {
      title: 'Your customer book, held hostage',
      detail:
        "When your history lives in the processor's cloud, leaving means starting over. Decades of who-bought-what becomes their asset instead of yours.",
    },
    {
      title: 'Generic POS, paper workarounds',
      detail:
        "Most systems were not built for layaway, households, or special orders. So those live in a binder and in someone's memory, off the books.",
    },
    {
      title: 'Rip-and-replace switches',
      detail:
        'A scary weekend cutover that drops records is the norm. We never rip anything out. Your records migrate in first, and the new register proves itself beside the old one.',
    },
  ],
  pricingHeading: 'What It Costs',
  pricing:
    `The whole price, printed right here: ${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. Migration means your records come with you. No per-terminal fees, no processor lock-in. Month-to-month, and the system stays yours. One job: ${OS_PRICING.promise} Stores renting Square- or Lightspeed-class systems pay forever and own nothing. This is the opposite trade. The register, the code, and the customer book are yours.`,
  whyUsHeading: 'Why Stores Choose the House System',
  whyUs: [
    'One House System core fitted to real stores, menswear, appliances and furniture, without forking the code.',
    `Real local businesses run their own systems right now.`,
    "You own 100% of the code and the data. Your customer history is your asset, not your processor's.",
  ],
  faqHeading: 'House System FAQ',
  faq: [
    {
      question: 'Why is it called the House System?',
      answer:
        'Because it thinks in households, not transactions. The family that has furnished three homes with you is one relationship, not four hundred receipts. The whole house lives under one roof: register, inventory, households, layaway, and Ask the House, the AI that answers questions about your own store in plain English.',
    },
    {
      question: 'Is the House System an alternative to Square, Clover, or Lightspeed?',
      answer:
        'Yes, for stores that want to own their system instead of renting it. Square, Clover, and Lightspeed are capable products, but you pay every month and your customer history lives in their cloud. The House System is fitted to your store, loaded with your records, and owned by you outright.',
    },
    {
      question: 'What happens to my customer history?',
      answer:
        'It comes with you. Migration is part of the setup. Every customer, household, and ticket we can pull gets brought into the new system. One Louisiana store, in business since 1946, can pull up who bought a washer in 2018 on its staging register.',
    },
    {
      question: 'Do you charge per terminal or per register?',
      answer:
        'No. The published price covers the store. Add a terminal and the price does not move. No per-terminal or per-register fees, ever.',
    },
    {
      question: 'Has this actually run in a real store?',
      answer:
        'The retail core has been fitted to real stores, a luxury menswear shop and an appliance and furniture store among them. Staging registers are in evaluation now. No store converts until the new register matches the old books to the penny.',
    },
    {
      question: 'What does it cost?',
      answer:
        `${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. That is the whole number. No per-terminal fees, no surprise add-ons.`,
    },
    {
      question: 'If I stop paying, do I lose my register and my data?',
      answer:
        'No. You own the system, code and data. The monthly covers backups, support, and new features. Cancel, and the register keeps ringing and everything stays yours.',
    },
    {
      question: 'How does the switch work? Can the store stay open?',
      answer:
        'The store never closes for it. Your current POS keeps running while the new one runs beside it. Every night the two sets of books go side by side until the difference is zero. When they match day after day, and you give the word, the store switches.',
    },
  ],
  relatedReading: [
    { title: 'Found It OS - The Whole System', href: '/foundit-os' },
    { title: 'Custom Software for Local Businesses', href: '/custom-software' },
    { title: 'Custom Software for Auto Repair Shops', href: '/custom-software/auto-repair-shops' },
    { title: 'Custom Software for Car Dealerships', href: '/custom-software/car-dealerships' },
  ],
  finalCtaHeadline: 'See Your Store in Its Own House',
  finalCtaSub:
    `Tell us how your store runs today. The POS, the binder, the workarounds. We will show you what your own system would look like, with your history in it. In person if you are local.`,
};

export default function RetailStoresPillar() {
  return <ServicePillar data={data} />;
}
