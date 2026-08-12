import type { Metadata } from 'next';
import { AppDevelopmentLPContent } from './content';
import { buildFAQSchema, buildServiceSchema, buildBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Custom App Development | Built Locally',
  description:
    'Custom mobile and web apps built by a local team. Fixed timelines, no scope creep, and you own the code. Get your free in-person app blueprint.',
  openGraph: {
    title: 'Custom App Development | Built Locally',
    description:
      'Custom mobile and web apps built by a local team. Fixed timelines, no scope creep, and you own the code. Get your free in-person app blueprint.',
    type: 'website',
    url: 'https://www.founditsoftware.com/lp/app-development',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom App Development | Built Locally',
    description: 'Custom mobile and web apps built by a local team. You own the code.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/app-development' },
};

const faqItems = [
  { question: 'How long does it take to build an app?', answer: "Most business utility and customer-facing apps take 8 to 12 weeks from kickoff to App Store launch. You'll get a firm, guaranteed timeline on our first call." },
  { question: 'How much does an app cost?', answer: "We quote a fixed price after the free blueprint, based on the exact features you need. No hourly billing, no scope-creep invoices. You approve the full number before any work begins." },
  { question: 'Who owns the code?', answer: "You do. You own the intellectual property, the source code, and the developer accounts. We build it, but it's 100% your asset." },
  { question: 'Do you build for both iOS and Android?', answer: "Yes. We use modern cross-platform frameworks to deploy native-feeling apps to both the Apple App Store and Google Play Store at once, saving you time and money." },
  { question: 'What happens after launch?', answer: "We don't disappear at go-live. We handle store submissions, monitor the launch, and offer simple maintenance plans for updates and new features as your business grows." },
  { question: 'Do I need a technical team to run it?', answer: "No. We build it to be maintained, document everything, and hand over clean accounts. If you ever bring development in-house later, your team inherits a tidy, fully owned codebase." },
];

const faqSchema = buildFAQSchema(faqItems);
const serviceSchema = buildServiceSchema({
  name: 'Custom App Development',
  serviceType: 'Mobile App Development',
  description: 'Custom mobile and web application development built by a local team. Fixed timelines, and clients own the code.',
  url: '/lp/app-development',
});
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'App Development', url: '/lp/app-development' },
]);

export default function AppDevelopmentLP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AppDevelopmentLPContent />
    </>
  );
}
