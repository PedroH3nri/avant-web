<script setup lang="ts">
/** Termos de pesquisa ou posicionamentos de uma campanha ou grupo do Google Ads, com gasto, cliques, receita e ROI do período. */
import { computed } from 'vue'
import TableState from '@/components/ui/TableState.vue'
import DataTable from '@/components/ui/DataTable.vue'
import { locale, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { formatCount, formatMoney, formatRatio } from '@/modules/google_ads/rules'
import type { GoogleAdsTerm } from '@/modules/google_ads/types'

const props = defineProps<{ rows: GoogleAdsTerm[] | null; currency: string; kind: 'terms' | 'placements' }>()

const detailKey = computed(() => (props.kind === 'terms' ? 'gads.terms.col.keyword' : 'gads.placements.col.type'))
</script>

<template>
  <DataTable :min="860">
    <thead>
      <tr>
        <th :class="th">{{ kind === 'terms' ? t('gads.terms.col.term') : t('gads.placements.col.placement') }}</th>
        <th :class="th">{{ t(detailKey) }}</th>
        <th :class="[th, 'text-right']">{{ t('gads.metric.spend') }}</th>
        <th :class="[th, 'text-right']">{{ t('gads.metric.clicks') }}</th>
        <th :class="[th, 'text-right']">{{ t('gads.metric.conversions') }}</th>
        <th :class="[th, 'text-right']">{{ t('gads.metric.revenue') }}</th>
        <th :class="[th, 'text-right']">{{ t('gads.metric.roi') }}</th>
      </tr>
    </thead>
    <tbody>
      <TableState :cols="7" :loading="!rows" :empty="rows?.length === 0" :desc="kind === 'terms' ? t('gads.terms.empty') : t('gads.placements.empty')" />
      <tr v-for="row in rows ?? []" :key="`${row.text}-${row.detail}`" class="hover:bg-muted">
        <td :class="[td, 'font-medium']">{{ row.text }}</td>
        <td :class="[td, 'text-[13px] text-muted-foreground']">{{ row.detail || '–' }}</td>
        <td :class="[td, 'text-right tnum']">{{ formatMoney(row.totals.spend, currency, locale) }}</td>
        <td :class="[td, 'text-right tnum']">{{ formatCount(row.totals.clicks, locale) }}</td>
        <td :class="[td, 'text-right tnum']">{{ formatCount(row.totals.conversions, locale) }}</td>
        <td :class="[td, 'text-right tnum']">{{ formatMoney(row.totals.revenue, currency, locale) }}</td>
        <td :class="[td, 'text-right tnum']">{{ formatRatio(row.totals.roi, locale) }}</td>
      </tr>
    </tbody>
  </DataTable>
</template>
