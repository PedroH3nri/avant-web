<script setup lang="ts">
/** O modal "Ver detalhes" de um alerta: a série, a campanha ligada ao site, o que a ad tag viu, os recortes agora contra o normal e os links para investigar. */
import { computed } from 'vue'
import { ExternalLink, ShieldAlert } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Status from '@/components/ui/Status.vue'
import { formatDate, locale, t } from '@/lib/i18n'
import { formatMetric } from '@/lib/metrics'
import TrafficSeries from '@/modules/internal/traffic_quality/components/TrafficSeries.vue'
import { grew, integrityLabel, investigateLinks, LINK_GROUPS, normalText, RISK_TONE, seriesUnit, shareLabel, signalText, sourceText } from '@/modules/internal/traffic_quality/rules'
import type { TrafficAlertDetail, TrafficCampaign } from '@/modules/internal/traffic_quality/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ detail: TrafficAlertDetail | null; canManage: boolean; busy: boolean }>()
const emit = defineEmits<{ dismiss: []; task: [] }>()

const alert = computed(() => props.detail?.alert ?? null)
const links = computed(() => (alert.value?.domain ? investigateLinks(alert.value.domain) : []))
const evidence = computed(() => Object.entries(props.detail?.evidence ?? {}))
const description = computed(() => {
  if (!alert.value) return ''
  const parts = [alert.value.client_name, sourceText(alert.value), t('tq.since', { when: formatDate(alert.value.opened_at, false) })]
  return parts.filter(Boolean).join(' · ')
})

/** O valor em micros na moeda da conta. */
const money = (micros: number, currency: string) => formatMetric(micros / 1_000_000, 'currency', locale.value, false, currency)

/** O caminho da lista de campanhas da plataforma no painel interno. */
const campaignsPath = (campaign: TrafficCampaign) => (campaign.platform === 'facebook' ? '/interno/campanhas-facebook' : '/interno/campanhas-google-ads')
</script>

