import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'AI Search Optimization & SEO (GEO) for Local Businesses',
  description:
    'Generative Engine Optimization (GEO) and SEO. Get recommended by ChatGPT, Perplexity, and Google AI. 13+ years in marketing. Alexandria, LA.',
  alternates: { canonical: '/ai-search-optimization' },
  openGraph: {
    title: 'AI Search Optimization & SEO (GEO) | Found It Software',
    description:
      'Get recommended by ChatGPT, Perplexity, and Google AI. Structured data plus local SEO.',
    type: 'website',
    url: 'https://www.founditsoftware.com/ai-search-optimization',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const data: PillarData = {
  name: 'AI Search Optimization & SEO',
  slug: '/ai-search-optimization',
  serviceType: 'Generative Engine Optimization',
  schemaDescription:
    'Generative Engine Optimization (GEO) and SEO that make a business the answer on ChatGPT, Perplexity, and Google AI. Structured data, local SEO, and content. 13+ years in marketing.',
  eyebrow: 'AI Search Optimization & SEO',
  // 8/18 audit: the visitor's actual question runs the page — not GEO jargon.
  headline: 'When Somebody Asks ChatGPT Who to Hire,',
  headlineAccent: 'Does It Say You?',
  intro:
    `Search is moving from blue links to AI answers. We pair classic SEO with Generative Engine Optimization (GEO) so ChatGPT, Perplexity, and Google AI recommend you. With ${TRACK_RECORD.yearsInBusiness} years in marketing, we build the signals AI engines trust.`,
  ctaLabel: 'Get My Free Visibility Audit',
  formSource: 'service_ai_search',
  formPageSlug: 'ai-search-optimization',
  formHeading: 'Get Your Free AI Visibility Audit',
  stats: [
    { value: TRACK_RECORD.yearsInBusiness, label: 'Years in Marketing' },
    { value: TRACK_RECORD.googleRating, label: 'Google Rating' },
  ],
  definitionHeading: 'What Is GEO (Generative Engine Optimization)?',
  definition:
    'Generative Engine Optimization (GEO) means setting up your online presence so AI engines like ChatGPT, Perplexity, Google AI Overviews, and Gemini recommend your business. Old SEO fights for a spot in a list of links. GEO fights to be the one answer. It takes clean structured data, consistent citations, and content the models can trust.',
  includedHeading: 'What AI Search Optimization Includes',
  included: [
    { title: 'AI Visibility Audit', detail: 'We show you where AI recommends you today, and where your competitors win instead.' },
    { title: 'Entity & Structured Data', detail: 'We build clean structured data so AI knows who you are and what you do.' },
    { title: 'Local SEO', detail: 'Google Business Profile work, citations, and reviews to win the map pack.' },
    { title: 'Topical Authority Content', detail: 'Content that makes you the expert AI cites.' },
    { title: 'Citations & Consistency', detail: 'Same name, address, and phone everywhere on the web. AI checks.' },
    { title: 'Monthly Reporting', detail: 'Where AI recommends you, where it does not yet, and what we are doing about it.' },
  ],
  approachHeading: 'How We Make You Visible to AI',
  approachIntro:
    'AI engines answer with data they trust. We give them clean signals so they recommend you.',
  approach: [
    { step: '01', title: 'Audit', detail: 'We check how ChatGPT, Perplexity, Google AI, and Gemini describe you today.' },
    { step: '02', title: 'Structure', detail: 'We build the schema and citations that help AI understand your business.' },
    { step: '03', title: 'Author', detail: 'We write content that proves you know the topics you want to own.' },
    { step: '04', title: 'Track', detail: 'We track AI mentions and search visibility every month.' },
  ],
  audienceHeading: 'Who Should Invest in GEO Now',
  audience: [
    'Businesses whose customers research on ChatGPT or Google AI',
    'Companies losing visibility as AI Overviews replace blue links',
    'Local businesses fighting aggregators in the map pack',
    'Brands that rank on Google but are invisible to AI',
    'Early movers who want to own their category before competitors',
    'Anyone who wants measurable AI + organic visibility reporting',
  ],
  chipsHeading: 'Where We Make You Visible',
  chips: ['Google AI Overviews', 'ChatGPT', 'Perplexity', 'Gemini', 'Google Maps', 'Bing / Copilot'],
  mistakesHeading: 'Why Most Businesses Are Invisible to AI',
  mistakes: [
    { title: 'No structured data', detail: 'Without clean schema, AI cannot say who you are or what you do. We fix that first.' },
    { title: 'Inconsistent name, address, phone', detail: 'Mismatched business details across the web make AI trust you less. We fix them.' },
    { title: 'Thin, sales-only content', detail: 'AI cites useful content. We build depth on the subjects you want to own.' },
    { title: 'Treating AI search like 2015 SEO', detail: 'Ranking #1 on Google no longer means AI recommends you. We run both playbooks.' },
  ],
  pricingHeading: 'What to Expect',
  pricing:
    'GEO and SEO are monthly programs with simple flat pricing and no setup fees. Most clients see first AI mentions in 60 to 90 days, and steady visibility in 4 to 6 months. If you leave, you keep all the work.',
  whyUsHeading: 'Why Businesses Choose Found It',
  whyUs: [
    `${TRACK_RECORD.yearsInBusiness} years in marketing and a GEO-first approach.`,
    '2026 CLEDA Highest Traded Revenue Award winner.',
    'We run classic local SEO and AI visibility at the same time.',
    'If you leave, you keep all the work. Content, schema, citations.',
    'No long-term contracts. Month-to-month. Cancel anytime.',
    'Monthly reports you can read, not vanity numbers.',
  ],
  faqHeading: 'AI Search & SEO FAQ',
  faq: [
    { question: 'What is AI search optimization (GEO)?', answer: 'It makes your business the answer when people ask ChatGPT, Perplexity, or Google AI who to hire. AI uses different signals than blue-link search.' },
    { question: 'Is traditional SEO dead?', answer: 'No. But ranking #1 on Google no longer means AI recommends you. You need both. We run both.' },
    { question: 'How long until I show up in AI search?', answer: 'First AI mentions usually show in 60 to 90 days. Steady visibility takes 4 to 6 months.' },
    { question: "How do I know it's working?", answer: 'You get a monthly report. It shows where AI recommends you, where it does not yet, and what we are doing about it.' },
    { question: 'Is there a contract?', answer: 'No. Month-to-month, cancel anytime with 30 days notice. If you leave, you keep all the work.' },
  ],
  relatedReading: [
    { title: 'How Every Fitting Starts', href: '/blog/what-is-a-software-map' },
    { title: 'The Rent Isn’t the Problem. The Hostage Is.', href: '/blog/rented-software-no-data-rights' },
  ],
  finalCtaHeadline: 'Get a Free AI Visibility Audit',
  finalCtaSub: 'See where AI sends your customers today, and where you are invisible. No pitch, no obligation.',
};

export default function AISearchOptimizationPillar() {
  return <ServicePillar data={data} />;
}
