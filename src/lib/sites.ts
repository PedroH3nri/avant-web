import { t } from './i18n'
import type { AdUnit } from './types'

type Tone = 'ok' | 'warn' | 'bad' | 'neutral'

/** Aprovação do site no Ad Manager, como vem do GAM (APPROVED, DRAFT...). */
export function approval(status: string | null): { tone: Tone; label: string } {
  switch (status?.toUpperCase()) {
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
  const ids = new Set(units.map((u) => u.id))
  const children = new Map<string | null, AdUnit[]>()
  for (const u of units) {
    // O pai pode estar em outro site: aqui ele vira raiz.
    const parent = u.parent_id && ids.has(u.parent_id) ? u.parent_id : null
    children.set(parent, [...(children.get(parent) ?? []), u])
  }
  const out: { unit: AdUnit; depth: number }[] = []
  const walk = (parent: string | null, depth: number) => {
    const list = [...(children.get(parent) ?? [])].sort((a, b) => a.name.localeCompare(b.name))
    for (const u of list) {
      out.push({ unit: u, depth })
      walk(u.id, depth + 1)
    }
  }
  walk(null, 0)
  return out
}
