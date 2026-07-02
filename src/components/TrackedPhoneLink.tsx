'use client';

import { phoneDisplay, phoneHref, CALLRAIL_CLASS } from '@/lib/phone';
import { trackCallClick } from '@/lib/analytics';
import { cn } from '@/lib/utils';

/**
 * Canonical click-to-call link: formatted display number, tel: href with
 * country code, CallRail DNI class, and GA4 call tracking. Use this anywhere
 * a phone number is shown so no page hand-rolls an untracked raw number.
 */
export function TrackedPhoneLink({ className }: { className?: string }) {
  return (
    <a
      href={phoneHref}
      onClick={() => trackCallClick()}
      className={cn('text-primary font-bold', CALLRAIL_CLASS, className)}
    >
      {phoneDisplay}
    </a>
  );
}
