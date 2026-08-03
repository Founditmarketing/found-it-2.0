'use client';

/* ─── SafePhone: the phone number, hidden from scrapers ───
   The number is NOT in the server-rendered HTML: it assembles client-side after
   mount from character codes, so email/phone harvesters reading raw HTML (or
   non-JS crawlers) find nothing to scrape. Humans see it ~instantly.
   Google still gets the real number the legitimate way — through the JSON-LD
   `telephone` field in site schema, which is how NAP/local SEO is fed on purpose. */

import { useEffect, useState, type ReactNode } from 'react';
import { phoneDisplay, phoneHref, CALLRAIL_CLASS } from '@/lib/phone';

// stored as char codes so the literal digits never appear in the JS-rendered markup source
const enc = (s: string) => s.split('').map((c) => c.charCodeAt(0));
const dec = (codes: number[]) => codes.map((c) => String.fromCharCode(c)).join('');
const DISPLAY = enc(phoneDisplay);
const HREF = enc(phoneHref);

export function SafePhone({
  className,
  children,
  onClick,
  ariaLabel,
}: {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const cls = [CALLRAIL_CLASS, className].filter(Boolean).join(' ');
  if (!ready) {
    // pre-mount placeholder keeps layout stable and gives bots nothing
    return <span className={cls} aria-hidden="true">{children ?? 'Call us'}</span>;
  }
  return (
    <a href={dec(HREF)} onClick={onClick} className={cls} aria-label={ariaLabel ?? `Call ${dec(DISPLAY)}`}>
      {children ?? dec(DISPLAY)}
    </a>
  );
}

/** Just the digits as text (no link) — same mount-gated hiding. */
export function SafePhoneText({ className }: { className?: string }) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  if (!ready) return <span className={className} aria-hidden="true">…</span>;
  return <span className={[CALLRAIL_CLASS, className].filter(Boolean).join(' ')}>{dec(DISPLAY)}</span>;
}
