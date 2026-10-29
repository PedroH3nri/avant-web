<script setup lang="ts">
/** Aba Custos: custos de um mês, recorrentes e por fórmula, que entram no Resultado. */
import { computed, onMounted, ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { DropdownMenuRoot, DropdownMenuSeparator, DropdownMenuTrigger } from 'reka-ui'
import { MoreHorizontal, Plus } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { COST_KINDS, FORMULA_CHIPS, costBody, costForm, formatMonth } from '@/modules/costs/rules'
import { errorText, locale, t } from '@/lib/i18n'
import { formatMetric } from '@/lib/metrics'
import { td, th } from '@/lib/table'
import { cn } from '@/lib/utils'
import type { Cost, FormulaCheck } from '@/modules/costs/types'
import type { Currency } from '@/modules/currencies/types'
import { useSession } from '@/stores/session'
import { costService } from '@/modules/costs/service'
import { currencyService } from '@/modules/currencies/service'

const SAMPLE_BILLING = 10000
const SAMPLE_REVENUE = 9000

const session = useSession()
const costs = ref<Cost[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const currencies = ref<Currency[]>([])
const loadError = ref<string | null>(null)
const editing = ref<Cost | null>(null)
const formOpen = ref(false)
const form = ref(costForm(null, session.displayCurrency))
const check = ref<FormulaCheck | null>(null)
const busy = ref(false)
const removing = ref<Cost | null>(null)

const canManage = computed(() => session.can('costs.manage'))
const body = computed(() => costBody(form.value))
const currencyOptions = computed(() =>
  currencies.value
    .filter((currency) => currency.available || currency.code === form.value.currency)
    .map((currency) => ({ value: currency.code, label: currency.code })),
)
const formulaReady = computed(() => form.value.kind !== 'formula' || check.value?.valid === true)

/** Carrega a página dos custos e as moedas que já têm cotação. */
async function load() {
  loadError.value = null
  try {
    const [found, list] = await Promise.all([costService.list({ page: page.value }), currencyService.list()])
    currencies.value = list
    if (found.items.length === 0 && page.value > 1) {
      page.value = Math.max(1, found.pages)
      return
    }
    costs.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)
watch(page, load)

/** Confere a fórmula na API e calcula com valores de exemplo, para a prévia. */
const checkFormula = useDebounceFn(async () => {
  const formula = form.value.formula.trim()
  if (form.value.kind !== 'formula' || !formula) {
    check.value = null
    return
  }
  try {
    check.value = await costService.checkFormula({ formula, billing: SAMPLE_BILLING, revenue: SAMPLE_REVENUE })
  } catch {
    check.value = null
  }
}, 300)
watch(() => [form.value.formula, form.value.kind], checkFormula)

/** Abre o formulário, vazio ou com o custo escolhido. */
function open(cost: Cost | null) {
  editing.value = cost
  form.value = costForm(cost, session.displayCurrency)
  check.value = null
  formOpen.value = true
  void checkFormula()
}

/** Põe uma variável ou função no fim da fórmula. */
function addChip(chip: string) {
  const current = form.value.formula.trimEnd()
  form.value.formula = current ? `${current} ${chip}` : chip
}

/** Grava o custo novo ou a edição. */
async function save() {
  if (!body.value) return
  busy.value = true
  try {
    if (editing.value) await costService.update(editing.value.id, body.value)
    else await costService.create(body.value)
    toast.success(editing.value ? t('cost.saved') : t('cost.created'))
    formOpen.value = false
    await load()
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

const removeOpen = computed({
  get: () => removing.value !== null,
  set: (value) => {
    if (!value) removing.value = null
  },
})

/** Apaga o custo escolhido. */
async function confirmRemove() {
  const current = removing.value
  if (!current) return
  busy.value = true
  try {
    await costService.remove(current.id)
    await load()
    removing.value = null
    toast.success(t('cost.deleted'))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}

/** Valor do custo na moeda dele. */
const amountText = (cost: Cost) => formatMetric(Number(cost.amount), 'currency', locale.value, false, cost.currency)
/** Período do custo: o mês, ou de quando até quando. */
function periodText(cost: Cost): string {
  const start = formatMonth(cost.start_month, locale.value)
  if (cost.kind === 'one_time') return start
  return `${start} → ${cost.end_month ? formatMonth(cost.end_month, locale.value) : t('cost.noEnd')}`
}
/** Prévia da fórmula com os valores de exemplo. */
const previewText = computed(() => {
  if (!check.value?.valid || check.value.value === null) return t('cost.formulaHint')
  return t('cost.preview', { billing: sampleMoney(SAMPLE_BILLING), revenue: sampleMoney(SAMPLE_REVENUE), value: sampleMoney(Number(check.value.value)) })
})
/** Valor de exemplo na moeda do custo. */
function sampleMoney(value: number): string {
  return formatMetric(value, 'currency', locale.value, false, form.value.currency)
}
const formulaError = computed(() => (check.value && !check.value.valid ? t('cost.formulaInvalid') : null))
/** Classe da opção de tipo, marcada ou não. */
const kindClass = (on: boolean) =>
  cn('flex h-10 cursor-pointer items-center justify-center rounded-md border px-3 text-[14px] font-medium', on ? 'border-foreground bg-secondary' : 'text-muted-foreground hover:text-foreground')
</script>

<template>
  <PageHeader :title="t('nav.costs')" :sub="t('cost.sub')">
    <template v-if="canManage" #actions>
      <Button @click="open(null)"><Plus />{{ t('cost.new') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <DataTable v-else :min="760">
      <thead>
        <tr>
          <th :class="th">{{ t('cost.name') }}</th>
          <th :class="th">{{ t('cost.kind') }}</th>
          <th :class="th">{{ t('cost.value') }}</th>
          <th :class="th">{{ t('cost.period') }}</th>
          <th :class="th"><span class="sr-only">{{ t('cost.actions') }}</span></th>
        </tr>
      </thead>
      <tbody>
        <TableState :cols="5" :loading="!costs" :empty="costs?.length === 0" :desc="t('cost.empty')" />
        <tr v-for="cost in costs ?? []" :key="cost.id">
          <td :class="[td, 'font-medium']">{{ cost.name }}</td>
          <td :class="td"><Badge>{{ t(`cost.kind.${cost.kind}`) }}</Badge></td>
          <td :class="td">
            <code v-if="cost.kind === 'formula'" class="font-mono text-[13px]">{{ cost.formula }}</code>
            <span v-else class="tnum whitespace-nowrap">{{ amountText(cost) }}</span>
            <span v-if="cost.kind === 'formula'" class="ml-2 text-[13px] text-muted-foreground">{{ cost.currency }}</span>
          </td>
          <td :class="[td, 'whitespace-nowrap text-[13px] text-muted-foreground']">{{ periodText(cost) }}</td>
          <td :class="[td, 'text-right']">
            <DropdownMenuRoot v-if="canManage">
              <DropdownMenuTrigger as-child>
                <Button variant="ghost" size="icon" class="size-8" :aria-label="t('cost.actions')"><MoreHorizontal /></Button>
              </DropdownMenuTrigger>
              <MenuContent align="end" class="w-44">
                <MenuItem @select="open(cost)">{{ t('common.edit') }}</MenuItem>
                <DropdownMenuSeparator class="-mx-1 my-1 h-px bg-border" />
                <MenuItem danger @select="removing = cost">{{ t('common.delete') }}</MenuItem>
              </MenuContent>
            </DropdownMenuRoot>
          </td>
        </tr>
      </tbody>
    </DataTable>
    <Pagination v-if="!loadError" v-model:page="page" :total="total" :pages="pages" />
  </PageBody>

  <Dialog v-model:open="formOpen" :title="editing ? t('cost.edit') : t('cost.new')" :desc="t('cost.formDesc')" class="max-w-[540px]">
    <form id="cost-form" class="grid gap-4" @submit.prevent="save">
      <Field id="cost-name" :label="t('cost.name')">
        <Input id="cost-name" v-model="form.name" maxlength="120" :placeholder="t('cost.namePlaceholder')" />
      </Field>
      <div class="grid grid-cols-3 gap-2" role="radiogroup" :aria-label="t('cost.kind')">
        <label v-for="kind in COST_KINDS" :key="kind" :class="kindClass(form.kind === kind)">
          <input v-model="form.kind" type="radio" name="cost-kind" :value="kind" class="sr-only" />
          {{ t(`cost.kind.${kind}`) }}
        </label>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <Field id="cost-start" :label="form.kind === 'one_time' ? t('cost.month') : t('cost.start')">
          <Input id="cost-start" v-model="form.start" type="month" />
        </Field>
        <Field v-if="form.kind !== 'one_time'" id="cost-end" :label="t('cost.end')">
          <Input id="cost-end" v-model="form.end" type="month" :min="form.start" />
        </Field>
      </div>
      <div class="grid grid-cols-[110px_1fr] gap-4">
        <Field id="cost-currency" :label="t('cost.currency')">
          <NativeSelect id="cost-currency" v-model="form.currency" :options="currencyOptions" />
        </Field>
        <Field v-if="form.kind === 'formula'" id="cost-formula" :label="t('cost.formula')" :hint="previewText" :error="formulaError">
          <Input id="cost-formula" v-model="form.formula" maxlength="300" class="font-mono" placeholder="faturamento * 6%" :invalid="!!formulaError" />
        </Field>
        <Field v-else id="cost-amount" :label="form.kind === 'one_time' ? t('cost.amountOnce') : t('cost.amountMonthly')">
          <Input id="cost-amount" v-model="form.amount" inputmode="decimal" class="tnum" placeholder="1200" />
        </Field>
      </div>
      <div v-if="form.kind === 'formula'" class="flex flex-wrap gap-2">
        <Button v-for="chip in FORMULA_CHIPS" :key="chip" type="button" variant="outline" size="sm" class="font-mono" @click="addChip(chip)">{{ chip }}</Button>
      </div>
    </form>
    <template #footer>
      <Button variant="outline" @click="formOpen = false">{{ t('common.cancel') }}</Button>
      <Button form="cost-form" type="submit" :loading="busy" :disabled="!body || !formulaReady">{{ t('cost.save') }}</Button>
    </template>
  </Dialog>

  <ConfirmDialog
    v-model:open="removeOpen"
    :title="t('cost.deleteTitle', { name: removing?.name ?? '' })"
    :desc="t('cost.deleteDesc')"
    :action="t('common.delete')"
    :busy="busy"
    @confirm="confirmRemove"
  />
</template>
