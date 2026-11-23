<script setup lang="ts">
/** Menu dos filtros extras da tabela: a visão padrão fica enxuta e cada visão nova liga os
 * filtros que quiser. Desligar um filtro também tira o valor dele. */
import { DropdownMenuCheckboxItem, DropdownMenuItemIndicator, DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { Check, ListFilter } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import { t } from '@/lib/i18n'
import { toggleFilter } from '@/modules/views/rules'

const shown = defineModel<string[]>('shown', { required: true })
const props = defineProps<{ filters: string[]; label: (filter: string) => string }>()
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" size="sm" class="h-9"><ListFilter />{{ t('views.moreFilters') }}</Button>
    </DropdownMenuTrigger>
    <MenuContent class="w-60">
      <DropdownMenuCheckboxItem
        v-for="filter in props.filters"
        :key="filter"
        :model-value="shown.includes(filter)"
        class="relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-[14px] outline-none data-[highlighted]:bg-accent"
        @select.prevent="shown = toggleFilter(shown, filter, props.filters)"
      >
        <DropdownMenuItemIndicator class="absolute left-2 inline-flex"><Check class="size-4" /></DropdownMenuItemIndicator>
        {{ props.label(filter) }}
      </DropdownMenuCheckboxItem>
    </MenuContent>
  </DropdownMenuRoot>
</template>
