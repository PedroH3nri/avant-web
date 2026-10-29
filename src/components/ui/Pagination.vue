<script setup lang="ts">
/** Páginas numeradas embaixo de uma tabela, com anterior e próxima e o total de itens. */
import { computed } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { t } from '@/lib/i18n'
import { PAGE_SIZE, pageNumbers } from '@/lib/pagination'
import { cn } from '@/lib/utils'

const page = defineModel<number>('page', { default: 1 })
const props = defineProps<{ total: number; pages: number }>()
const numbers = computed(() => pageNumbers(page.value, props.pages))
const first = computed(() => (props.total === 0 ? 0 : (page.value - 1) * PAGE_SIZE + 1))
const last = computed(() => Math.min(page.value * PAGE_SIZE, props.total))
/** Vai para uma página válida. */
const go = (target: number) => {
  if (target >= 1 && target <= props.pages && target !== page.value) page.value = target
}
const button = 'inline-flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-[13px] tnum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40'
</script>

<template>
  <nav v-if="total > 0" class="flex flex-wrap items-center justify-between gap-3 pt-1" :aria-label="t('pagination.label')">
    <span class="text-[13px] text-muted-foreground tnum">{{ t('pagination.range', { first, last, total }) }}</span>
    <div v-if="pages > 1" class="flex items-center gap-1">
      <button type="button" :class="cn(button, 'hover:bg-accent')" :disabled="page <= 1" :aria-label="t('pagination.previous')" @click="go(page - 1)">
        <ChevronLeft class="size-4" />
      </button>
      <template v-for="(number, index) in numbers" :key="`${number}-${index}`">
        <span v-if="number === '…'" class="px-1 text-[13px] text-muted-foreground" aria-hidden="true">…</span>
        <button
          v-else
          type="button"
          :class="cn(button, number === page ? 'bg-secondary font-medium text-foreground' : 'text-muted-foreground hover:bg-accent hover:text-foreground')"
          :aria-current="number === page ? 'page' : undefined"
          :aria-label="t('pagination.page', { page: number })"
          @click="go(number)"
        >
          {{ number }}
        </button>
      </template>
      <button type="button" :class="cn(button, 'hover:bg-accent')" :disabled="page >= pages" :aria-label="t('pagination.next')" @click="go(page + 1)">
        <ChevronRight class="size-4" />
      </button>
    </div>
  </nav>
</template>
