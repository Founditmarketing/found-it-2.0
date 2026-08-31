import type { Metadata } from 'next';
import Link from 'next/link';
import { OS_PRICING } from '@/lib/site';

/* ─── /vs-viktor — the other AI employees, a fair fight ───
   "Viktor & friends" = the rented-AI-employee category: agents that sit on
   top of the SaaS stack you already pay for. The honest row (speed to
   start) goes to them; the rest of the table is what happens to a hire
   that lives inside someone else's subscription. Content matches the
   vs-viktor graphic (Trevor-approved 8/29). */

export const metadata: Metadata = {
  title: 'Found It OS vs Viktor: The Rented AI Employee vs the One You Own',
  description:
    'Viktor-style AI employees work the software you rent. A Found It OS is an AI employee that IS the software — built around your business, and yours outright. The fair comparison.',
  alternates: { canonical: '/vs-viktor' },
  openGraph: {
    title: 'The Rented One vs the One You Own',
    description: 'Two good hires. Only one is yours.',
    type: 'website',
    url: 'https://www.founditsoftware.com/vs-viktor',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const rows = [
  {
    k: 'What it is',
    them: 'An AI employee for the software you rent.',
    os: 'An AI employee that IS the software.',
  },
  {
    k: 'It works on',
    them: 'The ten apps you already pay for, through their APIs.',
    os: 'One system built around how your business actually runs.',
  },
  {
    k: 'Your books',
    them: 'Reads your QuickBooks.',
    os: 'Replaces it — a permanent ledger tied to the bank, to the penny.',
  },
  {
    k: 'Speed to start',
    them: 'Days. Plug it into the stack you have. This row is honestly theirs.',
    os: 'Weeks. A fitting, a migration, a parallel run.',
  },
  {
    k: 'If the vendor disappears',
    them: 'The employee disappears with it.',
    os: 'Yours keeps running. The code and the data stay.',
  },
  {
    k: 'If you stop paying',
    them: 'Access ends.',
    os: 'The work stops. Not your software.',
  },
];

const faq = [
  {
    q: 'What is a rented AI employee?',
    a: 'Tools like Viktor: an AI agent you subscribe to that works across the software you already rent — reading your email, your CRM, your QuickBooks — and doing tasks inside them. They are real, and for a business happy with its current apps they can genuinely help.',
  },
  {
    q: 'How is a Found It OS different from Viktor?',
    a: 'Viktor is a worker hired into someone else’s office: it works on top of the subscriptions you already pay for, and it exists only as long as its own subscription does. A Found It OS is the office and the worker in one — custom software built around your business with the AI employee inside it, and you own the code and the data outright.',
  },
  {
    q: 'Why does ownership matter if both do the work?',
    a: 'Because of what remains when the paying stops. Cancel a rented AI employee and you keep nothing — the work, the workflows, and the memory of your business go with it. Cancel with us and the system keeps running, because it was your property from the start.',
  },
  {
    q: 'What does the owned version cost?',
    a: `${OS_PRICING.monthly} a month plus a one-time ${OS_PRICING.setup} for migration and setup, month to month. The monthly buys upkeep — backups, support, new features — not access. The system is already yours.`,
  },
];

export default function VsViktorPage() {
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
          AI Employees &middot; A Fair Fight
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
          The Rented One <span className="text-primary">vs the One You Own.</span>
        </h1>
        <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mb-12">
          Viktor and tools like it are real AI employees — hired into the software you rent.
          Ours is hired into software{' '}
          <span className="text-foreground font-bold">you own</span>. Same job title,
          different deal.
        </p>

        {/* The table, phone-sized: side-scrolling a comparison hides the
            comparison — below md each row stacks as a card instead. */}
        <div className="md:hidden space-y-4 mb-14">
          {rows.map((r) => (
            <div key={r.k} className="border border-border/15 rounded-2xl overflow-hidden bg-card/10">
              <p className="px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.18em] text-foreground bg-card/30 border-b border-border/10">{r.k}</p>
              <div className="px-4 py-3 border-b border-border/10">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground mb-1">Viktor &amp; friends</p>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{r.them}</p>
              </div>
              <div className="px-4 py-3 bg-primary/[0.06] border-l-2 border-primary/60">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-primary mb-1">Found It OS</p>
                <p className="text-sm text-foreground font-medium leading-relaxed">{r.os}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block overflow-x-auto mb-14">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr>
                <th className="py-3 pr-4 text-xs font-black uppercase tracking-[0.2em] text-faint border-b-2 border-border/30 w-[22%]"></th>
                <th className="py-3 pr-4 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground border-b-2 border-border/30 w-[39%]">Viktor &amp; friends</th>
                <th className="py-3 text-xs font-black uppercase tracking-[0.2em] text-primary border-b-2 border-primary/50 w-[39%]">Found It OS</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.k} className="align-top">
                  <td className="py-4 pr-4 text-sm font-black text-foreground border-b border-border/10">{r.k}</td>
                  <td className="py-4 pr-4 text-sm text-muted-foreground font-medium border-b border-border/10">{r.them}</td>
                  <td className="py-4 text-sm text-foreground font-medium border-b border-border/10">{r.os}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter leading-[0.95] text-foreground mb-14">
          Two good hires. <span className="text-primary">Only one is yours.</span>
        </p>

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
            href="/map"
            className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
          >
            Show Me What You&rsquo;d Build
          </Link>
          <Link
            href="/vs-grok"
            className="inline-flex items-center justify-center px-8 h-14 rounded-full border border-border/30 text-foreground font-black uppercase tracking-wider text-sm hover:border-primary/50 transition-colors"
          >
            Compared to Grok
          </Link>
          <Link
            href="/blog/ai-employee-vs-ai-employee"
            className="inline-flex items-center justify-center px-8 h-14 rounded-full border border-border/30 text-foreground font-black uppercase tracking-wider text-sm hover:border-primary/50 transition-colors"
          >
            The Longer Read
          </Link>
        </div>
      </div>
    </main>
  );
}
