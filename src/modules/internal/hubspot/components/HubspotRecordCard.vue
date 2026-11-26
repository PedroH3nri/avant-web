<script setup lang="ts">
/** O card do HubSpot de um registro (contato do cliente, empresa ou negócio da network): só os dados dele, lidos na hora. */
import { computed, ref } from 'vue'
import { CalendarClock, ExternalLink, NotebookPen, Phone, SquareCheck } from 'lucide-vue-next'
import HubspotMark from '@/modules/internal/hubspot/components/HubspotMark.vue'
import { formatDate, t } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { ACTIVITY_KINDS, ACTIVITY_LABEL, KIND_LABEL, activitiesOf, cardFacts, lifecycleLabel } from '@/modules/internal/hubspot/rules'
import type { HubspotActivityKind, HubspotCard, HubspotKind } from '@/modules/internal/hubspot/types'

const props = defineProps<{ kind: HubspotKind; card: HubspotCard | null; configured: boolean; loading: boolean; error: string | null; class?: string }>()

const ACTIVITY_ICON = { note: NotebookPen, call: Phone, meeting: CalendarClock, task: SquareCheck }
const shownKind = ref<HubspotActivityKind | 'all'>('all')

const linked = computed(() => Boolean(props.card?.hubspot_id))
const stage = computed(() => (props.kind === 'contact' ? lifecycleLabel(props.card?.stage ?? null) : (props.card?.stage ?? null)))
const facts = computed(() => cardFacts(props.card?.facts ?? {}))
const kinds = computed(() => ACTIVITY_KINDS.filter((kind) => props.card?.activities.some((activity) => activity.kind === kind)))
const activities = computed(() => activitiesOf(props.card?.activities ?? [], shownKind.value))
const emptyText = computed(() => {
  if (!props.configured) return t('hs.card.notConfigured')
  if (!linked.value) return t('hs.card.notSent')
  return null
})

/** A animação em cascata de cada linha, um pouco depois da anterior. */
const rise = (index: number) => ({ animationDelay: `${Math.min(index, 8) * 60}ms` })
</script>

<template>
  <section :class="cn('card-motion flex flex-col overflow-hidden rounded-lg border bg-card animate-in fade-in-0 slide-in-from-bottom-2 fill-mode-both duration-500', $props.class)">
    <div class="flex flex-wrap items-start justify-between gap-3 p-6 pb-0">
      <div class="min-w-0">
        <h2 class="flex items-center gap-2 text-[20px] font-semibold tracking-[-0.025em]"><HubspotMark :size="18" />{{ t('hs.card.title', { object: t(KIND_LABEL[kind]) }) }}</h2>
        <p class="mt-2 text-[14px] text-muted-foreground">{{ t(`hs.card.desc.${kind}`) }}</p>
      </div>
      <a
        v-if="card?.url"
        :href="card.url"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-motion inline-flex h-8 shrink-0 items-center gap-2 rounded-md border bg-[hsl(var(--field))] px-3 text-[13px] font-medium hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ExternalLink class="size-4" aria-hidden="true" />{{ t('hs.card.open') }}
      </a>
    </div>

    <div v-if="loading" class="grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-4" aria-busy="true">
      <div v-for="index in 4" :key="index" class="grid gap-2">
        <span class="h-3 w-1/2 animate-pulse rounded bg-muted" />
        <span class="h-4 w-2/3 animate-pulse rounded bg-muted" />
      </div>
    </div>
    <p v-else-if="error" class="p-6 text-[14px] text-bad">{{ error }}</p>
    <p v-else-if="emptyText" class="p-6 text-[14px] text-muted-foreground">{{ emptyText }}</p>
    <template v-else-if="card">
      <dl class="grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-4">
        <div class="animate-in fade-in-0 slide-in-from-bottom-1 fill-mode-both" :style="rise(0)">
          <dt class="text-[13px] text-muted-foreground">{{ t('hs.fact.owner') }}</dt>
          <dd class="mt-1 text-[14px]">{{ card.owner ?? t('hs.card.noOwner') }}</dd>
        </div>
        <div v-if="stage" class="animate-in fade-in-0 slide-in-from-bottom-1 fill-mode-both" :style="rise(1)">
          <dt class="text-[13px] text-muted-foreground">{{ t(kind === 'deal' ? 'hs.fact.dealStage' : 'hs.fact.lifecycle') }}</dt>
          <dd class="mt-1 text-[14px]">{{ stage }}</dd>
        </div>
        <div v-for="(fact, index) in facts" :key="fact.code" class="animate-in fade-in-0 slide-in-from-bottom-1 fill-mode-both" :style="rise(index + 2)">
          <dt class="text-[13px] text-muted-foreground">{{ fact.label }}</dt>
          <dd class="mt-1 text-[14px] tnum">{{ fact.value }}</dd>
        </div>
      </dl>
      <div class="border-t">
        <div v-if="kinds.length > 1" class="flex flex-wrap items-center gap-1 px-6 pt-4" role="tablist" :aria-label="t('hs.card.activityType')">
          <button
            v-for="option in ['all', ...kinds] as const"
            :key="option"
            type="button"
            role="tab"
            :aria-selected="shownKind === option"
            :class="cn('h-8 rounded-md px-3 text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', shownKind === option ? 'bg-secondary font-medium text-foreground' : 'text-muted-foreground hover:text-foreground')"
            @click="shownKind = option"
          >
            {{ option === 'all' ? t('hs.card.allActivities') : t(ACTIVITY_LABEL[option]) }}
          </button>
        </div>
        <ol v-if="activities.length" class="grid px-6 py-4">
          <li v-for="(activity, index) in activities" :key="`${activity.kind}-${index}`" class="flex gap-3 py-3 animate-in fade-in-0 slide-in-from-bottom-1 fill-mode-both" :style="rise(index)">
            <span class="grid size-8 shrink-0 place-items-center rounded-full border bg-background">
              <component :is="ACTIVITY_ICON[activity.kind]" class="size-4 text-muted-foreground" aria-hidden="true" />
            </span>
            <div class="min-w-0 flex-1">
              <div class="flex flex-wrap items-baseline justify-between gap-x-3">
                <span class="line-clamp-2 break-words text-[14px] font-medium">{{ activity.title || t(ACTIVITY_LABEL[activity.kind]) }}</span>
                <span class="text-[12px] text-muted-foreground tnum">{{ formatDate(activity.happened_at) }}</span>
              </div>
              <p class="mt-0.5 text-[12px] text-muted-foreground">{{ t(ACTIVITY_LABEL[activity.kind]) }}</p>
            </div>
          </li>
        </ol>
        <p v-else class="px-6 py-4 text-[14px] text-muted-foreground">{{ t('hs.card.noActivities') }}</p>
      </div>
    </template>
    <div class="mt-auto border-t bg-[hsl(var(--card-footer))] px-6 py-3 text-[13px] text-muted-foreground">{{ t('hs.card.footer') }}</div>
  </section>
</template>
