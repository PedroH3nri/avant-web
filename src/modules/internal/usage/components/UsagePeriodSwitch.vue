<script setup lang="ts">
/** A escolha do período dos cards de uso: últimos 7 ou 30 dias. */
import { computed } from 'vue'
import Segmented from '@/components/ui/Segmented.vue'
import { t } from '@/lib/i18n'
import { PERIODS } from '@/modules/internal/usage/rules'
import type { UsagePeriod } from '@/modules/internal/usage/types'

const period = defineModel<UsagePeriod>({ required: true })
const options = computed(() => PERIODS.map((days) => ({ value: String(days), label: t('usage.lastDays', { n: days }) })))
const chosen = computed({
  get: () => String(period.value),
  set: (value: string) => {
    period.value = Number(value) === 7 ? 7 : 30
  },
})
</script>

<template>
  <Segmented v-model="chosen" :options="options" :label="t('usage.period')" />
</template>
