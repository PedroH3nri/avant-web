/** Regras de tela dos envios agendados: o formulário, o corpo enviado à API e o texto de quando sai. */

import { t, type Key } from '@/lib/i18n'
import type { Schedule, ScheduleFrequency, ScheduleInput, ScheduleTarget } from '@/modules/schedules/types'

export const SCHEDULE_FREQUENCIES: ScheduleFrequency[] = ['daily', 'weekly', 'monthly']

/** Dias da semana na ordem da API: 0 é segunda. */
export const WEEKDAYS = [0, 1, 2, 3, 4, 5, 6] as const

/** Dias do mês que existem em todo mês. */
export const MONTH_DAYS = Array.from({ length: 28 }, (_unused, index) => index + 1)

export const HOURS = Array.from({ length: 24 }, (_unused, index) => index)

/** Fusos mais usados pela equipe; o do navegador entra na lista se não estiver nela. */
export const TIMEZONES = ['America/Sao_Paulo', 'America/New_York', 'America/Mexico_City', 'America/Bogota', 'Europe/Lisbon', 'Europe/Madrid', 'UTC']

export interface ScheduleForm {
  name: string
  target: ScheduleTarget
  targetId: string
  frequency: ScheduleFrequency
  /** Dia da semana, dia do mês e hora como texto, do jeito que o seletor guarda. */
  weekday: string
  monthDay: string
  hour: string
  timezone: string
  recipients: string[]
}

/** O fuso do navegador, ou São Paulo se ele não diz. */
export function browserTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'America/Sao_Paulo'
  } catch {
    return 'America/Sao_Paulo'
  }
}

/** Os fusos do seletor, com o escolhido e o do navegador. */
export function timezoneOptions(current: string): string[] {
  return [...new Set([current, browserTimezone(), ...TIMEZONES])]
}

/** O formulário de um envio existente, ou o de um novo: semanal, segunda às 9h, para a pessoa. */
export function scheduleForm(schedule: Schedule | null, userId: string, timezone = browserTimezone()): ScheduleForm {
  if (!schedule) {
    return { name: '', target: 'dashboard', targetId: '', frequency: 'weekly', weekday: '0', monthDay: '1', hour: '9', timezone, recipients: [userId] }
  }
  return {
    name: schedule.name,
    target: schedule.target,
    targetId: schedule.target_id,
    frequency: schedule.frequency,
    weekday: String(schedule.weekday ?? 0),
    monthDay: String(schedule.month_day ?? 1),
    hour: String(schedule.hour),
    timezone: schedule.timezone,
    recipients: [...schedule.recipient_user_ids],
  }
}

/** O corpo do POST/PUT, ou vazio enquanto falta nome, o que mandar ou quem recebe. */
export function scheduleInput(form: ScheduleForm): ScheduleInput | null {
  const name = form.name.trim()
  if (!name || !form.targetId || form.recipients.length === 0) return null
  return {
    name,
    target: form.target,
    target_id: form.targetId,
    frequency: form.frequency,
    weekday: form.frequency === 'weekly' ? Number(form.weekday) : null,
    month_day: form.frequency === 'monthly' ? Number(form.monthDay) : null,
    hour: Number(form.hour),
    timezone: form.timezone,
    recipient_user_ids: form.recipients,
  }
}

/** A hora cheia como texto: "09:00". */
export const hourText = (hour: number) => `${String(hour).padStart(2, '0')}:00`

/** Quando o envio sai, em uma frase: "Toda segunda às 09:00 (America/Sao_Paulo)". */
export function whenText(schedule: Pick<ScheduleInput, 'frequency' | 'weekday' | 'month_day' | 'hour' | 'timezone'>): string {
  const params = { hour: hourText(schedule.hour), zone: schedule.timezone, day: schedule.month_day ?? 1, weekday: t(`schedules.weekday.${schedule.weekday ?? 0}` as Key) }
  return t(`schedules.when.${schedule.frequency}` as Key, params)
}
