'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Download, FileText } from 'lucide-react';
import { trackGuideCTAClick } from '@/lib/analytics';
import { GUIDE_PDF_PATH, GUIDE_DOWNLOAD_NAME, GUIDE_TITLE } from '@/lib/guide';
import { OS_PRICING } from '@/lib/site';

const ease = [0.16, 1, 0.3, 1] as const;

interface GuideDownloadSectionProps {
  /** LP slug for attribution, e.g. 'auto-shop' — becomes part of the click tag. */
  page: string;
  /** Full tag override for non-LP surfaces (e.g. 'guide_page' on /guide). */
  source?: string;
}

/**
 * The "What Do I Get?" guide — UNGATED (Trevor, 8/28: "actually give it to
 * them... don't make them put info in"). No form, no email, no lead capture.
 * The button hands over the PDF; the click is counted (trackGuideCTAClick)
 * and nothing else is asked. The old gated form and its /api/lead post are
 * gone on purpose — never re-add a field in front of this file.
 */
export function GuideDownloadSection({ page, source: sourceOverride }: GuideDownloadSectionProps) {
  const source = sourceOverride ?? `guide_download_${page}`;

  return (
    // lp-guide: light-ask anchor — deliberately NOT #lp-form (the hero owns it).
    <section id="lp-guide" className="relative py-16 lg:py-24 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: ease as any }}
          className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >
          {/* Left — what's inside */}
          <div className="lg:col-span-6">
            <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-80">
              Free Guide · PDF
            </p>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.88] mb-5 text-foreground">
              Not Ready To Book? <span className="text-primary">Take The Guide.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium italic mb-8 leading-relaxed">
              &ldquo;{GUIDE_TITLE}&rdquo; is four pages, plain English, zero tech specs. Read it in
              two minutes. Hand it to your business partner.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'What one custom system replaces, and who already runs on one',
                'The stack you rent every month vs. one flat public price',
                'How a fitting works: free walkthrough → runs beside your old system → you own it',
                `The promise it's all built on: “${OS_PRICING.promise}”`,
              ].map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.6, ease: ease as any }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground font-bold text-sm">{line}</p>
                </motion.div>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 bg-card/20 border border-border/20 rounded-full px-4 py-2">
              <FileText className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                PDF · 4 pages · 2-minute read
              </span>
            </div>
          </div>

          {/* Right — no gate. The button IS the delivery. */}
          <div className="lg:col-span-6">
            <div className="bg-card/15 backdrop-blur-xl border border-border/20 rounded-2xl p-8 lg:p-10 text-center">
              <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-5 border border-primary/20">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl lg:text-2xl font-black uppercase italic tracking-tighter text-foreground mb-2 leading-tight">
                &ldquo;{GUIDE_TITLE}&rdquo;
              </h3>
              <p className="text-sm text-muted-foreground font-medium mb-7">
                No form. No email. It&apos;s free, so here it is.
              </p>
              <a
                href={GUIDE_PDF_PATH}
                download={GUIDE_DOWNLOAD_NAME}
                onClick={() => trackGuideCTAClick(source)}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black uppercase italic tracking-tighter text-base py-4 rounded-xl hover:opacity-90 active:scale-[0.99] transition-all shadow-lg shadow-primary/20"
              >
                <Download className="w-4 h-4" aria-hidden="true" /> Download The Guide
              </a>
              <a
                href={GUIDE_PDF_PATH}
                target="_blank"
                rel="noopener"
                onClick={() => trackGuideCTAClick(`${source}_view`)}
                className="mt-4 inline-block text-xs text-primary font-bold hover:underline"
              >
                Or read it right here in your browser →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
