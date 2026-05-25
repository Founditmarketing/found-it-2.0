import type { Metadata } from 'next';
import { AIMarketingLPContent } from './content';
import { buildFAQSchema, buildLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'AI Marketing Automation | Built For You Locally',
  description:
    'Automate your lead generation, follow-ups, and content with custom AI systems built by a local team. Book your free in-person demo.',
  openGraph: {
    title: 'AI Marketing Automation | Built For You Locally',
    description:
      'Automate your lead generation, follow-ups, and content with custom AI systems built by a local team. Book your free in-person demo.',
    type: 'website',
    url: 'https://founditmarketing.com/lp/ai-marketing',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Marketing Automation | Built For You Locally',
    description: 'Automate your marketing with custom AI systems built by a local team.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/lp/ai-marketing' },
};

const faqItems = [
  { question: 'What exactly does AI marketing automation do?', answer: "It handles the tasks you don't have time for. Instant SMS responses to new leads, AI voice agents answering FAQs, and automated email sequences. It runs your pipeline 24/7." },
  { question: 'Do I need to be good with technology?', answer: "Not at all. We are a 'done-for-you' agency. We handle all the prompt engineering, API connections, and software setup. You just use the dashboard to see your new appointments." },
  { question: 'Is it better than hiring an assistant?', answer: "AI doesn't sleep, doesn't take vacations, and responds to a new lead within 5 seconds of them filling out a form on your site. For lead follow-up, it is significantly faster and more cost-effective." },
];

const faqSchema = buildFAQSchema(faqItems);
const localBusinessSchema = buildLocalBusinessSchema({
  description: 'AI marketing automation agency. Local team building custom AI sales pipelines.',
  areaServed: [
    { '@type': 'State', name: 'Louisiana' },
    { '@type': 'State', name: 'Texas' },
    { '@type': 'Country', name: 'United States' },
  ],
});

export default function AIMarketingLP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <AIMarketingLPContent />
    </>
  );
}
