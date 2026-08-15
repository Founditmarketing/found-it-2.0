import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Custom App Development for Local Businesses',
  description:
    'Custom mobile and web app development from a local team with 13+ years in marketing. Native-feeling iOS and Android apps, fixed timelines, and you own 100% of the code. Based in Alexandria, LA.',
  alternates: { canonical: '/app-development' },
  openGraph: {
    title: 'Custom App Development for Local Businesses | Found It Marketing',
    description:
      'Native-feeling iOS and Android apps built by a local team. Fixed timelines, and you own the code.',
    type: 'website',
    url: 'https://www.founditsoftware.com/app-development',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const data: PillarData = {
  name: 'App Development',
  slug: '/app-development',
  serviceType: 'Mobile App Development',
  schemaDescription:
    'Custom mobile and web application development built by a local team. Native-feeling iOS and Android apps with in-person blueprinting, fixed-price timelines, and full client ownership of the codebase. Built one business at a time in Alexandria, LA.',
  eyebrow: 'Custom App Development',
  headline: 'Custom Apps Built Locally —',
  headlineAccent: 'And You Own the Code.',
  intro:
    `Found It Marketing builds custom iOS, Android, and web apps with a local team you can actually reach. With ${TRACK_RECORD.yearsInBusiness} years building digital products, we blueprint your app in person, quote a fixed price, and hand over a clean codebase you own 100%. No overseas midnight calls, no scope-creep surprises.`,
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
    'Custom app development means building software tailored to exactly how your business works — not forcing your process into off-the-shelf software. A good build starts with a blueprint (the features, screens, and flows mapped before any code), then native-feeling development for iOS and Android, integrations with the tools you already use, store submission, and a clean handover. At Found It Marketing we do the blueprint in person, quote a fixed price, and you own the source code and developer accounts at the end.',
  includedHeading: 'What Every App Build Includes',
  included: [
    { title: 'In-Person Blueprint', detail: 'We map every feature, screen, and flow with you before a line of code is written — so the quote is firm.' },
    { title: 'iOS + Android', detail: 'Modern cross-platform development for native-feeling apps on both the App Store and Google Play.' },
    { title: 'Fixed-Price Quote', detail: 'You approve the full number up front. No hourly billing, no scope-creep invoices.' },
    { title: 'Integrations', detail: 'We connect the tools you already use — payments, CRM, scheduling, notifications, and more.' },
    { title: 'Store Submission', detail: 'We handle App Store and Google Play submission and monitor the launch.' },
    { title: 'You Own Everything', detail: 'Source code, IP, and developer accounts are yours. Bring it in-house anytime.' },
  ],
  approachHeading: 'How We Build Your App',
  approach: [
    { step: '01', title: 'Blueprint', detail: 'We sit down (in person when local) and whiteboard the entire build, features, and flows.' },
    { step: '02', title: 'Fixed Quote', detail: 'You get a guaranteed timeline and fixed price based on the exact features you need.' },
    { step: '03', title: 'Build', detail: 'We develop native-feeling apps for iOS and Android with regular check-ins.' },
    { step: '04', title: 'Launch & Support', detail: 'We handle store submissions, monitor launch, and offer simple maintenance plans.' },
  ],
  audienceHeading: "Who This Is For",
  audience: [
    'Businesses that have outgrown off-the-shelf software',
    'Owners who want a customer-facing or internal-tool app',
    'Companies burned by unreachable overseas dev shops',
    'Teams that need integrations with their existing tools',
    'Anyone who wants to own their code and IP outright',
    'Local businesses that value an in-person blueprint',
  ],
  chipsHeading: 'How We Build',
  chips: ['iOS', 'Android', 'Cross-Platform', 'Web Apps', 'API Integrations', 'App Store + Google Play'],
  mistakesHeading: 'Why App Projects Go Wrong',
  mistakes: [
    { title: 'No real blueprint', detail: 'Building before scoping leads to surprises and overruns. We map everything first, so the quote holds.' },
    { title: 'Hourly billing with no ceiling', detail: 'Open-ended hourly contracts balloon. We quote a fixed price you approve up front.' },
    { title: 'Overseas time zones and language gaps', detail: 'Midnight calls and missed expectations kill momentum. We are local and reachable through launch.' },
    { title: 'You do not own the code', detail: 'Many shops keep you locked in. We hand over the source code, IP, and accounts — they are yours.' },
  ],
  pricingHeading: 'What to Expect',
  pricing:
    'Most business utility and customer-facing apps take 8 to 12 weeks from kickoff to launch. We quote a fixed price after the free blueprint, based on the exact features you need — no hourly billing and no scope-creep invoices. You approve the full number before any work begins, and you own the finished codebase.',
  whyUsHeading: 'Why Businesses Choose Found It Marketing',
  whyUs: [
    `${TRACK_RECORD.yearsInBusiness} years building digital products and marketing systems.`,
    '2026 CLEDA Highest Traded Revenue Award winner.',
    'You own 100% of the source code, IP, and developer accounts.',
    'Fixed-price quotes and guaranteed timelines — no scope creep.',
    'A local team you can actually reach, through launch and beyond.',
    'In-person blueprinting for businesses across Louisiana and East Texas.',
  ],
  faqHeading: 'App Development FAQ',
  faq: [
    { question: 'How long does it take to build an app?', answer: 'Most business utility and customer-facing apps take 8 to 12 weeks from kickoff to App Store launch. You will get a firm, guaranteed timeline on our first call.' },
    { question: 'How much does an app cost?', answer: 'We quote a fixed price after the free blueprint, based on the exact features you need. No hourly billing, no scope-creep invoices. You approve the full number before any work begins.' },
    { question: 'Who owns the code?', answer: 'You do. You own the intellectual property, the source code, and the developer accounts. We build it, but it is 100% your asset.' },
    { question: 'Do you build for both iOS and Android?', answer: 'Yes. We use modern cross-platform frameworks to deploy native-feeling apps to both the Apple App Store and Google Play Store at once.' },
    { question: 'Do I need a technical team to run it?', answer: 'No. We build it to be maintained, document everything, and hand over clean accounts. Your team inherits a tidy, fully owned codebase if you ever bring development in-house.' },
  ],
  relatedReading: [
    { title: 'Stop Fearing AI. Start Weaponizing It.', href: '/blog/weaponize-ai' },
  ],
  finalCtaHeadline: 'Get a Free App Blueprint',
  finalCtaSub: 'Tell us what you want to build and we will map the features, timeline, and a fixed price — in person if you are local. No pitch, no obligation.',
};

export default function AppDevelopmentPillar() {
  return <ServicePillar data={data} />;
}
