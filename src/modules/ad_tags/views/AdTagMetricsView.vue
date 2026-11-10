<script setup lang="ts">
/** Métricas da ad tag: última vez vista, versão no site, páginas vistas por dia e o preenchimento de cada bloco. */
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { AlertTriangle, ArrowLeft, Pencil } from 'lucide-vue-next'
import LineChart from '@/components/charts/LineChart.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, locale, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { adTagsPath, healthSummary, share, unitName } from '@/modules/ad_tags/rules'
import { adTagService } from '@/modules/ad_tags/service'
import type { AdTag, AdTagHealth } from '@/modules/ad_tags/types'
import { dayText } from '@/modules/rewards/rules'

type Series = 'pages' | 'rendered' | 'empty'

const LOW_FILL = 50

const route = useRoute()
const router = useRouter()
const internal = route.meta.internal === true
const service = adTagService(internal)
const base = adTagsPath(internal)
const tagId = String(route.params.id)
const tag = ref<AdTag | null>(null)
const health = ref<AdTagHealth | null>(null)
const period = ref('30')
const series = ref<Series>('pages')
const loadError = ref<string | null>(null)

const integer = computed(() => new Intl.NumberFormat(locale.value))
const decimal = computed(() => new Intl.NumberFormat(locale.value, { maximumFractionDigits: 1 }))
const summary = computed(() => (health.value ? healthSummary(health.value) : null))
const filled = computed(() => {
  const totals = summary.value?.blocks.reduce((sum, block) => ({ rendered: sum.rendered + block.rendered, empty: sum.empty + block.empty }), { rendered: 0, empty: 0 })
  return totals ? share(totals.rendered, totals.rendered + totals.empty) : 0
})
const tiles = computed(() => {
  const current = health.value
  const live = tag.value?.live?.number ?? null
  if (!current || !summary.value) return []
  return [
    { label: t('at.kpi.seen'), value: current.last_seen_at ? formatDate(current.last_seen_at) : t('at.never'), note: tag.value?.active ? t('at.kpi.seenNote') : t('at.kpi.seenPaused') },
    {
      label: t('at.kpi.version'),
      value: current.seen_version ? t('at.versionN', { n: current.seen_version }) : '—',
      note: current.seen_version === live ? t('at.kpi.versionSame') : t('at.kpi.versionOther', { n: live ?? '—' }),
    },
    { label: t('at.kpi.pages'), value: integer.value.format(summary.value.pages), note: t('at.kpi.pagesNote') },
    { label: t('at.kpi.filled'), value: `${decimal.value.format(filled.value)}%`, note: t('at.kpi.filledNote') },
  ]
})
const chart = computed(() => {
  const days = summary.value?.days ?? []
  const key: Key = `at.series.${series.value}`
  return {
    labels: days.map((day) => dayText(day.day, locale.value)),
    series: [{ key: series.value, name: t(key), values: days.map((day) => day[series.value]) }],
    description: t('at.dailyDesc', { metric: t(key) }),
  }
})
const lowBlocks = computed(() => summary.value?.blocks.some((block) => block.rendered + block.empty > 0 && share(block.rendered, block.rendered + block.empty) < LOW_FILL) ?? false)

/** Carrega a tag uma vez e a saúde do período. */
async function load() {
  loadError.value = null
  try {
    if (!tag.value) tag.value = await service.show(tagId)
    health.value = await service.health(tagId, Number(period.value))
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Uma parte do todo em porcentagem, no formato do idioma. */
function rate(part: number, whole: number): string {
  return `${decimal.value.format(share(part, whole))}%`
}

onMounted(load)
watch(period, load)
</script>

<template>
  <PageHeader :title="tag?.name ?? t('at.metrics')" :sub="tag ? [tag.domain, tag.client?.name, t('at.metricsSub')].filter(Boolean).join(' · ') : undefined">
    <template #back>
      <RouterLink :to="base" class="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft class="size-4" />{{ t('at.back') }}</RouterLink>
    </template>
    <template #actions>
      <NativeSelect v-model="period" :aria-label="t('at.period')" class="w-[180px]" :options="['7', '30', '90'].map((days) => ({ value: days, label: t(`at.period.${days}` as Key) }))" />
      <Button variant="outline" @click="router.push(`${base}/${tagId}`)"><Pencil />{{ t('common.edit') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else-if="tag && health && summary">
      <div v-if="!tag.active" class="flex items-start gap-2 rounded-md border border-ochre/40 bg-ochre-soft px-3 py-2 text-[13px] text-ochre">
        <AlertTriangle class="mt-0.5 size-4 shrink-0" />{{ t('at.metricsPaused') }}
      </div>
      <Card v-if="!health.last_seen_at" :title="t('at.notSeenTitle')" :desc="t('at.notSeenDesc')" />
      <template v-else>
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="tile in tiles" :key="tile.label" class="rounded-lg border bg-card p-4">
            <div class="text-[13px] text-muted-foreground">{{ tile.label }}</div>
            <div class="mt-1 text-[26px] font-semibold tracking-[-0.03em] tnum">{{ tile.value }}</div>
            <div class="mt-1 text-[12px] leading-snug text-muted-foreground">{{ tile.note }}</div>
          </div>
        </div>
        <Card :title="t('at.daily')">
          <div class="mb-4 inline-flex flex-wrap rounded-md border bg-muted p-0.5" role="radiogroup" :aria-label="t('at.series')">
            <button
              v-for="option in ['pages', 'rendered', 'empty'] as const"
              :key="option"
              type="button"
              role="radio"
              :aria-checked="series === option"
              :class="['h-8 rounded px-3 text-[13px] font-medium', series === option ? 'bg-background shadow-sm' : 'text-muted-foreground hover:text-foreground']"
              @click="series = option"
            >
              {{ t(`at.series.${option}`) }}
            </button>
          </div>
          <LineChart :labels="chart.labels" :series="chart.series" :format="(value) => integer.format(value ?? 0)" :description="chart.description" area :height="220" />
        </Card>
        <DataTable :min="640">
          <thead>
            <tr>
              <th :class="th">{{ t('at.col.block') }}</th>
              <th :class="[th, 'text-right']">{{ t('at.col.blockPages') }}</th>
              <th :class="[th, 'text-right']">{{ t('at.col.rendered') }}</th>
              <th :class="[th, 'text-right']">{{ t('at.col.empty') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="block in summary.blocks" :key="block.placement">
              <td :class="td">{{ unitName(block.placement) }}</td>
              <td :class="[td, 'text-right tnum']">{{ integer.format(block.pages) }}</td>
              <td :class="[td, 'text-right tnum', block.rendered + block.empty > 0 && share(block.rendered, block.rendered + block.empty) < LOW_FILL && 'text-bad']">{{ rate(block.rendered, block.rendered + block.empty) }}</td>
              <td :class="[td, 'text-right tnum']">{{ rate(block.empty, block.rendered + block.empty) }}</td>
            </tr>
            <tr v-if="!summary.blocks.length">
              <td :class="[td, 'py-10 text-center text-muted-foreground']" :colspan="4">{{ t('at.noBlockData') }}</td>
            </tr>
          </tbody>
        </DataTable>
        <p v-if="lowBlocks" class="flex items-center gap-2 text-[13px] text-muted-foreground"><AlertTriangle class="size-4 text-warn" />{{ t('at.lowFill') }}</p>
      </template>
    </template>
  </PageBody>
</template>
