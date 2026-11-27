<script setup lang="ts">
/** Relatórios > Comparativo com a rede: como o site do cliente está perto de sites parecidos da rede (mesmo país e categoria, 30 dias), sem mostrar quem são. */
import { computed, onMounted, ref, watch } from 'vue'
import { Info, Users } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import StatTile from '@/components/StatTile.vue'
import Select from '@/components/ui/Select.vue'
import { ApiError } from '@/lib/api'
import { errorText, locale, t, type Key } from '@/lib/i18n'
import { countryName } from '@/lib/metrics'
import PercentileRuler from '@/modules/benchmark/components/PercentileRuler.vue'
import { aboveMedian, bandOf, valueText, weakest } from '@/modules/benchmark/rules'
import { benchmarkService } from '@/modules/benchmark/service'
import type { SiteBenchmark } from '@/modules/benchmark/types'
import { siteService } from '@/modules/sites/service'
import type { SiteListItem } from '@/modules/sites/types'

const sites = ref<SiteListItem[]>([])
const siteId = ref('')
const country = ref('')
const benchmark = ref<SiteBenchmark | null>(null)
const loading = ref(true)
const loadError = ref<string | null>(null)

const siteOptions = computed(() => sites.value.map((site) => ({ value: site.id, label: site.domain })))
const countryOptions = computed(() => (benchmark.value?.countries ?? []).map((code) => ({ value: code, label: countryName(code, locale.value) ?? code })))
const rows = computed(() => benchmark.value?.rows ?? [])
const lowest = computed(() => weakest(rows.value))
const categoryText = computed(() => (benchmark.value?.category ? t(`sites.category.${benchmark.value.category}` as Key) : t('bm.noCategory')))

/** Carrega os sites que a pessoa enxerga e o comparativo do primeiro. */
async function loadSites() {
  loading.value = true
  loadError.value = null
  try {
    sites.value = (await siteService.options()).items
    siteId.value = sites.value[0]?.id ?? ''
    if (!siteId.value) loading.value = false
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
    loading.value = false
  }
}

/** Carrega o comparativo do site e do país escolhidos; sem país, a API escolhe o de mais receita. */
async function loadBenchmark(chosenCountry: string | null) {
  if (!siteId.value) return
  loading.value = true
  loadError.value = null
  try {
    benchmark.value = await benchmarkService.site(siteId.value, chosenCountry)
    country.value = benchmark.value.country ?? ''
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  } finally {
    loading.value = false
  }
}

watch(siteId, () => loadBenchmark(null))
watch(country, (code) => {
  if (code && code !== benchmark.value?.country) loadBenchmark(code)
})
onMounted(loadSites)
</script>

<template>
  <PageHeader :title="t('bm.title')" :sub="t('bm.sub')" />
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="siteId ? loadBenchmark(country || null) : loadSites()" />
    <section v-else-if="!loading && sites.length === 0" class="grid justify-items-center gap-2 rounded-lg border bg-card px-4 py-10 text-center">
      <Users class="h-5 w-5 text-muted-foreground" aria-hidden="true" />
      <p class="text-[14px] font-medium">{{ t('bm.noSites') }}</p>
    </section>
    <template v-else>
      <div class="flex flex-wrap gap-2">
        <Select v-model="siteId" :options="siteOptions" :aria-label="t('bm.site')" class="h-9 w-auto min-w-[200px]" />
        <Select v-if="countryOptions.length" v-model="country" :options="countryOptions" :aria-label="t('bm.country')" class="h-9 w-auto min-w-[160px]" />
        <span class="inline-flex h-9 items-center rounded-md border bg-background px-3 text-[13px]">
          <span class="mr-1 text-muted-foreground">{{ t('bm.category') }}</span>{{ categoryText }}
        </span>
      </div>
      <section v-if="benchmark && rows.length === 0" class="grid justify-items-center gap-2 rounded-lg border bg-card px-4 py-10 text-center">
        <Users class="h-5 w-5 text-muted-foreground" aria-hidden="true" />
        <p class="text-[14px] font-medium">{{ t('bm.noGroup') }}</p>
        <p class="max-w-[480px] text-[13px] text-muted-foreground">{{ benchmark.category ? t('bm.noGroupHint') : t('bm.noCategoryHint') }}</p>
      </section>
      <template v-else-if="benchmark">
        <div class="grid gap-4 sm:grid-cols-3">
          <StatTile framed report :label="t('bm.kpi.size')" :value="String(benchmark.size)" :hint="t('bm.kpi.sizeHint')" />
          <StatTile framed report :label="t('bm.kpi.above')" :value="t('bm.kpi.aboveValue', { n: aboveMedian(rows), total: rows.length })" tone="text-ok" />
          <StatTile
            framed
            report
            :label="t('bm.kpi.room')"
            :value="lowest ? t(`bm.metric.${lowest.metric}` as Key) : '–'"
            :hint="lowest?.percentile != null ? t('bm.kpi.roomHint', { n: lowest.percentile }) : undefined"
            tone="text-warn"
          />
        </div>
        <p v-if="!benchmark.eligible" class="flex items-start gap-2 rounded-lg border bg-card p-3 text-[13px] text-muted-foreground">
          <Info class="mt-0.5 h-4 w-4 shrink-0" />{{ t('bm.notEligible') }}
        </p>
        <section class="rounded-lg border bg-card p-4">
          <h2 class="text-[14px] font-semibold">{{ t('bm.cardTitle') }}</h2>
          <p class="mb-4 text-[13px] text-muted-foreground">{{ t('bm.cardHint') }}</p>
          <ul class="divide-y">
            <li v-for="row in rows" :key="row.metric" class="grid gap-3 py-4 first:pt-0 last:pb-0 md:grid-cols-[180px_1fr_260px] md:items-center md:gap-6">
              <div>
                <div class="text-[14px] font-medium">{{ t(`bm.metric.${row.metric}` as Key) }}</div>
                <div class="text-[20px] font-semibold tnum">{{ valueText(row.metric, row.value) }}</div>
              </div>
              <div class="grid gap-1.5">
                <PercentileRuler :percentile="row.percentile" :label="t('bm.position')" />
                <div class="flex justify-between text-[12px] text-muted-foreground tnum">
                  <span>{{ t('bm.median', { value: valueText(row.metric, row.median) }) }}</span>
                  <span>{{ t('bm.top', { value: valueText(row.metric, row.p75) }) }}</span>
                </div>
              </div>
              <p class="text-[13px] text-muted-foreground">
                {{ row.percentile == null ? t('bm.noValue') : t(`bm.tip.${row.metric}.${bandOf(row.percentile)}` as Key, { n: row.percentile }) }}
              </p>
            </li>
          </ul>
        </section>
      </template>
      <p class="flex items-start gap-2 text-[13px] text-muted-foreground"><Info class="mt-0.5 h-4 w-4 shrink-0" />{{ t('bm.note') }}</p>
    </template>
  </PageBody>
</template>
