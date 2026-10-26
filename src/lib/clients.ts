/** Regras de tela do cadastro de cliente; quem confere de verdade é a API. */
import type { ClientProfile, ClientProfileInput, CompanyStatus } from '@/lib/types'

/** Situações que a equipe Groone escolhe; pendente só existe até o dono aceitar. */
export const STAFF_STATUSES: CompanyStatus[] = ['active', 'inactive', 'banned']

/** Tom do selo de cada situação. */
export const STATUS_TONE: Record<CompanyStatus, 'ok' | 'ochre' | 'neutral' | 'bad'> = {
  active: 'ok',
  pending: 'ochre',
  inactive: 'neutral',
  banned: 'bad',
}

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
const PERCENT = /^\d{1,3}([.,]\d{1,2})?$/

/** Cadastro vazio para o formulário de cliente novo. */
export function emptyProfile(): ClientProfileInput {
  return {
    first_name: '',
    last_name: '',
    email: '',
    phone_ddi: '+55',
    phone: null,
    locale: 'pt',
    account_manager_id: null,
    referred_by_company_id: null,
    referral_percentage: '2',
    notes: null,
  }
}

/** Copia o cadastro vindo da API para editar, sem os dados fiscais. */
export function profileInput(profile: ClientProfile): ClientProfileInput {
  const { fiscal: _fiscal, ...input } = profile
  return { ...input, referral_percentage: profile.referral_percentage ?? '2' }
}

/** Diz se a comissão digitada é um número entre 0 e 100 com até duas casas. */
export function percentageOk(value: string | null): boolean {
  if (!value || !PERCENT.test(value.trim())) return false
  const number = Number(value.trim().replace(',', '.'))
  return number > 0 && number <= 100
}

/** Diz se o cadastro pode ser enviado: nomes, e-mail e comissão válida quando há indicação. */
export function profileOk(profile: ClientProfileInput): boolean {
  const named = profile.first_name.trim() !== '' && profile.last_name.trim() !== ''
  const referralOk = !profile.referred_by_company_id || percentageOk(profile.referral_percentage)
  return named && EMAIL.test(profile.email.trim()) && referralOk
}

/** Monta o corpo do cadastro para a API: texto vazio vira nulo e a comissão só vai com indicação. */
export function profileBody(profile: ClientProfileInput): ClientProfileInput {
  /** Texto sem espaços nas pontas; vazio vira nulo. */
  const blank = (value: string | null) => (value && value.trim() ? value.trim() : null)
  const phone = blank(profile.phone)
  return {
    ...profile,
    first_name: profile.first_name.trim(),
    last_name: profile.last_name.trim(),
    email: profile.email.trim(),
    phone_ddi: phone ? blank(profile.phone_ddi) : null,
    phone,
    notes: blank(profile.notes),
    referral_percentage: profile.referred_by_company_id ? (profile.referral_percentage ?? '2').trim().replace(',', '.') : null,
  }
}
