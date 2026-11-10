<script setup lang="ts">
/** Criar ou editar um loader: formulário à esquerda e a prévia fixa à direita, que só sai pelo "Finalizar loader". */
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft, Check, Lock, Monitor, RefreshCw, Smartphone, Trash2 } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { ApiError } from '@/lib/api'
import { errorText, lang, t, type Key } from '@/lib/i18n'
import { clientService } from '@/modules/internal/clients/service'
import type { ClientOption } from '@/modules/internal/clients/types'
import LoaderPreview from '@/modules/loaders/components/LoaderPreview.vue'
import {
  ADBLOCK_HINT,
  ADBLOCK_TITLE,
  BLUR_LEVELS,
  BLUR_PIXELS,
  blankInput,
  formProblems,
  inputOf,
  LIMITS,
  loaderPermission,
  loadersPath,
  MAX_SECONDS,
  previewDomain,
  previewLoader,
  STYLE_LABEL,
  STYLES,
  TEMPLATE_HINT,
  TEMPLATE_LABEL,
  TEMPLATES,
  toPayload,
  withTemplate,
} from '@/modules/loaders/rules'
import { loaderService } from '@/modules/loaders/service'
import type { Loader, LoaderAdblock, LoaderInput, LoaderTemplate } from '@/modules/loaders/types'
import ColorField from '@/modules/rewards/components/ColorField.vue'
import { useSession } from '@/stores/session'

const EXIT_MS = 400
const LANGUAGES = ['pt', 'en', 'es'] as const

const route = useRoute()
const router = useRouter()
const session = useSession()
const internal = route.meta.internal === true
const service = loaderService(internal)
const base = loadersPath(internal)
const loaderId = typeof route.params.id === 'string' ? route.params.id : null
const original = ref<Loader | null>(null)
const input = ref<LoaderInput | null>(null)
const clients = ref<ClientOption[]>([])
const loadError = ref<string | null>(null)
const tried = ref(false)
const busy = ref(false)
const removeOpen = ref(false)
const mode = ref<'loading' | 'adblock'>('loading')
const visitorLang = ref<string>(LANGUAGES.includes(lang.value as (typeof LANGUAGES)[number]) ? lang.value : 'pt')
const device = ref<'desktop' | 'mobile'>('desktop')
const playing = ref(true)
const exiting = ref(false)
let exitTimer: number | undefined

const canManage = computed(() => session.can(loaderPermission(internal, 'manage')))
const problems = computed(() => (input.value ? formProblems(input.value, internal && !loaderId) : new Set<string>()))
const preview = computed(() => (input.value ? previewLoader(input.value) : null))
const domain = computed(() => previewDomain(original.value))
const usedBy = computed(() => original.value?.tags ?? [])
const clientOptions = computed(() => [{ value: '', label: t('ld.clientPick') }, ...clients.value.map((client) => ({ value: client.id, label: client.name }))])
const subtitle = computed(() => {
  const client = original.value?.client?.name ?? clients.value.find((option) => option.id === input.value?.company_id)?.name
  return [client, t('ld.subEdit')].filter(Boolean).join(' · ')
})

/** Mensagem do campo quando ele está errado e a pessoa já tentou salvar. */
function problem(name: string, key: Key = 'ld.required'): string | null {
  return tried.value && problems.value.has(name) ? t(key) : null
}

