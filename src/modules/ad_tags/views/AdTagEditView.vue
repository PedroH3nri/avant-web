<script setup lang="ts">
/** Editor da ad tag: blocos com a prévia do site, integrações (loader, Analytics, MGID, reward) e versões publicadas. */
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import { DropdownMenuLabel, DropdownMenuRoot, DropdownMenuSeparator, DropdownMenuTrigger } from 'reka-ui'
import { AlertTriangle, ArrowLeft, BarChart3, Check, Code2, History, LoaderCircle, Monitor, MoreHorizontal, MousePointerClick, Plus, Smartphone, Trash2 } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Status from '@/components/ui/Status.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, lang, locale, t, tn } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import AdTagBlockCard from '@/modules/ad_tags/components/AdTagBlockCard.vue'
import AdTagChoice from '@/modules/ad_tags/components/AdTagChoice.vue'
import AdTagInstallDialog from '@/modules/ad_tags/components/AdTagInstallDialog.vue'
import AdTagPreview from '@/modules/ad_tags/components/AdTagPreview.vue'
import {
  adTagPermission,
  adTagsPath,
  blockName,
  blockProblem,
  chosenDay,
  draftChanges,
  LIMITS,
  newBlock,
  settingsProblem,
  tagStatus,
  toPayload,
  unitCode,
  unitName,
  UNIT_ORDER,
} from '@/modules/ad_tags/rules'
import { adTagService } from '@/modules/ad_tags/service'
import type { AdTag, AdTagBlock, AdTagDraft, AdTagSettings, AdTagSide, AdTagUnitDay, AdTagVersion } from '@/modules/ad_tags/types'
import { ADBLOCK_SHORT, inputOf, loadersPath, previewLoader, TEMPLATE_LABEL, type PreviewLoader } from '@/modules/loaders/rules'
import { loaderService } from '@/modules/loaders/service'
import type { LoaderOption } from '@/modules/loaders/types'
import { dayText } from '@/modules/rewards/rules'
import { useSession } from '@/stores/session'

type Tab = 'blocks' | 'integrations' | 'versions'
type SaveState = 'saved' | 'saving' | 'invalid' | 'error'

const SAVE_DELAY = 800
const LOADER_EXIT_MS = 400

const route = useRoute()
const router = useRouter()
const session = useSession()
const internal = route.meta.internal === true
const service = adTagService(internal)
const loaders = loaderService(internal)
const base = adTagsPath(internal)
const tagId = String(route.params.id)
const tag = ref<AdTag | null>(null)
const name = ref('')
const draft = ref<AdTagDraft | null>(null)
const days = ref<AdTagUnitDay[]>([])
const versions = ref<AdTagVersion[]>([])
const loaderOptions = ref<LoaderOption[]>([])
const loaderConfig = ref<PreviewLoader | null>(null)
const lastSeen = ref<string | null | undefined>(undefined)
const loadError = ref<string | null>(null)
const tab = ref<Tab>('blocks')
const openIndex = ref<number | null>(null)
const picking = ref<number | null>(null)
const armed = ref<number | null>(null)
const dragFrom = ref<number | null>(null)
const dropAt = ref<number | null>(null)
const device = ref<'desktop' | 'mobile'>('desktop')
const path = ref('/')
const playing = ref(false)
const exiting = ref(false)
const publishOpen = ref(false)
const installOpen = ref(false)
const removeOpen = ref(false)
const restoreTarget = ref<number | null>(null)
const note = ref('')
const busy = ref(false)
const saveState = ref<SaveState>('saved')
const nameTaken = ref(false)
let ready = false
let saveTimer: ReturnType<typeof setTimeout> | null = null
let saving: Promise<void> | null = null

