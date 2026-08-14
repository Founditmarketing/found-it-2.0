'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Mic, MicOff, PhoneOff, ArrowDown } from 'lucide-react';
import { trackLead, trackCTAClick, getStoredUTMs } from '@/lib/analytics';
import { REALTIME_CALLS_URL, VOICE_SESSION_MAX_SECONDS, voiceLeadSource } from '@/lib/voice';

/* ─── Live AI-secretary voice demo — the hero widget ───
   Browser-native WebRTC straight to the OpenAI Realtime endpoint using a
   short-lived token minted by /api/voice/session; the real key never touches
   the client. She talks, we caption both sides, and when she confirms a
   name + number she emits a capture_lead tool call that WE execute by
   POSTing the existing /api/lead pipe (source: voice_agent_<page>).

   Mobile-first: mic permission is requested on TAP, never on load; the tap
   target is the full card. If the key is missing, rate limits trip, or
   anything at all fails, the widget degrades to "line busy" + the page's
   standard lead form — the LP can never break because of this feature. */

type Phase = 'idle' | 'connecting' | 'live' | 'ended' | 'busy' | 'denied';

interface CaptionLine {
  role: 'you' | 'ai';
  text: string;
  /** Open assistant line still receiving transcript deltas. */
  open?: boolean;
}

/** Card she pushes to the screen via the show_answer tool while speaking. */
interface AnswerCard {
  heading: string;
  rows: { label: string; value: string }[];
  note?: string;
}

/** Idle-state rotator — the widget sells itself before the tap. */
const IDLE_LINES = [
  'Tap the mic and just talk — she answers out loud.',
  'Ask her: “who owes me money right now?”',
  'She’s the same secretary Trevor can build into your business.',
];

interface VoiceAgentWidgetProps {
  /** LP slug for lead attribution, e.g. 'auto-shop' → voice_agent_auto-shop */
  pageSlug: string;
  className?: string;
}

/** One concurrent session per visitor — module-level so a double-tap or a
 *  second widget instance can never open two paid calls at once. */
let sessionActive = false;

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

