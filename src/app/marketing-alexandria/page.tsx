import { Metadata } from 'next';
import GeoClient from '../central-louisiana-web-design/client';

export const metadata: Metadata = {
  title: 'Digital Marketing in Alexandria, LA | Google Ads & SEO',
  description: 'Digital marketing for Alexandria, LA businesses. Google Ads, SEO, AI search optimization. Local team, real results. Free audit.',
};

export default function Page() {
  return <GeoClient region="Alexandria" city="Alexandria" service="google-ads-management" />;
}
