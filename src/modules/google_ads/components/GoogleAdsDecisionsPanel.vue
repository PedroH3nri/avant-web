<script setup lang="ts">
/** Decisões das regras automáticas de um objeto do Google Ads: quando, o que fizeram, em quê, o ROI e o valor antes e depois. */
import { onMounted, ref, watch } from 'vue'
import { Sparkles } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, locale, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { decisionTone, decisionValues, formatMoney, formatRatio } from '@/modules/google_ads/rules'
import { googleAdsReader } from '@/modules/google_ads/service'
import type { GoogleAdsLevel, GoogleAdsRuleDecision } from '@/modules/google_ads/types'

const props = defineProps<{ level: GoogleAdsLevel; externalId: string; internal: boolean; currency: string }>()

const decisions = ref<GoogleAdsRuleDecision[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)

/** Carrega uma página das decisões, a mais nova primeiro. */
async function load() {
  loadError.value = null
  try {
    const found = await googleAdsReader(props.internal).ruleDecisions(props.level, props.externalId, { page: page.value })
    decisions.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** O orçamento ou o CPC antes e depois, ou traço quando a decisão não mexeu nele. */
function valueText(decision: GoogleAdsRuleDecision): string {
  const { before, after } = decisionValues(decision)
  if (before === null || after === null) return '–'
  return `${formatMoney(before, props.currency, locale.value)} → ${formatMoney(after, props.currency, locale.value)}`
}

/** Onde a decisão agiu: a palavra-chave, ou o próprio objeto. */
function targetText(decision: GoogleAdsRuleDecision): string {
  return typeof decision.data.text === 'string' ? decision.data.text : t(`gads.rules.this.${props.level}` as Key)
}

/** O motivo da decisão em texto: o erro do Google quando falhou. */
function reason(decision: GoogleAdsRuleDecision): string {
  if (decision.action === 'failed') return errorText(typeof decision.data.error === 'string' ? decision.data.error : 'unknown')
  return t(`gads.decision.reason.${decision.action}` as Key)
}

defineExpose({ load })
onMounted(load)
watch(page, load)
</script>

<template>
  <section class="grid gap-3">
    <div>
      <h2 class="text-[20px] font-semibold tracking-tight">{{ t('gads.decision.title') }}</h2>
      <p class="mt-1 text-[14px] text-muted-foreground">{{ t('gads.decision.desc') }}</p>
    </div>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="860">
      <thead>
        <tr>
          <th :class="th">{{ t('gads.decision.col.when') }}</th>
          <th :class="th">{{ t('gads.decision.col.action') }}</th>
          <th :class="th">{{ t('gads.decision.col.target') }}</th>
          <th :class="[th, 'text-right']">{{ t('gads.decision.col.roi') }}</th>
          <th :class="th">{{ t('gads.decision.col.value') }}</th>
          <th :class="th">{{ t('gads.decision.col.reason') }}</th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="6" :loading="!decisions" :empty="decisions?.length === 0" :icon="Sparkles" :desc="t('gads.decision.empty')" />
        <tr v-for="decision in decisions ?? []" :key="decision.id" class="hover:bg-muted">
          <td :class="[td, 'whitespace-nowrap tnum text-[13px]']">{{ formatDate(decision.decided_at) }}</td>
          <td :class="td"><Status :tone="decisionTone(decision.action)">{{ t(`gads.decision.action.${decision.action}` as Key) }}</Status></td>
          <td :class="[td, 'text-[13px]']">{{ targetText(decision) }}</td>
          <td :class="[td, 'text-right tnum']">{{ formatRatio(decision.roi === null ? null : decision.roi / 100, locale) }}</td>
          <td :class="[td, 'whitespace-nowrap tnum text-[13px]']">{{ valueText(decision) }}</td>
          <td :class="[td, 'text-[13px] text-muted-foreground']">{{ reason(decision) }}</td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
  </section>
</template>
