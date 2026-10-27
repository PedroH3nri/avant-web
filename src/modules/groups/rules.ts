/** Regras de tela dos grupos: em que grupo cada pessoa está e quem está livre. */

import type { Group } from '@/modules/groups/types'
import type { Member } from '@/modules/team/types'

/** O grupo em que a pessoa está, se estiver em algum. */
export function groupOf(groups: Group[], membershipId: string): Group | undefined {
  return groups.find((group) => group.members.some((member) => member.membership_id === membershipId))
}

/** As pessoas ativas ou suspensas que ainda não estão em nenhum grupo. */
export function freeMembers(groups: Group[], members: Member[]): Member[] {
  return members.filter((member) => member.status !== 'removed' && !groupOf(groups, member.id))
}

/** Diz se já existe outro grupo com o mesmo nome, sem diferenciar maiúsculas. */
export function nameTaken(groups: Group[], name: string, exceptId?: string): boolean {
  const typed = name.trim().toLocaleLowerCase()
  return typed !== '' && groups.some((group) => group.id !== exceptId && group.name.toLocaleLowerCase() === typed)
}
