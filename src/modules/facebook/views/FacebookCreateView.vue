<script setup lang="ts">
/** Nova campanha do Facebook pelo Avant, no formato do Gerenciador de Anúncios: campanha, conjuntos e anúncios, com a lista "Para criar" e o acompanhamento da criação. */
import { computed, onMounted, ref, watch } from 'vue'
import { ArrowLeft, Copy, Plus, Trash2 } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Status from '@/components/ui/Status.vue'
import { ApiError } from '@/lib/api'
import { errorText, locale, t, type Key } from '@/lib/i18n'
import FacebookAdForm from '@/modules/facebook/components/FacebookAdForm.vue'
import FacebookAdsetForm from '@/modules/facebook/components/FacebookAdsetForm.vue'
import FacebookCampaignForm from '@/modules/facebook/components/FacebookCampaignForm.vue'
import FacebookJobDialog from '@/modules/facebook/components/FacebookJobDialog.vue'
import { MAX_ADSETS, blankAd, blankAdset, blankDraft, draftDaily, draftProblems, problemKey, serverProblems } from '@/modules/facebook/draft-rules'
import { campaignsPath, controlErrorText, formatMoney } from '@/modules/facebook/rules'
import { facebookService } from '@/modules/facebook/service'
import type { FacebookAccount, FacebookAdInput, FacebookAdsetInput, FacebookDraftInput, FacebookJob } from '@/modules/facebook/types'

type Selection = { kind: 'campaign' } | { kind: 'adset'; adset: number } | { kind: 'ad'; adset: number; ad: number }

const accounts = ref<FacebookAccount[]>([])
const loadError = ref<string | null>(null)
const draft = ref<FacebookDraftInput>(blankDraft('', names(1, 1)))
const selection = ref<Selection>({ kind: 'campaign' })
const sending = ref(false)
const fromServer = ref<string[]>([])
const job = ref<FacebookJob | null>(null)
const following = ref(false)
const alertText = ref<string | null>(null)

const account = computed(() => accounts.value.find((item) => item.id === draft.value.account_id) ?? null)
const problems = computed(() => [...new Set([...fromServer.value, ...draftProblems(draft.value, !!account.value?.site_id)])])
const adCount = computed(() => draft.value.adsets.reduce((total, adset) => total + adset.ads.length, 0))
const daily = computed(() => formatMoney(String(draftDaily(draft.value)), account.value?.currency ?? 'USD', locale.value))
const selectedAdset = computed(() => (selection.value.kind === 'campaign' ? null : (draft.value.adsets[selection.value.adset] ?? null)))
const selectedAd = computed(() => (selection.value.kind === 'ad' ? (selectedAdset.value?.ads[selection.value.ad] ?? null) : null))

/** Os nomes de um conjunto e de um anúncio novos, pela posição. */
function names(adset: number, ad: number) {
  return { adset: t('fb.create.adsetN', { n: adset }), ad: t('fb.create.adN', { n: ad }) }
}

