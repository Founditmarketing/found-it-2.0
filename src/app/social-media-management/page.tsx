import type { Metadata } from 'next';
import Link from 'next/link';
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from '@/lib/schema';
import { BUSINESS, TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Social Media Management for Local Businesses',
  description:
    'Done-for-you social media management from a team with 13+ years in marketing and millions in managed ad spend across hundreds of local businesses. Content, strategy, and paid social that drive calls and bookings — not just likes. Based in Alexandria, LA.',
  alternates: { canonical: '/social-media-management' },
  openGraph: {
    title: 'Social Media Management for Local Businesses | Found It Marketing',
    description:
      'A team with 13+ years in marketing and millions in managed ad spend, managing social for hundreds of local businesses. Content + paid social that drives calls.',
    type: 'website',
    url: 'https://founditmarketing.com/social-media-management',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: 'What does a social media management company actually do?',
    answer:
      'A social media management company plans, creates, schedules, and reports on the content that goes out on your business profiles — and, when it makes sense, runs paid social ads on top of it. At Found It Marketing, that means we handle graphics, copy, video direction, posting, community management, and monthly reporting on the metrics that matter (calls, leads, and bookings), so business owners do not have to.',
  },
  {
    question: 'How experienced is Found It Marketing with social media?',
    answer:
      'We have been managing marketing campaigns for over 13 years and have managed millions of dollars in ad spend. Today we create and manage social content for hundreds of local businesses across 48 states, which gives us a deep, tested playbook for what actually drives results in local markets.',
  },
  {
    question: 'Which social media platforms do you manage?',
    answer:
      'Facebook, Instagram, LinkedIn, TikTok, YouTube, and Google Business Profile. Most local businesses see the strongest return starting with Facebook and Instagram, then expanding to the platforms where their specific customers spend time.',
  },
  {
    question: 'Do you handle organic content, paid social ads, or both?',
    answer:
      'Both, and they work best together. Organic content builds trust and authority over time; paid social puts the right offer in front of the right local audience quickly. With millions in managed ad spend behind us, we know how to combine the two so they compound instead of competing for budget.',
  },
  {
    question: 'How much does social media management cost?',
    answer:
      'Pricing is simple and flat, scoped to the platforms and posting volume you need, with no setup fees that lock you in. You get a clear monthly number up front. Most local businesses spend less on professional social management than on a single part-time hire.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Reach and engagement usually move within the first month. Real traction — more calls, leads, and bookings — typically takes about 90 days of consistent, strategic posting. We recommend giving any social program that runway before judging it.',
  },
  {
    question: 'Do I have to sign a long-term contract?',
    answer:
      'No. We work month-to-month and never lock clients in. We recommend 90 days to see real traction, but you can cancel anytime, and you keep everything we have built.',
  },
];

const serviceSchema = buildServiceSchema({
  name: 'Social Media Management',
  serviceType: 'Social Media Marketing',
  description:
    'Done-for-you social media management for local businesses: content creation, strategy, paid social, and reporting focused on calls and leads — backed by 13+ years in marketing and millions in managed ad spend.',
  url: '/social-media-management',
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Social Media Management', url: '/social-media-management' },
]);

const stats = [
  { value: `${TRACK_RECORD.yearsInBusiness}`, label: 'Years in Marketing' },
  { value: TRACK_RECORD.adSpendManaged, label: 'In Managed Ad Spend' },
  { value: TRACK_RECORD.socialAccountsManaged, label: 'Local Businesses Served' },
  { value: TRACK_RECORD.statesServed, label: 'States We Operate In' },
];

const included = [
  { title: 'Content Creation', detail: 'Graphics, captions, and short-form video direction built around your brand voice — not generic stock posts.' },
  { title: 'Strategy & Calendar', detail: 'A platform-specific content calendar mapped to your offers, seasons, and local market.' },
  { title: 'Paid Social Ads', detail: 'Targeted Facebook, Instagram, and TikTok ads that put the right offer in front of nearby customers.' },
  { title: 'Community Management', detail: 'We monitor comments and messages so leads never sit unanswered.' },
  { title: 'Google Business Profile', detail: 'Profile posts, updates, and optimization to strengthen your local map presence.' },
  { title: 'Real Reporting', detail: 'Monthly reports on calls, leads, and bookings — the metrics that move your business, not vanity likes.' },
];

const approach = [
  { step: '01', title: 'Learn Your Voice', detail: 'We start by understanding your business, your customers, and what makes you different — in person when you are local.' },
  { step: '02', title: 'Build the Engine', detail: 'We create a repeatable content system: themes, formats, and a calendar designed to publish consistently and convert.' },
  { step: '03', title: 'Publish & Amplify', detail: 'We produce and schedule everything, then amplify the best-performing content with targeted paid social.' },
  { step: '04', title: 'Measure & Refine', detail: 'Every month we report on real outcomes and double down on what is driving calls and bookings.' },
];

const platforms = ['Facebook', 'Instagram', 'TikTok', 'LinkedIn', 'YouTube', 'Google Business Profile'];

const relatedReading = [
  { title: 'How Much Should a Local Business Spend on Social Media?', href: '/blog/local-business-social-media-budget' },
  { title: 'Organic vs. Paid Social: What Local Businesses Actually Need', href: '/blog/organic-vs-paid-social-local-business' },
  { title: 'What a Real Social Media Content Engine Looks Like', href: '/blog/social-media-content-engine' },
];

