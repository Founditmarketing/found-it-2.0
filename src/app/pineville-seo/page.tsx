import type { Metadata } from 'next';
import Link from 'next/link';
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema, type FAQItemData } from '@/lib/schema';
import { TRACK_RECORD } from '@/lib/site';
import { reviews } from '@/lib/reviews';
import { LocalLeadForm } from '@/components/local/LocalLeadForm';
import { LocalFAQ } from '@/components/local/LocalFAQ';
import { LocalReview } from '@/components/local/LocalReview';
import { LocalLinkCards } from '@/components/local/LocalLinkCards';

export const metadata: Metadata = {
  title: 'Pineville, LA SEO Services | Local Search & AI Search',
  description:
    'SEO for Pineville, LA businesses: local rankings, Google Business Profile, reviews, and AI search. From an Alexandria team minutes across the Red River. Free audit.',
  alternates: { canonical: '/pineville-seo' },
  openGraph: {
    title: 'Pineville, LA SEO Services | Found It Marketing',
    description:
      'Local SEO and AI search optimization for Pineville businesses — Google Business Profile, rankings, reviews, and honest reporting.',
    type: 'website',
    url: 'https://www.founditsoftware.com/pineville-seo',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const faqItems: FAQItemData[] = [
  {
    question: 'How long does SEO take to work in a market like Pineville?',
    answer:
      "Not overnight, and anyone who promises page one in a week is selling something. In a smaller market like Pineville the good news is the competition is usually beatable: with a clean Google Business Profile, consistent citations, and real on-page work, local improvements typically start showing inside the first few months and compound from there. We report every month so you see the movement — or hear straight from us if it stalls.",
  },
  {
    question: 'Do you guarantee #1 rankings?',
    answer:
      "No, because nobody honestly can — Google doesn't sell the #1 spot and neither do we. What we guarantee is the work: transparent monthly reporting, no contracts holding you hostage, and a team that tells you the truth about what's achievable in your market.",
  },
  {
    question: "I'm in Ball, Tioga, or Deville — does this still apply to me?",
    answer:
      "Yes. Google's local results are proximity-based, so the same playbook applies: make your Google Business Profile airtight, keep your name-address-phone consistent everywhere, earn reviews, and publish pages that actually answer what your customers search for. Your location becomes an advantage for the searches happening around you.",
  },
  {
    question: 'What is AI search optimization, and does a Pineville business really need it?',
    answer:
      'People increasingly ask ChatGPT, Perplexity, and Google AI Overviews things like "who\'s the best roofer near Pineville?" — and those tools give one or two names, not ten blue links. AI search optimization (GEO) is the work of making sure your business is the answer: structured data, consistent facts about your business across the web, and content AI systems can actually read. It stacks on top of traditional SEO, not instead of it.',
  },
  {
    question: 'Do you have an office in Pineville?',
    answer:
      "No — and we're not going to pretend we do. We're based in Alexandria, a few minutes across the Red River, and we work with Pineville businesses in person all the time. If an agency fakes its own address to rank in your town, think about what else it's willing to fake.",
  },
  {
    question: 'What does SEO cost?',
    answer:
      "It depends on your competition and how much ground you need to cover — a Pineville shop competing locally is a different project than a business fighting for all of Cenla. You get a flat monthly quote up front, everything is month-to-month, and you can cancel anytime. No contracts.",
  },
];

const serviceSchema = buildServiceSchema({
  name: 'SEO Services in Pineville, LA',
  serviceType: 'Search Engine Optimization',
  description:
    'Local SEO and AI search optimization for Pineville, Louisiana businesses: Google Business Profile optimization, on-page SEO, citations, review strategy, and Generative Engine Optimization — from a team based minutes away in Alexandria.',
  url: '/pineville-seo',
  areaServed: [
    { type: 'City', name: 'Pineville', sameAs: 'https://en.wikipedia.org/wiki/Pineville,_Louisiana' },
    { type: 'City', name: 'Ball' },
    { type: 'AdministrativeArea', name: 'Rapides Parish' },
    { type: 'State', name: 'Louisiana', sameAs: 'https://en.wikipedia.org/wiki/Louisiana' },
  ],
});
const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Pineville SEO', url: '/pineville-seo' },
]);

const seoWork = [
  {
    title: 'Google Business Profile',
    detail:
      'The single highest-leverage asset in Pineville local search. We fix categories, services, photos, posts, and review responses so the map pack works for you.',
  },
  {
    title: 'On-Page SEO',
    detail:
      'Titles, headings, schema markup, and pages built around the searches Pineville customers actually type — not generic keyword stuffing.',
  },
  {
    title: 'Citations & NAP Consistency',
    detail:
      'Your name, address, and phone number listed identically across the directories Google checks. Boring work that quietly decides who ranks.',
  },
  {
    title: 'Review Strategy',
    detail:
      'A simple, repeatable system for earning reviews from real customers — and responding to every one, because Google and buyers both read them.',
  },
  {
    title: 'Content That Answers Questions',
    detail:
      'Pages and posts that answer what your customers ask before they buy. Useful content earns rankings; filler gets ignored.',
  },
  {
    title: 'AI Search (GEO)',
    detail:
      'Structured data and entity work so ChatGPT, Perplexity, and Google AI Overviews recommend you by name when someone asks for the best in Pineville.',
  },
];

