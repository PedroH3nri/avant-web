<script setup lang="ts">
/** A janela com o resultado da verificação: achados por gravidade, a página, o trecho achado e o que fazer. */
import { computed } from 'vue'
import { AlertTriangle, Check, Loader2, RefreshCw, X } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import { formatDate, t, tn } from '@/lib/i18n'
import { findingFix, findingsOf, findingTitle, SEVERITIES, SEVERITY_LABEL } from '@/modules/install_checks/rules'
import type { InstallCheck, InstallTarget } from '@/modules/install_checks/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ target: InstallTarget; name: string; check: InstallCheck | null; running: boolean; wait: number }>()
const emit = defineEmits<{ run: [] }>()

const summary = computed(() => props.check?.summary ?? null)
const finished = computed(() => Boolean(summary.value?.finished_at))
const sections = computed(() =>
  SEVERITIES.map((severity) => ({ severity, items: findingsOf(props.check?.findings ?? [], severity) })).filter((section) => section.items.length > 0),
)

/** A linha de baixo do título: quando, quem pediu e quantas páginas foram lidas. */
const description = computed(() => {
  if (props.running && !finished.value) return t('ic.descRunning')
  if (!summary.value || !summary.value.finished_at) return t('ic.notChecked')
  const by = summary.value.source === 'daily' ? t('ic.daily') : (props.check?.requested_by_name ?? t('ic.someone'))
  const pages = tn('ic.descPages', props.check?.pages.length ?? 0)
  return t('ic.desc', { when: formatDate(summary.value.finished_at), by, pages })
})

const runLabel = computed(() => {
  if (props.running) return t('ic.pending')
  return props.wait > 0 ? t('ic.checkAgainIn', { n: props.wait }) : t('ic.checkAgain')
})
</script>

<template>
  <Dialog v-model:open="open" :title="t(`ic.title.${target}`, { name })" :desc="description" class="max-w-[640px]">
    <div v-if="sections.length" class="grid max-h-[60vh] gap-5 overflow-y-auto pr-1">
      <section v-for="section in sections" :key="section.severity" class="grid gap-2">
        <h3 class="text-[13px] font-medium text-muted-foreground">{{ t(SEVERITY_LABEL[section.severity]) }} · {{ section.items.length }}</h3>
        <ul class="grid gap-2">
          <li v-for="(finding, index) in section.items" :key="`${finding.code}-${index}`" class="rounded-md border p-3">
            <div class="flex items-start gap-2">
              <X v-if="finding.severity === 'error'" class="mt-0.5 size-4 shrink-0 text-bad" aria-hidden="true" />
              <AlertTriangle v-else-if="finding.severity === 'warning'" class="mt-0.5 size-4 shrink-0 text-warn" aria-hidden="true" />
              <Check v-else class="mt-0.5 size-4 shrink-0 text-ok" aria-hidden="true" />
              <div class="min-w-0 flex-1">
                <p class="text-[14px] font-medium">{{ findingTitle(finding.code) }}</p>
                <p v-if="finding.page && finding.severity !== 'ok'" class="mt-0.5 break-all font-mono text-[12px] text-muted-foreground">{{ finding.page }}</p>
                <code v-if="finding.snippet" class="mt-2 block break-all rounded bg-muted px-2 py-1 font-mono text-[12px]">{{ finding.snippet }}</code>
                <p v-if="findingFix(finding.code)" class="mt-2 text-[13px]">{{ findingFix(finding.code) }}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
    <template #footer>
      <Button variant="outline" class="tnum" :disabled="running || wait > 0" @click="emit('run')">
        <Loader2 v-if="running" class="animate-spin" /><RefreshCw v-else />{{ runLabel }}
      </Button>
      <Button @click="open = false">{{ t('common.close') }}</Button>
    </template>
  </Dialog>
</template>
