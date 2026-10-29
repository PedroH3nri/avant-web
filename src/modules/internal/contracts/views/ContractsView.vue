<script setup lang="ts">
/** Painel interno: contratos das networks MCM, com o revshare da Groone em cada uma. */
import { computed, onMounted, ref, watch } from 'vue'
import { DropdownMenuRoot, DropdownMenuSeparator, DropdownMenuTrigger } from 'reka-ui'
import { MoreHorizontal } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
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
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { contractActions, formatRevshare, manualNetworks, parseRevshare } from '@/modules/internal/contracts/rules'
import { errorText, formatDate, locale, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { cn } from '@/lib/utils'
import type { Contract, ContractNetwork, ContractStatus } from '@/modules/internal/contracts/types'
import { useSession } from '@/stores/session'
import { contractService } from '@/modules/internal/contracts/service'

type Filter = ContractStatus | 'all'

const session = useSession()
const networks = ref<ContractNetwork[] | null>(null)
const contracts = ref<Contract[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const loadError = ref<string | null>(null)
const filter = ref<Filter>('active')
const filters: Filter[] = ['active', 'ended', 'all']

const creating = ref(false)
const networkId = ref('')
const revshareInput = ref('')
const notes = ref('')
const busy = ref(false)
const editing = ref<Contract | null>(null)
const editNotes = ref('')
const ending = ref<Contract | null>(null)
const removing = ref<Contract | null>(null)

const canCreate = computed(() => session.can('internal.contracts.create'))
const canUpdate = computed(() => session.can('internal.contracts.update'))
const canDelete = computed(() => session.can('internal.contracts.delete'))

/** Carrega a página dos contratos do filtro atual; se ela ficou vazia, volta uma. */
async function loadContracts() {
  const found = await contractService.list({ page: page.value, status: filter.value === 'all' ? undefined : filter.value })
  if (found.items.length === 0 && page.value > 1) {
    page.value = Math.max(1, found.pages)
    return
  }
  contracts.value = found.items
  total.value = found.total
  pages.value = found.pages
}

/** Carrega as networks MCM com o contrato ativo e a página dos contratos do filtro atual. */
async function load() {
  loadError.value = null
  try {
    const [networkPage] = await Promise.all([contractService.networks(), loadContracts()])
    networks.value = networkPage.items
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)
watch(page, () => loadContracts().catch((error) => (loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown'))))

/** Troca o filtro e busca de novo os contratos, na página 1. */
function choose(next: Filter) {
  filter.value = next
  contracts.value = null
  if (page.value === 1) void load()
  else page.value = 1
}

const manual = computed(() => manualNetworks(networks.value ?? []))
const networkOptions = computed(() =>
  manual.value.map((item) => ({ value: item.network.id, label: `${item.company.name} · ${item.network.network_code}` })),
)
const chosenNetwork = computed(() => manual.value.find((item) => item.network.id === networkId.value) ?? null)
const parsedRevshare = computed(() => parseRevshare(revshareInput.value))
const revshareError = computed(() => (revshareInput.value.trim() && parsedRevshare.value === null ? t('ct.revshareInvalid') : null))
const revshareHint = computed(() => {
  const active = chosenNetwork.value?.active
  return active ? t('ct.currentHint', { value: formatRevshare(active.revshare, locale.value) }) : t('ct.noActive')
})

/** Nome curto da network: o nome do GAM ou o código. */
const networkName = (network: { display_name: string | null; network_code: string }) => network.display_name ?? network.network_code
/** O tipo de MCM no idioma atual. */
const delegationLabel = (delegation: string | null) => (delegation ? t(`ct.delegation.${delegation}` as Key) : '–')
/** A origem do revshare no idioma atual. */
const sourceLabel = (source: 'gam' | 'manual') => t(`ct.source.${source}`)
/** Classe do botão de filtro, ligado ou não. */
const tabClass = (on: boolean) =>
  cn(
    'h-8 rounded-[4px] px-3 text-[13px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    on ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground',
  )

/** Abre o formulário de contrato novo, já com a network escolhida quando vem da tabela. */
function startCreate(item?: ContractNetwork) {
  networkId.value = item?.network.id ?? manual.value[0]?.network.id ?? ''
  revshareInput.value = ''
  notes.value = ''
  creating.value = true
}

/** Cria o contrato manual; o ativo da network é encerrado na API. */
async function create() {
  if (!networkId.value || parsedRevshare.value === null) return
  busy.value = true
  try {
    await contractService.create({ network_id: networkId.value, revshare: parsedRevshare.value, notes: notes.value.trim() || null })
    creating.value = false
    toast.success(t('ct.created'))
    await load()
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

/** Abre a edição da observação do contrato. */
function startEdit(contract: Contract) {
  editNotes.value = contract.notes ?? ''
  editing.value = contract
}

const editOpen = computed({
  get: () => editing.value !== null,
  set: (value) => {
    if (!value) editing.value = null
  },
})

/** Salva a observação; o revshare de um contrato nunca muda. */
async function saveNotes() {
  const current = editing.value
  if (!current) return
  busy.value = true
  try {
    const saved = await contractService.update(current.id, { notes: editNotes.value.trim() || null })
    contracts.value = contracts.value?.map((contract) => (contract.id === saved.id ? saved : contract)) ?? null
    editing.value = null
    toast.success(t('ct.notesSaved'))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

const endOpen = computed({
  get: () => ending.value !== null,
  set: (value) => {
    if (!value) ending.value = null
  },
})
const removeOpen = computed({
  get: () => removing.value !== null,
  set: (value) => {
    if (!value) removing.value = null
  },
})

/** Encerra o contrato manual escolhido. */
async function confirmEnd() {
  const current = ending.value
  if (!current) return
  busy.value = true
  try {
    await contractService.end(current.id)
    ending.value = null
    toast.success(t('ct.endedNow'))
    await load()
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

/** Exclui o contrato manual escolhido. */
async function confirmRemove() {
  const current = removing.value
  if (!current) return
  busy.value = true
  try {
    await contractService.remove(current.id)
    removing.value = null
    toast.success(t('ct.deleted'))
    await load()
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <PageHeader :title="t('int.contracts')" :sub="t('ct.sub')">
    <template v-if="canCreate" #actions>
      <Button :disabled="!manual.length" @click="startCreate()">{{ t('ct.new') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else>
      <section class="grid gap-3">
        <div>
          <h2 class="text-[20px] font-semibold tracking-[-0.025em]">{{ t('ct.networks') }}</h2>
          <p class="mt-1 max-w-[70ch] text-[14px] text-muted-foreground">{{ t('ct.networksDesc') }}</p>
        </div>
        <DataTable :min="760">
          <thead>
            <tr>
              <th :class="th">{{ t('ct.client') }}</th>
              <th :class="th">{{ t('ct.network') }}</th>
              <th :class="th">{{ t('ct.mcm') }}</th>
              <th :class="th">{{ t('ct.current') }}</th>
              <th :class="th">{{ t('ct.sourceCol') }}</th>
              <th :class="th"><span class="sr-only">{{ t('ct.new') }}</span></th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="6" :loading="!networks" :empty="networks?.length === 0" :desc="t('ct.networksEmpty')" />
            <tr v-for="item in networks ?? []" :key="item.network.id">
              <td :class="[td, 'font-medium']">{{ item.company.name }}</td>
              <td :class="td">
                <div>{{ networkName(item.network) }}</div>
                <code class="font-mono text-[13px] text-muted-foreground">{{ item.network.network_code }}</code>
              </td>
              <td :class="[td, 'whitespace-nowrap text-muted-foreground']">{{ delegationLabel(item.network.delegation) }}</td>
              <td :class="[td, 'tnum whitespace-nowrap']">
                <template v-if="item.active">{{ formatRevshare(item.active.revshare, locale) }}</template>
                <Status v-else tone="ochre">{{ t('ct.none') }}</Status>
              </td>
              <td :class="[td, 'text-muted-foreground']">{{ item.active ? sourceLabel(item.active.source) : '–' }}</td>
              <td :class="[td, 'text-right']">
                <Button v-if="item.manual && canCreate" variant="outline" size="sm" @click="startCreate(item)">{{ t('ct.new') }}</Button>
                <span v-else-if="!item.manual" class="whitespace-nowrap text-[13px] text-muted-foreground">{{ t('ct.fromGam') }}</span>
              </td>
            </tr>
          </tbody>
        </DataTable>
      </section>

      <section class="grid gap-3">
        <div class="flex flex-wrap justify-self-start rounded-md border bg-card p-0.5" role="tablist" :aria-label="t('ct.filterLabel')">
          <button v-for="option in filters" :key="option" type="button" role="tab" :aria-selected="filter === option" :class="tabClass(filter === option)" @click="choose(option)">
            {{ t(`ct.filter.${option}`) }}
          </button>
        </div>
        <DataTable :min="900">
          <thead>
            <tr>
              <th :class="th">{{ t('ct.client') }}</th>
              <th :class="th">{{ t('ct.network') }}</th>
              <th :class="th">{{ t('ct.revshareCol') }}</th>
              <th :class="th">{{ t('ct.statusCol') }}</th>
              <th :class="th">{{ t('ct.sourceCol') }}</th>
              <th :class="th">{{ t('ct.start') }}</th>
              <th :class="th">{{ t('ct.end') }}</th>
              <th :class="th"><span class="sr-only">{{ t('ct.actions') }}</span></th>
            </tr>
          </thead>
          <tbody>
            <TableState :cols="8" :loading="!contracts" :empty="contracts?.length === 0" :desc="t('ct.empty')" />
            <tr v-for="contract in contracts ?? []" :key="contract.id">
              <td :class="td">
                <div class="font-medium">{{ contract.company.name }}</div>
                <div v-if="contract.notes" class="max-w-[40ch] truncate text-[13px] text-muted-foreground" :title="contract.notes">{{ contract.notes }}</div>
              </td>
              <td :class="td"><code class="font-mono text-[13px]">{{ contract.network.network_code }}</code></td>
              <td :class="[td, 'tnum whitespace-nowrap']">{{ formatRevshare(contract.revshare, locale) }}</td>
              <td :class="td">
                <Status :tone="contract.status === 'active' ? 'ok' : 'neutral'">{{ t(`ct.status.${contract.status}`) }}</Status>
              </td>
              <td :class="[td, 'text-muted-foreground']">{{ sourceLabel(contract.source) }}</td>
              <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground']">{{ formatDate(contract.started_at) }}</td>
              <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground']">{{ contract.ended_at ? formatDate(contract.ended_at) : '–' }}</td>
              <td :class="[td, 'text-right']">
                <DropdownMenuRoot v-if="canUpdate || (canDelete && contractActions(contract).remove)">
                  <DropdownMenuTrigger as-child>
                    <Button variant="ghost" size="icon" class="size-8" :aria-label="t('ct.actions')"><MoreHorizontal /></Button>
                  </DropdownMenuTrigger>
                  <MenuContent align="end" class="w-52">
                    <MenuItem v-if="canUpdate" @select="startEdit(contract)">{{ t('ct.editNotes') }}</MenuItem>
                    <MenuItem v-if="canUpdate && contractActions(contract).end" @select="ending = contract">{{ t('ct.endAction') }}</MenuItem>
                    <template v-if="canDelete && contractActions(contract).remove">
                      <DropdownMenuSeparator class="-mx-1 my-1 h-px bg-border" />
                      <MenuItem danger @select="removing = contract">{{ t('ct.delete') }}</MenuItem>
                    </template>
                  </MenuContent>
                </DropdownMenuRoot>
              </td>
            </tr>
          </tbody>
        </DataTable>
        <Pagination v-model:page="page" :total="total" :pages="pages" />
      </section>
    </template>
  </PageBody>

  <Dialog v-model:open="creating" :title="t('ct.new')" :desc="t('ct.newDesc')">
    <p v-if="!manual.length" class="text-[14px] text-muted-foreground">{{ t('ct.noManual') }}</p>
    <form v-else id="contract-form" class="grid gap-4" @submit.prevent="create">
      <Field id="contract-network" :label="t('ct.network')">
        <NativeSelect id="contract-network" v-model="networkId" :options="networkOptions" />
      </Field>
      <Field id="contract-revshare" :label="t('ct.revshare')" :hint="revshareHint" :error="revshareError">
        <Input id="contract-revshare" v-model="revshareInput" inputmode="decimal" class="tnum" placeholder="30" :aria-invalid="!!revshareError" />
      </Field>
      <Field id="contract-notes" :label="t('ct.notes')">
        <textarea
          id="contract-notes"
          v-model="notes"
          maxlength="2000"
          rows="3"
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </Field>
    </form>
    <template #footer>
      <Button variant="outline" @click="creating = false">{{ t('common.cancel') }}</Button>
      <Button form="contract-form" type="submit" :loading="busy" :disabled="!networkId || parsedRevshare === null">{{ t('ct.create') }}</Button>
    </template>
  </Dialog>

  <Dialog v-model:open="editOpen" :title="t('ct.editNotes')">
    <form id="contract-notes-form" @submit.prevent="saveNotes">
      <Field id="contract-edit-notes" :label="t('ct.notes')">
        <textarea
          id="contract-edit-notes"
          v-model="editNotes"
          maxlength="2000"
          rows="4"
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </Field>
    </form>
    <template #footer>
      <Button variant="outline" @click="editing = null">{{ t('common.cancel') }}</Button>
      <Button form="contract-notes-form" type="submit" :loading="busy">{{ t('common.save') }}</Button>
    </template>
  </Dialog>

  <ConfirmDialog
    v-model:open="endOpen"
    :title="t('ct.endTitle', { network: ending?.network.network_code ?? '' })"
    :desc="t('ct.endDesc')"
    :action="t('ct.endAction')"
    :busy="busy"
    @confirm="confirmEnd"
  />
  <ConfirmDialog
    v-model:open="removeOpen"
    :title="t('ct.deleteTitle', { network: removing?.network.network_code ?? '' })"
    :desc="t('ct.deleteDesc')"
    :action="t('ct.delete')"
    :busy="busy"
    @confirm="confirmRemove"
  />
</template>
