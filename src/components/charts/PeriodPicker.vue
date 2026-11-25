<script setup lang="ts">
/** Período (atalho ou datas escolhidas) e a comparação com o período anterior, usados pelas telas de métricas. */
import { computed } from 'vue'
import { Check } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import DateRangePicker from '@/components/ui/DateRangePicker.vue'
import { t } from '@/lib/i18n'
import { PERIOD_PRESETS } from '@/lib/metrics'
import { periodPresets, type PeriodValue } from '@/lib/periods'
import { utcToday } from '@/modules/reports/rules'

const period = defineModel<PeriodValue>('period', { required: true })
const compare = defineModel<boolean>('compare', { default: true })
const presets = computed(() => periodPresets(PERIOD_PRESETS, utcToday(), false))
</script>

<template>
  <DateRangePicker v-model="period" :presets="presets" :max-days="400" :max="utcToday()" :aria-label="t('perf.period')" />
  <Button variant="outline" class="h-10" :aria-pressed="compare" @click="compare = !compare">
    <Check v-if="compare" class="size-4" aria-hidden="true" />{{ t('perf.compare') }}
  </Button>
</template>
