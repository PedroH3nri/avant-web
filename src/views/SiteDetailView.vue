<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { toast } from 'vue-sonner'
import { DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { ArrowLeft, MoreHorizontal } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Avatar from '@/components/ui/Avatar.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { api, ApiError } from '@/lib/api'
import { errorText, formatDate, t } from '@/lib/i18n'
import { approval, tree } from '@/lib/sites'
import { td, th } from '@/lib/table'
import type { AdUnit, Items, SiteDetail, SiteListItem, SiteMember } from '@/lib/types'
import { useSession } from '@/stores/session'

const route = useRoute()
const session = useSession()
const id = String(route.params.id)
const site = ref<SiteDetail | null>(null)
const people = ref<SiteMember[]>([])
const others = ref<SiteListItem[]>([])
const notFound = ref(false)
const loadError = ref<string | null>(null)
const canAssign = computed(() => session.can('sites.assign'))

async function load() {
  loadError.value = null
  try {
    site.value = await api.get<SiteDetail>(`/sites/${id}`)
    if (canAssign.value) {
      const [p, s] = await Promise.all([api.get<Items<SiteMember>>(`/sites/${id}/members`), api.get<Items<SiteListItem>>('/sites')])
      people.value = p.items
      others.value = s.items.filter((x) => x.id !== id && x.network_id === site.value?.network_id && x.status === 'active')
    }
  } catch (e) {
    if (e instanceof ApiError && e.status === 404) notFound.value = true
    else loadError.value = errorText(e instanceof ApiError ? e.code : 'unknown')
  }
}
onMounted(load)

const rows = computed(() => tree(site.value?.ad_units.filter((u) => u.status === 'active') ?? []))
const errorToast = (e: unknown) => toast.error(errorText(e instanceof ApiError ? e.code : 'unknown'))

async function patch(u: AdUnit, body: { site_id: string | null; automatic?: boolean }, message: string) {
  try {
    await api.patch<AdUnit>(`/ad-units/${u.id}`, body)
    toast.success(message)
    await load()
  } catch (e) {
    errorToast(e)
  }
}

// Ligar a outro site
const moving = ref<AdUnit | null>(null)
const target = ref('')
const moveOpen = computed({ get: () => moving.value !== null, set: (v) => !v && (moving.value = null) })
const targetOptions = computed(() => others.value.map((s) => ({ value: s.id, label: s.domain })))
function openMove(u: AdUnit) {
  moving.value = u
  target.value = targetOptions.value[0]?.value ?? ''
}
async function move() {
  const u = moving.value
  if (!u || !target.value) return
  const domain = others.value.find((s) => s.id === target.value)?.domain ?? ''
  moving.value = null
  await patch(u, { site_id: target.value }, t('sites.linked', { unit: u.name, site: domain }))
}
</script>

<template>
  <PageHeader :title="site?.domain ?? ''">
    <template #back>
      <RouterLink to="/sites" class="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground">
        <ArrowLeft class="size-4" />{{ t('site.back') }}
      </RouterLink>
    </template>
    <template v-if="site" #actions>
      <Status :tone="approval(site.approval_status).tone">{{ approval(site.approval_status).label }}</Status>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <Card v-else-if="notFound" :desc="t('site.notFound')" />
    <p v-else-if="!site" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <template v-else>
      <section class="grid gap-3">
        <div>
          <h2 class="text-[16px] font-semibold tracking-tight">{{ t('site.units') }}</h2>
          <p class="mt-1 max-w-[70ch] text-[14px] text-muted-foreground">{{ t('site.unitsDesc') }}</p>
        </div>
        <DataTable :min="640">
          <thead>
            <tr>
              <th :class="th">{{ t('site.units') }}</th>
              <th :class="th">{{ t('site.code') }}</th>
              <th :class="th">{{ t('sites.col.synced') }}</th>
              <th :class="[th, 'w-12']"><span class="sr-only">{{ t('team.actions') }}</span></th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="4" :empty="rows.length === 0" :desc="t('site.noUnits')" />
            <tr v-for="{ unit: u, depth } in rows" :key="u.id">
              <td :class="td">
                <span class="inline-flex items-center gap-2" :style="{ paddingLeft: `${depth * 20}px` }">
                  <span v-if="depth" class="text-muted-foreground" aria-hidden="true">└</span>
                  <span class="font-medium">{{ u.name }}</span>
                  <Badge v-if="u.site_manual">{{ t('site.manual') }}</Badge>
                </span>
              </td>
              <td :class="[td, 'font-mono text-[13px] text-muted-foreground']">{{ u.code ?? '' }}</td>
              <td :class="[td, 'text-muted-foreground tnum']">{{ formatDate(u.synced_at, false) }}</td>
              <td :class="td">
                <DropdownMenuRoot v-if="canAssign">
                  <DropdownMenuTrigger as-child>
                    <Button variant="ghost" size="icon" class="size-8" :aria-label="t('team.actionsFor', { name: u.name })"><MoreHorizontal /></Button>
                  </DropdownMenuTrigger>
                  <MenuContent align="end" class="w-60">
                    <MenuItem v-if="targetOptions.length" @select="openMove(u)">{{ t('site.move') }}</MenuItem>
                    <MenuItem @select="patch(u, { site_id: null }, t('site.unlinked', { unit: u.name }))">{{ t('site.unlink') }}</MenuItem>
                    <MenuItem v-if="u.site_manual" @select="patch(u, { site_id: u.site_id, automatic: true }, t('site.autoDone', { unit: u.name }))">
                      {{ t('site.auto') }}
                    </MenuItem>
                  </MenuContent>
                </DropdownMenuRoot>
              </td>
            </tr>
          </tbody>
        </DataTable>
      </section>

      <Card v-if="canAssign" :title="t('site.people')" :desc="t('site.peopleDesc')">
        <ul class="grid gap-3">
          <li v-for="p in people" :key="p.id" class="flex items-center gap-3 text-[14px]">
            <Avatar :name="p.user.name" :size="28" />
            <RouterLink :to="`/equipe/${p.id}`" class="min-w-0 flex-1 truncate font-medium hover:underline">{{ p.user.name }}</RouterLink>
            <span class="text-[13px] text-muted-foreground">{{ p.is_owner ? t('team.owner') : t(`site.via.${p.via}`) }}</span>
          </li>
        </ul>
      </Card>
    </template>

    <Dialog v-model:open="moveOpen" :title="t('site.move')" :desc="moving ? `${moving.name} · ${t('site.childrenNote')}` : ''">
      <Field id="move-site" :label="t('sites.col.site')">
        <NativeSelect id="move-site" v-model="target" :options="targetOptions" />
      </Field>
      <template #footer>
        <Button variant="outline" @click="moving = null">{{ t('common.cancel') }}</Button>
        <Button :disabled="!target" @click="move">{{ t('common.save') }}</Button>
      </template>
    </Dialog>
  </PageBody>
</template>
