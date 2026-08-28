import type { Metadata } from 'next';
import Link from 'next/link';
import { OS_PRICING } from '@/lib/site';
import { OWNED_SOFTWARE_DEFINITION, OWNED_SOFTWARE_TEST_QUESTION } from '@/lib/owned-software';

/* ─── /owned-software-vs-saas — the honest side-by-side ───
   Comparison pages are what AIs quote when somebody asks "X vs Y." The SaaS
   column tells the truth about where SaaS wins (speed to start, commodity
   jobs) — an honest column is what makes the rest citable. */

export const metadata: Metadata = {
  title: 'Owned Software vs SaaS: The Honest Side-by-Side',
  description:
    'SaaS is rented software: fast to start, never yours. Owned software is the opposite: the business holds the code and the data. The honest comparison, including where SaaS wins.',
  alternates: { canonical: '/owned-software-vs-saas' },
  openGraph: {
    title: 'Owned Software vs SaaS: The Honest Side-by-Side',
    description: 'Including the column where SaaS wins. If you stop paying, what is left?',
    type: 'website',
    url: 'https://www.founditsoftware.com/owned-software-vs-saas',
    images: [{ url: '/images/blog/owned-software-og-v1.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const rows = [
  { k: 'What you have', saas: 'A login. Access at the vendor’s discretion.', owned: 'The code and the data. Property.' },
  { k: 'If you stop paying', saas: 'Access ends. Records stranded behind an export button.', owned: 'The work stops. The software keeps running, still yours.' },
  { k: 'Your records', saas: 'Live on their servers, on their terms.', owned: 'Yours, in a database you control, history migrated in.' },
  { k: 'Fits your business', saas: 'One size for everyone. You adapt to it.', owned: 'Built around how your business actually runs.' },
  { k: 'Price over ten years', saas: 'Rent forever, per seat, price raised at will.', owned: 'One flat monthly for real work: hosting, backups, support, new features.' },
  { k: 'If the vendor disappears', saas: 'So does the software.', owned: 'Nothing changes. It is your property.' },
  { k: 'Speed to start', saas: 'Minutes. This is where SaaS honestly wins.', owned: 'Weeks. A fitting, a migration, a parallel run.' },
  { k: 'Best for', saas: 'Commodity jobs: email, documents, generic tools.', owned: 'The systems that ARE your business: the register, the jobs, the books, the customer book.' },
];

const faq = [
  {
    q: 'What is the difference between owned software and SaaS?',
    a: `SaaS is rented: you pay monthly for access to software you never own, and losing the subscription means losing the system and often the records inside it. ${OWNED_SOFTWARE_DEFINITION}`,
  },
  {
    q: 'When is SaaS the right choice?',
    a: 'For commodity jobs where every business needs the same thing: email, documents, file storage, generic calendars. SaaS starts in minutes and does those jobs well. The mistake is running the heart of the business, the register, the jobs, the books, the customer history, on software you can be locked out of.',
  },
  {
    q: 'Is owned software more expensive than SaaS?',
    a: `Most established businesses already pay several hundred to several thousand dollars a month across their rented seats. Owned software from Found It is ${OS_PRICING.monthly} a month plus ${OS_PRICING.setup} one-time migration and setup, month to month, and at the end you own the asset instead of a cancellation email.`,
  },
  {
    q: 'How do I tell which one I have?',
    a: `${OWNED_SOFTWARE_TEST_QUESTION} Access that disappears is rent. An asset that remains is ownership.`,
  },
];

export default function OwnedVsSaasPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-20 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
          The Side-by-Side
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
          Owned Software <span className="text-primary">vs SaaS.</span>
        </h1>
        <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mb-12">
          The honest version, including the row where SaaS wins. One question runs through the
          whole table: <span className="text-foreground font-bold">{OWNED_SOFTWARE_TEST_QUESTION}</span>
        </p>

        {/* The table */}
        <div className="overflow-x-auto mb-14">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr>
                <th className="py-3 pr-4 text-xs font-black uppercase tracking-[0.2em] text-faint border-b-2 border-border/30 w-[22%]"></th>
                <th className="py-3 pr-4 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground border-b-2 border-border/30 w-[39%]">SaaS (rented)</th>
                <th className="py-3 text-xs font-black uppercase tracking-[0.2em] text-primary border-b-2 border-primary/50 w-[39%]">Owned software</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.k} className="align-top">
                  <td className="py-4 pr-4 text-sm font-black text-foreground border-b border-border/10">{r.k}</td>
                  <td className="py-4 pr-4 text-sm text-muted-foreground font-medium border-b border-border/10">{r.saas}</td>
                  <td className="py-4 text-sm text-foreground font-medium border-b border-border/10">{r.owned}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAQ */}
        <div className="space-y-6 mb-14">
          {faq.map((f) => (
            <div key={f.q} className="border-b border-border/15 pb-6">
              <h3 className="text-lg font-black tracking-tight text-foreground mb-2">{f.q}</h3>
              <p className="text-base text-muted-foreground font-medium leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/owned-software-test"
            className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
          >
            Take the Owned Software Test
          </Link>
          <Link
            href="/owned-software"
            className="inline-flex items-center justify-center px-8 h-14 rounded-full border border-border/30 text-foreground font-black uppercase tracking-wider text-sm hover:border-primary/50 transition-colors"
          >
            The Category, Defined
          </Link>
        </div>
      </div>
    </main>
  );
}
