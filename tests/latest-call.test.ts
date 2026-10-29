import { describe, expect, it } from 'vitest'
import { latestCall } from '@/lib/latest'

/** Uma promessa que a gente resolve ou rejeita quando quiser. */
function deferred<T>() {
  let resolve!: (value: T) => void
  let reject!: (error: unknown) => void
  const promise = new Promise<T>((ok, fail) => ((resolve = ok), (reject = fail)))
  return { promise, resolve, reject }
}

describe('só a chamada mais recente vale', () => {
  it('ignora a resposta antiga que chega depois da nova', async () => {
    const call = latestCall()
    const old = deferred<string>()
    const fresh = deferred<string>()
    const first = call(() => old.promise)
    const second = call(() => fresh.promise)
    fresh.resolve('compartilhados')
    old.resolve('meus')
    expect(await second).toBe('compartilhados')
    expect(await first).toBeUndefined()
  })

  it('engole o erro de uma chamada antiga e repassa o da atual', async () => {
    const call = latestCall()
    const old = deferred<string>()
    const first = call(() => old.promise)
    const second = call(() => Promise.reject(new Error('falhou')))
    old.reject(new Error('antiga'))
    expect(await first).toBeUndefined()
    await expect(second).rejects.toThrow('falhou')
  })
})
