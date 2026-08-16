'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, RotateCcw } from 'lucide-react';
import { NativeLeadForm } from '@/components/forms/NativeLeadForm';
import { FIT_QUESTIONS, fitVerdict, fitTrail, type FitAnswers } from '@/lib/fit';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* THE FIT CHECK — five chip-taps, one honest verdict. No typing until the
   end, back always works, no progress theatrics — just a step counter.
   Verdict logic lives in src/lib/fit.ts (pure, tested). The NOT-A-FIT tier
   sells nothing and captures no email — walking away clean is the point. */

export default function FitClient() {
  const [step, setStep] = useState(0); // 0..4 = questions, 5 = verdict
  const [answers, setAnswers] = useState<Partial<FitAnswers>>({});

  const done = step >= FIT_QUESTIONS.length;
  const q = FIT_QUESTIONS[Math.min(step, FIT_QUESTIONS.length - 1)];
  const verdict = done ? fitVerdict(answers as FitAnswers) : null;

  const pick = (value: string) => {
    setAnswers((a) => ({ ...a, [q.id]: value }));
    setStep((s) => s + 1);
  };
  const back = () => setStep((s) => Math.max(0, s - 1));
  const restart = () => {
    setAnswers({});
    setStep(0);
  };

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

        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key={`q-${step}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease }}
              className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl p-6 lg:p-8"
            >
              <div className="flex items-center justify-between mb-6 min-h-[28px]">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={back}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" /> Back
                  </button>
                ) : (
                  <span className="text-xs font-medium text-muted-foreground">Tap one.</span>
                )}
                <span className="text-xs font-mono font-bold text-faint tracking-widest">
                  {step + 1} / {FIT_QUESTIONS.length}
                </span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-black uppercase italic tracking-tighter text-foreground mb-6 leading-tight">
                {q.prompt}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="group" aria-label={q.prompt}>
                {q.options.map((o) => {
                  const selected = answers[q.id] === o.value;
                  return (
                    <button
                      key={o.value}
                      type="button"
                      onClick={() => pick(o.value)}
                      className={`rounded-xl border px-4 py-4 text-sm font-bold text-left transition-colors min-h-[52px] ${
                        selected
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-card/20 border-border/20 text-foreground hover:border-primary/40'
                      }`}
                    >
                      {o.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="verdict"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease }}
            >
              <div className="flex items-center justify-between mb-6">
                <button
                  type="button"
                  onClick={back}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" /> Back
                </button>
                <button
                  type="button"
                  onClick={restart}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" /> Start over
                </button>
              </div>

              {verdict?.tier === 'strong' && (
                <div>
                  <div className="bg-card/15 backdrop-blur-xl border border-primary/30 rounded-2xl p-8 lg:p-10 text-center mb-6 shadow-2xl shadow-primary/10">
                    <h2 className="text-5xl sm:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-primary mb-4">
                      Strong Fit.
                    </h2>
                    <p className="text-base lg:text-lg text-foreground font-bold">
                      You look like exactly who we build for.
                    </p>
                  </div>
                  <NativeLeadForm
                    source="fit_check"
                    pageSlug="fit"
                    heading="Request Your Software Map"
                    subheading="The app we'd build if we owned your company. Free, and yours either way."
                    ctaLabel="Request My Software Map"
                    compact
                    initialBand={answers.revenue}
                    trailLines={fitTrail(answers as FitAnswers, verdict)}
                  />
                  <p className="mt-6 text-center">
                    <Link href="/who-we-build-for" className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors">
                      See who we build for →
                    </Link>
                  </p>
                </div>
              )}

              {verdict?.tier === 'borderline' && (
                <div>
                  <div className="bg-card/15 backdrop-blur-xl border border-border/30 rounded-2xl p-8 lg:p-10 text-center mb-6">
                    <h2 className="text-5xl sm:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-4">
                      Border<span className="text-primary">line.</span>
                    </h2>
                    <p className="text-base text-muted-foreground font-medium leading-relaxed max-w-md mx-auto">
                      {verdict.weakness}
                    </p>
                  </div>
                  <NativeLeadForm
                    source="fit_check"
                    pageSlug="fit"
                    heading="The Map Is Still Free"
                    subheading="Worth the call to find out — we'll tell you straight either way."
                    ctaLabel="Request My Software Map"
                    compact
                    initialBand={answers.revenue}
                    trailLines={fitTrail(answers as FitAnswers, verdict)}
                  />
                  <p className="mt-6 text-center">
                    <Link href="/who-we-build-for" className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors">
                      See who we build for →
                    </Link>
                  </p>
                </div>
              )}

              {verdict?.tier === 'no' && (
                <div className="bg-card/15 backdrop-blur-xl border border-border/30 rounded-2xl p-8 lg:p-10 text-center">
                  <h2 className="text-5xl sm:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-4">
                    Not A Fit.
                  </h2>
                  <p className="text-base text-muted-foreground font-medium leading-relaxed max-w-md mx-auto mb-6">
                    {verdict.reason}
                  </p>
                  <p className="text-sm text-foreground font-bold mb-8">
                    No hard feelings — most good businesses aren&apos;t ours to build.
                  </p>
                  {verdict.pointer && (
                    <Link
                      href={verdict.pointer.href}
                      className="inline-flex items-center gap-2 text-sm text-primary font-bold hover:underline"
                    >
                      <BookOpen className="w-4 h-4" aria-hidden="true" />
                      {verdict.pointer.label}
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  )}
                  <p className="mt-8">
                    <Link href="/who-we-build-for" className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors">
                      Who we do build for →
                    </Link>
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
