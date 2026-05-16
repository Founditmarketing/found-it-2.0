'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';
import { CheckCircle2, Phone } from 'lucide-react';
import { trackCallClick, captureUTMs, buildFormSrc, createFormSubmitListener } from '@/lib/analytics';
import { phoneHref, phoneDisplay, CALLRAIL_CLASS } from '@/lib/phone';
import { useEffect, useState } from 'react';

const ease = [0.16, 1, 0.3, 1] as const;

interface LPFormSectionProps {
  heading?: string;
  subheading?: string;
  benefits?: string[];
  /** GoHighLevel form embed URL */
  formSrc?: string;
  formId?: string;
  /** Source tag for attribution (e.g. 'lp_google_ads') */
  source?: string;
  /** Page slug for attribution (e.g. 'google-ads-management') */
  pageSlug?: string;
}

export function LPFormSection({
  heading = 'Get Your Free Growth Strategy',
  subheading = "Tell us about your business and we'll deliver a custom growth plan within 24 hours.",
  benefits = [
    'Full competitive analysis',
    'Custom strategy roadmap',
    'Zero obligation — keep the plan either way',
  ],
  formSrc = 'https://api.leadconnectorhq.com/widget/form/FXyD279qmIC0yUDrZfYz',
  formId = 'FXyD279qmIC0yUDrZfYz',
  source = 'lp_general',
  pageSlug = 'general',
}: LPFormSectionProps) {
  const [iframeSrc, setIframeSrc] = useState(formSrc);

  useEffect(() => {
    // Capture UTMs on first load
    captureUTMs();
    // Build attributed form URL with source + UTMs
    setIframeSrc(buildFormSrc(formSrc, source, pageSlug));

    // LeadConnector postMessage listener for conversion tracking
    const handleMessage = createFormSubmitListener(source);
    window.addEventListener('message', handleMessage);

    // Debug: log all iframe messages during development
    if (process.env.NODE_ENV === 'development') {
      const debugHandler = (e: MessageEvent) => {
        const origins = ['leadconnectorhq.com', 'msgsndr.com'];
        if (origins.some(o => (e.origin || '').includes(o))) {
          console.log('[Found It] iframe message:', e.origin, e.data);
        }
      };
      window.addEventListener('message', debugHandler);
      return () => {
        window.removeEventListener('message', handleMessage);
        window.removeEventListener('message', debugHandler);
      };
    }

    return () => window.removeEventListener('message', handleMessage);
  }, [formSrc, source, pageSlug]);

  return (
    <section id="lp-form" className="relative py-20 lg:py-32 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: ease as any }}
          className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start"
        >
          {/* Left — Copy & Benefits */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="text-primary font-mono text-xs font-black uppercase tracking-[0.4em] mb-4 opacity-60">
              Free Strategy Session
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.85] mb-6 text-foreground">
              {heading}
            </h2>
            <p className="text-lg text-muted-foreground font-medium italic mb-10 leading-relaxed">
              {subheading}
            </p>

            {/* Benefits */}
            <div className="space-y-5 mb-10">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: ease as any }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground font-bold text-sm">{benefit}</p>
                </motion.div>
              ))}
            </div>

            {/* Phone fallback */}
            <div className="bg-card/20 backdrop-blur-xl border border-border/20 rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/60 font-black mb-3">
                Prefer to talk?
              </p>
              <a
                href={phoneHref}
                onClick={() => trackCallClick()}
                className={`flex items-center gap-4 text-foreground hover:text-primary transition-colors group ${CALLRAIL_CLASS}`}
              >
                <span className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </span>
                <span className="text-2xl font-black italic tracking-tighter">
                  {phoneDisplay}
                </span>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-7">
            <div className="bg-card/10 backdrop-blur-2xl border border-border/20 rounded-[2rem] p-6 lg:p-10 shadow-2xl">
              <iframe
                src={iframeSrc}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '4px',
                  backgroundColor: 'transparent',
                }}
                id={`inline-${formId}`}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="LP Lead Form"
                data-height="586"
                data-layout-iframe-id={`inline-${formId}`}
                data-form-id={formId}
                title="Lead Capture Form"
                className="relative z-10 w-full min-h-[586px]"
              />
              <Script
                src="https://link.msgsndr.com/js/form_embed.js"
                strategy="lazyOnload"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
