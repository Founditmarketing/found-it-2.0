'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const ease = [0.16, 1, 0.3, 1] as const;

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  heading?: string;
  items: FAQItem[];
}

function FAQAccordion({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: ease as any }}
      className="border-b border-border/10 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 lg:py-8 text-left group"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg lg:text-xl font-black uppercase italic tracking-tighter text-foreground pr-4 group-hover:text-primary transition-colors duration-300">
          {item.question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: ease as any }}
            className="overflow-hidden"
          >
            <p className="pb-6 lg:pb-8 text-muted-foreground font-medium leading-relaxed max-w-3xl">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection({
  heading = 'Frequently Asked Questions',
  items,
}: FAQSectionProps) {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-[900px] mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: ease as any }}
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
        <div className="bg-card/10 backdrop-blur-xl border border-border/20 rounded-[2rem] px-6 lg:px-10">
          {items.map((item, i) => (
            <FAQAccordion key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
