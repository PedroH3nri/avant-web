<script setup lang="ts">
/** Métricas de um reward: aberturas, cliques, anúncios concluídos, funil das etapas, respostas e contatos. */
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { AlertTriangle, ArrowLeft, Pencil } from 'lucide-vue-next'
import { colorVar, metricColor } from '@/lib/metric-colors'
import LineChart from '@/components/charts/LineChart.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { ApiError } from '@/lib/api'
import { errorText, locale, t, type Key } from '@/lib/i18n'
import RewardLeadsCard from '@/modules/rewards/components/RewardLeadsCard.vue'
import { answerCounts, dayText, funnelRows, lastDays, rewardPermission, rewardsPath, share, type FunnelRow } from '@/modules/rewards/rules'
import { rewardService } from '@/modules/rewards/service'
import type { Reward, RewardMetrics } from '@/modules/rewards/types'
import { useSession } from '@/stores/session'

type Series = 'opens' | 'clicks' | 'completed'

const route = useRoute()
const router = useRouter()
const session = useSession()
const internal = route.meta.internal === true
const service = rewardService(internal)
const base = rewardsPath(internal)
const rewardId = String(route.params.id)
const reward = ref<Reward | null>(null)
const metrics = ref<RewardMetrics | null>(null)
const period = ref('30')
const series = ref<Series>('opens')
const loadError = ref<string | null>(null)

const canManage = computed(() => session.can(rewardPermission(internal, 'manage')))
const canLeads = computed(() => session.can(rewardPermission(internal, 'leads')))
const integer = computed(() => new Intl.NumberFormat(locale.value))
const decimal = computed(() => new Intl.NumberFormat(locale.value, { maximumFractionDigits: 1 }))
const funnel = computed(() => (reward.value && metrics.value ? funnelRows(reward.value, metrics.value) : []))
const tiles = computed(() => {
  const total = metrics.value?.total
  if (!total || !reward.value) return []
  const closed = Math.max(total.opens - total.completed, 0)
  const list = [
    { label: t('rw.kpi.opens'), value: total.opens, note: t('rw.kpi.opensNote') },
    { label: t('rw.kpi.clicks'), value: total.clicks, note: t('rw.kpi.clicksNote', { rate: rate(total.clicks, total.opens) }) },
    { label: t('rw.kpi.completed'), value: total.completed, note: t('rw.kpi.completedNote', { rate: rate(total.completed, total.clicks) }) },
    { label: t('rw.kpi.closed'), value: closed, note: t('rw.kpi.closedNote', { rate: rate(closed, total.opens) }) },
  ]
  if (reward.value.lead) {
    const leads = metrics.value?.steps.lead ?? 0
    list.push({ label: t('rw.kpi.leads'), value: leads, note: t('rw.kpi.leadsNote', { rate: rate(leads, total.opens) }) })
  }
  return list
})
const quizTiles = computed(() => {
  const current = metrics.value
  const questions = reward.value?.questions.length ?? 0
  if (!current || questions === 0) return []
  const done = current.steps[`question_${questions}`] ?? 0
  const left = Math.max(current.total.opens - done, 0)
  return [
    { label: t('rw.quiz.done'), value: integer.value.format(done), note: t('rw.quiz.doneNote', { rate: rate(done, current.total.opens) }) },
    { label: t('rw.quiz.left'), value: integer.value.format(left), note: t('rw.quiz.leftNote', { rate: rate(left, current.total.opens) }) },
    { label: t('rw.quiz.ctr'), value: `${rate(current.total.clicks, done)}%`, note: t('rw.quiz.ctrNote') },
  ]
})
const chart = computed(() => {
  const days = metrics.value?.days ?? []
  const key: Key = `rw.kpi.${series.value}`
  return {
    labels: days.map((day) => dayText(day.day, locale.value)),
    series: [{ key: series.value, name: t(key), values: days.map((day) => day[series.value]), color: colorVar(metricColor(series.value)) }],
    description: t('rw.dailyDesc', { metric: t(key) }),
  }
})

