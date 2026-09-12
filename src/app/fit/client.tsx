'use client';

import { FitFlow } from '@/components/fit/FitFlow';

/* THE FIT CHECK page, chrome only. One path (9/11): the job, five fit
   questions, the verdict, the number, the best time, the hop to
   /thank-you?from=fit. The flow lives in src/components/fit/FitFlow.tsx;
   the LP form slots still embed the compact quiz from FitCheck.tsx.
   The screen-1 title is the page h1, so no headline sits above the card. */

export default function FitClient() {
  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-24 relative overflow-hidden min-h-[80dvh]">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[680px] mx-auto px-6 relative z-10">
        <p className="text-primary font-mono text-[13px] font-black uppercase tracking-[0.4em] mb-5 opacity-80">
          The Fit Check
        </p>

        <FitFlow />
      </div>
    </main>
  );
}
