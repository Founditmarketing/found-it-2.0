# Google Ads — High-Intent Keyword Plan (Vertical LPs)

Three tight campaigns, one landing page each. Few keywords, exact/phrase only,
message-matched page per theme. No broad match anywhere — broad is how budgets
die in verticals this narrow.

Routes (all `noindex`, built for paid traffic):

| Campaign | Landing page | Lead source tag |
|---|---|---|
| Auto Shop | `/lp/auto-shop` | `lp_auto_shop` |
| Dealership | `/lp/dealership` | `lp_dealership` |
| Roofing | `/lp/roofing` | `lp_roofing` |

Conversion: the `Lead` event fires from `trackLead()` on native form submit
(Meta pixel + GA4 + the existing hardwired Ads action). The new per-campaign
seam in `src/lib/gtag.ts` stays silent until `NEXT_PUBLIC_GADS_ID` (and
optionally `NEXT_PUBLIC_GADS_LEAD_LABEL`) are set in Vercel — set them when the
campaign's conversion action exists in the Ads account.

Character limits: RSA headlines ≤ 30 chars, descriptions ≤ 90. The pairs below
fit.

---

## 1. Auto Shop — `/lp/auto-shop`

**The bangers (exact + phrase):**

- `[auto repair shop software]`
- `[auto shop management software]`
- `[shop management system]`
- `[mechanic shop software]`
- `[automotive shop management software]`
- `"auto repair shop software"`
- `"replace shop management software"`
- `"shop management software cost"` — pricing searchers convert; ours is public

Competitor-alternative plays (own ad group, phrase match, watch QS): searches
like `"tekmetric alternative"` and `"shopmonkey alternative"` are the highest
intent that exists in this vertical. Bid on them; never put the trademark in
the ad copy itself.

**Negatives:** `free`, `jobs`, `hiring`, `salary`, `career`, `training`,
`course`, `tutorial`, `download`, `crack`, `diy`, `body shop`, `detailing`,
`car wash`, `open source`

**Ad copy pair:**
- H: `Shop Software You Own Outright` (30)
- D: `Repair orders, parts, payments & books in one flat-price system. No per-seat fees. Own it.` (90)

---

## 2. Dealership — `/lp/dealership`

**The bangers (exact + phrase):**

- `[dealership management software]`
- `[dealer management system]`
- `[equipment dealer software]`
- `[trailer dealership software]`
- `[outdoor power equipment dealer software]`
- `"dms for equipment dealers"`
- `"farm equipment dealer software"`
- `"parts pricing software for dealers"`

**Negatives (critical — keep car-lot traffic out):** `car`, `cars`, `used car`,
`auto dealer`, `automotive dealership`, `cdk`, `dealertrack`, `bhph`, `f&i`,
`free`, `jobs`, `salary`, `career`, `training`, `crm demo jobs`

**Ad copy pair:**
- H: `Never Sell Parts Below Cost` (27)
- D: `Price files load automatically. Every part reprices at your margin. And you own it.` (84)

---

## 3. Roofing — `/lp/roofing`

**The bangers (exact + phrase):**

- `[roofing business software]`
- `[roofing crm]`
- `[roofing company software]`
- `[software for roofing contractors]`
- `[roofing job costing software]`
- `"roofing crm alternative"`
- `"roofing invoice software"`
- `"best crm for roofing company"`

Competitor-alternative plays (own ad group): `"jobnimbus alternative"`,
`"acculynx alternative"` — same rule, bid on the term, keep trademarks out of
the copy.

**Negatives (critical — homeowner intent is the money pit):** `repair`,
`replace`, `leak`, `cost to`, `near me`, `estimate template`, `calculator`,
`materials`, `shingles`, `metal roof`, `diy`, `free`, `jobs`, `salary`,
`career`, `training`

**Ad copy pair:**
- H: `Roofing Books, To The Penny` (27)
- D: `One ledger ties every job dollar to the book, to the cent. Software you own outright.` (86)

---

## Campaign settings that match the strategy

- One campaign per vertical, one ad group per intent cluster (core keywords vs
  competitor-alternative), so search-term reports stay readable.
- Landing pages are `noindex` and message-matched — do NOT reuse them as
  organic pages or point other campaigns at them.
- Location: start where the proof is strongest (Louisiana + neighboring
  states); the pages say "we come to you," so keep the radius honest to where
  Trevor will actually drive or fly.
- Track per-page conversion via the lead `source` tags above — they ride into
  `/api/lead` notifications and GA4 event labels, so keyword → page → lead is
  auditable end to end.
- Shared negatives across all three campaigns: `free`, `jobs`, `salary`,
  `career`, `hiring`, `training`, `course`, `template`, `download`.
