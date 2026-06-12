'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Phone, RotateCcw } from 'lucide-react';
import { phoneHref, phoneDisplay, CALLRAIL_CLASS } from '@/lib/phone';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[Found It] Page error:', error);
  }, [error]);

  return (
    <main className="bg-transparent text-foreground min-h-[80dvh] flex items-center pt-32 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[600px] mx-auto px-6 relative z-10 text-center w-full">
        <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-6">
          Something Broke
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-6">
          That Wasn&apos;t{' '}
          <span className="text-primary">Supposed to Happen.</span>
        </h1>

        <p className="text-lg text-muted-foreground font-medium max-w-md mx-auto leading-relaxed mb-10">
          Something glitched on our end — not yours. Try again, or just call us the old-fashioned way.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-black uppercase italic tracking-tighter px-8 py-4 rounded-xl text-sm hover:shadow-lg hover:shadow-primary/25 transition-shadow"
          >
            <RotateCcw className="w-4 h-4" /> Try Again
          </button>
          <Link href="/" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
            Back to home →
          </Link>
          <a href={phoneHref} className={`flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-bold ${CALLRAIL_CLASS}`}>
            <Phone className="w-4 h-4" /> {phoneDisplay}
          </a>
        </div>
      </div>
    </main>
  );
}
