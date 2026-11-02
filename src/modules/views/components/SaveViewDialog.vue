<script setup lang="ts">
/** Modal de salvar a visão: nome e quem vê (só eu, Empresa inteira ou papéis escolhidos). */
import { computed, ref, watch } from 'vue'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import { t } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import type { Visibility } from '@/modules/reports/types'

export interface ViewForm {
  name: string
  visibility: Visibility
  roleIds: string[]
}

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ title: string; initial: ViewForm; roles: { id: string; name: string }[] | null; busy: boolean }>()
const emit = defineEmits<{ save: [form: ViewForm] }>()
const NAME_MAX = 80
const name = ref('')
const visibility = ref<Visibility>('private')
const roleIds = ref<string[]>([])
watch(open, (opened) => {
  if (!opened) return
  name.value = props.initial.name
  visibility.value = props.initial.visibility
  roleIds.value = props.initial.roleIds.filter((id) => props.roles?.some((role) => role.id === id))
})
const choices = computed(() => (['private', 'company', 'roles'] as Visibility[]).filter((choice) => choice !== 'roles' || props.roles !== null))
const invalid = computed(() => !name.value.trim() || (visibility.value === 'roles' && roleIds.value.length === 0))

/** Liga ou desliga um papel. */
function toggleRole(id: string) {
  roleIds.value = roleIds.value.includes(id) ? roleIds.value.filter((kept) => kept !== id) : [...roleIds.value, id]
}
</script>

<template>
  <Dialog v-model:open="open" :title="title" :desc="t('views.saveDesc')">
    <form id="save-view" class="grid gap-4" @submit.prevent="!invalid && emit('save', { name: name.trim(), visibility, roleIds: visibility === 'roles' ? roleIds : [] })">
      <Field id="view-name" :label="t('views.name')"><Input id="view-name" v-model="name" :maxlength="NAME_MAX" /></Field>
      <fieldset class="grid gap-2">
        <legend class="mb-2 text-[13px] font-medium text-muted-foreground">{{ t('report.whoSees') }}</legend>
        <label v-for="choice in choices" :key="choice" :class="cn('flex cursor-pointer items-start gap-3 rounded-md border p-3', visibility === choice && 'border-primary')">
          <input v-model="visibility" type="radio" name="view-visibility" :value="choice" class="mt-1 accent-[hsl(var(--primary))]" />
          <span>
            <span class="block text-[14px] font-medium">{{ t(`report.visibility.${choice}`) }}</span>
            <span class="block text-[13px] text-muted-foreground">{{ t(`views.visibilityHint.${choice}`) }}</span>
          </span>
        </label>
        <div v-if="visibility === 'roles'" class="grid gap-1.5 pl-1 pt-1">
          <label v-for="role in roles ?? []" :key="role.id" class="flex items-center gap-2 text-[14px]">
            <input type="checkbox" :checked="roleIds.includes(role.id)" class="size-4 accent-[hsl(var(--primary))]" @change="toggleRole(role.id)" />{{ role.name }}
          </label>
          <p v-if="!roleIds.length" class="text-[13px] text-bad">{{ t('report.pickRole') }}</p>
        </div>
        <p class="text-[13px] text-muted-foreground">{{ t('views.whoEdits') }}</p>
      </fieldset>
    </form>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button type="submit" form="save-view" :disabled="invalid" :loading="busy">{{ t('views.save') }}</Button>
    </template>
  </Dialog>
</template>
