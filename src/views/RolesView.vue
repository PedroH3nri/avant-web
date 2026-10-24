<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import RolesPanel from '@/components/team/RolesPanel.vue'
import Avatar from '@/components/ui/Avatar.vue'
import Badge from '@/components/ui/Badge.vue'
import DataTable from '@/components/ui/DataTable.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import TableState from '@/components/ui/TableState.vue'
import { api, ApiError } from '@/lib/api'
import { errorText, pick, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import type { Items, Member, Permission, Role } from '@/lib/types'
import { useSession } from '@/stores/session'

// Papéis e permissões num lugar só: quem tem qual papel (atribuição) e o que cada papel pode
// fazer. Permissões diretas de uma pessoa ficam na página dela, em Equipe.
const session = useSession()
const members = ref<Member[]>([])
const roles = ref<Role[]>([])
const permissions = ref<Permission[]>([])
const loaded = ref(false)
const loadError = ref<string | null>(null)
const saving = ref<string | null>(null)

const canTeam = computed(() => session.can('team.view'))
const canManage = computed(() => session.can('team.manage'))

async function load() {
  loadError.value = null
  try {
    const [r, p, m] = await Promise.all([
      api.get<Items<Role>>('/roles'),
      api.get<Items<Permission>>('/permissions'),
      canTeam.value ? api.get<Items<Member>>('/members') : Promise.resolve({ items: [] as Member[], next_cursor: null }),
    ])
    roles.value = r.items
    permissions.value = p.items
    members.value = m.items.filter((x) => x.status !== 'removed')
    loaded.value = true
  } catch (e) {
    loadError.value = errorText(e instanceof ApiError ? e.code : 'unknown')
  }
}
onMounted(load)
watch(() => session.me?.active_company_id, load)

const roleOptions = computed(() => roles.value.map((r) => ({ value: r.id, label: pick(r.name) })))
const isMe = (m: Member) => m.user.id === session.me?.user.id
const editable = (m: Member) => canManage.value && !m.is_owner && !isMe(m)

async function assign(m: Member, roleId: string) {
  if (roleId === m.role?.id) return
  saving.value = m.id
  try {
    const updated = await api.patch<Member>(`/members/${m.id}`, { role_id: roleId })
    members.value = members.value.map((x) => (x.id === m.id ? { ...x, ...updated } : x))
    // Contagem de pessoas por papel.
    roles.value = (await api.get<Items<Role>>('/roles')).items
    toast.success(t('roles.assigned', { name: m.user.name }))
  } catch (e) {
    toast.error(errorText(e instanceof ApiError ? e.code : 'unknown'))
  } finally {
    saving.value = null
  }
}
</script>

<template>
  <PageHeader :title="t('roles.title')" :sub="t('roles.sub', { company: session.company?.name ?? '' })" />
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <p v-else-if="!loaded" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <template v-else>
      <section v-if="canTeam" class="grid gap-3" aria-labelledby="assign-title">
        <div>
          <h2 id="assign-title" class="text-[16px] font-semibold tracking-tight">{{ t('roles.assign') }}</h2>
          <p class="mt-1 text-[14px] text-muted-foreground">{{ t('roles.assignDesc') }}</p>
        </div>
        <DataTable :min="640">
          <thead>
            <tr>
              <th :class="th">{{ t('team.person') }}</th>
              <th :class="[th, 'w-[260px]']">{{ t('team.role') }}</th>
              <th :class="th">{{ t('member.direct') }}</th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="3" :empty="members.length === 0" :desc="t('roles.noMembers')" />
            <tr v-for="m in members" :key="m.id" class="hover:bg-muted">
              <td :class="td">
                <div class="flex items-center gap-3">
                  <Avatar :name="m.user.name" />
                  <div class="min-w-0">
                    <div class="font-medium">
                      {{ m.user.name }}<span v-if="isMe(m)" class="font-normal text-muted-foreground"> ({{ t('team.you') }})</span>
                    </div>
                    <div class="truncate text-[13px] text-muted-foreground">{{ m.user.email }}</div>
                  </div>
                </div>
              </td>
              <td :class="td">
                <Badge v-if="m.is_owner">{{ t('team.owner') }}</Badge>
                <NativeSelect
                  v-else-if="editable(m)"
                  :model-value="m.role?.id ?? ''"
                  :options="roleOptions"
                  :disabled="saving === m.id"
                  :aria-label="t('roles.roleFor', { name: m.user.name })"
                  class="h-9"
                  @update:model-value="assign(m, $event)"
                />
                <template v-else>{{ pick(m.role?.name) }}</template>
              </td>
              <td :class="td">
                <span v-if="m.is_owner" class="text-[14px] text-muted-foreground">{{ t('role.allPerms') }}</span>
                <RouterLink v-else :to="`/equipe/${m.id}`" class="text-[14px] text-link hover:underline focus-visible:underline focus-visible:outline-none">
                  {{ t('roles.direct') }}
                </RouterLink>
              </td>
            </tr>
          </tbody>
        </DataTable>
      </section>

      <section class="grid gap-3" aria-labelledby="roles-title">
        <div>
          <h2 id="roles-title" class="text-[16px] font-semibold tracking-tight">{{ t('team.roles') }}</h2>
          <p class="mt-1 text-[14px] text-muted-foreground">{{ t('roles.rolesDesc') }}</p>
        </div>
        <RolesPanel v-model:roles="roles" :permissions="permissions" />
      </section>
    </template>
  </PageBody>
</template>
