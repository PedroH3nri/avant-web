<script setup lang="ts">
/** Janela modal: título, descrição, corpo e rodapé com as ações. */
import { DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle } from 'reka-ui'
import { X } from 'lucide-vue-next'
import { t } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const open = defineModel<boolean>('open', { default: false })
defineProps<{ title: string; desc?: string; class?: string }>()
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogPortal>
      <DialogOverlay class="fixed inset-0 z-40 bg-black/40 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
      <DialogContent
        :class="
          cn(
            'fixed left-1/2 top-1/2 z-50 grid max-h-[calc(100dvh-32px)] w-[calc(100vw-32px)] max-w-[480px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg border bg-background shadow-lg data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
            $props.class,
          )
        "
      >
        <div class="p-6">
          <DialogTitle class="pr-8 text-[20px] font-semibold tracking-[-0.025em]">{{ title }}</DialogTitle>
          <DialogDescription v-if="desc || $slots.desc" class="mt-2 text-[14px] text-muted-foreground">
            <slot name="desc">{{ desc }}</slot>
          </DialogDescription>
          <div v-if="$slots.default" class="mt-5"><slot /></div>
        </div>
        <div v-if="$slots.footer" class="flex flex-wrap justify-end gap-2 border-t bg-muted px-6 py-3"><slot name="footer" /></div>
        <DialogClose
          class="absolute right-4 top-4 rounded-md p-1 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          :aria-label="t('common.close')"
          ><X class="size-4"
        /></DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
