import type { Metadata } from 'next';
import { DitchQuickbooksLPContent } from './content';

/* Paid-traffic landing page — "Ditch QuickBooks" campaign (exit-ramp hook).
   noindex on purpose: exists to pay off the ad, not to rank. */
export const metadata: Metadata = {
  title: { absolute: 'Ditch QuickBooks. Just Not On Day One. | Found It Software' },
  description:
    'Your new system runs beside QuickBooks, penny-matched every night, until the numbers say you can switch. And what you switch to is yours — the code and the data.',
  openGraph: {
    title: 'Ditch QuickBooks. Just Not On Day One. | Found It Software',
    description:
      'Your new system runs beside QuickBooks, penny-matched every night, until the numbers say you can switch. And what you switch to is yours — the code and the data.',
    type: 'website',
    url: 'https://founditsoftware.com/lp/ditch-quickbooks',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

export default function DitchQuickbooksLP() {
  return <DitchQuickbooksLPContent />;
}
