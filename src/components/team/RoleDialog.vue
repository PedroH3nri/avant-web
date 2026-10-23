<script setup lang="ts">
/** Criar ou editar um papel personalizado: nome, sites e permissões do catálogo. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import { api, ApiError } from '@/lib/api'
import { errorText, pick, t, type Key } from '@/lib/i18n'
import type { Permission, Role, SiteScope } from '@/lib/types'
import { useSession } from '@/stores/session'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ role: Role | null; permissions: Permission[] }>()
const emit = defineEmits<{ saved: [role: Role] }>()
const session = useSession()

const name = ref('')
const scope = ref<SiteScope>('assigned')
const chosen = ref<Set<string>>(new Set())
const busy = ref(false)

watch(open, (v) => {
  if (!v) return
  name.value = props.role ? pick(props.role.name) : ''
  scope.value = props.role?.site_scope ?? 'assigned'
  chosen.value = new Set(props.role?.permissions ?? [])
})

const groups = computed(() => {
  const by = new Map<string, Permission[]>()
  for (const p of props.permissions) by.set(p.group, [...(by.get(p.group) ?? []), p])
  return [...by.entries()]
})
const groupLabel = (g: string) => t(`perm.group.${g}` as Key)

function toggle(key: string, on: boolean) {
  const next = new Set(chosen.value)
  if (on) next.add(key)
  else next.delete(key)
  chosen.value = next
}

async function save() {
  busy.value = true
  const body = { name: name.value.trim(), permissions: [...chosen.value].sort(), site_scope: scope.value }
  try {
    const saved = props.role ? await api.patch<Role>(`/roles/${props.role.id}`, body) : await api.post<Role>('/roles', body)
    emit('saved', saved)
    toast.success(t('role.saved'))
    open.value = false
  } catch (e) {
    toast.error(errorText(e instanceof ApiError ? e.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <Dialog v-model:open="open" :title="role ? t('role.edit') : t('role.create')" class="max-w-[600px]">
    <form id="role-form" class="grid gap-5" @submit.prevent="save">
      <Field id="role-name" :label="t('role.name')">
        <Input id="role-name" v-model="name" maxlength="60" />
      </Field>
      <fieldset class="grid gap-2">
        <legend class="mb-2 text-[13px] font-medium text-muted-foreground">{{ t('role.scopeTitle') }}</legend>
        <label v-for="s in ['assigned', 'all'] as const" :key="s" class="flex cursor-pointer items-center gap-2.5 text-[14px]">
          <input v-model="scope" type="radio" name="role-scope" :value="s" class="size-4 accent-[hsl(var(--foreground))]" />
          {{ t(`role.scope.${s}`) }}
        </label>
        <p v-if="scope === 'assigned'" class="text-[13px] text-muted-foreground">{{ t('role.scopeAssignedHint') }}</p>
      </fieldset>
      <fieldset class="grid gap-4">
        <legend class="mb-1 text-[13px] font-medium text-muted-foreground">{{ t('role.permsTitle') }}</legend>
        <p class="-mt-2 text-[13px] text-muted-foreground">{{ t('role.permsHint') }}</p>
        <div v-for="[g, perms] in groups" :key="g" class="grid gap-2">
          <h3 class="text-[13px] font-medium">{{ groupLabel(g) }}</h3>
          <Checkbox
            v-for="p in perms"
            :id="`perm-${p.key}`"
            :key="p.key"
            :label="pick(p.name)"
            :model-value="chosen.has(p.key)"
            :disabled="!session.can(p.key)"
            @update:model-value="(v: boolean) => toggle(p.key, v)"
          />
        </div>
      </fieldset>
    </form>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button form="role-form" type="submit" :loading="busy" :disabled="!name.trim()">{{ t('common.save') }}</Button>
    </template>
  </Dialog>
</template>
