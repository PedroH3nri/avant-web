<script setup lang="ts">
/** Equipe: membros, convites pendentes e convite novo. */
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { toast } from 'vue-sonner'
import { DropdownMenuRoot, DropdownMenuSeparator, DropdownMenuTrigger } from 'reka-ui'
import { Lock, Mail, MoreHorizontal, RefreshCw, Search } from 'lucide-vue-next'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Avatar from '@/components/ui/Avatar.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import SeatBar from '@/components/ui/SeatBar.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatAgo, formatDate, pick, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import type { CompanyDetail } from '@/modules/company/types'
import type { Invitation, Member, Role } from '@/modules/team/types'
import TeamTabs from '@/modules/team/components/TeamTabs.vue'
import { useSession } from '@/stores/session'
import { companyService } from '@/modules/company/service'
import { teamService } from '@/modules/team/service'

const session = useSession()
const route = useRoute()
const company = ref<CompanyDetail | null>(null)
const members = ref<Member[]>([])
const invites = ref<Invitation[]>([])
const roles = ref<Role[]>([])
const loaded = ref(false)
const loadError = ref<string | null>(null)
const view = ref<'members' | 'pending'>(route.query.aba === 'convites' ? 'pending' : 'members')
const filter = ref('')

const canInvite = computed(() => session.can('team.invite'))
const canManage = computed(() => session.can('team.manage'))
const canRoles = computed(() => session.can('roles.view'))

/** Carrega Empresa, membros, convites e papéis. */
async function load() {
  loadError.value = null
  try {
    const [companyDetail, memberPage, invitationPage, rolePage] = await Promise.all([
      companyService.show(),
      teamService.members(),
      teamService.invitations(),
      canRoles.value ? teamService.roles() : Promise.resolve({ items: [] as Role[], next_cursor: null }),
    ])
    company.value = companyDetail
    members.value = memberPage.items.filter((member) => member.status !== 'removed')
    invites.value = invitationPage.items.filter((invitation) => invitation.status === 'pending')
    roles.value = rolePage.items
    loaded.value = true
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)
watch(() => session.me?.active_company_id, load)

// Sem limite (Company Groone), não há vagas a contar.
const limit = computed(() => company.value?.seat_limit ?? null)
const used = computed(() => members.value.length + invites.value.length)
const full = computed(() => limit.value !== null && used.value >= limit.value)
/** Nome do papel pelo id. */
const roleName = (id: string | null) => pick(roles.value.find((role) => role.id === id)?.name)
const shown = computed(() => {
  const needle = filter.value.trim().toLowerCase()
  if (!needle) return members.value
  return members.value.filter((member) => `${member.user.name} ${member.user.email} ${pick(member.role?.name)}`.toLowerCase().includes(needle))
})
/** Diz se o membro é a própria pessoa. */
const isMe = (member: Member) => member.user.id === session.me?.user.id
/** Mostra o erro num aviso. */
const errorToast = (error: unknown) => toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))

// Convite
const email = ref('')
const inviteRole = ref('')
const sending = ref(false)
const roleOptions = computed(() => roles.value.map((role) => ({ value: role.id, label: pick(role.name) })))
watch(roleOptions, (options) => {
  if (!options.some((opt) => opt.value === inviteRole.value)) inviteRole.value = options[0]?.value ?? ''
})
const emailOk = computed(() => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim()))
const dupe = computed(() => {
  const typed = email.value.trim().toLowerCase()
  return members.value.some((member) => member.user.email.toLowerCase() === typed) || invites.value.some((invite) => invite.email.toLowerCase() === typed)
})

/** Envia o convite para o email com o papel escolhido. */
async function sendInvite() {
  if (!emailOk.value || dupe.value || full.value || !inviteRole.value) return
  sending.value = true
  try {
    const invitation = await teamService.invite(email.value.trim(), inviteRole.value)
    invites.value = [invitation, ...invites.value]
    toast.success(t('team.sent', { email: invitation.email }), { description: t('team.sentSub') })
    email.value = ''
  } catch (error) {
    errorToast(error)
  } finally {
    sending.value = false
  }
}

// Membros
const roleTarget = ref<Member | null>(null)
const newRole = ref('')
const removeTarget = ref<Member | null>(null)
const busy = ref(false)
const roleOpen = computed({ get: () => roleTarget.value !== null, set: (value) => !value && (roleTarget.value = null) })
const removeOpen = computed({ get: () => removeTarget.value !== null, set: (value) => !value && (removeTarget.value = null) })

/** Abre o diálogo para trocar o papel do membro. */
function openRole(member: Member) {
  roleTarget.value = member
  newRole.value = member.role?.id ?? roleOptions.value[0]?.value ?? ''
}

/** Muda o papel ou o status do membro. */
async function patchMember(member: Member, body: { role_id?: string; status?: 'active' | 'suspended' }) {
  busy.value = true
  try {
    const updated = await teamService.updateMember(member.id, body)
    members.value = members.value.map((existing) => (existing.id === member.id ? { ...existing, ...updated } : existing))
    toast.success(t('team.updated'))
    roleTarget.value = null
    // Contagem de pessoas por papel.
    if (body.role_id && canRoles.value) roles.value = (await teamService.roles()).items
  } catch (error) {
    errorToast(error)
  } finally {
    busy.value = false
  }
}

