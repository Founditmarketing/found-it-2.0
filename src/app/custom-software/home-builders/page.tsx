import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { OS_PRICING, TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'CoConstruct Alternative - Custom Home Builder Software',
  description:
    `CoConstruct is being retired. Own a builder OS fitted to you. Draws, selections, change orders. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup. ${OS_PRICING.promise}`,
  alternates: { canonical: '/custom-software/home-builders' },
  openGraph: {
    title: 'CoConstruct Alternative for Home Builders | Found It Software',
    description:
      `Every builder on CoConstruct has to move somewhere. Get fitted for a builder OS you own before it goes dark. Draws, selections, change orders, sub scheduling. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Month-to-month. Cancel anytime, the system stays yours.`,
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
    `A custom operating system for home builders. Draws, selections, change orders, sub scheduling, and takeoffs where the takeoff line is the estimate line. Built one builder at a time and owned outright by the client. Records are migrated in, and the new system runs beside the old one until the two match. In fitting with a custom home builder now, and recruiting design-partner builders ahead of the announced CoConstruct retirement. ${OS_PRICING.monthly} per month plus a one-time ${OS_PRICING.setup} migration and setup. Built to simplify the owner's life and make the business more profitable.`,
  eyebrow: 'Builder OS',
  headline: 'CoConstruct Is Being Retired.',
  headlineAccent: 'Own What Replaces It.',
  intro:
    `CoConstruct is being retired. Every builder on it has to move somewhere. The only question is whether you land in another rented seat or in a system you own. We are building a builder OS right now. Draws, selections, change orders, sub scheduling. The takeoff line IS the estimate line. Come in as a design partner, get fitted first, and shape the system around how you build. Own it outright before CoConstruct goes dark. Your records get migrated in, and nothing switches until the new system runs beside your old one and matches it.`,
  ctaLabel: 'Get My Design-Partner Fitting',
  formSource: 'service_custom_software_home_builders',
  formPageSlug: 'custom-software-home-builders',
  formHeading: 'Claim a Design-Partner Fitting',
  stats: [
    { value: 'Live', label: 'Real Systems Running Now' },
    { value: 'Mid-2027', label: 'CoConstruct Sunset Window' },
    { value: '100%', label: 'Yours, Code & Data' },
    { value: 'In Fitting', label: 'With a Custom Builder Now' },
  ],
  definitionHeading: 'What Is a Builder OS?',
  definition:
    'A builder OS is one system that runs a home building operation. Takeoffs, estimates, draws, selections, change orders, sub scheduling, and the customer book. Not a rented platform with spreadsheets taped around it. The spine is simple: the takeoff line IS the estimate line. Measure it once, and that same line flows into the estimate, the draw schedule, and any change order. Nothing gets retyped, so nothing drifts. Ask it questions in plain English. Which selections are overdue, which draw comes next, which subs are booked this week. It answers from your own jobs. And you own it. The code, the data, everything.',
  includedHeading: 'What the Builder OS Is Built Around',
  included: [
    {
      title: 'The Takeoff Line Is the Estimate Line',
      detail:
        'Measure it once. The same line carries through takeoff, estimate, draw schedule, and change order. No retyping, no numbers drifting apart.',
    },
    {
      title: 'Draws & Draw Schedules',
      detail:
        'Draw schedules built from the same lines as the estimate. What you bill the bank matches what you priced. You always know which draw is next.',
    },
    {
      title: 'Selections',
      detail:
        'Allowances, deadlines, and client decisions in one place instead of scattered email threads. A late selection never stalls a job silently.',
    },
    {
      title: 'Change Orders',
      detail:
        'Priced from the same lines as the estimate, signed, and tracked. Scope creep shows up on paper instead of eating your margin.',
    },
    {
      title: 'Sub Scheduling',
      detail:
        "Who is on which job on which day, on one board. Not in one person's head and a stack of texts.",
    },
    {
      title: 'You Own It',
      detail:
        'You own the code, the data, and the system. If we ever part ways, it stays yours and keeps running.',
    },
  ],
  approachHeading: 'How a Design-Partner Fitting Works',
  approach: [
    {
      step: '01',
      title: 'The Fitting',
      detail:
        'We sit down with you and map how a job really runs, from first takeoff to final draw, including the spreadsheets and email. That becomes the blueprint.',
    },
    {
      step: '02',
      title: 'Built Beside Your Old System',
      detail:
        'CoConstruct, or whatever you run today, keeps running. The new system runs beside it, and the two are checked against each other. What you hit in the field shapes what gets built next.',
    },
    {
      step: '03',
      title: 'You Say Go',
      detail:
        'Nothing switches until the side-by-side numbers prove out and you give the word. On your schedule, well ahead of the sunset.',
    },
    {
      step: '04',
      title: 'We Stay On',
      detail:
        'Nightly backups, support you can call, and new features as your operation grows. Local and reachable, in person when you need us.',
    },
  ],
  audienceHeading: 'Who This Is For',
  audience: [
    'Builders on CoConstruct facing the announced retirement',
    'Custom home builders renting Buildertrend-class software',
    'Builders running draws and selections out of spreadsheets and email',
    'Builders whose takeoffs get retyped into estimates by hand',
    'Builders priced out by traditional custom software quotes',
    "Builders who want to shape their system instead of settling for someone else's",
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
      'The builder OS is in fitting with a custom home builder right now. Design partners come in the same door. We map how your jobs run, you shape what gets built, and the system takes the shape of your operation while CoConstruct winds down. When it goes dark, you are already running a system that is yours. And the rule never bends: nothing switches until the new system runs beside your old one and matches it.',
  },
  mistakesHeading: 'How Builders Get Burned Switching Software',
  mistakes: [
    {
      title: 'Waiting for the deadline',
      detail:
        'Every builder on CoConstruct has to move by roughly mid-2027. Wait, and you migrate in a crowd, mid-build, in a hurry. Move early and the switch happens on your schedule.',
    },
    {
      title: 'Retyping the takeoff',
      detail:
        'When the takeoff lives in one tool and the estimate in another, every retype lets the numbers drift. Drift comes out of your margin. One line, measured once, ends that.',
    },
    {
      title: 'Renting the replacement',
      detail:
        "Trading a retired platform for another rented seat puts you right back where you started. Someone else's roadmap, someone else's prices, your data behind someone else's login.",
    },
    {
      title: 'Rip-and-replace mid-build',
      detail:
        'Switching job software with houses in progress is how records get lost. We never rip anything out. The new system proves itself beside the old one first.',
    },
  ],
  pricingHeading: 'What It Costs',
  pricing:
    `The whole price, printed right here: ${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. Migrating your records, jobs, clients, selections, and history is part of that setup, not a separate invoice. No per-seat fees, no add-ons. Month-to-month, and the system stays yours. One job: ${OS_PRICING.promise} Traditional custom software is usually quoted in the five and six figures. This is ownership without that invoice.`,
  whyUsHeading: 'Why Builders Choose Found It',
  whyUs: [
    'The builder OS is in fitting with a custom home builder today.',
    `Real local businesses run their own systems right now.`,
    'You own 100% of the code and the data.',
  ],
  faqHeading: 'Home Builder Software FAQ',
  faq: [
    {
      question: 'Is Found It OS a CoConstruct alternative?',
      answer:
        'Yes. CoConstruct is being retired, and most of the alternatives are another rented seat. This is the other path. A builder OS fitted to how you run jobs, and you own it outright. It is in fitting with a custom home builder now, and we are recruiting design partners before the sunset.',
    },
    {
      question: 'What happens when CoConstruct shuts down?',
      answer:
        "Builders need to be off it by roughly mid-2027. Wait, and you migrate in a rush with everyone else. Start a fitting now, and your records get migrated in while CoConstruct still runs. The switch happens on your schedule, not the sunset's.",
    },
    {
      question: 'What does "design partner" mean?',
      answer:
        'You get fitted first and the system takes your shape. We map how your jobs run, build around that, and what you hit in the field drives what gets built next. You own it, code and data, when it is done.',
    },
    {
      question: 'Does it handle draws, selections, and change orders?',
      answer:
        'That is the core of it. Draws, selections, change orders, and sub scheduling all hang off one spine: the takeoff line IS the estimate line. Measure once, and the same number flows everywhere without being retyped.',
    },
    {
      question: 'How is this different from Buildertrend?',
      answer:
        "Buildertrend is a capable platform. The difference is fit and ownership. Rented software is built for every builder, so it fits none exactly, and your data lives behind someone else's login. A fitted builder OS is built around your operation, and you own it outright.",
    },
    {
      question: 'Can I keep using CoConstruct while this gets built?',
      answer:
        'Yes, that is the rule. Your current system keeps running while the new one runs beside it. Nothing switches until they match and you give the word. No house gets caught mid-migration.',
    },
    {
      question: 'What does it cost?',
      answer:
        `${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. Migrating your records is part of that setup. That is the whole number. No per-seat fees, no surprise add-ons.`,
    },
  ],
  relatedReading: [
    { title: 'Found It OS - Own Your Whole System', href: '/foundit-os' },
    { title: 'Custom Software for Local Businesses', href: '/custom-software' },
    { title: 'Custom Software for Contractors', href: '/custom-software/contractors' },
    { title: 'Custom Software for Shed Builders', href: '/custom-software/shed-builders' },
  ],
  finalCtaHeadline: 'Get Fitted Before CoConstruct Goes Dark',
  finalCtaSub:
    `Tell us how your jobs run today. The takeoffs, the draw schedules, the selection emails, the change orders on sticky notes. We will show you what your own builder OS would look like. Design partners get fitted first and shape what gets built.`,
};

export default function HomeBuildersPillar() {
  return <ServicePillar data={data} />;
}
