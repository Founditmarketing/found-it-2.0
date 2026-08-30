import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Custom App Development for Local Businesses',
  description:
    'Custom iOS, Android, and web apps from a local team in Alexandria, LA. In-person blueprint, fixed price, and you own 100% of the code.',
  alternates: { canonical: '/app-development' },
  openGraph: {
    title: 'Custom App Development for Local Businesses | Found It Software',
    description:
      'Native-feeling iOS and Android apps built by a local team. Fixed timelines, and you own the code.',
    type: 'website',
    url: 'https://www.founditsoftware.com/app-development',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const data: PillarData = {
  name: 'App Development',
  slug: '/app-development',
  serviceType: 'Mobile App Development',
  schemaDescription:
    'Custom mobile and web app development by a local team. iOS and Android, in-person blueprints, fixed prices, and clients own the code. Alexandria, LA.',
  eyebrow: 'Custom App Development',
  headline: 'Custom Apps Built Locally,',
  headlineAccent: 'And You Own the Code.',
  intro:
    'We blueprint your app in person, quote a fixed price, and hand you code you own 100%. Built by a local team you can actually reach.',
  ctaLabel: 'Get My Free App Blueprint',
  formSource: 'service_app_dev',
  formPageSlug: 'app-development',
  formHeading: 'Get Your Free App Blueprint',
  stats: [
    { value: TRACK_RECORD.yearsInBusiness, label: 'Years Building' },
    { value: '8-12 Wk', label: 'Typical Timeline' },
    { value: '100%', label: 'Code You Own' },
  ],
  definitionHeading: 'What Goes Into a Custom App?',
  definition:
    'Custom app development means building software around how your business runs. The invoices, the schedule, the parts counter. A good build starts with a blueprint: every screen and flow mapped before any code. Then the build, store submission, and a clean handover.',
  includedHeading: 'What Every App Build Includes',
  included: [
    { title: 'In-Person Blueprint', detail: 'We map every screen and flow with you before any code. So the quote holds.' },
    { title: 'iOS + Android', detail: 'One build ships native-feeling apps to the App Store and Google Play.' },
    { title: 'Fixed-Price Quote', detail: 'You approve the full number up front. No hourly billing, no surprise invoices.' },
    { title: 'Integrations', detail: 'We connect the tools you already use: payments, CRM, scheduling, and more.' },
    { title: 'Store Submission', detail: 'We handle App Store and Google Play submission and watch the launch.' },
    { title: 'You Own Everything', detail: 'Source code, IP, and developer accounts are yours. Bring it in-house anytime.' },
  ],
  approachHeading: 'How We Build Your App',
  approach: [
    { step: '01', title: 'Blueprint', detail: 'We sit down, in person when local, and whiteboard the whole build.' },
    { step: '02', title: 'Fixed Quote', detail: 'A fixed price and a firm date, based on the features you mapped.' },
    { step: '03', title: 'Build', detail: 'We build with regular check-ins. You see working screens, not status reports.' },
    { step: '04', title: 'Launch & Support', detail: 'We handle store submission, watch the launch, and offer simple maintenance plans.' },
  ],
  audienceHeading: "Who This Is For",
  audience: [
    'Businesses that have outgrown off-the-shelf software',
    'Owners who want a customer-facing or internal-tool app',
    'Companies burned by unreachable overseas dev shops',
    'Anyone who wants to own their code and IP outright',
  ],
  chipsHeading: 'How We Build',
  chips: ['iOS', 'Android', 'Web Apps', 'API Integrations', 'App Store + Google Play'],
  mistakesHeading: 'Why App Projects Go Wrong',
  mistakes: [
    { title: 'No real blueprint', detail: 'Building before mapping brings surprises. We map everything first, so the quote holds.' },
    { title: 'Hourly billing with no ceiling', detail: 'Open-ended hourly contracts balloon. We quote a fixed price you approve up front.' },
    { title: 'Overseas time zones and language gaps', detail: 'Midnight calls and missed expectations kill momentum. We are local and reachable through launch.' },
    { title: 'You do not own the code', detail: 'Many shops keep you locked in. We hand over the code, IP, and accounts. Yours.' },
  ],
  pricingHeading: 'What to Expect',
  pricing:
    'Most apps take 8 to 12 weeks from kickoff to launch. You get a fixed price after the free blueprint, approve the full number before any work begins, and own the finished codebase when it ships.',
  whyUsHeading: 'Why Businesses Choose Found It Software',
  whyUs: [
    `${TRACK_RECORD.yearsInBusiness} years building digital products and marketing systems.`,
    '2026 CLEDA Highest Traded Revenue Award winner.',
    'You own 100% of the source code, IP, and developer accounts.',
    'Fixed prices and firm dates. No scope creep.',
    'A local team you can actually reach, through launch and beyond.',
    'In-person blueprints across Louisiana and East Texas.',
  ],
  faqHeading: 'App Development FAQ',
  faq: [
    { question: 'How long does it take to build an app?', answer: 'Most take 8 to 12 weeks from kickoff to launch. You get a firm date on the first call.' },
    { question: 'How much does an app cost?', answer: 'We quote a fixed price after the free blueprint. You approve the full number before any work begins.' },
    { question: 'Who owns the code?', answer: 'You do. The code, the IP, and the developer accounts are 100% yours.' },
    { question: 'Do you build for both iOS and Android?', answer: 'Yes. One build ships to both the App Store and Google Play.' },
    { question: 'Do I need a technical team to run it?', answer: 'No. We build it to be maintained and hand over clean, documented code and accounts.' },
  ],
  relatedReading: [
    { title: 'How Every Fitting Starts', href: '/blog/what-is-a-software-map' },
    { title: 'The Rent Isn’t the Problem. The Hostage Is.', href: '/blog/rented-software-no-data-rights' },
  ],
  finalCtaHeadline: 'Get a Free App Blueprint',
  finalCtaSub: 'Tell us what you want to build. We will map the features, the date, and a fixed price, in person if you are local. You leave with the blueprint either way.',
};

export default function AppDevelopmentPillar() {
  return <ServicePillar data={data} />;
}
