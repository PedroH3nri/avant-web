/** Regras de tela do NPS dos clientes: filtros da tabela e os gerentes das respostas. */

import { npsGroup, type NpsGroup } from '@/modules/help/rules'
import type { NpsAnswer } from '@/modules/internal/nps/types'

export interface NpsFilters {
  group: NpsGroup | 'all'
  manager: string
  query: string
}

export const NO_MANAGER = 'none'

/** As respostas que passam pelo grupo, pelo gerente e pela busca no cliente, na pessoa ou no comentário. */
export function filterAnswers(answers: NpsAnswer[], filters: NpsFilters): NpsAnswer[] {
  const needle = filters.query.trim().toLowerCase()
  return answers.filter(
    (answer) =>
      (filters.group === 'all' || npsGroup(answer.score) === filters.group) &&
      (filters.manager === 'all' || (answer.manager_id ?? NO_MANAGER) === filters.manager) &&
      `${answer.company_name} ${answer.user_name} ${answer.comment ?? ''}`.toLowerCase().includes(needle),
  )
}

/** Os gerentes que aparecem nas respostas, sem repetir, pelo nome. */
export function managersOf(answers: NpsAnswer[]): { id: string; name: string }[] {
  const found = new Map<string, string>()
  for (const answer of answers) if (answer.manager_id && answer.manager_name) found.set(answer.manager_id, answer.manager_name)
  return [...found].map(([id, name]) => ({ id, name })).sort((first, second) => first.name.localeCompare(second.name))
}
