<script setup lang="ts">
/** Modal de salvar: nome, descrição e quem vê (só eu, Empresa inteira ou papéis escolhidos). */
import { computed, ref, watch } from 'vue'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import { t } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { keepKnownRoles } from '@/modules/reports/rules'
import type { Visibility } from '@/modules/reports/types'

export interface SaveForm {
  name: string
  description: string | null
  visibility: Visibility
  roleIds: string[]
}

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ initial: SaveForm; roles: { id: string; name: string }[] | null; busy: boolean; error: string | null }>()
const emit = defineEmits<{ save: [form: SaveForm] }>()
const NAME_MAX = 120
const DESCRIPTION_MAX = 500
const name = ref('')
const description = ref('')
const visibility = ref<Visibility>('private')
const roleIds = ref<string[]>([])
watch(open, (opened) => {
  if (!opened) return
  name.value = props.initial.name
  description.value = props.initial.description ?? ''
  visibility.value = props.initial.visibility
  roleIds.value = keepKnownRoles(props.initial.roleIds, props.roles)
})
const choices = computed(() => (['private', 'company', 'roles'] as Visibility[]).filter((choice) => choice !== 'roles' || props.roles !== null || visibility.value === 'roles'))
const invalid = computed(() => !name.value.trim() || (visibility.value === 'roles' && roleIds.value.length === 0))

/** Liga ou desliga um papel. */
function toggleRole(id: string) {
  roleIds.value = roleIds.value.includes(id) ? roleIds.value.filter((kept) => kept !== id) : [...roleIds.value, id]
}
</script>

<template>
  <Dialog v-model:open="open" :title="t('report.saveTitle')" :desc="t('report.saveDesc')">
    <form id="save-report" class="grid gap-4" @submit.prevent="!invalid && emit('save', { name: name.trim(), description: description.trim() || null, visibility, roleIds: visibility === 'roles' ? roleIds : [] })">
      <Field id="report-name" :label="t('report.name')"><Input id="report-name" v-model="name" :maxlength="NAME_MAX" /></Field>
      <Field id="report-description" :label="t('report.descriptionOptional')">
        <textarea id="report-description" v-model="description" rows="2" :maxlength="DESCRIPTION_MAX" class="w-full rounded-md border border-input bg-background px-3 py-2 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
      </Field>
      <fieldset class="grid gap-2">
        <legend class="mb-2 text-[13px] font-medium text-muted-foreground">{{ t('report.whoSees') }}</legend>
        <label v-for="choice in choices" :key="choice" :class="cn('flex cursor-pointer items-start gap-3 rounded-md border p-3', visibility === choice && 'border-primary')">
          <input v-model="visibility" type="radio" name="visibility" :value="choice" class="mt-1 accent-[hsl(var(--primary))]" />
          <span>
            <span class="block text-[14px] font-medium">{{ t(`report.visibility.${choice}`) }}</span>
            <span class="block text-[13px] text-muted-foreground">{{ t(`report.visibilityHint.${choice}`) }}</span>
          </span>
        </label>
        <div v-if="visibility === 'roles'" class="grid gap-1.5 pl-1 pt-1">
          <label v-for="role in roles ?? []" :key="role.id" class="flex items-center gap-2 text-[14px]">
            <input type="checkbox" :checked="roleIds.includes(role.id)" class="size-4 accent-[hsl(var(--primary))]" @change="toggleRole(role.id)" />{{ role.name }}
          </label>
          <p v-if="!roleIds.length" class="text-[13px] text-bad">{{ t('report.pickRole') }}</p>
        </div>
        <p class="text-[13px] text-muted-foreground">{{ t('report.whoEdits') }}</p>
      </fieldset>
      <p v-if="error" class="text-[13px] text-bad">{{ error }}</p>
    </form>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button type="submit" form="save-report" :disabled="invalid" :loading="busy">{{ t('report.save') }}</Button>
    </template>
  </Dialog>
</template>
