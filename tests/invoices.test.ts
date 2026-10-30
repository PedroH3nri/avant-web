import { describe, expect, it } from 'vitest'
import { amountInput, amountValid, invoiceActions, monthKey, personTaxTypeOptions, serviceItemBody } from '@/modules/internal/invoices/rules'
import type { Invoice } from '@/modules/internal/invoices/types'

/** Invoice com o que o teste muda. */
const invoice = (patch: Partial<Invoice>): Invoice => ({
  id: 'invoice',
  number: '1001',
  month: '2026-09-01',
  status: 'draft',
  owner: { id: 'dona', name: 'Ana', email: 'ana@groone.com', locale: 'pt', image_url: null },
  role_name: null,
  items: [],
  total: '0.00',
  created_at: '2026-10-01T00:00:00Z',
  issued_at: null,
  paid_at: null,
  returned: null,
  payee: null,
  ...patch,
})

describe('regras das invoices', () => {
  it('oferece só documentos de pessoa física', () => {
    const options = personTaxTypeOptions('pt-BR')
    expect(options.length).toBeGreaterThan(0)
    expect(options.every((option) => option.value.endsWith('_PF'))).toBe(true)
  })

  it('aceita valores maiores que zero até um milhão, com até duas casas', () => {
    expect(amountValid('300,50', 'pt')).toBe(true)
    expect(amountValid('1,000.25', 'en')).toBe(true)
    expect(amountValid('0', 'pt')).toBe(false)
    expect(amountValid('1.000.000,01', 'pt')).toBe(false)
    expect(amountValid('10,123', 'pt')).toBe(false)
  })

  it('monta a linha de serviço com o valor em duas casas', () => {
    expect(serviceItemBody('servico', '  Setup  ', '1.200,5', 'pt')).toEqual({ service_id: 'servico', description: 'Setup', amount: '1200.50' })
    expect(amountInput('1200.50', 'pt')).toBe('1200,50')
    expect(amountInput('1200.50', 'en')).toBe('1200.50')
  })

  it('libera a edição só para a dona do rascunho e a gestão só na emitida', () => {
    expect(invoiceActions(invoice({}), 'dona', false)).toEqual({ edit: true, manage: false })
    expect(invoiceActions(invoice({}), 'outra', true)).toEqual({ edit: false, manage: false })
    expect(invoiceActions(invoice({ status: 'issued' }), 'dona', true)).toEqual({ edit: false, manage: true })
    expect(invoiceActions(invoice({ status: 'paid' }), 'dona', true)).toEqual({ edit: false, manage: false })
  })

  it('reduz o mês da API a ano e mês', () => {
    expect(monthKey('2026-09-01')).toBe('2026-09')
  })
})
