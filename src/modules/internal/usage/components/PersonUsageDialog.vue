<script setup lang="ts">
/** A janela "Ver detalhes" de uma pessoa da equipe: números, telas por dia, áreas e os últimos dias com acesso. */
import { computed, ref, watch } from 'vue'
import Dialog from '@/components/ui/Dialog.vue'
import LoadError from '@/components/LoadError.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatAgo, t } from '@/lib/i18n'
import { latestCall } from '@/lib/latest'
import UsageAreas from '@/modules/internal/usage/components/UsageAreas.vue'
import UsageBars from '@/modules/internal/usage/components/UsageBars.vue'
import UsageFigure from '@/modules/internal/usage/components/UsageFigure.vue'
import UsagePeriodSwitch from '@/modules/internal/usage/components/UsagePeriodSwitch.vue'
import { dayLabel, formatCount, formatMinutes } from '@/modules/internal/usage/rules'
import { usageAdminService } from '@/modules/internal/usage/service'
import type { PersonUsage, PersonUsageDetail, UsagePeriod } from '@/modules/internal/usage/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ companyId: string; companyName: string; person: PersonUsage | null }>()
const period = ref<UsagePeriod>(30)
const detail = ref<PersonUsageDetail | null>(null)
const loadError = ref<string | null>(null)
const detailCall = latestCall()

/** Carrega os detalhes da pessoa no período escolhido. */
async function load() {
  const chosen = props.person
  if (!open.value || !chosen) return
  loadError.value = null
  try {
    const result = await detailCall(() => usageAdminService.person(props.companyId, chosen.user_id, period.value))
    if (result) detail.value = result
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
watch([open, () => props.person?.user_id, period], load, { immediate: true })

const shown = computed(() => detail.value?.person ?? props.person)
const points = computed(() => (detail.value?.series ?? []).map((point) => ({ day: point.day, value: point.screens })))
const desc = computed(() => {
  const person = shown.value
  if (!person) return ''
  const role = person.is_owner ? t('usage.ownerRole') : t('usage.memberRole')
  const access = person.last_access_at ? formatAgo(person.last_access_at) : t('int.neverAccessed')
  return t('usage.personDesc', { role, company: props.companyName, access })
})
</script>

<template>
  <Dialog v-model:open="open" :title="shown?.name ?? ''" :desc="desc" class="max-w-[760px]">
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <div v-else-if="shown" class="grid gap-5">
      <UsagePeriodSwitch v-model="period" />
      <div class="grid gap-3 sm:grid-cols-4">
        <UsageFigure :label="t('usage.activeDays')" :value="String(shown.totals.active_days)" :of="t('usage.of', { n: period })" />
        <UsageFigure :label="t('usage.sessions')" :value="formatCount(shown.totals.sessions)" />
        <UsageFigure :label="t('usage.screens')" :value="formatCount(shown.totals.screens)" />
        <UsageFigure :label="t('usage.minutes')" :value="formatMinutes(shown.totals.active_minutes)" />
      </div>
      <div class="grid gap-5 md:grid-cols-[1fr_240px]">
        <div>
          <div class="mb-2 text-[13px] font-medium">{{ t('usage.screensByDay') }}</div>
          <UsageBars :points="points" :label="t('usage.screensByDay')" :unit="t('usage.screensUnit')" />
        </div>
        <UsageAreas :areas="shown.totals.areas" />
      </div>
      <div>
        <div class="mb-2 text-[13px] font-medium">{{ t('usage.recentDays') }}</div>
        <ul class="divide-y rounded-md border text-[13px]">
          <li v-for="day in detail?.recent ?? []" :key="day.day" class="flex items-center justify-between px-3 py-2">
            <span class="tnum">{{ dayLabel(day.day) }}</span>
            <span class="tnum text-muted-foreground">{{ t('usage.recentLine', { screens: day.screens, sessions: day.sessions, minutes: formatMinutes(day.active_minutes) }) }}</span>
          </li>
          <li v-if="detail && !detail.recent.length" class="px-3 py-4 text-center text-muted-foreground">{{ t('usage.noRecent', { n: period }) }}</li>
        </ul>
      </div>
    </div>
  </Dialog>
</template>
