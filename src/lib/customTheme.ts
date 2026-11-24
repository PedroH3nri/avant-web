/**
 * Tema personalizado da pessoa: das cinco cores escolhidas (fundo, menu lateral, cartões, texto e
 * cor principal) saem as variáveis do painel. Bordas, fundos suaves e texto secundário são
 * misturas do fundo com o texto; o texto dos botões fica branco ou quase preto, o que ler melhor.
 */

/** As cinco cores de um tema, em ``#rrggbb`` (iguais ao ``dto.py`` de themes). */
export interface ThemeColors {
  background: string
  sidebar: string
  card: string
  text: string
  primary: string
}

export const COLOR_KEYS: (keyof ThemeColors)[] = ['background', 'sidebar', 'card', 'text', 'primary']

/** Cores do tema novo: as do tema escuro com o azul dos links como cor principal. */
export const STARTER_COLORS: ThemeColors = {
  background: '#0b1220',
  sidebar: '#0f172a',
  card: '#111a2e',
  text: '#e6edf7',
  primary: '#2563eb',
}

const WHITE = '#ffffff'
const NEAR_BLACK = '#0a0a0a'
const HEX = /^#[0-9a-f]{6}$/i

/** Diz se o texto é uma cor ``#rrggbb``. */
export function isHexColor(value: string): boolean {
  return HEX.test(value.trim())
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
  return readableOn(background) === WHITE
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

/** As variáveis do painel tiradas das cinco cores, em ``#rrggbb``. */
export function themeVariables(colors: ThemeColors): Record<string, string> {
  const { background, sidebar, card, text, primary } = colors
  const sidebarText = contrast(sidebar, text) >= 4.5 ? text : readableOn(sidebar)
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
    border: mix(background, text, 0.12),
    input: mix(background, text, 0.2),
    sidebar,
    'sidebar-foreground': sidebarText,
    'sidebar-muted': mix(sidebarText, sidebar, 0.38),
    'sidebar-active': mix(sidebar, sidebarText, 0.1),
  }
}

/** O CSS do tema: vale com ``data-custom-theme`` no ``<html>`` e ganha do claro, do escuro e da
 * cor secundária. */
export function customThemeCss(colors: ThemeColors): string {
  const variables = Object.entries(themeVariables(colors))
    .map(([name, hex]) => `--${name}:${toHslTriplet(hex)};`)
    .join('')
  return `html:root[data-custom-theme][data-custom-theme]{${variables}}`
}