/** Carrega o loader (ou começa um novo) e, no interno, os clientes para escolher o dono. */
async function load() {
  loadError.value = null
  try {
    if (loaderId) {
      const loader = await service.show(loaderId)
      original.value = loader
      input.value = inputOf(loader)
    } else {
      input.value = blankInput(internal ? '' : undefined)
      if (internal) clients.value = (await clientService.options()).items
    }
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

onMounted(load)
onBeforeUnmount(() => window.clearTimeout(exitTimer))

/** Mostra o loader de novo na prévia; ele só sai pelo botão Finalizar loader. */
function replay() {
  window.clearTimeout(exitTimer)
  exiting.value = false
  mode.value = 'loading'
  playing.value = true
}

/** Finaliza o loader com a saída suave, como no site quando o primeiro anúncio aparece. */
function finish() {
  exiting.value = true
  exitTimer = window.setTimeout(() => {
    exiting.value = false
    if (mode.value === 'adblock') mode.value = 'loading'
    playing.value = false
  }, EXIT_MS)
}

/** Troca o modelo e mostra o loader de novo. */
function setTemplate(template: LoaderTemplate) {
  if (!input.value) return
  input.value = withTemplate(input.value, template)
  replay()
}

/** Troca o que fazer com adblock e mostra o aviso (ou o loader, sem aviso). */
function setAdblock(adblock: LoaderAdblock) {
  if (!input.value) return
  input.value.adblock = adblock
  window.clearTimeout(exitTimer)
  exiting.value = false
  playing.value = true
  mode.value = adblock === 'off' ? 'loading' : 'adblock'
}

/** Troca o que a prévia mostra: o loader carregando ou o aviso de adblock. */
function showMode(next: 'loading' | 'adblock') {
  replay()
  mode.value = next
}

watch(() => input.value?.max_seconds, (now, before) => {
  if (before !== undefined && now !== before) replay()
})

/** Grava o loader; um novo vai para a edição dele. */
async function save() {
  const current = input.value
  if (!current) return
  tried.value = true
  if (problems.value.size > 0) {
    toast.error(t('ld.fixErrors'))
    return
  }
  busy.value = true
  try {
    const payload = toPayload(current)
    if (loaderId) {
      const saved = await service.update(loaderId, payload)
      original.value = saved
      input.value = inputOf(saved)
      toast.success(t('ld.saved'), { description: saved.tags.length ? t('ld.savedInUse') : t('ld.savedUnused') })
    } else {
      const created = await service.create(payload)
      toast.success(t('ld.created'), { description: t('ld.savedUnused') })
      await router.replace(`${base}/${created.id}`)
    }
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

/** Apaga o loader e volta para a lista. */
async function remove() {
  if (!loaderId) return
  busy.value = true
  try {
    await service.remove(loaderId)
    removeOpen.value = false
    toast.success(t('ld.deleted'))
    await router.push(base)
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

/** As classes de um botão do controle segmentado, marcado ou não. */
const segment = (selected: boolean) => ['h-8 rounded px-3 text-[13px] font-medium', selected ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground']
</script>

<template>
  <PageHeader :title="original?.name || t('ld.new')" :sub="subtitle">
    <template #back>
      <RouterLink :to="base" class="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground">
        <ArrowLeft class="size-4" />{{ t('nav.loaders') }}
      </RouterLink>
    </template>
    <template v-if="input && canManage" #actions>
      <Button v-if="loaderId" variant="outline" :disabled="busy || usedBy.length > 0" :title="usedBy.length ? t('ld.deleteInUse') : undefined" @click="removeOpen = true">
        <Trash2 />{{ t('common.delete') }}
      </Button>
      <Button :disabled="busy" @click="save">{{ loaderId ? t('common.save') : t('ld.create') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <div v-else-if="input && preview" class="grid gap-6 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)]">
      <fieldset class="grid min-w-0 content-start gap-6" :disabled="!canManage">
        <Card :title="t('ld.card.loader')">
          <div class="grid gap-4">
            <Field id="ld-name" :label="t('ld.name')" :hint="t('ld.nameHint')" :error="problem('name')">
              <Input id="ld-name" v-model="input.name" :maxlength="LIMITS.name" :placeholder="t('ld.namePlaceholder')" :invalid="!!problem('name')" />
            </Field>
            <Field v-if="internal && !loaderId" id="ld-client" :label="t('ld.col.client')" :error="problem('company', 'ld.clientRequired')">
              <NativeSelect id="ld-client" v-model="input.company_id" :options="clientOptions" />
            </Field>
            <div class="grid gap-2">
              <p class="text-[13px] font-medium">{{ t('ld.col.template') }}</p>
              <div role="radiogroup" :aria-label="t('ld.col.template')" class="grid grid-cols-2 gap-2">
                <button
                  v-for="template in TEMPLATES"
                  :key="template"
                  type="button"
                  role="radio"
                  :aria-checked="input.template === template"
                  :class="['grid gap-2 rounded-lg border p-2 text-left transition-colors hover:bg-accent', input.template === template && 'border-foreground ring-1 ring-foreground']"
                  @click="setTemplate(template)"
                >
                  <span class="relative grid h-16 place-items-center overflow-hidden rounded-md bg-gradient-to-br from-violet-200 to-sky-200" aria-hidden="true">
                    <template v-if="template === 'groone'">
                      <span class="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px]" />
                      <span class="relative size-8 animate-spin rounded-full border-2 border-white/25 border-t-sky-400" />
                    </template>
                    <template v-else>
                      <span class="absolute inset-0 bg-neutral-900" />
                      <span class="relative h-1 w-10 rounded-full bg-white/80" />
                    </template>
                  </span>
                  <span class="text-[13px] font-medium">
                    {{ t(TEMPLATE_LABEL[template]) }}
                    <span class="block text-[12px] font-normal text-muted-foreground">{{ t(TEMPLATE_HINT[template]) }}</span>
                  </span>
                </button>
              </div>
            </div>
            <div class="grid gap-2">
              <p class="flex items-baseline justify-between text-[13px] font-medium">{{ t('ld.icon') }}<span class="text-[12px] font-normal text-muted-foreground">{{ t('ld.iconAside') }}</span></p>
              <p class="rounded-md border bg-muted/40 px-3 py-2.5 text-[12px] leading-snug text-muted-foreground">{{ t('ld.iconHint') }}</p>
            </div>
          </div>
        </Card>
        <Card :title="t('ld.card.look')">
          <div class="grid gap-5">
            <div v-if="input.template === 'groone'" class="grid gap-2">
              <p class="flex items-baseline justify-between text-[13px] font-medium">
                {{ t('ld.blur') }}<span class="text-[12px] font-normal text-muted-foreground">{{ input.blur === 0 ? t('ld.blurNone') : t('ld.blurPixels', { n: BLUR_PIXELS[input.blur] ?? 0 }) }}</span>
              </p>
              <div role="radiogroup" :aria-label="t('ld.blur')" class="inline-flex w-fit rounded-md border bg-muted p-0.5">
                <button v-for="level in BLUR_LEVELS" :key="level" type="button" role="radio" :aria-checked="input.blur === level" :class="segment(input.blur === level)" @click="input.blur = level">{{ level }}</button>
              </div>
            </div>
            <div v-else class="grid gap-2">
              <p class="text-[13px] font-medium">{{ t('ld.animation') }}</p>
              <div role="radiogroup" :aria-label="t('ld.animation')" class="inline-flex w-fit rounded-md border bg-muted p-0.5">
                <button v-for="style in STYLES" :key="style" type="button" role="radio" :aria-checked="input.style === style" :class="segment(input.style === style)" @click="input.style = style; replay()">
                  {{ t(STYLE_LABEL[style]) }}
                </button>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <ColorField id="ld-background" v-model="input.background" :label="input.template === 'groone' ? t('ld.color.veil') : t('ld.color.background')" />
              <ColorField id="ld-accent" v-model="input.accent" :label="input.template === 'groone' ? t('ld.color.glow') : t('ld.color.accent')" />
            </div>
            <Field v-if="input.template === 'solid'" id="ld-text" :label="t('ld.text')" :hint="t('ld.textHint')" :error="problem('text', 'ld.textTooLong')">
              <Input id="ld-text" :model-value="input.text ?? ''" :maxlength="LIMITS.text" :placeholder="t('ld.textPlaceholder')" @update:model-value="(value: string | number) => input && (input.text = String(value))" />
            </Field>
            <div class="grid gap-2">
              <p class="flex items-baseline justify-between text-[13px] font-medium">{{ t('ld.maxSeconds') }}<span class="text-[12px] font-normal text-muted-foreground">{{ t('ld.maxSecondsAside') }}</span></p>
              <div role="radiogroup" :aria-label="t('ld.maxSeconds')" class="inline-flex w-fit rounded-md border bg-muted p-0.5">
                <button v-for="seconds in MAX_SECONDS" :key="seconds" type="button" role="radio" :aria-checked="input.max_seconds === seconds" :class="segment(input.max_seconds === seconds)" @click="input.max_seconds = seconds">
                  {{ t('ld.seconds', { n: seconds }) }}
                </button>
              </div>
            </div>
          </div>
        </Card>
        <Card :title="t('ld.card.adblock')" :desc="t('ld.card.adblockDesc')">
          <div class="grid gap-4">
            <div role="radiogroup" :aria-label="t('ld.card.adblock')" class="grid gap-2">
              <button
                v-for="choice in (['off', 'warn', 'block'] as const)"
                :key="choice"
                type="button"
                role="radio"
                :aria-checked="input.adblock === choice"
                :class="['rounded-lg border px-3 py-2.5 text-left transition-colors hover:bg-accent', input.adblock === choice && 'border-foreground ring-1 ring-foreground']"
                @click="setAdblock(choice)"
              >
                <span class="block text-[14px] font-medium">{{ t(ADBLOCK_TITLE[choice]) }}</span>
                <span class="block text-[12px] text-muted-foreground">{{ t(ADBLOCK_HINT[choice]) }}</span>
              </button>
            </div>
            <p v-if="input.adblock !== 'off'" class="flex items-start gap-2 rounded-md border bg-muted/40 px-3 py-2.5 text-[12px] leading-snug text-muted-foreground">
              <Lock class="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />{{ t('ld.adblockTexts') }}
            </p>
          </div>
        </Card>
        <Card v-if="loaderId" :title="t('ld.col.tags')" :desc="usedBy.length ? t('ld.inUseDesc') : t('ld.unusedDesc')">
          <ul v-if="usedBy.length" class="grid gap-1.5 text-[14px]">
            <li v-for="tag in usedBy" :key="tag.id"><span class="font-mono text-[13px]">{{ tag.domain }}</span> · {{ tag.name }}</li>
          </ul>
        </Card>
      </fieldset>
      <div class="order-first grid min-w-0 content-start gap-3 lg:sticky lg:top-6 lg:order-none lg:self-start">
        <div class="flex flex-wrap items-center gap-2">
          <div role="radiogroup" :aria-label="t('ld.previewWhat')" class="inline-flex rounded-md border bg-muted p-0.5">
            <button type="button" role="radio" :aria-checked="mode === 'loading'" :class="segment(mode === 'loading')" @click="showMode('loading')">{{ t('ld.previewLoading') }}</button>
            <button v-if="input.adblock !== 'off'" type="button" role="radio" :aria-checked="mode === 'adblock'" :class="segment(mode === 'adblock')" @click="showMode('adblock')">{{ t('ld.previewAdblock') }}</button>
          </div>
          <div v-if="mode === 'adblock'" role="radiogroup" :aria-label="t('ld.previewLanguage')" class="inline-flex rounded-md border bg-muted p-0.5">
            <button v-for="language in LANGUAGES" :key="language" type="button" role="radio" :aria-checked="visitorLang === language" :class="segment(visitorLang === language)" @click="visitorLang = language">{{ language.toUpperCase() }}</button>
          </div>
          <div role="radiogroup" :aria-label="t('ld.previewDevice')" class="inline-flex rounded-md border bg-muted p-0.5">
            <button type="button" role="radio" :aria-checked="device === 'desktop'" :aria-label="t('rw.device.desktop')" :class="segment(device === 'desktop')" @click="device = 'desktop'"><Monitor class="size-4" /></button>
            <button type="button" role="radio" :aria-checked="device === 'mobile'" :aria-label="t('rw.device.mobile')" :class="segment(device === 'mobile')" @click="device = 'mobile'"><Smartphone class="size-4" /></button>
          </div>
          <template v-if="mode === 'loading'">
            <Button v-if="playing" size="sm" class="ml-auto h-9" :disabled="exiting" @click="finish"><Check />{{ t('ld.finish') }}</Button>
            <Button v-else size="sm" variant="outline" class="ml-auto h-9" @click="replay"><RefreshCw />{{ t('ld.replay') }}</Button>
          </template>
        </div>
        <LoaderPreview :loader="preview" :mode="mode" :language="visitorLang" :device="device" :domain="domain" :playing="playing" :exiting="exiting" @close="finish" />
        <p class="text-[12px] text-muted-foreground">{{ t('ld.previewNote') }}</p>
      </div>
    </div>
  </PageBody>
  <ConfirmDialog
    v-model:open="removeOpen"
    :title="t('ld.deleteTitle', { name: original?.name ?? '' })"
    :desc="t('ld.deleteDesc')"
    :action="t('common.delete')"
    :busy="busy"
    @confirm="remove"
  />
</template>
