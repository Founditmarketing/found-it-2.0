import { permanentRedirect } from 'next/navigation';

/* Legacy URL — every sibling legacy service URL redirects; this one 404'd. */
export default function WebsitesPage() {
  permanentRedirect('/web-design');
}
