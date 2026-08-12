import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/* ─── DigDeeper: curated exits AFTER the pitch ───
   A landing page with no way to look deeper reads like a trap to a
   55-year-old owner making a $26k/yr decision — but a menu at the top is
   a row of exits where paid attention is hottest. The compromise: three
   hand-picked research paths, placed BELOW the final form so only the
   scrolled-everything-didn't-convert visitor ever sees them. Every page
   they lead to carries its own walkthrough CTA, so the loop points back. */

const PATHS = [
  {
    href: '/foundit-os',
    title: 'See Found It OS',
    detail: 'The product in depth — every screen is a real system a local business runs on.',
  },
  {
    href: '/about',
    title: 'Who we are',
    detail: "The people who show up at your shop. Local, on the sign, not a call center.",
  },
  {
    href: '/',
    title: 'The whole site',
    detail: "Take your time. The walkthrough is free whenever you're done looking.",
  },
];

export function DigDeeper() {
  return (
    <section className="py-12 px-4 border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">
          Still researching? Fair. Start here.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {PATHS.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group rounded-2xl border border-border/40 bg-card/10 p-5 hover:border-primary/40 transition-colors"
            >
              <span className="flex items-center gap-2 font-black uppercase italic tracking-tight text-foreground">
                {p.title}
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="mt-2 block text-sm text-muted-foreground leading-relaxed">{p.detail}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
