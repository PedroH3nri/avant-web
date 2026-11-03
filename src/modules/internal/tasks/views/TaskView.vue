<script setup lang="ts">
/** Uma tarefa de suporte: descrição, comentários e histórico, e os detalhes que quem pode muda. */
import { computed, onMounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { toast } from 'vue-sonner'
import { ArrowLeft } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t } from '@/lib/i18n'
import { staffService } from '@/modules/internal/staff/service'
import {
  COMMENT_MAX,
  COMMENT_MIN,
  PRIORITIES,
  STATUSES,
  commentRecipients,
  eventText,
  personName,
  priorityLabel,
  statusLabel,
  taskPlace,
} from '@/modules/internal/tasks/rules'
import { taskService } from '@/modules/internal/tasks/service'
import type { SupportTaskDetail, TaskPatch, TaskPriority, TaskStatus } from '@/modules/internal/tasks/types'
import { useSession } from '@/stores/session'

const NONE = 'none'
const TEXTAREA = 'w-full rounded-md border border-input bg-background px-3 py-2 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

const route = useRoute()
const session = useSession()
const task = ref<SupportTaskDetail | null>(null)
const loadError = ref<string | null>(null)
const staff = ref<{ value: string; label: string }[]>([])
const comment = ref('')
const sending = ref(false)
const saving = ref(false)

const taskId = computed(() => String(route.params.id))
const statusOptions = computed(() => STATUSES.map((value) => ({ value, label: statusLabel(value) })))
const priorityOptions = computed(() => PRIORITIES.map((value) => ({ value, label: priorityLabel(value) })))
const assigneeOptions = computed(() => {
  const options = [{ value: NONE, label: t('task.noAssignee') }, ...staff.value]
  const current = task.value?.assignee
  if (current && !options.some((option) => option.value === current.id)) options.push({ value: current.id, label: current.name })
  return options
})
const place = computed(() => (task.value ? taskPlace(task.value) : null))
const sub = computed(() => (task.value ? t('task.createdBy', { name: personName(task.value.creator), date: formatDate(task.value.created_at) }) : undefined))

/** Mostra o erro num aviso. */
const fail = (error: unknown) => toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))

