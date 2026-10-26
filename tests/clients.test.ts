import { describe, expect, it } from 'vitest'
import { emptyProfile, percentageOk, profileBody, profileOk } from '@/lib/clients'
import { TAX_TYPES, taxTypeLabel, taxTypeOptions } from '@/lib/fiscal'

describe('cadastro de cliente', () => {
  it('exige nomes e e-mail, e comissão válida só com indicação', () => {
    const profile = { ...emptyProfile(), first_name: 'Ana', last_name: 'Souza', email: 'ana@portal.com' }
    expect(profileOk(profile)).toBe(true)
    expect(profileOk({ ...profile, email: 'sem-arroba' })).toBe(false)
    expect(profileOk({ ...profile, referred_by_company_id: 'x', referral_percentage: '150' })).toBe(false)
    expect(profileOk({ ...profile, referred_by_company_id: 'x', referral_percentage: '3,5' })).toBe(true)
    expect(percentageOk('0')).toBe(false)
    expect(percentageOk('2')).toBe(true)
  })

  it('manda a comissão só com indicação e tira o DDI sem telefone', () => {
    const profile = { ...emptyProfile(), first_name: ' Ana ', last_name: 'Souza', email: 'ana@portal.com', notes: '  ' }
    const body = profileBody(profile)
    expect(body.first_name).toBe('Ana')
    expect(body.referral_percentage).toBeNull()
    expect(body.phone_ddi).toBeNull()
    expect(body.notes).toBeNull()
    expect(profileBody({ ...profile, referred_by_company_id: 'x', referral_percentage: '3,5' }).referral_percentage).toBe('3.5')
  })

  it('tem os 84 tipos de documento do Genius', () => {
    expect(Object.keys(TAX_TYPES)).toHaveLength(84)
    expect(taxTypeLabel('BR_PJ')).toContain('CNPJ')
    expect(taxTypeOptions()).toHaveLength(84)
  })
})
