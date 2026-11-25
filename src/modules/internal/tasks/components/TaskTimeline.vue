<script setup lang="ts">
/**
 * Comentários e histórico de uma tarefa numa linha do tempo vertical: comentário com avatar e
 * balão, mudança com ícone e selos, filtro por tipo e a caixa de comentário no fim.
 */
import { computed, ref } from 'vue'
import { ArrowRight, ArrowRightLeft, Flag, Pencil, Plus, UserRound } from 'lucide-vue-next'
import Avatar from '@/components/ui/Avatar.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Segmented from '@/components/ui/Segmented.vue'
import Status from '@/components/ui/Status.vue'
import { formatAgo, formatDate, t } from '@/lib/i18n'
import { COMMENT_MAX, COMMENT_MIN, STATUS_TONE, eventText, personName, priorityLabel, statusLabel } from '@/modules/internal/tasks/rules'
import type { TaskEvent, TaskEventKind, TaskStatus } from '@/modules/internal/tasks/types'

const props = defineProps<{ events: TaskEvent[]; me: { name: string; imageUrl: string | null }; recipients: string[]; sending: boolean }>()
const emit = defineEmits<{ send: [message: string] }>()
const comment = defineModel<string>('comment', { required: true })
const filter = ref('all')

const ICONS: Record<TaskEventKind, typeof Plus> = {
  created: Plus,
  comment: Plus,
  status_changed: ArrowRightLeft,
  priority_changed: Flag,
  assignee_changed: UserRound,
  edited: Pencil,
}

const comments = computed(() => props.events.filter((event) => event.kind === 'comment'))
const changes = computed(() => props.events.filter((event) => event.kind !== 'comment'))
const shown = computed(() => (filter.value === 'comments' ? comments.value : filter.value === 'history' ? changes.value : props.events))
const filterOptions = computed(() => [
  { value: 'all', label: t('task.filter.all'), note: String(props.events.length) },
  { value: 'comments', label: t('task.filter.comments'), note: String(comments.value.length) },
  { value: 'history', label: t('task.filter.history'), note: String(changes.value.length) },
])
const ready = computed(() => comment.value.trim().length >= COMMENT_MIN)
const mailHint = computed(() => {
  const [first, second] = props.recipients
  if (second) return t('task.mailHintTwo', { first: first ?? '', second })
  return first ? t('task.mailHintOne', { name: first }) : t('task.mailHintNone')
})

/** Envia o comentário quando ele tem o tamanho mínimo. */
function submit() {
  if (ready.value && !props.sending) emit('send', comment.value.trim())
}

/** A situação antiga e a nova da mudança, para mostrar como selos. */
function statusPair(event: TaskEvent): { from: TaskStatus; to: TaskStatus } | null {
  if (event.kind !== 'status_changed' || !event.old_value || !event.new_value) return null
  return { from: event.old_value as TaskStatus, to: event.new_value as TaskStatus }
}
</script>

<template>
  <Card>
    <div class="mb-5 flex flex-wrap items-center justify-between gap-3">
      <h2 class="text-[20px] font-semibold tracking-[-0.025em]">{{ t('task.timeline') }}</h2>
      <Segmented v-model="filter" :options="filterOptions" :label="t('task.filter.label')" />
    </div>
    <p v-if="!shown.length" class="py-6 text-center text-[14px] text-muted-foreground">
      {{ filter === 'comments' ? t('task.noComments') : t('task.noHistory') }}
    </p>
    <ol v-else class="relative grid gap-5 before:absolute before:bottom-2 before:left-[15px] before:top-2 before:w-px before:bg-border">
      <li v-for="event in shown" :key="event.id" class="relative grid grid-cols-[32px_1fr] gap-3">
        <template v-if="event.kind === 'comment'">
          <Avatar :name="personName(event.author)" :image-url="event.author?.image_url ?? null" class="ring-4 ring-card" />
          <div class="min-w-0 rounded-lg border bg-background">
            <div class="flex flex-wrap items-baseline gap-x-2 border-b px-3 py-2 text-[13px]">
              <span class="font-medium">{{ personName(event.author) }}</span>
              <span class="text-muted-foreground">{{ t('task.commentedVerb') }}</span>
              <time :datetime="event.created_at" :title="formatDate(event.created_at)" class="ml-auto text-muted-foreground tnum">{{ formatAgo(event.created_at) }}</time>
            </div>
            <p class="whitespace-pre-line break-words px-3 py-2.5 text-[14px] leading-relaxed">{{ event.message }}</p>
          </div>
        </template>
        <template v-else>
          <span class="flex size-8 items-center justify-center rounded-full border bg-card text-muted-foreground ring-4 ring-card" aria-hidden="true">
            <component :is="ICONS[event.kind]" class="size-3.5" />
          </span>
          <div class="flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-1 py-1.5 text-[13px] text-muted-foreground">
            <span class="font-medium text-foreground">{{ personName(event.author) }}</span>
            <template v-if="statusPair(event)">
              <span>{{ t('task.event.statusShort') }}</span>
              <Status :tone="STATUS_TONE[statusPair(event)!.from]">{{ statusLabel(statusPair(event)!.from) }}</Status>
              <ArrowRight class="size-3" aria-hidden="true" />
              <Status :tone="STATUS_TONE[statusPair(event)!.to]">{{ statusLabel(statusPair(event)!.to) }}</Status>
            </template>
            <template v-else-if="event.kind === 'priority_changed'">
              <span>{{ t('task.event.priorityShort') }}</span>
              <span class="font-medium text-foreground">{{ priorityLabel(event.new_value ?? '') }}</span>
            </template>
            <span v-else>{{ eventText(event) }}</span>
            <time :datetime="event.created_at" :title="formatDate(event.created_at)" class="tnum">· {{ formatAgo(event.created_at) }}</time>
          </div>
        </template>
      </li>
    </ol>

    <form class="mt-6 grid grid-cols-[32px_1fr] gap-3 border-t pt-5" @submit.prevent="submit">
      <Avatar :name="me.name" :image-url="me.imageUrl" />
      <div class="grid min-w-0 gap-2">
        <textarea
          v-model="comment"
          rows="3"
          :maxlength="COMMENT_MAX"
          :aria-label="t('task.newComment')"
          :placeholder="t('task.commentPlaceholder')"
          class="w-full resize-y rounded-md border border-input bg-[hsl(var(--field))] px-3 py-2 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          @keydown.enter.ctrl.prevent="submit"
          @keydown.enter.meta.prevent="submit"
        />
        <div class="flex flex-wrap items-center justify-between gap-2">
          <p class="text-[12px] text-muted-foreground">{{ mailHint }} · {{ t('task.sendShortcut') }}</p>
          <Button type="submit" size="sm" :loading="sending" :disabled="!ready">{{ t('task.comment') }}</Button>
        </div>
      </div>
    </form>
  </Card>
</template>
