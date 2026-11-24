/**
 * Tema do painel, escolha de cada pessoa (vem do /auth/me como ``theme``).
 * O navegador lembra o tema (e as cores do personalizado) para a primeira tela não piscar. Cada
 * tema pronto tem as próprias cores (``styles.css``); o personalizado traz as que a pessoa escolheu.
 */

import { ref, watch } from 'vue'
import { customThemeCss, isDarkBackground, withBorder, type SavedThemeColors, type ThemeColors } from '@/lib/customTheme'
import type { Theme } from '@/lib/types'

export type { Theme }

/** Os temas prontos; os personalizados vêm da conta da pessoa. */
export const THEMES: Theme[] = ['light', 'dark', 'groone', 'system']

/** O tema que vale agora: o do sistema vira claro ou escuro pelo aparelho, e o personalizado vira
 * claro ou escuro pelo fundo dele. */
export function shownTheme(value: Theme): 'light' | 'dark' | 'groone' {
  if (value === 'custom' && customColors.value) return isDarkBackground(customColors.value.background) ? 'dark' : 'light'
  if (value !== 'system' && value !== 'custom') return value
  return typeof matchMedia !== 'undefined' && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const STORAGE = 'avant.theme'
const CUSTOM_STORAGE = 'avant.customTheme'

/** Tema lembrado no navegador, ou o do sistema. */
function savedTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE)
    if (stored && ([...THEMES, 'custom'] as string[]).includes(stored)) return stored as Theme
  } catch {
    // sem localStorage
  }
  return 'system'
}

/** Cores do tema personalizado lembradas no navegador, ou vazio. */
function savedCustomColors(): ThemeColors | null {
  try {
    const stored = localStorage.getItem(CUSTOM_STORAGE)
    return stored ? withBorder(JSON.parse(stored) as SavedThemeColors) : null
  } catch {
    return null
  }
}

export const theme = ref<Theme>(savedTheme())
/** As cores do tema personalizado em uso; vazio fora dele. */
export const customColors = ref<ThemeColors | null>(savedCustomColors())

/** Guarda um valor no navegador, ou apaga quando vazio; sem localStorage, segue sem lembrar. */
function remember(key: string, value: string | null) {
  try {
    if (value === null) localStorage.removeItem(key)
    else localStorage.setItem(key, value)
  } catch {
    // segue sem lembrar
  }
}

/** Põe ou tira o CSS do tema personalizado na página. */
function applyCustomCss(colors: ThemeColors | null) {
  let element = document.getElementById('avant-custom-theme') as HTMLStyleElement | null
  if (!colors) {
    element?.remove()
    return
  }
  if (!element) {
    element = document.createElement('style')
    element.id = 'avant-custom-theme'
    document.head.appendChild(element)
  }
  element.textContent = customThemeCss(colors)
}

watch(
  [theme, customColors],
  ([value, colors]) => {
    const custom = value === 'custom' && colors !== null
    remember(STORAGE, value)
    remember(CUSTOM_STORAGE, custom ? JSON.stringify(colors) : null)
    applyCustomCss(custom ? colors : null)
    const root = document.documentElement
    if (custom) root.setAttribute('data-custom-theme', '')
    else root.removeAttribute('data-custom-theme')
    const attribute = custom ? shownTheme(value) : value
    if (attribute === 'system' || attribute === 'custom') root.removeAttribute('data-theme')
    else root.setAttribute('data-theme', attribute)
  },
  { immediate: true },
)
