/** Regras de tela das Oportunidades de receita: filtros, gerentes, os textos "por quê" e "como estimamos" de cada regra e o texto da tarefa. */

import { locale, t, type Key } from '@/lib/i18n'
import { formatMetric } from '@/lib/metrics'
import type { Opportunity, OpportunityConfidence, OpportunityRule } from '@/modules/internal/opportunities/types'

export interface OpportunityFilters {
  rule: OpportunityRule | 'all'
  confidence: OpportunityConfidence | 'all'
  manager: string
  query: string
}

export const RULES: OpportunityRule[] = ['reward', 'cascade', 'ads_txt', 'anchor', 'country_floor', 'lazy_load']
export const CONFIDENCES: OpportunityConfidence[] = ['high', 'medium', 'low']
export const CONFIDENCE_TONE: Record<OpportunityConfidence, 'ok' | 'ochre' | 'neutral'> = { high: 'ok', medium: 'ochre', low: 'neutral' }
export const NO_MANAGER = 'none'

/** As linhas que passam nos filtros e na busca por site ou cliente. */
export function filterOpportunities(rows: Opportunity[], filters: OpportunityFilters): Opportunity[] {
  const needle = filters.query.trim().toLowerCase()
  return rows.filter(
    (row) =>
      (filters.rule === 'all' || row.rule === filters.rule) &&
      (filters.confidence === 'all' || row.confidence === filters.confidence) &&
      (filters.manager === 'all' || (row.manager_id ?? NO_MANAGER) === filters.manager) &&
      `${row.domain} ${row.client_name ?? ''}`.toLowerCase().includes(needle),
  )
}

/** Os gerentes das linhas, em ordem de nome. */
export function managersOf(rows: Opportunity[]): { id: string; name: string }[] {
  const found = new Map<string, string>()
  for (const row of rows) if (row.manager_id && row.manager_name) found.set(row.manager_id, row.manager_name)
  return [...found].map(([id, name]) => ({ id, name })).sort((first, second) => first.name.localeCompare(second.name))
}

/** Um número da evidência no idioma da pessoa, com até uma casa. */
function number(value: string | number | undefined): string {
  return Number(value ?? 0).toLocaleString(locale.value, { maximumFractionDigits: 1 })
}

/** Dólares no formato do idioma. */
export function money(value: string | number | undefined): string {
  return formatMetric(Number(value ?? 0), 'currency', locale.value, false, 'USD')
}

/** O nome do país no idioma da pessoa (o código quando o navegador não sabe). */
export function countryName(code: string): string {
  try {
    return new Intl.DisplayNames([locale.value], { type: 'region' }).of(code) ?? code
  } catch {
    return code
  }
}

/** O nome da regra. */
export function ruleLabel(rule: OpportunityRule): string {
  return t(`op.rule.${rule}` as Key)
}

/** A frase "por quê" com os números da evidência. */
export function whyText(row: Opportunity): string {
  const evidence = row.evidence
  switch (row.rule) {
    case 'reward':
      return t('op.why.reward', { share: number(evidence.long_share) })
    case 'cascade':
      return t('op.why.cascade', { block: String(evidence.block ?? row.subject) })
    case 'ads_txt':
      return evidence.problem === 'ads_txt_missing' ? t('op.why.adsTxtMissing') : t('op.why.adsTxtNoGroone')
    case 'anchor':
      return t('op.why.anchor', { share: number(evidence.mobile_share) })
    case 'country_floor':
      return t('op.why.countryFloor', { fill: number(evidence.fill), country: countryName(String(evidence.country ?? '')), block: String(evidence.block ?? '') })
    case 'lazy_load':
      return t('op.why.lazyLoad', { value: number(evidence.viewability), median: number(evidence.median) })
  }
}

/** A frase "como estimamos" com os números da evidência. */
export function howText(row: Opportunity): string {
  const evidence = row.evidence
  switch (row.rule) {
    case 'reward':
      return evidence.category
        ? t('op.how.rewardCategory', { ecpm: money(evidence.ecpm), sites: number(evidence.sites), category: t(`sites.category.${evidence.category}` as Key) })
        : t('op.how.reward', { ecpm: money(evidence.ecpm), sites: number(evidence.sites) })
    case 'cascade':
      return Number(evidence.measured) ? t('op.how.cascade', { lift: number(evidence.lift) }) : t('op.how.cascadeDefault', { lift: number(evidence.lift) })
    case 'ads_txt':
      return t('op.how.adsTxt', { loss: number(evidence.loss) })
    case 'anchor':
      return t('op.how.anchor', { ecpm: money(evidence.ecpm) })
    case 'country_floor':
      return t('op.how.countryFloor', { country: countryName(String(evidence.country ?? '')), ecpm: money(evidence.ecpm) })
    case 'lazy_load':
      return t('op.how.lazyLoad')
  }
}

/** O texto da tarefa de suporte: o motivo, a estimativa e o ganho. */
export function taskDescription(row: Opportunity): string {
  return [whyText(row), '', howText(row), '', t('op.taskGain', { gain: money(row.gain), confidence: t(`op.confidence.${row.confidence}` as Key) })].join('\n')
}
