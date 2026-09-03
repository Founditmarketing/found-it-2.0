'use client';

/* ─── Try Owner Mode on this page ───
 * The article about Owner Mode proves itself, for real: the reader's
 * plain-English request goes to a live model (/api/ownermode) that
 * translates intention into a bounded set of safe page operations and
 * refuses the structural stuff. Changes touch only this browser's copy,
 * every one is logged, and Reset puts it all back. If the API is down
 * or rate-limited, a small local parser keeps the demo honest instead
 * of dead. No HTML ever crosses the wire: ops carry plain text and hex
 * colors, applied via textContent and inline styles only. */

import { useRef, useState } from 'react';

type LogEntry = { text: string; kind: 'done' | 'refused' | 'note' };
type Op = { op: string; color: string; text: string; scale: number };

const SUGGESTED = [
  'Make the headline braver.',
  'Turn the orange to forest green.',
  'Add a banner about free shipping through Friday.',
  'Make the text a little bigger.',
  'Delete the navigation.',
];

const ORANGE = '#FF5500';

export default function OwnerModeDemo() {
  const [input, setInput] = useState('');
  const [log, setLog] = useState<LogEntry[]>([]);
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const headline = useRef<string | null>(null);
  const accentNodes = useRef<{ el: HTMLElement; prop: 'color' | 'background'; old: string }[] | null>(null);
  const accent = useRef(ORANGE);
  const hidden = useRef<HTMLElement[]>([]);
  const banner = useRef<HTMLElement | null>(null);
  const scaled = useRef(false);
  const box = useRef<HTMLDivElement>(null);

  const body = () => document.getElementById('post-body');
  const calm = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  /* every change announces itself: the touched element glows for a beat */
  const pulse = (n: HTMLElement) => {
    if (calm()) return;
    n.animate(
      [{ filter: 'brightness(1.8)' }, { filter: 'brightness(1)' }],
      { duration: 750, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
    );
  };
  const shake = () => {
    if (calm() || !box.current) return;
    box.current.animate(
      [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-7px)' },
        { transform: 'translateX(6px)' },
        { transform: 'translateX(-4px)' },
        { transform: 'translateX(0)' },
      ],
      { duration: 420, easing: 'ease-out' },
    );
  };
  const push = (text: string, kind: LogEntry['kind']) => {
    setLog((l) => [...l, { text, kind }]);
    if (kind === 'done') setTouched(true);
  };

  /* Find every inline orange once; recolors after that re-paint the same nodes. */
  const collectAccent = (el: HTMLElement) => {
    if (accentNodes.current) return;
    accentNodes.current = [];
    el.querySelectorAll<HTMLElement>('[style]').forEach((n) => {
      const st = n.getAttribute('style') || '';
      if (/color:\s*#ff5500/i.test(st) && !/background/i.test(st)) {
        accentNodes.current!.push({ el: n, prop: 'color', old: n.style.color });
      }
      if (/background:\s*#ff5500/i.test(st)) {
        accentNodes.current!.push({ el: n, prop: 'background', old: n.style.background });
      }
    });
  };

  const apply = (a: Op) => {
    const el = body();
    if (!el) return;
    switch (a.op) {
      case 'setAccent': {
        collectAccent(el);
        accent.current = a.color;
        accentNodes.current!.forEach(({ el: n, prop }) => {
          n.style.transition = 'color 0.6s ease, background 0.6s ease';
          if (prop === 'color') n.style.color = a.color;
          else n.style.background = a.color;
          pulse(n);
        });
        if (banner.current) banner.current.style.background = a.color;
        push(
          a.color.toUpperCase() === ORANGE
            ? 'Accent back to orange, where it belongs.'
            : `Accent repainted, ${accentNodes.current!.length} places with one sentence.`,
          'done',
        );
        break;
      }
      case 'setHeadline': {
        const h1 = document.querySelector('h1');
        if (h1 && a.text) {
          if (headline.current === null) headline.current = h1.textContent;
          h1.textContent = a.text;
          h1.scrollIntoView({ behavior: calm() ? 'auto' : 'smooth', block: 'center' });
          if (!calm())
            h1.animate(
              [
                { transform: 'scale(0.96)', opacity: 0.4 },
                { transform: 'scale(1.03)', opacity: 1 },
                { transform: 'scale(1)' },
              ],
              { duration: 600, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
            );
          push('Headline rewritten. Look up.', 'done');
        }
        break;
      }
      case 'addBanner': {
        if (!banner.current) {
          const b = document.createElement('div');
          b.setAttribute(
            'style',
            'margin: 0 0 1.5em; padding: 14px 18px; border-radius: 12px; color: #0A0A0A; font-weight: 800; letter-spacing: 0.08em; text-align: center;',
          );
          el.prepend(b);
          banner.current = b;
        }
        banner.current.textContent = a.text || '20% OFF THROUGH FRIDAY';
        banner.current.style.background = accent.current;
        if (!calm())
          banner.current.animate(
            [
              { transform: 'translateY(-16px) scale(0.97)', opacity: 0 },
              { transform: 'none', opacity: 1 },
            ],
            { duration: 480, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
          );
        pulse(banner.current);
        push('Banner is up.', 'done');
        break;
      }
      case 'removeBanner': {
        if (banner.current) {
          banner.current.remove();
          banner.current = null;
          push('Banner is down.', 'done');
        }
        break;
      }
      case 'trimIntro': {
        if (hidden.current.length === 0) {
          const ps = el.querySelectorAll<HTMLElement>('p');
          for (let i = 1; i <= 3 && i < ps.length; i++) {
            hidden.current.push(ps[i]);
            ps[i].style.display = 'none';
          }
          push('Introduction trimmed. Your copy only.', 'done');
        }
        break;
      }
      case 'restoreIntro': {
        hidden.current.forEach((p) => (p.style.display = ''));
        hidden.current = [];
        push('Introduction restored.', 'done');
        break;
      }
      case 'textScale': {
        el.style.transition = 'font-size 0.45s ease';
        el.style.fontSize = `${a.scale}%`;
        scaled.current = a.scale !== 100;
        push(`Body text at ${a.scale} percent.`, 'done');
        break;
      }
      case 'say':
        if (a.text) push(a.text, 'note');
        break;
      case 'refuse':
        shake();
        push(a.text || 'That is part of the protected structure. Owner Mode cannot change it.', 'refused');
        break;
    }
  };

  /* The net under the wire: a tiny local parser so a rate limit or outage
     degrades to the five classics instead of a dead input. */
  const fallback = (raw: string) => {
    const c = raw.toLowerCase();
    if (/(nav|menu)/.test(c)) return apply({ op: 'refuse', color: '', text: '', scale: 100 });
    if (/headline|title/.test(c))
      return apply({ op: 'setHeadline', color: '', text: 'The business had the truth.', scale: 100 });
    if (/blue|green|color|colour|orange/.test(c))
      return apply({ op: 'setAccent', color: /green/.test(c) ? '#1F7A4D' : /orange/.test(c) ? ORANGE : '#2F7BFF', text: '', scale: 100 });
    if (/banner|sale|shipping|off/.test(c))
      return apply({ op: 'addBanner', color: '', text: 'FREE SHIPPING THROUGH FRIDAY', scale: 100 });
    if (/bigger|larger/.test(c)) return apply({ op: 'textScale', color: '', text: '', scale: 112 });
    if (/smaller/.test(c)) return apply({ op: 'textScale', color: '', text: '', scale: 92 });
    if (/intro|shorter/.test(c)) return apply({ op: 'trimIntro', color: '', text: '', scale: 100 });
    push('Owner Mode did not catch that one. Try one of the suggestions.', 'note');
  };

  const run = async (raw: string) => {
    if (busy) return;
    setBusy(true);
    try {
      const res = await fetch('/api/ownermode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command: raw }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const data: { actions: Op[] } = await res.json();
      if (!data.actions?.length) fallback(raw);
      else data.actions.forEach(apply);
    } catch {
      fallback(raw);
    } finally {
      setBusy(false);
    }
  };

  const reset = () => {
    const h1 = document.querySelector('h1');
    if (h1 && headline.current !== null) h1.textContent = headline.current;
    headline.current = null;
    accentNodes.current?.forEach(({ el, prop, old }) => {
      if (prop === 'color') el.style.color = old;
      else el.style.background = old;
    });
    accentNodes.current = null;
    accent.current = ORANGE;
    hidden.current.forEach((p) => (p.style.display = ''));
    hidden.current = [];
    banner.current?.remove();
    banner.current = null;
    const el = body();
    if (el && scaled.current) el.style.fontSize = '';
    scaled.current = false;
    setLog([]);
    setTouched(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 mb-14">
      <div ref={box} className="border border-border/25 rounded-[1.75rem] bg-card/10 p-5 md:p-8">
        <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2">
          Try Owner Mode on this page
        </p>
        <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-4">
          This article edits itself when you ask. <span className="text-foreground font-bold">Tap an example below</span> and watch the page change. The last one gets refused on purpose.
        </p>
        <p className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground mb-2">Tap one to try it</p>
        <div className="grid grid-cols-1 gap-1.5 sm:flex sm:flex-wrap sm:gap-2 mb-1 pr-10 sm:pr-0">
          {SUGGESTED.map((s) => (
            <button
              key={s}
              type="button"
              disabled={busy}
              onClick={() => run(s)}
              className="text-left text-[13px] sm:text-xs font-semibold text-muted-foreground border border-border/30 rounded-2xl sm:rounded-full px-4 py-2.5 sm:px-3.5 sm:py-1.5 hover:border-primary/50 hover:text-foreground transition-colors disabled:opacity-60"
            >
              <span className="text-primary font-black mr-1.5" aria-hidden>&rsaquo;</span>
              {s}
            </button>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim() && !busy) {
              run(input.trim());
              setInput('');
            }
          }}
          className="flex flex-col sm:flex-row gap-2 mt-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={busy ? 'Owner Mode is working...' : 'Or type your own change...'}
            disabled={busy}
            className="flex-1 h-12 w-full rounded-full bg-background/60 border border-border/30 px-5 text-base sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={busy}
            className="px-6 h-12 w-full sm:w-auto whitespace-nowrap rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-xs hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {busy ? '...' : 'Change it'}
          </button>
        </form>
        {log.length > 0 && (
          <div className="mt-4 border-t border-border/20 pt-4 space-y-1.5">
            {log.map((l, i) => (
              <p key={i} className="text-sm font-medium leading-snug">
                <span
                  className={`font-mono text-[10px] font-black uppercase tracking-[0.15em] mr-2 ${
                    l.kind === 'done' ? 'text-emerald-400' : l.kind === 'refused' ? 'text-amber-400' : 'text-sky-400'
                  }`}
                >
                  {l.kind === 'done' ? 'Changed' : l.kind === 'refused' ? 'Refused' : 'Owner Mode'}
                </span>
                {l.text}
              </p>
            ))}
            {touched && (
              <p className="pt-3 text-lg md:text-xl font-black uppercase italic tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-2 duration-500">
                You changed the page. <span className="text-primary">You never touched the website.</span>
              </p>
            )}
            <button
              type="button"
              onClick={reset}
              className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
            >
              Reset the page →
            </button>
          </div>
        )}
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground/70 leading-relaxed">
          A live AI on a short leash: it restyles this page and nothing else, only in your browser.
          The real Owner Mode runs a business.
        </p>
      </div>
    </div>
  );
}
