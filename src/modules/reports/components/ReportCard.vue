<script setup lang="ts">
/** Cartão do relatório salvo: miniatura, nome, descrição, dono, quem vê e período. O cartão inteiro abre a leitura. */
import { computed } from 'vue'
import { Lock, Pin } from 'lucide-vue-next'
import Avatar from '@/components/ui/Avatar.vue'
import { formatDate, t, type Key } from '@/lib/i18n'
import { PERIOD_PRESETS } from '@/lib/metrics'
import ReportMenu from '@/modules/reports/components/ReportMenu.vue'
import ReportThumb from '@/modules/reports/components/ReportThumb.vue'
import type { MetricCatalog, RelativePeriod, SavedReport } from '@/modules/reports/types'

const props = defineProps<{ report: SavedReport; catalog: MetricCatalog | null; pinned: boolean; owner: string; ownerAvatar: string; canDuplicate: boolean }>()
const emit = defineEmits<{ edit: []; duplicate: []; pin: []; download: [format: 'csv' | 'xlsx']; remove: [] }>()

const period = computed(() => {
  const saved = props.report.query.period
  if (saved.preset && PERIOD_PRESETS.includes(saved.preset as RelativePeriod)) return t(`period.${saved.preset}` as Key)
  return saved.start && saved.end ? t('report.fixedPeriod', { start: saved.start, end: saved.end }) : ''
})
</script>

<template>
  <article class="group relative flex flex-col overflow-hidden rounded-lg border bg-card transition-colors hover:border-foreground/25">
    <div class="h-[112px] border-b bg-muted/60 py-2"><ReportThumb :report="report" :catalog="catalog" /></div>
    <div class="flex flex-1 flex-col gap-1.5 p-4">
      <div class="flex items-start gap-2">
        <h3 class="min-w-0 flex-1 text-[15px] font-semibold leading-snug tracking-tight">
          <RouterLink :to="`/relatorios/${report.id}`" class="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:rounded-lg focus-visible:after:ring-2 focus-visible:after:ring-ring">{{ report.name }}</RouterLink>
        </h3>
        <Pin v-if="pinned" class="mt-0.5 size-3.5 shrink-0 text-muted-foreground" :aria-label="t('report.pinned')" />
        <div class="relative z-10 -mr-1.5 -mt-1.5">
          <ReportMenu :report="report" :pinned="pinned" :can-duplicate="canDuplicate"
            @edit="emit('edit')"
            @duplicate="emit('duplicate')"
            @pin="emit('pin')"
            @download="(format) => emit('download', format)"
            @remove="emit('remove')"
          />
        </div>
      </div>
      <p class="line-clamp-2 flex-1 text-[13px] text-muted-foreground">{{ report.description ?? '' }}</p>
      <div class="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-muted-foreground">
        <span class="flex items-center gap-1.5 text-foreground"><Avatar :name="ownerAvatar" :size="18" />{{ owner }}</span>
        <span class="inline-flex items-center gap-1"><Lock v-if="report.visibility === 'private'" class="size-3.5" aria-hidden="true" />{{ t(`report.visibility.${report.visibility}` as Key) }}</span>
        <span>{{ period }}</span>
        <span class="ml-auto">{{ formatDate(report.updated_at, false) }}</span>
      </div>
    </div>
  </article>
</template>