/** Busca as contas ativas que a pessoa usa e começa o rascunho na primeira. */
async function load() {
  loadError.value = null
  try {
    accounts.value = (await facebookService.accounts()).filter((item) => item.state === 'active')
    draft.value = blankDraft(accounts.value[0]?.id ?? '', names(1, 1))
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Troca um conjunto pela posição. */
function setAdset(index: number, adset: FacebookAdsetInput) {
  draft.value = { ...draft.value, adsets: draft.value.adsets.map((item, position) => (position === index ? adset : item)) }
}

/** Troca um anúncio pela posição. */
function setAd(adsetIndex: number, adIndex: number, ad: FacebookAdInput) {
  const adset = draft.value.adsets[adsetIndex]
  if (!adset) return
  setAdset(adsetIndex, { ...adset, ads: adset.ads.map((item, position) => (position === adIndex ? ad : item)) })
}

/** Inclui um conjunto novo e abre ele. */
function addAdset() {
  const count = draft.value.adsets.length + 1
  draft.value = { ...draft.value, adsets: [...draft.value.adsets, blankAdset(names(count, 1).adset, draft.value.objective, names(count, 1).ad)] }
  selection.value = { kind: 'adset', adset: count - 1 }
}

/** Copia o conjunto com os anúncios, para testar outro público. */
function copyAdset(index: number) {
  const source = draft.value.adsets[index]
  if (!source) return
  draft.value = { ...draft.value, adsets: [...draft.value.adsets, { ...source, name: t('fb.create.copyOf', { name: source.name }) }] }
  selection.value = { kind: 'adset', adset: draft.value.adsets.length - 1 }
}

/** Inclui um anúncio novo no conjunto e abre ele. */
function addAd(index: number) {
  const adset = draft.value.adsets[index]
  if (!adset) return
  setAdset(index, { ...adset, ads: [...adset.ads, blankAd(names(index + 1, adset.ads.length + 1).ad)] })
  selection.value = { kind: 'ad', adset: index, ad: adset.ads.length }
}

/** Tira o conjunto ou o anúncio selecionado (sempre fica pelo menos um). */
function removeSelected() {
  const target = selection.value
  if (target.kind === 'adset' && draft.value.adsets.length > 1) {
    draft.value = { ...draft.value, adsets: draft.value.adsets.filter((_adset, position) => position !== target.adset) }
    selection.value = { kind: 'campaign' }
  }
  if (target.kind === 'ad') {
    const adset = draft.value.adsets[target.adset]
    if (!adset || adset.ads.length < 2) return
    setAdset(target.adset, { ...adset, ads: adset.ads.filter((_ad, position) => position !== target.ad) })
    selection.value = { kind: 'adset', adset: target.adset }
  }
}

/** Diz se a seleção é o item da árvore. */
function isSelected(kind: Selection['kind'], adset = -1, ad = -1): boolean {
  const current = selection.value
  if (current.kind !== kind) return false
  if (current.kind === 'adset') return current.adset === adset
  if (current.kind === 'ad') return current.adset === adset && current.ad === ad
  return true
}

/** Manda o rascunho; o Facebook cria tudo pausado num job que a janela acompanha. */
async function submit() {
  sending.value = true
  fromServer.value = []
  alertText.value = null
  try {
    job.value = await facebookService.create(draft.value)
    following.value = true
  } catch (error) {
    const api = error instanceof ApiError ? error : null
    if (api?.code === 'facebook_draft_invalid') {
      fromServer.value = serverProblems(api.details)
      return
    }
    const limit = api ? controlErrorText(api.code, api.details, locale.value) : null
    alertText.value = limit ? t(limit.key, limit.params) : errorText(api?.code ?? 'unknown')
  } finally {
    sending.value = false
  }
}

/** Quando o job termina bem, começa um rascunho novo na mesma conta. */
function finished(done: FacebookJob) {
  if (done.state === 'done') draft.value = blankDraft(draft.value.account_id, names(1, 1))
}

watch(
  draft,
  () => {
    fromServer.value = []
    alertText.value = null
  },
  { deep: true },
)
onMounted(load)
</script>

<template>
  <PageHeader :title="t('fb.create.title')" :sub="t('fb.create.sub')">
    <template #back>
      <RouterLink :to="campaignsPath(false)" class="mb-3 inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft class="size-4" aria-hidden="true" />{{ t('fb.campaignsTitle') }}</RouterLink>
    </template>
  </PageHeader>
  <PageBody class="lg:grid-cols-[220px_minmax(0,1fr)_300px]">
    <LoadError v-if="loadError" class="lg:col-span-3" :message="loadError" @retry="load" />
    <template v-else>
      <nav class="grid content-start gap-1 lg:sticky lg:top-[136px]" :aria-label="t('fb.create.structure')">
        <div class="px-2 pb-1 text-[12px] font-medium text-muted-foreground">{{ t('fb.create.structure') }}</div>
        <button type="button" :aria-current="isSelected('campaign') || undefined" :class="['flex h-8 w-full items-center truncate rounded-md px-2 text-left text-[13px]', isSelected('campaign') ? 'bg-secondary font-medium' : 'text-muted-foreground hover:bg-accent hover:text-foreground']" @click="selection = { kind: 'campaign' }">
          {{ draft.name || t('fb.level.campaign') }}
        </button>
        <div v-for="(adset, adsetIndex) in draft.adsets" :key="adsetIndex" class="grid gap-1">
          <button type="button" :aria-current="isSelected('adset', adsetIndex) || undefined" :class="['flex h-8 w-full items-center truncate rounded-md pl-5 pr-2 text-left text-[13px]', isSelected('adset', adsetIndex) ? 'bg-secondary font-medium' : 'text-muted-foreground hover:bg-accent hover:text-foreground']" @click="selection = { kind: 'adset', adset: adsetIndex }">
            {{ adset.name || t('fb.level.adset') }}
          </button>
          <button
            v-for="(ad, adIndex) in adset.ads"
            :key="adIndex"
            type="button"
            :aria-current="isSelected('ad', adsetIndex, adIndex) || undefined"
            :class="['flex h-8 w-full items-center truncate rounded-md pl-9 pr-2 text-left text-[13px]', isSelected('ad', adsetIndex, adIndex) ? 'bg-secondary font-medium' : 'text-muted-foreground hover:bg-accent hover:text-foreground']"
            @click="selection = { kind: 'ad', adset: adsetIndex, ad: adIndex }"
          >
            {{ ad.name || t('fb.level.ad') }}
          </button>
          <button type="button" class="flex h-7 items-center gap-1 rounded-md pl-9 text-[12px] text-muted-foreground hover:text-foreground" @click="addAd(adsetIndex)"><Plus class="size-3.5" aria-hidden="true" />{{ t('fb.level.ad') }}</button>
        </div>
        <button v-if="draft.adsets.length < MAX_ADSETS" type="button" class="flex h-7 items-center gap-1 rounded-md pl-5 text-[12px] text-muted-foreground hover:text-foreground" @click="addAdset"><Plus class="size-3.5" aria-hidden="true" />{{ t('fb.level.adset') }}</button>
      </nav>

      <div class="grid content-start gap-6">
        <p v-if="!accounts.length" class="rounded-lg border bg-card p-6 text-[14px] text-muted-foreground">{{ t('fb.create.noAccounts') }}</p>
        <FacebookCampaignForm v-else-if="selection.kind === 'campaign'" v-model="draft" :accounts="accounts" />
        <section v-else-if="selection.kind === 'adset' && selectedAdset" class="overflow-hidden rounded-lg border bg-card">
          <div class="flex flex-wrap items-start justify-between gap-3 p-6">
            <div>
              <h2 class="text-[20px] font-semibold tracking-tight">{{ t('fb.level.adset') }}</h2>
              <p class="mt-2 text-[14px] text-muted-foreground">{{ t('fb.create.adsetDesc') }}</p>
            </div>
            <div class="flex gap-2">
              <Button v-if="draft.adsets.length < MAX_ADSETS" size="sm" variant="outline" @click="copyAdset(selection.adset)"><Copy aria-hidden="true" />{{ t('fb.create.copyAdset') }}</Button>
              <Button v-if="draft.adsets.length > 1" size="sm" variant="ghost" @click="removeSelected"><Trash2 aria-hidden="true" />{{ t('fb.create.removeItem') }}</Button>
            </div>
          </div>
          <FacebookAdsetForm
            :key="`adset-${selection.adset}`"
            :model-value="selectedAdset"
            :account-id="draft.account_id"
            :objective="draft.objective"
            :budget-here="draft.budget_at === 'adset'"
            :lifetime="draft.budget_kind === 'lifetime'"
            :special="draft.special_categories.length > 0"
            @update:model-value="setAdset(selection.adset, $event)"
          />
        </section>
        <section v-else-if="selection.kind === 'ad' && selectedAd" class="overflow-hidden rounded-lg border bg-card">
          <div class="flex flex-wrap items-start justify-between gap-3 p-6">
            <div>
              <h2 class="text-[20px] font-semibold tracking-tight">{{ t('fb.level.ad') }}</h2>
              <p class="mt-2 text-[14px] text-muted-foreground">{{ t('fb.create.adDesc', { name: selectedAdset?.name ?? '' }) }}</p>
            </div>
            <Button v-if="(selectedAdset?.ads.length ?? 0) > 1" size="sm" variant="ghost" @click="removeSelected"><Trash2 aria-hidden="true" />{{ t('fb.create.removeItem') }}</Button>
          </div>
          <FacebookAdForm :key="`ad-${selection.adset}-${selection.ad}`" :model-value="selectedAd" :account-id="draft.account_id" @update:model-value="setAd(selection.adset, selection.ad, $event)" />
        </section>
      </div>

      <div class="grid content-start gap-6 lg:sticky lg:top-[136px]">
        <Card :title="t('fb.create.summary')">
          <dl class="grid gap-2 text-[13px]">
            <div class="flex justify-between gap-3"><dt class="text-muted-foreground">{{ t('fb.create.account') }}</dt><dd class="text-right">{{ account?.name ?? '–' }}</dd></div>
            <div class="flex justify-between gap-3"><dt class="text-muted-foreground">{{ t('fb.create.objective') }}</dt><dd class="text-right">{{ t(`fb.objective.${draft.objective}` as Key) }}</dd></div>
            <div class="flex justify-between gap-3"><dt class="text-muted-foreground">{{ t('fb.create.perDay') }}</dt><dd class="text-right tnum">{{ daily }}</dd></div>
            <div class="flex justify-between gap-3"><dt class="text-muted-foreground">{{ t('fb.create.structure') }}</dt><dd class="text-right">{{ t('fb.create.counts', { adsets: draft.adsets.length, ads: adCount }) }}</dd></div>
            <div class="flex justify-between gap-3"><dt class="text-muted-foreground">{{ t('fb.create.onCreate') }}</dt><dd class="text-right">{{ t(draft.start_active ? 'fb.create.startActive' : 'fb.create.startPaused') }}</dd></div>
          </dl>
        </Card>
        <Card :title="t('fb.create.toCreate')">
          <p v-if="!problems.length" class="text-[13px]"><Status tone="ok">{{ t('fb.create.ready') }}</Status></p>
          <ul v-else class="grid gap-1.5">
            <li v-for="problem in problems" :key="problem"><Status tone="bad">{{ t(problemKey(problem)) }}</Status></li>
          </ul>
        </Card>
        <p v-if="alertText" class="text-[13px] text-bad" role="alert">{{ alertText }}</p>
        <Button :disabled="problems.length > 0 || !accounts.length" :loading="sending" @click="submit">{{ t('fb.create.submit') }}</Button>
        <p class="text-[13px] text-muted-foreground">{{ t('fb.create.submitHint') }}</p>
      </div>
    </template>
  </PageBody>
  <FacebookJobDialog v-model:open="following" :job="job" @finished="finished" />
</template>
