<script setup lang="ts">
/** Ferramentas > Nutrição: as réguas de e-mail com o desempenho de cada uma e a chave para ligar. */
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { MailCheck, Plus, Search } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import StatTile from '@/components/StatTile.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import Switch from '@/components/ui/Switch.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { cn } from '@/lib/utils'
import ConditionText from '@/modules/internal/nurture/components/ConditionText.vue'
import { MEASURE_LABEL, MEASURES, normalized, percent, rates } from '@/modules/internal/nurture/rules'
import { nurtureService } from '@/modules/internal/nurture/service'
import type { NurtureOverview, NurtureRuleSummary } from '@/modules/internal/nurture/types'
import FiltersMenu from '@/modules/views/components/FiltersMenu.vue'
import { useLocalBarFilters } from '@/modules/views/barFilters'
import { useSession } from '@/stores/session'

const FILTERS = ['state', 'measure', 'task']
const DEFAULT_FILTERS = ['state']
const FILTER_LABELS: Record<string, Key> = { state: 'nurture.col.state', measure: 'nurture.field.measure', task: 'nurture.col.task' }

const router = useRouter()
const session = useSession()
const overview = ref<NurtureOverview | null>(null)
const loadError = ref<string | null>(null)
const query = ref('')
const state = ref('all')
const measure = ref('all')
const task = ref('all')
const busy = ref<string | null>(null)
const canManage = computed(() => session.can('internal.nurture.manage'))
const barFilters = useLocalBarFilters('nurture-rules', FILTERS, DEFAULT_FILTERS, {
  state: () => (state.value = 'all'),
  measure: () => (measure.value = 'all'),
  task: () => (task.value = 'all'),
})
const stateOptions = computed(() => [
  { value: 'all', label: t('nurture.allStates') },
  { value: 'on', label: t('nurture.on') },
  { value: 'off', label: t('nurture.off') },
])
const measureOptions = computed(() => [{ value: 'all', label: t('nurture.allMeasures') }, ...MEASURES.map((value) => ({ value, label: t(MEASURE_LABEL[value]) }))])
const taskOptions = computed(() => [
  { value: 'all', label: t('nurture.allTasks') },
  { value: 'yes', label: t('nurture.withTask') },
  { value: 'no', label: t('nurture.withoutTask') },
])
const rows = computed(() => {
  const needle = normalized(query.value.trim())
  return (overview.value?.rules ?? []).filter(
    ({ rule }) =>
      (state.value === 'all' || (state.value === 'on') === rule.enabled) &&
      (measure.value === 'all' || rule.measure === measure.value) &&
      (task.value === 'all' || (task.value === 'yes') === rule.hubspot_task) &&
      (!needle || normalized(rule.name).includes(needle)),
  )
})
const totals = computed(() => (overview.value ? rates(overview.value.totals) : { opened: null, returned: null }))

/** O nome do filtro no menu de filtros. */
const filterLabel = (filter: string) => t(FILTER_LABELS[filter] as Key)

/** A porcentagem como texto, com traço sem base. */
const shown = (value: number | null) => (value === null ? '—' : `${value}%`)

