<script setup lang="ts">
/** O card "Uso do Avant" da página da Empresa: a soma da equipe (o cliente incluído), pessoas ativas por dia e as áreas mais usadas. */
import { computed, ref, watch } from 'vue'
import Card from '@/components/ui/Card.vue'
import LoadError from '@/components/LoadError.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { latestCall } from '@/lib/latest'
import UsageAreas from '@/modules/internal/usage/components/UsageAreas.vue'
import UsageBars from '@/modules/internal/usage/components/UsageBars.vue'
import UsageFigure from '@/modules/internal/usage/components/UsageFigure.vue'
import UsagePeriodSwitch from '@/modules/internal/usage/components/UsagePeriodSwitch.vue'
import { formatCount, formatMinutes } from '@/modules/internal/usage/rules'
import { usageAdminService } from '@/modules/internal/usage/service'
import type { CompanyUsage, UsagePeriod } from '@/modules/internal/usage/types'

const props = defineProps<{ companyId: string }>()
const period = ref<UsagePeriod>(30)
const usage = ref<CompanyUsage | null>(null)
const loadError = ref<string | null>(null)
const usageCall = latestCall()

/** Carrega o uso da Empresa no período escolhido. */
async function load() {
  loadError.value = null
  try {
    const result = await usageCall(() => usageAdminService.company(props.companyId, period.value))
    if (result) usage.value = result
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
watch([() => props.companyId, period], load, { immediate: true })

const points = computed(() => (usage.value?.series ?? []).map((point) => ({ day: point.day, value: point.people })))
</script>

<template>
  <Card :title="t('usage.companyTitle')" :desc="t('usage.companyDesc')" :footer-note="t('usage.companyHubspot')">
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <div v-else-if="usage" class="grid gap-6">
      <UsagePeriodSwitch v-model="period" />
      <div class="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
        <UsageFigure :label="t('usage.activeDays')" :value="String(usage.totals.active_days)" :of="t('usage.of', { n: period })" />
        <UsageFigure :label="t('usage.activePeople')" :value="String(usage.active_people)" :of="t('usage.of', { n: usage.team_size })" />
        <UsageFigure :label="t('usage.sessions')" :value="formatCount(usage.totals.sessions)" />
        <UsageFigure :label="t('usage.screens')" :value="formatCount(usage.totals.screens)" />
        <UsageFigure :label="t('usage.minutes')" :value="formatMinutes(usage.totals.active_minutes)" />
      </div>
      <div class="grid gap-6 lg:grid-cols-[1fr_280px]">
        <div>
          <div class="mb-2 text-[13px] font-medium">{{ t('usage.peopleByDay') }}</div>
          <UsageBars :points="points" :label="t('usage.peopleByDay')" :unit="t('usage.peopleUnit')" />
        </div>
        <UsageAreas :areas="usage.totals.areas" />
      </div>
    </div>
  </Card>
</template>
