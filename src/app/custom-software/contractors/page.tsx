import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { OS_PRICING, TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contractor Job Management Software You Own | Found It OS',
  description:
    `Contractor job management software you own — jobs, customers, and service reminders in one system. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. ${OS_PRICING.guarantee}`,
  alternates: { canonical: '/custom-software/contractors' },
  openGraph: {
    title: 'Contractor Job Management Software You Own | Found It Marketing',
    description:
      `One system for your whole field operation — fitted to how your crews actually run jobs, proven beside the old way first, and yours forever. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. ${OS_PRICING.guarantee}`,
    type: 'website',
    url: 'https://founditmarketing.com/custom-software/contractors',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

/** Parse a display sticker like '$2,200' into the numeric 2200 for JSON-LD. */
const usd = (sticker: string) => Number(sticker.replace(/[^0-9.]/g, ''));

const data: PillarData = {
  name: 'Custom Software for Contractors',
  slug: '/custom-software/contractors',
  serviceType: 'Custom Contractor Job Management Software',
  offers: [
    { price: usd(OS_PRICING.monthly), priceCurrency: 'USD', unitCode: 'MON', name: OS_PRICING.monthlyLabel },
    { price: usd(OS_PRICING.setup), priceCurrency: 'USD', name: OS_PRICING.setupLabel },
  ],
  schemaDescription:
    `Found It OS for contractors is custom job management software fitted to one contracting business at a time — jobs, customers, scheduling, estimates, invoices, annual service reminders, and website lead intake in a single system the contractor owns outright. Existing records are professionally migrated in, and nothing switches until the new system has run beside the old way and matched it. ${OS_PRICING.monthly} per month plus a one-time ${OS_PRICING.setup} migration and setup, backed by a love-it-or-your-money-back guarantee.`,
  eyebrow: 'Found It OS · Contractors',
  headline: 'Contractor Job Management —',
  headlineAccent: 'Software You Own Outright.',
  intro:
    `Right now your office is a truck cab. Jobs live on paper, the customer list lives in somebody's head, and annual service work slips because nobody got a reminder. The software industry's answer is a CRM-class rental built for everyone — which means it fits nobody, least of all your trade. Found It OS is the opposite: one system fitted to how your crews actually run jobs — the job board, the schedule, the customer book, the invoices, the website leads — and you own it outright. Your records get professionally migrated in, not abandoned, and nothing switches until the new system runs beside the old way and matches it. You'll never rent software that almost fits again.`,
  ctaLabel: 'Get My Free Fitting',
  formSource: 'service_custom_software_contractors',
  formPageSlug: 'custom-software-contractors',
  formHeading: 'Get Your Free Fitting',
  stats: [
    { value: TRACK_RECORD.softwareCustomers, label: 'Software Customers' },
    { value: '1', label: 'Field-Service OS Live' },
    { value: 'In Fitting', label: 'Foundation Contractor Now' },
    { value: '100%', label: 'Yours — Code & Data' },
  ],
  definitionHeading: 'What Is Contractor Job Management Software?',
  definition:
    'Contractor job management software is one system that runs your whole field operation — leads, estimates, scheduled jobs, customers, invoices, and the follow-up service that keeps revenue coming back year after year. Most contractors run all of that out of a truck: paper tickets, a phone full of photos, a customer list in memory. Off-the-shelf field-service rentals promise to fix it, but they were built for every trade at once, so your crew ends up working around the software instead of with it. Found It OS is built the other way: we study how your jobs actually flow — from the first call to the final invoice to next year’s service visit — then build the system around that. Ask it questions in plain English and it answers from your own books. And at the end, you own it. The code, the data, everything.',
  includedHeading: 'What Every Contractor OS Includes',
  included: [
    {
      title: 'Fitted to Your Trade',
      detail:
        'We map how your jobs really run — how a lead comes in, how a crew gets dispatched, what lives on paper — then build the system around your process, not the other way around.',
    },
    {
      title: 'Jobs Off Paper',
      detail:
        'Every job on one board — who called, what was quoted, who is on it, what is owed. No more tickets riding around on a dashboard.',
    },
    {
      title: 'A Customer Book That Remembers',
      detail:
        'Every customer, every job you have ever done for them, and automatic reminders when their annual service comes due — so that revenue stops slipping.',
    },
    {
      title: 'Your Website, Wired In',
      detail:
        'Leads from your public website land directly on the desk inside the system — not in an inbox somebody checks on Fridays.',
    },
    {
      title: 'Ask It in Plain English',
      detail:
        'Who is due for service this month? What did we quote that job? Who has not paid? Ask, and it answers from your own records.',
    },
    {
      title: 'You Own It',
      detail:
        'Month-to-month, no contracts. You own the code, the data, and the system. If we ever part ways, it stays yours and keeps running.',
    },
  ],
  approachHeading: 'How a Fitting Works',
  approach: [
    {
      step: '01',
      title: 'The Fitting',
      detail:
        'We sit down with you and map every flow — how a call becomes a job, how a crew gets its day, where the paper piles up. That becomes the blueprint.',
    },
    {
      step: '02',
      title: 'Your Records, Migrated In',
      detail:
        'Your existing customers and job history get brought into the new system professionally — even the handwritten tickets. Nothing gets abandoned.',
    },
    {
      step: '03',
      title: 'Proven Beside the Old Way',
      detail:
        'The old way keeps running while the new system runs beside it. Nothing switches until the two match and you give the word.',
    },
    {
      step: '04',
      title: 'We Stay On',
      detail:
        'Nightly backups, support you can actually call, and new features as the business grows. Local, reachable, in person when you need us.',
    },
  ],
  audienceHeading: 'Who This Is For',
  audience: [
    'Roofing companies running jobs off paper and memory',
    'Foundation and concrete contractors juggling crews by phone',
    'Field-service companies with annual service revenue slipping away',
    'Contractors renting a CRM-class system that fits nobody’s trade',
    'Owners whose customer list lives in one person’s head',
    'Anyone who wants to own their system instead of renting it',
  ],
  chipsHeading: 'What It Can Run',
  chips: [
    'Job Board',
    'Scheduling & Dispatch',
    'Customer Book',
    'Estimates & Invoices',
    'Annual Service Reminders',
    'Website Lead Intake',
    'Your Website',
    'AI Assistant',
  ],
  result: {
    headline: 'Running in the Field Right Now',
    stats: [
      { value: 'Live', label: 'Field-Service OS in Production' },
      { value: 'Web → Desk', label: 'Real Leads Flowing In' },
      { value: 'Annual', label: 'Service Reminders Working' },
    ],
    narrative:
      'This is not a mockup. A specialty outdoor-equipment service company runs its whole field operation on a system we fitted: every job, every customer, and annual service reminders so recurring revenue stops slipping through the cracks. When a customer fills out the form on their public website, that lead lands directly on the desk inside the system — no inbox, no copy-paste, no lost slip of paper. A fitting is underway right now for a foundation contractor.',
  },
  galleryHeading: 'Not Mockups. Screenshots.',
  galleryIntro:
    'Straight off the screen of a fitted system — a cleaning company’s desk that drafts its own follow-ups. Fitted, not templated.',
  gallery: [
    {
      src: '/os-screens/procarpet-os-v1.png',
      alt: 'Pro Carpet OS desk — estimate follow-up texts drafted and waiting for one-tap approval',
      title: 'Pro Carpet OS',
      kind: 'Carpet & Duct Cleaning',
      detail: 'The ladder: every open estimate gets its follow-up drafted — nothing sends until you tap it.',
    },
  ],
  mobileHeading: 'The Office, In the Truck',
  mobileIntro:
    'The same system on the phone — the follow-ups from the job site.',
  mobileShots: [
    {
      src: '/os-screens/procarpet-os-mobile-v1.png',
      alt: 'Pro Carpet OS on a phone — the day’s money tiles and follow-up texts waiting for approval',
      title: 'The Desk in a Pocket',
      kind: 'Pro Carpet OS',
      detail: 'Collected, waiting, in play — and the follow-ups ready for your thumb.',
    },
  ],
  mistakesHeading: 'Why Contractor Software Usually Goes Wrong',
  mistakes: [
    {
      title: 'The office in a truck',
      detail:
        'Jobs on paper, quotes from memory, photos trapped on a phone. It works until the day it doesn’t — a lost ticket, a forgotten quote, a customer nobody called back.',
    },
    {
      title: 'Missed annual service revenue',
      detail:
        'Service work you already earned the right to — annual maintenance, seasonal checkups — quietly walks away because no system reminded anyone it was due.',
    },
    {
      title: 'CRM-class rentals that fit nobody',
      detail:
        'Contractors renting Jobber- or ServiceTitan-class systems pay every month for software built for every trade at once. Generic software means workarounds, and workarounds mean paper comes right back.',
    },
    {
      title: 'Rip-and-replace migrations',
      detail:
        'Most switches mean a scary cutover and abandoned records. We never rip anything out — your records get migrated in, and the new system proves itself beside the old way first.',
    },
  ],
  pricingHeading: 'What It Costs',
  pricing:
    `The whole price, printed right here: ${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. No per-truck fees, no per-user fees, no surprise add-ons, no contracts — month-to-month, and if we ever part ways, the system stays yours. And it is guaranteed: ${OS_PRICING.guarantee} Traditional custom software development is typically quoted in the five and six figures before maintenance ever starts — a price that puts ownership out of reach for most local businesses. This is custom-software ownership without the custom-software invoice.`,
  whyUsHeading: 'Why Contractors Choose Found It OS',
  whyUs: [
    'A field-service operating system we built is live in production today — jobs, customers, annual service reminders, and real website leads flowing straight into the desk.',
    'A foundation contractor is in fitting right now — a real engagement, not a promise.',
    `${TRACK_RECORD.softwareCustomers} software customers and growing — real local businesses running or being fitted right now.`,
    `Guaranteed: ${OS_PRICING.guarantee} Month-to-month, no contracts — the system has to earn it every month.`,
    'You own 100% of the code and the data. If we ever part ways, the system stays yours.',
    'Your records get professionally migrated in — and nothing switches until the new system runs beside the old way and matches it.',
    `${TRACK_RECORD.yearsInBusiness} years building digital products for local businesses, from a team in Alexandria, LA you can actually reach.`,
  ],
  faqHeading: 'Contractor Software FAQ',
  faq: [
    {
      question: 'What does Found It OS replace for a contractor?',
      answer:
        'The paper tickets, the whiteboard, the spreadsheet, the inbox where website leads go to die, and the CRM-class rental your crew works around. One system: jobs, scheduling, customers, estimates, invoices, service reminders, and your website — fitted to your trade, owned by you.',
    },
    {
      question: 'Is this a Jobber or ServiceTitan alternative?',
      answer:
        'Yes — with one structural difference. Jobber and ServiceTitan are rentals: capable systems built for every trade at once, that you pay for as long as you use them and walk away from with nothing. Found It OS is built around your specific operation, and you own it outright — the code and the data. The monthly covers backups, support, and new features, and if we ever part ways, the system stays yours and keeps running.',
    },
    {
      question: 'Is this actually running for real field-service businesses?',
      answer:
        'Yes. A specialty outdoor-equipment service company runs its field operation on a system we fitted — jobs, customers, annual service reminders, and leads from their public website flowing directly into the system’s desk. A fitting is underway right now for a foundation contractor.',
    },
    {
      question: 'What happens to my current job records and customer list?',
      answer:
        'They get professionally migrated in during the fitting — customer history, open jobs, even handwritten tickets. Nothing gets abandoned, and nothing switches until the new system has run beside your old way of working and matched it. You say go, not us.',
    },
    {
      question: 'What does it cost?',
      answer:
        `${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. That is the whole number — no per-truck fees, no per-user fees, no surprise add-ons, no contracts. And it is guaranteed: ${OS_PRICING.guarantee}`,
    },
    {
      question: 'Who owns the system?',
      answer:
        'You do. The code, the data, the whole system — it is your asset. Month-to-month, no contracts, and if we ever part ways, the system stays yours and keeps running.',
    },
    {
      question: 'My crew is not technical. Can they run it?',
      answer:
        'That is the point of a fitting. The system is built around how your crew already works — not the other way around — so there is nothing to relearn. We handle backups and support, and you can ask the system questions in plain English and get answers from your own records.',
    },
  ],
  relatedReading: [
    { title: 'Found It OS — The Whole System', href: '/foundit-os' },
    { title: 'Custom Software, One Business at a Time', href: '/custom-software' },
    { title: 'Custom Software for Home Builders', href: '/custom-software/home-builders' },
    { title: 'Custom Software for Shed Builders', href: '/custom-software/shed-builders' },
  ],
  finalCtaHeadline: 'See Your Jobs on One Desk',
  finalCtaSub:
    `Tell us how your operation runs today — the truck cab, the paper, the reminders that never happen — and we will map what your own job management system would look like. Free, in person if you are local, no obligation. And the system itself is guaranteed: ${OS_PRICING.guarantee}`,
};

export default function ContractorSoftwarePillar() {
  return <ServicePillar data={data} />;
}
