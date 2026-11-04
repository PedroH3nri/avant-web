<script setup lang="ts">
/** Painel interno: documentos do cliente Manage Inventory. A equipe baixa, aprova o que está em análise ou recusa com motivo. */
import { computed, onMounted, ref } from 'vue'
import { toast } from 'vue-sonner'
import { Check, Download } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import DocumentRow from '@/modules/documents/components/DocumentRow.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { documentsByKind, download, REASON_MIN } from '@/modules/documents/rules'
import type { ClientDocumentsOverview, DocumentKind } from '@/modules/documents/types'
import { clientService } from '@/modules/internal/clients/service'

const props = defineProps<{ companyId: string }>()
const emit = defineEmits<{ changed: [] }>()

const overview = ref<ClientDocumentsOverview | null>(null)
const busy = ref<DocumentKind | null>(null)
const rejecting = ref<DocumentKind | null>(null)
const reason = ref('')
const rows = computed(() => documentsByKind(overview.value?.documents ?? []))
const rejectOpen = computed({ get: () => rejecting.value !== null, set: (value) => !value && (rejecting.value = null) })

/** Mostra o erro num aviso. */
const fail = (error: unknown) => toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))

/** Carrega os documentos do cliente. */
async function load() {
  try {
    overview.value = await clientService.documents(props.companyId)
  } catch (error) {
    fail(error)
  }
}
onMounted(load)

/** Baixa o arquivo e avisa a página, porque o download entra na auditoria. */
async function downloadFile(kind: DocumentKind) {
  try {
    await download(clientService.documentPath(props.companyId, kind))
    emit('changed')
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}

/** Aprova o documento e recarrega a lista. */
async function approve(kind: DocumentKind) {
  busy.value = kind
  try {
    await clientService.approveDocument(props.companyId, kind)
    await load()
    emit('changed')
    toast.success(t('doc.approved'), { description: t('doc.notified') })
  } catch (error) {
    fail(error)
  } finally {
    busy.value = null
  }
}

/** Abre a janela do motivo da recusa. */
function startReject(kind: DocumentKind) {
  reason.value = ''
  rejecting.value = kind
}

/** Recusa o documento com o motivo escrito. */
async function reject() {
  const kind = rejecting.value
  if (!kind || reason.value.trim().length < REASON_MIN) return
  busy.value = kind
  try {
    await clientService.rejectDocument(props.companyId, kind, reason.value.trim())
    rejecting.value = null
    await load()
    emit('changed')
    toast.success(t('doc.rejected'), { description: t('doc.notified') })
  } catch (error) {
    fail(error)
  } finally {
    busy.value = null
  }
}
</script>

<template>
  <Card v-if="overview" :title="t('doc.title')" :desc="t('doc.staffDesc')">
    <p v-if="!overview.required && !overview.documents.length" class="text-[14px] text-muted-foreground">{{ t('doc.notRequired') }}</p>
    <ul v-else class="divide-y">
      <DocumentRow v-for="row in rows" :key="row.kind" :kind="row.kind" :document="row.document">
        <Button v-if="row.document" size="sm" variant="outline" @click="downloadFile(row.kind)"><Download />{{ t('doc.download') }}</Button>
        <template v-if="row.document?.status === 'pending'">
          <Button size="sm" variant="outline" :disabled="busy !== null" @click="startReject(row.kind)">{{ t('doc.reject') }}</Button>
          <Button size="sm" :loading="busy === row.kind" @click="approve(row.kind)"><Check />{{ t('doc.approve') }}</Button>
        </template>
        <Button v-else-if="row.document?.status === 'approved'" size="sm" variant="outline" @click="startReject(row.kind)">{{ t('doc.reject') }}</Button>
      </DocumentRow>
    </ul>
    <Dialog
      v-model:open="rejectOpen"
      :title="t('doc.rejectTitle', { document: rejecting ? t(`doc.kind.${rejecting}`).toLowerCase() : '' })"
      :desc="t('doc.rejectDesc')"
    >
      <Field id="document-reason" :label="t('doc.reason')">
        <textarea
          id="document-reason"
          v-model="reason"
          rows="3"
          maxlength="1000"
          :placeholder="t('doc.reasonPlaceholder')"
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </Field>
      <template #footer>
        <Button variant="outline" @click="rejecting = null">{{ t('common.cancel') }}</Button>
        <Button variant="danger" :loading="busy !== null" :disabled="reason.trim().length < REASON_MIN" @click="reject">{{ t('doc.reject') }}</Button>
      </template>
    </Dialog>
  </Card>
</template>
