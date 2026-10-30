/** Regras de tela da equipe. */

import type { Permission } from '@/modules/team/types'

/** Diz se o e-mail já está na equipe ou convidado: pela página na tela ou porque o servidor recusou. */
export function inviteTaken(email: string, page: { members: string[]; invites: string[] }, refused: string[]): boolean {
  const typed = email.trim().toLowerCase()
  const known = [...page.members, ...page.invites, ...refused].map((item) => item.toLowerCase())
  return known.includes(typed)
}

/** Agrupa as permissões do catálogo pelo grupo, na ordem em que os grupos aparecem. */
export function groupPermissions(permissions: Permission[]): [string, Permission[]][] {
  const byGroup = new Map<string, Permission[]>()
  for (const permission of permissions) byGroup.set(permission.group, [...(byGroup.get(permission.group) ?? []), permission])
  return [...byGroup.entries()]
}

/** Diz se as permissões marcadas são diferentes das salvas no papel. */
export function permissionsChanged(saved: string[], chosen: Set<string>): boolean {
  return saved.length !== chosen.size || saved.some((key) => !chosen.has(key))
}
