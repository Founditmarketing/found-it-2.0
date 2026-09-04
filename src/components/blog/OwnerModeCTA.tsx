'use client';

/* ─── The CTA that keeps the reader's thought ───
 * The article ends by surfacing the one thing the reader still has to
 * call somebody to change. This captures that sentence BEFORE the click
 * and carries it onto the Map intake as ?why=, so the next page can
 * greet them with their own words instead of a blank questionnaire. */

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function OwnerModeCTA() {
  const [why, setWhy] = useState('');
  const router = useRouter();
  const go = () => {
    const v = why.trim().slice(0, 200);
    router.push(v ? `/lp/walkthrough?why=${encodeURIComponent(v)}` : '/lp/walkthrough');
  };
  return (
    <div className="max-w-3xl mx-auto px-6 mt-4 mb-8">
      <div className="border border-border/25 rounded-[1.75rem] bg-card/10 p-6 md:p-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            go();
          }}
          className="flex flex-col sm:flex-row gap-2"
        >
          <div className="flex-1 flex items-center gap-2 h-12 rounded-full bg-background/60 border border-border/30 px-5">
            <span className="text-sm text-muted-foreground font-semibold whitespace-nowrap">
              I still have to call somebody to&hellip;
            </span>
            <input
              value={why}
              onChange={(e) => setWhy(e.target.value)}
              placeholder="change how missed calls are handled"
              className="min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="px-8 h-12 w-full sm:w-auto whitespace-nowrap rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-xs hover:opacity-90 transition-opacity"
          >
            Map This
          </button>
        </form>
        <p className="mt-3 text-sm text-muted-foreground font-medium">
          We will tell you whether Owner Mode should touch it.
        </p>
      </div>
    </div>
  );
}
