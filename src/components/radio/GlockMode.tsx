'use client';

import { useEffect, useRef, useState } from 'react';

/* GLOCK MODE (Trevor 8/28): a station anyone can tune into, without the
   licensing landmine. The button opens the OFFICIAL Spotify embed for
   Key Glock (artist 0RESbWvOMyua0yuyVrztJ5, pulled from Spotify itself) —
   official embeds are fully licensed by Spotify, so real Key Glock plays
   with zero liability. Full tracks for logged-in Spotify visitors,
   previews otherwise. Closing collapses the panel back down into the pill
   (Trevor: "like a cherry on top") and unmounts the iframe, which kills
   the audio. Pill tap, the panel's ✕, a click anywhere outside, or Escape
   all close it. The pill hides while the AI secretary is live
   (body.voice-live — she doesn't rap battle). Nothing autoplays, ever. */

const KEY_GLOCK_EMBED =
  'https://open.spotify.com/embed/artist/0RESbWvOMyua0yuyVrztJ5?utm_source=generator&theme=0';

const COLLAPSE_MS = 240;

export function GlockMode() {
  const [phase, setPhase] = useState<'closed' | 'open' | 'closing'>('closed');
  const [voiceLive, setVoiceLive] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const check = () => setVoiceLive(document.body.classList.contains('voice-live'));
    check();
    const mo = new MutationObserver(check);
    mo.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => mo.disconnect();
  }, []);

  const close = () => {
    setPhase((p) => (p === 'open' ? 'closing' : p));
  };

  useEffect(() => {
    if (phase !== 'closing') return;
    const t = setTimeout(() => setPhase('closed'), COLLAPSE_MS);
    return () => clearTimeout(t);
  }, [phase]);

  // Click anywhere outside the panel (or the pill) collapses it.
  useEffect(() => {
    if (phase !== 'open') return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      const t = e.target as Node;
      if (panelRef.current?.contains(t) || pillRef.current?.contains(t)) return;
      close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('touchstart', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('touchstart', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [phase]);

  if (voiceLive) return null;

  const showPanel = phase === 'open' || phase === 'closing';
  const playing = phase === 'open';

  return (
    <>
      {/* The panel — official Spotify embed, mounted only while open/closing.
          transform-origin bottom-left so it grows out of, and collapses back
          into, the pill. Unmount on close stops the audio. */}
      {showPanel && (
        <div
          ref={panelRef}
          style={{
            transformOrigin: 'bottom left',
            animation: `${phase === 'closing' ? 'glockcollapse' : 'glockrise'} ${COLLAPSE_MS}ms cubic-bezier(0.22, 1, 0.36, 1) forwards`,
          }}
          className="fixed bottom-20 left-4 z-[55] w-[min(92vw,360px)] rounded-2xl overflow-hidden border border-primary/40 shadow-2xl shadow-primary/20 bg-background"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Collapse Glock Mode"
            className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-black/70 text-white/90 font-bold text-sm leading-none hover:bg-black transition-colors"
          >
            ✕
          </button>
          <iframe
            title="Glock Mode — Key Glock on Spotify"
            src={KEY_GLOCK_EMBED}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      )}

      {/* The pill */}
      <button
        ref={pillRef}
        type="button"
        onClick={() => (playing ? close() : setPhase('open'))}
        aria-pressed={playing}
        aria-label={playing ? 'Collapse Glock Mode' : 'Open Glock Mode'}
        className="fixed bottom-4 left-4 z-[55] inline-flex items-center gap-2.5 h-12 px-5 rounded-full bg-primary text-black font-black uppercase tracking-[0.12em] text-xs shadow-2xl shadow-primary/30 hover:opacity-90 transition-opacity"
      >
        {playing ? (
          <span className="flex items-end gap-[3px] h-4" aria-hidden="true">
            <span className="w-[3px] rounded-full bg-black animate-[glockbar_0.8s_ease-in-out_infinite]" style={{ height: '60%' }} />
            <span className="w-[3px] rounded-full bg-black animate-[glockbar_0.6s_ease-in-out_infinite_0.1s]" style={{ height: '100%' }} />
            <span className="w-[3px] rounded-full bg-black animate-[glockbar_0.7s_ease-in-out_infinite_0.2s]" style={{ height: '45%' }} />
            <span className="w-[3px] rounded-full bg-black animate-[glockbar_0.5s_ease-in-out_infinite_0.05s]" style={{ height: '80%' }} />
          </span>
        ) : (
          <span className="w-2 h-2 rounded-full bg-black" aria-hidden="true" />
        )}
        Glock Mode
      </button>

      <style>{`
        @keyframes glockbar {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
        @keyframes glockrise {
          from { opacity: 0; transform: translateY(24px) scale(0.15); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes glockcollapse {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to { opacity: 0; transform: translateY(24px) scale(0.15); }
        }
      `}</style>
    </>
  );
}
