/**
 * Tema (por pessoa, neste navegador) e cor do sistema (por Empresa, vem da API como
 * ``accent_color``). Só ``--primary`` e o texto sobre ele mudam com a cor.
 */

import { ref, watch } from 'vue'

export type Theme = 'light' | 'dark' | 'system'

export interface Accent {
  id: 'default' | 'blue' | 'green' | 'purple' | 'orange'
  hex: string // o que vai para a API; a Empresa sem cor (null) usa o padrão
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

export function accentFor(hex: string | null | undefined): Accent {
  const found = ACCENTS.find((a) => a.hex.toLowerCase() === hex?.toLowerCase())
  return found ?? ACCENTS[0]!
}

export function accentCss(a: Accent): string {
  if (a.id === 'default') return ''
  const light = `--primary:${a.light};--primary-foreground:0 0% 100%;`
  const dark = `--primary:${a.dark};--primary-foreground:0 0% 4%;`
  return `:root{${light}}@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){${dark}}}:root[data-theme="dark"]{${dark}}`
}

export function applyAccent(hex: string | null | undefined) {
  let el = document.getElementById('avant-accent') as HTMLStyleElement | null
  if (!el) {
    el = document.createElement('style')
    el.id = 'avant-accent'
    document.head.appendChild(el)
  }
  el.textContent = accentCss(accentFor(hex))
}

const STORAGE = 'avant.theme'

function savedTheme(): Theme {
  try {
    const v = localStorage.getItem(STORAGE)
    if (v === 'light' || v === 'dark' || v === 'system') return v
  } catch {
    // sem localStorage
  }
  return 'system'
}

export const theme = ref<Theme>(savedTheme())

watch(
  theme,
  (v) => {
    try {
      localStorage.setItem(STORAGE, v)
    } catch {
      // segue sem lembrar
    }
    const root = document.documentElement
    if (v === 'system') root.removeAttribute('data-theme')
    else root.setAttribute('data-theme', v)
  },
  { immediate: true },
)
