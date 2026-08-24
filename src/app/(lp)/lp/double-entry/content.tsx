'use client';

import { AdLpTemplate } from '@/components/lp/AdLpTemplate';
import { Calculator } from 'lucide-react';

/* Ad-traffic LP for the "Double-Entry Tax" campaign (sizzle batch, 8/15) —
   the labor-waste hook: the same job typed into three apps. The math is
   shown AS math (restraint law: no invented aggregates — this is arithmetic
   the reader applies to their own shop). Never pitch this page as
   cheaper-than-your-subscriptions; the tax is labor + invisible
   receivables, not the SaaS bills. */

export function DoubleEntryLPContent() {
  return (
    <AdLpTemplate
      slug="double-entry"
      sourcePrefix="lp_double_entry"
      hero={{
        badge: 'The Double-Entry Tax',
        headline: 'Stop Typing The Same Job',
        headlineAccent: 'Into Three Apps.',
        subheadline:
          "The estimate app. The job board. The books. Somebody at your shop re-types the same job into all three — and 10 hours a week at $20/hr is $10,400 a year spent moving information between apps you rent. One custom system enters it once: customers → estimates → jobs → invoices → the books. Built around how you run, and you own it. Sign up below and we'll show you what yours would look like, free. If it's not a fit, we tell you straight.",
        highlight:
          '10 hrs/week × $20/hr × 52 weeks = $10,400 a year — the double-entry tax, and it never shows up on an invoice',
        highlightIcon: Calculator,
      }}
    />
  );
}
