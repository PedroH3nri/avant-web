/** Formatos da API do domínio company (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

/** Situação da Empresa, como a do publisher no Genius. */
export type CompanyStatus = 'active' | 'inactive' | 'pending' | 'banned'

export interface CompanyDetail {
  id: string
  name: string
  slug: string
  accent_color: string | null
  status: CompanyStatus
  /** Vazio na Company Groone: limites valem só para clientes. */
  seat_limit: number | null
  seats_used: number
  settings: Record<string, unknown>
}

// Painel interno (/api/v1/internal)
/** Dados fiscais de pagamento: o cliente preenche, a equipe Groone só lê. */
export interface FiscalData {
  tax_type: string
  tax_id: string
  legal_name: string
  billing_phone_ddi: string
  billing_phone: string
  billing_address: string
  bank_name: string
  swift_code: string
  account_number: string
  routing_number: string
}

/** O cadastro visto pelo próprio cliente em Configurações. */
export interface CompanyFiscal {
  first_name: string
  last_name: string
  email: string
  fiscal: FiscalData | null
}
