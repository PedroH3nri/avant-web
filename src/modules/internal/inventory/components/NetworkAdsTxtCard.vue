<script setup lang="ts">
/** As linhas do ads.txt da network nos detalhes dela, com o botão de copiar. O seller ID vem do GAM
 * de hora em hora; sem ele, o card diz o que falta. Só para quem vê as ferramentas do GAM. */
import { ref, watch } from 'vue'
import { Copy } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { gamToolService } from '@/modules/internal/gam_tools/service'

const props = defineProps<{ networkId: string; inventory: boolean }>()
const lines = ref<string[] | null>(null)
const failure = ref<string | null>(null)

/** Busca as linhas do ads.txt; o erro vira o texto do card. */
async function load() {
  lines.value = null
  failure.value = null
  try {
    lines.value = (await gamToolService.adsTxt(props.networkId)).lines
  } catch (error) {
    failure.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
watch(() => props.networkId, load, { immediate: true })

/** Copia as linhas para colar no ads.txt do site. */
async function copy() {
  if (!lines.value) return
  try {
    await navigator.clipboard.writeText(lines.value.join('\n'))
    toast.success(t('gamt.ads.copied'))
  } catch {
    toast.error(t('gamt.ads.copyFailed'))
  }
}
</script>

<template>
  <Card :title="t('gamt.tool.ads_txt')" :desc="t(inventory ? 'netd.adsTxt.descInventory' : 'netd.adsTxt.desc')">
    <pre v-if="lines" class="overflow-x-auto rounded-md border bg-muted p-3 font-mono text-[13px] leading-6">{{ lines.join('\n') }}</pre>
    <p v-else-if="failure" class="text-[14px] text-muted-foreground">{{ failure }}</p>
    <p v-else class="text-[14px] text-muted-foreground">{{ t('common.loading') }}</p>
    <template v-if="lines" #footer>
      <Button variant="outline" @click="copy"><Copy />{{ t('gamt.ads.copy') }}</Button>
    </template>
  </Card>
</template>
