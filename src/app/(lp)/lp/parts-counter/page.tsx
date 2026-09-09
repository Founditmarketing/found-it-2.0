import type { Metadata } from 'next';
import { PartsCounterLPContent } from './content';

/* High-intent Google Ads LP — keyword theme: "parts counter software" /
   parts pricing for outdoor power, small engine, ag and equipment dealers.
   THE ONE THING: every part priced from today's supplier cost at the
   owner's markup, with a STOP at the counter before anything sells below
   cost. The story is anonymous and qualitative per content law (a Louisiana
   outdoor-power dealer whose counter was quoting prices that had not
   changed in fifteen years) — never a name, never a figure. noindex on
   purpose: this page exists to convert paid clicks, not to rank. */
export const metadata: Metadata = {
  title: { absolute: 'Parts Counter Software That Prices From Today’s Cost | Found It Software' },
  description:
    'For outdoor power, small engine, ag and equipment dealers: every part priced from today’s supplier cost at your markup, a stop at the counter before anything sells below cost, and QuickBooks stays until you say switch. Owned outright.',
  openGraph: {
    title: 'Parts Counter Software That Prices From Today’s Cost | Found It Software',
    description:
      'Every part priced from today’s supplier cost at your markup. A stop at the counter before anything sells below cost. QuickBooks stays until you say switch. Owned outright.',
    type: 'website',
    url: 'https://founditsoftware.com/lp/parts-counter',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

export default function PartsCounterLP() {
  return <PartsCounterLPContent />;
}
