'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ClientBackground } from '@/components/landing/ClientBackground';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import { Toaster } from '@/components/ui/toaster';

// The concierge stays invisible for the first 1–2s by design, so its JS
// has no business in the initial bundle — load the chunk after hydration.
const TrevorConcierge = dynamic(
  () => import('@/components/concierge/TrevorConcierge').then((m) => m.TrevorConcierge),
  { ssr: false }
);
export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLP = pathname.startsWith('/lp');

  if (isLP) {
    return (
      <div className="relative flex flex-col min-h-screen">
        {children}
        <Toaster />
      </div>
    );
  }

  return (
    <SmoothScrollProvider>
      {/* No wrapper: a z-indexed wrapper creates a stacking context that caps
          the fixed header AND its mobile menu (z-[160]) at the wrapper's level,
          letting the z-40 chat launcher paint over the open menu. */}
      <Header />
      <ClientBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        {children}
      </div>
      <div className="relative z-10 bg-background/95">
        <Footer />
      </div>
      <TrevorConcierge />
      <Toaster />
    </SmoothScrollProvider>
  );
}
