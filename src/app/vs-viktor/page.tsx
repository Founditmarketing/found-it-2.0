import type { Metadata } from 'next';
import Link from 'next/link';
import { OS_PRICING } from '@/lib/site';

/* ─── /vs-viktor — same job title, opposite deal (9/3 rebuild to the 9.6 spec) ───
   The old version argued "generic vs custom." The real divide is architectural:
   they add intelligence ACROSS the existing stack; we rebuild the operating
   environment around the business, with the AI INSIDE it. Five stacked
   comparison blocks (Viktor neutral-left, Found It orange-right), then the
   format breaks for the one insight that's about the reader's own company:
   the software does not talk — the office manager translates. Viktor is
   treated fairly on purpose; the conclusion is stronger for it. Provenance
   line keeps the claims honest. */

export const metadata: Metadata = {
  title: 'Found It OS vs Viktor: Same Job Title, Opposite Deal',
  description:
    'Viktor adds an AI employee across the software you rent. Found It rebuilds the operating environment around your business, with the AI inside it — and you own the code and the data. A fair comparison.',
  alternates: { canonical: '/vs-viktor' },
  openGraph: {
    title: 'Same Job Title. Opposite Deal.',
    description: 'They work across what you rent. Ours works inside what you own.',
    type: 'website',
    url: 'https://www.founditsoftware.com/vs-viktor',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

/* The same five functions appear on both sides on purpose — same job,
   opposite architecture. Viktor's half is a dashed outline because it isn't
   really one system; the wires are the product. Ours is one solid container
   because the containment is the product. */
const TILES = ['PHONE', 'ESTIMATES', 'INVOICES', 'CUSTOMERS', 'BOOKS'];

function ViktorDiagram() {
  const tileY = [26, 26, 26, 122, 122];
  const tileX = [16, 166, 316, 90, 240];
  const cx = 233;
  const cy = 96;
  return (
    <svg viewBox="0 0 466 190" role="img" aria-label="Viktor: five separate rented apps, an AI working across them through wires" className="w-full h-auto">
      <rect x="2" y="2" width="462" height="186" rx="18" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeDasharray="7 6" />
      {TILES.map((t, i) => (
        <g key={t}>
          <line x1={tileX[i] + 67} y1={tileY[i] + 21} x2={cx} y2={cy} stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" />
          <rect x={tileX[i]} y={tileY[i]} width="134" height="42" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.16)" />
          <text x={tileX[i] + 67} y={tileY[i] + 26} textAnchor="middle" fontFamily="monospace" fontSize="12" fontWeight="700" letterSpacing="1.5" fill="rgba(255,255,255,0.6)">{t}</text>
        </g>
      ))}
      <rect x={cx - 36} y={cy - 15} width="72" height="30" rx="15" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" />
      <text x={cx} y={cy + 4} textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="800" letterSpacing="1.5" fill="rgba(255,255,255,0.75)">VIKTOR</text>
    </svg>
  );
}

function FoundItDiagram() {
  const tileY = [26, 26, 26, 122, 122];
  const tileX = [16, 166, 316, 90, 240];
  return (
    <svg viewBox="0 0 466 190" role="img" aria-label="Found It OS: the same five functions inside one solid owned system, AI inside, no wires" className="w-full h-auto">
      <rect x="2" y="2" width="462" height="186" rx="18" fill="rgba(255,85,0,0.04)" stroke="rgba(255,85,0,0.65)" strokeWidth="2" />
      {TILES.map((t, i) => (
        <g key={t}>
          <rect x={tileX[i]} y={tileY[i]} width="134" height="42" rx="10" fill="rgba(255,85,0,0.06)" stroke="rgba(255,85,0,0.3)" />
          <circle cx={tileX[i] + 14} cy={tileY[i] + 21} r="3" fill="#FF5500" />
          <text x={tileX[i] + 74} y={tileY[i] + 26} textAnchor="middle" fontFamily="monospace" fontSize="12" fontWeight="700" letterSpacing="1.5" fill="rgba(255,255,255,0.88)">{t}</text>
        </g>
      ))}
      <text x="233" y="102" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="800" letterSpacing="2" fill="#FF5500">ONE SYSTEM · AI INSIDE</text>
    </svg>
  );
}

const blocks = [
  {
    k: 'What it is',
    them: 'A genuinely good AI employee hired into the software you rent. It lives in Slack and Teams and works your existing apps.',
    os: 'The office and the employee in one. We rebuild the operating environment around the business, with the AI inside it.',
  },
  {
    k: 'How it works',
    them: 'Across the stack — your CRM, your email, your QuickBooks, through their APIs. The connections are the product.',
    os: 'There is no stack. One system built around how the business actually runs. The containment is the product.',
  },
  {
    k: 'Your books',
    them: 'Reads your QuickBooks.',
    os: 'Replaces it — a permanent ledger tied to the bank, to the penny, that nobody can quietly edit.',
  },
  {
    k: 'Speed to start',
    them: 'Days. Plug it into the stack you have. This row is honestly theirs.',
    os: 'Weeks. A fitting, a migration, a parallel run until the numbers agree.',
  },
  {
    k: 'When the paying stops',
    them: 'The employee, the workflows, and the memory of your business leave with the subscription.',
    os: 'The work stops. Not your software. The code and the data were yours from day one.',
  },
];

const faq = [
  {
    q: 'What is a rented AI employee?',
    a: 'Tools like Viktor: an AI agent you subscribe to that works across the software you already rent — reading your email, your CRM, your QuickBooks — and doing tasks inside them. They are real, and for a business happy with its current apps they can genuinely help.',
  },
  {
    q: 'How is a Found It OS different from Viktor?',
    a: 'The divide is architectural. Viktor adds intelligence across the existing stack — it is a worker hired into someone else’s office, and it exists as long as its subscription does. A Found It OS rebuilds the operating environment around the business: custom software with the AI employee inside it, and you own the code and the data outright. Found It is built for a business whose software stack is the problem.',
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
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
          Same Job Title. <span className="text-primary">Opposite Deal.</span>
        </h1>
        <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mb-12">
          Viktor and tools like it are real AI employees. They add intelligence{' '}
          <span className="text-foreground font-bold">across</span> the software you rent. We rebuild the
          operating environment around the business, with the AI{' '}
          <span className="text-foreground font-bold">inside</span> it — and you own it.
        </p>

        {/* The subtitle, drawn: same five functions both sides on purpose. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-16">
          <div>
            <p className="font-mono text-[11px] font-black uppercase tracking-[0.22em] text-muted-foreground mb-3">Viktor</p>
            <ViktorDiagram />
            <p className="mt-3 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-faint">Across what you rent.</p>
          </div>
          <div>
            <p className="font-mono text-[11px] font-black uppercase tracking-[0.22em] text-primary mb-3">Found It OS</p>
            <FoundItDiagram />
            <p className="mt-3 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-primary">Inside what you own.</p>
          </div>
        </div>

        {/* Five stacked comparison blocks — Viktor in neutral on the left,
            Found It in orange on the right; a table would flatten the argument. */}
        <div className="space-y-5 mb-16">
          {blocks.map((b) => (
            <div key={b.k} className="border border-border/15 rounded-2xl overflow-hidden bg-card/5">
              <p className="px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.18em] text-foreground bg-card/30 border-b border-border/10">{b.k}</p>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="px-5 py-4 border-b md:border-b-0 md:border-r border-border/10">
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground mb-1.5">Viktor</p>
                  <p className="text-[15px] text-muted-foreground font-medium leading-relaxed">{b.them}</p>
                </div>
                <div className="px-5 py-4 bg-primary/[0.05]">
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-primary mb-1.5">Found It OS</p>
                  <p className="text-[15px] text-foreground font-medium leading-relaxed">{b.os}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Break the comparison format: the one insight that's about the
            reader's own office, not about either vendor. */}
        <div className="border-y border-border/15 py-14 md:py-20 mb-16 text-center">
          <p className="text-3xl sm:text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground mb-3">
            The software does not talk.
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.9] text-primary mb-8">
            The office manager translates.
          </p>
          <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
            Walk into most offices and watch what actually happens all day: somebody reads one screen and retypes
            it into another. Explains app three to app four. Carries the number from the estimate program to the
            invoice program to the books. The stack does not talk to itself — a person translates. Viktor automates
            the translating, and that is honest work. <span className="text-foreground font-bold">We remove the need
            for it.</span> Found It is built for the business whose software stack is the problem.{' '}
            <span className="text-foreground font-bold">We build the thing the stack was trying to be.</span>
          </p>
        </div>

        {/* Tagline face-off */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
          <div>
            <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-faint mb-2">Their tagline</p>
            <p className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter text-muted-foreground">&ldquo;Not a tool. A hire.&rdquo;</p>
          </div>
          <div>
            <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2">Ours</p>
            <p className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter text-foreground">Not a hire. <span className="text-primary">Yours.</span></p>
          </div>
        </div>
        <p className="text-sm text-faint font-medium italic leading-relaxed max-w-2xl mb-14">
          Viktor details are drawn from its public product pages and its May 19, 2026 Series A announcement.
          Found It details reflect the current Found It OS ownership, security, and continuity terms.
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
            href="/lp/walkthrough"
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
