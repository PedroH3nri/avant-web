<script setup lang="ts">
/** Checklist do mês no detalhe do site: o progresso, os itens para revisar com "Marcar ok" e os que estão ok. */
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { Check } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Status from '@/components/ui/Status.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t } from '@/lib/i18n'
import { ROW_TONE, evidenceText, monthName, rowState, rowStateLabel, splitRows } from '@/modules/internal/checklists/rules'
import { checklistService } from '@/modules/internal/checklists/service'
import type { ChecklistRow, SiteChecklistDetail } from '@/modules/internal/checklists/types'
import { useSession } from '@/stores/session'

const props = defineProps<{ checklistId: string }>()

const router = useRouter()
const session = useSession()
const checklist = ref<SiteChecklistDetail | null>(null)
const loadError = ref<string | null>(null)
const marking = ref<string | null>(null)

const writable = computed(() => !!checklist.value?.current && session.can('internal.checklists.check'))
const groups = computed(() => splitRows(checklist.value?.rows ?? []))
const title = computed(() => (checklist.value ? t('sited.checklistOf', { month: monthName(checklist.value.month, false) }) : t('check.col.checklist')))
const checkedNote = computed(() => {
  const checkedAt = checklist.value?.checked_at
  return checkedAt ? t('sited.checkedAt', { date: formatDate(checkedAt) }) : t('check.notChecked')
})

/** Carrega o checklist do site no mês. */
async function load() {
  loadError.value = null
  try {
    checklist.value = await checklistService.get(props.checklistId)
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
watch(() => props.checklistId, load, { immediate: true })

/** Marca o item como ok sem sair do site. */
async function markOk(row: ChecklistRow) {
  marking.value = row.item.id
  try {
    checklist.value = await checklistService.mark(props.checklistId, row.item.id, true)
    toast.success(t('check.marked'))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    marking.value = null
  }
}
</script>

<template>
  <Card :title="title" :footer-note="checklist ? checkedNote : undefined">
    <p v-if="loadError" class="text-[14px] text-bad">{{ loadError }}</p>
    <p v-else-if="!checklist" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <div v-else class="grid gap-5">
      <div class="grid gap-2">
        <div class="flex flex-wrap items-baseline justify-between gap-2">
          <span class="text-[28px] font-semibold tracking-[-0.03em] tnum">{{ checklist.progress.done }}/{{ checklist.progress.total }}</span>
          <Status v-if="checklist.progress.complete" tone="ok">{{ t('check.monthDone') }}</Status>
          <Status v-else tone="ochre">{{ t('sited.toReview', { count: groups.review.length }) }}</Status>
        </div>
        <div
          class="flex h-2 w-full gap-[3px]"
          role="meter"
          :aria-valuemin="0"
          :aria-valuemax="checklist.progress.total"
          :aria-valuenow="checklist.progress.done"
          :aria-label="t('check.okCount', { done: checklist.progress.done, total: checklist.progress.total })"
        >
          <span v-for="row in checklist.rows" :key="row.item.id" :class="['h-full flex-1 rounded-[2px]', row.ok ? 'bg-primary' : 'bg-muted-foreground/15']" />
        </div>
      </div>

      <section v-if="groups.review.length" class="grid gap-2">
        <h3 class="text-[13px] font-medium text-muted-foreground">{{ t('check.review') }}</h3>
        <ul class="divide-y rounded-md border">
          <li v-for="row in groups.review" :key="row.item.id" class="grid gap-2 px-3 py-2.5 sm:grid-cols-[1fr_auto] sm:items-center">
            <div class="min-w-0">
              <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span class="text-[14px] font-medium">{{ row.item.name }}</span>
                <Status :tone="ROW_TONE[rowState(row)]">{{ rowStateLabel(rowState(row)) }}</Status>
              </div>
              <p class="mt-0.5 break-words text-[13px] text-muted-foreground">{{ evidenceText(row) }}</p>
            </div>
            <Button v-if="writable" size="sm" variant="outline" :loading="marking === row.item.id" @click="markOk(row)"><Check />{{ t('check.markOk') }}</Button>
          </li>
        </ul>
      </section>

      <section v-if="groups.fine.length" class="grid gap-2">
        <h3 class="text-[13px] font-medium text-muted-foreground">{{ t('check.fine') }}</h3>
        <ul class="flex flex-wrap gap-2">
          <li v-for="row in groups.fine" :key="row.item.id" class="inline-flex items-center gap-1.5 rounded-md border bg-background px-2.5 py-1 text-[13px]" :title="evidenceText(row)">
            <Check class="size-3.5 text-ok" aria-hidden="true" />{{ row.item.name }}
          </li>
        </ul>
      </section>
    </div>
    <template v-if="checklist" #footer>
      <Button size="sm" variant="outline" @click="router.push(`/interno/checklists/${checklist.id}`)">{{ t('sited.openChecklist') }}</Button>
    </template>
  </Card>
</template>
