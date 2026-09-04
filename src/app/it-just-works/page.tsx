import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/* ─── /it-just-works — the registry of accounts fully in use (9/3) ───
   Trevor's spec: "live accounts that I tell you are fully in use." The bar
   is deliberately brutal — not sold, not building, not parallel — and an
   account lands here ONLY when Trevor says the owner's whole day runs on
   it. Entries carry the date the owner's word was taken, per the About
   page law: human-confirmed things get a date, nothing merely looks live.
   Names appear only if they are already sanctioned-public elsewhere on the
   site. Adding an account = one entry in ACCOUNTS, nothing else. */

export const metadata: Metadata = {
  title: 'It Just Works — Accounts Fully in Use | Found It Software',
  description:
    'The shortest page on this site, on purpose. Businesses whose whole working day runs on a Found It OS — not sold, not building, not parallel. Confirmed by the owner, dated, receipt-linked.',
  alternates: { canonical: '/it-just-works' },
  openGraph: {
    title: 'It Just Works.',
    description: 'The accounts whose whole day runs on the system. Short on purpose.',
    type: 'website',
    url: 'https://www.founditsoftware.com/it-just-works',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

type Account = {
  name: string;
  trade?: string;
  runs: string;
  confirmed: string;
  receipts: { label: string; href: string }[];
};

const ACCOUNTS: Account[] = [
  {
    name: 'Roxanne’s OS',
    trade: 'Wholesale Nursery · Central Louisiana',
    runs: 'Order intake from fifteen brokers, pull sheets, receivables, living inventory, and books rebuilt straight from the bank. She pastes an order in as it came — every line lands, or holds in red.',
    confirmed: 'Confirmed by the owner · Sep 3, 2026',
    receipts: [
      { label: 'The case file', href: '/before-after' },
      { label: 'How her system was built', href: '/blog/nursery-management-software' },
    ],
  },
  {
    name: 'DJ’s Bail Bonds OS',
    trade: 'Bail Bonds · Louisiana',
    runs: 'Applications complete themselves on a defendant’s phone at midnight while the office sleeps. The front-desk pen that filled out every form in the parish got fired.',
    confirmed: 'Confirmed by the owner · Sep 3, 2026',
    receipts: [
      { label: 'The pen story', href: '/blog/bail-bonds-management-software' },
      { label: 'The case file', href: '/before-after' },
    ],
  },
  {
    name: 'Chill OS',
    runs: 'Fully in use, per the owner. The write-up isn’t done yet — this page doesn’t wait on stories, only on the owner’s word. Case file: not yet.',
    confirmed: 'Confirmed by the owner · Sep 3, 2026',
    receipts: [],
  },
];

export default function ItJustWorksPage() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-24 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
          It just <span className="text-primary">works.</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mb-10">
          The shortest page on this site, on purpose. These are the accounts whose{' '}
          <span className="text-foreground font-bold">whole working day</span> runs on a Found It OS.
        </p>

        {/* The bar — why the list is short */}
        <div className="border-y border-border/15 py-6 mb-16 max-w-2xl">
          <p className="font-mono text-[11px] font-black uppercase tracking-[0.2em] text-faint mb-3">
            The bar for this page
          </p>
          <p className="text-base text-muted-foreground font-medium leading-relaxed">
            Fully in use means the day runs on it — not sold, not in build, not running in parallel
            beside the old system. The owner said so out loud, and we wrote the date down. An account
            leaves this page the day that stops being true.
          </p>
        </div>

        {/* The registry */}
        <div className="border-t border-border/15 mb-16">
          {ACCOUNTS.map((a) => (
            <div key={a.name} className="py-10 md:py-12 border-b border-border/15">
              <div className="flex items-center gap-3 mb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" aria-hidden />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-none text-foreground">
                  {a.name}
                </h2>
              </div>
              {a.trade && (
                <p className="font-mono text-[11px] font-black uppercase tracking-[0.18em] text-primary mb-4 ml-[22px]">
                  {a.trade}
                </p>
              )}
              <p className={`text-base md:text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mb-4 ml-[22px] ${a.trade ? "" : "mt-2.5"}`}>
                {a.runs}
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 ml-[22px]">
                <p className="font-mono text-[10px] font-black uppercase tracking-[0.16em] text-faint">{a.confirmed}</p>
                {a.receipts.map((r) => (
                  <Link
                    key={r.href + r.label}
                    href={r.href}
                    className="inline-flex items-center gap-1.5 text-sm text-primary font-black uppercase tracking-wide"
                  >
                    {r.label} <ArrowRight className="w-3.5 h-3.5" aria-hidden />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mb-10">
          Other systems are sold, building, or running in parallel right now — the dated record of
          all of it lives on <Link href="/the-record" className="text-foreground font-bold underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors">The Record</Link>{' '}
          and in <Link href="/before-after" className="text-foreground font-bold underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors">the case files</Link>.
          They move here when their owners say the sentence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/drive"
            className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
          >
            Drive One Yourself
          </Link>
          <Link
            href="/lp/walkthrough"
            className="inline-flex items-center justify-center px-8 h-14 rounded-full border border-border/25 text-foreground/90 font-black uppercase tracking-wider text-sm hover:border-primary/50 transition-colors"
          >
            Start Yours
          </Link>
        </div>
      </div>
    </main>
  );
}
