<script setup lang="ts">
/** Janela de tarefa nova: assunto, descrição, cliente, domínio, prioridade e responsável. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { DESCRIPTION_MAX, PRIORITIES, SUBJECT_MAX, SUBJECT_MIN, priorityLabel } from '@/modules/internal/tasks/rules'
import { taskService } from '@/modules/internal/tasks/service'
import type { SupportTaskDetail, TaskPriority } from '@/modules/internal/tasks/types'
import { useSession } from '@/stores/session'

const NONE = 'none'
const TEXTAREA = 'w-full rounded-md border border-input bg-background px-3 py-2 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ clients: { value: string; label: string }[]; staff: { value: string; label: string }[] }>()
const emit = defineEmits<{ created: [task: SupportTaskDetail] }>()
const session = useSession()

const subject = ref('')
const description = ref('')
const priority = ref<TaskPriority>('normal')
const client = ref(NONE)
const domain = ref('')
const assignee = ref(NONE)
const saving = ref(false)

const clientOptions = computed(() => [{ value: NONE, label: t('task.noClient') }, ...props.clients])
const staffOptions = computed(() => [{ value: NONE, label: t('task.noAssignee') }, ...props.staff])
const priorityOptions = computed(() => PRIORITIES.map((value) => ({ value, label: priorityLabel(value) })))

watch(open, (opened) => {
  if (!opened) return
  subject.value = ''
  description.value = ''
  priority.value = 'normal'
  client.value = NONE
  domain.value = ''
  assignee.value = NONE
})

/** Cria a tarefa e avisa quem recebe o e-mail. */
async function create() {
  if (subject.value.trim().length < SUBJECT_MIN) return
  saving.value = true
  try {
    const task = await taskService.create({
      subject: subject.value.trim(),
      description: description.value.trim(),
      priority: priority.value,
      client_id: client.value === NONE ? null : client.value,
      domain: domain.value.trim() || null,
      assignee_id: assignee.value === NONE ? null : assignee.value,
    })
    open.value = false
    const mailed = task.assignee && task.assignee.id !== session.me?.user.id
    toast.success(t('task.created'), { description: mailed ? t('task.mailOne', { name: task.assignee?.name ?? '' }) : undefined })
    emit('created', task)
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <Dialog v-model:open="open" :title="t('task.new')" :desc="t('task.newDesc')" class="max-w-[560px]">
    <div class="grid gap-4">
      <Field id="task-subject" :label="t('task.subject')">
        <Input id="task-subject" v-model="subject" :maxlength="SUBJECT_MAX" class="h-10" />
      </Field>
      <Field id="task-description" :label="t('task.description')">
        <textarea id="task-description" v-model="description" rows="4" :maxlength="DESCRIPTION_MAX" :class="TEXTAREA" />
      </Field>
      <div class="grid gap-4 sm:grid-cols-2">
        <Field id="task-client" :label="t('task.client')">
          <NativeSelect id="task-client" v-model="client" :options="clientOptions" class="[&_select]:h-10" />
        </Field>
        <Field id="task-domain" :label="t('task.domain')" :hint="t('task.domainHint')">
          <Input id="task-domain" v-model="domain" class="h-10 font-mono" placeholder="exemplo.com" />
        </Field>
        <Field id="task-priority" :label="t('task.priority')">
          <NativeSelect id="task-priority" v-model="priority" :options="priorityOptions" class="[&_select]:h-10" />
        </Field>
        <Field id="task-assignee" :label="t('task.assignee')" :hint="t('task.assigneeHint')">
          <NativeSelect id="task-assignee" v-model="assignee" :options="staffOptions" class="[&_select]:h-10" />
        </Field>
      </div>
    </div>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button :loading="saving" :disabled="subject.trim().length < SUBJECT_MIN" @click="create">{{ t('task.create') }}</Button>
    </template>
  </Dialog>
</template>
