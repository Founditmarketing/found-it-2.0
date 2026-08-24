'use client';

import { AdLpTemplate } from '@/components/lp/AdLpTemplate';
import { Equal } from 'lucide-react';

/* Ad-traffic LP for the "Penny-Matched" campaign (sizzle batch, 8/15) — the
   trust hook, built for RETARGETING first: warm visitors who didn't convert
   because "what if it breaks / I can't switch." The whole page is the
   parallel-run doctrine said out loud. */

export function PennyMatchLPContent() {
  return (
    <AdLpTemplate
      slug="penny-match"
      sourcePrefix="lp_penny_match"
      hero={{
        badge: 'Penny-Matched Every Night',
        headline: 'We Don’t Ask You To Trust Us.',
        headlineAccent: 'We Match Your Old Books To The Penny.',
        subheadline:
          "Nobody bets their business on a software cutover — so we never ask you to. Your new system runs BESIDE your current software, matched against it to the penny, every night, until YOU say go. Nothing gets ripped out on day one. That's the rule on every fitting we do. Start below. Tell us how it runs today and we'll show you what we'd build if it were ours. Free, 30 minutes, screen-shared.",
        highlight:
          '“The new system runs beside the old one, penny-matched every night, until the owner says go.” — the rule on every fitting',
        highlightIcon: Equal,
      }}
    />
  );
}
