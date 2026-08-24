'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { LiquidButton } from '@/components/ui/LiquidButton';
import { VideoTestimonials } from '@/components/portfolio/VideoTestimonials';
import { PortfolioStrip } from '@/components/portfolio/PortfolioStrip';
import { OS_PRICING, TRACK_RECORD } from '@/lib/site';

const ease = [0.16, 1, 0.3, 1] as const;

/* ─── The apps — the systems themselves, described only by what their
   public captures show. Screens come from the sanctioned os-screens set;
   every line stays inside what's already public on the rails. */
interface AppStudy {
  title: string;
  trade: string;
  src: string;
  alt: string;
  line: string;
}

const apps: AppStudy[] = [
  {
    title: 'Roxanne’s OS',
    trade: 'Wholesale Nursery',
    src: '/os-screens/roxanne-os-money-v1.png',
    alt: 'Roxanne’s OS receivables dashboard. Money owed to the nursery, aging buckets, and who owes what (demo data)',
    line: 'Orders come in as texts in fifteen formats. Paste one in. Every line gets caught or flagged in red, never dropped. The money owed sits on one screen, oldest first, with pull sheets and a crew print board behind it.',
  },
  {
    title: 'Tony’s Shop OS',
    trade: 'European Auto Repair',
    src: '/os-screens/tonys-shop-os-v1.png',
    alt: 'Tony’s Shop OS dashboard. The parking lot of declined jobs, priced and ready for win-back texts',
    line: 'The whole shop in one system. Repair orders, declined jobs priced for win-back texts, and an AI secretary on the phones after hours.',
  },
  {
    title: 'Flywheel OS',
    trade: 'Tire & Auto Shop',
    src: '/os-screens/flywheel-os-quote-v1.png',
    alt: 'Flywheel OS quote screen. A tire size typed in and every supplier priced out the door in seconds',
    line: 'Type a tire size. Every supplier priced out the door in seconds. The 30-second quote, the board, and the day’s money on one screen.',
  },
  {
    title: 'The House System',
    trade: 'Menswear Retail · Atelier Edition',
    src: '/os-screens/house-system-v1.png',
    alt: 'The House System register. A ticket rung with three lines and a live total',
    line: 'An AI point-of-sale. The register on iPad, iPhone, or computer. A client book that knows the clients. A store you can ask questions out loud. Also fitted to a luxury atelier.',
  },
  {
    title: 'Pro Carpet OS',
    trade: 'Carpet & Duct Cleaning',
    src: '/os-screens/procarpet-os-v1.png',
    alt: 'Pro Carpet OS desk. Estimate follow-up texts drafted and waiting for one-tap approval',
    line: 'Follow-up texts drafted, waiting for one-tap approval. It chases every estimate out the door. The week board runs the jobs.',
  },
  {
    title: 'The Lawyer OS',
    trade: 'Law Firm',
    src: '/os-screens/lawyer-os-prescription-v1.png',
    alt: 'Prescription Watch, every open file’s prescription date on one screen, entered by hand, red when ignored (demo data)',
    line: 'Three practice boards and settlement math to the penny. The docket never computes a deadline. A person enters every date, and it turns red if ignored. The demand letter drafts itself from the file. The trust ledger stays the lawyer’s.',
  },
];

/* ─── The marketing record — still real, now the second act. */
interface CaseStudy {
  client: string;
  industry: string;
  story: string;
}

