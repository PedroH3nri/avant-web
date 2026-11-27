/** Regras de tela do Funil de ativação: a conversão, a largura das barras, os filtros dos parados e o texto da tarefa. */

import { t } from '@/lib/i18n'
import type { ActivationStage, ActivationStageSummary, StalledClient } from '@/modules/internal/activation/types'

export interface StalledFilters {
  stage: ActivationStage | 'all'
  manager: string
  query: string
}

export const PERIODS = ['90', '180'] as const
export const STALLED_STAGES: ActivationStage[] = ['invited', 'accepted', 'tag']
export const NO_MANAGER = 'none'
export const LATE_DAYS = 14

/** A porcentagem inteira de ``part`` em ``whole``; vazia sem base. */
export function percentOf(part: number, whole: number): number | null {
  return whole > 0 ? Math.round((part / whole) * 100) : null
}

/** A largura da barra da etapa em relação à primeira, com um mínimo para o número caber. */
export function barWidth(stage: ActivationStageSummary, top: number): number {
  return top > 0 ? Math.max(8, (stage.count / top) * 100) : 8
}

/** Os parados que passam nos filtros e na busca pelo nome. */
export function filterStalled(rows: StalledClient[], filters: StalledFilters): StalledClient[] {
  const needle = filters.query.trim().toLowerCase()
  return rows.filter(
    (row) =>
      (filters.stage === 'all' || row.stage === filters.stage) &&
      (filters.manager === 'all' || (row.manager_id ?? NO_MANAGER) === filters.manager) &&
      row.name.toLowerCase().includes(needle),
  )
}

/** Os gerentes dos parados, em ordem de nome. */
export function managersOf(rows: StalledClient[]): { id: string; name: string }[] {
  const found = new Map<string, string>()
  for (const row of rows) if (row.manager_id && row.manager_name) found.set(row.manager_id, row.manager_name)
  return [...found].map(([id, name]) => ({ id, name })).sort((first, second) => first.name.localeCompare(second.name))
}

/** O nome da etapa no funil. */
export function stageLabel(stage: ActivationStage): string {
  return t(`af.stage.${stage}`)
}

/** Onde o cliente está parado, dito como falta (por exemplo "MCM aceito, falta a ad tag"). */
export function stalledLabel(stage: ActivationStage): string {
  return t(`af.stalled.${stage}`)
}

/** O texto da tarefa do cliente parado. */
export function taskDescription(row: StalledClient): string {
  return t('af.taskText', { client: row.name, stage: stalledLabel(row.stage), days: row.days })
}
