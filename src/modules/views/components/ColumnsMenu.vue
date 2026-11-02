<script setup lang="ts">
/** Menu das colunas da tabela: liga e desliga cada uma, sempre com ao menos uma. */
import { DropdownMenuCheckboxItem, DropdownMenuItemIndicator, DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { Check, Columns3 } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import { t } from '@/lib/i18n'
import { toggleColumn } from '@/modules/views/rules'

const shown = defineModel<string[]>('shown', { required: true })
const props = defineProps<{ columns: string[]; label: (column: string) => string }>()
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" size="sm" class="h-9"><Columns3 />{{ t('views.columns') }}</Button>
    </DropdownMenuTrigger>
    <MenuContent class="w-56">
      <DropdownMenuCheckboxItem
        v-for="column in props.columns"
        :key="column"
        :model-value="shown.includes(column)"
        class="relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-[14px] outline-none data-[highlighted]:bg-accent"
        @select.prevent="shown = toggleColumn(shown, column, props.columns)"
      >
        <DropdownMenuItemIndicator class="absolute left-2 inline-flex"><Check class="size-4" /></DropdownMenuItemIndicator>
        {{ props.label(column) }}
      </DropdownMenuCheckboxItem>
    </MenuContent>
  </DropdownMenuRoot>
</template>
