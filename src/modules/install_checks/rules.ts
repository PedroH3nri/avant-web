/** Regras de tela da verificação de instalação: o resumo da coluna, a espera do botão e a ordem dos achados. */

import { t, tn, type Key } from '@/lib/i18n'
import type { FindingSeverity, InstallFinding, InstallSummary } from '@/modules/install_checks/types'

export const SEVERITIES: FindingSeverity[] = ['error', 'warning', 'ok']
export const SEVERITY_LABEL: Record<FindingSeverity, Key> = { error: 'ic.sev.error', warning: 'ic.sev.warning', ok: 'ic.sev.ok' }
export const POLL_MS = 3000
export const POLL_TRIES = 40

/** O resumo da última verificação: erros vencem avisos; sem verificação, "Não verificado". */
export function installSummary(summary: InstallSummary | null | undefined): { tone: 'ok' | 'warn' | 'bad' | 'neutral'; label: string } {
  if (!summary) return { tone: 'neutral', label: t('ic.never') }
  if (summary.state === 'pending' && !summary.finished_at) return { tone: 'neutral', label: t('ic.pending') }
  if (summary.errors) return { tone: 'bad', label: tn('ic.errors', summary.errors) }
  if (summary.warnings) return { tone: 'warn', label: tn('ic.warnings', summary.warnings) }
  return { tone: 'ok', label: t('ic.allGood') }
}

/** Segundos até o botão voltar a funcionar, arredondados para cima; zero quando já pode. */
export function secondsLeft(availableAt: string | null | undefined, now = Date.now()): number {
  if (!availableAt) return 0
  return Math.max(0, Math.ceil((new Date(availableAt).getTime() - now) / 1000))
}

/** Os achados de uma gravidade, na ordem da API. */
export function findingsOf(findings: InstallFinding[], severity: FindingSeverity): InstallFinding[] {
  return findings.filter((finding) => finding.severity === severity)
}

/** O título do achado no idioma atual; um código novo da API sem texto mostra o código. */
export function findingTitle(code: string): string {
  const key = `ic.f.${code}` as Key
  const text = t(key)
  return text === key ? code : text
}

/** O que fazer com o achado; vazio nos oks e nos códigos sem texto. */
export function findingFix(code: string): string | null {
  const key = `ic.fix.${code}` as Key
  const text = t(key)
  return text === key ? null : text
}
