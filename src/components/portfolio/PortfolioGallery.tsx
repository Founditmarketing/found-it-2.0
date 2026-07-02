import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from './projects';

/**
 * Server-rendered portfolio grid: 12 real client builds with live links.
 * Adapted from the retired /web-development horizontal-scroll gallery —
 * same real screenshots and URLs, but paints without JavaScript and
 * lazy-loads every image (no framer-motion, no priority fetches).
 */
export function PortfolioGallery() {
  return (
    <section id="portfolio" aria-label="Recent client websites" className="scroll-mt-28 py-20 lg:py-28 border-t border-border/10 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12">
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">The Proof</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-4">
            {PORTFOLIO_PROJECTS.length} Recent Builds.{' '}
            <span className="text-primary">All Live.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl leading-relaxed">
            No stock mockups, no &quot;concept work.&quot; Every site below is a real client build you can
            click into right now and judge for yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_PROJECTS.map((project) => (
            <a
              key={project.client}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-border/20 bg-card/15 backdrop-blur-xl overflow-hidden hover:border-primary/40 transition-colors duration-300"
            >
              {/* Browser-chrome frame */}
              <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <Image
                  src={project.image}
                  alt={`${project.client} website built by Found It Marketing`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <div className="px-5 py-4 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{project.category}</p>
                  <h3 className="text-base font-black uppercase italic tracking-tighter text-foreground truncate">
                    {project.client}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                  Visit <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground font-medium italic mb-6">
            Want your business on this wall?
          </p>
          <Link
            href="#lead-form"
            className="inline-flex items-center justify-center px-8 h-14 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
          >
            Get My Free Concept Call
          </Link>
        </div>
      </div>
    </section>
  );
}