const canManage = computed(() => session.can(adTagPermission(internal, 'manage')))
const blocks = computed(() => draft.value?.blocks ?? [])
const settings = computed<AdTagSettings | null>(() => draft.value?.settings ?? null)
const live = computed(() => versions.value.find((version) => version.live) ?? null)
const day = computed(() => chosenDay(days.value, settings.value?.ad_unit_day ?? null))
const dayLabel = computed(() => (day.value ? dayText(day.value.day, locale.value) : ''))
const problems = computed(() => blocks.value.map((block) => blockProblem(block, blocks.value, day.value)))
const integrationProblem = computed(() => (settings.value ? settingsProblem(settings.value) : null))
const savable = computed(() => !!name.value.trim() && !integrationProblem.value && problems.value.every((problem) => problem === null || problem === 'at.problem.missingUnit'))
const pending = computed(() => {
  if (!draft.value) return []
  if (!live.value && blocks.value.length === 0) return []
  return draftChanges(live.value?.content ?? null, draft.value)
})
const blocking = computed(() => problems.value.filter((problem) => problem !== null).length + (integrationProblem.value ? 1 : 0))
const canPublish = computed(() => canManage.value && pending.value.length > 0 && blocks.value.length > 0 && blocking.value === 0 && !busy.value)
const status = computed(() => (tag.value ? tagStatus(tag.value, lastSeen.value) : null))
const units = computed(() => {
  const available = day.value?.units ?? []
  return [...available]
    .sort((first, second) => UNIT_ORDER.indexOf(first.unit_type) - UNIT_ORDER.indexOf(second.unit_type))
    .map((unit) => ({ code: unit.unit_type, used: blocks.value.some((block) => unitCode(block) === unit.unit_type) }))
})
const absentUnits = computed(() => UNIT_ORDER.filter((code) => !units.value.some((unit) => unit.code === code)))
const dayOptions = computed(() => {
  const latest = days.value[0]
  return [
    { value: '', label: latest ? t('at.adUnitsLatestOn', { day: dayText(latest.day, locale.value), n: latest.units.length }) : t('at.adUnitsLatest') },
    ...days.value.map((item) => ({ value: item.day, label: t('at.adUnitsFixed', { day: dayText(item.day, locale.value), n: item.units.length }) })),
  ]
})
const dayHint = computed(() => {
  if (!day.value) return settings.value?.ad_unit_day ? t('at.adUnitsGone') : t('at.adUnitsNone')
  const names = [...day.value.units].sort((first, second) => UNIT_ORDER.indexOf(first.unit_type) - UNIT_ORDER.indexOf(second.unit_type)).map((unit) => unitName(unit.unit_type))
  return settings.value?.ad_unit_day ? t('at.adUnitsFixedHint', { units: names.join(', ') }) : t('at.adUnitsLatestHint', { units: names.join(', ') })
})
const loaderChoices = computed(() => [
  { value: '', title: t('at.loaderNone'), hint: t('at.loaderNoneHint') },
  ...loaderOptions.value.map((option) => ({ value: option.id, title: option.name, hint: t(TEMPLATE_LABEL[option.template]) })),
])
const saveText = computed(() => {
  if (!canManage.value) return null
  if (saveState.value === 'saving') return t('at.saving')
  if (saveState.value === 'invalid') return t('at.saveInvalid')
  if (saveState.value === 'error') return t('at.saveError')
  return t('at.saved')
})

