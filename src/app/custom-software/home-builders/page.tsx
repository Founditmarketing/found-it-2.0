import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { OS_PRICING, TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'CoConstruct Alternative — Custom Home Builder Software',
  description:
    `CoConstruct is being retired. Own a builder OS fitted to you — draws, selections, change orders — for ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. ${OS_PRICING.guarantee}`,
  alternates: { canonical: '/custom-software/home-builders' },
  openGraph: {
    title: 'CoConstruct Alternative for Home Builders | Found It Marketing',
    description:
      `Every builder on CoConstruct has to move somewhere. Get fitted for a builder OS you own — draws, selections, change orders, sub scheduling — before it goes dark. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. ${OS_PRICING.guarantee}`,
    type: 'website',
    url: 'https://www.founditsoftware.com/custom-software/home-builders',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

/** Parse a display sticker like '$2,200' into the numeric 2200 for JSON-LD. */
const usd = (sticker: string) => Number(sticker.replace(/[^0-9.]/g, ''));

const data: PillarData = {
  name: 'Custom Software for Home Builders',
  slug: '/custom-software/home-builders',
  serviceType: 'Custom Home Builder Software',
  offers: [
    { price: usd(OS_PRICING.monthly), priceCurrency: 'USD', unitCode: 'MON', name: OS_PRICING.monthlyLabel },
    { price: usd(OS_PRICING.setup), priceCurrency: 'USD', name: OS_PRICING.setupLabel },
  ],
  schemaDescription:
    `A custom operating system for home builders — draws, selections, change orders, sub scheduling, and takeoffs where the takeoff line is the estimate line — built one builder at a time and owned outright by the client. Records are professionally migrated in, and the new system runs beside the old one until the two match before anything switches. Currently in fitting with a custom home builder and recruiting design-partner builders ahead of the announced CoConstruct retirement. ${OS_PRICING.monthly} per month plus a one-time ${OS_PRICING.setup} migration and setup, backed by a love-it-or-your-money-back guarantee.`,
  eyebrow: 'Builder OS',
  headline: 'CoConstruct Is Being Retired.',
  headlineAccent: 'Own What Replaces It.',
  intro:
    `CoConstruct is being retired, and every builder on it has to move somewhere. The only question is whether you land in another rented seat or in a system you own. We are building a builder OS right now — draws, selections, change orders, sub scheduling — where the takeoff line IS the estimate line, and we are fitting it with real builders as we build it. This page is an invitation, not an install count: come in as a design partner, get fitted first, shape the system around how you actually build, and own it outright before CoConstruct goes dark. Your records get professionally migrated in, and nothing switches until the new system runs beside your old one and matches it. You'll never rent software that almost fits again.`,
  ctaLabel: 'Get My Design-Partner Fitting',
  formSource: 'service_custom_software_home_builders',
  formPageSlug: 'custom-software-home-builders',
  formHeading: 'Claim a Design-Partner Fitting',
  stats: [
    { value: TRACK_RECORD.softwareCustomers, label: 'Software Customers' },
    { value: 'Mid-2027', label: 'CoConstruct Sunset Window' },
    { value: '100%', label: 'Yours — Code & Data' },
    { value: 'In Fitting', label: 'With a Custom Builder Now' },
  ],
  definitionHeading: 'What Is a Builder OS?',
  definition:
    'A builder OS is one system that runs a home building operation — takeoffs, estimates, draws, selections, change orders, sub scheduling, and the customer book — instead of a rented platform with spreadsheets taped around it. The spine of ours is simple: the takeoff line IS the estimate line. Measure it once, and that same line flows into the estimate, the draw schedule, and any change order — nothing gets retyped, so nothing drifts. Ask it questions in plain English — which selections are overdue, which draw comes next, which subs are booked this week — and it answers from your own jobs, not a manual. And at the end, you own it. The code, the data, everything.',
  includedHeading: 'What the Builder OS Is Built Around',
  included: [
    {
      title: 'The Takeoff Line Is the Estimate Line',
      detail:
        'Measure it once. The same line carries through takeoff, estimate, draw schedule, and change order — no retyping between tools, no numbers quietly drifting apart.',
    },
    {
      title: 'Draws & Draw Schedules',
      detail:
        'Draw schedules built from the same lines as the estimate, so what you bill the bank matches what you priced the job at — and you always know which draw is next.',
    },
    {
      title: 'Selections',
      detail:
        'Allowances, deadlines, and client decisions in one place instead of scattered across email threads — so a late selection never stalls a job silently.',
    },
    {
      title: 'Change Orders',
      detail:
        'Priced from the same lines as the estimate, put in front of the client, signed, and tracked — so scope creep shows up on paper instead of eating your margin.',
    },
    {
      title: 'Sub Scheduling',
      detail:
        'Who is on which job on which day, in one board — instead of living in one person’s head and a stack of text messages.',
    },
    {
      title: 'You Own It',
      detail:
        'Month-to-month, no contracts. You own the code, the data, and the system. If we ever part ways, it stays yours and keeps running.',
    },
  ],
  approachHeading: 'How a Design-Partner Fitting Works',
  approach: [
    {
      step: '01',
      title: 'The Fitting',
      detail:
        'We sit down with you and map how a job actually runs — from the first takeoff to the final draw, including everything that lives in spreadsheets and email. That becomes the blueprint.',
    },
    {
      step: '02',
      title: 'Built Beside Your Old System',
      detail:
        'CoConstruct — or whatever you run today — keeps running. The new system runs quietly beside it, and the two are checked against each other. As a design partner, what you hit in the field shapes what gets built next.',
    },
    {
      step: '03',
      title: 'You Say Go',
      detail:
        'Nothing switches until the side-by-side numbers have proven themselves and you give the word — on your schedule, well ahead of the sunset, not in a last-minute scramble.',
    },
    {
      step: '04',
      title: 'We Stay On',
      detail:
        'Nightly backups, support you can actually call, and new features as your operation grows. Local, reachable, in person when you need us.',
    },
  ],
  audienceHeading: 'Who This Is For',
  audience: [
    'Builders on CoConstruct facing the announced retirement',
    'Custom home builders renting Buildertrend-class software',
    'Builders running draws and selections out of spreadsheets and email',
    'Builders whose takeoffs get retyped into estimates by hand',
    'Builders priced out by traditional custom software quotes',
    'Builders who want to shape their system instead of settling for someone else’s',
  ],
  chipsHeading: 'What It Runs',
  chips: [
    'Takeoffs',
    'Estimates',
    'Draw Schedules',
    'Selections',
    'Change Orders',
    'Sub Scheduling',
    'Customer Book',
    'AI Assistant',
  ],
  result: {
    headline: 'The Design-Partner Deal',
    stats: [
      { value: 'Fitted', label: 'Before the Sunset Hits' },
      { value: 'Shaped', label: 'Around How You Build' },
      { value: 'Owned', label: 'Code & Data, Outright' },
    ],
    narrative:
      'We are not going to show you a fake install count — the builder OS is in fitting with a custom home builder right now, and design partners come in the same door. We map how your jobs actually run, you shape what gets built, and the system takes the shape of your operation while CoConstruct winds down. When it goes dark, you are not scrambling for a seat in someone else’s software — you are running a system that is already yours. And the rule never bends: nothing switches until the new system has run beside your old one and matched it.',
  },
  mistakesHeading: 'How Builders Get Burned Switching Software',
  mistakes: [
    {
      title: 'Waiting for the deadline',
      detail:
        'Every builder on CoConstruct has to move by roughly mid-2027. Wait, and you migrate in a crowd — mid-build, in a hurry, taking whatever seat is open. Move early and the switch happens on your schedule.',
    },
    {
      title: 'Retyping the takeoff',
      detail:
        'When the takeoff lives in one tool and the estimate in another, every retype is a chance for the numbers to drift — and drift comes out of your margin. One line, measured once, ends that.',
    },
    {
      title: 'Renting the replacement',
      detail:
        'Trading a retired platform for another rented seat puts you right back where you started: someone else’s roadmap, someone else’s price changes, your data behind someone else’s login.',
    },
    {
      title: 'Rip-and-replace mid-build',
      detail:
        'Switching job software with houses in progress is how records get lost. We never rip anything out — the new system proves itself beside the old one first, and you switch when the numbers match.',
    },
  ],
  pricingHeading: 'What It Costs',
  pricing:
    `The whole price, printed right here: ${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. Migrating your existing records — jobs, clients, selections, financial history — is part of that setup, not a separate invoice. No per-seat fees, no surprise add-ons, no contracts — month-to-month, and if we ever part ways, the system stays yours. And it is guaranteed: ${OS_PRICING.guarantee} Traditional custom software development is typically quoted in the five and six figures before maintenance ever starts — a price that puts ownership out of reach for most builders. This is custom-software ownership without the custom-software invoice.`,
  whyUsHeading: 'Why Builders Are Talking to Found It',
  whyUs: [
    `${TRACK_RECORD.softwareCustomers} software customers and growing — real local businesses running or being fitted on their own systems right now.`,
    'Straight answers about what is built: the builder OS is in fitting with a custom home builder today. We recruit design partners — we do not invent install counts.',
    `Guaranteed: ${OS_PRICING.guarantee} Month-to-month, no contracts — the system has to earn it every month.`,
    `${TRACK_RECORD.yearsInBusiness} years building digital products and marketing systems for local businesses.`,
    'You own 100% of the code and the data. If we ever part ways, the system stays yours.',
    'Proven before it ships: the new system runs beside your old one until the two match, and you say go.',
    'Built-in AI that answers questions about your own jobs in plain English — draws, selections, schedules, all of it.',
  ],
  faqHeading: 'Home Builder Software FAQ',
  faq: [
    {
      question: 'Is Found It OS a CoConstruct alternative?',
      answer:
        'Yes — and an honest one. CoConstruct is being retired, so every builder on it has to move somewhere. Most of the alternatives are another rented seat. This is the other path: a builder OS fitted to how you run jobs — draws, selections, change orders, sub scheduling — that you own outright. It is in fitting with a custom home builder right now, and we are recruiting design-partner builders to shape it before the sunset.',
    },
    {
      question: 'What happens when CoConstruct shuts down?',
      answer:
        'The announced window means builders need to be off it by roughly mid-2027. If you wait, you migrate in a rush alongside everyone else. If you start a fitting now, your records get professionally migrated in, the new system proves itself beside CoConstruct while it still runs, and the switch happens on your schedule — not the sunset’s.',
    },
    {
      question: 'What does "design partner" mean?',
      answer:
        'It means you get fitted first and the system takes your shape. We map how your jobs actually run, build around that, and what you hit in the field drives what gets built next. In return you get a system molded to your operation — and you own it, code and data, when it is done.',
    },
    {
      question: 'Does it handle draws, selections, and change orders?',
      answer:
        'That is the core of it. Draws, selections, change orders, and sub scheduling all hang off one spine: the takeoff line IS the estimate line. Measure once, and the same number flows to the estimate, the draw schedule, and any change order without being retyped.',
    },
    {
      question: 'How is this different from Buildertrend?',
      answer:
        'Buildertrend is a capable platform, and plenty of builders run on it. The difference is fit and ownership: rented software is built for every builder, so it fits none of them exactly, and your data lives behind someone else’s login. A fitted builder OS is built around your operation, and you own the code and the data outright.',
    },
    {
      question: 'Can I keep using CoConstruct while this gets built?',
      answer:
        'Yes — that is the rule, not the exception. Your current system keeps running while the new one runs beside it, and the two are checked against each other. Nothing switches until they match and you give the word. No rip-out weekend, no leap of faith, no houses caught mid-migration.',
    },
    {
      question: 'What does it cost?',
      answer:
        `${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup — and migrating your existing records is part of that setup. That is the whole number: no per-seat fees, no surprise add-ons, no contracts. And it is guaranteed: ${OS_PRICING.guarantee}`,
    },
  ],
  relatedReading: [
    { title: 'Found It OS — Own Your Whole System', href: '/foundit-os' },
    { title: 'Custom Software for Local Businesses', href: '/custom-software' },
    { title: 'Custom Software for Contractors', href: '/custom-software/contractors' },
    { title: 'Custom Software for Shed Builders', href: '/custom-software/shed-builders' },
  ],
  finalCtaHeadline: 'Get Fitted Before CoConstruct Goes Dark',
  finalCtaSub:
    `Tell us how your jobs run today — the takeoffs, the draw schedules, the selection emails, the change orders on sticky notes — and we will map what your own builder OS would look like. Design partners get fitted first and shape what gets built. Free, no obligation. And the system itself is guaranteed: ${OS_PRICING.guarantee}`,
};

export default function HomeBuildersPillar() {
  return <ServicePillar data={data} />;
}
