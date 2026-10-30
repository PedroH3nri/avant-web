<script setup lang="ts">
/** Uma invoice: o documento como sai no PDF e as ações da situação (dona no rascunho, financeiro na emitida). */
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { AlertTriangle, ArrowLeft, Download, Trash2 } from 'lucide-vue-next'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, locale, t, type Key } from '@/lib/i18n'
import { formatMetric, toNumber } from '@/lib/metrics'
import InvoiceDocument from '@/modules/internal/invoices/components/InvoiceDocument.vue'
import ServiceLineDialog from '@/modules/internal/invoices/components/ServiceLineDialog.vue'
import { invoiceActions } from '@/modules/internal/invoices/rules'
import { invoicePdfUrl, invoiceService } from '@/modules/internal/invoices/service'
import type { Invoice, InvoiceItem, InvoiceServiceOption } from '@/modules/internal/invoices/types'
import { useSession } from '@/stores/session'

type Confirm = 'issue' | 'delete' | 'pay' | 'return'

const route = useRoute()
const router = useRouter()
const session = useSession()
const invoice = ref<Invoice | null>(null)
const loadError = ref<string | null>(null)
const services = ref<InvoiceServiceOption[]>([])
const lineOpen = ref(false)
const lineItem = ref<InvoiceItem | null>(null)
const removing = ref<InvoiceItem | null>(null)
const removingOpen = computed({ get: () => removing.value !== null, set: (value) => !value && (removing.value = null) })
const confirm = ref<Confirm | null>(null)
const confirmOpen = computed({ get: () => confirm.value !== null, set: (value) => !value && (confirm.value = null) })
const reason = ref('')
const busy = ref(false)

