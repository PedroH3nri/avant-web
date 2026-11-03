<script setup lang="ts">
/** Itens do checklist: uma lista para todos os sites, com a ordem, o jeito de conferir e se está ativo. */
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { toast } from 'vue-sonner'
import { ArrowDown, ArrowLeft, ArrowUp, ListChecks, Pencil, Plus } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import ChecklistItemDialog from '@/modules/internal/checklists/components/ChecklistItemDialog.vue'
import { kindLabel } from '@/modules/internal/checklists/rules'
import { checklistItemService } from '@/modules/internal/checklists/service'
import type { ChecklistItem } from '@/modules/internal/checklists/types'
import { useSession } from '@/stores/session'

const session = useSession()
const items = ref<ChecklistItem[] | null>(null)
const loadError = ref<string | null>(null)
const editing = ref<ChecklistItem | null>(null)
const dialogOpen = ref(false)
const moving = ref<string | null>(null)
const canManage = computed(() => session.can('internal.checklists.manage'))

/** Carrega os itens na ordem. */
async function load() {
  loadError.value = null
  try {
    items.value = (await checklistItemService.list()).items
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)

/** Abre a janela para um item novo ou para editar. */
function start(item: ChecklistItem | null) {
  editing.value = item
  dialogOpen.value = true
}

/** Sobe ou desce o item. */
async function move(item: ChecklistItem, step: -1 | 1) {
  moving.value = item.id
  try {
    items.value = (await checklistItemService.move(item.id, step)).items
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    moving.value = null
  }
}
</script>

<template>
  <PageHeader :title="t('check.items')" :sub="t('check.itemsSub')">
    <template #back>
      <RouterLink to="/interno/checklists" class="mb-2 inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground">
        <ArrowLeft class="size-3.5" />{{ t('nav.checklists') }}
      </RouterLink>
    </template>
    <template v-if="canManage" #actions>
      <Button @click="start(null)"><Plus />{{ t('check.newItem') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="760">
      <thead>
        <tr>
          <th v-if="canManage" :class="[th, 'w-[88px]']">{{ t('check.col.order') }}</th>
          <th :class="th">{{ t('check.col.item') }}</th>
          <th :class="th">{{ t('check.itemKind') }}</th>
          <th :class="th">{{ t('check.state') }}</th>
          <th v-if="canManage" :class="[th, 'w-[60px]']"><span class="sr-only">{{ t('check.col.actions') }}</span></th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="canManage ? 5 : 3" :loading="!items" :empty="items?.length === 0" :icon="ListChecks" :title="t('check.itemsEmpty')" />
        <tr v-for="(item, position) in items ?? []" :key="item.id" class="hover:bg-muted">
          <td v-if="canManage" :class="td">
            <div class="flex gap-1">
              <Button size="icon" variant="ghost" class="size-7" :disabled="position === 0 || !!moving" :aria-label="t('check.moveUp', { name: item.name })" @click="move(item, -1)"><ArrowUp /></Button>
              <Button
                size="icon"
                variant="ghost"
                class="size-7"
                :disabled="position === (items?.length ?? 0) - 1 || !!moving"
                :aria-label="t('check.moveDown', { name: item.name })"
                @click="move(item, 1)"
              >
                <ArrowDown />
              </Button>
            </div>
          </td>
          <td :class="[td, 'font-medium']">{{ item.name }}</td>
          <td :class="[td, 'text-muted-foreground']">
            {{ kindLabel(item.kind) }}
            <span v-if="item.kind === 'link'" class="block text-[12px]">{{ item.words.join(', ') }}</span>
          </td>
          <td :class="td">
            <Status v-if="item.active" tone="ok">{{ t('check.itemOn') }}</Status>
            <Status v-else tone="neutral">{{ t('check.itemOff') }}</Status>
          </td>
          <td v-if="canManage" :class="td">
            <Button size="icon" variant="ghost" class="size-8" :aria-label="t('check.editNamed', { name: item.name })" @click="start(item)"><Pencil /></Button>
          </td>
        </tr>
      </tbody>
    </DataTable>
  </PageBody>
  <ChecklistItemDialog v-model:open="dialogOpen" :item="editing" @saved="load" />
</template>
