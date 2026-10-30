<script setup lang="ts">
/** A invoice como sai no PDF: De GROONE, LLC para o funcionário, as linhas, o total e o pagamento. */
import { computed } from 'vue'
import { DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { Lock, MoreHorizontal, Plus } from 'lucide-vue-next'
import BrandSignature from '@/components/BrandSignature.vue'
import Button from '@/components/ui/Button.vue'
import Mark from '@/components/ui/Mark.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import Status from '@/components/ui/Status.vue'
import { formatDate, locale, t, type Key } from '@/lib/i18n'
import { formatMetric, toNumber } from '@/lib/metrics'
import { th, td } from '@/lib/table'
import { cn } from '@/lib/utils'
import { TAX_TYPES } from '@/modules/company/fiscal'
import { STATUS_TONE } from '@/modules/internal/invoices/rules'
import type { Invoice, InvoiceItem } from '@/modules/internal/invoices/types'

const props = defineProps<{ invoice: Invoice; editable: boolean }>()
defineEmits<{ add: []; edit: [item: InvoiceItem]; remove: [item: InvoiceItem] }>()

const PAYER = { name: 'GROONE, LLC', ein: '30-1462306', address: '1191 E Newport Center Dr 103, Deerfield Beach, FL 33442' }

/** Valor em dólar no idioma da pessoa. */
const money = (value: string) => formatMetric(toNumber(value), 'currency', locale.value)
/** Nome do mês da API (``AAAA-MM-DD``). */
const monthName = (iso: string) => new Intl.DateTimeFormat(locale.value, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`))
const payee = computed(() => props.invoice.payee)
const dates = computed(() => [
  [t('inv.col.month'), monthName(props.invoice.month)],
  [t('inv.col.created'), formatDate(props.invoice.created_at, false)],
  [t('inv.col.issued'), props.invoice.issued_at ? formatDate(props.invoice.issued_at, false) : '–'],
  [t('inv.col.paid'), props.invoice.paid_at ? formatDate(props.invoice.paid_at, false) : '–'],
])
const label = 'text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground'
</script>

<template>
  <section class="overflow-hidden rounded-lg border bg-card">
    <div class="grid gap-8 p-6 sm:p-10">
      <div class="flex flex-wrap items-start justify-between gap-6">
        <div class="flex items-center gap-2.5"><Mark :size="32" /><span class="text-[18px] font-semibold tracking-tight">Avant</span></div>
        <div class="text-right">
          <div :class="label">Invoice</div>
          <div class="mt-1 font-mono text-[15px] font-medium">{{ invoice.number }}</div>
          <div class="mt-1"><Status :tone="STATUS_TONE[invoice.status]">{{ t(`inv.status.${invoice.status}` as Key) }}</Status></div>
        </div>
      </div>
      <div class="grid gap-6 text-[14px] sm:grid-cols-3">
        <div>
          <div :class="label">{{ t('inv.doc.from') }}</div>
          <div class="mt-2 grid gap-0.5">
            <span class="font-medium">{{ PAYER.name }}</span><span class="text-muted-foreground">EIN {{ PAYER.ein }}</span><span class="text-muted-foreground">{{ PAYER.address }}</span>
          </div>
        </div>
        <div>
          <div :class="label">{{ t('inv.doc.to') }}</div>
          <div v-if="payee" class="mt-2 grid gap-0.5">
            <span class="font-medium">{{ payee.legal_name }}</span>
            <span v-if="invoice.role_name" class="text-muted-foreground">{{ invoice.role_name }}</span>
            <span class="text-muted-foreground">{{ t('inv.doc.person') }} · {{ TAX_TYPES[payee.tax_type] ?? payee.tax_type }} {{ payee.tax_id }}</span>
            <span class="text-muted-foreground">{{ payee.billing_address }}</span>
            <span class="text-muted-foreground tnum">{{ payee.billing_phone_ddi }} {{ payee.billing_phone }}</span>
          </div>
          <div v-else class="mt-2 grid gap-0.5">
            <span class="font-medium">{{ invoice.owner.name }}</span>
            <span v-if="invoice.role_name" class="text-muted-foreground">{{ invoice.role_name }}</span>
            <span class="text-muted-foreground">{{ t('inv.doc.payeeLater') }}</span>
          </div>
        </div>
        <dl class="grid content-start gap-2">
          <div v-for="[name, value] in dates" :key="name" class="flex justify-between gap-4">
            <dt class="text-muted-foreground">{{ name }}</dt><dd class="tnum first-letter:uppercase">{{ value }}</dd>
          </div>
        </dl>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse text-left text-[14px]">
          <thead>
            <tr>
              <th :class="cn(th, 'px-0')">{{ t('inv.doc.description') }}</th>
              <th :class="cn(th, 'px-0 text-right')">{{ t('inv.doc.amount') }}</th>
              <th v-if="editable" :class="cn(th, 'w-12 px-0')"><span class="sr-only">{{ t('team.actions') }}</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in invoice.items" :key="item.id">
              <td :class="cn(td, 'px-0')">
                <div class="flex items-center gap-2 font-medium">
                  <Lock v-if="item.locked" class="size-3.5 shrink-0 text-muted-foreground" :aria-label="t('inv.doc.locked')" />{{ item.title }}
                </div>
                <div v-if="item.description" class="mt-0.5 text-[13px] text-muted-foreground">{{ item.description }}</div>
              </td>
              <td :class="cn(td, 'whitespace-nowrap px-0 text-right tnum')">{{ money(item.amount) }}</td>
              <td v-if="editable" :class="cn(td, 'px-0 text-right')">
                <DropdownMenuRoot v-if="!item.locked">
                  <DropdownMenuTrigger as-child>
                    <Button variant="ghost" size="icon" class="size-8" :aria-label="t('inv.line.actions', { name: item.title })"><MoreHorizontal /></Button>
                  </DropdownMenuTrigger>
                  <MenuContent align="end" class="w-40">
                    <MenuItem @select="$emit('edit', item)">{{ t('common.edit') }}</MenuItem>
                    <MenuItem danger @select="$emit('remove', item)">{{ t('common.remove') }}</MenuItem>
                  </MenuContent>
                </DropdownMenuRoot>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td class="px-0 pt-4 text-[14px] font-medium">{{ t('inv.doc.total') }}</td>
              <td class="px-0 pt-4 text-right text-[20px] font-semibold tracking-tight tnum">{{ money(invoice.total) }}</td>
              <td v-if="editable" />
            </tr>
          </tfoot>
        </table>
      </div>
      <div v-if="editable">
        <Button size="sm" variant="outline" @click="$emit('add')"><Plus class="size-4" />{{ t('inv.line.add') }}</Button>
      </div>
      <div v-if="payee && invoice.status !== 'draft'" class="grid gap-1 rounded-md bg-muted p-4 text-[13px]">
        <div class="font-medium">{{ t('inv.doc.payment') }}</div>
        <div class="text-muted-foreground">{{ payee.bank_name }} · SWIFT {{ payee.swift_code }} · {{ t('fiscal.account') }} {{ payee.account_number }} · {{ t('fiscal.routing') }} {{ payee.routing_number }}</div>
      </div>
      <div class="flex justify-center border-t pt-6"><BrandSignature /></div>
    </div>
  </section>
</template>
