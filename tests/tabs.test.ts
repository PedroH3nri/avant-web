import { afterEach, describe, expect, it } from 'vitest'
import { announceCompany, onCompanyAnnounced } from '@/lib/tabs'

const opened: BroadcastChannel[] = []

/** Abre o canal como outra aba abriria. */
function otherTab(): BroadcastChannel {
  const channel = new BroadcastChannel('avant-session')
  opened.push(channel)
  return channel
}

afterEach(() => opened.splice(0).forEach((channel) => channel.close()))

describe('tabs', () => {
  it('avisa as outras abas da troca de Empresa', async () => {
    const other = otherTab()
    const received = new Promise((resolve) => (other.onmessage = (event) => resolve(event.data)))
    announceCompany('c2')
    expect(await received).toEqual({ type: 'company', companyId: 'c2' })
  })

  it('chama quem escuta quando outra aba troca a Empresa', async () => {
    const seen = new Promise((resolve) => onCompanyAnnounced(resolve))
    otherTab().postMessage({ type: 'company', companyId: 'c3' })
    expect(await seen).toBe('c3')
  })
})
