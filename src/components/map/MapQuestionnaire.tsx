'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { NativeLeadForm } from '@/components/forms/NativeLeadForm';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* THE MAP QUESTIONNAIRE (Trevor 8/29: "we should have one on the site").
   The fitting call's opening questions, asked before the call: eight steps,
   mostly taps, three short writes. Answers ride into /api/lead as trailLines
   (additive — same payload shape), so every map lead lands in the inbox with
   the first page of the map already sketched. Interaction model mirrors
   FitCheck (stale-click guard included); this is intake, not a gate — there
   is no verdict and nobody gets bounced. */

type MapQ =
  | { id: string; kind: 'single'; prompt: string; options: string[] }
  | { id: string; kind: 'multi'; prompt: string; options: string[] }
  | { id: string; kind: 'text'; prompt: string; placeholder: string; optional?: boolean };

const QUESTIONS: MapQ[] = [
  {
    id: 'kind',
    kind: 'single',
    prompt: 'What kind of business is it?',
    options: ['Trades & service', 'Shop or retail', 'Office & professional', 'Something else'],
  },
  {
    id: 'lives',
    kind: 'multi',
    prompt: 'Where does the business live right now?',
    options: ['QuickBooks', 'Spreadsheets', 'Paper & whiteboards', 'Texts & photos', 'An industry app', "Somebody's memory"],
  },
  {
    id: 'systems',
    kind: 'single',
    prompt: 'How many systems does it take to run a day?',
    options: ['One or two', 'Three or four', 'Five or more', "Honestly can't count"],
  },
  {
    id: 'books',
    kind: 'single',
    prompt: 'Do your books agree with your bank?',
    options: ['To the penny', 'Close enough', 'No idea', "Don't ask"],
  },
  {
    id: 'copied',
    kind: 'multi',
    prompt: 'What still gets copied by hand?',
    options: ['Customer names', 'Orders', 'Invoices', 'Schedules', 'Job notes & photos', 'Nothing'],
  },
  {
    id: 'ninepm',
    kind: 'text',
    prompt: "What's the 9 PM work — the job that follows you home?",
    placeholder: 'Invoicing. Quotes. Chasing payments. Whatever it is.',
  },
  {
    id: 'hire',
    kind: 'text',
    prompt: 'If you could hire one more person tomorrow, what would they do all day?',
    placeholder: 'Answer the phone. Chase estimates. Keep the books straight.',
  },
  {
    id: 'nevertouch',
    kind: 'text',
    prompt: 'What should software never touch in your business?',
    placeholder: 'The phone. Your pricing. We ban things on purpose.',
    optional: true,
  },
];

const TRAIL_LABELS: Record<string, string> = {
  kind: 'Business',
  lives: 'Lives in',
  systems: 'Systems/day',
  books: 'Books vs bank',
  copied: 'Hand-copied',
  ninepm: '9PM work',
  hire: 'Next hire would',
  nevertouch: 'Never touch',
};

