/** Chamadas da API das regras de preço, no painel do cliente e no interno (/internal). */

import { api, type Query } from '@/lib/api'
import type { Page } from '@/lib/types'
import type {
  CascadeHour,
  PriceRule,
  PriceRuleConfigInput,
  PriceRuleDetails,
  PriceRuleHistoryEntry,
  PriceRuleHour,
  PriceRuleModel,
  PriceRuleSite,
  PriceRuleSiteSummary,
  PriceRuleStatus,
} from '@/modules/price_rules/types'

/** As regras de preço de um dos painéis: o interno vê os sites de todos os clientes. */
export function priceRuleService(internal: boolean) {
  const base = internal ? '/internal' : ''
  /** O caminho das regras de um site. */
  const site = (siteId: string) => `${base}/sites/${siteId}/price-rules`
  return {
    /** Uma página dos sites com a situação da regra, com busca pelo domínio (`q`). */
    sites: (query?: Query) => api.get<Page<PriceRuleSiteSummary>>(`${base}/price-rules/sites`, query),
    /** A configuração e os blocos do site. */
    settings: (siteId: string) => api.get<PriceRuleSite>(`${site(siteId)}/settings`),
    /** Liga ou desliga e grava o percentual do controle. */
    saveSettings: (siteId: string, active: boolean, controlPercent: number) =>
      api.put<PriceRuleSite>(`${site(siteId)}/settings`, { active, control_percent: controlPercent }),
    /** Troca os blocos marcados e o modelo de cada um. */
    saveBlocks: (siteId: string, blocks: Record<string, PriceRuleModel>) => api.put<PriceRuleSite>(`${site(siteId)}/blocks`, { blocks }),
    /** Uma página das regras, com filtro por hash (`content_hash`), país (`country`) e modelo (`model`). */
    rules: (siteId: string, query?: Query) => api.get<Page<PriceRule>>(site(siteId), query),
    /** Uma regra com os limites. */
    rule: (siteId: string, ruleId: string) => api.get<PriceRuleDetails>(`${site(siteId)}/${ruleId}`),
    /** As decisões do motor no período, a mais nova primeiro. */
    history: (siteId: string, ruleId: string, start: string, end: string) =>
      api.get<PriceRuleHistoryEntry[]>(`${site(siteId)}/${ruleId}/history`, { start, end }),
    /** Os números do GAM hora a hora no período, a mais nova primeiro. */
    hours: (siteId: string, ruleId: string, start: string, end: string) => api.get<PriceRuleHour[]>(`${site(siteId)}/${ruleId}/hours`, { start, end }),
    /** Os números da Cascata hora a hora no período, por tentativa, a mais nova primeiro. */
    cascadeHours: (siteId: string, ruleId: string, start: string, end: string) =>
      api.get<CascadeHour[]>(`${site(siteId)}/${ruleId}/cascade-hours`, { start, end }),
    /** Grava os limites da regra; na Cascata, sempre com `drop_tiers`. */
    saveConfig: (siteId: string, ruleId: string, config: PriceRuleConfigInput) => api.put<PriceRuleDetails>(`${site(siteId)}/${ruleId}/config`, config),
    /** Ativa, pausa ou desliga a regra. */
    setStatus: (siteId: string, ruleId: string, status: PriceRuleStatus) => api.patch<PriceRule>(`${site(siteId)}/${ruleId}`, { status }),
    /** Grava um floor à mão; a API leva ao degrau mais perto. */
    setFloor: (siteId: string, ruleId: string, floorMicros: number) => api.put<PriceRule>(`${site(siteId)}/${ruleId}/floor`, { floor_micros: floorMicros }),
  }
}

export type PriceRuleService = ReturnType<typeof priceRuleService>
