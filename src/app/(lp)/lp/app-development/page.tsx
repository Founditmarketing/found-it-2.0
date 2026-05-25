import type { Metadata } from 'next';
import { AppDevelopmentLPContent } from './content';
import { buildFAQSchema, buildLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Custom App Development | Built Locally',
  description:
    'Custom mobile and web apps built by a local team. Fixed timelines, no scope creep, and you own the code. Get your free in-person app blueprint.',
  openGraph: {
    title: 'Custom App Development | Built Locally',
    description:
      'Custom mobile and web apps built by a local team. Fixed timelines, no scope creep, and you own the code. Get your free in-person app blueprint.',
    type: 'website',
    url: 'https://founditmarketing.com/lp/app-development',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom App Development | Built Locally',
    description: 'Custom mobile and web apps built by a local team. You own the code.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/lp/app-development' },
};

const faqItems = [
  { question: 'How long does it take to build an app?', answer: "Most business utility and customer-facing apps take 8 to 12 weeks from kickoff to App Store launch. You'll get a firm, guaranteed timeline on our first call." },
  { question: 'Who owns the code?', answer: "You do. You own the intellectual property, the source code, and the developer accounts. We build it, but it's 100% your asset." },
  { question: 'Do you build for both iOS and Android?', answer: "Yes. We use modern cross-platform frameworks to deploy native-feeling apps to both the Apple App Store and Google Play Store simultaneously, saving you time and money." },
];

const faqSchema = buildFAQSchema(faqItems);
const localBusinessSchema = buildLocalBusinessSchema({
  description: 'Custom app development agency. Mobile and web applications built locally.',
  areaServed: [
    { '@type': 'State', name: 'Louisiana' },
    { '@type': 'State', name: 'Texas' },
    { '@type': 'Country', name: 'United States' },
  ],
});

export default function AppDevelopmentLP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <AppDevelopmentLPContent />
    </>
  );
}
