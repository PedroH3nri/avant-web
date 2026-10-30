<script setup lang="ts">
/** Catálogo de serviços que a equipe soma nas invoices; mudar aqui não altera invoices que já existem. */
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { toast } from 'vue-sonner'
import { DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { ArrowLeft, MoreHorizontal, Plus } from 'lucide-vue-next'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import Pagination from '@/components/ui/Pagination.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { invoiceService } from '@/modules/internal/invoices/service'
import type { InvoiceServiceItem } from '@/modules/internal/invoices/types'
import { useSession } from '@/stores/session'

const session = useSession()
const services = ref<InvoiceServiceItem[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)
const editing = ref<InvoiceServiceItem | 'new' | null>(null)
const editingOpen = computed({ get: () => editing.value !== null, set: (value) => !value && (editing.value = null) })
const removing = ref<InvoiceServiceItem | null>(null)
const removingOpen = computed({ get: () => removing.value !== null, set: (value) => !value && (removing.value = null) })
const title = ref('')
const description = ref('')
const busy = ref(false)
const canManage = computed(() => session.can('internal.invoices.services'))

/** Carrega a página do catálogo. */
async function load() {
  loadError.value = null
  try {
    const found = await invoiceService.services(page.value)
    if (found.items.length === 0 && page.value > 1) {
      page.value = Math.max(1, found.pages)
      return
    }
    services.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)
watch(page, load)

/** Abre o modal para criar ou editar um serviço. */
function startEdit(service: InvoiceServiceItem | 'new') {
  editing.value = service
  title.value = service === 'new' ? '' : service.title
  description.value = service === 'new' ? '' : service.description
}
/** Grava o serviço novo ou editado. */
async function save() {
  const current = editing.value
  if (!current || !title.value.trim()) return
  busy.value = true
  try {
    const body = { title: title.value.trim(), description: description.value.trim() }
    if (current === 'new') await invoiceService.createService(body)
    else await invoiceService.updateService(current.id, body)
    toast.success(current === 'new' ? t('inv.services.created') : t('inv.services.saved'), { description: current === 'new' ? undefined : t('inv.services.savedDesc') })
    editing.value = null
    await load()
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
/** Exclui o serviço do catálogo; as invoices guardam a própria cópia. */
async function remove() {
  const service = removing.value
  if (!service) return
  busy.value = true
  try {
    await invoiceService.deleteService(service.id)
    toast.success(t('inv.services.deleted'))
    removing.value = null
    await load()
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <PageHeader :title="t('inv.services.title')" :sub="t('inv.services.sub')">
    <template #back>
      <RouterLink to="/interno/invoices" class="mb-2 inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground">
        <ArrowLeft class="size-3.5" />{{ t('inv.team.title') }}
      </RouterLink>
    </template>
    <template v-if="canManage" #actions>
      <Button @click="startEdit('new')"><Plus class="size-4" />{{ t('inv.services.new') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <p v-else-if="!services" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <template v-else>
      <DataTable :min="640">
        <thead>
          <tr>
            <th :class="th">{{ t('inv.services.colTitle') }}</th>
            <th :class="th">{{ t('inv.services.colDescription') }}</th>
            <th v-if="canManage" :class="[th, 'w-12']"><span class="sr-only">{{ t('team.actions') }}</span></th>
          </tr>
        </thead>
        <tbody>
          <TableState :cols="canManage ? 3 : 2" :empty="services.length === 0" :desc="t('inv.services.empty')" />
          <tr v-for="service in services" :key="service.id" class="hover:bg-muted">
            <td :class="[td, 'whitespace-nowrap font-medium']">{{ service.title }}</td>
            <td :class="[td, 'text-muted-foreground']">{{ service.description || '–' }}</td>
            <td v-if="canManage" :class="td">
              <DropdownMenuRoot>
                <DropdownMenuTrigger as-child>
                  <Button variant="ghost" size="icon" class="size-8" :aria-label="t('inv.line.actions', { name: service.title })"><MoreHorizontal /></Button>
                </DropdownMenuTrigger>
                <MenuContent align="end" class="w-40">
                  <MenuItem @select="startEdit(service)">{{ t('common.edit') }}</MenuItem>
                  <MenuItem danger @select="removing = service">{{ t('common.delete') }}</MenuItem>
                </MenuContent>
              </DropdownMenuRoot>
            </td>
          </tr>
        </tbody>
      </DataTable>
      <Pagination v-model:page="page" :total="total" :pages="pages" />
      <p class="text-[13px] text-muted-foreground">{{ t('inv.services.note') }}</p>
    </template>
  </PageBody>
  <Dialog v-model:open="editingOpen" :title="editing === 'new' ? t('inv.services.new') : t('inv.services.edit')" :desc="editing === 'new' ? t('inv.services.newDesc') : t('inv.services.savedDesc')">
    <form id="invoice-service" class="grid gap-4" novalidate @submit.prevent="save">
      <Field id="sv-title" :label="t('inv.services.titleLabel')">
        <Input id="sv-title" v-model="title" maxlength="120" :placeholder="t('inv.services.titlePlaceholder')" />
      </Field>
      <Field id="sv-desc" :label="t('inv.services.descriptionLabel')">
        <textarea
          id="sv-desc"
          v-model="description"
          maxlength="500"
          rows="2"
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </Field>
    </form>
    <template #footer>
      <Button variant="outline" @click="editing = null">{{ t('common.cancel') }}</Button>
      <Button type="submit" form="invoice-service" :disabled="!title.trim()" :loading="busy">{{ t('common.save') }}</Button>
    </template>
  </Dialog>
  <ConfirmDialog v-model:open="removingOpen" :title="t('inv.services.deleteTitle', { name: removing?.title ?? '' })" :desc="t('inv.services.deleteDesc')" :action="t('common.delete')" :busy="busy" @confirm="remove" />
</template>
