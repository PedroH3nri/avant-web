<script setup lang="ts">
/** Situação da conta: networks sem acesso, a lista das networks e as vagas da Empresa ativa. */
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { AlertTriangle } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import SeatBar from '@/components/ui/SeatBar.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import LoadError from '@/components/LoadError.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatAgo, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import type { CompanyDetail } from '@/modules/company/types'
import type { Network, NetworkStatus } from '@/modules/networks/types'
import { useSession } from '@/stores/session'
import { companyService } from '@/modules/company/service'
import { networkService } from '@/modules/networks/service'

const session = useSession()
const router = useRouter()
const company = ref<CompanyDetail | null>(null)
const networks = ref<Network[] | null>(null)
const error = ref<string | null>(null)

const lost = computed(() => (networks.value ?? []).filter((network) => network.status === 'error'))
const hasSeats = computed(() => company.value !== null && company.value.seat_limit !== null)
const tone: Record<NetworkStatus, 'ok' | 'warn' | 'bad' | 'neutral'> = {
  pending: 'warn',
  connected: 'ok',
  error: 'bad',
  disconnected: 'neutral',
}

/** Carrega a Empresa e as networks. */
async function load() {
  error.value = null
  if (!session.company) return
  try {
    const [companyDetail, networkPage] = await Promise.all([
      companyService.show(),
      session.can('network.view') ? networkService.options() : Promise.resolve(null),
    ])
    company.value = companyDetail
    networks.value = networkPage?.items ?? null
  } catch (failure) {
    error.value = failure instanceof ApiError ? errorText(failure.code) : errorText('unknown')
  }
}
onMounted(load)
watch(() => session.me?.active_company_id, load)
</script>

<template>
  <div class="grid content-start gap-4">
    <LoadError v-if="error" :message="error" @retry="load" />

    <div v-for="network in lost" :key="network.id" class="flex items-start gap-3 rounded-lg border border-bad/25 bg-card p-4" role="alert">
      <AlertTriangle class="mt-0.5 size-4 shrink-0 text-bad" aria-hidden="true" />
      <p class="text-[14px]">
        <span class="font-medium">{{ t('home.lost', { name: network.display_name ?? network.network_code }) }}</span>
        {{ ' ' }}<span class="text-muted-foreground">{{ t('home.lostSub') }}</span>
      </p>
      <RouterLink to="/networks" class="ml-auto shrink-0 text-[14px] text-link hover:underline">{{ t('home.reconnect') }}</RouterLink>
    </div>

    <div class="grid gap-4" :class="networks && hasSeats ? 'lg:grid-cols-[1fr_280px]' : ''">
      <DataTable v-if="networks" :min="560">
        <thead>
          <tr>
            <th :class="th">{{ t('net.col.network') }}</th>
            <th :class="th">{{ t('net.col.status') }}</th>
            <th :class="[th, 'text-right']">{{ t('net.col.sites') }}</th>
            <th :class="th">{{ t('net.col.checked') }}</th>
          </tr>
        </thead>
        <tbody>
          <TableState :cols="4" :empty="networks.length === 0" :desc="t('home.noNetworks')">
            <Button v-if="session.can('network.connect')" size="sm" @click="router.push('/networks/conectar')">{{ t('net.connect') }}</Button>
          </TableState>
          <tr v-for="network in networks" :key="network.id">
            <td :class="td">
              <span class="block font-medium">{{ network.display_name ?? network.network_code }}</span>
              <span class="font-mono text-[12px] text-muted-foreground tnum">{{ network.network_code }}</span>
            </td>
            <td :class="td"><Status :tone="tone[network.status]">{{ t(`net.status.${network.status}`) }}</Status></td>
            <td :class="[td, 'text-right tnum']">{{ network.sites }}</td>
            <td :class="[td, 'text-muted-foreground']">{{ formatAgo(network.last_checked_at) }}</td>
          </tr>
        </tbody>
      </DataTable>
      <div v-if="company && company.seat_limit !== null" class="grid content-start gap-3 rounded-lg border p-4">
        <p class="text-[14px] font-medium">{{ t('nav.team') }}</p>
        <p class="text-[14px] tnum">{{ t('home.seatsOf', { used: company.seats_used, limit: company.seat_limit }) }}</p>
        <SeatBar :used="company.seats_used" :pending="0" :limit="company.seat_limit" :label="t('home.seatsOf', { used: company.seats_used, limit: company.seat_limit })" />
      </div>
      <p v-if="!networks && !hasSeats && !error" class="text-[13px] text-muted-foreground">{{ t('home.nothingToShow') }}</p>
    </div>
  </div>
</template>
