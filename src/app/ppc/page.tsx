import { permanentRedirect } from 'next/navigation';

export default function PpcPage() {
  // Organic visitors get the full service page (nav, schema, internal links) —
  // not the chrome-less paid landing page.
  permanentRedirect('/google-ads-management');
}
