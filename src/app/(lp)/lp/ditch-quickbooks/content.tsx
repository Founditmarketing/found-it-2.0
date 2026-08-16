'use client';

import { AdLpTemplate } from '@/components/lp/AdLpTemplate';
import { LogOut } from 'lucide-react';

/* Ad-traffic LP for the "Ditch QuickBooks" campaign (8/15) — the exit-ramp
   hook: pay off the frustration in the headline, deliver the parallel-run
   doctrine as the mechanism. QuickBooks is named comparatively only (we run
   BESIDE it, then you switch) — never imply affiliation. Payroll/taxes are
   deliberately NOT in the pitch: those stay with the accountant. */

export function DitchQuickbooksLPContent() {
  return (
    <AdLpTemplate
      slug="ditch-quickbooks"
      sourcePrefix="lp_ditch_quickbooks"
      hero={{
        badge: 'The Exit Ramp',
        headline: 'Ditch QuickBooks.',
        headlineAccent: 'Just Not On Day One.',
        subheadline:
          "You're not crazy — QuickBooks wasn't built to run your jobs, your estimates, your crews, or your customers. But nobody should bet their business on a rip-out. So here's how our clients leave: we build your system, it runs BESIDE QuickBooks, penny-matched against it every night, and you switch the day the numbers say you can. And what you switch to is YOURS — the code and the data. Sign up below and we'll map it.",
        highlight:
          'The exit ramp: run both → penny-matched every night → switch when the numbers say you can. You own what you switch to.',
        highlightIcon: LogOut,
      }}
    />
  );
}
