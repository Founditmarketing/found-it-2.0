'use client';

import { SafePhone, SafePhoneText } from '@/components/landing/SafePhone';
import { trackCallClick } from '@/lib/analytics';
import { cn } from '@/lib/utils';

/**
 * Canonical click-to-call link: formatted display number, tel: href with
 * country code, CallRail DNI class, and GA4 call tracking. Use this anywhere
 * a phone number is shown so no page hand-rolls an untracked raw number.
 * Renders through SafePhone so the digits never appear in server HTML.
 */
export function TrackedPhoneLink({ className }: { className?: string }) {
  return (
    <SafePhone onClick={() => trackCallClick()} className={cn('text-primary font-bold', className)}>
      <SafePhoneText />
    </SafePhone>
  );
}
