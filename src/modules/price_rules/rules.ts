/** Regras de tela das regras de preço: caminhos, situação do site, dinheiro em micros, o gráfico por hora e o ganho contra o controle. */

import type { Key } from '@/lib/i18n'
import type { ReportQuery, ReportResult } from '@/modules/reports/types'
import type { PriceRuleAction, PriceRuleHistoryEntry, PriceRuleHour, PriceRuleReason, PriceRuleSiteSummary, PriceRuleStatus } from '@/modules/price_rules/types'

export type StatusTone = 'ok' | 'warn' | 'bad' | 'ochre' | 'neutral'
export type HourSeries = 'floor' | 'pmr' | 'revenue' | 'requests'

export const MAX_CONTROL_PERCENT = 50
export const MAX_STEP_SIZE = 10
export const HOUR_PERIODS = ['2', '7', '31'] as const
export const STATUS_TONE: Record<PriceRuleStatus, StatusTone> = { active: 'ok', paused: 'ochre', disabled: 'neutral' }
export const ACTION_KEY: Record<PriceRuleAction, Key> = { up: 'pr.action.up', down: 'pr.action.down', hold: 'pr.action.hold', initial: 'pr.action.initial' }
export const REASON_KEY: Record<PriceRuleReason, Key> = {
  manual: 'pr.reason.manual',
  stable: 'pr.reason.stable',
  pmr_down_floor: 'pr.reason.pmrDownFloor',
  pmr_up_over_roof: 'pr.reason.pmrUpOverRoof',
  insufficient_volume: 'pr.reason.insufficientVolume',
  responses_server_drop: 'pr.reason.responsesDrop',
  initial_rule_creation: 'pr.reason.initial',
}
const GROUP_KEY = 'groone_group'
const RULE_GROUP = 'regra'
const CONTROL_GROUP = 'controle'
const MICROS = 1_000_000

/** A permissão da ação no painel: a do cliente ou a interna. */
export function priceRulePermission(internal: boolean, action: 'view' | 'manage'): string {
  return internal ? `internal.price_rules.${action}` : `price_rules.${action}`
}

/** O caminho da lista de sites das regras de preço no painel. */
export function priceRulesPath(internal: boolean): string {
  return internal ? '/interno/regras-de-preco' : '/regras-de-preco'
}

/** A situação da regra num site, para a lista e o cabeçalho. */
export function siteStatus(site: Pick<PriceRuleSiteSummary, 'active' | 'currency' | 'currency_supported' | 'automatic_blocks'>): { tone: StatusTone; key: Key } {
  if (!site.currency) return { tone: 'neutral', key: 'pr.status.waiting' }
  if (!site.currency_supported) return { tone: 'warn', key: 'pr.status.unsupported' }
  if (!site.active) return { tone: 'neutral', key: 'pr.status.off' }
  if (site.automatic_blocks === 0) return { tone: 'ochre', key: 'pr.status.noBlocks' }
  return { tone: 'ok', key: 'pr.status.on' }
}

/** Um valor em micros na moeda da network, sem conversão. */
export function moneyText(micros: number, currency: string | null, locale: string): string {
  const value = micros / MICROS
  if (!currency) return new Intl.NumberFormat(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value)
  return new Intl.NumberFormat(locale, { style: 'currency', currency, minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value)
}

/** Um valor digitado ("1,25" ou "1.25") em micros; vazio ou inválido vira null. */
export function parseMoney(text: string): number | null {
  const normalized = text.trim().replace(/\s/g, '').replace(',', '.')
  if (!/^\d+(\.\d{1,6})?$/.test(normalized)) return null
  return Math.round(Number(normalized) * MICROS)
}

/** Um valor em micros como texto para o campo, com vírgula no português e no espanhol. */
export function moneyInput(micros: number, lang: string): string {
  const text = (micros / MICROS).toFixed(2)
  return lang === 'en' ? text : text.replace('.', ',')
}

/** O dia `AAAA-MM-DD` em São Paulo, o fuso dos números do GAM. */
export function saoPauloDay(date: Date): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit' }).format(date)
}

/** O período de `days` dias até hoje em São Paulo, como a API espera (`start` e `end`). */
export function hourPeriod(days: number, now = new Date()): { start: string; end: string } {
  const start = new Date(now.getTime() - (days - 1) * 86_400_000)
  return { start: saoPauloDay(start), end: saoPauloDay(now) }
}

