<script setup lang="ts">
/** Nova campanha do Google Ads pelo Avant: Pesquisa, Display ou Demand Gen, com os grupos, as palavras-chave ou os públicos, o anúncio responsivo de cada grupo e a lista "Para criar". */
import { computed, onMounted, ref, watch } from 'vue'
import { ArrowLeft, Plus, Trash2 } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import Segmented from '@/components/ui/Segmented.vue'
import Select from '@/components/ui/Select.vue'
import Status from '@/components/ui/Status.vue'
import Textarea from '@/components/ui/Textarea.vue'
import { ApiError } from '@/lib/api'
import { errorText, locale, t, type Key } from '@/lib/i18n'
import GoogleAdsAdForm from '@/modules/google_ads/components/GoogleAdsAdForm.vue'
import GoogleAdsJobDialog from '@/modules/google_ads/components/GoogleAdsJobDialog.vue'
import GoogleAdsOptionsField from '@/modules/google_ads/components/GoogleAdsOptionsField.vue'
import { CHANNELS, MAX_AD_GROUPS, amount, biddingsFor, blankAdGroup, blankDraft, cleanDraft, draftProblems, jobFinished, problemKey, serverProblems, withChannel } from '@/modules/google_ads/draft-rules'
import { campaignsPath, controlErrorText, formatMoney } from '@/modules/google_ads/rules'
import { googleAdsService } from '@/modules/google_ads/service'
import type { GoogleAdsAccount, GoogleAdsAdInput, GoogleAdsAdGroupInput, GoogleAdsBidding, GoogleAdsChannel, GoogleAdsDraftInput, GoogleAdsJob, GoogleAdsMatchType, GoogleAdsOption } from '@/modules/google_ads/types'
import { siteService } from '@/modules/sites/service'

/** O que a tela guarda de cada grupo além do rascunho: o texto das palavras-chave e os públicos com nome. */
interface GroupExtras {
  keywords: string
  match: GoogleAdsMatchType
  audiences: GoogleAdsOption[]
}

const accounts = ref<GoogleAdsAccount[]>([])
const sites = ref<Map<string, string>>(new Map())
const loadError = ref<string | null>(null)
const draft = ref<GoogleAdsDraftInput>(blankDraft('', groupName(1)))
const extras = ref<GroupExtras[]>([blankExtras()])
const locations = ref<GoogleAdsOption[]>([])
const languages = ref<GoogleAdsOption[]>([])
const selected = ref(0)
const sending = ref(false)
const fromServer = ref<string[]>([])
const job = ref<GoogleAdsJob | null>(null)
const following = ref(false)
const alertText = ref<string | null>(null)

const account = computed(() => accounts.value.find((item) => item.id === draft.value.account_id) ?? null)
const siteUrl = computed(() => (account.value?.site_id && sites.value.get(account.value.site_id) ? `https://${sites.value.get(account.value.site_id)}` : null))
const accountOptions = computed(() => accounts.value.map((item) => ({ value: item.id, label: item.name })))
const channelOptions = computed(() => CHANNELS.map((channel) => ({ value: channel, label: t(`gads.channel.${channel}` as Key) })))
const biddingOptions = computed(() => biddingsFor(draft.value.channel).map((bidding) => ({ value: bidding, label: t(`gads.bidding.${bidding}` as Key) })))
const matchOptions = computed(() => (['EXACT', 'PHRASE', 'BROAD'] as const).map((match) => ({ value: match, label: t(`gads.match.${match}` as Key) })))
const full = computed<GoogleAdsDraftInput>(() => ({
  ...draft.value,
  locations: locations.value.map((item) => item.id),
  languages: languages.value.map((item) => item.id),
  ad_groups: draft.value.ad_groups.map((group, index) => withExtras(group, extras.value[index] ?? blankExtras(), draft.value.channel)),
}))
const pending = computed(() => !!job.value && !jobFinished(job.value))
const problems = computed(() => [...new Set([...fromServer.value, ...draftProblems(full.value, !!account.value?.site_id)])])
const group = computed(() => draft.value.ad_groups[selected.value] ?? null)
const extra = computed(() => extras.value[selected.value] ?? null)
const budgetText = computed(() => {
  const value = amount(draft.value.budget)
  return value ? formatMoney(value, account.value?.currency ?? 'USD', locale.value) : '–'
})

/** O nome de um grupo novo, pela posição. */
function groupName(position: number): string {
  return t('gads.create.groupN', { n: position })
}

/** O que a tela guarda de um grupo novo. */
function blankExtras(): GroupExtras {
  return { keywords: '', match: 'PHRASE', audiences: [] }
}

