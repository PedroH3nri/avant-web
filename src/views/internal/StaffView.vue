<script setup lang="ts">
/** Painel interno: a equipe Groone e o convite com os papéis da Company Groone. */
import { computed, onMounted, ref } from 'vue'
import { toast } from 'vue-sonner'
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
import { api, ApiError } from '@/lib/api'
import { errorText, formatAgo, formatDate, pick, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import type { Invitation, Items, Member, Role } from '@/lib/types'
import { useSession } from '@/stores/session'

const session = useSession()
const staff = ref<Member[] | null>(null)
const roles = ref<Role[]>([])
const invites = ref<Invitation[]>([])
const loadError = ref<string | null>(null)
const email = ref('')
const roleId = ref('')
const busy = ref(false)
const emailOk = computed(() => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim()))

async function load() {
  loadError.value = null
  try {
    const [s, r, i] = await Promise.all([
      api.get<Items<Member>>('/internal/staff'),
      session.can('roles.view') ? api.get<Items<Role>>('/roles') : Promise.resolve({ items: [] as Role[], next_cursor: null }),
      session.can('team.view') ? api.get<Items<Invitation>>('/invitations') : Promise.resolve({ items: [] as Invitation[], next_cursor: null }),
    ])
    staff.value = s.items.filter((m) => m.status !== 'removed')
    // Os papéis da Company Groone; os predefinidos são dos clientes.
    roles.value = r.items.filter((x) => !x.is_system)
    roleId.value ||= roles.value[0]?.id ?? ''
    invites.value = i.items.filter((x) => x.status === 'pending')
  } catch (e) {
    loadError.value = errorText(e instanceof ApiError ? e.code : 'unknown')
  }
}
onMounted(load)

const roleOptions = computed(() => roles.value.map((r) => ({ value: r.id, label: pick(r.name) })))
const roleName = (id: string | null) => pick(roles.value.find((r) => r.id === id)?.name)

async function invite() {
  if (!emailOk.value || !roleId.value) return
  busy.value = true
  try {
    const inv = await api.post<Invitation>('/internal/staff/invitations', { email: email.value.trim(), role_id: roleId.value })
    invites.value = [inv, ...invites.value]
    toast.success(t('int.staffInvited', { email: inv.email }))
    email.value = ''
  } catch (e) {
    toast.error(errorText(e instanceof ApiError ? e.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <PageHeader :title="t('int.staff')" :sub="t('int.staffSub')" />
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
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
        <li v-for="i in invites" :key="i.id" class="flex flex-wrap items-center justify-between gap-2 py-3 text-[14px]">
          <span>
            <span class="font-medium">{{ i.email }}</span>
            <span v-if="i.role_id" class="text-muted-foreground"> · {{ roleName(i.role_id) }}</span>
          </span>
          <span class="text-[13px] text-muted-foreground">{{ t('int.expires', { when: formatAgo(i.expires_at) }) }}</span>
        </li>
      </ul>
    </Card>

    <DataTable v-if="staff" :min="640">
      <thead>
        <tr>
          <th :class="th">{{ t('int.person') }}</th>
          <th :class="th">{{ t('team.role') }}</th>
          <th :class="th">{{ t('team.status') }}</th>
          <th :class="th">{{ t('team.since') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="m in staff" :key="m.id">
          <td :class="td">
            <div class="flex items-center gap-3">
              <Avatar :name="m.user.name" :size="28" />
              <div class="min-w-0">
                <div class="font-medium">{{ m.user.name }}</div>
                <div class="truncate text-[13px] text-muted-foreground">{{ m.user.email }}</div>
              </div>
            </div>
          </td>
          <td :class="td">
            <Badge v-if="m.is_owner">{{ t('int.owner') }}</Badge>
            <template v-else>{{ pick(m.role?.name) }}</template>
          </td>
          <td :class="td">
            <Status :tone="m.status === 'active' ? 'ok' : 'neutral'">{{ m.status === 'active' ? t('team.active') : t('team.suspended') }}</Status>
          </td>
          <td :class="[td, 'text-muted-foreground']">{{ formatDate(m.joined_at, false) }}</td>
        </tr>
      </tbody>
    </DataTable>
  </PageBody>
</template>