/** Uma parte do todo em porcentagem, no formato do idioma. */
function rate(part: number, whole: number): string {
  return decimal.value.format(share(part, whole))
}

/** O nome da etapa do funil. */
function funnelLabel(row: FunnelRow): string {
  if (row.key.startsWith('question_')) return t('rw.funnel.question', { n: row.key.slice('question_'.length) })
  if (row.key === 'clicks') return t('rw.funnel.clicks', { button: reward.value?.button_text ?? '' })
  return t(`rw.funnel.${row.key}` as Key)
}

/** Carrega o reward (também o apagado) uma vez e as métricas do período. */
async function load() {
  loadError.value = null
  try {
    if (!reward.value) reward.value = await loadReward()
    metrics.value = await service.metrics(rewardId, lastDays(Number(period.value)))
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** O reward pelo id; um apagado só aparece na lista dos apagados, então procura lá. */
async function loadReward(): Promise<Reward> {
  try {
    return await service.show(rewardId)
  } catch (error) {
    if (!(error instanceof ApiError) || error.status !== 404) throw error
    for (let page = 1; ; page += 1) {
      const found = await service.list({ deleted: true, page })
      const match = found.items.find((item) => item.id === rewardId)
      if (match) return match
      if (page >= found.pages) throw error
    }
  }
}

onMounted(load)
watch(period, load)
</script>

<template>
  <PageHeader :title="reward?.name ?? t('rw.metrics')" :sub="reward ? [reward.client?.name, `${reward.domain}/${reward.page_path}`].filter(Boolean).join(' · ') : undefined">
    <template #back>
      <RouterLink :to="base" class="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground">
        <ArrowLeft class="size-4" />{{ t('rw.back') }}
      </RouterLink>
    </template>
    <template #actions>
      <NativeSelect
        v-model="period"
        :aria-label="t('rw.period')"
        class="w-[180px]"
        :options="['7', '30', '90'].map((days) => ({ value: days, label: t(`rw.period.${days}` as Key) }))"
      />
      <Button v-if="canManage && reward && !reward.deleted_at" variant="outline" @click="router.push(`${base}/${rewardId}`)"><Pencil />{{ t('common.edit') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else-if="reward && metrics">
      <div v-if="reward.deleted_at || !reward.active" class="flex items-start gap-2 rounded-md border border-ochre/40 bg-ochre-soft px-3 py-2 text-[13px] text-ochre">
        <AlertTriangle class="mt-0.5 size-4 shrink-0" />{{ reward.deleted_at ? t('rw.deletedNote') : t('rw.pausedNote') }}
      </div>
      <div :class="['grid gap-3 sm:grid-cols-2', tiles.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4']">
        <div v-for="tile in tiles" :key="tile.label" class="rounded-lg border bg-card p-4">
          <div class="text-[13px] text-muted-foreground">{{ tile.label }}</div>
          <div class="mt-1 text-[26px] font-semibold tracking-[-0.03em] tnum">{{ integer.format(tile.value) }}</div>
          <div class="mt-1 text-[12px] leading-snug text-muted-foreground">{{ tile.note }}</div>
        </div>
      </div>
      <section v-if="quizTiles.length" class="grid gap-3">
        <h2 class="text-[13px] font-medium uppercase tracking-wide text-muted-foreground">{{ t('rw.quiz') }}</h2>
        <div class="grid gap-3 sm:grid-cols-3">
          <div v-for="tile in quizTiles" :key="tile.label" class="rounded-lg border bg-card p-4">
            <div class="text-[13px] text-muted-foreground">{{ tile.label }}</div>
            <div class="mt-1 text-[26px] font-semibold tracking-[-0.03em] tnum">{{ tile.value }}</div>
            <div class="mt-1 text-[12px] leading-snug text-muted-foreground">{{ tile.note }}</div>
          </div>
        </div>
      </section>
      <Card :title="t('rw.daily')">
        <div class="mb-4 inline-flex flex-wrap rounded-md border bg-muted p-0.5" role="radiogroup" :aria-label="t('rw.series')">
          <button
            v-for="option in ['opens', 'clicks', 'completed'] as const"
            :key="option"
            type="button"
            role="radio"
            :aria-checked="series === option"
            :class="['h-8 rounded px-3 text-[13px] font-medium', series === option ? 'bg-background shadow-sm' : 'text-muted-foreground hover:text-foreground']"
            @click="series = option"
          >
            {{ t(`rw.kpi.${option}`) }}
          </button>
        </div>
        <LineChart :labels="chart.labels" :series="chart.series" :format="(value) => integer.format(value ?? 0)" :description="chart.description" area :height="220" />
      </Card>
      <Card :title="t('rw.funnel')" :desc="t('rw.funnelDesc')">
        <ul class="grid gap-3">
          <li v-for="(row, index) in funnel" :key="row.key" class="grid gap-1.5">
            <div class="flex items-baseline justify-between gap-3 text-[14px]">
              <span class="min-w-0 truncate">{{ funnelLabel(row) }}</span>
              <span class="shrink-0 tnum">
                <span class="font-medium">{{ integer.format(row.value) }}</span>
                <span class="ml-2 text-[13px] text-muted-foreground">
                  {{ rate(row.value, funnel[0]?.value ?? 0) }}%<template v-if="index > 0"> · {{ t('rw.funnel.lost', { n: integer.format(Math.max((funnel[index - 1]?.value ?? 0) - row.value, 0)) }) }}</template>
                </span>
              </span>
            </div>
            <span class="h-2 rounded-full bg-muted"><span class="block h-2 rounded-full bg-foreground" :style="{ width: `${Math.min(share(row.value, funnel[0]?.value ?? 0), 100)}%` }" /></span>
          </li>
        </ul>
      </Card>
      <Card v-if="reward.questions.length" :title="t('rw.answers')" :desc="t('rw.answersDesc')">
        <div class="grid gap-6 md:grid-cols-2">
          <div v-for="(question, index) in reward.questions" :key="question.id" class="grid content-start gap-3">
            <div>
              <div class="text-[13px] text-muted-foreground">
                {{ t('rw.answersCount', { n: index + 1, count: integer.format(answerCounts(metrics, question.id).reduce((sum, count) => sum + count, 0)) }) }}
              </div>
              <div class="font-medium">{{ question.title }}</div>
            </div>
            <table class="w-full text-[13px]">
              <thead>
                <tr class="text-left text-[12px] text-muted-foreground">
                  <th class="pb-2 font-medium">{{ t('rw.col.answer') }}</th>
                  <th class="pb-2 text-right font-medium">{{ t('rw.col.count') }}</th>
                  <th class="w-[45%] pb-2 pl-4 font-medium">{{ t('rw.col.share') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(count, answerIndex) in answerCounts(metrics, question.id)" :key="answerIndex" class="border-t">
                  <td class="py-2 pr-3">{{ question.answers[answerIndex] }}</td>
                  <td class="py-2 text-right tnum">{{ integer.format(count) }}</td>
                  <td class="py-2 pl-4">
                    <div class="flex items-center gap-2">
                      <span class="h-2 flex-1 rounded-full bg-muted">
                        <span class="block h-2 rounded-full bg-foreground" :style="{ width: `${share(count, answerCounts(metrics, question.id).reduce((sum, value) => sum + value, 0))}%` }" />
                      </span>
                      <span class="w-[52px] text-right tnum">{{ rate(count, answerCounts(metrics, question.id).reduce((sum, value) => sum + value, 0)) }}%</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Card>
      <RewardLeadsCard v-if="reward.lead && canLeads" :reward="reward" :service="service" :can-delete="canLeads" />
    </template>
    <div v-else class="h-[400px] animate-pulse rounded-lg bg-muted" aria-hidden="true" />
  </PageBody>
</template>
