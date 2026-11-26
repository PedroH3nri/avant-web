/** Formatos do NPS dos clientes, iguais aos DTOs do avant-api (modules/internal/nps). */

export interface NpsAnswer {
  id: string
  company_id: string
  company_name: string
  user_name: string
  score: number
  comment: string | null
  answered_at: string
  manager_id: string | null
  manager_name: string | null
}

export interface NpsOverview {
  /** De −100 a 100; vazio sem respostas no período. */
  score: number | null
  promoters: number
  passives: number
  detractors: number
  answers: NpsAnswer[]
}