export default function SocialMediaManagementPillar() {
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

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2 text-muted-foreground/30">/</span>
          <span className="text-foreground">Social Media Management</span>
        </nav>

        {/* Hero */}
        <header className="mb-16">
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-60">Social Media Management</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            Social Media That Gets Calls,{' '}
            <span className="text-primary">Not Just Likes.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
            Found It Marketing is a digital marketing agency in Alexandria, Louisiana that has managed marketing
            campaigns for {TRACK_RECORD.yearsInBusiness} years and overseen {TRACK_RECORD.adSpendManagedLong}. Today we
            create and manage social media for {TRACK_RECORD.socialAccountsManagedLong} across {TRACK_RECORD.statesServed} states —
            a done-for-you content engine that turns scrolls into booked calls.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/lp/social-media-management#lp-form" className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity">
              Get a Free Strategy Session
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-card/40 border border-border/20 text-foreground font-bold uppercase tracking-wider text-sm hover:border-primary/30 transition-colors">
              Talk to Trevor
            </Link>
          </div>
        </header>

        {/* Stats */}
        <section aria-label="Track record" className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
          {stats.map((s) => (
            <div key={s.label} className="bg-card/15 border border-border/20 rounded-2xl p-5 text-center">
              <p className="text-3xl font-black text-primary italic tracking-tighter">{s.value}</p>
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground/60 mt-1">{s.label}</p>
            </div>
          ))}
        </section>

        {/* What's included */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-foreground">
            What Our Social Media Management Includes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {included.map((item) => (
              <div key={item.title} className="bg-card/10 border border-border/20 rounded-2xl p-6">
                <h3 className="text-sm font-black uppercase italic tracking-tighter text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-foreground">
            Our Approach: A Content Engine, Not Random Posting
          </h2>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mb-10">
            Most social media fails because it is sporadic and unmeasured. After {TRACK_RECORD.yearsInBusiness} years and{' '}
            {TRACK_RECORD.adSpendManagedLong}, we have learned that consistency plus strategy beats volume every time. Here is how we run it.
          </p>
          <div className="space-y-5">
            {approach.map((a) => (
              <div key={a.step} className="flex items-start gap-5">
                <span className="text-primary font-black italic text-2xl tracking-tighter shrink-0 w-12">{a.step}</span>
                <div>
                  <h3 className="text-base font-black uppercase italic tracking-tighter text-foreground mb-1">{a.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Platforms */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6 text-foreground">
            Platforms We Manage
          </h2>
          <div className="flex flex-wrap gap-3">
            {platforms.map((p) => (
              <span key={p} className="inline-flex items-center bg-card/15 border border-primary/20 rounded-full px-5 py-2 text-sm font-bold text-foreground">
                {p}
              </span>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6 text-foreground">
            What Results Look Like
          </h2>
          <div className="bg-card/15 border border-border/20 rounded-3xl p-8 lg:p-10">
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { value: '3x', label: 'Weekend Bookings' },
                { value: '400%', label: 'Follower Growth' },
                { value: '12K', label: 'Monthly Reach' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl sm:text-3xl font-black text-primary italic tracking-tighter">{s.value}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground/60 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="text-base text-muted-foreground font-medium leading-relaxed">
              One local restaurant was posting phone photos with generic captions. We built a real content strategy:
              behind-the-scenes kitchen content, seasonal menu highlights, and targeted Instagram ads within a 15-mile
              radius. Ninety days later, Friday and Saturday nights were consistently booked.
            </p>
          </div>
        </section>

        {/* Why us */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-foreground">
            Why Businesses Choose Found It Marketing
          </h2>
          <div className="space-y-5">
            {[
              `${TRACK_RECORD.yearsInBusiness} years of marketing experience and ${TRACK_RECORD.adSpendManagedLong}.`,
              `Trusted with social media for ${TRACK_RECORD.socialAccountsManagedLong} across ${TRACK_RECORD.statesServed} states.`,
              'You own everything — your accounts, your content, your data.',
              'No long-term contracts. Month-to-month. Cancel anytime.',
              'A senior strategist on every account. No hand-offs to interns.',
              'Local to Alexandria, LA — we will come to your office and build your strategy in person.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">✓</span>
                <p className="text-foreground font-bold text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-foreground">
            Social Media Management FAQ
          </h2>
          <div className="space-y-8">
            {faqItems.map((f) => (
              <div key={f.question}>
                <h3 className="text-base font-black text-foreground mb-2">{f.question}</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related reading */}
        <section className="mb-20">
          <h2 className="text-xl font-black uppercase italic tracking-tighter text-foreground mb-6">Keep Reading</h2>
          <ul className="space-y-3">
            {relatedReading.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="text-primary font-bold hover:underline text-sm">
                  {r.title} →
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center border-t border-border/10 pt-16">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
            Stop Posting Into the Void.
          </h2>
          <p className="text-lg text-muted-foreground font-medium italic mb-8 max-w-md mx-auto">
            Get a real strategy. 15 minutes with Trevor — no pitch, just a plan.
          </p>
          <Link href="/lp/social-media-management#lp-form" className="inline-flex items-center justify-center px-10 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity">
            Claim Your Free Strategy Session
          </Link>
          <p className="text-sm text-muted-foreground mt-6">
            Or call <a href={`tel:${BUSINESS.telephone}`} className="text-primary font-bold">{BUSINESS.telephone}</a>
          </p>
        </section>

      </div>
    </main>
  );
}