export function VoiceAgentWidget({ pageSlug, className = '' }: VoiceAgentWidgetProps) {
  const [phase, setPhase] = useState<Phase>('idle');
  const [captions, setCaptions] = useState<CaptionLine[]>([]);
  const [herTalking, setHerTalking] = useState(false);
  const [youTalking, setYouTalking] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(VOICE_SESSION_MAX_SECONDS);
  const [endReason, setEndReason] = useState<'user' | 'time' | 'error'>('user');
  const [answerCard, setAnswerCard] = useState<AnswerCard | null>(null);
  const [idleLine, setIdleLine] = useState(0);
  // After-call capture: she's a secretary — if the call ends before she got
  // the number, the card takes the message instead of saying goodbye.
  const [afterName, setAfterName] = useState('');
  const [afterPhone, setAfterPhone] = useState('');
  const [afterStatus, setAfterStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  // State mirror of the ref: a capture_lead POST that resolves AFTER the
  // session ends must re-render the ended card into its saved state, or it
  // keeps soliciting a number the system already has (duplicate lead +
  // duplicate ad conversions). Never reset between sessions on a page view.
  const [leadSaved, setLeadSaved] = useState(false);

  const pcRef = useRef<RTCPeerConnection | null>(null);
  const dcRef = useRef<RTCDataChannel | null>(null);
  const micRef = useRef<MediaStream | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const talkDecayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leadCountRef = useRef(0);
  const captionsBoxRef = useRef<HTMLDivElement | null>(null);
  const phaseRef = useRef<Phase>('idle');
  phaseRef.current = phase;

  const source = voiceLeadSource(pageSlug);

  /** Same attribution trail NativeLeadForm appends — widget leads from paid
   *  traffic were arriving with no campaign context beyond the source tag. */
  const utmTrail = () => {
    const parts = [
      `Page: ${pageSlug}`,
      ...Object.entries(getStoredUTMs()).map(([k, v]) => `${k}: ${v}`),
    ];
    return parts.join(' · ');
  };

  /* ─── Teardown ─── */
  const cleanup = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    if (talkDecayRef.current) { clearTimeout(talkDecayRef.current); talkDecayRef.current = null; }
    try { dcRef.current?.close(); } catch { /* already closed */ }
    dcRef.current = null;
    try { pcRef.current?.close(); } catch { /* already closed */ }
    pcRef.current = null;
    micRef.current?.getTracks().forEach((t) => t.stop());
    micRef.current = null;
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.srcObject = null;
      audioRef.current = null;
    }
    setHerTalking(false);
    setYouTalking(false);
    sessionActive = false;
  }, []);

  const endSession = useCallback((reason: 'user' | 'time' | 'error') => {
    cleanup();
    setEndReason(reason);
    setPhase(reason === 'error' ? 'busy' : 'ended');
  }, [cleanup]);

  // Unmount / navigate away: stop the paid call, release the mic.
  useEffect(() => {
    const bail = () => cleanup();
    window.addEventListener('pagehide', bail);
    return () => { window.removeEventListener('pagehide', bail); cleanup(); };
  }, [cleanup]);

  // Keep the caption box pinned to the newest line.
  useEffect(() => {
    const box = captionsBoxRef.current;
    if (box) box.scrollTop = box.scrollHeight;
  }, [captions]);

  // Idle state breathes: cycle the invitation line so the card reads alive
  // before anyone taps. Stops the moment the phase changes.
  useEffect(() => {
    if (phase !== 'idle') return;
    const t = setInterval(() => setIdleLine((i) => (i + 1) % IDLE_LINES.length), 3800);
    return () => clearInterval(t);
  }, [phase]);

  /* ─── Caption helpers ─── */
  const pushYou = (text: string) => {
    if (!text.trim()) return;
    setCaptions((c) => [...c.slice(-11), { role: 'you', text: text.trim() }]);
  };
  const appendAi = (delta: string) => {
    setCaptions((c) => {
      const last = c[c.length - 1];
      if (last && last.role === 'ai' && last.open) {
        return [...c.slice(0, -1), { ...last, text: last.text + delta }];
      }
      return [...c.slice(-11), { role: 'ai', text: delta, open: true }];
    });
  };
  const closeAi = () => {
    setCaptions((c) => {
      const last = c[c.length - 1];
      if (last && last.role === 'ai' && last.open) {
        return [...c.slice(0, -1), { ...last, open: false }];
      }
      return c;
    });
  };

  /** Fallback speaking indicator: transcript deltas imply audio; decay it. */
  const markHerTalking = () => {
    setHerTalking(true);
    if (talkDecayRef.current) clearTimeout(talkDecayRef.current);
    talkDecayRef.current = setTimeout(() => setHerTalking(false), 900);
  };

  /* ─── The capture_lead tool — the browser is the executor ─── */
  const handleCaptureLead = async (callId: string, rawArgs: string) => {
    let result: Record<string, string> = { status: 'error', message: 'Could not save. Point them to the form on this page.' };
    try {
      if (leadCountRef.current >= 3) {
        result = { status: 'already_saved', message: 'Lead already saved — no need to save again.' };
      } else {
        const a = JSON.parse(rawArgs || '{}') as Record<string, unknown>;
        const s = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
        const email = s(a.email, 254);
        const notes = s(a.notes, 500);
        const badEmailNote = email && !/^\S+@\S+\.\S+$/.test(email) ? ` (spoken email: ${email})` : '';
        const payload = {
          source,
          name: s(a.name, 200),
          phone: s(a.phone, 40),
          email: /^\S+@\S+\.\S+$/.test(email) ? email : '',
          businessName: s(a.businessName, 200),
          industry: s(a.industry, 120),
          message: `${notes}${badEmailNote} — captured live by the AI voice secretary demo.\n\n— ${utmTrail()}`.slice(0, 4000),
        };
        const res = await fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          leadCountRef.current += 1;
          setLeadSaved(true);
          trackLead(source);
          const body = await res.json().catch(() => ({}));
          result = body?.confirmationEmailed
            ? { status: 'saved', message: 'Lead saved AND a confirmation email just landed in their inbox — tell them to check it, then that Trevor will reach out shortly.' }
            : { status: 'saved', message: 'Lead saved. Tell them Trevor will reach out shortly.' };
        }
      }
    } catch { /* keep error result */ }

    const dc = dcRef.current;
    if (dc && dc.readyState === 'open') {
      dc.send(JSON.stringify({
        type: 'conversation.item.create',
        item: { type: 'function_call_output', call_id: callId, output: JSON.stringify(result) },
      }));
      dc.send(JSON.stringify({ type: 'response.create' }));
    }
  };

  /* ─── After-call capture: the message she didn't get to take ─── */
  const submitAfterLead = async () => {
    const name = afterName.trim();
    const phone = afterPhone.trim();
    if (!name || !phone || afterStatus === 'sending' || afterStatus === 'sent') return;
    setAfterStatus('sending');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source,
          name: name.slice(0, 200),
          phone: phone.slice(0, 40),
          message: `Number left in the widget right after the AI voice secretary demo ended.\n\n— ${utmTrail()}`.slice(0, 4000),
        }),
      });
      if (!res.ok) throw new Error('lead_failed');
      leadCountRef.current += 1;
      setLeadSaved(true);
      trackLead(source);
      setAfterStatus('sent');
    } catch {
      setAfterStatus('error');
    }
  };

  /* ─── The show_answer tool — render her card, acknowledge, let her roll ─── */
  const handleShowAnswer = (callId: string, rawArgs: string) => {
    let result = { status: 'error' };
    try {
      const a = JSON.parse(rawArgs || '{}') as Record<string, unknown>;
      const heading = typeof a.heading === 'string' ? a.heading.slice(0, 80) : '';
      const rows = Array.isArray(a.rows)
        ? a.rows
            .filter((r: any) => r && typeof r.label === 'string' && typeof r.value === 'string')
            .slice(0, 4)
            .map((r: any) => ({ label: r.label.slice(0, 60), value: r.value.slice(0, 60) }))
        : [];
      if (heading && rows.length) {
        setAnswerCard({
          heading,
          rows,
          note: typeof a.note === 'string' ? a.note.slice(0, 90) : undefined,
        });
        result = { status: 'shown' };
      }
    } catch { /* keep error result */ }

    const dc = dcRef.current;
    if (dc && dc.readyState === 'open') {
      dc.send(JSON.stringify({
        type: 'conversation.item.create',
        item: { type: 'function_call_output', call_id: callId, output: JSON.stringify(result) },
      }));
      dc.send(JSON.stringify({ type: 'response.create' }));
    }
  };

  /* ─── Realtime server events over the data channel ─── */
  const onServerEvent = (raw: MessageEvent) => {
    let msg: any;
    try { msg = JSON.parse(raw.data); } catch { return; }
    switch (msg.type) {
      case 'response.output_audio_transcript.delta':
        if (typeof msg.delta === 'string') { appendAi(msg.delta); markHerTalking(); }
        break;
      case 'response.output_audio_transcript.done':
        closeAi();
        break;
      case 'conversation.item.input_audio_transcription.completed':
        if (typeof msg.transcript === 'string') pushYou(msg.transcript);
        break;
      case 'input_audio_buffer.speech_started':
        setYouTalking(true);
        break;
      case 'input_audio_buffer.speech_stopped':
        setYouTalking(false);
        break;
      case 'output_audio_buffer.started':
        setHerTalking(true);
        break;
      case 'output_audio_buffer.stopped':
      case 'output_audio_buffer.cleared':
        setHerTalking(false);
        break;
      case 'response.done': {
        const outputs: any[] = msg.response?.output ?? [];
        for (const item of outputs) {
          if (item?.type === 'function_call' && item?.name === 'capture_lead') {
            void handleCaptureLead(item.call_id, item.arguments);
          } else if (item?.type === 'function_call' && item?.name === 'show_answer') {
            handleShowAnswer(item.call_id, item.arguments);
          }
        }
        break;
      }
      case 'error':
        console.warn('[voice-agent] server error event', msg.error);
        break;
    }
  };

  /* ─── Start the call (tap → mic prompt → token → WebRTC) ─── */
  const start = async () => {
    if (sessionActive || phaseRef.current === 'connecting' || phaseRef.current === 'live') return;
    sessionActive = true;
    setPhase('connecting');
    setCaptions([]);
    setAnswerCard(null);
    setSecondsLeft(VOICE_SESSION_MAX_SECONDS);
    // A stale error alert must not haunt the next call's ended card; a
    // 'sent' status (and leadSaved) survives on purpose — one page view,
    // one lead, no duplicate asks. The per-call ≥3 cap resets below.
    setAfterStatus((s) => (s === 'error' ? 'idle' : s));
    leadCountRef.current = 0;
    trackCTAClick(`voice_agent_start_${pageSlug}`);

    // 1. Mic — requested on the tap, never on page load.
    let mic: MediaStream;
    try {
      mic = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      sessionActive = false;
      setPhase('denied');
      return;
    }
    micRef.current = mic;

    try {
      // 2. Ephemeral token from our server — the real key never ships.
      const sessRes = await fetch('/api/voice/session', { method: 'POST' });
      if (!sessRes.ok) throw new Error(`session ${sessRes.status}`);
      const { token } = await sessRes.json();
      if (!token) throw new Error('no token');

      // 3. Native WebRTC to the Realtime endpoint.
      const pc = new RTCPeerConnection();
      pcRef.current = pc;

      const speaker = new Audio();
      speaker.autoplay = true;
      audioRef.current = speaker;
      pc.ontrack = (e) => { speaker.srcObject = e.streams[0]; };
      pc.addTrack(mic.getTracks()[0], mic);

      const dc = pc.createDataChannel('oai-events');
      dcRef.current = dc;
      dc.onmessage = onServerEvent;
      dc.onopen = () => {
        setPhase('live');
        // Countdown → hard cap. Instructions have her wrapping up at 2:30.
        const endAt = Date.now() + VOICE_SESSION_MAX_SECONDS * 1000;
        timerRef.current = setInterval(() => {
          const left = Math.max(0, Math.ceil((endAt - Date.now()) / 1000));
          setSecondsLeft(left);
          if (left <= 0) endSession('time');
        }, 500);
        // She greets first — the session instructions define the opener.
        dc.send(JSON.stringify({ type: 'response.create' }));
      };
      dc.onclose = () => {
        if (phaseRef.current === 'live') endSession('user');
      };

      pc.onconnectionstatechange = () => {
        if (['failed', 'disconnected', 'closed'].includes(pc.connectionState) && phaseRef.current === 'live') {
          endSession('user');
        }
      };

      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      const sdpRes = await fetch(REALTIME_CALLS_URL, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/sdp' },
        body: offer.sdp,
      });
      if (!sdpRes.ok) throw new Error(`sdp ${sdpRes.status}`);
      await pc.setRemoteDescription({ type: 'answer', sdp: await sdpRes.text() });
    } catch (err) {
      console.warn('[voice-agent] connect failed', err);
      endSession('error');
    }
  };

  /* ─── UI ─── */
  const orb = (
    <span className="relative w-16 h-16 shrink-0 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40 transition-transform group-hover:scale-105 group-active:scale-95">
      {phase === 'idle' && (
        <span className="absolute inset-0 rounded-full bg-primary/50 animate-ping [animation-duration:2.4s]" aria-hidden="true" />
      )}
      {phase === 'live' && (herTalking || youTalking) && (
        <span className="absolute -inset-1.5 rounded-full border-2 border-primary/50 animate-ping [animation-duration:1.4s]" aria-hidden="true" />
      )}
      {phase === 'live' && herTalking ? (
        <span className="relative flex items-end gap-[3px] h-6" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="va-bar w-[3px] rounded-full bg-primary-foreground"
              style={{ height: `${[14, 22, 26, 20, 12][i]}px`, animationDelay: `${i * 0.12}s` }}
            />
          ))}
        </span>
      ) : phase === 'connecting' ? (
        <span className="relative w-6 h-6 rounded-full border-[3px] border-primary-foreground/40 border-t-primary-foreground animate-spin" aria-hidden="true" />
      ) : (
        <Mic className="relative w-7 h-7 text-primary-foreground" aria-hidden="true" />
      )}
    </span>
  );

  return (
    <div className={`relative max-w-xl ${className}`}>
      <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-white/[0.03] p-4 sm:p-5">
        {/* Soft brand glow so the card reads premium, not boxy. */}
        <div className="pointer-events-none absolute -top-20 -left-16 w-56 h-56 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

        {/* ─── Idle: the whole card is the tap target ─── */}
        {phase === 'idle' && (
          <button type="button" onClick={start} className="group relative w-full flex items-center gap-4 text-left">
            {orb}
            <span className="min-w-0">
              <span className="flex items-center gap-2 flex-wrap">
                <span className="text-sm sm:text-base font-black uppercase italic tracking-tight text-white">
                  Talk To Our AI Secretary
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-2 py-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" aria-hidden="true" />
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-black">Live</span>
                </span>
              </span>
              <span
                key={idleLine}
                className="block text-[13px] sm:text-sm text-white/60 font-medium mt-1 leading-snug animate-[fadeIn_0.6s_ease]"
              >
                {IDLE_LINES[idleLine]}
              </span>
            </span>
          </button>
        )}

        {/* ─── Connecting ─── */}
        {phase === 'connecting' && (
          <div className="relative flex items-center gap-4">
            {orb}
            <div>
              <p className="text-sm sm:text-base font-black uppercase italic tracking-tight text-white">Ringing her now…</p>
              <p className="text-[13px] text-white/60 font-medium mt-1">One second — she picks up fast.</p>
            </div>
          </div>
        )}

        {/* ─── Live ─── */}
        {phase === 'live' && (
          <div className="relative">
            <div className="flex items-center gap-4">
              {orb}
              <div className="min-w-0 flex-1">
                <p className="text-sm sm:text-base font-black uppercase italic tracking-tight text-white">
                  {herTalking ? 'She’s talking…' : youTalking ? 'She’s listening…' : 'On the line — just talk'}
                </p>
                <p className="text-[12px] text-white/50 font-medium mt-0.5">Live conversation — say anything about your business.</p>
              </div>
              <span
                className={`text-xs font-black tabular-nums ${secondsLeft <= 30 ? 'text-primary' : 'text-white/50'}`}
                aria-label="Time remaining"
              >
                {fmt(secondsLeft)}
              </span>
            </div>

            {/* Voice only, by design (Trevor 8/13): no on-screen transcript —
                the captions state still drives the speaking indicator. */}

            {/* Her show_answer card — the page reacting to her voice. */}
            {answerCard && (
              <div className="mt-4 rounded-xl border border-primary/30 bg-primary/[0.06] p-4 animate-[fadeIn_0.4s_ease]">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-2.5">
                  {answerCard.heading}
                </p>
                <div className="space-y-1.5">
                  {answerCard.rows.map((r, i) => (
                    <div key={i} className="flex items-baseline justify-between gap-4">
                      <span className="text-[13px] font-medium text-white/70">{r.label}</span>
                      <span className="text-[13px] font-black tabular-nums text-white">{r.value}</span>
                    </div>
                  ))}
                </div>
                {answerCard.note && (
                  <p className="mt-2.5 text-[10px] font-medium text-white/40">{answerCard.note}</p>
                )}
              </div>
            )}

            <button
              type="button"
              onClick={() => endSession('user')}
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-border/25 bg-white/[0.04] px-4 py-2.5 text-xs font-black uppercase tracking-wide text-white/70 hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              <PhoneOff className="w-3.5 h-3.5" aria-hidden="true" /> End the call
            </button>
          </div>
        )}

        {/* ─── Ended ─── */}
        {phase === 'ended' && (
          <div className="relative">
            <p className="text-sm sm:text-base font-black uppercase italic tracking-tight text-white">
              {endReason === 'time' ? 'That’s the 3-minute demo.' : 'Thanks for trying her out.'}
            </p>

            {/* She's a secretary: if the clock (or the caller) beat her to the
                number, the card takes the message. Demo players are the
                warmest traffic on the page — never wave them goodbye. */}
            {!leadSaved && afterStatus !== 'sent' ? (
              <>
                <p className="text-[13px] sm:text-sm text-white/60 font-medium mt-1 leading-snug">
                  Want Trevor to call you back about your business? Leave your number — she&rsquo;ll
                  pass it along.
                </p>
                <form
                  onSubmit={(e) => { e.preventDefault(); void submitAfterLead(); }}
                  className="mt-3.5 flex flex-col sm:flex-row gap-2"
                >
                  <input
                    value={afterName}
                    onChange={(e) => setAfterName(e.target.value)}
                    placeholder="Your name"
                    aria-label="Your name"
                    autoComplete="name"
                    maxLength={200}
                    className="flex-1 min-w-0 bg-white/[0.04] border border-border/25 rounded-xl px-3.5 py-2.5 text-base sm:text-sm font-medium text-white placeholder:text-white/40 outline-none focus:border-primary/40 transition-colors"
                  />
                  <input
                    value={afterPhone}
                    onChange={(e) => setAfterPhone(e.target.value)}
                    placeholder="Phone number"
                    aria-label="Phone number"
                    type="tel"
                    autoComplete="tel"
                    maxLength={40}
                    className="flex-1 min-w-0 bg-white/[0.04] border border-border/25 rounded-xl px-3.5 py-2.5 text-base sm:text-sm font-medium text-white placeholder:text-white/40 outline-none focus:border-primary/40 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={afterStatus === 'sending' || !afterName.trim() || !afterPhone.trim()}
                    className="shrink-0 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-xs font-black uppercase tracking-wide text-primary-foreground disabled:opacity-40 hover:opacity-90 transition-opacity"
                  >
                    {afterStatus === 'sending' ? 'Sending…' : 'Call me back'}
                  </button>
                </form>
                {afterStatus === 'error' && (
                  <p role="alert" className="mt-2 text-[11px] font-bold text-red-400">
                    Could not send — use the form on this page instead.
                  </p>
                )}
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={start}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white/60 hover:text-primary transition-colors"
                  >
                    <Mic className="w-3.5 h-3.5" aria-hidden="true" /> Talk to her again
                  </button>
                  <a href="#lp-form" className="inline-flex items-center gap-1.5 text-xs font-bold text-white/60 hover:text-primary transition-colors">
                    Or grab the free software map <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </>
            ) : (
              <>
                <p className="text-[13px] sm:text-sm text-white/60 font-medium mt-1 leading-snug">
                  {leadSaved
                    ? 'Got it — Trevor will reach out, usually within 2 hours during the day.'
                    : 'She lives inside every system Trevor builds — yours could answer calls like that.'}
                </p>
                <div className="mt-3.5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={start}
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-black uppercase tracking-wide text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    <Mic className="w-3.5 h-3.5" aria-hidden="true" /> Talk again
                  </button>
                  <a href="#lp-form" className="inline-flex items-center gap-1.5 text-xs font-bold text-white/70 hover:text-primary transition-colors">
                    Or grab the free software map <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </>
            )}
          </div>
        )}

        {/* ─── Busy / failed: graceful fallback to the page's real lead path ─── */}
        {phase === 'busy' && (
          <div className="relative">
            <p className="text-sm sm:text-base font-black uppercase italic tracking-tight text-white">
              She’s helping someone else right now.
            </p>
            <p className="text-[13px] sm:text-sm text-white/60 font-medium mt-1 leading-snug">
              Leave your info instead — Trevor calls you back himself, usually within 2 hours.
            </p>
            <a
              href="#lp-form"
              className="mt-3.5 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-black uppercase tracking-wide text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Leave my info <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        )}

        {/* ─── Mic permission denied ─── */}
        {phase === 'denied' && (
          <div className="relative">
            <p className="flex items-center gap-2 text-sm sm:text-base font-black uppercase italic tracking-tight text-white">
              <MicOff className="w-4 h-4 text-primary" aria-hidden="true" /> Mic’s blocked.
            </p>
            <p className="text-[13px] sm:text-sm text-white/60 font-medium mt-1 leading-snug">
              Allow microphone access and tap again — or just use the form on this page.
            </p>
            <div className="mt-3.5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={start}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-black uppercase tracking-wide text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Mic className="w-3.5 h-3.5" aria-hidden="true" /> Try again
              </button>
              <a href="#lp-form" className="text-xs font-bold text-white/70 hover:text-primary transition-colors">
                Use the form instead
              </a>
            </div>
          </div>
        )}

        <p className="relative mt-3 text-[10px] font-medium text-white/35 leading-snug">
          Live AI demo — 3-minute limit.
        </p>
      </div>
    </div>
  );
}
