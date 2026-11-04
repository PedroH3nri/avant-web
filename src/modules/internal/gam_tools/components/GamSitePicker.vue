<script setup lang="ts">
/** Lista de sites com caixa de seleção, mostrando o que cada um já tem no GAM. */
import { siteSummary, toggleDomain } from '@/modules/internal/gam_tools/rules'
import type { GamToolSite } from '@/modules/internal/gam_tools/types'

const chosen = defineModel<string[]>({ required: true })
defineProps<{ sites: GamToolSite[]; label: string }>()
</script>

<template>
  <fieldset class="grid gap-2">
    <legend class="mb-2 text-[13px] font-medium text-muted-foreground">{{ label }}</legend>
    <div class="grid max-h-[220px] gap-2 overflow-y-auto">
      <label v-for="site in sites" :key="site.id" class="flex cursor-pointer items-start gap-3 rounded-md border px-3 py-2.5 hover:bg-muted">
        <input
          type="checkbox"
          class="mt-1 size-4 shrink-0 accent-[hsl(var(--foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          :checked="chosen.includes(site.domain)"
          @change="chosen = toggleDomain(chosen, site.domain)"
        />
        <span class="min-w-0">
          <span class="block break-all font-mono text-[13px] font-medium">{{ site.domain }}</span>
          <span class="text-[13px] text-muted-foreground">{{ siteSummary(site) }}</span>
        </span>
      </label>
    </div>
  </fieldset>
</template>
