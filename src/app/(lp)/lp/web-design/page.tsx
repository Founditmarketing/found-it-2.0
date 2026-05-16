import type { Metadata } from 'next';
import { WebDesignLPContent } from './content';
import { buildFAQSchema, buildLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Custom Web Design Services | Found It Marketing',
  description:
    'Custom-coded websites for premium businesses across Louisiana and Texas. Built for conversion. Owned by you. See our portfolio.',
  openGraph: {
    title: 'Custom Web Design Services | Found It Marketing',
    description:
      'Custom-coded websites for premium businesses. No templates. No page builders. Built to convert, designed to last.',
    type: 'website',
    url: 'https://founditmarketing.com/lp/web-design',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Web Design Services | Found It Marketing',
    description:
      'Custom-coded websites for premium businesses. No templates. No page builders. Built to convert, designed to last.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/lp/web-design' },
};

const faqItems = [
  { question: "Who owns the website when it's built?", answer: 'You do. The site is built on your domain, your hosting (or ours if you prefer), and you have full administrative access from day one. No proprietary lock-ins, no hostage situations. If you ever leave, you keep everything.' },
  { question: 'What CMS do you use?', answer: 'It depends on what you need. For most premium builds we use Next.js with a headless CMS like Sanity or Payload — this gives you a clean editing experience plus blazing performance. For simpler sites we may use WordPress with a custom theme. We pick the stack that fits your team, not ours.' },
  { question: 'Do you handle hosting?', answer: 'Yes. We host on Vercel for Next.js builds and recommended managed WordPress hosting for WP sites. Hosting runs $25-$100/mo depending on traffic. You are welcome to host it yourself — we will hand off everything cleanly.' },
  { question: 'Can you redesign my existing site?', answer: "Yes. About 60% of our projects are redesigns. We audit what is working (don't break the SEO that is earning you traffic), identify what is not (slow load times, dead pages, weak conversion paths), and rebuild on a modern stack. Most redesigns ship in 4-6 weeks." },
  { question: 'How long does the full process take?', answer: "A full custom build typically runs 4-6 weeks from kickoff to launch. Larger sites with 25+ pages or complex integrations can extend to 8-10 weeks. We'll give you a firm timeline after the discovery call." },
  { question: 'What if I need changes after launch?', answer: 'Included in every build: 60 days of free post-launch optimization. After that, most clients move to a monthly maintenance plan starting at $250/mo — covers content updates, security patches, performance monitoring, and ongoing optimization. No long contracts.' },
];

const faqSchema = buildFAQSchema(faqItems);

const localBusinessSchema = buildLocalBusinessSchema({
  description: 'Custom web design and digital marketing agency serving businesses across Louisiana, Texas, and 48 states.',
  areaServed: [
    { '@type': 'State', name: 'Louisiana' },
    { '@type': 'State', name: 'Texas' },
    { '@type': 'Country', name: 'United States' },
  ],
});

export default function WebDesignLP() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <WebDesignLPContent />
    </>
  );
}