/** Carrega a tag, as versões, os blocos do GAM do site, os loaders e a última vez vista. */
async function load() {
  loadError.value = null
  ready = false
  try {
    const found = await service.show(tagId)
    tag.value = found
    name.value = found.name
    draft.value = structuredClone(found.draft)
    openIndex.value = found.draft.blocks.findIndex((block) => block.kind === 'content')
    if (openIndex.value < 0) openIndex.value = null
    const [unitDays, published, options] = await Promise.all([
      service.units(found.site_id).catch(() => []),
      service.versions(tagId).catch(() => []),
      loaders.options(internal ? found.client?.id : undefined).catch(() => []),
    ])
    days.value = unitDays
    versions.value = published
    loaderOptions.value = options
    void service
      .health(tagId, 1)
      .then((health) => (lastSeen.value = health.last_seen_at))
      .catch(() => undefined)
    await nextTick()
    ready = true
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Guarda o nome e o rascunho na API; o que a pessoa digita não é trocado pela resposta. */
async function persist() {
  const current = draft.value
  if (!current || !canManage.value) return
  if (!savable.value) {
    saveState.value = 'invalid'
    return
  }
  saveState.value = 'saving'
  nameTaken.value = false
  try {
    tag.value = await service.update(tagId, name.value.trim(), toPayload(current))
    saveState.value = 'saved'
  } catch (error) {
    const code = error instanceof ApiError ? error.code : 'unknown'
    nameTaken.value = code === 'ad_tag_name_taken'
    saveState.value = 'error'
    if (!nameTaken.value) toast.error(errorText(code))
  }
}

/** Marca para salvar daqui a pouco, juntando as mudanças seguidas num pedido só. */
function scheduleSave() {
  if (!ready || !canManage.value) return
  if (saveTimer) clearTimeout(saveTimer)
  saveState.value = savable.value ? 'saving' : 'invalid'
  saveTimer = setTimeout(() => {
    saveTimer = null
    saving = persist().finally(() => (saving = null))
  }, SAVE_DELAY)
}

/** Salva agora o que estiver esperando (antes de publicar ou sair da tela). */
async function saveNow() {
  if (saveTimer) {
    clearTimeout(saveTimer)
    saveTimer = null
    saving = persist().finally(() => (saving = null))
  }
  if (saving) await saving
}

onMounted(load)
watch([name, draft], scheduleSave, { deep: true })
watch(
  () => settings.value?.loader_id ?? null,
  async (loaderId) => {
    playing.value = false
    loaderConfig.value = loaderId ? await loaders.show(loaderId).then((loader) => previewLoader(inputOf(loader))).catch(() => null) : null
  },
)
onBeforeRouteLeave(saveNow)
onBeforeUnmount(() => {
  if (saveTimer) void saveNow()
})

/** Muda um bloco do rascunho. */
function changeBlock(index: number, patch: Partial<AdTagBlock>) {
  const block = draft.value?.blocks[index]
  if (block) Object.assign(block, patch)
}

/** Muda as configurações do rascunho. */
function changeSettings(patch: Partial<AdTagSettings>) {
  if (draft.value) Object.assign(draft.value.settings, patch)
}

/** Troca o bloco de lugar na ordem de carregamento. */
function moveBlock(index: number, offset: number) {
  const list = draft.value?.blocks
  const target = index + offset
  if (!list || target < 0 || target >= list.length) return
  const [block] = list.splice(index, 1)
  if (block) list.splice(target, 0, block)
  if (openIndex.value === index) openIndex.value = target
}

/** Põe um bloco do ad unit no fim da lista e abre para editar. */
function addBlock(code: string) {
  if (!draft.value) return
  const anchorEdge = draft.value.blocks.find((block) => block.kind === 'anchor')?.edge ?? null
  draft.value.blocks.push(newBlock(code, anchorEdge))
  openIndex.value = draft.value.blocks.length - 1
  tab.value = 'blocks'
}

/** Tira o bloco do rascunho. */
function removeBlock(index: number) {
  draft.value?.blocks.splice(index, 1)
  openIndex.value = null
  picking.value = null
}

/** Começa ou cancela a escolha do lugar do bloco na prévia. */
function togglePick(index: number) {
  picking.value = picking.value === index ? null : index
  if (picking.value !== null) playing.value = false
}

/** Fixa o lugar escolhido na prévia para o bloco. */
function placeBlock(selector: string, side: AdTagSide) {
  if (picking.value === null) return
  changeBlock(picking.value, { selector, side })
  picking.value = null
  toast.success(t('at.placed'), { description: t(side === 'before' ? 'at.where.before' : 'at.where.after', { selector }) })
}

/** Marca onde o bloco arrastado vai cair: metade de cima antes, a de baixo depois. */
function dragOver(event: DragEvent, index: number) {
  if (dragFrom.value === null) return
  event.preventDefault()
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  dropAt.value = event.clientY < rect.top + rect.height / 2 ? index : index + 1
}

/** Solta o bloco arrastado na linha azul. */
function drop() {
  const from = dragFrom.value
  const at = dropAt.value
  if (from !== null && at !== null) {
    const to = at > from ? at - 1 : at
    if (to !== from) moveBlock(from, to - from)
  }
  endDrag()
}

/** Termina o arrasto, solto ou cancelado. */
function endDrag() {
  dragFrom.value = null
  dropAt.value = null
  armed.value = null
}

/** Começa o arrasto do bloco que foi pego pela alça. */
function startDrag(event: DragEvent, index: number) {
  dragFrom.value = index
  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('text/plain', String(index))
  }
}

/** Mostra o loader na prévia até clicar em Finalizar loader. */
function playLoader() {
  if (!loaderConfig.value) return
  picking.value = null
  exiting.value = false
  playing.value = true
}

/** Vai para os blocos e mostra o loader na prévia. */
function showLoaderInPreview() {
  tab.value = 'blocks'
  playLoader()
}

/** Fecha o loader da prévia com a saída suave. */
function closeLoader() {
  exiting.value = true
  setTimeout(() => {
    playing.value = false
    exiting.value = false
  }, LOADER_EXIT_MS)
}

/** O caminho da prévia sempre começando com barra. */
function setPath(value: string) {
  path.value = value.startsWith('/') ? value : `/${value}`
}

/** Salva o rascunho e publica como versão nova. */
async function publish() {
  busy.value = true
  try {
    await saveNow()
    if (saveState.value !== 'saved') return
    tag.value = await service.publish(tagId, note.value.trim() || null)
    versions.value = await service.versions(tagId)
    publishOpen.value = false
    note.value = ''
    toast.success(t('at.published', { n: tag.value.live?.number ?? '' }), { description: t('at.publishedDesc', { domain: tag.value.domain }) })
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

/** Volta o site para uma versão antiga, publicada de novo como versão nova. */
async function restore() {
  const number = restoreTarget.value
  if (number === null) return
  busy.value = true
  try {
    await saveNow()
    const restored = await service.restore(tagId, number)
    ready = false
    tag.value = restored
    draft.value = structuredClone(restored.draft)
    versions.value = await service.versions(tagId)
    restoreTarget.value = null
    toast.success(t('at.restored', { n: number }))
    await nextTick()
    ready = true
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

/** Descarta o rascunho: volta para o que está no ar. */
function discard() {
  if (!live.value || !draft.value) return
  draft.value = structuredClone(live.value.content)
  openIndex.value = null
  picking.value = null
  toast.success(t('at.discarded'))
}

/** Pausa ou ativa a tag na hora. */
async function toggleActive() {
  if (!tag.value) return
  try {
    tag.value = await service.setActive(tagId, !tag.value.active)
    toast.success(tag.value.active ? t('at.activated') : t('at.paused'), { description: tag.value.active ? t('at.activatedDesc') : t('at.pausedDesc') })
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}

/** Apaga a tag e volta para a lista. */
async function remove() {
  busy.value = true
  try {
    if (saveTimer) clearTimeout(saveTimer)
    saveTimer = null
    await service.remove(tagId)
    removeOpen.value = false
    toast.success(t('at.removed'))
    ready = false
    await router.push(base)
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

/** Salva e abre a tela de um loader (ou de um novo). */
async function goToLoader(loaderId: string | null) {
  await saveNow()
  await router.push(`${loadersPath(internal)}/${loaderId ?? 'novo'}`)
}
</script>

<template>
  <PageHeader :title="tag?.name ?? t('nav.adTags')" :sub="tag ? [tag.domain, tag.client?.name, tag.key].filter(Boolean).join(' · ') : undefined">
    <template #back>
      <RouterLink :to="base" class="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft class="size-4" />{{ t('at.back') }}</RouterLink>
    </template>
    <template v-if="tag" #actions>
      <Button v-if="tag.live" variant="outline" @click="router.push(`${base}/${tagId}/metricas`)"><BarChart3 />{{ t('at.metrics') }}</Button>
      <Button variant="outline" @click="installOpen = true"><Code2 />{{ t('at.install') }}</Button>
      <Button v-if="canManage" :disabled="!canPublish" :title="blocking ? t('at.publishBlocked') : undefined" @click="publishOpen = true">
        {{ pending.length ? tn('at.publishCount', pending.length) : t('at.nothingToPublish') }}
      </Button>
      <DropdownMenuRoot v-if="canManage">
        <DropdownMenuTrigger as-child>
          <Button variant="outline" size="icon" :aria-label="t('at.more')"><MoreHorizontal /></Button>
        </DropdownMenuTrigger>
        <MenuContent align="end" class="w-52">
          <MenuItem :disabled="!tag.live" @select="toggleActive">{{ tag.active ? t('at.pause') : t('at.activate') }}</MenuItem>
          <MenuItem :disabled="!live || pending.length === 0" @select="discard">{{ t('at.discard') }}</MenuItem>
          <DropdownMenuSeparator class="-mx-1 my-1 h-px bg-border" />
          <MenuItem danger @select="removeOpen = true"><Trash2 />{{ t('at.remove') }}</MenuItem>
        </MenuContent>
      </DropdownMenuRoot>
    </template>
  </PageHeader>
  <div v-if="tag && draft" class="sticky top-0 z-20 border-b bg-background">
    <div class="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-6 gap-y-2 px-4 sm:px-6">
      <nav class="-mb-px flex max-w-full gap-1 overflow-x-auto" :aria-label="t('at.tabs')">
        <button
          v-for="item in ['blocks', 'integrations', 'versions'] as const"
          :key="item"
          type="button"
          :class="['border-b-2 px-3 py-3 text-[14px]', tab === item ? 'border-foreground font-medium text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground']"
          :aria-current="tab === item ? 'page' : undefined"
          @click="tab = item"
        >
          {{ t(`at.tab.${item}`) }}
        </button>
      </nav>
      <div class="ml-auto flex flex-wrap items-center gap-3 py-2 text-[13px]">
        <Status v-if="status" :tone="status.tone">{{ status.label }}</Status>
        <Badge v-if="pending.length && live" tone="ochre">{{ tn('at.draftCount', pending.length) }}</Badge>
        <span v-if="saveText" :class="['inline-flex items-center gap-1', saveState === 'invalid' || saveState === 'error' ? 'text-warn' : 'text-muted-foreground']">
          <AlertTriangle v-if="saveState === 'invalid' || saveState === 'error'" class="size-3.5" /><Check v-else-if="saveState === 'saved'" class="size-3.5" />{{ saveText }}
        </span>
      </div>
    </div>
  </div>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else-if="tag && draft && settings">
      <div v-if="!tag.active" class="flex items-start gap-2 rounded-md border border-ochre/40 bg-ochre-soft px-3 py-2 text-[13px] text-ochre">
        <AlertTriangle class="mt-0.5 size-4 shrink-0" />{{ t('at.pausedNote') }}
      </div>
      <div v-if="tab === 'blocks'" class="grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)]">
        <div class="grid grid-cols-[minmax(0,1fr)] content-start gap-3">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <h2 class="text-[15px] font-semibold">
              {{ t('at.blocks') }} <span class="font-normal text-muted-foreground">{{ t('at.blocksOrder') }}</span>
            </h2>
            <DropdownMenuRoot v-if="canManage">
              <DropdownMenuTrigger as-child>
                <Button size="sm" variant="outline"><Plus />{{ t('at.addBlock') }}</Button>
              </DropdownMenuTrigger>
              <MenuContent align="end" class="w-[260px]">
                <DropdownMenuLabel class="px-2 py-1.5 text-[12px] text-muted-foreground">{{ day ? t('at.unitsOn', { day: dayLabel }) : t('at.adUnitsNone') }}</DropdownMenuLabel>
                <MenuItem v-for="unit in units" :key="unit.code" :disabled="unit.used" @select="addBlock(unit.code)">
                  <span class="flex-1">{{ unitName(unit.code) }}</span><span v-if="unit.used" class="text-[12px] text-muted-foreground">{{ t('at.inTag') }}</span>
                </MenuItem>
                <DropdownMenuSeparator class="-mx-1 my-1 h-px bg-border" />
                <p class="px-2 py-1.5 text-[12px] leading-snug text-muted-foreground">
                  {{ absentUnits.length ? t('at.unitsAbsent', { units: absentUnits.map(unitName).join(', ') }) : t('at.unitsAll') }} {{ t('at.unitsWhere') }}
                </p>
              </MenuContent>
            </DropdownMenuRoot>
          </div>
          <div
            v-for="(block, index) in blocks"
            :key="`${unitCode(block)}-${index}`"
            :draggable="armed === index"
            :class="['relative', dragFrom === index && 'opacity-40']"
            @dragstart="startDrag($event, index)"
            @dragend="endDrag"
            @dragover="dragOver($event, index)"
            @drop.prevent="drop"
          >
            <div v-if="dragFrom !== null && dropAt === index" class="pointer-events-none absolute -top-[7px] left-0 right-0 h-0.5 rounded-full bg-sky-500" />
            <div v-if="dragFrom !== null && dropAt === index + 1 && index === blocks.length - 1" class="pointer-events-none absolute -bottom-[7px] left-0 right-0 h-0.5 rounded-full bg-sky-500" />
            <AdTagBlockCard
              :block="block"
              :index="index"
              :total="blocks.length"
              :open="openIndex === index"
              :problem="problems[index] ?? null"
              :picking="picking === index"
              :readonly="!canManage"
              :day="day ? dayLabel : null"
              @toggle="openIndex = openIndex === index ? null : index"
              @change="(patch) => changeBlock(index, patch)"
              @move="(offset) => moveBlock(index, offset)"
              @remove="removeBlock(index)"
              @pick="togglePick(index)"
              @arm="(on) => (armed = on ? index : null)"
            />
          </div>
          <div v-if="!blocks.length" class="rounded-lg border border-dashed bg-card p-8 text-center text-[14px] text-muted-foreground">{{ t('at.noBlocks') }}</div>
          <p class="text-[12px] text-muted-foreground">{{ t('at.blocksFoot') }}</p>
        </div>
        <div class="order-first grid min-w-0 grid-cols-[minmax(0,1fr)] content-start gap-3 lg:sticky lg:top-[64px] lg:order-none lg:self-start">
          <div class="flex flex-wrap items-center gap-2">
            <div class="inline-flex rounded-md border bg-background p-0.5" role="radiogroup" :aria-label="t('at.previewDevice')">
              <button
                v-for="item in ['desktop', 'mobile'] as const"
                :key="item"
                type="button"
                role="radio"
                :aria-checked="device === item"
                :class="['inline-flex h-8 items-center gap-1.5 rounded px-3 text-[13px]', device === item ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground']"
                @click="device = item"
              >
                <component :is="item === 'desktop' ? Monitor : Smartphone" class="size-4" />{{ t(item === 'desktop' ? 'at.device.desktop' : 'at.device.mobile') }}
              </button>
            </div>
            <div class="flex min-w-[220px] flex-1 items-center rounded-md border bg-background focus-within:ring-2 focus-within:ring-ring">
              <span class="shrink-0 border-r bg-muted px-3 py-1.5 font-mono text-[12px] text-muted-foreground">{{ tag.domain }}</span>
              <input :value="path" :aria-label="t('at.previewPath')" class="h-8 min-w-0 flex-1 bg-transparent px-3 font-mono text-[12px] outline-none" @input="setPath(($event.target as HTMLInputElement).value)" />
            </div>
            <Button v-if="playing" size="sm" class="h-9" :disabled="exiting" @click="closeLoader"><Check />{{ t('at.loaderFinish') }}</Button>
            <Button v-else size="sm" variant="outline" class="h-9" :disabled="!loaderConfig" :title="loaderConfig ? undefined : t('at.loaderMissing')" @click="playLoader"><LoaderCircle />{{ t('at.loaderShow') }}</Button>
          </div>
          <div v-if="picking !== null && blocks[picking]" class="flex items-center gap-2 rounded-md border border-sky-300 bg-sky-50 px-3 py-2 text-[13px] text-sky-900">
            <MousePointerClick class="size-4 shrink-0" />{{ t('at.pickBanner', { name: blockName(blocks[picking]!) }) }}
            <button type="button" class="ml-auto underline" @click="picking = null">{{ t('common.cancel') }}</button>
          </div>
          <AdTagPreview
            :domain="tag.domain"
            :blocks="blocks"
            :device="device"
            :path="path"
            :picking="picking"
            :loader="loaderConfig"
            :playing="playing"
            :exiting="exiting"
            :language="lang"
            @pick="placeBlock"
            @close="closeLoader"
          />
          <p class="text-[12px] text-muted-foreground">{{ t('at.previewFoot') }}</p>
        </div>
      </div>
      <fieldset v-else-if="tab === 'integrations'" :disabled="!canManage" class="grid min-w-0 gap-6 lg:grid-cols-2">
        <Card :title="t('at.general')" :desc="t('at.generalDesc')">
          <div class="grid gap-5">
            <Field id="at-name" :label="t('at.name')" :hint="t('at.nameHint')" :error="(nameTaken && t('at.nameTaken')) || (!name.trim() && t('at.nameMissing'))">
              <Input id="at-name" v-model="name" :maxlength="LIMITS.name" />
            </Field>
            <Checkbox id="at-lazy" :model-value="settings.lazy_load" :label="t('at.lazyLoad')" :hint="t('at.lazyLoadHint')" @update:model-value="(value) => changeSettings({ lazy_load: value })" />
            <Field id="at-day" :label="t('at.adUnits')" :hint="dayHint" :error="!day && settings.ad_unit_day ? t('at.adUnitsGone') : null">
              <NativeSelect id="at-day" :model-value="settings.ad_unit_day ?? ''" :options="dayOptions" @update:model-value="(value) => changeSettings({ ad_unit_day: value || null })" />
            </Field>
          </div>
        </Card>
        <Card :title="t('at.analytics')" :desc="t('at.analyticsDesc')">
          <Field id="at-ga" :label="t('at.analyticsId')" :error="integrationProblem === 'at.problem.analytics' && t('at.problem.analytics')">
            <Input
              id="at-ga"
              :model-value="settings.analytics_id ?? ''"
              :maxlength="LIMITS.text"
              class="h-9 font-mono text-[13px]"
              placeholder="G-XXXXXXXXXX"
              @update:model-value="(value) => changeSettings({ analytics_id: String(value).toUpperCase() })"
            />
          </Field>
        </Card>
        <Card :title="t('at.mgid')" :desc="t('at.mgidDesc')">
          <div class="grid gap-4 sm:grid-cols-2">
            <Field
              v-for="[key, label] in [['mgid_tag_id', 'at.mgid.tag'], ['mgid_smart_widget', 'at.mgid.smart'], ['mgid_back_button', 'at.mgid.back'], ['mgid_sidebar', 'at.mgid.sidebar']] as const"
              :id="`at-${key}`"
              :key="key"
              :label="t(label)"
            >
              <Input
                :id="`at-${key}`"
                :model-value="settings[key] ?? ''"
                :maxlength="LIMITS.text"
                :disabled="key !== 'mgid_tag_id' && !settings.mgid_tag_id"
                class="h-9 font-mono text-[13px]"
                placeholder="ID"
                @update:model-value="(value) => changeSettings({ [key]: String(value) })"
              />
            </Field>
          </div>
          <p v-if="integrationProblem === 'at.problem.mgid'" class="mt-3 text-[13px] text-bad">{{ t('at.problem.mgid') }}</p>
        </Card>
        <Card :title="t('at.loader')" :desc="t('at.loaderDesc')">
          <AdTagChoice :model-value="settings.loader_id ?? ''" :label="t('at.loader')" :options="loaderChoices" @update:model-value="(value) => changeSettings({ loader_id: value || null })" />
          <p v-if="loaderConfig" class="mt-3 text-[12px] text-muted-foreground">{{ t('at.loaderSummary', { seconds: loaderConfig.max_seconds, adblock: t(ADBLOCK_SHORT[loaderConfig.adblock]) }) }}</p>
          <div class="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[13px]">
            <button
              v-if="loaderConfig"
              type="button"
              class="text-link hover:underline"
              @click="showLoaderInPreview"
            >
              {{ t('at.loaderPreview') }}
            </button>
            <button v-if="settings.loader_id" type="button" class="text-link hover:underline" @click="goToLoader(settings.loader_id)">{{ t('at.loaderEdit') }}</button>
            <button v-if="canManage" type="button" class="text-link hover:underline" @click="goToLoader(null)">{{ t('at.loaderCreate') }}</button>
          </div>
        </Card>
        <Card :title="t('at.reward')" :desc="t('at.rewardDesc', { domain: tag.domain })">
          <AdTagChoice
            :model-value="settings.reward ? 'on' : 'off'"
            :label="t('at.reward')"
            :options="[
              { value: 'on', title: t('at.rewardOn'), hint: t('at.rewardOnHint') },
              { value: 'off', title: t('at.rewardOff'), hint: t('at.rewardOffHint') },
            ]"
            @update:model-value="(value) => changeSettings({ reward: value === 'on' })"
          />
        </Card>
        <Card :title="t('at.priceRules')" :desc="t('at.priceRulesDesc')">
          <AdTagChoice
            :model-value="settings.price_rules ? 'on' : 'off'"
            :label="t('at.priceRules')"
            :options="[
              { value: 'on', title: t('at.priceRulesOn'), hint: t('at.priceRulesOnHint') },
              { value: 'off', title: t('at.priceRulesOff'), hint: t('at.priceRulesOffHint') },
            ]"
            @update:model-value="(value) => changeSettings({ price_rules: value === 'on' })"
          />
          <p class="mt-3 text-[12px] text-muted-foreground">{{ t('at.priceRulesLater') }}</p>
        </Card>
      </fieldset>
      <DataTable v-else :min="720">
        <thead>
          <tr>
            <th :class="th">{{ t('at.col.version') }}</th>
            <th :class="th">{{ t('at.col.note') }}</th>
            <th :class="th">{{ t('at.col.by') }}</th>
            <th :class="th">{{ t('at.col.when') }}</th>
            <th :class="th"><span class="sr-only">{{ t('at.col.actions') }}</span></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="version in versions" :key="version.number">
            <td :class="td">
              <span class="font-medium tnum">{{ version.number }}</span><span v-if="version.live" class="ml-2"><Badge>{{ t('at.liveBadge') }}</Badge></span>
            </td>
            <td :class="td">
              {{ version.note || '—' }}<span class="block text-[12px] text-muted-foreground">{{ tn('at.blockCount', version.content.blocks.length) }}</span>
            </td>
            <td :class="td">{{ version.published_by ?? '—' }}</td>
            <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground tnum']">{{ formatDate(version.published_at) }}</td>
            <td :class="[td, 'text-right']">
              <Button v-if="!version.live && canManage" size="sm" variant="outline" @click="restoreTarget = version.number"><History />{{ t('at.restore') }}</Button>
            </td>
          </tr>
          <tr v-if="!versions.length">
            <td :class="[td, 'py-12 text-center text-muted-foreground']" :colspan="5">{{ t('at.noVersions') }}</td>
          </tr>
        </tbody>
      </DataTable>
    </template>
  </PageBody>
  <AdTagInstallDialog v-if="tag" v-model:open="installOpen" :name="tag.name" :domain="tag.domain" :tag-key="tag.key" />
  <Dialog v-model:open="publishOpen" class="max-w-[520px]" :title="t('at.publishTitle', { n: (live?.number ?? 0) + 1 })" :desc="t('at.publishDesc', { domain: tag?.domain ?? '' })">
    <div class="grid gap-4">
      <ul class="grid max-h-[220px] list-disc gap-1.5 overflow-y-auto rounded-md border bg-muted py-3 pl-8 pr-3 text-[14px]">
        <li v-for="change in pending" :key="change">{{ change }}</li>
      </ul>
      <Field id="at-note" :label="t('at.note')" :hint="t('at.noteHint')">
        <Input id="at-note" v-model="note" :maxlength="500" :placeholder="pending[0]" />
      </Field>
    </div>
    <template #footer>
      <Button variant="outline" @click="publishOpen = false">{{ t('common.cancel') }}</Button>
      <Button :disabled="busy" @click="publish">{{ t('at.publish') }}</Button>
    </template>
  </Dialog>
  <ConfirmDialog
    :open="restoreTarget !== null"
    :title="t('at.restoreTitle', { n: restoreTarget ?? '' })"
    :desc="t('at.restoreDesc', { domain: tag?.domain ?? '' })"
    :action="t('at.restore')"
    :busy="busy"
    @update:open="(value) => !value && (restoreTarget = null)"
    @confirm="restore"
  />
  <ConfirmDialog v-model:open="removeOpen" :title="t('at.removeTitle', { name: tag?.name ?? '' })" :desc="t('at.removeDesc')" :action="t('common.delete')" :busy="busy" @confirm="remove" />
</template>
