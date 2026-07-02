import type { Metadata } from 'next';
import Link from 'next/link';
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema, type FAQItemData } from '@/lib/schema';
import { TRACK_RECORD } from '@/lib/site';
import { reviews } from '@/lib/reviews';
import { LocalLeadForm } from '@/components/local/LocalLeadForm';
import { LocalFAQ } from '@/components/local/LocalFAQ';
import { LocalReview } from '@/components/local/LocalReview';
import { LocalLinkCards } from '@/components/local/LocalLinkCards';
import { TrackedPhoneLink } from '@/components/TrackedPhoneLink';

export const metadata: Metadata = {
  title: 'Web Design in Central Louisiana | Alexandria, Pineville & Beyond',
  description:
    'Custom web design for Central Louisiana businesses — Alexandria, Pineville, Marksville, Natchitoches, Leesville. Mobile-first, fast, you own everything. Free concept call.',
  alternates: { canonical: '/central-louisiana-web-design' },
  openGraph: {
    title: 'Web Design in Central Louisiana | Found It Marketing',
    description:
      'Mobile-first, conversion-focused websites for Cenla businesses. Built fast, built to make the phone ring, owned by you.',
    type: 'website',
    url: 'https://founditmarketing.com/central-louisiana-web-design',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const faqItems: FAQItemData[] = [
  {
    question: 'How much does a website cost in Central Louisiana?',
    answer:
      "You get one flat number, quoted up front, based on what your business actually needs — a five-page service site and a full e-commerce build are different projects. No hourly billing, no scope-creep invoices. You'll know the total before you sign anything.",
  },
  {
    question: 'How fast can you launch my site?',
    answer:
      'Most builds go live in 2 weeks or less from kickoff. Bigger projects with custom integrations can take longer, but you get a firm date on the first call — and if we miss the launch date we promised, we take $500 off your final invoice.',
  },
  {
    question: 'Who owns the website when it\'s done?',
    answer:
      'You do. Your domain, your code, your content, your hosting account. If you ever leave us, you take all of it with you. No lock-in, no ransom, no "platform fee" to keep what you paid for.',
  },
  {
    question: 'What happens after launch?',
    answer:
      "Your first 60 days of post-launch changes and optimization are free — we don't disappear at go-live. After that, most clients move to a month-to-month maintenance plan starting at $250/mo, and cancelling is as easy as saying so.",
  },
  {
    question: 'Can you fix my existing site instead of rebuilding it?',
    answer:
      "Sometimes, and when that's the cheaper right answer we'll tell you. We audit what you have first — speed, mobile experience, tracking, conversion path — and give you an honest recommendation, even if the recommendation is a smaller project than the one you asked about.",
  },
  {
    question: 'Do you work with businesses outside Alexandria?',
    answer:
      "All over Cenla — Pineville, Marksville, Natchitoches, Leesville, Winnfield, Jena, and the towns between. We're based in Alexandria and glad to drive to your office for the kickoff, or handle everything by phone and video if that's easier for you.",
  },
];

const serviceSchema = buildServiceSchema({
  name: 'Web Design Services in Central Louisiana',
  serviceType: 'Web Design',
  description:
    'Custom, conversion-focused web design for Central Louisiana businesses — mobile-first, fast-loading sites with click-to-call, lead forms, and tracking. Clients own their domain, code, and content.',
  url: '/central-louisiana-web-design',
  areaServed: [
    { type: 'AdministrativeArea', name: 'Central Louisiana', sameAs: 'https://en.wikipedia.org/wiki/Central_Louisiana' },
    { type: 'City', name: 'Alexandria', sameAs: 'https://en.wikipedia.org/wiki/Alexandria,_Louisiana' },
    { type: 'City', name: 'Pineville', sameAs: 'https://en.wikipedia.org/wiki/Pineville,_Louisiana' },
    { type: 'City', name: 'Marksville' },
    { type: 'City', name: 'Natchitoches' },
    { type: 'City', name: 'Leesville' },
    { type: 'State', name: 'Louisiana', sameAs: 'https://en.wikipedia.org/wiki/Louisiana' },
  ],
});
const faqSchema = buildFAQSchema(faqItems);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Central Louisiana Web Design', url: '/central-louisiana-web-design' },
]);

const deliverables = [
  {
    title: 'Mobile-First, Actually',
    detail:
      'Your customers are on their phones — in a truck, in a waiting room, in a parking lot. The phone version is the site, not an afterthought.',
  },
  {
    title: 'Fast, Because Speed Sells',
    detail:
      'Built on a modern stack instead of a bloated page builder. Slow sites bleed visitors before they ever see your offer.',
  },
  {
    title: 'A Clear Path to the Phone',
    detail:
      'Tap-to-call above the fold, forms that go somewhere, and one obvious next step on every page. Pretty is nice; ringing is the point.',
  },
  {
    title: 'Local SEO Foundation',
    detail:
      'Schema markup, city and service pages, and clean structure so the site supports your Google rankings instead of fighting them.',
  },
  {
    title: 'Tracking From Day One',
    detail:
      "Call tracking and analytics wired in at launch, so you know which pages and campaigns make the phone ring — not just how many people 'visited.'",
  },
  {
    title: 'You Own Everything',
    detail:
      'Domain, code, content, hosting — all yours. We earn the next month of work; we never hold your website hostage for it.',
  },
];