/** O dia e a hora curtos, como "09/11 14h", no formato do idioma. */
export function hourLabel(date: string, hour: number, locale: string): string {
  const day = new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`))
  return `${day} ${String(hour).padStart(2, '0')}h`
}

export interface HourPoint {
  date: string
  hour: number
  floor: number | null
  ecpm: number | null
  pmr: number | null
  revenue: number | null
  requests: number | null
}

/** Junta os números do GAM e as decisões do motor por data e hora, da mais velha à mais nova.
 * Hora sem decisão fica com o floor da anterior; hora sem número do GAM fica vazia. */
export function hourPoints(hours: PriceRuleHour[], history: PriceRuleHistoryEntry[]): HourPoint[] {
  /** A chave da hora, que ordena como texto. */
  const slot = (date: string, hour: number) => `${date} ${String(hour).padStart(2, '0')}`
  const byHour = new Map(hours.map((row) => [slot(row.date, row.hour), row]))
  const floors = new Map(history.map((entry) => [slot(entry.date, entry.hour), entry.floor_applied_micros]))
  const slots = [...new Set([...byHour.keys(), ...floors.keys()])].sort()
  let floor: number | null = null
  return slots.map((key) => {
    const row = byHour.get(key)
    floor = floors.get(key) ?? floor
    const [date, hour] = key.split(' ')
    return {
      date: date ?? '',
      hour: Number(hour),
      floor,
      ecpm: row ? row.ecpm_micros : null,
      pmr: row ? row.pmr : null,
      revenue: row ? row.revenue_micros : null,
      requests: row ? row.eligible_requests : null,
    }
  })
}

/** A soma das últimas 24 horas com número: receita, requisições, impressões e respostas. */
export function lastDayTotals(hours: PriceRuleHour[]): { revenue: number; requests: number; pmr: number; ecpm: number } | null {
  const recent = [...hours].sort((first, second) => (first.date === second.date ? second.hour - first.hour : second.date.localeCompare(first.date))).slice(0, 24)
  if (!recent.length) return null
  /** A soma de um número das horas recentes. */
  const sum = (pick: (row: PriceRuleHour) => number) => recent.reduce((total, row) => total + pick(row), 0)
  const requests = sum((row) => row.eligible_requests)
  const served = sum((row) => row.responses_served)
  const impressions = sum((row) => row.impressions)
  const revenue = sum((row) => row.revenue_micros)
  return { revenue, requests, pmr: requests ? (served / requests) * 100 : 0, ecpm: impressions ? Math.round((revenue * 1000) / impressions) : 0 }
}

/** A consulta da receita por mil requisições por dia e grupo (regra e controle) do site. */
export function gainQuery(siteId: string): ReportQuery {
  return {
    source: 'gam_key_values',
    metrics: ['rpmre', 'revenue', 'eligible_requests'],
    period: { preset: 'last_30_days' },
    dimensions: ['date', 'custom_value'],
    filters: [
      { field: 'site', operator: 'eq', values: [siteId] },
      { field: 'custom_key', operator: 'eq', values: [GROUP_KEY] },
    ],
    order: [{ field: 'date' }],
    limit: 200,
  }
}

export interface GainSeries {
  days: string[]
  rule: (number | null)[]
  control: (number | null)[]
  ruleTotal: number
  controlTotal: number
  gain: number
  currency: string
}

/** Os dois grupos por dia e no período (receita sobre requisições somadas); o ganho é a diferença
 * da regra sobre o controle, em %. Sem números dos dois grupos, devolve null. */
export function gainSeries(result: ReportResult): GainSeries | null {
  const days = [...new Set(result.rows.map((row) => row.dimensions.date ?? ''))].filter(Boolean).sort()
  /** A linha do grupo no dia. */
  const rowOf = (day: string, group: string) => result.rows.find((row) => row.dimensions.date === day && row.dimensions.custom_value === group)
  /** A receita por mil requisições do grupo no dia. */
  const value = (day: string, group: string) => {
    const found = rowOf(day, group)?.metrics.rpmre
    return found == null ? null : Number(found)
  }
  /** A receita por mil requisições do grupo no período todo. */
  const total = (group: string) => {
    const rows = result.rows.filter((row) => row.dimensions.custom_value === group)
    const revenue = rows.reduce((sum, row) => sum + Number(row.metrics.revenue ?? 0), 0)
    const requests = rows.reduce((sum, row) => sum + Number(row.metrics.eligible_requests ?? 0), 0)
    return requests ? (revenue * 1000) / requests : 0
  }
  const ruleTotal = total(RULE_GROUP)
  const controlTotal = total(CONTROL_GROUP)
  if (!ruleTotal || !controlTotal) return null
  return {
    days,
    rule: days.map((day) => value(day, RULE_GROUP)),
    control: days.map((day) => value(day, CONTROL_GROUP)),
    ruleTotal,
    controlTotal,
    gain: ((ruleTotal - controlTotal) / controlTotal) * 100,
    currency: result.currency,
  }
}
