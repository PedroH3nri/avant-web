<script setup lang="ts">
/** Um conjunto do rascunho: nome, otimização, orçamento (quando fica no conjunto), pixel, datas, público e posicionamentos. */
import { computed, ref, watch } from 'vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import Segmented from '@/components/ui/Segmented.vue'
import Switch from '@/components/ui/Switch.vue'
import { t, type Key } from '@/lib/i18n'
import FacebookPicksField from '@/modules/facebook/components/FacebookPicksField.vue'
import { EVENTS, OPTIMIZATIONS, PIXEL_OBJECTIVES, PLACEMENTS, isoToLocal, joinPlaces, localToIso, splitPlaces } from '@/modules/facebook/draft-rules'
import { facebookService } from '@/modules/facebook/service'
import type { FacebookAdsetInput, FacebookObjective, FacebookOption, FacebookPick } from '@/modules/facebook/types'

const adset = defineModel<FacebookAdsetInput>({ required: true })
const props = defineProps<{ accountId: string; objective: FacebookObjective; budgetHere: boolean; lifetime: boolean; special: boolean }>()

const pixels = ref<FacebookOption[]>([])
const manual = ref(adset.value.placements.length > 0)

const optimizationOptions = computed(() => OPTIMIZATIONS[props.objective].map((goal) => ({ value: goal, label: t(`fb.optimization.${goal}` as Key) })))
const pixelOptions = computed(() => [{ value: '', label: t('fb.create.noPixel') }, ...pixels.value.map((pixel) => ({ value: pixel.id, label: pixel.name }))])
const eventOptions = computed(() => [{ value: '', label: '–' }, ...EVENTS.map((event) => ({ value: event, label: t(`fb.event.${event}` as Key) }))])
const genderOptions = computed(() => (['all', 'women', 'men'] as const).map((gender) => ({ value: gender, label: t(`fb.create.gender.${gender}` as Key) })))
const places = computed({ get: () => joinPlaces(adset.value), set: (picks: FacebookPick[]) => patch(splitPlaces(picks)) })
const placementMode = computed({
  get: () => (manual.value ? 'manual' : 'auto'),
  set: (mode: string) => {
    manual.value = mode === 'manual'
    if (!manual.value) patch({ placements: [] })
  },
})

/** Muda campos do conjunto. */
function patch(changes: Partial<FacebookAdsetInput>) {
  adset.value = { ...adset.value, ...changes }
}

/** Marca ou desmarca um posicionamento. */
function togglePlacement(placement: string, checked: boolean) {
  const rest = adset.value.placements.filter((item) => item !== placement)
  patch({ placements: checked ? [...rest, placement] : rest })
}

/** A idade digitada como número inteiro, dentro do que o Facebook aceita. */
function age(text: string): number {
  return Math.min(65, Math.max(13, Number.parseInt(text, 10) || 18))
}

/** Busca os pixels da conta para a conversão. */
async function loadPixels() {
  pixels.value = props.accountId ? await facebookService.options('pixels', props.accountId).catch(() => []) : []
}

watch(() => props.accountId, loadPixels, { immediate: true })
</script>

