/** Chamadas da API do editor da central de ajuda (Ferramentas > Central de ajuda). */

import { api } from '@/lib/api'
import type { HelpImageRef, HelpItemBody, HelpItemRow } from '@/modules/internal/help/types'

export const helpEditorService = {
  /** Todos os guias e artigos, com as leituras de 30 dias. */
  list: () => api.get<HelpItemRow[]>('/internal/help'),
  /** Um guia ou artigo com o texto de todos os idiomas. */
  get: (itemId: string) => api.get<HelpItemRow>(`/internal/help/${itemId}`),
  /** Cria um guia ou artigo. */
  create: (body: HelpItemBody) => api.post<HelpItemRow>('/internal/help', body),
  /** Troca um guia ou artigo inteiro. */
  update: (itemId: string, body: HelpItemBody) => api.put<HelpItemRow>(`/internal/help/${itemId}`, body),
  /** Apaga o guia ou artigo. */
  remove: (itemId: string) => api.delete(`/internal/help/${itemId}`),
  /** Sobe o print de um passo (PNG, JPEG ou WebP de até 2 MB). */
  upload: (file: File) => api.postFile<HelpImageRef>('/internal/help/images', file),
}
