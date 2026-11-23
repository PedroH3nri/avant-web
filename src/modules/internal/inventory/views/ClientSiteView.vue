<script setup lang="ts">
/**
 * Painel interno: um site de cliente com tudo o que é dele. Situação, contrato ativo da network,
 * faturamento, checklist do mês e os ad units ativos em árvore.
 */
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft, Building2, CircleDollarSign, Network } from 'lucide-vue-next'
import CompanyIcon from '@/components/CompanyIcon.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, locale, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { formatRevshare } from '@/modules/internal/contracts/rules'
import { clientInventoryService } from '@/modules/internal/inventory/service'
import type { ClientSiteDetail } from '@/modules/internal/inventory/types'
import RevenueStatusBadge from '@/modules/revenue/components/RevenueStatusBadge.vue'
import { approval, categoryLabel, tree } from '@/modules/sites/rules'
import { useSession } from '@/stores/session'

const route = useRoute()
const router = useRouter()
const session = useSession()
const site = ref<ClientSiteDetail | null>(null)
const notFound = ref(false)
const loadError = ref<string | null>(null)

const siteId = computed(() => String(route.params.id))
const canSeeChecklists = computed(() => session.can('internal.checklists.view'))
const canSeePriceRules = computed(() => session.can('internal.price_rules.view'))
const rows = computed(() => tree(site.value?.ad_units ?? []))
const subtitle = computed(() => {
  if (!site.value) return undefined
  if (!site.value.network) return `${site.value.client.name} · ${t('inv.awaitingGam')}`
  return t('sited.sub', { client: site.value.client.name, network: site.value.network.name })
})
const responsibleName = computed(() => {
  const responsible = site.value?.responsible
  if (!responsible) return t('sites.responsible.none')
  return responsible.name || responsible.email
})

