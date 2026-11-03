/** Regras de tela dos documentos: ordem, situação de cada um e o que o arquivo aceita. */

import type { CompanyDocument, DocumentKind, DocumentStatus } from '@/modules/documents/types'

/** Os dois documentos, na ordem em que aparecem. */
export const DOCUMENT_KINDS: readonly DocumentKind[] = ['identity', 'address']

/** Tipos de arquivo que o seletor oferece; a API confere pelo conteúdo. */
export const DOCUMENT_ACCEPT = 'image/jpeg,image/png,application/pdf,.jpg,.jpeg,.png,.pdf'

/** Tamanho máximo do arquivo, igual ao do avant-core. */
export const DOCUMENT_MAX_BYTES = 5 * 1024 * 1024

/** Menor motivo de recusa que a API aceita. */
export const REASON_MIN = 5

export type DocumentState = DocumentStatus | 'missing'

export const STATE_TONE: Record<DocumentState, 'ok' | 'bad' | 'ochre' | 'neutral'> = {
  missing: 'neutral',
  pending: 'ochre',
  approved: 'ok',
  rejected: 'bad',
}

/** O documento enviado de cada tipo, ou nada quando ainda não foi enviado. */
export function documentsByKind<T extends CompanyDocument>(documents: T[]): { kind: DocumentKind; document: T | null }[] {
  return DOCUMENT_KINDS.map((kind) => ({ kind, document: documents.find((item) => item.kind === kind) ?? null }))
}

/** Baixa o arquivo: a API responde como anexo, então a página não sai do lugar. */
export function download(fileUrl: string) {
  window.location.assign(fileUrl)
}
