import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import IndustryPageClient from './client';
import { industries } from './data';

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

  return {
    title: `${data.name} Marketing`,
    description: data.subline,
    openGraph: {
      title: `${data.name} Marketing`,
      description: data.subline,
      type: 'website',
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

  return <IndustryPageClient data={data} />;
}
