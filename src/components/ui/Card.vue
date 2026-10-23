<script setup lang="ts">
/** Cartão do DESIGN.md: corpo e, quando salva algo, um rodapé com a nota e a ação. */
import { cn } from '@/lib/utils'

withDefaults(defineProps<{ title?: string; desc?: string; footerNote?: string; class?: string; pad?: boolean }>(), { pad: true })
</script>

<template>
  <section :class="cn('overflow-hidden rounded-lg border bg-card', $props.class)">
    <div v-if="title || desc || $slots.default" :class="pad ? 'p-6' : ''">
      <h2 v-if="title" class="text-[20px] font-semibold tracking-[-0.025em]">{{ title }}</h2>
      <div v-if="desc || $slots.desc" class="mt-2 max-w-[70ch] text-[14px] text-muted-foreground">
        <slot name="desc">{{ desc }}</slot>
      </div>
      <div v-if="$slots.default" :class="title || desc || $slots.desc ? 'mt-5' : ''"><slot /></div>
    </div>
    <div
      v-if="$slots.footer || footerNote || $slots.note"
      class="flex flex-wrap items-center justify-between gap-3 border-t bg-muted px-6 py-3"
    >
      <div class="text-[13px] text-muted-foreground"><slot name="note">{{ footerNote }}</slot></div>
      <div class="flex gap-2"><slot name="footer" /></div>
    </div>
  </section>
</template>
