/** Formatos da API do Funil de ativação (iguais ao dto.py de modules/internal/activation no avant-api). */

export type ActivationStage = 'lead' | 'invited' | 'accepted' | 'tag' | 'revenue'

/** Quantos chegaram à etapa no período e a mediana de dias desde a etapa de antes. */
export interface ActivationStageSummary {
  stage: ActivationStage
  count: number
  median_days: number | null
}

/** Um cliente parado na última etapa a que chegou, com o gerente e a tarefa aberta. */
export interface StalledClient {
  client_id: string
  name: string
  stage: ActivationStage
  days: number
  manager_id: string | null
  manager_name: string | null
  task_id: string | null
}

/** A tela: as etapas, os dias somando as medianas, a etapa mais lenta e os parados. */
export interface ActivationFunnel {
  days: number
  stages: ActivationStageSummary[]
  total_days: number
  slowest: ActivationStage | null
  stalled: StalledClient[]
}
