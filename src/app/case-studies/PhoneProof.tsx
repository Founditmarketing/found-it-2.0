'use client';

/* ─── PhoneProof — the calm phone cut of /case-studies (9/5) ───
   Trevor's verdict on the desktop theater at phone width: "its just
   overwhelming." The phone gets a REDUCTION, not a reflow: one quiet proof
   feed read straight from src/lib/case-files.ts (every name, status, quote,
   and receipt VERBATIM — zero new claims), demos demoted to tap-to-mount,
   the Tony video behind a tap, one close. Desktop >= lg never renders this;
   this never renders at lg+. No motion in here, so nothing needs a
   reduced-motion guard. */

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CASE_FILES, CASE_COUNTS, caseAnchor } from '@/lib/case-files';
import { TRACK_RECORD } from '@/lib/site';

/* Demo chunks load on TAP, never on page load — next/dynamic only fetches
   a chunk when the component first renders, and these only render after
   the visitor asks for them. */
const demoLoading = () => (
  <p className="text-sm text-muted-foreground font-medium py-6 text-center">Loading the demo&hellip;</p>
);
const LazyParseOrderDemo = dynamic(() => import('@/components/case-studies/ParseOrderDemo'), {
  ssr: false,
  loading: demoLoading,
});
const LazyTireQuoteDemo = dynamic(() => import('@/components/case-studies/TireQuoteDemo'), {
  ssr: false,
  loading: demoLoading,
});

const SMS_HREF = 'sms:+13187133781';

