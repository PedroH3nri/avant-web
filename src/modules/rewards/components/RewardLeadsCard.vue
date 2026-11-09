<script setup lang="ts">
/** Os contatos deixados na janela: busca, filtro por resposta, exportação em CSV e apagar um contato. */
import { computed, onMounted, ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { Download, Search, Trash2 } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Pagination from '@/components/ui/Pagination.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t, type Key } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import type { RewardService } from '@/modules/rewards/service'
import type { Reward, RewardLead } from '@/modules/rewards/types'

const props = defineProps<{ reward: Reward; service: RewardService; canDelete: boolean }>()
const leads = ref<RewardLead[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const query = ref('')
const answer = ref('')
const loadError = ref<string | null>(null)
const removing = ref<RewardLead | null>(null)
const busy = ref(false)

const answerOptions = computed(() => [
  { value: '', label: t('rw.allAnswers') },
  ...props.reward.questions.flatMap((question, index) =>
    question.answers.map((text, answerIndex) => ({ value: `${question.id}:${answerIndex}`, label: t('rw.answerOption', { n: index + 1, answer: text }) })),
  ),
])
const filters = computed(() => {
  const [questionId, chosen] = answer.value.split(':')
  return { q: query.value.trim(), question_id: questionId || undefined, answer: chosen }
})
const columns = computed(() => 5 + props.reward.questions.length)
const removeOpen = computed({
  get: () => removing.value !== null,
  set: (value) => {
    if (!value) removing.value = null
  },
})

/** Carrega a página dos contatos com o filtro. */
async function load() {
  loadError.value = null
  try {
    const found = await props.service.leads(props.reward.id, { page: page.value, ...filters.value })
    leads.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Volta para a primeira página quando o filtro muda. */
function refilter() {
  if (page.value === 1) void load()
  else page.value = 1
}

onMounted(load)
watch(page, load)
watch(query, useDebounceFn(refilter, 300))
watch(answer, refilter)

/** O texto da resposta do contato a uma pergunta, ou um traço quando não respondeu. */
function answerText(lead: RewardLead, questionIndex: number): string {
  const question = props.reward.questions[questionIndex]
  const found = lead.answers.find((item) => item.question_id === question?.id)
  return found ? (question?.answers[found.answer] ?? '—') : '—'
}

/** O idioma do navegador do contato por extenso. */
function languageText(code: string): string {
  return ['pt', 'en', 'es'].includes(code) ? t(`rw.lang.${code}` as Key) : code
}

/** Baixa os contatos do filtro em CSV. */
async function exportLeads() {
  try {
    await props.service.exportLeads(props.reward.id, filters.value)
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}

/** Apaga o contato escolhido. */
async function confirmRemove() {
  const lead = removing.value
  if (!lead) return
  busy.value = true
  try {
    await props.service.removeLead(props.reward.id, lead.id)
    removing.value = null
    toast.success(t('rw.leadDeleted'))
    await load()
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <Card :pad="false">
    <div class="px-6 pt-6">
      <h2 class="text-[20px] font-semibold tracking-tight">{{ t('rw.leads') }}</h2>
      <p class="mt-2 text-[14px] text-muted-foreground">{{ reward.lead?.kind === 'phone' ? t('rw.leadsDesc.phone') : t('rw.leadsDesc.email') }}</p>
    </div>
    <div class="flex flex-wrap items-center gap-3 border-b px-6 py-4">
      <div class="relative w-full sm:w-[260px]">
        <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input v-model="query" :aria-label="t('rw.leadsSearch')" class="h-9 pl-9" :placeholder="t('rw.leadsSearchPlaceholder')" />
      </div>
      <NativeSelect v-if="reward.questions.length" v-model="answer" :aria-label="t('rw.answerFilter')" class="w-full sm:w-[260px]" :options="answerOptions" />
      <Button variant="outline" class="sm:ml-auto" @click="exportLeads"><Download />{{ t('rw.export') }}</Button>
    </div>
    <p v-if="loadError" class="px-6 py-4 text-[14px] text-bad">{{ loadError }}</p>
    <DataTable v-else :min="760" class="rounded-none border-0">
      <thead>
        <tr>
          <th :class="th">{{ t('rw.col.name') }}</th>
          <th :class="th">{{ t('rw.col.contact') }}</th>
          <th :class="th">{{ t('rw.col.language') }}</th>
          <th v-for="(_question, index) in reward.questions" :key="index" :class="th">{{ t('rw.question', { n: index + 1 }) }}</th>
          <th :class="th">{{ t('rw.col.date') }}</th>
          <th :class="th"><span class="sr-only">{{ t('rw.leadDelete') }}</span></th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="columns" :loading="!leads" :empty="leads?.length === 0" :desc="query || answer ? t('rw.leadsEmptyFilter') : t('rw.leadsEmpty')" />
        <tr v-for="lead in leads ?? []" :key="lead.id" class="hover:bg-muted">
          <td :class="[td, 'font-medium']">{{ lead.name }}</td>
          <td :class="[td, 'font-mono text-[13px]']">{{ lead.contact }}</td>
          <td :class="td">{{ languageText(lead.language) }}</td>
          <td v-for="(_question, index) in reward.questions" :key="index" :class="td">{{ answerText(lead, index) }}</td>
          <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground tnum']">{{ formatDate(lead.created_at) }}</td>
          <td :class="[td, 'text-right']">
            <Button v-if="canDelete" variant="ghost" size="icon" class="size-8" :aria-label="t('rw.leadDelete')" @click="removing = lead"><Trash2 /></Button>
          </td>
        </tr>
      </tbody>
    </DataTable>
    <div class="px-6 py-3">
      <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
    </div>
  </Card>
  <ConfirmDialog
    v-model:open="removeOpen"
    :title="t('rw.leadDeleteTitle', { name: removing?.name ?? '' })"
    :desc="t('rw.leadDeleteDesc')"
    :action="t('common.delete')"
    :busy="busy"
    @confirm="confirmRemove"
  />
</template>
