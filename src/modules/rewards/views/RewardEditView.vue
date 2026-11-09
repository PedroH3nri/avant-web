<script setup lang="ts">
/** Criar ou editar um reward: formulário à esquerda e a prévia ao vivo à direita, com idioma, aparelho e etapas. */
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDebounceFn } from '@vueuse/core'
import { DropdownMenuRoot, DropdownMenuSeparator, DropdownMenuTrigger } from 'reka-ui'
import { AlertTriangle, ArrowLeft, BarChart3, Monitor, MoreHorizontal, Plus, Smartphone, Trash2 } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { rewardSteps } from '@/embed/reward/steps'
import type { RewardStep, VisitorLanguage } from '@/embed/reward/types'
import { ApiError } from '@/lib/api'
import { errorText, lang, locale, t, type Key } from '@/lib/i18n'
import ColorField from '@/modules/rewards/components/ColorField.vue'
import RewardPreview from '@/modules/rewards/components/RewardPreview.vue'
import {
  adUnitNames,
  blankInput,
  contrastWarning,
  dayText,
  EMOJIS,
  FONTS,
  formProblems,
  ICON_ACCEPT,
  ICON_MAX_BYTES,
  inputOf,
  LAYOUTS,
  LIMITS,
  MAX_QUESTIONS,
  PRESETS,
  previewReward,
  rewardPermission,
  rewardsPath,
  toPayload,
} from '@/modules/rewards/rules'
import { rewardService } from '@/modules/rewards/service'
import type { Reward, RewardAdUnitGroup, RewardIconKind, RewardInput, RewardSiteOption, RewardTrigger } from '@/modules/rewards/types'
import { useSession } from '@/stores/session'

const route = useRoute()
const router = useRouter()
const session = useSession()
const internal = route.meta.internal === true
const service = rewardService(internal)
const base = rewardsPath(internal)
const rewardId = typeof route.params.id === 'string' ? route.params.id : null
const original = ref<Reward | null>(null)
const input = ref<RewardInput | null>(null)
const site = ref<RewardSiteOption | null>(null)
const sites = ref<RewardSiteOption[]>([])
const siteQuery = ref('')
const groups = ref<RewardAdUnitGroup[]>([])
const iconFile = ref<File | null>(null)
const iconPreview = ref<string | null>(null)
const loadError = ref<string | null>(null)
const tried = ref(false)
const pageTaken = ref(false)
const busy = ref(false)
const removeOpen = ref(false)
const device = ref<'desktop' | 'mobile'>('desktop')
const visitorLang = ref<VisitorLanguage>(lang.value)
const previewIndex = ref(0)

const canManage = computed(() => session.can(rewardPermission(internal, 'manage')))
const hasImage = computed(() => iconFile.value !== null || (original.value?.icon_kind === 'image' && original.value.icon_url !== null))
const iconUrl = computed(() => iconPreview.value ?? original.value?.icon_url ?? null)
const problems = computed(() => (input.value ? formProblems(input.value, hasImage.value) : new Set()))
const preview = computed(() => (input.value ? previewReward(input.value, iconUrl.value) : null))
const steps = computed(() => (preview.value ? rewardSteps(preview.value) : []))
const shownStep = computed<RewardStep>(() => steps.value[Math.min(previewIndex.value, steps.value.length - 1)] ?? { kind: 'reward' })
const warning = computed(() => (input.value ? contrastWarning(input.value.style) : null))
const domain = computed(() => site.value?.domain ?? original.value?.domain ?? '')
const siteOptions = computed(() => sites.value.map((option) => ({ value: option.id, label: option.client ? `${option.domain} · ${option.client}` : option.domain })))
const devices = computed(() => ({ desktop: t('rw.device.desktop'), mobile: t('rw.device.mobile') }))
const adUnitOptions = computed(() => {
  const latest = groups.value[0]
  return [
    { value: '', label: latest ? t('rw.adUnitsLatestOn', { day: dayText(latest.day, locale.value) }) : t('rw.adUnitsLatest') },
    ...groups.value.map((group) => ({ value: group.day, label: t('rw.adUnitsFixed', { day: dayText(group.day, locale.value) }) })),
  ]
})
const adUnitHint = computed(() => {
  if (!input.value) return ''
  const chosen = input.value.ad_unit_day ? groups.value.find((group) => group.day === input.value?.ad_unit_day) : groups.value[0]
  if (!chosen) return t('rw.adUnitsNone')
  const units = adUnitNames(chosen.ad_units, devices.value)
  return input.value.ad_unit_day ? t('rw.adUnitsFixedHint', { units }) : t('rw.adUnitsLatestHint', { units })
})
const triggerSummary = computed(() => {
  const current = input.value
  if (!current) return ''
  if (current.trigger === 'scroll') return t('rw.summary.scroll', { n: current.scroll_percent ?? 0 })
  if (current.trigger === 'click') return t('rw.summary.click', { selector: current.click_selector?.trim() || '…' })
  return t('rw.summary.load')
})

