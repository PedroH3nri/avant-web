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
const text = () => recoveryFile(props.codes, t('rec.fileTitle', { email: session.me?.user.email ?? '' }))

function download() {
  const url = URL.createObjectURL(new Blob([text()], { type: 'text/plain' }))
  const a = document.createElement('a')
  a.href = url
  a.download = 'avant-codigos-de-recuperacao.txt'
  a.click()
  URL.revokeObjectURL(url)
}

async function copyAll() {
  if (await copy(props.codes.join('\n'))) {
    copied.value = true
    setTimeout(() => (copied.value = false), 1600)
    return
  }
  const el = document.getElementById('rec-codes')
  if (el) window.getSelection()?.selectAllChildren(el)
  manual.value = true
}
</script>

<template>
  <div class="grid gap-3">
    <ol id="rec-codes" class="grid grid-cols-2 gap-x-6 gap-y-1.5 rounded-md border bg-muted p-4 font-mono text-[14px] tabular-nums">
      <li v-for="c in codes" :key="c">{{ c }}</li>
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
