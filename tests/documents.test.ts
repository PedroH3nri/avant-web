import { describe, expect, it } from 'vitest'
import { documentsByKind } from '@/modules/documents/rules'
import { personName } from '@/modules/internal/clients/rules'
import type { CompanyDocument } from '@/modules/documents/types'

/** Um documento enviado do tipo dado. */
function sent(kind: CompanyDocument['kind']): CompanyDocument {
  return {
    kind,
    status: 'pending',
    file_name: 'conta.pdf',
    content_type: 'application/pdf',
    size_bytes: 1200,
    uploaded_at: '2026-11-03T14:00:00Z',
    reviewed_at: null,
    rejection_reason: null,
  }
}

describe('documentos do cliente', () => {
  it('mostra sempre identidade e comprovante, nessa ordem, mesmo sem envio', () => {
    const rows = documentsByKind([sent('address')])
    expect(rows.map((row) => row.kind)).toEqual(['identity', 'address'])
    expect(rows[0]?.document).toBeNull()
    expect(rows[1]?.document?.file_name).toBe('conta.pdf')
  })

  it('usa um nome fixo quando a pessoa da observação foi apagada', () => {
    expect(personName({ name: 'Ana Souza' })).toBe('Ana Souza')
    expect(personName(null)).not.toBe('')
  })
})
