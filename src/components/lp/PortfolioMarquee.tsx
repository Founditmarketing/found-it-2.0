'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ─── Portfolio Data ─── */

export interface PortfolioItem {
  name: string;
  vertical: string;
  description: string;
  results: string[];
  url?: string;
}

export const defaultPortfolioItems: PortfolioItem[] = [
  {
    name: 'Spurgeon Law',
    vertical: 'LAW',
    description: 'Full-service criminal defense firm. Custom site with intake form integration and case results showcase.',
    results: ['3x qualified intake calls', '2.1s avg. load time', '94 Lighthouse score'],
  },
  {
    name: 'Henly Homes',
    vertical: 'LUXURY',
    description: 'Custom luxury home builder. Portfolio-driven design with virtual tour integration and financing calculator.',
    results: ['180% more consultation requests', '1.8s avg. load time', '96 Lighthouse score'],
  },
  {
    name: 'Leonard Truck & Trailer',
    vertical: 'INDUSTRIAL',
    description: 'Heavy equipment dealership. Inventory management system with real-time stock updates and financing pre-qualification.',
    results: ['4.2x organic traffic growth', '220+ inventory items live', 'Custom CRM integration'],
  },
  {
    name: 'Orlando Lifestyle Dentistry',
    vertical: 'MEDICAL',
    description: 'Cosmetic & family dentistry practice. Patient-first design with online booking and procedure galleries.',
    results: ['67% increase in new patients', '2.3s avg. load time', 'HIPAA-compliant forms'],
  },
  {
    name: 'JLS Landscaping',
    vertical: 'CONTRACTOR',
    description: 'Premium residential landscaping. Visual portfolio with before/after galleries and instant quote calculator.',
    results: ['89% increase in quote requests', 'Mobile-first design', 'Google Maps integration'],
  },
  {
    name: 'Last Wild River Resort',
    vertical: 'HOSPITALITY',
    description: 'Luxury fly-fishing resort. Immersive booking experience with seasonal availability and photo galleries.',
    results: ['42% boost in direct bookings', 'Booking engine integration', '98 Lighthouse score'],
  },
  {
    name: 'Trident Dermatology',
    vertical: 'MEDICAL',
    description: 'Multi-location dermatology practice. Provider profiles, condition library, and online scheduling integration.',
    results: ['3.8x online appointment bookings', 'Multi-location SEO', 'Patient portal integration'],
  },
  {
    name: 'SouthHouse CPA',
    vertical: 'PROFESSIONAL',
    description: 'Regional accounting firm. Client portal, tax resource center, and consultation scheduling.',
    results: ['200% increase in web leads', 'Secure client portal', '2.0s avg. load time'],
  },
  {
    name: 'Lamar National Bank',
    vertical: 'FINANCE',
    description: 'Community bank serving Central Louisiana. ADA-compliant rebuild with rate calculators and branch locator.',
    results: ['ADA WCAG 2.1 AA compliant', '1.9s avg. load time', 'Branch locator with directions'],
  },
  {
    name: 'Magnolia State Construction',
    vertical: 'CONTRACTOR',
    description: 'Commercial general contractor. Project portfolio with interactive timelines and RFQ submission system.',
    results: ['5x increase in qualified RFQs', 'Project timeline viewer', '95 Lighthouse score'],
  },
];

/* ─── Vertical Badge Colors ─── */
const verticalColors: Record<string, string> = {
  LAW: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  LUXURY: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  INDUSTRIAL: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
  MEDICAL: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  CONTRACTOR: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  HOSPITALITY: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
  PROFESSIONAL: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
  FINANCE: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
};

/* ─── Gradient Placeholders ─── */
const gradients = [
  'from-amber-900/80 via-yellow-800/50 to-amber-700/30',
  'from-slate-800/80 via-zinc-700/50 to-stone-600/30',
  'from-red-900/70 via-orange-800/50 to-amber-700/30',
  'from-emerald-900/70 via-teal-800/50 to-green-700/30',
  'from-orange-900/70 via-amber-800/50 to-yellow-700/30',
  'from-sky-900/70 via-blue-800/50 to-cyan-700/30',
  'from-teal-900/70 via-emerald-800/50 to-green-700/30',
  'from-indigo-900/70 via-violet-800/50 to-purple-700/30',
  'from-cyan-900/70 via-teal-800/50 to-emerald-700/30',
  'from-amber-900/70 via-orange-800/50 to-red-700/30',
];

