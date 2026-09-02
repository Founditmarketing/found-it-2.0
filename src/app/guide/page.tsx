import type { Metadata } from 'next';
import Link from 'next/link';
import { GuideDownloadSection } from '@/components/lp/GuideDownloadSection';
import { GUIDE_TITLE } from '@/lib/guide';
import { OS_PRICING, TRACK_RECORD } from '@/lib/site';

/* ─── /guide — the sitewide destination for every "Download The Free Guide"
   CTA. Carries normal site nav (LayoutShell only hides chrome on /lp*).
   The gate itself is the SAME component the OS landing pages use, pointed at
   the same /api/lead pipe with its own source tag (guide_page) so these
   leads are tellable from LP guide grabs at a glance. Success flows to
   /lp/thanks exactly like the LP gates — one funnel, one thank-you. */

export const metadata: Metadata = {
  title: `The Found It OS Guide — What You Get, the Price, and How a Fitting Works (Free PDF)`,
  description:
    `Free 4-page PDF: what one custom system replaces, the whole price printed (${OS_PRICING.monthly}/mo + ${OS_PRICING.setup} ${OS_PRICING.setupLabel}), how a fitting works, and the one job the system is built for: ${OS_PRICING.promise} Plain English, 2-minute read.`,
  alternates: { canonical: '/guide' },
  openGraph: {
    title: `The Found It OS Guide — What You Get, the Price, and How a Fitting Works (Free PDF)`,
    description:
      `Four pages, plain English, zero tech specs — what you actually get with a custom business operating system you own. The whole price printed, and one job: ${OS_PRICING.promise}`,
    type: 'website',
    url: 'https://www.founditsoftware.com/guide',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function GuidePage() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-16 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/[0.02] rounded-full blur-[150px]" />
      </div>

      {/* Hero — short on purpose: the gate is the page. */}
      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
          Free Guide · PDF
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
          {GUIDE_TITLE}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
          The one question every owner asks before a fitting — answered in four pages of plain
          English. What one custom system replaces, the whole price printed ({OS_PRICING.monthly}
          /mo plus {OS_PRICING.setup} {OS_PRICING.setupLabel}), how the fitting works, and the one
          job the system is built for: <span className="text-foreground font-bold">{OS_PRICING.promise}</span>{' '}
          The case studies on this site are Louisiana businesses running
          systems they own today. Read it in two minutes, hand it to your business partner.
        </p>
      </div>

      {/* The gate — same component as the OS landing pages, tagged guide_page. */}
      <GuideDownloadSection page="guide" source="guide_page" />

      {/* The other half of the pair, for whoever lands here ready to talk. */}
      <div className="max-w-[900px] mx-auto px-6 relative z-10 text-center">
        <p className="text-sm text-muted-foreground font-medium">
          Rather just talk it through?{' '}
          <Link href="/contact" className="text-primary font-bold hover:underline">
            Book a free call
          </Link>{' '}
          — 15 minutes, no pitch.
        </p>
      </div>
    </main>
  );
}
