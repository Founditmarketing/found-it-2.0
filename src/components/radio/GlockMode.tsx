'use client';

import { useEffect, useState } from 'react';

/* GLOCK MODE (Trevor 8/28): a station anyone can tune into, without the
   licensing landmine. The button opens the OFFICIAL Spotify embed for
   Key Glock (artist 0RESbWvOMyua0yuyVrztJ5, pulled from Spotify itself) —
   official embeds are fully licensed by Spotify, so real Key Glock plays
   with zero liability. Full tracks for logged-in Spotify visitors,
   previews otherwise. Closing the panel unmounts the iframe, which kills
   the audio. The pill hides while the AI secretary is live (body.voice-live
   — she doesn't rap battle). Browsers require the tap; nothing autoplays. */

const KEY_GLOCK_EMBED =
  'https://open.spotify.com/embed/artist/0RESbWvOMyua0yuyVrztJ5?utm_source=generator&theme=0';

export function GlockMode() {
  const [open, setOpen] = useState(false);
  const [voiceLive, setVoiceLive] = useState(false);

  useEffect(() => {
    const check = () => setVoiceLive(document.body.classList.contains('voice-live'));
    check();
    const mo = new MutationObserver(check);
    mo.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => mo.disconnect();
  }, []);

  if (voiceLive) return null;

  return (
    <>
      {/* The panel — official Spotify embed, mounted only while open */}
      {open && (
        <div className="fixed bottom-20 left-4 z-[55] w-[min(92vw,360px)] rounded-2xl overflow-hidden border border-primary/40 shadow-2xl shadow-primary/20 bg-background">
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
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-pressed={open}
        aria-label={open ? 'Close Glock Mode' : 'Open Glock Mode'}
        className="fixed bottom-4 left-4 z-[55] inline-flex items-center gap-2.5 h-12 px-5 rounded-full bg-primary text-black font-black uppercase tracking-[0.12em] text-xs shadow-2xl shadow-primary/30 hover:opacity-90 transition-opacity"
      >
        {open ? (
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
      `}</style>
    </>
  );
}
