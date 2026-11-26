<script setup lang="ts">
/** O editor de um e-mail da régua: a espera, o assunto e o texto em cada idioma, com a prévia. */
import { ref } from 'vue'
import { Eye, Trash2 } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import Textarea from '@/components/ui/Textarea.vue'
import { t } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { LANGS } from '@/modules/internal/nurture/rules'
import type { NurtureEmail, NurtureLang } from '@/modules/internal/nurture/types'

const email = defineModel<NurtureEmail>({ required: true })
const props = defineProps<{ position: number; total: number; disabled?: boolean }>()
const emit = defineEmits<{ remove: []; preview: [lang: NurtureLang] }>()
const lang = ref<NurtureLang>('pt')
const fieldId = `nurture-email-${props.position}`

/** Troca o assunto no idioma aberto. */
function setSubject(text: string) {
  email.value = { ...email.value, subject: { ...email.value.subject, [lang.value]: text } }
}

/** Troca o texto no idioma aberto. */
function setBody(text: string) {
  email.value = { ...email.value, body: { ...email.value.body, [lang.value]: text } }
}

/** Troca os dias depois do e-mail anterior. */
function setDelay(text: string) {
  email.value = { ...email.value, delay_days: Number(text) || 0 }
}
</script>

<template>
  <li class="rounded-md border p-4">
    <div class="flex flex-wrap items-center gap-3">
      <span class="text-[14px] font-medium">{{ t('nurture.emailN', { n: position + 1 }) }}</span>
      <span v-if="position === 0" class="text-[13px] text-muted-foreground">{{ t('nurture.firstEmail') }}</span>
      <span v-else class="flex items-center gap-2 text-[13px] text-muted-foreground">
        {{ t('nurture.delayBefore') }}
        <Input :model-value="String(email.delay_days)" :aria-label="t('nurture.delayLabel')" type="number" min="1" max="30" class="h-8 w-16 tnum" :disabled="disabled" @update:model-value="setDelay" />
        {{ t('nurture.delayAfter') }}
      </span>
      <div class="ml-auto flex items-center gap-2">
        <div class="flex rounded-md border bg-background p-0.5" role="tablist" :aria-label="t('nurture.language')">
          <button
            v-for="option in LANGS"
            :key="option"
            type="button"
            role="tab"
            :aria-selected="lang === option"
            :class="cn('h-7 rounded px-2 text-[12px] uppercase', lang === option ? 'bg-secondary font-medium' : 'text-muted-foreground')"
            @click="lang = option"
          >
            {{ option }}
          </button>
        </div>
        <Button size="sm" variant="outline" @click="emit('preview', lang)"><Eye class="size-4" aria-hidden="true" />{{ t('nurture.preview') }}</Button>
        <Button v-if="total > 1 && !disabled" size="icon" variant="ghost" class="size-8" :aria-label="t('nurture.removeEmail', { n: position + 1 })" @click="emit('remove')"><Trash2 class="size-4" /></Button>
      </div>
    </div>
    <div class="mt-4 grid gap-3">
      <Field :id="`${fieldId}-subject`" :label="t('nurture.subject', { lang: lang.toUpperCase() })">
        <Input :id="`${fieldId}-subject`" :model-value="email.subject[lang]" class="h-10" maxlength="200" :disabled="disabled" @update:model-value="setSubject" />
      </Field>
      <Field :id="`${fieldId}-body`" :label="t('nurture.body', { lang: lang.toUpperCase() })" :hint="t('nurture.bodyHint')">
        <Textarea :id="`${fieldId}-body`" :model-value="email.body[lang]" :rows="6" :maxlength="5000" @update:model-value="setBody" />
      </Field>
    </div>
  </li>
</template>
