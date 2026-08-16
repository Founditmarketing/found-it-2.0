'use client';

import { FitCheck } from '@/components/fit/FitCheck';

/* THE FIT CHECK page — chrome only. The quiz, verdicts, and form reveal all
   live in the shared FitCheck component (src/components/fit/FitCheck.tsx),
   which the gated LP form slots embed too. One quiz, everywhere. */

export default function FitClient() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-24 relative overflow-hidden min-h-[80dvh]">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[680px] mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
            The Fit Check
          </p>
          <h1 className="text-4xl sm:text-5xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground">
            Sixty Seconds.{' '}
            <span className="text-primary">Straight Answer.</span>
          </h1>
        </div>

        <FitCheck variant="page" source="fit_check" pageSlug="fit" />
      </div>
    </main>
  );
}
