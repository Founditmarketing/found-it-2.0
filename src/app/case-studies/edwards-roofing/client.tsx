'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { LPFormSection } from '@/components/lp/LPFormSection';
import { trackVideoPlay } from '@/lib/analytics';
import { OS_PRICING, TRACK_RECORD } from '@/lib/site';

/* Case study: Edwards Roofing. The story is told in the order it happened —
   the scatter, the fitting, the audit, the ownership — with Cory's verbatim
   on-camera lines carrying the argument. One conversion goal at the foot. */

const AUDIT_STATS = [
  { value: '$195,882.75', label: 'Sitting in open receivables the day the system went through his books' },
  { value: '$19,000', label: 'Bookkeeping error caught — one his old software never saw' },
  { value: 'To the ¢', label: 'How the new ledger was matched against his old book, nightly' },
];

/** Verbatim from Cory's on-camera clip — never paraphrase, never extend. */
const CORY_LINES = [
  'They put my whole business in one system. It went through my books.',
  'Me and Found It — we’ve been together since the beginning.',
  'I think that’s the best part. It’s mine. I own it. The code, the data — nobody’s renting me my own business back.',
];

export default function EdwardsRoofingCaseStudy() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      {/* ─── Opening ─── */}
      <section className="relative overflow-hidden pt-32 lg:pt-40 pb-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-[-10%] w-[70vw] max-w-[900px] aspect-square rounded-full bg-primary/[0.07] blur-[130px]"
        />
        <div className="max-w-[920px] mx-auto px-6">
          <h1 className="text-[10vw] sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight font-black font-heading uppercase italic text-white [text-wrap:balance] mb-5">
            The Biggest Roofer In Cenla <span className="text-primary">Owns His Whole System.</span>
          </h1>
          <p className="text-lg sm:text-xl font-bold text-white/95 max-w-2xl leading-snug mb-3">
            Cory Edwards runs Edwards Roofing on one system — estimates, jobs, invoices, crews, and
            the books — built around how his company actually works.
          </p>
          <p className="text-base text-white/60 font-medium max-w-2xl leading-relaxed">
            He doesn&rsquo;t rent it. He owns it — the code and the data. This is what happened when
            his book went through it.
          </p>
        </div>
      </section>

      {/* ─── His own words, on camera ─── */}
      <section className="pb-14">
        <div className="max-w-[920px] mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            controls
            preload="none"
            poster="/cory-ownership-poster-v3.jpg"
            onPlay={() => trackVideoPlay('/cory-ownership-v3.mp4#case-study')}
            className="w-full rounded-2xl border border-border/25 shadow-2xl shadow-black/50"
          >
            <source src="/cory-ownership-v3.mp4" type="video/mp4" />
          </video>
          <div>
            <blockquote className="space-y-4">
              {CORY_LINES.map((line, i) => (
                <p
                  key={i}
                  className={`leading-snug ${
                    i === CORY_LINES.length - 1
                      ? 'text-xl sm:text-2xl font-black italic tracking-tight text-white'
                      : 'text-base sm:text-lg font-bold text-white/80'
                  }`}
                >
                  &ldquo;{line}&rdquo;
                </p>
              ))}
            </blockquote>
            <p className="mt-5 text-[11px] font-black uppercase tracking-[0.18em] text-white/40">
              Cory Edwards · Edwards Roofing · on camera, 20 seconds
            </p>
          </div>
        </div>
      </section>

      {/* ─── The audit numbers ─── */}
      <section className="pb-14">
        <div className="max-w-[920px] mx-auto px-6">
          <div className="rounded-2xl border border-primary/25 bg-primary/[0.05] p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter text-white mb-6">
              What The Penny-Audit Found
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {AUDIT_STATS.map((s, i) => (
                <div key={i} className="min-w-0">
                  <p className="text-2xl sm:text-3xl font-black text-primary italic tracking-tighter leading-none tabular-nums">
                    {s.value}
                  </p>
                  <p className="text-[13px] font-medium text-white/70 mt-2 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 pt-5 border-t border-primary/15 text-sm text-white/60 font-medium leading-relaxed">
              That audit is standard on every fitting. The new
              system runs beside the old one and gets matched against it, to the penny, every night,
              until the owner says go. Nothing gets ripped out on day one.
            </p>
          </div>
        </div>
      </section>

      {/* ─── The story ─── */}
      <section className="pb-16">
        <div className="max-w-[920px] mx-auto px-6 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter text-white mb-3">
              Before: The Scatter
            </h2>
            <p className="text-base text-white/70 font-medium leading-relaxed max-w-2xl">
              Like most roofing companies, the job money lived in pieces — an estimating tool here,
              invoices there, payments on a card reader, and a book nobody fully trusted. Every
              dollar had to be chased across apps that didn&rsquo;t talk to each other.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter text-white mb-3">
              The Fitting
            </h2>
            <p className="text-base text-white/70 font-medium leading-relaxed max-w-2xl">
              Found It built one ledger around how Edwards Roofing actually runs: every estimate,
              invoice, payment, and cost lands against its job; the week board runs the crews;
              insurance jobs and job photos live where the work does. The book is the sum of the
              jobs — checkable to the cent.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter text-white mb-3">
              The Part That Matters: He Owns It
            </h2>
            <p className="text-base text-white/70 font-medium leading-relaxed max-w-2xl">
              The code and the data are Cory&rsquo;s, one hundred percent. The monthly fee is
              maintenance — security, updates, new features — not rent. {TRACK_RECORD.softwareCustomers}{' '}
              local businesses run on systems built this way, at the same public price:{' '}
              {OS_PRICING.monthly} {OS_PRICING.monthlyLabel} + {OS_PRICING.setup}{' '}
              {OS_PRICING.setupLabel}, month-to-month. One job: {OS_PRICING.promise}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <Link
              href="/lp/walkthrough"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-black uppercase italic tracking-tighter px-7 py-4 rounded-xl text-sm hover:opacity-90 active:scale-[0.99] transition-all shadow-lg shadow-primary/20"
            >
              Show Me What Mine Would Look Like <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── The ask ─── */}
      <LPFormSection
        heading="Let's Map Your Business. Free."
        kicker="Free Software Map"
        ctaLabel="Show Me What Mine Would Look Like"
        subheading="30 minutes on a video call, screen-shared. We map the software we'd build for your business — live, on the call. You keep the map either way, hire us or don't."
        benefits={[
          'A free 30-minute video call — your business mapped live, screen-shared',
          'You keep the map: the app we’d build if we owned your company',
          `The price is public: ${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} setup — no surprises at the end`,
          'Month-to-month — cancel anytime, and the system stays yours.',
        ]}
        source="case_edwards_footer"
        pageSlug="case-edwards-roofing"
      />
    </main>
  );
}
