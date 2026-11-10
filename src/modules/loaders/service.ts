/** Chamadas da API dos loaders, no painel do cliente (/loaders) e no interno (/internal/loaders). */

import { api, type Query } from '@/lib/api'
import type { Page } from '@/lib/types'
import type { Loader, LoaderInput, LoaderOption } from '@/modules/loaders/types'

/** Os loaders de um dos painéis: o interno vê os de todos os clientes. */
export function loaderService(internal: boolean) {
  const base = internal ? '/internal' : ''
  return {
    /** Uma página dos loaders, o mais novo primeiro, com busca no nome (`q`) e, no interno, por cliente (`company_id`). */
    list: (query?: Query) => api.get<Page<Loader>>(`${base}/loaders`, query),
    /** Os loaders pelo nome, para o seletor da ad tag; no interno, os de um cliente. */
    options: (companyId?: string) => api.get<LoaderOption[]>(`${base}/loaders/options`, companyId ? { company_id: companyId } : undefined),
    /** Um loader com as ad tags que o usam. */
    show: (id: string) => api.get<Loader>(`${base}/loaders/${id}`),
    /** Cria um loader; no interno, para o cliente de `company_id`. */
    create: (input: LoaderInput) => api.post<Loader>(`${base}/loaders`, input),
    /** Troca todos os campos do loader. */
    update: (id: string, input: LoaderInput) => api.put<Loader>(`${base}/loaders/${id}`, input),
    /** Apaga um loader que nenhuma ad tag usa. */
    remove: (id: string) => api.delete(`${base}/loaders/${id}`),
  }
}

export type LoaderService = ReturnType<typeof loaderService>
