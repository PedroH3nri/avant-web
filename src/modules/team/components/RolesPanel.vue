<script setup lang="ts">
/** Lista de papéis com criar, editar e apagar. */
import { computed, ref } from 'vue'
import { toast } from 'vue-sonner'
import { Pencil, Plus, Trash2 } from 'lucide-vue-next'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import RoleDialog from '@/modules/team/components/RoleDialog.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import { ApiError } from '@/lib/api'
import { errorText, pick, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import type { Permission, Role } from '@/modules/team/types'
import { useSession } from '@/stores/session'
import { teamService } from '@/modules/team/service'

const roles = defineModel<Role[]>('roles', { required: true })
const props = defineProps<{ permissions: Permission[] }>()
const session = useSession()
const canManage = computed(() => session.can('roles.manage'))

const editing = ref<Role | null>(null)
const dialog = ref(false)
const deleting = ref<Role | null>(null)
const busy = ref(false)
const deleteOpen = computed({ get: () => deleting.value !== null, set: (value) => !value && (deleting.value = null) })

const names = computed(() => new Map(props.permissions.map((permission) => [permission.key, pick(permission.name)])))
/** Resumo das permissões do papel, com no máximo três nomes. */
function summary(role: Role): string {
  if (role.permissions.includes('*')) return t('role.allPerms')
  const list = role.permissions.map((permission) => names.value.get(permission) ?? permission)
  return list.length > 3 ? `${list.slice(0, 3).join(', ')} +${list.length - 3}` : list.join(', ')
}

/** Abre o diálogo para criar (null) ou editar um papel. */
function edit(target: Role | null) {
  editing.value = target
  dialog.value = true
}

/** Põe na lista o papel criado ou atualizado. */
function saved(role: Role) {
  const exists = roles.value.some((existing) => existing.id === role.id)
  roles.value = exists ? roles.value.map((existing) => (existing.id === role.id ? role : existing)) : [...roles.value, role]
}

/** Apaga o papel escolhido. */
async function remove() {
  const current = deleting.value
  if (!current) return
  busy.value = true
  try {
    await teamService.deleteRole(current.id)
    roles.value = roles.value.filter((role) => role.id !== current.id)
    toast(t('role.deleted'))
    deleting.value = null
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <DataTable :min="760">
    <thead>
      <tr>
        <th :class="th">{{ t('team.role') }}</th>
        <th :class="th">{{ t('role.kind') }}</th>
        <th :class="th">{{ t('role.can') }}</th>
        <th :class="th">{{ t('role.sites') }}</th>
        <th :class="[th, 'text-right']">{{ t('role.people') }}</th>
        <th :class="[th, 'w-24']"><span class="sr-only">{{ t('team.actions') }}</span></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="role in roles" :key="role.id">
        <td :class="[td, 'font-medium']">{{ pick(role.name) }}</td>
        <td :class="td">
          <Badge v-if="role.is_system">{{ t('role.system') }}</Badge><Badge v-else tone="ochre">{{ t('role.custom') }}</Badge>
        </td>
        <td :class="[td, 'max-w-[320px] text-muted-foreground']">
          <span :title="role.permissions.map((permission) => names.get(permission) ?? permission).join(', ')">{{ summary(role) }}</span>
        </td>
        <td :class="[td, 'text-muted-foreground']">{{ t(`role.scope.${role.site_scope}`) }}</td>
        <td :class="[td, 'text-right tnum']">{{ role.member_count }}</td>
        <td :class="[td, 'whitespace-nowrap text-right']">
          <template v-if="canManage && !role.is_system">
            <Button variant="ghost" size="icon" class="size-8" :aria-label="`${t('common.edit')}: ${pick(role.name)}`" @click="edit(role)"><Pencil /></Button>
            <Button
              variant="ghost"
              size="icon"
              class="size-8 text-bad"
              :aria-label="`${t('common.delete')}: ${pick(role.name)}`"
              :disabled="role.member_count > 0"
              :title="role.member_count > 0 ? errorText('role_in_use') : undefined"
              @click="deleting = role"
              ><Trash2
            /></Button>
          </template>
        </td>
      </tr>
    </tbody>
  </DataTable>
  <div class="flex flex-wrap items-center justify-between gap-3">
    <p class="text-[13px] text-muted-foreground">{{ t('role.readonly') }}</p>
    <Button v-if="canManage" variant="outline" size="sm" class="bg-card" @click="edit(null)"><Plus />{{ t('role.create') }}</Button>
  </div>
  <RoleDialog v-model:open="dialog" :role="editing" :permissions="permissions" @saved="saved" />
  <ConfirmDialog
    v-model:open="deleteOpen"
    :title="t('role.deleteTitle', { name: pick(deleting?.name) })"
    :desc="t('role.deleteDesc')"
    :action="t('role.delete')"
    :busy="busy"
    @confirm="remove"
  />
</template>
