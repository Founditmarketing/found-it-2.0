import { Star } from 'lucide-react';
import { reviews, type Review } from '@/lib/reviews';
import { TRACK_RECORD, LINKS } from '@/lib/site';

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="w-[300px] sm:w-[360px] shrink-0 bg-card/40 backdrop-blur-sm border border-border/20 rounded-3xl p-7 hover:border-primary/40 transition-colors duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-primary fill-primary drop-shadow-[0_0_6px_rgba(255,85,0,0.4)]" />
          ))}
        </div>
        {/* Google glyph */}
        <span aria-hidden className="text-[11px] font-black tracking-tight text-faint">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </span>
      </div>
      <blockquote className="text-sm text-muted-foreground font-medium italic leading-relaxed line-clamp-6">
        “{review.quote}”
      </blockquote>
      <figcaption className="mt-5 pt-4 border-t border-border/10">
        <p className="font-black text-sm text-foreground uppercase italic tracking-tighter">{review.name}</p>
        <p className="text-[11px] text-primary font-bold">{review.title}</p>
      </figcaption>
    </figure>
  );
}

function MarqueeRow({ items, reverse }: { items: Review[]; reverse?: boolean }) {
  // Duplicate the list so the -50% translate loops seamlessly.
  const doubled = [...items, ...items];
  return (
    <div
      className={`flex gap-5 w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:[animation-play-state:paused] motion-reduce:animate-none`}
    >
      {doubled.map((review, i) => (
        <ReviewCard key={`${review.id}-${i}`} review={review} />
      ))}
    </div>
  );
}

export function ReviewMarquee() {
  const mid = Math.ceil(reviews.length / 2);
  const rowOne = reviews.slice(0, mid);
  const rowTwo = reviews.slice(mid);

  // Config-gated: the rating links out only once the GBP review URL is set in site.ts.
  const googleReviewUrl: string = LINKS.googleBusinessProfile;

  const ratingBadge = (
    <>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-primary fill-primary drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" />
        ))}
      </div>
      <span className="text-sm text-muted-foreground font-bold">{TRACK_RECORD.googleRating} on Google</span>
    </>
  );

  return (
    <section className="relative py-16 lg:py-28 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 mb-12 text-center">
        <p className="text-primary font-mono text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-50">Reviews</p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.88] text-foreground mb-4">
          What Our Clients Say
        </h2>
        {googleReviewUrl ? (
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read our Google reviews — rated ${TRACK_RECORD.googleRating} out of 5`}
            className="inline-flex items-center justify-center gap-2 hover:opacity-80 transition-opacity"
          >
            {ratingBadge}
          </a>
        ) : (
          <div className="flex items-center justify-center gap-2">{ratingBadge}</div>
        )}
      </div>

      {/* Edge-faded marquee track; hover anywhere to pause both rows */}
      <div className="group space-y-5 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <MarqueeRow items={rowOne} />
        <MarqueeRow items={rowTwo} reverse />
      </div>
    </section>
  );
}
