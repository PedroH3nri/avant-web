<script setup lang="ts">
/** Aba Tarefas para o gerente: os avisos do Avant que também viram tarefa no HubSpot, com chave e prazo, e as últimas tarefas criadas. */
import { CircleCheck } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Select from '@/components/ui/Select.vue'
import Status from '@/components/ui/Status.vue'
import Switch from '@/components/ui/Switch.vue'
import { formatAgo, formatDate, t } from '@/lib/i18n'
import { DUES, DUE_LABEL, RULE_LABEL, RULE_TEXT, TASK_STATE_LABEL, TASK_STATE_TONE } from '@/modules/internal/hubspot/rules'
import type { HubspotTask, HubspotTaskDue, HubspotTaskRuleSetting } from '@/modules/internal/hubspot/types'

defineProps<{ tasks: HubspotTask[] | null; canRun: boolean; dirty: boolean; saving: boolean }>()
const rules = defineModel<HubspotTaskRuleSetting[]>({ required: true })
const emit = defineEmits<{ save: [] }>()
const dueOptions = DUES.map((value) => ({ value, label: t(DUE_LABEL[value]) }))

/** Troca a chave ou o prazo de um aviso. */
function change(index: number, patch: Partial<HubspotTaskRuleSetting>) {
  rules.value = rules.value.map((rule, position) => (position === index ? { ...rule, ...patch } : rule))
}
</script>

<template>
  <div class="grid gap-6 lg:grid-cols-[1fr_360px]">
    <Card :title="t('hst.title')" :desc="t('hst.desc')" :footer-note="t('hst.footer')">
      <ul class="-my-3 divide-y">
        <li v-for="(rule, index) in rules" :key="rule.rule" class="flex flex-wrap items-start gap-3 py-4">
          <div class="min-w-0 flex-1">
            <div class="text-[14px] font-medium">{{ t(RULE_LABEL[rule.rule]) }}</div>
            <p class="text-[13px] text-muted-foreground">{{ t(RULE_TEXT[rule.rule]) }}</p>
            <div v-if="rule.enabled" class="mt-2 flex flex-wrap items-center gap-2 text-[13px]">
              <span class="text-muted-foreground">{{ t('hst.dueLead') }}</span>
              <Select :model-value="rule.due" :options="dueOptions" :aria-label="t('hst.due')" :disabled="!canRun" class="h-8 w-[160px] text-[13px]" @update:model-value="(due: string) => change(index, { due: due as HubspotTaskDue })" />
            </div>
          </div>
          <Switch :model-value="rule.enabled" :label="t(RULE_LABEL[rule.rule])" :disabled="!canRun" @update:model-value="(on: boolean) => change(index, { enabled: on })" />
        </li>
      </ul>
      <template v-if="canRun" #footer>
        <Button :disabled="!dirty" :loading="saving" @click="emit('save')">{{ t('hst.save') }}</Button>
      </template>
    </Card>
    <Card :title="t('hst.recent')">
      <p v-if="tasks === null" class="text-[14px] text-muted-foreground">{{ t('common.loading') }}</p>
      <div v-else-if="!tasks.length" class="flex flex-col items-center gap-2 py-6 text-center text-[14px] text-muted-foreground">
        <CircleCheck class="size-5" aria-hidden="true" />{{ t('hst.noTasks') }}
      </div>
      <ul v-else class="-my-2 divide-y">
        <li v-for="task in tasks" :key="task.id" class="py-3">
          <div class="text-[14px] font-medium">{{ task.subject }}</div>
          <div class="mt-0.5 flex items-center justify-between gap-2 text-[12px] text-muted-foreground">
            <span>{{ task.client_name }} · {{ task.manager_name || t('hs.card.noOwner') }} · {{ formatAgo(task.created_at) }}</span>
            <Status :tone="TASK_STATE_TONE[task.state]">{{ t(TASK_STATE_LABEL[task.state]) }}</Status>
          </div>
          <div v-if="task.state === 'open'" class="mt-0.5 text-[12px] text-muted-foreground">{{ t('hst.dueAt', { when: formatDate(task.due_at) }) }}</div>
          <div v-if="task.error" class="mt-0.5 text-[12px] text-bad">{{ task.error }}</div>
        </li>
      </ul>
    </Card>
  </div>
</template>
