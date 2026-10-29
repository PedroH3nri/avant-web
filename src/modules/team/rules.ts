/** Regras de tela da equipe. */

/** Diz se o e-mail já está na equipe ou convidado: pela página na tela ou porque o servidor recusou. */
export function inviteTaken(email: string, page: { members: string[]; invites: string[] }, refused: string[]): boolean {
  const typed = email.trim().toLowerCase()
  const known = [...page.members, ...page.invites, ...refused].map((item) => item.toLowerCase())
  return known.includes(typed)
}
