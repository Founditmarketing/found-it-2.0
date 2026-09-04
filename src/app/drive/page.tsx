import type { Metadata } from 'next';
import Link from 'next/link';
import { DriveOS } from '@/components/os/DriveOS';
import { DriveAppMode } from './app-mode';
import { VoiceAgentWidget } from '@/components/lp/VoiceAgentWidget';
import { OS_PRICING } from '@/lib/site';

/* ─── /drive — the machine, alone on stage (Trevor 9/2: "it needs to be
   the star of the show") ───
   Nothing else competes: one frame line so nobody mistakes the demo for a
   template, the drivable OS at full width, then the handoff. The page also
   provides the two anchors the machine links to internally (#lead-form,
   #talk-to-her) so every in-demo CTA lands here as well as on the flagship. */

export const metadata: Metadata = {
  title: 'Drive One — A Found It OS You Can Touch',
  description:
    'A live, drivable Found It OS fitted to a fictional tire & auto shop. Ring a sale, try to edit the books, chase the money owed — every behavior is the real system, every name is invented.',
  alternates: { canonical: '/drive' },
  openGraph: {
    title: 'Drive One — A Found It OS You Can Touch',
    description:
      'Ring a sale. Try to cheat the books. Watch the midnight check tie to the penny. Demo data, real behavior.',
    type: 'website',
    url: 'https://www.founditsoftware.com/drive',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function DrivePage() {
  return (
    <main className="bg-transparent text-foreground pt-5 sm:pt-28 lg:pt-36 pb-24 relative overflow-hidden">
      <DriveAppMode />
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-4 sm:mb-16">
          <p className="text-primary font-mono text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-2 sm:mb-4">
            Drive One &middot; Sample Data &middot; Live Behavior
          </p>
          <h1 className="hidden sm:block text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.88] text-foreground mb-4">
            A Found It OS <span className="text-primary">You Can Touch.</span>
          </h1>
          {/* phone: one short line, then the app owns the screen */}
          <p className="sm:hidden text-[13px] text-muted-foreground font-medium leading-snug px-2">
            Fitted to a tire &amp; auto shop. Every name invented, every behavior real.{' '}
            <span className="text-foreground font-bold">Yours would be different.</span>
          </p>
          <p className="hidden sm:block text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
            There is no generic Found It OS. This one was fitted to a tire &amp; auto shop —
            every name invented, every behavior real. Ring a sale. Try to edit the books.{' '}
            <span className="text-foreground font-bold">Yours would be built around your business.</span>
          </p>
        </div>

        <DriveOS appMode />

        <div id="lead-form" className="text-center mt-32 md:mt-44 scroll-mt-28">
          <div className="w-10 h-[3px] bg-primary/70 rounded-full mb-7 mx-auto" aria-hidden />
          <p className="text-3xl sm:text-4xl font-black uppercase italic tracking-tighter leading-[0.95] text-foreground mb-6">
            That was theirs. <span className="text-primary">Now see yours.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fit"
              className="inline-flex items-center justify-center px-9 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
            >
              Show Me Mine
            </Link>
            <Link
              href="/foundit-os"
              className="inline-flex items-center justify-center px-8 h-14 rounded-full border border-border/25 text-foreground/90 font-black uppercase tracking-wider text-sm hover:border-primary/50 transition-colors"
            >
              The Whole Flagship
            </Link>
          </div>
          <p className="mt-5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
            {OS_PRICING.monthly}/mo + {OS_PRICING.setup} setup &middot; Month-to-month &middot; You own the code and data
          </p>
        </div>

        <div id="talk-to-her" className="mt-32 md:mt-44 scroll-mt-24 max-w-[820px] mx-auto">
          <div className="w-10 h-[3px] bg-primary/70 rounded-full mb-7 mx-auto" aria-hidden />
          <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-3 text-foreground text-center">
            One part of the system answers the phone. <span className="text-primary">Talk to it.</span>
          </h2>
          <p className="text-base text-muted-foreground font-medium leading-relaxed mb-6 max-w-xl mx-auto text-center">
            The secretary from the demo is real, and she&rsquo;s live on this page.
          </p>
          <VoiceAgentWidget pageSlug="drive" />
        </div>
      </div>
    </main>
  );
}
