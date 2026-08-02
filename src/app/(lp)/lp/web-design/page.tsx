import type { Metadata } from 'next';
import { WebDesignLPContent } from './content';
import { buildFAQSchema, buildServiceSchema, buildBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Web Design | Get a Website That Makes Your Phone Ring',
  description:
    'Custom websites that turn visitors into calls. Mobile-first, fast-loading, owned by you. Live in 2 weeks or less. Free concept call.',
  openGraph: {
    title: 'Web Design | Get a Website That Makes Your Phone Ring',
    description:
      'Custom websites that turn visitors into calls. Live in 2 weeks or less. Free concept call.',
    type: 'website',
    url: 'https://founditmarketing.com/lp/web-design',
    images: [{ url: '/og-image-v2.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design | Get a Website That Makes Your Phone Ring',
    description: 'Custom websites that turn visitors into calls. Live in 2 weeks or less.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/web-design' },
};

const faqItems = [
  { question: 'How long does it take to build?', answer: "2 weeks or less from kickoff to launch. Larger sites with custom features may take slightly longer, but you'll get a firm timeline on the first call." },
  { question: 'How much does a new website cost?', answer: "Most local business sites land in a clear, flat range we'll quote you up front. No hourly surprises, no scope-creep invoices. You'll know the full price before you commit to anything." },
  { question: 'Who owns the website?', answer: "You do. Your domain, your code, your content, your hosting account. If you ever leave, you take everything. No lock-in, no hostage games." },
  { question: 'Will my new site actually show up on Google?', answer: "Yes. Every build ships with the technical SEO foundation in place: fast load times, clean structure, mobile-first design, and proper schema. It's built to be found, not just to look good." },
  { question: 'Do you write the content and handle photos?', answer: "We can. We'll write conversion-focused copy and guide your photos (or arrange them). You approve everything before it goes live." },
  { question: 'What if I need changes after launch?', answer: "60 days of free post-launch optimization is included. After that, most clients move to a maintenance plan starting at $250/mo. No long-term contracts." },
  { question: 'What happens if you miss the launch date?', answer: "If your site isn't ready to launch on the date we promise, we take $500 off the final invoice. We put our money where our timeline is." },
];

const faqSchema = buildFAQSchema(faqItems);
const serviceSchema = buildServiceSchema({
  name: 'Web Design & Development',
  serviceType: 'Web Design',
  description: 'Custom, conversion-focused web design. Fast, mobile-first websites that generate leads. Clients own the code.',
  url: '/lp/web-design',
});
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Web Design', url: '/lp/web-design' },
]);

export default function WebDesignLP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <WebDesignLPContent />
    </>
  );
}
