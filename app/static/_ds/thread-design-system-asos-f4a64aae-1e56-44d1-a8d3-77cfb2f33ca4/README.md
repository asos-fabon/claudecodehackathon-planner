# Thread Design System (ASOS)

**Thread DS** (styled **Thread 🧵 DS**) is the ASOS design system — the shared language behind ASOS's shopping experiences across **web (React), iOS (Swift) and Android**. This project is a build-ready recreation of Thread DS: real tokens, fonts, reusable components and a full storefront UI kit, all driven from the design system's own exported data.

ASOS is a global online fashion & cosmetics retailer. Its interfaces are dense, image-led commerce surfaces — product listing pages (PLP), product detail pages (PDP), bag & checkout, saved items, and My Account — where the job of the system is to stay quiet and let the product photography carry the page.

## Sources

Everything here is grounded in the canonical Thread DS export, not memory:

- **GitHub — `asosteam/asos-productdesign-thread-design-system`** (branch `main`): the authoritative export written by the Thread DS Figma plugin. Explore it to build more faithfully — it holds the full variable set, component metadata and accessibility docs.
  - `packages/tokens/exports/figma-variables.json` — 530 Figma variables across 11 collections (source of every token here)
  - `docs/figma-make/text-styles.json` — 42 published text styles
  - `docs/figma-make/component-anatomy.json` / `components.json` — 31 component sets with variant definitions
  - `docs/a11y-docs-thread-ds.md` + `src/stories/accessibility/*.mdx` — per-component WCAG 2.2 AA guidance
  - `thread-ds-context.md` — the DS team's own AI-context/authoring guide
- **Figma files** (referenced by the export; access not assumed):
  - Tokens — `figma.com/design/9iK6QBbPYLovLw9QEf7bmh/Tokens-Thread-DS-ASOS`
  - Components — `figma.com/design/FJvN3Nf3cHaQifmwLhiyjM/Components-Thread-DS-ASOS`
  - Icons — `figma.com/design/kXz9SltcUqECfH3OtQRq3m/Icons-Thread-DS-ASOS`
- Related tooling named in the source: **Thread Bobbin** (`asos-daveflynn/thread-bobbin`), Thread DS Figma plugin (maintainer: David Flynn).

- **Live flow files** (compiled reference supplied by the ASOS product design team, covering PDP & Checkout, My Account, and Exchange/Return — each in light and dark):
  - `figma.com/design/dVk34BxKwTA2paEtettJlt/Returns-•-Q3-•-H2` — PDP & checkout `8308-24223` (light) / `8308-30185` (dark); My Account `8308-62775` / `8308-80149`; Exchange & return `8308-97057` / `8308-106862`

Thread DS uses a **three-tier token architecture**: Tier 1 global palette (raw values, never used directly) → Tier 2 aliases → Tier 3 semantic tokens (what components consume). Semantic colour resolves automatically across **ASOS Light** and **ASOS Dark** modes.

---

## COMPONENT NAMING CONVENTIONS

Thread DS names components as `[type]/[context]/[element].[variant]` — a dot/slash pattern that reads as a path. Match it when adding to the system.

| Prefix | Meaning | Examples |
|---|---|---|
| `_atoms/…` | Base primitives reused across contexts | `_atoms/page.title/my.account`, `_atoms/my.account.navigation/item`, `_atoms/card/my.orders/delivery.status` |
| `card/[context]/[element]` | Composed cards scoped to a flow | `card/pdp/product.item`, `card/checkout/bag.item`, `card/my.orders/item`, `card/exchange.return/item.V2` |
| `alert/[feature]/[context]` | Inline alerts, feature + placement scoped | `alert/return.rate/checkout`, `alert/exchanges/order.confirmation` |
| `section.message/[context]` | Banner-style messaging blocks | `section.message/exchange.or.return`, `section.message/have.your.say` |
| `sheet/[context]/[name]` | Bottom sheets | `sheet/pdp/fit.assistant` |
| Global scaffolding | Shared across nearly every screen | `page.template`, `page.title/default`, `global.navigation`, `tab.bar`, `action.bar`, `list.range`, `input.field`, `button`, `accordion` |

