'use client';

/* ─── Try Owner Mode on this page ───
 * The article about Owner Mode proves itself: the reader edits the page
 * with plain-language commands. Four commands really change their local
 * copy of the page; the fifth is refused, because the structure is
 * protected. Every change is logged, every change is reversible, and
 * nothing ever leaves the reader's browser. No theater: this demo
 * speaks a small fixed vocabulary and says so out loud. */

import { useRef, useState } from 'react';

type LogEntry = { text: string; kind: 'done' | 'refused' };

const SUGGESTED = [
  'Make the headline less dramatic.',
  'Turn the orange blue.',
  'Add a banner that says 20% off through Friday.',
  'Make the introduction shorter.',
  'Delete the navigation.',
];

const BLUE = '#2F7BFF';
const ORANGE = '#FF5500';

export default function OwnerModeDemo() {
  const [input, setInput] = useState('');
  const [log, setLog] = useState<LogEntry[]>([]);
  const [touched, setTouched] = useState(false);
  const headline = useRef<string | null>(null);
  const recolored = useRef<{ el: HTMLElement; prop: 'color' | 'background'; old: string }[]>([]);
  const hidden = useRef<HTMLElement[]>([]);
  const banner = useRef<HTMLElement | null>(null);

  const body = () => document.getElementById('post-body');
  const push = (text: string, kind: LogEntry['kind']) => {
    setLog((l) => [...l, { text, kind }]);
    if (kind === 'done') setTouched(true);
  };

  const run = (raw: string) => {
    const c = raw.toLowerCase();
    const el = body();
    if (!el) return;

    if (/(nav|navigation|menu)/.test(c) && /(delete|remove|kill|hide)/.test(c)) {
      push('That is part of the protected structure. Owner Mode cannot change it.', 'refused');
      return;
    }
    if (/headline|title/.test(c)) {
      const h1 = document.querySelector('h1');
      if (h1) {
        if (headline.current === null) headline.current = h1.textContent;
        h1.textContent = 'The business had the truth.';
        push('Headline calmed down.', 'done');
      }
      return;
    }
    if (/orange|blue|color|colour/.test(c)) {
      if (recolored.current.length === 0) {
        el.querySelectorAll<HTMLElement>('[style]').forEach((n) => {
          const s = n.getAttribute('style') || '';
          if (/color:\s*#ff5500/i.test(s) && !/background/i.test(s)) {
            recolored.current.push({ el: n, prop: 'color', old: n.style.color });
            n.style.color = BLUE;
          }
          if (/background:\s*#ff5500/i.test(s)) {
            recolored.current.push({ el: n, prop: 'background', old: n.style.background });
            n.style.background = BLUE;
          }
        });
        push(`Accent turned blue. ${recolored.current.length} places, one command.`, 'done');
      } else {
        push('Already blue. Reset to go back.', 'done');
      }
      return;
    }
    if (/banner|sale|% off|20/.test(c)) {
      if (!banner.current) {
        const b = document.createElement('div');
        b.textContent = '20% OFF THROUGH FRIDAY';
        b.setAttribute(
          'style',
          `margin: 0 0 1.5em; padding: 14px 18px; border-radius: 12px; background: ${
            recolored.current.length ? BLUE : ORANGE
          }; color: #0A0A0A; font-weight: 800; letter-spacing: 0.08em; text-align: center;`,
        );
        el.prepend(b);
        banner.current = b;
        push('Banner is up.', 'done');
      } else {
        push('The banner is already up.', 'done');
      }
      return;
    }
    if (/intro|introduction|shorter|short/.test(c)) {
      if (hidden.current.length === 0) {
        const ps = el.querySelectorAll<HTMLElement>('p');
        for (let i = 1; i <= 3 && i < ps.length; i++) {
          hidden.current.push(ps[i]);
          ps[i].style.display = 'none';
        }
        push('Introduction trimmed. Your copy only.', 'done');
      } else {
        push('Already trimmed. Reset to bring it back.', 'done');
      }
      return;
    }
    push('Owner Mode on this page knows five commands. The real one is not so limited.', 'refused');
  };

  const reset = () => {
    const h1 = document.querySelector('h1');
    if (h1 && headline.current !== null) h1.textContent = headline.current;
    headline.current = null;
    recolored.current.forEach(({ el, prop, old }) => {
      if (prop === 'color') el.style.color = old;
      else el.style.background = old;
    });
    recolored.current = [];
    hidden.current.forEach((p) => (p.style.display = ''));
    hidden.current = [];
    banner.current?.remove();
    banner.current = null;
    setLog([]);
    setTouched(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 mb-14">
      <div className="border border-border/25 rounded-[1.75rem] bg-card/10 p-6 md:p-8">
        <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2">
          Try Owner Mode on this page
        </p>
        <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-4">
          Tell this article what to change. Four of these really change your local copy of the page.
          One is refused. That refusal is the whole idea.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) {
              run(input.trim());
              setInput('');
            }
          }}
          className="flex gap-2 mb-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a change..."
            className="flex-1 h-12 rounded-full bg-background/60 border border-border/30 px-5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50"
          />
          <button
            type="submit"
            className="px-6 h-12 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-wider text-xs hover:opacity-90 transition-opacity"
          >
            Change it
          </button>
        </form>
        <div className="flex flex-wrap gap-2 mb-1">
          {SUGGESTED.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => run(s)}
              className="text-xs font-semibold text-muted-foreground border border-border/30 rounded-full px-3.5 py-1.5 hover:border-primary/50 hover:text-foreground transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
        {log.length > 0 && (
          <div className="mt-4 border-t border-border/20 pt-4 space-y-1.5">
            {log.map((l, i) => (
              <p key={i} className="text-sm font-medium leading-snug">
                <span
                  className={`font-mono text-[10px] font-black uppercase tracking-[0.15em] mr-2 ${
                    l.kind === 'done' ? 'text-emerald-400' : 'text-amber-400'
                  }`}
                >
                  {l.kind === 'done' ? 'Changed' : 'Refused'}
                </span>
                {l.text}
              </p>
            ))}
            {touched && (
              <p className="pt-2 text-base font-black uppercase italic tracking-tight text-foreground">
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
          Changes live only in your browser, and this demo speaks a small vocabulary on purpose.
          The real Owner Mode speaks English and runs a business.
        </p>
      </div>
    </div>
  );
}
