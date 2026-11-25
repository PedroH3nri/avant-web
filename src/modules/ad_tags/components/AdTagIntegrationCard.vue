<script setup lang="ts">
/** Cartão de uma integração da ad tag: logo, nome, descrição, se está ligada e os campos. */
import { CircleDollarSign, Gift, LoaderCircle } from 'lucide-vue-next'
import Status from '@/components/ui/Status.vue'
import { t } from '@/lib/i18n'

export type IntegrationKind = 'analytics' | 'mgid' | 'loader' | 'reward' | 'priceRules'

defineProps<{ kind: IntegrationKind; title: string; desc: string; on: boolean }>()
</script>

<template>
  <section class="rounded-lg border bg-card p-6">
    <div class="flex items-start gap-3">
      <span class="size-10 shrink-0 overflow-hidden rounded-md border" aria-hidden="true">
        <svg v-if="kind === 'analytics'" viewBox="0 0 24 24" class="size-full">
          <rect width="24" height="24" rx="6" fill="#fff" />
          <rect x="15" y="4" width="4.5" height="16" rx="2.25" fill="#F9AB00" />
          <rect x="9.75" y="9.5" width="4.5" height="10.5" rx="2.25" fill="#E37400" />
          <circle cx="6.75" cy="17.75" r="2.25" fill="#E37400" />
        </svg>
        <svg v-else-if="kind === 'mgid'" viewBox="0 0 24 24" class="size-full">
          <rect width="24" height="24" rx="6" fill="#1F4BFF" />
          <text x="12" y="15.2" text-anchor="middle" font-family="Arial, sans-serif" font-size="8.2" font-weight="700" fill="#fff">mgid</text>
        </svg>
        <span v-else-if="kind === 'loader'" class="grid size-full place-items-center bg-sky-600 text-white"><LoaderCircle class="size-4" /></span>
        <span v-else-if="kind === 'reward'" class="grid size-full place-items-center bg-foreground text-background"><Gift class="size-4" /></span>
        <span v-else class="grid size-full place-items-center bg-emerald-600 text-white"><CircleDollarSign class="size-4" /></span>
      </span>
      <div class="min-w-0 flex-1">
        <h2 class="text-[17px] font-semibold tracking-tight">{{ title }}</h2>
        <p class="mt-0.5 text-[13px] text-muted-foreground">{{ desc }}</p>
      </div>
      <Status :tone="on ? 'ok' : 'neutral'">{{ on ? t('at.integrationOn') : t('at.integrationOff') }}</Status>
    </div>
    <div class="mt-5"><slot /></div>
  </section>
</template>
