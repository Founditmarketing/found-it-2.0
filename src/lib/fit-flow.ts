/* ─── THE FIT FLOW: one path on /fit (9/11/2026) ───
   The engine under src/components/fit/FitFlow.tsx. Pure and total: one
   reducer, one storage shape, one trail builder, one contact validator.
   No React, no analytics, no '@/…' imports, so it compiles standalone the
   way scripts/test-fit-verdict.mjs compiles fit.ts (tested by
   scripts/test-fit-flow.mjs).
   LAWS: the verdict rules live in ./fit and are never forked here; walls
   capture nothing (a wall can never reach the number screen); every
   advancing action carries `from` and is dropped when it names a screen
   that is no longer current (the stale-tap guard); Back never clears an
   answer. */

import {
  FIT_QUESTIONS,
  fitVerdict,
  fitTrail,
  type FitAnswers,
  type FitVerdict,
} from './fit';
import { REVENUE_BANDS } from './site';

/* ─── Screens ─── */

export type Screen =
  | 'want'
  | 'vertical'
  | 'revenue'
  | 'runsOn'
  | 'who'
  | 'books'
  | 'verdict'
  | 'number'
  | 'time';

export const SCREENS: Screen[] = [
  'want',
  'vertical',
  'revenue',
  'runsOn',
  'who',
  'books',
  'verdict',
  'number',
  'time',
];

/** The five question screens, 1:1 with FIT_QUESTIONS[0..4] (same ids). */
export const QUESTION_SCREENS = ['vertical', 'revenue', 'runsOn', 'who', 'books'] as const;
export type QuestionScreen = (typeof QUESTION_SCREENS)[number];

export function isQuestionScreen(s: Screen): s is QuestionScreen {
  return (QUESTION_SCREENS as readonly string[]).includes(s);
}

/** The question a question screen asks (FIT_QUESTIONS, verbatim). */
export function questionFor(screen: QuestionScreen) {
  const q = FIT_QUESTIONS.find((x) => x.id === screen);
  if (!q) throw new Error(`no fit question for screen ${screen}`);
  return q;
}

export const TOTAL_STEPS = 8 as const;

/** The progress label and bar step for a screen. The verdict card (and any
 *  wall) holds the bar at 6/8 and takes the count slot with the word. */
export function progressOf(screen: Screen): { label: string; step: number; total: 8 } {
  const step: Record<Screen, number> = {
    want: 1,
    vertical: 2,
    revenue: 3,
    runsOn: 4,
    who: 5,
    books: 6,
    verdict: 6,
    number: 7,
    time: 8,
  };
  const label = screen === 'verdict' ? 'Verdict' : `${step[screen]} of ${TOTAL_STEPS}`;
  return { label, step: step[screen], total: TOTAL_STEPS };
}

/* ─── Screen 1: the jobs (the critic's fold-in: the problem, not the software) ─── */

export type JobId = 'phone' | 'orders' | 'money' | 'shop' | 'books';

export interface Job {
  id: JobId;
  /** The chip. */
  title: string;
  /** Desktop-only sub line under the title (13px mono). */
  sub: string;
  /** The fixed first-build line this job commissions. */
  first: string;
}

export const JOBS: Job[] = [
  {
    id: 'phone',
    title: 'The phone nobody answers after hours',
    sub: 'Booked, filed, and waiting with your coffee.',
    first: 'The phone after hours. Answered, booked, and filed before anyone calls back.',
  },
  {
    id: 'orders',
    title: 'The order typed twice',
    sub: 'Texts, emails, chicken scratch, captured.',
    first: 'Order intake. Every line lands, the unreadable ones held in red.',
  },
  {
    id: 'money',
    title: 'The money nobody chased',
    sub: 'Polite reminders that never sleep.',
    first: 'Receivables. Reminded, collected, and quiet the second the money lands.',
  },
  {
    id: 'shop',
    title: 'The whole shop scattered across systems',
    sub: 'Register to website, one brain. Yours.',
    first: 'One system. Register, jobs, customers, books, built around how you run.',
  },
  {
    id: 'books',
    title: 'Books nobody trusts',
    sub: 'Tied to the bank, checked nightly.',
    first: 'A ledger that ties to the bank and refuses to pretend.',
  },
];

