<script setup lang="ts">
/** Invoices da equipe Groone, com filtros e visões salvas, para o financeiro devolver ou confirmar o
 * pagamento. */
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Avatar from '@/components/ui/Avatar.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, locale, t, type Key } from '@/lib/i18n'
import { formatMetric, toNumber } from '@/lib/metrics'
import { td, th } from '@/lib/table'
import { localToday } from '@/modules/internal/commissions/rules'
import { monthOptions } from '@/modules/internal/goals/rules'
import { STATUS_TONE } from '@/modules/internal/invoices/rules'
import { invoiceService } from '@/modules/internal/invoices/service'
import type { InvoiceStatus, InvoiceSummary } from '@/modules/internal/invoices/types'
import { staffService } from '@/modules/internal/staff/service'
import ColumnsMenu from '@/modules/views/components/ColumnsMenu.vue'
import SavedViewsBar from '@/modules/views/components/SavedViewsBar.vue'
import { cleanFilters, firstValue, monthPeriod, periodMonth, type Period } from '@/modules/views/rules'
import type { ViewDefinition } from '@/modules/views/types'

const ALL = 'all'
const COLUMNS = ['number', 'person', 'month', 'total', 'status', 'issued_at', 'paid_at']
const DEFAULT_VIEW: ViewDefinition = { columns: [...COLUMNS], filters: {}, sort: { key: 'created_at', direction: 'desc' } }
const today = localToday()
const invoices = ref<InvoiceSummary[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const status = ref<InvoiceStatus | typeof ALL>(ALL)
const month = ref(ALL)
const person = ref(ALL)
const columns = ref<string[]>([...COLUMNS])
const people = ref<{ value: string; label: string }[]>([])
const current = computed<ViewDefinition>(() => ({
  columns: columns.value,
  filters: cleanFilters({
    status: status.value === ALL ? undefined : status.value,
    period: month.value === ALL ? undefined : monthPeriod(month.value, today),
    user_id: person.value === ALL ? undefined : person.value,
  }),
  sort: DEFAULT_VIEW.sort,
}))
const loadError = ref<string | null>(null)
let ticket = 0

const statusOptions = computed(() => [
  { value: ALL, label: t('inv.team.allStatuses') },
  ...(['draft', 'issued', 'paid'] as const).map((value) => ({ value, label: t(`inv.status.${value}` as Key) })),
])
const months = computed(() => [{ value: ALL, label: t('inv.team.allMonths') }, ...monthOptions(today, locale.value)])
const personOptions = computed(() => [{ value: ALL, label: t('inv.team.allPeople') }, ...people.value])
/** Diz se a coluna aparece na tabela. */
const shown = (column: string) => columns.value.includes(column)
/** O nome da coluna no menu de colunas. */
const columnLabel = (column: string) => t(`inv.column.${column}` as Key)

/** Põe na tabela as colunas e os filtros da visão escolhida. */
function applyView(definition: ViewDefinition) {
  const known = definition.columns.filter((column) => COLUMNS.includes(column))
  columns.value = known.length ? known : [...COLUMNS]
  const chosenStatus = firstValue(definition.filters.status)
  status.value = (['draft', 'issued', 'paid'] as string[]).includes(chosenStatus) ? (chosenStatus as InvoiceStatus) : ALL
  const period = firstValue(definition.filters.period)
  month.value = period ? periodMonth(period as Period, today) : ALL
  person.value = firstValue(definition.filters.user_id) || ALL
}

/** Carrega a equipe Groone para o filtro de pessoa; sem acesso, o filtro fica só com todas. */
async function loadPeople() {
  try {
    people.value = (await staffService.options()).items.map((member) => ({ value: member.user.id, label: member.user.name }))
  } catch {
    people.value = []
  }
}

/** Carrega a página com os filtros; uma resposta de filtros antigos é ignorada. */
async function load() {
  const mine = ++ticket
  loadError.value = null
  try {
    const found = await invoiceService.team({
      page: page.value,
      status: status.value === ALL ? undefined : status.value,
      month: month.value === ALL ? undefined : month.value,
      user_id: person.value === ALL ? undefined : person.value,
    })
    if (mine !== ticket) return
    invoices.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    if (mine === ticket) loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(() => {
  void load()
  void loadPeople()
})
watch(page, load)
watch([status, month, person], () => {
  if (page.value === 1) void load()
  else page.value = 1
})

/** Valor em dólar no idioma da pessoa. */
const money = (value: string) => formatMetric(toNumber(value), 'currency', locale.value)
/** Nome do mês da API (``AAAA-MM-DD``). */
const monthName = (iso: string) => new Intl.DateTimeFormat(locale.value, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`))
</script>

<template>
  <PageHeader :title="t('inv.team.title')" :sub="t('inv.team.sub')">
    <template #actions>
      <Button variant="outline" @click="$router.push('/interno/servicos-de-invoice')">{{ t('inv.services.short') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <SavedViewsBar screen="invoices" :default-label="t('inv.team.allInvoices')" :current="current" :defaults="DEFAULT_VIEW" @apply="applyView">
      <NativeSelect v-model="status" :options="statusOptions" :aria-label="t('inv.col.status')" class="w-full sm:w-[200px] [&_select]:h-9" />
      <NativeSelect v-model="month" :options="months" :aria-label="t('inv.col.month')" class="w-full sm:w-[200px] [&_select]:h-9" />
      <NativeSelect v-model="person" :options="personOptions" :aria-label="t('inv.col.person')" class="w-full sm:w-[220px] [&_select]:h-9" />
      <ColumnsMenu v-model:shown="columns" :columns="COLUMNS" :label="columnLabel" />
    </SavedViewsBar>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <p v-else-if="!invoices" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <template v-else>
      <DataTable :min="860">
        <thead>
          <tr>
            <th v-if="shown('number')" :class="th">{{ t('inv.col.number') }}</th>
            <th v-if="shown('person')" :class="th">{{ t('inv.col.person') }}</th>
            <th v-if="shown('month')" :class="th">{{ t('inv.col.month') }}</th>
            <th v-if="shown('total')" :class="[th, 'text-right']">{{ t('inv.col.total') }}</th>
            <th v-if="shown('status')" :class="th">{{ t('inv.col.status') }}</th>
            <th v-if="shown('issued_at')" :class="th">{{ t('inv.col.issued') }}</th>
            <th v-if="shown('paid_at')" :class="th">{{ t('inv.col.paid') }}</th>
          </tr>
        </thead>
        <tbody>
          <TableState :cols="columns.length" :empty="invoices.length === 0" :desc="t('inv.team.empty')" />
          <tr v-for="invoice in invoices" :key="invoice.id" class="hover:bg-muted">
            <td v-if="shown('number')" :class="td">
              <RouterLink :to="`/interno/invoices/${invoice.id}`" class="font-mono text-[13px] font-medium hover:underline focus-visible:underline focus-visible:outline-none">{{ invoice.number }}</RouterLink>
            </td>
            <td v-if="shown('person')" :class="td">
              <span class="flex items-center gap-2.5 whitespace-nowrap"><Avatar :name="invoice.owner.name" :image-url="invoice.owner.image_url" />{{ invoice.owner.name }}</span>
            </td>
            <td v-if="shown('month')" :class="[td, 'whitespace-nowrap first-letter:uppercase']">{{ monthName(invoice.month) }}</td>
            <td v-if="shown('total')" :class="[td, 'text-right tnum font-medium']">{{ money(invoice.total) }}</td>
            <td v-if="shown('status')" :class="[td, 'whitespace-nowrap']">
              <Status :tone="STATUS_TONE[invoice.status]">{{ t(`inv.status.${invoice.status}` as Key) }}</Status>
              <span v-if="invoice.status === 'draft' && invoice.returned" class="ml-2 text-[12px] text-ochre">{{ t('inv.returnedBadge') }}</span>
            </td>
            <td v-if="shown('issued_at')" :class="[td, 'tnum text-muted-foreground']">{{ invoice.issued_at ? formatDate(invoice.issued_at, false) : '–' }}</td>
            <td v-if="shown('paid_at')" :class="[td, 'tnum text-muted-foreground']">{{ invoice.paid_at ? formatDate(invoice.paid_at, false) : '–' }}</td>
          </tr>
        </tbody>
      </DataTable>
      <Pagination v-model:page="page" :total="total" :pages="pages" />
    </template>
  </PageBody>
</template>