/** Carrega a tarefa com a linha do tempo. */
async function load() {
  loadError.value = null
  try {
    task.value = await taskService.get(taskId.value)
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Carrega a equipe Groone para o seletor de responsável; sem acesso, fica só o atual. */
async function loadStaff() {
  try {
    staff.value = (await staffService.options()).items.map((member) => ({ value: member.user.id, label: member.user.name }))
  } catch {
    staff.value = []
  }
}
onMounted(() => {
  void load()
  void loadStaff()
})

/** Grava uma mudança e mostra quem recebe e-mail, quando alguém recebe. */
async function change(patch: TaskPatch, mailedTo?: string) {
  if (!task.value) return
  saving.value = true
  try {
    task.value = await taskService.change(task.value.id, patch)
    toast.success(t('task.updated'), { description: mailedTo ? t('task.mailOne', { name: mailedTo }) : undefined })
  } catch (error) {
    fail(error)
  } finally {
    saving.value = false
  }
}

/** Troca a situação. */
const changeStatus = (value: string) => change({ status: value as TaskStatus })

/** Troca a prioridade. */
const changePriority = (value: string) => change({ priority: value as TaskPriority })

/** Troca ou tira o responsável; quem passa a ser responsável recebe e-mail. */
function changeAssignee(value: string) {
  const assigneeId = value === NONE ? null : value
  const name = staff.value.find((option) => option.value === assigneeId)?.label
  void change({ assignee_id: assigneeId }, assigneeId && assigneeId !== session.me?.user.id ? name : undefined)
}

/** Envia o comentário e mostra quem recebe o e-mail. */
async function send() {
  if (!task.value || comment.value.trim().length < COMMENT_MIN) return
  sending.value = true
  try {
    const recipients = commentRecipients(task.value, session.me?.user.id)
    task.value = await taskService.comment(task.value.id, comment.value.trim())
    comment.value = ''
    const [first, second] = recipients
    const description = second ? t('task.mailTwo', { first: first ?? '', second }) : first ? t('task.mailOne', { name: first }) : undefined
    toast.success(t('task.commented'), { description })
  } catch (error) {
    fail(error)
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <PageHeader :title="task?.subject ?? t('task.title')" :sub="sub">
    <template #back>
      <RouterLink to="/interno/tarefas" class="mb-2 inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground">
        <ArrowLeft class="size-3.5" />{{ t('task.title') }}
      </RouterLink>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <p v-else-if="!task" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <div v-else class="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div class="grid min-w-0 content-start gap-6">
        <Card :title="t('task.description')">
          <p class="whitespace-pre-line break-words text-[14px]">{{ task.description || '–' }}</p>
        </Card>
        <Card :title="t('task.timeline')" :desc="t('task.timelineDesc')">
          <ol class="grid gap-4">
            <template v-for="event in task.events" :key="event.id">
              <li v-if="event.kind === 'comment'" class="rounded-md border p-3">
                <div class="text-[13px]">
                  <span class="font-medium">{{ personName(event.author) }}</span>
                  <span class="text-muted-foreground"> · <span class="tnum">{{ formatDate(event.created_at) }}</span></span>
                </div>
                <p class="mt-1 whitespace-pre-line break-words text-[14px]">{{ event.message }}</p>
              </li>
              <li v-else class="flex flex-wrap gap-x-1.5 px-3 text-[13px] text-muted-foreground">
                <span class="font-medium text-foreground">{{ personName(event.author) }}</span>{{ eventText(event) }}
                <span class="tnum">· {{ formatDate(event.created_at) }}</span>
              </li>
            </template>
          </ol>
          <div class="mt-5 grid gap-3 border-t pt-5">
            <textarea v-model="comment" rows="3" :maxlength="COMMENT_MAX" :aria-label="t('task.newComment')" :placeholder="t('task.commentPlaceholder')" :class="TEXTAREA" />
            <div class="flex justify-end">
              <Button size="sm" :loading="sending" :disabled="comment.trim().length < COMMENT_MIN" @click="send">{{ t('task.comment') }}</Button>
            </div>
          </div>
        </Card>
      </div>
      <Card :title="t('task.details')" class="self-start">
        <dl class="-my-2 divide-y">
          <div class="grid gap-1 py-2 text-[14px] sm:grid-cols-[110px_1fr] sm:items-center">
            <dt class="text-muted-foreground">{{ t('task.status') }}</dt>
            <dd class="min-w-0">
              <NativeSelect v-if="task.editable" :model-value="task.status" :options="statusOptions" :aria-label="t('task.status')" :disabled="saving" class="[&_select]:h-9" @update:model-value="changeStatus" />
              <span v-else>{{ statusLabel(task.status) }}</span>
            </dd>
          </div>
          <div class="grid gap-1 py-2 text-[14px] sm:grid-cols-[110px_1fr] sm:items-center">
            <dt class="text-muted-foreground">{{ t('task.priority') }}</dt>
            <dd class="min-w-0">
              <NativeSelect v-if="task.editable" :model-value="task.priority" :options="priorityOptions" :aria-label="t('task.priority')" :disabled="saving" class="[&_select]:h-9" @update:model-value="changePriority" />
              <span v-else>{{ priorityLabel(task.priority) }}</span>
            </dd>
          </div>
          <div class="grid gap-1 py-2 text-[14px] sm:grid-cols-[110px_1fr] sm:items-center">
            <dt class="text-muted-foreground">{{ t('task.assignee') }}</dt>
            <dd class="min-w-0">
              <NativeSelect v-if="task.editable" :model-value="task.assignee?.id ?? NONE" :options="assigneeOptions" :aria-label="t('task.assignee')" :disabled="saving" class="[&_select]:h-9" @update:model-value="changeAssignee" />
              <span v-else>{{ task.assignee?.name ?? t('task.noAssignee') }}</span>
            </dd>
          </div>
          <div class="grid gap-1 py-2 text-[14px] sm:grid-cols-[110px_1fr]">
            <dt class="text-muted-foreground">{{ t('task.client') }}</dt>
            <dd class="min-w-0">
              <RouterLink v-if="task.client && session.can('internal.clients.view')" :to="`/interno/clientes/${task.client.id}`" class="text-link hover:underline">{{ task.client.name }}</RouterLink>
              <span v-else>{{ task.client?.name ?? '–' }}</span>
            </dd>
          </div>
          <div class="grid gap-1 py-2 text-[14px] sm:grid-cols-[110px_1fr]">
            <dt class="text-muted-foreground">{{ t('task.network') }}</dt>
            <dd class="min-w-0 font-mono">{{ task.network?.network_code ?? '–' }}</dd>
          </div>
          <div class="grid gap-1 py-2 text-[14px] sm:grid-cols-[110px_1fr]">
            <dt class="text-muted-foreground">{{ t('task.site') }}</dt>
            <dd class="min-w-0">
              <template v-if="place">
                <span class="break-all font-mono">{{ place.domain }}</span>
                <span v-if="place.pending" class="block text-[12px] text-muted-foreground">{{ t('task.pendingSite') }}</span>
              </template>
              <span v-else>–</span>
            </dd>
          </div>
        </dl>
      </Card>
    </div>
  </PageBody>
</template>
