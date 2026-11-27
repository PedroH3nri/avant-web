<script setup lang="ts">
/** Termos de pesquisa ou posicionamentos de uma campanha ou grupo do Google Ads, com gasto, cliques, receita e ROI do período;
 * quem gerencia negativa o termo ou exclui o posicionamento na campanha. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import TableState from '@/components/ui/TableState.vue'
import DataTable from '@/components/ui/DataTable.vue'
import { ApiError } from '@/lib/api'
import { errorText, locale, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { EXCLUDABLE_PLACEMENTS, formatCount, formatMoney, formatRatio, roiTone } from '@/modules/google_ads/rules'
import { googleAdsService } from '@/modules/google_ads/service'
import type { GoogleAdsTerm } from '@/modules/google_ads/types'

const props = defineProps<{ rows: GoogleAdsTerm[] | null; currency: string; kind: 'terms' | 'placements'; campaignId?: string; canManage?: boolean }>()

const detailKey = computed(() => (props.kind === 'terms' ? 'gads.terms.col.keyword' : 'gads.placements.col.type'))
const actions = computed(() => !!props.canManage && !!props.campaignId)
const columns = computed(() => (actions.value ? 8 : 7))
const done = ref<string[]>([])
const working = ref<string | null>(null)

/** A chave de uma linha da tabela. */
const rowKey = (row: GoogleAdsTerm) => `${row.text}-${row.detail}`

/** Diz se a linha tem ação: todo termo, e só os posicionamentos que o Google deixa excluir. */
function hasAction(row: GoogleAdsTerm): boolean {
  return props.kind === 'terms' || EXCLUDABLE_PLACEMENTS.includes(row.detail)
}

/** Negativa o termo ou exclui o posicionamento na campanha e marca a linha. */
async function act(row: GoogleAdsTerm) {
  if (!props.campaignId) return
  working.value = rowKey(row)
  try {
    if (props.kind === 'terms') await googleAdsService.negateTerm(props.campaignId, row.text)
    else await googleAdsService.excludePlacement(props.campaignId, row.text, row.detail)
    done.value = [...done.value, rowKey(row)]
    toast.success(props.kind === 'terms' ? t('gads.terms.negated') : t('gads.placements.excluded'))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    working.value = null
  }
}

watch(
  () => props.kind,
  () => (done.value = []),
)
</script>

<template>
  <DataTable :min="actions ? 980 : 860">
    <thead>
      <tr>
        <th :class="th">{{ kind === 'terms' ? t('gads.terms.col.term') : t('gads.placements.col.placement') }}</th>
        <th :class="th">{{ t(detailKey) }}</th>
        <th :class="[th, 'text-right']">{{ t('gads.metric.spend') }}</th>
        <th :class="[th, 'text-right']">{{ t('gads.metric.clicks') }}</th>
        <th :class="[th, 'text-right']">{{ t('gads.metric.conversions') }}</th>
        <th :class="[th, 'text-right']">{{ t('gads.metric.revenue') }}</th>
        <th :class="[th, 'text-right']">{{ t('gads.metric.roi') }}</th>
        <th v-if="actions" :class="th"><span class="sr-only">{{ t('gads.terms.col.action') }}</span></th>
      </tr>
    </thead>
    <tbody>
      <TableState :cols="columns" :loading="!rows" :empty="rows?.length === 0" :desc="kind === 'terms' ? t('gads.terms.empty') : t('gads.placements.empty')" />
      <tr v-for="row in rows ?? []" :key="rowKey(row)" class="hover:bg-muted">
        <td :class="[td, 'font-medium']">{{ row.text }}</td>
        <td :class="[td, 'text-[13px] text-muted-foreground']">{{ row.detail || '–' }}</td>
        <td :class="[td, 'text-right tnum']">{{ formatMoney(row.totals.spend, currency, locale) }}</td>
        <td :class="[td, 'text-right tnum']">{{ formatCount(row.totals.clicks, locale) }}</td>
        <td :class="[td, 'text-right tnum']">{{ formatCount(row.totals.conversions, locale) }}</td>
        <td :class="[td, 'text-right tnum']">{{ formatMoney(row.totals.revenue, currency, locale) }}</td>
        <td :class="[td, 'text-right tnum', roiTone(row.totals.roi)]">{{ formatRatio(row.totals.roi, locale) }}</td>
        <td v-if="actions" :class="[td, 'text-right']">
          <Badge v-if="done.includes(rowKey(row))">{{ kind === 'terms' ? t('gads.terms.negatedBadge') : t('gads.placements.excludedBadge') }}</Badge>
          <Button v-else-if="hasAction(row)" size="sm" variant="outline" :loading="working === rowKey(row)" :disabled="working !== null" @click="act(row)">{{ kind === 'terms' ? t('gads.terms.negate') : t('gads.placements.exclude') }}</Button>
        </td>
      </tr>
    </tbody>
  </DataTable>
</template>
