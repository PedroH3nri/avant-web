<script setup lang="ts">
/** A leitura de um artigo: categoria, tempo de leitura, o texto e o "Este artigo ajudou?". */
import { computed, ref, watch } from 'vue'
import { ThumbsDown, ThumbsUp } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import { formatDate, t } from '@/lib/i18n'
import { CATEGORY_LABEL, paragraphs, readingMinutes } from '@/modules/help/rules'
import type { HelpCenterItem } from '@/modules/help/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ article: HelpCenterItem | null }>()
const emit = defineEmits<{ rate: [helpful: boolean] }>()
const answer = ref<boolean | null>(null)
const blocks = computed(() => paragraphs(props.article?.content.body ?? ''))

watch(open, (shown) => {
  if (shown) answer.value = null
})

/** Guarda o "ajudou?" e mostra o agradecimento. */
function rate(helpful: boolean) {
  answer.value = helpful
  emit('rate', helpful)
}
</script>

<template>
  <Dialog v-model:open="open" :title="article?.content.title ?? ''" class="max-w-[820px]">
    <template #desc>
      <span v-if="article">{{ t(CATEGORY_LABEL[article.category]) }} · {{ t('help.minutes', { n: readingMinutes(article.content.body) }) }}</span>
    </template>
    <article v-if="article" class="grid gap-4">
      <p v-if="article.content.summary" class="text-[15px] leading-relaxed text-muted-foreground">{{ article.content.summary }}</p>
      <p v-for="(block, index) in blocks" :key="index" class="whitespace-pre-line text-[15px] leading-relaxed">{{ block }}</p>
      <div class="mt-2 rounded-lg border p-4">
        <div v-if="answer === null" class="flex flex-wrap items-center justify-between gap-3 text-[14px]">
          <span>{{ t('help.helpful') }}</span>
          <div class="flex gap-2">
            <Button size="sm" variant="outline" @click="rate(true)"><ThumbsUp aria-hidden="true" />{{ t('common.yes') }}</Button>
            <Button size="sm" variant="outline" @click="rate(false)"><ThumbsDown aria-hidden="true" />{{ t('common.no') }}</Button>
          </div>
        </div>
        <p v-else class="text-[14px] text-muted-foreground">{{ answer ? t('help.thanks') : t('help.sorry') }}</p>
      </div>
      <p class="text-[12px] text-muted-foreground">{{ t('help.writtenBy', { date: formatDate(article.updated_at, false) }) }}</p>
    </article>
  </Dialog>
</template>
