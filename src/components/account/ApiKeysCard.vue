<script setup lang="ts">
/**
 * Chaves de API da Empresa ativa. Quem tem api_keys.manage cria e vê as de todos; sem a
 * permissão, a lista traz só as próprias (de quando a pessoa tinha a permissão).
 */
import { computed, onMounted, ref } from 'vue'
import { toast } from 'vue-sonner'
import { Plus } from 'lucide-vue-next'
import ApiKeyDialog from '@/components/account/ApiKeyDialog.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import DataTable from '@/components/ui/DataTable.vue'
import LoadError from '@/components/LoadError.vue'
import { keyState, sortKeys, type KeyState } from '@/lib/account'
import { api, ApiError } from '@/lib/api'
import { errorText, formatAgo, formatDate, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import type { ApiKey, Items } from '@/lib/types'
import { useSession } from '@/stores/session'

const session = useSession()
const canManage = computed(() => session.can('api_keys.manage'))
const keys = ref<ApiKey[] | null>(null)
const loadError = ref<string | null>(null)
const creating = ref(false)
const revoking = ref<ApiKey | null>(null)
const busy = ref(false)
const revokeOpen = computed({
  get: () => revoking.value !== null,
  set: (v) => {
    if (!v) revoking.value = null
  },
})
const showOwner = computed(() => canManage.value && (keys.value ?? []).some((k) => k.owner.id !== session.me?.user.id))
const tones: Record<KeyState, 'neutral' | 'ochre' | 'bad'> = {
  active: 'neutral',
  expired: 'ochre',
  revoked: 'bad',
}

async function load() {
  loadError.value = null
  try {
    keys.value = sortKeys((await api.get<Items<ApiKey>>('/api-keys')).items)
  } catch (e) {
    loadError.value = errorText(e instanceof ApiError ? e.code : 'unknown')
  }
}
onMounted(load)

function created(key: ApiKey) {
  keys.value = sortKeys([key, ...(keys.value ?? [])])
}

async function revoke() {
  const key = revoking.value
  if (!key) return
  busy.value = true
  try {
    await api.delete(`/api-keys/${key.id}`)
    revoking.value = null
    toast.success(t('key.revoked'))
    await load()
  } catch (e) {
    toast.error(errorText(e instanceof ApiError ? e.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

const permsText = (n: number) => (n === 1 ? t('key.perm1') : t('key.permsN', { n }))
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
        <tr v-for="k in keys" :key="k.id" :class="keyState(k) !== 'active' && 'text-muted-foreground'">
          <td :class="td">
            <div class="flex flex-wrap items-center gap-2 font-medium">
              {{ k.name }}<Badge v-if="keyState(k) !== 'active'" :tone="tones[keyState(k)]">{{ t(`key.state.${keyState(k)}`) }}</Badge>
            </div>
          </td>
          <td :class="td">
            <code class="font-mono text-[13px]">avk_{{ k.prefix }}…</code>
          </td>
          <td v-if="showOwner" :class="[td, 'whitespace-nowrap']">
            {{ k.owner.name }}
          </td>
          <td :class="[td, 'whitespace-nowrap']" :title="k.permissions.join(', ')">
            {{ permsText(k.permissions.length) }}
          </td>
          <td :class="[td, 'whitespace-nowrap']">
            <time v-if="k.last_used_at" :datetime="k.last_used_at" :title="formatDate(k.last_used_at)">{{ formatAgo(k.last_used_at) }}</time
            ><template v-else>{{ t('common.never') }}</template>
          </td>
          <td :class="[td, 'whitespace-nowrap']">
            {{ formatDate(k.expires_at, false) }}
          </td>
          <td :class="[td, 'text-right']">
            <Button
              v-if="keyState(k) === 'active' && (canManage || k.owner.id === session.me?.user.id)"
              variant="destructive"
              size="sm"
              :aria-label="t('key.revokeLabel', { name: k.name })"
              @click="revoking = k"
              >{{ t('key.revoke') }}</Button
            >
          </td>
        </tr>
      </tbody>
    </DataTable>
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
