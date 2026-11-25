/**
 * Tema personalizado da pessoa: das sete cores escolhidas (fundo, menu lateral, cartões, texto,
 * cor principal, bordas e destaque do foco e do hover) saem as variáveis do painel. Fundos suaves e texto secundário são
 * misturas do fundo com o texto; rodapé dos cartões e campos são o cartão mais escuro; o texto
 * dos botões fica branco ou quase preto, o que ler melhor. Tema sem borda guardada usa a mistura
 * do fundo com o texto.
 * Cada cor pode ter opacidade (``#rrggbbaa``): a cor é composta sobre a camada de baixo (o fundo
 * sobre o branco, menu e cartões sobre o fundo, texto e botão sobre os cartões), que é o que a
 * tela mostraria com a transparência.
 */

/** As seis cores de um tema, em ``#rrggbb`` ou ``#rrggbbaa`` (iguais ao ``dto.py`` de themes). */
export interface ThemeColors {
  background: string
  sidebar: string
  card: string
  text: string
  primary: string
  border: string
  highlight: string
}

/** As cores como a API devolve: temas antigos vêm sem borda. */
export type SavedThemeColors = Omit<ThemeColors, 'border' | 'highlight'> & { border?: string | null; highlight?: string | null }

export const COLOR_KEYS: (keyof ThemeColors)[] = ['background', 'sidebar', 'card', 'text', 'primary', 'border', 'highlight']

/** Cores do tema novo: as do tema escuro com o azul dos links como cor principal. */
export const STARTER_COLORS: ThemeColors = {
  background: '#0b1220',
  sidebar: '#0f172a',
  card: '#111a2e',
  text: '#e6edf7',
  primary: '#2563eb',
  border: '#252c3a',
  highlight: '#60a5fa',
}

const WHITE = '#ffffff'
const NEAR_BLACK = '#0a0a0a'
const HEX = /^#[0-9a-f]{6}([0-9a-f]{2})?$/i
const RGBA = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d*\.?\d+)\s*)?\)$/i
const OPAQUE_LENGTH = 7
const BORDER_WEIGHT = 0.12
const FOOTER_SHADE = 0.1
const FIELD_SHADE = 0.18
const GLOW_ALPHA = 0.3
const MAX_CHANNEL = 255

/** Diz se o texto é uma cor ``#rrggbb`` ou ``#rrggbbaa``. */
export function isHexColor(value: string): boolean {
  return HEX.test(value.trim())
}

/** A opacidade da cor, de 0 a 1 (``#rrggbb`` é 1). */
export function alphaOf(hex: string): number {
  const value = hex.trim()
  return value.length > OPAQUE_LENGTH ? parseInt(value.slice(OPAQUE_LENGTH, OPAQUE_LENGTH + 2), 16) / MAX_CHANNEL : 1
}

/** A cor sem a opacidade, em ``#rrggbb`` (para o seletor de cor do navegador). */
export function opaque(hex: string): string {
  return hex.trim().slice(0, OPAQUE_LENGTH).toLowerCase()
}

/** A cor com a opacidade dada (0 a 1); opacidade total fica em ``#rrggbb``. */
export function withAlpha(hex: string, alpha: number): string {
  const clamped = Math.min(1, Math.max(0, alpha))
  if (clamped >= 1) return opaque(hex)
  return `${opaque(hex)}${Math.round(clamped * MAX_CHANNEL).toString(16).padStart(2, '0')}`
}

/** A cor como o CSS escreve: ``rgba(r, g, b, a)``. */
export function toRgba(hex: string): string {
  const [red, green, blue] = channels(hex)
  return `rgba(${red}, ${green}, ${blue}, ${Math.round(alphaOf(hex) * 100) / 100})`
}

/** Lê uma cor em ``#rrggbb``, ``#rrggbbaa``, ``rgb()`` ou ``rgba()``; vazio se não for cor. */
export function parseColor(text: string): string | null {
  const value = text.trim().toLowerCase()
  if (HEX.test(value)) return value.length > OPAQUE_LENGTH && value.endsWith('ff') ? opaque(value) : value
  const match = RGBA.exec(value)
  if (!match) return null
  const parts = match.slice(1, 4).map(Number)
  const alpha = match[4] === undefined ? 1 : Number(match[4])
  if (parts.some((part) => part > MAX_CHANNEL) || alpha > 1) return null
  return withAlpha(toHex(parts), alpha)
}

