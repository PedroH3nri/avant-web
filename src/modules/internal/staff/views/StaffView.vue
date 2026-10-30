<script setup lang="ts">
/** Painel interno: a equipe Groone, a troca de papel de cada pessoa e o convite com os papéis da Company Groone. */
import { computed, onMounted, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import { Settings } from 'lucide-vue-next'
import CompanyIcon from '@/components/CompanyIcon.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Avatar from '@/components/ui/Avatar.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatAgo, formatDate, pick, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import type { Invitation, Member, RoleOption } from '@/modules/team/types'
import { useSession } from '@/stores/session'
import { staffService } from '@/modules/internal/staff/service'
import { teamService } from '@/modules/team/service'

const session = useSession()
const staff = ref<Member[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const roles = ref<RoleOption[]>([])
const invites = ref<Invitation[]>([])
const invitePage = ref(1)
const inviteTotal = ref(0)
const invitePages = ref(0)
const canSeeInvites = computed(() => session.can('team.view'))
const loadError = ref<string | null>(null)
const canEditGroone = computed(() => session.can('company.edit'))
const canManageTeam = computed(() => session.can('team.manage'))
const saving = ref<string | null>(null)
const email = ref('')
const roleId = ref('')
const busy = ref(false)
const emailOk = computed(() => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim()))

/** Carrega a página da equipe Groone. */
async function loadStaff() {
  const found = await staffService.list({ page: page.value })
  staff.value = found.items
  total.value = found.total
  pages.value = found.pages
}

/** Carrega a página dos convites pendentes, para quem vê a equipe. */
async function loadInvites() {
  if (!canSeeInvites.value) return
  const found = await teamService.invitations({ page: invitePage.value })
  invites.value = found.items
  inviteTotal.value = found.total
  invitePages.value = found.pages
}

/** Carrega a equipe Groone, os papéis internos e os convites. */
async function load() {
  loadError.value = null
  try {
    const [rolePage] = await Promise.all([
      session.can('roles.view') ? teamService.roleOptions() : Promise.resolve({ items: [] as RoleOption[], next_cursor: null }),
      loadStaff(),
      loadInvites(),
    ])
    // Os papéis da Company Groone; os predefinidos são dos clientes.
    roles.value = rolePage.items.filter((role) => !role.is_system)
    roleId.value ||= roles.value[0]?.id ?? ''
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)
/** Mostra o erro de uma troca de página num aviso. */
const pageError = (error: unknown) => toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
watch(page, () => loadStaff().catch(pageError))
watch(invitePage, () => loadInvites().catch(pageError))

const roleOptions = computed(() => roles.value.map((role) => ({ value: role.id, label: pick(role.name) })))
/** Nome do papel pelo id. */
const roleName = (id: string | null) => pick(roles.value.find((role) => role.id === id)?.name)

/** Diz se o membro é a própria pessoa. */
const isMe = (member: Member) => member.user.id === session.me?.user.id
/** Diz se o papel do membro pode ser trocado por quem está vendo (nunca o dono nem a própria pessoa). */
const editable = (member: Member) => canManageTeam.value && roleOptions.value.length > 0 && !member.is_owner && !isMe(member)

/** Troca o papel de uma pessoa da equipe Groone. */
async function assign(member: Member, newRoleId: string) {
  if (newRoleId === member.role?.id) return
  saving.value = member.id
  try {
    const updated = await teamService.updateMember(member.id, { role_id: newRoleId })
    staff.value = (staff.value ?? []).map((existing) => (existing.id === member.id ? { ...existing, ...updated } : existing))
    toast.success(t('roles.assigned', { name: member.user.name }))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    saving.value = null
  }
}

/** Convida alguém para a equipe Groone. */
async function invite() {
  if (!emailOk.value || !roleId.value) return
  busy.value = true
  try {
    const invitation = await staffService.invite(email.value.trim(), roleId.value)
    if (invitePage.value === 1) await loadInvites()
    else invitePage.value = 1
    toast.success(t('int.staffInvited', { email: invitation.email }))
    email.value = ''
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <PageHeader :title="t('int.staff')" :sub="t('int.staffSub')" />
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <Card v-if="session.company" :title="t('int.grooneSettings')" :desc="t('int.grooneSettingsDesc')">
      <div class="flex items-center gap-3">
        <CompanyIcon :name="session.company.name" :image-url="session.company.image_url" :size="40" />
        <span class="text-[15px] font-medium">{{ session.company.name }}</span>
      </div>
      <template #note>{{ canEditGroone ? t('int.grooneSettingsNote') : t('image.readonly') }}</template>
      <template v-if="canEditGroone" #footer>
        <Button size="sm" @click="$router.push('/configuracoes')"><Settings />{{ t('int.grooneSettingsEdit') }}</Button>
      </template>
    </Card>
    <Card v-if="roleOptions.length" :title="t('int.staffInvite')" :desc="t('int.staffInviteDesc')">
      <form id="staff-invite" class="grid gap-4 md:grid-cols-[1.4fr_1fr]" @submit.prevent="invite">
        <Field id="si-email" :label="t('login.email')">
          <Input id="si-email" v-model="email" type="email" autocomplete="off" placeholder="nome@groone.com" />
        </Field>
        <Field id="si-role" :label="t('team.role')">
          <NativeSelect id="si-role" v-model="roleId" :options="roleOptions" />
        </Field>
      </form>
      <template #footer>
        <Button type="submit" form="staff-invite" :loading="busy" :disabled="!emailOk || !roleId">{{ t('int.create') }}</Button>
      </template>
    </Card>

    <Card v-if="invites.length" :title="t('int.invites')">
      <ul class="-my-3 divide-y">
        <li v-for="invitation in invites" :key="invitation.id" class="flex flex-wrap items-center justify-between gap-2 py-3 text-[14px]">
          <span>
            <span class="font-medium">{{ invitation.email }}</span>
            <span v-if="invitation.role_id" class="text-muted-foreground"> · {{ roleName(invitation.role_id) }}</span>
          </span>
          <span class="text-[13px] text-muted-foreground">{{ t('int.expires', { when: formatAgo(invitation.expires_at) }) }}</span>
        </li>
      </ul>
      <Pagination v-if="invitePages > 1" v-model:page="invitePage" :total="inviteTotal" :pages="invitePages" class="mt-3" />
    </Card>

    <DataTable v-if="!loadError" :min="760">
      <thead>
        <tr>
          <th :class="th">{{ t('int.person') }}</th>
          <th :class="[th, 'w-[240px]']">{{ t('team.role') }}</th>
          <th :class="th">{{ t('member.direct') }}</th>
          <th :class="th">{{ t('team.status') }}</th>
          <th :class="th">{{ t('team.since') }}</th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="5" :loading="!staff" />
        <tr v-for="member in staff ?? []" :key="member.id">
          <td :class="td">
            <div class="flex items-center gap-3">
              <Avatar :name="member.user.name" :image-url="member.user.image_url" :size="28" />
              <div class="min-w-0">
                <div class="font-medium">
                  {{ member.user.name }}<span v-if="isMe(member)" class="font-normal text-muted-foreground"> ({{ t('team.you') }})</span>
                </div>
                <div class="truncate text-[13px] text-muted-foreground">{{ member.user.email }}</div>
              </div>
            </div>
          </td>
          <td :class="td">
            <Badge v-if="member.is_owner">{{ t('int.owner') }}</Badge>
            <NativeSelect
              v-else-if="editable(member)"
              :model-value="member.role?.id ?? ''"
              :options="roleOptions"
              :disabled="saving === member.id"
              :aria-label="t('roles.roleFor', { name: member.user.name })"
              class="h-9"
              @update:model-value="assign(member, $event)"
            />
            <template v-else>{{ pick(member.role?.name) }}</template>
          </td>
          <td :class="td">
            <span v-if="member.is_owner" class="text-[14px] text-muted-foreground">{{ t('role.allPerms') }}</span>
            <RouterLink v-else :to="`/equipe/${member.id}`" class="text-[14px] text-link hover:underline focus-visible:underline focus-visible:outline-none">
              {{ t('roles.direct') }}
            </RouterLink>
          </td>
          <td :class="td">
            <Status :tone="member.status === 'active' ? 'ok' : 'neutral'">{{ member.status === 'active' ? t('team.active') : t('team.suspended') }}</Status>
          </td>
          <td :class="[td, 'text-muted-foreground']">{{ formatDate(member.joined_at, false) }}</td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
  </PageBody>
</template>