export default function PhoneProof() {
  const [openDemo, setOpenDemo] = useState<'parse' | 'tire' | null>(null);
  const [videoOn, setVideoOn] = useState(false);

  return (
    <main className="lg:hidden bg-transparent text-foreground pt-28 pb-16">
      <div className="max-w-[560px] mx-auto px-4">
        {/* ─── Opening: what this page is, and nothing else ─── */}
        <header className="mb-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3">Case Files</p>
          <h1 className="text-3xl font-black uppercase italic tracking-tighter leading-[0.95] [text-wrap:balance]">
            Real systems, running in real businesses.
          </h1>
          <p className="text-base text-muted-foreground font-medium leading-relaxed mt-3">
            Their words, their receipts.
          </p>
          {/* quiet stat line — every figure DERIVED from the record or
              TRACK_RECORD, same words as the desktop proof strip */}
          <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-faint mt-4 leading-relaxed">
            {CASE_COUNTS.total} case files &middot; {CASE_COUNTS.live} live &middot; {CASE_COUNTS.parallel} running in
            parallel &middot; {TRACK_RECORD.yearsInBusiness} years inside local businesses
          </p>
        </header>

        {/* ─── The feed: one card per case, straight from the record ─── */}
        <div className="flex flex-col gap-4 mb-10">
          {CASE_FILES.map((f) => (
            <article key={f.name} className="rounded-2xl border border-border/15 bg-card/10 p-4">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span
                  className={`inline-block font-mono text-xs font-black uppercase tracking-[0.14em] border rounded-md px-2 py-1 ${
                    f.status === 'LIVE' ? 'border-primary/60 text-primary' : 'border-border/40 text-muted-foreground'
                  }`}
                >
                  {f.status}
                </span>
              </div>
              <h2 className="text-xl font-black uppercase italic tracking-tight leading-tight mt-3">{f.name}</h2>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-primary mt-1">{f.trade}</p>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed mt-3">{f.before[0]}</p>
              {f.beforeQuote && (
                <blockquote className="text-lg font-black uppercase italic tracking-tighter leading-tight text-foreground mt-3">
                  &ldquo;{f.beforeQuote}&rdquo;
                </blockquote>
              )}
              <p className="text-3xl font-black italic tracking-tighter text-primary leading-none mt-4">
                {f.receipt}
                <span className="block text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground not-italic mt-1.5 leading-snug">
                  {f.receiptLabel}
                </span>
              </p>
              <Link
                href={`/before-after#${caseAnchor(f.name)}`}
                className="inline-flex min-h-[48px] items-center gap-1.5 text-sm font-black uppercase tracking-wide text-primary mt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
              >
                Open the full file <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        {/* ─── The demos, demoted: nothing runs until a thumb asks ─── */}
        <section className="rounded-2xl border border-border/20 bg-card/10 p-4 mb-4">
          <h2 className="text-xl font-black uppercase italic tracking-tight leading-tight">
            Drive one <span className="text-primary">yourself.</span>
          </h2>
          <p className="text-sm text-muted-foreground font-medium leading-relaxed mt-2">
            Two signature moves, replayed on demand. Recreation &middot; demo values.
          </p>
          <div className="flex flex-col gap-3 mt-4">
            <button
              type="button"
              onClick={() => setOpenDemo(openDemo === 'parse' ? null : 'parse')}
              aria-expanded={openDemo === 'parse'}
              className="min-h-[48px] w-full inline-flex items-center justify-between gap-3 rounded-xl border border-border/30 px-4 text-left text-sm font-black uppercase italic tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              It eats the messy text order.
              <span className="text-primary font-black shrink-0" aria-hidden>
                {openDemo === 'parse' ? '×' : '›'}
              </span>
            </button>
            {openDemo === 'parse' && (
              <div className="rounded-xl border border-border/20 bg-card/15 p-3">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-primary mb-2">
                  Roxanne&rsquo;s OS &middot; Wholesale Nursery
                </p>
                <LazyParseOrderDemo />
                <button
                  type="button"
                  onClick={() => setOpenDemo(null)}
                  className="min-h-[48px] w-full mt-3 inline-flex items-center justify-center rounded-xl border border-border/30 text-sm font-black uppercase tracking-wide text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Close the demo
                </button>
              </div>
            )}
            <button
              type="button"
              onClick={() => setOpenDemo(openDemo === 'tire' ? null : 'tire')}
              aria-expanded={openDemo === 'tire'}
              className="min-h-[48px] w-full inline-flex items-center justify-between gap-3 rounded-xl border border-border/30 px-4 text-left text-sm font-black uppercase italic tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              The 30-second quote.
              <span className="text-primary font-black shrink-0" aria-hidden>
                {openDemo === 'tire' ? '×' : '›'}
              </span>
            </button>
            {openDemo === 'tire' && (
              <div className="rounded-xl border border-border/20 bg-card/15 p-3">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-primary mb-2">
                  Flywheel OS &middot; Tire &amp; Auto
                </p>
                <LazyTireQuoteDemo />
                <button
                  type="button"
                  onClick={() => setOpenDemo(null)}
                  className="min-h-[48px] w-full mt-3 inline-flex items-center justify-center rounded-xl border border-border/30 text-sm font-black uppercase tracking-wide text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Close the demo
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ─── Tony's recording, behind a tap — never autoloads ─── */}
        <section className="rounded-2xl border border-primary/30 bg-primary/[0.05] p-4 mb-12">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">
            Tony&rsquo;s Shop OS &middot; Screen-Recorded At The Shop
          </p>
          {videoOn ? (
            <div className="mt-3">
              <div className="aspect-video w-full">
                <video
                  controls
                  playsInline
                  autoPlay
                  muted
                  poster="/tonys-os-demo-poster.jpg"
                  className="w-full h-full rounded-xl border border-border/20 object-cover"
                  aria-label="Screen recording of Tony's Shop OS running"
                >
                  <source src="/tonys-os-demo-v2.mp4" type="video/mp4" />
                </video>
              </div>
              <button
                type="button"
                onClick={() => setVideoOn(false)}
                className="min-h-[48px] w-full mt-3 inline-flex items-center justify-center rounded-xl border border-border/30 text-sm font-black uppercase tracking-wide text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Close the video
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setVideoOn(true)}
              className="min-h-[48px] w-full mt-3 inline-flex items-center justify-between gap-3 rounded-xl border border-primary/40 px-4 text-left text-sm font-black uppercase italic tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Watch Tony&rsquo;s system run (35s)
              <span className="text-primary font-black shrink-0" aria-hidden>
                ›
              </span>
            </button>
          )}
        </section>

        {/* ─── The close — same door the desktop close opens ─── */}
        <section className="border-t border-border/10 pt-10 pb-4 text-center">
          <div className="w-10 h-[3px] bg-primary/70 rounded-full mx-auto mb-8" aria-hidden />
          <h2 className="text-3xl font-black uppercase italic tracking-tighter leading-[0.9] [text-wrap:balance]">
            Tell us what you <span className="text-primary">want built.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground font-medium">
            Sixty seconds. A straight answer. <span className="text-foreground font-bold">Nothing to prepare.</span>
          </p>
          {/* sticky, so the door rides the bottom edge while the close is in
              view — no fixed bar, the site nav stays */}
          <div className="sticky bottom-4 z-20 mt-8">
            <Link
              href="/fit"
              className="inline-flex w-full min-h-[52px] items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#FF6414] to-[#FF5500] text-primary-foreground font-black uppercase tracking-wider text-base shadow-[0_18px_50px_-12px_rgba(255,85,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Start the Fit Check
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
          </div>
          <p className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.14em] text-faint">
            or{' '}
            <a href={SMS_HREF} className="text-primary hover:underline">
              text (318) 713-3781
            </a>{' '}
            &middot; Trevor answers
          </p>
        </section>
      </div>
    </main>
  );
}
