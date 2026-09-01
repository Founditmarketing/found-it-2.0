import { blogPosts } from '@/lib/blog-posts';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ClientSideFormattedDate } from './ClientSideFormattedDate';

/**
 * Server-rendered blog listing — three newest posts as stacked horizontal
 * rows (Trevor 8/25: "horizontal rectangles, stacked, cleaner"). Thumb left,
 * words right, the whole row is one tap target. Older posts stay live at
 * their URLs, just unlisted. NOT a client component — pages must paint
 * without JS; motion is pure CSS.
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

  /* Full catalog (Trevor 8/31: "show all posts in the list") — every post in
     blog-posts.ts is software-era; the marketing-days posts were never
     migrated into this file, so nothing needs filtering. */
  const visiblePosts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="max-w-[900px]">
      <div className="mb-8 lg:mb-14 min-w-0">
        <h1 className="text-[7vw] sm:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-3 lg:mb-6">
          Plain-English Notes<br />
          <span className="text-primary">For Business Owners.</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl font-medium leading-snug">
          Real systems, real numbers, written the way we&apos;d say it across your counter.
        </p>
      </div>

      <div className="flex flex-col gap-4 lg:gap-5 animate-fade-in-up">
        {visiblePosts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group relative flex items-stretch gap-4 sm:gap-6 min-w-0 bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl lg:rounded-3xl p-3.5 sm:p-5 shadow-lg hover:border-primary/40 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative w-24 sm:w-40 lg:w-48 self-stretch min-h-[6.5rem] sm:min-h-[8rem] shrink-0 rounded-xl lg:rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority={i === 0}
                sizes="(max-width: 640px) 96px, 192px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="relative z-10 flex flex-col justify-center min-w-0 py-0.5 flex-grow">
              <div className="flex items-center gap-2 mb-1.5">
                {i === 0 && (
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-foreground bg-primary px-2 py-0.5 rounded-full">
                    Latest
                  </span>
                )}
                <time
                  dateTime={post.date}
                  className="text-[10px] sm:text-[11px] text-muted-foreground font-mono font-bold uppercase tracking-[0.15em]"
                >
                  <ClientSideFormattedDate dateString={post.date} />
                </time>
              </div>

              <h2 className="text-base sm:text-xl lg:text-2xl font-black text-foreground uppercase italic tracking-tight leading-tight line-clamp-3 sm:line-clamp-2 group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h2>

              <p className="hidden sm:block text-sm text-muted-foreground font-medium leading-relaxed line-clamp-1 mt-2">
                {post.excerpt}
              </p>

              <div className="mt-2.5 inline-flex items-center text-[10px] sm:text-xs font-black text-primary uppercase tracking-[0.2em]">
                Read The Post
                <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
