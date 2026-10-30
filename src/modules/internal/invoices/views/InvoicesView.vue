<script setup lang="ts">
/** Invoices da equipe Groone, com filtros, para o financeiro devolver ou confirmar o pagamento. */
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

const ALL = 'all'
const invoices = ref<InvoiceSummary[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const status = ref<InvoiceStatus | typeof ALL>(ALL)
const month = ref(ALL)
const loadError = ref<string | null>(null)
let ticket = 0

const statusOptions = computed(() => [
  { value: ALL, label: t('inv.team.allStatuses') },
  ...(['draft', 'issued', 'paid'] as const).map((value) => ({ value, label: t(`inv.status.${value}` as Key) })),
])
const months = computed(() => [{ value: ALL, label: t('inv.team.allMonths') }, ...monthOptions(localToday(), locale.value)])

/** Carrega a página com os filtros; uma resposta de filtros antigos é ignorada. */
async function load() {
  const mine = ++ticket
  loadError.value = null
  try {
    const found = await invoiceService.team({
      page: page.value,
      status: status.value === ALL ? undefined : status.value,
      month: month.value === ALL ? undefined : month.value,
    })
    if (mine !== ticket) return
    invoices.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    if (mine === ticket) loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)
watch(page, load)
watch([status, month], () => {
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
    <div class="flex flex-wrap gap-2">
      <NativeSelect v-model="status" :options="statusOptions" :aria-label="t('inv.col.status')" class="h-9 w-[200px]" />
      <NativeSelect v-model="month" :options="months" :aria-label="t('inv.col.month')" class="h-9 w-[200px]" />
    </div>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <p v-else-if="!invoices" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <template v-else>
      <DataTable :min="860">
        <thead>
          <tr>
            <th :class="th">{{ t('inv.col.number') }}</th>
            <th :class="th">{{ t('inv.col.person') }}</th>
            <th :class="th">{{ t('inv.col.month') }}</th>
            <th :class="[th, 'text-right']">{{ t('inv.col.total') }}</th>
            <th :class="th">{{ t('inv.col.status') }}</th>
            <th :class="th">{{ t('inv.col.issued') }}</th>
            <th :class="th">{{ t('inv.col.paid') }}</th>
          </tr>
        </thead>
        <tbody>
          <TableState :cols="7" :empty="invoices.length === 0" :desc="t('inv.team.empty')" />
          <tr v-for="invoice in invoices" :key="invoice.id" class="hover:bg-muted">
            <td :class="td">
              <RouterLink :to="`/interno/invoices/${invoice.id}`" class="font-mono text-[13px] font-medium hover:underline focus-visible:underline focus-visible:outline-none">{{ invoice.number }}</RouterLink>
            </td>
            <td :class="td">
              <span class="flex items-center gap-2.5 whitespace-nowrap"><Avatar :name="invoice.owner.name" :image-url="invoice.owner.image_url" />{{ invoice.owner.name }}</span>
            </td>
            <td :class="[td, 'whitespace-nowrap first-letter:uppercase']">{{ monthName(invoice.month) }}</td>
            <td :class="[td, 'text-right tnum font-medium']">{{ money(invoice.total) }}</td>
            <td :class="[td, 'whitespace-nowrap']">
              <Status :tone="STATUS_TONE[invoice.status]">{{ t(`inv.status.${invoice.status}` as Key) }}</Status>
              <span v-if="invoice.status === 'draft' && invoice.returned" class="ml-2 text-[12px] text-ochre">{{ t('inv.returnedBadge') }}</span>
            </td>
            <td :class="[td, 'tnum text-muted-foreground']">{{ invoice.issued_at ? formatDate(invoice.issued_at, false) : '–' }}</td>
            <td :class="[td, 'tnum text-muted-foreground']">{{ invoice.paid_at ? formatDate(invoice.paid_at, false) : '–' }}</td>
          </tr>
        </tbody>
      </DataTable>
      <Pagination v-model:page="page" :total="total" :pages="pages" />
    </template>
  </PageBody>
</template>
