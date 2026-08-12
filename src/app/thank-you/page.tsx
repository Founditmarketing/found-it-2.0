import { Metadata } from 'next';
import ThankYouClient from './client';

export const metadata: Metadata = {
  title: 'Thank You | Found It Software',
  description: "We've received your request and will be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
