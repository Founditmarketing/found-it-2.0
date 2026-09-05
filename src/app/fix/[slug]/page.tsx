import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { OS_PRICING } from '@/lib/site';
import { caseAnchor } from '@/lib/case-files';
import { phoneHref, phoneDisplay, CALLRAIL_CLASS } from '@/lib/phone';
import { FIX_VARIANTS, FIX_SLUGS, type FixSlug } from '../content';

/* ─── /fix/[slug] — paid problem-landers (9/5) ───
   Paid mobile traffic lands on the problem it clicked, sees one real proof,
   and books the walkthrough with a thumb. Decisions already made: this page
   produces an APPOINTMENT, never a checkout; texting is first-class; no dev
   diary, no site nav (LayoutShell strips chrome for /fix). Statically
   generated, zero client JS of its own — the bottom bar is CSS, the
   objections are native <details>. noindex: these exist to pay off ads,
   not to rank. */

/** The permanent ad/text number (Text-MAP funnel) — texting is first-class. */
const SMS_HREF = 'sms:+13187133781';
const SMS_DISPLAY = '(318) 713-3781';

export const dynamicParams = false;

export function generateStaticParams() {
  return FIX_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const v = FIX_VARIANTS[params.slug as FixSlug];
  if (!v) return {};
  return {
    title: { absolute: `${v.metaTitle} | Found It Software` },
    description: v.metaDescription,
    robots: { index: false, follow: true },
    openGraph: {
      title: `${v.metaTitle} | Found It Software`,
      description: v.metaDescription,
      type: 'website',
      url: `https://www.founditsoftware.com/fix/${v.slug}`,
      images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
    },
  };
}

/* Objections — answers REUSED/condensed from the published FAQ copy on
   /foundit-os and /owned-software. Change them there first, mirror here. */
const OBJECTIONS: { q: string; a: string }[] = [
  {
    q: 'What happens to my business during the build?',
    a: 'Nothing yet. Your old system keeps running while the new one runs beside it, checked nightly. You switch when the numbers match.',
  },
  {
    q: 'What does the monthly cover?',
    a: 'The monthly buys work, not permission: hosting, nightly backups, support you can call, and new features as the business grows. The few services that bill on their own — phone lines, card processing, AI usage — run on your accounts, in your name, listed in plain terms before you sign.',
  },
  {
    q: 'What happens if I cancel?',
    a: 'You give thirty days’ notice. The system keeps running, and everything in it is still yours. The code, the data, all of it.',
  },
  {
    q: 'Who fixes it when something breaks?',
    a: 'We do. Support you can call is part of the monthly. And because you own the code, any developer has the legal right to maintain and modify the system. You are never stuck with us.',
  },
];

const CTA_CLASS =
  'inline-flex w-full sm:w-auto min-h-[52px] items-center justify-center gap-2 bg-primary text-primary-foreground font-black uppercase italic tracking-tighter text-base px-8 py-3.5 rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background';

