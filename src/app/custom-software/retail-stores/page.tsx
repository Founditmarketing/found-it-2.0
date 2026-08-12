import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { OS_PRICING, TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'The House System — Retail POS You Own',
  description:
    `The House System is a retail POS you own outright — register, inventory, customer households, layaway, and Ask the House: AI over your own books. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. ${OS_PRICING.guarantee}`,
  alternates: { canonical: '/custom-software/retail-stores' },
  openGraph: {
    title: 'The House System — Retail POS You Own | Found It Marketing',
    description:
      `The House System: one system for your whole store — register, inventory, customer book, layaway — fitted to how you actually sell, and yours forever. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. ${OS_PRICING.guarantee}`,
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
    `The House System is Found It's retail point of sale — a system independent stores own outright: register, inventory, customer households, layaway and special orders, and a built-in AI that answers questions from the store's own sales history in plain English. Existing records are professionally migrated in, and the new system runs beside the old register until the books match to the penny before anything switches. ${OS_PRICING.monthly} per month plus a one-time ${OS_PRICING.setup} migration and setup, backed by a love-it-or-your-money-back guarantee.`,
  eyebrow: 'The House System · Retail',
  headline: 'The House System —',
  headlineAccent: 'A Register That Remembers.',
  intro:
    `We call it the House System because it thinks the way a real store does — in households, not transactions: the family that has bought from you for three generations is one story, not four hundred scattered receipts. Your current point of sale charges you for every terminal and keeps your customer history in the processor's cloud — theirs to hold, yours to look at. The House System ends that. One system fitted to your store — the register, the inventory, the customer book, layaway, special orders, and an AI that answers questions from your own sales history — and you own it outright. Your records get professionally migrated in, not abandoned, and nothing switches until the new register has run beside your old one and matched it to the penny. ${TRACK_RECORD.softwareCustomers} local businesses have already said yes. You'll never rent software that almost fits again.`,
  ctaLabel: 'Get My Free Fitting',
  formSource: 'service_custom_software_retail_stores',
  formPageSlug: 'custom-software-retail-stores',
  formHeading: 'Get Your Free Fitting',
  stats: [
    { value: TRACK_RECORD.softwareCustomers, label: 'Software Customers' },
    { value: '1', label: 'Retail Core — Fitted, Never Forked' },
    { value: 'Est. 1946', label: 'Oldest Store Fitted' },
    { value: '$0', label: 'Per-Terminal Fees' },
  ],
  definitionHeading: 'What Is the House System?',
  definition:
    'The House System is a point of sale that is your property — the code, the database, the customer history — instead of a subscription you rent by the terminal. We built one retail core — register, inventory, customer households, layaway and special orders, and an ask-anything AI over the store\'s own history — and we fit it to your store instead of making your store fit it. Your old records come with you: every customer, every ticket, every year of history gets professionally migrated in. Ask the new register a question in plain English and it answers from your own books. And because it is yours, there are no per-terminal fees and no vendor holding your customer list.',
  includedHeading: 'What Every Retail Fitting Includes',
  included: [
    {
      title: 'The Register',
      detail:
        'Rings sales, returns, and exchanges on one screen your staff learns fast — and every ticket lands in a permanent journal your accountant can check.',
    },
    {
      title: 'Inventory That Matches the Floor',
      detail:
        'What the system says you have is what is on the shelf. Receive it, count it, sell it — one number, not three.',
    },
    {
      title: 'A Customer Book With a Memory',
      detail:
        'Customers and households, with every purchase attached. We fitted this core to a Louisiana store open since 1946 — its staging register remembers who bought a washer in 2018.',
    },
    {
      title: 'Layaway & Special Orders',
      detail:
        'Layaway, deposits, and special orders tracked in the system instead of a binder under the counter.',
    },
    {
      title: 'Ask the House',
      detail:
        'Ask in plain English — who bought this brand last year, what is not moving, who has not been in since spring — and it answers from your own history.',
    },
    {
      title: 'You Own It',
      detail:
        'The code, the data, the customer book — yours. Month-to-month, no contracts. If we ever part ways, the register keeps ringing and it stays yours.',
    },
  ],
  approachHeading: 'How a Retail Fitting Works',
  approach: [
    {
      step: '01',
      title: 'The Fitting',
      detail:
        'We stand at your counter and map how the store really runs — how a sale rings, how layaway works, where the customer book lives. That becomes the blueprint.',
    },
    {
      step: '02',
      title: 'Your Records Come With You',
      detail:
        'Every customer, ticket, and year of history we can pull from your current system gets professionally migrated into the new one — not abandoned in the old one.',
    },
    {
      step: '03',
      title: 'Proven Beside Your Old Register',
      detail:
        'Your current POS keeps running. The new one runs quietly beside it, and every night the two sets of books go side by side until the difference is zero.',
    },
    {
      step: '04',
      title: 'You Say Go — We Stay On',
      detail:
        'Nothing switches until the numbers match and you give the word. After that: nightly backups, support you can actually call, and new features as the store grows.',
    },
  ],
  audienceHeading: 'Who This Is For',
  audience: [
    'Independent retail stores paying per-terminal POS fees',
    'Stores whose customer history is trapped in a processor\'s cloud',
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
      'We built the House System core once — register, inventory, customer households, layaway, and Ask the House — then fitted it store by store to real stores: a luxury menswear shop, an appliance and furniture store that has been in business since 1946, among others. One core, multiple fits, zero forks of the codebase. Staging registers are in evaluation right now. And none of those stores switches until the side-by-side numbers earn it — that is the rule, and no install skips it.',
  },
  galleryHeading: 'Not Mockups. Screenshots.',
  galleryIntro:
    'Two registers, straight off the screens of the House System itself — on the counter and in the pocket. Same core, two completely different stores — that is what fitted, not templated, actually looks like.',
  showcase: [
    {
      img: '/os-screens/house-system-v1.png',
      imgAlt: 'The House System register — a menswear ticket rung with three lines and a live total of $5,041.21',
      phone: '/os-screens/house-system-mobile-register-v1.png',
      phoneAlt: 'The House System register on a phone — the product rail and an empty ticket ready to ring',
      title: 'The Register',
      kind: 'The House System · Menswear',
      detail:
        'A ticket rung: three lines, sizes attached, tax figured, tender ready. The register that remembers — clients, inventory, and the books in one place. And it rings from a phone at the counter.',
    },
    {
      img: '/os-screens/matteo-register-v1.png',
      imgAlt: 'The House System register fitted to a luxury atelier — terracotta styling, a three-line ticket totaling $11,130',
      phone: '/os-screens/matteo-register-mobile-v1.png',
      phoneAlt: 'The House System register on a phone, fitted to a luxury atelier — terracotta styling',
      title: 'The Same House, a Different Store',
      kind: 'Atelier Edition',
      detail:
        'The same core, fitted to a luxury atelier — its own categories, its own tax, its own look, down to the phone in the fitter’s hand. Every install gets its own cut. Fitted, not templated.',
    },
  ],
  mistakesHeading: 'Where Retail POS Usually Goes Wrong',
  mistakes: [
    {
      title: 'Renting by the terminal',
      detail:
        'Cloud POS pricing grows with your counter: more terminals, more monthly rent, forever. You never own a thing at the end of it.',
    },
    {
      title: 'Your customer book, held hostage',
      detail:
        'When your history lives in the processor\'s cloud, leaving means starting over. Decades of who-bought-what becomes their asset instead of yours.',
    },
    {
      title: 'Generic POS, paper workarounds',
      detail:
        'Most systems were not built for layaway, households, or special orders — so those live in a binder and in someone\'s memory, off the books.',
    },
    {
      title: 'Rip-and-replace switches',
      detail:
        'A scary weekend cutover that drops records is the norm. We never rip anything out — your records migrate in first, and the new register proves itself beside the old one.',
    },
  ],
  pricingHeading: 'What It Costs',
  pricing:
    `The whole price, printed right here: ${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup — and migration means your records come with you, professionally brought in. No per-terminal fees, no processor lock-in, no contracts — month-to-month, and if we ever part ways the system stays yours. Guaranteed: ${OS_PRICING.guarantee} Stores renting Square- or Lightspeed-class systems pay every month forever and own nothing at the end. This is the opposite trade: the same monthly discipline, but the register, the code, and the customer book are yours.`,
  whyUsHeading: 'Why Stores Choose the House System',
  whyUs: [
    `${TRACK_RECORD.softwareCustomers} software customers and growing — real local businesses running or being fitted right now.`,
    `Guaranteed: ${OS_PRICING.guarantee} Month-to-month, no contracts — the system has to earn it every month.`,
    'One House System core fitted to real stores — menswear, appliances and furniture — without forking the code.',
    'You own 100% of the code and the data. Your customer history is your asset, not your processor\'s.',
    'Records professionally migrated in — decades of customers and tickets survive the move.',
    'Proven before it ships: the new register runs beside your old one until the books match to the penny.',
    `${TRACK_RECORD.yearsInBusiness} years building digital products for local businesses — a local Alexandria, LA team you can actually reach.`,
  ],
  faqHeading: 'House System FAQ',
  faq: [
    {
      question: 'Why is it called the House System?',
      answer:
        'Because it thinks in households, not transactions. A real store knows its people — the family that has furnished three homes with you is one relationship, not four hundred anonymous receipts. The House System keeps the whole house under one roof: the register, the inventory, the customer households, the layaway book — and Ask the House, the AI that answers questions about your own store in plain English.',
    },
    {
      question: 'Is the House System an alternative to Square, Clover, or Lightspeed?',
      answer:
        'Yes — for independent stores that want to own their system instead of renting it. Square, Clover, and Lightspeed are capable products, but the deal across that category is the same: you pay every month, and your customer history lives in their cloud. The House System is fitted to your store, loaded with your existing records, and owned by you outright — code and data.',
    },
    {
      question: 'What happens to my customer history?',
      answer:
        'It comes with you. Migration is part of the setup — every customer, household, and ticket we can pull from your current system gets professionally brought into the new one. We fitted this core to a Louisiana store that has been in business since 1946; on its staging register, you can pull up who bought a washer in 2018. That is what your history is worth when it is actually yours.',
    },
    {
      question: 'Do you charge per terminal or per register?',
      answer:
        'No. The published price covers the store. Add a terminal at the counter and the price does not move — there are no per-terminal or per-register fees, ever.',
    },
    {
      question: 'Has this actually run in a real store?',
      answer:
        'The retail core has been fitted to real stores — a luxury menswear shop and an appliance and furniture store among them — with staging registers in evaluation now. We will not claim a switch the system has not earned: no store converts until the new register has run beside the old one and matched its books to the penny. That is the standard every install has to pass, including yours.',
    },
    {
      question: 'What does it cost?',
      answer:
        `${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. That is the whole number — no per-terminal fees, no surprise add-ons, no contracts. And it is guaranteed: ${OS_PRICING.guarantee}`,
    },
    {
      question: 'If I stop paying, do I lose my register and my data?',
      answer:
        'No. You own the system — the code and the data. The monthly covers backups, support, and new features; cancel, and the register keeps ringing and everything stays yours. That is the difference between owning and renting.',
    },
    {
      question: 'How does the switch work? Can the store stay open?',
      answer:
        'The store never closes for it. Your current POS keeps running while the new system runs beside it, and every night the two sets of books go side by side until the difference is zero. Only when they match day after day — and you give the word — does the store switch. No rip-out weekend, no leap of faith.',
    },
  ],
  relatedReading: [
    { title: 'Found It OS — The Whole System', href: '/foundit-os' },
    { title: 'Custom Software for Local Businesses', href: '/custom-software' },
    { title: 'Custom Software for Auto Repair Shops', href: '/custom-software/auto-repair-shops' },
    { title: 'Custom Software for Car Dealerships', href: '/custom-software/car-dealerships' },
  ],
  finalCtaHeadline: 'See Your Store in Its Own House',
  finalCtaSub:
    `Tell us how your store runs today — the POS, the binder, the workarounds — and we will map what your own system would look like, with your history in it. Free, no obligation. And the system itself is guaranteed: ${OS_PRICING.guarantee}`,
};

export default function RetailStoresPillar() {
  return <ServicePillar data={data} />;
}