/** Mensagem do campo quando ele está errado e a pessoa já tentou salvar. */
function problem(name: string, key: Key = 'rw.required'): string | null {
  return tried.value && problems.value.has(name) ? t(key) : null
}

/** Carrega o reward (ou começa um novo no primeiro site) e os ad units do site. */
async function load() {
  loadError.value = null
  try {
    if (rewardId) {
      const reward = await service.show(rewardId)
      original.value = reward
      input.value = inputOf(reward)
      site.value = { id: reward.site_id, domain: reward.domain, client: reward.client?.name ?? null }
    } else {
      sites.value = await service.sites('')
      site.value = sites.value[0] ?? null
      input.value = blankInput(site.value?.id ?? '', { title: t('rw.default.title'), description: t('rw.default.description'), button: t('rw.default.button') })
    }
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Busca os ad units de reward do site escolhido. */
async function loadGroups(siteId: string | undefined) {
  groups.value = siteId ? await service.adUnits(siteId).catch(() => []) : []
}

/** Busca sites pelo domínio no painel interno, que tem os sites de todos os clientes. */
const searchSites = useDebounceFn(async () => {
  sites.value = await service.sites(siteQuery.value.trim()).catch(() => [])
}, 300)

onMounted(load)
watch(() => site.value?.id, loadGroups)
watch(siteQuery, searchSites)
onBeforeUnmount(() => {
  if (iconPreview.value) URL.revokeObjectURL(iconPreview.value)
})

/** Troca o site de um reward novo: os ad units fixados e o destino não valem mais. */
function chooseSite(siteId: string) {
  const chosen = sites.value.find((option) => option.id === siteId)
  if (!chosen || !input.value) return
  site.value = chosen
  input.value.site_id = chosen.id
  input.value.ad_unit_day = null
}

/** Guarda a imagem escolhida para enviar ao salvar e mostra na prévia. */
function chooseImage(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return
  if (file.size > ICON_MAX_BYTES) {
    toast.error(t('rw.iconTooBig'))
    return
  }
  if (iconPreview.value) URL.revokeObjectURL(iconPreview.value)
  iconFile.value = file
  iconPreview.value = URL.createObjectURL(file)
}

/** Troca o tipo de ícone; o emoji volta ao presente quando estava vazio. */
function setIconKind(kind: RewardIconKind) {
  if (!input.value) return
  input.value.icon_kind = kind
  if (kind === 'emoji' && !input.value.icon_emoji) input.value.icon_emoji = EMOJIS[0] ?? null
}

/** Troca o gatilho e põe os valores iniciais da rolagem e do seletor. */
function setTrigger(trigger: RewardTrigger) {
  if (!input.value) return
  input.value.trigger = trigger
  if (trigger === 'scroll' && !input.value.scroll_percent) input.value.scroll_percent = 50
  if (trigger === 'click' && input.value.click_selector === null) input.value.click_selector = ''
}

/** Adiciona uma pergunta vazia e mostra ela na prévia. */
function addQuestion() {
  if (!input.value || input.value.questions.length >= MAX_QUESTIONS) return
  input.value.questions.push({ id: null, title: '', description: '', answers: ['', '', ''] })
  const index = input.value.questions.length - 1
  previewIndex.value = steps.value.findIndex((step) => step.kind === 'question' && step.index === index)
}

/** Remove a pergunta; as respostas dela saem das métricas ao salvar. */
function removeQuestion(index: number) {
  input.value?.questions.splice(index, 1)
  previewIndex.value = 0
}

/** Liga ou desliga o pedido de contato. */
function toggleLead(on: boolean) {
  if (!input.value) return
  input.value.lead = on ? { kind: 'email', position: 'end', title: t('rw.default.leadTitle'), description: '', button: t('rw.default.leadButton') } : null
  previewIndex.value = 0
}

/** Liga ou desliga o redirecionamento ao fim do anúncio. */
function toggleRedirect(on: boolean) {
  if (input.value) input.value.redirect_path = on ? '' : null
}

/** Grava o reward (e a imagem do ícone) e volta para a lista. */
async function save() {
  const current = input.value
  if (!current) return
  tried.value = true
  pageTaken.value = false
  if (problems.value.size > 0) {
    toast.error(t('rw.fixErrors'))
    return
  }
  busy.value = true
  try {
    const payload = toPayload(current)
    if (rewardId) {
      if (iconFile.value) await service.setIcon(rewardId, iconFile.value)
      await service.update(rewardId, payload)
      toast.success(t('rw.saved'))
    } else {
      const created = await service.create(iconFile.value && payload.icon_kind === 'image' ? { ...payload, icon_kind: 'none' } : payload)
      if (iconFile.value && payload.icon_kind === 'image') await service.setIcon(created.id, iconFile.value)
      toast.success(t('rw.created'))
    }
    await router.push(base)
  } catch (error) {
    const code = error instanceof ApiError ? error.code : 'unknown'
    pageTaken.value = code === 'reward_page_taken'
    toast.error(errorText(code))
  } finally {
    busy.value = false
  }
}

/** Pausa ou ativa o reward na hora, sem mexer no resto do formulário. */
async function toggleActive() {
  if (!rewardId || !input.value) return
  try {
    const updated = await service.setActive(rewardId, !input.value.active)
    input.value.active = updated.active
    toast.success(updated.active ? t('rw.activated') : t('rw.paused'))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}

/** Apaga o reward e volta para a lista. */
async function remove() {
  if (!rewardId) return
  busy.value = true
  try {
    await service.remove(rewardId)
    removeOpen.value = false
    toast.success(t('rw.deleted'))
    await router.push(base)
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

/** O nome da etapa no seletor da prévia. */
function stepLabel(step: RewardStep): string {
  if (step.kind === 'question') return t('rw.question', { n: step.index + 1 })
  return step.kind === 'lead' ? t('rw.step.lead') : t('rw.step.reward')
}

/** O rótulo da cor do botão, que muda com o layout. */
function buttonColorLabel(): string {
  const layout = input.value?.style.layout
  return t(layout === 'header' ? 'rw.color.buttonHeader' : layout === 'highlight' ? 'rw.color.buttonHighlight' : 'rw.color.button')
}

/** As classes de um botão do controle segmentado, marcado ou não. */
const segment = (selected: boolean) => ['h-8 rounded px-3 text-[13px] font-medium', selected ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground']
</script>

<template>
  <PageHeader :title="original?.name || t('rw.new')" :sub="[site?.client, domain].filter(Boolean).join(' · ')">
    <template #back>
      <RouterLink :to="base" class="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground">
        <ArrowLeft class="size-4" />{{ t('rw.back') }}
      </RouterLink>
    </template>
    <template v-if="input" #actions>
      <Button v-if="rewardId" variant="outline" @click="router.push(`${base}/${rewardId}/metricas`)"><BarChart3 />{{ t('rw.metrics') }}</Button>
      <Button v-if="canManage" :disabled="busy" @click="save">{{ rewardId ? t('common.save') : t('rw.create') }}</Button>
      <DropdownMenuRoot v-if="rewardId && canManage">
        <DropdownMenuTrigger as-child>
          <Button variant="outline" size="icon" :aria-label="t('rw.more')"><MoreHorizontal /></Button>
        </DropdownMenuTrigger>
        <MenuContent align="end" class="w-48">
          <MenuItem @select="toggleActive">{{ input.active ? t('rw.pause') : t('rw.activate') }}</MenuItem>
          <DropdownMenuSeparator class="-mx-1 my-1 h-px bg-border" />
          <MenuItem danger @select="removeOpen = true"><Trash2 />{{ t('rw.delete') }}</MenuItem>
        </MenuContent>
      </DropdownMenuRoot>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <div v-else-if="input && preview" class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)]">
      <fieldset class="grid min-w-0 content-start gap-6" :disabled="!canManage">
        <Card :title="t('rw.about')" :desc="t('rw.aboutDesc')">
          <div class="grid gap-4">
            <Field id="rw-name" :label="t('rw.name')" :error="problem('name')">
              <Input id="rw-name" v-model="input.name" :maxlength="LIMITS.name" :placeholder="t('rw.namePlaceholder')" :invalid="!!problem('name')" />
            </Field>
            <div class="grid items-start gap-4 sm:grid-cols-2">
              <Field id="rw-site" :label="t('rw.site')" :hint="rewardId ? t('rw.siteFixed') : undefined">
                <Input v-if="rewardId" id="rw-site" :model-value="domain" disabled />
                <div v-else class="grid gap-2">
                  <Input v-if="internal" v-model="siteQuery" :aria-label="t('rw.siteSearch')" :placeholder="t('rw.siteSearch')" />
                  <NativeSelect id="rw-site" :model-value="site?.id ?? ''" :options="siteOptions.length ? siteOptions : [{ value: '', label: t('rw.sitePick') }]" @update:model-value="chooseSite" />
                </div>
              </Field>
              <Field id="rw-active" :label="t('rw.col.state')">
                <Checkbox id="rw-active" v-model="input.active" :label="t('rw.activeLabel')" />
              </Field>
            </div>
            <Field id="rw-page" :label="t('rw.page')" :hint="t('rw.pageHint')" :error="pageTaken ? errorText('reward_page_taken') : problem('page')">
              <div class="flex min-w-0 items-center rounded-md border bg-background focus-within:ring-2 focus-within:ring-ring">
                <span class="shrink-0 border-r bg-muted px-3 py-2 font-mono text-[13px] text-muted-foreground">https://{{ domain }}/</span>
                <input id="rw-page" v-model="input.page_path" :maxlength="LIMITS.path" placeholder="receitas/bolo-de-acai" class="h-9 min-w-0 flex-1 bg-transparent px-3 font-mono text-[13px] outline-none" />
              </div>
            </Field>
          </div>
        </Card>

        <Card :title="t('rw.content')" :desc="t('rw.contentDesc')">
          <div class="grid gap-4">
            <Field id="rw-icon" :label="t('rw.icon')" :error="problem('emoji', 'rw.emojiMissing') ?? problem('image', 'rw.imageMissing')">
              <div class="grid gap-3">
                <div class="inline-flex w-fit rounded-md border bg-muted p-0.5" role="radiogroup" :aria-label="t('rw.icon')">
                  <button v-for="kind in ['emoji', 'image', 'none'] as const" :key="kind" type="button" role="radio" :aria-checked="input.icon_kind === kind" :class="segment(input.icon_kind === kind)" @click="setIconKind(kind)">
                    {{ t(`rw.icon.${kind}`) }}
                  </button>
                </div>
                <div v-if="input.icon_kind === 'emoji'" class="flex flex-wrap items-center gap-1.5">
                  <button
                    v-for="emoji in EMOJIS"
                    :key="emoji"
                    type="button"
                    :aria-label="t('rw.iconUse', { emoji })"
                    :class="['flex size-9 items-center justify-center rounded-md border text-[18px]', input.icon_emoji === emoji ? 'border-foreground bg-secondary' : 'bg-background hover:bg-accent']"
                    @click="input.icon_emoji = emoji"
                  >
                    {{ emoji }}
                  </button>
                  <input
                    id="rw-icon"
                    v-model="input.icon_emoji"
                    :aria-label="t('rw.iconOther')"
                    :maxlength="LIMITS.emoji"
                    class="h-9 w-20 rounded-md border border-input bg-background text-center text-[18px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div v-if="input.icon_kind === 'image'" class="flex flex-wrap items-center gap-3">
                  <label class="inline-flex h-9 cursor-pointer items-center gap-2 rounded-md border bg-background px-3 text-[14px] font-medium hover:bg-accent">
                    <Plus class="size-4" />{{ hasImage ? t('rw.iconChange') : t('rw.iconChoose') }}
                    <input type="file" :accept="ICON_ACCEPT" class="sr-only" @change="chooseImage" />
                  </label>
                  <img v-if="iconUrl" :src="iconUrl" alt="" class="size-9 rounded border object-contain" />
                  <span class="text-[13px] text-muted-foreground">{{ t('rw.iconHint') }}</span>
                </div>
              </div>
            </Field>
            <Field id="rw-title" :label="t('rw.title')" :error="problem('title')">
              <Input id="rw-title" v-model="input.title" :maxlength="LIMITS.title" :invalid="!!problem('title')" />
            </Field>
            <Field id="rw-desc" :label="t('rw.description')" :hint="t('rw.count', { n: input.description.length, max: LIMITS.description })">
              <textarea
                id="rw-desc"
                v-model="input.description"
                rows="3"
                :maxlength="LIMITS.description"
                class="w-full rounded-md border border-input bg-background px-3 py-2 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </Field>
            <Field id="rw-button" :label="t('rw.button')" :error="problem('button')">
              <Input id="rw-button" v-model="input.button_text" :maxlength="LIMITS.button" :invalid="!!problem('button')" />
            </Field>
            <p class="rounded-md border bg-muted px-3 py-2 text-[13px] text-muted-foreground">{{ t('rw.footerNote') }}</p>
          </div>
        </Card>

        <Card :title="t('rw.before')" :desc="t('rw.beforeDesc')">
          <div class="grid gap-5">
            <div v-for="(question, index) in input.questions" :key="question.id ?? `new-${index}`" class="grid gap-3 rounded-lg border p-4">
              <div class="flex items-center justify-between gap-3">
                <span class="text-[13px] font-semibold">{{ t('rw.question', { n: index + 1 }) }}</span>
                <button type="button" :aria-label="t('rw.questionRemove', { n: index + 1 })" class="rounded p-1 text-muted-foreground hover:bg-accent hover:text-foreground" @click="removeQuestion(index)">
                  <Trash2 class="size-4" />
                </button>
              </div>
              <Input v-model="question.title" :aria-label="t('rw.question', { n: index + 1 })" :maxlength="LIMITS.question" :placeholder="t('rw.questionPlaceholder')" />
              <Input v-model="question.description" :aria-label="t('rw.questionDescPlaceholder')" :maxlength="LIMITS.description" :placeholder="t('rw.questionDescPlaceholder')" />
              <div class="grid gap-2 sm:grid-cols-3">
                <Input
                  v-for="(_answer, answerIndex) in question.answers"
                  :key="answerIndex"
                  v-model="question.answers[answerIndex]"
                  :aria-label="t('rw.answerOf', { answer: answerIndex + 1, question: index + 1 })"
                  :maxlength="LIMITS.answer"
                  :placeholder="t('rw.answer', { n: answerIndex + 1 })"
                />
              </div>
            </div>
            <p v-if="problem('questions')" class="text-[13px] text-bad">{{ t('rw.questionsIncomplete') }}</p>
            <div class="flex flex-wrap items-center gap-3">
              <Button variant="outline" :disabled="input.questions.length >= MAX_QUESTIONS" @click="addQuestion"><Plus />{{ t('rw.addQuestion') }}</Button>
              <span class="text-[13px] text-muted-foreground">{{ t('rw.questionsCount', { n: input.questions.length, max: MAX_QUESTIONS }) }}</span>
            </div>
            <div class="grid gap-3 border-t pt-5">
              <Checkbox id="rw-lead" :model-value="input.lead !== null" :label="t('rw.askLead')" @update:model-value="toggleLead" />
              <div v-if="input.lead" class="grid gap-4">
                <div class="grid items-start gap-4 sm:grid-cols-2">
                  <Field id="rw-lead-kind" :label="t('rw.leadKind')">
                    <NativeSelect
                      id="rw-lead-kind"
                      v-model="input.lead.kind"
                      :options="[
                        { value: 'email', label: t('rw.leadKind.email') },
                        { value: 'phone', label: t('rw.leadKind.phone') },
                      ]"
                    />
                  </Field>
                  <Field id="rw-lead-position" :label="t('rw.leadPosition')">
                    <NativeSelect
                      id="rw-lead-position"
                      v-model="input.lead.position"
                      :disabled="input.questions.length === 0"
                      :options="[
                        { value: 'start', label: t('rw.leadPosition.start') },
                        { value: 'end', label: t('rw.leadPosition.end') },
                      ]"
                    />
                  </Field>
                </div>
                <Field id="rw-lead-title" :label="t('rw.title')" :error="problem('lead', 'rw.leadTitleMissing')">
                  <Input id="rw-lead-title" v-model="input.lead.title" :maxlength="LIMITS.title" />
                </Field>
                <Field id="rw-lead-desc" :label="t('rw.optional', { label: t('rw.description') })">
                  <Input id="rw-lead-desc" v-model="input.lead.description" :maxlength="LIMITS.description" />
                </Field>
                <Field id="rw-lead-button" :label="t('rw.button')">
                  <Input id="rw-lead-button" v-model="input.lead.button" :maxlength="LIMITS.button" />
                </Field>
                <p class="rounded-md border bg-muted px-3 py-2 text-[13px] text-muted-foreground">{{ t('rw.leadNote', { domain }) }}</p>
              </div>
            </div>
          </div>
        </Card>

        <Card :title="t('rw.body')" :desc="t('rw.bodyDesc')">
          <div class="grid gap-5">
            <div class="grid gap-2">
              <span class="text-[13px] font-medium">{{ t('rw.layout') }}</span>
              <div role="radiogroup" :aria-label="t('rw.layout')" class="grid grid-cols-3 gap-2">
                <button
                  v-for="layout in LAYOUTS"
                  :key="layout"
                  type="button"
                  role="radio"
                  :aria-checked="input.style.layout === layout"
                  :class="['rounded-lg border p-2 text-left transition-colors hover:bg-accent', input.style.layout === layout && 'border-foreground ring-1 ring-foreground']"
                  @click="input.style.layout = layout"
                >
                  <div class="flex h-16 items-center justify-center rounded-md bg-muted" aria-hidden="true">
                    <div class="flex w-[52px] flex-col items-center overflow-hidden rounded-md border bg-background pb-1">
                      <div v-if="layout === 'header'" class="h-3.5 w-full bg-neutral-700" />
                      <div v-else :class="['mt-1.5 rounded-full', layout === 'highlight' ? 'size-4 bg-neutral-700 ring-2 ring-neutral-200' : 'size-2.5 bg-neutral-400']" />
                      <div class="mt-1 h-1 w-7 rounded bg-neutral-700" />
                      <div class="mt-0.5 h-0.5 w-9 rounded bg-neutral-300" />
                      <div class="mt-1 h-1.5 w-9 rounded-sm bg-neutral-800" />
                      <div v-if="layout !== 'simple'" class="mt-1 h-px w-full bg-neutral-200" />
                    </div>
                  </div>
                  <span class="mt-2 block text-[13px] font-medium">{{ t(`rw.layout.${layout}`) }}</span>
                  <span class="block text-[12px] leading-snug text-muted-foreground">{{ t(`rw.layout.${layout}Desc`) }}</span>
                </button>
              </div>
            </div>
            <div class="flex flex-wrap gap-2" role="group" :aria-label="t('rw.presets')">
              <button
                v-for="preset in PRESETS"
                :key="preset.key"
                type="button"
                class="inline-flex h-9 items-center gap-2 rounded-md border bg-background px-3 text-[13px] font-medium hover:bg-accent"
                @click="Object.assign(input.style, preset.palette)"
              >
                <span class="flex size-4 overflow-hidden rounded-full border" aria-hidden="true">
                  <span class="h-full w-1/2" :style="{ background: preset.palette.body_color }" />
                  <span class="h-full w-1/2" :style="{ background: preset.palette.button_color }" />
                </span>
                {{ t(`rw.preset.${preset.key}`) }}
              </button>
            </div>
            <div class="grid items-start gap-4 sm:grid-cols-2">
              <ColorField id="rw-body" v-model="input.style.body_color" :label="t('rw.color.body')" />
              <ColorField id="rw-title-color" v-model="input.style.title_color" :label="t('rw.color.title')" />
              <ColorField id="rw-text" v-model="input.style.text_color" :label="t('rw.color.text')" />
              <ColorField id="rw-border" v-model="input.style.border_color" :label="t('rw.color.border')" />
              <ColorField id="rw-btn" v-model="input.style.button_color" :label="buttonColorLabel()" />
              <ColorField id="rw-btn-text" v-model="input.style.button_text_color" :label="t('rw.color.buttonText')" />
            </div>
            <div v-if="warning" class="flex items-start gap-2 rounded-md border border-ochre/40 bg-ochre-soft px-3 py-2 text-[13px] text-ochre">
              <AlertTriangle class="mt-0.5 size-4 shrink-0" />{{ warning === 'button' ? t('rw.lowButton') : t('rw.lowText') }}
            </div>
            <div class="grid items-start gap-5 sm:grid-cols-2">
              <Field id="rw-radius" :label="t('rw.radius', { n: input.style.radius })">
                <input id="rw-radius" v-model.number="input.style.radius" type="range" min="0" max="32" step="1" class="w-full accent-foreground" />
              </Field>
              <Field id="rw-border-width" :label="input.style.border_width ? t('rw.borderWidth', { n: input.style.border_width }) : t('rw.noBorder')">
                <input id="rw-border-width" v-model.number="input.style.border_width" type="range" min="0" max="6" step="1" class="w-full accent-foreground" />
              </Field>
            </div>
            <div class="grid items-start gap-4 sm:grid-cols-2">
              <Field id="rw-font" :label="t('rw.font')">
                <NativeSelect id="rw-font" v-model="input.style.font" :options="FONTS.map((font) => ({ value: font, label: font }))" />
              </Field>
              <Field id="rw-shadow" :label="t('rw.shadow')">
                <Checkbox id="rw-shadow" v-model="input.style.shadow" :label="t('rw.shadow')" />
              </Field>
            </div>
          </div>
        </Card>

        <Card :title="t('rw.display')" :desc="t('rw.displayDesc')">
          <div class="grid gap-5">
            <div class="grid gap-3">
              <span class="text-[13px] font-medium">{{ t('rw.trigger') }}</span>
              <div role="radiogroup" :aria-label="t('rw.trigger')" class="inline-flex w-fit flex-wrap rounded-md border bg-muted p-0.5">
                <button v-for="trigger in ['load', 'scroll', 'click'] as const" :key="trigger" type="button" role="radio" :aria-checked="input.trigger === trigger" :class="segment(input.trigger === trigger)" @click="setTrigger(trigger)">
                  {{ t(`rw.trigger.${trigger}`) }}
                </button>
              </div>
              <Field v-if="input.trigger === 'scroll'" id="rw-scroll" :label="t('rw.scroll', { n: input.scroll_percent ?? 0 })" :hint="t('rw.scrollHint')">
                <input id="rw-scroll" v-model.number="input.scroll_percent" type="range" min="5" max="100" step="5" class="w-full accent-foreground" />
              </Field>
              <Field v-if="input.trigger === 'click'" id="rw-click" :label="t('rw.selector')" :hint="t('rw.selectorHint')" :error="problem('selector', 'rw.selectorMissing')">
                <input
                  id="rw-click"
                  v-model="input.click_selector"
                  :maxlength="LIMITS.selector"
                  placeholder="#ver-receita"
                  class="h-10 w-full rounded-md border border-input bg-background px-3 font-mono text-[13px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </Field>
            </div>
            <Field id="rw-block" :label="t('rw.adUnits')" :hint="adUnitHint">
              <NativeSelect id="rw-block" :model-value="input.ad_unit_day ?? ''" class="sm:w-[420px]" :options="adUnitOptions" @update:model-value="(day: string) => input && (input.ad_unit_day = day || null)" />
            </Field>
            <Field id="rw-cooldown" :label="t('rw.cooldown')" :hint="t('rw.cooldownHint')" :error="problem('cooldown', 'rw.cooldownBad')">
              <input
                id="rw-cooldown"
                v-model.number="input.cooldown_minutes"
                type="number"
                min="5"
                max="1440"
                class="h-10 w-full rounded-md border border-input bg-background px-3 text-[14px] tnum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-[200px]"
              />
            </Field>
            <div class="grid gap-3">
              <span class="text-[13px] font-medium">{{ t('rw.afterAd') }}</span>
              <Checkbox id="rw-redirect" :model-value="input.redirect_path !== null" :label="input.redirect_path !== null ? t('rw.redirectOn') : t('rw.redirectOff')" @update:model-value="toggleRedirect" />
              <Field
                v-if="input.redirect_path !== null"
                id="rw-redirect-page"
                :label="t('rw.redirectPage')"
                :hint="t('rw.redirectHint', { domain })"
                :error="problem('redirectSame', 'rw.redirectSame') ?? problem('redirect', 'rw.redirectMissing')"
              >
                <div class="flex min-w-0 items-center rounded-md border bg-background focus-within:ring-2 focus-within:ring-ring">
                  <span class="shrink-0 border-r bg-muted px-3 py-2 font-mono text-[13px] text-muted-foreground">https://{{ domain }}/</span>
                  <input id="rw-redirect-page" v-model="input.redirect_path" :maxlength="LIMITS.path" class="h-9 min-w-0 flex-1 bg-transparent px-3 font-mono text-[13px] outline-none" />
                </div>
              </Field>
            </div>
          </div>
        </Card>
      </fieldset>

      <div class="order-first min-w-0 lg:sticky lg:top-6 lg:order-none lg:self-start">
        <div class="mb-3 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div class="text-[14px] font-semibold">{{ t('rw.preview') }}</div>
            <div class="text-[13px] text-muted-foreground">{{ t('rw.previewSub') }}</div>
          </div>
          <div class="flex items-center gap-2">
            <NativeSelect
              v-model="visitorLang"
              :aria-label="t('rw.visitorLang')"
              class="w-[140px]"
              :options="(['pt', 'en', 'es'] as const).map((code) => ({ value: code, label: t(`rw.lang.${code}`) }))"
            />
            <div class="inline-flex rounded-md border bg-card p-0.5" role="radiogroup" :aria-label="t('rw.screen')">
              <button
                v-for="[value, icon] in [['desktop', Monitor], ['mobile', Smartphone]] as const"
                :key="value"
                type="button"
                role="radio"
                :aria-checked="device === value"
                :aria-label="t(`rw.device.${value}`)"
                :title="t(`rw.device.${value}`)"
                :class="['flex h-8 w-9 items-center justify-center rounded', device === value ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground']"
                @click="device = value"
              >
                <component :is="icon" class="size-4" />
              </button>
            </div>
          </div>
        </div>
        <div v-if="steps.length > 1" role="tablist" :aria-label="t('rw.previewStep')" class="mb-3 flex flex-wrap gap-1.5">
          <button
            v-for="(step, index) in steps"
            :key="index"
            type="button"
            role="tab"
            :aria-selected="shownStep === step"
            :class="['h-7 rounded-full border px-3 text-[12px] font-medium', shownStep === step ? 'border-foreground bg-foreground text-background' : 'bg-card text-muted-foreground hover:text-foreground']"
            @click="previewIndex = index"
          >
            {{ stepLabel(step) }}
          </button>
        </div>
        <RewardPreview
          :reward="preview"
          :step="shownStep"
          :language="visitorLang"
          :device="device"
          :domain="domain"
          :path="input.page_path"
          @next="previewIndex = Math.min(previewIndex + 1, steps.length - 1)"
        />
        <p class="mt-2 text-[13px] text-muted-foreground">{{ triggerSummary }}</p>
      </div>
    </div>
  </PageBody>
  <ConfirmDialog
    v-model:open="removeOpen"
    :title="t('rw.deleteTitle', { name: original?.name ?? '' })"
    :desc="t('rw.deleteDesc')"
    :action="t('common.delete')"
    :busy="busy"
    @confirm="remove"
  />
</template>
