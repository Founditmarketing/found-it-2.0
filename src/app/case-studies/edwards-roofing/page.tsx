import type { Metadata } from 'next';
import EdwardsRoofingCaseStudy from './client';

/* The one deep-proof artifact the ad pages link to. Every number on this
   page is sanctioned: $195,882.75 receivables / $19,000 error (the audit
   figures already public on the LPs), the 12+ count from TRACK_RECORD,
   and pricing from OS_PRICING. Cory's quotes are verbatim from his
   on-camera clip — never paraphrase, never extend. */
export const metadata: Metadata = {
  title: 'Edwards Roofing Runs On A System It Owns | Found It Software',
  description:
    'Cory Edwards moved Edwards Roofing onto one system — estimates, jobs, invoices, the books. The penny-audit surfaced $195,882.75 in open receivables and caught a $19,000 bookkeeping error. He owns the code and the data.',
  alternates: { canonical: '/case-studies/edwards-roofing' },
  openGraph: {
    title: 'Edwards Roofing Runs On A System It Owns | Found It Software',
    description:
      'The penny-audit surfaced $195,882.75 in open receivables and caught a $19,000 bookkeeping error the old software never saw. Cory owns the code and the data.',
    type: 'article',
    url: 'https://www.founditsoftware.com/case-studies/edwards-roofing',
    images: [{ url: '/cory-ownership-poster-v3.jpg', width: 1920, height: 1080 }],
  },
};

export default function Page() {
  return <EdwardsRoofingCaseStudy />;
}
