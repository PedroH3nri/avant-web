<script setup lang="ts">
/** Painel interno: buscar pessoas, desativar ou reativar a conta e zerar o 2FA. */
import { computed, ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { toast } from 'vue-sonner'
import { DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { ArrowLeft, MoreHorizontal, Search } from 'lucide-vue-next'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Input from '@/components/ui/Input.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatAgo, formatDate, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import type { Person } from '@/modules/internal/people/types'
import { useSession } from '@/stores/session'
import { peopleService } from '@/modules/internal/people/service'

type Action = 'disable' | 'reset-mfa'

const session = useSession()
const searchText = ref('')
const SEARCH_DELAY_MS = 300
const people = ref<Person[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)
const target = ref<{ person: Person; action: Action } | null>(null)
const busy = ref(false)
const open = computed({
  get: () => target.value !== null,
  set: (value) => {
    if (!value) target.value = null
  },
})

/** Mostra o erro num aviso. */
const fail = (error: unknown) => toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))

/** Busca a página das pessoas a partir de 3 caracteres. */
async function search() {
  loadError.value = null
  const term = searchText.value.trim()
  if (term.length < 3) {
    people.value = null
    total.value = 0
    pages.value = 0
    return
  }
  try {
    const found = await peopleService.search(term, page.value)
    people.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
/** Volta para a página 1 com a busca nova, ou busca de novo se já estiver nela. */
function firstPage() {
  if (page.value === 1) void search()
  else page.value = 1
}
const searchPeople = useDebounceFn(firstPage, SEARCH_DELAY_MS)
watch(searchText, () => void searchPeople())
watch(page, search)

/** Atualiza uma pessoa na lista. */
function update(userId: string, patch: Partial<Person>) {
  people.value = people.value?.map((person) => (person.user.id === userId ? { ...person, ...patch } : person)) ?? null
}

/** Reativa a conta da pessoa. */
async function enable(person: Person) {
  try {
    await peopleService.act(person.user.id, 'enable')
    update(person.user.id, { status: 'active' })
    toast.success(t('int.enabledNow'))
  } catch (error) {
    fail(error)
  }
}

/** Executa a ação confirmada: desativar a conta ou desligar o 2FA. */
async function confirm() {
  const current = target.value
  if (!current) return
  busy.value = true
  try {
    await peopleService.act(current.person.user.id, current.action)
    if (current.action === 'disable') {
      update(current.person.user.id, { status: 'disabled' })
      toast.success(t('int.disabledNow'))
    } else {
      update(current.person.user.id, { mfa_enabled: false })
      toast.success(t('int.mfaReset'))
    }
    target.value = null
  } catch (error) {
    fail(error)
  } finally {
    busy.value = false
  }
}

/** Diz se a pessoa é quem está vendo. */
const isMe = (person: Person) => person.user.id === session.me?.user.id
</script>

<template>
  <PageHeader :title="t('int.people')" :sub="t('int.peopleSub')">
    <template #back>
      <RouterLink to="/interno" class="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground">
        <ArrowLeft class="size-4" />{{ t('int.back') }}
      </RouterLink>
    </template>
  </PageHeader>
  <PageBody>
    <div class="relative w-full sm:w-96">
      <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
      <Input v-model="searchText" type="search" :aria-label="t('int.peopleSearch')" class="h-10 bg-card pl-9" :placeholder="t('int.peopleSearch')" autofocus />
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
        <tr v-for="person in people ?? []" :key="person.user.id">
          <td :class="td">
            <div class="font-medium">{{ person.user.name }}</div>
            <div class="text-[13px] text-muted-foreground">{{ person.user.email }}</div>
          </td>
          <td :class="td">
            <div class="flex flex-wrap gap-1.5">
              <template v-for="company in person.companies" :key="company.id">
                <Badge v-if="company.is_internal">Groone</Badge>
                <RouterLink v-else :to="`/interno/clientes/${company.id}`" class="text-[13px] text-link hover:underline">{{ company.name }}</RouterLink>
              </template>
              <span v-if="!person.companies.length" class="text-muted-foreground">–</span>
            </div>
          </td>
          <td :class="[td, 'whitespace-nowrap text-[13px]']">{{ person.mfa_enabled ? t('int.mfaOn') : t('int.mfaOff') }}</td>
          <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground']">
            <time v-if="person.last_login_at" :datetime="person.last_login_at" :title="formatDate(person.last_login_at)">{{ formatAgo(person.last_login_at) }}</time>
            <template v-else>{{ t('common.never') }}</template>
          </td>
          <td :class="td">
            <Status :tone="person.status === 'active' ? 'ok' : 'bad'">{{ t(`int.user.${person.status}`) }}</Status>
          </td>
          <td :class="td">
            <DropdownMenuRoot v-if="!isMe(person)">
              <DropdownMenuTrigger as-child>
                <Button variant="ghost" size="icon" class="size-8" :aria-label="t('int.actionsFor', { name: person.user.name })"><MoreHorizontal /></Button>
              </DropdownMenuTrigger>
              <MenuContent align="end" class="w-52">
                <MenuItem v-if="person.mfa_enabled" @select="target = { person: person, action: 'reset-mfa' }">{{ t('int.resetMfa') }}</MenuItem>
                <MenuItem v-if="person.status === 'disabled'" @select="enable(person)">{{ t('int.enable') }}</MenuItem>
                <MenuItem v-else danger @select="target = { person: person, action: 'disable' }">{{ t('int.disable') }}</MenuItem>
              </MenuContent>
            </DropdownMenuRoot>
          </td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="people" v-model:page="page" :total="total" :pages="pages" />
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
