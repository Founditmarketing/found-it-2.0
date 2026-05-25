import type { Metadata } from 'next';
import { WebDesignLPContent } from './content';
import { buildFAQSchema, buildLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Web Design | Get a Website That Makes Your Phone Ring',
  description:
    'Custom websites that turn visitors into calls. Mobile-first, fast-loading, owned by you. Live in 6 weeks. Free concept call.',
  openGraph: {
    title: 'Web Design | Get a Website That Makes Your Phone Ring',
    description:
      'Custom websites that turn visitors into calls. Live in 6 weeks. Free concept call.',
    type: 'website',
    url: 'https://founditmarketing.com/lp/web-design',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design | Get a Website That Makes Your Phone Ring',
    description: 'Custom websites that turn visitors into calls. Live in 6 weeks.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/lp/web-design' },
};

const faqItems = [
  { question: 'How long does it take to build?', answer: "4 to 6 weeks from kickoff to launch. Larger sites with custom features extend to 8-10 weeks. You'll get a firm timeline on the first call." },
  { question: 'Who owns the website?', answer: "You do. Your domain, your code, your content, your hosting account. If you ever leave, you take everything. No lock-in, no hostage games." },
  { question: 'What if I need changes after launch?', answer: "60 days of free post-launch optimization is included. After that, most clients move to a maintenance plan starting at $250/mo. No long-term contracts." },
];

const faqSchema = buildFAQSchema(faqItems);
const localBusinessSchema = buildLocalBusinessSchema({
  description: 'Custom web design agency. Fast, mobile-first websites that generate leads.',
  areaServed: [
    { '@type': 'State', name: 'Louisiana' },
    { '@type': 'State', name: 'Texas' },
    { '@type': 'Country', name: 'United States' },
  ],
});

export default function WebDesignLP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <WebDesignLPContent />
    </>
  );
}