/** The free-text gate: 8 trimmed characters, matching /api/tailor's min. */
export const MIN_TEXT = 8;
export const MAX_TEXT = 600;

/* ─── Screen 9: the visitor's own pick ─── */

export type Day = '' | 'today' | 'tomorrow' | 'week';
export type Window = '' | 'morning' | 'midday' | 'afternoon' | 'evening';

export const DAY_LABELS: Record<Exclude<Day, ''>, string> = {
  today: 'Today',
  tomorrow: 'Tomorrow',
  week: 'This week',
};
export const WINDOW_LABELS: Record<Exclude<Window, ''>, string> = {
  morning: 'Morning',
  midday: 'Midday',
  afternoon: 'Afternoon',
  evening: 'Evening',
};

/* ─── State ─── */

export type Want =
  | { kind: 'chip'; id: JobId; title: string; first: string }
  | { kind: 'text'; text: string };

export interface TailorRead {
  fit: 'likely' | 'unknown' | 'no';
  heard: string;
  firstTarget: string;
  reason: string;
}

export type TailorState =
  | { status: 'idle' }
  | { status: 'pending' }
  | { status: 'done'; read: TailorRead }
  | { status: 'failed' };

export interface Contact {
  name: string;
  phone: string;
  business: string;
  email: string;
  emailOpen: boolean;
  /** The honeypot. Never stored. */
  hp: string;
}

export interface TimePick {
  day: Day;
  window: Window;
}

export type SendStatus = 'idle' | 'sending' | 'error';

export interface FlowState {
  screen: Screen;
  dir: 1 | -1;
  want: Want | null;
  tailor: TailorState;
  answers: Partial<FitAnswers>;
  contact: Contact;
  time: TimePick;
  send: { status: SendStatus };
  /** trackFormStart fired (first focus on the number screen). */
  started: boolean;
}

export const initialState: FlowState = {
  screen: 'want',
  dir: 1,
  want: null,
  tailor: { status: 'idle' },
  answers: {},
  contact: { name: '', phone: '', business: '', email: '', emailOpen: false, hp: '' },
  time: { day: '', window: '' },
  send: { status: 'idle' },
  started: false,
};

/* ─── Actions ─── */

export type Action =
  | { type: 'PICK_WANT'; from: Screen; job: Job }
  | { type: 'SAY_WANT'; from: Screen; text: string }
  | { type: 'TAILOR_DONE'; read: TailorRead }
  | { type: 'TAILOR_FAILED' }
  | { type: 'ANSWER'; from: Screen; id: keyof FitAnswers; value: string }
  | { type: 'BACK' }
  | { type: 'GO_NUMBER'; from: Screen }
  | { type: 'SET_CONTACT'; patch: Partial<Contact> }
  | { type: 'STARTED' }
  | { type: 'NEXT_TIME'; from: Screen }
  | { type: 'SET_TIME'; day?: Exclude<Day, ''>; window?: Exclude<Window, ''> }
  | { type: 'SEND' }
  | { type: 'SEND_OK' }
  | { type: 'SEND_ERR' }
  | { type: 'RESTART' }
  | { type: 'CLEAR_TEXT'; from: Screen }
  | { type: 'HYDRATE'; stored: FlowState };

/* ─── Derived (pure, computed in render, never stored) ─── */

export function isComplete(a: Partial<FitAnswers>): a is FitAnswers {
  return QUESTION_SCREENS.every((id) => typeof a[id] === 'string' && a[id] !== '');
}

export function verdictOf(state: Pick<FlowState, 'answers'>): FitVerdict | null {
  return isComplete(state.answers) ? fitVerdict(state.answers) : null;
}

/** Which wall stands on the verdict screen. The quiz wall wins when both say no. */
export function wallOf(state: Pick<FlowState, 'answers' | 'tailor'>): 'quiz' | 'tailor' | null {
  const v = verdictOf(state);
  if (v?.tier === 'no') return 'quiz';
  if (state.tailor.status === 'done' && state.tailor.read.fit === 'no') return 'tailor';
  return null;
}

