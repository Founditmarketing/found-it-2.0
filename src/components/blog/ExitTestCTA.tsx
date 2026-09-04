'use client';

/* ─── The CTA that converts the argument into a diagnosis ───
 * The article's last thought is "what survives if I cancel tomorrow?"
 * This captures what the business currently runs on and carries it to the
 * Map intake as ?why=, same plumbing as OwnerModeCTA — the next page
 * greets them with their own stack instead of a blank questionnaire. */

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ExitTestCTA({
  heading = (
    <>
      What survives if you cancel <span className="text-primary">tomorrow?</span>
    </>
  ),
  sub = 'Tell us what your business runs on. We’ll map what exports, what stops working, and what one owned system would need to replace.',
  button = 'Run the Exit Test',
}: {
  heading?: React.ReactNode;
  sub?: string;
  button?: string;
}) {
  const [runs, setRuns] = useState('');
  const router = useRouter();
  const go = () => {
    const v = runs.trim().slice(0, 200);
    router.push(v ? `/lp/walkthrough?why=${encodeURIComponent(`my business currently runs on ${v}`)}` : '/lp/walkthrough');
  };
  return (
    <div className="max-w-3xl mx-auto px-6 mt-4 mb-8">
      <div className="border border-border/25 rounded-[1.75rem] bg-card/10 p-6 md:p-8">
        <p className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-foreground mb-2">
          {heading}
        </p>
        <p className="text-sm text-muted-foreground font-medium mb-4">{sub}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            go();
          }}
          className="flex flex-col sm:flex-row gap-2"
        >
          <div className="flex-1 flex items-center gap-2 h-12 rounded-full bg-background/60 border border-border/30 px-5">
            <span className="text-sm text-muted-foreground font-semibold whitespace-nowrap">
              My business currently runs on&hellip;
            </span>
            <input
              value={runs}
              onChange={(e) => setRuns(e.target.value)}
              placeholder="QuickBooks and a scheduling app"
              className="min-w-0 flex-1 bg-transparent text-base sm:text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="px-8 h-12 w-full sm:w-auto whitespace-nowrap rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-xs hover:opacity-90 transition-opacity"
          >
            {button}
          </button>
        </form>
      </div>
    </div>
  );
}
