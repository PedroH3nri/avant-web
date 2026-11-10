<script setup lang="ts">
/** Regra de preço de um site: ligar, percentual de controle, blocos com o modelo, ganho contra o controle e a lista de regras. */
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDebounceFn } from '@vueuse/core'
import { AlertTriangle, ArrowLeft, History, LoaderCircle, Search } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import LineChart from '@/components/charts/LineChart.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, locale, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { dayText } from '@/modules/rewards/rules'
import { reportService } from '@/modules/reports/service'
import { gainQuery, gainSeries, MAX_CONTROL_PERCENT, moneyText, priceRulePermission, priceRulesPath, siteStatus, STATUS_TONE, type GainSeries } from '@/modules/price_rules/rules'
import { priceRuleService } from '@/modules/price_rules/service'
import type { PriceRule, PriceRuleModel, PriceRuleSite } from '@/modules/price_rules/types'
import { useSession } from '@/stores/session'

const NO_MODEL = 'none'

const route = useRoute()
const router = useRouter()
const session = useSession()
const internal = route.meta.internal === true
const service = priceRuleService(internal)
const base = priceRulesPath(internal)
const siteId = String(route.params.siteId)
const site = ref<PriceRuleSite | null>(null)
const active = ref(false)
const control = ref(10)
const models = ref<Record<string, string>>({})
const rules = ref<PriceRule[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const hash = ref('')
const country = ref('')
const gain = ref<GainSeries | null>(null)
const busy = ref(false)
const loadError = ref<string | null>(null)
const rulesError = ref<string | null>(null)

const canManage = computed(() => session.can(priceRulePermission(internal, 'manage')))
const blocked = computed(() => !site.value?.currency || !site.value.currency_supported)
const automaticCount = computed(() => Object.values(models.value).filter((model) => model === 'automatic').length)
const status = computed(() => (site.value ? siteStatus({ ...site.value, automatic_blocks: site.value.blocks.length }) : null))
const dirty = computed(() => {
  const current = site.value
  if (!current) return false
  const saved = Object.fromEntries(current.blocks.map((block) => [block.block, block.model]))
  const chosen = Object.fromEntries(Object.entries(models.value).filter(([, model]) => model !== NO_MODEL))
  return current.active !== active.value || current.control_percent !== control.value || JSON.stringify(saved) !== JSON.stringify(sortKeys(chosen))
})
const modelOptions = computed(() => [
  { value: 'automatic', label: t('pr.model.automatic') },
  { value: NO_MODEL, label: t('pr.model.none') },
])
const gainChart = computed(() => {
  const series = gain.value
  if (!series) return null
  return {
    labels: series.days.map((day) => dayText(day, locale.value)),
    series: [
      { key: 'rule', name: t('pr.gain.rule'), values: series.rule },
      { key: 'control', name: t('pr.gain.control'), values: series.control, tone: 'muted' as const, dashed: true },
    ],
  }
})

/** Um objeto com as chaves em ordem, para comparar os blocos. */
function sortKeys(record: Record<string, string>): Record<string, string> {
  return Object.fromEntries(Object.entries(record).sort(([first], [second]) => first.localeCompare(second)))
}

/** Copia a configuração salva para os campos. */
function fill(saved: PriceRuleSite) {
  site.value = saved
  active.value = saved.active
  control.value = saved.control_percent
  const marked = Object.fromEntries(saved.blocks.map((block) => [block.block, block.model as string]))
  models.value = Object.fromEntries(saved.available_blocks.map((block) => [block, marked[block] ?? NO_MODEL]))
}

/** Carrega a configuração e, em paralelo, as regras e o ganho. */
async function load() {
  loadError.value = null
  try {
    fill(await service.settings(siteId))
    void loadRules()
    void loadGain()
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Carrega a página das regras com os filtros. */
async function loadRules() {
  rulesError.value = null
  try {
    const found = await service.rules(siteId, { page: page.value, content_hash: hash.value.trim(), country: country.value.trim().toUpperCase() })
    rules.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    rulesError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** O ganho contra o controle pelo key-value groone_group; sem acesso aos relatórios, fica de fora. */
async function loadGain() {
  if (!site.value?.active) return
  gain.value = await reportService
    .query(gainQuery(siteId))
    .then(gainSeries)
    .catch(() => null)
}

/** Grava a configuração e os blocos que mudaram. */
async function save() {
  const current = site.value
  if (!current) return
  busy.value = true
  try {
    let saved = current
    if (current.active !== active.value || current.control_percent !== control.value) saved = await service.saveSettings(siteId, active.value, control.value)
    const chosen = Object.fromEntries(Object.entries(models.value).filter(([, model]) => model !== NO_MODEL)) as Record<string, PriceRuleModel>
    const before = Object.fromEntries(current.blocks.map((block) => [block.block, block.model]))
    if (JSON.stringify(sortKeys(chosen)) !== JSON.stringify(sortKeys(before))) saved = await service.saveBlocks(siteId, chosen)
    fill(saved)
    toast.success(t('pr.saved'))
    void loadRules()
    void loadGain()
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

/** Volta para a primeira página quando um filtro muda. */
function refilter() {
  if (page.value === 1) void loadRules()
  else page.value = 1
}

const filterLater = useDebounceFn(refilter, 300)

onMounted(load)
watch(page, loadRules)
watch([hash, country], filterLater)
</script>

<template>
  <PageHeader :title="site?.domain || t('nav.priceRules')" :sub="site?.currency ? t('pr.siteSubCurrency', { currency: site.currency }) : t('pr.siteSub')">
    <template #back>
      <RouterLink :to="base" class="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft class="size-4" />{{ t('nav.priceRules') }}</RouterLink>
    </template>
    <template v-if="status" #actions>
      <Status :tone="status.tone">{{ t(status.key, { currency: site?.currency ?? '' }) }}</Status>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else-if="site">
      <div v-if="!site.currency" class="flex items-start gap-2 rounded-md border px-3 py-2 text-[13px] text-muted-foreground"><LoaderCircle class="mt-0.5 size-4 shrink-0" />{{ t('pr.waitingCurrency') }}</div>
      <div v-else-if="!site.currency_supported" class="flex items-start gap-2 rounded-md border border-warn/40 bg-warn/10 px-3 py-2 text-[13px]">
        <AlertTriangle class="mt-0.5 size-4 shrink-0 text-warn" />{{ t('pr.unsupportedCurrency', { currency: site.currency }) }}
      </div>
      <div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <Card :title="t('pr.settings')" :desc="t('pr.settingsDesc')" :footer-note="dirty ? t('pr.tagDelay') : undefined">
          <div class="grid gap-5">
            <Checkbox id="pr-active" v-model="active" :label="t('pr.activeLabel')" :disabled="blocked || !canManage" />
            <Field id="pr-control" :label="t('pr.controlLabel', { percent: control })" :hint="t('pr.controlHint', { max: MAX_CONTROL_PERCENT })">
              <input id="pr-control" v-model.number="control" type="range" min="0" :max="MAX_CONTROL_PERCENT" step="1" :disabled="blocked || !canManage" class="w-full accent-foreground" />
            </Field>
          </div>
          <template v-if="canManage" #footer>
            <Button :disabled="!dirty || busy" @click="save">{{ t('common.save') }}</Button>
          </template>
        </Card>
        <Card :pad="false">
          <div class="p-6">
            <h2 class="text-[20px] font-semibold tracking-[-0.025em]">{{ t('pr.blocks') }}</h2>
            <p class="mt-2 max-w-[70ch] text-[14px] text-muted-foreground">{{ t('pr.blocksDesc', { count: automaticCount }) }}</p>
          </div>
          <div class="max-h-[360px] overflow-y-auto border-t">
            <table class="w-full text-left text-[14px] [&_tbody_tr:last-child_td]:border-b-0">
              <thead class="sticky top-0 bg-card">
                <tr>
                  <th :class="th">{{ t('pr.col.block') }}</th>
                  <th :class="th">{{ t('pr.col.model') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="block in site.available_blocks" :key="block">
                  <td :class="[td, 'py-2 font-mono text-[13px]']">{{ block }}</td>
                  <td :class="[td, 'py-2']">
                    <NativeSelect v-model="models[block]" :aria-label="t('pr.modelOf', { block })" class="w-full max-w-[200px]" :options="modelOptions" :disabled="blocked || !canManage" />
                  </td>
                </tr>
                <tr v-if="!site.available_blocks.length">
                  <td :class="[td, 'py-8 text-center text-muted-foreground']" colspan="2">{{ t('pr.noBlocks') }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
      <Card v-if="gain && gainChart" :title="t('pr.gain.title')" :desc="t('pr.gain.desc', { percent: site.control_percent })">
        <div class="mb-5 grid grid-cols-1 gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-3">
          <div class="bg-card p-4">
            <div class="text-[13px] text-muted-foreground">{{ t('pr.gain.rule') }}</div>
            <div class="mt-1 text-[24px] font-semibold tracking-[-0.03em] tnum max-sm:text-[20px]">{{ moneyText(gain.ruleTotal * 1_000_000, gain.currency, locale) }}</div>
          </div>
          <div class="bg-card p-4">
            <div class="text-[13px] text-muted-foreground">{{ t('pr.gain.control') }}</div>
            <div class="mt-1 text-[24px] font-semibold tracking-[-0.03em] tnum max-sm:text-[20px]">{{ moneyText(gain.controlTotal * 1_000_000, gain.currency, locale) }}</div>
          </div>
          <div class="bg-card p-4">
            <div class="text-[13px] text-muted-foreground">{{ t('pr.gain.gain') }}</div>
            <div :class="['mt-1 text-[24px] font-semibold tracking-[-0.03em] tnum max-sm:text-[20px]', gain.gain >= 0 ? 'text-ok' : 'text-bad']">
              <span aria-hidden="true">{{ gain.gain >= 0 ? '↑' : '↓' }}</span> {{ new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(Math.abs(gain.gain)) }}%
            </div>
          </div>
        </div>
        <LineChart :labels="gainChart.labels" :series="gainChart.series" :format="(value) => (value === null ? '—' : moneyText(value * 1_000_000, gain?.currency ?? null, locale))" :description="t('pr.gain.chartDesc')" :height="240" />
      </Card>
      <section v-if="site.active" class="grid gap-3">
        <div class="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 class="text-[20px] font-semibold tracking-[-0.025em]">{{ t('pr.rules') }}</h2>
            <p class="mt-1 text-[14px] text-muted-foreground">{{ t('pr.rulesDesc') }}</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <div class="relative w-full sm:w-[200px]">
              <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              <Input v-model="hash" :aria-label="t('pr.searchHash')" class="h-9 bg-card pl-9 font-mono" placeholder="content_hash" :maxlength="64" />
            </div>
            <Input v-model="country" :aria-label="t('pr.country')" class="h-9 w-[120px] bg-card uppercase" :placeholder="t('pr.country')" :maxlength="2" />
          </div>
        </div>
        <LoadError v-if="rulesError" :message="rulesError" @retry="loadRules" />
        <DataTable v-else :min="760">
          <thead>
            <tr>
              <th :class="th">content_hash</th>
              <th :class="th">{{ t('pr.col.block') }}</th>
              <th :class="th">{{ t('pr.col.country') }}</th>
              <th :class="[th, 'text-right']">{{ t('pr.col.floor') }}</th>
              <th :class="th">{{ t('pr.col.status') }}</th>
              <th :class="th">{{ t('pr.col.updated') }}</th>
              <th :class="th"><span class="sr-only">{{ t('pr.col.actions') }}</span></th>
            </tr>
          </thead>
          <tbody>
            <TableState v-if="!rules || rules.length === 0" :cols="7" :loading="!rules" :empty="rules?.length === 0" :title="t('pr.noRulesTitle')" :desc="hash || country ? t('pr.noRulesFilter') : t('pr.noRules')" />
            <tr v-for="rule in rules ?? []" :key="rule.id" class="hover:bg-muted">
              <td :class="[td, 'font-mono text-[13px]']">{{ rule.content_hash }}</td>
              <td :class="[td, 'font-mono text-[13px]']">{{ rule.block }}</td>
              <td :class="td">{{ rule.country_code }}</td>
              <td :class="[td, 'text-right tnum']">{{ moneyText(rule.floor_micros, rule.currency, locale) }}</td>
              <td :class="td">
                <Status :tone="STATUS_TONE[rule.status]">{{ t(`pr.ruleStatus.${rule.status}`) }}</Status>
              </td>
              <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground tnum']">{{ formatDate(rule.updated_at) }}</td>
              <td :class="[td, 'text-right']">
                <Button size="sm" variant="outline" @click="router.push(`${base}/${siteId}/regras/${rule.id}`)"><History />{{ t('pr.history') }}</Button>
              </td>
            </tr>
          </tbody>
        </DataTable>
        <Pagination v-if="!rulesError" v-model:page="page" :total="total" :pages="pages" />
      </section>
    </template>
  </PageBody>
</template>