/** The first-build line the verdict card shows, or null (pending, failed, or
 *  a done read with nothing to name). The card prints the fallback line for
 *  null; the trail omits 'First build:' for null. */
export function shownFirstBuild(state: Pick<FlowState, 'want' | 'tailor'>): string | null {
  const w = state.want;
  if (!w) return null;
  if (w.kind === 'chip') return w.first;
  if (state.tailor.status === 'done' && state.tailor.read.firstTarget.trim()) {
    return state.tailor.read.firstTarget.trim();
  }
  return null;
}

/* ─── Reducer ─── */

function nextScreen(s: Screen): Screen {
  const i = SCREENS.indexOf(s);
  return SCREENS[Math.min(i + 1, SCREENS.length - 1)];
}
function prevScreen(s: Screen): Screen {
  const i = SCREENS.indexOf(s);
  return SCREENS[Math.max(i - 1, 0)];
}

export function reduce(state: FlowState, action: Action): FlowState {
  switch (action.type) {
    case 'PICK_WANT': {
      if (action.from !== state.screen || state.screen !== 'want') return state;
      const j = action.job;
      return {
        ...state,
        want: { kind: 'chip', id: j.id, title: j.title, first: j.first },
        tailor: { status: 'idle' },
        screen: 'vertical',
        dir: 1,
      };
    }
    case 'SAY_WANT': {
      if (action.from !== state.screen || state.screen !== 'want') return state;
      const text = action.text.trim().slice(0, MAX_TEXT);
      if (text.length < MIN_TEXT) return state;
      return {
        ...state,
        want: { kind: 'text', text },
        tailor: { status: 'pending' },
        screen: 'vertical',
        dir: 1,
      };
    }
    case 'TAILOR_DONE': {
      if (state.tailor.status !== 'pending' || state.want?.kind !== 'text') return state;
      const next: FlowState = { ...state, tailor: { status: 'done', read: action.read } };
      // Walls capture nothing: a late 'no' pulls the visitor back to the verdict.
      if (action.read.fit === 'no' && (state.screen === 'number' || state.screen === 'time')) {
        return { ...next, screen: 'verdict', dir: -1, send: { status: 'idle' } };
      }
      return next;
    }
    case 'TAILOR_FAILED': {
      if (state.tailor.status !== 'pending' || state.want?.kind !== 'text') return state;
      return { ...state, tailor: { status: 'failed' } };
    }
    case 'ANSWER': {
      if (action.from !== state.screen) return state;
      if (!isQuestionScreen(state.screen) || action.id !== state.screen) return state;
      const q = questionFor(state.screen);
      if (!q.options.some((o) => o.value === action.value)) return state;
      return {
        ...state,
        answers: { ...state.answers, [action.id]: action.value },
        screen: nextScreen(state.screen),
        dir: 1,
      };
    }
    case 'BACK': {
      if (state.screen === 'want') return state;
      return { ...state, screen: prevScreen(state.screen), dir: -1 };
    }
    case 'GO_NUMBER': {
      if (action.from !== state.screen || state.screen !== 'verdict') return state;
      if (!verdictOf(state) || wallOf(state) !== null) return state;
      return { ...state, screen: 'number', dir: 1 };
    }
    case 'SET_CONTACT':
      return { ...state, contact: { ...state.contact, ...action.patch } };
    case 'STARTED':
      return state.started ? state : { ...state, started: true };
    case 'NEXT_TIME': {
      if (action.from !== state.screen || state.screen !== 'number') return state;
      if (!validateContact(state.contact).ok) return state;
      return { ...state, screen: 'time', dir: 1 };
    }
    case 'SET_TIME': {
      const time = { ...state.time };
      if (action.day !== undefined) time.day = state.time.day === action.day ? '' : action.day;
      if (action.window !== undefined) {
        time.window = state.time.window === action.window ? '' : action.window;
      }
      return { ...state, time };
    }
    case 'SEND': {
      if (state.screen !== 'time' || state.send.status === 'sending') return state;
      return { ...state, send: { status: 'sending' } };
    }
    case 'SEND_OK':
      return { ...state, send: { status: 'idle' } };
    case 'SEND_ERR':
      return { ...state, send: { status: 'error' } };
    case 'RESTART':
      return initialState;
    case 'CLEAR_TEXT': {
      if (action.from !== state.screen || state.screen !== 'verdict') return state;
      return { ...state, want: null, tailor: { status: 'idle' }, screen: 'want', dir: -1 };
    }
    case 'HYDRATE':
      return action.stored;
    default:
      return state;
  }
}

