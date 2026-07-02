import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from './projects';

/**
 * Compact proof strip: a few real client-site screenshots linking to the
 * full portfolio on /web-design#portfolio. Drop it on any page that talks
 * about results but doesn't show work.
 */
export function PortfolioStrip() {
  const featured = PORTFOLIO_PROJECTS.slice(0, 4);

  return (
    <section aria-label="Websites we have built" className="mb-16">
      <Link
        href="/web-design#portfolio"
        className="group block bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl p-6 lg:p-8 hover:border-primary/40 transition-colors duration-300"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1">We Build The Sites Too</p>
            <h2 className="text-lg md:text-xl font-black uppercase italic tracking-tighter text-foreground">
              {PORTFOLIO_PROJECTS.length} Live Client Builds
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors shrink-0">
            See the full portfolio <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {featured.map((project) => (
            <div key={project.client} className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border/20 bg-black">
              <Image
                src={project.image}
                alt={`${project.client} website built by Found It Marketing`}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
              />
              <span className="absolute bottom-0 left-0 w-full px-3 py-2 bg-gradient-to-t from-black/90 to-transparent text-[10px] font-black uppercase tracking-widest text-white truncate">
                {project.client}
              </span>
            </div>
          ))}
        </div>
      </Link>
    </section>
  );
}
