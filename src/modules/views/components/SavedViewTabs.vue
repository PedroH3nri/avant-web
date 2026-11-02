<script setup lang="ts">
/** Abas das visões salvas de uma tabela: a visão padrão, as salvas e o botão de visão nova. */
import { DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { ChevronDown, Plus } from 'lucide-vue-next'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import { t } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import type { SavedView } from '@/modules/views/types'

const active = defineModel<string | null>('active', { default: null })
defineProps<{ views: SavedView[]; defaultLabel: string }>()
const emit = defineEmits<{ create: []; edit: [view: SavedView]; remove: [view: SavedView] }>()

/** Classes da aba, ativa ou não. */
const tabClass = (on: boolean) =>
  cn(
    '-mb-px flex h-10 items-center gap-1 border-b-2 px-3 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    on ? 'border-foreground font-medium text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground',
  )
</script>

<template>
  <div class="flex flex-wrap items-center gap-1 border-b" role="tablist" :aria-label="t('views.tabs')">
    <button type="button" role="tab" :aria-selected="active === null" :class="tabClass(active === null)" @click="active = null">{{ defaultLabel }}</button>
    <template v-for="view in views" :key="view.id">
      <div v-if="active === view.id && view.editable" class="flex items-center">
        <DropdownMenuRoot>
          <DropdownMenuTrigger as-child>
            <button type="button" role="tab" aria-selected="true" :class="tabClass(true)" :aria-label="t('views.menuFor', { name: view.name })">
              {{ view.name }}<ChevronDown class="size-3.5 text-muted-foreground" aria-hidden="true" />
            </button>
          </DropdownMenuTrigger>
          <MenuContent class="w-52">
            <MenuItem @select="emit('edit', view)">{{ t('views.editSharing') }}</MenuItem>
            <MenuItem danger @select="emit('remove', view)">{{ t('views.remove') }}</MenuItem>
          </MenuContent>
        </DropdownMenuRoot>
      </div>
      <button v-else type="button" role="tab" :aria-selected="active === view.id" :class="tabClass(active === view.id)" @click="active = view.id">{{ view.name }}</button>
    </template>
    <button type="button" class="flex h-10 items-center gap-1 px-3 text-[14px] text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" @click="emit('create')">
      <Plus class="size-4" aria-hidden="true" />{{ t('views.new') }}
    </button>
  </div>
</template>
