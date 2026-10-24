<script setup lang="ts">
/** Página de um membro: papel, sites atribuídos e permissões diretas. */
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { toast } from 'vue-sonner'
import { ArrowLeft, Plus, X } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Status from '@/components/ui/Status.vue'
import { api, ApiError } from '@/lib/api'
import { errorText, formatDate, pick, t } from '@/lib/i18n'
import type { DirectPermission, Items, MemberDetail, Permission, Role, Site, SiteListItem } from '@/lib/types'
import { useSession } from '@/stores/session'

const route = useRoute()
const session = useSession()
const id = String(route.params.id)

const member = ref<MemberDetail | null>(null)
const role = ref<Role | null>(null)
const catalog = ref<Permission[]>([])
const allSites = ref<SiteListItem[]>([])
const assigned = ref<Set<string>>(new Set())
const savedAssigned = ref<Set<string>>(new Set())
const loadError = ref<string | null>(null)
const notFound = ref(false)

const canAssign = computed(() => session.can('sites.assign'))
const canGrant = computed(() => session.can('permissions.grant'))
const canSeeSites = computed(() => session.can('sites.view'))
const roleLabel = computed(() => pick(member.value?.role?.name))
const scope = computed(() => (member.value?.is_owner ? 'all' : (role.value?.site_scope ?? 'assigned')))

/** Página vazia, para quando a pessoa não pode ver a lista. */
const empty = <T,>(): Promise<Items<T>> => Promise.resolve({ items: [], next_cursor: null })

/** Carrega o membro, os papéis, os sites e o catálogo de permissões. */
async function load() {
  loadError.value = null
  try {
    const memberDetail = await api.get<MemberDetail>(`/members/${id}`)
    const [roles, perms, sites, mine] = await Promise.all([
      session.can('roles.view') ? api.get<Items<Role>>('/roles') : empty<Role>(),
      session.can('roles.view') ? api.get<Items<Permission>>('/permissions') : empty<Permission>(),
      canSeeSites.value ? api.get<Items<SiteListItem>>('/sites') : empty<SiteListItem>(),
      api.get<Items<Site>>(`/members/${id}/sites`),
    ])
    member.value = memberDetail
    role.value = roles.items.find((candidate) => candidate.id === memberDetail.role?.id) ?? null
    catalog.value = perms.items
    allSites.value = sites.items
    assigned.value = new Set(mine.items.map((site) => site.id))
    savedAssigned.value = new Set(assigned.value)
    rows.value = memberDetail.permissions.map(toRow)
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) notFound.value = true
    else loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)

/** Mostra o erro num aviso. */
const errorToast = (error: unknown) => toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))

// Sites
const sitesBusy = ref(false)
const sitesChanged = computed(
  () => assigned.value.size !== savedAssigned.value.size || [...assigned.value].some((siteId) => !savedAssigned.value.has(siteId)),
)
/** Marca ou desmarca um site do membro. */
function toggleSite(siteId: string, on: boolean) {
  const next = new Set(assigned.value)
  if (on) next.add(siteId)
  else next.delete(siteId)
  assigned.value = next
}
/** Marca ou desmarca todos os sites. */
function setAll(on: boolean) {
  assigned.value = new Set(on ? allSites.value.map((allSite) => allSite.id) : [])
}
/** Salva os sites do membro. */
async function saveSites() {
  sitesBusy.value = true
  try {
    const response = await api.put<Items<Site>>(`/members/${id}/sites`, { site_ids: [...assigned.value] })
    assigned.value = new Set(response.items.map((site) => site.id))
    savedAssigned.value = new Set(assigned.value)
    toast.success(t('member.sitesSaved'))
  } catch (error) {
    errorToast(error)
  } finally {
    sitesBusy.value = false
  }
}

