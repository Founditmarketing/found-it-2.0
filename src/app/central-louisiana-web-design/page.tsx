import { Metadata } from 'next';
import GeoClient from './client';

export const metadata: Metadata = {
  title: 'Web Design in Central Louisiana | Alexandria, Pineville | Found It Marketing',
  description: 'Custom web design for Central Louisiana businesses. Mobile-first, fast-loading websites that turn visitors into calls. Free concept call.',
};

export default function Page() {
  return <GeoClient region="Central Louisiana" city="Alexandria" service="web-design" />;
}
