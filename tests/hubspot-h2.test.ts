import { describe, expect, it } from 'vitest'
import { prospectDraft } from '@/modules/internal/clients/rules'
import { healthGroup, healthLabel, prospectName, prospectOwners, prospectsByStage, registerLink, settingsBody } from '@/modules/internal/hubspot/rules'
import type { HubspotProspect } from '@/modules/internal/hubspot/types'

/** Um contato do HubSpot de teste na fase dada. */
function prospect(id: string, stage: string, owner: string | null = 'Marina'): HubspotProspect {
  return { hubspot_id: id, email: `${id}@site.com`, first_name: 'Ana', last_name: 'Reis', phone: '+55 11 90000-0000', company: 'Blog da Ana', stage, owner, created_at: null, url: 'https://app.hubspot.com/x' }
}

describe('HubSpot: saúde e tarefas', () => {
  it('manda as desligadas e todas as regras', () => {
    const body = settingsBody({ avant_nps: false, avant_install_ok: true }, [{ rule: 'alert', enabled: false, due: 'today' }])
    expect(body).toEqual({ disabled_properties: ['avant_nps'], rules: [{ rule: 'alert', enabled: false, due: 'today' }] })
  })

  it('agrupa as propriedades e usa o nome da API para a que a tela não conhece', () => {
    expect(healthGroup('avant_revenue_30d')).toBe('revenue')
    expect(healthGroup('avant_nps_date')).toBe('nps')
    expect(healthLabel({ name: 'avant_nova', label: 'Nova', enabled: true })).toBe('Nova')
    expect(healthLabel({ name: 'avant_nps', label: 'x', enabled: true })).not.toBe('x')
  })
})

describe('HubSpot: Prospecção', () => {
  it('separa por fase e filtra pelo dono', () => {
    const items = [prospect('1', 'lead'), prospect('2', 'customer', 'João'), prospect('3', 'lead', null)]
    expect(prospectsByStage(items, 'all').lead).toHaveLength(2)
    expect(prospectsByStage(items, 'João').customer).toHaveLength(1)
    expect(prospectsByStage(items, 'João').lead).toHaveLength(0)
    expect(prospectOwners(items)).toEqual(['João', 'Marina'])
  })

  it('usa o e-mail quando o contato não tem nome', () => {
    expect(prospectName({ ...prospect('9', 'lead'), first_name: '', last_name: '' })).toBe('9@site.com')
  })

  it('o cadastrar leva os dados para o cadastro de cliente, com o gerente pelo nome', () => {
    const link = registerLink(prospect('7', 'customer'))
    expect(link.path).toBe('/interno/clientes')
    const draft = prospectDraft(link.query, [{ value: 'u1', label: 'Marina' }])
    expect(draft?.name).toBe('Blog da Ana')
    expect(draft?.profile).toMatchObject({ first_name: 'Ana', last_name: 'Reis', email: '7@site.com', phone_ddi: '+55', phone: '11 90000-0000', account_manager_id: 'u1' })
    expect(prospectDraft({}, [])).toBeNull()
    expect(prospectDraft({ novo: '1', gerente: 'Outro' }, [])?.profile.account_manager_id).toBeNull()
  })
})
