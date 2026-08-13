import type { Metadata } from 'next';
import GuideThanksClient from './client';

/* Confirmation page for the "What Do I Get?" guide funnel. Distinct from
   /thank-you on purpose: that page carries the Google Ads URL-rule conversion
   for walkthrough/map requests — guide downloads must never inflate it. The
   guide lead conversion already fired from trackLead() at submit time.
   noindex: this page only exists as a funnel step. */
export const metadata: Metadata = {
  title: { absolute: 'Your Guide Is Downloading | Found It Software' },
  description: 'Your copy of "What Do I Get?" is on its way. Next step: book your free software map call.',
  robots: { index: false, follow: false },
};

export default function GuideThanksPage() {
  return <GuideThanksClient />;
}
