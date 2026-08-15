import type { Metadata } from 'next';
import Link from 'next/link';
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema, type FAQItemData } from '@/lib/schema';
import { AWARD, BUSINESS } from '@/lib/site';
import { reviews } from '@/lib/reviews';
import { LocalLeadForm } from '@/components/local/LocalLeadForm';
import { LocalFAQ } from '@/components/local/LocalFAQ';
import { LocalReview } from '@/components/local/LocalReview';
import { LocalLinkCards } from '@/components/local/LocalLinkCards';

export const metadata: Metadata = {
  title: 'Digital Marketing in Alexandria, LA | Local Agency Since 2013',
  description:
    'Digital marketing for Alexandria, LA businesses from an agency headquartered in Alexandria. Google Ads, web design, SEO, and AI search. No contracts. Free audit.',
  alternates: { canonical: '/marketing-alexandria' },
  openGraph: {
    title: 'Digital Marketing in Alexandria, LA | Found It Marketing',
    description:
      'Google Ads, web design, SEO, and AI search for Alexandria businesses — from a team headquartered in Alexandria since 2013.',
    type: 'website',
    url: 'https://www.founditsoftware.com/marketing-alexandria',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const faqItems: FAQItemData[] = [
  {
    question: 'Do you only work with businesses in Alexandria?',
    answer:
      "No. We're headquartered in Alexandria and most of our clients are here in Rapides Parish — Alexandria, Pineville, Ball, Tioga — but we work across Central Louisiana and beyond. Local doesn't mean small: we scaled one client to customers in 48 states.",
  },
  {
    question: 'How much does digital marketing cost in Alexandria?',
    answer:
      "It depends on which services you need and how competitive your industry is locally — a plumber on MacArthur Drive and a med spa downtown are fighting very different battles. We quote a flat, clear number up front before you commit, and everything is month-to-month. No contracts, no surprise invoices.",
  },
  {
    question: 'What kinds of businesses do you work with?',
    answer:
      'Mostly local service businesses: contractors, medical practices, dealerships, home services, retail, and professional services. If your customers search Google before they call somebody, we can help.',
  },
  {
    question: 'Do I have to sign a long-term contract?',
    answer:
      'No. Everything we do is month-to-month, and you own your ad accounts, your website code, and your data. If we ever stop earning your business, you keep everything and walk away clean.',
  },
  {
    question: 'Can we meet in person?',
    answer:
      "Yes — that's half the point of hiring local. We're based in Alexandria and happy to sit down at your office or ours, anywhere in Central Louisiana.",
  },
  {
    question: 'Where should my business start?',
    answer:
      "It depends on your situation. If the phone needs to ring this month, start with Google Ads. If you're playing the long game, start with SEO and AI search. If your website doesn't turn visitors into calls, fix that first — everything else pours traffic into it. The free audit tells you which one applies to you.",
  },
];

const serviceSchema = buildServiceSchema({
  name: 'Digital Marketing Services in Alexandria, LA',
  serviceType: 'Digital Marketing',
  description:
    'Full-service digital marketing for Alexandria, Louisiana businesses: Google Ads management, conversion-focused web design, SEO, AI search optimization, and social media — from an agency headquartered in Alexandria since 2013.',
  url: '/marketing-alexandria',
  areaServed: [
    { type: 'City', name: 'Alexandria', sameAs: 'https://en.wikipedia.org/wiki/Alexandria,_Louisiana' },
    { type: 'AdministrativeArea', name: 'Rapides Parish' },
    { type: 'AdministrativeArea', name: 'Central Louisiana', sameAs: 'https://en.wikipedia.org/wiki/Central_Louisiana' },
    { type: 'State', name: 'Louisiana', sameAs: 'https://en.wikipedia.org/wiki/Louisiana' },
  ],
});
const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Digital Marketing in Alexandria', url: '/marketing-alexandria' },
]);

