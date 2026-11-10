<script setup lang="ts">
/** Como instalar a tag: a linha com a chave dela, para o <head> do site, e os cuidados. */
import { computed, ref } from 'vue'
import { Check, Copy } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import { t } from '@/lib/i18n'
import { copy } from '@/modules/account/rules'
import { installLine } from '@/modules/ad_tags/rules'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ name: string; domain: string; tagKey: string }>()
const copied = ref(false)
const line = computed(() => installLine(window.location.origin, props.tagKey))

/** Copia a linha e mostra o visto por um instante. */
async function copyLine() {
  if (!(await copy(line.value))) return
  copied.value = true
  setTimeout(() => (copied.value = false), 1600)
}
</script>

<template>
  <Dialog v-model:open="open" class="max-w-[560px]" :title="t('at.installTitle', { name })" :desc="t('at.installDesc', { domain })">
    <div class="grid gap-4">
      <div class="flex items-start gap-2 rounded-md border bg-muted p-3">
        <code class="min-w-0 flex-1 break-all font-mono text-[13px]">{{ line }}</code>
        <Button size="sm" variant="outline" @click="copyLine"><component :is="copied ? Check : Copy" />{{ copied ? t('common.copied') : t('common.copy') }}</Button>
      </div>
      <ul class="grid list-disc gap-2 pl-5 text-[14px] text-muted-foreground">
        <li>{{ t('at.installReward') }}</li>
        <li>{{ t('at.installGenius') }}</li>
        <li>{{ t('at.installOne') }}</li>
        <li>{{ t('at.installCheck') }}</li>
      </ul>
    </div>
    <template #footer>
      <Button @click="open = false">{{ t('common.close') }}</Button>
    </template>
  </Dialog>
</template>