/* ─── Portfolio Card ─── */
function PortfolioCard({
  item,
  index,
  onClick,
}: {
  item: PortfolioItem;
  index: number;
  onClick: () => void;
}) {
  const gradient = gradients[index % gradients.length];
  const badgeColor = verticalColors[item.vertical] || 'bg-white/10 text-white/60 border-white/20';

  return (
    <button
      onClick={onClick}
      className="group flex-shrink-0 w-[280px] sm:w-[320px] rounded-2xl overflow-hidden border border-border/20 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 text-left cursor-pointer bg-card/10 backdrop-blur-sm"
    >
      {/* Thumbnail */}
      <div className={`relative h-[180px] sm:h-[200px] bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
        <span className="relative z-10 text-xl sm:text-2xl font-black text-white/90 italic tracking-tighter text-center px-4 drop-shadow-lg">
          {item.name}
        </span>
        {/* Vertical badge */}
        <span className={`absolute top-3 right-3 text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border ${badgeColor}`}>
          {item.vertical}
        </span>
      </div>
      {/* Footer */}
      <div className="p-4 flex items-center justify-between">
        <span className="text-sm font-bold text-foreground truncate">{item.name}</span>
        <span className="text-xs text-primary font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
          View details <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
    </button>
  );
}

/* ─── Case Study Modal ─── */
function CaseStudyModal({
  item,
  index,
  onClose,
}: {
  item: PortfolioItem;
  index: number;
  onClose: () => void;
}) {
  const gradient = gradients[index % gradients.length];
  const badgeColor = verticalColors[item.vertical] || 'bg-white/10 text-white/60 border-white/20';

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease }}
        className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-[101] w-auto sm:w-full sm:max-w-xl bg-background border border-border/30 rounded-[2rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        {/* Header image */}
        <div className={`relative h-48 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
          <div className="absolute inset-0 bg-black/20" />
          <span className="relative z-10 text-3xl font-black text-white italic tracking-tighter drop-shadow-lg">
            {item.name}
          </span>
          <span className={`absolute top-4 right-4 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${badgeColor}`}>
            {item.vertical}
          </span>
          <button
            onClick={onClose}
            className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-muted-foreground font-medium leading-relaxed">
            {item.description}
          </p>

          {/* Results */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary/60 mb-4">
              Key Results
            </h4>
            <div className="space-y-3">
              {item.results.map((result, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-primary/5 border border-primary/10 rounded-xl px-4 py-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-sm font-bold text-foreground">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-black uppercase italic tracking-tighter py-4 rounded-xl text-sm hover:shadow-lg hover:shadow-primary/20 transition-shadow"
            >
              Visit Live Site <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </motion.div>
    </>
  );
}

/* ─── Marquee Component ─── */

interface PortfolioMarqueeProps {
  items?: PortfolioItem[];
  heading?: string;
}

export function PortfolioMarquee({
  items = defaultPortfolioItems,
  heading = 'Portfolio',
}: PortfolioMarqueeProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Heading */}
      <div className="max-w-[1440px] mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
          <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-3 opacity-60">
            Our Work
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] text-foreground">
            {heading}
          </h2>
        </motion.div>
      </div>

      {/* Marquee Track */}
      <div className="relative group">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex gap-6 marquee-track"
        >
          {/* Render items twice for seamless loop */}
          {[...items, ...items].map((item, i) => (
            <PortfolioCard
              key={`${item.name}-${i}`}
              item={item}
              index={i % items.length}
              onClick={() => setSelectedIndex(i % items.length)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <CaseStudyModal
            item={items[selectedIndex]}
            index={selectedIndex}
            onClose={() => setSelectedIndex(null)}
          />
        )}
      </AnimatePresence>

      {/* Marquee CSS */}
      <style jsx global>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 60s linear infinite;
          width: max-content;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </section>
  );
}
