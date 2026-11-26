/** Regras de tela do cadastro de cliente; quem confere de verdade é a API. */
import { t } from '@/lib/i18n'
import type { CompanyStatus } from '@/modules/company/types'
import type { ClientProfile, ClientProfileInput } from '@/modules/internal/clients/types'

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
    referred_by_client_id: null,
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
  const referralOk = !profile.referred_by_client_id || percentageOk(profile.referral_percentage)
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
    referral_percentage: profile.referred_by_client_id ? (profile.referral_percentage ?? '2').trim().replace(',', '.') : null,
  }
}

/** Tamanho mínimo e máximo de uma observação, iguais aos do avant-core. */
export const NOTE_MIN = 5
export const NOTE_MAX = 5000

/** Nome de quem escreveu ou editou; a pessoa pode ter sido apagada. */
export function personName(person: { name: string } | null): string {
  return person?.name ?? t('note.removedPerson')
}

const INTERNATIONAL_PHONE = /^\+(\d{1,3})[\s-]+(.+)$/

/** O cadastro de cliente novo vindo da Prospecção (`?novo=1&nome=…`), com o gerente achado pelo nome; sem `novo`, nada. */
export function prospectDraft(query: Record<string, unknown>, staff: { value: string; label: string }[]): { name: string; profile: Partial<ClientProfileInput> } | null {
  /** O texto do parâmetro, ou vazio. */
  const text = (key: string) => (typeof query[key] === 'string' ? (query[key] as string).trim().slice(0, 200) : '')
  if (text('novo') !== '1') return null
  const phone = text('telefone')
  const split = INTERNATIONAL_PHONE.exec(phone)
  const manager = staff.find((person) => person.label === text('gerente'))
  return {
    name: text('nome'),
    profile: {
      first_name: text('contato'),
      last_name: text('sobrenome'),
      email: text('email'),
      ...(phone ? { phone_ddi: split ? `+${split[1]}` : '+55', phone: split ? (split[2] as string) : phone } : {}),
      account_manager_id: manager?.value ?? null,
    },
  }
}

/** Opções do filtro "Sem acesso há": qualquer acesso, dias sem entrar ou quem nunca entrou. */
export const ACCESS_FILTERS = ['any', '7', '15', '30', '60', 'never'] as const
/** Dias sem entrar a partir dos quais o último acesso fica em destaque. */
export const STALE_ACCESS_DAYS = 14
const DAY_MS = 86_400_000

/** Os parâmetros da lista de clientes para o filtro de acesso escolhido. */
export function accessQuery(choice: string): { inactive_days?: number; never_accessed?: boolean } {
  if (choice === 'never') return { never_accessed: true }
  const days = Number(choice)
  return Number.isInteger(days) && days > 0 ? { inactive_days: days } : {}
}

/** Diz se o último acesso já passou do limite de destaque; quem nunca entrou também conta. */
export function staleAccess(iso: string | null | undefined, now = Date.now()): boolean {
  if (!iso) return true
  return now - new Date(iso).getTime() >= STALE_ACCESS_DAYS * DAY_MS
}