// Permissões diretas: a validade é um dia; vale até o fim dele, no fuso de quem escolhe.
interface Row {
  permission: string
  effect: DirectPermission['effect']
  /** Validade em AAAA-MM-DD, ou vazio quando não vence. */
  until: string
}
const rows = ref<Row[]>([])
const directBusy = ref(false)
/** Completa o número com zero à esquerda. */
const pad = (value: number) => String(value).padStart(2, '0')
/** Converte uma permissão direta numa linha do formulário. */
function toRow(directPermission: DirectPermission): Row {
  const expiresAt = directPermission.expires_at ? new Date(directPermission.expires_at) : null
  return { permission: directPermission.permission, effect: directPermission.effect, until: expiresAt ? `${expiresAt.getFullYear()}-${pad(expiresAt.getMonth() + 1)}-${pad(expiresAt.getDate())}` : '' }
}
const today = computed(() => {
  const date = new Date()
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
})
const permOptions = computed(() => catalog.value.map((permission) => ({ value: permission.key, label: pick(permission.name) })))
const effectOptions = computed(() => [
  { value: 'allow', label: t('member.allow') },
  { value: 'deny', label: t('member.deny') },
])
/** Erro da linha: data no passado ou permissão repetida. */
const rowError = (row: Row, index: number) => {
  if (row.until && row.until < today.value) return t('member.pastDate')
  if (rows.value.findIndex((other) => other.permission === row.permission) !== index) return t('member.duplicate')
  return null
}
const rowsOk = computed(() => rows.value.every((row, index) => row.permission && !rowError(row, index)))
/** Adiciona uma linha com a primeira permissão ainda não usada. */
function addRow() {
  const used = new Set(rows.value.map((row) => row.permission))
  const first = permOptions.value.find((permOption) => !used.has(permOption.value))
  if (first) rows.value = [...rows.value, { permission: first.value, effect: 'allow', until: '' }]
}
/** Salva a lista inteira de permissões diretas. */
async function saveDirect() {
  directBusy.value = true
  try {
    const permissions = rows.value.map((row) => ({
      permission: row.permission,
      effect: row.effect,
      expires_at: row.until ? new Date(`${row.until}T23:59:59`).toISOString() : null,
    }))
    const memberDetail = await api.put<MemberDetail>(`/members/${id}/permissions`, { permissions })
    member.value = memberDetail
    rows.value = memberDetail.permissions.map(toRow)
    toast.success(t('member.directSaved'))
  } catch (error) {
    errorToast(error)
  } finally {
    directBusy.value = false
  }
}
/** Nome da permissão no idioma atual. */
const permName = (key: string) => pick(catalog.value.find((permission) => permission.key === key)?.name) || key
</script>

