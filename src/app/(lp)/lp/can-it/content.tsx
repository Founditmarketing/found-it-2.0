'use client';

import { HelpCircle } from 'lucide-react';
import { AdLpTemplate } from '@/components/lp/AdLpTemplate';

/* Hook test 8/14, angle 3 of 3: CHALLENGE. Dare the reader's current
   software to keep up — every question in the subheadline is one the
   on-page demo actually answers, so the page immediately proves the dare.
   Shares AdLpTemplate; see walkthrough/content.tsx for the test map. */

export function CanItLPContent() {
  return (
    <AdLpTemplate
      slug="can-it"
      sourcePrefix="lp_can_it"
      hero={{
        headline: 'Can Your Software',
        headlineAccent: 'Do This?',
        subheadline:
          "Ask it who owes you money — names and amounts, in five seconds. Ask it what's finished but never got invoiced. Ask it how this week ran against last year. One custom system — customers, jobs, estimates, invoices, the books — built around the way you actually run. And you own it. Sign up below and we'll map yours for you, free — you keep the map either way, hire us or don't.",
        highlightIcon: HelpCircle,
      }}
    />
  );
}
