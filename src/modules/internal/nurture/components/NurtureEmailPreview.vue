<script setup lang="ts">
/** O e-mail da régua como o cliente vê, com as variáveis trocadas pelos dados de um cliente de exemplo. */
import { computed } from 'vue'
import Mark from '@/components/ui/Mark.vue'
import Dialog from '@/components/ui/Dialog.vue'
import { t } from '@/lib/i18n'
import { fillSample, SAMPLE } from '@/modules/internal/nurture/rules'
import type { NurtureEmail, NurtureLang } from '@/modules/internal/nurture/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ email: NurtureEmail | null; lang: NurtureLang }>()
const subject = computed(() => fillSample(props.email?.subject[props.lang] ?? ''))
const body = computed(() => fillSample(props.email?.body[props.lang] ?? ''))
</script>

<template>
  <Dialog v-model:open="open" :title="t('nurture.previewTitle')" :desc="t('nurture.previewDesc', { company: SAMPLE['{empresa}'] ?? '' })" class="max-w-[560px]">
    <div class="rounded-md border bg-background">
      <div class="border-b px-5 py-3 text-[14px] font-medium">{{ subject }}</div>
      <div class="px-5 py-4">
        <div class="mb-4 flex items-center gap-2"><Mark :size="22" /><span class="text-[14px] font-semibold">Avant</span></div>
        <p class="whitespace-pre-line text-[14px]">{{ body }}</p>
      </div>
      <div class="border-t px-5 py-3 text-[12px] text-muted-foreground">
        {{ t('nurture.previewFooter', { company: SAMPLE['{empresa}'] ?? '' }) }} <span class="text-link underline">{{ t('nurture.previewUnsubscribe') }}</span>
      </div>
    </div>
  </Dialog>
</template>
