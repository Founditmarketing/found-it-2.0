'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState, useCallback, useId } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  heading?: string;
  items: FAQItem[];
}

/* ─── Single accordion item ─── */
function FAQAccordion({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const uid = useId();
  const panelId = `faq-panel-${uid}`;
  const headingId = `faq-heading-${uid}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-border/10 last:border-0"
      role="listitem"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 lg:py-8 text-left group min-h-[56px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg px-2 -mx-2 cursor-pointer"
        aria-expanded={isOpen}
        aria-controls={panelId}
        id={headingId}
        type="button"
      >
        <h3 className="text-lg lg:text-xl font-black uppercase italic tracking-tighter text-foreground pr-4 group-hover:text-primary transition-colors duration-300">
          {item.question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-primary shrink-0 transition-transform duration-400 ease-liquid ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {/* ─── Answer panel ─── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
            id={panelId}
            role="region"
            aria-labelledby={headingId}
          >
            <div className="pb-6 lg:pb-8 px-2">
              <div className="border-l-[3px] border-primary/60 pl-5">
                <p
                  className="text-muted-foreground/90 font-medium leading-relaxed max-w-3xl"
                  style={{ fontSize: '16px', lineHeight: '1.75' }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── FAQ Section (single-open accordion) ─── */
export function FAQSection({
  heading = 'Frequently Asked Questions',
  items,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section className="relative py-20 lg:py-32" aria-label="Frequently Asked Questions" id="faq">
      <div className="max-w-[900px] mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-60">
            Questions?
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground">
            {heading}
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div
          className="bg-card/10 backdrop-blur-xl border border-border/20 rounded-[2rem] px-6 lg:px-10"
          role="list"
        >
          {items.map((item, i) => (
            <FAQAccordion
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
