/** Formatos da API do domínio internal/inventory (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

import type { Network } from '@/modules/networks/types'
import type { RevenueStatus } from '@/modules/revenue/types'
import type { Site } from '@/modules/sites/types'

/** O cliente de uma linha, com a imagem. */
export interface ClientRef {
  id: string
  name: string
  /** Vazio sem imagem: o painel mostra a inicial do nome. */
  image_url: string | null
}

/** Uma network de cliente, com o cliente e o status de faturamento (GET /internal/networks). */
export interface ClientNetwork extends Omit<Network, 'last_runs'> {
  client: ClientRef
  /** Vazio sem receita nos últimos 60 dias. */
  revenue_status: RevenueStatus | null
  /** E-mail do child no MCM, só nas que aguardam a confirmação da equipe. */
  mcm_email: string | null
  /** Checklist do mês atual; vazio sem faturamento no mês anterior ou sem a permissão. */
  checklist?: { id: string; done: number; total: number; complete: boolean } | null
}

/** Um site de cliente, com o cliente, a network e o status de faturamento (GET /internal/sites). */
export interface ClientSite extends Site {
  client: ClientRef
  /** Vazio enquanto o site aguarda o GAM. */
  network_name: string | null
  ad_units: number
  /** Vazio sem receita nos últimos 60 dias. */
  revenue_status: RevenueStatus | null
  /** Checklist do mês atual; vazio sem faturamento no mês anterior ou sem a permissão. */
  checklist?: { id: string; done: number; total: number; complete: boolean } | null
}
