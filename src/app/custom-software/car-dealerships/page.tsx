import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { OS_PRICING, TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Independent Dealership Software You Own Outright | Found It',
  description:
    `Dealership software you own. Inventory, website, service, and rentals in one system. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. ${OS_PRICING.promise}`,
  alternates: { canonical: '/custom-software/car-dealerships' },
  openGraph: {
    title: 'Independent Dealership Software You Own Outright | Found It Software',
    description:
      `One system for the whole lot. Inventory, website, sales desk, service, and rentals. Fitted to your lot, and yours forever. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Month-to-month. Cancel anytime, the system stays yours.`,
    type: 'website',
    url: 'https://www.founditsoftware.com/custom-software/car-dealerships',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

/** Parse a display sticker like '$2,200' into the numeric 2200 for JSON-LD. */
const usd = (sticker: string) => Number(sticker.replace(/[^0-9.]/g, ''));

const data: PillarData = {
  name: 'Custom Software for Car Dealerships',
  slug: '/custom-software/car-dealerships',
  serviceType: 'Custom Dealership Software & DMS',
  offers: [
    { price: usd(OS_PRICING.monthly), priceCurrency: 'USD', unitCode: 'MON', name: OS_PRICING.monthlyLabel },
    { price: usd(OS_PRICING.setup), priceCurrency: 'USD', name: OS_PRICING.setupLabel },
  ],
  schemaDescription:
    `Custom dealership software for independent car dealers. Inventory, website, sales desk, service department, and rentals in one system the dealer owns outright. Old records are migrated in. Built one dealership at a time by Found It Software in Alexandria, LA. ${OS_PRICING.monthly} per month plus a one-time ${OS_PRICING.setup} migration and setup. Built to simplify the owner's life and make the business more profitable.`,
  eyebrow: 'Custom Software · Car Dealerships',
  headline: 'Stop Renting Your Own',
  headlineAccent: 'Inventory Pages.',
  intro:
    `You bought the car. You shot the photos, wrote it up, set the price. Then you pay rent every month to show it on a website you do not own. Leave, and the site and listings go with them. Found It OS ends that. One system for the whole lot. Inventory, website, sales desk, customer book, and whatever else your dealership runs. Your records migrated in. Owned by you outright. We are building exactly that right now for a Louisiana independent dealer, replacing a rented website-and-DMS combo.`,
  ctaLabel: "Show Me What You’d Build",
  formSource: 'service_custom_software_car_dealerships',
  formPageSlug: 'custom-software-car-dealerships',
  formHeading: 'Start your Software Map',
  stats: [
    { value: 'Live', label: 'Real Systems Running Now' },
    { value: '3', label: 'Departments, One System' },
    { value: '100%', label: 'Yours, Code & Data' },
    { value: 'To the ¢', label: 'Proven Before Switch' },
  ],
  definitionHeading: 'What Is Dealership Software You Actually Own?',
  definition:
    'Most dealership software is rented. A provider hosts your website, holds your inventory pages, and charges every month forever. Stop paying and your site disappears. Software you own is the opposite. One system for inventory, website, sales desk, service, rentals, and customer records, on a database and image hosting that belong to you. Ask it questions in plain English and it answers from your own records. The monthly fee covers backups, support, and new features. Not permission to keep your own inventory online.',
  includedHeading: 'What a Dealership Fitting Includes',
  included: [
    {
      title: 'Your Inventory, Your Pages',
      detail:
        'Every vehicle, photo, and price lives in a database you own. List a car once and it is on your website. Nobody can hold those pages over your head.',
    },
    {
      title: 'The Whole Lot, Not Just Listings',
      detail:
        'Retail sales, a service department, rentals. The platform we are building runs all three in one system. Yours gets fitted to whatever your lot does.',
    },
    {
      title: 'Your Website, Wired In',
      detail:
        'The public site and the back office share one brain. Change a price or mark a car sold, and the website shows it.',
    },
    {
      title: 'Records Migrated In, Not Abandoned',
      detail:
        'Your listings, customer book, and deal history get migrated into the new system. Not left behind in the old one.',
    },
    {
      title: 'Ask It in Plain English',
      detail:
        'What has sat on the lot longest. Who bought from you twice. What is due back from rental. Ask, and it answers from your own records.',
    },
    {
      title: 'You Own It',
      detail:
        'The code, the data, the website, the system. All yours. If we ever part ways, it stays with you and keeps running.',
    },
  ],
  approachHeading: 'How a Dealership Fitting Works',
  approach: [
    {
      step: '01',
      title: 'The Fitting',
      detail:
        'We come to your lot and map how it really runs. How a car gets listed, how a deal closes, what lives on paper. That becomes the blueprint.',
    },
    {
      step: '02',
      title: 'Built Beside What You Have',
      detail:
        'Your current website and system keep running. The new one is built beside them, inventory loaded, records migrated, and checked against the old until it matches.',
    },
    {
      step: '03',
      title: 'You Say Go',
      detail:
        'Nothing switches until the new system proves itself side by side and you give the word. No rip-out weekend. No dark website. No lost listings.',
    },
    {
      step: '04',
      title: 'We Stay On',
      detail:
        'Nightly backups, support you can call, and new features as the dealership grows. Local and reachable, in person when you need us.',
    },
  ],
  audienceHeading: 'Who This Is For',
  audience: [
    'Independent dealers renting a website-and-DMS combo',
    'Lots paying monthly forever to display their own inventory',
    'Dealers with a service department running on paper tickets',
    'Lots running rentals out of a spreadsheet or a notebook',
    'Owners whose customer book lives inside a rented system',
    'Anyone who wants to own their dealership software instead of renting it',
  ],
  chipsHeading: 'What It Can Run',
  chips: [
    'Inventory & Listings',
    'Dealership Website',
    'Sales Desk',
    'Service Department',
    'Rentals',
    'Customer Book',
    'Photos & Pricing',
    'AI Assistant',
  ],
  result: {
    headline: 'Being Built for a Real Lot',
    stats: [
      { value: '3', label: 'Departments in One System' },
      { value: '1', label: 'Rented Combo Being Replaced' },
      { value: '100%', label: 'Owned by the Dealer' },
    ],
    narrative:
      "We are building this for a Louisiana independent dealer running three businesses off one lot: retail sales, a service department, and rentals. The old setup was a rented website-and-DMS combo. Monthly fees forever, inventory pages the dealer never owned. The new platform runs on the dealer's own database and image hosting. The public site is built, and the back office is being fitted now. Same rule as every install: nothing switches until the new system runs beside the old one and proves itself.",
  },
  mistakesHeading: 'Why Dealership Software Usually Goes Wrong',
  mistakes: [
    {
      title: 'Renting your own inventory',
      detail:
        'You do all the work. Buy the car, shoot it, price it, write it up. Then you pay rent every month to show it on pages you do not own. Stop paying and it all disappears.',
    },
    {
      title: 'Listings held hostage',
      detail:
        'When the website and the inventory system are one rented product, leaving means starting your web presence over from zero. That is not a feature. It is a lock.',
    },
    {
      title: 'The taped-together lot',
      detail:
        'Website from one vendor, deals in another system, service on paper, rentals in a spreadsheet. Nobody can see the whole lot in one place.',
    },
    {
      title: 'Rip-and-replace switches',
      detail:
        'Most switches mean a scary cutover weekend and lost records. We never do that. The new system proves itself beside the old one first, and your records come with you.',
    },
  ],
  pricingHeading: 'What It Costs',
  pricing:
    `The whole price, printed right here: ${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. That covers the fitting, your records migrated in, the website, backups, and support. No per-listing fees. Major additions are scoped in writing before work begins. Month-to-month, and the system stays yours. One job: ${OS_PRICING.promise}`,
  whyUsHeading: 'Why Dealers Choose Found It OS',
  whyUs: [
    'We are building a full dealership platform right now, sales, service, and rentals in one system, for a Louisiana independent dealer.',
    `Real local businesses run their own systems right now.`,
    'You own 100% of the code, the data, and the website.',
  ],
  faqHeading: 'Dealership Software FAQ',
  faq: [
    {
      question: 'Is this a Dealer Car Search alternative?',
      answer:
        'Yes. Dealer Car Search is a well-known provider of rented dealership websites. The difference here is the model, not the features. You own the system instead of renting it. We are building a replacement for exactly that kind of rented combo for a Louisiana dealer right now.',
    },
    {
      question: 'What happens to my current listings and customer records?',
      answer:
        'They get migrated into the new system during the fitting. Inventory, photos, customer book, deal history. Nothing gets abandoned, and nothing switches until the new system proves itself beside the old one.',
    },
    {
      question: 'Do I actually own the website and the DMS?',
      answer:
        'Yes. The code, the data, the website, the image hosting. The whole system is your asset. The monthly fee pays for backups, support, and new features. Not for permission to keep your own inventory online.',
    },
    {
      question: 'Can it run my service department and rentals too?',
      answer:
        'Yes. The platform we are building covers retail sales, a service department, and rentals in one system. If you only sell, it runs sales. If you also wrench and rent, it runs all three.',
    },
    {
      question: 'Will my website go down during the switch?',
      answer:
        'No. Your current site keeps running while the new one is built beside it. Nothing switches until you give the word. Your website never goes dark.',
    },
    {
      question: 'What does it cost?',
      answer:
        `${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. That is the whole number. No per-listing fees. Major additions are scoped in writing before work begins.`,
    },
    {
      question: 'Do I need a technical person on staff?',
      answer:
        'No. The people already working your lot can run it. We handle backups and support. If you ever take it in-house, you inherit a clean system you fully own.',
    },
  ],
  relatedReading: [
    { title: 'Found It OS - Custom Operating Systems for Local Businesses', href: '/foundit-os' },
    { title: 'Custom Software for Local Businesses', href: '/custom-software' },
    { title: 'Custom Software for Auto Repair Shops', href: '/custom-software/auto-repair-shops' },
    { title: 'Custom Software for Shed Builders', href: '/custom-software/shed-builders' },
  ],
  finalCtaHeadline: 'See Your Lot on Its Own System',
  finalCtaSub:
    `Tell us how your dealership runs today. The rented website, the paper tickets, the spreadsheet. We will show you what a system you own would look like. In person if you are local.`,
};

export default function CarDealershipsPillar() {
  return <ServicePillar data={data} />;
}
