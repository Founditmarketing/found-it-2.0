'use client';

import {
  useEffect,
  useId,
  useReducer,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { AlertTriangle, ArrowLeft, ArrowRight, BookOpen, Loader2, RotateCcw } from 'lucide-react';
import { captureUTMs, getStoredUTMs, trackFormStart, trackLead } from '@/lib/analytics';
import { TrackedPhoneLink } from '@/components/TrackedPhoneLink';
import { READ_MAP, type FitQuestion, type FitVerdict } from '@/lib/fit';
import { OS_PRICING } from '@/lib/site';
import {
  DAY_LABELS,
  JOBS,
  MAX_TEXT,
  MIN_TEXT,
  STORAGE_KEY,
  WINDOW_LABELS,
  buildTrail,
  hydrateFrom,
  initialState,
  isComplete,
  isQualified,
  isQuestionScreen,
  progressOf,
  questionFor,
  reduce,
  serialize,
  shownFirstBuild,
  thankYouHref,
  validateContact,
  verdictOf,
  wallOf,
  type Action,
  type Contact,
  type ContactErrors,
  type FlowState,
  type Job,
  type QuestionScreen,
  type TailorRead,
} from '@/lib/fit-flow';

/* ─── THE FIT FLOW (9/11/2026): one path on /fit ───
   Scalable's intake minus the payment: one question per screen, a visible
   progress line, a tap advances, the verdict lands before the contact ask,
   and the contact ask asks for very little. The engine (reducer, storage,
   trail) lives in src/lib/fit-flow.ts; the verdict rules stay in
   src/lib/fit.ts. Screen order: want → five fit questions → verdict →
   number → time → the full-page hop to /thank-you?from=fit.
   THE CRITIC'S FOLD-IN: screen 1 asks for the problem, not the software;
   the verdict names the smaller first decision in the Dare's words.
   LAWS: walls capture nothing; no clocks; no forbidden words; motion only
   for a true state change; reduced motion instant; the only spinner is the
   real /api/tailor wait. */

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const TAILOR_TIMEOUT_MS = 8000;

type Dispatch = (a: Action) => void;

/* ─── Shared type + control classes ─── */
const titleClass =
  'font-heading font-black uppercase italic tracking-tighter leading-[0.9] text-[28px] sm:text-[36px] text-foreground';
const subClass = 'mt-3 text-base text-muted-foreground font-medium leading-snug';
const labelClass = 'font-mono text-[13px] font-black uppercase tracking-[0.25em] text-faint';
const chipBase =
  'w-full min-h-[52px] rounded-xl border px-4 py-3 text-left text-base font-bold leading-snug';
const chipIdle = 'bg-card/20 border-border/25 text-foreground hover:border-primary/50';
const chipOn = 'bg-primary border-primary text-black';
const pillClass =
  'w-full min-h-[56px] rounded-full bg-primary text-black font-black uppercase italic tracking-tighter text-base hover:opacity-90 active:scale-[0.99] transition-[opacity,transform] shadow-[0_14px_44px_-10px_rgba(255,85,0,0.45)]';
const linkClass =
  'inline-flex items-center min-h-[44px] px-1 text-[13px] font-bold text-muted-foreground hover:text-primary transition-colors';

/* ═══════════════════════════════════════════════════════════════════
   The flow
   ═══════════════════════════════════════════════════════════════════ */

export function FitFlow() {
  const [state, dispatch] = useReducer(reduce, initialState);
  const [hydrated, setHydrated] = useState(false);
  /* Set on the 2xx: from then on the persist effect clears instead of
     writing, so SEND_OK (a state change) can never re-store a sent flow. */
  const doneRef = useRef(false);
  const [sent, setSent] = useState(false);
  const reduceMotion = useReducedMotion();
  const instant = !!reduceMotion;

  /* (1) Mount: UTMs, then storage. Read in an effect, never during render,
     so the server and the first client paint agree. */
  useEffect(() => {
    captureUTMs();
    let raw: string | null = null;
    try {
      raw = sessionStorage.getItem(STORAGE_KEY);
    } catch {
      /* storage blocked */
    }
    dispatch({ type: 'HYDRATE', stored: hydrateFrom(raw) });
    setHydrated(true);
  }, []);

  /* (2) Persist after hydration, on every state change. */
  useEffect(() => {
    if (!hydrated) return;
    try {
      if (doneRef.current) sessionStorage.removeItem(STORAGE_KEY);
      else sessionStorage.setItem(STORAGE_KEY, serialize(state));
    } catch {
      /* storage blocked */
    }
  }, [state, hydrated]);

  /* (3) iOS KEYBOARD LAW: body.fit-flow lets globals.css step the fixed
     header and the concierge launcher out while a field has focus. */
  useEffect(() => {
    document.body.classList.add('fit-flow');
    return () => document.body.classList.remove('fit-flow');
  }, []);

  /* (4) The tailor: fires once per pending text want, in the background.
     Cleanup aborts without dispatching FAILED (StrictMode double-invoke). */
  const textKey = state.want?.kind === 'text' ? state.want.text : '';
  const tailorStatus = state.tailor.status;
  useEffect(() => {
    if (tailorStatus !== 'pending' || !textKey) return;
    let cancelled = false;
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), TAILOR_TIMEOUT_MS);
    (async () => {
      try {
        const res = await fetch('/api/tailor', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ problem: textKey.trim() }),
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as Partial<TailorRead>;
        const fit = data.fit === 'likely' || data.fit === 'unknown' || data.fit === 'no' ? data.fit : null;
        const heard = typeof data.heard === 'string' ? data.heard.trim() : '';
        if (!fit || !heard) throw new Error('empty');
        if (cancelled) return;
        dispatch({
          type: 'TAILOR_DONE',
          read: {
            fit,
            heard,
            firstTarget: typeof data.firstTarget === 'string' ? data.firstTarget : '',
            reason: typeof data.reason === 'string' ? data.reason : '',
          },
        });
      } catch {
        if (cancelled) return;
        dispatch({ type: 'TAILOR_FAILED' });
      } finally {
        window.clearTimeout(timer);
      }
    })();
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [tailorStatus, textKey]);

  const restart = () => {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* storage blocked */
    }
    dispatch({ type: 'RESTART' });
  };

  /* THE LEAD: POST /api/lead exactly once, from 'Send It'. Only strong and
     borderline can reach the time screen; walls capture nothing. On 2xx:
     trackLead, storage cleared, 'Sent.' for ~400 ms, then the full-page hop
     to /thank-you?from=fit (the URL-rule Ads conversion; never router.push).
     On anything else: the honest error, every answer kept. */
  const send = async () => {
    if (state.screen !== 'time' || state.send.status === 'sending' || sent) return;
    const { want, answers, contact, time, tailor } = state;
    if (!want || !isComplete(answers)) return;
    dispatch({ type: 'SEND' });
    const message = buildTrail({ want, tailor, answers, time, utms: getStoredUTMs() }).join(' · ');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'fit_check',
          name: contact.name.trim(),
          phone: contact.phone.trim(),
          email: contact.email.trim(),
          businessName: contact.business.trim(),
          message,
          hp: contact.hp,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      trackLead('fit_check', { qualified: isQualified(answers) });
      doneRef.current = true;
      try {
        sessionStorage.removeItem(STORAGE_KEY);
      } catch {
        /* storage blocked */
      }
      dispatch({ type: 'SEND_OK' });
      setSent(true);
      window.setTimeout(() => {
        window.location.href = thankYouHref(time);
      }, 400);
    } catch {
      dispatch({ type: 'SEND_ERR' });
    }
  };

  const { screen, dir } = state;
  const progress = progressOf(screen);
  const slide = instant ? 0 : 1;

  return (
    <div className="relative rounded-2xl border border-border/20 bg-card/15 p-5 sm:p-8 overflow-hidden">
      {/* The progress line: 2px orange along the top edge, width n/8. */}
      <div
        className="absolute left-0 top-0 h-[2px] bg-primary"
        style={{
          width: `${(progress.step / progress.total) * 100}%`,
          transition: instant ? 'none' : `width 0.3s cubic-bezier(${ease.join(',')})`,
        }}
        aria-hidden="true"
      />

      {/* The header row: Back (or 'Tap one.') and the count. */}
      <div className="flex items-center justify-between min-h-[44px] mb-3" aria-live="polite">
        {screen === 'want' ? (
          <span className="text-[13px] font-medium text-muted-foreground">Tap one.</span>
        ) : (
          <button
            type="button"
            onClick={() => dispatch({ type: 'BACK' })}
            className="inline-flex items-center gap-1.5 min-h-[44px] min-w-[44px] -ml-1 pr-2 text-[13px] font-bold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back
          </button>
        )}
        <span className="text-[13px] font-mono font-bold text-faint tracking-widest tabular-nums">
          {progress.label}
        </span>
      </div>

      <AnimatePresence mode="wait" custom={dir} initial={false}>
        <motion.div
          key={screen}
          custom={dir}
          variants={{
            enter: (d: number) => ({ opacity: 0, x: 14 * d * slide }),
            center: { opacity: 1, x: 0 },
            exit: (d: number) => ({ opacity: 0, x: -10 * d * slide }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: instant ? 0 : 0.28, ease }}
        >
          {screen === 'want' && <WantScreen state={state} dispatch={dispatch} />}
          {isQuestionScreen(screen) && (
            <QuestionScreen
              screen={screen}
              question={questionFor(screen)}
              value={state.answers[screen]}
              dispatch={dispatch}
            />
          )}
          {screen === 'verdict' && (
            <VerdictScreen state={state} dispatch={dispatch} restart={restart} instant={instant} />
          )}
          {screen === 'number' && <NumberScreen state={state} dispatch={dispatch} instant={instant} />}
          {screen === 'time' && <TimeScreen state={state} dispatch={dispatch} send={send} sent={sent} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   Screen 1: the job (want)
   ═══════════════════════════════════════════════════════════════════ */

function WantScreen({ state, dispatch }: { state: FlowState; dispatch: Dispatch }) {
  const storedText = state.want?.kind === 'text' ? state.want.text : '';
  const [text, setText] = useState(storedText);
  const [short, setShort] = useState(false);
  useEffect(() => setText(storedText), [storedText]);

  const ready = text.trim().length >= MIN_TEXT;
  const handIt = () => {
    if (!ready) {
      setShort(true);
      return;
    }
    dispatch({ type: 'SAY_WANT', from: 'want', text });
  };
  const pick = (job: Job) => dispatch({ type: 'PICK_WANT', from: 'want', job });
  const pickedId = state.want?.kind === 'chip' ? state.want.id : null;

  return (
    <div>
      <h1 className={titleClass}>Show us the job you&apos;re tired of doing.</h1>
      <p className={subClass}>Where does work get stuck? The worst one first.</p>

      <div className="mt-5 grid grid-cols-1 gap-2.5" role="group" aria-label="The job">
        {JOBS.map((job) => {
          const on = pickedId === job.id;
          return (
            <button
              key={job.id}
              type="button"
              onClick={() => pick(job)}
              className={`${chipBase} ${on ? chipOn : chipIdle}`}
            >
              <span className="block">{job.title}</span>
              <span
                className={`hidden md:block mt-1 font-mono text-[13px] font-black uppercase tracking-[0.12em] ${
                  on ? 'text-black/70' : 'text-faint'
                }`}
              >
                {job.sub}
              </span>
            </button>
          );
        })}
      </div>

      <label htmlFor="fit-want-line" className={`${labelClass} block mt-6 mb-2.5`}>
        Something else
      </label>
      <div className="relative">
        <input
          id="fit-want-line"
          type="text"
          value={text}
          maxLength={MAX_TEXT}
          enterKeyHint="go"
          autoComplete="off"
          autoCapitalize="sentences"
          placeholder="Say it your way."
          onChange={(e) => {
            setText(e.target.value);
            if (short && e.target.value.trim().length >= MIN_TEXT) setShort(false);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handIt();
            }
          }}
          className="w-full min-h-[52px] rounded-full bg-background/60 border border-border/30 pl-5 pr-16 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60"
        />
        <button
          type="button"
          onClick={handIt}
          disabled={!ready}
          aria-label="Hand it over"
          className="absolute right-1 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-primary text-black inline-flex items-center justify-center hover:opacity-90 active:scale-[0.97] transition-[opacity,transform] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
      {short && !ready && (
        <p className="mt-2 text-[13px] font-bold text-muted-foreground">A few more words.</p>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   Screens 2 to 6: the five fit questions (FIT_QUESTIONS, verbatim)
   ═══════════════════════════════════════════════════════════════════ */

function QuestionScreen({
  screen,
  question,
  value,
  dispatch,
}: {
  screen: QuestionScreen;
  question: FitQuestion;
  value: string | undefined;
  dispatch: Dispatch;
}) {
  return (
    <div>
      <h2 className={titleClass}>{question.prompt}</h2>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5" role="group" aria-label={question.prompt}>
        {question.options.map((o) => {
          const on = value === o.value;
          return (
            <button
              key={o.value}
              type="button"
              onClick={() => dispatch({ type: 'ANSWER', from: screen, id: question.id, value: o.value })}
              aria-pressed={on}
              className={`${chipBase} ${on ? chipOn : chipIdle}`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   Screen 7: the verdict (strong / borderline / the two walls)
   ═══════════════════════════════════════════════════════════════════ */

function VerdictScreen({
  state,
  dispatch,
  restart,
  instant,
}: {
  state: FlowState;
  dispatch: Dispatch;
  restart: () => void;
  instant: boolean;
}) {
  const verdict = verdictOf(state);
  if (!verdict) return null; // unreachable: the reducer never lands here early
  const wall = wallOf(state);

  if (wall === 'quiz') return <QuizWall verdict={verdict} restart={restart} instant={instant} />;
  if (wall === 'tailor' && state.tailor.status === 'done') {
    return (
      <TailorWall
        read={state.tailor.read}
        restart={restart}
        instant={instant}
        onPickInstead={() => dispatch({ type: 'CLEAR_TEXT', from: 'verdict' })}
      />
    );
  }

  const first = shownFirstBuild(state);
  const pending = state.want?.kind === 'text' && state.tailor.status === 'pending';
  const strong = verdict.tier === 'strong';

  return (
    <div>
      <Headline instant={instant} tone={strong ? 'orange' : 'white'} k={verdict.tier}>
        {strong ? (
          'Strong fit.'
        ) : (
          <>
            Border<span className="text-primary">line.</span>
          </>
        )}
      </Headline>

      {strong ? (
        <p className="mt-4 text-base font-bold text-foreground">You look like exactly who we build for.</p>
      ) : (
        <div className="mt-4 space-y-2">
          <p className="text-base font-medium text-muted-foreground leading-snug">{verdict.weakness}</p>
          <p className="text-base font-bold text-foreground leading-snug">
            One answer outside the lane. The other four are in it.
          </p>
          <p className="text-base font-medium text-muted-foreground leading-snug">
            Worth the call to find out. If it&apos;s not a fit, we tell you straight.
          </p>
        </div>
      )}

      {/* The first build */}
      <p className={`${labelClass} mt-6 mb-1.5`}>{pending ? 'Reading what you wrote' : 'The first build'}</p>
      {pending ? (
        <p className="min-h-[24px] flex items-center text-muted-foreground" aria-live="polite">
          <Loader2 className="w-5 h-5 animate-spin" aria-label="Reading what you wrote" />
        </p>
      ) : (
        <motion.p
          key={first ?? 'named-on-call'}
          initial={{ opacity: 0, y: instant ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: instant ? 0 : 0.32, delay: instant ? 0 : 0.06, ease }}
          className="text-base font-bold text-foreground leading-snug"
        >
          {first ?? 'Named on the call, from what you wrote.'}
        </motion.p>
      )}

      {/* The smaller first decision, in the Dare's words. */}
      <p className={`${labelClass} mt-6 mb-2`}>If we take it on</p>
      <div className="space-y-2.5 text-base font-medium text-foreground leading-snug">
        <p>
          We build a working demonstration wrapped around your actual workflow. It lands in your hands
          before you pay a dollar.
        </p>
        <p>You click the buttons. You try to break it. Nothing in your operation changes at that stage.</p>
        <p>
          {OS_PRICING.monthly} {OS_PRICING.monthlyLabel}, setup included, month to month. It starts only
          if it holds and you want it running your business. You own the code and the data.
        </p>
      </div>

      <button type="button" onClick={() => dispatch({ type: 'GO_NUMBER', from: 'verdict' })} className={`${pillClass} mt-7`}>
        Leave the number
      </button>
      <p className="mt-3 text-center text-[13px] font-medium text-muted-foreground">
        First name and a mobile. That&apos;s it.
      </p>
    </div>
  );
}

/** The verdict headline: 44px phone / 60px desktop, lands y 10 to 0. */
function Headline({
  children,
  tone,
  k,
  instant,
}: {
  children: ReactNode;
  tone: 'orange' | 'white';
  k: string;
  instant: boolean;
}) {
  return (
    <motion.h2
      key={k}
      initial={{ opacity: 0, y: instant ? 0 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: instant ? 0 : 0.32, delay: instant ? 0 : 0.06, ease }}
      className={`font-heading font-black uppercase italic tracking-tighter leading-[0.9] text-[44px] sm:text-[60px] ${
        tone === 'orange' ? 'text-primary' : 'text-foreground'
      }`}
    >
      {children}
    </motion.h2>
  );
}

/** The kind dismissal, shared by both walls. Sells nothing, captures nothing. */
function WallBody({
  line,
  pointer,
  restart,
  children,
}: {
  line: string;
  pointer: { label: string; href: string };
  restart: () => void;
  children?: ReactNode;
}) {
  return (
    <>
      <p className="mt-4 text-base font-medium text-muted-foreground leading-snug">{line}</p>
      <p className="mt-3 text-base font-bold text-foreground leading-snug">
        No hard feelings. Most good businesses aren&apos;t ours to build.
      </p>
      <Link
        href={pointer.href}
        className="mt-6 flex items-center gap-3 min-h-[52px] rounded-xl border border-border/25 bg-card/20 px-4 text-base font-bold text-primary hover:border-primary/50 transition-colors"
      >
        <BookOpen className="w-5 h-5 shrink-0" aria-hidden="true" />
        <span className="flex-1 leading-snug">{pointer.label}</span>
        <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
      </Link>
      <div className="mt-4 flex flex-wrap items-center gap-x-5">
        <Link href="/who-we-build-for" className={linkClass}>
          Who we do build for <ArrowRight className="ml-1 w-3.5 h-3.5" aria-hidden="true" />
        </Link>
        <button type="button" onClick={restart} className={linkClass}>
          <RotateCcw className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" /> Start over
        </button>
      </div>
      {children}
    </>
  );
}

function QuizWall({ verdict, restart, instant }: { verdict: FitVerdict; restart: () => void; instant: boolean }) {
  return (
    <div>
      <Headline instant={instant} tone="white" k="quiz-wall">
        Not a fit.
      </Headline>
      <WallBody line={verdict.reason ?? ''} pointer={verdict.pointer ?? READ_MAP} restart={restart} />
    </div>
  );
}

function TailorWall({
  read,
  restart,
  instant,
  onPickInstead,
}: {
  read: TailorRead;
  restart: () => void;
  instant: boolean;
  onPickInstead: () => void;
}) {
  return (
    <div>
      <Headline instant={instant} tone="white" k="tailor-wall">
        Not our lane.
      </Headline>
      <WallBody line={read.reason.trim() || 'That one is outside our lane.'} pointer={READ_MAP} restart={restart}>
        <p className="mt-2">
          <button type="button" onClick={onPickInstead} className={linkClass}>
            Think we misread it? Pick from the list instead
          </button>
        </p>
      </WallBody>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   Screens 8 and 9: the ask (number) and the landing (best time + send)
   ═══════════════════════════════════════════════════════════════════ */

const fieldLabelClass = `${labelClass} block mb-2`;
const inputClass =
  'w-full min-h-[52px] rounded-xl bg-card/20 border border-border/25 px-4 text-base text-foreground font-medium placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30';

/** A field error: 13px, destructive token, opacity 0 to 1 in 0.18 s. */
function FieldError({ id, text, instant }: { id: string; text?: string; instant: boolean }) {
  if (!text) return null;
  return (
    <motion.p
      id={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: instant ? 0 : 0.18 }}
      className="mt-1.5 text-[13px] font-bold text-destructive"
    >
      {text}
    </motion.p>
  );
}

/* ── NumberScreen (builder 2) ──
   A real <form noValidate>: first name, mobile, business (optional), and an
   email behind one quiet link. Nothing posts here; 'Next' validates and
   moves to the time screen. trackFormStart fires once on the first focus
   of any field (the NativeLeadForm pattern). The 'Next' pill sits in the
   card under the fields, never fixed, so the iOS tel keypad (no Return
   key) always has a visible submit. */
function NumberScreen({
  state,
  dispatch,
  instant,
}: {
  state: FlowState;
  dispatch: Dispatch;
  instant: boolean;
}) {
  const uid = useId();
  const mobileRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<ContactErrors>({});
  const { contact } = state;

  const set = (key: keyof Contact) => (e: ChangeEvent<HTMLInputElement>) => {
    const patch = { [key]: e.target.value } as Partial<Contact>;
    dispatch({ type: 'SET_CONTACT', patch });
    // Nothing is judged before 'Next'; after it, an error clears the moment
    // the field passes.
    if ((key === 'name' || key === 'phone' || key === 'email') && errors[key]) {
      const next = validateContact({ ...contact, ...patch }).errors;
      if (!next[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const next = (e?: FormEvent) => {
    e?.preventDefault();
    const v = validateContact(contact);
    setErrors(v.errors);
    if (v.ok) dispatch({ type: 'NEXT_TIME', from: 'number' });
  };

  const describedBy = (k: keyof ContactErrors) => (errors[k] ? `${uid}-${k}-err` : undefined);

  return (
    <div>
      <h2 className={titleClass}>Leave a number.</h2>
      <p className={subClass}>Trevor calls, you show him the job.</p>

      <form
        noValidate
        onSubmit={next}
        onFocusCapture={() => {
          if (!state.started) {
            dispatch({ type: 'STARTED' });
            trackFormStart('fit_check');
          }
        }}
        className="relative mt-5"
      >
        <div>
          <label htmlFor={`${uid}-name`} className={fieldLabelClass}>
            First name
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            autoComplete="given-name"
            autoCapitalize="words"
            enterKeyHint="next"
            maxLength={200}
            value={contact.name}
            onChange={set('name')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                mobileRef.current?.focus();
              }
            }}
            aria-invalid={!!errors.name}
            aria-describedby={describedBy('name')}
            className={inputClass}
          />
          <FieldError id={`${uid}-name-err`} text={errors.name} instant={instant} />
        </div>

        <div className="mt-4">
          <label htmlFor={`${uid}-phone`} className={fieldLabelClass}>
            Mobile
          </label>
          <input
            ref={mobileRef}
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            enterKeyHint="send"
            maxLength={40}
            value={contact.phone}
            onChange={set('phone')}
            placeholder="(318) 555-0123"
            aria-invalid={!!errors.phone}
            aria-describedby={describedBy('phone')}
            className={inputClass}
          />
          <FieldError id={`${uid}-phone-err`} text={errors.phone} instant={instant} />
        </div>

        <div className="mt-4">
          <label htmlFor={`${uid}-business`} className={fieldLabelClass}>
            Business (optional)
          </label>
          <input
            id={`${uid}-business`}
            name="businessName"
            type="text"
            autoComplete="organization"
            enterKeyHint="send"
            maxLength={200}
            value={contact.business}
            onChange={set('business')}
            className={inputClass}
          />
        </div>

        {contact.emailOpen ? (
          <div className="mt-4">
            <label htmlFor={`${uid}-email`} className={fieldLabelClass}>
              Email (optional)
            </label>
            <input
              id={`${uid}-email`}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              enterKeyHint="send"
              maxLength={254}
              value={contact.email}
              onChange={set('email')}
              placeholder="you@yourbusiness.com"
              aria-invalid={!!errors.email}
              aria-describedby={describedBy('email')}
              className={inputClass}
            />
            <FieldError id={`${uid}-email-err`} text={errors.email} instant={instant} />
          </div>
        ) : (
          <p className="mt-2">
            <button
              type="button"
              onClick={() => dispatch({ type: 'SET_CONTACT', patch: { emailOpen: true } })}
              className={linkClass}
            >
              Add an email
            </button>
          </p>
        )}

        {/* Honeypot — humans never see this; bots fill it and get silently dropped.
            Deliberately meaningless name: a field named "company" gets filled by
            Chrome's address autofill (which ignores autocomplete="off"), turning
            real submissions into silently-dropped ones. */}
        <div
          className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden"
          aria-hidden="true"
        >
          <label htmlFor={`${uid}-fim-extra`}>Leave this field empty</label>
          <input
            id={`${uid}-fim-extra`}
            name="fim_extra_field"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={contact.hp}
            onChange={set('hp')}
          />
        </div>

        <button type="submit" className={`${pillClass} mt-7`}>
          Next
        </button>
        <p className="mt-3 text-center text-[13px] font-medium text-muted-foreground">One tap after this.</p>
      </form>
    </div>
  );
}

/* ── TimeScreen (builder 2) ──
   The visitor's own pick: a day row and a time-of-day row, toggles, neither
   required, no auto-advance. 'Send It' is the one POST /api/lead (the send
   handler lives in FitFlow, which owns storage). Any failure keeps every
   answer and shows the honest error with the phone link. */
const DAYS = ['today', 'tomorrow', 'week'] as const;
const WINDOWS = ['morning', 'midday', 'afternoon', 'evening'] as const;
const timeChipBase = 'min-h-[52px] rounded-xl border px-1 text-base font-bold leading-snug text-center';

function TimeScreen({
  state,
  dispatch,
  send,
  sent,
}: {
  state: FlowState;
  dispatch: Dispatch;
  send: () => void;
  sent: boolean;
}) {
  const sending = state.send.status === 'sending';
  const busy = sending || sent;

  return (
    <div>
      <h2 className={titleClass}>When&apos;s good to talk?</h2>
      <p className={subClass}>Your pick. Leave it blank and any time works.</p>

      <p className={`${labelClass} mt-5 mb-2`}>Day</p>
      <div className="grid grid-cols-3 gap-2.5" role="group" aria-label="Day">
        {DAYS.map((d) => {
          const on = state.time.day === d;
          return (
            <button
              key={d}
              type="button"
              aria-pressed={on}
              onClick={() => dispatch({ type: 'SET_TIME', day: d })}
              className={`${timeChipBase} ${on ? chipOn : chipIdle}`}
            >
              {DAY_LABELS[d]}
            </button>
          );
        })}
      </div>

      <p className={`${labelClass} mt-5 mb-2`}>Time of day</p>
      <div className="grid grid-cols-2 gap-2.5" role="group" aria-label="Time of day">
        {WINDOWS.map((w) => {
          const on = state.time.window === w;
          return (
            <button
              key={w}
              type="button"
              aria-pressed={on}
              onClick={() => dispatch({ type: 'SET_TIME', window: w })}
              className={`${timeChipBase} ${on ? chipOn : chipIdle}`}
            >
              {WINDOW_LABELS[w]}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={send}
        disabled={busy}
        aria-busy={sending}
        className={`${pillClass} mt-7 disabled:opacity-60 disabled:cursor-not-allowed`}
      >
        {sent ? 'Sent.' : sending ? 'Sending.' : 'Send It'}
      </button>

      {state.send.status === 'error' && (
        <div
          role="alert"
          className="mt-4 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3"
        >
          <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-1" aria-hidden="true" />
          <p className="text-base text-foreground font-medium leading-snug">
            That didn&apos;t send. Your answers are still here. Try again, or call Trevor:{' '}
            <TrackedPhoneLink className="inline-flex items-center min-h-[44px] whitespace-nowrap" />
          </p>
        </div>
      )}
    </div>
  );
}
