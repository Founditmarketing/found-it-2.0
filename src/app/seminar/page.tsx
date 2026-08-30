import type { Metadata } from 'next';
import SeminarClient from './client';

export const metadata: Metadata = {
  title: "The Owner's Room — A Free AI Seminar for Business Owners | Found It Software",
  description:
    "AI for business owners over 50: what's real, what's junk, and what it's already doing in Louisiana shops. Free, in a room, not on Zoom. Real screens from real businesses. September session in Alexandria — reserve a seat.",
  alternates: { canonical: '/seminar' },
  openGraph: {
    title: "The Owner's Room — A Free AI Seminar for Business Owners",
    description:
      "What's real, what's junk, and what AI is already doing in Louisiana shops. Free, in a room, not on Zoom. September session in Alexandria.",
    type: 'website',
    url: 'https://www.founditsoftware.com/seminar',
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
};

export default function SeminarPage() {
  return <SeminarClient />;
}