export default function CentralLouisianaWebDesignPage() {
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
          <span className="text-foreground">Central Louisiana Web Design</span>
        </nav>

        {/* Hero */}
        <header className="mb-14">
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
            Central Louisiana
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            Web Design for Central Louisiana,{' '}
            <span className="text-primary">Built to Make Your Phone Ring.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
            From our Alexandria headquarters we design and build websites for businesses across Cenla — Alexandria,
            Pineville, Marksville, Natchitoches, Leesville, and every town between. Mobile-first, fast-loading, and
            engineered around one job: turning the people who find you into people who call you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="#lead-form"
              className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
            >
              Get a Free Concept Call
            </Link>
            <Link
              href="/web-design"
              className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-card/40 border border-border/20 text-foreground font-bold uppercase tracking-wider text-sm hover:border-primary/30 transition-colors"
            >
              See the Full Service
            </Link>
          </div>
        </header>

        {/* Stats */}
        <section aria-label="Track record" className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { value: '2 wks', label: 'Typical Build Time' },
            { value: '60 days', label: 'Free Post-Launch Changes' },
            { value: TRACK_RECORD.googleRating + '★', label: 'Google Rating' },
            { value: '100%', label: 'Owned by You' },
          ].map((s) => (
            <div key={s.label} className="bg-card/15 border border-border/20 rounded-2xl p-5 text-center">
              <p className="text-3xl font-black text-primary italic tracking-tighter">{s.value}</p>
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-faint mt-1">{s.label}</p>
            </div>
          ))}
        </section>

        {/* Problem */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-5 text-foreground">
            Most Cenla Websites Quietly Lose Customers
          </h2>
          <div className="space-y-5 text-base text-muted-foreground font-medium leading-relaxed max-w-2xl">
            <p>
              We audit a lot of Central Louisiana websites, and the same problems show up again and again: the site
              takes forever to load on a phone, the phone number isn&apos;t tappable, there&apos;s no obvious next
              step, the &ldquo;contact&rdquo; form emails an inbox nobody checks, and nothing tracks where calls come
              from. The business looks smaller online than it is in real life — and the customer moves to the next
              result without ever knowing better.
            </p>
            <p>
              Here&apos;s the standard your site actually has to meet: a customer standing in a parking lot on
              MacArthur Drive, or on a job site outside Marksville, pulls out their phone, finds you, and within
              seconds sees what you do, why you&apos;re trusted, and a button that calls you. That&apos;s it.
              That&apos;s the whole game. Every design decision we make serves it — and everything that doesn&apos;t
              gets cut, no matter how good it looks in a portfolio.
            </p>
            <p>
              That&apos;s also why we don&apos;t sell templates. A dealership in Natchitoches, a contractor in
              Leesville, and a clinic in Alexandria don&apos;t need the same website; they need the same result
              through different doors. We build for how your customers actually decide.
            </p>
          </div>
        </section>

        {/* What you get */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-foreground">
            What Every Build Includes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliverables.map((item) => (
              <div key={item.title} className="bg-card/10 border border-border/20 rounded-2xl p-6">
                <h3 className="text-sm font-black uppercase italic tracking-tighter text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The deal */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-foreground">
            The Deal, In Plain English
          </h2>
          <div className="space-y-5">
            {[
              'Flat price, quoted up front. You know the full number before you commit to anything.',
              "Live in 2 weeks or less on most builds — and if we miss the date we promised, we take $500 off the final invoice.",
              '60 days of free changes and optimization after launch. We stick around to make it perform, not just exist.',
              "We drive to you. Kickoff at your office in Alexandria or Pineville is easy; Marksville, Natchitoches, or Leesville is worth the trip.",
              'Month-to-month after launch if you want ongoing help. No long-term contracts, ever.',
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
            Owners on the Finished Product
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LocalReview review={reviews.find((r) => r.name === 'Justin Morgan')!} />
            <LocalReview review={reviews.find((r) => r.name === 'Reddirt Mahindra')!} />
          </div>
        </section>

        {/* Lead form */}
        <section id="lead-form" className="mb-16 scroll-mt-28">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
                See Your Site Reimagined.
              </h2>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-6">
                Tell us about your business and we&apos;ll come back with a teardown of your current site and a real
                design direction for what it should be — free, and yours to keep even if you never hire us.
              </p>
              <p className="text-sm text-muted-foreground">
                Want to skip the form? Call <TrackedPhoneLink /> and talk it through with Trevor.
              </p>
            </div>
            <LocalLeadForm
              source="local_cenla_web_design"
              heading="Get Your Free Concept Call"
              subheading="Include your current website in the message if you have one — we'll review it before we call."
              buttonLabel="Get My Free Concept Call"
              messagePlaceholder="e.g. Our site looks fine but the phone never rings from it…"
            />
          </div>
        </section>

        {/* FAQ */}
        <LocalFAQ heading="Cenla Web Design FAQs" items={faqItems} />

        {/* Related pages */}
        <section aria-label="Related services">
          <h2 className="text-xl font-black uppercase italic tracking-tighter text-foreground mb-6">
            A Website Is Step One. Then Send It Traffic.
          </h2>
          <LocalLinkCards
            links={[
              {
                label: 'Web Design & Development',
                href: '/web-design',
                description: 'The full service page — process, deliverables, and what to expect from kickoff to launch.',
              },
              {
                label: 'Google Ads Management',
                href: '/google-ads-management',
                description: 'A converting site plus tightly-run ads is the fastest lead machine in Cenla.',
              },
              {
                label: 'Pineville SEO',
                href: '/pineville-seo',
                description: 'North of the river? Make the map pack work for your side of it.',
              },
              {
                label: 'Marketing in Alexandria',
                href: '/marketing-alexandria',
                description: 'Everything we do for businesses in our home city.',
              },
            ]}
          />
        </section>
      </div>
    </main>
  );
}
