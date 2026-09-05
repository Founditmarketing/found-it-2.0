'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { OS_PRICING, TRACK_RECORD } from '@/lib/site';
import { CASE_FILES, CASE_COUNTS } from '@/lib/case-files';
import ParseOrderDemo from '@/components/case-studies/ParseOrderDemo';
import TireQuoteDemo from '@/components/case-studies/TireQuoteDemo';

/* The live bounded-AI demo proves itself on this page too — code-split so
   the chunk only ships here and on the Owner Mode article. */
const OwnerModeDemo = dynamic(() => import('@/components/blog/OwnerModeDemo'));

const ease = [0.16, 1, 0.3, 1] as const;

/* ─── The fleet, honestly split (9/4) ───
   Two shelves, because the old single roll call let a skeptic assume every
   row was live — and let one row (Lonestar's "replaced") claim more than any
   source asserts. IN USE = systems with everyday-use copy already published
   elsewhere on the site. WORKSHOP = sold, building, or staging: capability
   lines only, no status invented, and they move up when their owners say
   the sentence. */
const fleetInUse: { name: string; trade: string; line: string; anchor?: string; door?: { label: string; href: string } }[] = [
  { name: 'Tony’s Shop OS', trade: 'European auto repair', line: 'Tekmetric, reverse-engineered. Running at the shop every day.', anchor: '#tonys-demo' },
  { name: 'LaCaze Outdoor OS', trade: 'Equipment dealership', line: 'Ticket to invoice to statement, one system, dealership-owned.', door: { label: 'Its nightly record', href: '/the-record' } },
  { name: 'ECW Field OS', trade: 'Windmill crews', line: 'Jobs, days, and money from the phone in the truck.' },
];
const fleetWorkshop: { name: string; trade: string; line: string; anchor?: string; door?: { label: string; href: string } }[] = [
  { name: 'Matteo Perin', trade: 'Luxury atelier', line: 'The House System fitted to a bespoke atelier. Runs beside his books every night, matched to the penny. Go-live is his call, in person.' },
  { name: 'Flywheel OS', trade: 'Tire & auto', line: 'The 30-second quote, every supplier priced out the door.', anchor: '#flywheel-demo' },
  { name: 'The House System', trade: 'Menswear retail', line: 'An AI point-of-sale. Ask the store questions out loud.', door: { label: 'The retail build', href: '/custom-software/retail-stores' } },
  { name: 'Lonestar OS', trade: 'Storage buildings', line: 'Built to replace a rented two-app stack. Nothing switches until the owner says switch.' },
];

/* Per-file refusal lines for the ledger — VERBATIM contiguous substrings of
   each file's stillTrue in src/lib/case-files.ts (the law: refusals are
   drawn from the record, never authored fresh). */
const REFUSALS: Record<string, string> = {
  'Roxanne’s OS': 'Prices never print on crew-facing paper — her rule, written into the code.',
  'DJ’s Bail Bonds': 'The system is banned from answering his phone — the ban is printed on its front screen.',
  'Doggett Law Firm': 'She will not calculate a deadline and cannot touch a dollar of client money.',
  'Walls Tree Service': 'It is banned from bidding.',
  'The Books Case': 'Payroll and tax filing are never built, at any price.',
};

