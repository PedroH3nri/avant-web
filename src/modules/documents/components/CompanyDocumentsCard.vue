<script setup lang="ts">
/** Documentos da Empresa ativa: só aparece para quem tem network Manage Inventory; envia, troca e baixa identidade e comprovante. */
import { computed, onMounted, ref } from 'vue'
import { toast } from 'vue-sonner'
import { Download } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DocumentRow from '@/modules/documents/components/DocumentRow.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { DOCUMENT_ACCEPT, DOCUMENT_MAX_BYTES, documentsByKind, download } from '@/modules/documents/rules'
import { documentService } from '@/modules/documents/service'
import type { DocumentKind, DocumentsOverview } from '@/modules/documents/types'

const overview = ref<DocumentsOverview | null>(null)
const sending = ref<DocumentKind | null>(null)
const picker = ref<HTMLInputElement | null>(null)
const picking = ref<DocumentKind | null>(null)
const rows = computed(() => documentsByKind(overview.value?.documents ?? []))

/** Carrega os documentos; um erro só esconde o cartão. */
async function load() {
  try {
    overview.value = await documentService.overview()
  } catch {
    overview.value = null
  }
}
onMounted(load)

/** Abre o seletor de arquivo para o documento escolhido. */
function choose(kind: DocumentKind) {
  picking.value = kind
  picker.value?.click()
}

/** Envia o arquivo escolhido, conferindo o tamanho antes de subir. */
async function send(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  const kind = picking.value
  input.value = ''
  if (!file || !kind) return
  if (file.size > DOCUMENT_MAX_BYTES) {
    toast.error(errorText('document_too_large'))
    return
  }
  sending.value = kind
  try {
    await documentService.upload(kind, file)
    await load()
    toast.success(t('doc.sent'), { description: t('doc.sentDesc') })
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    sending.value = null
  }
}
</script>

<template>
  <Card v-if="overview?.required" :title="t('doc.title')" :desc="t('doc.clientDesc')" :footer-note="t('doc.formats')">
    <input ref="picker" type="file" class="hidden" :accept="DOCUMENT_ACCEPT" @change="send" />
    <ul class="divide-y">
      <DocumentRow v-for="row in rows" :key="row.kind" :kind="row.kind" :document="row.document">
        <Button v-if="row.document" size="sm" variant="outline" @click="download(documentService.fileUrl(row.kind))">
          <Download />{{ t('doc.download') }}
        </Button>
        <Button
          v-if="row.document?.status !== 'approved'"
          size="sm"
          :variant="row.document?.status === 'pending' ? 'outline' : 'default'"
          :loading="sending === row.kind"
          @click="choose(row.kind)"
        >
          {{ row.document ? t('doc.sendOther') : t('doc.send') }}
        </Button>
      </DocumentRow>
    </ul>
  </Card>
</template>
