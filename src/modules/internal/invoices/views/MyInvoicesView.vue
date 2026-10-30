<script setup lang="ts">
/** Minhas invoices: os meses prontos para virar invoice, a lista das minhas e os dados de recebimento. */
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { Plus } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, locale, t, type Key } from '@/lib/i18n'
import { formatMetric, toNumber } from '@/lib/metrics'
import { td, th } from '@/lib/table'
import { TAX_TYPES } from '@/modules/company/fiscal'
import PayeeDialog from '@/modules/internal/invoices/components/PayeeDialog.vue'
import { STATUS_TONE, monthKey } from '@/modules/internal/invoices/rules'
import { invoiceService } from '@/modules/internal/invoices/service'
import type { AvailableMonth, InvoiceSummary, PayeeDetails } from '@/modules/internal/invoices/types'

const router = useRouter()
const invoices = ref<InvoiceSummary[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const available = ref<AvailableMonth[]>([])
const payee = ref<PayeeDetails | null>(null)
const loadError = ref<string | null>(null)
const creating = ref(false)
const createMonth = ref('')
const createBusy = ref(false)
const editingPayee = ref(false)

/** Carrega a página das minhas invoices, os meses prontos e os dados de recebimento. */
async function load() {
  loadError.value = null
  try {
    const [found, months, details] = await Promise.all([invoiceService.mine(page.value), invoiceService.availableMonths(), invoiceService.payeeDetails()])
    invoices.value = found.items
    total.value = found.total
    pages.value = found.pages
    available.value = months.items
    payee.value = details
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)
watch(page, load)

/** Valor em dólar no idioma da pessoa. */
const money = (value: string) => formatMetric(toNumber(value), 'currency', locale.value)
/** Nome do mês da API (``AAAA-MM-DD``). */
const monthName = (iso: string) => new Intl.DateTimeFormat(locale.value, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`))
const newest = computed(() => available.value[0] ?? null)
const monthOptions = computed(() => available.value.map((month) => ({ value: monthKey(month.month), label: monthName(month.month) })))
const chosen = computed(() => available.value.find((month) => monthKey(month.month) === createMonth.value) ?? null)
const payeeRows = computed(() => {
  const details = payee.value
  if (!details) return []
  return [
    [t('inv.payee.fullName'), details.legal_name],
    [TAX_TYPES[details.tax_type] ?? details.tax_type, details.tax_id],
    [t('fiscal.billingPhone'), `${details.billing_phone_ddi} ${details.billing_phone}`],
    [t('fiscal.billingAddress'), details.billing_address],
    [t('fiscal.bank'), `${details.bank_name} · SWIFT ${details.swift_code}`],
    [t('fiscal.account'), `${details.account_number} · ${details.routing_number}`],
  ]
})
const breakdown = computed(() => {
  const month = chosen.value
  if (!month) return []
  return [
    [t('inv.create.commission'), money(month.commission)],
    [t('inv.create.deduction'), toNumber(month.deduction) ? `− ${money(month.deduction)}` : '–'],
    [t('inv.create.adjustments'), toNumber(month.adjustments) ? `− ${money(String(Math.abs(toNumber(month.adjustments) ?? 0)))}` : '–'],
  ]
})

/** Abre a criação já no mês mais novo pronto. */
function startCreate() {
  createMonth.value = newest.value ? monthKey(newest.value.month) : ''
  creating.value = true
}
/** Cria a invoice do mês escolhido e abre ela. */
async function create() {
  if (!chosen.value) return
  createBusy.value = true
  try {
    const invoice = await invoiceService.create(createMonth.value)
    toast.success(t('inv.create.done'), { description: t('inv.create.doneDesc', { month: monthName(invoice.month) }) })
    creating.value = false
    await router.push(`/interno/invoices/${invoice.id}`)
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    createBusy.value = false
  }
}
</script>

<template>
  <PageHeader :title="t('inv.mine.title')" :sub="t('inv.mine.sub')">
    <template #actions>
      <Button :disabled="!newest" @click="startCreate"><Plus class="size-4" />{{ t('inv.mine.new') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <p v-else-if="!invoices" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <template v-else>
      <div v-if="newest" class="flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-card px-4 py-3 text-[14px]">
        <span>{{ t('inv.mine.ready', { month: monthName(newest.month) }) }} <span class="font-medium tnum">{{ money(newest.total) }}</span></span>
        <Button size="sm" @click="startCreate">{{ t('inv.mine.createFor', { month: monthName(newest.month) }) }}</Button>
      </div>
      <DataTable :min="720">
        <thead>
          <tr>
            <th :class="th">{{ t('inv.col.number') }}</th>
            <th :class="th">{{ t('inv.col.month') }}</th>
            <th :class="[th, 'text-right']">{{ t('inv.col.total') }}</th>
            <th :class="th">{{ t('inv.col.status') }}</th>
            <th :class="th">{{ t('inv.col.created') }}</th>
            <th :class="th">{{ t('inv.col.paid') }}</th>
          </tr>
        </thead>
        <tbody>
          <TableState :cols="6" :empty="invoices.length === 0" :desc="t('inv.mine.empty')" />
          <tr v-for="invoice in invoices" :key="invoice.id" class="hover:bg-muted">
            <td :class="td">
              <RouterLink :to="`/interno/invoices/${invoice.id}`" class="font-mono text-[13px] font-medium hover:underline focus-visible:underline focus-visible:outline-none">{{ invoice.number }}</RouterLink>
            </td>
            <td :class="[td, 'whitespace-nowrap first-letter:uppercase']">{{ monthName(invoice.month) }}</td>
            <td :class="[td, 'text-right tnum font-medium']">{{ money(invoice.total) }}</td>
            <td :class="[td, 'whitespace-nowrap']">
              <Status :tone="STATUS_TONE[invoice.status]">{{ t(`inv.status.${invoice.status}` as Key) }}</Status>
              <span v-if="invoice.status === 'draft' && invoice.returned" class="ml-2 text-[12px] text-ochre">{{ t('inv.returnedBadge') }}</span>
            </td>
            <td :class="[td, 'tnum text-muted-foreground']">{{ formatDate(invoice.created_at, false) }}</td>
            <td :class="[td, 'tnum text-muted-foreground']">{{ invoice.paid_at ? formatDate(invoice.paid_at, false) : '–' }}</td>
          </tr>
        </tbody>
      </DataTable>
      <Pagination v-model:page="page" :total="total" :pages="pages" />
      <Card :title="t('inv.payee.title')" :desc="t('inv.payee.desc')" :footer-note="t('inv.payee.note')">
        <dl v-if="payee" class="grid gap-x-6 gap-y-3 text-[14px] sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="[name, value] in payeeRows" :key="name">
            <dt class="text-[13px] text-muted-foreground">{{ name }}</dt>
            <dd class="mt-0.5 font-medium">{{ value }}</dd>
          </div>
        </dl>
        <p v-else class="text-[14px] text-muted-foreground">{{ t('inv.payee.missing') }}</p>
        <template #footer>
          <Button size="sm" variant="outline" @click="editingPayee = true">{{ payee ? t('common.edit') : t('inv.payee.fill') }}</Button>
        </template>
      </Card>
    </template>
  </PageBody>
  <Dialog v-model:open="creating" :title="t('inv.create.title')" :desc="t('inv.create.desc')">
    <div class="grid gap-4">
      <Field id="inv-month" :label="t('inv.col.month')">
        <NativeSelect id="inv-month" v-model="createMonth" :options="monthOptions" />
      </Field>
      <dl v-if="chosen" class="grid divide-y rounded-md border text-[14px]">
        <div v-for="[name, value] in breakdown" :key="name" class="flex justify-between gap-3 px-3 py-2">
          <dt class="text-muted-foreground">{{ name }}</dt><dd class="tnum">{{ value }}</dd>
        </div>
        <div class="flex justify-between gap-3 px-3 py-2 font-medium">
          <dt>{{ t('inv.col.total') }}</dt><dd class="tnum">{{ money(chosen.total) }}</dd>
        </div>
      </dl>
      <p class="text-[13px] text-muted-foreground">{{ t('inv.create.note') }}</p>
    </div>
    <template #footer>
      <Button variant="outline" @click="creating = false">{{ t('common.cancel') }}</Button>
      <Button :disabled="!chosen" :loading="createBusy" @click="create">{{ t('inv.create.action') }}</Button>
    </template>
  </Dialog>
  <PayeeDialog v-model:open="editingPayee" :details="payee" @saved="(details) => (payee = details)" />
</template>
