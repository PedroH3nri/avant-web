<script setup lang="ts">
/** Itens escolhidos de uma lista do Facebook em chips: interesses, lugares e idiomas buscam pelo texto; públicos vêm da conta. */
import { computed, ref, watch } from 'vue'
import { X } from 'lucide-vue-next'
import Field from '@/components/ui/Field.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { facebookService } from '@/modules/facebook/service'
import type { FacebookListKind, FacebookOption, FacebookPick } from '@/modules/facebook/types'

const model = defineModel<FacebookPick[]>({ required: true })
const props = defineProps<{ id: string; label: string; kind: FacebookListKind; accountId: string; hint?: string; disabled?: boolean }>()

const SEARCHED: FacebookListKind[] = ['interests', 'locations', 'locales']
const MIN_QUERY = 2
const WAIT_MS = 300
const searched = computed(() => SEARCHED.includes(props.kind))
const text = ref('')
const options = ref<FacebookOption[]>([])
const failure = ref<string | null>(null)
const loading = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

const left = computed(() => options.value.filter((option) => !model.value.some((pick) => pick.id === option.id)).slice(0, 12))

/** Busca a lista (ou o texto digitado) no Facebook; o erro aparece embaixo do campo. */
async function load(query: string) {
  if (!props.accountId || (searched.value && query.trim().length < MIN_QUERY)) {
    options.value = []
    return
  }
  loading.value = true
  failure.value = null
  try {
    options.value = await facebookService.options(props.kind, props.accountId, query.trim())
  } catch (error) {
    failure.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  } finally {
    loading.value = false
  }
}

/** Inclui o item tocado, sem repetir, e limpa a busca. */
function add(option: FacebookOption) {
  model.value = [...model.value, { id: option.id, name: option.name, kind: option.detail }]
  text.value = ''
  if (searched.value) options.value = []
}

/** Tira o item da lista. */
function remove(pick: FacebookPick) {
  model.value = model.value.filter((item) => item.id !== pick.id)
}

watch(text, (query) => {
  if (!searched.value) return
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => load(query), WAIT_MS)
})
watch(
  () => props.accountId,
  () => {
    if (!searched.value) load('')
  },
  { immediate: true },
)
</script>

<template>
  <Field :id="id" :label="label" :hint="hint" :error="failure">
    <div class="flex min-h-10 flex-wrap items-center gap-1.5 rounded-md border border-input bg-background px-2 py-1.5 focus-within:ring-2 focus-within:ring-ring" :class="disabled && 'opacity-50'">
      <span v-for="pick in model" :key="pick.id" class="inline-flex h-6 items-center gap-1 rounded-full bg-secondary pl-2.5 pr-1 text-[13px]">
        {{ pick.name || pick.id }}
        <button type="button" :aria-label="t('fb.create.remove', { name: pick.name || pick.id })" :disabled="disabled" class="rounded-full p-0.5 hover:bg-background" @click="remove(pick)"><X class="size-3" aria-hidden="true" /></button>
      </span>
      <input
        v-if="searched"
        :id="id"
        v-model="text"
        :disabled="disabled"
        class="h-6 min-w-[140px] flex-1 bg-transparent text-[14px] outline-none placeholder:text-muted-foreground"
        :placeholder="model.length ? '' : t('fb.create.search')"
        autocomplete="off"
      />
      <span v-else-if="!model.length" :id="id" class="px-1 text-[14px] text-muted-foreground">{{ t('fb.create.pickBelow') }}</span>
    </div>
    <p v-if="loading" class="text-[13px] text-muted-foreground">{{ t('fb.loading') }}</p>
    <div v-else-if="left.length" class="flex flex-wrap gap-1.5">
      <button v-for="option in left" :key="option.id" type="button" :disabled="disabled" class="h-6 rounded-full border border-dashed px-2.5 text-[12px] text-muted-foreground hover:text-foreground" @click="add(option)">
        + {{ option.name }}<span v-if="option.detail" class="ml-1 opacity-70">· {{ option.detail }}</span>
      </button>
    </div>
  </Field>
</template>
