import Link from 'next/link';
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema } from '@/lib/schema';
import { BUSINESS } from '@/lib/site';

export interface PillarData {
  /** Service name, e.g. 'Google Ads Management' */
  name: string;
  /** Canonical path, e.g. '/google-ads-management' */
  slug: string;
  /** schema.org serviceType */
  serviceType: string;
  /** Plain-text description for Service schema */
  schemaDescription: string;
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  intro: string;
  /** Primary CTA destination (usually the matching ad LP form anchor) */
  ctaHref: string;
  ctaLabel: string;
  stats: { value: string; label: string }[];
  includedHeading: string;
  included: { title: string; detail: string }[];
  approachHeading: string;
  approachIntro?: string;
  approach: { step: string; title: string; detail: string }[];
  chipsHeading: string;
  chips: string[];
  result?: {
    headline: string;
    stats: { value: string; label: string }[];
    narrative: string;
  };
  whyUsHeading: string;
  whyUs: string[];
  faqHeading: string;
  faq: { question: string; answer: string }[];
  relatedReading?: { title: string; href: string }[];
  finalCtaHeadline: string;
  finalCtaSub: string;
}

export function ServicePillar({ data }: { data: PillarData }) {
  const serviceSchema = buildServiceSchema({
    name: data.name,
    serviceType: data.serviceType,
    description: data.schemaDescription,
    url: data.slug,
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

        <nav aria-label="Breadcrumb" className="mb-10 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2 text-muted-foreground/30">/</span>
          <span className="text-foreground">{data.name}</span>
        </nav>

        <header className="mb-16">
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-60">{data.eyebrow}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
            {data.headline}{' '}
            <span className="text-primary">{data.headlineAccent}</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
            {data.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href={data.ctaHref} className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity">
              {data.ctaLabel}
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-card/40 border border-border/20 text-foreground font-bold uppercase tracking-wider text-sm hover:border-primary/30 transition-colors">
              Talk to Trevor
            </Link>
          </div>
        </header>

        <section aria-label="Track record" className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
          {data.stats.map((s) => (
            <div key={s.label} className="bg-card/15 border border-border/20 rounded-2xl p-5 text-center">
              <p className="text-3xl font-black text-primary italic tracking-tighter">{s.value}</p>
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground/60 mt-1">{s.label}</p>
            </div>
          ))}
        </section>

        <section className="mb-20">
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

        <section className="mb-20">
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

        <section className="mb-20">
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

        {data.result && (
          <section className="mb-20">
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6 text-foreground">
              {data.result.headline}
            </h2>
            <div className="bg-card/15 border border-border/20 rounded-3xl p-8 lg:p-10">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {data.result.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl sm:text-3xl font-black text-primary italic tracking-tighter">{s.value}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-muted-foreground/60 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-base text-muted-foreground font-medium leading-relaxed">{data.result.narrative}</p>
            </div>
          </section>
        )}

        <section className="mb-20">
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

        <section className="mb-20">
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

        {data.relatedReading && data.relatedReading.length > 0 && (
          <section className="mb-20">
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

        <section className="text-center border-t border-border/10 pt-16">
          <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4 text-foreground">
            {data.finalCtaHeadline}
          </h2>
          <p className="text-lg text-muted-foreground font-medium italic mb-8 max-w-md mx-auto">{data.finalCtaSub}</p>
          <Link href={data.ctaHref} className="inline-flex items-center justify-center px-10 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity">
            {data.ctaLabel}
          </Link>
          <p className="text-sm text-muted-foreground mt-6">
            Or call <a href={`tel:${BUSINESS.telephone}`} className="text-primary font-bold">{BUSINESS.telephone}</a>
          </p>
        </section>

      </div>
    </main>
  );
}
