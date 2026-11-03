<script setup lang="ts">
/** Checklist do site no mês: o que revisar, o que está ok, "Conferir agora" e as observações. */
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { toast } from 'vue-sonner'
import { ArrowLeft, Check, ExternalLink, RefreshCw } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Status from '@/components/ui/Status.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t } from '@/lib/i18n'
import ChecklistNotesCard from '@/modules/internal/checklists/components/ChecklistNotesCard.vue'
import { ROW_TONE, evidenceText, monthName, personName, rowState, rowStateLabel, splitRows } from '@/modules/internal/checklists/rules'
import { checklistService } from '@/modules/internal/checklists/service'
import type { ChecklistRow, SiteChecklistDetail } from '@/modules/internal/checklists/types'
import { useSession } from '@/stores/session'

const POLL_MS = 5000
const POLL_TRIES = 12

const route = useRoute()
const session = useSession()
const checklist = ref<SiteChecklistDetail | null>(null)
const loadError = ref<string | null>(null)
const checking = ref(false)
const marking = ref<string | null>(null)
let polling: ReturnType<typeof setTimeout> | undefined

const checklistId = computed(() => String(route.params.id))
const writable = computed(() => !!checklist.value?.current && session.can('internal.checklists.check'))
const groups = computed(() => splitRows(checklist.value?.rows ?? []))
const sub = computed(() => {
  const found = checklist.value
  if (!found) return undefined
  const parts = [found.client?.name, monthName(found.month), t('check.okCount', { done: found.progress.done, total: found.progress.total })]
  return parts.filter(Boolean).join(' · ')
})

/** Mostra o erro num aviso. */
const fail = (error: unknown) => toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))

/** Carrega o checklist do site. */
async function load() {
  loadError.value = null
  try {
    checklist.value = await checklistService.get(checklistId.value)
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)
onBeforeUnmount(() => clearTimeout(polling))

/** Marca o item como ok ou tira a marcação. */
async function mark(row: ChecklistRow, ok: boolean) {
  marking.value = row.item.id
  try {
    checklist.value = await checklistService.mark(checklistId.value, row.item.id, ok)
    toast.success(ok ? t('check.marked') : t('check.unmarked'))
  } catch (error) {
    fail(error)
  } finally {
    marking.value = null
  }
}

/** Recarrega até a conferência nova aparecer, ou desiste depois de um minuto. */
function waitForCheck(before: string | null, tries: number) {
  polling = setTimeout(async () => {
    await load()
    const after = checklist.value?.checked_at ?? null
    if (after !== before) {
      checking.value = false
      toast.success(t('check.checkedNow'))
    } else if (tries > 1) waitForCheck(before, tries - 1)
    else {
      checking.value = false
      toast(t('check.checkSlow'))
    }
  }, POLL_MS)
}

/** Pede ao worker uma conferência nova e espera o resultado. */
async function checkNow() {
  if (!checklist.value) return
  checking.value = true
  try {
    await checklistService.check(checklistId.value)
    waitForCheck(checklist.value.checked_at, POLL_TRIES)
  } catch (error) {
    checking.value = false
    fail(error)
  }
}
</script>

<template>
  <PageHeader :title="checklist?.site.domain ?? t('nav.checklists')" :sub="sub">
    <template #back>
      <RouterLink to="/interno/checklists" class="mb-2 inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground">
        <ArrowLeft class="size-3.5" />{{ t('nav.checklists') }}
      </RouterLink>
    </template>
    <template v-if="checklist" #actions>
      <a
        :href="`https://${checklist.site.domain}`"
        target="_blank"
        rel="noreferrer"
        class="inline-flex h-9 items-center gap-2 rounded-md border bg-background px-4 text-[14px] font-medium hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ExternalLink class="size-4" />{{ t('check.openSite') }}
      </a>
      <Button v-if="writable" :loading="checking" @click="checkNow"><RefreshCw v-if="!checking" />{{ t('check.checkNow') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <p v-else-if="!checklist" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <div v-else class="grid gap-6 lg:grid-cols-[1fr_340px]">
      <div class="grid min-w-0 content-start gap-6">
        <p v-if="!checklist.current" class="rounded-md border bg-card px-4 py-3 text-[14px] text-muted-foreground">{{ t('check.pastMonth') }}</p>
        <div v-if="checklist.progress.complete" class="flex items-center gap-2 rounded-md border bg-card px-4 py-3 text-[14px]">
          <Check class="size-4 text-ok" />{{ t('check.monthDone') }}
        </div>
        <Card v-if="groups.review.length" :title="t('check.review')" :desc="t('check.reviewDesc')">
          <ul class="-my-3 divide-y">
            <li v-for="row in groups.review" :key="row.item.id" class="grid gap-2 py-3 sm:grid-cols-[1fr_auto] sm:items-center">
              <div class="min-w-0">
                <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span class="font-medium">{{ row.item.name }}</span>
                  <Status :tone="ROW_TONE[rowState(row)]">{{ rowStateLabel(rowState(row)) }}</Status>
                  <span class="text-[12px] text-muted-foreground">{{ row.item.kind === 'manual' ? t('check.manual') : t('check.automatic') }}</span>
                </div>
                <p class="mt-0.5 break-words text-[13px] text-muted-foreground">{{ evidenceText(row) }}</p>
                <p v-if="row.detail" class="mt-0.5 break-all font-mono text-[12px] text-muted-foreground">{{ row.detail }}</p>
              </div>
              <Button v-if="writable" size="sm" variant="outline" :loading="marking === row.item.id" @click="mark(row, true)"><Check />{{ t('check.markOk') }}</Button>
            </li>
          </ul>
        </Card>
        <Card :title="t('check.fine')" :desc="checklist.checked_at ? t('check.fineDesc', { date: formatDate(checklist.checked_at) }) : t('check.notChecked')">
          <p v-if="!groups.fine.length" class="text-[14px] text-muted-foreground">{{ t('check.fineEmpty') }}</p>
          <ul v-else class="-my-3 divide-y">
            <li v-for="row in groups.fine" :key="row.item.id" class="grid gap-2 py-3 sm:grid-cols-[1fr_auto] sm:items-center">
              <div class="min-w-0">
                <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span class="font-medium">{{ row.item.name }}</span>
                  <Status :tone="ROW_TONE[rowState(row)]">{{ rowStateLabel(rowState(row)) }}</Status>
                  <span class="text-[12px] text-muted-foreground">{{ row.item.kind === 'manual' ? t('check.manual') : t('check.automatic') }}</span>
                </div>
                <p class="mt-0.5 break-words text-[13px] text-muted-foreground">
                  {{ evidenceText(row) }}
                  <template v-if="row.marked_at">· {{ t('check.markedBy', { name: personName(row.marked_by), date: formatDate(row.marked_at) }) }}</template>
                </p>
                <p v-if="row.detail" class="mt-0.5 break-all font-mono text-[12px] text-muted-foreground">{{ row.detail }}</p>
              </div>
              <Button v-if="writable && row.marked_at" size="sm" variant="ghost" :loading="marking === row.item.id" @click="mark(row, false)">{{ t('check.unmark') }}</Button>
            </li>
          </ul>
        </Card>
      </div>
      <ChecklistNotesCard :checklist-id="checklist.id" :notes="checklist.notes" :client-locale="checklist.client_locale" :writable="writable" @changed="load" />
    </div>
  </PageBody>
</template>
