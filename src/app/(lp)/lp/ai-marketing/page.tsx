import type { Metadata } from 'next';
import { AIMarketingLPContent } from './content';
import { buildFAQSchema, buildServiceSchema, buildBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'AI Marketing Automation | Built For You Locally',
  description:
    'Automate your lead generation, follow-ups, and content with custom AI systems built by a local team. Book your free in-person demo.',
  openGraph: {
    title: 'AI Marketing Automation | Built For You Locally',
    description:
      'Automate your lead generation, follow-ups, and content with custom AI systems built by a local team. Book your free in-person demo.',
    type: 'website',
    url: 'https://www.founditsoftware.com/lp/ai-marketing',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Marketing Automation | Built For You Locally',
    description: 'Automate your marketing with custom AI systems built by a local team.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/ai-marketing' },
};

const faqItems = [
  { question: 'Is this just a chatbot, or can you automate more?', answer: "Way more than a chatbot. We automate lead follow-up by text and voice, your social media posting, SEO and content, Google Ads management, on-site chat and forms, and review requests. We build whichever pieces move the needle for your business and connect them into one system." },
  { question: 'What exactly does AI marketing automation do?', answer: "It handles the tasks you don't have time for: instant SMS and voice responses to new leads, automated email and follow-up sequences, AI-generated social posts and content, ad optimization, and review requests. It runs your whole pipeline 24/7." },
  { question: 'How much does it cost?', answer: "It depends on what we build for you, but we're month-to-month with no setup fees that lock you in. We'll give you a transparent flat price at your free demo — no surprises, no long contracts. Most local businesses spend less on this than on a single part-time hire." },
  { question: 'How fast can you launch it?', answer: "Most systems go live within 1–2 weeks of your strategy session. Simple lead-response automations can be running in days. We handle the entire build so there's nothing for you to set up." },
  { question: "What if it doesn't work? Am I locked in?", answer: "No. We're month-to-month with zero long-term contracts. If the AI system isn't generating ROI, you fire us — no penalties, no lock-in. We earn your business every single month." },
  { question: 'Does this replace my staff?', answer: "No — it frees them up. The AI handles the repetitive, time-sensitive work (instant lead replies, follow-ups, reminders) so your team can focus on closing and serving customers instead of chasing leads." },
  { question: 'What industries do you work with?', answer: "Local service businesses of all kinds — home services (HVAC, roofing, plumbing), medical and dental, auto, legal, retail, and more. If you rely on leads and appointments, the system fits." },
  { question: 'Do I need to be good with technology?', answer: "Not at all. We are a 'done-for-you' agency. We handle all the prompt engineering, API connections, and software setup. You just use the dashboard to see your new appointments." },
  { question: 'Is my data safe and private?', answer: "Yes. Your customer data stays in your own secure CRM — we never sell or share it. All messaging runs through compliant, permission-based channels, and you own your contacts at all times." },
];

const faqSchema = buildFAQSchema(faqItems);
const serviceSchema = buildServiceSchema({
  name: 'AI Marketing Automation',
  serviceType: 'Marketing Automation',
  description: 'Custom AI marketing automation built by a local team: instant lead follow-up, appointment setting, content, and ad optimization.',
  url: '/lp/ai-marketing',
});
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'AI Marketing Automation', url: '/lp/ai-marketing' },
]);

export default function AIMarketingLP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AIMarketingLPContent />
    </>
  );
}
