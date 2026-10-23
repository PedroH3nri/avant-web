<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { AlertTriangle } from 'lucide-vue-next'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import SeatBar from '@/components/ui/SeatBar.vue'
import Status from '@/components/ui/Status.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import { api, ApiError } from '@/lib/api'
import { errorText, formatAgo, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import type { CompanyDetail, Items, Network, NetworkStatus } from '@/lib/types'
import { useSession } from '@/stores/session'

const session = useSession()
const company = ref<CompanyDetail | null>(null)
const networks = ref<Network[] | null>(null)
const error = ref<string | null>(null)

const firstName = computed(() => session.me?.user.name.split(' ')[0] ?? '')
const greeting = computed(() => {
  const h = new Date().getHours()
  const key = h < 12 ? 'home.morning' : h < 18 ? 'home.afternoon' : 'home.evening'
  return t(key, { name: firstName.value })
})
const lost = computed(() => (networks.value ?? []).filter((n) => n.status === 'error'))
const tone: Record<NetworkStatus, 'ok' | 'warn' | 'bad' | 'neutral'> = {
  pending: 'warn',
  connected: 'ok',
  error: 'bad',
  disconnected: 'neutral',
}

async function load() {
  error.value = null
  if (!session.company) return
  try {
    const [c, n] = await Promise.all([
      api.get<CompanyDetail>('/company'),
      session.can('network.view') ? api.get<Items<Network>>('/networks') : Promise.resolve(null),
    ])
    company.value = c
    networks.value = n?.items ?? null
  } catch (e) {
    error.value = e instanceof ApiError ? errorText(e.code) : errorText('unknown')
  }
}
onMounted(load)
// Trocar de Empresa recarrega o resumo.
watch(() => session.me?.active_company_id, load)
</script>

<template>
  <PageHeader :title="greeting" :sub="session.company ? t('home.sub', { company: session.company.name }) : undefined" />
  <PageBody>
    <Card v-if="!session.company" :title="t('home.noCompany')" :desc="t('home.noCompanySub')" />
    <template v-else>
      <LoadError v-if="error" :message="error" @retry="load" />

      <div v-for="n in lost" :key="n.id" class="flex items-start gap-3 rounded-lg border border-bad/25 bg-card p-4" role="alert">
        <AlertTriangle class="mt-0.5 size-4 shrink-0 text-bad" aria-hidden="true" />
        <p class="text-[14px]">
          <span class="font-medium">{{ t('home.lost', { name: n.display_name ?? n.network_code }) }}</span>
          {{ ' ' }}<span class="text-muted-foreground">{{ t('home.lostSub') }}</span>
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-[1fr_320px]">
        <section v-if="networks" class="grid content-start gap-3">
          <h2 class="text-[16px] font-semibold tracking-tight">{{ t('net.title') }}</h2>
          <p v-if="networks.length === 0" class="rounded-lg border bg-card p-6 text-[14px] text-muted-foreground">{{ t('home.noNetworks') }}</p>
          <DataTable v-else :min="560">
            <thead>
              <tr>
                <th :class="th">{{ t('net.col.network') }}</th>
                <th :class="th">{{ t('net.col.status') }}</th>
                <th :class="[th, 'text-right']">{{ t('net.col.sites') }}</th>
                <th :class="th">{{ t('net.col.checked') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="n in networks" :key="n.id">
                <td :class="td">
                  <span class="block font-medium">{{ n.display_name ?? n.network_code }}</span>
                  <span class="font-mono text-[12px] text-muted-foreground tnum">{{ n.network_code }}</span>
                </td>
                <td :class="td"><Status :tone="tone[n.status]">{{ t(`net.status.${n.status}`) }}</Status></td>
                <td :class="[td, 'text-right tnum']">{{ n.sites }}</td>
                <td :class="[td, 'text-muted-foreground']">{{ formatAgo(n.last_checked_at) }}</td>
              </tr>
            </tbody>
          </DataTable>
        </section>

        <div class="grid content-start gap-6" :class="networks ? '' : 'lg:col-start-2'">
          <Card v-if="company" :title="t('nav.team')">
            <p class="text-[14px] tnum">{{ t('home.seatsOf', { used: company.seats_used, limit: company.seat_limit }) }}</p>
            <SeatBar class="mt-3" :used="company.seats_used" :pending="0" :limit="company.seat_limit" :label="t('home.seatsOf', { used: company.seats_used, limit: company.seat_limit })" />
          </Card>
          <Card :desc="t('home.metricsSoon')" />
        </div>
      </div>
    </template>
  </PageBody>
</template>