**Four conventions that affect how you read a frame:**

1. **Versioning is explicit in the name.** `card/exchange.return/item.V2` coexists with its non-versioned original. V2 is the current pattern (reason captured inline on the card) — prefer it for new work. The name alone doesn't tell you which to reach for, so check before copying.
2. **Return-rate components are a distinct sub-family**, purpose-built for return-rate messaging rather than generic alerts: `alert/return.rate/checkout`, `card/return.rate/post.app.update/my.orders`, `_atoms/status/create.return/list.range`.
3. **Platform variants are hidden sibling instances, not separate components.** `my.account.navigation` contains `Group 1 ios` / `android` / `mweb` / `dweb` frames with only the active one visible. **Read visibility state, not just presence** — otherwise you'll pick up four stacked layouts. Here that's the `platform` prop.
4. **Light/dark is handled at page/frame level, not per component.** Each flow file duplicates the whole "User experience Journey" frame per mode. In code that's `[data-theme="dark"]` on a root element — components themselves are mode-agnostic and just consume semantic tokens.

### Observed flow sequences

**PDP** `card/pdp/product.item` → `action.bar` → `exchanges.product.info` → `product.accordion.group` → `ymal` → `blt` → `reviews`, with `sheet/pdp/fit.assistant` available.
**Checkout** `bag.item` → `promo.banner` → `delivery.address` → `alert` → `alert/return.rate/checkout` → `delivery.options` → `payment` → `payment.methods` → `total` → `confirmation.message`.
**My Account** `my.account.navigation` → (orders) `card/return.rate/post.app.update/my.orders` → `list.range` → `card/my.orders/item`; (detail) `order.info` → `section.message/exchanges` → `delivery.address` → items → `payment.details` → `total` → `help`.
**Exchange/Return** `list.range` → `item.V2` → `CTA.footer` → summary (`one.parcel`, `summary/total`) → `search.drop.off` → `summary/confirmation`.

---

## CONTENT FUNDAMENTALS

How ASOS / Thread DS writes copy:

