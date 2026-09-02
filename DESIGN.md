---
name: Found It Software
description: Dark-cockpit owner's console — ink ground, one orange command accent, receipts as proof.
colors:
  ink-ground: "#000000"
  ink-panel: "#0A0A0A"
  cockpit-panel: "#0B0B0B"
  command-orange: "hsl(20 100% 55%)"
  on-orange-black: "#000000"
  ledger-emerald: "#34D399"
  receipt-cream: "#F4EFE6"
  receipt-ink: "#141414"
  foreground-white: "hsl(0 0% 98%)"
  muted-foreground: "hsl(0 0% 63.9%)"
  text-faint-dark: "hsl(0 0% 60%)"
  border-hairline: "hsl(0 0% 14.9%)"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 3.75rem)"
    fontWeight: 900
    lineHeight: 0.85
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(1.5rem, 4vw, 2.25rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.05em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "10px"
    fontWeight: 900
    lineHeight: 1.4
    letterSpacing: "0.18em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  3xl: "24px"
  pill: "9999px"
spacing:
  container-pad: "2rem"
  container-max: "1400px"
components:
  button-primary:
    backgroundColor: "{colors.command-orange}"
    textColor: "{colors.on-orange-black}"
    rounded: "{rounded.pill}"
    height: "56px"
    padding: "0 32px"
  button-primary-hover:
    backgroundColor: "{colors.command-orange}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.command-orange}"
    rounded: "{rounded.pill}"
    height: "36px"
    padding: "0 16px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.foreground-white}"
    rounded: "{rounded.pill}"
    height: "56px"
    padding: "0 32px"
  chip:
    backgroundColor: "{colors.command-orange}"
    textColor: "{colors.on-orange-black}"
    rounded: "{rounded.pill}"
    padding: "2px 10px"
---

# Design System: Found It Software

## Overview

**Creative North Star: "The Owner's Cockpit"**

The whole site is a dark instrument panel a business owner can trust at midnight: near-black ink ground, a single hot orange (#FF5500) that behaves like a command light, and monospaced data everywhere numbers appear. Restraint is the personality — the audience mistrusts adjectives, so the design lets receipts, ledgers, and live demos do the bragging. Density is high but legible: hairline borders, glass panels over faint ambient glow, tabular numerals, and a strict contrast floor.

The DriveOS build deepened the world without adding a second voice: **ledger emerald** (emerald-400) appears only when money is verified — collected, balanced, "$0.00 difference" — and **receipt cream** (#F4EFE6) appears only when the interface renders a physical artifact (a printed ticket). Orange stays the sole command accent; emerald and cream are role-locked materials, not accents. Where PRODUCT.md names JetBrains Mono, the shipped code loads only Inter and Outfit — `font-mono` resolves to the system monospace stack, and that is what this document records.

**Key Characteristics:**
- Pure-black ground with panels one step up (#0A0A0A–#0B0B0B) and hairline borders
- One command accent (orange #FF5500); text on orange is always black
- Outfit black-italic-uppercase display, tracking-tighter, leading below 1
- Mono uppercase micro-labels (9–12px, 0.12–0.4em tracking) as house grammar
- Role-locked support colors: emerald = money-truth, cream = physical artifact
- Enforced 4.5:1 contrast floor; motion always guarded by reduced-motion

## Colors

A single-accent dark system: orange commands, emerald verifies, cream is paper, everything else is ink and white.

### Primary
- **Command Orange** (hsl(20 100% 55%), the brand's #FF5500): THE accent. CTAs, chips, eyebrows, active states, focus outlines, money *owed*, corrections, and the DEMO badge. Rare enough to always mean "act here" or "attention here."

### Secondary
- **Ledger Emerald** (#34D399, Tailwind emerald-400): money-truth only — collected totals, payments received, the nightly "$0.00 difference" verdict, balanced-books banners (used at low alpha for tint: `emerald-400/[0.05]` fill, `/25` border). Never a CTA, never decoration.

### Tertiary
- **Receipt Cream** (#F4EFE6) with **Receipt Ink** (#141414): reserved for rendered physical artifacts — the printed ticket that slides out of the register. Always monospaced, always dark-ink text on cream. Nowhere else.

### Neutral
- **Ink Ground** (#000000): page background (dark theme `--background`).
- **Ink Panel** (#0A0A0A / #0B0B0B): cards, the OS window shell.
- **Foreground White** (hsl(0 0% 98%)): primary text.
- **Muted Foreground** (hsl(0 0% 63.9%)): secondary text at full opacity.
- **Text Faint** (`.text-faint`, hsl(0 0% 60%) on dark): the quietest text allowed — replaces alpha-modified text colors.
- **Hairline Border** (hsl(0 0% 14.9%)): dividers and card borders, usually further softened (`border-border/50`, `border-white/[0.08]`).

### Named Rules
**The One Command Rule.** Orange is the only accent that asks for action. Emerald and cream are materials with locked roles (verified money; paper); introducing them outside those roles — or adding any new accent — breaks the world.

**The Black-on-Orange Rule.** Any orange fill (button, chip, badge) carries pure black text. No white-on-orange, ever.

**The Contrast Floor Rule.** All informational text measures ≥ 4.5:1 against its background (documented and enforced in globals.css). Never use Tailwind alpha modifiers below /90 on text colors; use full-opacity `text-muted-foreground` or `.text-faint`. No informational text below 11px body copy scale exceptions are mono labels ≥ 9px used as decoration-adjacent grammar, kept at ≥ white/40 only when repeating adjacent content.

## Typography

**Display Font:** Outfit (with sans-serif fallback) — `font-heading`, applied to all headings globally
**Body Font:** Inter (with sans-serif fallback)
**Label/Mono Font:** system monospace stack (Tailwind `font-mono`; JetBrains Mono is named in brand docs but not loaded by the build)

**Character:** Loud, compressed, engineered. Display type is black-weight, italic, uppercase, negative-tracked, with line-height under 1 — a headline that leans forward. Everything numeric or procedural drops into small monospace caps, like machine output.

### Hierarchy
- **Display / h1** (900 italic uppercase, text-4xl→6xl, leading-[0.85], tracking-tighter): page heroes. Uppercase-italic belongs to headings; oversized variant `.text-oversized` uses clamp(2rem, 7vw, 8vw) at leading-[0.9].
- **Headline / h2** (900 italic uppercase, text-2xl→4xl, leading-[0.9], tracking-tighter): section heads sitewide.
- **Title** (900 italic, text-lg–2xl, tracking-tight, sentence case): in-panel headings inside the OS window ("The register.", "Money owed.") — italic black weight without uppercase.
- **Body** (Inter 400, 14–16px, relaxed leading): prose and UI copy; `text-[13px] font-medium` for dense in-panel lines.
- **Label / Eyebrow** (mono 900 uppercase, 9–12px, tracking 0.12em–0.4em): the house grammar. Eyebrows above h1s run tracking-[0.4em] in orange; data labels inside panels run 0.14–0.18em in white/40–60; amounts use `tabular-nums`.

### Named Rules
**The Machine-Speaks-Mono Rule.** Anything the system says about itself — timestamps, labels, ticket text, badges, verdicts, dollar amounts — is set in small monospaced caps with wide tracking and tabular numerals. Prose is for humans; mono is for the machine.

**The Heading-Only Italic Rule.** Black-italic-uppercase is heading grammar. Body copy is never uppercase-italic.

## Layout

Centered container, max 1400px, 2rem side padding. Mobile-first: the canonical reader is on a phone. Pillar pages open with a mono eyebrow, a compact h1, then the full-width proof artifact (the drivable OS window) with the primary CTA pill directly under its edge. Inside the OS window: an app-shell grid (icon sidebar on desktop, bottom tab bar ≤ sm) with dense 12–24px internal rhythm. Section spacing uses the default Tailwind scale; no custom spacing tokens exist. Under 1024px, ambient blur layers are removed and backdrop-filter disabled (documented scroll-performance law in globals.css).

## Elevation & Depth

A hybrid: tonal layering carries most depth (black ground → #0A0A0B panels → white/[0.02–0.06] insets), with two sanctioned shadow moves — a heavy ambient drop under the hero OS window and glassmorphism (`.glass-card`: card/40 tint + backdrop-blur + border/50) for floating chrome. Ambient radial glows sit behind hero artifacts: orange `radial-gradient(60% 70% at 30% 20%, rgba(255,85,0,0.14), transparent 70%)` and a fainter emerald counterpart at 0.06. The OS window carries a 44px hairline grid texture (`rgba(255,255,255,0.015)` lines) — machine graph paper.

### Shadow Vocabulary
- **Window drop** (`box-shadow: 0 30px 80px -20px rgba(0,0,0,0.8), 0 10px 30px -10px rgba(255,85,0,0.15)`): the hero OS window only — black depth plus a breath of orange.
- **Artifact lift** (`box-shadow: 0 18px 50px rgba(0,0,0,0.6)`): the cream receipt sliding out of the register.
- **Glass ambient** (`shadow-2xl shadow-black/5` on `.glass-card`): floating chrome.

### Named Rules
**The Glow-Behind Rule.** Colored light appears only as low-alpha radial glow *behind* a surface (≤ 0.15 orange, ≤ 0.06 emerald), never as a colored shadow on text or small elements.

## Shapes

Pill-and-panel language. Interactive elements (buttons, chips, badges, tabs) are full pills (9999px). Panels step down by scale: the hero OS window is rounded-3xl (24px), in-window cards rounded-xl (12px), small insets rounded-lg (8px, the `--radius` base). Borders are hairlines at low alpha, with orange-tinted borders (`border-primary/25–/50`) marking the live artifact and outline CTAs. The one square-shouldered exception: the receipt, which is rounded only at its top (rounded-t-lg) because paper tears at the bottom.

## Components

### Buttons
- **Shape:** full pill (9999px), fixed heights — h-14 hero CTAs, h-11/h-12 in-panel, h-9 row actions.
- **Primary:** Command Orange fill, black text, font-black uppercase tracking-wider (px-8 h-14 at hero scale).
- **Hover / Focus:** hover dims to opacity-90 (fill never changes hue); focus is `focus-visible:outline-2 outline-primary` with offset; active taps use `active:scale-[0.99]`.
- **Secondary (ghost-glass):** `bg-card/40 border border-border/20`, white text, hover shifts border toward `primary/30`.
- **Outline pill:** transparent, `border-primary/50 text-primary`, hover `bg-primary/10` — used for draft/secondary row actions.

### Chips
- **Style:** `.chip` — orange fill, BLACK text, full pill, 2px 10px padding, mono-flavored 10px 900-weight uppercase, tracking 0.12em. The brand mark for a named system; also the always-visible DEMO DATA badge pattern.

### Cards / Containers
- **Corner Style:** rounded-xl inside panels; rounded-3xl for the hero window.
- **Background:** #0A0A0B panel tones or white/[0.02–0.04] insets on the ink ground.
- **Shadow Strategy:** tonal by default; see Elevation for the three sanctioned shadows.
- **Border:** hairline, `border-border/50` or `border-white/[0.08–0.15]`; orange-tinted for the live artifact; `border-emerald-400/25` only on balanced-books banners.
- **Internal Padding:** 12–24px (p-3 to p-6), dense.

### Navigation
- **Breadcrumb/eyebrow grammar:** xs font-bold uppercase tracking-[0.2em] `.text-faint`; page eyebrows in orange mono tracking-[0.4em]. In-window nav: desktop icon sidebar rows (rounded-xl, 13px bold) and a mobile bottom tab bar (9px black uppercase mono labels), active state in orange.

### The OS Window (signature)
The drivable Found It OS demo (DriveOS): rounded-3xl shell, `border-primary/25`, `bg-[#0B0B0B]/90` with backdrop blur, window drop shadow, 44px grid texture, orange/emerald radial glows behind it, mono title bar with live clock and the orange DEMO badge pinned top-right. Springs animate its life: entrance `spring 120/18`, receipt `spring 260/22`, refusal stamp `spring 300/16` — every animated element checks `useReducedMotion()` and degrades to static. The refusal stamp (border-4 border-primary, mono caps on black/70) is the house way to show the system saying no.

## Do's and Don'ts

### Do:
- **Do** put black text on every orange fill (The Black-on-Orange Rule).
- **Do** set all machine output — labels, timestamps, amounts, badges — in small mono caps with `tabular-nums` (The Machine-Speaks-Mono Rule).
- **Do** keep emerald-400 exclusively for verified money states and cream #F4EFE6 exclusively for physical paper artifacts.
- **Do** label every demo interface with the visible orange DEMO/DEMO-DATA chip and invented names only — never client data (binding product law).
- **Do** guard every animation with `useReducedMotion()` / `prefers-reduced-motion`, and use the liquid ease `cubic-bezier(0.16, 1, 0.3, 1)` or the three sanctioned springs.
- **Do** use `.text-faint` or full-opacity `text-muted-foreground` for de-emphasized text (The Contrast Floor Rule).

### Don't:
- **Don't** introduce a second action accent; emerald and cream never become CTAs or decoration (The One Command Rule).
- **Don't** use text-color alpha modifiers below /90, or informational text below the contrast floor (measured failures documented in globals.css).
- **Don't** let captions self-praise — receipts brag, captions never; no superlative adjectives, no guarantee/refund words anywhere in UI copy (binding editorial law).
- **Don't** use uppercase-italic outside headings, or heading grammar in body copy.
- **Don't** ship full-screen blur layers or backdrop-filter below 1024px (mobile scroll-flicker law).
