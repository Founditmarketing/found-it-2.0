'use client';

import Script from 'next/script';
import { ShieldCheck } from 'lucide-react';
import { captureUTMs, buildFormSrc, createFormSubmitListener } from '@/lib/analytics';
import { useEffect, useState } from 'react';

interface LeadFormEmbedProps {
  /** GoHighLevel form embed URL */
  formSrc?: string;
  formId?: string;
  /** Source tag for attribution (e.g. 'lp_ai_marketing') */
  source?: string;
  /** Page slug for attribution (e.g. 'ai-marketing') */
  pageSlug?: string;
  /** Optional small heading rendered above the form */
  heading?: string;
  /** Optional privacy / anti-spam reassurance line under the form */
  privacyNote?: string;
  className?: string;
}

/**
 * Self-contained GoHighLevel form embed with UTM/source attribution,
 * conversion tracking, and a privacy reassurance line. Reusable in the
 * hero (split layout) and anywhere else a form is needed.
 */
export function LeadFormEmbed({
  formSrc = 'https://api.leadconnectorhq.com/widget/form/FXyD279qmIC0yUDrZfYz',
  formId = 'FXyD279qmIC0yUDrZfYz',
  source = 'lp_general',
  pageSlug = 'general',
  heading,
  privacyNote = 'Free & no obligation. We reply within 2 hours — and never sell your info.',
  className = '',
}: LeadFormEmbedProps) {
  const [iframeSrc, setIframeSrc] = useState(formSrc);

  useEffect(() => {
    captureUTMs();
    setIframeSrc(buildFormSrc(formSrc, source, pageSlug));

    const handleMessage = createFormSubmitListener(source);
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [formSrc, source, pageSlug]);

  return (
    <div className={className}>
      <div className="bg-card/10 backdrop-blur-2xl border border-border/20 rounded-[2rem] p-5 lg:p-8 shadow-2xl">
        {heading && (
          <h3 className="text-xl lg:text-2xl font-black uppercase italic tracking-tighter text-foreground mb-4 leading-tight">
            {heading}
          </h3>
        )}
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
          className="relative z-10 w-full min-h-[540px]"
        />
        <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
      </div>
      {privacyNote && (
        <p className="mt-4 flex items-center justify-center gap-2 text-xs text-faint font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-primary/70 shrink-0" aria-hidden="true" />
          {privacyNote}
        </p>
      )}
    </div>
  );
}
