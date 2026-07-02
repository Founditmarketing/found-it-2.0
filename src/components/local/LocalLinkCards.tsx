/* ─── Local Page Internal Link Cards ───
   Server-rendered link cards pointing local pages at the matching service
   pillars (and sibling local pages). Real internal links — the doorway-page
   fix — so keep hrefs pointed at indexable, self-canonical routes. */

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface LocalLink {
  label: string;
  href: string;
  description?: string;
}

export function LocalLinkCards({ links }: { links: LocalLink[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="group bg-card/10 border border-border/15 rounded-2xl p-5 hover:border-primary/25 transition-colors"
        >
          <span className="flex items-center justify-between text-sm font-black uppercase italic tracking-tighter text-foreground">
            {l.label}
            <ArrowRight
              className="w-4 h-4 text-primary opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0"
              aria-hidden="true"
            />
          </span>
          {l.description && (
            <p className="text-sm text-muted-foreground font-medium leading-relaxed mt-2">{l.description}</p>
          )}
        </Link>
      ))}
    </div>
  );
}
