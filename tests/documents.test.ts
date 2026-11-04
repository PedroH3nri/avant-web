import { describe, expect, it, vi } from 'vitest'
import { download, documentsByKind } from '@/modules/documents/rules'
import { setTabCompany } from '@/lib/api'
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

describe('download de documento', () => {
  it('baixa pela API, com a Empresa da aba, e salva o arquivo', async () => {
    const fetch = vi.fn(async () => new Response('pdf', { status: 200, headers: { 'Content-Disposition': 'attachment; filename="contrato.pdf"' } }))
    vi.stubGlobal('fetch', fetch)
    const createObjectURL = vi.fn(() => 'blob:x')
    vi.stubGlobal('URL', { createObjectURL, revokeObjectURL: vi.fn() })
    setTabCompany(() => 'c1')
    await download('/company/documents/contract/file')
    const [url, init] = fetch.mock.calls[0] as unknown as [string, RequestInit]
    expect(url).toBe('/api/v1/company/documents/contract/file')
    expect((init.headers as Record<string, string>)['X-Avant-Company']).toBe('c1')
    expect(createObjectURL).toHaveBeenCalledOnce()
    setTabCompany(() => null)
    vi.unstubAllGlobals()
  })
})
