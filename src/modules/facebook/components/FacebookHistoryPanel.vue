<script setup lang="ts">
/** Histórico do Facebook: quem mudou o quê, no Avant ou direto no Facebook, o mais novo primeiro. */
import { ref, watch, onMounted } from 'vue'
import { History } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Select from '@/components/ui/Select.vue'
import Pagination from '@/components/ui/Pagination.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { changeText } from '@/modules/facebook/rules'
import { facebookReader } from '@/modules/facebook/service'
import type { FacebookChange } from '@/modules/facebook/types'

const props = defineProps<{ internal: boolean; companyId: string; accountId?: string; objectId?: string; accountName: (accountId: string) => string; clientName: (companyId: string) => string }>()

const reader = facebookReader(props.internal)
const changes = ref<FacebookChange[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const origin = ref('')
const loadError = ref<string | null>(null)
const originOptions = [
  { value: '', label: t('fb.history.allOrigins') },
  { value: 'avant', label: t('fb.history.origin.avant') },
  { value: 'rule', label: t('fb.history.origin.rule') },
  { value: 'limit', label: t('fb.history.origin.limit') },
  { value: 'facebook', label: t('fb.history.origin.facebook') },
]

/** Carrega a página do histórico com os filtros. */
async function load() {
  loadError.value = null
  try {
    const found = await reader.changes({
      page: page.value,
      origin: origin.value || undefined,
      account_id: props.accountId || undefined,
      object_id: props.objectId || undefined,
      company_id: props.internal ? props.companyId || undefined : undefined,
    })
    changes.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Volta para a primeira página quando um filtro muda. */
function refilter() {
  if (page.value === 1) void load()
  else page.value = 1
}

onMounted(load)
watch(page, load)
watch([origin, () => props.companyId], refilter)
</script>

<template>
  <section class="grid gap-3">
    <Select v-model="origin" :aria-label="t('fb.history.origin')" class="w-full sm:w-[220px]" :options="originOptions" />
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="internal ? 960 : 860">
      <thead>
        <tr>
          <th :class="th">{{ t('fb.history.col.when') }}</th>
          <th :class="th">{{ t('fb.history.col.who') }}</th>
          <th v-if="internal" :class="th">{{ t('fb.col.client') }}</th>
          <th :class="th">{{ t('fb.history.col.where') }}</th>
          <th :class="th">{{ t('fb.history.col.what') }}</th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="internal ? 5 : 4" :loading="!changes" :empty="changes?.length === 0" :icon="History" :desc="t('fb.history.empty')" />
        <tr v-for="change in changes ?? []" :key="change.id" class="hover:bg-muted">
          <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground tnum']">{{ formatDate(change.happened_at) }}</td>
          <td :class="td">{{ change.origin === 'avant' ? (change.actor_name ?? t('fb.history.someone')) : t(`fb.history.origin.${change.origin}` as Key) }}</td>
          <td v-if="internal" :class="td">{{ clientName(change.company_id) }}</td>
          <td :class="td">
            <span class="block">{{ change.object_name ?? accountName(change.account_id) }}</span>
            <span v-if="change.object_name" class="block text-[12px] text-muted-foreground">{{ accountName(change.account_id) }}</span>
          </td>
          <td :class="td">{{ t(changeText(change).key, changeText(change).params) }}</td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
  </section>
</template>
