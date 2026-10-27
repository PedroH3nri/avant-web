/**
 * Tema e cor do sistema, escolhas de cada pessoa (vêm do /auth/me como ``theme`` e ``accent``).
 * O navegador lembra o tema para a primeira tela não piscar. Só ``--primary`` muda com a cor.
 */

import { ref, watch } from 'vue'
import type { AccentId, Theme } from '@/lib/types'

export type { AccentId, Theme }

export interface Accent {
  id: AccentId
  /** Cor da amostra no seletor. */
  hex: string
  light: string
  dark: string
}

export const ACCENTS: Accent[] = [
  { id: 'default', hex: '#171717', light: '0 0% 9%', dark: '0 0% 93%' },
  { id: 'blue', hex: '#0062e6', light: '212 100% 45%', dark: '212 100% 62%' },
  { id: 'green', hex: '#11804c', light: '152 76% 28%', dark: '150 60% 52%' },
  { id: 'purple', hex: '#6d32d4', light: '262 70% 52%', dark: '262 85% 74%' },
  { id: 'orange', hex: '#d9530b', light: '22 92% 44%', dark: '26 95% 60%' },
]

export const THEMES: Theme[] = ['light', 'dark', 'system']

/** Cor de destaque com o id, ou a padrão. */
export function accentFor(id: string | null | undefined): Accent {
  return ACCENTS.find((accent) => accent.id === id) ?? ACCENTS[0]!
}

/** CSS que troca a cor primária nos temas claro e escuro. */
export function accentCss(accent: Accent): string {
  if (accent.id === 'default') return ''
  const light = `--primary:${accent.light};--primary-foreground:0 0% 100%;`
  const dark = `--primary:${accent.dark};--primary-foreground:0 0% 4%;`
  return `:root{${light}}@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){${dark}}}:root[data-theme="dark"]{${dark}}`
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
