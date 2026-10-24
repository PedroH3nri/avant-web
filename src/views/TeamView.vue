<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
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
import { api, ApiError } from '@/lib/api'
import { errorText, formatAgo, formatDate, pick, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import type { CompanyDetail, Invitation, Items, Member, Role } from '@/lib/types'
import { cn } from '@/lib/utils'
import { useSession } from '@/stores/session'

const session = useSession()
const company = ref<CompanyDetail | null>(null)
const members = ref<Member[]>([])
const invites = ref<Invitation[]>([])
const roles = ref<Role[]>([])
const loaded = ref(false)
const loadError = ref<string | null>(null)
const view = ref<'members' | 'pending'>('members')
const filter = ref('')

const canInvite = computed(() => session.can('team.invite'))
const canManage = computed(() => session.can('team.manage'))
const canRoles = computed(() => session.can('roles.view'))

async function load() {
  loadError.value = null
  try {
    const [c, m, i, r] = await Promise.all([
      api.get<CompanyDetail>('/company'),
      api.get<Items<Member>>('/members'),
      api.get<Items<Invitation>>('/invitations'),
      canRoles.value ? api.get<Items<Role>>('/roles') : Promise.resolve({ items: [] as Role[], next_cursor: null }),
    ])
    company.value = c
    members.value = m.items.filter((x) => x.status !== 'removed')
    invites.value = i.items.filter((x) => x.status === 'pending')
    roles.value = r.items
    loaded.value = true
  } catch (e) {
    loadError.value = errorText(e instanceof ApiError ? e.code : 'unknown')
  }
}
onMounted(load)
watch(() => session.me?.active_company_id, load)

const limit = computed(() => company.value?.seat_limit ?? 0)
const used = computed(() => members.value.length + invites.value.length)
const full = computed(() => used.value >= limit.value)
const roleName = (id: string | null) => pick(roles.value.find((r) => r.id === id)?.name)
const shown = computed(() => {
  const q = filter.value.trim().toLowerCase()
  if (!q) return members.value
  return members.value.filter((m) => `${m.user.name} ${m.user.email} ${pick(m.role?.name)}`.toLowerCase().includes(q))
})
const isMe = (m: Member) => m.user.id === session.me?.user.id
const errorToast = (e: unknown) => toast.error(errorText(e instanceof ApiError ? e.code : 'unknown'))

// Convite
const email = ref('')
const inviteRole = ref('')
const sending = ref(false)
const roleOptions = computed(() => roles.value.map((r) => ({ value: r.id, label: pick(r.name) })))
watch(roleOptions, (opts) => {
  if (!opts.some((o) => o.value === inviteRole.value)) inviteRole.value = opts[0]?.value ?? ''
})
const emailOk = computed(() => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim()))
const dupe = computed(() => {
  const e = email.value.trim().toLowerCase()
  return members.value.some((m) => m.user.email.toLowerCase() === e) || invites.value.some((i) => i.email.toLowerCase() === e)
})

async function sendInvite() {
  if (!emailOk.value || dupe.value || full.value || !inviteRole.value) return
  sending.value = true
  try {
    const inv = await api.post<Invitation>('/invitations', { email: email.value.trim(), role_id: inviteRole.value })
    invites.value = [inv, ...invites.value]
    toast.success(t('team.sent', { email: inv.email }), { description: t('team.sentSub') })
    email.value = ''
  } catch (e) {
    errorToast(e)
  } finally {
    sending.value = false
  }
}

// Membros
const roleTarget = ref<Member | null>(null)
const newRole = ref('')
const removeTarget = ref<Member | null>(null)
const busy = ref(false)
const roleOpen = computed({ get: () => roleTarget.value !== null, set: (v) => !v && (roleTarget.value = null) })
const removeOpen = computed({ get: () => removeTarget.value !== null, set: (v) => !v && (removeTarget.value = null) })

function openRole(m: Member) {
  roleTarget.value = m
  newRole.value = m.role?.id ?? roleOptions.value[0]?.value ?? ''
}

async function patchMember(m: Member, body: { role_id?: string; status?: 'active' | 'suspended' }) {
  busy.value = true
  try {
    const updated = await api.patch<Member>(`/members/${m.id}`, body)
    members.value = members.value.map((x) => (x.id === m.id ? { ...x, ...updated } : x))
    toast.success(t('team.updated'))
    roleTarget.value = null
    // Contagem de pessoas por papel.
    if (body.role_id && canRoles.value) roles.value = (await api.get<Items<Role>>('/roles')).items
  } catch (e) {
    errorToast(e)
  } finally {
    busy.value = false
  }
}

async function removeMember() {
  const m = removeTarget.value
  if (!m) return
  busy.value = true
  try {
    await api.delete(`/members/${m.id}`)
    members.value = members.value.filter((x) => x.id !== m.id)
    toast(t('team.removed', { name: m.user.name }), { description: t('team.removedSub') })
    removeTarget.value = null
  } catch (e) {
    errorToast(e)
  } finally {
    busy.value = false
  }
}

// Convites pendentes
async function resend(i: Invitation) {
  try {
    const inv = await api.post<Invitation>(`/invitations/${i.id}/resend`)
    invites.value = invites.value.map((x) => (x.id === i.id ? inv : x))
    toast.success(t('team.resent', { email: i.email }), { description: t('team.sentSub') })
  } catch (e) {
    errorToast(e)
  }
}

