import { blogPosts } from '@/lib/blog-posts';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ClientSideFormattedDate } from './ClientSideFormattedDate';

/**
 * Server-rendered blog listing — three newest posts, phone-first (Trevor 8/25).
 *
 * One uniform card design instead of featured-vs-rest: on a phone all three
 * posts sit in one comfortable scroll; on desktop they stand as a 3-across
 * row. Older posts stay live at their URLs, just unlisted. Deliberately NOT
 * a client component (no-JS pages must paint) — entrance motion is pure CSS.
 */
export function BlogList() {
  if (!blogPosts || blogPosts.length === 0) {
    return (
      <div className="text-center py-24">
        <h2 className="text-4xl font-black italic tracking-tighter">Nothing here yet.</h2>
        <p className="text-muted-foreground mt-4 text-xl">First post is coming — check back soon.</p>
      </div>
    );
  }

  // Only the three newest posts show. The newest wears the Latest chip.
  const visiblePosts = [...blogPosts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <div>
      <div className="mb-10 lg:mb-16 min-w-0">
        <h1 className="text-[7vw] sm:text-5xl lg:text-oversized font-black uppercase italic tracking-tighter leading-[0.9] mb-4 lg:mb-8">
          Plain-English Notes<br />
          <span className="text-primary">For Business Owners.</span>
        </h1>
        <p className="text-base sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl font-medium leading-snug">
          Real systems, real numbers, written the way we&apos;d say it across your counter.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8 animate-fade-in-up">
        {visiblePosts.map((post, i) => (
          <article
            key={post.slug}
            className="group relative min-w-0 bg-card/20 backdrop-blur-xl border border-border/20 rounded-3xl overflow-hidden shadow-xl hover:border-primary/40 transition-all duration-500 flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <Link href={`/blog/${post.slug}`} className="block relative h-44 sm:h-52 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority={i === 0}
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-3 left-4 flex items-center gap-2.5">
                {i === 0 && (
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-foreground bg-primary px-2.5 py-1 rounded-full">
                    Latest
                  </span>
                )}
                <time
                  dateTime={post.date}
                  className="text-[11px] text-white/90 font-mono font-bold uppercase tracking-[0.15em]"
                >
                  <ClientSideFormattedDate dateString={post.date} />
                </time>
              </div>
            </Link>

            <div className="p-5 sm:p-7 flex flex-col flex-grow relative z-10">
              <h2 className="text-xl sm:text-2xl font-black text-foreground uppercase italic tracking-tight leading-tight mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors duration-300">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed line-clamp-2 mb-5 flex-grow">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-xs font-black text-primary uppercase tracking-[0.2em] group-hover:gap-1 transition-all"
              >
                Read The Post
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