export default function MarketingAlexandriaPage() {
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
          <span className="text-foreground">Marketing in Alexandria</span>
        </nav>

        {/* Hero */}
        <header className="mb-14">
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
            Alexandria, Louisiana
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            Digital Marketing for Alexandria,{' '}
            <span className="text-primary">From a Team That Actually Lives Here.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
            Found It Marketing is headquartered in Alexandria, Louisiana — not a franchise desk, not a reseller, not
            an out-of-state call center with a local phone number. Since {BUSINESS.foundingYear} we&apos;ve helped
            business owners across Rapides Parish turn Google searches, ads, and websites into ringing phones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="#lead-form"
              className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
            >
              Get a Free Marketing Audit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-card/40 border border-border/20 text-foreground font-bold uppercase tracking-wider text-sm hover:border-primary/30 transition-colors"
            >
              Talk to Trevor
            </Link>
          </div>
        </header>

        {/* Local reality */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-5 text-foreground">
            Marketing in Alexandria Is Its Own Game
          </h2>
          <div className="space-y-5 text-base text-muted-foreground font-medium leading-relaxed max-w-2xl">
            <p>
              Alexandria isn&apos;t Dallas, and marketing advice written for Dallas mostly wastes your money here. Our
              market is a city of neighborhoods and corridors — MacArthur Drive, Jackson Street, downtown, the
              Coliseum Boulevard retail stretch — where your real competition is usually three or four other local
              businesses, not a national chain. Winning here doesn&apos;t take the biggest budget in town. It takes
              showing up first, looking legitimate, and answering the phone.
            </p>
            <p>
              And this market moves. England Airpark keeps freight and travel coming through, and Fort Polk keeps rotating
              soldiers and their families through the region — people who know nobody here and pick their
              plumber, dentist, and mechanic entirely from a Google search. If your Google Business Profile is
              half-finished and your website was built in 2016, those customers go to whoever took theirs seriously.
            </p>
            <p>
              Cenla businesses have always run on word of mouth, and that still matters — but word of mouth changed.
              Somebody gets your name from a friend, then looks you up before they call. If what they find is thin,
              the referral dies right there. Our job is making sure it doesn&apos;t: a site that loads fast on a phone,
              reviews that show up, ads that only spend money on people ready to buy, and tracking that proves what
              every dollar did.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
            What We Do for Alexandria Businesses
          </h2>
          <p className="text-base text-muted-foreground font-medium leading-relaxed max-w-2xl mb-8">
            Every service below has its own full breakdown — what it includes, how we work, and what to expect.
          </p>
          <LocalLinkCards
            links={[
              {
                label: 'Google Ads Management',
                href: '/google-ads-management',
                description: 'The fastest way to make the phone ring. Weekly hands-on optimization and real conversion tracking.',
              },
              {
                label: 'Web Design',
                href: '/web-design',
                description: 'Fast, mobile-first websites built to turn visitors into calls. You own the code.',
              },
              {
                label: 'SEO & AI Search',
                href: '/ai-search-optimization',
                description: 'Show up on Google — and in ChatGPT, Perplexity, and AI Overviews when people ask for recommendations.',
              },
              {
                label: 'Social Media Management',
                href: '/social-media-management',
                description: 'Done-for-you content that builds authority and drives leads. We create it, you approve it.',
              },
              {
                label: 'AI Marketing Automation',
                href: '/ai-marketing',
                description: 'Instant follow-up, appointment setting, and lead handling that never sleeps.',
              },
              {
                label: 'Custom App Development',
                href: '/app-development',
                description: 'iOS and Android apps with fixed-price timelines. You own 100% of the codebase.',
              },
            ]}
          />
        </section>

        {/* Why local */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-foreground">
            Why Hiring Local Actually Matters
          </h2>
          <div className="space-y-5">
            {[
              'You can sit across a table from us. Our office is in Alexandria — when something needs a real conversation, we drive to you.',
              'We know this market because we sell in it too. Same customers, same seasons, same word-of-mouth economy.',
              'When you call, you talk to the person doing the work. No account-manager relay, no offshore ticket queue.',
              `Month-to-month, always. You own your ad accounts, your website code, and your data — the receipts stay yours.`,
              `${AWARD.issuer} recognized us with the ${AWARD.full} in ${AWARD.year}. The people whose job is growing Cenla's economy put our name on it.`,
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
                  ✓
                </span>
                <p className="text-foreground font-bold text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="mb-16" aria-label="Client reviews">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-foreground">
            What Owners Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LocalReview review={reviews.find((r) => r.name === 'David Roshto')!} />
            <LocalReview review={reviews.find((r) => r.name === 'Tyler Griffin')!} />
          </div>
        </section>

        {/* Lead form */}
        <section id="lead-form" className="mb-16 scroll-mt-28">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
                Find Out What&apos;s Broken. Free.
              </h2>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-6">
                Tell us about your business and we&apos;ll look at your ads, your website, and your Google presence —
                then tell you straight what&apos;s working, what&apos;s leaking money, and what we&apos;d fix first.
              </p>
            </div>
            <LocalLeadForm
              source="local_marketing_alexandria"
              heading="Get Your Free Marketing Audit"
              subheading="Trevor personally reviews every audit request from the Alexandria area."
              buttonLabel="Get My Free Audit"
              messagePlaceholder="e.g. We run ads but can't tell if they work…"
            />
          </div>
        </section>

        {/* FAQ */}
        <LocalFAQ heading="Alexandria Marketing FAQs" items={faqItems} />

        {/* Nearby pages */}
        <section aria-label="Also serving">
          <h2 className="text-xl font-black uppercase italic tracking-tighter text-foreground mb-6">
            Also Serving the Rest of Cenla
          </h2>
          <LocalLinkCards
            links={[
              {
                label: 'Pineville SEO',
                href: '/pineville-seo',
                description: 'Across the river? Local search works differently on your side of the Red River.',
              },
              {
                label: 'Central Louisiana Web Design',
                href: '/central-louisiana-web-design',
                description: 'Websites built to win customers from Marksville to Natchitoches.',
              },
            ]}
          />
        </section>
      </div>
    </main>
  );
}
