import { Metadata } from 'next';
import GeoClient from '../central-louisiana-web-design/client';

export const metadata: Metadata = {
  title: 'SEO in Pineville, LA | Local Search Optimization',
  description: 'SEO and AI search optimization for Pineville, LA businesses. Show up on Google and in AI search. Free audit.',
};

export default function Page() {
  return <GeoClient region="Pineville" city="Pineville" service="ai-search-seo" />;
}
