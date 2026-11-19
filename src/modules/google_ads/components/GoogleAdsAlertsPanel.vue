<script setup lang="ts">
/** Avisos do Google Ads (limite, login revogado, anúncio reprovado, conta suspensa, sufixo de outra ferramenta) e, para quem gerencia, quem recebe cada um. */
import { onMounted, ref, watch } from 'vue'
import { BellRing } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import LoadError from '@/components/LoadError.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Switch from '@/components/ui/Switch.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { alertText } from '@/modules/google_ads/rules'
import { googleAdsReader, googleAdsService } from '@/modules/google_ads/service'
import type { GoogleAdsAlert, GoogleAdsAlertSetting } from '@/modules/google_ads/types'

const props = defineProps<{ internal: boolean; companyId: string; manage: boolean; clientName: (companyId: string) => string }>()
const emit = defineEmits<{ read: [] }>()

const reader = googleAdsReader(props.internal)
const alerts = ref<GoogleAdsAlert[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)
const settings = ref<GoogleAdsAlertSetting[] | null>(null)
const saving = ref(false)
const RECIPIENTS: { field: 'owner' | 'users' | 'connector' | 'email'; key: Key }[] = [
  { field: 'owner', key: 'gads.alerts.owner' },
  { field: 'users', key: 'gads.alerts.users' },
  { field: 'connector', key: 'gads.alerts.connector' },
  { field: 'email', key: 'gads.alerts.email' },
]

/** Carrega a página dos avisos. */
async function load() {
  loadError.value = null
  try {
    const found = await reader.alerts({ page: page.value, company_id: props.internal ? props.companyId || undefined : undefined })
    alerts.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Marca o aviso como lido e avisa a tela para recontar. */
async function markRead(alert: GoogleAdsAlert) {
  try {
    await googleAdsService.readAlert(alert.id)
    alert.read = true
    emit('read')
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}

/** Grava quem recebe os avisos. */
async function saveSettings() {
  if (!settings.value) return
  saving.value = true
  try {
    settings.value = await googleAdsService.setAlertSettings(settings.value)
    toast.success(t('gads.alerts.settingsSaved'))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    saving.value = false
  }
}

onMounted(async () => {
  void load()
  if (props.manage) settings.value = await googleAdsService.alertSettings().catch(() => null)
})
watch(page, load)
watch(() => props.companyId, () => (page.value === 1 ? load() : (page.value = 1)))
</script>

<template>
  <section class="grid gap-3">
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="internal ? 860 : 720">
      <thead>
        <tr>
          <th :class="th">{{ t('gads.alerts.col.alert') }}</th>
          <th v-if="internal" :class="th">{{ t('gads.col.client') }}</th>
          <th :class="th">{{ t('gads.alerts.col.when') }}</th>
          <th :class="th"><span class="sr-only">{{ t('gads.alerts.markRead') }}</span></th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="internal ? 4 : 3" :loading="!alerts" :empty="alerts?.length === 0" :icon="BellRing" :desc="t('gads.alerts.empty')" />
        <tr v-for="alert in alerts ?? []" :key="alert.id" :class="['hover:bg-muted', alert.read ? '' : 'font-medium']">
          <td :class="td">
            <span class="flex items-start gap-2">
              <span v-if="!alert.read" class="mt-2 size-2 shrink-0 rounded-full bg-foreground" aria-hidden="true" />
              <span>{{ t(alertText(alert).key, alertText(alert).params) }}</span>
            </span>
          </td>
          <td v-if="internal" :class="td">{{ clientName(alert.company_id) }}</td>
          <td :class="[td, 'whitespace-nowrap text-[13px] font-normal text-muted-foreground tnum']">{{ formatDate(alert.created_at) }}</td>
          <td :class="[td, 'text-right']">
            <Button v-if="!internal && !alert.read" size="sm" variant="ghost" @click="markRead(alert)">{{ t('gads.alerts.markRead') }}</Button>
          </td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
    <div v-if="settings" class="grid gap-3 pt-4">
      <div>
        <h2 class="text-[20px] font-semibold tracking-tight">{{ t('gads.alerts.settings') }}</h2>
        <p class="mt-1 max-w-[80ch] text-[14px] text-muted-foreground">{{ t('gads.alerts.settingsDesc') }}</p>
      </div>
      <DataTable :min="720">
        <thead>
          <tr>
            <th :class="th">{{ t('gads.alerts.col.kind') }}</th>
            <th v-for="recipient in RECIPIENTS" :key="recipient.field" :class="th">{{ t(recipient.key) }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="setting in settings" :key="setting.kind">
            <td :class="td">{{ t(`gads.alertKind.${setting.kind}` as Key) }}</td>
            <td v-for="recipient in RECIPIENTS" :key="recipient.field" :class="td">
              <Switch v-model="setting[recipient.field]" :label="`${t(`gads.alertKind.${setting.kind}` as Key)}: ${t(recipient.key)}`" />
            </td>
          </tr>
        </tbody>
      </DataTable>
      <div><Button :disabled="saving" @click="saveSettings">{{ t('common.save') }}</Button></div>
    </div>
  </section>
</template>
