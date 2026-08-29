import type { Metadata } from 'next';
import Link from 'next/link';
import { TRACK_RECORD } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Media Kit | Found It Software',
  description:
    'The official Found It Software media kit: who we are, what we build, the words, the colors, and the facts. Everything a writer, partner, or designer needs on one page.',
  alternates: { canonical: '/media' },
  openGraph: {
    title: 'Media Kit | Found It Software',
    description:
      'Who we are, what we build, the words, the colors, and the facts. One page.',
    type: 'website',
    url: 'https://www.founditsoftware.com/media',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
};

/* /media — the media kit (Trevor 8/25: "make a link to a media kit").
   One page a writer, partner, or designer can work from without asking
   questions. Laws honored: no customer counts (retired 8/16), no em-dashes,
   no "map", no guarantee language, price lives at /pricing only. */

const facts = [
  { k: 'Home', v: 'Alexandria, Louisiana' },
  { k: 'Founded by', v: 'Trevor Ruby' },
  { k: 'Years in business', v: TRACK_RECORD.yearsInBusiness },
  { k: 'What we build', v: 'Business operating systems the owner keeps' },
  { k: 'Pricing', v: 'Printed in public at founditsoftware.com/pricing' },
  { k: 'Google rating', v: TRACK_RECORD.googleRating },
];

const colors = [
  { name: 'Found It Orange', hex: '#FF5500', note: 'The only accent. Buttons, punch lines, the dot.' },
  { name: 'The Field', hex: '#050505', note: 'Near-black background. The brand lives on dark.' },
  { name: 'Paper', hex: '#FFFFFF', note: 'Headline white. Body text steps down to grays.' },
];

export default function MediaPage() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-24 relative overflow-hidden">
      <div className="max-w-[900px] mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-14">
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">Media Kit</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.9] mb-5">
            Everything You Need.<br /><span className="text-primary">One Page.</span>
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl leading-relaxed">
            Writing about us, designing for us, or introducing us? Use this page word for word. No permission needed.
          </p>
        </div>

        {/* The first mark */}
        <section className="bg-card/20 backdrop-blur-xl border border-primary/25 rounded-3xl p-8 lg:p-10 mb-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-faint mb-4">Lead With This</p>
          <p className="text-2xl lg:text-3xl font-black italic tracking-tight leading-snug text-foreground">
            You own your building, your trucks, and your name on the sign.{' '}
            <span className="text-primary">The software that runs your business ought to be yours too, code and all, because nobody rents you your own business back.</span>
          </p>
        </section>

        {/* Category and definition */}
        <section className="bg-card/10 border border-border/20 rounded-3xl p-8 lg:p-10 mb-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-faint mb-2">The Category</p>
          <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-4">
            Owned Software<span className="text-primary">.</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground font-medium leading-relaxed max-w-3xl">
            The opposite of SaaS. A Found It OS is one system that runs the whole company:{' '}
            <span className="text-foreground font-bold">the phone, the quotes, the schedule, the money.</span>{' '}
            The business owns the system outright, code and data. The monthly covers hosting, support, maintenance, and fitting, not permission to use it.
            Leave with 30 days&apos; notice and the system leaves with you, still running.
          </p>
        </section>

        {/* Boilerplate */}
        <section className="bg-card/10 border border-border/20 rounded-3xl p-8 lg:p-10 mb-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-faint mb-4">Boilerplate, Copy It Whole</p>
          <p className="text-base text-muted-foreground font-medium leading-relaxed">
            Found It Software is a custom software company in Alexandria, Louisiana. We build business
            operating systems that owners keep: code and data, outright. Local businesses across Louisiana
            and beyond run on Found It systems, from tree services and nurseries to law offices and auto
            shops. Every system runs beside the old one until the numbers match to the penny, and the AI
            inside answers the phone at midnight and chases every quote. Pricing is printed in public at
            founditsoftware.com/pricing. Founded by Trevor Ruby.
          </p>
        </section>

        {/* Fast facts */}
        <section className="bg-card/10 border border-border/20 rounded-3xl p-8 lg:p-10 mb-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-faint mb-5">Fast Facts</p>
          <div className="divide-y divide-border/10">
            {facts.map((f) => (
              <div key={f.k} className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                <p className="text-xs font-black uppercase tracking-widest text-faint sm:w-44 shrink-0">{f.k}</p>
                <p className="text-sm font-bold text-foreground">{f.v}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Brand */}
        <section className="bg-card/10 border border-border/20 rounded-3xl p-8 lg:p-10 mb-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-faint mb-5">The Brand</p>

          <div className="mb-8">
            <p className="text-xs font-black uppercase tracking-widest text-faint mb-3">Wordmark</p>
            <p className="text-3xl font-black tracking-tighter text-foreground mb-3">
              found it software<span className="text-primary">.</span>
            </p>
            <p className="text-sm text-muted-foreground font-medium max-w-2xl leading-relaxed">
              Always lowercase, always the orange period. Set in Outfit Black on the dark field.
              Never stretched, never recolored, never on a busy photo.
            </p>
          </div>

          <div className="mb-8">
            <p className="text-xs font-black uppercase tracking-widest text-faint mb-3">Colors</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {colors.map((c) => (
                <div key={c.hex} className="border border-border/20 rounded-2xl overflow-hidden">
                  <div className="h-16" style={{ backgroundColor: c.hex }} />
                  <div className="p-4">
                    <p className="text-sm font-black text-foreground">{c.name}</p>
                    <p className="text-xs font-mono font-bold text-primary mb-1">{c.hex}</p>
                    <p className="text-xs text-muted-foreground font-medium leading-snug">{c.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground font-medium mt-3">
              One accent color, ever. Chips and buttons are orange with black text.
            </p>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-widest text-faint mb-3">Type</p>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-2xl">
              Headlines: <span className="text-foreground font-bold">Outfit</span>, black weight, uppercase, italic, tight tracking.
              Body: <span className="text-foreground font-bold">Inter</span>. Both free on Google Fonts.
            </p>
          </div>
        </section>

        {/* Screenshots note + contact */}
        <section className="bg-card/10 border border-border/20 rounded-3xl p-8 lg:p-10">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-faint mb-4">Screens and Interviews</p>
          <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-3xl mb-6">
            Product screenshots live on the{' '}
            <Link href="/industries" className="text-primary font-bold hover:underline">industries pages</Link>{' '}
            and{' '}
            <Link href="/case-studies" className="text-primary font-bold hover:underline">case studies</Link>.
            Every public screen uses stand-in data; our clients&apos; real numbers never leave their systems.
            Need something specific, or Trevor on the record?
          </p>
          <p className="text-lg font-black italic tracking-tight text-foreground">
            Text <span className="text-primary">(318) 713-3781</span>
            <span className="text-sm font-bold not-italic text-muted-foreground"> and say you&apos;re press or a partner. You&apos;ll hear back fast.</span>
          </p>
        </section>

      </div>
    </main>
  );
}
