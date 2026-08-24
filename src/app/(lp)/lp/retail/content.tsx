'use client';

import { AdLpTemplate } from '@/components/lp/AdLpTemplate';
import { Store } from 'lucide-react';

/* Ad-traffic LP for the "Retail & Stores" campaign (sizzle batch, 8/15) —
   the year-over-year hook for shops with shelves: nurseries, boutiques,
   parts counters. Doubles as the page Trevor texts after any in-store demo. */

export function RetailLPContent() {
  return (
    <AdLpTemplate
      slug="retail"
      sourcePrefix="lp_retail"
      hero={{
        badge: 'Custom Software For Stores',
        headline: '“How’d This Week Compare To Last Year?”',
        headlineAccent: 'Answered By 8am.',
        subheadline:
          "Sales, sizes, low stock, what needs reordering. Your store should answer all of it before the doors open, without you exporting a thing. We build custom systems for stores, fitted to how yours runs: the register, the shelves, the reorders, the books. And you own it, the code and the data. Sign up below and we'll show you what yours would look like, free. If it's not a fit, we tell you straight.",
        highlight:
          '“What sizes of that item are left?” “What’s running low?” “How’d this week compare?” Answered from your own shelves and books.',
        highlightIcon: Store,
      }}
    />
  );
}
