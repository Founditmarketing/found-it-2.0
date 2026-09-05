'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, RotateCcw, ShieldCheck } from 'lucide-react';
import { NativeLeadForm } from '@/components/forms/NativeLeadForm';
import { BookingCta } from '@/components/lp/BookingCta';
import { FIT_QUESTIONS, fitVerdict, fitTrail, type FitAnswers } from '@/lib/fit';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* THE FIT CHECK — five chip-taps, one honest verdict. The single shared quiz:
   /fit renders the 'page' variant, every gated lead-form slot renders 'embed'.
   Verdict logic lives in src/lib/fit.ts (pure, tested) — never fork it.
   GATE DOCTRINE (Trevor 8/16): the offer is no longer open to anyone. The quiz
   IS step one of getting it — STRONG/BORDERLINE reveal the lead form with the
   band and fit trail prefilled; NOT A FIT gets the kind dismissal, one free
   pointer, and NO capture. Craftsman, not bouncer. */

export interface FitCheckProps {
  /** 'page' = the full /fit experience. 'embed' = compact, lives in a form slot. */
  variant?: 'page' | 'embed';
  /** Attribution tag sent to /api/lead, e.g. 'fit_check', 'lp_walkthrough_hero'. */
  source: string;
  /** Page slug recorded alongside the lead. */
  pageSlug: string;
  /** Embed only: heading above the quiz — keep the promise verbatim
   *  (message match with the button they clicked). */
  heading?: string;
  /** Embed only: rides into the revealed form as its subheading, so the
   *  promise / scarcity line still sits at the point of commitment. */
  subheading?: string;
  /** Submit label on the revealed form. */
  ctaLabel?: string;
  /** Success-state line passed to the revealed form. */
  successNote?: string;
  /** Reassurance / price line — under the quiz card while tapping, then
   *  under the revealed form (price is never buried behind the gate). */
  privacyNote?: string;
  /** Embed only: hot-visitor calendar under the revealed form. The open
   *  booking button moved BEHIND the verdict — qualified gets the call. */
  bookingUrl?: string;
  bookingLabel?: string;
  className?: string;
}

/* ─── THE WANT DOOR (9/5, Trevor: "what if they jyust want bad ass
   custom software... the latest greatest shit thats what im fucking
   selling") ───
   The /fit front door sells desire, not desperation: six wants as tappable
   objects — tap one and the machine answers instantly with the first build
   (deterministic, sanctioned capability lines, no API latency). The free
   text stays as "say it your way" and runs through /api/tailor with the
   same hard walls; pain is welcome but never the price of admission.
   NOT-A-FIT still captures nothing; the chip quiz stays one tap away and
   catches any API failure. */

const WANTS: { title: string; sub: string; first: string }[] = [
  {
    title: 'The phone answered at midnight',
    sub: 'Booked, filed, and waiting with your coffee.',
    first: 'The phone — answered, booked, and filed before anyone calls back.',
  },
  {
    title: 'The whole shop in one system',
    sub: 'Register to website, one brain. Yours.',
    first: 'One system — register, jobs, customers, books — built around how you run.',
  },
  {
    title: 'Every dollar chased',
    sub: 'Polite reminders that never sleep.',
    first: 'Receivables — reminded, collected, and quiet the second the money lands.',
  },
  {
    title: 'Orders that type themselves',
    sub: 'Texts, emails, chicken scratch — captured.',
    first: 'Order intake — every line lands, the unreadable ones held in red.',
  },
  {
    title: 'Books that prove themselves',
    sub: 'Tied to the bank, checked nightly.',
    first: 'A ledger that ties to the bank and refuses to pretend.',
  },
];

