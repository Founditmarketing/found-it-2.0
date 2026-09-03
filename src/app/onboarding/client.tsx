'use client';

/* ─── ONBOARDING, SPOKEN ───
   The Speak It In pattern, on the public site: the new client TALKS,
   the sorter fills the boxes, the human reviews and commits. The mic
   uses the browser's own speech engine when it has one; otherwise the
   phone keyboard's mic into the box does the same job. Nothing is
   invented: fields the client never mentioned stay blank and get
   caught on the kickoff call. */

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';

type Person = { name: string; role: string; cell: string; email: string; officeGeneral: boolean };
type Fields = {
  businessLegal: string; businessGoesBy: string; address: string; mainPhone: string;
  businessEmail: string; website: string; people: Person[]; toolsToday: string;
  toolThatHurts: string; jobsComeIn: string; whoAnswers: string; estimatesToday: string;
  howTheyGetPaid: string; crews: string; services: string; accessNotes: string;
  oneThing: string; kickoffTimes: string; reachNumber: string; anythingElse: string;
};

const EMPTY: Fields = {
  businessLegal: '', businessGoesBy: '', address: '', mainPhone: '', businessEmail: '',
  website: '', people: [], toolsToday: '', toolThatHurts: '', jobsComeIn: '', whoAnswers: '',
  estimatesToday: '', howTheyGetPaid: '', crews: '', services: '', accessNotes: '',
  oneThing: '', kickoffTimes: '', reachNumber: '', anythingElse: '',
};

const PROMPTS = [
  'What does the business go by, and who runs it?',
  'What do you run on today — and which part do you hate?',
  'How does a job come in, get done, and get paid?',
  'What has to work in the first two weeks?',
];

const FIELD_META: { key: keyof Fields; label: string; wide?: boolean }[] = [
  { key: 'businessLegal', label: 'Legal / billing name' },
  { key: 'businessGoesBy', label: 'Goes by' },
  { key: 'address', label: 'Shop / mailing address', wide: true },
  { key: 'mainPhone', label: 'Main phone (the one customers call)' },
  { key: 'businessEmail', label: 'Business email' },
  { key: 'website', label: 'Website / domain' },
  { key: 'toolsToday', label: 'What you run on today', wide: true },
  { key: 'toolThatHurts', label: 'Which one hurts the most', wide: true },
  { key: 'jobsComeIn', label: 'How jobs come in' },
  { key: 'whoAnswers', label: 'Who answers / after hours' },
  { key: 'estimatesToday', label: 'How estimates go out' },
  { key: 'howTheyGetPaid', label: 'How you get paid' },
  { key: 'crews', label: 'Crews / trucks' },
  { key: 'services', label: 'Services' },
  { key: 'accessNotes', label: 'Logins / access (who holds the keys)', wide: true },
  { key: 'oneThing', label: 'The ONE thing that has to work in two weeks', wide: true },
  { key: 'kickoffTimes', label: 'Best times for the kickoff call' },
  { key: 'reachNumber', label: 'Best number to reach you' },
  { key: 'anythingElse', label: 'Anything else', wide: true },
];