export function MapQuestionnaire({
  source = 'map_questionnaire',
  pageSlug = 'map',
  className = '',
}: {
  source?: string;
  pageSlug?: string;
  className?: string;
}) {
  const [quiz, setQuiz] = useState<{ step: number; answers: Record<string, string[]>; draft: string }>({
    step: 0,
    answers: {},
    draft: '',
  });
  const { step, answers, draft } = quiz;

  const done = step >= QUESTIONS.length;
  const q = QUESTIONS[Math.min(step, QUESTIONS.length - 1)];

  const advance = (qid: string, value: string[]) =>
    setQuiz((prev) => {
      if (prev.step >= QUESTIONS.length) return prev;
      if (QUESTIONS[prev.step].id !== qid) return prev; // stale click from an exiting card
      return { step: prev.step + 1, answers: { ...prev.answers, [qid]: value }, draft: '' };
    });

  const toggle = (qid: string, value: string) =>
    setQuiz((prev) => {
      if (QUESTIONS[prev.step]?.id !== qid) return prev;
      const cur = prev.answers[qid] ?? [];
      const next = cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value];
      return { ...prev, answers: { ...prev.answers, [qid]: next } };
    });

  const back = () =>
    setQuiz((prev) => {
      const s = Math.max(0, prev.step - 1);
      const prevQ = QUESTIONS[s];
      return { ...prev, step: s, draft: prevQ?.kind === 'text' ? (prev.answers[prevQ.id]?.[0] ?? '') : '' };
    });
  const restart = () => setQuiz({ step: 0, answers: {}, draft: '' });

  const trailLines = QUESTIONS.map((question) => {
    const a = (answers[question.id] ?? []).filter(Boolean);
    return a.length ? `${TRAIL_LABELS[question.id]}: ${a.join(', ')}` : '';
  }).filter(Boolean);

  const nextButton = (label: string, onClick: () => void, disabled = false) => (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black uppercase italic tracking-tighter text-base py-3.5 rounded-xl hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
    >
      {label} <ArrowRight className="w-4 h-4" aria-hidden="true" />
    </button>
  );

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div
            key={`mq-${step}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease }}
          >
            <div className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl p-6 lg:p-8">
              {step === 0 && (
                <>
                  <h3 className="text-xl lg:text-2xl font-black uppercase italic tracking-tighter text-foreground mb-1 leading-tight">
                    Start Your Map Right Now.
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium mb-5">
                    Eight quick ones. Your answers become the first page of the map, and Trevor
                    reads every word before the fitting.
                  </p>
                </>
              )}
              <div className="flex items-center justify-between mb-4 min-h-[24px]">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={back}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" /> Back
                  </button>
                ) : (
                  <span className="text-xs font-medium text-muted-foreground">
                    {q.kind === 'single' ? 'Tap one.' : 'Tap all that fit.'}
                  </span>
                )}
                <span className="text-xs font-mono font-bold text-faint tracking-widest">
                  {step + 1} / {QUESTIONS.length}
                </span>
              </div>

              <h4 className="text-lg lg:text-xl font-black uppercase italic tracking-tighter text-foreground mb-4 leading-tight">
                {q.prompt}
              </h4>

              {q.kind === 'single' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" role="group" aria-label={q.prompt}>
                  {q.options.map((o) => (
                    <button
                      key={o}
                      type="button"
                      onClick={() => advance(q.id, [o])}
                      className="rounded-xl border px-4 py-3 min-h-[46px] text-sm font-bold text-left transition-colors bg-card/20 border-border/20 text-foreground hover:border-primary/40"
                    >
                      {o}
                    </button>
                  ))}
                </div>
              )}

              {q.kind === 'multi' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4" role="group" aria-label={q.prompt}>
                    {q.options.map((o) => {
                      const selected = (answers[q.id] ?? []).includes(o);
                      return (
                        <button
                          key={o}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => toggle(q.id, o)}
                          className={`rounded-xl border px-4 py-3 min-h-[46px] text-sm font-bold text-left transition-colors ${
                            selected
                              ? 'bg-primary text-primary-foreground border-primary'
                              : 'bg-card/20 border-border/20 text-foreground hover:border-primary/40'
                          }`}
                        >
                          {o}
                        </button>
                      );
                    })}
                  </div>
                  {nextButton('Next', () => advance(q.id, answers[q.id] ?? []), (answers[q.id] ?? []).length === 0)}
                </>
              )}

              {q.kind === 'text' && (
                <>
                  <textarea
                    rows={3}
                    maxLength={500}
                    value={draft}
                    onChange={(e) => setQuiz((prev) => ({ ...prev, draft: e.target.value }))}
                    placeholder={q.placeholder}
                    className="w-full bg-card/20 border border-border/20 rounded-xl px-4 py-3.5 text-base text-foreground font-medium placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-y min-h-[84px] mb-4"
                  />
                  {nextButton(
                    'Next',
                    () => advance(q.id, draft.trim() ? [draft.trim()] : []),
                    !q.optional && !draft.trim()
                  )}
                  {q.optional && !draft.trim() && (
                    <button
                      type="button"
                      onClick={() => advance(q.id, [])}
                      className="mt-3 w-full text-center text-xs font-bold text-muted-foreground hover:text-primary transition-colors"
                    >
                      Skip this one
                    </button>
                  )}
                </>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="mq-form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease }}
          >
            <div className="flex items-center justify-between mb-3">
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
            <NativeLeadForm
              source={source}
              pageSlug={pageSlug}
              heading="Last Page: Who's the Map For?"
              subheading="Trevor reads every answer before the fitting. The map is yours to keep either way."
              ctaLabel="Start My Map"
              compact
              trailLines={trailLines}
              successNote="Got it. Trevor reads every word, then texts you to set the fitting."
              privacyNote="No spam, no list. One human reads it."
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
