<script setup lang="ts">
/**
 * Chaves de API da Empresa ativa. Quem tem api_keys.manage cria e vê as de todos; sem a
 * permissão, a lista traz só as próprias (de quando a pessoa tinha a permissão).
 */
import { computed, onMounted, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import { Plus } from 'lucide-vue-next'
import ApiKeyDialog from '@/modules/account/components/ApiKeyDialog.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Pagination from '@/components/ui/Pagination.vue'
import LoadError from '@/components/LoadError.vue'
import { keyState, sortKeys, type KeyState } from '@/modules/account/rules'
import { ApiError } from '@/lib/api'
import { errorText, formatAgo, formatDate, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import type { ApiKey } from '@/modules/account/types'
import { useSession } from '@/stores/session'
import { accountService } from '@/modules/account/service'

const session = useSession()
const canManage = computed(() => session.can('api_keys.manage'))
const keys = ref<ApiKey[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)
const creating = ref(false)
const revoking = ref<ApiKey | null>(null)
const busy = ref(false)
const revokeOpen = computed({
  get: () => revoking.value !== null,
  set: (value) => {
    if (!value) revoking.value = null
  },
})
const showOwner = computed(() => canManage.value && (keys.value ?? []).some((key) => key.owner.id !== session.me?.user.id))
const tones: Record<KeyState, 'neutral' | 'ochre' | 'bad'> = {
  active: 'neutral',
  expired: 'ochre',
  revoked: 'bad',
}

/** Carrega uma página das chaves de API, as ativas primeiro; se ela ficou vazia, volta uma. */
async function load() {
  loadError.value = null
  try {
    const found = await accountService.apiKeys({ page: page.value })
    if (found.items.length === 0 && page.value > 1) {
      page.value = Math.max(1, found.pages)
      return
    }
    keys.value = sortKeys(found.items)
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)
watch(page, load)

/** Volta para a primeira página, onde a chave recém-criada aparece. */
function created() {
  if (page.value === 1) void load()
  else page.value = 1
}

/** Revoga a chave escolhida. */
async function revoke() {
  const key = revoking.value
  if (!key) return
  busy.value = true
  try {
    await accountService.revokeApiKey(key.id)
    revoking.value = null
    toast.success(t('key.revoked'))
    await load()
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

/** Texto com a quantidade de permissões da chave. */
const permsText = (count: number) => (count === 1 ? t('key.perm1') : t('key.permsN', { n: count }))
</script>

<template>
  <Card :title="t('key.title')">
    <template #desc>
      {{ t('key.desc', { company: session.company?.name ?? '' }) }}
      <template v-if="canManage"> {{ t('key.descAll') }}</template>
    </template>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <p v-else-if="keys && !keys.length" class="text-[14px] text-muted-foreground">
      {{ t('key.empty') }}
    </p>
    <DataTable v-else-if="keys" :min="720" class="-mx-px">
      <thead>
        <tr>
          <th :class="th">{{ t('key.name') }}</th>
          <th :class="th">{{ t('key.key') }}</th>
          <th v-if="showOwner" :class="th">{{ t('key.owner') }}</th>
          <th :class="th">{{ t('key.perms') }}</th>
          <th :class="th">{{ t('key.lastUsed') }}</th>
          <th :class="th">{{ t('key.expires') }}</th>
          <th :class="th">
            <span class="sr-only">{{ t('key.revoke') }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="key in keys" :key="key.id" :class="keyState(key) !== 'active' && 'text-muted-foreground'">
          <td :class="td">
            <div class="flex flex-wrap items-center gap-2 font-medium">
              {{ key.name }}<Badge v-if="keyState(key) !== 'active'" :tone="tones[keyState(key)]">{{ t(`key.state.${keyState(key)}`) }}</Badge>
            </div>
          </td>
          <td :class="td">
            <code class="font-mono text-[13px]">avk_{{ key.prefix }}…</code>
          </td>
          <td v-if="showOwner" :class="[td, 'whitespace-nowrap']">
            {{ key.owner.name }}
          </td>
          <td :class="[td, 'whitespace-nowrap']" :title="key.permissions.join(', ')">
            {{ permsText(key.permissions.length) }}
          </td>
          <td :class="[td, 'whitespace-nowrap']">
            <time v-if="key.last_used_at" :datetime="key.last_used_at" :title="formatDate(key.last_used_at)">{{ formatAgo(key.last_used_at) }}</time
            ><template v-else>{{ t('common.never') }}</template>
          </td>
          <td :class="[td, 'whitespace-nowrap']">
            {{ formatDate(key.expires_at, false) }}
          </td>
          <td :class="[td, 'text-right']">
            <Button
              v-if="keyState(key) === 'active' && (canManage || key.owner.id === session.me?.user.id)"
              variant="destructive"
              size="sm"
              :aria-label="t('key.revokeLabel', { name: key.name })"
              @click="revoking = key"
              >{{ t('key.revoke') }}</Button
            >
          </td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="keys && keys.length" v-model:page="page" :total="total" :pages="pages" class="mt-3" />
    <template v-if="canManage" #footer>
      <Button @click="creating = true"><Plus />{{ t('key.create') }}</Button>
    </template>
  </Card>
  <ApiKeyDialog v-model:open="creating" @created="created" />
  <ConfirmDialog
    v-model:open="revokeOpen"
    :title="t('key.revokeTitle', { name: revoking?.name ?? '' })"
    :desc="t('key.revokeDesc')"
    :action="t('key.revoke')"
    :busy="busy"
    @confirm="revoke"
  />
</template>
