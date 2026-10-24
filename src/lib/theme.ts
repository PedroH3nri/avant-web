/**
 * Tema (por pessoa, neste navegador) e cor do sistema (por Empresa, vem da API como
 * ``accent_color``). Só ``--primary`` e o texto sobre ele mudam com a cor.
 */

import { ref, watch } from 'vue'

export type Theme = 'light' | 'dark' | 'system'

export interface Accent {
  id: 'default' | 'blue' | 'green' | 'purple' | 'orange'
  /** O que vai para a API; a Empresa sem cor (null) usa o padrão. */
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

/** Cor de destaque cadastrada para o hex, ou a padrão. */
export function accentFor(hex: string | null | undefined): Accent {
  const found = ACCENTS.find((accent) => accent.hex.toLowerCase() === hex?.toLowerCase())
  return found ?? ACCENTS[0]!
}

/** CSS que troca a cor primária nos temas claro e escuro. */
export function accentCss(accent: Accent): string {
  if (accent.id === 'default') return ''
  const light = `--primary:${accent.light};--primary-foreground:0 0% 100%;`
  const dark = `--primary:${accent.dark};--primary-foreground:0 0% 4%;`
  return `:root{${light}}@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){${dark}}}:root[data-theme="dark"]{${dark}}`
}

/** Aplica a cor de destaque da Empresa na página. */
export function applyAccent(hex: string | null | undefined) {
  let element = document.getElementById('avant-accent') as HTMLStyleElement | null
  if (!element) {
    element = document.createElement('style')
    element.id = 'avant-accent'
    document.head.appendChild(element)
  }
  element.textContent = accentCss(accentFor(hex))
}

const STORAGE = 'avant.theme'

/** Tema salvo no navegador, ou o do sistema. */
function savedTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE)
    if (stored === 'light' || stored === 'dark' || stored === 'system') return stored
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
