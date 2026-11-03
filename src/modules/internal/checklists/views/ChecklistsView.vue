<script setup lang="ts">
/** Checklists de domínio do mês: resumo, busca, filtro de feito e a lista do maior faturamento para o menor. */
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useDebounceFn } from '@vueuse/core'
import { ListChecks, Search } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t } from '@/lib/i18n'
import { latestCall } from '@/lib/latest'
import { td, th } from '@/lib/table'
import { STATES, dollars, monthName, previousMonth, progressPercent, stateLabel } from '@/modules/internal/checklists/rules'
import { checklistService } from '@/modules/internal/checklists/service'
import type { ChecklistMonth, ChecklistState, SiteChecklist } from '@/modules/internal/checklists/types'

const SEARCH_DELAY_MS = 300
const months = ref<string[]>([])
const month = ref('')
const state = ref<ChecklistState>('all')
const query = ref('')
const checklists = ref<SiteChecklist[] | null>(null)
const summary = ref<ChecklistMonth | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)

const monthOptions = computed(() => months.value.map((value) => ({ value, label: monthName(value) })))
const stateOptions = computed(() => STATES.map((value) => ({ value, label: stateLabel(value) })))
const revenueTitle = computed(() => (month.value ? t('check.col.revenue', { month: monthName(previousMonth(month.value), false) }) : ''))

/** Mostra o erro da API na tela. */
const fail = (error: unknown) => (loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown'))

/** Carrega os meses e escolhe o mais novo. */
async function loadMonths() {
  try {
    const found = await checklistService.months()
    months.value = found.items
    month.value = found.items[0] ?? ''
  } catch (error) {
    fail(error)
  }
}

const listCall = latestCall()
/** Carrega a página do mês com os filtros; uma resposta de filtros antigos é ignorada. */
async function load() {
  if (!month.value) return
  loadError.value = null
  try {
    const found = await listCall(() =>
      checklistService.list({ month: month.value, page: page.value, state: state.value, q: query.value.trim() || undefined }),
    )
    if (!found) return
    checklists.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    fail(error)
  }
}

/** Carrega o resumo do mês escolhido. */
async function loadSummary() {
  if (!month.value) return
  try {
    summary.value = await checklistService.summary(month.value)
  } catch (error) {
    fail(error)
  }
}

/** Volta para a primeira página e recarrega. */
function firstPage() {
  if (page.value === 1) void load()
  else page.value = 1
}

onMounted(loadMonths)
watch(month, () => {
  void loadSummary()
  firstPage()
})
watch(state, firstPage)
watch(page, load)
const searchChecklists = useDebounceFn(firstPage, SEARCH_DELAY_MS)
watch(query, () => void searchChecklists())

/** Recarrega a tela depois de um erro. */
function retry() {
  if (!months.value.length) void loadMonths()
  else {
    void loadSummary()
    void load()
  }
}
</script>

<template>
  <PageHeader :title="t('nav.checklists')" :sub="t('check.sub')">
    <template #actions>
      <Button variant="outline" @click="$router.push('/interno/checklists/itens')">{{ t('check.items') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <div class="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-3">
      <div class="bg-card p-4">
        <div class="text-[13px] font-medium text-muted-foreground">{{ t('check.summary.done') }}</div>
        <div class="mt-1 text-[24px] font-semibold tracking-tight tnum">{{ summary ? t('check.ofTotal', { done: summary.done, total: summary.sites }) : '–' }}</div>
      </div>
      <div class="bg-card p-4">
        <div class="text-[13px] font-medium text-muted-foreground">{{ t('check.summary.review') }}</div>
        <div class="mt-1 text-[24px] font-semibold tracking-tight tnum">{{ summary ? summary.sites - summary.done : '–' }}</div>
      </div>
      <div class="bg-card p-4">
        <div class="text-[13px] font-medium text-muted-foreground">{{ t('check.summary.checked') }}</div>
        <div class="mt-1 text-[15px] font-medium tnum">{{ summary?.checked_at ? formatDate(summary.checked_at) : t('check.notYet') }}</div>
        <div class="text-[13px] text-muted-foreground">{{ t('check.summary.schedule') }}</div>
      </div>
    </div>
    <div class="flex flex-wrap items-center gap-3">
      <div class="relative w-full sm:w-[260px]">
        <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input v-model="query" type="search" :aria-label="t('check.search')" class="h-9 pl-9" :placeholder="t('check.searchPlaceholder')" />
      </div>
      <NativeSelect v-model="month" :options="monthOptions" :aria-label="t('check.month')" class="w-full sm:w-[220px] [&_select]:h-9" />
      <NativeSelect v-model="state" :options="stateOptions" :aria-label="t('check.state')" class="w-full sm:w-[180px] [&_select]:h-9" />
    </div>
    <LoadError v-if="loadError" :message="loadError" @retry="retry" />
    <template v-else>
      <DataTable :min="820">
        <thead>
          <tr>
            <th :class="th">{{ t('sites.col.site') }}</th>
            <th :class="[th, 'text-right']">{{ revenueTitle }}</th>
            <th :class="th">{{ t('check.col.items') }}</th>
            <th :class="th">{{ t('check.state') }}</th>
            <th :class="th">{{ t('check.col.checked') }}</th>
          </tr>
        </thead>
        <tbody>
          <TableState :cols="5" :loading="!checklists" :empty="checklists?.length === 0" :icon="ListChecks" :title="t('check.empty')" />
          <tr v-for="checklist in checklists ?? []" :key="checklist.id" class="hover:bg-muted">
            <td :class="td">
              <RouterLink :to="`/interno/checklists/${checklist.id}`" class="block hover:underline focus-visible:underline focus-visible:outline-none">
                <span class="block break-all font-mono text-[13px] font-medium">{{ checklist.site.domain }}</span>
                <span class="text-[13px] text-muted-foreground">{{ checklist.client?.name ?? '–' }}</span>
              </RouterLink>
            </td>
            <td :class="[td, 'text-right tnum']">{{ dollars(checklist.revenue) }}</td>
            <td :class="td">
              <div class="flex items-center gap-3">
                <div class="h-1.5 w-24 overflow-hidden rounded-full bg-secondary" aria-hidden="true">
                  <div
                    :class="['h-full rounded-full', checklist.progress.complete ? 'bg-ok' : 'bg-foreground']"
                    :style="{ width: `${progressPercent(checklist.progress.done, checklist.progress.total)}%` }"
                  />
                </div>
                <span class="tnum text-[13px] text-muted-foreground">{{ checklist.progress.done }}/{{ checklist.progress.total }}</span>
              </div>
            </td>
            <td :class="td">
              <Status v-if="checklist.progress.complete" tone="ok">{{ t('check.done') }}</Status>
              <Status v-else tone="ochre">{{ t('check.toReview', { count: checklist.progress.total - checklist.progress.done }) }}</Status>
            </td>
            <td :class="[td, 'whitespace-nowrap tnum text-[13px] text-muted-foreground']">{{ checklist.checked_at ? formatDate(checklist.checked_at) : t('check.notYet') }}</td>
          </tr>
        </tbody>
      </DataTable>
      <Pagination v-model:page="page" :total="total" :pages="pages" />
    </template>
  </PageBody>
</template>
