<script setup lang="ts">
/** Papéis e permissões: quem tem cada papel e os papéis da Empresa. */
import { computed, onMounted, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import RolesPanel from '@/modules/team/components/RolesPanel.vue'
import Avatar from '@/components/ui/Avatar.vue'
import Badge from '@/components/ui/Badge.vue'
import DataTable from '@/components/ui/DataTable.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, pick, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import type { Member, Permission, Role } from '@/modules/team/types'
import { useSession } from '@/stores/session'
import { teamService } from '@/modules/team/service'

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

/** Carrega papéis, permissões e membros. */
async function load() {
  loadError.value = null
  try {
    const [rolePage, permissionPage, memberPage] = await Promise.all([
      teamService.roles(),
      teamService.permissions(),
      canTeam.value ? teamService.members() : Promise.resolve({ items: [] as Member[], next_cursor: null }),
    ])
    roles.value = rolePage.items
    permissions.value = permissionPage.items
    members.value = memberPage.items.filter((member) => member.status !== 'removed')
    loaded.value = true
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)
watch(() => session.me?.active_company_id, load)

const roleOptions = computed(() => roles.value.map((role) => ({ value: role.id, label: pick(role.name) })))
/** Diz se o membro é a própria pessoa. */
const isMe = (member: Member) => member.user.id === session.me?.user.id
/** Diz se o papel do membro pode ser trocado por quem está vendo. */
const editable = (member: Member) => canManage.value && !member.is_owner && !isMe(member)

/** Troca o papel do membro. */
async function assign(member: Member, roleId: string) {
  if (roleId === member.role?.id) return
  saving.value = member.id
  try {
    const updated = await teamService.updateMember(member.id, { role_id: roleId })
    members.value = members.value.map((existing) => (existing.id === member.id ? { ...existing, ...updated } : existing))
    // Contagem de pessoas por papel.
    roles.value = (await teamService.roles()).items
    toast.success(t('roles.assigned', { name: member.user.name }))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
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
            <tr v-for="member in members" :key="member.id" class="hover:bg-muted">
              <td :class="td">
                <div class="flex items-center gap-3">
                  <Avatar :name="member.user.name" />
                  <div class="min-w-0">
                    <div class="font-medium">
                      {{ member.user.name }}<span v-if="isMe(member)" class="font-normal text-muted-foreground"> ({{ t('team.you') }})</span>
                    </div>
                    <div class="truncate text-[13px] text-muted-foreground">{{ member.user.email }}</div>
                  </div>
                </div>
              </td>
              <td :class="td">
                <Badge v-if="member.is_owner">{{ t('team.owner') }}</Badge>
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
