import { permanentRedirect } from 'next/navigation';

export default function WebDevelopmentPage() {
  // Organic visitors get the full service page (nav, schema, internal links) —
  // not the chrome-less paid landing page.
  permanentRedirect('/web-design');
}
