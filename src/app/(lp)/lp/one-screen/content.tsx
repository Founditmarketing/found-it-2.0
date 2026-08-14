'use client';

import { Smartphone } from 'lucide-react';
import { AdLpTemplate } from '@/components/lp/AdLpTemplate';

/* Hook test 8/14, angle 2 of 3: SIMPLICITY. The buyer's real morning is six
   programs and a legal pad; the promise is the whole operation on one
   screen, in plain English. Shares AdLpTemplate with walkthrough/can-it —
   only the hero copy differs. See walkthrough/content.tsx for the test map. */

export function OneScreenLPContent() {
  return (
    <AdLpTemplate
      slug="one-screen"
      sourcePrefix="lp_one_screen"
      hero={{
        headline: 'Your Whole Business.',
        headlineAccent: 'One Screen.',
        subheadline:
          "Customers. Estimates. Jobs. Invoices. Who's paid, who hasn't, what needs attention today — one custom system built around the way you actually run, in your pocket, and you can just ask it questions in plain English. And you own it. Sign up below and we'll map yours for you, free — you keep the map either way, hire us or don't.",
        highlightIcon: Smartphone,
      }}
    />
  );
}
