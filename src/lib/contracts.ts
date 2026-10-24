import type { Contract, ContractNetwork } from './types'

/** Revshare em porcentagem sem zeros à direita, no formato do idioma: "12.500" vira "12,5%". */
export function formatRevshare(value: string, locale: string): string {
  const number = Number(value)
  if (!Number.isFinite(number)) return '–'
  return `${new Intl.NumberFormat(locale, { maximumFractionDigits: 3 }).format(number)}%`
}

/** Lê o revshare digitado (vírgula ou ponto, até três casas, de 0 a 100); ``null`` se inválido. */
export function parseRevshare(input: string): string | null {
  const cleaned = input.trim().replace('%', '').trim().replace(',', '.')
  if (!/^\d{1,3}(\.\d{1,3})?$/.test(cleaned)) return null
  const number = Number(cleaned)
  return number >= 0 && number <= 100 ? cleaned : null
}

/** Só network que aceita contrato à mão (MCM Manage Inventory) entra no formulário. */
export function manualNetworks(networks: ContractNetwork[]): ContractNetwork[] {
  return networks.filter((item) => item.manual)
}

/** O que dá para fazer com o contrato: editar sempre; encerrar e excluir só os manuais. */
export function contractActions(contract: Pick<Contract, 'source' | 'status'>): { end: boolean; remove: boolean } {
  const manual = contract.source === 'manual'
  return { end: manual && contract.status === 'active', remove: manual }
}