export default function OnboardingClient() {
  const params = useSearchParams();
  const [stage, setStage] = useState<'talk' | 'review' | 'sent'>('talk');
  const [transcript, setTranscript] = useState('');
  const [interim, setInterim] = useState('');
  const [recording, setRecording] = useState(false);
  const [micSupported, setMicSupported] = useState(false);
  const [sorting, setSorting] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [litKeys, setLitKeys] = useState<Set<string>>(new Set());
  const recRef = useRef<{ stop: () => void } | null>(null);
  const keepAliveRef = useRef(false);

  useEffect(() => {
    const w = window as unknown as { webkitSpeechRecognition?: unknown; SpeechRecognition?: unknown };
    setMicSupported(Boolean(w.webkitSpeechRecognition || w.SpeechRecognition));
    const biz = params.get('biz');
    const owner = params.get('owner');
    if (biz || owner) {
      setFields((f) => ({
        ...f,
        businessGoesBy: biz ?? f.businessGoesBy,
        people: owner ? [{ name: owner, role: 'Owner', cell: '', email: '', officeGeneral: false }] : f.people,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startRecording() {
    const w = window as unknown as {
      webkitSpeechRecognition?: new () => SpeechRecognitionLike;
      SpeechRecognition?: new () => SpeechRecognitionLike;
    };
    const Ctor = w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!Ctor) return;
    const rec = new Ctor();
    rec.continuous = true;
    rec.interimResults = true;
    rec.lang = 'en-US';
    rec.onresult = (e: SpeechRecognitionEventLike) => {
      let finals = '';
      let interimText = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i];
        if (r.isFinal) finals += r[0].transcript + ' ';
        else interimText += r[0].transcript;
      }
      if (finals) setTranscript((t) => (t ? t + ' ' : '') + finals.trim());
      setInterim(interimText);
    };
    rec.onend = () => {
      // mobile engines stop themselves every few seconds; keep the mic hot
      if (keepAliveRef.current) {
        try { rec.start(); } catch { setRecording(false); keepAliveRef.current = false; }
      } else {
        setRecording(false);
        setInterim('');
      }
    };
    rec.onerror = () => { keepAliveRef.current = false; setRecording(false); setInterim(''); };
    keepAliveRef.current = true;
    recRef.current = { stop: () => { keepAliveRef.current = false; rec.stop(); } };
    try { rec.start(); setRecording(true); setError(''); } catch { setRecording(false); }
  }

  function stopRecording() { recRef.current?.stop(); }

  async function sortItIn() {
    if (transcript.trim().length < 20) { setError('Talk a little more first. A few sentences is plenty.'); return; }
    setSorting(true); setError('');
    try {
      const res = await fetch('/api/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'extract', transcript, hp: '' }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'The sorter choked. Try again.');
      const got = data.fields as Partial<Fields>;
      const merged: Fields = { ...EMPTY, ...fields };
      const lit = new Set<string>();
      (Object.keys(EMPTY) as (keyof Fields)[]).forEach((k) => {
        if (k === 'people') return;
        const v = (got[k] as string | undefined)?.trim();
        if (v) { (merged[k] as string) = v; lit.add(k); }
      });
      if (Array.isArray(got.people) && got.people.length) {
        merged.people = got.people.map((p) => ({
          name: p.name ?? '', role: p.role ?? '', cell: p.cell ?? '', email: p.email ?? '',
          officeGeneral: Boolean(p.officeGeneral),
        }));
        lit.add('people');
      }
      setFields(merged);
      setLitKeys(lit);
      setStage('review');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'The sorter choked. Try again.');
    } finally { setSorting(false); }
  }

  async function send() {
    setSending(true); setError('');
    try {
      const res = await fetch('/api/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'submit', fields, transcript, hp: '' }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Didn't send. Try once more.");
      setStage('sent');
    } catch (e) {
      setError(e instanceof Error ? e.message : "Didn't send. Try once more.");
    } finally { setSending(false); }
  }

  const set = (k: keyof Fields, v: string) => setFields((f) => ({ ...f, [k]: v }));
  const setPerson = (i: number, k: keyof Person, v: string | boolean) =>
    setFields((f) => {
      const people = f.people.slice();
      people[i] = { ...people[i], [k]: v } as Person;
      return { ...f, people };
    });

  return (
    <main className="bg-transparent text-foreground pt-32 lg:pt-40 pb-24 relative overflow-hidden min-h-[90dvh]">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[760px] mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
            Client Onboarding
          </p>
          <h1 className="text-4xl sm:text-6xl font-black uppercase italic tracking-tighter leading-[0.85]">
            Don&apos;t fill out a form. <span className="text-primary">Talk.</span>
          </h1>
          {stage === 'talk' && (
            <p className="mt-5 text-white/60 max-w-[520px] mx-auto text-base leading-relaxed">
              Press the button and ramble. We sort your words into the boxes &mdash; you fix
              anything we got wrong.
            </p>
          )}
        </div>

        {stage === 'talk' && (
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="flex flex-col items-center gap-4 mb-6">
              {micSupported ? (
                <button
                  type="button"
                  onClick={recording ? stopRecording : startRecording}
                  className={`relative h-24 w-24 rounded-full font-black uppercase text-xs tracking-widest transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    recording
                      ? 'bg-primary text-black shadow-[0_0_0_12px_rgba(255,85,0,0.15)] animate-pulse'
                      : 'bg-primary text-black hover:scale-105'
                  }`}
                >
                  {recording ? 'STOP' : 'TALK'}
                </button>
              ) : (
                <div className="text-center text-white/70 text-sm max-w-[420px]">
                  Tap into the box below, hit the{' '}
                  <span className="text-primary font-bold">microphone on your keyboard</span>, and
                  just talk.
                </div>
              )}
              {recording && (
                <p className="text-primary font-mono text-xs uppercase tracking-widest">
                  listening… talk like you talk
                </p>
              )}
            </div>

            <div className="mb-4 grid gap-1.5 text-[13px] text-white/45">
              {PROMPTS.map((p) => (
                <div key={p} className="flex gap-2">
                  <span className="text-primary font-black">›</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>

            <textarea
              value={interim ? `${transcript} ${interim}`.trim() : transcript}
              onChange={(e) => setTranscript(e.target.value)}
              rows={7}
              placeholder="Your words land here. Type or fix anything by hand."
              className="w-full rounded-xl border border-white/10 bg-black/40 p-4 text-[15px] leading-relaxed text-white placeholder:text-white/25 focus:border-primary/60 focus:outline-none"
            />

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-white/40 max-w-[320px]">
                Blanks are fine &mdash; we catch them on the kickoff call.
              </p>
              <button
                type="button"
                onClick={sortItIn}
                disabled={sorting}
                className="rounded-xl bg-primary px-7 py-3.5 font-black uppercase tracking-wider text-black text-sm transition-transform hover:scale-[1.03] disabled:opacity-50"
              >
                {sorting ? 'Sorting your words…' : 'Sort it into the boxes →'}
              </button>
            </div>
            {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
          </section>
        )}

        {stage === 'review' && (
          <section>
            <div className="mb-6 rounded-xl border border-primary/30 bg-primary/[0.06] px-5 py-4">
              <p className="text-sm text-white/80">
                <span className="font-black text-primary uppercase tracking-wider">Here&apos;s what we heard.</span>{' '}
                Fix anything. If you didn&apos;t say it, the box stayed empty.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {FIELD_META.map(({ key, label, wide }) => (
                <label key={key} className={wide ? 'sm:col-span-2' : ''}>
                  <span className="mb-1 block text-[10px] font-black uppercase tracking-[0.15em] text-white/40">
                    {label}
                  </span>
                  <input
                    value={fields[key] as string}
                    onChange={(e) => set(key, e.target.value)}
                    className={`w-full rounded-lg border bg-black/40 px-3 py-2.5 text-[15px] text-white focus:outline-none focus:border-primary/70 transition-colors ${
                      litKeys.has(key) ? 'border-primary/50' : 'border-white/10'
                    }`}
                  />
                </label>
              ))}
            </div>

            <div className="mt-7">
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.15em] text-white/40">
                Your people — everyone who gets a login <span className="text-primary">(⭐ = runs the office; we build their screen first)</span>
              </p>
              <div className="space-y-2">
                {[...fields.people, { name: '', role: '', cell: '', email: '', officeGeneral: false }]
                  .slice(0, 6)
                  .map((p, i) => (
                    <div key={i} className="grid grid-cols-[2fr_1.4fr_1.2fr_1.6fr_auto] gap-2">
                      <input value={p.name} placeholder="Name" onChange={(e) => setPerson(i, 'name', e.target.value)} className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white focus:outline-none focus:border-primary/70" />
                      <input value={p.role} placeholder="Role" onChange={(e) => setPerson(i, 'role', e.target.value)} className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white focus:outline-none focus:border-primary/70" />
                      <input value={p.cell} placeholder="Cell" onChange={(e) => setPerson(i, 'cell', e.target.value)} className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white focus:outline-none focus:border-primary/70" />
                      <input value={p.email} placeholder="Email" onChange={(e) => setPerson(i, 'email', e.target.value)} className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white focus:outline-none focus:border-primary/70" />
                      <button
                        type="button"
                        title="Runs the office"
                        onClick={() => setPerson(i, 'officeGeneral', !p.officeGeneral)}
                        className={`rounded-lg border px-2.5 text-base ${p.officeGeneral ? 'border-primary bg-primary/20' : 'border-white/10 opacity-40'}`}
                      >
                        ⭐
                      </button>
                    </div>
                  ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setStage('talk')}
                className="text-sm text-white/50 underline underline-offset-4 hover:text-white"
              >
                ← back to talking
              </button>
              <button
                type="button"
                onClick={send}
                disabled={sending}
                className="rounded-xl bg-primary px-8 py-4 font-black uppercase tracking-wider text-black text-sm transition-transform hover:scale-[1.03] disabled:opacity-50"
              >
                {sending ? 'Sending…' : 'Send it to Trevor'}
              </button>
            </div>
            {error && <p className="mt-3 text-sm text-red-400 text-right">{error}</p>}
          </section>
        )}

        {stage === 'sent' && (
          <section className="text-center rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-14">
            <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4">In Trevor&apos;s hand</p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase italic tracking-tighter mb-4">
              Got it. <span className="text-primary">That&apos;s the whole form.</span>
            </h2>
            <p className="text-white/60 max-w-[440px] mx-auto leading-relaxed">
              You just watched the system do data entry off your voice — that&apos;s the same
              trick your own OS will pull every day. We&apos;ll call to set the kickoff. Your new
              system runs beside the old one until you say go, and you own it outright: the code
              and the data, like your trucks.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}

/* Minimal structural types for the browser speech engine (webkit prefixed). */
interface SpeechRecognitionLike {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((e: SpeechRecognitionEventLike) => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
  start: () => void;
  stop: () => void;
}
interface SpeechRecognitionEventLike {
  resultIndex: number;
  results: ArrayLike<ArrayLike<{ transcript: string }> & { isFinal: boolean }>;
}
