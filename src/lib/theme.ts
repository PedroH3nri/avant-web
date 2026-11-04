/**
 * Tema e cor do sistema, escolhas de cada pessoa (vêm do /auth/me como ``theme`` e ``accent``).
 * O navegador lembra o tema para a primeira tela não piscar. A cor secundária muda ``--primary``
 * com um tom por tema.
 */

import { ref, watch } from 'vue'
import type { AccentId, Theme } from '@/lib/types'

export type { AccentId, Theme }

export interface Accent {
  id: AccentId
  /** Cor da amostra fora do painel (e-mail, documentação). */
  hex: string
  /** Tom e cor do texto do botão em cada tema (HSL sem ``hsl()``). */
  light: string
  lightText: string
  dark: string
  darkText: string
  groone: string
  grooneText: string
  /** Borda clara do botão no GroOne, para a cor que some no fundo azul-marinho. */
  grooneEdge?: string
}

/** A cor secundária do sistema: o padrão e mais nove, cada uma com um tom por tema. */
export const ACCENTS: Accent[] = [
  { id: 'default', hex: '#171717', light: '0 0% 9%', lightText: '0 0% 100%', dark: '0 0% 93%', darkText: '0 0% 4%', groone: '215 78% 27%', grooneText: '0 0% 100%' },
  { id: 'blue', hex: '#0062e6', light: '212 100% 45%', lightText: '0 0% 100%', dark: '212 100% 62%', darkText: '0 0% 4%', groone: '212 85% 40%', grooneText: '0 0% 100%' },
  { id: 'navy', hex: '#0a213d', light: '213 72% 14%', lightText: '0 0% 100%', dark: '213 55% 45%', darkText: '0 0% 100%', groone: '213 62% 21%', grooneText: '0 0% 100%', grooneEdge: '213 45% 60%' },
  { id: 'cyan', hex: '#0c7f99', light: '192 85% 32%', lightText: '0 0% 100%', dark: '189 75% 52%', darkText: '0 0% 4%', groone: '192 80% 28%', grooneText: '0 0% 100%' },
  { id: 'green', hex: '#11804c', light: '152 76% 28%', lightText: '0 0% 100%', dark: '150 60% 52%', darkText: '0 0% 4%', groone: '152 70% 25%', grooneText: '0 0% 100%' },
  { id: 'purple', hex: '#6d32d4', light: '262 70% 52%', lightText: '0 0% 100%', dark: '262 85% 74%', darkText: '0 0% 4%', groone: '262 55% 38%', grooneText: '0 0% 100%' },
  { id: 'pink', hex: '#c4207a', light: '330 72% 45%', lightText: '0 0% 100%', dark: '330 85% 70%', darkText: '0 0% 4%', groone: '330 65% 36%', grooneText: '0 0% 100%' },
  { id: 'orange', hex: '#d9530b', light: '22 92% 44%', lightText: '0 0% 100%', dark: '26 95% 60%', darkText: '0 0% 4%', groone: '22 85% 36%', grooneText: '0 0% 100%' },
  { id: 'gold', hex: '#dda60e', light: '44 88% 46%', lightText: '0 0% 9%', dark: '45 95% 58%', darkText: '0 0% 4%', groone: '43 80% 45%', grooneText: '214 72% 9%' },
  { id: 'graphite', hex: '#45505f', light: '215 16% 32%', lightText: '0 0% 100%', dark: '215 16% 70%', darkText: '0 0% 4%', groone: '215 25% 30%', grooneText: '0 0% 100%', grooneEdge: '215 25% 65%' },
]

export const THEMES: Theme[] = ['light', 'dark', 'groone', 'system']

/** Cor de destaque com o id, ou a padrão. */
export function accentFor(id: string | null | undefined): Accent {
  return ACCENTS.find((accent) => accent.id === id) ?? ACCENTS[0]!
}

/** CSS que troca a cor primária em cada tema; no GroOne o padrão já vem do ``styles.css``. O foco
 * (``--ring``) fica com o azul do tema, para continuar visível com qualquer cor. */
export function accentCss(accent: Accent): string {
  if (accent.id === 'default') return ''
  const light = `--primary:${accent.light};--primary-foreground:${accent.lightText};`
  const dark = `--primary:${accent.dark};--primary-foreground:${accent.darkText};`
  const edge = accent.grooneEdge ? `--primary-edge:${accent.grooneEdge};` : ''
  const groone = `--primary:${accent.groone};--primary-foreground:${accent.grooneText};${edge}`
  return `:root{${light}}@media (prefers-color-scheme: dark){:root:not([data-theme="light"]):not([data-theme="groone"]){${dark}}}:root[data-theme="dark"]{${dark}}:root[data-theme="groone"]{${groone}}`
}

/** A cor da amostra no tema que vale agora (o do sistema já resolvido em claro ou escuro). */
export function swatchColor(accent: Accent, shown: 'light' | 'dark' | 'groone'): string {
  return `hsl(${accent[shown]})`
}

/** O tema que vale agora: o do sistema vira claro ou escuro pelo aparelho. */
export function shownTheme(value: Theme): 'light' | 'dark' | 'groone' {
  if (value !== 'system') return value
  return typeof matchMedia !== 'undefined' && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/** Aplica a cor de destaque da pessoa na página. */
export function applyAccent(id: string | null | undefined) {
  let element = document.getElementById('avant-accent') as HTMLStyleElement | null
  if (!element) {
    element = document.createElement('style')
    element.id = 'avant-accent'
    document.head.appendChild(element)
  }
  element.textContent = accentCss(accentFor(id))
}

const STORAGE = 'avant.theme'

/** Tema lembrado no navegador, ou o do sistema. */
function savedTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE)
    if (stored && (THEMES as string[]).includes(stored)) return stored as Theme
  } catch {
    // sem localStorage
  }
  return 'system'
}

export const theme = ref<Theme>(savedTheme())

watch(
  theme,
  (value) => {
    try {
      localStorage.setItem(STORAGE, value)
    } catch {
      // segue sem lembrar
    }
    const root = document.documentElement
    if (value === 'system') root.removeAttribute('data-theme')
    else root.setAttribute('data-theme', value)
  },
  { immediate: true },
)
