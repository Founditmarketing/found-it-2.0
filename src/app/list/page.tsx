import type { Metadata } from 'next';
import ListClient from './client';

/* ─── /list — "The Too Good To Be True List" gated lead magnet.
   An ad landing page that CONTINUES the Facebook ad's text exchange: the
   page is an iMessage-style thread, not an article. Items 1–3 are open;
   the other six unlock when the visitor leaves name + cell through a
   reply-composer gate wired to the same /api/lead pipe as every other
   form (source: 'too-good-list'). Deliberately noindex — it exists for
   paid traffic, and a gate on an indexed page is a bad search result. */

export const metadata: Metadata = {
  title: 'The Too Good To Be True List',
  description:
    'Nine things real Louisiana businesses run every day that sound like lies. August–October 2026 edition.',
  robots: { index: false, follow: false },
};

export default function ListPage() {
  return <ListClient />;
}
