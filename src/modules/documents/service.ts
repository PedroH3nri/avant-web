/** Chamadas da API dos documentos da Empresa ativa. */

import { api, API } from '@/lib/api'
import type { CompanyDocument, DocumentKind, DocumentsOverview } from '@/modules/documents/types'

/** Serviço dos documentos que o cliente Manage Inventory envia. */
export const documentService = {
  /** Os documentos enviados e se a Empresa precisa enviá-los. */
  overview: () => api.get<DocumentsOverview>('/company/documents'),
  /** Envia ou troca um documento; ele volta para em análise. */
  upload: (kind: DocumentKind, file: File) => api.putFile<CompanyDocument>(`/company/documents/${kind}`, file, { name: file.name }),
  /** Endereço do download do arquivo (o cookie da sessão vai junto). */
  fileUrl: (kind: DocumentKind) => `${API}/company/documents/${kind}/file`,
}
