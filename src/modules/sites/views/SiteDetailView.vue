<script setup lang="ts">
/** Página de um site: ad units, quem vê o site e remoção. */
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { ArrowLeft, MoreHorizontal } from 'lucide-vue-next'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
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
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t } from '@/lib/i18n'
import { approval, tree } from '@/modules/sites/rules'
import { td, th } from '@/lib/table'
import type { AdUnit, SiteDetail, SiteListItem, SiteMember } from '@/modules/sites/types'
import { useSession } from '@/stores/session'
import { siteService } from '@/modules/sites/service'

const route = useRoute()
const session = useSession()
const id = String(route.params.id)
const site = ref<SiteDetail | null>(null)
const people = ref<SiteMember[]>([])
const others = ref<SiteListItem[]>([])
const notFound = ref(false)
const loadError = ref<string | null>(null)
const canAssign = computed(() => session.can('sites.assign'))
const canManage = computed(() => session.can('sites.manage'))
const router = useRouter()

/** Carrega o site e, para quem atribui, as pessoas e os outros sites. */
async function load() {
  loadError.value = null
  try {
    site.value = await siteService.show(id)
    if (canAssign.value) {
      const [memberPage, sitePage] = await Promise.all([siteService.members(id), siteService.list()])
      people.value = memberPage.items
      others.value = sitePage.items.filter((other) => other.id !== id && other.network_id === site.value?.network_id && other.status === 'active')
    }
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) notFound.value = true
    else loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)

// Site cadastrado à mão sai enquanto aguarda o GAM
const removing = ref(false)
const busy = ref(false)
/** Remove o site cadastrado à mão. */
async function removeSite() {
  const current = site.value
  if (!current) return
  busy.value = true
  try {
    await siteService.remove(current.id)
    toast.success(t('site.removed', { domain: current.domain }))
    removing.value = false
    await router.push('/sites')
  } catch (error) {
    errorToast(error)
  } finally {
    busy.value = false
  }
}

const rows = computed(() => tree(site.value?.ad_units.filter((ad_unit) => ad_unit.status === 'active') ?? []))
/** Mostra o erro num aviso. */
const errorToast = (error: unknown) => toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))

/** Muda a ligação de um ad unit e recarrega o site. */
async function patch(adUnit: AdUnit, body: { site_id: string | null; automatic?: boolean }, message: string) {
  try {
    await siteService.linkAdUnit(adUnit.id, body)
    toast.success(message)
    await load()
  } catch (error) {
    errorToast(error)
  }
}

// Ligar a outro site
const moving = ref<AdUnit | null>(null)
const target = ref('')
const moveOpen = computed({ get: () => moving.value !== null, set: (value) => !value && (moving.value = null) })
const targetOptions = computed(() => others.value.map((other) => ({ value: other.id, label: other.domain })))
/** Abre o diálogo para mover o ad unit para outro site. */
function openMove(adUnit: AdUnit) {
  moving.value = adUnit
  target.value = targetOptions.value[0]?.value ?? ''
}
/** Move o ad unit para o site escolhido. */
async function move() {
  const current = moving.value
  if (!current || !target.value) return
  const domain = others.value.find((other) => other.id === target.value)?.domain ?? ''
  moving.value = null
  await patch(current, { site_id: target.value }, t('sites.linked', { unit: current.name, site: domain }))
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
      <Status :tone="approval(site).tone">{{ approval(site).label }}</Status>
      <Button v-if="site.awaiting_gam && canManage" variant="destructive" size="sm" @click="removing = true">{{ t('site.remove') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <Card v-else-if="notFound" :desc="t('site.notFound')" />
    <p v-else-if="!site" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <template v-else>
      <Card v-if="site.awaiting_gam" :title="t('sites.awaiting')" :desc="t('site.awaitingDesc')" />
      <section v-if="!site.awaiting_gam" class="grid gap-3">
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
          <li v-for="person in people" :key="person.id" class="flex items-center gap-3 text-[14px]">
            <Avatar :name="person.user.name" :image-url="person.user.image_url" :size="28" />
            <RouterLink :to="`/equipe/${person.id}`" class="min-w-0 flex-1 truncate font-medium hover:underline">{{ person.user.name }}</RouterLink>
            <span class="text-[13px] text-muted-foreground">{{ person.is_owner ? t('team.owner') : t(`site.via.${person.via}`) }}</span>
          </li>
        </ul>
      </Card>
    </template>

    <ConfirmDialog
      v-model:open="removing"
      :title="t('site.removeTitle', { domain: site?.domain ?? '' })"
      :desc="t('site.removeDesc')"
      :action="t('site.remove')"
      :busy="busy"
      @confirm="removeSite"
    />
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
