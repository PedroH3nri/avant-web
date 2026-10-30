<script setup lang="ts">
/** Card com as permissões do papel, agrupadas, para marcar e salvar ali mesmo. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import { ApiError } from '@/lib/api'
import { errorText, permissionGroupLabel, pick, t } from '@/lib/i18n'
import { groupPermissions, permissionsChanged } from '@/modules/team/rules'
import { teamService } from '@/modules/team/service'
import type { Permission, Role } from '@/modules/team/types'
import { useSession } from '@/stores/session'

const props = defineProps<{ role: Role; permissions: Permission[] }>()
const emit = defineEmits<{ saved: [role: Role] }>()
const session = useSession()
const chosen = ref<Set<string>>(new Set())
const busy = ref(false)
const canManage = computed(() => session.can('roles.manage'))
const groups = computed(() => groupPermissions(props.permissions))
const changed = computed(() => permissionsChanged(props.role.permissions, chosen.value))

watch(
  () => [props.role.id, props.role.permissions] as const,
  () => (chosen.value = new Set(props.role.permissions)),
  { immediate: true },
)

/** Marca ou desmarca uma permissão. */
function toggle(key: string, on: boolean) {
  const next = new Set(chosen.value)
  if (on) next.add(key)
  else next.delete(key)
  chosen.value = next
}

/** Salva as permissões marcadas no papel. */
async function save() {
  busy.value = true
  try {
    const saved = await teamService.updateRole(props.role.id, { permissions: [...chosen.value].sort() })
    emit('saved', saved)
    toast.success(t('role.saved'))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <Card :title="t('role.permsTitle')" :desc="t('role.permsCardDesc', { role: pick(role.name) })" :footer-note="canManage ? t('role.permsHint') : t('role.permsReadonly')">
    <p v-if="permissions.length === 0" class="text-[14px] text-muted-foreground">{{ t('common.loading') }}</p>
    <div v-else class="grid gap-x-8 gap-y-5 sm:grid-cols-2">
      <fieldset v-for="[groupKey, perms] in groups" :key="groupKey" class="grid content-start gap-2">
        <legend class="mb-2 text-[13px] font-medium">{{ permissionGroupLabel(groupKey) }}</legend>
        <Checkbox
          v-for="perm in perms"
          :id="`role-perm-${perm.key}`"
          :key="perm.key"
          :label="pick(perm.name)"
          :model-value="chosen.has(perm.key)"
          :disabled="!canManage || busy || !session.can(perm.key)"
          @update:model-value="(value: boolean) => toggle(perm.key, value)"
        />
      </fieldset>
    </div>
    <template v-if="canManage" #footer>
      <Button size="sm" variant="outline" class="bg-card" :disabled="!changed || busy" @click="chosen = new Set(role.permissions)">{{ t('common.cancel') }}</Button>
      <Button size="sm" :loading="busy" :disabled="!changed" @click="save">{{ t('common.save') }}</Button>
    </template>
  </Card>
</template>
