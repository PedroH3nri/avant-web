<script setup lang="ts">
/** Editar uma campanha, um conjunto ou um anúncio no Facebook: nome e, conforme o nível, limite de gasto, público ou o anúncio inteiro. */
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import Status from '@/components/ui/Status.vue'
import Switch from '@/components/ui/Switch.vue'
import { ApiError } from '@/lib/api'
import { errorText, t, type Key } from '@/lib/i18n'
import FacebookAdForm from '@/modules/facebook/components/FacebookAdForm.vue'
import FacebookAdsetForm from '@/modules/facebook/components/FacebookAdsetForm.vue'
import FacebookJobDialog from '@/modules/facebook/components/FacebookJobDialog.vue'
import { blankAd, blankAdset, editProblems, objectiveOf, problemKey, serverProblems } from '@/modules/facebook/draft-rules'
import { campaignsPath } from '@/modules/facebook/rules'
import { facebookService } from '@/modules/facebook/service'
import type { FacebookAdInput, FacebookAdsetInput, FacebookEditInput, FacebookJob, FacebookObjectDetail, FacebookObjective } from '@/modules/facebook/types'

const route = useRoute()
const router = useRouter()
const externalId = String(route.params.id)
const back = `${campaignsPath(false)}/${externalId}`

const detail = ref<FacebookObjectDetail | null>(null)
const objective = ref<FacebookObjective>('traffic')
const loadError = ref<string | null>(null)
const name = ref('')
const spendCap = ref('')
const replace = ref(false)
const adset = ref<FacebookAdsetInput>(blankAdset('', 'traffic', ''))
const ad = ref<FacebookAdInput>(blankAd(''))
const fromServer = ref<string[]>([])
const sending = ref(false)
const failure = ref<string | null>(null)
const job = ref<FacebookJob | null>(null)
const following = ref(false)

const level = computed(() => detail.value?.level ?? 'campaign')
const edit = computed<FacebookEditInput>(() => ({
  name: name.value.trim() && name.value.trim() !== detail.value?.name ? name.value.trim() : null,
  spend_cap: level.value === 'campaign' && spendCap.value ? spendCap.value.replace(',', '.') : null,
  adset: level.value === 'adset' && replace.value ? { ...adset.value, ads: [] } : null,
  ad: level.value === 'ad' && replace.value ? ad.value : null,
}))
const problems = computed(() => [...new Set([...fromServer.value, ...editProblems(level.value, edit.value, objective.value)])])

/** Busca o objeto e, para o conjunto, o objetivo da campanha dele (muda as otimizações). */
async function load() {
  loadError.value = null
  try {
    const found = await facebookService.object(externalId)
    detail.value = found
    name.value = found.name
    const campaign = found.level === 'campaign' ? found : await facebookService.object(found.campaign_external_id)
    objective.value = objectiveOf(campaign.objective)
    adset.value = blankAdset(found.name, objective.value, '')
    ad.value = blankAd(found.name)
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Manda a edição; o Facebook aplica num job que a janela acompanha. */
async function submit() {
  sending.value = true
  fromServer.value = []
  failure.value = null
  try {
    job.value = await facebookService.edit(externalId, edit.value)
    following.value = true
  } catch (error) {
    const api = error instanceof ApiError ? error : null
    if (api?.code === 'facebook_draft_invalid') fromServer.value = serverProblems(api.details)
    else failure.value = errorText(api?.code ?? 'unknown')
  } finally {
    sending.value = false
  }
}

/** Quando a edição termina bem, volta para a tela do objeto. */
function finished(done: FacebookJob) {
  if (done.state === 'done') router.push(back)
}

onMounted(load)
</script>

<template>
  <PageHeader :title="t(`fb.edit.title.${level}` as Key)" :sub="detail ? t('fb.edit.sub', { name: detail.name }) : undefined">
    <template #back>
      <RouterLink :to="back" class="mb-3 inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft class="size-4" aria-hidden="true" />{{ detail?.name ?? t('fb.campaignsTitle') }}</RouterLink>
    </template>
  </PageHeader>
  <PageBody class="lg:grid-cols-[minmax(0,1fr)_300px]">
    <LoadError v-if="loadError" class="lg:col-span-2" :message="loadError" @retry="load" />
    <template v-else-if="detail">
      <div class="grid content-start gap-6">
        <section class="overflow-hidden rounded-lg border bg-card">
          <div class="grid items-start gap-4 p-6 sm:grid-cols-2">
            <Field id="fb-edit-name" :label="t('fb.edit.name')">
              <Input id="fb-edit-name" :model-value="name" maxlength="400" @update:model-value="name = $event" />
            </Field>
            <Field v-if="level === 'campaign'" id="fb-edit-cap" :label="t('fb.create.spendCap')" :hint="t('fb.create.spendCapHint')">
              <Input id="fb-edit-cap" inputmode="decimal" class="tnum" :model-value="spendCap" @update:model-value="spendCap = $event" />
            </Field>
          </div>
          <div v-if="level !== 'campaign'" class="flex items-start gap-3 border-t p-6">
            <Switch id="fb-edit-replace" class="mt-0.5" :label="t(`fb.edit.replace.${level}` as Key)" :model-value="replace" @update:model-value="replace = $event" />
            <span>
              <span class="block text-[14px] font-medium">{{ t(`fb.edit.replace.${level}` as Key) }}</span>
              <span class="block text-[13px] text-muted-foreground">{{ t(`fb.edit.replaceDesc.${level}` as Key) }}</span>
            </span>
          </div>
          <FacebookAdsetForm v-if="level === 'adset' && replace" v-model="adset" :account-id="detail.account.id" :objective="objective" :budget-here="false" :lifetime="false" :special="false" />
          <FacebookAdForm v-if="level === 'ad' && replace" v-model="ad" :account-id="detail.account.id" />
        </section>
      </div>
      <div class="grid content-start gap-6 lg:sticky lg:top-[136px]">
        <Card :title="t('fb.edit.onSave')">
          <ul class="grid list-disc gap-2 pl-4 text-[13px] text-muted-foreground">
            <li>{{ t(`fb.edit.note.${level}` as Key) }}</li>
            <li>{{ t('fb.edit.noteBudget') }}</li>
            <li>{{ t('fb.edit.noteHistory') }}</li>
          </ul>
        </Card>
        <Card :title="t('fb.edit.toSave')">
          <p v-if="!problems.length" class="text-[13px]"><Status tone="ok">{{ t('fb.create.ready') }}</Status></p>
          <ul v-else class="grid gap-1.5">
            <li v-for="problem in problems" :key="problem"><Status tone="bad">{{ t(problemKey(problem)) }}</Status></li>
          </ul>
        </Card>
        <p v-if="failure" class="text-[13px] text-bad" role="alert">{{ failure }}</p>
        <Button :disabled="problems.length > 0" :loading="sending" @click="submit">{{ t('fb.edit.submit') }}</Button>
        <RouterLink :to="back" class="text-center text-[13px] text-muted-foreground hover:text-foreground">{{ t('common.cancel') }}</RouterLink>
      </div>
    </template>
  </PageBody>
  <FacebookJobDialog v-model:open="following" :job="job" @finished="finished" />
</template>
