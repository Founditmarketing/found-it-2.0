import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import IndustryPageClient from './client';
import { industries } from './data';
import { buildServiceSchema, buildBreadcrumbSchema } from '@/lib/schema';

export async function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = industries[params.slug];
  if (!data) return {};

  const url = `/industries/${data.slug}`;
  return {
    title: `${data.name} Marketing`,
    description: data.subline,
    alternates: { canonical: url },
    openGraph: {
      title: `${data.name} Marketing`,
      description: data.subline,
      type: 'website',
      url,
    },
  };
}

export default function IndustryPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = industries[params.slug];
  if (!data) return notFound();

  const serviceSchema = buildServiceSchema({
    name: `${data.name} Marketing`,
    serviceType: 'Digital Marketing',
    description: data.subline,
    url: `/industries/${data.slug}`,
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: `${data.name} Marketing`, url: `/industries/${data.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <IndustryPageClient data={data} />
    </>
  );
}
