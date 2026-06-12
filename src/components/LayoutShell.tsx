'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ClientBackground } from '@/components/landing/ClientBackground';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import { Toaster } from '@/components/ui/toaster';
import { TrevorConcierge } from '@/components/concierge/TrevorConcierge';
import { VoiceIntro } from '@/components/landing/VoiceIntro';

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
      <VoiceIntro />
      <Toaster />
    </SmoothScrollProvider>
  );
}