function TailorDoor({
  source,
  pageSlug,
  onQuiz,
}: {
  source: string;
  pageSlug: string;
  onQuiz: (note?: string) => void;
}) {
  const [problem, setProblem] = useState('');
  const [phase, setPhase] = useState<'ask' | 'busy' | 'heard' | 'no'>('ask');
  const [read, setRead] = useState<{ fit: string; heard: string; firstTarget: string; reason: string } | null>(null);

  const pickWant = (w: { title: string; first: string }) => {
    setRead({ fit: 'want', heard: w.title, firstTarget: w.first, reason: '' });
    setPhase('heard');
  };

  const submit = async () => {
    const p = problem.trim();
    if (p.length < 8 || phase === 'busy') return;
    setPhase('busy');
    try {
      const res = await fetch('/api/tailor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ problem: p }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const data = await res.json();
      if (!data.heard) throw new Error('empty');
      setRead(data);
      setPhase(data.fit === 'no' ? 'no' : 'heard');
    } catch {
      onQuiz('The line hiccupped — five quick taps instead.');
    }
  };

  if (phase === 'heard' && read) {
    return (
      <motion.div key="heard" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease }}>
        <div className="bg-card/15 backdrop-blur-xl border border-primary/30 rounded-2xl p-6 lg:p-8 mb-6 shadow-2xl shadow-primary/10">
          <p className="font-mono text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-3">
            Commissioned
          </p>
          <p className="text-lg lg:text-xl font-black italic tracking-tight text-foreground leading-snug mb-5">
            &ldquo;{read.heard}&rdquo;
          </p>
          {read.firstTarget && (
            <>
              <p className="font-mono text-[9px] font-black uppercase tracking-[0.25em] text-faint mb-1.5">
                The first build &middot; sized on the walkthrough
              </p>
              <p className="text-sm text-foreground font-bold leading-relaxed">{read.firstTarget}</p>
            </>
          )}
        </div>
        <NativeLeadForm
          source={source}
          pageSlug={pageSlug}
          heading="Leave the number. Trevor calls."
          subheading="That's everything we need from you."
          ctaLabel="Take It From Here"
          compact
          trailLines={[
            read.fit === 'want' ? `Want picked: "${read.heard}"` : `Tailor intake: "${problem.trim().slice(0, 300)}"`,
            read.fit === 'want' ? '' : `Heard: ${read.heard}`,
            read.firstTarget ? `First build: ${read.firstTarget}` : '',
            `AI fit read: ${read.fit}`,
          ].filter(Boolean)}
        />
        <p className="mt-5 text-center text-xs font-bold text-muted-foreground">
          <button type="button" onClick={() => setPhase('ask')} className="hover:text-primary transition-colors">
            Pick different →
          </button>
          <span className="mx-2 text-faint">&middot;</span>
          <button type="button" onClick={() => onQuiz()} className="hover:text-primary transition-colors">
            Prefer taps? Sixty seconds →
          </button>
        </p>
      </motion.div>
    );
  }

  if (phase === 'no' && read) {
    return (
      <motion.div key="no" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease }}>
        {/* The kind dismissal — sells nothing, captures nothing. */}
        <div className="bg-card/15 backdrop-blur-xl border border-border/30 rounded-2xl p-8 lg:p-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground mb-4">
            Not Our Lane.
          </h2>
          <p className="text-base text-muted-foreground font-medium leading-relaxed max-w-md mx-auto mb-4">{read.reason}</p>
          <p className="text-sm text-foreground font-bold mb-6">
            No hard feelings. Most good businesses aren&apos;t ours to build.
          </p>
          <p className="text-xs font-bold text-muted-foreground">
            <button type="button" onClick={() => onQuiz()} className="hover:text-primary transition-colors">
              Think we misread it? Five quick taps →
            </button>
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div key="ask" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease }}>
      <div className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl p-6 lg:p-8">
        <p className="font-mono text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-5">
          Point at it &middot; one tap
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
          {WANTS.map((w, i) => (
            <motion.button
              key={w.title}
              type="button"
              onClick={() => pickWant(w)}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.07, type: 'spring', stiffness: 260, damping: 22 }}
              className="group text-left rounded-xl border border-border/25 bg-card/20 px-5 py-4 hover:border-primary/50 hover:bg-primary/[0.05] active:scale-[0.99] transition-all"
            >
              <span className="block text-[15px] font-black uppercase italic tracking-tighter text-foreground leading-tight group-hover:text-primary transition-colors">
                {w.title}
              </span>
              <span className="mt-1 block font-mono text-[10px] font-black uppercase tracking-[0.12em] text-faint">
                {w.sub}
              </span>
            </motion.button>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + WANTS.length * 0.07, type: 'spring', stiffness: 260, damping: 22 }}
            className="rounded-xl border border-primary/35 bg-primary/[0.06] px-5 py-4"
          >
            <span className="block text-[15px] font-black uppercase italic tracking-tighter text-primary leading-tight">
              Something nobody else has
            </span>
            <span className="mt-1 block font-mono text-[10px] font-black uppercase tracking-[0.12em] text-muted-foreground">
              Say it below. We fit it.
            </span>
          </motion.div>
        </div>

        <label htmlFor="want-line" className="block font-mono text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-2.5">
          Or say it your way
        </label>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            id="want-line"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                submit();
              }
            }}
            disabled={phase === 'busy'}
            placeholder="The thing you want built — or the thing you want gone…"
            className="flex-1 h-13 min-h-[52px] w-full rounded-full bg-background/60 border border-border/30 px-5 text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 disabled:opacity-60"
          />
          <button
            type="button"
            onClick={submit}
            disabled={phase === 'busy' || problem.trim().length < 8}
            className="px-8 min-h-[52px] w-full sm:w-auto whitespace-nowrap rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-xs shadow-[0_14px_44px_-10px_rgba(255,85,0,0.45)] hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-50 disabled:shadow-none"
          >
            {phase === 'busy' ? 'Reading it…' : 'Hand It Over'}
          </button>
        </div>
        <p className="mt-4 font-mono text-[10px] font-black uppercase tracking-[0.18em] text-faint">
          No prep &middot; no forms &middot; the rest gets sized on the walkthrough
        </p>
      </div>
      <p className="mt-4 text-center text-xs font-bold text-muted-foreground">
        <button type="button" onClick={() => onQuiz()} className="hover:text-primary transition-colors">
          Prefer taps all the way? The sixty-second version →
        </button>
      </p>
    </motion.div>
  );
}

