'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { phoneHref, phoneDisplay, CALLRAIL_CLASS } from '@/lib/phone';
import { trackCallClick, trackCTAClick } from '@/lib/analytics';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface Msg { role: 'user' | 'assistant'; content: string }

const OPENERS = [
  'How much for a roofing company?',
  'Do I have to sign a contract?',
  'Can you get me showing up in ChatGPT?',
];

export function TrevorConcierge() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, busy]);

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
            className="fixed bottom-5 right-5 z-[150] inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-black uppercase italic tracking-tighter pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-primary/30 hover:scale-105 transition-transform"
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
            className="fixed bottom-4 right-4 left-4 sm:left-auto z-[151] sm:w-[400px] max-h-[78vh] flex flex-col bg-background/95 backdrop-blur-2xl border border-border/30 rounded-3xl shadow-2xl shadow-black/60 overflow-hidden"
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
              <a
                href={phoneHref}
                onClick={() => trackCallClick()}
                aria-label={`Call ${phoneDisplay}`}
                className={`w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-colors ${CALLRAIL_CLASS}`}
              >
                <Phone className="w-4 h-4 text-primary" />
              </a>
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
                      Hey, what can we figure out for your business? Pricing, timelines, whether this would even work for you. Straight answers, no pitch.
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
                <div className="flex items-center gap-2 text-muted-foreground/60 text-xs font-bold pl-1">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" /> thinking…
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => { e.preventDefault(); send(); }}
              className="flex items-center gap-2 p-3 border-t border-border/20"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything…"
                aria-label="Your question"
                className="flex-1 min-w-0 bg-card/30 border border-border/20 rounded-xl px-4 py-3 text-sm font-medium text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-primary/40 transition-colors"
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
