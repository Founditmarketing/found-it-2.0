/* ─── Local Page Review Card ───
   Renders a single canonical review from src/lib/reviews.ts. Always pass the
   verbatim quote from that file — never a paraphrase. */

import type { Review } from '@/lib/reviews';

export function LocalReview({ review }: { review: Review }) {
  return (
    <figure className="bg-card/15 border border-border/20 rounded-2xl p-6 lg:p-8">
      <div aria-label={`${review.rating} out of 5 stars`} className="text-primary text-sm tracking-[0.3em] mb-3">
        {'★'.repeat(review.rating)}
      </div>
      <blockquote className="text-base text-muted-foreground font-medium leading-relaxed italic">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-sm font-black uppercase tracking-wider text-foreground">
        {review.name}{' '}
        <span className="text-faint font-bold normal-case tracking-normal">— {review.title}</span>
      </figcaption>
    </figure>
  );
}
