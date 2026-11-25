<script setup lang="ts">
/** Passo a passo de instalação no site: passos numerados, a linha do <head> quando há e os cuidados. */
import { ref } from 'vue'
import { Check, Copy } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import { t } from '@/lib/i18n'
import { copy } from '@/modules/account/rules'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ title: string; desc: string; steps: string[]; line?: string; lineHint?: string; notes?: string[] }>()
const copied = ref(false)

/** Copia a linha de exemplo e mostra o visto por um instante. */
async function copyLine() {
  if (!props.line || !(await copy(props.line))) return
  copied.value = true
  setTimeout(() => (copied.value = false), 1600)
}
</script>

<template>
  <Dialog v-model:open="open" class="max-w-[600px]" :title="title" :desc="desc">
    <div class="grid gap-4">
      <ol class="grid gap-3">
        <li v-for="(step, index) in steps" :key="step" class="flex gap-3 text-[14px]">
          <span class="flex size-6 shrink-0 items-center justify-center rounded-full border text-[12px] font-medium tnum">{{ index + 1 }}</span>
          <span class="pt-0.5">{{ step }}</span>
        </li>
      </ol>
      <div v-if="line" class="grid gap-2">
        <div class="flex items-start gap-2 rounded-md border bg-muted p-3">
          <code class="min-w-0 flex-1 break-all font-mono text-[13px]">{{ line }}</code>
          <Button size="sm" variant="outline" @click="copyLine"><component :is="copied ? Check : Copy" />{{ copied ? t('common.copied') : t('common.copy') }}</Button>
        </div>
        <p v-if="lineHint" class="text-[13px] text-muted-foreground">{{ lineHint }}</p>
      </div>
      <ul v-if="notes?.length" class="grid list-disc gap-2 pl-5 text-[14px] text-muted-foreground">
        <li v-for="note in notes" :key="note">{{ note }}</li>
      </ul>
    </div>
    <template #footer>
      <Button @click="open = false">{{ t('common.close') }}</Button>
    </template>
  </Dialog>
</template>
