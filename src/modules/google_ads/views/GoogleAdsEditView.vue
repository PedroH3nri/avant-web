<script setup lang="ts">
/** Editar no Google Ads: o nome da campanha ou do grupo, o CPC máximo do grupo (com CPC manual) ou o anúncio responsivo inteiro, que volta para a análise do Google. */
import { computed, onMounted, ref, watch } from 'vue'
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
import { ApiError } from '@/lib/api'
import { errorText, t, type Key } from '@/lib/i18n'
import GoogleAdsAdForm from '@/modules/google_ads/components/GoogleAdsAdForm.vue'
import GoogleAdsJobDialog from '@/modules/google_ads/components/GoogleAdsJobDialog.vue'
import { amount, blankAd, channelOf, cleanAd, editProblems, problemKey, serverProblems } from '@/modules/google_ads/draft-rules'
import { MANUAL_BIDDING, isLevel, objectPath } from '@/modules/google_ads/rules'
import { googleAdsService } from '@/modules/google_ads/service'
import { siteService } from '@/modules/sites/service'
import type { GoogleAdsAdInput, GoogleAdsChannel, GoogleAdsEditInput, GoogleAdsJob, GoogleAdsLevel, GoogleAdsObjectDetail } from '@/modules/google_ads/types'

const route = useRoute()
const router = useRouter()
const level: GoogleAdsLevel = isLevel(route.params.level) ? route.params.level : 'campaign'
const externalId = String(route.params.id)
const back = objectPath(false, { level, external_id: externalId })

const detail = ref<GoogleAdsObjectDetail | null>(null)
const channel = ref<GoogleAdsChannel | null>(null)
const manual = ref(false)
const loadError = ref<string | null>(null)
const name = ref('')
const cpc = ref('')
const ad = ref<GoogleAdsAdInput>(blankAd('SEARCH'))
const fromServer = ref<string[]>([])
const sending = ref(false)
const failure = ref<string | null>(null)
const job = ref<GoogleAdsJob | null>(null)
const following = ref(false)

const siteUrl = ref<string | null>(null)
const edit = computed<GoogleAdsEditInput>(() => ({
  name: level !== 'ad' && name.value.trim() && name.value.trim() !== detail.value?.name ? name.value.trim() : null,
  cpc: level === 'ad_group' && manual.value && amount(cpc.value) !== amount(detail.value?.cpc_bid ?? '') ? amount(cpc.value) : null,
  ad: level === 'ad' ? cleanAd(ad.value) : null,
}))
const problems = computed(() => {
  if (!channel.value) return ['channel_not_supported']
  return [...new Set([...fromServer.value, ...editProblems(level, channel.value, edit.value)])]
})

/** A origem e o caminho de um link final, para o anúncio novo começar no mesmo lugar do site. */
function urlParts(url: string | null): { origin: string | null; path: string } {
  if (!url) return { origin: null, path: '/' }
  try {
    const parsed = new URL(url)
    return { origin: parsed.origin, path: `${parsed.pathname}${parsed.search}` || '/' }
  } catch {
    return { origin: null, path: '/' }
  }
}

/** O endereço do site da conta, que é onde o Avant monta o link final do anúncio. */
async function accountSite(accountId: string): Promise<string | null> {
  const [accounts, sites] = await Promise.all([googleAdsService.accounts(), siteService.options()])
  const siteId = accounts.find((account) => account.id === accountId)?.site_id
  const domain = sites.items.find((site) => site.id === siteId)?.domain
  return domain ? `https://${domain}` : null
}