export function FitCheck({
  variant = 'page',
  source,
  pageSlug,
  heading,
  subheading,
  ctaLabel,
  successNote,
  privacyNote,
  bookingUrl,
  bookingLabel,
  className = '',
}: FitCheckProps) {
  // step: 0..4 = questions, 5 = verdict. One atomic state object — a chip
  // clicked mid-exit-animation belongs to the PREVIOUS question (its stale
  // closure used to double-advance and silently skip a question), so pick()
  // ignores any click whose question id isn't the current one.
  const [quiz, setQuiz] = useState<{ step: number; answers: Partial<FitAnswers> }>({
    step: 0,
    answers: {},
  });
  const { step, answers } = quiz;
  /* Page variant leads with the tailor door; the chip quiz is one tap away
     (and the landing spot if the tailor API is down). Embed slots keep the
     quiz — an LP form slot is already a commitment point. */
  const [entry, setEntry] = useState<{ mode: 'tailor' | 'quiz'; note?: string }>({
    mode: variant === 'page' ? 'tailor' : 'quiz',
  });

  const done = step >= FIT_QUESTIONS.length;
  const q = FIT_QUESTIONS[Math.min(step, FIT_QUESTIONS.length - 1)];
  const verdict = done ? fitVerdict(answers as FitAnswers) : null;

  const pick = (qid: keyof FitAnswers, value: string) => {
    setQuiz((prev) => {
      if (prev.step >= FIT_QUESTIONS.length) return prev;
      const current = FIT_QUESTIONS[prev.step].id;
      if (current !== qid) return prev; // stale click from an exiting card
      return { step: prev.step + 1, answers: { ...prev.answers, [qid]: value } };
    });
  };
  const back = () => setQuiz((prev) => ({ ...prev, step: Math.max(0, prev.step - 1) }));
  const restart = () => setQuiz({ step: 0, answers: {} });

  const chips = (size: 'lg' | 'sm') => (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 ${size === 'lg' ? 'gap-3' : 'gap-2.5'}`}
      role="group"
      aria-label={q.prompt}
    >
      {q.options.map((o) => {
        const selected = answers[q.id] === o.value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => pick(q.id, o.value)}
            className={`rounded-xl border px-4 text-sm font-bold text-left transition-colors ${
              size === 'lg' ? 'py-4 min-h-[52px]' : 'py-3 min-h-[46px]'
            } ${
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
  );

  const backButton = (
    <button
      type="button"
      onClick={back}
      className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors"
    >
      <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" /> Back
    </button>
  );
  const restartButton = (
    <button
      type="button"
      onClick={restart}
      className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors"
    >
      <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" /> Start over
    </button>
  );

  /* ─── EMBED: the quiz standing where the open form used to ─── */
  if (variant === 'embed') {
    return (
      <div className={className}>
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key={`q-${step}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease }}
            >
              <div className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl p-6 lg:p-8">
                {heading && (
                  <h3 className="text-xl lg:text-2xl font-black uppercase italic tracking-tighter text-foreground mb-1 leading-tight">
                    {heading}
                  </h3>
                )}
                <p className="text-sm text-muted-foreground font-medium mb-5">
                  First: 60 seconds to see if your business fits.
                </p>
                <div className="flex items-center justify-between mb-4 min-h-[24px]">
                  {step > 0 ? (
                    backButton
                  ) : (
                    <span className="text-xs font-medium text-muted-foreground">Tap one.</span>
                  )}
                  <span className="text-xs font-mono font-bold text-faint tracking-widest">
                    {step + 1} / {FIT_QUESTIONS.length}
                  </span>
                </div>
                <h4 className="text-lg lg:text-xl font-black uppercase italic tracking-tighter text-foreground mb-4 leading-tight">
                  {q.prompt}
                </h4>
                {chips('sm')}
              </div>
              {privacyNote && (
                <p className="mt-4 flex items-center justify-center gap-2 text-xs text-faint font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary/70 shrink-0" aria-hidden="true" />
                  {privacyNote}
                </p>
              )}
            </motion.div>
          ) : verdict?.tier === 'no' ? (
            <motion.div
              key="no"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease }}
            >
              {/* The kind dismissal — sells nothing, captures nothing. */}
              <div className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl p-6 lg:p-8 text-center">
                <h3 className="text-2xl font-black uppercase italic tracking-tighter text-foreground mb-3">
                  Not A Fit.
                </h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-5">
                  {verdict.reason}
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
                <p className="mt-5">{restartButton}</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="verdict"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease }}
            >
              <div className="flex items-center justify-between mb-3">
                {backButton}
                {restartButton}
              </div>
              <p className="mb-3 text-sm font-bold leading-snug">
                {verdict?.tier === 'strong' ? (
                  <>
                    <span className="text-primary font-black uppercase italic tracking-tighter">
                      Your business fits.
                    </span>{' '}
                    <span className="text-foreground">See what yours would look like.</span>
                  </>
                ) : (
                  <>
                    <span className="text-foreground font-black uppercase italic tracking-tighter">
                      Borderline.
                    </span>{' '}
                    <span className="text-muted-foreground font-medium">{verdict?.weakness}</span>
                  </>
                )}
              </p>
              <NativeLeadForm
                source={source}
                pageSlug={pageSlug}
                heading={heading}
                subheading={subheading}
                ctaLabel={ctaLabel ?? 'Show Me My First Build'}
                compact
                initialBand={answers.revenue}
                trailLines={verdict ? fitTrail(answers as FitAnswers, verdict) : undefined}
                {...(successNote !== undefined ? { successNote } : {})}
                {...(privacyNote !== undefined ? { privacyNote } : {})}
              />
              {bookingUrl && (
                <div className="mt-4">
                  <p className="mb-2.5 text-center text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                    Ready now? Skip the call-back.
                  </p>
                  <BookingCta
                    secondary
                    source={source}
                    label={bookingLabel}
                    bookingUrl={bookingUrl}
                    fallbackNote=""
                  />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  /* ─── PAGE: the tailor door first, the quiz one tap away ─── */
  if (entry.mode === 'tailor') {
    return (
      <AnimatePresence mode="wait">
        <TailorDoor
          source={`${source}_tailor`}
          pageSlug={pageSlug}
          onQuiz={(note) => setEntry({ mode: 'quiz', ...(note ? { note } : {}) })}
        />
      </AnimatePresence>
    );
  }

  return (
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
          {entry.note && (
            <p className="mb-4 font-mono text-[10px] font-black uppercase tracking-[0.18em] text-faint">{entry.note}</p>
          )}
          <div className="flex items-center justify-between mb-6 min-h-[28px]">
            {step > 0 ? (
              backButton
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

          {chips('lg')}
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
            {backButton}
            {restartButton}
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
                source={source}
                pageSlug={pageSlug}
                heading="See What Yours Would Look Like"
                subheading="Tell us how it runs today. We'll show you what we'd build if it were ours. Free, about thirty minutes, screen-shared."
                ctaLabel="Show Me My First Build"
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
                source={source}
                pageSlug={pageSlug}
                heading="See What Yours Would Look Like"
                subheading="Worth the call to find out. If it's not a fit, we tell you straight."
                ctaLabel="Show Me My First Build"
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
                No hard feelings. Most good businesses aren&apos;t ours to build.
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
  );
}
