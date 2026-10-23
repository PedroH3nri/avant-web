/** Regras de tela da página Minha conta. */

import type { ApiKey } from './types'

// A ordem importa: o Edge também diz Chrome, e o Chrome também diz Safari.
const BROWSERS: [RegExp, string][] = [
  [/Edg\//, 'Edge'],
  [/OPR\/|Opera/, 'Opera'],
  [/Firefox\//, 'Firefox'],
  [/Chrome\/|CriOS\//, 'Chrome'],
  [/Safari\//, 'Safari'],
]
const SYSTEMS: [RegExp, string][] = [
  [/iPhone|iPad|iPod/, 'iOS'],
  [/Android/, 'Android'],
  [/Windows/, 'Windows'],
  [/Mac OS X|Macintosh/, 'macOS'],
  [/Linux/, 'Linux'],
]
const first = (ua: string, list: [RegExp, string][]) => list.find(([re]) => re.test(ua))?.[1] ?? null

/** "Chrome no Windows" a partir do User-Agent, sem biblioteca: basta para reconhecer o aparelho. */
export function device(ua: string | null): { browser: string | null; os: string | null } {
  if (!ua) return { browser: null, os: null }
  return { browser: first(ua, BROWSERS), os: first(ua, SYSTEMS) }
}

export type KeyState = 'active' | 'revoked' | 'expired'

export function keyState(key: Pick<ApiKey, 'revoked_at' | 'expires_at'>, now = Date.now()): KeyState {
  if (key.revoked_at) return 'revoked'
  if (new Date(key.expires_at).getTime() <= now) return 'expired'
  return 'active'
}

/** Ativas primeiro, depois as mais novas. */
export function sortKeys(keys: ApiKey[], now = Date.now()): ApiKey[] {
  const rank = (k: ApiKey) => (keyState(k, now) === 'active' ? 0 : 1)
  return [...keys].sort((a, b) => rank(a) - rank(b) || b.created_at.localeCompare(a.created_at))
}

/** Arquivo de texto com os códigos de recuperação, para a pessoa guardar. */
export function recoveryFile(codes: string[], title: string): string {
  return [title, '', ...codes, ''].join('\n')
}

/** Copia; se o navegador recusar, devolve false para a tela pedir Ctrl+C. */
export async function copy(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}