export default function PinevilleSeoPage() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-24 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/[0.02] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        <nav aria-label="Breadcrumb" className="mb-10 text-xs font-bold uppercase tracking-[0.2em] text-faint">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2 text-faint">/</span>
          <span className="text-foreground">Pineville SEO</span>
        </nav>

        {/* Hero */}
        <header className="mb-14">
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
            Pineville, Louisiana
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            SEO for Pineville Businesses:{' '}
            <span className="text-primary">Own Your Side of the River.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
            We&apos;re Found It Marketing — an SEO team based in Alexandria, a few minutes across the Red River from
            downtown Pineville. We won&apos;t pretend to have a Pineville office. What we do have is{' '}
            {TRACK_RECORD.yearsInBusiness} years of putting Cenla businesses at the top of Google, and a
            straightforward playbook for doing it on your side of the bridge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="#lead-form"
              className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
            >
              Get a Free SEO Audit
            </Link>
            <Link
              href="/ai-search-optimization"
              className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-card/40 border border-border/20 text-foreground font-bold uppercase tracking-wider text-sm hover:border-primary/30 transition-colors"
            >
              How Our SEO Works
            </Link>
          </div>
        </header>

        {/* Why Pineville is its own market */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-5 text-foreground">
            Pineville Rankings Are Their Own Fight
          </h2>
          <div className="space-y-5 text-base text-muted-foreground font-medium leading-relaxed max-w-2xl">
            <p>
              Google&apos;s local results are proximity-based. Someone searching &ldquo;plumber near me&rdquo; from
              Main Street in Pineville sees a different map pack than someone searching from downtown Alexandria —
              even though the two are minutes apart. That cuts both ways: an Alexandria competitor with a bigger
              budget doesn&apos;t automatically outrank you in Pineville, and your Pineville address is a genuine
              advantage for searches coming from Ball, Tioga, Libuse, Kingsville, and Deville.
            </p>
            <p>
              But Google only rewards that advantage if you tell it clearly who you are, where you are, and what you
              do. Most Pineville businesses we look at are invisible for fixable reasons: an unclaimed or
              half-finished Google Business Profile, a website with no city or service pages, phone numbers that
              don&apos;t match across directories, and a review count that hasn&apos;t moved in years. None of that requires magic
              to fix. It requires somebody actually doing the work.
            </p>
            <p>
              And Pineville has real search demand to capture — the Highway 28 East corridor, families around
              Louisiana Christian University, weekend traffic at Buhlow Lake, and everybody in the growing
              communities north of the river who&apos;d rather hire close to home. When they search, the businesses
              that did the boring groundwork are the ones that get the call.
            </p>
          </div>
        </section>

        {/* What the work involves */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-foreground">
            What Local SEO Actually Involves
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {seoWork.map((item) => (
              <div key={item.title} className="bg-card/10 border border-border/20 rounded-2xl p-6">
                <h3 className="text-sm font-black uppercase italic tracking-tighter text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground font-medium leading-relaxed mt-6 max-w-2xl">
            This is the same work we do on our own site — schema, entity consistency, answer-first content. We
            practice what we sell. The full breakdown lives on our{' '}
            <Link href="/ai-search-optimization" className="text-primary font-bold hover:underline">
              SEO &amp; AI search optimization page
            </Link>
            .
          </p>
        </section>

        {/* Reviews */}
        <section className="mb-16" aria-label="Client reviews">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-foreground">
            From the Google Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LocalReview review={reviews.find((r) => r.name === 'A. C.')!} />
            <LocalReview review={reviews.find((r) => r.name === 'Ironclad')!} />
          </div>
        </section>

        {/* Lead form */}
        <section id="lead-form" className="mb-16 scroll-mt-28">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
                See Where You Rank. Free.
              </h2>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-6">
                We&apos;ll check your rankings, your Google Business Profile, your citations, and what AI search says
                about your business when Pineville customers ask — then give you a straight answer on what to fix
                and what it&apos;s worth. Keep the findings either way.
              </p>
            </div>
            <LocalLeadForm
              source="local_pineville_seo"
              heading="Get Your Free Pineville SEO Audit"
              subheading="Tell us your business name and we'll pull the rankings before we call you back."
              buttonLabel="Get My Free SEO Audit"
              messagePlaceholder="e.g. My competitors show up on the map and I don't…"
            />
          </div>
        </section>

        {/* FAQ */}
        <LocalFAQ heading="Pineville SEO FAQs" items={faqItems} />

        {/* Related pages */}
        <section aria-label="Related services">
          <h2 className="text-xl font-black uppercase italic tracking-tighter text-foreground mb-6">
            SEO Is a Long Game. Pair It Right.
          </h2>
          <LocalLinkCards
            links={[
              {
                label: 'Google Ads Management',
                href: '/google-ads-management',
                description: 'SEO compounds over months; ads ring the phone now. Plenty of Pineville clients run both.',
              },
              {
                label: 'Web Design',
                href: '/web-design',
                description: "Rankings send the click — your website has to close it. If it doesn't convert, fix it first.",
              },
              {
                label: 'Marketing in Alexandria',
                href: '/marketing-alexandria',
                description: 'The full picture of what we do across the river and throughout Rapides Parish.',
              },
              {
                label: 'Central Louisiana Web Design',
                href: '/central-louisiana-web-design',
                description: 'Conversion-first websites for businesses across Cenla.',
              },
            ]}
          />
        </section>
      </div>
    </main>
  );
}
