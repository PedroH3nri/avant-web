/**
 * Conversa entre as abas do painel. A Empresa ativa fica na sessão do servidor, que é a mesma
 * em todas as abas: quando uma aba troca de Empresa, avisa as outras para elas acompanharem.
 */

const CHANNEL = 'avant-session'

interface CompanyMessage {
  type: 'company'
  companyId: string | null
}

const channel = typeof BroadcastChannel === 'undefined' ? null : new BroadcastChannel(CHANNEL)

/** Avisa as outras abas que a Empresa ativa da sessão passou a ser esta. */
export function announceCompany(companyId: string | null) {
  const message: CompanyMessage = { type: 'company', companyId }
  channel?.postMessage(message)
}

/** Chama o handler quando outra aba troca a Empresa ativa da sessão. */
export function onCompanyAnnounced(handler: (companyId: string | null) => void) {
  if (!channel) return
  channel.onmessage = (event: MessageEvent<CompanyMessage>) => {
    if (event.data?.type === 'company') handler(event.data.companyId)
  }
}
