import type { Metadata } from 'next';
import Link from 'next/link';
import { OS_PRICING } from '@/lib/site';
import { phoneHref, phoneDisplay, CALLRAIL_CLASS } from '@/lib/phone';

/* ─── /dare — the Taunt lander (9/6) ───
   The in-person play, put on the internet: dare the visitor to name the
   problem they think software can't fix, then promise the working fix in
   their hands before a dollar moves. Text-first (the dare is texted, not
   form-filled — this ICP texts). Same bones as /fix: appointment/text,
   never a checkout; no site nav; static; noindex (exists to pay off ads
   and DMs, not to rank). Claims discipline: see-it-first is stated as
   fact, never as a guarantee; the one receipt is anonymized and cleared;
   no client names or numbers. */

const SMS_HREF = 'sms:+13187133781';
const SMS_DISPLAY = '(318) 713-3781';

export const metadata: Metadata = {
  title: { absolute: 'The Dare | Found It Software' },
  description:
    'Name the problem you think software can’t fix. The fix shows up working — in your hands — before you pay a dollar.',
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Name the problem you think software can’t fix.',
    description: 'The fix shows up working — in your hands — before you pay us a dollar.',
    type: 'website',
    url: 'https://www.founditsoftware.com/dare',
    images: [{ url: '/dare-og-v1.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Name the problem you think software can’t fix.',
    description: 'The fix shows up working — before you pay us a dollar.',
    images: ['/dare-og-v1.png'],
  },
};

const OBJECTIONS: { q: string; a: string }[] = [
  {
    q: 'What’s the catch?',
    a: 'There isn’t a hidden one. Building the first working version fast is how we sell — you see the thing running before you spend anything. If it isn’t worth paying for, you say so and keep your money.',
  },
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

export default function DarePage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground pb-32 lg:pb-0">
      {/* static ground — same treatment as /fix, no motion */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020202]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_50%_-10%,rgba(255,100,20,0.06),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-[760px] mx-auto px-5 sm:px-6">
        {/* ─── 1 · The dare ─── */}
        <header className="pt-10 sm:pt-16">
          <p className="font-black text-lg tracking-tighter lowercase">
            found it software<span className="text-primary">.</span>
          </p>
          <p className="font-mono text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground mt-6">
            A standing dare
          </p>
          <h1 className="text-4xl sm:text-6xl font-black uppercase italic tracking-tighter leading-[0.9] mt-3 [text-wrap:balance]">
            Name the problem you think software{' '}
            <span className="text-primary">can&rsquo;t fix.</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed mt-4 max-w-xl">
            Go ahead. The worst one. The one that burns you every single week —
            the one you&rsquo;ve just learned to live with.
          </p>
        </header>

        {/* ─── 2 · The one door: text it ─── */}
        <section className="mt-7">
          <a href={SMS_HREF} className={CTA_CLASS}>
            Text us the problem
          </a>
          <p className="text-sm text-muted-foreground font-medium mt-3">
            {SMS_DISPLAY} &middot; Worst one first. You&rsquo;ll get three quick
            questions back, then we dig.
          </p>
        </section>

        {/* ─── 3 · What happens next ─── */}
        <section className="mt-10">
          <h2 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter leading-tight">
            What Happens <span className="text-primary">Next.</span>
          </h2>
          <ol className="mt-4 space-y-4 max-w-xl">
            <li className="flex gap-4">
              <span className="font-mono text-primary font-black text-lg leading-relaxed" aria-hidden>1</span>
              <p className="text-base text-muted-foreground font-medium leading-relaxed">
                <strong className="text-foreground">You text the problem.</strong>{' '}
                In your words. No form, no meeting, no deck.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-primary font-black text-lg leading-relaxed" aria-hidden>2</span>
              <p className="text-base text-muted-foreground font-medium leading-relaxed">
                <strong className="text-foreground">We dig in and build the fix.</strong>{' '}
                Not a slideshow. Not a proposal. The working thing, with your
                name on the door.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-primary font-black text-lg leading-relaxed" aria-hidden>3</span>
              <p className="text-base text-muted-foreground font-medium leading-relaxed">
                <strong className="text-foreground">
                  It lands in your hands before you pay a dollar.
                </strong>{' '}
                You click the buttons. You try to break it. You watch your own
                worst day get handled.
              </p>
            </li>
          </ol>
          <p className="text-sm text-muted-foreground font-medium mt-5 max-w-xl">
            We build these one at a time, so every dare gets dug into for real.
            If yours isn&rsquo;t a fit, we say so fast — that costs you one text.
          </p>
        </section>

        {/* ─── 4 · One receipt, anonymized from the record ─── */}
        <section className="mt-10 rounded-2xl border border-primary/30 bg-primary/[0.04] p-5 sm:p-7">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">
            The last dare we took
          </p>
          <blockquote className="text-xl sm:text-2xl font-black uppercase italic tracking-tighter leading-tight text-foreground mt-4">
            &ldquo;My people keep recording serial numbers wrong at the
            receiving door.&rdquo;
          </blockquote>
          <p className="text-sm text-muted-foreground font-medium leading-relaxed mt-4 max-w-xl">
            An equipment dealer&rsquo;s bookkeeper had fought wrong serials for
            years. Now the software refuses a bad one at the door — and names
            where the duplicate already lives. The owner typed a wrong serial
            into it himself, on his own phone, the same week he told us about
            the problem. It told him no.
          </p>
          <Link
            href="/case-studies"
            className="inline-flex min-h-[48px] items-center gap-1.5 text-xs font-black uppercase tracking-wide text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md mt-2"
          >
            See systems running right now &rarr;
          </Link>
        </section>

        {/* ─── 5 · The price, no gate ─── */}
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
            That&rsquo;s the price when you&rsquo;ve seen it working and want to
            keep it. Month-to-month. You own the code and the data.
          </p>
        </section>

        {/* ─── 6 · The risk reversal ─── */}
        <section className="mt-9">
          <h2 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tighter leading-tight">
            You Don&rsquo;t Shut <span className="text-primary">Anything Down.</span>
          </h2>
          <p className="text-base text-muted-foreground font-medium leading-relaxed mt-3 max-w-xl">
            The new system runs beside your old one, checked against it nightly,
            until you say switch.
          </p>
        </section>

        {/* ─── 7 · Fair questions ─── */}
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
          <a href={SMS_HREF} className={CTA_CLASS}>
            Text the problem: {SMS_DISPLAY}
          </a>
          <p className="text-sm text-muted-foreground font-medium mt-3">
            You own it. The code and the data, written into your contract.
            Nobody rents you your own business back.
          </p>
        </section>

        {/* ─── Minimal footer ─── */}
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

      {/* ─── Persistent thumb bar (phones/tablets) — pure CSS, no motion ─── */}
      <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/30 px-4 py-3 pb-[max(env(safe-area-inset-bottom),12px)]">
        <div className="flex gap-3 max-w-[760px] mx-auto">
          <a
            href={SMS_HREF}
            className="flex-[2] min-h-[52px] inline-flex items-center justify-center bg-primary text-primary-foreground font-black uppercase italic tracking-tighter text-sm px-4 rounded-xl shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Text us the problem
          </a>
          <Link
            href="/case-studies"
            className="flex-1 min-h-[52px] inline-flex items-center justify-center border border-border/40 text-foreground font-black uppercase italic tracking-tighter text-sm px-4 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            See proof
          </Link>
        </div>
      </div>
    </main>
  );
}