/* ─── sessionStorage ─── */

export const STORAGE_KEY = 'fit.flow.v1';

export interface Stored {
  v: 1;
  screen: Screen;
  want: Want | null;
  answers: Partial<FitAnswers>;
  contact: Omit<Contact, 'hp'>;
  time: TimePick;
  tailorRead?: TailorRead;
}

export function serialize(state: FlowState): string {
  const { hp: _hp, ...contact } = state.contact;
  void _hp;
  const stored: Stored = {
    v: 1,
    screen: state.screen,
    want: state.want,
    answers: state.answers,
    contact,
    time: state.time,
    ...(state.tailor.status === 'done' ? { tailorRead: state.tailor.read } : {}),
  };
  return JSON.stringify(stored);
}

const str = (x: unknown, max: number): string => (typeof x === 'string' ? x.slice(0, max) : '');
const isRecord = (x: unknown): x is Record<string, unknown> => !!x && typeof x === 'object';

function readWant(x: unknown): Want | null {
  if (!isRecord(x)) return null;
  if (x.kind === 'chip') {
    const job = JOBS.find((j) => j.id === x.id);
    return job ? { kind: 'chip', id: job.id, title: job.title, first: job.first } : null;
  }
  if (x.kind === 'text') {
    const text = str(x.text, MAX_TEXT).trim();
    return text.length >= MIN_TEXT ? { kind: 'text', text } : null;
  }
  return null;
}

function readAnswers(x: unknown): Partial<FitAnswers> {
  const out: Partial<FitAnswers> = {};
  if (!isRecord(x)) return out;
  for (const id of QUESTION_SCREENS) {
    const v = x[id];
    if (typeof v === 'string' && questionFor(id).options.some((o) => o.value === v)) {
      (out as Record<string, string>)[id] = v;
    }
  }
  return out;
}

function readTailor(x: unknown): TailorRead | null {
  if (!isRecord(x)) return null;
  if (x.fit !== 'likely' && x.fit !== 'unknown' && x.fit !== 'no') return null;
  const heard = str(x.heard, 200);
  if (!heard) return null;
  return { fit: x.fit, heard, firstTarget: str(x.firstTarget, 200), reason: str(x.reason, 240) };
}

/**
 * Rebuild state from storage. Bad JSON, a wrong version, or an unknown screen
 * resets to fresh. A screen whose prerequisites are missing falls back to the
 * first screen whose prerequisites hold: 'want' without a want, the first
 * unanswered question, or 'verdict' when the number/time screen is stored
 * behind a wall. Contact and time are restored regardless.
 */