<template>
  <div class="contents">
    <div class="border-t p-6">
      <div class="text-[14px] font-medium">{{ t('fb.create.nameAndGoal') }}</div>
      <div class="mt-4 grid items-start gap-4 sm:grid-cols-2">
        <Field id="fb-set-name" :label="t('fb.create.adsetName')">
          <Input id="fb-set-name" :model-value="adset.name" maxlength="400" @update:model-value="patch({ name: $event })" />
        </Field>
        <Field id="fb-set-opt" :label="t('fb.create.optimization')">
          <Select id="fb-set-opt" :model-value="adset.optimization" :options="optimizationOptions" @update:model-value="patch({ optimization: $event })" />
        </Field>
        <Field v-if="budgetHere" id="fb-set-budget" :label="t(lifetime ? 'fb.create.lifetime' : 'fb.create.daily')">
          <Input id="fb-set-budget" inputmode="decimal" class="tnum" :model-value="adset.budget ?? ''" @update:model-value="patch({ budget: $event.replace(',', '.') || null })" />
        </Field>
      </div>
    </div>
    <div class="border-t p-6">
      <div class="text-[14px] font-medium">{{ t('fb.create.conversion') }}</div>
      <p class="mt-1 text-[13px] text-muted-foreground">{{ t(PIXEL_OBJECTIVES.includes(objective) ? 'fb.create.conversionRequired' : 'fb.create.conversionOptional') }}</p>
      <div class="mt-4 grid items-start gap-4 sm:grid-cols-2">
        <Field id="fb-set-pixel" :label="t('fb.create.pixel')">
          <Select id="fb-set-pixel" :model-value="adset.pixel_id ?? ''" :options="pixelOptions" @update:model-value="patch({ pixel_id: $event || null, event: $event ? adset.event : null })" />
        </Field>
        <Field id="fb-set-event" :label="t('fb.create.event')">
          <Select id="fb-set-event" :model-value="adset.event ?? ''" :options="eventOptions" :disabled="!adset.pixel_id" @update:model-value="patch({ event: $event || null })" />
        </Field>
      </div>
    </div>
    <div class="border-t p-6">
      <div class="text-[14px] font-medium">{{ t('fb.create.dates') }}</div>
      <div class="mt-4 grid items-start gap-4 sm:grid-cols-2">
        <Field id="fb-set-start" :label="t('fb.create.start')" :hint="t('fb.create.startHint')">
          <Input id="fb-set-start" type="datetime-local" class="tnum" :model-value="isoToLocal(adset.start_time)" @update:model-value="patch({ start_time: localToIso($event) })" />
        </Field>
        <Field id="fb-set-end" :label="t('fb.create.end')" :hint="t(lifetime ? 'fb.create.endRequired' : 'fb.create.endHint')">
          <Input id="fb-set-end" type="datetime-local" class="tnum" :model-value="isoToLocal(adset.end_time)" @update:model-value="patch({ end_time: localToIso($event) })" />
        </Field>
      </div>
    </div>
    <div class="border-t p-6">
      <div class="text-[14px] font-medium">{{ t('fb.create.audience') }}</div>
      <div class="mt-4 grid gap-4">
        <FacebookPicksField id="fb-set-places" v-model="places" kind="locations" :account-id="accountId" :label="t('fb.create.places')" :hint="t('fb.create.placesHint')" />
        <div class="grid items-start gap-4 sm:grid-cols-3">
          <Field id="fb-set-age-min" :label="t('fb.create.ageMin')">
            <Input id="fb-set-age-min" inputmode="numeric" class="tnum" :disabled="special" :model-value="String(adset.age_min)" @update:model-value="patch({ age_min: age($event) })" />
          </Field>
          <Field id="fb-set-age-max" :label="t('fb.create.ageMax')">
            <Input id="fb-set-age-max" inputmode="numeric" class="tnum" :disabled="special" :model-value="String(adset.age_max)" @update:model-value="patch({ age_max: age($event) })" />
          </Field>
          <Field id="fb-set-gender" :label="t('fb.create.gender')">
            <Select id="fb-set-gender" :model-value="adset.gender" :options="genderOptions" :disabled="special" @update:model-value="patch({ gender: $event as FacebookAdsetInput['gender'] })" />
          </Field>
        </div>
        <p v-if="special" class="text-[13px] text-muted-foreground">{{ t('fb.create.specialLocks') }}</p>
        <FacebookPicksField id="fb-set-locales" :model-value="adset.locales" kind="locales" :account-id="accountId" :label="t('fb.create.locales')" @update:model-value="patch({ locales: $event })" />
        <div class="flex items-start gap-3 rounded-md border px-3 py-2">
          <Switch id="fb-set-advantage" class="mt-0.5" :label="t('fb.create.advantage')" :model-value="adset.advantage_audience" @update:model-value="patch({ advantage_audience: $event })" />
          <span>
            <span class="block text-[14px] font-medium">{{ t('fb.create.advantage') }}</span>
            <span class="block text-[13px] text-muted-foreground">{{ t('fb.create.advantageDesc') }}</span>
          </span>
        </div>
        <FacebookPicksField id="fb-set-interests" :model-value="adset.interests" kind="interests" :account-id="accountId" :label="t('fb.create.interests')" @update:model-value="patch({ interests: $event })" />
        <div class="grid items-start gap-4 sm:grid-cols-2">
          <FacebookPicksField id="fb-set-audiences" :model-value="adset.audiences" kind="audiences" :account-id="accountId" :label="t('fb.create.audiences')" @update:model-value="patch({ audiences: $event })" />
          <FacebookPicksField id="fb-set-excluded" :model-value="adset.excluded_audiences" kind="audiences" :account-id="accountId" :label="t('fb.create.excluded')" :hint="t('fb.create.excludedHint')" @update:model-value="patch({ excluded_audiences: $event })" />
        </div>
      </div>
    </div>
    <div class="border-t p-6">
      <div class="text-[14px] font-medium">{{ t('fb.create.placements') }}</div>
      <div class="mt-4 grid gap-4">
        <Segmented v-model="placementMode" :label="t('fb.create.placements')" :options="[{ value: 'auto', label: t('fb.create.placementsAuto') }, { value: 'manual', label: t('fb.create.placementsManual') }]" />
        <div v-if="manual" class="grid gap-2 sm:grid-cols-2">
          <Checkbox
            v-for="placement in PLACEMENTS"
            :id="`fb-placement-${placement}`"
            :key="placement"
            :label="t(`fb.placement.${placement}` as Key)"
            :model-value="adset.placements.includes(placement)"
            @update:model-value="togglePlacement(placement, $event)"
          />
        </div>
        <p v-if="adset.placements.includes('audience_network')" class="text-[13px] text-ochre">{{ t('fb.create.audienceNetworkWarn') }}</p>
      </div>
    </div>
  </div>
</template>
