import { describe, expect, it } from 'vitest'
import * as source from '@/lib/i18n/source'
import { languageMessages } from '../vite/i18n-messages'

describe('textos por idioma', () => {
  it('cada idioma leva só os seus textos', () => {
    const english = languageMessages(source, 'en')
    expect(english.dict['home.seatsOf']).toBe('{used} of {limit} seats')
    expect(english.errors.too_many_attempts).toBe(source.errors.too_many_attempts?.[1])
    expect(english.fallback).toBe('Something went wrong. Try again.')
    const serialized = JSON.stringify(english)
    expect(serialized).not.toContain('Algo deu errado')
    expect(serialized).not.toContain('Algo salió mal')
    expect(Object.keys(languageMessages(source, 'es').dict)).toEqual(Object.keys(source.dict))
  })
})
