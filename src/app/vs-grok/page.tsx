import type { Metadata } from 'next';
import Link from 'next/link';
import { OS_PRICING } from '@/lib/site';
import TheAsk from '@/components/TheAsk';

/* ─── /vs-grok — the DIY question, answered straight ───
   Every owner with a laptop has now seen AI write software. The honest
   answer keeps the demo row: yes, the weekend demo is real. The table is
   about everything after the demo. Content matches the vs-grok graphic
   (Trevor-approved 8/29); the DIY column stays truthful where DIY wins. */

export const metadata: Metadata = {
  title: 'A Weekend With Grok vs a System You Own',
  description:
    'AI can write you a demo by Sunday — that part is real. The comparison is everything after the demo: your records, your books, proving it against the old system, and who fixes it when it breaks.',
  alternates: { canonical: '/vs-grok' },
  openGraph: {
    title: 'A Weekend With Grok vs a System You Own',
    description: 'The AI is the same. The finish line isn’t.',
    type: 'website',
    url: 'https://www.founditsoftware.com/vs-grok',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const rows = [
  {
    k: 'The demo',
    diy: 'Up by Sunday. Honestly — it will look great.',
    os: 'Same. That part of the job got easy for everybody.',
  },
  {
    k: 'Your records',
    diy: 'Empty. Every customer, every open invoice, re-typed by hand.',
    os: 'Years of history migrated in, tied to the bank.',
  },
  {
    k: 'The books',
    diy: 'A table called “invoices” that anything can overwrite.',
    os: 'A permanent ledger nobody can rewrite, checked by its own tests.',
  },
  {
    k: 'Proving it',
    diy: 'It meets the real business Monday morning, live.',
    os: 'It runs beside the old system, matched nightly, until you say go.',
  },
  {
    k: 'When it breaks',
    diy: 'You are the mechanic now. At 9 PM, on an invoice day.',
    os: 'You text a human who built it. That is what the monthly is for.',
  },
  {
    k: 'In a year',
    diy: 'Nobody is fixing it anymore, and the crew drifts back to the spreadsheets.',
    os: 'An employee your business owns outright.',
  },
];

const faq = [
  {
    q: 'Can’t I just build my own system with Grok or ChatGPT?',
    a: 'You can build a demo, and it will genuinely work. AI made that part easy for everyone, including us. The hard part was never the screens: it is migrating years of records, keeping books that cannot be quietly rewritten, proving the new system against the old one before anything switches, and being on the hook when it breaks. That is the part you would be taking on as a second job.',
  },
  {
    q: 'So what am I actually paying for if AI writes code?',
    a: `The finish line. A fitting done in person, your history migrated in, books tied to the bank, a parallel run against your old system until the numbers match night after night, and a human on the hook afterward. ${OS_PRICING.monthly} a month plus a one-time ${OS_PRICING.setup} for migration and setup — and you own the code and the data outright.`,
  },
  {
    q: 'What happens to a DIY system when the owner gets busy?',
    a: 'The same thing that happens to every side project: it stops getting fixed. Software that runs a business needs backups, updates, and someone who answers when it misbehaves. When that someone is the owner, the business is paying its most expensive person to be an unpaid mechanic.',
  },
];

export default function VsGrokPage() {
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
          Same AI &middot; Different Hands
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
          A Weekend With Grok <span className="text-primary">vs a System You Own.</span>
        </h1>
        <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mb-12">
          AI really can write you business software by Sunday. That row goes to the weekend.
          The rest of the table is everything that happens{' '}
          <span className="text-foreground font-bold">after the demo</span>.
        </p>

        {/* The table, phone-sized: side-scrolling a comparison hides the
            comparison — below md each row stacks as a card instead. */}
        <div className="md:hidden space-y-4 mb-14">
          {rows.map((r) => (
            <div key={r.k} className="border border-border/15 rounded-2xl overflow-hidden bg-card/10">
              <p className="px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.18em] text-foreground bg-card/30 border-b border-border/10">{r.k}</p>
              <div className="px-4 py-3 border-b border-border/10">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground mb-1">DIY + Grok</p>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{r.diy}</p>
              </div>
              <div className="px-4 py-3 bg-primary/[0.06] border-l-2 border-primary/60">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-primary mb-1">A Found It build</p>
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
                <th className="py-3 pr-4 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground border-b-2 border-border/30 w-[39%]">DIY + Grok</th>
                <th className="py-3 text-xs font-black uppercase tracking-[0.2em] text-primary border-b-2 border-primary/50 w-[39%]">A Found It build</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.k} className="align-top">
                  <td className="py-4 pr-4 text-sm font-black text-foreground border-b border-border/10">{r.k}</td>
                  <td className="py-4 pr-4 text-sm text-muted-foreground font-medium border-b border-border/10">{r.diy}</td>
                  <td className="py-4 text-sm text-foreground font-medium border-b border-border/10">{r.os}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter leading-[0.95] text-foreground mb-14">
          The AI is the same. <span className="text-primary">The finish line isn&rsquo;t.</span>
        </p>

        {/* The pager argument (9/3), concentrated 9/5 under the
            communication law: the five bold theses survive at display scale,
            their paragraphs cut to one line each. Full argument lives in git. */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter leading-[0.95] text-foreground mb-10">
            If you&rsquo;re tech-savvy, <span className="text-primary">read this part.</span>
          </h2>
          <div className="space-y-10 md:space-y-12 max-w-3xl">
            {[
              {
                punch: <>AI collapsed the cost of the first draft. <span className="text-primary">Not the cost of production.</span></>,
                line: 'The Sunday demo feels 90% done. It\u2019s 20%. The other 80% is auth, backups, migrations, uptime.',
              },
              {
                punch: <>DIY doesn&rsquo;t kill the software bill. <span className="text-primary">It moves it into your calendar.</span></>,
                line: 'Software isn\u2019t a project, it\u2019s a pager \u2014 and every 3 AM text now routes to you.',
              },
              {
                punch: <>The dangerous parts are <span className="text-primary">exactly what DIY skips.</span></>,
                line: 'Nobody vibe-codes reconciliation. That\u2019s the difference between a demo and books you\u2019d bet the business on.',
              },
              {
                punch: <>DIY isn&rsquo;t our competitor. <span className="text-primary">It&rsquo;s your exit.</span></>,
                line: 'We deed the code either way. Month-to-month \u2014 the day we stop earning it, you leave with everything.',
              },
            ].map((t, i) => (
              <div key={i}>
                <p className="text-2xl sm:text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.95] text-foreground mb-2">
                  {t.punch}
                </p>
                <p className="text-base text-muted-foreground font-medium leading-relaxed">{t.line}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-faint font-medium leading-relaxed max-w-2xl italic">
            Honest concession: hobby-scale tools that aren&rsquo;t load-bearing? Go build. This page
            is for the owner whose Saturday project is about to become production.
          </p>
          <p className="mt-8 text-xl sm:text-2xl font-black uppercase italic tracking-tighter leading-[0.95] text-foreground">
            AI made the first draft cheap. <span className="text-primary">It didn&rsquo;t make 3 AM cheap.</span>
          </p>
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

        <p className="font-mono text-[11px] font-black uppercase tracking-[0.18em] text-faint mb-2">
          Also compared:{' '}
          <Link href="/vs-viktor" className="text-primary underline underline-offset-4 hover:text-foreground transition-colors">Viktor</Link>
          {' '}&middot;{' '}
          <Link href="/foundit-os" className="text-primary underline underline-offset-4 hover:text-foreground transition-colors">what Found It OS is</Link>
        </p>

        {/* The house close */}
        <TheAsk />
      </div>
    </main>
  );
}
