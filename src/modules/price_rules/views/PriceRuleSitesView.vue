<script setup lang="ts">
/** Lista dos sites com a regra de preço: ligada ou não, controle, blocos com a Automática e regras ativas; no interno, de todos os clientes. */
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDebounceFn } from '@vueuse/core'
import { CircleDollarSign, Search } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, locale, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { priceRulesPath, siteStatus } from '@/modules/price_rules/rules'
import { priceRuleService } from '@/modules/price_rules/service'
import type { PriceRuleSiteSummary } from '@/modules/price_rules/types'

const route = useRoute()
const router = useRouter()
const internal = route.meta.internal === true
const service = priceRuleService(internal)
const base = priceRulesPath(internal)
const sites = ref<PriceRuleSiteSummary[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const query = ref('')
const loadError = ref<string | null>(null)

const integer = computed(() => new Intl.NumberFormat(locale.value))
const columns = computed(() => (internal ? 7 : 6))

/** Carrega a página dos sites. */
async function load() {
  loadError.value = null
  try {
    const found = await service.sites({ page: page.value, q: query.value.trim() })
    if (found.items.length === 0 && page.value > 1 && found.pages > 0) {
      page.value = found.pages
      return
    }
    sites.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Volta para a primeira página quando a busca muda. */
function refilter() {
  if (page.value === 1) void load()
  else page.value = 1
}

const searchLater = useDebounceFn(refilter, 300)

onMounted(load)
watch(page, load)
watch(query, searchLater)
</script>

<template>
  <PageHeader :title="t('nav.priceRules')" :sub="internal ? t('pr.subInternal') : t('pr.sub')" />
  <PageBody>
    <div class="relative w-full sm:w-[280px]">
      <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
      <Input v-model="query" :aria-label="t('pr.search')" class="h-9 bg-card pl-9" :placeholder="t('pr.searchPlaceholder')" />
    </div>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="internal ? 900 : 760">
      <thead>
        <tr>
          <th :class="th">{{ t('pr.col.site') }}</th>
          <th v-if="internal" :class="th">{{ t('pr.col.client') }}</th>
          <th :class="th">{{ t('pr.col.status') }}</th>
          <th :class="[th, 'text-right']">{{ t('pr.col.control') }}</th>
          <th :class="[th, 'text-right']">{{ t('pr.col.blocks') }}</th>
          <th :class="[th, 'text-right']">{{ t('pr.col.activeRules') }}</th>
          <th :class="th"><span class="sr-only">{{ t('pr.col.actions') }}</span></th>
        </tr>
      </thead>
      <tbody>
        <TableState v-if="!sites || sites.length === 0" :cols="columns" :loading="!sites" :empty="sites?.length === 0" :icon="CircleDollarSign" :desc="query ? t('pr.emptySearch') : t('pr.empty')" />
        <tr v-for="site in sites ?? []" :key="site.site_id" class="hover:bg-muted">
          <td :class="td">
            <RouterLink :to="`${base}/${site.site_id}`" class="font-mono text-[13px] font-medium hover:underline">{{ site.domain }}</RouterLink>
            <div v-if="site.currency" class="text-[12px] text-muted-foreground">{{ site.currency }}</div>
          </td>
          <td v-if="internal" :class="td">{{ site.client ?? '—' }}</td>
          <td :class="td">
            <Status :tone="siteStatus(site).tone">{{ t(siteStatus(site).key, { currency: site.currency ?? '' }) }}</Status>
          </td>
          <td :class="[td, 'text-right tnum']">{{ site.active ? `${site.control_percent}%` : '—' }}</td>
          <td :class="[td, 'text-right tnum']">{{ integer.format(site.automatic_blocks) }}</td>
          <td :class="[td, 'text-right tnum']">{{ site.active ? integer.format(site.active_rules) : '—' }}</td>
          <td :class="[td, 'text-right']">
            <Button size="sm" variant="outline" @click="router.push(`${base}/${site.site_id}`)">{{ t('pr.open') }}</Button>
          </td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
  </PageBody>
</template>
