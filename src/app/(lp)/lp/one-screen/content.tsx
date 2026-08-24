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
        // LPSplitHero promotes the FIRST sentence to the big challenge line —
        // it must be a full line, never a one-word list item ("Customers.").
        subheadline:
          "How many programs does it take to run your business today? Ours takes one screen: customers, estimates, jobs, invoices, who's paid, who hasn't, what needs attention today. One custom system, built around the way you run, in your pocket. Ask it questions in plain English. And you own it. Sign up below and we'll show you what yours would look like, free. If it's not a fit, we tell you straight.",
        highlightIcon: Smartphone,
      }}
    />
  );
}
