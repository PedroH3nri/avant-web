<script setup lang="ts">
/**
 * Modelos prontos de dashboard (painel interno): os da equipe Groone e os dos clientes em abas, quem vê
 * cada um e qual abre no início de quem ainda não tem dashboard.
 */
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { DropdownMenuRoot, DropdownMenuSeparator, DropdownMenuTrigger } from 'reka-ui'
import { MoreHorizontal, Plus } from 'lucide-vue-next'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, pick, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { cn } from '@/lib/utils'
import { templateService } from '@/modules/dashboards/service'
import { roleNames } from '@/modules/dashboards/template-rules'
import type { ManagedTemplate, TemplateAudience, TemplateRoles } from '@/modules/dashboards/types'

const AUDIENCES: TemplateAudience[] = ['groone', 'clients']
const router = useRouter()
const templates = ref<ManagedTemplate[] | null>(null)
const roles = ref<TemplateRoles>({ groone: [], clients: [] })
const audience = ref<TemplateAudience>('groone')
const loadError = ref<string | null>(null)
const removing = ref<ManagedTemplate | null>(null)
const busy = ref(false)

const shown = computed(() => (templates.value ?? []).filter((template) => template.audience === audience.value))
const counts = computed(() => Object.fromEntries(AUDIENCES.map((value) => [value, (templates.value ?? []).filter((template) => template.audience === value).length])))
const removeOpen = computed({
  get: () => removing.value !== null,
  set: (value) => {
    if (!value) removing.value = null
  },
})

/** O motivo do erro da API, com o texto dela quando já explica. */
const apiMessage = (error: unknown) =>
  error instanceof ApiError ? (error.code === 'invalid_input' && error.message ? error.message : errorText(error.code)) : errorText('unknown')

/** Classes da aba, ativa ou não. */
const tab = (on: boolean) =>
  cn(
    'h-8 rounded-[4px] px-3 text-[13px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    on ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground',
  )

/** Carrega os modelos e os papéis que limitam quem vê. */
async function load() {
  loadError.value = null
  try {
    const [found, options] = await Promise.all([templateService.list(), templateService.roles()])
    templates.value = found.items
    roles.value = options
  } catch (error) {
    loadError.value = apiMessage(error)
  }
}

onMounted(load)

/** Quem vê o modelo: os papéis marcados, ou todos do público. */
function audienceText(template: ManagedTemplate): string {
  const names = roleNames(template.role_ids, roles.value[template.audience])
  return names.length ? names.join(', ') : t('tpl.everyone')
}

/** Abre o editor do modelo, ou de um novo no público da aba. */
function edit(template: ManagedTemplate | null) {
  void router.push(template ? `/interno/modelos-de-dashboard/${template.id}` : { path: '/interno/modelos-de-dashboard/novo', query: { publico: audience.value } })
}

/** Marca o modelo de início do público dele. */
async function makeHome(template: ManagedTemplate) {
  try {
    await templateService.setHome(template.id)
    toast.success(t('tpl.homeSet'))
    await load()
  } catch (error) {
    toast.error(apiMessage(error))
  }
}

/** Apaga o modelo escolhido; os dashboards já copiados dele ficam. */
async function remove() {
  const found = removing.value
  if (!found) return
  busy.value = true
  try {
    await templateService.remove(found.id)
    removing.value = null
    toast.success(t('tpl.removed'))
    await load()
  } catch (error) {
    toast.error(apiMessage(error))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <PageHeader :title="t('tpl.title')" :sub="t('tpl.sub')">
    <template #actions>
      <Button @click="edit(null)"><Plus />{{ t('tpl.new') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" />
    <template v-else>
      <div class="flex self-start rounded-md border bg-card p-0.5" role="tablist" :aria-label="t('tpl.audience')">
        <button v-for="value in AUDIENCES" :key="value" type="button" role="tab" :aria-selected="audience === value" :class="tab(audience === value)" @click="audience = value">
          {{ t(value === 'groone' ? 'tpl.groone' : 'tpl.clients') }} <span class="text-muted-foreground tnum">{{ templates ? counts[value] : '' }}</span>
        </button>
      </div>
      <DataTable :min="720">
        <thead>
          <tr>
            <th :class="th">{{ t('tpl.col.name') }}</th>
            <th :class="th">{{ t('tpl.col.who') }}</th>
            <th :class="th">{{ t('tpl.col.blocks') }}</th>
            <th :class="th">{{ t('tpl.col.updated') }}</th>
            <th :class="cn(th, 'w-12')"><span class="sr-only">{{ t('tpl.col.actions') }}</span></th>
          </tr>
        </thead>
        <tbody>
          <TableState :cols="5" :loading="!templates" :empty="!!templates && !shown.length" :desc="t('tpl.empty')" />
          <tr v-for="template in shown" :key="template.id" class="hover:bg-muted">
            <td :class="td">
              <button type="button" class="font-medium hover:underline" @click="edit(template)">{{ pick(template.name) }}</button>
              <Badge v-if="template.is_home" class="ml-2">{{ t('tpl.home') }}</Badge>
            </td>
            <td :class="cn(td, 'text-muted-foreground')">{{ audienceText(template) }}</td>
            <td :class="cn(td, 'tnum text-muted-foreground')">{{ template.definition.widgets.length }}</td>
            <td :class="cn(td, 'whitespace-nowrap text-[13px] text-muted-foreground')">{{ formatDate(template.updated_at, false) }}</td>
            <td :class="td">
              <DropdownMenuRoot>
                <DropdownMenuTrigger as-child>
                  <Button variant="ghost" size="icon" class="size-8" :aria-label="t('tpl.actions', { name: pick(template.name) })"><MoreHorizontal /></Button>
                </DropdownMenuTrigger>
                <MenuContent align="end">
                  <MenuItem @select="edit(template)">{{ t('common.edit') }}</MenuItem>
                  <MenuItem v-if="!template.is_home" @select="makeHome(template)">{{ t('tpl.makeHome') }}</MenuItem>
                  <DropdownMenuSeparator class="-mx-1 my-1 h-px bg-border" />
                  <MenuItem danger @select="removing = template">{{ t('common.delete') }}</MenuItem>
                </MenuContent>
              </DropdownMenuRoot>
            </td>
          </tr>
        </tbody>
      </DataTable>
    </template>
  </PageBody>
  <ConfirmDialog
    v-model:open="removeOpen"
    :title="t('tpl.removeTitle')"
    :desc="t('tpl.removeDesc', { name: removing ? pick(removing.name) : '' })"
    :action="t('common.delete')"
    :busy="busy"
    @confirm="remove"
  />
</template>
