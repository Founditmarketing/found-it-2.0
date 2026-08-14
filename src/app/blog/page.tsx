import { BlogList } from '@/components/blog/BlogList';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Plain-English Notes for Business Owners',
    description: "Software, AI, and getting found — written the way we'd say it across your counter. Notes for business owners from Found It Software in Alexandria, Louisiana.",
    alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-48 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.03)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
            <BlogList />
        </div>
    </main>
  );
}
