/**
 * Espera entre as consultas de uma tela que acompanha um trabalho do worker sem os avisos em
 * tempo real: começa em 5 s, dobra até 1 minuto e para depois de 10 minutos.
 */

export const FIRST_POLL_MS = 5_000
export const LONGEST_POLL_MS = 60_000
export const POLL_LIMIT_MS = 10 * 60_000

/** A próxima espera, a partir da anterior e do tempo já acompanhado; null quando passou do teto. */
export function nextPollDelay(previousMs: number, elapsedMs: number): number | null {
  if (elapsedMs >= POLL_LIMIT_MS) return null
  return previousMs ? Math.min(previousMs * 2, LONGEST_POLL_MS) : FIRST_POLL_MS
}
