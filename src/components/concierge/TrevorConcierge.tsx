'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { phoneDisplay } from '@/lib/phone';
import { SafePhoneText } from '@/components/landing/SafePhone';
import { trackCTAClick, trackLead } from '@/lib/analytics';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface Msg { role: 'user' | 'assistant'; content: string }

const OPENERS = [
  'How much for a roofing company?',
  'Do I have to sign a contract?',
  'Can you get me showing up in ChatGPT?',
];

/** How many user messages before we offer to capture contact info. */
const LEAD_OFFER_AFTER = 3;

/** Builds a short transcript summary for the lead email (user questions only). */
function transcriptSummary(messages: Msg[]): string {
  const questions = messages
    .filter((m) => m.role === 'user')
    .slice(0, 8)
    .map((m) => `- ${m.content.slice(0, 160)}`);
  return `Asked in chat:\n${questions.join('\n')}`.slice(0, 3900);
}

/** Inline name + phone/email capture shown after a few real questions. */
function LeadCapture({ messages, onDone }: { messages: Msg[]; onDone: () => void }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');

  const submit = async () => {
    const value = contact.trim();
    if (!value || status === 'sending') return;
    setStatus('sending');
    // Classify strictly — the API rejects malformed emails and >40-char phones.
    // Anything that is neither rides along in the message instead of 400ing.
    const isEmail = /^\S+@\S+\.\S{2,}$/.test(value);
    const isPhone = !isEmail && /^[\d\s()+.-]{7,40}$/.test(value);
    const summary = transcriptSummary(messages);
    const message = isEmail || isPhone
      ? summary
      : `Reach me at: ${value.slice(0, 200)}\n${summary}`.slice(0, 3900);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          source: 'concierge-chat',
          name: name.trim() || undefined,
          email: isEmail ? value : undefined,
          phone: isPhone ? value : undefined,
          message,
        }),
      });
      if (!res.ok) throw new Error();
      trackLead('concierge_chat');
      onDone();
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-primary/[0.07] border border-primary/25 rounded-2xl rounded-tl-md px-4 py-3.5 max-w-[92%] space-y-2.5">
      <p className="text-sm text-foreground font-medium leading-relaxed">
        Want Trevor to look at this himself? Drop your name and the best way to reach you. He follows up personally.
      </p>
      <form
        onSubmit={(e) => { e.preventDefault(); submit(); }}
        className="space-y-2"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          aria-label="Your name"
          autoComplete="name"
          className="w-full bg-card/40 border border-border/25 rounded-xl px-3.5 py-2.5 text-base md:text-sm font-medium text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/40 transition-colors"
        />
        <div className="flex items-center gap-2">
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Phone or email"
            aria-label="Phone number or email address"
            autoComplete="tel"
            maxLength={80}
            className="flex-1 min-w-0 bg-card/40 border border-border/25 rounded-xl px-3.5 py-2.5 text-base md:text-sm font-medium text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/40 transition-colors"
          />
          <button
            type="submit"
            disabled={status === 'sending' || !contact.trim()}
            className="shrink-0 inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-black uppercase italic tracking-tighter px-4 py-2.5 rounded-xl text-xs disabled:opacity-40 hover:shadow-lg hover:shadow-primary/25 transition-shadow"
          >
            {status === 'sending' ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : 'Send'}
          </button>
        </div>
      </form>
      {status === 'error' && (
        <p role="alert" className="text-[11px] font-bold text-red-400">
          Could not send. Call <SafePhoneText /> instead.
        </p>
      )}
      <p className="text-[11px] text-faint font-medium">
        Rather talk now?{' '}
        <Link href="/contact" onClick={() => trackCTAClick('concierge_book_call')} className="text-primary font-bold hover:underline">
          Book a call →
        </Link>
      </p>
    </div>
  );
}

