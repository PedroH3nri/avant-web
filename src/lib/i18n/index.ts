/**
 * Textos do painel em PT, EN e ES. Toda string da tela passa por aqui (DESIGN.md); os textos
 * ficam em ``source.ts`` e chegam por idioma (``virtual:i18n/<idioma>``), carregado sob demanda.
 * ``t('team.seats', { n: 3 })`` troca ``{n}`` pelo valor.
 */

import { computed, ref, shallowReactive, watch } from 'vue'
import type { Lang, Localized } from '../types'
import type { Key } from './source'

export type { Key } from './source'

type Messages = {
  dict: Record<string, string>
  errors: Record<string, string>
  audit: Record<string, string>
  fallback: string
}

const loaders: Record<Lang, () => Promise<{ default: Messages }>> = {
  pt: () => import('virtual:i18n/pt'),
  en: () => import('virtual:i18n/en'),
  es: () => import('virtual:i18n/es'),
}

const loaded = shallowReactive<Partial<Record<Lang, Messages>>>({})
const STORAGE = 'avant.lang'

/** Idioma inicial: o salvo, senão o do navegador, senão português. */
function initial(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE)
    if (saved === 'pt' || saved === 'en' || saved === 'es') return saved
  } catch {
    // navegador sem localStorage
  }
  const nav = (typeof navigator !== 'undefined' ? navigator.language : 'pt').slice(0, 2)
  return nav === 'en' || nav === 'es' ? nav : 'pt'
}

/** A pessoa já escolheu um idioma neste navegador? */
export function langChosen(): boolean {
  try {
    return localStorage.getItem(STORAGE) !== null
  } catch {
    return false
  }
}

export const lang = ref<Lang>(initial())

watch(
  lang,
  (value) => {
    if (typeof document !== 'undefined') document.documentElement.lang = value === 'pt' ? 'pt-BR' : value
  },
  { immediate: true },
)

/** Carrega os textos do idioma (uma vez). */
export async function loadLang(chosen: Lang): Promise<void> {
  if (loaded[chosen]) return
  loaded[chosen] = (await loaders[chosen]()).default
}

/** Textos do idioma inicial antes de montar o painel; se não chegarem, abre em português. */
export async function startLang(): Promise<void> {
  try {
    await loadLang(lang.value)
  } catch (error) {
    if (lang.value === 'pt') throw error
    await loadLang('pt')
    lang.value = 'pt'
  }
}

/** Os textos do idioma atual. */
function messages(): Messages {
  const found = loaded[lang.value]
  if (!found) throw new Error('textos do painel ainda não carregados (startLang)')
  return found
}

let latestChoice = 0

/** Troca de idioma depois que os textos chegam, se nenhuma troca mais nova veio no meio; devolve
 * false só quando os textos não chegaram (aí fica no idioma atual). */
export async function chooseLang(chosen: Lang): Promise<boolean> {
  const choice = ++latestChoice
  if (!loaded[chosen]) {
    try {
      await loadLang(chosen)
    } catch {
      return choice !== latestChoice
    }
    if (choice !== latestChoice) return true
  }
  lang.value = chosen
  try {
    localStorage.setItem(STORAGE, chosen)
  } catch {
    // segue sem lembrar
  }
  return true
}

/** Troca os ``{nome}`` do texto pelos valores. */
function fill(text: string, params?: Record<string, string | number>): string {
  if (!params) return text
  return text.replace(/\{(\w+)\}/g, (item, entry: string) => (entry in params ? String(params[entry]) : item))
}

/** Texto da chave no idioma atual. */
export function t(key: Key, params?: Record<string, string | number>): string {
  return fill(messages().dict[key] ?? key, params)
}

/** Texto com quantidade: com ``count`` igual a 1, usa a chave terminada em ``One`` quando existe. */
export function tn(key: Key, count: number, params?: Record<string, string | number>): string {
  const one = `${key}One`
  const chosen = count === 1 && one in messages().dict ? (one as Key) : key
  return t(chosen, { n: count, ...params })
}

/** Nome do grupo de permissões no idioma atual; um grupo novo da API sem texto aqui mostra a chave. */
export function permissionGroupLabel(group: string): string {
  const key = `perm.group.${group}`
  return key in messages().dict ? t(key as Key) : group
}

/** Nome vindo da API em vários idiomas (papéis, permissões). */
export function pick(name: Localized | null | undefined): string {
  if (!name) return ''
  return name[lang.value] ?? name.pt ?? Object.values(name)[0] ?? ''
}

/** Texto de uma ação da auditoria no idioma atual. */
export function auditText(action: string): string {
  return messages().audit[action] ?? action
}

/** Mensagem de erro da API no idioma atual. */
export function errorText(code: string, params?: Record<string, string | number>): string {
  const found = messages()
  return fill(found.errors[code] ?? found.fallback, params)
}

export const locale = computed(() => (lang.value === 'pt' ? 'pt-BR' : lang.value === 'es' ? 'es' : 'en'))

/** Data (e hora) no formato do idioma atual. */
export function formatDate(iso: string | null, withTime = true): string {
  if (!iso) return t('common.never')
  const date = new Date(iso)
  return new Intl.DateTimeFormat(locale.value, {
    dateStyle: 'short',
    ...(withTime ? { timeStyle: 'short' } : {}),
  }).format(date)
}

/** "há 5 min", "há 2 h"... para checagens e atividade. */
export function formatAgo(iso: string | null, now = Date.now()): string {
  if (!iso) return t('common.never')
  const secs = Math.round((new Date(iso).getTime() - now) / 1000)
  const rtf = new Intl.RelativeTimeFormat(locale.value, { numeric: 'auto', style: 'short' })
  const abs = Math.abs(secs)
  if (abs < 60) return rtf.format(secs, 'second')
  if (abs < 3600) return rtf.format(Math.round(secs / 60), 'minute')
  if (abs < 86400) return rtf.format(Math.round(secs / 3600), 'hour')
  return rtf.format(Math.round(secs / 86400), 'day')
}