/** A cor composta sobre a camada de baixo (já opaca), como a tela mostra a transparência. */
export function flatten(hex: string, under: string): string {
  return mix(under, opaque(hex), alphaOf(hex))
}

/** As sete cores já compostas, de baixo para cima: o fundo sobre o branco, menu e cartões sobre
 * o fundo, texto, botão, borda e destaque sobre os cartões. */
export function flattenColors(colors: ThemeColors): ThemeColors {
  const background = flatten(colors.background, WHITE)
  const card = flatten(colors.card, background)
  return {
    background,
    sidebar: flatten(colors.sidebar, background),
    card,
    text: flatten(colors.text, card),
    primary: flatten(colors.primary, card),
    border: flatten(colors.border, card),
    highlight: flatten(colors.highlight, card),
  }
}

/** Um par de cores que precisa de contraste mínimo para o tema ser legível (igual ao
 * ``theme_contrast.py`` do avant-core). */
export interface ContrastRule {
  key: 'textBackground' | 'textCard' | 'primaryCard' | 'highlightCard'
  front: keyof ThemeColors
  back: keyof ThemeColors
  minimum: number
}

export const CONTRAST_RULES: ContrastRule[] = [
  { key: 'textBackground', front: 'text', back: 'background', minimum: 4.5 },
  { key: 'textCard', front: 'text', back: 'card', minimum: 4.5 },
  { key: 'primaryCard', front: 'primary', back: 'card', minimum: 3 },
  { key: 'highlightCard', front: 'highlight', back: 'card', minimum: 3 },
]

/** As regras que o tema não cumpre, com o contraste medido nas cores já compostas. */
export function failedRules(colors: ThemeColors): { rule: ContrastRule; ratio: number }[] {
  const shown = flattenColors(colors)
  return CONTRAST_RULES.map((rule) => ({ rule, ratio: contrast(shown[rule.front], shown[rule.back]) })).filter(
    ({ rule, ratio }) => ratio < rule.minimum,
  )
}

/** A borda calculada como antes: o fundo com um pouco do texto. */
export function derivedBorder(colors: Omit<ThemeColors, 'border' | 'highlight'>): string {
  const background = flatten(colors.background, WHITE)
  return mix(background, flatten(colors.text, flatten(colors.card, background)), BORDER_WEIGHT)
}

/** As cores salvas com borda e destaque preenchidos: a borda calculada e, no destaque, a cor
 * principal, quando o tema não tem. */
export function withBorder(colors: SavedThemeColors): ThemeColors {
  return { ...colors, border: colors.border || derivedBorder(colors), highlight: colors.highlight || colors.primary }
}

/** A cor em vermelho, verde e azul, de 0 a 255. */
function channels(hex: string): [number, number, number] {
  const value = hex.trim().replace('#', '')
  return [0, 2, 4].map((start) => parseInt(value.slice(start, start + 2), 16)) as [number, number, number]
}

/** A cor ``#rrggbb`` dos três canais. */
function toHex(values: number[]): string {
  return `#${values.map((value) => Math.round(value).toString(16).padStart(2, '0')).join('')}`
}

/** Mistura duas cores: ``weight`` 0 é só a primeira e 1 é só a segunda. */
export function mix(first: string, second: string, weight: number): string {
  const [from, to] = [channels(first), channels(second)]
  return toHex(from.map((value, index) => value + (to[index]! - value) * weight))
}

