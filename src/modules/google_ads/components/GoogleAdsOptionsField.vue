<script setup lang="ts">
/** Locais, idiomas ou públicos do Google em chips: a pessoa digita, o Avant busca na conta e o toque inclui o item. */
import { computed, ref, watch } from 'vue'
import { X } from 'lucide-vue-next'
import Field from '@/components/ui/Field.vue'
import { ApiError } from '@/lib/api'
import { errorText, lang, t } from '@/lib/i18n'
import { googleAdsService } from '@/modules/google_ads/service'
import type { GoogleAdsOption, GoogleAdsOptionKind } from '@/modules/google_ads/types'

const model = defineModel<GoogleAdsOption[]>({ required: true })
const props = defineProps<{ id: string; label: string; kind: GoogleAdsOptionKind; accountId: string; hint?: string; disabled?: boolean }>()

const MIN_QUERY = 2
const WAIT_MS = 300
const text = ref('')
const options = ref<GoogleAdsOption[]>([])
const failure = ref<string | null>(null)
const loading = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

const left = computed(() => options.value.filter((option) => !model.value.some((pick) => pick.id === option.id)).slice(0, 12))

/** Busca o texto digitado no Google; o erro aparece embaixo do campo. */
async function load(query: string) {
  if (!props.accountId || query.trim().length < MIN_QUERY) {
    options.value = []
    return
  }
  loading.value = true
  failure.value = null
  try {
    options.value = await googleAdsService.options(props.kind, props.accountId, query.trim(), lang.value)
  } catch (error) {
    failure.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  } finally {
    loading.value = false
  }
}

/** Inclui o item tocado, sem repetir, e limpa a busca. */
function add(option: GoogleAdsOption) {
  model.value = [...model.value, option]
  text.value = ''
  options.value = []
}

/** Tira o item da lista. */
function remove(pick: GoogleAdsOption) {
  model.value = model.value.filter((item) => item.id !== pick.id)
}

watch(text, (query) => {
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => load(query), WAIT_MS)
})
</script>

<template>
  <Field :id="id" :label="label" :hint="hint" :error="failure">
    <div class="flex min-h-10 flex-wrap items-center gap-1.5 rounded-md border border-input bg-[hsl(var(--field))] px-2 py-1.5 focus-within:ring-2 focus-within:ring-ring" :class="disabled && 'opacity-50'">
      <span v-for="pick in model" :key="pick.id" class="inline-flex h-6 items-center gap-1 rounded-full bg-secondary pl-2.5 pr-1 text-[13px]">
        {{ pick.name || pick.id }}
        <button type="button" :aria-label="t('gads.create.remove', { name: pick.name || pick.id })" :disabled="disabled" class="rounded-full p-0.5 hover:bg-background" @click="remove(pick)"><X class="size-3" aria-hidden="true" /></button>
      </span>
      <input :id="id" v-model="text" :disabled="disabled" class="h-6 min-w-[140px] flex-1 bg-transparent text-[14px] outline-none placeholder:text-muted-foreground" :placeholder="model.length ? '' : t('gads.create.search')" autocomplete="off" />
    </div>
    <p v-if="loading" class="text-[13px] text-muted-foreground">{{ t('gads.loading') }}</p>
    <div v-else-if="left.length" class="flex flex-wrap gap-1.5">
      <button v-for="option in left" :key="option.id" type="button" :disabled="disabled" class="h-6 rounded-full border border-dashed px-2.5 text-[12px] text-muted-foreground hover:text-foreground" @click="add(option)">
        + {{ option.name }}<span v-if="option.detail" class="ml-1 opacity-70">· {{ option.detail }}</span>
      </button>
    </div>
  </Field>
</template>
