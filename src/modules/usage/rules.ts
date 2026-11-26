/** Regras da contagem de uso: a área do menu de cada caminho e o intervalo da batida. */

import { NAV_GROUPS, linkActive } from '@/lib/navigation'
import type { UsageArea } from '@/modules/usage/types'

/** Uma batida por minuto com a aba visível. */
export const HEARTBEAT_MS = 60_000

const AREA_BY_GROUP: Record<string, UsageArea> = {
  home: 'dashboard',
  tasks: 'tasks',
  clients: 'inventory',
  reports: 'reports',
  integrations: 'integrations',
  tools: 'tools',
  commissions: 'commissions',
  company: 'company',
  help: 'help',
}

/** A área do menu do caminho no painel do cliente; configurações e o resto têm área própria. */
export function areaFor(path: string): UsageArea {
  if (path.startsWith('/configuracoes')) return 'settings'
  const group = NAV_GROUPS.find((section) => section.items.some((link) => linkActive(link, path, false)))
  return (group && AREA_BY_GROUP[group.id]) || 'other'
}
