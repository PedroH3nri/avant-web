<script setup lang="ts">
/** Painel interno: a equipe Groone e o convite com os papéis da Company Groone. */
import { computed, onMounted, ref } from 'vue'
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
const roles = ref<RoleOption[]>([])
const invites = ref<Invitation[]>([])
const loadError = ref<string | null>(null)
const canEditGroone = computed(() => session.can('company.edit'))
const email = ref('')
const roleId = ref('')
const busy = ref(false)
const emailOk = computed(() => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim()))

/** Carrega a equipe Groone, os papéis internos e os convites. */
async function load() {
  loadError.value = null
  try {
    const [staffPage, rolePage, invitationPage] = await Promise.all([
      staffService.list(),
      session.can('roles.view') ? teamService.roleOptions() : Promise.resolve({ items: [] as RoleOption[], next_cursor: null }),
      session.can('team.view') ? teamService.invitations() : Promise.resolve({ items: [] as Invitation[], next_cursor: null }),
    ])
    staff.value = staffPage.items.filter((member) => member.status !== 'removed')
    // Os papéis da Company Groone; os predefinidos são dos clientes.
    roles.value = rolePage.items.filter((role) => !role.is_system)
    roleId.value ||= roles.value[0]?.id ?? ''
    invites.value = invitationPage.items.filter((invitation) => invitation.status === 'pending')
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)

const roleOptions = computed(() => roles.value.map((role) => ({ value: role.id, label: pick(role.name) })))
/** Nome do papel pelo id. */
const roleName = (id: string | null) => pick(roles.value.find((role) => role.id === id)?.name)

/** Convida alguém para a equipe Groone. */
async function invite() {
  if (!emailOk.value || !roleId.value) return
  busy.value = true
  try {
    const invitation = await staffService.invite(email.value.trim(), roleId.value)
    invites.value = [invitation, ...invites.value]
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
    </Card>

    <DataTable v-if="!loadError" :min="640">
      <thead>
        <tr>
          <th :class="th">{{ t('int.person') }}</th>
          <th :class="th">{{ t('team.role') }}</th>
          <th :class="th">{{ t('team.status') }}</th>
          <th :class="th">{{ t('team.since') }}</th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="4" :loading="!staff" />
        <tr v-for="member in staff ?? []" :key="member.id">
          <td :class="td">
            <div class="flex items-center gap-3">
              <Avatar :name="member.user.name" :image-url="member.user.image_url" :size="28" />
              <div class="min-w-0">
                <div class="font-medium">{{ member.user.name }}</div>
                <div class="truncate text-[13px] text-muted-foreground">{{ member.user.email }}</div>
              </div>
            </div>
          </td>
          <td :class="td">
            <Badge v-if="member.is_owner">{{ t('int.owner') }}</Badge>
            <template v-else>{{ pick(member.role?.name) }}</template>
          </td>
          <td :class="td">
            <Status :tone="member.status === 'active' ? 'ok' : 'neutral'">{{ member.status === 'active' ? t('team.active') : t('team.suspended') }}</Status>
          </td>
          <td :class="[td, 'text-muted-foreground']">{{ formatDate(member.joined_at, false) }}</td>
        </tr>
      </tbody>
    </DataTable>
  </PageBody>
</template>
