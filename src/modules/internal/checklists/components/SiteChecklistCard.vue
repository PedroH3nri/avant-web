<script setup lang="ts">
/** Checklist do mês no detalhe do site: o progresso, os itens para revisar com "Marcar ok", os ok, os que não se aplicam e a personalização de cada item no site. */
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { Check, Pencil } from 'lucide-vue-next'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Status from '@/components/ui/Status.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t } from '@/lib/i18n'
import SiteItemOverrideDialog from '@/modules/internal/checklists/components/SiteItemOverrideDialog.vue'
import { ROW_TONE, evidenceText, monthName, overrideSummary, rowState, rowStateLabel, splitRows } from '@/modules/internal/checklists/rules'
import { checklistService } from '@/modules/internal/checklists/service'
import type { ChecklistRow, SiteChecklistDetail } from '@/modules/internal/checklists/types'
import { useSession } from '@/stores/session'

const props = defineProps<{ checklistId: string }>()

const router = useRouter()
const session = useSession()
const checklist = ref<SiteChecklistDetail | null>(null)
const loadError = ref<string | null>(null)
const marking = ref<string | null>(null)
const customizing = ref<ChecklistRow | null>(null)
const customizeOpen = computed({ get: () => customizing.value !== null, set: (value) => !value && (customizing.value = null) })
const canCustomize = computed(() => !!checklist.value?.current && session.can('internal.checklists.manage'))

const writable = computed(() => !!checklist.value?.current && session.can('internal.checklists.check'))
const groups = computed(() => splitRows(checklist.value?.rows ?? []))
const countedRows = computed(() => (checklist.value?.rows ?? []).filter((row) => row.counted))
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
          <span v-for="row in countedRows" :key="row.item.id" :class="['h-full flex-1 rounded-[2px]', row.ok ? 'bg-primary' : 'bg-muted-foreground/15']" />
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
                <Badge v-if="row.override">{{ overrideSummary(row) }}</Badge>
              </div>
              <p class="mt-0.5 break-words text-[13px] text-muted-foreground">{{ evidenceText(row) }}</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <Button v-if="canCustomize" size="sm" variant="ghost" :aria-label="t('check.override.customizeFor', { name: row.item.name })" @click="customizing = row">
                <Pencil />{{ t('check.override.customize') }}
              </Button>
              <Button v-if="writable" size="sm" variant="outline" :loading="marking === row.item.id" @click="markOk(row)"><Check />{{ t('check.markOk') }}</Button>
            </div>
          </li>
        </ul>
      </section>

      <section v-if="groups.fine.length" class="grid gap-2">
        <h3 class="text-[13px] font-medium text-muted-foreground">{{ t('check.fine') }}</h3>
        <ul class="flex flex-wrap gap-2">
          <li v-for="row in groups.fine" :key="row.item.id">
            <component
              :is="canCustomize ? 'button' : 'span'"
              :type="canCustomize ? 'button' : undefined"
              class="inline-flex items-center gap-1.5 rounded-md border bg-background px-2.5 py-1 text-[13px]"
              :class="canCustomize && 'hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'"
              :title="evidenceText(row)"
              @click="canCustomize && (customizing = row)"
            >
              <Check class="size-3.5 text-ok" aria-hidden="true" />{{ row.item.name }}
              <span v-if="row.override" class="text-muted-foreground">· {{ overrideSummary(row) }}</span>
            </component>
          </li>
        </ul>
      </section>

      <section v-if="groups.skipped.length" class="grid gap-2">
        <h3 class="text-[13px] font-medium text-muted-foreground">{{ t('check.override.skipped') }}</h3>
        <ul class="flex flex-wrap gap-2">
          <li v-for="row in groups.skipped" :key="row.item.id">
            <component
              :is="canCustomize ? 'button' : 'span'"
              :type="canCustomize ? 'button' : undefined"
              class="inline-flex items-center rounded-md border border-dashed px-2.5 py-1 text-[13px] text-muted-foreground"
              :class="canCustomize && 'hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'"
              @click="canCustomize && (customizing = row)"
            >
              {{ row.item.name }}
            </component>
          </li>
        </ul>
      </section>

      <p v-if="canCustomize" class="text-[13px] text-muted-foreground">{{ t('check.override.hint') }}</p>
    </div>
    <SiteItemOverrideDialog v-if="checklist" v-model:open="customizeOpen" :row="customizing" :site-id="checklist.site.id" :domain="checklist.site.domain" @saved="load" />
    <template v-if="checklist" #footer>
      <Button size="sm" variant="outline" @click="router.push(`/interno/checklists/${checklist.id}`)">{{ t('sited.openChecklist') }}</Button>
    </template>
  </Card>
</template>
