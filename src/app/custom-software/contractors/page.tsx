import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { OS_PRICING, TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contractor Job Management Software You Own | Found It OS',
  description:
    `Contractor job management software you own. Jobs, customers, and service reminders in one system. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. ${OS_PRICING.promise}`,
  alternates: { canonical: '/custom-software/contractors' },
  openGraph: {
    title: 'Contractor Job Management Software You Own | Found It Software',
    description:
      `One system for your whole field operation. Fitted to how your crews run jobs, proven beside the old way first, and yours forever. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Month-to-month. Cancel anytime, the system stays yours.`,
    type: 'website',
    url: 'https://www.founditsoftware.com/custom-software/contractors',
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
    `Found It OS for contractors is custom job management software fitted to one contracting business at a time. Jobs, customers, scheduling, estimates, invoices, annual service reminders, and website leads in one system the contractor owns outright. Old records are migrated in. Nothing switches until the new system runs beside the old way and matches it. ${OS_PRICING.monthly} per month plus a one-time ${OS_PRICING.setup} migration and setup. Built to simplify the owner's life and make the business more profitable.`,
  eyebrow: 'Found It OS · Contractors',
  headline: 'Contractor Job Management',
  headlineAccent: 'Software You Own Outright.',
  intro:
    `Right now your office is a truck cab. Jobs live on paper. The customer list lives in somebody's head. Annual service work slips because nobody got a reminder. Rented CRMs are built for everyone, so they fit nobody. Found It OS is the opposite. One system fitted to how your crews run jobs. The job board, the schedule, the customer book, the invoices, the website leads. You own it outright. Your records get migrated in, and nothing switches until the new system runs beside the old way and matches it.`,
  ctaLabel: 'Get Fitted',
  formSource: 'service_custom_software_contractors',
  formPageSlug: 'custom-software-contractors',
  formHeading: 'Get Fitted',
  stats: [
    { value: 'Live', label: 'Real Systems Running Now' },
    { value: '1', label: 'Field-Service OS Live' },
    { value: 'In Fitting', label: 'Foundation Contractor Now' },
    { value: '100%', label: 'Yours, Code & Data' },
  ],
  definitionHeading: 'What Is Contractor Job Management Software?',
  definition:
    "Contractor job management software is one system that runs your whole field operation. Leads, estimates, jobs, customers, invoices, and the follow-up service that brings revenue back every year. Most contractors run all that out of a truck. Paper tickets, photos on a phone, a customer list in memory. Rented field-service apps were built for every trade at once, so crews work around them. We build the other way. We map how your jobs flow, from first call to final invoice to next year's service visit, then build the system around that. Ask it questions in plain English and it answers from your own books. And you own it. The code, the data, everything.",
  includedHeading: 'What Every Contractor OS Includes',
  included: [
    {
      title: 'Fitted to Your Trade',
      detail:
        'We map how your jobs really run. How a lead comes in, how a crew gets dispatched, what lives on paper. Then we build the system around your process.',
    },
    {
      title: 'Jobs Off Paper',
      detail:
        'Every job on one board. Who called, what was quoted, who is on it, what is owed. No more tickets riding around on a dashboard.',
    },
    {
      title: 'A Customer Book That Remembers',
      detail:
        'Every customer, every job you have done for them, and automatic reminders when annual service comes due. That revenue stops slipping.',
    },
    {
      title: 'Your Website, Wired In',
      detail:
        'Leads from your website land right on the desk inside the system. Not in an inbox somebody checks on Fridays.',
    },
    {
      title: 'Ask It in Plain English',
      detail:
        'Who is due for service this month? What did we quote that job? Who has not paid? Ask, and it answers from your own records.',
    },
    {
      title: 'You Own It',
      detail:
        'You own the code, the data, and the system. If we ever part ways, it stays yours and keeps running.',
    },
  ],
  approachHeading: 'How a Fitting Works',
  approach: [
    {
      step: '01',
      title: 'The Fitting',
      detail:
        'We sit down with you and map every flow. How a call becomes a job, how a crew gets its day, where the paper piles up. That becomes the blueprint.',
    },
    {
      step: '02',
      title: 'Your Records, Migrated In',
      detail:
        'Your customers and job history get brought into the new system, even the handwritten tickets. Nothing gets abandoned.',
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
        'Nightly backups, support you can call, and new features as the business grows. Local and reachable, in person when you need us.',
    },
  ],
  audienceHeading: 'Who This Is For',
  audience: [
    'Roofing companies running jobs off paper and memory',
    'Foundation and concrete contractors juggling crews by phone',
    'Field-service companies with annual service revenue slipping away',
    "Contractors renting a CRM-class system that fits nobody's trade",
    "Owners whose customer list lives in one person's head",
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
      'This is not a mockup. A specialty outdoor-equipment service company runs its whole field operation on a system we fitted. Every job, every customer, and annual service reminders so repeat revenue stops slipping. When a customer fills out the website form, the lead lands right on the desk inside the system. No inbox, no copy-paste, no lost slip of paper.',
  },
  mistakesHeading: 'Why Contractor Software Usually Goes Wrong',
  mistakes: [
    {
      title: 'The office in a truck',
      detail:
        'Jobs on paper, quotes from memory, photos trapped on a phone. It works until it does not. A lost ticket, a forgotten quote, a customer nobody called back.',
    },
    {
      title: 'Missed annual service revenue',
      detail:
        'Service work you already earned, annual maintenance and seasonal checkups, quietly walks away because no system reminded anyone it was due.',
    },
    {
      title: 'CRM-class rentals that fit nobody',
      detail:
        'Jobber- and ServiceTitan-class systems are built for every trade at once. Generic software means workarounds, and workarounds bring the paper right back.',
    },
    {
      title: 'Rip-and-replace migrations',
      detail:
        'Most switches mean a scary cutover and abandoned records. We never rip anything out. Your records come with you, and the new system proves itself beside the old way first.',
    },
  ],
  pricingHeading: 'What It Costs',
  pricing:
    `The whole price, printed right here: ${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. No per-truck fees, no add-ons. Month-to-month, and the system stays yours. One job: ${OS_PRICING.promise} Traditional custom software is usually quoted in the five and six figures. This is ownership without that invoice.`,
  whyUsHeading: 'Why Contractors Choose Found It OS',
  whyUs: [
    'A field-service system we built is live in production today.',
    'A foundation contractor is in fitting now.',
    'You own 100% of the code and the data.',
  ],
  faqHeading: 'Contractor Software FAQ',
  faq: [
    {
      question: 'What does Found It OS replace for a contractor?',
      answer:
        'The paper tickets, the whiteboard, the spreadsheet, the inbox where website leads die, and the rented CRM your crew works around. One system for jobs, scheduling, customers, estimates, invoices, service reminders, and your website. Fitted to your trade, owned by you.',
    },
    {
      question: 'Is this a Jobber or ServiceTitan alternative?',
      answer:
        'Yes, with one big difference. Jobber and ServiceTitan are rentals. You pay as long as you use them and walk away with nothing. Found It OS is built around your operation, and you own it outright. If we ever part ways, the system stays yours and keeps running.',
    },
    {
      question: 'Is this actually running for real field-service businesses?',
      answer:
        'Yes. A specialty outdoor-equipment service company runs its field operation on a system we fitted. Jobs, customers, service reminders, and website leads flowing straight in. A foundation contractor is in fitting now.',
    },
    {
      question: 'What happens to my current job records and customer list?',
      answer:
        'They get migrated in during the fitting. Customer history, open jobs, even handwritten tickets. Nothing switches until the new system matches the old way. You say go, not us.',
    },
    {
      question: 'What does it cost?',
      answer:
        `${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. That is the whole number. It does not grow when you add a truck or hire another tech.`,
    },
    {
      question: 'Who owns the system?',
      answer:
        'You do. The code, the data, the whole system. If we ever part ways, it stays yours and keeps running.',
    },
    {
      question: 'My crew is not technical. Can they run it?',
      answer:
        'Yes. The system is built around how your crew already works, so there is nothing to relearn. We handle backups and support. Anyone can ask it questions in plain English and get answers from your own records.',
    },
  ],
  relatedReading: [
    { title: 'Found It OS - The Whole System', href: '/foundit-os' },
    { title: 'Custom Software, One Business at a Time', href: '/custom-software' },
    { title: 'Custom Software for Home Builders', href: '/custom-software/home-builders' },
    { title: 'Custom Software for Shed Builders', href: '/custom-software/shed-builders' },
  ],
  finalCtaHeadline: 'See Your Jobs on One Desk',
  finalCtaSub:
    `Tell us how your operation runs today. The truck cab, the paper, the reminders that never happen. We will show you what your own job management system would look like. In person if you are local.`,
};

export default function ContractorSoftwarePillar() {
  return <ServicePillar data={data} />;
}
