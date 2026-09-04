'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { OS_PRICING } from '@/lib/site';
import ParseOrderDemo from '@/components/case-studies/ParseOrderDemo';
import TireQuoteDemo from '@/components/case-studies/TireQuoteDemo';
import ChaseDemo from '@/components/case-studies/ChaseDemo';

/* The live bounded-AI demo proves itself on this page too — code-split so
   the chunk only ships here and on the Owner Mode article. */
const OwnerModeDemo = dynamic(() => import('@/components/blog/OwnerModeDemo'));

const ease = [0.16, 1, 0.3, 1] as const;

/* ─── The fleet — one line each, no screenshots. The page above already
   proved the software moves; this is the roll call. ─── */
const fleet: { name: string; trade: string; line: string }[] = [
  { name: 'Roxanne’s OS', trade: 'Wholesale nursery', line: 'Eats text orders in fifteen formats. Caught or flagged, never dropped.' },
  { name: 'Flywheel OS', trade: 'Tire & auto', line: 'The 30-second quote, every supplier priced out the door.' },
  { name: 'The House System', trade: 'Menswear retail', line: 'An AI point-of-sale. Ask the store questions out loud.' },
  { name: 'Pro Carpet OS', trade: 'Carpet & duct', line: 'The follow-up machine. It never forgets, a person always sends.' },
  { name: 'The Lawyer OS', trade: 'Law · built with Doggett Law, Alexandria', line: 'Practice boards, settlement math to the penny, a docket that never computes a deadline.' },
  { name: 'Tony’s Shop OS', trade: 'European auto repair', line: 'Tekmetric, reverse-engineered. Running at the shop every day.' },
  { name: 'LaCaze Outdoor OS', trade: 'Equipment dealership', line: 'Ticket to invoice to statement, one system, dealership-owned.' },
  { name: 'Lonestar OS', trade: 'Storage buildings', line: 'Replaced a rented two-app stack that cost about twenty grand a year.' },
  { name: 'ECW Field OS', trade: 'Windmill crews', line: 'Jobs, days, and money from the phone in the truck.' },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/[0.02] rounded-full blur-[150px]" />
      </div>
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: ease as any }}
          className="mb-14"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6 [text-wrap:balance]">
            Don&apos;t Read About It.{' '}
            <span className="text-primary">Watch It Work.</span>
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl leading-relaxed">
            Real businesses run on software we built, and they own every line of it. No slides on
            this page. A customer on camera, systems doing their jobs, and one live AI you can
            order around yourself.
          </p>
        </motion.div>

        {/* ─── Cory, on camera ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-14 rounded-2xl border border-primary/30 bg-primary/[0.05] overflow-hidden"
        >
          <div className="grid md:grid-cols-2 items-stretch">
            <video
              controls
              preload="none"
              playsInline
              poster="/cory-ownership-poster-v4.jpg"
              className="w-full h-full object-cover min-h-[220px] bg-black"
              aria-label="Cory Edwards of Edwards Roofing, on camera, on owning his software"
            >
              <source src="/cory-ownership-v4.mp4" type="video/mp4" />
            </video>
            <div className="p-6 lg:p-8">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Roofing & Construction · On Camera</span>
              <h2 className="text-2xl lg:text-3xl font-black uppercase italic tracking-tighter text-foreground mt-1 mb-4">
                Edwards Roofing
              </h2>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-5">
                The biggest roofer in Cenla runs his whole company on a system he owns. The
                penny-audit of his books found <span className="text-white font-bold">$195,882.75</span>{' '}
                sitting in open receivables. It also caught a{' '}
                <span className="text-white font-bold">$19,000</span> bookkeeping error his old
                software never saw. Press play. He&apos;ll tell you himself.
              </p>
              <Link
                href="/case-studies/edwards-roofing"
                className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-primary hover:underline"
              >
                Read the case study <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ─── The newest build ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-14 rounded-2xl border border-border/20 bg-card/15 overflow-hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/os-screens/chill-os-today-v1.png"
            alt="Mission control for a national e-commerce dealer. Live gauges, abandoned carts with names, and authorized money aging toward expiry, on one dark board (shown with demo values)"
            className="w-full border-b border-border/10"
          />
          <div className="p-6 lg:p-8">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Built In The Last Thirty Days · E-Commerce</span>
            <h2 className="text-2xl lg:text-3xl font-black uppercase italic tracking-tighter text-foreground mt-1 mb-3">
              Mission Control For A National Dealer
            </h2>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-3xl">
              A national DIY mini-split dealer&apos;s command deck. The day&apos;s money against last
              week, live. Shoppers who reached checkout and walked, by name, with their carts saved.
              Authorized cards nobody collected, counting down to the day they expire. An AI
              secretary reads the whole board and drafts the follow-ups; a person always sends.
              Every number on this screen is a demo value &mdash; the real board runs the real store,
              beside their old system, matched nightly. <span className="text-white font-semibold">Nothing switches until the owner says switch.</span>
            </p>
          </div>
        </motion.div>

        {/* ─── Watch it work ─── */}
        <div className="mb-14">
          <h2 className="text-xl font-black uppercase italic tracking-tighter text-foreground mb-2">
            Watch It <span className="text-primary">Work.</span>
          </h2>
          <p className="text-sm text-muted-foreground font-medium mb-6 max-w-2xl">
            Three signature moves, replayed on a loop. This is what the software actually does all
            day &mdash; demo values, real mechanics.
          </p>
          <div className="grid gap-6">
            {[
              { label: 'Roxanne’s OS · Wholesale Nursery', title: 'It eats the messy text order.', el: <ParseOrderDemo /> },
              { label: 'Flywheel OS · Tire & Auto', title: 'The 30-second quote.', el: <TireQuoteDemo /> },
              { label: 'Pro Carpet OS · Service', title: 'The follow-up machine that never forgets.', el: <ChaseDemo /> },
            ].map((demo) => (
              <motion.div
                key={demo.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: ease as any }}
                className="rounded-2xl border border-border/20 bg-card/15 overflow-hidden"
              >
                <div className="px-5 pt-5">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">{demo.label}</span>
                  <h3 className="text-lg font-black uppercase italic tracking-tighter text-foreground">{demo.title}</h3>
                </div>
                <div className="p-5">{demo.el}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── The live one ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-20"
        >
          <h2 className="text-xl font-black uppercase italic tracking-tighter text-foreground mb-2">
            This One Isn&apos;t A Recording. <span className="text-primary">It&apos;s Live.</span>
          </h2>
          <p className="text-sm text-muted-foreground font-medium mb-6 max-w-2xl">
            Every system we build carries an AI with real levers and hard walls. Here&apos;s one
            holding the controls of this very page. Tell it what to change.
          </p>
          <OwnerModeDemo />
        </motion.div>

        {/* ─── We ran it on ourselves first ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-20 rounded-2xl border border-border/20 bg-card/15 p-6 lg:p-10"
        >
          <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">The First Customer Was Us</span>
          <blockquote className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-foreground leading-[1.05] mt-3 mb-4 [text-wrap:balance]">
            &ldquo;QuickBooks silently lost $99k of my July.{' '}
            <span className="text-primary">My books matched the bank to the penny.</span>&rdquo;
          </blockquote>
          <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-2xl">
            Trevor Ruby, on Found It&apos;s own books. We run our whole company on the same kind of
            system we sell &mdash; and automating ourselves saved us between three and four hundred
            thousand dollars this year. Every claim on this page has a reconciliation behind it.
          </p>
          <Link
            href="/blog/moving-our-own-books"
            className="inline-flex items-center gap-2 mt-4 text-sm font-black uppercase tracking-wide text-primary hover:underline"
          >
            Read that story <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </motion.div>

        {/* ─── The fleet ─── */}
        <div className="mb-20">
          <h2 className="text-xl font-black uppercase italic tracking-tighter text-foreground mb-5">
            The Rest Of <span className="text-primary">The Fleet.</span>
          </h2>
          <div className="divide-y divide-border/10 border-y border-border/10">
            {fleet.map((f) => (
              <div key={f.name} className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                <div className="sm:w-56 shrink-0">
                  <p className="text-sm font-black uppercase italic tracking-tight text-foreground">{f.name}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">{f.trade}</p>
                </div>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{f.line}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── The proof, in writing ─── */}
        <div className="mb-20">
          <h2 className="text-xl font-black uppercase italic tracking-tighter text-foreground mb-5">
            The Proof, <span className="text-primary">In Writing.</span>
          </h2>
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

        {/* ─── Ownership band ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-16 rounded-2xl border border-border/20 bg-card/15 p-6 lg:p-8 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-foreground mb-3">
            Every One Of Them <span className="text-primary">Owns It.</span>
          </h2>
          <p className="text-sm text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            The code and the data, one hundred percent. Nobody rents you your own business back.
            The price is public: {OS_PRICING.monthly} {OS_PRICING.monthlyLabel} + {OS_PRICING.setup}{' '}
            {OS_PRICING.setupLabel}, month-to-month. One job: {OS_PRICING.promise}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="text-center py-16 border-t border-border/10"
        >
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
            Get A System{' '}
            <span className="text-primary">Like These.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium italic mb-8 max-w-md mx-auto">
            We&apos;ll show you the app we&apos;d build if we owned your company. Free, about thirty
            minutes, screen-shared. If it&apos;s not a fit, we tell you straight.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/lp/walkthrough">
              <LiquidButton className="px-10 h-14 text-base tracking-[0.05em] shadow-2xl shadow-primary/20">
                Let's Talk
              </LiquidButton>
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
