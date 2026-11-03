/** Regras da tela dos modelos prontos: nomes dos papéis, o formulário e o que dá para prever na tela. */

import { pick } from '@/lib/i18n'
import type { Localized } from '@/lib/types'
import type { DashboardDefinition, ManagedTemplate, TemplateAudience, TemplateInput, TemplateRole } from '@/modules/dashboards/types'

/** Os nomes dos papéis marcados, na ordem da lista de papéis; ids que não existem mais ficam fora. */
export function roleNames(roleIds: string[], roles: TemplateRole[]): string[] {
  const marked = new Set(roleIds)
  return roles.filter((role) => marked.has(role.id)).map((role) => pick(role.name as Localized))
}

/** O formulário de um modelo novo do público, sem blocos. */
export function blankTemplate(audience: TemplateAudience): TemplateInput {
  return { name: { pt: '', en: '', es: '' }, definition: { schema_version: 1, filters: {}, widgets: [] }, audience, role_ids: [] }
}

/** O formulário com o que está gravado no modelo; nome em inglês ou espanhol igual ao português fica vazio. */
export function templateForm(template: ManagedTemplate): TemplateInput {
  const { pt, en, es } = template.name
  return {
    name: { pt, en: en === pt ? '' : en, es: es === pt ? '' : es },
    definition: template.definition,
    audience: template.audience,
    role_ids: [...template.role_ids],
  }
}

/** O formulário com outro público: os papéis eram do público anterior e saem. */
export function withAudience(form: TemplateInput, audience: TemplateAudience): TemplateInput {
  return form.audience === audience ? form : { ...form, audience, role_ids: [] }
}

/** Marca ou desmarca um papel no formulário. */
export function toggleRole(form: TemplateInput, roleId: string): TemplateInput {
  const role_ids = form.role_ids.includes(roleId) ? form.role_ids.filter((id) => id !== roleId) : [...form.role_ids, roleId]
  return { ...form, role_ids }
}

/** Diz se os números do modelo podem rodar na tela: só no da Groone, já gravado e com o mesmo público. */
export function canPreview(saved: ManagedTemplate | null, audience: TemplateAudience): boolean {
  return saved !== null && saved.audience === 'groone' && audience === 'groone'
}

/** O formulário pronto para salvar, com os nomes sem espaços nas pontas e a grade nova. */
export function templateInput(form: TemplateInput, definition: DashboardDefinition): TemplateInput {
  return {
    name: { pt: form.name.pt.trim(), en: form.name.en.trim(), es: form.name.es.trim() },
    definition,
    audience: form.audience,
    role_ids: form.role_ids,
  }
}
