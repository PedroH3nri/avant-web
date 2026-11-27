<script setup lang="ts">
/** O card Segurança do site: a verificação das páginas (com o botão) e os sinais que a ad tag viu nos últimos 7 dias. */
import { computed, onMounted, ref } from 'vue'
import Card from '@/components/ui/Card.vue'
import Status from '@/components/ui/Status.vue'
import { ApiError } from '@/lib/api'
import { onEvent } from '@/lib/events'
import { errorText, formatDate, locale, t } from '@/lib/i18n'
import InstallCheckCell from '@/modules/install_checks/components/InstallCheckCell.vue'
import { securityTotals, signalRows, signalStatus } from '@/modules/site_security/rules'
import { siteSecurityService } from '@/modules/site_security/service'
import type { SiteSecurity } from '@/modules/site_security/types'

const props = defineProps<{ siteId: string; domain: string; internal: boolean; class?: string }>()

const service = siteSecurityService(props.internal)
const security = ref<SiteSecurity | null>(null)
const problem = ref<string | null>(null)
const totals = computed(() => (security.value ? securityTotals(security.value) : null))
const rows = computed(() => (totals.value ? signalRows(totals.value.signals) : []))
const status = computed(() => (security.value && totals.value ? signalStatus(security.value, totals.value.pageViews, totals.value.flagged) : null))

/** Formata uma contagem no idioma da pessoa. */
const count = (value: number) => value.toLocaleString(locale.value)

/** Busca o card; um erro fica no card, sem quebrar o resto da tela. */
async function load() {
  problem.value = null
  try {
    security.value = await service.show(props.siteId)
  } catch (error) {
    problem.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

onEvent('install_check.updated', (data) => {
  if (data.target === 'security' && data.target_id === props.siteId) void load()
})

onMounted(load)
</script>

<template>
  <Card :class="`self-start ${$props.class ?? ''}`" :title="t('sec.title')" :desc="t('sec.desc')" :footer-note="t('sec.footer')">
    <p v-if="problem" class="text-[14px] text-bad">{{ problem }}</p>
    <p v-else-if="!security || !totals || !status" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <div v-else class="grid gap-4 text-[14px]">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <span class="font-medium">{{ t('sec.pages') }}</span>
        <InstallCheckCell target="security" :id="siteId" :name="domain" :internal="internal" :summary="security.check.summary" />
      </div>
      <div class="grid gap-2 border-t pt-4">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <span class="font-medium">{{ t('sec.signals') }}</span>
          <Status :tone="status.tone">{{ status.label }}</Status>
        </div>
        <p v-if="security.alert" class="text-[13px] text-bad">{{ t('sec.alertSince', { when: formatDate(security.alert.opened_at) }) }}</p>
        <ul class="grid gap-1.5 text-[13px]">
          <li v-for="row in rows" :key="row.signal" class="flex justify-between gap-3">
            <span>{{ t(`integrity.${row.signal}`) }}</span>
            <span class="tnum text-muted-foreground">{{ row.count ? t('sec.visits', { n: count(row.count) }) : '0' }}</span>
          </li>
        </ul>
        <p class="text-[12px] text-muted-foreground tnum">
          {{ t('sec.totals', { flagged: count(totals.flagged), views: count(totals.pageViews), blocked: count(totals.blocked) }) }}
        </p>
        <RouterLink v-if="internal && security.alert" to="/interno/qualidade-do-trafego" class="w-fit text-[13px] text-link hover:underline">{{ t('sec.trafficLink') }}</RouterLink>
      </div>
    </div>
  </Card>
</template>
