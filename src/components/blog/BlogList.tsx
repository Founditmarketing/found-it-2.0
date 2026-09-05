import { blogPosts } from '@/lib/blog-posts';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ClientSideFormattedDate } from './ClientSideFormattedDate';

/**
 * The reading room (9/3 redesign — Trevor: "not memorable, just a list of
 * links with weird pics"). The old rows crammed 1200×630 poster cards into
 * tall thumbnail slivers; the crops were the weird pics. The fix uses what
 * this blog actually owns: headlines. The newest post runs its poster at
 * TRUE aspect, full width. Every other post joins a big-type ledger —
 * date rail, headline at display size, one-line excerpt, hairlines — the
 * same ledger language as /about. The titles are the artwork.
 * 9/5 additions (round-4 critique, filtered): three fixed doors under the
 * latest post so the opening communicates RANGE (a person, a confession,
 * a save); honest reading time on every row; series chips for the Books
 * trilogy. Still a server component: paints without JS.
 */

/** Honest minutes from the rendered words (220 wpm, floor 1). */
function minutes(html: string): number {
  const words = html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-zA-Z#0-9]+;/g, ' ')
    .trim()
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

/* Hand-picked, evergreen. Update by hand when a better door ships. */
const DOORS = [
  {
    kicker: 'The Person',
    slug: 'government-bid-finder-tree-service',
    title: 'Tyler recognized one of the jobs.',
    line: 'He had found it himself, the hard way. The software walked in carrying the same contract.',
  },
  {
    kicker: 'The Confession',
    slug: 'the-roadmap-is-in-the-deed',
    title: 'Our 593-line plan was still wrong.',
    line: 'Two customers, one tractor, two non-refundable deposits. The plan would have taken both.',
  },
  {
    kicker: 'The Save',
    slug: 'nursery-management-software',
    title: 'Forty-four plants nearly missed the truck.',
    line: 'A hand-copied order dropped its last line. The business was healthy. The software was the problem.',
  },
];

export function BlogList() {
  if (!blogPosts || blogPosts.length === 0) {
    return (
      <div className="text-center py-24">
        <h2 className="text-4xl font-black italic tracking-tighter">Nothing here yet.</h2>
        <p className="text-muted-foreground mt-4 text-xl">First post is coming — check back soon.</p>
      </div>
    );
  }

  const sorted = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
  const [latest, ...rest] = sorted;

  return (
    <div className="max-w-[900px]">
      <div className="mb-10 lg:mb-16 min-w-0">
        {/* The front door promises discoveries, not accessibility (9/5,
            the discovery doctrine: recognition, then interest, then the
            software as the payoff). */}
        <h1 className="text-[7vw] sm:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-3 lg:mb-6">
          What We Found<br />
          <span className="text-primary">Behind the Counter.</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl font-medium leading-snug">
          The strange rules, expensive workarounds, and small discoveries behind software built
          for real businesses.
        </p>
      </div>

      {/* The newest post wears its poster at the ratio it was designed at. */}
      <Link href={`/blog/${latest.slug}`} className="group block mb-14 lg:mb-20 animate-fade-in-up">
        <div className="relative aspect-[1200/630] rounded-2xl lg:rounded-3xl overflow-hidden border border-border/25 group-hover:border-primary/40 transition-colors duration-500">
          <Image
            src={latest.image}
            alt={latest.title}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 900px"
            className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
        </div>
        <div className="mt-5 lg:mt-7">
          <p className="font-mono text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-2.5">
            Latest ·{' '}
            <time dateTime={latest.date} className="text-muted-foreground">
              <ClientSideFormattedDate dateString={latest.date} />
            </time>
            <span className="text-muted-foreground/60"> · {minutes(latest.content)} min</span>
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-foreground uppercase italic tracking-tighter leading-[0.95] group-hover:text-primary transition-colors duration-300 text-balance">
            {latest.title}
          </h2>
          <p className="mt-3 text-base lg:text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl line-clamp-2">
            {latest.excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-xs font-black text-primary uppercase tracking-[0.2em]">
            Read the post
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </div>
      </Link>

      {/* Start anywhere: three doors, three different reasons to read. */}
      <div className="mb-14 lg:mb-20">
        <p className="font-mono text-[11px] font-black uppercase tracking-[0.24em] text-muted-foreground mb-5">
          Start anywhere
        </p>
        <div className="grid sm:grid-cols-3 gap-x-8 gap-y-7">
          {DOORS.map((d) => (
            <Link
              key={d.slug}
              href={`/blog/${d.slug}`}
              className="group border-t-2 border-primary/40 pt-4 hover:border-primary transition-colors duration-300"
            >
              <p className="font-mono text-[10px] font-black uppercase tracking-[0.25em] text-primary">{d.kicker}</p>
              <h3 className="mt-2.5 text-lg lg:text-xl font-black text-foreground uppercase italic tracking-tighter leading-[1.05] group-hover:text-primary transition-colors duration-300">
                {d.title}
              </h3>
              <p className="mt-2 text-[13px] text-muted-foreground font-medium leading-relaxed">{d.line}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* The ledger: every other post as its headline, full size. */}
      <div className="border-t border-border/15">
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group grid grid-cols-1 md:grid-cols-[130px_1fr] gap-x-8 gap-y-1.5 py-8 lg:py-10 border-b border-border/15 hover:bg-card/10 transition-colors duration-300 md:-mx-5 md:px-5 rounded-lg"
          >
            <div className="md:pt-2.5">
              <time
                dateTime={post.date}
                className="block font-mono text-[11px] text-muted-foreground font-bold uppercase tracking-[0.15em]"
              >
                <ClientSideFormattedDate dateString={post.date} />
              </time>
              <span className="mt-1 block font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/50">
                {minutes(post.content)} min
              </span>
              {post.series && (
                <span className="mt-1 block font-mono text-[10px] font-black uppercase tracking-[0.15em] text-primary/70">
                  {post.series}
                </span>
              )}
            </div>
            <div className="min-w-0">
              <h2 className="text-xl sm:text-2xl lg:text-[2rem] font-black text-foreground uppercase italic tracking-tighter leading-[1.02] group-hover:text-primary transition-colors duration-300 text-balance">
                {post.title}
              </h2>
              <p className="mt-2 text-sm lg:text-[15px] text-muted-foreground font-medium leading-relaxed line-clamp-2 max-w-2xl">
                {post.excerpt}
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-black text-primary uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 max-md:opacity-60 transition-opacity duration-300">
                Read the post
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
