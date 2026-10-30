<script setup lang="ts">
/** Menu de ações do relatório salvo, igual no cartão, na linha da lista e na tela de leitura. */
import { DropdownMenuRoot, DropdownMenuSeparator, DropdownMenuTrigger } from 'reka-ui'
import { MoreHorizontal } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import { t } from '@/lib/i18n'
import type { SavedReport } from '@/modules/reports/types'

defineProps<{ report: SavedReport; pinned: boolean; canDuplicate: boolean; withOpen?: boolean }>()
const emit = defineEmits<{ open: []; edit: []; duplicate: []; pin: []; download: [format: 'csv' | 'xlsx']; remove: [] }>()
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="icon" :aria-label="t('report.actionsOf', { name: report.name })"><MoreHorizontal /></Button>
    </DropdownMenuTrigger>
    <MenuContent align="end">
      <MenuItem v-if="withOpen" @select="emit('open')">{{ t('report.open') }}</MenuItem>
      <MenuItem v-if="report.editable" @select="emit('edit')">{{ t('common.edit') }}</MenuItem>
      <MenuItem v-if="canDuplicate" @select="emit('duplicate')">{{ t('report.duplicate') }}</MenuItem>
      <MenuItem @select="emit('pin')">{{ pinned ? t('report.unpin') : t('report.pin') }}</MenuItem>
      <DropdownMenuSeparator class="-mx-1 my-1 h-px bg-border" />
      <MenuItem @select="emit('download', 'csv')">{{ t('report.exportCsv') }}</MenuItem>
      <MenuItem @select="emit('download', 'xlsx')">{{ t('report.exportXlsx') }}</MenuItem>
      <template v-if="report.editable">
        <DropdownMenuSeparator class="-mx-1 my-1 h-px bg-border" />
        <MenuItem danger @select="emit('remove')">{{ t('common.delete') }}</MenuItem>
      </template>
    </MenuContent>
  </DropdownMenuRoot>
</template>
