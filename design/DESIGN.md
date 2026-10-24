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

Status: approved by the owner on 2026-10-22 as the official Avant identity. New surfaces and the production Vue 3 build inherit this system; the monogram mark stays provisional until a logo exists.

## Colors

### Primary
Ink (#171717) is the primary: primary buttons, the active tab underline, the company's seats in the usage bar. In dark mode it flips to #EDEDED with dark text. Each Empresa may swap the primary for Azul, Verde, Roxo or Laranja in Configurações; only `--primary` and its foreground change.

### Neutral
White surface for headers, page bands and cards; #FAFAFA band behind the work area and inside card footers; #EBEBEB hairlines; #666666 secondary text.

### Named Rules
- **Blue is for links and focus only.** Never a fill, never a button.
- **State is a dot plus a word.** Conectada (ok), Testando conexão (warn), Sem acesso (bad), Convite enviado / pendente (pending). Never color alone.

## Typography

Geist for everything; Geist Mono only for network codes, the service-account email and other identifiers people copy. Ramp: page title 32px/600/-0.04em; sign-in titles 28px; card title 20px/600; step titles 16px; page subtitles and sign-in fields 15px; body 14px; labels and meta 13px; badges, column group labels and avatar initials 12px. Numbers in tables and counters use tabular figures.

## Layout

Left sidebar (248px, #FAFAFA, hairline right border): mark and "Avant by Groone" wordmark at the top, navigation with icons, a "Em breve" group for locked areas, and at the bottom the internal-panel link and the account. A 56px white navbar over the main column holds the company switcher (left) and the PT/EN/ES switch (right); its bottom border lines up with the sidebar header. Below 1024px the sidebar becomes a drawer opened from a menu button in that same navbar. The main column starts with a white page-header band with the title; then the work area on the #FAFAFA band, max width 1200px, 24px gaps. Settings use a 200px section list beside the cards. Tables scroll inside their own container on phones.

## Elevation & Depth

Flat. Borders separate objects; the only shadows are the menus and toasts from the component library.

## Shapes

6px controls, 8px cards and tables, pills for badges, circles for avatars and status dots.

## Components

### Buttons
Primary is ink-filled; outline for secondary actions; ghost inside table rows. 36px default, 40px in forms, 48px on the login page.

### Cards / Containers
A card has a body (24px padding, 20px title, muted description) and, when it saves something, a muted footer with the explanatory note on the left and the single action on the right.

### Inputs / Fields
40px, label above in 13px muted, hint or error below in 13px. Errors say what is wrong and how to fix it.

### Navigation
Sidebar items are 36px rows with a 16px icon; the active item gets the chip fill and medium weight, inactive items are gray and get a soft fill on hover. A red dot on an item flags a problem inside it (a network without access). Locked future areas (Métricas, Dashboards) sit under "Em breve" with a lock.

### Seat usage bar
One segment per seat of the Groone staff limit: ink for people, amber for pending invites, gray for free seats, with a legend underneath. The same strip, smaller, sits in the internal clients table.

### Filters and long lists in dialogs
Category filters are 28px pill chips: "Todas" first, the active chip ink-filled, the others outlined in gray, with `aria-pressed`. A long list inside a dialog (the role permissions) scrolls on its own inside a hairline box capped at about 44% of the screen height, with the thin `.scroll-thin` scrollbar, so the dialog never grows past the screen. Status filters above a table stay as the segmented tablist.

### Metrics and charts
KPI tiles sit in one hairline-divided strip: 13px muted label, 24px semibold value (20px on phones), and the change against the previous period as an arrow plus the words "acima/abaixo do anterior", green or red but never color alone. Clicking a tile picks the metric of the daily chart. Charts stay monochrome: the current period is a 2px ink line over a faint ink area, the previous period a dashed gray line, hairline grid, tabular tick labels, one y-axis only. Two or more series always get a legend. Line charts follow the pointer (and the arrow keys) with a crosshair and a tooltip, and carry a hidden table for screen readers. Rankings (sites, countries) are horizontal 8px pill bars with the value written beside them. Money shows in the report currency (USD from Ad Manager), formatted by the panel language.

## Do's and Don'ts

### Do:
- Show the fix next to the problem (Reconectar beside a lost network).
- Label sample data as sample data.
- Keep every string in the PT/EN/ES dictionary.

### Don't:
- Don't add colored sidebars, gradients on surfaces, or soft-shadowed cards.
- Don't use blue for anything but links and focus.
- Don't use eyebrows above headings or big-number tiles as page structure.
