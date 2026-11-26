<script setup lang="ts">
/** O passo a passo de um guia em uma janela grande: a lista de passos, o progresso, o texto e o print de cada passo. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import { ArrowRight, Check } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import { t } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { whatsappLink } from '@/modules/help/rules'
import type { HelpCenterItem } from '@/modules/help/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ guide: HelpCenterItem | null; whatsapp: string | null }>()
const step = ref(0)
const steps = computed(() => props.guide?.content.steps ?? [])
const current = computed(() => steps.value[step.value])
const stuckLink = computed(() =>
  props.guide ? whatsappLink(props.whatsapp, t('help.stuckMessage', { guide: props.guide.content.title, step: step.value + 1 })) : '',
)

watch(open, (shown) => {
  if (shown) step.value = 0
})

/** Fecha no último passo e avisa que o guia terminou. */
function finish() {
  if (props.guide) toast.success(t('help.guideDone', { guide: props.guide.content.title }))
  open.value = false
}
</script>

<template>
  <Dialog v-model:open="open" :title="guide?.content.title ?? ''" :desc="t('help.stepsCount', { n: steps.length })" class="max-w-[1120px]">
    <div v-if="guide && current" class="-mx-6 -mb-6 grid min-h-[420px] border-t md:grid-cols-[260px_1fr]">
      <ol class="hidden border-r bg-muted p-3 md:block">
        <li v-for="(item, index) in steps" :key="index">
          <button
            type="button"
            :class="cn('flex w-full items-start gap-3 rounded-md p-3 text-left text-[14px] transition-colors', step === index ? 'bg-card shadow-sm' : 'hover:bg-card/60')"
            @click="step = index"
          >
            <span
              :class="
                cn(
                  'grid size-6 shrink-0 place-items-center rounded-full text-[12px] font-semibold tnum',
                  index < step ? 'bg-ok text-white' : step === index ? 'bg-foreground text-background' : 'border bg-background',
                )
              "
            >
              <Check v-if="index < step" class="size-3.5" aria-hidden="true" />
              <template v-else>{{ index + 1 }}</template>
            </span>
            <span :class="step === index ? 'font-medium' : 'text-muted-foreground'">{{ item.title }}</span>
          </button>
        </li>
      </ol>
      <div class="grid content-start gap-5 p-6 md:p-8">
        <div class="h-1 overflow-hidden rounded-full bg-muted" aria-hidden="true">
          <span class="block h-full rounded-full bg-foreground transition-[width] duration-500" :style="{ width: `${((step + 1) / steps.length) * 100}%` }" />
        </div>
        <div>
          <div class="text-[13px] text-muted-foreground tnum">{{ t('help.stepOf', { step: step + 1, total: steps.length }) }}</div>
          <h3 class="mt-1 text-[22px] font-semibold tracking-tight">{{ current.title }}</h3>
          <p class="mt-1 max-w-[70ch] whitespace-pre-line text-[15px] text-muted-foreground">{{ current.text }}</p>
        </div>
        <img v-if="current.image_url" :src="current.image_url" :alt="current.title" class="w-full rounded-md border bg-background shadow-sm" loading="lazy" />
      </div>
    </div>
    <template #footer>
      <span class="mr-auto self-center text-[13px] text-muted-foreground">
        <template v-if="stuckLink">
          {{ t('help.stuck') }}
          <a class="text-link hover:underline" :href="stuckLink" target="_blank" rel="noopener noreferrer">{{ t('help.stuckLink') }}</a>
        </template>
      </span>
      <Button variant="outline" :disabled="step === 0" @click="step -= 1">{{ t('common.back') }}</Button>
      <Button v-if="step < steps.length - 1" @click="step += 1">{{ t('common.next') }}<ArrowRight aria-hidden="true" /></Button>
      <Button v-else @click="finish"><Check aria-hidden="true" />{{ t('help.finish') }}</Button>
    </template>
  </Dialog>
</template>
