import { Metadata } from 'next';
import ThankYouClient from './client';

export const metadata: Metadata = {
  title: 'Thank You | Found It Software',
  description: "Request received. Trevor calls you back.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
