import type { Metadata } from 'next';
import { GoogleAdsLPContent } from './content';

export const metadata: Metadata = {
  title: 'Google Ads Management for Local Businesses | Found It Marketing',
  description:
    'Stop wasting ad spend. Our Google Ads management delivers real leads for local service businesses — plumbers, contractors, medical practices & more. Free audit included.',
  openGraph: {
    title: 'Google Ads Management for Local Businesses | Found It Marketing',
    description:
      'Stop wasting ad spend. Get real leads with expert Google Ads management from a 13-year agency veteran. Free strategy session.',
    type: 'website',
    url: 'https://founditmarketing.com/lp/google-ads-management',
  },
};

export default function GoogleAdsLP() {
  return <GoogleAdsLPContent />;
}
