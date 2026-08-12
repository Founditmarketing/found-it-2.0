import type { Metadata } from 'next';
import { ServicePillar, type PillarData } from '@/components/seo/ServicePillar';
import { TRACK_RECORD, REVENUE_CLAIM } from '@/lib/site';

export const metadata: Metadata = {
  title: 'AI Search Optimization & SEO (GEO) for Local Businesses',
  description:
    'Generative Engine Optimization (GEO) and SEO from a team with 13+ years in marketing. Get recommended by ChatGPT, Perplexity, and Google AI Overviews through entity authority and structured data. Alexandria, LA.',
  alternates: { canonical: '/ai-search-optimization' },
  openGraph: {
    title: 'AI Search Optimization & SEO (GEO) | Found It Marketing',
    description:
      'Get recommended by ChatGPT, Perplexity, and Google AI through entity authority, structured data, and local SEO.',
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
    'Generative Engine Optimization (GEO) and SEO that make a business the answer when customers ask ChatGPT, Perplexity, and Google AI. Entity authority, structured data, local SEO, and content. Backed by 13+ years in marketing.',
  eyebrow: 'AI Search Optimization & SEO',
  headline: 'Be the Answer When AI',
  headlineAccent: 'Recommends Your Industry.',
  intro:
    `Search is shifting from blue links to AI answers. Found It Marketing combines traditional SEO with Generative Engine Optimization (GEO) so your business is the one ChatGPT, Perplexity, and Google AI Overviews recommend. With ${TRACK_RECORD.yearsInBusiness} years in marketing, we build the entity authority and structured data that AI engines trust.`,
  ctaLabel: 'Get My Free Visibility Audit',
  formSource: 'service_ai_search',
  formPageSlug: 'ai-search-optimization',
  formHeading: 'Get Your Free AI Visibility Audit',
  stats: [
    { value: TRACK_RECORD.yearsInBusiness, label: 'Years in Marketing' },
    { value: TRACK_RECORD.adSpendManaged, label: 'In Managed Ad Spend' },
    { value: REVENUE_CLAIM.figure, label: 'Client Revenue Generated' },
    { value: TRACK_RECORD.statesServed, label: 'States We Operate In' },
  ],
  definitionHeading: 'What Is GEO (Generative Engine Optimization)?',
  definition:
    'Generative Engine Optimization (GEO) is the practice of structuring your digital presence so AI answer engines — ChatGPT, Perplexity, Google AI Overviews, and Gemini — recommend your business when people ask for one. Where traditional SEO competes for a ranked list of links, GEO competes to be the single synthesized answer. It relies on entity authority, a clean structured-data knowledge graph, consistent citations, and genuinely useful content the models can trust and cite.',
  includedHeading: 'What AI Search Optimization Includes',
  included: [
    { title: 'AI Visibility Audit', detail: 'We show you exactly where AI engines recommend you today — and where your competitors are winning instead.' },
    { title: 'Entity & Structured Data', detail: 'We build a clean, @id-linked knowledge graph so AI models understand who you are and what you do.' },
    { title: 'Local SEO', detail: 'Google Business Profile optimization, local citations, and review strategy to win the map pack.' },
    { title: 'Topical Authority Content', detail: 'Content clusters that establish you as the expert AI cites for your services.' },
    { title: 'Citations & Consistency', detail: 'Consistent name, address, and phone across the web — the trust signals AI reconciles.' },
    { title: 'Monthly Reporting', detail: 'Where AI recommends you, where it does not yet, and what we are doing about it.' },
  ],
  approachHeading: 'How We Make You Visible to AI',
  approachIntro:
    'AI engines build their answers from entities and structured data they trust. We give them flawless signals so they recommend you.',
  approach: [
    { step: '01', title: 'Audit', detail: 'We benchmark how ChatGPT, Perplexity, Google AI, and Gemini currently describe and recommend your business.' },
    { step: '02', title: 'Structure', detail: 'We implement the entity graph, schema, and citations that make your business machine-legible.' },
    { step: '03', title: 'Author', detail: 'We build topical-authority content that demonstrates expertise on the topics you want to own.' },
    { step: '04', title: 'Track', detail: 'We monitor AI mentions and organic visibility monthly and refine the strategy.' },
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
    { title: 'No structured data', detail: 'Without a clean schema/knowledge graph, AI cannot confidently say who you are or what you do. We fix the foundation first.' },
    { title: 'Inconsistent name, address, phone', detail: 'Conflicting business details across the web lower the trust AI places in your entity. We reconcile them.' },
    { title: 'Thin, sales-only content', detail: 'AI cites genuinely useful, authoritative content. We build topical depth on the subjects you want to own.' },
    { title: 'Treating AI search like 2015 SEO', detail: 'Ranking #1 on Google no longer guarantees AI recommends you. The playbook is different — and we run both.' },
  ],
  pricingHeading: 'What to Expect',
  pricing:
    'GEO and SEO are monthly programs scoped to your market and competition, with simple flat pricing and no setup fees that lock you in. Most clients see initial AI mentions within 60 to 90 days and consistent multi-platform visibility in 4 to 6 months. You keep all the work — content, schema, and citations — if you ever leave.',
  whyUsHeading: 'Why Businesses Choose Found It Marketing',
  whyUs: [
    `${TRACK_RECORD.yearsInBusiness} years of marketing experience and a GEO-first approach.`,
    '2026 CLEDA Highest Traded Revenue Award winner.',
    'We handle classic local SEO and the new AI visibility layer at the same time.',
    'You keep all the work — content, schema, citations — if you ever leave.',
    'No long-term contracts. Month-to-month. Cancel anytime.',
    'Monthly reporting you can actually read, not vanity metrics.',
  ],
  faqHeading: 'AI Search & SEO FAQ',
  faq: [
    { question: 'What is AI search optimization (GEO)?', answer: 'It is making sure your business is the answer when people ask AI tools like ChatGPT, Perplexity, or Google AI for a recommendation in your industry. AI engines use different signals than blue-link search, so it takes a different playbook.' },
    { question: 'Is traditional SEO dead?', answer: 'No, but ranking #1 on Google no longer guarantees AI will recommend you. You need both working together. We handle the classic local SEO and the new AI visibility layer at once.' },
    { question: 'How long until I show up in AI search?', answer: 'Most clients see initial AI mentions within 60 to 90 days. Consistent visibility across multiple platforms takes 4 to 6 months. We track it and report monthly.' },
    { question: "How do I know it's working?", answer: 'Every month you get a report showing where AI recommends you, where it does not yet, and what we are doing about it, alongside organic traffic and call volume.' },
    { question: 'Is there a contract?', answer: 'No. Month-to-month, cancel anytime with 30 days notice. You keep all the work, including content and schema, if you leave.' },
  ],
  relatedReading: [
    { title: 'The Future is Answer Engines: An Intro to GEO', href: '/blog/intro-to-geo' },
    { title: 'Stop Fearing AI. Start Weaponizing It.', href: '/blog/weaponize-ai' },
    { title: 'Content is King, But AI is the Kingmaker', href: '/blog/ai-content-strategy' },
  ],
  finalCtaHeadline: 'Get a Free AI Visibility Audit',
  finalCtaSub: 'See exactly where AI sends your customers today — and where you are invisible. No pitch, no obligation.',
};

export default function AISearchOptimizationPillar() {
  return <ServicePillar data={data} />;
}
