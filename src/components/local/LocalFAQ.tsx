/* ─── Local Page FAQ Section ───
   Server-rendered FAQ block for the local landing pages. Markup mirrors the
   ServicePillar FAQ so the whole site reads consistently. Pair with
   buildFAQSchema() in the page for matching JSON-LD. */

import type { FAQItemData } from '@/lib/schema';

export function LocalFAQ({
  heading = 'Straight Answers',
  items,
}: {
  heading?: string;
  items: FAQItemData[];
}) {
  return (
    <section className="mb-16" aria-label="Frequently asked questions">
      <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8 text-foreground">
        {heading}
      </h2>
      <div className="space-y-8">
        {items.map((f) => (
          <div key={f.question}>
            <h3 className="text-base font-black text-foreground mb-2">{f.question}</h3>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed">{f.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
