<script setup lang="ts">
/** Uma execução das ferramentas do GAM: os passos andam ao vivo, como no acompanhamento do Genius. */
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { toast } from 'vue-sonner'
import { ArrowLeft, Loader2 } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Card from '@/components/ui/Card.vue'
import Status from '@/components/ui/Status.vue'
import { ApiError } from '@/lib/api'
import { onEvent } from '@/lib/events'
import { errorText, formatDate, t } from '@/lib/i18n'
import { RUN_TONE, STEP_TONE, finishedSteps, formatName, runStateLabel, stepDetail, stepLabel, stepStateLabel, toolName, writes } from '@/modules/internal/gam_tools/rules'
import { gamToolService } from '@/modules/internal/gam_tools/service'
import type { GamToolRun } from '@/modules/internal/gam_tools/types'

const POLL_MS = 5000

const route = useRoute()
const run = ref<GamToolRun | null>(null)
const loadError = ref<string | null>(null)
let polling: ReturnType<typeof setInterval> | undefined

const runId = computed(() => String(route.params.id))
const done = computed(() => finishedSteps(run.value?.steps ?? []))
const percent = computed(() => (run.value?.steps.length ? Math.round((done.value / run.value.steps.length) * 100) : 0))
const sub = computed(() => {
  const found = run.value
  if (!found) return undefined
  const parts = [found.format ? formatName(found.format) : null, t('gamt.run.by', { name: found.requested_by?.name ?? '–', date: formatDate(found.created_at) })]
  return parts.filter(Boolean).join(' · ')
})

/** Carrega a execução. */
async function load() {
  loadError.value = null
  try {
    run.value = await gamToolService.run(runId.value)
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

onMounted(async () => {
  await load()
  polling = setInterval(() => run.value?.state === 'running' && void load(), POLL_MS)
})
onBeforeUnmount(() => clearInterval(polling))
onEvent('gam_tool_run.updated', (data) => {
  if (data.run_id === runId.value) void load()
})
watch(
  () => run.value?.state,
  (state, before) => {
    if (before !== 'running') return
    if (state === 'done') toast.success(t('gamt.run.finished'))
    if (state === 'failed') toast.error(t('gamt.run.failedToast'))
  },
)
</script>

<template>
  <PageHeader :title="run ? toolName(run.kind) : t('nav.gamTools')" :sub="sub">
    <template #back>
      <RouterLink
        :to="run ? `/interno/ferramentas-gam?network=${run.network_id}` : '/interno/ferramentas-gam'"
        class="mb-2 inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft class="size-3.5" />{{ t('nav.gamTools') }}
      </RouterLink>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <p v-else-if="!run" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <template v-else>
      <div class="flex flex-wrap items-center gap-4 rounded-lg border bg-card px-4 py-3">
        <Status :tone="RUN_TONE[run.state]">{{ runStateLabel(run.state) }}</Status>
        <div class="h-1.5 w-40 overflow-hidden rounded-full bg-secondary" role="progressbar" :aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100">
          <div :class="['h-full rounded-full transition-all', run.state === 'done' ? 'bg-ok' : 'bg-foreground']" :style="{ width: `${percent}%` }" />
        </div>
        <span class="tnum text-[13px] text-muted-foreground">{{ t('gamt.run.progress', { done, total: run.steps.length }) }}</span>
        <span v-if="run.domains.length" class="ml-auto break-all font-mono text-[13px] text-muted-foreground">{{ run.domains.join(', ') }}</span>
      </div>
      <p v-if="run.error_code" class="rounded-md border bg-card px-4 py-3 text-[14px]">{{ t('gamt.run.error', { message: errorText(run.error_code) }) }}</p>
      <Card :pad="false">
        <ol class="divide-y">
          <li v-for="(step, position) in run.steps" :key="`${step.key}:${step.site ?? ''}`" class="grid grid-cols-[28px_1fr] gap-3 px-5 py-3 sm:grid-cols-[28px_1fr_auto] sm:items-center">
            <span class="tnum pt-0.5 text-[13px] text-muted-foreground">{{ position + 1 }}</span>
            <div class="min-w-0">
              <div class="break-words text-[14px] font-medium">{{ stepLabel(step, run.format) }}</div>
              <div v-if="stepDetail(step)" class="break-words text-[13px] text-muted-foreground">{{ stepDetail(step) }}</div>
            </div>
            <div class="col-start-2 sm:col-start-auto">
              <span v-if="step.state === 'running'" class="inline-flex items-center gap-2 text-[13px]"><Loader2 class="size-3.5 animate-spin" aria-hidden="true" />{{ t('gamt.step.state.running') }}</span>
              <Status v-else :tone="STEP_TONE[step.state]">{{ stepStateLabel(step.state) }}</Status>
            </div>
          </li>
        </ol>
      </Card>
      <p v-if="run.state === 'done' && writes(run.kind)" class="text-[13px] text-muted-foreground">{{ t('gamt.run.audit') }}</p>
    </template>
  </PageBody>
</template>