/** Carrega as réguas com os números. */
async function load() {
  loadError.value = null
  try {
    overview.value = await nurtureService.overview()
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Liga ou desliga a régua; desligar tira quem está nela. */
async function toggle(summary: NurtureRuleSummary, enabled: boolean) {
  busy.value = summary.rule.id
  try {
    await nurtureService.setEnabled(summary.rule.id, enabled)
    toast.success(t(enabled ? 'nurture.turnedOn' : 'nurture.turnedOff', { name: summary.rule.name }), {
      description: t(enabled ? 'nurture.turnedOnHint' : 'nurture.turnedOffHint'),
    })
    await load()
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = null
  }
}

/** Abre o editor da régua, ou o de uma régua nova. */
function open(ruleId: string | null) {
  void router.push(ruleId ? `/interno/nutricao/${ruleId}` : '/interno/nutricao/nova')
}

onMounted(load)
</script>

<template>
  <PageHeader :title="t('nurture.title')" :sub="t('nurture.sub')">
    <template v-if="canManage" #actions>
      <Button @click="open(null)"><Plus class="size-4" aria-hidden="true" />{{ t('nurture.new') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatTile framed :label="t('nurture.kpi.inRule')" :value="overview ? overview.totals.active : '–'" :hint="overview ? t('nurture.kpi.inRuleHint', { n: overview.active_clients }) : undefined" />
        <StatTile framed :label="t('nurture.kpi.sent')" :value="overview ? overview.totals.sent_30d : '–'" :hint="t('nurture.kpi.sentHint')" />
        <StatTile framed :label="t('nurture.kpi.opened')" :value="overview ? shown(totals.opened) : '–'" :hint="t('nurture.kpi.openedHint')" />
        <StatTile framed :label="t('nurture.kpi.returned')" :value="overview ? shown(totals.returned) : '–'" :hint="t('nurture.kpi.returnedHint')" />
      </div>
      <section class="overflow-hidden rounded-lg border bg-card">
        <div class="p-6 pb-2">
          <h2 class="text-[20px] font-semibold tracking-tight">{{ t('nurture.rules') }}</h2>
          <p class="mt-2 text-[14px] text-muted-foreground">{{ t('nurture.rulesHint') }}</p>
        </div>
        <div class="flex flex-wrap items-center gap-3 p-4">
          <div class="relative w-full sm:w-[260px]">
            <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input v-model="query" type="search" :aria-label="t('nurture.search')" class="h-9 pl-9" :placeholder="t('nurture.search')" />
          </div>
          <Select v-if="barFilters.isShown('state')" v-model="state" :options="stateOptions" :aria-label="t('nurture.col.state')" class="h-9 w-full sm:w-[190px]" />
          <Select v-if="barFilters.isShown('measure')" v-model="measure" :options="measureOptions" :aria-label="t('nurture.field.measure')" class="h-9 w-full sm:w-[240px]" />
          <Select v-if="barFilters.isShown('task')" v-model="task" :options="taskOptions" :aria-label="t('nurture.col.task')" class="h-9 w-full sm:w-[180px]" />
          <FiltersMenu v-model:shown="barFilters.shown.value" :filters="FILTERS" :label="filterLabel" />
        </div>
        <DataTable :min="960">
          <thead>
            <tr>
              <th :class="[th, 'w-12']">#</th>
              <th :class="th">{{ t('nurture.col.rule') }}</th>
              <th :class="th">{{ t('nurture.col.emails') }}</th>
              <th :class="th">{{ t('nurture.col.inRule') }}</th>
              <th :class="th">{{ t('nurture.col.sent') }}</th>
              <th :class="th">{{ t('nurture.col.opened') }}</th>
              <th :class="th" :title="t('nurture.kpi.returnedHint')">{{ t('nurture.col.returned') }}</th>
              <th :class="th">{{ t('nurture.col.on') }}</th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="8" :loading="overview === null" :empty="rows.length === 0" :icon="MailCheck" :title="overview?.rules.length ? t('nurture.noneFiltered') : t('nurture.none')" />
            <tr v-for="summary in rows" :key="summary.rule.id" :class="cn('cursor-pointer hover:bg-muted', !summary.rule.enabled && 'text-muted-foreground')" tabindex="0" @click="open(summary.rule.id)" @keydown.enter="open(summary.rule.id)">
              <td :class="[td, 'tnum text-muted-foreground']">{{ summary.rule.priority }}</td>
              <td :class="td">
                <span class="font-medium text-foreground">{{ summary.rule.name }}</span>
                <div class="text-[13px] text-muted-foreground"><ConditionText :rule="summary.rule" /><template v-if="summary.rule.hubspot_task"> · {{ t('nurture.taskShort') }}</template></div>
              </td>
              <td :class="[td, 'tnum']">{{ summary.rule.emails.length }}</td>
              <td :class="[td, 'tnum']">{{ summary.stats.active }}</td>
              <td :class="[td, 'tnum']">{{ summary.stats.sent_30d }}</td>
              <td :class="[td, 'tnum']">{{ shown(percent(summary.stats.opened_30d, summary.stats.sent_30d)) }}</td>
              <td :class="[td, 'tnum']">{{ shown(percent(summary.stats.returned_30d, summary.stats.sent_30d)) }}</td>
              <td :class="td" @click.stop @keydown.enter.stop>
                <Switch
                  :model-value="summary.rule.enabled"
                  :label="t('nurture.turnOn', { name: summary.rule.name })"
                  :disabled="!canManage || busy === summary.rule.id"
                  @update:model-value="(enabled: boolean) => toggle(summary, enabled)"
                />
              </td>
            </tr>
          </tbody>
        </DataTable>
      </section>
    </template>
  </PageBody>
</template>
