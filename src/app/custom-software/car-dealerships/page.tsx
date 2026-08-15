import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { OS_PRICING, TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Independent Dealership Software You Own Outright | Found It',
  description:
    `Dealership software you own — inventory, website, service, and rentals in one system, records migrated in. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. ${OS_PRICING.promise}`,
  alternates: { canonical: '/custom-software/car-dealerships' },
  openGraph: {
    title: 'Independent Dealership Software You Own Outright | Found It Marketing',
    description:
      `One system for the whole lot — inventory, website, sales desk, service department, and rentals — fitted to how you actually run it, and yours forever. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Month-to-month — cancel anytime, and the system stays yours.`,
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
    `Custom dealership software for independent car dealers — inventory, dealership website, sales desk, service department, and rentals in a single system the dealer owns outright, with existing records professionally migrated in. Built one dealership at a time by Found It Marketing in Alexandria, LA. ${OS_PRICING.monthly} per month plus a one-time ${OS_PRICING.setup} migration and setup, built to simplify the owner’s life and make the business more profitable.`,
  eyebrow: 'Custom Software · Car Dealerships',
  headline: 'Stop Renting Your Own',
  headlineAccent: 'Inventory Pages.',
  intro:
    `You bought the car. You photographed it. You wrote the description and set the price. Then you pay a software company monthly rent to show it on a website you don't own — and if you ever leave, the site and the listings go with them. Found It OS ends that: one system for the whole lot — inventory, website, sales desk, customer book, and whatever else your dealership runs — fitted to how you actually work, your records migrated in, and owned by you outright. We are building exactly that right now for a Louisiana independent dealer, replacing a rented website-and-DMS combo. You'll never rent software that almost fits again.`,
  ctaLabel: 'Get My Free Fitting',
  formSource: 'service_custom_software_car_dealerships',
  formPageSlug: 'custom-software-car-dealerships',
  formHeading: 'Get Your Free Fitting',
  stats: [
    { value: TRACK_RECORD.softwareCustomers, label: 'Software Customers' },
    { value: '3', label: 'Departments, One System' },
    { value: '100%', label: 'Yours — Code & Data' },
    { value: 'To the ¢', label: 'Proven Before Switch' },
  ],
  definitionHeading: 'What Is Dealership Software You Actually Own?',
  definition:
    'Most independent dealership software is rented: a provider hosts your website, holds your inventory pages, and charges a monthly fee forever — and the day you stop paying, your site and listings disappear. Dealership software you own is the opposite. It is one system — inventory, dealership website, sales desk, service work, rentals, and customer records — built around how your lot actually runs, sitting on a database and image hosting that belong to you. You can ask it questions in plain English and it answers from your own records. The monthly fee covers backups, support, and new features — not permission to keep your own inventory online.',
  includedHeading: 'What a Dealership Fitting Includes',
  included: [
    {
      title: 'Your Inventory, Your Pages',
      detail:
        'Every vehicle, photo, and price lives in a database and image hosting you own. List a car once and it is on your website — and nobody can hold those pages over your head.',
    },
    {
      title: 'The Whole Lot, Not Just Listings',
      detail:
        'Retail sales, a service department, rentals — the dealership platform we are building runs all three in one system. Yours gets fitted to whatever your lot actually does.',
    },
    {
      title: 'Your Website, Wired In',
      detail:
        'The public site and the back office share one brain. Change a price or mark a car sold in one place and the website reflects it.',
    },
    {
      title: 'Records Migrated In, Not Abandoned',
      detail:
        'Your existing listings, customer book, and deal history get professionally migrated into the new system during the fitting — not left behind in the old one.',
    },
    {
      title: 'Ask It in Plain English',
      detail:
        'What has sat on the lot longest, who bought from you twice, what is due back from rental — ask, and it answers from your own records.',
    },
    {
      title: 'You Own It',
      detail:
        'Month-to-month, no contracts. The code, the data, the website, the system — all yours. If we ever part ways, it stays with you and keeps running.',
    },
  ],
  approachHeading: 'How a Dealership Fitting Works',
  approach: [
    {
      step: '01',
      title: 'The Fitting',
      detail:
        'We come to your lot and map how it really runs — how a car gets listed, how a deal closes, what lives on paper or in someone’s head. That becomes the blueprint.',
    },
    {
      step: '02',
      title: 'Built Beside What You Have',
      detail:
        'Your current website and system keep running. The new one is built beside them — inventory loaded, records migrated — and checked against the old until it matches.',
    },
    {
      step: '03',
      title: 'You Say Go',
      detail:
        'Nothing switches until the new system has proven itself side by side and you give the word. No rip-out weekend, no dark website, no lost listings.',
    },
    {
      step: '04',
      title: 'We Stay On',
      detail:
        'Nightly backups, support you can actually call, and new features as the dealership grows. Local, reachable, in person when you need us.',
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
      'We are building this for a Louisiana independent dealer running three businesses off one lot: retail sales, a custom service department, and rentals. The old setup was a rented website-and-DMS combo — monthly fees forever, inventory pages the dealer never owned. The new platform replaces it with one system on the dealer’s own database and image hosting. The public site is built, and the back-office side is being fitted now — following the same rule every install follows: nothing switches until the new system has run beside the old one and proven itself.',
  },
  mistakesHeading: 'Why Dealership Software Usually Goes Wrong',
  mistakes: [
    {
      title: 'Renting your own inventory',
      detail:
        'You do all the work — buy the car, shoot it, price it, write it up — then pay rent every month to show it on pages you do not own. Stop paying and it all disappears.',
    },
    {
      title: 'Listings held hostage',
      detail:
        'When the website provider and the inventory system are the same rented product, leaving means starting your web presence over from zero. That is not a feature. It is a lock.',
    },
    {
      title: 'The taped-together lot',
      detail:
        'Website from one vendor, deals in another system, service on paper tickets, rentals in a spreadsheet. Nobody can see the whole lot in one place — so questions get answered from memory.',
    },
    {
      title: 'Rip-and-replace switches',
      detail:
        'Most software changes mean a scary cutover weekend and lost records. We never do that — the new system is proven beside the old one first, and your records are migrated in, not abandoned.',
    },
  ],
  pricingHeading: 'What It Costs',
  pricing:
    `The whole price, printed right here: ${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. That covers the fitting, your records professionally migrated in, the website, backups, and support — no per-listing fees, no surprise add-ons, no contracts. Month-to-month, and if we ever part ways, the system stays yours. One job: ${OS_PRICING.promise} Compare that honestly against what a rented website-and-DMS combo costs your lot over the years — rent that never ends, for software you will never own.`,
  whyUsHeading: 'Why Dealers Choose Found It OS',
  whyUs: [
    'We are building a full dealership platform right now — retail sales, a custom service department, and rentals in one system — for a Louisiana independent dealer.',
    `${TRACK_RECORD.softwareCustomers} software customers and growing — real local businesses running or being fitted right now.`,
    `Month-to-month, no contracts — the system has to earn it every month. Our customers stay because they love it, not because they’re locked in.`,
    'You own 100% of the code, the data, and the website. If we ever part ways, the system stays yours.',
    'Your records get professionally migrated in — listings, customers, history — not left behind.',
    'Proven before it ships: nothing switches until the new system has run beside your old one and matched it.',
    `${TRACK_RECORD.yearsInBusiness} years building digital products for local businesses — a local Alexandria, Louisiana team you can actually reach.`,
  ],
  faqHeading: 'Dealership Software FAQ',
  faq: [
    {
      question: 'Is this a Dealer Car Search alternative?',
      answer:
        'If you are renting a website-and-DMS combo from Dealer Car Search or a similar provider, yes — this is the alternative where you own the system instead of renting it. Dealer Car Search is a well-known provider of rented dealership websites; the difference here is not features, it is the model. We are building a replacement for exactly that kind of rented combo for a Louisiana independent dealer right now: one platform for sales, service, and rentals, on a database and image hosting the dealer owns.',
    },
    {
      question: 'What happens to my current listings and customer records?',
      answer:
        'They get professionally migrated into the new system during the fitting — inventory, photos, customer book, deal history. Your records are the whole point of the switch, so they come with you. Nothing gets abandoned in the old system, and nothing switches until the new one has run beside it and proven itself.',
    },
    {
      question: 'Do I actually own the website and the DMS?',
      answer:
        'Yes. The code, the data, the website, the image hosting — the whole system is your asset. There are no contracts; it is month-to-month, and if we ever part ways, the system stays with you and keeps running. The monthly fee pays for backups, support, and new features — not for permission to keep your own inventory online.',
    },
    {
      question: 'Can it run my service department and rentals too?',
      answer:
        'Yes — the dealership platform we are building covers retail sales, a custom service department, and rentals in one system. Your fitting maps what your lot actually does, and the system gets built around that. If you only sell, it runs sales. If you also wrench and rent, it runs all three.',
    },
    {
      question: 'Will my website go down during the switch?',
      answer:
        'No. Your current site keeps running while the new one is built beside it, with your inventory loaded and your records migrated. Nothing switches until the new system has proven itself side by side and you give the word. No cutover weekend, no dark website.',
    },
    {
      question: 'What does it cost?',
      answer:
        `${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. That is the whole number — no per-listing fees, no add-ons, no contracts. Month-to-month — cancel anytime, and the system stays yours.`,
    },
    {
      question: 'Do I need a technical person on staff?',
      answer:
        'No. It is built to be run by the people already working your lot. We handle backups and support, and everything is documented. If you ever want to take it in-house, you inherit a clean, fully owned system.',
    },
  ],
  relatedReading: [
    { title: 'Found It OS — Custom Operating Systems for Local Businesses', href: '/foundit-os' },
    { title: 'Custom Software for Local Businesses', href: '/custom-software' },
    { title: 'Custom Software for Auto Repair Shops', href: '/custom-software/auto-repair-shops' },
    { title: 'Custom Software for Shed Builders', href: '/custom-software/shed-builders' },
  ],
  finalCtaHeadline: 'See Your Lot on Its Own System',
  finalCtaSub:
    `Tell us how your dealership runs today — the rented website, the paper tickets, the spreadsheet — and we will map what a system you own would look like. Free, in person if you are local, no obligation. And the deal stays simple: month-to-month, cancel anytime, and the system stays yours.`,
};

export default function CarDealershipsPillar() {
  return <ServicePillar data={data} />;
}
