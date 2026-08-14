'use client';

import Link from 'next/link';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { trackGuideCTAClick } from '@/lib/analytics';
import { GUIDE_TITLE } from '@/lib/guide';

/* ─── Sitewide guide CTA ───
   The paired SECONDARY action next to every "book a call" primary: a ghost/
   outline button (or inline text link) pointing at /guide, where the gated
   "What Do I Get?" PDF lives. Never links the raw PDF — the gate is the point.

   Every click fires guide_cta_click with a location tag (engagement only;
   the /guide form submit is the conversion). Reuse THIS component so the
   pair rolls out — and can be restyled — in one place. */

interface GuideCtaProps {
  /** GA4 location tag, e.g. 'home_hero', 'pillar_hero_foundit-os', 'footer'. */
  location: string;
  /**
   * outline — ghost pill sized to sit beside the solid primary CTA
   *           (full-width under it on mobile, side-by-side from sm up).
   * link    — inline text link for tight spots (footers, form asides).
   */
  variant?: 'outline' | 'link';
  label?: string;
  className?: string;
}

export function GuideCta({
  location,
  variant = 'outline',
  label = 'Download The Free Guide',
  className,
}: GuideCtaProps) {
  const base =
    variant === 'outline'
      ? 'inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 h-14 rounded-full bg-card/40 border border-border/20 text-foreground font-bold uppercase tracking-wider text-sm hover:border-primary/30 transition-colors'
      : 'inline-flex items-center gap-1.5 text-sm text-primary font-bold hover:underline';

  return (
    <Link
      href="/guide"
      onClick={() => trackGuideCTAClick(location)}
      aria-label={`Download the free guide — ${GUIDE_TITLE} (PDF)`}
      className={cn(base, className)}
    >
      <Download
        className={variant === 'outline' ? 'w-4 h-4 text-primary shrink-0' : 'w-3.5 h-3.5 shrink-0'}
        aria-hidden="true"
      />
      {label}
    </Link>
  );
}
