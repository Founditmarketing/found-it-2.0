'use client';

import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ClientBackground } from '@/components/landing/ClientBackground';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import { Toaster } from '@/components/ui/toaster';
import { TrevorConcierge } from '@/components/concierge/TrevorConcierge';

/** Escape hatch shown while Boring Mode is active. */
function BoringBanner() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted || resolvedTheme !== 'boring') return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[300] bg-white border border-gray-400 px-5 py-3 flex items-center gap-4 max-w-[92vw]">
      <p className="text-sm" style={{ color: '#222' }}>
        This is what every other agency builds.
      </p>
      <button
        onClick={() => setTheme('dark')}
        className="text-sm font-bold underline whitespace-nowrap"
        style={{ color: '#0645ad' }}
      >
        Bring back Found It
      </button>
    </div>
  );
}

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLP = pathname.startsWith('/lp');

  if (isLP) {
    return (
      <div className="relative flex flex-col min-h-screen">
        {children}
        <BoringBanner />
        <Toaster />
      </div>
    );
  }

  return (
    <SmoothScrollProvider>
      <div className="relative z-20">
        <Header />
      </div>
      <ClientBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        {children}
      </div>
      <div className="relative z-10 bg-background/95">
        <Footer />
      </div>
      <TrevorConcierge />
      <BoringBanner />
      <Toaster />
    </SmoothScrollProvider>
  );
}
