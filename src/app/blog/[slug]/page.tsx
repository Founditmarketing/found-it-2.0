import { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-posts';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { ClientSideFormattedDate } from '@/components/blog/ClientSideFormattedDate';
import { FounderByline } from '@/components/FounderByline';
import { buildArticleSchema, buildBreadcrumbSchema } from '@/lib/schema';

/* The live AI secretary, for posts that opt in via `voice` on the post
   object. Code-split: the widget chunk only ships when a post renders it,
   so every other post's bundle is untouched. */
const VoiceAgentWidget = dynamic(() =>
  import('@/components/lp/VoiceAgentWidget').then((m) => m.VoiceAgentWidget),
);

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, width: 1200, height: 600, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== params.slug).slice(0, 2);

  const articleSchema = buildArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `/blog/${post.slug}`,
    image: post.image,
    datePublished: post.date,
    authorName: post.author,
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  return (
    <main className="bg-background text-foreground py-24 lg:py-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <div className="max-w-3xl mx-auto px-6">
            <header className="mb-12 text-center">
                <Link href="/blog" className="text-primary hover:underline font-bold mb-6 inline-block">&larr; All Articles</Link>
              <h1 className="text-4xl lg:text-6xl font-black text-foreground leading-tight mb-6">
                {post.title}
              </h1>
              <time dateTime={post.date} className="text-muted-foreground"><ClientSideFormattedDate dateString={post.date} /></time>
              <FounderByline
                align="center"
                className="mt-6"
                line="Founder, Found It Software. Builds every system himself."
              />
            </header>
        </div>

      <div className="max-w-5xl mx-auto px-6 mb-12">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full h-auto rounded-3xl aspect-[16/8] object-cover"
          data-ai-hint="abstract digital"
          priority
        />
      </div>

      <article className="max-w-3xl mx-auto px-6">
        <div
          className="prose dark:prose-invert prose-lg max-w-none mx-auto prose-headings:font-heading prose-headings:text-foreground prose-a:text-primary prose-a:font-semibold prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Her — below the body, above Keep Reading, only on posts that opt in. */}
      {post.voice && (
        <section className="max-w-3xl mx-auto px-6 mt-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-3">
            {post.voice.eyebrow}
          </p>
          <p className="text-lg leading-relaxed text-foreground/85">{post.voice.lead}</p>
          <VoiceAgentWidget
            pageSlug={post.slug}
            source={post.voice.source}
            opener={post.voice.opener}
            fallbackHref="/foundit-os#lead-form"
            className="mt-6"
          />
        </section>
      )}

      {relatedPosts.length > 0 && (
        <aside className="mt-24 border-t border-border pt-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-black text-primary mb-12 text-center uppercase tracking-tighter italic">
              Keep Reading
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="block group">
                  <div className="bg-card border rounded-3xl overflow-hidden h-full flex flex-col hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint="abstract digital"
                    />
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors flex-grow">{relatedPost.title}</h3>
                      <p className="text-sm text-muted-foreground mt-4 pt-4 border-t line-clamp-3">{relatedPost.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      )}
    </main>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