export function TrevorConcierge() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [leadState, setLeadState] = useState<'pending' | 'captured'>('pending');
  // One-way latch: once the offer appears it must STAY MOUNTED — gating on
  // `busy` unmounted the card (wiping half-typed contact info) every time the
  // user sent another message.
  const [offerLatched, setOfferLatched] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus the input on open, but only where focusing doesn't shove a software
  // keyboard over the panel (phones get tap-to-focus instead).
  useEffect(() => {
    if (open && window.matchMedia('(hover: hover)').matches) inputRef.current?.focus();
  }, [open]);

  const userCount = messages.filter((m) => m.role === 'user').length;
  useEffect(() => {
    if (userCount >= LEAD_OFFER_AFTER) setOfferLatched(true);
  }, [userCount]);
  const showLeadCapture = leadState === 'pending' && offerLatched;

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, busy, showLeadCapture, leadState]);

  const send = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || busy) return;
    setInput('');
    const next: Msg[] = [...messages, { role: 'user', content }];
    setMessages(next);
    setBusy(true);
    try {
      const res = await fetch('/api/concierge', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.ok || !res.body) throw new Error('bad response');

      setMessages((m) => [...m, { role: 'assistant', content: '' }]);
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = '';
      // stream tokens into the last message
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: 'assistant', content: acc };
          return copy;
        });
      }
      // A stream that ends with nothing (upstream filter, dropped connection)
      // would otherwise leave a "…" bubble sitting there forever.
      if (!acc.trim()) {
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = {
            role: 'assistant',
            content: `Good one. That's better answered on a quick call — Trevor's at ${phoneDisplay}.`,
          };
          return copy;
        });
      }
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content: `Having trouble connecting right now. The fastest answer is always Trevor himself: ${phoneDisplay}.`,
        },
      ]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      {/* Launcher */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="launcher"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.4, ease, delay: 1.2 }}
            onClick={() => { setOpen(true); trackCTAClick('concierge_open'); }}
            aria-label="Ask Trevor a question"
            // z-40 keeps the launcher below the header (z-50) and the mobile menu overlay/panel
            // (z-[160]/z-[161]) so it can't intercept taps when the menu is open.
            className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-black uppercase italic tracking-tighter pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-primary/30 hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm hidden sm:block">Ask Trevor</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.97 }}
            transition={{ duration: 0.35, ease }}
            role="dialog"
            aria-label="Ask Trevor"
            className="fixed bottom-4 right-4 left-4 sm:left-auto z-40 sm:w-[400px] max-h-[78vh] flex flex-col bg-background/95 backdrop-blur-2xl border border-border/30 rounded-3xl shadow-2xl shadow-black/60 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border/20 bg-gradient-to-r from-primary/[0.08] to-transparent">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-primary/30 shrink-0">
                <Image src="/trevorruby.jpeg" alt="Trevor Ruby" fill className="object-cover" sizes="40px" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-black uppercase italic tracking-tighter text-foreground leading-none">Ask Trevor</p>
                <p className="text-[10px] text-muted-foreground font-medium mt-1">Instant answers. Real human on the phone.</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-[220px]">
              {messages.length === 0 && (
                <div className="space-y-3">
                  <div className="bg-card/40 border border-border/20 rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-foreground font-medium leading-relaxed">
                      Hey, what can we figure out for your business? Pricing, timelines, what Trevor would build for your shop. Straight answers.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {OPENERS.map((q) => (
                      <button
                        key={q}
                        onClick={() => send(q)}
                        className="text-xs font-bold text-primary border border-primary/25 bg-primary/5 hover:bg-primary/15 rounded-full px-3.5 py-2 transition-colors text-left"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m, i) => (
                <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                  <div
                    className={
                      m.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-2xl rounded-tr-md px-4 py-3 max-w-[85%]'
                        : 'bg-card/40 border border-border/20 rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%]'
                    }
                  >
                    <p className={`text-sm font-medium leading-relaxed whitespace-pre-wrap ${m.role === 'user' ? '' : 'text-foreground'}`}>
                      {m.content || '…'}
                    </p>
                  </div>
                </div>
              ))}

              {busy && messages[messages.length - 1]?.role === 'user' && (
                <div className="flex items-center gap-2 text-faint text-xs font-bold pl-1">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" /> thinking…
                </div>
              )}

              {showLeadCapture && (
                <div className="flex justify-start">
                  <LeadCapture messages={messages} onDone={() => setLeadState('captured')} />
                </div>
              )}

              {leadState === 'captured' && (
                <div className="flex justify-start" role="status">
                  <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%]">
                    <Check className="w-4 h-4 text-green-500 shrink-0" aria-hidden="true" />
                    <p className="text-sm font-bold text-green-400">Got it. Trevor will reach out personally.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => { e.preventDefault(); send(); }}
              className="flex items-center gap-2 p-3 border-t border-border/20"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything…"
                aria-label="Your question"
                className="flex-1 min-w-0 bg-card/30 border border-border/20 rounded-xl px-4 py-3 text-base md:text-sm font-medium text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/40 transition-colors"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                aria-label="Send"
                className="w-11 h-11 shrink-0 rounded-xl bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-40 hover:shadow-lg hover:shadow-primary/25 transition-shadow"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
