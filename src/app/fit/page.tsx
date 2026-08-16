import type { Metadata } from 'next';
import FitClient from './client';

export const metadata: Metadata = {
  title: 'The Fit Check — 60 Seconds | Found It Software',
  description:
    'Five taps, one honest verdict: strong fit, borderline, or not a fit. We tell you straight either way — no typing until the end.',
  alternates: { canonical: '/fit' },
  openGraph: {
    title: 'The Fit Check — 60 Seconds | Found It Software',
    description:
      'Five taps, one honest verdict: strong fit, borderline, or not a fit. We tell you straight either way.',
    type: 'website',
    url: 'https://www.founditsoftware.com/fit',
    images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
  },
};

export default function FitPage() {
  return <FitClient />;
}