/** Carrega o site; 404 mostra que ele não existe. */
async function load() {
  loadError.value = null
  notFound.value = false
  try {
    site.value = await clientInventoryService.site(siteId.value)
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) notFound.value = true
    else loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
watch(siteId, load, { immediate: true })
</script>

<template>
  <PageHeader :title="site?.domain ?? t('nav.sites')" :sub="subtitle">
    <template #back>
      <RouterLink to="/interno/sites" class="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground">
        <ArrowLeft class="size-4" />{{ t('nav.sites') }}
      </RouterLink>
    </template>
    <template v-if="site" #actions>
      <Button v-if="canSeePriceRules && site.network" variant="outline" @click="router.push(`/interno/regras-de-preco/${site.id}`)">
        <CircleDollarSign />{{ t('nav.priceRules') }}
      </Button>
      <Button v-if="site.network" variant="outline" @click="router.push(`/interno/networks/${site.network.id}`)"><Network />{{ t('sited.openNetwork') }}</Button>
      <Button variant="outline" @click="router.push(`/interno/clientes/${site.client.id}`)"><Building2 />{{ t('int.openClient') }}</Button>
    </template>
  </PageHeader>
  <PageBody class="lg:grid-cols-2 min-[1920px]:grid-cols-3">
    <LoadError v-if="loadError" class="lg:col-span-2 min-[1920px]:col-span-3" :message="loadError" @retry="load" />
    <Card v-else-if="notFound" class="lg:col-span-2 min-[1920px]:col-span-3" :desc="t('sited.notFound')" />
    <template v-if="site">
      <Card :title="t('netd.situation')">
        <dl class="-my-2 grid divide-y text-[14px]">
          <div class="grid gap-1 py-2 sm:grid-cols-[180px_1fr]">
            <dt class="text-muted-foreground">{{ t('sites.col.approval') }}</dt>
            <dd><Status :tone="approval(site).tone">{{ approval(site).label }}</Status></dd>
          </div>
          <div class="grid gap-1 py-2 sm:grid-cols-[180px_1fr]">
            <dt class="text-muted-foreground">{{ t('net.col.status') }}</dt>
            <dd>
              <Status :tone="site.status === 'active' ? 'ok' : 'neutral'">{{ site.status === 'active' ? t('sited.active') : t('sites.archivedBadge') }}</Status>
            </dd>
          </div>
          <div class="grid gap-1 py-2 sm:grid-cols-[180px_1fr]">
            <dt class="text-muted-foreground">{{ t('int.column.client') }}</dt>
            <dd class="flex min-w-0 items-center gap-2">
              <CompanyIcon :name="site.client.name" :image-url="site.client.image_url" :size="20" />
              <RouterLink :to="`/interno/clientes/${site.client.id}`" class="truncate hover:underline">{{ site.client.name }}</RouterLink>
            </dd>
          </div>
          <div class="grid gap-1 py-2 sm:grid-cols-[180px_1fr]">
            <dt class="text-muted-foreground">{{ t('sites.col.network') }}</dt>
            <dd class="min-w-0">
              <RouterLink v-if="site.network" :to="`/interno/networks/${site.network.id}`" class="hover:underline">
                {{ site.network.name }} <span class="font-mono text-[13px] text-muted-foreground">· {{ site.network.network_code }}</span>
              </RouterLink>
              <span v-else class="text-muted-foreground">{{ t('inv.awaitingGam') }}</span>
            </dd>
          </div>
          <div class="grid gap-1 py-2 sm:grid-cols-[180px_1fr]">
            <dt class="text-muted-foreground">{{ t('sites.col.category') }}</dt>
            <dd>{{ categoryLabel(site.category) }}</dd>
          </div>
          <div class="grid gap-1 py-2 sm:grid-cols-[180px_1fr]">
            <dt class="text-muted-foreground">{{ t('sites.col.responsible') }}</dt>
            <dd class="truncate">{{ responsibleName }}</dd>
          </div>
          <div class="grid gap-1 py-2 sm:grid-cols-[180px_1fr]">
            <dt class="text-muted-foreground">{{ t('netd.synced') }}</dt>
            <dd class="tnum">{{ site.synced_at ? formatDate(site.synced_at) : t('int.none.dash') }}</dd>
          </div>
        </dl>
      </Card>

      <div class="grid content-start gap-6">
        <Card :title="t('sited.contract')" :desc="t('sited.contractDesc')">
          <template v-if="site.contract">
            <div class="text-[28px] font-semibold tracking-[-0.03em] tnum">{{ formatRevshare(site.contract.revshare, locale) }}</div>
            <div class="mt-1 text-[13px] text-muted-foreground">
              {{ t('netd.contractSince', { source: t(`ct.source.${site.contract.source}`), when: formatDate(site.contract.started_at, false) }) }}
            </div>
          </template>
          <p v-else class="text-[14px] text-muted-foreground">{{ site.network ? t('netd.noContract') : t('sited.noNetwork') }}</p>
        </Card>
        <Card :title="t('int.column.revenue')">
          <RevenueStatusBadge :status="site.revenue_status" />
        </Card>
      </div>

      <Card v-if="canSeeChecklists" class="self-start lg:col-span-2 min-[1920px]:col-span-1" :title="t('check.col.checklist')" :desc="t('sited.checklistDesc')">
        <div v-if="site.checklist" class="flex flex-wrap items-center justify-between gap-3">
          <Status v-if="site.checklist.complete" tone="ok">{{ t('check.done') }}</Status>
          <Status v-else tone="ochre">{{ t('check.okCount', { done: site.checklist.done, total: site.checklist.total }) }}</Status>
          <Button size="sm" variant="outline" @click="router.push(`/interno/checklists/${site.checklist.id}`)">{{ t('sited.openChecklist') }}</Button>
        </div>
        <p v-else class="text-[14px] text-muted-foreground">{{ t('sited.noChecklist') }}</p>
      </Card>

      <section class="grid gap-3 lg:col-span-2 min-[1920px]:col-span-3">
        <h2 class="text-[13px] font-medium text-muted-foreground">{{ t('sited.units') }}</h2>
        <DataTable :min="640">
          <thead>
            <tr>
              <th :class="th">{{ t('site.units') }}</th>
              <th :class="th">{{ t('site.code') }}</th>
              <th :class="th">{{ t('sited.link') }}</th>
              <th :class="th">{{ t('sites.col.synced') }}</th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="4" :empty="rows.length === 0" :desc="t('site.noUnits')" />
            <tr v-for="{ unit: adUnit, depth } in rows" :key="adUnit.id" class="hover:bg-muted">
              <td :class="td">
                <span class="inline-flex items-center gap-2" :style="{ paddingLeft: `${depth * 20}px` }">
                  <span v-if="depth" class="text-muted-foreground" aria-hidden="true">└</span>
                  <span class="font-medium">{{ adUnit.name }}</span>
                </span>
              </td>
              <td :class="[td, 'font-mono text-[13px] text-muted-foreground']">{{ adUnit.code ?? '' }}</td>
              <td :class="[td, 'text-muted-foreground']">
                <Badge v-if="adUnit.site_manual">{{ t('site.manual') }}</Badge>
                <template v-else>{{ t('sited.link.auto') }}</template>
              </td>
              <td :class="[td, 'whitespace-nowrap text-muted-foreground tnum']">{{ formatDate(adUnit.synced_at, false) }}</td>
            </tr>
          </tbody>
        </DataTable>
      </section>
    </template>
  </PageBody>
</template>
