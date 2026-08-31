'use client';

import { useEffect, useRef, useState } from 'react';

/* GLOCK MODE (Trevor 8/28): no button anymore — it's a secret handshake.
   Hold the header logo for 3 seconds (the Header dispatches
   'glockmode:open') and the station drops down from under the wordmark:
   the OFFICIAL Spotify embed for Key Glock (artist 0RESbWvOMyua0yuyVrztJ5)
   until Trevor supplies his public liked-songs playlist link — swap
   EMBED_URL and nothing else. Official embeds are fully licensed by
   Spotify: real music, zero liability. Closing (✕, click outside, Escape,
   or holding the logo again) collapses the panel back up into the logo and
   unmounts the iframe, which kills the audio. Hidden while the AI
   secretary is live (body.voice-live). Nothing autoplays, ever.
   The old secret AdWords menu moved to holding the FOOTER wordmark. */

/* 8/31: Trevor picked the station's one song — "Rich Blessed N Savage"
   (Key Glock). Track embeds are 152px tall vs the artist embed's 352. */
const EMBED_URL =
  'https://open.spotify.com/embed/track/1hP7IHJzTchMc50b01mMFc?utm_source=generator&theme=0';
const EMBED_HEIGHT = 152;

const COLLAPSE_MS = 240;

export function GlockMode() {
  const [phase, setPhase] = useState<'closed' | 'open' | 'closing'>('closed');
  const [voiceLive, setVoiceLive] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setVoiceLive(document.body.classList.contains('voice-live'));
    check();
    const mo = new MutationObserver(check);
    mo.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => mo.disconnect();
  }, []);

  // The handshake: Header fires this after a 3s logo hold. Toggles.
  useEffect(() => {
    const onOpen = () => {
      if (document.body.classList.contains('voice-live')) return;
      setPhase((p) => (p === 'open' ? 'closing' : 'open'));
    };
    window.addEventListener('glockmode:open', onOpen);
    return () => window.removeEventListener('glockmode:open', onOpen);
  }, []);

  const close = () => setPhase((p) => (p === 'open' ? 'closing' : p));

  useEffect(() => {
    if (phase !== 'closing') return;
    const t = setTimeout(() => setPhase('closed'), COLLAPSE_MS);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'open') return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (panelRef.current?.contains(e.target as Node)) return;
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

  if (voiceLive && phase === 'closed') return null;

  const showPanel = phase === 'open' || phase === 'closing';
  if (!showPanel) return null;

  return (
    <>
      {/* Drops from under the logo (top-left), collapses back up into it.
          Unmount on close stops the audio. */}
      <div
        ref={panelRef}
        style={{
          transformOrigin: 'top left',
          animation: `${phase === 'closing' ? 'glockcollapse' : 'glockdrop'} ${COLLAPSE_MS}ms cubic-bezier(0.22, 1, 0.36, 1) forwards`,
        }}
        className="fixed top-20 lg:top-24 left-4 z-[55] w-[min(92vw,360px)] rounded-2xl overflow-hidden border border-primary/40 shadow-2xl shadow-primary/20 bg-background"
      >
        <div className="flex items-center justify-between px-4 py-2.5 bg-primary">
          <p className="text-[11px] font-black uppercase tracking-[0.25em] text-black flex items-center gap-2">
            <span className="flex items-end gap-[2px] h-3" aria-hidden="true">
              <span className="w-[2.5px] rounded-full bg-black animate-[glockbar_0.8s_ease-in-out_infinite]" style={{ height: '60%' }} />
              <span className="w-[2.5px] rounded-full bg-black animate-[glockbar_0.6s_ease-in-out_infinite_0.1s]" style={{ height: '100%' }} />
              <span className="w-[2.5px] rounded-full bg-black animate-[glockbar_0.5s_ease-in-out_infinite_0.05s]" style={{ height: '75%' }} />
            </span>
            Glock Mode
          </p>
          <button
            type="button"
            onClick={close}
            aria-label="Collapse Glock Mode"
            className="w-6 h-6 rounded-full text-black font-black text-sm leading-none hover:bg-black/10 transition-colors"
          >
            ✕
          </button>
        </div>
        <iframe
          title="Glock Mode on Spotify"
          src={EMBED_URL}
          width="100%"
          height={EMBED_HEIGHT}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>

      <style>{`
        @keyframes glockbar {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
        @keyframes glockdrop {
          from { opacity: 0; transform: translateY(-24px) scale(0.15); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes glockcollapse {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to { opacity: 0; transform: translateY(-24px) scale(0.15); }
        }
      `}</style>
    </>
  );
}
