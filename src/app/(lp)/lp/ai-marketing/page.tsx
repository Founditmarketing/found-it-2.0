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
  { question: 'What exactly does AI marketing automation do?', answer: "It handles the tasks you don't have time for. Instant SMS responses to new leads, AI voice agents answering FAQs, automated email sequences, and even AI generating your daily social media posts. It runs your pipeline 24/7." },
  { question: 'How much does it cost?', answer: "It depends on what we build for you, but we're month-to-month with no setup fees that lock you in. We'll give you a transparent flat price at your free demo — no surprises, no long contracts. Most local businesses spend less on this than on a single part-time hire." },
  { question: 'How fast can you launch it?', answer: "Most systems go live within 1–2 weeks of your strategy session. Simple lead-response automations can be running in days. We handle the entire build so there's nothing for you to set up." },
  { question: "What if it doesn't work? Am I locked in?", answer: "No. We're month-to-month with zero long-term contracts. If the AI system isn't generating ROI, you fire us — no penalties, no lock-in. We earn your business every single month." },
  { question: 'Does this replace my staff?', answer: "No — it frees them up. The AI handles the repetitive, time-sensitive work (instant lead replies, follow-ups, reminders) so your team can focus on closing and serving customers instead of chasing leads." },
  { question: 'What industries do you work with?', answer: "Local service businesses of all kinds — home services (HVAC, roofing, plumbing), medical and dental, auto, legal, retail, and more. If you rely on leads and appointments, the system fits." },
  { question: 'Do I need to be good with technology?', answer: "Not at all. We are a 'done-for-you' agency. We handle all the prompt engineering, API connections, and software setup. You just use the dashboard to see your new appointments." },
  { question: 'Is my data safe and private?', answer: "Yes. Your customer data stays in your own secure CRM — we never sell or share it. All messaging runs through compliant, permission-based channels, and you own your contacts at all times." },
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