- **Voice:** confident, friendly, fashion-fluent and brief. It reads like a stylish friend, not a corporation. Energetic but never shouty.
- **Person:** addresses the customer as **you / your** ("your bag", "your saved items", "we'll never share it"). The brand is **we**.
- **Case:** sentence case for almost everything — headings, product names, helper text, labels ("Add to bag", "Continue shopping", "My bag"). **CTAs in buttons render UPPERCASE via CSS** (`ADD TO BAG`, `CHECKOUT`) — the source text stays sentence case; the button component transforms it. Promotional badges are uppercase ("NEW", "SELLING FAST", "-25%").
- **Product naming:** `Brand` (heavier weight) then `descriptive product name in sentence case` — e.g. **ASOS DESIGN** / "Oversized linen shirt in stone". Brand names keep their own casing (ASOS DESIGN, COLLUSION, adidas Originals).
- **Prices:** `£` prefix, no space ("£32", "£29.99"). Sale prices show the old price struck through in sale-pink beside the new price. "FREE" is uppercase for free delivery.
- **Promotional language:** short, punchy, plain — "Selling fast", "New season", "Mix and match", "Nearly gone", "Low stock". No internal codes or abbreviations (an a11y requirement).
- **Microcopy is action-first and specific:** "Place order" not "OK", "Add to bag" not "Submit". Buttons name their outcome.
- **Tone in errors:** direct and helpful, never blaming — "Your card was declined. Try another payment method.", "Please select a size".
- **Emoji:** not used in product UI. (The DS brand itself is nicknamed "Thread 🧵" in docs, but that's internal, not customer-facing.)
- **Accessibility is baked into content:** every icon-only control and product action carries the product name in its accessible name ("Save Oversized Linen Shirt"), and label order on tiles is fixed: **name → price → sale price → promo labels**.

---

## VISUAL FOUNDATIONS

The aesthetic is **editorial, monochrome and image-first** — black, white and grey do the structural work; colour is reserved for meaning and the one green CTA.

- **Colour vibe:** near-neutral. Primary ink is **#2D2D2D** (not pure black), surfaces are white/off-white on a light-grey canvas (#EEEEEE). The single brand accent is **ASOS green #018849** — used almost exclusively for the primary commerce action (Add to bag) and success. Semantic colours: **sale/error pink-red #D01345**, **information blue #0770CF**, **warning amber #FF9C32 / #D67100**, **success green #018849**. Purple exists in the global palette but is not part of the customer-facing UI language. Keep colour rare and purposeful; let imagery bring the colour.
- **Dark mode:** first-class. Canvas → black (#000000), raised surfaces → #1F1E1E, ink → #DDDDDD, links brighten to blue #3AA2FF. Use the semantic tokens and it adapts under `[data-theme="dark"]`.
- **Typography:** **Futura PT** everywhere, non-negotiable. Two weights carry the system — **Book (400)** for body/running copy and **Demi (600)** for everything with emphasis (display, headlines, all labels, buttons, tags, prices). Geometric, wide, confident. Generous positive letter-spacing (0.4–1.5px) is characteristic, increasing as text gets smaller. Display/Hero is 60px; the ramp steps down cleanly (36 / 28 / 24 / 18 / 16 / 14 / 12 / 10).
- **Two typography rules are platform-specific** — `label/field input` and `label/field select` are 12px/16px/1px on iOS & Android but 14px/20px/0.8px on mWeb & dWeb (the `--text-label-field-input-app` tokens carry the app values; the unsuffixed tokens default to web). And `body/compact` is **iOS & Android only** — never use it on web.
- **Spacing:** a 4px base scale (1, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48…). Layout gaps use a named ramp (x-small 4 → xxx-large 40). Dense but breathable; product grids are tightly gridded, editorial areas are airy.
- **Corner radius:** restrained. Interactive elements (buttons, inputs, selects, checkboxes) use **x-small 4px**; cards/sheets use small–large (8/16/20/24). **Product imagery and tiles are square-cornered (0px)** — the photography is never rounded. Pills/tags and circular controls use **full (100px)**.
- **Cards:** minimal — usually just a surface and a hairline (`border/base/subtle` #EEEEEE), not heavy shadow boxes. Product cards have **no border and no shadow at all**: image, then text beneath. Elevation is used sparingly.
- **Borders:** hairline **1px** is the default (dividers, inputs, card edges); **thin 2px** signals focus/selection on controls; **thick 8px** is rare. Default border grey is #767676; subtle separators #EEEEEE.
- **Shadows:** soft and low. An applied ramp from `xx-light` (0 1px 2px / 6%) up to `heavy` (0 8px 28px / 20%), ink-tinted (#2D2D2D). Reserved for overlays, snackbars, sheets and floating action bars — not for static cards.
- **Backgrounds:** predominantly flat white / light-grey. **No gradients, no textures, no patterns** in the UI chrome. Full-bleed product & campaign photography is the "texture". Overlays use ink scrims (`surface/backdrop/*`, ~80% #2D2D2D); floating bars over imagery use a translucent white with **backdrop-blur**.
- **Transparency & blur:** used deliberately — the PDP `ActionBar` floats on imagery with `backdrop-filter: blur` over a translucent white surface; modal scrims dim with ink alpha.
- **Motion:** subtle and quick. Hover/press transitions ~120–200ms on a standard ease (`cubic-bezier(0.2,0,0,1)`). A small hover translate token (4px) exists. No bounces or flourish — commerce stays calm.
- **Hover states:** darken (primary black → #000000; accent green → #006637) or shift to a subtle grey fill for secondary/tertiary. **Press:** a slight scale-down (~0.9) on icon toggles (save heart), colour change elsewhere.
- **Focus:** always visible — a 2px focus treatment / blue focus ring (`border/decision/focus` #0770CF). Never removed (a hard a11y rule from the source).
- **Imagery:** cool-to-neutral, high-key studio product photography; the **3:4 product crop** is the core commerce ratio (also 1:1, 4:3, 16:9). Always square-cornered.
- **Layout rules:** fixed global header (`Header`), bottom `TabBar` on app/mWeb, sticky order-summary on desktop bag. Content maxes out around 1200px; mobile containers 360–440px.

---

## ICONOGRAPHY

- **Approach:** ASOS uses a set of **simple, single-weight line SVG icons** — thin, geometric, minimal, monochrome — coloured via the `icon/*` semantic tokens (primary #2D2D2D, secondary #666666, on-dark white, plus semantic success/error/warning/info/focus). Icons are named in Figma as `Group/icon-name` (a slash distinguishes icons from components). Common glyphs: search, heart (save/wishlist), bag, user/account, home, categories grid, filter, chevrons, truck (delivery), share, play (video), close.
- **⚠ Substitution (flag):** the icon export in the source was **empty** (`icons.json` = 0 icons, `icons.index.json` total 0) — no icon binaries were shipped. This kit substitutes **[Lucide](https://lucide.dev)** (CDN), which matches Thread DS's thin-line, single-weight, geometric style closely. All icons render through the `Icon` component, which colours them via the `icon/*` tokens. **To make this pixel-accurate, please supply the real Thread DS icon SVGs** (or point us at the Icons Figma file) and we'll swap Lucide out.
- **Usage:** load Lucide once per page — `<script src="https://unpkg.com/lucide@latest"></script>` — then use `<Icon name="heart" />`. Icon-only controls always need an `aria-label`.
- **Emoji / unicode as icons:** not used in the customer UI.
- **Logo / brand mark:** **no logo asset was present in the exported source.** The distinctive ASOS wordmark is therefore rendered in plain type (Futura PT Bold) everywhere a mark would go — see `guidelines/brand-wordmark.card.html`. We did **not** draw or reconstruct the real logo. Please drop in the official ASOS logo files to finish the brand layer.

---

## Component index

React primitives (compiled to `window.ThreadDesignSystemASOS_f4a64a`). Each lives with a `.d.ts`, `.prompt.md` and a Design-System card.

**Forms** (`components/forms/`): **Button**, **IconButton**, **SaveButton**, **SocialButton**, **InputField**, **Select**, **Checkbox**, **Radio**, **Tag**
**Feedback** (`components/feedback/`): **Alert**, **SectionMessage**, **Snackbar**, **StatusBadge**, **StatusBar**, **Spinner**
**Navigation** (`components/navigation/`): **Header**, **PageTitle**, **TabBar**, **ActionBar**, **MyAccountNavigation**
**Layout** (`components/layout/`): **Accordion**, **ListRange**, **PromoBanner**, **CTAFooter**
**Overlay** (`components/overlay/`): **Modal**, **Sheet**
**Commerce** (`components/commerce/`): **ProductCard**, **BagItemCard**, **OrderCard**, **ReturnCard**, **DetailCard**, **SummaryCard**, **ExchangeReturnItem**
**Media** (`components/media/`): **Icon**

### Mapping Figma names → components

Several Figma card families collapse into one parameterised component here — they are the same structure with different content:

| Figma | Component |
|---|---|
| `card/checkout/delivery.address`, `/payment`, `card/order.detail/order.info`, `/payment.details`, `/help` | `DetailCard` |
| `card/checkout/total`, `card/exchange.return/summary/total`, `/summary/one.parcel` | `SummaryCard` |
| `card/checkout/bag.item`, `card/bag/exchanges/item` | `BagItemCard` |
| `card/exchange.return/item.V2`, `card/create.return/summary/item` | `ExchangeReturnItem` |
| `section.message/exchange.or.return`, `/exchanges`, `/have.your.say`, `card/return.rate/post.app.update/my.orders` | `SectionMessage` |
| `page.title/default`, `/bag`, `_atoms/page.title/my.account` | `PageTitle` |
| `list.range`, `_atoms/status/create.return/list.range` | `ListRange` |

**`Alert` vs `SectionMessage`:** `Alert` is transient/contextual state (success, error, a warning about this order). `SectionMessage` is the larger editorial block that introduces or explains a section. The Figma `alert/*` and `section.message/*` families map to them respectively.

### Intentional additions
Built beyond the raw Figma component-set list, each justified by the source:
- **ProductCard** — documented as a first-class component in the Thread DS accessibility docs (`ProductCard.mdx`); central to ASOS and used across every UI-kit screen. Composes SaveButton + StatusBadge.
- **Icon** — a wrapper for the substitute Lucide set (the brand's own icons weren't exported). Needed so every component can reference icons through the token system.
- **Header** — a concrete web treatment of the source's `global.navigation` component set.

### Not rebuilt as primitives
Source component sets that are platform-chrome or screen-level rather than reusable primitives are represented inside the UI kits instead of as standalone components: `operating.system-ui`, `page.template`, `mobile.stack`, `tab.home`, `card/pdp/ymal`, `card/pdp/blt`, `card/pdp/reviews`, `button.liquidglass` / `Button - Liquid Glass - Symbol` (iOS "liquid glass" experiments), and the individual `loading-spinner.*` / `select.*` / `select.group.*` variants (folded into `Spinner` and `Select`).

---

## UI kits

- **`ui_kits/asos-web/`** — desktop storefront: **PLP → PDP → Bag → Sign in**.
- **`ui_kits/asos-account/`** — My Account: **orders → returns → order detail**, with a light/dark toggle.
- **`ui_kits/asos-returns/`** — Exchange/Return: **select items → summary → drop-off → confirmation**, with a return/exchange mode switch and a light/dark toggle.

Each has its own `README.md` including a Figma-name mapping table. Open the kit's `index.html`.

---

## Repository index

- `styles.css` — **the** entry point consumers link. `@import`s the token + font closure only.
- `tokens/` — `fonts.css`, `colors.css` (global palette + semantic light/dark), `typography.css`, `spacing.css`, `shape.css`, `elevation.css`, `layout.css`
- `assets/fonts/` — Futura PT webfonts (Book/Medium/Demi/Heavy/Bold woff2)
- `components/<group>/` — reusable primitives (`.jsx` + `.d.ts` + `.prompt.md` + a `@dsCard` html)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Shape, Brand)
- `ui_kits/asos-web/` — storefront recreation
- `ui_kits/asos-account/` — My Account recreation
- `ui_kits/asos-returns/` — Exchange/Return flow recreation
- `thumbnail.html` — homepage tile
- `docs/figma-make/*`, `packages/tokens/exports/*`, `src/stories/fonts/*` — raw source data copied from the export (reference)
- `SKILL.md` — Agent-Skills-compatible entry point
- `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` — generated automatically; do not edit

## Caveats / open items
1. **Icons** are Lucide substitutes — the real Thread DS icon set wasn't in the export. Please supply it.
2. **No ASOS logo** in the source — wordmark shown in type. Please supply the official logo.
3. **Product imagery** is flat tint placeholders — no photography ships with the DS.
4. **Emphasis weight is 600 (Demi)**, per the Typography Tokens page. The earlier `text-styles.json` export labelled these faces "Heavy"; the numeric weights from the token page win. All five Futura PT weights are loaded, so this is a one-line change in `tokens/typography.css` if 700 turns out to be correct.
5. **The flow recreations were built from a written component-inventory reference, not from the Figma frames directly** — no Figma connector was available in this environment. Composition, sequence and naming follow the reference exactly; exact paddings inside the newer cards are inferred from the token scale. Attach frame exports or Dev Mode specs and I'll tighten them.
