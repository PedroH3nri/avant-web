---
name: Avant
description: Painel do Avant (Groone) para donos de sites que monetizam com AdSense e Google Ad Manager.
colors:
  surface: "#FFFFFF"
  ink: "#171717"
  band: "#FAFAFA"
  chip: "#F1F1F1"
  ink-muted: "#666666"
  hairline: "#EBEBEB"
  field-border: "#DBDBDB"
  link: "#0062D6"
  focus: "#0074F5"
  ok: "#1E853F"
  warn: "#C27400"
  bad: "#D21E28"
  pending: "#C47A08"
  surface-dark: "#0A0A0A"
  ink-dark: "#EDEDED"
  hairline-dark: "#262626"
  ink-muted-dark: "#A1A1A1"
typography:
  page-title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.04em"
  card-title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  auth-title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.03em"
  step-title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  caption:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  data-mono:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  control: "6px"
  card: "8px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    height: "36px"
    padding: "0 16px"
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    height: "36px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    height: "40px"
  badge:
    backgroundColor: "{colors.chip}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "20px"
    padding: "0 8px"
  card-footer:
    backgroundColor: "{colors.band}"
    textColor: "{colors.ink-muted}"
    padding: "12px 24px"
---

# Design System: Avant

## Overview

The category standard for a SaaS dashboard, played straight at the craft level of the Vercel dashboard (the owner's reference, 2026-10-22). Near-monochrome, dense where data lives, quiet everywhere else. Brand shows up in precision: hairline borders, tight heading tracking, tabular numbers, and status that reads at a glance. Built light-first for desk work in daylight, with a full dark theme.

Status: approved by the owner on 2026-10-22 as the official Avant identity. New surfaces and the production Vue 3 build inherit this system. The mark (Ápice) was chosen on 2026-10-26; see Brand mark.

## Brand mark

The Ápice (chosen by the owner on 2026-10-26, avant-web#56): an A without a crossbar, read as the peak of a revenue line, with a dot where the crossbar would be, the measured data point. Drawn on a 32 grid: stroke `M7 25L16 7.5L25 25` at 3.4 with miter joins and butt ends, dot at (16, 19.4) with radius 2.5. Source of truth: `src/components/ui/Mark.vue`.

- **Always black and white.** Never the company accent, never blue, never a gradient. Tile: ink square (22.5% corner radius) with the mark in white at 78%; in dark mode the tile is #EDEDED with the mark in #0A0A0A. Bare mark (`<Mark bare />`): the mark alone in the current text color.
- **Use it wherever the product identifies itself:** sidebar header, sign-in screens, favicon (`public/favicon.svg`, follows the browser theme), app icons (`apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, maskable 512, `site.webmanifest`).
- **Footer watermark:** every screen ends with the bare mark at 14px and "Avant by GroOne" in 12px muted text (`BrandSignature.vue`); the sign-in footer adds the domain.
- Exploration of the other directions: https://claude.ai/artifact/H3uyQrB1WGcRVGR4XUVhyP

## Colors

### Primary
Ink (#171717) is the primary: primary buttons, the active tab underline, the company's seats in the usage bar. In dark mode it flips to #EDEDED with dark text. Each theme has its own fixed colors (Claro, Escuro, GroOne; Sistema follows the device); there is no separate button color. A person may also create up to 3 **custom themes** in Minha conta with seven colors (background, sidebar, cards, text, main color, borders and highlight), each with opacity; the highlight is the focus color (selected fields: border + growing halo) and the hovered-button halo/border; the panel derives soft backgrounds, secondary text and button text from them, dialogs take the card color, and card footers and fields (inputs, selects, outline buttons) are the card color darkened (`--card-footer`, `--field`, `--dialog`; in ready themes they follow muted and background), and alerts and charts follow the light or dark tone of the background.

**GroOne theme** (Pedro, 04/11): a third theme beside Light and Dark, in the tones of the brand navy (#0A213D, from the GroOne logo). Background near-black navy, cards a step below #0A213D, the sidebar the same color as the top bar, and the default primary a deep blue (`215 78% 27%`) with white text. Marinho and Grafite get a light inner border on the primary button in this theme (`--primary-edge`), because they sink into the navy background. Charts use the dark-mode series colors.

### Neutral
White surface for headers, page bands and cards; #FAFAFA band behind the work area and inside card footers; #EBEBEB hairlines; #666666 secondary text.

### Named Rules
- **Blue is for links and focus only** in the Light and Dark themes. The GroOne theme and custom themes are the exceptions, chosen by the person. Every theme animates fields (hover: border toward the highlight; focus: border + halo, `.border-input`), button hover (1px lift + shadow, `.btn-motion`) and metric cards (dashboard widgets `.card-motion`: 2px lift + highlight border; KPI tiles `.kpi-motion`: highlight line growing at the base). Cards with forms do not move.
- **State is a dot plus a word.** Conectada (ok), Testando conexão (warn), Sem acesso (bad), Convite enviado / pendente (pending). Never color alone.

## Typography

Geist for everything; Geist Mono only for network codes, the service-account email and other identifiers people copy. Ramp: page title 32px/600/-0.04em; sign-in titles 28px; card title 20px/600; step titles 16px; page subtitles and sign-in fields 15px; body 14px; labels and meta 13px; badges, column group labels and avatar initials 12px. Numbers in tables and counters use tabular figures.

## Layout

Left sidebar (248px, #FAFAFA, hairline right border): mark and "Avant by Groone" wordmark at the top, navigation with icons in a fixed order (Dashboard; group Inventário: Clientes, Equipes, Networks, Contratos, Sites; group Relatórios: Ad Manager, Page Views; group Empresa: Equipe Groone, Papéis e permissões; items of the Groone team only are hidden for clients; the menu follows the active company: the Groone company shows the internal panel, a client company shows that company's links, also for Groone staff who switched in the navbar), and at the bottom Configurações and the account. A 56px white navbar over the main column holds the company switcher (left) and the PT/EN/ES switch (right); its bottom border lines up with the sidebar header. Below 1024px the sidebar becomes a drawer opened from a menu button in that same navbar. The main column starts with a white page-header band with the title; then the work area on the #FAFAFA band, max width 1200px up to a 1600px screen, then wider in steps so ultrawide monitors are not left with empty sides (1440px from 1600px, 1760px from 1920px, 2160px from 2560px; page header follows the same width), 24px gaps. Detail pages may add a third column from 1920px. Settings use a 200px section list beside the cards. Tables scroll inside their own container on phones.

## Elevation & Depth

Flat. Borders separate objects; the only shadows are the menus and toasts from the component library.

## Shapes

6px controls, 8px cards and tables, pills for badges, circles for avatars and status dots.

## Components

### Buttons
Primary is ink-filled; outline for secondary actions; ghost inside table rows. 36px default, 40px in forms, 48px on the login page.

### Cards / Containers
A card has a body (24px padding, 20px title, muted description) and, when it saves something, a muted footer with the explanatory note on the left and the single action on the right.

**Two cards per row** (Pedro, 22/11): on wide screens (from 1024px) small cards with little data, such as a status, a short field, an image or a few label/value lines, go two per row (`lg:grid-cols-2` on the page body). Cards with a table, a long list, a feed or a long form take the whole row (`lg:col-span-2`). Cards in the same row share the height and the footer sits at the bottom, so there is no blank area under it. Never let a wide item open a second column by accident: declare the columns on the page body.

### Inputs / Fields
40px, label above in 13px muted, hint or error below in 13px. Errors say what is wrong and how to fix it.

### Selects
Never the browser's native `<select>`. Every choice list uses the panel's own select (`src/components/ui/Select.vue`, prototype `search-select.tsx`), Select2-style: a 40px button like an input with the chosen label and a chevron, and a popover list as wide as the button with a check on the chosen option. From 8 options a search field sits on top of the list (accent and case insensitive, "Nada encontrado" when empty). Keyboard: arrows open and move, Home/End, Enter picks, Esc closes, a letter jumps when there is no search.

### Navigation
Sidebar items are 36px rows with a 16px icon; the active item gets the chip fill and medium weight, inactive items are gray and get a soft fill on hover. A red dot on an item flags a problem inside it (a network without access). Every item opens a working screen: no locked or "Em breve" items.

### Seat usage bar
One segment per seat of the Groone staff limit: ink for people, amber for pending invites, gray for free seats, with a legend underneath. The same strip, smaller, sits in the internal clients table.

### Filters and long lists in dialogs
**Filters on records tables** (Pedro, 23/11): every records table has filter selectors to add and to remove filters. The default view shows only search plus a few basic selects; a "Filtros" menu (`FiltersMenu`) next to "Colunas" adds and removes any filter, turning one off clears its value, and a saved view keeps the filters that have a value. Never one select per column in the default view.

**Install guides** (Pedro, 23/11): lists of things that go on the client site (Ad tags, Loaders) have a "Como instalar" outline button in the page header that opens a numbered step-by-step dialog (`InstallGuideDialog`), and each ad tag row has its own "Instalar" with the tag key.

Category filters are 28px pill chips: "Todas" first, the active chip ink-filled, the others outlined in gray, with `aria-pressed`. A long list inside a dialog (the role permissions) scrolls on its own inside a hairline box capped at about 44% of the screen height, with the thin `.scroll-thin` scrollbar, so the dialog never grows past the screen. Status filters above a table stay as the segmented tablist.

### Metrics and charts
KPI tiles sit in one hairline-divided strip: 13px muted label, 24px semibold value (20px on phones), and the change against the previous period as an arrow plus the words "acima/abaixo do anterior", green or red but never color alone. Clicking a tile picks the metric of the daily chart. **Color by metric** (Pedro, 11/11): every chart line, area, bar and legend dot takes the neon color of its metric, the same on every screen, from the report palette (`src/lib/metric-colors.ts`, prototype `METRIC_NEON`): revenue green, eCPM and RPM gold, impressions violet, requests orange, rates (PMR, fill rate, CTR, active view) cyan, clicks, page views and floor magenta, unfilled red. A custom metric takes the next free palette color, and two metrics of the same family in one chart never share a color. A color the person picks in a custom report still wins. The current period is a 2px line in the metric color over a faint area of the same color, the previous period and the control group a dashed gray line, hairline grid, tabular tick labels, one y-axis only. Two or more series always get a legend. Line charts follow the pointer (and the arrow keys) with a crosshair and a tooltip, and carry a hidden table for screen readers. Rankings (sites, countries) are horizontal 8px pill bars with the value written beside them. Money shows in the report currency (USD from Ad Manager), formatted by the panel language. Page Views (Relatórios) uses the same strip with three tiles (total, sites with visits, peak hour), the daily line, the 24 hours of the day as pill bars (every hour shown, zero when empty) beside the countries, and the site table; dates and hours are Brasília time. Price rules (Inventário, decisão 14) show money in the **network currency**, never converted: the gain against the control group is the daily line of revenue per thousand requests (rule in revenue green, control dashed gray), and a rule's history is an hourly chart where the floor (magenta) is a step line beside the eCPM (gold), with PMR, revenue and requests one tap away, above the engine's decisions (newest first) and the rule limits.

## Do's and Don'ts

### Do:
- Show the fix next to the problem (Reconectar beside a lost network).
- Label sample data as sample data.
- Keep every string in the PT/EN/ES dictionary.

### Don't:
- Don't add colored sidebars, gradients on surfaces, or soft-shadowed cards.
- Don't use blue for anything but links and focus, except in the GroOne theme or in a custom theme the person made.
- Don't use eyebrows above headings or big-number tiles as page structure.