async function cancel(i: Invitation) {
  try {
    await api.delete(`/invitations/${i.id}`)
    invites.value = invites.value.filter((x) => x.id !== i.id)
    toast(t('team.canceled', { email: i.email }))
  } catch (e) {
    errorToast(e)
  }
}

const tabs = computed(() =>
  [
    { id: 'members' as const, label: t('team.members'), n: members.value.length, show: true },
    { id: 'pending' as const, label: t('team.pending'), n: invites.value.length, show: true },
  ].filter((x) => x.show),
)
const tab = (on: boolean) =>
  cn(
    'h-8 rounded-[4px] px-3 text-[13px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    on ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground',
  )
</script>

<template>
  <PageHeader :title="t('team.title')" :sub="t('team.sub', { company: session.company?.name ?? '' })" />
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <p v-else-if="!loaded" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <template v-else>
      <Card v-if="canInvite && roleOptions.length" :title="t('team.invite')" :desc="t('team.inviteDesc')">
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
          <span v-else class="tnum">{{ t('team.afterInvite', { n: used + 1, limit }) }}</span>
        </template>
        <template #footer>
          <Button form="invite-form" type="submit" :loading="sending" :disabled="!emailOk || dupe || full">{{ t('team.send') }}</Button>
        </template>
      </Card>

      <Card>
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
        <div class="flex rounded-md border bg-card p-0.5" role="tablist" :aria-label="t('team.title')">
          <button v-for="x in tabs" :key="x.id" type="button" role="tab" :aria-selected="view === x.id" :class="tab(view === x.id)" @click="view = x.id">
            {{ x.label }} <span class="text-muted-foreground tnum">{{ x.n }}</span>
          </button>
        </div>
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
            <tr v-for="m in shown" :key="m.id" class="hover:bg-muted">
              <td :class="td">
                <div class="flex items-center gap-3">
                  <Avatar :name="m.user.name" />
                  <div class="min-w-0">
                    <div class="font-medium">
                      <RouterLink :to="`/equipe/${m.id}`" class="hover:underline focus-visible:underline focus-visible:outline-none">{{ m.user.name }}</RouterLink
                      ><span v-if="isMe(m)" class="font-normal text-muted-foreground"> ({{ t('team.you') }})</span>
                    </div>
                    <div class="truncate text-[13px] text-muted-foreground">{{ m.user.email }}</div>
                  </div>
                </div>
              </td>
              <td :class="td">
                <Badge v-if="m.is_owner">{{ t('team.owner') }}</Badge><template v-else>{{ pick(m.role?.name) }}</template>
              </td>
              <td :class="td">
                <Status :tone="m.status === 'active' ? 'ok' : 'neutral'">{{ t(m.status === 'active' ? 'team.active' : 'team.suspended') }}</Status>
              </td>
              <td :class="[td, 'text-muted-foreground tnum']">{{ formatDate(m.joined_at, false) }}</td>
              <td :class="td">
                <span v-if="m.is_owner" class="flex size-8 items-center justify-center text-muted-foreground" :title="t('team.ownerLock')">
                  <Lock class="size-4" aria-hidden="true" /><span class="sr-only">{{ t('team.ownerLock') }}</span>
                </span>
                <DropdownMenuRoot v-else-if="canManage && !isMe(m)">
                  <DropdownMenuTrigger as-child>
                    <Button variant="ghost" size="icon" class="size-8" :aria-label="t('team.actionsFor', { name: m.user.name })"><MoreHorizontal /></Button>
                  </DropdownMenuTrigger>
                  <MenuContent align="end" class="w-52">
                    <MenuItem v-if="roleOptions.length" @select="openRole(m)">{{ t('team.changeRole') }}</MenuItem>
                    <MenuItem @select="patchMember(m, { status: m.status === 'active' ? 'suspended' : 'active' })">
                      {{ t(m.status === 'active' ? 'team.suspend' : 'team.reactivate') }}
                    </MenuItem>
                    <DropdownMenuSeparator class="-mx-1 my-1 h-px bg-border" />
                    <MenuItem danger @select="removeTarget = m">{{ t('team.remove') }}</MenuItem>
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
            <tr v-for="i in invites" :key="i.id">
              <td :class="td">
                <div class="flex items-center gap-3">
                  <span class="flex size-8 shrink-0 items-center justify-center rounded-full border border-dashed text-muted-foreground"><Mail class="size-3.5" /></span>
                  <span class="font-medium">{{ i.email }}</span>
                </div>
              </td>
              <td :class="td">{{ roleName(i.role_id) }}</td>
              <td :class="td"><Status tone="ochre">{{ t('team.expiresIn', { when: formatAgo(i.expires_at) }) }}</Status></td>
              <td :class="[td, 'whitespace-nowrap text-right']">
                <template v-if="canInvite">
                  <Button variant="ghost" size="sm" @click="resend(i)"><RefreshCw />{{ t('team.resend') }}</Button>
                  <Button variant="destructive" size="sm" @click="cancel(i)">{{ t('team.cancelInvite') }}</Button>
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