const invoiceId = computed(() => String(route.params.id))
const actions = computed(() => (invoice.value ? invoiceActions(invoice.value, session.me?.user.id ?? '', session.can('internal.invoices.manage')) : { edit: false, manage: false }))
const fromMine = computed(() => invoice.value?.owner.id === session.me?.user.id)
const backTo = computed(() => (fromMine.value ? '/interno/minhas-invoices' : '/interno/invoices'))
const first = computed(() => invoice.value?.owner.name.split(' ')[0] ?? '')
/** Nome do mês da API (``AAAA-MM-DD``). */
const monthName = (iso: string) => new Intl.DateTimeFormat(locale.value, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`))
/** Valor em dólar no idioma da pessoa. */
const money = (value: string) => formatMetric(toNumber(value), 'currency', locale.value)

/** Carrega a invoice e, para a dona no rascunho, os serviços do catálogo. */
async function load() {
  loadError.value = null
  try {
    invoice.value = await invoiceService.get(invoiceId.value)
    if (actions.value.edit) services.value = (await invoiceService.serviceOptions()).items
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)
watch(invoiceId, load)

/** Baixa o PDF da invoice pelo navegador, com o cookie da sessão. */
function downloadPdf() {
  if (invoice.value) window.location.assign(invoicePdfUrl(invoice.value.id))
}
/** Abre o modal da linha de serviço, nova ou para editar. */
function openLine(item: InvoiceItem | null) {
  lineItem.value = item
  lineOpen.value = true
}
/** Tira a linha de serviço do rascunho. */
async function removeLine() {
  const item = removing.value
  const current = invoice.value
  if (!item || !current) return
  busy.value = true
  try {
    invoice.value = await invoiceService.removeItem(current.id, item.id)
    removing.value = null
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
/** Faz a ação confirmada: emitir, excluir, devolver ou confirmar o pagamento. */
async function act() {
  const current = invoice.value
  const chosen = confirm.value
  if (!current || !chosen) return
  busy.value = true
  try {
    if (chosen === 'delete') {
      await invoiceService.remove(current.id)
      toast.success(t('inv.done.deleted'), { description: t('inv.done.deletedDesc') })
      await router.push('/interno/minhas-invoices')
      return
    }
    if (chosen === 'issue') {
      invoice.value = await invoiceService.issue(current.id)
      toast.success(t('inv.done.issued'), { description: t('inv.done.issuedDesc') })
    }
    if (chosen === 'pay') {
      invoice.value = await invoiceService.pay(current.id)
      toast.success(t('inv.done.paid'), { description: t('inv.done.paidDesc', { name: first.value }) })
    }
    if (chosen === 'return') {
      invoice.value = await invoiceService.returnToDraft(current.id, reason.value.trim())
      toast.success(t('inv.done.returned'), { description: t('inv.done.returnedDesc', { name: first.value }) })
    }
    confirm.value = null
    reason.value = ''
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
const confirmText = computed(() => {
  const chosen = confirm.value
  if (!chosen) return { title: '', desc: '', action: '' }
  return { title: t(`inv.confirm.${chosen}.title` as Key), desc: t(`inv.confirm.${chosen}.desc` as Key, { name: first.value }), action: t(`inv.confirm.${chosen}.action` as Key) }
})
</script>

<template>
  <PageHeader :title="invoice?.number ?? t('inv.title')" :sub="invoice ? `${invoice.owner.name} · ${monthName(invoice.month)}` : undefined">
    <template #back>
      <RouterLink :to="backTo" class="mb-2 inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground">
        <ArrowLeft class="size-3.5" />{{ fromMine ? t('inv.mine.title') : t('inv.team.title') }}
      </RouterLink>
    </template>
    <template v-if="invoice" #actions>
      <Button variant="outline" @click="downloadPdf"><Download class="size-4" />{{ t('inv.pdf') }}</Button>
      <template v-if="actions.edit">
        <Button variant="outline" @click="confirm = 'delete'"><Trash2 class="size-4" />{{ t('inv.confirm.delete.action') }}</Button>
        <Button @click="confirm = 'issue'">{{ t('inv.issue') }}</Button>
      </template>
      <template v-if="actions.manage">
        <Button variant="outline" @click="confirm = 'return'">{{ t('inv.confirm.return.title') }}</Button>
        <Button @click="confirm = 'pay'">{{ t('inv.confirm.pay.action') }}</Button>
      </template>
    </template>
  </PageHeader>
  <PageBody class="lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <p v-else-if="!invoice" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <template v-else>
      <div class="grid min-w-0 gap-4">
        <div v-if="invoice.returned" class="flex gap-3 rounded-lg border bg-card p-4 text-[14px]">
          <AlertTriangle class="mt-0.5 size-4 shrink-0 text-ochre" aria-hidden="true" />
          <div>
            <div class="font-medium">{{ t('inv.returnedBy', { name: invoice.returned.by ?? '–', date: formatDate(invoice.returned.at, false) }) }}</div>
            <div class="mt-1 text-muted-foreground">{{ invoice.returned.reason }}</div>
          </div>
        </div>
        <InvoiceDocument :invoice="invoice" :editable="actions.edit" @add="openLine(null)" @edit="openLine" @remove="(item) => (removing = item)" />
      </div>
      <Card :title="t('inv.how.title')" class="lg:sticky lg:top-20">
        <ol class="grid gap-3 text-[13px] text-muted-foreground">
          <li><span class="font-medium text-foreground">{{ t('inv.status.draft') }}.</span> {{ t('inv.how.draft') }}</li>
          <li><span class="font-medium text-foreground">{{ t('inv.status.issued') }}.</span> {{ t('inv.how.issued') }}</li>
          <li><span class="font-medium text-foreground">{{ t('inv.status.paid') }}.</span> {{ t('inv.how.paid') }}</li>
        </ol>
      </Card>
    </template>
  </PageBody>
  <ServiceLineDialog v-if="invoice" v-model:open="lineOpen" :invoice-id="invoice.id" :item="lineItem" :services="services" @saved="(saved) => (invoice = saved)" />
  <ConfirmDialog v-model:open="removingOpen" :title="t('inv.line.removeTitle', { name: removing?.title ?? '' })" :desc="t('inv.line.removeDesc')" :action="t('common.remove')" :busy="busy" @confirm="removeLine" />
  <Dialog v-model:open="confirmOpen" :title="confirmText.title" :desc="confirmText.desc">
    <Field v-if="confirm === 'return'" id="ret-reason" :label="t('inv.confirm.return.reason')">
      <textarea
        id="ret-reason"
        v-model="reason"
        maxlength="500"
        rows="3"
        :placeholder="t('inv.confirm.return.placeholder')"
        class="w-full rounded-md border border-input bg-background px-3 py-2 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
    </Field>
    <div v-if="confirm === 'issue' && invoice" class="flex justify-between rounded-md bg-muted p-3 text-[14px]">
      <span>{{ t('inv.doc.total') }}</span><span class="font-semibold tnum">{{ money(invoice.total) }}</span>
    </div>
    <template #footer>
      <Button variant="outline" @click="confirm = null">{{ t('common.cancel') }}</Button>
      <Button :variant="confirm === 'delete' ? 'danger' : 'default'" :disabled="confirm === 'return' && !reason.trim()" :loading="busy" @click="act">{{ confirmText.action }}</Button>
    </template>
  </Dialog>
</template>
