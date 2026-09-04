import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/* Paid-traffic landing page — "OS Proof" cold campaign (Ad 1: the number).
   Scent-matched to the ad promise 1:1 and it ends in the Map, not a
   consultation (the converged three-memo plan). noindex on purpose:
   exists to pay off the ad. Claim language law: "found" / "sitting in
   open receivables" — never "made him". */
export const metadata: Metadata = {
  title: { absolute: 'What Is Yours Missing? | Found It Software' },
  description:
    "A roofer's new software found $195,882.75 sitting in his own business — open receivables his old setup never surfaced. See what one system built around your business would catch.",
  robots: { index: false, follow: false },
  openGraph: {
    title: 'What Is Yours Missing? | Found It Software',
    description:
      "A roofer's new software found $195,882.75 sitting in his own business. See what one system built around your business would catch.",
    type: 'website',
    url: 'https://founditsoftware.com/missing',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
};

const STEPS = [
  {
    title: 'Built around your business',
    line: 'Not templates. We sit with the person who actually runs your office and build the system around how the work really moves.',
  },
  {
    title: 'It proves itself before you trust it',
    line: 'The new system runs beside your old software, matched to the penny every night, until you look at both and say switch. Proof first. Then the cutover.',
  },
  {
    title: 'You own it',
    line: 'A landlord keeps the house when you stop paying. We don’t. The system is yours — code and data — to keep.',
  },
];

export default function MissingPage() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-24 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-primary/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        {/* The promise the ad made, kept word for word */}
        <div className="mb-14 lg:mb-20">
          <p className="opacity-0 animate-reveal-up-sm delay-200 text-primary font-mono text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] mb-5">
            A True Story From Louisiana
          </p>
          <h1 className="opacity-0 animate-reveal-up delay-200 text-[9.5vw] sm:text-5xl lg:text-6xl font-black font-heading uppercase italic tracking-tighter leading-[0.92] text-white mb-8">
            A roofer&rsquo;s new software found{' '}
            <span className="text-primary not-italic">$195,882.75</span> sitting
            in his own business.
          </h1>
          <div className="opacity-0 animate-reveal-up-sm delay-300 space-y-5 text-base sm:text-lg text-white/80 font-medium leading-relaxed max-w-2xl">
            <p>
              Twenty years of roofing. A real office, real crews, real books.
              When his new system went through the records the old setup kept,
              it found nearly two hundred thousand dollars sitting in open
              receivables. Money he had already earned. It was there the whole
              time.
            </p>
            <p>
              Nothing was stolen and nobody was lazy. The old software just
              never put that number in front of anyone. That is the expensive
              part of software: not what you pay for it, what it misses.
            </p>
          </div>
        </div>

        {/* How it works — three beats, no more */}
        <div className="mb-14 lg:mb-20">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-primary mb-6">
            How We Do It
          </p>
          <div className="space-y-6">
            {STEPS.map((s, i) => (
              <div key={s.title} className="flex gap-5 items-start">
                <span className="font-mono text-primary font-black text-sm pt-1 shrink-0">
                  0{i + 1}
                </span>
                <div>
                  <p className="text-white font-black font-heading uppercase tracking-tight text-lg mb-1">
                    {s.title}
                  </p>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xl">
                    {s.line}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live proof */}
        <div className="mb-16 lg:mb-20 border border-white/10 rounded-2xl p-6 sm:p-8 bg-white/[0.02]">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-primary mb-3">
            Don&rsquo;t take the story&rsquo;s word for it
          </p>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4 max-w-2xl">
            Every system we run audits its own books nightly and publishes the
            verdict. Green means every number tied. It is live, right now, on
            the record.
          </p>
          <Link
            href="/the-record"
            className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-wide text-sm hover:gap-3 transition-all"
          >
            See The Record <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* The ask — one CTA, the Map */}
        <div className="text-center border-t border-white/10 pt-14">
          <h2 className="text-[8vw] sm:text-4xl lg:text-5xl font-black font-heading uppercase italic tracking-tighter leading-[0.95] text-white mb-5">
            What is yours missing?
          </h2>
          <p className="text-white/70 text-base sm:text-lg font-medium max-w-xl mx-auto leading-relaxed mb-8">
            Show us how your business runs today. We hand you the map of what
            we&rsquo;d build &mdash; every screen, every automation, on paper.
            Yours to keep either way.
          </p>
          <Link
            href="/lp/walkthrough"
            className="inline-flex items-center gap-3 bg-primary text-black font-black uppercase tracking-wide text-sm sm:text-base px-8 py-4 rounded-full hover:scale-[1.03] transition-transform"
          >
            Get Your Software Map <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
