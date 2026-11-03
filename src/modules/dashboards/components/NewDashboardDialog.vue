<script setup lang="ts">
/** Dashboard novo: em branco, com um nome, ou a partir de um dos modelos prontos da Empresa. */
import { ref, watch } from 'vue'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import { lang, t } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { dashboardService } from '@/modules/dashboards/service'
import type { DashboardTemplate } from '@/modules/dashboards/types'

const open = defineModel<boolean>('open', { default: false })
defineProps<{ busy: boolean }>()
const emit = defineEmits<{ blank: [name: string]; template: [id: string] }>()
const NAME_MAX = 120

const templates = ref<DashboardTemplate[]>([])
const chosen = ref<string>('')
const name = ref('')

watch(open, (opened) => {
  if (!opened) return
  chosen.value = ''
  name.value = t('dash.new.defaultName')
  void dashboardService
    .templates()
    .then((found) => (templates.value = found.items))
    .catch(() => (templates.value = []))
})

/** Cria o dashboard escolhido. */
function create() {
  if (chosen.value) emit('template', chosen.value)
  else if (name.value.trim()) emit('blank', name.value.trim())
}
</script>

<template>
  <Dialog v-model:open="open" :title="t('dash.new.title')" :desc="t('dash.new.desc')" class="max-w-[520px]">
    <div class="grid gap-2" role="radiogroup" :aria-label="t('dash.new.title')">
      <button
        type="button"
        role="radio"
        :aria-checked="chosen === ''"
        :class="cn('rounded-md border px-4 py-3 text-left hover:bg-accent', chosen === '' && 'border-foreground')"
        @click="chosen = ''"
      >
        <div class="text-[14px] font-medium">{{ t('dash.new.blank') }}</div>
        <div class="text-[13px] text-muted-foreground">{{ t('dash.new.blankHint') }}</div>
      </button>
      <button
        v-for="template in templates"
        :key="template.id"
        type="button"
        role="radio"
        :aria-checked="chosen === template.id"
        :class="cn('rounded-md border px-4 py-3 text-left hover:bg-accent', chosen === template.id && 'border-foreground')"
        @click="chosen = template.id"
      >
        <div class="text-[14px] font-medium">{{ template.name[lang] ?? template.name.pt }}</div>
        <div class="text-[13px] text-muted-foreground">{{ t('dash.new.widgets', { n: template.definition.widgets.length }) }}</div>
      </button>
      <Field v-if="chosen === ''" id="dashboard-name" :label="t('dash.new.name')" class="mt-2">
        <Input id="dashboard-name" v-model="name" :maxlength="NAME_MAX" />
      </Field>
    </div>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button :disabled="!chosen && !name.trim()" :loading="busy" @click="create">{{ t('dash.new.create') }}</Button>
    </template>
  </Dialog>
</template>
