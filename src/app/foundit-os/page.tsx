import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { OS_PRICING } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Found It OS — The AI Employee Your Business Owns',
  description:
    `Found It OS is custom software + AI employee, built around your business. It answers, it types, it chases what you're owed, and you own it outright. ${OS_PRICING.monthly}/mo plus ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. Alexandria, LA.`,
  alternates: { canonical: '/foundit-os' },
  openGraph: {
    title: 'Found It OS — Custom Operating Systems for Local Businesses | Found It Software',
    description:
      `One system for your whole business, built to fit it, and yours forever. ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}. ${OS_PRICING.promise}`,
    type: 'website',
    url: 'https://www.founditsoftware.com/foundit-os',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
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
    `Found It OS is a custom AI business operating system built one business at a time. Point of sale, inventory, customers, service tickets, website, and an AI employee that answers the phone, drafts follow-ups, and chases receivables, in one system the client owns outright. It runs beside the old system until the books match to the penny, so there is no rip-and-replace weekend. ${OS_PRICING.monthly} per month plus a one-time ${OS_PRICING.setup} for migration and setup.`,
  eyebrow: 'The Software Version of Your Business',
  headline: 'It Answers. It Types. It Chases.',
  headlineAccent: 'You Own It.',
  intro:
    `Custom software + AI employee, built around your business. It answers the phone, types the paperwork, and chases what you're owed. You own it outright — the code and the data.`,
  /* Hero paragraph OFF (Trevor 9/5: "wordy too much blaaaa info - use
     visual") — the sentence became the chip equation below; the machine
     above shows the rest. schemaDescription keeps the words for SEO. */
  heroChips: {
    items: ['Phone', 'Paperwork', 'Customers', 'Jobs', 'Books'],
    result: 'One System · Yours',
  },
  heroPriceLine: `${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup · Month-to-month · You own the code and data`,
  ctaLabel: 'Show Me Mine',
  /* No questionnaire on the demo page (Trevor 9/5: "why are you asking me
     so many questions") — the door leads to /fit; the quiz lives there. */
  ctaHref: '/fit',
  closeWithAsk: true,
  formSource: 'service_foundit_os',
  formPageSlug: 'foundit-os',
  formHeading: 'Start your Software Map',
  /* THE GATE (Trevor 8/16): the fit check stands where the open form stood —
     qualified gets the form, NOT A FIT gets the kind dismissal, no capture. */
  fitGate: true,
  stats: [
    { value: 'Live', label: 'Systems Running Now' },
    { value: 'To the ¢', label: 'Matched Every Night' },
    { value: '100%', label: 'Yours. Code & Data' },
    { value: 'None', label: 'Rip-and-Replace Weekend' },
  ],
  voiceDemo: true,
  driveOs: true,
  compareCtas: [
    { label: 'Compared to Grok', href: '/vs-grok' },
    { label: 'Compared to Viktor', href: '/vs-viktor' },
  ],
  reelTransition: 'That was a tire shop. This is a nursery. Every Found It OS is different, because every business is.',
  automationReel: true,
  /* Definition + audience + related-reading sections OFF (Trevor 9/5,
     communication law: let the machine speak). The definition text lives on
     in schemaDescription; heroDefinition answers on-page under the h1. */
  /* THE DEMO PAGE (Trevor 9/5: "if its a demo then thats what it needs to
     be"). included + approach + mistakes + trust sections OFF this page -
     the industry pillars, /owned-software and /security carry them. What
     stays is only what a visitor can DRIVE, HEAR, WATCH or DECIDE ON. */
  result: {
    headline: 'Before Anything Switches',
    stats: [
      { value: '2', label: 'Systems Running Side by Side' },
      { value: 'Nightly', label: 'Books Checked Against Books' },
      { value: '$0.00', label: 'Difference Before You Switch' },
    ],
    narrative:
      'The new system has to earn it. Nightly difference hits zero, then you say go.',
  },
  pricingHeading: 'The Whole Price',
  offerCard: {
    monthly: OS_PRICING.monthly,
    setup: OS_PRICING.setup,
    bullets: [
      'Month-to-month — no long-term contract',
      'Hosting, backups, support, security fixes',
      'No per-register or per-seat fees',
      'Major new divisions scoped in writing first',
      'The code and the data remain yours',
    ],
    promise: OS_PRICING.promise,
    kicker: 'The system earns the next month, every month.',
  },
  faqHeading: 'Found It OS FAQ',
  faqCompact: true,
  faq: [
    {
      question: 'What exactly is Found It OS?',
      answer:
        'One system for your whole business — register, inventory, customers, invoices, website — with an AI employee inside. You own it outright.',
    },
    {
      question: 'What does "AI employee" actually mean?',
      answer:
        'Work the system does itself: answers the phone, drafts follow-ups, chases receivables. Your people approve what matters. It never touches the books on its own.',
    },
    {
      question: 'What happens to my old system and my data?',
      answer:
        'Nothing yet. The old system keeps running while the new one runs beside it, checked nightly. You switch when the numbers match.',
    },
    {
      question: 'Who owns the system?',
      answer:
        'You do. The code, the data, all of it. If we ever part ways, it stays yours and keeps running.',
    },
    {
      question: 'What does it cost?',
      answer:
        `${OS_PRICING.monthly} a month, plus a one-time ${OS_PRICING.setup} for migration and setup. That is the whole of our bill. Third-party services that bill on their own — phone lines, card processing, AI usage — run on your accounts, in your name, listed in plain terms before you sign. No per-register fees, no surprise add-ons.`,
    },
    {
      question: "What if it doesn't work out?",
      answer:
        "Then you cancel with thirty days' notice. The system keeps running, and everything in it is still yours.",
    },
  ],
  finalCtaHeadline: 'See What Yours Would Do First',
  finalCtaSub:
    `Tell us how you run. If it's a fit, we show you what the AI takes off your people first. If not, we say so.`,
};

export default function FoundItOSPillar() {
  return <ServicePillar data={data} />;
}