<template>
  <PageHeader :title="member?.user.name ?? ''" :sub="member?.user.email">
    <template #back>
      <RouterLink to="/equipe" class="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground">
        <ArrowLeft class="size-4" />{{ t('member.back') }}
      </RouterLink>
    </template>
  </PageHeader>
  <PageBody class="[&>*]:max-w-[880px]">
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <Card v-else-if="notFound" :desc="t('member.notFound')" />
    <p v-else-if="!member" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <template v-else>
      <Card :title="t('member.access')" :desc="t('member.accessDesc')">
        <dl class="grid gap-4 text-[14px] sm:grid-cols-3">
          <div>
            <dt class="text-[13px] text-muted-foreground">{{ t('team.role') }}</dt>
            <dd class="mt-1"><Badge v-if="member.is_owner">{{ t('team.owner') }}</Badge><template v-else>{{ roleLabel }}</template></dd>
          </div>
          <div>
            <dt class="text-[13px] text-muted-foreground">{{ t('team.status') }}</dt>
            <dd class="mt-1">
              <Status :tone="member.status === 'active' ? 'ok' : 'neutral'">{{ t(member.status === 'active' ? 'team.active' : 'team.suspended') }}</Status>
            </dd>
          </div>
          <div>
            <dt class="text-[13px] text-muted-foreground">{{ t('team.since') }}</dt>
            <dd class="mt-1 tnum">{{ formatDate(member.joined_at, false) }}</dd>
          </div>
        </dl>
      </Card>

      <Card v-if="canSeeSites" :title="t('member.sites')">
        <template #desc>
          <template v-if="member.is_owner">{{ t('member.sitesOwner') }}</template>
          <template v-else-if="scope === 'all'">{{ t('member.sitesAll', { role: roleLabel }) }}</template>
          <template v-else>{{ t('member.sitesDesc', { role: roleLabel }) }}</template>
        </template>
        <template v-if="scope === 'assigned'">
          <p v-if="allSites.length === 0" class="text-[14px] text-muted-foreground">{{ t('member.noSites') }}</p>
          <template v-else>
            <div v-if="canAssign" class="mb-3 flex gap-3 text-[13px]">
              <Button variant="link" @click="setAll(true)">{{ t('member.selectAll') }}</Button>
              <Button variant="link" @click="setAll(false)">{{ t('member.selectNone') }}</Button>
            </div>
            <div class="grid max-h-[360px] gap-2 overflow-y-auto sm:grid-cols-2">
              <Checkbox
                v-for="allSite in allSites"
                :id="`site-${allSite.id}`"
                :key="allSite.id"
                :label="allSite.domain"
                :model-value="assigned.has(allSite.id)"
                :disabled="!canAssign"
                @update:model-value="(value: boolean) => toggleSite(allSite.id, value)"
              />
            </div>
          </template>
        </template>
        <template v-if="scope === 'assigned' && allSites.length" #note>
          <span class="tnum">{{ t('member.sitesCount', { n: assigned.size, total: allSites.length }) }}</span>
        </template>
        <template v-if="scope === 'assigned' && canAssign && allSites.length" #footer>
          <Button :loading="sitesBusy" :disabled="!sitesChanged" @click="saveSites">{{ t('common.save') }}</Button>
        </template>
      </Card>

      <Card v-if="!member.is_owner" :title="t('member.direct')" :desc="t('member.directDesc')">
        <template v-if="canGrant && catalog.length">
          <p v-if="rows.length === 0" class="text-[14px] text-muted-foreground">{{ t('member.noDirect') }}</p>
          <div v-else class="grid gap-3">
            <div v-for="(row, index) in rows" :key="index" class="grid gap-1">
              <div class="grid items-center gap-2 sm:grid-cols-[minmax(0,1fr)_120px_160px_auto]">
                <NativeSelect v-model="row.permission" :options="permOptions" :aria-label="t('member.permission')" />
                <NativeSelect v-model="row.effect" :options="effectOptions" :aria-label="t('member.effect')" />
                <Input v-model="row.until" type="date" :min="today" :aria-label="t('member.until')" :invalid="!!rowError(row, index)" />
                <Button variant="ghost" size="icon" :aria-label="t('member.removeRow')" @click="rows = rows.filter((_, rowIndex) => rowIndex !== index)"><X /></Button>
              </div>
              <p v-if="rowError(row, index)" class="text-[13px] text-bad">{{ rowError(row, index) }}</p>
            </div>
          </div>
          <Button variant="outline" size="sm" class="mt-4" :disabled="rows.length >= permOptions.length" @click="addRow"><Plus />{{ t('member.add') }}</Button>
        </template>
        <template v-else>
          <p v-if="member.permissions.length === 0" class="text-[14px] text-muted-foreground">{{ t('member.noDirect') }}</p>
          <ul v-else class="grid gap-2 text-[14px]">
            <li v-for="permission in member.permissions" :key="permission.permission" class="flex flex-wrap items-center gap-2">
              <Badge :tone="permission.effect === 'deny' ? 'bad' : 'neutral'">{{ t(permission.effect === 'allow' ? 'member.allow' : 'member.deny') }}</Badge>
              {{ permName(permission.permission) }}
              <span class="text-muted-foreground">· {{ permission.expires_at ? `${t('member.until')} ${formatDate(permission.expires_at, false)}` : t('member.forever') }}</span>
            </li>
          </ul>
        </template>
        <template #note>{{ canGrant ? '' : t('member.directReadonly') }}</template>
        <template v-if="canGrant && catalog.length" #footer>
          <Button :loading="directBusy" :disabled="!rowsOk" @click="saveDirect">{{ t('common.save') }}</Button>
        </template>
      </Card>
    </template>
  </PageBody>
</template>
