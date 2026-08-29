import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { LeadFormEmbed } from '@/components/lp/LeadFormEmbed';
import { MAP_VALUE } from '@/lib/site';

/* THE MAP PAGE (8/27, Trevor: "CTA needs to be more bad ass"): the button
   says "Get Your Software Map" — so the click lands on the map, not on
   another product page. One promise, one form, nothing else to read.
   The reviewer called the routing mismatch "the most valuable bug you fix
   all week"; this page is the fix. */

export const metadata: Metadata = {
  title: 'Get Your Software Map',
  description:
    "Show us how your business runs. We hand you the map of what we'd build — every screen, every automation, on paper. Yours to keep either way. Free in a 30-minute fitting.",
  alternates: { canonical: '/map' },
};

export default function MapPage() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-24 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1050px] mx-auto px-6 relative z-10">
        {/* The promise, kept */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="opacity-0 animate-reveal-up-sm delay-200 text-primary font-mono text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] mb-5">
            The Software Map &middot; Free in a 30-Minute Fitting
          </p>
          <h1 className="opacity-0 animate-reveal-up delay-200 text-[11vw] sm:text-6xl lg:text-7xl font-black font-heading uppercase italic tracking-tighter leading-[0.88] text-white mb-6">
            Get Your Software Map.
          </h1>
          <p className="opacity-0 animate-reveal-up-sm delay-300 text-base sm:text-lg lg:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
            Show us how your business runs today. We hand you the map of what
            we&rsquo;d build &mdash; every screen, every automation, on paper.
            Yours to keep either way; {MAP_VALUE.line}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* What the paper says */}
          <div className="opacity-0 animate-reveal-up delay-400 order-2 lg:order-1">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-primary mb-5">
              What&rsquo;s On It
            </p>
            <ul className="space-y-5 mb-8">
              {[
                {
                  title: 'Every screen, named and drawn',
                  line: 'The register, the jobs, the money owed, the phone — the whole system, one page.',
                },
                {
                  title: 'The automations',
                  line: 'What types itself, what chases itself, what answers itself. Marked right on the map.',
                },
                {
                  title: 'The migration path',
                  line: 'Your records moved in. The new system runs beside the old one, matched to the penny, until you say go.',
                },
              ].map((b) => (
                <li key={b.title} className="flex gap-4">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                  <div>
                    <p className="text-sm font-black text-foreground leading-snug">{b.title}</p>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed mt-1">{b.line}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* A real one, anonymized — proof the paper exists */}
            <Link href="/blog/what-is-a-software-map" className="group block">
              <div className="relative rounded-2xl overflow-hidden border border-border/20 group-hover:border-primary/40 transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/blog/roxanne-software-map-v1.png"
                  alt="A real software map — one nursery's whole system drawn on a single page (anonymized)"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-4 right-4 text-xs font-bold text-foreground inline-flex items-center gap-1.5">
                  A real one &mdash; see how a map gets made{' '}
                  <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-1 transition-transform" />
                </p>
              </div>
            </Link>
          </div>

          {/* The form — the whole ask */}
          <div className="opacity-0 animate-reveal-up delay-300 order-1 lg:order-2 lg:sticky lg:top-28">
            <div className="bg-card/10 backdrop-blur-xl border border-primary/20 rounded-3xl p-7 lg:p-9 shadow-2xl shadow-primary/10">
              <LeadFormEmbed
                source="map_page"
                pageSlug="map"
                heading="Start your Software Map"
                subheading="Trevor texts you today to set the free 30-minute mapping session. The map is yours to keep whether or not you hire us."
                ctaLabel="Have Trevor Text Me"
                qualify="optional"
                successNote="Got it. Trevor texts you back today to set the fitting."
                privacyNote="No spam, no list. One human replies."
              />
            </div>
            <p className="mt-5 text-center text-sm text-muted-foreground font-medium">
              Or text{' '}
              <a href="sms:+13187133781" className="text-primary font-bold hover:underline whitespace-nowrap">
                (318) 713-3781
              </a>
              . Trevor answers.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
