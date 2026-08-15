'use client';

import { AdLpTemplate } from '@/components/lp/AdLpTemplate';
import { Mic } from 'lucide-react';

/* Ad-traffic LP for the "She Answers" campaign (sizzle batch, 8/15) — the
   missed-calls hook. The ad IS her: it promises a live AI secretary, so she
   sits in the hero (voiceHero) and picks up on the first screen. Everything
   below is the shared, audited template. In a sales room, open with
   ?room=noisy for the far-field mic profile. */

export function SheAnswersLPContent() {
  return (
    <AdLpTemplate
      slug="she-answers"
      sourcePrefix="lp_she_answers"
      voiceHero
      hero={{
        badge: 'Live AI Secretary — She Picks Up',
        headline: 'Your Business Should Answer',
        headlineAccent: 'Every Single Call.',
        subheadline:
          "Every missed call is a job that called somebody else. Meet the AI secretary we build into every system — she answers, takes the message, and books your callback. And in a system we build for you, she schedules the estimates and enters new customers into your database herself. She's live on this page right now: tap the mic and talk to her out loud.",
        highlight:
          '“She answers, schedules the estimate, and enters the customer into the database — herself.” — the secretary we build into your system',
        highlightIcon: Mic,
      }}
    />
  );
}