/** Busca o objeto com a campanha dele (o tipo decide o anúncio; o lance decide se o grupo tem CPC). */
async function load() {
  loadError.value = null
  try {
    const found = await googleAdsService.object(level, externalId)
    siteUrl.value = level === 'ad' ? await accountSite(found.account.id) : null
    const campaign = found.level === 'campaign' ? found : found.campaign
    detail.value = found
    name.value = found.name
    cpc.value = found.cpc_bid ?? ''
    channel.value = channelOf(campaign?.channel_type ?? null)
    manual.value = MANUAL_BIDDING.includes(campaign?.bidding_strategy ?? '')
    const current = urlParts(found.final_url)
    const sameSite = !!siteUrl.value && current.origin === new URL(siteUrl.value).origin
    ad.value = { ...blankAd(channel.value ?? 'SEARCH'), link_path: sameSite ? current.path : '/' }
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Manda a edição; o Google aplica num job que a janela acompanha. */
async function submit() {
  sending.value = true
  fromServer.value = []
  failure.value = null
  try {
    job.value = await googleAdsService.edit(level, externalId, edit.value)
    following.value = true
  } catch (error) {
    const api = error instanceof ApiError ? error : null
    if (api?.code === 'google_ads_draft_invalid') fromServer.value = serverProblems(api.details)
    else failure.value = errorText(api?.code ?? 'unknown')
  } finally {
    sending.value = false
  }
}

/** Quando a edição termina bem, volta para a tela do objeto. */
function finished(done: GoogleAdsJob) {
  if (done.state === 'done') router.push(back)
}

watch(
  [name, cpc, ad],
  () => {
    fromServer.value = []
    failure.value = null
  },
  { deep: true },
)
onMounted(load)
</script>

<template>
  <PageHeader :title="t(`gads.edit.title.${level}` as Key)" :sub="detail ? t('gads.edit.sub', { name: detail.name }) : undefined">
    <template #back>
      <RouterLink :to="back" class="mb-3 inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft class="size-4" aria-hidden="true" />{{ detail?.name ?? t('gads.campaignsTitle') }}</RouterLink>
    </template>
  </PageHeader>
  <PageBody class="lg:grid-cols-[minmax(0,1fr)_300px]">
    <LoadError v-if="loadError" class="lg:col-span-2" :message="loadError" @retry="load" />
    <template v-else-if="detail">
      <div class="grid content-start gap-6">
        <section class="overflow-hidden rounded-lg border bg-card">
          <div v-if="level !== 'ad'" class="grid items-start gap-4 p-6 sm:grid-cols-2">
            <Field id="gads-edit-name" :label="t('gads.edit.name')">
              <Input id="gads-edit-name" :model-value="name" maxlength="255" @update:model-value="name = $event" />
            </Field>
            <Field v-if="level === 'ad_group' && manual" id="gads-edit-cpc" :label="t('gads.create.groupCpc')" :hint="t('gads.create.groupCpcHint')">
              <Input id="gads-edit-cpc" inputmode="decimal" class="tnum" :model-value="cpc" @update:model-value="cpc = $event" />
            </Field>
          </div>
          <div v-else-if="channel" class="grid gap-4 p-6">
            <p class="max-w-[70ch] text-[13px] text-muted-foreground">{{ t('gads.edit.adDesc') }}</p>
            <GoogleAdsAdForm v-model="ad" :channel="channel" :account-id="detail.account.id" :site-url="siteUrl" id-prefix="gads-edit-ad" />
          </div>
          <p v-else class="p-6 text-[14px] text-muted-foreground">{{ t('gads.problem.channel_not_supported') }}</p>
        </section>
      </div>
      <div class="grid content-start gap-6 lg:sticky lg:top-[136px]">
        <Card :title="t('gads.edit.onSave')">
          <ul class="grid list-disc gap-2 pl-4 text-[13px] text-muted-foreground">
            <li>{{ t(`gads.edit.note.${level}` as Key) }}</li>
            <li>{{ t('gads.edit.noteFixed') }}</li>
            <li>{{ t('gads.edit.noteHistory') }}</li>
          </ul>
        </Card>
        <Card :title="t('gads.edit.toSave')">
          <p v-if="!problems.length" class="text-[13px]"><Status tone="ok">{{ t('gads.create.ready') }}</Status></p>
          <ul v-else class="grid gap-1.5">
            <li v-for="problem in problems" :key="problem"><Status tone="bad">{{ t(problemKey(problem)) }}</Status></li>
          </ul>
        </Card>
        <p v-if="failure" class="text-[13px] text-bad" role="alert">{{ failure }}</p>
        <Button :disabled="problems.length > 0" :loading="sending" @click="submit">{{ t('gads.edit.submit') }}</Button>
        <RouterLink :to="back" class="text-center text-[13px] text-muted-foreground hover:text-foreground">{{ t('common.cancel') }}</RouterLink>
      </div>
    </template>
  </PageBody>
  <GoogleAdsJobDialog v-model:open="following" :job="job" @finished="finished" />
</template>
