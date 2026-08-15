import { reviews, type Review } from '@/lib/reviews';
import { TRACK_RECORD, LINKS } from '@/lib/site';

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="bg-card/40 backdrop-blur-sm border border-border/20 rounded-3xl p-7">
      <blockquote className="text-sm text-muted-foreground font-medium italic leading-relaxed line-clamp-6">
        “{review.quote}”
      </blockquote>
      <figcaption className="mt-5 pt-4 border-t border-border/10">
        <p className="font-black text-sm text-foreground tracking-tighter">{review.name}</p>
        <p className="text-[11px] text-primary font-bold">{review.title}</p>
      </figcaption>
    </figure>
  );
}

export function ReviewMarquee() {
  // Config-gated: the rating links out only once the GBP review URL is set in site.ts.
  const googleReviewUrl: string = LINKS.googleBusinessProfile;
  const rating = `${TRACK_RECORD.googleRating} on Google`;

  return (
    <section className="relative py-16 lg:py-28">
      <div className="max-w-[1100px] mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.88] text-foreground mb-4">
          What Our Clients Say
        </h2>
        {googleReviewUrl ? (
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read our Google reviews — rated ${TRACK_RECORD.googleRating} out of 5`}
            className="text-sm text-muted-foreground font-bold hover:text-primary transition-colors"
          >
            {rating}
          </a>
        ) : (
          <p className="text-sm text-muted-foreground font-bold">{rating}</p>
        )}
      </div>

      <div className="max-w-[1100px] mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
