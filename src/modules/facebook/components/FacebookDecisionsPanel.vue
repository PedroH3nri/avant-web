<script setup lang="ts">
/** Decisões das regras automáticas de um objeto: quando, o que fizeram, o ROI do dia e o orçamento antes e depois. */
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
import { decisionBudget, decisionTone, formatMoney, formatRatio } from '@/modules/facebook/rules'
import { facebookReader } from '@/modules/facebook/service'
import type { FacebookRuleDecision } from '@/modules/facebook/types'

const props = defineProps<{ externalId: string; internal: boolean; currency: string }>()

const decisions = ref<FacebookRuleDecision[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)

/** Carrega uma página das decisões, a mais nova primeiro. */
async function load() {
  loadError.value = null
  try {
    const found = await facebookReader(props.internal).ruleDecisions(props.externalId, { page: page.value })
    decisions.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** O orçamento antes e depois, ou traço quando a decisão não mexeu nele. */
function budgetText(decision: FacebookRuleDecision): string {
  const { before, after } = decisionBudget(decision)
  if (before === null || after === null) return '–'
  return `${formatMoney(before, props.currency, locale.value)} → ${formatMoney(after, props.currency, locale.value)}`
}

/** O motivo da decisão em texto: o erro do Facebook quando falhou. */
function reason(decision: FacebookRuleDecision): string {
  if (decision.action === 'failed') return errorText(typeof decision.data.error === 'string' ? decision.data.error : 'unknown')
  return t(`fb.decision.reason.${decision.action}` as Key)
}

defineExpose({ load })
onMounted(load)
watch(page, load)
</script>

<template>
  <section class="grid gap-3">
    <div>
      <h2 class="text-[20px] font-semibold tracking-tight">{{ t('fb.decision.title') }}</h2>
      <p class="mt-1 text-[14px] text-muted-foreground">{{ t('fb.decision.desc') }}</p>
    </div>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="760">
      <thead>
        <tr>
          <th :class="th">{{ t('fb.decision.col.when') }}</th>
          <th :class="th">{{ t('fb.decision.col.action') }}</th>
          <th :class="[th, 'text-right']">{{ t('fb.decision.col.roi') }}</th>
          <th :class="th">{{ t('fb.decision.col.budget') }}</th>
          <th :class="th">{{ t('fb.decision.col.reason') }}</th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="5" :loading="!decisions" :empty="decisions?.length === 0" :icon="Sparkles" :desc="t('fb.decision.empty')" />
        <tr v-for="decision in decisions ?? []" :key="decision.id" class="hover:bg-muted">
          <td :class="[td, 'whitespace-nowrap tnum text-[13px]']">{{ formatDate(decision.decided_at) }}</td>
          <td :class="td"><Status :tone="decisionTone(decision.action)">{{ t(`fb.decision.action.${decision.action}` as Key) }}</Status></td>
          <td :class="[td, 'text-right tnum']">{{ formatRatio(decision.roi === null ? null : decision.roi / 100, locale) }}</td>
          <td :class="[td, 'whitespace-nowrap tnum text-[13px]']">{{ budgetText(decision) }}</td>
          <td :class="[td, 'text-[13px] text-muted-foreground']">{{ reason(decision) }}</td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
  </section>
</template>
