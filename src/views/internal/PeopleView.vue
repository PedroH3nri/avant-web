<script setup lang="ts">
/** Painel interno: buscar pessoas, desativar ou reativar a conta e zerar o 2FA. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import { DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { MoreHorizontal, Search } from 'lucide-vue-next'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { api, ApiError } from '@/lib/api'
import { errorText, formatAgo, formatDate, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import type { Items, Person } from '@/lib/types'
import { useSession } from '@/stores/session'

type Action = 'disable' | 'reset-mfa'

const session = useSession()
const q = ref('')
const people = ref<Person[] | null>(null)
const loadError = ref<string | null>(null)
const target = ref<{ person: Person; action: Action } | null>(null)
const busy = ref(false)
const open = computed({
  get: () => target.value !== null,
  set: (v) => {
    if (!v) target.value = null
  },
})

const fail = (e: unknown) => toast.error(errorText(e instanceof ApiError ? e.code : 'unknown'))

async function search() {
  loadError.value = null
  const term = q.value.trim()
  if (term.length < 3) {
    people.value = null
    return
  }
  try {
    people.value = (await api.get<Items<Person>>('/internal/users', { q: term })).items
  } catch (e) {
    loadError.value = errorText(e instanceof ApiError ? e.code : 'unknown')
  }
}
let timer: ReturnType<typeof setTimeout> | undefined
watch(q, () => {
  clearTimeout(timer)
  timer = setTimeout(search, 300)
})

function update(userId: string, patch: Partial<Person>) {
  people.value = people.value?.map((p) => (p.user.id === userId ? { ...p, ...patch } : p)) ?? null
}

async function enable(p: Person) {
  try {
    await api.post(`/internal/users/${p.user.id}/enable`)
    update(p.user.id, { status: 'active' })
    toast.success(t('int.enabledNow'))
  } catch (e) {
    fail(e)
  }
}

async function confirm() {
  const x = target.value
  if (!x) return
  busy.value = true
  try {
    await api.post(`/internal/users/${x.person.user.id}/${x.action}`)
    if (x.action === 'disable') {
      update(x.person.user.id, { status: 'disabled' })
      toast.success(t('int.disabledNow'))
    } else {
      update(x.person.user.id, { mfa_enabled: false })
      toast.success(t('int.mfaReset'))
    }
    target.value = null
  } catch (e) {
    fail(e)
  } finally {
    busy.value = false
  }
}

const isMe = (p: Person) => p.user.id === session.me?.user.id
</script>

<template>
  <PageHeader :title="t('int.people')" :sub="t('int.peopleSub')" />
  <PageBody>
    <div class="relative w-full sm:w-96">
      <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
      <Input v-model="q" type="search" :aria-label="t('int.peopleSearch')" class="h-10 bg-card pl-9" :placeholder="t('int.peopleSearch')" autofocus />
    </div>
    <LoadError v-if="loadError" :message="loadError" @retry="search" />
    <DataTable v-else :min="820">
      <thead>
        <tr>
          <th :class="th">{{ t('int.person') }}</th>
          <th :class="th">{{ t('int.companies') }}</th>
          <th :class="th">2FA</th>
          <th :class="th">{{ t('int.lastLogin') }}</th>
          <th :class="th">{{ t('team.status') }}</th>
          <th :class="[th, 'w-12']"><span class="sr-only">{{ t('int.open') }}</span></th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="6" :empty="!people?.length" :icon="Search" :desc="people === null ? t('int.peopleHint') : t('int.peopleNone')" />
        <tr v-for="p in people ?? []" :key="p.user.id">
          <td :class="td">
            <div class="font-medium">{{ p.user.name }}</div>
            <div class="text-[13px] text-muted-foreground">{{ p.user.email }}</div>
          </td>
          <td :class="td">
            <div class="flex flex-wrap gap-1.5">
              <template v-for="c in p.companies" :key="c.id">
                <Badge v-if="c.is_internal">Groone</Badge>
                <RouterLink v-else :to="`/interno/clientes/${c.id}`" class="text-[13px] text-link hover:underline">{{ c.name }}</RouterLink>
              </template>
              <span v-if="!p.companies.length" class="text-muted-foreground">–</span>
            </div>
          </td>
          <td :class="[td, 'whitespace-nowrap text-[13px]']">{{ p.mfa_enabled ? t('int.mfaOn') : t('int.mfaOff') }}</td>
          <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground']">
            <time v-if="p.last_login_at" :datetime="p.last_login_at" :title="formatDate(p.last_login_at)">{{ formatAgo(p.last_login_at) }}</time>
            <template v-else>{{ t('common.never') }}</template>
          </td>
          <td :class="td">
            <Status :tone="p.status === 'active' ? 'ok' : 'bad'">{{ t(`int.user.${p.status}`) }}</Status>
          </td>
          <td :class="td">
            <DropdownMenuRoot v-if="!isMe(p)">
              <DropdownMenuTrigger as-child>
                <Button variant="ghost" size="icon" class="size-8" :aria-label="t('int.actionsFor', { name: p.user.name })"><MoreHorizontal /></Button>
              </DropdownMenuTrigger>
              <MenuContent align="end" class="w-52">
                <MenuItem v-if="p.mfa_enabled" @select="target = { person: p, action: 'reset-mfa' }">{{ t('int.resetMfa') }}</MenuItem>
                <MenuItem v-if="p.status === 'disabled'" @select="enable(p)">{{ t('int.enable') }}</MenuItem>
                <MenuItem v-else danger @select="target = { person: p, action: 'disable' }">{{ t('int.disable') }}</MenuItem>
              </MenuContent>
            </DropdownMenuRoot>
          </td>
        </tr>
      </tbody>
    </DataTable>
  </PageBody>
  <ConfirmDialog
    v-model:open="open"
    :title="
      target?.action === 'disable' ? t('int.disableTitle', { name: target.person.user.name }) : t('int.resetMfaTitle', { name: target?.person.user.name ?? '' })
    "
    :desc="target?.action === 'disable' ? t('int.disableDesc') : t('int.resetMfaDesc')"
    :action="target?.action === 'disable' ? t('int.disable') : t('int.resetMfa')"
    :busy="busy"
    @confirm="confirm"
  />
</template>
