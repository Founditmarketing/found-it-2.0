import type { Metadata } from 'next';
import { Suspense } from 'react';
import OnboardingClient from './client';

export const metadata: Metadata = {
  title: "Don't Fill Out a Form. Talk.",
  description:
    'New-client onboarding, spoken: press the button, tell us how your business runs, and the system sorts it into the right boxes while you talk. You fix anything it got wrong. Done.',
  alternates: { canonical: '/onboarding' },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Don't Fill Out a Form. Talk. | Found It Software",
    description:
      'New-client onboarding, spoken. The system sorts your words into the boxes while you talk.',
    type: 'website',
    url: 'https://www.founditsoftware.com/onboarding',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
};

export default function OnboardingPage() {
  return (
    <Suspense>
      <OnboardingClient />
    </Suspense>
  );
}
