<script setup lang="ts">
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

const empty = <T,>(): Promise<Items<T>> => Promise.resolve({ items: [], next_cursor: null })

async function load() {
  loadError.value = null
  try {
    const m = await api.get<MemberDetail>(`/members/${id}`)
    const [roles, perms, sites, mine] = await Promise.all([
      session.can('roles.view') ? api.get<Items<Role>>('/roles') : empty<Role>(),
      session.can('roles.view') ? api.get<Items<Permission>>('/permissions') : empty<Permission>(),
      canSeeSites.value ? api.get<Items<SiteListItem>>('/sites') : empty<SiteListItem>(),
      api.get<Items<Site>>(`/members/${id}/sites`),
    ])
    member.value = m
    role.value = roles.items.find((r) => r.id === m.role?.id) ?? null
    catalog.value = perms.items
    allSites.value = sites.items
    assigned.value = new Set(mine.items.map((s) => s.id))
    savedAssigned.value = new Set(assigned.value)
    rows.value = m.permissions.map(toRow)
  } catch (e) {
    if (e instanceof ApiError && e.status === 404) notFound.value = true
    else loadError.value = errorText(e instanceof ApiError ? e.code : 'unknown')
  }
}
onMounted(load)

const errorToast = (e: unknown) => toast.error(errorText(e instanceof ApiError ? e.code : 'unknown'))

// Sites
const sitesBusy = ref(false)
const sitesChanged = computed(
  () => assigned.value.size !== savedAssigned.value.size || [...assigned.value].some((s) => !savedAssigned.value.has(s)),
)
function toggleSite(siteId: string, on: boolean) {
  const next = new Set(assigned.value)
  if (on) next.add(siteId)
  else next.delete(siteId)
  assigned.value = next
}
function setAll(on: boolean) {
  assigned.value = new Set(on ? allSites.value.map((s) => s.id) : [])
}
async function saveSites() {
  sitesBusy.value = true
  try {
    const res = await api.put<Items<Site>>(`/members/${id}/sites`, { site_ids: [...assigned.value] })
    assigned.value = new Set(res.items.map((s) => s.id))
    savedAssigned.value = new Set(assigned.value)
    toast.success(t('member.sitesSaved'))
  } catch (e) {
    errorToast(e)
  } finally {
    sitesBusy.value = false
  }
}

// Permissões diretas: a validade é um dia; vale até o fim dele, no fuso de quem escolhe.
interface Row {
  permission: string
  effect: DirectPermission['effect']
  until: string // AAAA-MM-DD ou vazio
}
const rows = ref<Row[]>([])
const directBusy = ref(false)
const pad = (n: number) => String(n).padStart(2, '0')
function toRow(p: DirectPermission): Row {
  const d = p.expires_at ? new Date(p.expires_at) : null
  return { permission: p.permission, effect: p.effect, until: d ? `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}` : '' }
}
const today = computed(() => {
  const d = new Date()
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
})
const permOptions = computed(() => catalog.value.map((p) => ({ value: p.key, label: pick(p.name) })))
const effectOptions = computed(() => [
  { value: 'allow', label: t('member.allow') },
  { value: 'deny', label: t('member.deny') },
])
const rowError = (r: Row, i: number) => {
  if (r.until && r.until < today.value) return t('member.pastDate')
  if (rows.value.findIndex((x) => x.permission === r.permission) !== i) return t('member.duplicate')
  return null
}
const rowsOk = computed(() => rows.value.every((r, i) => r.permission && !rowError(r, i)))
function addRow() {
  const used = new Set(rows.value.map((r) => r.permission))
  const first = permOptions.value.find((o) => !used.has(o.value))
  if (first) rows.value = [...rows.value, { permission: first.value, effect: 'allow', until: '' }]
}
async function saveDirect() {
  directBusy.value = true
  try {
    const permissions = rows.value.map((r) => ({
      permission: r.permission,
      effect: r.effect,
      expires_at: r.until ? new Date(`${r.until}T23:59:59`).toISOString() : null,
    }))
    const m = await api.put<MemberDetail>(`/members/${id}/permissions`, { permissions })
    member.value = m
    rows.value = m.permissions.map(toRow)
    toast.success(t('member.directSaved'))
  } catch (e) {
    errorToast(e)
  } finally {
    directBusy.value = false
  }
}
const permName = (key: string) => pick(catalog.value.find((p) => p.key === key)?.name) || key
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
                v-for="s in allSites"
                :id="`site-${s.id}`"
                :key="s.id"
                :label="s.domain"
                :model-value="assigned.has(s.id)"
                :disabled="!canAssign"
                @update:model-value="(v: boolean) => toggleSite(s.id, v)"
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
            <div v-for="(r, i) in rows" :key="i" class="grid gap-1">
              <div class="grid items-center gap-2 sm:grid-cols-[minmax(0,1fr)_120px_160px_auto]">
                <NativeSelect v-model="r.permission" :options="permOptions" :aria-label="t('member.permission')" />
                <NativeSelect v-model="r.effect" :options="effectOptions" :aria-label="t('member.effect')" />
                <Input v-model="r.until" type="date" :min="today" :aria-label="t('member.until')" :invalid="!!rowError(r, i)" />
                <Button variant="ghost" size="icon" :aria-label="t('member.removeRow')" @click="rows = rows.filter((_, j) => j !== i)"><X /></Button>
              </div>
              <p v-if="rowError(r, i)" class="text-[13px] text-bad">{{ rowError(r, i) }}</p>
            </div>
          </div>
          <Button variant="outline" size="sm" class="mt-4" :disabled="rows.length >= permOptions.length" @click="addRow"><Plus />{{ t('member.add') }}</Button>
        </template>
        <template v-else>
          <p v-if="member.permissions.length === 0" class="text-[14px] text-muted-foreground">{{ t('member.noDirect') }}</p>
          <ul v-else class="grid gap-2 text-[14px]">
            <li v-for="p in member.permissions" :key="p.permission" class="flex flex-wrap items-center gap-2">
              <Badge :tone="p.effect === 'deny' ? 'bad' : 'neutral'">{{ t(p.effect === 'allow' ? 'member.allow' : 'member.deny') }}</Badge>
              {{ permName(p.permission) }}
              <span class="text-muted-foreground">· {{ p.expires_at ? `${t('member.until')} ${formatDate(p.expires_at, false)}` : t('member.forever') }}</span>
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