/** O grupo como vai para a API: palavras-chave uma por linha (Pesquisa) ou os públicos escolhidos. */
function withExtras(item: GoogleAdsAdGroupInput, more: GroupExtras, channel: GoogleAdsChannel): GoogleAdsAdGroupInput {
  const words = [...new Set(more.keywords.split('\n').map((word) => word.trim()).filter((word) => word !== ''))]
  return {
    ...item,
    keywords: channel === 'SEARCH' ? words.map((text) => ({ text, match_type: more.match })) : [],
    audiences: channel === 'SEARCH' ? [] : more.audiences.map((audience) => audience.id),
  }
}

/** Busca as contas ativas que a pessoa usa, os sites e começa o rascunho na primeira conta. */
async function load() {
  loadError.value = null
  try {
    const [found, siteList] = await Promise.all([googleAdsService.accounts(), siteService.options()])
    accounts.value = found.filter((item) => item.status === 'enabled')
    sites.value = new Map(siteList.items.map((site) => [site.id, site.domain]))
    draft.value = blankDraft(accounts.value[0]?.id ?? '', groupName(1))
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Muda campos da campanha. */
function patch(changes: Partial<GoogleAdsDraftInput>) {
  draft.value = { ...draft.value, ...changes }
}

/** Troca o tipo da campanha; os anúncios recomeçam em branco. */
function pickChannel(channel: string) {
  draft.value = withChannel(draft.value, channel as GoogleAdsChannel)
}

/** Muda campos do grupo escolhido. */
function patchGroup(changes: Partial<GoogleAdsAdGroupInput>) {
  draft.value = { ...draft.value, ad_groups: draft.value.ad_groups.map((item, position) => (position === selected.value ? { ...item, ...changes } : item)) }
}

/** Muda o que a tela guarda do grupo escolhido. */
function patchExtras(changes: Partial<GroupExtras>) {
  extras.value = extras.value.map((item, position) => (position === selected.value ? { ...item, ...changes } : item))
}

/** Troca o anúncio do grupo escolhido. */
function setAd(ad: GoogleAdsAdInput) {
  patchGroup({ ads: [ad] })
}

/** Inclui um grupo novo e abre ele. */
function addGroup() {
  const count = draft.value.ad_groups.length + 1
  draft.value = { ...draft.value, ad_groups: [...draft.value.ad_groups, blankAdGroup(groupName(count), draft.value.channel)] }
  extras.value = [...extras.value, blankExtras()]
  selected.value = count - 1
}

/** Tira o grupo escolhido (sempre fica pelo menos um). */
function removeGroup() {
  if (draft.value.ad_groups.length < 2) return
  const target = selected.value
  draft.value = { ...draft.value, ad_groups: draft.value.ad_groups.filter((_group, position) => position !== target) }
  extras.value = extras.value.filter((_extra, position) => position !== target)
  selected.value = 0
}

/** Manda o rascunho; o Google cria a campanha pausada num job que a janela acompanha. */
async function submit() {
  sending.value = true
  fromServer.value = []
  alertText.value = null
  try {
    job.value = await googleAdsService.create(cleanDraft(full.value))
    following.value = true
  } catch (error) {
    const api = error instanceof ApiError ? error : null
    if (api?.code === 'google_ads_draft_invalid') {
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
function finished(done: GoogleAdsJob) {
  job.value = done
  if (done.state !== 'done') return
  draft.value = blankDraft(draft.value.account_id, groupName(1))
  extras.value = [blankExtras()]
  locations.value = []
  languages.value = []
  selected.value = 0
}

watch(
  [draft, extras, locations, languages],
  () => {
    fromServer.value = []
    alertText.value = null
  },
  { deep: true },
)
onMounted(load)
</script>

<template>
  <PageHeader :title="t('gads.create.title')" :sub="t('gads.create.sub')">
    <template #back>
      <RouterLink :to="campaignsPath(false)" class="mb-3 inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft class="size-4" aria-hidden="true" />{{ t('gads.campaignsTitle') }}</RouterLink>
    </template>
  </PageHeader>
  <PageBody class="lg:grid-cols-[220px_minmax(0,1fr)_300px]">
    <LoadError v-if="loadError" class="lg:col-span-3" :message="loadError" @retry="load" />
    <template v-else>
      <nav class="grid content-start gap-1 lg:sticky lg:top-[136px]" :aria-label="t('gads.create.groups')">
        <div class="px-2 pb-1 text-[12px] font-medium text-muted-foreground">{{ t('gads.create.groups') }}</div>
        <button
          v-for="(item, index) in draft.ad_groups"
          :key="index"
          type="button"
          :aria-current="index === selected || undefined"
          :class="['flex h-8 w-full items-center truncate rounded-md px-2 text-left text-[13px]', index === selected ? 'bg-secondary font-medium' : 'text-muted-foreground hover:bg-accent hover:text-foreground']"
          @click="selected = index"
        >
          {{ item.name || t('gads.level.ad_group') }}
        </button>
        <button v-if="draft.ad_groups.length < MAX_AD_GROUPS" type="button" class="flex h-7 items-center gap-1 rounded-md px-2 text-[12px] text-muted-foreground hover:text-foreground" @click="addGroup"><Plus class="size-3.5" aria-hidden="true" />{{ t('gads.level.ad_group') }}</button>
      </nav>

      <div class="grid content-start gap-6">
        <p v-if="!accounts.length" class="rounded-lg border bg-card p-6 text-[14px] text-muted-foreground">{{ t('gads.create.noAccounts') }}</p>
        <template v-else>
          <section class="overflow-hidden rounded-lg border bg-card">
            <div class="p-6">
              <h2 class="text-[20px] font-semibold tracking-tight">{{ t('gads.level.campaign') }}</h2>
              <p class="mt-2 text-[14px] text-muted-foreground">{{ t('gads.create.campaignDesc') }}</p>
            </div>
            <div class="grid gap-4 border-t p-6">
              <div class="text-[14px] font-medium">{{ t('gads.create.type') }}</div>
              <p class="-mt-2 max-w-[70ch] text-[13px] text-muted-foreground">{{ t('gads.create.typeDesc') }}</p>
              <Segmented :model-value="draft.channel" :label="t('gads.create.type')" :options="channelOptions" @update:model-value="pickChannel" />
            </div>
            <div class="grid items-start gap-4 border-t p-6 sm:grid-cols-2">
              <Field id="gads-new-account" :label="t('gads.create.account')" :error="account && !account.site_id && t('gads.problem.account_without_site')">
                <Select id="gads-new-account" :model-value="draft.account_id" :options="accountOptions" @update:model-value="patch({ account_id: $event })" />
              </Field>
              <Field id="gads-new-name" :label="t('gads.create.campaignName')">
                <Input id="gads-new-name" :model-value="draft.name" maxlength="255" @update:model-value="patch({ name: $event })" />
              </Field>
            </div>
            <div class="grid items-start gap-4 border-t p-6 sm:grid-cols-2">
              <Field id="gads-new-budget" :label="t('gads.create.budget')" :hint="t('gads.create.budgetHint', { currency: account?.currency ?? '' })">
                <Input id="gads-new-budget" class="tnum" inputmode="decimal" :model-value="draft.budget ?? ''" @update:model-value="patch({ budget: $event })" />
              </Field>
              <Field id="gads-new-bidding" :label="t('gads.create.bidding')" :hint="draft.bidding === 'MANUAL_CPC' ? t('gads.create.manualHint') : t('gads.create.autoHint')">
                <Select id="gads-new-bidding" :model-value="draft.bidding" :options="biddingOptions" @update:model-value="patch({ bidding: $event as GoogleAdsBidding })" />
              </Field>
            </div>
            <div class="grid gap-4 border-t p-6">
              <div class="text-[14px] font-medium">{{ t('gads.create.where') }}</div>
              <GoogleAdsOptionsField id="gads-new-locations" v-model="locations" kind="location" :label="t('gads.create.locations')" :account-id="draft.account_id" />
              <GoogleAdsOptionsField id="gads-new-languages" v-model="languages" kind="language" :label="t('gads.create.languages')" :hint="t('gads.create.languagesHint')" :account-id="draft.account_id" />
              <p v-if="draft.channel === 'SEARCH'" class="text-[13px] text-muted-foreground">{{ t('gads.create.searchOnly') }}</p>
            </div>
          </section>

          <section v-if="group && extra" class="overflow-hidden rounded-lg border bg-card">
            <div class="flex flex-wrap items-start justify-between gap-3 p-6">
              <div>
                <h2 class="text-[20px] font-semibold tracking-tight">{{ t('gads.level.ad_group') }}</h2>
                <p class="mt-2 text-[14px] text-muted-foreground">{{ t('gads.create.groupDesc') }}</p>
              </div>
              <Button v-if="draft.ad_groups.length > 1" size="sm" variant="ghost" @click="removeGroup"><Trash2 aria-hidden="true" />{{ t('gads.create.removeGroup') }}</Button>
            </div>
            <div class="grid items-start gap-4 border-t p-6 sm:grid-cols-2">
              <Field id="gads-group-name" :label="t('gads.create.groupName')">
                <Input id="gads-group-name" :model-value="group.name" maxlength="255" @update:model-value="patchGroup({ name: $event })" />
              </Field>
              <Field v-if="draft.bidding === 'MANUAL_CPC'" id="gads-group-cpc" :label="t('gads.create.groupCpc')" :hint="t('gads.create.groupCpcHint')">
                <Input id="gads-group-cpc" class="tnum" inputmode="decimal" :model-value="group.cpc ?? ''" @update:model-value="patchGroup({ cpc: $event })" />
              </Field>
            </div>
            <div v-if="draft.channel === 'SEARCH'" class="grid gap-4 border-t p-6">
              <div class="text-[14px] font-medium">{{ t('gads.create.keywords') }}</div>
              <Field id="gads-group-keywords" :label="t('gads.create.keywordsLabel')" :hint="t('gads.create.keywordsHint')">
                <Textarea id="gads-group-keywords" :model-value="extra.keywords" :rows="5" @update:model-value="patchExtras({ keywords: $event })" />
              </Field>
              <Segmented :model-value="extra.match" :label="t('gads.create.match')" :options="matchOptions" @update:model-value="patchExtras({ match: $event as GoogleAdsMatchType })" />
            </div>
            <div v-else class="grid gap-4 border-t p-6">
              <div class="text-[14px] font-medium">{{ t('gads.create.audiences') }}</div>
              <GoogleAdsOptionsField :key="`audiences-${selected}`" id="gads-group-audiences" :model-value="extra.audiences" kind="audience" :label="t('gads.create.audiencesLabel')" :hint="t('gads.create.audiencesHint')" :account-id="draft.account_id" @update:model-value="patchExtras({ audiences: $event })" />
            </div>
            <div class="grid gap-4 border-t p-6">
              <div class="text-[14px] font-medium">{{ t(`gads.create.adTitle.${draft.channel}` as Key) }}</div>
              <p class="-mt-2 max-w-[70ch] text-[13px] text-muted-foreground">{{ t(`gads.create.adDesc.${draft.channel}` as Key) }}</p>
              <GoogleAdsAdForm v-if="group.ads[0]" :key="`ad-${selected}-${draft.channel}`" :model-value="group.ads[0]" :channel="draft.channel" :account-id="draft.account_id" :site-url="siteUrl" id-prefix="gads-ad" @update:model-value="setAd" />
            </div>
          </section>
        </template>
      </div>

      <div class="grid content-start gap-6 lg:sticky lg:top-[136px]">
        <Card :title="t('gads.create.summary')">
          <dl class="grid gap-2 text-[13px]">
            <div class="flex justify-between gap-3"><dt class="text-muted-foreground">{{ t('gads.create.account') }}</dt><dd class="text-right">{{ account?.name ?? '–' }}</dd></div>
            <div class="flex justify-between gap-3"><dt class="text-muted-foreground">{{ t('gads.create.type') }}</dt><dd class="text-right">{{ t(`gads.channel.${draft.channel}` as Key) }}</dd></div>
            <div class="flex justify-between gap-3"><dt class="text-muted-foreground">{{ t('gads.create.perDay') }}</dt><dd class="text-right tnum">{{ budgetText }}</dd></div>
            <div class="flex justify-between gap-3"><dt class="text-muted-foreground">{{ t('gads.create.groups') }}</dt><dd class="text-right tnum">{{ draft.ad_groups.length }}</dd></div>
            <div class="flex justify-between gap-3"><dt class="text-muted-foreground">{{ t('gads.create.onCreate') }}</dt><dd class="text-right">{{ t('gads.create.paused') }}</dd></div>
          </dl>
        </Card>
        <Card :title="t('gads.create.toCreate')">
          <p v-if="!problems.length" class="text-[13px]"><Status tone="ok">{{ t('gads.create.ready') }}</Status></p>
          <ul v-else class="grid gap-1.5">
            <li v-for="problem in problems" :key="problem"><Status tone="bad">{{ t(problemKey(problem)) }}</Status></li>
          </ul>
        </Card>
        <p v-if="alertText" class="text-[13px] text-bad" role="alert">{{ alertText }}</p>
        <Button :disabled="problems.length > 0 || !accounts.length || pending" :loading="sending" @click="submit">{{ t('gads.create.submit') }}</Button>
        <p class="text-[13px] text-muted-foreground">{{ t('gads.create.submitHint') }}</p>
      </div>
    </template>
  </PageBody>
  <GoogleAdsJobDialog v-model:open="following" :job="job" @finished="finished" />
</template>
