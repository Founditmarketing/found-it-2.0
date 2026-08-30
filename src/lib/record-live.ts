/* ─── THE RECORD — live strips, read at render time ───
 *
 * Server-only. Each strip reads a system's record_nights table directly
 * (read-only credentials, aggregates only) and obeys the page's own laws:
 * a strip renders ONLY when its newest row is current (a stale Record is
 * refused, not shown as if fresh), the streak breaks on a missing night,
 * and any failure — env unset, database unreachable — renders NOTHING
 * rather than a guess. The first strip is Found It's own books: our name
 * goes on the page first, and our counter starts where every counter
 * starts. Client strips join one blessing at a time.
 */
import { neon } from "@neondatabase/serverless";

export type LiveRecord = {
  name: string;
  descriptor: string;
  streak: number;
  nights: { date: string; status: "green" | "red" }[];
  entries: number;
  discrepancies: number;
  lastNight: string;
  lastRanAt: string;
};

type Row = {
  night_date: string;
  status: "green" | "red";
  discrepancies: unknown[];
  orders_billed: number;
  ran_at: string;
};

/** 'YYYY-MM-DD' minus one calendar day, DST-proof (noon-UTC anchor). */
function prevDay(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  const t = new Date(Date.UTC(y, m - 1, d, 12));
  t.setUTCDate(t.getUTCDate() - 1);
  return t.toISOString().slice(0, 10);
}

function chicagoToday(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Chicago", year: "numeric", month: "2-digit", day: "2-digit",
  }).format(new Date());
}

/** Consecutive green nights, newest first; a hole ends the streak. */
function greenStreak(nights: { date: string; status: string }[]): number {
  let streak = 0;
  let expected: string | null = null;
  for (const n of nights) {
    if (n.status !== "green") break;
    if (expected !== null && n.date !== expected) break;
    streak += 1;
    expected = prevDay(n.date);
  }
  return streak;
}

/** Found It's own books. Returns null unless the Record is present AND
 *  current — the page never renders a stale or unreachable Record. */
export async function founditRecord(): Promise<LiveRecord | null> {
  const url = process.env.FOUNDIT_BOOKS_DATABASE_URL;
  if (!url) return null;
  try {
    const sql = neon(url);
    const rows = (await sql`
      select night_date::text, status, discrepancies, orders_billed, ran_at::text
        from record_nights
       order by night_date desc
       limit 90`) as Row[];
    const first = rows[0];
    if (!first) return null;

    // Freshness: the newest certified night must be yesterday or today
    // (a run can land late in the day and still certify the same night).
    const today = chicagoToday();
    if (first.night_date !== prevDay(today) && first.night_date !== today) return null;

    const nights = rows.map((r) => ({ date: r.night_date, status: r.status }));
    return {
      name: "Found It Software",
      descriptor: "Our own books · Alexandria, Louisiana",
      streak: greenStreak(nights),
      nights,
      entries: Number(first.orders_billed),
      discrepancies: Array.isArray(first.discrepancies) ? first.discrepancies.length : 0,
      lastNight: first.night_date,
      lastRanAt: first.ran_at,
    };
  } catch (err) {
    console.error("[record-live] foundit read failed:", err instanceof Error ? err.message : String(err));
    return null;
  }
}
