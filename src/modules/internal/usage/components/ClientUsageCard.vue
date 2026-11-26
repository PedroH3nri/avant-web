<script setup lang="ts">
/** O card "Uso do cliente" da página do cliente: o uso do login dele, sem a equipe, em 7 ou 30 dias. */
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import LoadError from '@/components/LoadError.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatAgo, t } from '@/lib/i18n'
import { latestCall } from '@/lib/latest'
import UsageAreas from '@/modules/internal/usage/components/UsageAreas.vue'
import UsageBars from '@/modules/internal/usage/components/UsageBars.vue'
import UsageFigure from '@/modules/internal/usage/components/UsageFigure.vue'
import UsagePeriodSwitch from '@/modules/internal/usage/components/UsagePeriodSwitch.vue'
import { formatCount, formatMinutes } from '@/modules/internal/usage/rules'
import { usageAdminService } from '@/modules/internal/usage/service'
import type { ClientUsage, UsagePeriod } from '@/modules/internal/usage/types'

const props = defineProps<{ clientId: string; companyLink?: string | null }>()
const router = useRouter()
const period = ref<UsagePeriod>(30)
const found = ref<ClientUsage | null>(null)
const loadError = ref<string | null>(null)
const usageCall = latestCall()

/** Carrega o uso do cliente no período escolhido. */
async function load() {
  loadError.value = null
  try {
    const result = await usageCall(() => usageAdminService.client(props.clientId, period.value))
    if (result) found.value = result
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
watch([() => props.clientId, period], load, { immediate: true })

const detail = computed(() => found.value?.usage ?? null)
const person = computed(() => detail.value?.person ?? null)
const points = computed(() => (detail.value?.series ?? []).map((point) => ({ day: point.day, value: point.screens ? 1 : 0 })))
const desc = computed(() => (person.value ? t('usage.clientDesc', { name: person.value.name, email: person.value.email }) : t('usage.clientDescEmpty')))
</script>

<template>
  <Card :title="t('usage.clientTitle')" :desc="desc" :footer-note="t('usage.clientHubspot')">
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <p v-else-if="found && !person" class="py-4 text-center text-[14px] text-muted-foreground">{{ t('usage.clientNever') }}</p>
    <div v-else-if="person" class="grid gap-6">
      <UsagePeriodSwitch v-model="period" />
      <div class="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
        <UsageFigure :label="t('int.column.last_access')" :value="person.last_access_at ? formatAgo(person.last_access_at) : t('int.neverAccessed')" />
        <UsageFigure :label="t('usage.activeDays')" :value="String(person.totals.active_days)" :of="t('usage.of', { n: period })" />
        <UsageFigure :label="t('usage.sessions')" :value="formatCount(person.totals.sessions)" />
        <UsageFigure :label="t('usage.screens')" :value="formatCount(person.totals.screens)" />
        <UsageFigure :label="t('usage.minutes')" :value="formatMinutes(person.totals.active_minutes)" />
      </div>
      <div class="grid gap-6 lg:grid-cols-[1fr_280px]">
        <div>
          <div class="mb-2 text-[13px] font-medium">{{ t('usage.clientDays') }}</div>
          <UsageBars :points="points" :label="t('usage.clientDays')" :unit="t('usage.enteredUnit')" />
        </div>
        <UsageAreas :areas="person.totals.areas" />
      </div>
    </div>
    <template v-if="companyLink" #footer>
      <Button size="sm" variant="outline" @click="router.push(companyLink)">{{ t('usage.openCompany') }}</Button>
    </template>
  </Card>
</template>