/** Remove o membro escolhido. */
async function removeMember() {
  const current = removeTarget.value
  if (!current) return
  busy.value = true
  try {
    await teamService.removeMember(current.id)
    members.value = members.value.filter((member) => member.id !== current.id)
    toast(t('team.removed', { name: current.user.name }), { description: t('team.removedSub') })
    removeTarget.value = null
  } catch (error) {
    errorToast(error)
  } finally {
    busy.value = false
  }
}

// Convites pendentes
async function resend(invitation: Invitation) {
  try {
    const resent = await teamService.resendInvitation(invitation.id)
    invites.value = invites.value.map((invite) => (invite.id === invitation.id ? resent : invite))
    toast.success(t('team.resent', { email: invitation.email }), { description: t('team.sentSub') })
  } catch (error) {
    errorToast(error)
  }
}

/** Cancela um convite pendente. */
async function cancel(invitation: Invitation) {
  try {
    await teamService.cancelInvitation(invitation.id)
    invites.value = invites.value.filter((invite) => invite.id !== invitation.id)
    toast(t('team.canceled', { email: invitation.email }))
  } catch (error) {
    errorToast(error)
  }
}

</script>

<template>
  <PageHeader :title="t('team.title')" :sub="t('team.sub', { company: session.company?.name ?? '' })" />
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <p v-else-if="!loaded" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <template v-else>
      <Card v-if="canInvite && roleOptions.length" :title="t('team.invite')" :desc="t(limit === null ? 'team.inviteDescNoLimit' : 'team.inviteDesc')">
        <form id="invite-form" class="grid gap-4 md:grid-cols-[minmax(0,1fr)_240px]" novalidate @submit.prevent="sendInvite">
          <Field id="inv-email" :label="t('login.email')" :error="dupe && t('team.dupe')">
            <Input id="inv-email" v-model="email" type="email" placeholder="nome@empresa.com" autocomplete="off" :invalid="dupe" />
          </Field>
          <Field id="inv-role" :label="t('team.role')">
            <NativeSelect id="inv-role" v-model="inviteRole" :options="roleOptions" />
          </Field>
        </form>
        <template #note>
          <span v-if="full" class="text-bad">{{ t('team.full') }}</span>
          <span v-else-if="limit !== null" class="tnum">{{ t('team.afterInvite', { n: used + 1, limit }) }}</span>
        </template>
        <template #footer>
          <Button form="invite-form" type="submit" :loading="sending" :disabled="!emailOk || dupe || full">{{ t('team.send') }}</Button>
        </template>
      </Card>

      <Card v-if="limit !== null">
        <div class="flex flex-wrap items-baseline justify-between gap-2">
          <h2 class="text-[14px] font-medium">{{ t('team.seats') }}</h2>
          <span class="text-[14px] tnum"
            ><span class="font-semibold">{{ used }}</span> <span class="text-muted-foreground">/ {{ limit }}</span></span
          >
        </div>
        <SeatBar class="mt-3" :used="members.length" :pending="invites.length" :limit="limit" :label="t('team.seats')" />
        <ul class="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-muted-foreground">
          <li class="flex items-center gap-2"><span class="size-2 rounded-[2px] bg-primary" />{{ t('team.seatsActive', { n: members.length }) }}</li>
          <li class="flex items-center gap-2"><span class="size-2 rounded-[2px] bg-ochre" />{{ t('team.seatsPending', { n: invites.length }) }}</li>
          <li class="flex items-center gap-2">
            <span class="size-2 rounded-[2px] bg-muted-foreground/15" />{{ t('team.seatsFree', { n: Math.max(limit - used, 0) }) }}
          </li>
          <li class="sm:ml-auto">{{ t('team.seatsNote') }}</li>
        </ul>
      </Card>

      <div class="flex flex-wrap items-center gap-3">
        <TeamTabs :current="view" :counts="{ members: members.length, pending: invites.length }" @select="view = $event" />
        <div v-if="view === 'members'" class="relative ml-auto w-full sm:w-64">
          <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input v-model="filter" :aria-label="t('team.filterLabel')" class="h-9 bg-card pl-9" :placeholder="t('team.filter')" />
        </div>
      </div>

      <template v-if="view === 'members'">
        <DataTable :min="720">
          <thead>
            <tr>
              <th :class="th">{{ t('team.person') }}</th>
              <th :class="th">{{ t('team.role') }}</th>
              <th :class="th">{{ t('team.status') }}</th>
              <th :class="th">{{ t('team.since') }}</th>
              <th :class="[th, 'w-12']"><span class="sr-only">{{ t('team.actions') }}</span></th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="5" :empty="shown.length === 0" :desc="t('team.noMatch', { q: filter })">
              <Button size="sm" variant="outline" @click="filter = ''">{{ t('team.clearFilter') }}</Button>
            </TableState>
            <tr v-for="member in shown" :key="member.id" class="hover:bg-muted">
              <td :class="td">
                <div class="flex items-center gap-3">
                  <Avatar :name="member.user.name" />
                  <div class="min-w-0">
                    <div class="font-medium">
                      <RouterLink :to="`/equipe/${member.id}`" class="hover:underline focus-visible:underline focus-visible:outline-none">{{ member.user.name }}</RouterLink
                      ><span v-if="isMe(member)" class="font-normal text-muted-foreground"> ({{ t('team.you') }})</span>
                    </div>
                    <div class="truncate text-[13px] text-muted-foreground">{{ member.user.email }}</div>
                  </div>
                </div>
              </td>
              <td :class="td">
                <Badge v-if="member.is_owner">{{ t('team.owner') }}</Badge><template v-else>{{ pick(member.role?.name) }}</template>
              </td>
              <td :class="td">
                <Status :tone="member.status === 'active' ? 'ok' : 'neutral'">{{ t(member.status === 'active' ? 'team.active' : 'team.suspended') }}</Status>
              </td>
              <td :class="[td, 'text-muted-foreground tnum']">{{ formatDate(member.joined_at, false) }}</td>
              <td :class="td">
                <span v-if="member.is_owner" class="flex size-8 items-center justify-center text-muted-foreground" :title="t('team.ownerLock')">
                  <Lock class="size-4" aria-hidden="true" /><span class="sr-only">{{ t('team.ownerLock') }}</span>
                </span>
                <DropdownMenuRoot v-else-if="canManage && !isMe(member)">
                  <DropdownMenuTrigger as-child>
                    <Button variant="ghost" size="icon" class="size-8" :aria-label="t('team.actionsFor', { name: member.user.name })"><MoreHorizontal /></Button>
                  </DropdownMenuTrigger>
                  <MenuContent align="end" class="w-52">
                    <MenuItem v-if="roleOptions.length" @select="openRole(member)">{{ t('team.changeRole') }}</MenuItem>
                    <MenuItem @select="patchMember(member, { status: member.status === 'active' ? 'suspended' : 'active' })">
                      {{ t(member.status === 'active' ? 'team.suspend' : 'team.reactivate') }}
                    </MenuItem>
                    <DropdownMenuSeparator class="-mx-1 my-1 h-px bg-border" />
                    <MenuItem danger @select="removeTarget = member">{{ t('team.remove') }}</MenuItem>
                  </MenuContent>
                </DropdownMenuRoot>
              </td>
            </tr>
          </tbody>
        </DataTable>
      </template>

      <template v-else-if="view === 'pending'">
        <DataTable :min="640">
          <thead>
            <tr>
              <th :class="th">{{ t('login.email') }}</th>
              <th :class="th">{{ t('team.role') }}</th>
              <th :class="th">{{ t('team.validity') }}</th>
              <th :class="[th, 'text-right']"><span class="sr-only">{{ t('team.actions') }}</span></th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="4" :empty="invites.length === 0" :icon="Mail" :title="t('team.noInvites')" :desc="t('team.noInvitesSub')" />
            <tr v-for="invite in invites" :key="invite.id">
              <td :class="td">
                <div class="flex items-center gap-3">
                  <span class="flex size-8 shrink-0 items-center justify-center rounded-full border border-dashed text-muted-foreground"><Mail class="size-3.5" /></span>
                  <span class="font-medium">{{ invite.email }}</span>
                </div>
              </td>
              <td :class="td">{{ roleName(invite.role_id) }}</td>
              <td :class="td"><Status tone="ochre">{{ t('team.expiresIn', { when: formatAgo(invite.expires_at) }) }}</Status></td>
              <td :class="[td, 'whitespace-nowrap text-right']">
                <template v-if="canInvite">
                  <Button variant="ghost" size="sm" @click="resend(invite)"><RefreshCw />{{ t('team.resend') }}</Button>
                  <Button variant="destructive" size="sm" @click="cancel(invite)">{{ t('team.cancelInvite') }}</Button>
                </template>
              </td>
            </tr>
          </tbody>
        </DataTable>
      </template>

    </template>

    <Dialog v-model:open="roleOpen" :title="t('team.changeRole')" :desc="roleTarget ? t('team.changeRoleDesc', { name: roleTarget.user.name }) : ''">
      <Field id="member-role" :label="t('team.role')">
        <NativeSelect id="member-role" v-model="newRole" :options="roleOptions" />
      </Field>
      <template #footer>
        <Button variant="outline" @click="roleTarget = null">{{ t('common.cancel') }}</Button>
        <Button :loading="busy" :disabled="!roleTarget || newRole === roleTarget.role?.id" @click="roleTarget && patchMember(roleTarget, { role_id: newRole })">{{
          t('common.save')
        }}</Button>
      </template>
    </Dialog>

    <ConfirmDialog
      v-model:open="removeOpen"
      :title="t('team.removeTitle', { name: removeTarget?.user.name ?? '' })"
      :desc="t('team.removeDesc', { name: removeTarget?.user.name ?? '' })"
      :action="t('team.remove')"
      :busy="busy"
      @confirm="removeMember"
    />
  </PageBody>
</template>
