/** Formatos da API dos documentos do cliente (iguais a shared/documents.py e internal/client_documents/dto.py do avant-api). */

export type DocumentKind = 'identity' | 'address'
export type DocumentStatus = 'pending' | 'approved' | 'rejected'

export interface CompanyDocument {
  kind: DocumentKind
  status: DocumentStatus
  file_name: string
  content_type: string
  size_bytes: number
  uploaded_at: string
  reviewed_at: string | null
  rejection_reason: string | null
}

export interface DocumentsOverview {
  required: boolean
  documents: CompanyDocument[]
}

export interface ClientDocument extends CompanyDocument {
  uploaded_by: string | null
  reviewed_by: string | null
}

export interface ClientDocumentsOverview {
  required: boolean
  documents: ClientDocument[]
}
