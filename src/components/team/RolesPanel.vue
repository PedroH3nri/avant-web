<script setup lang="ts">
import { computed, ref } from 'vue'
import { toast } from 'vue-sonner'
import { Pencil, Plus, Trash2 } from 'lucide-vue-next'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import RoleDialog from '@/components/team/RoleDialog.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import { api, ApiError } from '@/lib/api'
import { errorText, pick, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import type { Permission, Role } from '@/lib/types'
import { useSession } from '@/stores/session'

const roles = defineModel<Role[]>('roles', { required: true })
const props = defineProps<{ permissions: Permission[] }>()
const session = useSession()
const canManage = computed(() => session.can('roles.manage'))

const editing = ref<Role | null>(null)
const dialog = ref(false)
const deleting = ref<Role | null>(null)
const busy = ref(false)
const deleteOpen = computed({ get: () => deleting.value !== null, set: (v) => !v && (deleting.value = null) })

const names = computed(() => new Map(props.permissions.map((p) => [p.key, pick(p.name)])))
function summary(r: Role): string {
  if (r.permissions.includes('*')) return t('role.allPerms')
  const list = r.permissions.map((k) => names.value.get(k) ?? k)
  return list.length > 3 ? `${list.slice(0, 3).join(', ')} +${list.length - 3}` : list.join(', ')
}

function edit(r: Role | null) {
  editing.value = r
  dialog.value = true
}

function saved(r: Role) {
  const exists = roles.value.some((x) => x.id === r.id)
  roles.value = exists ? roles.value.map((x) => (x.id === r.id ? r : x)) : [...roles.value, r]
}

async function remove() {
  const r = deleting.value
  if (!r) return
  busy.value = true
  try {
    await api.delete(`/roles/${r.id}`)
    roles.value = roles.value.filter((x) => x.id !== r.id)
    toast(t('role.deleted'))
    deleting.value = null
  } catch (e) {
    toast.error(errorText(e instanceof ApiError ? e.code : 'unknown'))
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
      <tr v-for="r in roles" :key="r.id">
        <td :class="[td, 'font-medium']">{{ pick(r.name) }}</td>
        <td :class="td">
          <Badge v-if="r.is_system">{{ t('role.system') }}</Badge><Badge v-else tone="ochre">{{ t('role.custom') }}</Badge>
        </td>
        <td :class="[td, 'max-w-[320px] text-muted-foreground']">
          <span :title="r.permissions.map((k) => names.get(k) ?? k).join(', ')">{{ summary(r) }}</span>
        </td>
        <td :class="[td, 'text-muted-foreground']">{{ t(`role.scope.${r.site_scope}`) }}</td>
        <td :class="[td, 'text-right tnum']">{{ r.member_count }}</td>
        <td :class="[td, 'whitespace-nowrap text-right']">
          <template v-if="canManage && !r.is_system">
            <Button variant="ghost" size="icon" class="size-8" :aria-label="`${t('common.edit')}: ${pick(r.name)}`" @click="edit(r)"><Pencil /></Button>
            <Button
              variant="ghost"
              size="icon"
              class="size-8 text-bad"
              :aria-label="`${t('common.delete')}: ${pick(r.name)}`"
              :disabled="r.member_count > 0"
              :title="r.member_count > 0 ? errorText('role_in_use') : undefined"
              @click="deleting = r"
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