export default function FixPage({ params }: { params: { slug: string } }) {
  const v = FIX_VARIANTS[params.slug as FixSlug];
  if (!v) return notFound();

  const fitHref = `/fit?p=${v.slug}`;

  return (
    <main className="relative min-h-screen bg-background text-foreground pb-32 lg:pb-0">
      {/* static ground — same treatment as the audited LP shell, no motion */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020202]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_50%_-10%,rgba(255,100,20,0.06),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-[760px] mx-auto px-5 sm:px-6">
        {/* ─── 1 · The problem, in plain words ─── */}
        <header className="pt-10 sm:pt-16">
          <p className="font-black text-lg tracking-tighter lowercase">
            found it software<span className="text-primary">.</span>
          </p>
          <h1 className="text-4xl sm:text-6xl font-black uppercase italic tracking-tighter leading-[0.9] mt-6 [text-wrap:balance]">
            {v.headline} <span className="text-primary">{v.headlineAccent}</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed mt-4 max-w-xl">
            {v.problem}
          </p>
          <p className="text-sm sm:text-base text-foreground font-medium leading-relaxed mt-3 max-w-xl">
            We build custom software for your calls, orders, jobs, and invoices.
            The AI inside does the repetitive work.
          </p>
        </header>

        {/* ─── 2 · The one door ─── */}
        <section className="mt-7">
          <Link href={fitHref} className={CTA_CLASS}>
            See what we&apos;d build for you
          </Link>
          <p className="text-sm text-muted-foreground font-medium mt-3">
            30 minutes with Trevor. Bring one problem. We&apos;ll show you where we&apos;d start.
          </p>
        </section>

        {/* ─── 3 · The price, no gate ─── */}
        <section className="mt-9 border-y border-border/20 py-5">
          <p className="text-2xl sm:text-3xl font-black italic tracking-tighter">
            {OS_PRICING.monthly}
            <span className="text-sm font-bold uppercase tracking-wide text-muted-foreground not-italic ml-2">
              {OS_PRICING.monthlyLabel}
            </span>
            <span className="text-muted-foreground font-medium mx-2">+</span>
            {OS_PRICING.setup}
            <span className="text-sm font-bold uppercase tracking-wide text-muted-foreground not-italic ml-2">
              {OS_PRICING.setupLabel}
            </span>
          </p>
          <p className="text-sm text-muted-foreground font-medium mt-2">
            Month-to-month. No long-term contract. You own the code and the data.
          </p>
        </section>

        {/* ─── 4 · The risk reversal ─── */}
        <section className="mt-9">
          <h2 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter leading-tight">
            You Don&apos;t Shut <span className="text-primary">Anything Down.</span>
          </h2>
          <p className="text-base text-muted-foreground font-medium leading-relaxed mt-3 max-w-xl">
            The new system runs beside your old one, checked against it nightly,
            until you say switch.
          </p>
        </section>

        {/* ─── 5 · One real proof, from the published record ─── */}
        <section className="mt-10 rounded-2xl border border-primary/30 bg-primary/[0.04] p-5 sm:p-7">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">
              {v.proof.caseName}
            </span>
            <span className="font-mono text-[9px] font-black uppercase tracking-[0.16em] border border-primary/60 text-primary rounded-md px-2 py-0.5">
              {v.proof.status}
            </span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground mt-1">
            {v.proof.trade}
          </p>
          {v.proof.quote && (
            <blockquote className="text-xl sm:text-2xl font-black uppercase italic tracking-tighter leading-tight text-foreground mt-4">
              &ldquo;{v.proof.quote}&rdquo;
              {v.proof.quoteBy && (
                <span className="block font-mono text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground not-italic mt-2">
                  {v.proof.quoteBy}
                </span>
              )}
            </blockquote>
          )}
          <p className="text-sm text-muted-foreground font-medium leading-relaxed mt-4">
            <span className="font-mono text-[9px] font-black uppercase tracking-[0.18em] text-faint mr-2">Before</span>
            {v.proof.before}
          </p>
          <p className="text-sm text-muted-foreground font-medium leading-relaxed mt-3">
            <span className="font-mono text-[9px] font-black uppercase tracking-[0.18em] text-primary mr-2">After</span>
            {v.proof.after}
          </p>
          <p className="text-2xl sm:text-3xl font-black italic tracking-tighter text-primary leading-none mt-5">
            {v.proof.receipt}
            <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground not-italic mt-1.5">
              {v.proof.receiptLabel}
            </span>
          </p>
          <p className="text-sm text-foreground font-medium leading-relaxed mt-4">{v.proof.shows}</p>
          <Link
            href={`/before-after#${caseAnchor(v.proof.caseName)}`}
            className="inline-flex min-h-[48px] items-center gap-1.5 text-xs font-black uppercase tracking-wide text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md mt-1"
          >
            Open the full file &rarr;
          </Link>
        </section>

        {/* ─── 6 · The four questions everybody asks ─── */}
        <section className="mt-10">
          <h2 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter leading-tight mb-2">
            Fair <span className="text-primary">Questions.</span>
          </h2>
          <div className="border-t border-border/15">
            {OBJECTIONS.map((o) => (
              <details key={o.q} className="group border-b border-border/15">
                <summary className="list-none cursor-pointer min-h-[48px] py-4 flex items-center justify-between gap-3 [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md">
                  <span className="text-sm sm:text-base font-black uppercase italic tracking-tight text-foreground">
                    {o.q}
                  </span>
                  <span
                    className="text-primary font-black transition-transform group-open:rotate-90 motion-reduce:transition-none"
                    aria-hidden
                  >
                    &rsaquo;
                  </span>
                </summary>
                <p className="pb-5 text-sm text-muted-foreground font-medium leading-relaxed max-w-xl">
                  {o.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ─── The door again, for people who read this far ─── */}
        <section className="mt-10 mb-14">
          <Link href={fitHref} className={CTA_CLASS}>
            Book the walkthrough
          </Link>
          <p className="text-sm text-muted-foreground font-medium mt-3">
            Or text us first: <a href={SMS_HREF} className="text-primary font-bold hover:underline">{SMS_DISPLAY}</a>.
            A human replies.
          </p>
        </section>

        {/* ─── 8 · Minimal footer ─── */}
        <footer className="border-t border-border/15 py-8 mb-2">
          <p className="font-black text-base tracking-tighter lowercase">
            found it software<span className="text-primary">.</span>
          </p>
          <p className="text-sm text-muted-foreground font-medium mt-2">
            <a href={phoneHref} className={`${CALLRAIL_CLASS} hover:text-primary transition-colors`}>
              Call {phoneDisplay}
            </a>
            <span className="mx-2 text-faint">·</span>
            <a href={SMS_HREF} className="hover:text-primary transition-colors">
              Text {SMS_DISPLAY}
            </a>
          </p>
          <p className="mt-3 flex gap-5">
            <Link
              href="/privacy-policy"
              className="text-[10px] text-faint hover:text-primary transition-colors font-bold uppercase tracking-widest"
            >
              Privacy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-[10px] text-faint hover:text-primary transition-colors font-bold uppercase tracking-widest"
            >
              Terms
            </Link>
          </p>
        </footer>
      </div>

      {/* ─── 7 · Persistent thumb bar (phones/tablets; lg+ uses the inline CTA) ───
          Pure CSS — fixed, safe-area padded; the page's pb-32 keeps it off
          every control. No entrance animation: nothing to guard for
          prefers-reduced-motion, nothing to shift layout. */}
      <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/30 px-4 py-3 pb-[max(env(safe-area-inset-bottom),12px)]">
        <div className="flex gap-3 max-w-[760px] mx-auto">
          <Link
            href={fitHref}
            className="flex-[2] min-h-[52px] inline-flex items-center justify-center bg-primary text-primary-foreground font-black uppercase italic tracking-tighter text-sm px-4 rounded-xl shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Book the walkthrough
          </Link>
          <a
            href={SMS_HREF}
            className="flex-1 min-h-[52px] inline-flex items-center justify-center border border-border/40 text-foreground font-black uppercase italic tracking-tighter text-sm px-4 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Text us
          </a>
        </div>
      </div>
    </main>
  );
}
