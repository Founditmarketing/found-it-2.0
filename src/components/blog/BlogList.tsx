import { blogPosts } from '@/lib/blog-posts';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ClientSideFormattedDate } from './ClientSideFormattedDate';

/**
 * Server-rendered blog listing.
 *
 * Deliberately NOT a client component: the previous version shipped the
 * featured post at opacity 0 (framer-motion initial state) and scrambled the
 * headline with JS, so the page looked blank until hydration — and stayed
 * blank without JavaScript. Entrance motion now uses the pure-CSS
 * `animate-fade-in-up` keyframes (fill-mode forwards, visible end state),
 * which play without JS and degrade to fully visible content.
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

  // Only the three newest posts show (Trevor 8/25). Older posts stay live at
  // their URLs — they just don't get listed.
  const visiblePosts = [...blogPosts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);
  const featuredPost = visiblePosts[0];
  const otherPosts = visiblePosts.slice(1);

  return (
    <div className="space-y-16 lg:space-y-32">
        <div className="mb-20">
            <h1 className="text-oversized leading-[0.85] mb-8">
                Plain-English Notes<br />
                <span className="text-primary">For Business Owners.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl font-medium leading-snug">
                Software, AI, and getting found — written the way we&apos;d say it across your
                counter. No lectures, no jargon, nothing you need a marketing degree to use.
            </p>
        </div>

      {/* Featured Post */}
      <article className="group relative animate-fade-in-up">
        <Link href={`/blog/${featuredPost.slug}`}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-card/10 backdrop-blur-2xl border border-border/20 p-6 lg:p-12 rounded-[3rem] shadow-2xl hover:border-primary/40 transition-colors duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

            <div className="overflow-hidden rounded-[2rem] relative z-10 w-full h-[300px] lg:h-[500px]">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                data-ai-hint="abstract digital dark mode"
                priority
              />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6 text-xs lg:text-sm uppercase tracking-[0.3em]">
                <p className="text-primary font-black bg-primary/10 px-4 py-2 rounded-full border border-primary/20">Latest</p>
                <time dateTime={featuredPost.date} className="text-muted-foreground font-mono font-bold">
                  <ClientSideFormattedDate dateString={featuredPost.date} />
                </time>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-6 leading-tight uppercase italic tracking-tighter">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground text-lg lg:text-xl mb-10 font-medium leading-relaxed max-w-xl">
                {featuredPost.excerpt}
              </p>
              <div className="inline-flex flex-col">
                <div className="flex items-center font-black text-primary uppercase tracking-[0.2em] text-sm lg:text-base">
                    Read The Post
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
                <div className="h-[2px] w-0 bg-primary mt-2 group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </div>
          </div>
        </Link>
      </article>

      <div className="pt-8">
        <h2 className="text-4xl font-black mb-16 uppercase italic tracking-tighter">
            More Posts
        </h2>
        {otherPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 animate-fade-in-up">
            {otherPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-card/30 backdrop-blur-xl border border-border/20 rounded-[2.5rem] flex flex-col group hover:border-primary/40 transition-all duration-500 shadow-xl overflow-hidden relative"
              >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <Link href={`/blog/${post.slug}`} className="block overflow-hidden relative h-56 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    data-ai-hint="abstract digital dark mode"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </Link>
                <div className="p-8 lg:p-10 flex flex-col flex-grow relative z-10">
                  <div className="mb-6">
                    <time dateTime={post.date} className="text-xs text-primary font-mono tracking-[0.2em] font-bold uppercase block">
                        <ClientSideFormattedDate dateString={post.date} />
                    </time>
                  </div>
                  <h2 className="text-2xl font-black text-foreground mb-4 flex-grow uppercase tracking-tight italic leading-tight">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors duration-300">
                        {post.title}
                    </Link>
                  </h2>
                  <div className="mt-8 pt-6 border-t border-border/40">
                      <Link href={`/blog/${post.slug}`} className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em] flex items-center group-hover:text-primary transition-colors">
                          Read The Post <ArrowRight className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