/** Luminância relativa da cor (WCAG), de 0 a 1. */
export function luminance(hex: string): number {
  const linear = channels(hex).map((value) => {
    const unit = value / 255
    return unit <= 0.03928 ? unit / 12.92 : ((unit + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * linear[0]! + 0.7152 * linear[1]! + 0.0722 * linear[2]!
}

/** Contraste entre duas cores (WCAG), de 1 a 21. */
export function contrast(first: string, second: string): number {
  const [lighter, darker] = [luminance(first), luminance(second)].sort((left, right) => right - left)
  return (lighter! + 0.05) / (darker! + 0.05)
}

/** A cor de texto que lê melhor sobre o fundo: branco ou quase preto. */
export function readableOn(background: string): string {
  return contrast(background, WHITE) >= contrast(background, NEAR_BLACK) ? WHITE : NEAR_BLACK
}

/** Diz se o fundo é escuro: aí os avisos e os gráficos usam os tons do tema escuro. */
export function isDarkBackground(background: string): boolean {
  return readableOn(flatten(background, WHITE)) === WHITE
}

/** A cor no formato das variáveis do painel: ``h s% l%`` sem ``hsl()``. */
export function toHslTriplet(hex: string): string {
  const [red, green, blue] = channels(hex).map((value) => value / 255) as [number, number, number]
  const highest = Math.max(red, green, blue)
  const lowest = Math.min(red, green, blue)
  const lightness = (highest + lowest) / 2
  const spread = highest - lowest
  let hue = 0
  let saturation = 0
  if (spread !== 0) {
    saturation = spread / (1 - Math.abs(2 * lightness - 1))
    if (highest === red) hue = ((green - blue) / spread) % 6
    else if (highest === green) hue = (blue - red) / spread + 2
    else hue = (red - green) / spread + 4
    hue = Math.round(hue * 60)
    if (hue < 0) hue += 360
  }
  return `${hue} ${Math.round(saturation * 1000) / 10}% ${Math.round(lightness * 1000) / 10}%`
}

/** As variáveis do painel tiradas das sete cores (já compostas), em ``#rrggbb``. */
export function themeVariables(colors: ThemeColors): Record<string, string> {
  const { background, sidebar, card, text, primary, border, highlight } = flattenColors(colors)
  const sidebarText = contrast(sidebar, text) >= 4.5 ? text : readableOn(sidebar)
  const pageHighlight = legibleHighlight(highlight, background, text)
  const sidebarHighlight = legibleHighlight(highlight, sidebar, sidebarText)
  return {
    background,
    foreground: text,
    card,
    'card-foreground': text,
    popover: card,
    'popover-foreground': text,
    primary,
    'primary-foreground': readableOn(primary),
    secondary: mix(background, text, 0.08),
    'secondary-foreground': text,
    muted: mix(background, text, 0.03),
    'muted-foreground': mix(text, background, 0.38),
    accent: mix(background, text, 0.07),
    'accent-foreground': text,
    border,
    input: border,
    link: pageHighlight,
    highlight: pageHighlight,
    ring: highlight,
    'glow-color': highlight,
    'hover-border': highlight,
    field: mix(card, NEAR_BLACK, FIELD_SHADE),
    dialog: card,
    'card-footer': mix(card, NEAR_BLACK, FOOTER_SHADE),
    sidebar,
    'sidebar-foreground': sidebarText,
    'sidebar-muted': mix(sidebarText, sidebar, 0.38),
    'sidebar-active': mix(sidebar, sidebarText, 0.1),
    'sidebar-hover': mix(sidebar, sidebarText, 0.07),
    'sidebar-selected': mix(sidebar, highlight, 0.14),
    'sidebar-highlight': sidebarHighlight,
  }
}

/** A cor de destaque para texto sobre ``surface``; sem contraste de 3:1, fica a cor do texto. */
function legibleHighlight(highlight: string, surface: string, text: string): string {
  return contrast(surface, highlight) >= 3 ? highlight : text
}

/** O CSS do tema: vale com ``data-custom-theme`` no ``<html>`` e ganha do claro, do escuro e da
 * cor secundária. */
export function customThemeCss(colors: ThemeColors): string {
  const variables = Object.entries(themeVariables(colors))
    .map(([name, hex]) => `--${name}:${toHslTriplet(hex)};`)
    .join('')
  return `html:root[data-custom-theme][data-custom-theme]{${variables}--glow-alpha:${GLOW_ALPHA};}`
}
