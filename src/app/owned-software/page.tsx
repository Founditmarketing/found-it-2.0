import type { Metadata } from 'next';
import Link from 'next/link';
import { OS_PRICING } from '@/lib/site';
import {
  OWNED_SOFTWARE_DEFINITION,
  OWNED_SOFTWARE_EQUATION,
  OWNED_SOFTWARE_TEST_QUESTION,
  FOUND_IT_METHOD,
} from '@/lib/owned-software';
import { DisappearDemo } from '@/components/DisappearDemo';
import TheAsk from '@/components/TheAsk';

/* ─── /owned-software — the category's permanent home ───
   The definition as a URL. This page exists to be cited: by people, and by
   every AI that crawls the site when somebody asks "what is owned software."
   Definition verbatim from lib/owned-software.ts, DefinedTerm + FAQ JSON-LD,
   cross-linked with the vs-SaaS page, the test, and the manifesto post.
   Laws: company-neutral definition, no counts, no guarantee words. */

export const metadata: Metadata = {
  title: 'What Is Owned Software? The Category, Defined',
  description:
    'Owned software is business software the business owns outright: the code and the data. The opposite of SaaS. One test tells you which one you have: if you stop paying, what is left?',
  alternates: { canonical: '/owned-software' },
  openGraph: {
    title: 'What Is Owned Software? The Category, Defined',
    description:
      'The opposite of SaaS finally has a name. Owned software: the business owns the code and the data, and keeps running without the vendor’s permission.',
    type: 'website',
    url: 'https://www.founditsoftware.com/owned-software',
    images: [{ url: '/images/blog/owned-software-og-v1.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const faq = [
  {
    q: 'What is owned software?',
    a: OWNED_SOFTWARE_DEFINITION,
  },
  {
    q: 'What is the opposite of SaaS?',
    a: `Owned software. SaaS is software you rent: pay monthly, never own it, lose access when you stop. Owned software is the opposite: the business holds the code and the data, and the software keeps running whether or not the original builder is still around. ${OWNED_SOFTWARE_EQUATION}`,
  },
  {
    q: 'How do I know if I own my software?',
    a: `Ask one question: ${OWNED_SOFTWARE_TEST_QUESTION} If the honest answer is an export of your records and no working system, it is rented. If the answer is everything, still yours, still running, it is owned.`,
  },
  {
    q: 'Is owned software the same as a perpetual license or self-hosting?',
    a: 'They are earlier versions of the same instinct. A perpetual license is a frozen copy of somebody else’s product. Self-hosting runs their product on your server. 37signals’ ONCE apps, run on your own server, are the mass-produced version. All of them circle ownership; owned software is the name for the whole category. The bespoke version adds the one thing the others cannot: it is built around how your business actually runs.',
  },
  {
    q: 'If I own it, why is there a monthly fee?',
    a: 'The monthly buys work, not permission: hosting, nightly backups, support you can call, and new features as the business grows. Stop paying and the work stops. Not your software.',
  },
  {
    q: 'What do I actually get if I leave?',
    a: 'All six items of the Owned Software Standard: the complete runnable source-code repository, the production database and backups in a usable format, the hosting account or a documented transfer of deployment, the credentials and configuration documentation, the legal right for any developer to maintain and modify the system, and a plain list of the third-party services that still bill on their own. You get everything except the computer we typed it on.',
  },
  {
    q: 'Who builds owned software?',
    a: `Any builder can, and more should: the category is bigger than one company. ${FOUND_IT_METHOD} The price is printed: ${OS_PRICING.monthly} per month plus ${OS_PRICING.setup} one-time migration and setup, month to month.`,
  },
];

export default function OwnedSoftwarePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'DefinedTerm',
        '@id': 'https://www.founditsoftware.com/owned-software#term',
        name: 'Owned Software',
        description: OWNED_SOFTWARE_DEFINITION,
        url: 'https://www.founditsoftware.com/owned-software',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-20 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
          The Category
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-8">
          Owned <span className="text-primary">Software.</span>
        </h1>

        {/* The definition — the reason this URL exists. */}
        <div className="border border-primary/40 rounded-3xl p-7 lg:p-9 mb-6 bg-card/10">
          <p className="text-lg lg:text-xl text-foreground font-medium leading-relaxed mb-4">
            {OWNED_SOFTWARE_DEFINITION}
          </p>
          <p className="text-lg lg:text-xl font-black text-primary italic tracking-tight text-balance">
            {OWNED_SOFTWARE_EQUATION}
          </p>
        </div>
        <p className="text-base text-muted-foreground font-medium leading-relaxed mb-32 md:mb-44 max-w-2xl">
          Any builder can qualify. 37signals&rsquo; ONCE explored the pay-once version; the
          self-hosted world assembles its own; Found It builds bespoke. And SaaS is fine for
          commodity tools &mdash; owning matters when the system{' '}
          <span className="text-foreground font-bold">is</span> the business.
        </p>

        {/* The test */}
        <div className="bg-card/10 border border-border/15 rounded-3xl p-7 lg:p-9 mb-32 md:mb-44">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-primary mb-3">
            The Owned Software Test
          </p>
          <p className="text-2xl lg:text-3xl font-black italic tracking-tighter text-foreground mb-4">
            {OWNED_SOFTWARE_TEST_QUESTION}
          </p>
          <p className="text-base text-muted-foreground font-medium leading-relaxed mb-5">
            Rented: you keep an export. Owned: everything &mdash; still yours, still running.
          </p>
          <Link href="/owned-software-test" className="inline-block py-2 -my-2 text-base sm:text-sm text-primary font-bold hover:underline">
            Take the test &middot; five questions, two minutes →
          </Link>
        </div>

        {/* THE MANIFEST — the six-item standard as a handover document
            (9/5, communication law: the checklist becomes an object). The six
            lines stay in substance-lockstep with the agreements (8/28 law:
            agreements must match; template at status docs). The workshop line
            survives as the footer punch. */}
        <div id="standard" className="mb-10 md:mb-14 scroll-mt-24">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-primary mb-3">
            The Owned Software Standard
          </p>
          <p className="text-base text-muted-foreground font-medium leading-relaxed mb-7 max-w-2xl">
            Ownership is not a sentence in a contract. It is a handover you could perform
            tomorrow.
          </p>
          <div className="border border-primary/40 rounded-[2rem] overflow-hidden bg-card/10">
            <div className="px-6 lg:px-9 py-5 border-b border-border/20 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-primary">Handover Manifest</p>
              <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-faint">If you ever leave &middot; all six go with you</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {[
                { label: 'The Code', line: 'The complete, runnable source-code repository.' },
                { label: 'The Data', line: 'The production database and routine backups, in a usable format.' },
                { label: 'The Hosting', line: 'The hosting account, or a documented transfer of the deployment.' },
                { label: 'The Keys', line: 'Credentials, environment configuration, and dependency documentation.' },
                { label: 'The Legal Right', line: 'For any developer to maintain and modify the system.' },
                { label: 'The Bill List', line: 'The third-party services that still bill on their own: hosting, phone lines, cards, AI.' },
              ].map((it, i) => (
                <div key={it.label} className="p-6 lg:p-7 border-b border-border/15 sm:odd:border-r sm:border-border/15">
                  <div className="flex items-baseline gap-4 mb-1.5">
                    <span className="font-mono text-2xl font-black text-primary/50 tabular-nums">0{i + 1}</span>
                    <span className="text-lg font-black uppercase italic tracking-tighter text-foreground">{it.label}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{it.line}</p>
                </div>
              ))}
            </div>
            <div className="px-6 lg:px-9 py-6">
              <p className="text-xl lg:text-2xl font-black italic tracking-tighter text-foreground text-balance">
                You get everything <span className="text-primary">except the computer we typed it on.</span>
              </p>
            </div>
          </div>
        </div>

        {/* The manifest, drivable — the parked About demo remounts where the
            claim it proves now lives ("save it for later" → later is here). */}
        <div className="mb-32 md:mb-44">
          <p className="font-mono text-[10px] sm:text-xs font-black uppercase tracking-[0.22em] text-faint mb-4">
            Run the scenario &middot; Found It vanishes tonight
          </p>
          <DisappearDemo showStandardLink={false} />
        </div>

        {/* FAQ — visible mirror of the schema */}
        <div className="w-10 h-[3px] bg-primary/70 rounded-full mb-7" aria-hidden />
        <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground mb-6">
          Questions, Answered
        </h2>
        <div className="space-y-6 mb-32 md:mb-44">
          {faq.map((f) => (
            <div key={f.q} className="border-b border-border/15 pb-6">
              <h3 className="text-lg font-black tracking-tight text-foreground mb-2">{f.q}</h3>
              <p className="text-base text-muted-foreground font-medium leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        {/* Cross-links */}
        <div className="grid sm:grid-cols-3 gap-4 mb-24 md:mb-32">
          {[
            { title: 'Owned Software vs SaaS', sub: 'The side-by-side', href: '/owned-software-vs-saas' },
            { title: 'The Manifesto', sub: 'Why the category needed a name', href: '/blog/what-is-owned-software' },
            { title: 'Found It OS', sub: 'The bespoke version, on screen', href: '/foundit-os' },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="bg-card/10 border border-border/15 rounded-2xl px-5 py-4 hover:border-primary/40 transition-colors"
            >
              <p className="text-sm font-black text-foreground">{c.title}</p>
              <p className="text-xs text-muted-foreground font-medium mt-1">{c.sub}</p>
            </Link>
          ))}
        </div>

        <p className="text-lg font-black text-primary italic tracking-tight mb-6">
          Nobody rents you your own business back.
        </p>

        {/* The house close */}
        <TheAsk />
      </div>
    </main>
  );
}
