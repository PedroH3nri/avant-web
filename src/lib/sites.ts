import { t } from './i18n'
import type { AdUnit, Site } from './types'

type Tone = 'ok' | 'warn' | 'bad' | 'ochre' | 'neutral'

/** Aprovação do site no Ad Manager, como vem do GAM (APPROVED, DRAFT...). O site cadastrado
 * à mão ainda não tem: fica "aguardando GAM". */
export function approval(site: Pick<Site, 'approval_status' | 'awaiting_gam'>): { tone: Tone; label: string } {
  if (site.awaiting_gam) return { tone: 'ochre', label: t('sites.awaiting') }
  switch (site.approval_status?.toUpperCase()) {
    case undefined:
    case '':
      return { tone: 'neutral', label: t('sites.approval.none') }
    case 'APPROVED':
      return { tone: 'ok', label: t('sites.approval.APPROVED') }
    case 'DISAPPROVED':
      return { tone: 'bad', label: t('sites.approval.DISAPPROVED') }
    case 'DRAFT':
      return { tone: 'neutral', label: t('sites.approval.DRAFT') }
    default:
      return { tone: 'warn', label: t('sites.approval.review') }
  }
}

/** A lista plana da API em ordem de árvore, com a profundidade de cada um. */
export function tree(units: AdUnit[]): { unit: AdUnit; depth: number }[] {
  const ids = new Set(units.map((unit) => unit.id))
  const children = new Map<string | null, AdUnit[]>()
  for (const unit of units) {
    // O pai pode estar em outro site: aqui ele vira raiz.
    const parent = unit.parent_id && ids.has(unit.parent_id) ? unit.parent_id : null
    children.set(parent, [...(children.get(parent) ?? []), unit])
  }
  const out: { unit: AdUnit; depth: number }[] = []
  /** Percorre a árvore a partir de um pai, em ordem alfabética. */
  const walk = (parent: string | null, depth: number) => {
    const list = [...(children.get(parent) ?? [])].sort((first, second) => first.name.localeCompare(second.name))
    for (const item of list) {
      out.push({ unit: item, depth })
      walk(item.id, depth + 1)
    }
  }
  walk(null, 0)
  return out
}
