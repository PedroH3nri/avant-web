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
/** Primeiro nome da lista cujo padrão casa com o User-Agent. */
const first = (userAgent: string, list: [RegExp, string][]) => list.find(([pattern]) => pattern.test(userAgent))?.[1] ?? null

/** "Chrome no Windows" a partir do User-Agent, sem biblioteca: basta para reconhecer o aparelho. */
export function device(userAgent: string | null): { browser: string | null; os: string | null } {
  if (!userAgent) return { browser: null, os: null }
  return { browser: first(userAgent, BROWSERS), os: first(userAgent, SYSTEMS) }
}

export type KeyState = 'active' | 'revoked' | 'expired'

/** Estado da chave de API: ativa, vencida ou revogada. */
export function keyState(key: Pick<ApiKey, 'revoked_at' | 'expires_at'>, now = Date.now()): KeyState {
  if (key.revoked_at) return 'revoked'
  if (new Date(key.expires_at).getTime() <= now) return 'expired'
  return 'active'
}

/** Ativas primeiro, depois as mais novas. */
export function sortKeys(keys: ApiKey[], now = Date.now()): ApiKey[] {
  /** Põe as chaves ativas na frente. */
  const rank = (apiKey: ApiKey) => (keyState(apiKey, now) === 'active' ? 0 : 1)
  return [...keys].sort((first, second) => rank(first) - rank(second) || second.created_at.localeCompare(first.created_at))
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