export function hydrateFrom(raw: string | null): FlowState {
  if (!raw) return initialState;
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return initialState;
  }
  if (!isRecord(parsed) || parsed.v !== 1) return initialState;
  if (typeof parsed.screen !== 'string' || !SCREENS.includes(parsed.screen as Screen)) {
    return initialState;
  }

  const want = readWant(parsed.want);
  const answers = readAnswers(parsed.answers);
  const read = want?.kind === 'text' ? readTailor(parsed.tailorRead) : null;
  const tailor: TailorState = read
    ? { status: 'done', read }
    : want?.kind === 'text'
      ? { status: 'pending' }
      : { status: 'idle' };

  const c = isRecord(parsed.contact) ? parsed.contact : {};
  const contact: Contact = {
    name: str(c.name, 200),
    phone: str(c.phone, 40),
    business: str(c.business, 200),
    email: str(c.email, 254),
    emailOpen: c.emailOpen === true,
    hp: '',
  };
  const t = isRecord(parsed.time) ? parsed.time : {};
  const time: TimePick = {
    day: typeof t.day === 'string' && t.day in DAY_LABELS ? (t.day as Day) : '',
    window: typeof t.window === 'string' && t.window in WINDOW_LABELS ? (t.window as Window) : '',
  };

  // Prerequisites, walked from the front.
  let screen = parsed.screen as Screen;
  const firstUnanswered = QUESTION_SCREENS.find((id) => !answers[id]);
  if (screen !== 'want' && !want) {
    screen = 'want';
  } else if ((screen === 'verdict' || screen === 'number' || screen === 'time') && firstUnanswered) {
    screen = firstUnanswered;
  } else if (
    (screen === 'number' || screen === 'time') &&
    wallOf({ answers, tailor }) !== null
  ) {
    screen = 'verdict';
  }

  return {
    screen,
    dir: 1,
    want,
    tailor,
    answers,
    contact,
    time,
    send: { status: 'idle' },
    started: false,
  };
}

/* ─── The lead trail ─── */

export interface TrailInput {
  want: Want;
  tailor: TailorState;
  answers: FitAnswers;
  time: TimePick;
  utms: Record<string, string>;
}

/** The message body lines, in inbox order. The component joins with ' · '. */
export function buildTrail({ want, tailor, answers, time, utms }: TrailInput): string[] {
  const lines: string[] = [];
  const read = tailor.status === 'done' && want.kind === 'text' ? tailor.read : null;

  lines.push(
    want.kind === 'chip' ? `Want: ${want.title}` : `Want (typed): "${want.text.trim().slice(0, 300)}"`
  );
  if (read) lines.push(`Heard: ${read.heard}`);

  const band = REVENUE_BANDS.find((b) => b.label === answers.revenue);
  if (band) lines.push(`Revenue: ${band.label}${band.qualified ? '' : ' (BELOW BAR)'}`);

  const verdict = fitVerdict(answers);
  lines.push(...fitTrail(answers, verdict));
  lines.push(`Verdict: ${verdict.tier}`);
  if (read) lines.push(`AI fit read: ${read.fit}`);

  const first = shownFirstBuild({ want, tailor });
  if (first) lines.push(`First build: ${first}`);

  const picks = [
    time.day ? DAY_LABELS[time.day] : '',
    time.window ? WINDOW_LABELS[time.window] : '',
  ].filter(Boolean);
  lines.push(picks.length ? `Best time: ${picks.join(', ')}` : 'Best time: not given');

  lines.push('Page: fit');
  for (const [k, v] of Object.entries(utms)) lines.push(`${k}: ${v}`);
  return lines;
}

/** Qualified per the revenue band (gates ad-platform conversions). */
export function isQualified(answers: Pick<FitAnswers, 'revenue'>): boolean {
  return REVENUE_BANDS.find((b) => b.label === answers.revenue)?.qualified ?? true;
}

/* ─── Contact validation ─── */

export function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, '');
}

export const EMAIL_RE = /^\S+@\S+\.\S{2,}$/;

export interface ContactErrors {
  name?: string;
  phone?: string;
  email?: string;
}

export function validateContact(
  c: Pick<Contact, 'name' | 'phone' | 'email'>
): { ok: boolean; errors: ContactErrors } {
  const errors: ContactErrors = {};
  if (c.name.trim() === '') errors.name = 'Need a first name.';
  const digits = normalizePhone(c.phone);
  if (!(digits.length === 10 || (digits.length === 11 && digits.startsWith('1')))) {
    errors.phone = 'Need a number Trevor can call.';
  }
  const email = c.email.trim();
  if (email !== '' && !EMAIL_RE.test(email)) {
    errors.email = "That email doesn't look right. Fix it or leave it blank.";
  }
  return { ok: Object.keys(errors).length === 0, errors };
}

/* ─── The hop ─── */

export function thankYouHref(time: TimePick): string {
  return (
    '/thank-you?from=fit' + (time.day ? `&d=${time.day}` : '') + (time.window ? `&t=${time.window}` : '')
  );
}
