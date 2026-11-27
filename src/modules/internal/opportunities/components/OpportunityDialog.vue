<script setup lang="ts">
/** O modal "Detalhes" de uma oportunidade: por quê, como estimamos, o ganho no mês, a confiança e a tarefa para o gerente. */
import { computed } from 'vue'
import { ClipboardList } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Status from '@/components/ui/Status.vue'
import { t } from '@/lib/i18n'
import { CONFIDENCE_TONE, howText, money, ruleLabel, whyText } from '@/modules/internal/opportunities/rules'
import type { Opportunity } from '@/modules/internal/opportunities/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ opportunity: Opportunity | null; canManage: boolean; busy: boolean }>()
const emit = defineEmits<{ task: [] }>()

const item = computed(() => props.opportunity)
const description = computed(() => (item.value ? [item.value.domain, item.value.client_name].filter(Boolean).join(' · ') : ''))
const taskLabel = computed(() => {
  const first = item.value?.manager_name?.split(' ')[0]
  return first ? t('op.createTaskFor', { name: first }) : t('op.createTask')
})
</script>

<template>
  <Dialog v-model:open="open" class="max-w-[520px]" :title="item ? ruleLabel(item.rule) : ''" :desc="description">
    <dl v-if="item" class="grid gap-3 text-[14px]">
      <div class="grid gap-1">
        <dt class="text-[13px] text-muted-foreground">{{ t('op.why') }}</dt>
        <dd>{{ whyText(item) }}</dd>
      </div>
      <div class="grid gap-1">
        <dt class="text-[13px] text-muted-foreground">{{ t('op.how') }}</dt>
        <dd>{{ howText(item) }}</dd>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div class="rounded-md border p-3">
          <dt class="text-[13px] text-muted-foreground">{{ t('op.col.gain') }}</dt>
          <dd class="text-[20px] font-semibold tnum">{{ money(item.gain) }}</dd>
        </div>
        <div class="rounded-md border p-3">
          <dt class="text-[13px] text-muted-foreground">{{ t('op.col.confidence') }}</dt>
          <dd class="mt-1"><Status :tone="CONFIDENCE_TONE[item.confidence]">{{ t(`op.confidence.${item.confidence}`) }}</Status></dd>
        </div>
      </div>
    </dl>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.close') }}</Button>
      <Button v-if="canManage" :loading="busy" @click="emit('task')"><ClipboardList />{{ taskLabel }}</Button>
    </template>
  </Dialog>
</template>
