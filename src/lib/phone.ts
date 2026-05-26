/* ─── Centralized Phone Utility ─── */
/* Reads from NEXT_PUBLIC_JOHN_PHONE, falls back to default.
   Provides formatted display and tel: link versions.
   All phone elements use className="callrail-phone" for CallRail DNI. */

const RAW_PHONE = process.env.NEXT_PUBLIC_JOHN_PHONE || '3375259650';

/** Strip to digits only */
export const phoneTel = RAW_PHONE.replace(/\D/g, '');

/** Ensure it has the US country code for mobile click-to-call */
const normalizedTel = phoneTel.length === 10 ? `1${phoneTel}` : phoneTel;

/** Formatted display: (XXX) XXX-XXXX */
export const phoneDisplay = phoneTel.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

/** tel: link href */
export const phoneHref = `tel:+${normalizedTel}`;

/** CallRail target class — add to every phone DOM element */
export const CALLRAIL_CLASS = 'callrail-phone';
