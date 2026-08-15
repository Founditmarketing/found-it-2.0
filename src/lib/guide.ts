/* ─── "What Do I Get?" lead-magnet guide ───
   Single source of truth for the gated PDF download funnel. The guide section
   on the LPs, the /lp/thanks confirmation page, and the print-source page
   (/lp/guide-print) all read from HERE so the funnel can never drift. */

/**
 * The deployed guide PDF.
 *
 * ASSET LAW: never regenerate a deployed public asset in place. When the guide
 * changes, edit /lp/guide-print, print a NEW file with a bumped version
 * (what-do-i-get-v2.pdf), drop it in public/downloads/, and update this ONE
 * constant. Old links in inboxes keep working; new leads get the new file.
 *
 * To regenerate (against a served build or prod):
 *   "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless
 *     --print-to-pdf="<repo>\public\downloads\what-do-i-get-v2.pdf"
 *     --no-pdf-header-footer --virtual-time-budget=15000
 *     http://localhost:3000/lp/guide-print
 */
// v2 (8/14): reprinted after the money-back guarantee was retired — the
// v1 file still promises it; old inbox links keep working on purpose.
export const GUIDE_PDF_PATH = '/downloads/what-do-i-get-v2.pdf';

/** Filename the visitor's browser saves — human-readable, not the cache-bust name. */
export const GUIDE_DOWNLOAD_NAME = 'What-Do-I-Get-Found-It-Software.pdf';

/** Guide title — appears on the gate, the PDF cover, and /lp/thanks. */
export const GUIDE_TITLE = 'What Do I Get?';

/**
 * Attribution prefix for guide downloads. The full tag sent to trackLead()
 * and /api/lead is `${GUIDE_SOURCE_PREFIX}_${page}` (e.g.
 * lp_guide_download_auto-shop) — distinct from the walkthrough/map-request
 * sources so guide leads are tellable at a glance in GA4 and the inbox.
 */
export const GUIDE_SOURCE_PREFIX = 'lp_guide_download';
