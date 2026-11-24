/**
 * Tema do painel, escolha de cada pessoa (vem do /auth/me como ``theme``).
 * O navegador lembra o tema (e as cores do personalizado) para a primeira tela não piscar. Cada
 * tema pronto tem as próprias cores (``styles.css``); o personalizado traz as que a pessoa escolheu.
 * Enquanto a pessoa edita um tema, ``previewColors`` mostra as cores no painel sem salvar.
 */

import { ref, watch } from 'vue'
import { customThemeCss, isDarkBackground, withBorder, type SavedThemeColors, type ThemeColors } from '@/lib/customTheme'
import type { AnimationArea, Theme } from '@/lib/types'

export type { Theme }

/** Os temas prontos; os personalizados vêm da conta da pessoa. */
export const THEMES: Theme[] = ['light', 'dark', 'groone', 'system']

/** O tema que vale agora: o do sistema vira claro ou escuro pelo aparelho, e o personalizado vira
 * claro ou escuro pelo fundo dele. */
export function shownTheme(value: Theme): 'light' | 'dark' | 'groone' {
  if (previewColors.value) return isDarkBackground(previewColors.value.background) ? 'dark' : 'light'
  if (value === 'custom' && customColors.value) return isDarkBackground(customColors.value.background) ? 'dark' : 'light'
  if (value !== 'system' && value !== 'custom') return value
  return typeof matchMedia !== 'undefined' && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const STORAGE = 'avant.theme'
const ANIMATIONS_STORAGE = 'avant.animations'
/** As áreas com animação, na ordem da tela; por padrão, todas. */
export const ANIMATION_AREAS: AnimationArea[] = ['fields', 'buttons', 'cards']
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

/** Áreas com animação lembradas no navegador, ou todas. */
function savedAnimations(): AnimationArea[] {
  try {
    const stored = localStorage.getItem(ANIMATIONS_STORAGE)
    if (stored !== null) return ANIMATION_AREAS.filter((area) => stored.split(',').includes(area))
  } catch {
    // sem localStorage
  }
  return [...ANIMATION_AREAS]
}

export const theme = ref<Theme>(savedTheme())
/** Áreas com animação de hover e foco que a pessoa deixou ligadas. */
export const animations = ref<AnimationArea[]>(savedAnimations())
/** As cores do tema personalizado em uso; vazio fora dele. */
export const customColors = ref<ThemeColors | null>(savedCustomColors())
/** Cores em edição, mostradas no painel inteiro antes de salvar; vazio fora do editor. */
export const previewColors = ref<ThemeColors | null>(null)

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
  [theme, customColors, previewColors],
  ([value, colors, preview]) => {
    const saved = value === 'custom' && colors !== null
    remember(STORAGE, value)
    remember(CUSTOM_STORAGE, saved ? JSON.stringify(colors) : null)
    const shown = preview ?? (saved ? colors : null)
    applyCustomCss(shown)
    const root = document.documentElement
    if (shown) root.setAttribute('data-custom-theme', '')
    else root.removeAttribute('data-custom-theme')
    const attribute = shown ? shownTheme(value) : value
    if (attribute === 'system' || attribute === 'custom') root.removeAttribute('data-theme')
    else root.setAttribute('data-theme', attribute)
  },
  { immediate: true },
)

watch(
  animations,
  (areas) => {
    remember(ANIMATIONS_STORAGE, areas.join(','))
    const off = ANIMATION_AREAS.filter((area) => !areas.includes(area))
    if (off.length) document.documentElement.setAttribute('data-motion-off', off.join(' '))
    else document.documentElement.removeAttribute('data-motion-off')
  },
  { immediate: true },
)
