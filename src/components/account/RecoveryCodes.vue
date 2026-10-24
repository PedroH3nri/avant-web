<script setup lang="ts">
/** Códigos de recuperação recém-gerados: aparecem uma vez, com baixar e copiar. */
import { ref } from 'vue'
import { Check, Copy, Download } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import { copy, recoveryFile } from '@/lib/account'
import { t } from '@/lib/i18n'
import { useSession } from '@/stores/session'

const props = defineProps<{ codes: string[] }>()
const session = useSession()
const copied = ref(false)
const manual = ref(false)
/** Texto do arquivo com os códigos de recuperação. */
const text = () => recoveryFile(props.codes, t('rec.fileTitle', { email: session.me?.user.email ?? '' }))

/** Baixa os códigos de recuperação num arquivo .txt. */
function download() {
  const url = URL.createObjectURL(new Blob([text()], { type: 'text/plain' }))
  const link = document.createElement('a')
  link.href = url
  link.download = 'avant-codigos-de-recuperacao.txt'
  link.click()
  URL.revokeObjectURL(url)
}

/** Copia todos os códigos de recuperação. */
async function copyAll() {
  if (await copy(props.codes.join('\n'))) {
    copied.value = true
    setTimeout(() => (copied.value = false), 1600)
    return
  }
  const element = document.getElementById('rec-codes')
  if (element) window.getSelection()?.selectAllChildren(element)
  manual.value = true
}
</script>

<template>
  <div class="grid gap-3">
    <ol id="rec-codes" class="grid grid-cols-2 gap-x-6 gap-y-1.5 rounded-md border bg-muted p-4 font-mono text-[14px] tabular-nums">
      <li v-for="code in codes" :key="code">{{ code }}</li>
    </ol>
    <div class="flex flex-wrap gap-2">
      <Button variant="outline" size="sm" @click="download"><Download />{{ t('rec.download') }}</Button>
      <Button variant="outline" size="sm" @click="copyAll"
        ><component :is="copied ? Check : Copy" />{{ copied ? t('common.copied') : t('common.copy') }}</Button
      >
    </div>
    <p v-if="manual" class="text-[13px] text-muted-foreground" role="status">
      {{ t('common.copyManual') }}
    </p>
  </div>
</template>
