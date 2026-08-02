import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import IndustryPageClient from './client';
import { industries } from './data';
import { buildServiceSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';

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
  const title = `${data.name} Marketing | Found It Marketing`;
  return {
    title: `${data.name} Marketing`,
    description: data.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: data.metaDescription,
      type: 'website',
      url,
      images: [{ url: '/og-image-v3.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: data.metaDescription,
      images: ['/og-image-v3.png'],
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

  const faqSchema = buildFAQSchema(data.faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <IndustryPageClient data={data} />
    </>
  );
}
