import type { Metadata } from 'next';
import ListClient from './client';

/* ─── /list — "The Too Good To Be True List" gated lead magnet.
   An ad landing page built as a premium dark editorial article. Items 1–3
   are open; the other six unlock when the visitor leaves ONE thing — a
   cell number — through a gate wired to the same /api/lead pipe as every
   other form (source: 'too-good-list'). The page ends on text, not a
   button: "text MAP to (318) 713-3781". Deliberately noindex — it exists
   for paid traffic, and a gate on an indexed page is a bad search result. */

export const metadata: Metadata = {
  title: 'The Too Good To Be True List',
  description:
    'Nine things real Louisiana businesses run every day that sound like lies. August–October 2026 edition.',
  openGraph: {
    title: 'The Too Good To Be True List',
    description: 'Nine things real Louisiana businesses run every day that sound like lies. August–October 2026 edition.',
    type: 'article',
    url: 'https://www.founditsoftware.com/list',
    images: [{ url: '/og-list-v1.png', width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

export default function ListPage() {
  return <ListClient />;
}
