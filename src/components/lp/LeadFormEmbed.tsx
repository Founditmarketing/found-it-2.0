'use client';

import { NativeLeadForm } from '@/components/forms/NativeLeadForm';

interface LeadFormEmbedProps {
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
 * Inline lead form used by the service pillars, industry pages, and LP heroes.
 *
 * Was a GoHighLevel iframe embed; now renders our own NativeLeadForm posting to
 * /api/lead, so leads land in a pipe we own. The prop signature is unchanged so
 * every existing call site keeps working; the old formSrc/formId props are gone
 * because there is no third-party form to point at anymore.
 */
export function LeadFormEmbed({
  source = 'lp_general',
  pageSlug = 'general',
  heading,
  privacyNote = 'Free & no obligation. We reply within 2 hours — and never sell your info.',
  className = '',
}: LeadFormEmbedProps) {
  return (
    <NativeLeadForm
      source={source}
      pageSlug={pageSlug}
      heading={heading}
      privacyNote={privacyNote}
      showBusiness
      className={className}
    />
  );
}