const marketingStudies: CaseStudy[] = [
  {
    client: 'National Equipment Dealer',
    industry: 'Heavy Equipment',
    story: 'Started with $5K/month. Google Ads, SEO, and a site built to sell turned a local dealership into a national volume dealer.',
  },
  {
    client: 'Total Family Solutions',
    industry: 'Healthcare',
    story: 'They were invisible against billion-dollar giants. We got them to Top 3 in Maps, ahead of ZocDoc, Psychology Today, and BetterHelp in their market.',
  },
  {
    client: 'Stone Automotive',
    industry: 'Auto Repair',
    story: 'Auto shops live and die by the phone. We drove 150+ calls a month from their Google Business Profile alone. Bays full, mechanics busy.',
  },
  {
    client: 'Weiss & Goldring',
    industry: 'Luxury Retail',
    story: "Ask ChatGPT or Google AI for a luxury suit. Our client isn't on a list. They are the answer. That's AI search optimization.",
  },
  {
    client: "Smoker's Heaven",
    industry: 'Retail',
    story: "Retail isn't about clicks. It's about people walking in the door. We drove 7+ new customers to the store daily from Google Maps.",
  },
  {
    client: 'Sniper Off Road',
    industry: 'Automotive',
    story: 'We took the local Map Pack and turned it into big phone leads. One closed lead pays for the whole year of fees.',
  },
  {
    client: 'Futrell Marine',
    industry: 'Marine & Boat Sales',
    story: 'A Louisiana dealer wanted to win outside their state. We launched in Rogers, Arkansas and took #1 in Google search and Maps. From zero presence.',
  },
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
            The Systems We Built.{' '}
            <span className="text-primary">The Businesses That Own Them.</span>
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl leading-relaxed">
            Local businesses across central Louisiana run on software we built. Every one
            owns it outright. These aren&apos;t mockups. They&apos;re the real systems.
          </p>
        </motion.div>

        {/* ─── Featured: Edwards Roofing ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-14 rounded-2xl border border-primary/30 bg-primary/[0.05] overflow-hidden"
        >
          <div className="grid md:grid-cols-2 items-stretch">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cory-ownership-poster-v4.jpg"
              alt="Cory Edwards of Edwards Roofing on camera"
              className="w-full h-full object-cover min-h-[220px]"
            />
            <div className="p-6 lg:p-8">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Roofing & Construction</span>
              <h2 className="text-2xl lg:text-3xl font-black uppercase italic tracking-tighter text-foreground mt-1 mb-4">
                Edwards Roofing
              </h2>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-5">
                The biggest roofer in Cenla runs his whole company on a system he owns. The
                penny-audit of his books found <span className="text-white font-bold">$195,882.75</span>{' '}
                sitting in open receivables. It also caught a{' '}
                <span className="text-white font-bold">$19,000</span> bookkeeping error his old
                software never saw.
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

        {/* ─── The apps ─── */}
        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {apps.map((app, i) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.05, duration: 0.6, ease: ease as any }}
              className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={app.src} alt={app.alt} loading="lazy" className="w-full aspect-[16/10] object-cover object-top border-b border-border/10" />
              <div className="p-5">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">{app.trade}</span>
                <h3 className="text-lg font-black uppercase italic tracking-tighter text-foreground mb-2">{app.title}</h3>
                <p className="text-[13px] text-muted-foreground font-medium leading-relaxed">{app.line}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── Ownership band ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease as any }}
          className="mb-20 rounded-2xl border border-border/20 bg-card/15 p-6 lg:p-8 text-center"
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

        {/* ─── The marketing record ─── */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-foreground mb-2">
            The Marketing Record
          </h2>
          <p className="text-sm text-muted-foreground font-medium max-w-2xl leading-relaxed mb-8">
            Found It started in marketing. The record stands. Real clients, real numbers.
          </p>
          <div className="space-y-6">
            {marketingStudies.map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.6, ease: ease as any }}
                className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl overflow-hidden"
              >
                <div className="px-6 lg:px-8 py-4 border-b border-border/10">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">{study.industry}</span>
                  <h3 className="text-lg font-black uppercase italic tracking-tighter text-foreground">{study.client}</h3>
                </div>
                <div className="px-6 lg:px-8 py-6">
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{study.story}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Filmed client testimonials — click-to-play, no video bytes until pressed */}
        <VideoTestimonials />

        {/* Proof strip: real client builds, links to the /web-design portfolio */}
        <PortfolioStrip />

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
