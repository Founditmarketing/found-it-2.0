import Image from 'next/image';
import Link from 'next/link';
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema, type ServiceOffer } from '@/lib/schema';
import { LeadFormEmbed } from '@/components/lp/LeadFormEmbed';
import { ExitIntent } from '@/components/lp/ExitIntent';
import { InstantAudit } from '@/components/landing/InstantAudit';
import { PersonalizedChip } from '@/components/PersonalizedChip';
import { TrackedPhoneLink } from '@/components/TrackedPhoneLink';
import { REVENUE_CLAIM, STATES_CLAIM, TRACK_RECORD } from '@/lib/site';

export interface PillarData {
  /** Service name, e.g. 'Google Ads Management' */
  name: string;
  /** Canonical path, e.g. '/google-ads-management' */
  slug: string;
  /** schema.org serviceType */
  serviceType: string;
  /** Plain-text description for Service schema */
  schemaDescription: string;
  /** Optional machine-readable pricing for the Service JSON-LD. Only Found It OS has a public sticker price. */
  offers?: ServiceOffer[];
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  intro: string;
  /** Primary CTA label (scrolls to the embedded form by default) */
  ctaLabel: string;
  /** CTA destination (defaults to the embedded form anchor) */
  ctaHref?: string;
  /** Attribution for the embedded lead form */
  formSource: string;
  formPageSlug: string;
  stats: { value: string; label: string }[];
  /** Answer-first definition block (great for AI Overviews). */
  definitionHeading: string;
  definition: string;
  includedHeading: string;
  included: { title: string; detail: string }[];
  approachHeading: string;
  approachIntro?: string;
  approach: { step: string; title: string; detail: string }[];
  /** Who it's for. */
  audienceHeading?: string;
  audience?: string[];
  chipsHeading: string;
  chips: string[];
  result?: {
    headline: string;
    stats: { value: string; label: string }[];
    narrative: string;
  };
  /** Optional screenshot gallery (e.g. Found It OS installs on screen). */
  galleryHeading?: string;
  galleryIntro?: string;
  gallery?: { src: string; alt: string; title: string; kind: string; detail: string }[];
  /** Common mistakes / what we fix. */
  mistakesHeading?: string;
  mistakes?: { title: string; detail: string }[];
  /** Pricing / what to expect. */
  pricingHeading?: string;
  pricing?: string;
  whyUsHeading: string;
  whyUs: string[];
  faqHeading: string;
  faq: { question: string; answer: string }[];
  relatedReading?: { title: string; href: string }[];
  formHeading: string;
  finalCtaHeadline: string;
  finalCtaSub: string;
}