function ActHeader({ kicker, children }: { kicker?: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      {kicker && <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">{kicker}</span>}
      <div className="flex items-center gap-6 mt-1">
        <h2 className="text-3xl sm:text-5xl font-black uppercase italic tracking-tighter text-foreground shrink-0">{children}</h2>
        <span className="h-px flex-1 bg-border/20" aria-hidden />
      </div>
    </div>
  );
}

export default function CaseStudiesPage() {

  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/[0.02] rounded-full blur-[150px]" />
      </div>
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">

        {/* ─── ACT I · THE TAPE ─── */}

        {/* Hero — two beats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: ease as any }}
          className="mb-14"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6 [text-wrap:balance]">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: ease as any }}
            >
              Don&apos;t Read About It.
            </motion.span>{' '}
            <motion.span
              className="inline-block text-primary"
              initial={{ opacity: 0, scale: 1.03, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ delay: 0.25, duration: 0.6, ease: ease as any }}
            >
              Watch It Work.
            </motion.span>
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl leading-relaxed mb-6">
            No slides on this page. Systems doing their jobs, one live AI you can order around
            yourself &mdash; and a status on everything, because a screenshot is
            not a case study.
          </p>
          <p className="text-sm text-muted-foreground font-medium max-w-2xl leading-relaxed mb-8">
            The software company is new &mdash; <span className="text-foreground font-bold">August 2026</span>.
            We don&apos;t have five years of software history. We have the first month, opened all
            the way up.
          </p>
          {/* The proof strip — counts DERIVED from the case-file record, never hand-typed */}
          <div className="grid grid-cols-3 sm:grid-cols-5 border-y border-border/15 divide-x divide-border/10">
            {[
              { n: String(CASE_COUNTS.total), l: 'case files' },
              { n: String(CASE_COUNTS.live), l: 'live' },
              { n: String(CASE_COUNTS.parallel), l: 'running in parallel' },
              { n: TRACK_RECORD.yearsInBusiness, l: 'years inside local businesses' },
              { n: '0', l: 'long-term contracts' },
            ].map((s) => (
              <div key={s.l} className="py-4 px-3 text-center">
                <p className="text-2xl sm:text-3xl font-black italic tracking-tighter text-foreground leading-none tabular-nums">{s.n}</p>
                <p className="font-mono text-[9px] font-black uppercase tracking-[0.14em] text-faint mt-1.5 leading-tight">{s.l}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cory hero block OFF (Trevor 9/5) — saved in git, restore when he says so */}

        {/* first door, at the first belief peak */}
        <div className="mb-14 text-right">
          <Link href="/fit" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-primary hover:underline">
            See what we&apos;d build for yours &mdash; free, 30 minutes <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Mission control — full bleed, title on the image */}
        <div className="mb-14">
          <div className="relative left-1/2 -translate-x-1/2 w-screen max-w-[1500px] mb-8">
            <div className="absolute -inset-x-20 bottom-0 h-1/2 bg-primary/[0.06] blur-[100px] pointer-events-none" aria-hidden />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              src="/os-screens/chill-os-today-v1.png"
              alt="Mission control for a national e-commerce dealer. Live gauges, abandoned carts with names, and authorized money aging toward expiry, on one dark board (shown with demo values)"
              initial={{ scale: 1.04, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: ease as any }}
              className="relative w-full rounded-none lg:rounded-xl max-sm:aspect-[4/3] max-sm:object-cover max-sm:object-left-top"
            />
            {/* bottom-right, clear of the board's own top bar (its QA Bench
                pill lives top-right and the chips were colliding with it) */}
            <span className="absolute bottom-3 right-3 z-10 flex flex-col items-end gap-1.5">
              <span className="rounded-full bg-black/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                shown with demo values
              </span>
              <span className="rounded-full bg-black/70 px-2.5 py-1 font-mono text-[9px] font-black uppercase tracking-[0.18em] text-muted-foreground">
                running beside the old system
              </span>
            </span>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 lg:p-10">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Built In The Last Thirty Days · E-Commerce</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter text-foreground mt-1">
                Mission Control For A National Dealer
              </h2>
            </div>
          </div>
          <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-3xl">
            The real board runs the real store, beside their old system, matched nightly. A national
            DIY mini-split dealer&apos;s command deck: the day&apos;s money against last week, live.
            Shoppers who reached checkout and walked, by name, with their carts saved. Authorized
            cards nobody collected, counting down to the day they expire. An AI secretary reads the
            whole board and drafts the follow-ups; a person always sends. Every number on this
            screen is a demo value.
          </p>
          <p className="text-sm font-bold text-white mt-3">Nothing switches until the owner says switch.</p>
        </div>

        {/* ─── ACT II · THE MACHINES ─── */}

        <div className="mb-14">
          <ActHeader kicker="Recorded And Replayed">
            Watch It <span className="text-primary">Work.</span>
          </ActHeader>
          <p className="text-sm text-muted-foreground font-medium mb-6 max-w-2xl">
            One real screen recording, then two signature moves replayed on a loop &mdash; demo
            values, real mechanics.
          </p>
          {/* Phones: the machines become a swipe deck (CSS relayout only, so
              the live demos mount once). sm+: the stacked grid — with
              minmax(0,1fr) so a demo table or video's intrinsic width can
              never push the column past the viewport (the 412px-on-390px
              horizontal-scroll bug the phone audit caught). */}
          <div className="max-sm:-mx-6 max-sm:px-6 max-sm:flex max-sm:gap-4 max-sm:overflow-x-auto max-sm:snap-x max-sm:snap-mandatory max-sm:pb-2 max-sm:[scrollbar-width:none] max-sm:[&::-webkit-scrollbar]:hidden sm:grid sm:gap-10 sm:grid-cols-[minmax(0,1fr)]">

            {/* the real one leads */}
            <motion.div
              id="tonys-demo"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: ease as any }}
              className="max-sm:snap-center max-sm:shrink-0 max-sm:w-[88vw] max-sm:min-w-0 scroll-mt-28 rounded-2xl border border-primary/30 bg-primary/[0.05] overflow-hidden"
            >
              <div className="px-5 pt-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">Tony&apos;s Shop OS · Screen-Recorded At The Shop</span>
                  <span className="font-mono text-[9px] font-black uppercase tracking-[0.16em] border border-primary/60 text-primary rounded-md px-2 py-0.5">Real screen recording</span>
                </div>
                <h3 className="text-lg font-black uppercase italic tracking-tighter text-foreground">This one isn&apos;t animated. It&apos;s the real system.</h3>
                <p className="text-xs text-muted-foreground font-medium italic mt-1">Tekmetric, reverse-engineered &mdash; running at the shop every day.</p>
              </div>
              <div className="p-5">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/tonys-os-demo-poster.jpg"
                  className="w-full rounded-xl border border-border/20"
                  aria-label="Screen recording of Tony's Shop OS running"
                >
                  <source src="/tonys-os-demo-v2.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>

            {/* the three recreations, zig-zagged behind ghost numerals */}
            {[
              { num: '01', id: 'roxanne-demo', side: 'left' as const, width: '', label: 'Roxanne’s OS · Wholesale Nursery', title: 'It eats the messy text order.', before: 'Today somebody retypes that text and the jasmine gets dropped.', el: <ParseOrderDemo /> },
              { num: '02', id: 'flywheel-demo', side: 'right' as const, width: 'lg:max-w-[88%] lg:ml-auto', label: 'Flywheel OS · Tire & Auto', title: 'The 30-second quote.', before: 'That used to be three supplier calls and twenty minutes of hold music.', el: <TireQuoteDemo /> },
            ].map((demo) => (
              <div key={demo.id} id={demo.id} className={`relative max-sm:snap-center max-sm:shrink-0 max-sm:w-[88vw] max-sm:min-w-0 scroll-mt-28 ${demo.width}`}>
                <span
                  aria-hidden
                  className={`max-sm:hidden absolute -top-10 ${demo.side === 'left' ? '-left-6' : '-right-6'} z-0 select-none pointer-events-none font-black italic tracking-tighter text-foreground/[0.04] text-[9rem] lg:text-[12rem] leading-none`}
                >
                  {demo.num}
                </span>
                <motion.div
                  initial={{ opacity: 0, x: demo.side === 'left' ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: ease as any }}
                  className="relative z-10 rounded-2xl border border-border/20 bg-card/15 overflow-hidden"
                >
                  <div className="px-5 pt-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">{demo.label}</span>
                      <span className="font-mono text-[9px] font-black uppercase tracking-[0.16em] border border-border/40 text-muted-foreground rounded-md px-2 py-0.5">Recreation · demo values</span>
                    </div>
                    <h3 className="text-lg font-black uppercase italic tracking-tighter text-foreground">{demo.title}</h3>
                    <p className="text-xs text-muted-foreground font-medium italic mt-1">{demo.before}</p>
                  </div>
                  <div className="p-5">{demo.el}</div>
                </motion.div>
              </div>
            ))}
            <div aria-hidden className="sm:hidden shrink-0 w-2" />
          </div>
          <p className="sm:hidden mt-3 text-center font-mono text-[10px] font-black uppercase tracking-[0.24em] text-faint">
            swipe <span className="text-primary">→</span>
          </p>
        </div>

        {/* ─── ACT III · THE LIVE ONE ─── */}
      </div>

      <section className="relative bg-black/40 border-y border-primary/30 py-14 md:py-24 mb-14 md:mb-20 z-10">
        <div className="max-w-[1000px] mx-auto px-6">
          <span className="relative flex h-3 w-3 mb-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: ease as any }}
            className="text-4xl sm:text-6xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground"
          >
            This One Isn&apos;t A Recording.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: ease as any }}
            className="text-5xl sm:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] text-primary mb-6"
          >
            It&apos;s Live.
          </motion.p>
          <p className="text-sm text-muted-foreground font-medium mb-6 max-w-2xl">
            Every system we build carries an AI with real levers and hard walls. Here&apos;s one
            holding the controls of this very page.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-black text-black">Try: &ldquo;Make the headline bigger&rdquo;</span>
            <span className="text-sm text-muted-foreground font-medium">
              Then ask it for something it shouldn&apos;t do. Watch it refuse. That wall ships in
              every OS we build.
            </span>
          </div>
          <div className="rounded-2xl shadow-[0_0_80px_-20px] shadow-primary/40">
            <OwnerModeDemo />
          </div>
          <div className="mt-6">
            <Link href="/fit" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-primary hover:underline">
              That AI works for our customers all day. Get yours &mdash; the 30-minute walkthrough{' '}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-[1000px] mx-auto px-6 relative z-10">

        {/* ─── The confession, uncaged ─── */}
        <section className="relative mb-14 md:mb-20 py-12 md:py-24">
          <span aria-hidden className="absolute -top-10 -left-4 select-none pointer-events-none text-[14rem] font-black text-primary/[0.07] leading-none">&ldquo;</span>
          <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">The First Customer Was Us</span>
          <blockquote className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.95] mt-4">
            <div className="overflow-hidden">
              <motion.span
                className="block text-foreground"
                initial={{ y: '0.7em', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: ease as any }}
              >
                &ldquo;QuickBooks silently lost $99k of my July.
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="block text-primary"
                initial={{ y: '0.7em', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7, ease: ease as any }}
              >
                My books matched the bank to the penny.&rdquo;
              </motion.span>
            </div>
          </blockquote>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-4">Trevor Ruby · Found It&apos;s own books</p>
          <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-2xl mt-4">
            We run our whole company on the same kind of system we sell &mdash; and it polices
            itself. Posting our books, its checker caught a{' '}
            <span className="text-white font-bold">$92.39</span> discrepancy in its own work and
            refused to certify the run. No green checkmark, no &ldquo;close enough.&rdquo; We fixed
            the bug. It ran again. Difference: <span className="text-white font-bold">$0.00</span>.
          </p>
          <p className="text-base font-black uppercase italic tracking-tight text-foreground mt-4 max-w-2xl">
            A bug is not a scandal. <span className="text-primary">A green checkmark over a bug is.</span>
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
            <Link
              href="/blog/moving-our-own-books"
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-primary hover:underline"
            >
              Read that story <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/blog/quickbooks-is-cancelled"
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-primary hover:underline"
            >
              The night it caught itself <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* ─── ACT IV · THE FILES ─── */}

        {/* The evidence standard — the bar every file below meets */}
        <div className="mb-10">
          <ActHeader kicker="The Standard">
            A Screenshot Is Not <span className="text-primary">A Case Study.</span>
          </ActHeader>
          <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-3xl">
            Every file below carries a status &mdash; live, or running beside the old system &mdash;
            a receipt with the pennies on, and the thing the system{' '}
            <span className="text-foreground font-bold">refuses</span> to do. When a screen shows
            demo data, it says so. When a client stays anonymous, it says why. When a system still
            runs beside the old one, we don&apos;t call it finished.
          </p>
        </div>

        {/* The six case files — statuses and receipts read from the same
            record /before-after renders; the counts in the hero derive from
            this array too. Nothing on this page can drift from the files. */}
        {/* Phones: dossier rows — stamp + name + receipt visible, the rest on
            tap (the About claims-audit pattern; native disclosure, no JS) */}
        <div className="md:hidden mb-8 border-t border-border/15">
          {CASE_FILES.map((f) => (
            <details key={f.name} className="group border-b border-border/15">
              <summary className="list-none cursor-pointer py-5 flex items-start justify-between gap-3 [&::-webkit-details-marker]:hidden">
                <span className="min-w-0">
                  <span
                    className={`inline-block font-mono text-[9px] font-black uppercase tracking-[0.18em] border rounded-md px-2 py-0.5 mb-2 ${
                      f.status === 'LIVE' ? 'border-primary/60 text-primary' : 'border-border/40 text-muted-foreground'
                    }`}
                  >
                    {f.status}
                  </span>
                  <span className="block text-lg font-black uppercase italic tracking-tight text-foreground leading-tight">{f.name}</span>
                  <span className="block text-xl font-black italic tracking-tighter text-primary leading-tight mt-1.5">{f.receipt}</span>
                </span>
                <span className="text-primary font-black transition-transform group-open:rotate-90 mt-7" aria-hidden>›</span>
              </summary>
              <div className="pb-5">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-primary">{f.trade}</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-faint mt-0.5 mb-3">{f.filed}</p>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground mb-3">{f.receiptLabel}</p>
                {REFUSALS[f.name] && (
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-3">
                    <span className="font-mono text-[9px] font-black uppercase tracking-[0.18em] text-faint mr-2 whitespace-nowrap">Still true</span>
                    {REFUSALS[f.name]}
                  </p>
                )}
                <Link
                  href="/before-after"
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wide text-primary hover:underline"
                >
                  Open the file <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </details>
          ))}
        </div>
        {/* md+: the open ledger, unchanged */}
        <div className="hidden md:block mb-8 border-t border-border/15">
          {CASE_FILES.map((f) => (
            <div key={f.name} className="py-6 border-b border-border/15 grid gap-3 md:grid-cols-[230px_1fr] md:gap-8">
              <div>
                <span
                  className={`inline-block font-mono text-[9px] font-black uppercase tracking-[0.18em] border rounded-md px-2 py-0.5 mb-2 ${
                    f.status === 'LIVE' ? 'border-primary/60 text-primary' : 'border-border/40 text-muted-foreground'
                  }`}
                >
                  {f.status}
                </span>
                <p className="text-base font-black uppercase italic tracking-tight text-foreground leading-tight">{f.name}</p>
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-primary mt-0.5">{f.trade}</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-faint mt-1">{f.filed}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-2xl sm:text-3xl font-black italic tracking-tighter text-primary leading-none">
                  {f.receipt}
                  <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground not-italic mt-1.5">
                    {f.receiptLabel}
                  </span>
                </p>
                {REFUSALS[f.name] && (
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    <span className="font-mono text-[9px] font-black uppercase tracking-[0.18em] text-faint mr-2 whitespace-nowrap">Still true</span>
                    {REFUSALS[f.name]}
                  </p>
                )}
                <Link
                  href="/before-after"
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wide text-primary hover:underline"
                >
                  Open the file <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* three doors out of the evidence room */}
        <div className="mb-20 flex flex-wrap gap-x-8 gap-y-2">
          <Link href="/before-after" className="text-xs font-black uppercase tracking-[0.14em] text-primary hover:underline">
            The full files →
          </Link>
          <Link href="/the-record" className="text-xs font-black uppercase tracking-[0.14em] text-primary hover:underline">
            The live nightly record →
          </Link>
          <Link href="/it-just-works" className="text-xs font-black uppercase tracking-[0.14em] text-primary hover:underline">
            Fully in use, per the owners →
          </Link>
        </div>

        {/* ─── The fleet, two shelves ─── */}
        <div className="mb-14 md:mb-20">
          <ActHeader>
            The Rest Of <span className="text-primary">The Fleet.</span>
          </ActHeader>

          <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-faint mb-2 mt-8">In use every day</p>
          <div className="divide-y divide-border/10 border-y border-border/10">
            {fleetInUse.map((f) => (
              <div key={f.name} className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                <div className="sm:w-56 shrink-0">
                  <p className="text-sm font-black uppercase italic tracking-tight text-foreground">{f.name}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">{f.trade}</p>
                </div>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed flex-1">{f.line}</p>
                {f.anchor && (
                  <a href={f.anchor} className="shrink-0 text-[10px] font-black uppercase tracking-[0.18em] text-primary hover:underline">
                    watch above ↑
                  </a>
                )}
                {f.door && (
                  <Link href={f.door.href} className="shrink-0 text-[10px] font-black uppercase tracking-[0.18em] text-primary hover:underline">
                    {f.door.label} →
                  </Link>
                )}
              </div>
            ))}
          </div>

          <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-faint mb-2 mt-10">
            In the workshop · sold, building, or staging
          </p>
          <div className="divide-y divide-border/10 border-y border-border/10">
            {fleetWorkshop.map((f) => (
              <div key={f.name} className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                <div className="sm:w-56 shrink-0">
                  <p className="text-sm font-black uppercase italic tracking-tight text-foreground">{f.name}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">{f.trade}</p>
                </div>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed flex-1">{f.line}</p>
                {f.anchor && (
                  <a href={f.anchor} className="shrink-0 text-[10px] font-black uppercase tracking-[0.18em] text-primary hover:underline">
                    watch the recreation ↑
                  </a>
                )}
                {f.door && (
                  <Link href={f.door.href} className="shrink-0 text-[10px] font-black uppercase tracking-[0.18em] text-primary hover:underline">
                    {f.door.label} →
                  </Link>
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground font-medium mt-3">
            Workshop systems move up to the files when their owners say the sentence &mdash; not before.
          </p>
        </div>

        {/* ─── The proof, in writing ─── */}
        <div className="mb-14 md:mb-20">
          <ActHeader>
            The Proof, <span className="text-primary">In Writing.</span>
          </ActHeader>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/i-fired-quickbooks', tag: 'Field report', title: 'I Fired QuickBooks. In Week One, My New Ledger Asked a $70,000 Question.' },
              { href: '/blog/giving-owners-full-control', tag: 'Owner Mode', title: 'The Business Had the Truth. The Agency Had the Password.' },
              { href: '/blog/bail-bonds-management-software', tag: 'Bail bonds', title: 'She’s Never Gonna Touch That Pen, Ever Again.' },
              { href: '/blog/government-bid-finder-tree-service', tag: 'Tree service', title: 'The Big Contractors Had a Bid Department. We Built Tyler One.' },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group bg-card/10 border border-border/15 rounded-2xl px-5 py-4 flex items-center justify-between gap-3 hover:border-primary/40 transition-colors"
              >
                <div className="min-w-0">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{post.tag}</span>
                  <p className="text-sm font-bold text-foreground leading-snug">{post.title}</p>
                </div>
                <ArrowRight className="w-4 h-4 shrink-0 text-primary group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>

        {/* ─── The age, addressed head-on ─── */}
        <div className="mb-14 md:mb-20 border border-border/20 rounded-3xl p-6 md:p-10 bg-card/5">
          <h2 className="text-3xl sm:text-4xl font-black uppercase italic tracking-tighter leading-[0.95] text-foreground mb-5">
            The Software Company Is New.{' '}
            <span className="text-primary">The Scar Tissue Is Not.</span>
          </h2>
          <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-3xl mb-4">
            Found It Software became the company in August 2026. Before that, Found It spent
            thirteen years inside local businesses &mdash; the phones, the leads, the handoffs, the
            places work quietly falls through. AI lowered the cost of serious custom software
            enough to make these systems practical for the same kind of businesses. Not thirteen
            years as a software platform. Thirteen years inside local businesses, finally building
            what they needed.
          </p>
          <p className="text-sm text-foreground font-medium leading-relaxed max-w-3xl">
            A new company has no history to point at. It has files. Whether to trust us isn&apos;t
            something I can say &mdash; it&apos;s something the files above either prove or
            don&apos;t. <span className="font-bold">Read them.</span>
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-4">&mdash; Trevor</p>
        </div>

        {/* ─── The finale — one ending, one button ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: ease as any }}
          className="text-center py-14 md:py-20 border-t border-border/10"
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] text-foreground mb-6">
            You&rsquo;ve Seen What We Built for Them.{' '}
            <span className="text-primary">Now Bring Us the Ugly Part.</span>
          </h2>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The code and the data, one hundred percent. Nobody rents you your own business back.{' '}
            {OS_PRICING.monthly} {OS_PRICING.monthlyLabel} + {OS_PRICING.setup} {OS_PRICING.setupLabel},
            month-to-month. One job: {OS_PRICING.promise}
          </p>
          <div className="h-px w-24 bg-primary mx-auto my-8" aria-hidden />
          <p className="text-lg text-muted-foreground font-medium italic mb-8 max-w-md mx-auto">
            Show us the work your current software still leaves behind. Thirty minutes with
            Trevor and you see the first system we&rsquo;d build for you &mdash; working screens,
            not slideware. No pitch deck. Straight answer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Solid primary on purpose (reviewer 9/4: outlined = secondary) */}
            <Link
              href="/fit"
              className="inline-flex items-center justify-center px-10 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity shadow-2xl shadow-primary/20"
            >
              Start the 60-Second Fit Check
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