<template>
  <Dialog v-model:open="open" class="max-w-[1040px]" :title="alert?.target_name ?? ''" :desc="description">
    <div v-if="detail && alert" class="grid gap-6">
      <div class="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div class="grid content-start gap-2">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <span class="text-[13px] font-medium">{{ signalText(alert) }}</span>
            <Status :tone="RISK_TONE[alert.risk]">{{ t(`tq.risk.${alert.risk}`) }}</Status>
          </div>
          <p class="text-[13px] text-muted-foreground">{{ t('tq.seriesHint', { n: alert.series.length, unit: seriesUnit(alert), normal: normalText(alert) }) }}</p>
          <TrafficSeries v-if="alert.series.length > 1" :series="alert.series" :normal="alert.normal" :label="t('tq.seriesLabel', { target: alert.target_name })" />
        </div>
        <div class="grid content-start gap-3">
          <dl v-for="campaign in detail.campaigns.slice(0, 2)" :key="`${campaign.account_id}-${campaign.campaign_id}`" class="grid gap-2 rounded-md border p-4 text-[13px]">
            <div class="mb-1 font-medium">{{ t(`tq.campaign.${campaign.platform}`) }}</div>
            <div class="flex justify-between gap-3"><dt class="text-muted-foreground">{{ t('tq.campaign.account') }}</dt><dd class="text-right">{{ campaign.account_name }}</dd></div>
            <div class="flex justify-between gap-3"><dt class="text-muted-foreground">{{ t('tq.campaign.name') }}</dt><dd class="text-right">{{ campaign.campaign_name }}</dd></div>
            <div class="flex justify-between gap-3"><dt class="text-muted-foreground">{{ t('tq.campaign.holder') }}</dt><dd class="text-right">{{ campaign.holder_name ?? '—' }}</dd></div>
            <div class="flex justify-between gap-3"><dt class="text-muted-foreground">{{ t('tq.campaign.spend') }}</dt><dd class="text-right tnum">{{ money(campaign.spend_micros, campaign.currency) }}</dd></div>
            <div class="flex justify-between gap-3"><dt class="text-muted-foreground">{{ t('tq.campaign.ctr') }}</dt><dd class="text-right tnum">{{ campaign.ctr.toLocaleString(locale) }}%</dd></div>
            <div class="flex justify-between gap-3"><dt class="text-muted-foreground">{{ t('tq.campaign.cpc') }}</dt><dd class="text-right tnum">{{ money(campaign.cpc_micros, campaign.currency) }}</dd></div>
            <RouterLink :to="campaignsPath(campaign)" class="mt-1 text-link hover:underline">{{ t('tq.campaign.open') }}</RouterLink>
          </dl>
          <p v-if="!detail.campaigns.length" class="rounded-md border p-4 text-[13px] text-muted-foreground">{{ t('tq.campaign.none') }}</p>
        </div>
      </div>
      <div v-if="evidence.length" class="overflow-hidden rounded-md border">
        <div class="border-b bg-muted px-4 py-2.5 text-[13px] font-medium">{{ t('tq.evidence') }}</div>
        <ul class="divide-y">
          <li v-for="[signal, visits] in evidence" :key="signal" class="flex justify-between gap-4 px-4 py-3 text-[14px]">
            <span>{{ integrityLabel(signal) }}</span><span class="text-[13px] tnum text-muted-foreground">{{ t('sec.visits', { n: visits.toLocaleString(locale) }) }}</span>
          </li>
        </ul>
      </div>
      <div v-if="detail.breakdowns.length" class="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <div v-for="breakdown in detail.breakdowns" :key="breakdown.dimension" class="rounded-md border p-4">
          <div class="mb-3 text-[13px] font-medium">{{ t(`tq.dimension.${breakdown.dimension}`) }}</div>
          <ul class="grid gap-2.5">
            <li v-for="row in breakdown.rows" :key="row.label" class="grid gap-1">
              <div class="flex items-center justify-between gap-3 text-[13px]">
                <span class="truncate" :title="row.label">{{ shareLabel(breakdown.dimension, row.label) }}</span>
                <span class="shrink-0 tnum"><span :class="['font-medium', grew(row.now, row.normal) && 'text-bad']">{{ row.now.toLocaleString(locale) }}%</span><span class="text-muted-foreground"> · {{ t('tq.normalShort', { n: row.normal.toLocaleString(locale) }) }}</span></span>
              </div>
              <div class="relative h-1.5 rounded-full bg-muted-foreground/15" aria-hidden="true">
                <span class="absolute inset-y-0 left-0 rounded-full bg-foreground" :style="{ width: `${Math.min(row.now, 100)}%` }" />
                <span class="absolute top-[-3px] h-3 w-px bg-muted-foreground" :style="{ left: `${Math.min(row.normal, 100)}%` }" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="links.length" class="border-t pt-5">
        <div class="text-[14px] font-medium">{{ t('tq.investigate') }}</div>
        <p class="mt-1 text-[13px] text-muted-foreground">{{ t('tq.investigateHint', { domain: alert.domain ?? '' }) }}</p>
        <div class="mt-4 grid gap-4 md:grid-cols-3">
          <div v-for="group in LINK_GROUPS" :key="group">
            <div class="mb-2 text-[12px] font-medium uppercase tracking-[0.04em] text-muted-foreground">{{ t(`tq.linkGroup.${group}`) }}</div>
            <ul class="grid gap-1">
              <li v-for="link in links.filter((item) => item.group === group)" :key="link.href">
                <a :href="link.href" target="_blank" rel="noopener noreferrer" class="group -mx-2 flex items-start justify-between gap-3 rounded-md px-2 py-1.5 hover:bg-muted">
                  <span><span class="text-[14px] text-link group-hover:underline">{{ t(link.label) }}</span><span class="block text-[12px] text-muted-foreground">{{ t(link.hint) }}</span></span>
                  <ExternalLink class="mt-1 size-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <span class="mr-auto hidden text-[13px] text-muted-foreground sm:inline">{{ t('tq.taskHint') }}</span>
      <RouterLink v-if="alert?.task_id" :to="`/interno/tarefas/${alert.task_id}`" class="self-center text-[14px] text-link hover:underline">{{ t('tq.openTask') }}</RouterLink>
      <template v-if="canManage">
        <Button variant="outline" :disabled="busy" @click="emit('dismiss')">{{ t('tq.dismiss') }}</Button>
        <Button v-if="!alert?.task_id" :loading="busy" @click="emit('task')"><ShieldAlert />{{ t('tq.createTask') }}</Button>
      </template>
      <Button v-else variant="outline" @click="open = false">{{ t('common.close') }}</Button>
    </template>
  </Dialog>
</template>