export function ServicePillar({ data }: { data: PillarData }) {
  const ctaHref = data.ctaHref || '#lead-form';

  /* ── Stat-bar truth pass ──
     Normalize the numbers every pillar shows to the canonical constants:
     - The revenue figure always comes from REVENUE_CLAIM and always carries
       its methodology line (never imply it all came from ad spend).
     - The bare "states we operate in" framing is banned — the 48 is one
       client's shipping footprint, so it renders attributed via STATES_CLAIM. */
  const stats = data.stats.map((s) => {
    if (s.value.includes('2.3B') || s.value === REVENUE_CLAIM.figure) {
      return { value: REVENUE_CLAIM.figure, label: 'Client Revenue Generated*' };
    }
    if (/states/i.test(s.label)) {
      return { value: TRACK_RECORD.statesServed, label: 'States Reached†' };
    }
    return s;
  });
  const hasRevenueStat = stats.some((s) => s.value === REVENUE_CLAIM.figure);
  const hasStatesStat = stats.some((s) => s.label === 'States Reached†');
  const serviceSchema = buildServiceSchema({
    name: data.name,
    serviceType: data.serviceType,
    description: data.schemaDescription,
    url: data.slug,
    offers: data.offers,
  });
  const faqSchema = buildFAQSchema(data.faq);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: data.name, url: data.slug },
  ]);

  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-24 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/[0.02] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-[900px] mx-auto px-6 relative z-10">

        <nav aria-label="Breadcrumb" className="mb-10 text-xs font-bold uppercase tracking-[0.2em] text-faint">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2 text-faint">/</span>
          <span className="text-foreground">{data.name}</span>
        </nav>

        {/* Hero */}
        <header className="mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] opacity-80">{data.eyebrow}</p>
            <PersonalizedChip />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            {data.headline}{' '}
            <span className="text-primary">{data.headlineAccent}</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
            {data.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href={ctaHref} className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity">
              {data.ctaLabel}
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-card/40 border border-border/20 text-foreground font-bold uppercase tracking-wider text-sm hover:border-primary/30 transition-colors">
              Talk to Trevor
            </Link>
          </div>
        </header>

        {/* Instant site scan */}
        <section aria-label="Free instant site scan" className="mb-16">
          <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-faint mb-4">
            Free 10-Second Site Scan
          </p>
          <InstantAudit />
        </section>

        {/* Stats */}
        <section aria-label="Track record" className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card/15 border border-border/20 rounded-2xl p-5 text-center">
                <p className="text-3xl font-black text-primary italic tracking-tighter">{s.value}</p>
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-faint mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          {(hasRevenueStat || hasStatesStat) && (
            <div className="mt-3 space-y-1 text-center">
              {hasRevenueStat && (
                <p className="text-[11px] text-faint font-medium">*{REVENUE_CLAIM.methodology}</p>
              )}
              {hasStatesStat && (
                <p className="text-[11px] text-faint font-medium">†{STATES_CLAIM}</p>
              )}
            </div>
          )}
        </section>

        {/* Definition — answer-first for AI Overviews */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-5 text-foreground">
            {data.definitionHeading}
          </h2>
          <div className="border-l-4 border-primary pl-6">
            <p className="text-lg text-muted-foreground font-medium leading-relaxed">{data.definition}</p>
          </div>
        </section>

        {/* What's included */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-foreground">
            {data.includedHeading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.included.map((item) => (
              <div key={item.title} className="bg-card/10 border border-border/20 rounded-2xl p-6">
                <h3 className="text-sm font-black uppercase italic tracking-tighter text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-foreground">
            {data.approachHeading}
          </h2>
          {data.approachIntro && (
            <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mb-10">{data.approachIntro}</p>
          )}
          <div className="space-y-5">
            {data.approach.map((a) => (
              <div key={a.step} className="flex items-start gap-5">
                <span className="text-primary font-black italic text-2xl tracking-tighter shrink-0 w-12">{a.step}</span>
                <div>
                  <h3 className="text-base font-black uppercase italic tracking-tighter text-foreground mb-1">{a.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Who it's for */}
        {data.audience && data.audience.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-foreground">
              {data.audienceHeading || "Who It's For"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.audience.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">✓</span>
                  <p className="text-foreground font-bold text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Chips */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6 text-foreground">
            {data.chipsHeading}
          </h2>
          <div className="flex flex-wrap gap-3">
            {data.chips.map((c) => (
              <span key={c} className="inline-flex items-center bg-card/15 border border-primary/20 rounded-full px-5 py-2 text-sm font-bold text-foreground">
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* Result */}
        {data.result && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6 text-foreground">
              {data.result.headline}
            </h2>
            <div className="bg-card/15 border border-border/20 rounded-3xl p-8 lg:p-10">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {data.result.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl sm:text-3xl font-black text-primary italic tracking-tighter">{s.value}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-faint mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-base text-muted-foreground font-medium leading-relaxed">{data.result.narrative}</p>
            </div>
          </section>
        )}

        {/* Screenshot gallery */}
        {data.gallery && data.gallery.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
              {data.galleryHeading || 'On Screen'}
            </h2>
            {data.galleryIntro && (
              <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mb-8">{data.galleryIntro}</p>
            )}
            <div className="space-y-10">
              {data.gallery.map((g) => (
                <figure key={g.src}>
                  <div className="rounded-2xl overflow-hidden border border-border/20 bg-card/10 shadow-2xl shadow-black/30">
                    <Image src={g.src} alt={g.alt} width={1440} height={900} className="w-full h-auto" sizes="(max-width: 1024px) 100vw, 900px" />
                  </div>
                  <figcaption className="pt-3 px-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-sm font-black uppercase italic tracking-tighter text-foreground">{g.title}</p>
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/70 shrink-0">{g.kind}</p>
                    </div>
                    <p className="text-xs text-muted-foreground font-medium leading-relaxed mt-1">{g.detail}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Common mistakes */}
        {data.mistakes && data.mistakes.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-foreground">
              {data.mistakesHeading || 'Common Mistakes We Fix'}
            </h2>
            <div className="space-y-4">
              {data.mistakes.map((m) => (
                <div key={m.title} className="bg-card/10 border border-border/20 rounded-2xl p-6">
                  <h3 className="text-sm font-black uppercase italic tracking-tighter text-foreground mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{m.detail}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Pricing / what to expect */}
        {data.pricing && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-5 text-foreground">
              {data.pricingHeading || 'What to Expect'}
            </h2>
            <div className="bg-card/15 border border-border/20 rounded-2xl p-6 lg:p-8">
              <p className="text-base text-muted-foreground font-medium leading-relaxed">{data.pricing}</p>
            </div>
          </section>
        )}

        {/* Why us */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-foreground">
            {data.whyUsHeading}
          </h2>
          <div className="space-y-5">
            {data.whyUs.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">✓</span>
                <p className="text-foreground font-bold text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Lead form */}
        <section id="lead-form" className="mb-16 scroll-mt-28">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
                {data.finalCtaHeadline}
              </h2>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-6">{data.finalCtaSub}</p>
              <p className="text-sm text-muted-foreground">
                Prefer to talk? Call <TrackedPhoneLink />{' '}
                or{' '}
                <Link href="/contact" className="text-primary font-bold hover:underline">book a call</Link>.
              </p>
            </div>
            <LeadFormEmbed heading={data.formHeading} source={data.formSource} pageSlug={data.formPageSlug} />
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-foreground">
            {data.faqHeading}
          </h2>
          <div className="space-y-8">
            {data.faq.map((f) => (
              <div key={f.question}>
                <h3 className="text-base font-black text-foreground mb-2">{f.question}</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related reading */}
        {data.relatedReading && data.relatedReading.length > 0 && (
          <section>
            <h2 className="text-xl font-black uppercase italic tracking-tighter text-foreground mb-6">Keep Reading</h2>
            <ul className="space-y-3">
              {data.relatedReading.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="text-primary font-bold hover:underline text-sm">{r.title} →</Link>
                </li>
              ))}
            </ul>
          </section>
        )}

      </div>

      {/* Exit-intent offer (desktop, once per session) */}
      <ExitIntent ctaHref="#lead-form" />
    </main>
  );
}
