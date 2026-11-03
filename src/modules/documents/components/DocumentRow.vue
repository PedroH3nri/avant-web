<script setup lang="ts">
/** Uma linha de documento: nome, situação, arquivo enviado ou a dica do que enviar, motivo da recusa e as ações. */
import { computed } from 'vue'
import Status from '@/components/ui/Status.vue'
import { formatDate, t } from '@/lib/i18n'
import { STATE_TONE, type DocumentState } from '@/modules/documents/rules'
import type { CompanyDocument, DocumentKind } from '@/modules/documents/types'

const props = defineProps<{ kind: DocumentKind; document: CompanyDocument | null }>()
const state = computed<DocumentState>(() => props.document?.status ?? 'missing')
</script>

<template>
  <li class="flex flex-col gap-3 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between">
    <div class="min-w-0">
      <div class="flex flex-wrap items-center gap-3">
        <span class="text-[14px] font-medium">{{ t(`doc.kind.${kind}`) }}</span>
        <Status :tone="STATE_TONE[state]">{{ t(`doc.state.${state}`) }}</Status>
      </div>
      <p class="mt-1 break-all text-[13px] text-muted-foreground">
        <template v-if="document">
          <span class="font-mono">{{ document.file_name }}</span> ·
          <span class="tnum">{{ t('doc.sentAt', { date: formatDate(document.uploaded_at) }) }}</span>
          <template v-if="document.reviewed_at && document.status !== 'pending'">
            · <span class="tnum">{{ t('doc.reviewedAt', { date: formatDate(document.reviewed_at) }) }}</span>
          </template>
        </template>
        <template v-else>{{ t(`doc.hint.${kind}`) }}</template>
      </p>
      <p
        v-if="document?.status === 'rejected' && document.rejection_reason"
        class="mt-2 max-w-[60ch] whitespace-pre-line rounded-md border border-bad/30 bg-bad/5 px-3 py-2 text-[13px]"
      >
        {{ document.rejection_reason }}
      </p>
    </div>
    <div class="flex shrink-0 gap-2"><slot /></div>
  </li>
</template>
