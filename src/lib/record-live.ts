/* ─── THE RECORD — live strips, read at render time ───
 *
 * Server-only. Each strip reads a system's nightly Record (Found It's own
 * directly from its ledger database; clients via their system's key-gated
 * /api/record door) and obeys the page's own laws: a strip renders ONLY
 * when its newest row is current (a stale Record is refused, not shown as
 * if fresh), the streak breaks on a missing night, and any failure — env
 * unset, endpoint unreachable — renders NOTHING rather than a guess.
 *
 * CLIENT STRIPS ARE BLESSING-GATED: a client appears only when Trevor
 * sets RECORD_STRIP_<ID> on this project — one env, containing the
 * endpoint, the read key, the public name the owner approved, and
 * whether dollar figures were part of the blessing. Until that env
 * exists, nothing is even fetched. Prepared values live in
 * ~/.foundit-secrets/record-keys.env beside each system's keys.
 */
import { neon } from "@neondatabase/serverless";

export type LiveRecord = {
  name: string;
  descriptor: string;
  streak: number;
  nights: { date: string; status: "green" | "red" }[];
  /** two flexible stat cells between the streak and the newest-night cell */
  stats: { label: string; value: string; tone?: "green" | "red" }[];
  lastNight: string;
};

/** 'YYYY-MM-DD' minus one calendar day, DST-proof (noon-UTC anchor). */
function prevDay(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  const t = new Date(Date.UTC(y, m - 1, d, 12));
  t.setUTCDate(t.getUTCDate() - 1);
  return t.toISOString().slice(0, 10);
}

function todayIn(timeZone: string): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone, year: "numeric", month: "2-digit", day: "2-digit",
  }).format(new Date());
}

/** Newest certified night must be yesterday or today in the system's zone. */
function fresh(newest: string, timeZone: string): boolean {
  const today = todayIn(timeZone);
  return newest === today || newest === prevDay(today);
}

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

const usd = (cents: number) =>
  (cents / 100).toLocaleString("en-US", { style: "currency", currency: "USD" });

// ---------------------------------------------------------------- foundit

type FounditRow = {
  night_date: string;
  status: "green" | "red";
  discrepancies: unknown[];
  orders_billed: number;
  ran_at: string;
};

/** Found It's own books — read straight from our own ledger database. */
export async function founditRecord(): Promise<LiveRecord | null> {
  const url = process.env.FOUNDIT_BOOKS_DATABASE_URL;
  if (!url) return null;
  try {
    const sql = neon(url);
    const rows = (await sql`
      select night_date::text, status, discrepancies, orders_billed, ran_at::text
        from record_nights
       order by night_date desc
       limit 90`) as FounditRow[];
    const first = rows[0];
    if (!first) return null;
    if (!fresh(first.night_date, "America/Chicago")) return null;

    const nights = rows.map((r) => ({ date: r.night_date, status: r.status }));
    const dCount = Array.isArray(first.discrepancies) ? first.discrepancies.length : 0;
    return {
      name: "Found It Software",
      descriptor: "Our own books · Alexandria, Louisiana",
      streak: greenStreak(nights),
      nights,
      stats: [
        { label: "Entries in\nthe journal", value: String(first.orders_billed) },
        { label: "Discrepancies\nlast night", value: String(dCount), tone: dCount === 0 ? "green" : "red" },
      ],
      lastNight: first.night_date,
    };
  } catch (err) {
    console.error("[record-live] foundit read failed:", err instanceof Error ? err.message : String(err));
    return null;
  }
}

// ---------------------------------------------------------------- clients

/** The fixed roster of strip slots. A slot only lights when its
 *  RECORD_STRIP_<ID> env exists (set at blessing time, never before). */
const CLIENT_SLOTS = ["EDWARDS", "LACAZE", "TONYS", "ECW"] as const;

type StripConfig = {
  url: string;      // the system's /api/record endpoint
  key: string;      // its RECORD_READ_KEY
  name: string;     // the public name the owner blessed
  descriptor: string;
  tz: string;       // for the freshness law
  money?: boolean;  // dollars only when the blessing included them
};

type ApiRecord = {
  streak: number;
  nights: { night_date: string; status: "green" | "red" }[];
  latest: {
    night_date: string;
    discrepancyCounts: Record<string, number>;
    billed_cents: number;
    collected_cents: number;
    orders_billed: number;
    payments_count: number;
  } | null;
};

async function clientRecord(cfg: StripConfig): Promise<LiveRecord | null> {
  try {
    const res = await fetch(cfg.url, {
      headers: { authorization: `Bearer ${cfg.key}` },
      next: { revalidate: 900 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as ApiRecord;
    const first = data.nights?.[0];
    if (!first || !data.latest) return null;
    if (!fresh(first.night_date, cfg.tz)) return null;

    const nights = data.nights.map((n) => ({ date: n.night_date, status: n.status }));
    const dCount = Object.values(data.latest.discrepancyCounts ?? {}).reduce((a, b) => a + b, 0);
    const stats: LiveRecord["stats"] = cfg.money
      ? [
          { label: "Collected through\nthe system", value: usd(data.latest.collected_cents) },
          { label: "Discrepancies\nlast night", value: String(dCount), tone: dCount === 0 ? "green" : "red" },
        ]
      : [
          { label: "Orders through\nthe pipe", value: String(data.latest.orders_billed) },
          { label: "Discrepancies\nlast night", value: String(dCount), tone: dCount === 0 ? "green" : "red" },
        ];

    return {
      name: cfg.name,
      descriptor: cfg.descriptor,
      streak: greenStreak(nights),
      nights,
      stats,
      lastNight: first.night_date,
    };
  } catch (err) {
    console.error(`[record-live] client read failed (${cfg.name}):`, err instanceof Error ? err.message : String(err));
    return null;
  }
}

/** Every blessed client strip, in roster order. Unblessed slots cost
 *  nothing — not even a fetch. */
export async function blessedClientRecords(): Promise<LiveRecord[]> {
  const configs: StripConfig[] = [];
  for (const slot of CLIENT_SLOTS) {
    const raw = process.env[`RECORD_STRIP_${slot}`];
    if (!raw) continue;
    try {
      const cfg = JSON.parse(raw) as StripConfig;
      if (cfg.url && cfg.key && cfg.name) configs.push(cfg);
    } catch {
      console.error(`[record-live] RECORD_STRIP_${slot} is not valid JSON — slot skipped`);
    }
  }
  if (!configs.length) return [];
  const results = await Promise.all(configs.map(clientRecord));
  return results.filter((r): r is LiveRecord => r !== null);
}
