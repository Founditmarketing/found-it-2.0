'use client';

import { AdLpTemplate } from '@/components/lp/AdLpTemplate';

/* Ad-traffic LP for the Found It OS VSL campaign — the ORIGINAL hook of the
   8/14 hook test: the ad's own question, continued. Everything below the
   hero is the shared, audited template (AdLpTemplate) — form-primary
   conversion, Edwards proof, pain mirror, demos, price at the FAQ.

   HOOK TEST (started 8/14): three angles, one ad set each, same audience,
   judged on cost per lead —
     /lp/walkthrough  → "Who Owes You Money Right Now?"   (money question)
     /lp/one-screen   → "Your Whole Business. One Screen." (simplicity)
     /lp/can-it       → "Can Your Software Do This?"       (challenge)
   Retired Version A ("Your Business Should Be Able To Answer You.") lives
   in git history if a fourth angle is ever wanted. */

export function WalkthroughLPContent() {
  return (
    <AdLpTemplate
      slug="walkthrough"
      sourcePrefix="lp_walkthrough"
      hero={{
        headline: 'Who Owes You Money',
        headlineAccent: 'Right Now?',
        subheadline:
          "Could your current software answer that in five seconds? Ours can. And that's only one question your business could answer. We put your whole operation — customers, jobs, estimates, invoices, the books — into one custom system built around the way you actually work. And you own it. Sign up below and we'll map yours for you, free — you keep the map either way, hire us or don't.",
      }}
    />
  );
}
