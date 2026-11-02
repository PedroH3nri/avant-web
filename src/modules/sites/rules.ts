import { t, type Key } from '@/lib/i18n'
import type { AdUnit, Site, SiteCategory, SitePatch } from '@/modules/sites/types'

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

/** As categorias de site, na ordem da lista da Groone. */
export const SITE_CATEGORIES: SiteCategory[] = [
  'news',
  'entertainment',
  'sports',
  'technology',
  'finance',
  'health',
  'food',
  'travel',
  'education',
  'lifestyle',
  'automotive',
  'games',
  'religion',
  'other',
]

/** Valor dos seletores do diálogo: manter como está, limpar ou um valor. */
export const KEEP = ''
export const NONE = 'none'

/** O nome da categoria no idioma da tela; vazio é "Sem categoria". */
export function categoryLabel(category: string | null): string {
  if (!category) return t('sites.category.none')
  return SITE_CATEGORIES.includes(category as SiteCategory) ? t(`sites.category.${category}` as Key) : category
}

/** O corpo do PATCH a partir dos seletores: o que ficou em "manter" não vai. */
export function sitePatch(category: string, responsible: string): SitePatch {
  const patch: SitePatch = {}
  if (category !== KEEP) patch.category = category === NONE ? null : (category as SiteCategory)
  if (responsible !== KEEP) patch.responsible_user_id = responsible === NONE ? null : responsible
  return patch
}
