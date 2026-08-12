import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { AWARD, OS_PRICING, TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Custom Business Software You Own — Built for Small Business',
  description:
    `Custom business software built for one business at a time — you own it outright, records migrated in. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. ${OS_PRICING.guarantee}`,
  alternates: { canonical: '/custom-software' },
  openGraph: {
    title: 'Custom Business Software — Fitted to One Business at a Time | Found It Marketing',
    description:
      `Custom AI-powered operating systems fitted to your business — your jobs, your register, your customer book — with your records professionally migrated in. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. ${OS_PRICING.guarantee}`,
    type: 'website',
    url: 'https://founditmarketing.com/custom-software',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

/** Parse a display sticker like '$2,200' into the numeric 2200 for JSON-LD. */
const usd = (sticker: string) => Number(sticker.replace(/[^0-9.]/g, ''));

const data: PillarData = {
  name: 'Custom Business Software',
  slug: '/custom-software',
  serviceType: 'Custom Business Software Development',
  offers: [
    { price: usd(OS_PRICING.monthly), priceCurrency: 'USD', unitCode: 'MON', name: OS_PRICING.monthlyLabel },
    { price: usd(OS_PRICING.setup), priceCurrency: 'USD', name: OS_PRICING.setupLabel },
  ],
  schemaDescription:
    `Custom AI-powered business operating systems built one business at a time — the register, the dispatch board, the customer book, the jobs, and the website in a single system the client owns outright. Years of existing records are professionally migrated in, and nothing switches until the new system has run beside the old one and matched it. Installed in days, not quarters. ${OS_PRICING.monthly} per month plus a one-time ${OS_PRICING.setup} for migration and setup, backed by a plain guarantee: ${OS_PRICING.guarantee}`,
  eyebrow: 'Custom Software',
  headline: 'Built for Your Business —',
  headlineAccent: 'Not for an “Industry.”',
  intro:
    `Every local business runs on somebody else’s software — generic, rented, and built for an “industry” instead of for you. We build the opposite: custom AI-powered operating systems fitted to one business at a time. Your jobs, your register, your dispatch board, your customer book — with your years of records professionally migrated in, not abandoned. It installs in days, not quarters, and nothing switches until the new system has run beside your old one and matched it. ${TRACK_RECORD.softwareCustomers} local businesses have already said yes, and the price is published right on this site. You’ll never rent software that almost fits again.`,
  ctaLabel: 'Get My Free Fitting',
  formSource: 'service_custom_software',
  formPageSlug: 'custom-software',
  formHeading: 'Get Your Free Fitting',
  stats: [
    { value: TRACK_RECORD.softwareCustomers, label: 'Software Customers' },
    { value: '6', label: 'Industries Fitted or In Fitting' },
    { value: '100%', label: 'Yours — Code & Data' },
    { value: 'Days', label: 'To Install, Not Quarters' },
  ],
  definitionHeading: 'What Is Custom Business Software?',
  definition:
    'Custom business software is a system built around how one specific business actually runs — its jobs, its register, its customer book — instead of a rented product built for an industry average. Off-the-shelf systems make you work their way; whatever doesn’t fit ends up on paper, in spreadsheets, or in somebody’s head. A custom system is the reverse: we map how your business really works, build the software around that, and migrate your existing records into it so day one starts with your history, not a blank screen. Ours goes one step further — a built-in AI you can ask questions in plain English, and it answers from your own data. And when it’s done, you own it. The code, the data, everything.',
  includedHeading: 'What Every System We Build Includes',
  included: [
    {
      title: 'Fitted to One Business: Yours',
      detail:
        'No templates, no industry edition. We map how your shop actually runs — then build the system around your process, not the other way around.',
    },
    {
      title: 'Your Records, Migrated In',
      detail:
        'Years of customers, jobs, and invoices come with you — professionally migrated into the new system, not abandoned in the old one.',
    },
    {
      title: 'The Whole Operation',
      detail:
        'Register, dispatch board, customer book, jobs, invoices, inventory, scheduling, your website — whatever your business runs on, in one system.',
    },
    {
      title: 'AI That Answers From Your Data',
      detail:
        'Ask it questions in plain English — who bought what, what’s running behind, who hasn’t been in lately — and it answers from your own books.',
    },
    {
      title: 'Proven Before Anything Switches',
      detail:
        'The new system runs beside your old one until the two match. No leap of faith, no rip-out weekend. You switch when it has earned it.',
    },
    {
      title: 'You Own It Outright',
      detail:
        'Month-to-month, no contracts. The code, the data, the whole system is your asset. If we ever part ways, it stays yours and keeps running.',
    },
  ],
  approachHeading: 'How a Fitting Works',
  approach: [
    {
      step: '01',
      title: 'The Fitting',
      detail:
        'We sit down in your business and map every flow — how a job comes in, how a sale rings, what lives on paper. That becomes the blueprint.',
    },
    {
      step: '02',
      title: 'The Migration',
      detail:
        'Your existing records — customers, jobs, invoices, history — are professionally migrated into the new system. Nothing gets abandoned.',
    },
    {
      step: '03',
      title: 'Side by Side',
      detail:
        'Your old system keeps running. The new one runs beside it, and we check the two against each other until they match. Nothing switches early.',
    },
    {
      step: '04',
      title: 'You Say Go',
      detail:
        'When the numbers have matched and you give the word, you switch — in days, not quarters. Then we stay on: backups, support, new features.',
    },
  ],
  audienceHeading: 'Who This Is For',
  audience: [
    'Auto repair shops renting Tekmetric-class shop systems',
    'Field service crews dispatching from a whiteboard and a group text',
    'Retail stores stuck on an aging register or terminal POS',
    'Shed builders and dealers tracking orders in spreadsheets',
    'Car dealerships whose website and inventory live on a vendor’s platform',
    'Home builders and contractors running jobs on paper and memory',
  ],
  chipsHeading: 'What a Fitted System Can Run',
  chips: [
    'Register / POS',
    'Dispatch Board',
    'Customer Book',
    'Jobs & Tickets',
    'Inventory',
    'Invoicing',
    'Scheduling',
    'Your Website',
    'AI Assistant',
  ],
  result: {
    headline: 'Real Installs, Not Demos',
    stats: [
      { value: 'Live', label: 'Auto Shop on Migrated Records' },
      { value: 'Live', label: 'Field Service, Real Leads' },
      { value: '1', label: 'Retail Core — Never Forked' },
    ],
    narrative:
      'A Louisiana auto shop runs its service desk on a system we fitted — live, on its own migrated records, not sample data. A field service company takes real leads through its system in production every day. Retail stores are being fitted to one shared core — staging registers in evaluation, zero forks — so every store gets every improvement. Shed builders, car dealerships, and home builders are being fitted now. None of these are mockups. They are businesses that own their software.',
  },
  galleryHeading: 'Not Mockups. Screenshots.',
  galleryIntro:
    'Every industry below is a real system off a real screen — an auto shop, a tire shop, a shed dealer, a clothier, a foundation crew, a carpet cleaner, a windmill maker. Desktop and phone. Fitted, not templated, and owned by the business running it.',
  showcase: [
    {
      img: '/os-screens/flywheel-os-today-v1.png',
      imgAlt: "Flywheel OS dashboard — the day's quotes, invoices, and profit tiles with aging and open-quote widgets",
      phone: '/os-screens/flywheel-os-mobile-quick-v2.png',
      phoneAlt: 'Flywheel OS quick quote on a phone — a tire size field with a snap-the-sidewall camera option',
      title: 'Flywheel OS',
      kind: 'Tire & Auto Shop',
      detail:
        'The whole day on one screen — quotes, invoices, and profit counted live. And in the pocket: type a tire size or snap the sidewall, priced out the door in seconds.',
    },
    {
      img: '/os-screens/tonys-shop-os-v1.png',
      imgAlt: 'Tony’s Shop OS dashboard — the parking lot of declined jobs, priced and ready for win-back texts',
      title: 'Tony’s Shop OS',
      kind: 'European Auto Repair',
      detail: 'The parking lot: every declined job on the books — named, priced, and one tap from a win-back text.',
    },
    {
      img: '/os-screens/house-system-v1.png',
      imgAlt: 'The House System register — a ticket rung with three lines and a live total',
      phone: '/os-screens/house-system-mobile-register-v1.png',
      phoneAlt: 'The House System register on a phone — the product rail and an empty ticket ready to ring',
      title: 'The House System',
      kind: 'Menswear Retail',
      detail: 'The register that remembers — tickets, clients, inventory, and the books in one place. It rings from a phone at the counter.',
    },
    {
      img: '/os-screens/brians-foundation-os-v1.png',
      imgAlt: 'Brian’s Foundation Repair OS — the estimate book with jobs from out-the-door to booked, and the Speak It In button',
      phone: '/os-screens/brians-foundation-mobile-estimates-v1.png',
      phoneAlt: 'Brian’s Foundation Repair OS on a phone — the estimate book with speak-it-in intake',
      title: 'Brian’s Foundation Repair',
      kind: 'Foundation Contractor',
      detail:
        'The estimate book: ramble the job at your phone — Speak It In sorts it into a written estimate, and nothing opens until you approve it.',
    },
    {
      img: '/os-screens/lonestar-os-v1.png',
      imgAlt: 'Lonestar OS desk — sales pipeline from unprocessed to delivered with dollars at every stage',
      title: 'Lonestar OS',
      kind: 'Shed Dealer & Builder',
      detail: 'One pipeline from sold to delivered — every building, every dollar, every hand-off on one desk.',
    },
    {
      img: '/os-screens/procarpet-os-v1.png',
      imgAlt: 'Pro Carpet OS desk — estimate follow-up texts drafted and waiting for one-tap approval',
      phone: '/os-screens/procarpet-os-mobile-estimates-v1.png',
      phoneAlt: 'Pro Carpet OS estimates on a phone — the ladder chasing every estimate that is out the door',
      title: 'Pro Carpet OS',
      kind: 'Carpet & Duct Cleaning',
      detail: 'The ladder: every open estimate gets its follow-up drafted — nothing sends until you tap it.',
    },
    {
      img: '/os-screens/matteo-register-v1.png',
      imgAlt: 'The House System register fitted to a luxury atelier — terracotta styling, a three-line ticket totaling $11,130',
      phone: '/os-screens/matteo-register-mobile-v1.png',
      phoneAlt: 'The House System register on a phone, fitted to a luxury atelier — terracotta styling',
      title: 'The Same House, a Different Store',
      kind: 'Atelier Edition',
      detail: 'The same retail core, fitted to a luxury atelier — its own categories, its own tax, its own look. Fitted, not templated.',
    },
    {
      img: '/os-screens/ecw-field-os-v1.png',
      imgAlt: 'East Coast Windmill Field OS — the service book with due services priced and ready to text',
      phone: '/os-screens/ecw-field-os-mobile-v1.png',
      phoneAlt: 'East Coast Windmill Field OS on a phone — the service book with quotes priced and draft-text buttons',
      title: 'Field OS',
      kind: 'Windmill Manufacturer',
      detail: 'The service book that follows up — due services surface themselves, you approve the text. In the field, one tap drafts it.',
    },
  ],
  mistakesHeading: 'Why Off-the-Shelf Software Goes Wrong',
  mistakes: [
    {
      title: 'Built for an “industry,” not for you',
      detail:
        'Generic systems are built for an industry average, which means they fit no one. Your team ends up keeping half the business on paper and in their heads.',
    },
    {
      title: 'Rent forever, own nothing',
      detail:
        'Subscription software charges you rent for as long as you stay, raises prices when it wants, and holds your data if you try to leave. You never own a thing.',
    },
    {
      title: 'The switch that abandons your records',
      detail:
        'A new system that starts from zero throws away the most valuable thing you have — years of customers, jobs, and history. We migrate it in instead.',
    },
    {
      title: 'The leap-of-faith cutover',
      detail:
        'A rip-and-replace weekend bets the business on software you have never run. We never do it. The new system proves itself beside the old one first.',
    },
  ],
  pricingHeading: 'The Price Is on the Website',
  pricing:
    `${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. That is the whole number, published right here — no “call for pricing,” no per-seat fees, no surprise add-ons, no contracts. Month-to-month, and if we ever part ways, the system stays yours. And it is guaranteed: ${OS_PRICING.guarantee} A custom system fitted to your business, at a price you can read before you ever talk to us.`,
  whyUsHeading: 'Why Businesses Choose Found It',
  whyUs: [
    `${TRACK_RECORD.softwareCustomers} software customers and growing — real local businesses running or being fitted right now.`,
    `Guaranteed: ${OS_PRICING.guarantee} Month-to-month, no contracts — the system has to earn it every month.`,
    `${TRACK_RECORD.yearsInBusiness} years building digital products and marketing systems for local businesses.`,
    'You own 100% of the code and the data. If we ever part ways, the system stays yours.',
    'Your records get professionally migrated in — and nothing switches until the new system has run beside the old one and matched it.',
    'Built-in AI that answers questions about your own business in plain English.',
    `A local Alexandria team you can actually reach — ${AWARD.year} ${AWARD.label} Award winner.`,
  ],
  faqHeading: 'Custom Business Software FAQ',
  faq: [
    {
      question: 'What does custom business software cost?',
      answer:
        `${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup — the whole price, published on this site. Traditional custom development prices a single local business out of the market entirely; the point of Found It OS is the same ownership at a price you can read before you ever pick up the phone. And it is guaranteed: ${OS_PRICING.guarantee}`,
    },
    {
      question: 'Is this an alternative to Tekmetric, ShedSuite, or Buildertrend?',
      answer:
        'Yes — that is exactly the seat it takes. Those are capable systems, but they are rented, and they are built for an industry rather than for your business. A Found It OS install is fitted to one business — yours — you own it outright, and your records come with you: professionally migrated in, not abandoned. Nothing switches until the new system has run beside your current one and matched it.',
    },
    {
      question: 'What happens to my years of records when I switch?',
      answer:
        'They come with you. Migration is part of the fitting — your customers, jobs, invoices, and history get professionally migrated into the new system, so day one starts with everything you have built, not a blank screen. One of our live installs, a Louisiana auto shop, runs entirely on its own migrated records.',
    },
    {
      question: 'How long does it take to install?',
      answer:
        'Days, not quarters. Because the system is fitted to how you already run, there is no six-month rollout and no retraining your business around somebody else’s workflow. And the switch itself only happens after the new system has run beside your old one and matched it.',
    },
    {
      question: 'Who owns the software when it’s done?',
      answer:
        'You do. The code, the data, the whole system — it is your asset. There are no contracts; it is month-to-month, and if we ever part ways, the system stays yours and keeps running. The monthly covers backups, support, and new features — the day we stop earning it, you cancel and keep everything.',
    },
    {
      question: 'My business isn’t one of the industries listed. Can you still build for it?',
      answer:
        'Almost certainly. The industry pages below are where we have live systems and fittings underway — auto repair, field service, retail, sheds, dealerships, home builders — but the method is the same everywhere: map how one business runs, build the system around it, migrate the records in. If your business runs on jobs, customers, and a register in any form, it can be fitted.',
    },
    {
      question: 'What does “love it or your money back” mean?',
      answer:
        'Exactly what it says. If you do not love it, you get your money back. The guarantee exists because the system has to earn its keep every month — not because we expect to write refunds.',
    },
  ],
  relatedReading: [
    { title: 'Found It OS — the operating system itself', href: '/foundit-os' },
    { title: 'Custom Software for Auto Repair Shops', href: '/custom-software/auto-repair-shops' },
    { title: 'Custom Software for Shed Builders', href: '/custom-software/shed-builders' },
    { title: 'Custom Software for Car Dealerships', href: '/custom-software/car-dealerships' },
    { title: 'Custom Software for Contractors', href: '/custom-software/contractors' },
    { title: 'The House System — Retail POS You Own', href: '/custom-software/retail-stores' },
    { title: 'Custom Software for Home Builders', href: '/custom-software/home-builders' },
  ],
  finalCtaHeadline: 'See What a Fitted System Looks Like',
  finalCtaSub:
    `Tell us how your business runs today — the register, the paper, the workarounds — and we will map what your own operating system would look like. Free, in person if you are local, no obligation. The price is already published, and the system is guaranteed: ${OS_PRICING.guarantee}`,
};

export default function CustomSoftwarePillar() {
  return <ServicePillar data={data} />;
}
