import { describe, expect, it } from 'vitest'
import { hourText, scheduleForm, scheduleInput, timezoneOptions, whenText } from '@/modules/schedules/rules'
import type { Schedule } from '@/modules/schedules/types'

/** Um envio mensal salvo, no dia 5 às 7h de Lisboa. */
function savedSchedule(): Schedule {
  return {
    id: 'schedule-1',
    name: 'Fechamento',
    target: 'report',
    target_id: 'report-1',
    target_name: 'Receita por cliente',
    frequency: 'monthly',
    weekday: null,
    month_day: 5,
    hour: 7,
    timezone: 'Europe/Lisbon',
    recipient_user_ids: ['user-1'],
    paused: false,
    next_run_at: '2026-12-05T07:00:00Z',
    last_sent_at: null,
    last_delivery: null,
    owner_user_id: 'user-1',
    created_by: 'user-1',
    created_at: '2026-11-02T10:00:00Z',
    updated_at: '2026-11-02T10:00:00Z',
    editable: true,
  }
}

describe('envios agendados', () => {
  it('começa semanal, segunda às 9h, para quem cria', () => {
    const form = scheduleForm(null, 'user-1', 'America/Sao_Paulo')
    expect(form).toMatchObject({ frequency: 'weekly', weekday: '0', hour: '9', timezone: 'America/Sao_Paulo', recipients: ['user-1'] })
    expect(scheduleInput(form)).toBeNull()
  })

  it('manda só o dia que a frequência usa', () => {
    const form = { ...scheduleForm(null, 'user-1', 'UTC'), name: ' Resumo ', targetId: 'board-1' }
    expect(scheduleInput(form)).toEqual({
      name: 'Resumo',
      target: 'dashboard',
      target_id: 'board-1',
      frequency: 'weekly',
      weekday: 0,
      month_day: null,
      hour: 9,
      timezone: 'UTC',
      recipient_user_ids: ['user-1'],
    })
    expect(scheduleInput({ ...form, frequency: 'monthly', monthDay: '12' })).toMatchObject({ weekday: null, month_day: 12 })
    expect(scheduleInput({ ...form, recipients: [] })).toBeNull()
  })

  it('volta ao formulário a partir do envio salvo', () => {
    expect(scheduleForm(savedSchedule(), 'user-9')).toMatchObject({ target: 'report', targetId: 'report-1', frequency: 'monthly', monthDay: '5', hour: '7', timezone: 'Europe/Lisbon' })
  })

  it('descreve quando o envio sai', () => {
    expect(hourText(7)).toBe('07:00')
    expect(whenText(savedSchedule())).toBe('Every month on day 5 at 07:00 (Europe/Lisbon)')
    expect(whenText({ frequency: 'weekly', weekday: 4, month_day: null, hour: 18, timezone: 'UTC' })).toBe('Every Friday at 18:00 (UTC)')
    expect(timezoneOptions('Asia/Tokyo')[0]).toBe('Asia/Tokyo')
    expect(new Set(timezoneOptions('UTC')).size).toBe(timezoneOptions('UTC').length)
  })
})
