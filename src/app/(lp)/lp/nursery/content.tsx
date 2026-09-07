'use client';

import { AdLpTemplate } from '@/components/lp/AdLpTemplate';
import ParseOrderDemo from '@/components/case-studies/ParseOrderDemo';
import { Sprout } from 'lucide-react';

/* Ad-traffic LP for the wholesale-nursery campaign (9/7, acquisition-critique
   round five, filtered): one audience, one familiar moment, one next step.
   The parse demo IS the ad's promise, so it plays first via the template's
   hookDemo slot — the visitor watches the messy broker order become a checked
   pull sheet before the page says another word. Every fact here is the
   published record (the 44-plants save, fifteen brokers, lands-or-holds-red);
   nothing new is claimed. Doubles as the page Trevor texts a nursery owner
   after any conversation. */

export function NurseryLPContent() {
  return (
    <AdLpTemplate
      slug="nursery"
      sourcePrefix="lp_nursery"
      hero={{
        badge: 'Custom Software For Wholesale Nurseries',
        headline: 'The Order Arrives By Text.',
        headlineAccent: 'Nobody Should Type It Twice.',
        subheadline:
          'Fifteen brokers, fifteen formats — texts, emails, photos of somebody’s handwriting, all copied by hand into the system. Below, watch a nursery’s system turn a messy order into a checked crew pull sheet. Then we show you what we’d fit to your nursery: intake, pull sheets, availability, receivables, the books. One system, built around how yours runs. You own it — the code and the data.',
        highlight:
          '“A hand-copied order dropped its last line — forty-four plants nearly missed the truck.” The system that replaced the copying catches every line, or holds it in red.',
        highlightIcon: Sprout,
      }}
      hookDemo={{
        heading: 'Watch It Eat',
        accent: 'A Messy Order.',
        sub: 'A real broker text, the way they actually arrive. Every line lands — or holds in red for a human. Nothing is silently dropped.',
        node: <ParseOrderDemo />,
        footnote:
          'This is one part of a system built around a wholesale nursery — intake, pull sheets, availability, receivables, the books. You own it. We take care of it. When something needs changing, you talk to people who know how your nursery runs.',
      }}
    />
  );
}
