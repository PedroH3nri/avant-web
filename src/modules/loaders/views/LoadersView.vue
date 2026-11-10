<script setup lang="ts">
/** Lista dos loaders: no painel do cliente os da Empresa, no interno os de todos os clientes (com a coluna Cliente). */
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDebounceFn } from '@vueuse/core'
import { LoaderCircle, Plus, Search } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import Pagination from '@/components/ui/Pagination.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { ADBLOCK_SHORT, loaderPermission, loadersPath, STYLE_LABEL } from '@/modules/loaders/rules'
import { loaderService } from '@/modules/loaders/service'
import type { Loader } from '@/modules/loaders/types'
import { useSession } from '@/stores/session'

const route = useRoute()
const router = useRouter()
const session = useSession()
const internal = route.meta.internal === true
const service = loaderService(internal)
const base = loadersPath(internal)
const loaders = ref<Loader[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const query = ref('')
const loadError = ref<string | null>(null)

const canManage = computed(() => session.can(loaderPermission(internal, 'manage')))
const columns = computed(() => (internal ? 6 : 5))

/** Carrega a página dos loaders com a busca. */
async function load() {
  loadError.value = null
  try {
    const found = await service.list({ page: page.value, q: query.value.trim() })
    if (found.items.length === 0 && page.value > 1 && found.pages > 0) {
      page.value = found.pages
      return
    }
    loaders.value = found.items
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

/** O modelo do loader em uma linha: GroOne com o blur ou Tela cheia com a animação, mais o tempo máximo. */
function templateText(loader: Loader): string {
  const look = loader.template === 'groone' ? t('ld.summary.groone', { n: loader.blur }) : t('ld.summary.solid', { style: t(STYLE_LABEL[loader.style]).toLowerCase() })
  return t('ld.summary.upTo', { look, n: loader.max_seconds })
}
</script>

<template>
  <PageHeader :title="t('nav.loaders')" :sub="internal ? t('ld.subInternal') : t('ld.sub')">
    <template v-if="canManage" #actions>
      <Button @click="router.push(`${base}/novo`)"><Plus />{{ t('ld.new') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <div class="relative w-full sm:w-[280px]">
      <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
      <Input v-model="query" :aria-label="t('ld.search')" class="h-9 bg-card pl-9" :placeholder="t('ld.searchPlaceholder')" />
    </div>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="internal ? 860 : 720">
      <thead>
        <tr>
          <th :class="th">{{ t('ld.col.loader') }}</th>
          <th v-if="internal" :class="th">{{ t('ld.col.client') }}</th>
          <th :class="th">{{ t('ld.col.template') }}</th>
          <th :class="th">{{ t('ld.col.adblock') }}</th>
          <th :class="th">{{ t('ld.col.tags') }}</th>
          <th :class="th">{{ t('ld.col.updated') }}</th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="columns" :loading="!loaders" :empty="loaders?.length === 0" :icon="LoaderCircle" :desc="query ? t('ld.emptySearch') : t('ld.empty')" />
        <tr v-for="loader in loaders ?? []" :key="loader.id" class="hover:bg-muted">
          <td :class="td">
            <button type="button" class="flex items-center gap-3 text-left" @click="router.push(`${base}/${loader.id}`)">
              <span class="grid size-9 shrink-0 place-items-center rounded-md border" :style="{ background: loader.background }" aria-hidden="true">
                <span v-if="loader.template === 'groone'" class="size-4 rounded-full border-2 border-black/15" :style="{ borderTopColor: loader.accent }" />
                <span v-else class="h-1 w-5 rounded-full" :style="{ background: loader.accent }" />
              </span>
              <span class="font-medium hover:underline">{{ loader.name }}</span>
            </button>
          </td>
          <td v-if="internal" :class="td">{{ loader.client?.name ?? '—' }}</td>
          <td :class="td">{{ templateText(loader) }}</td>
          <td :class="td">
            <span :class="loader.adblock === 'off' ? 'text-muted-foreground' : undefined">{{ t(ADBLOCK_SHORT[loader.adblock]) }}</span>
          </td>
          <td :class="[td, 'text-[13px]']">
            <template v-if="loader.tags.length">{{ loader.tags.map((tag) => `${tag.domain} · ${tag.name}`).join(', ') }}</template>
            <span v-else class="text-muted-foreground">{{ t('ld.noTags') }}</span>
          </td>
          <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground tnum']">{{ formatDate(loader.updated_at) }}</td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
  </PageBody>
</template>
