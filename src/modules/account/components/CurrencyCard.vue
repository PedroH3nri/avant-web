<script setup lang="ts">
/** Moeda em que a pessoa vê os valores do painel (receita, eCPM, resultado). */
import { computed, onMounted, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Field from '@/components/ui/Field.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { ApiError } from '@/lib/api'
import { errorText, locale, t } from '@/lib/i18n'
import type { Currency } from '@/modules/currencies/types'
import { useSession } from '@/stores/session'
import { currencyService } from '@/modules/currencies/service'

const session = useSession()
const currencies = ref<Currency[]>([])
const chosen = ref(session.displayCurrency)
const busy = ref(false)

/** Carrega as moedas do painel; só as que já têm cotação entram na lista. */
async function load() {
  try {
    currencies.value = await currencyService.list()
  } catch {
    currencies.value = []
  }
}
onMounted(load)
watch(
  () => session.displayCurrency,
  (code) => (chosen.value = code),
)

/** Nome da moeda no idioma do painel, com o código na frente. */
function currencyLabel(currency: Currency): string {
  const names = new Intl.DisplayNames([locale.value], { type: 'currency' })
  return `${currency.code} · ${names.of(currency.code) ?? currency.name}`
}

const options = computed(() =>
  currencies.value
    .filter((currency) => currency.available || currency.code === session.displayCurrency)
    .map((currency) => ({ value: currency.code, label: currencyLabel(currency) })),
)
const missing = computed(() => currencies.value.filter((currency) => !currency.available).length)

/** Grava a moeda escolhida. */
async function save() {
  busy.value = true
  try {
    await session.setDisplayCurrency(chosen.value)
    toast.success(t('cur.saved'))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <Card :title="t('cur.title')" :desc="t('cur.desc')" :footer-note="missing ? t('cur.missing') : t('cur.note')">
    <Field id="display-currency" :label="t('cur.label')" class="max-w-[360px]">
      <NativeSelect id="display-currency" v-model="chosen" :options="options" :disabled="!options.length" />
    </Field>
    <template #footer>
      <Button :disabled="busy || chosen === session.displayCurrency" @click="save">{{ t('cur.save') }}</Button>
    </template>
  </Card>
</template>
