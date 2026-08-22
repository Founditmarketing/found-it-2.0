'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, X } from 'lucide-react';
import { trackCTAClick } from '@/lib/analytics';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/** Personal audio intro from Trevor, floating bottom-left as a "voice note".
 *  Renders nothing until a recording exists at one of these paths — drop the
 *  file into /public/audio/ and the widget appears on the next page load. */
const SOURCES = ['/audio/trevor-intro.mp3', '/audio/trevor-intro.m4a', '/audio/trevor-intro.wav'];
const DISMISS_KEY = 'fi_voice_intro_dismissed';
/** Probe result cache ('' = no recording found) so the three HEAD requests run
 *  once per session, not on every hard page load. */
const PROBE_KEY = 'fi_voice_intro_src';

function formatTime(secs: number): string | null {
  if (!isFinite(secs) || secs <= 0) return null;
  const m = Math.floor(secs / 60);
  const s = Math.round(secs % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

export function VoiceIntro() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [entranceDone, setEntranceDone] = useState(false);
  // Assume dismissed until sessionStorage is checked, so it never flashes in.
  const [dismissed, setDismissed] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    try {
      setDismissed(sessionStorage.getItem(DISMISS_KEY) === '1');
    } catch {
      setDismissed(false);
    }

    let cancelled = false;
    (async () => {
      try {
        const cached = sessionStorage.getItem(PROBE_KEY);
        if (cached !== null) {
          if (cached) setSrc(cached);
          return;
        }
      } catch {
        /* private mode — probe as usual */
      }
      for (const candidate of SOURCES) {
        try {
          const res = await fetch(candidate, { method: 'HEAD' });
          if (cancelled) return;
          if (res.ok) {
            setSrc(candidate);
            try { sessionStorage.setItem(PROBE_KEY, candidate); } catch { /* ignore */ }
            return;
          }
        } catch {
          /* try the next format */
        }
      }
      try { sessionStorage.setItem(PROBE_KEY, ''); } catch { /* ignore */ }
    })();

    const timer = setTimeout(() => setEntranceDone(true), 2200);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      if (!hasPlayed) {
        setHasPlayed(true);
        trackCTAClick('voice_intro_play');
      }
      void el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  const dismiss = () => {
    audioRef.current?.pause();
    setPlaying(false);
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      /* ignore */
    }
  };

  const show = !!src && entranceDone && !dismissed;
  const ringCircumference = 2 * Math.PI * 26;
  const timeLabel = formatTime(duration);

  return (
    <>
      {src && (
        <audio
          ref={audioRef}
          src={src}
          preload="metadata"
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onTimeUpdate={(e) => {
            const el = e.currentTarget;
            setProgress(el.duration ? el.currentTime / el.duration : 0);
          }}
          onEnded={() => {
            setPlaying(false);
            setProgress(0);
          }}
        />
      )}

      <AnimatePresence>
        {show && (
          <motion.div
            key="voice-intro"
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.5, ease }}
            className="fixed bottom-5 left-5 z-[140]"
          >
            <div className="relative">
              <button
                onClick={toggle}
                aria-label={playing ? 'Pause the intro from Trevor' : 'Play a short intro from Trevor'}
                className="flex items-center gap-3 bg-background/90 backdrop-blur-xl border border-border/30 rounded-full p-2 pr-3 shadow-2xl shadow-black/50 hover:border-primary/40 transition-colors text-left"
              >
                {/* Avatar with progress ring */}
                <span className="relative w-12 h-12 shrink-0">
                  <span className="absolute inset-0 rounded-full overflow-hidden border border-border/40">
                    <Image
                      src="/trevorruby-v2.jpg"
                      alt="Trevor Ruby, founder of Found It Software"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </span>
                  <svg viewBox="0 0 56 56" className="absolute -inset-1 w-14 h-14 -rotate-90 pointer-events-none">
                    <circle cx="28" cy="28" r="26" fill="none" strokeWidth="2.5" className="stroke-white/10" />
                    <circle
                      cx="28" cy="28" r="26" fill="none" strokeWidth="2.5" strokeLinecap="round"
                      className="stroke-primary"
                      strokeDasharray={ringCircumference}
                      strokeDashoffset={ringCircumference - ringCircumference * progress}
                    />
                  </svg>
                </span>

                <span className="min-w-0">
                  <span className="hidden sm:block text-[9px] font-black uppercase tracking-[0.25em] text-primary/80">
                    A note from the founder{timeLabel ? ` · ${timeLabel}` : ''}
                  </span>
                  <span className="block text-[13px] font-black uppercase italic tracking-tighter text-foreground leading-tight">
                    Hey, I&apos;m Trevor<span className="hidden sm:inline"> — hit play</span>
                  </span>
                </span>

                {/* Play / pause */}
                <span className="relative w-9 h-9 shrink-0">
                  {!playing && !hasPlayed && (
                    <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" aria-hidden="true" />
                  )}
                  <span className="relative w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </span>
                </span>
              </button>

              <button
                onClick={dismiss}
                aria-label="Dismiss the voice intro"
                className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-background border border-border/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
