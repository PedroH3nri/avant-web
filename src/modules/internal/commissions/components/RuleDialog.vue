<script setup lang="ts">
/** Modal de uma regra de comissão: tipo, o que conta, percentual, espera, dias recebendo e transferência. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import { RefreshCw } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { ApiError } from '@/lib/api'
import { errorText, lang, pick, t, type Key } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { KINDS, TARGETS, emptyRuleForm, eventOf, newRuleForm, ruleBody, ruleErrors, splitEvent, takenEvents, type RuleForm } from '@/modules/internal/commissions/rules'
import { commissionService } from '@/modules/internal/commissions/service'
import type { CommissionRule } from '@/modules/internal/commissions/types'
import { formatAmount } from '@/modules/internal/goals/rules'
import type { RoleOption } from '@/modules/team/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ role: RoleOption; roles: RoleOption[]; rules: CommissionRule[]; rule: CommissionRule | null }>()
const emit = defineEmits<{ saved: [] }>()
const form = ref<RuleForm>(emptyRuleForm())
const busy = ref(false)

watch(open, (opened) => {
  if (!opened) return
  const rule = props.rule
  form.value = rule
    ? {
        ...splitEvent(rule.event),
        percentage: formatAmount(rule.percentage, lang.value),
        offset: String(rule.start_offset_days),
        duration: rule.duration_days === null ? '30' : String(rule.duration_days),
        noEnd: rule.duration_days === null,
        transfer: rule.transfer_to_role_id ?? '',
      }
    : newRuleForm(takenEvents(props.rules, null))
})

const taken = computed(() => takenEvents(props.rules, props.rule?.id ?? null))
const errors = computed(() => ruleErrors(form.value, lang.value))
const duplicate = computed(() => taken.value.has(eventOf(form.value.kind, form.value.target)))
const valid = computed(() => form.value.percentage !== '' && Object.keys(errors.value).length === 0 && !duplicate.value)
const canTransfer = computed(() => form.value.target === 'client' && !form.value.noEnd)
const transferOptions = computed(() => [
  { value: '', label: t('com.keep') },
  ...props.roles.filter((item) => item.id !== props.role.id).map((item) => ({ value: item.id, label: pick(item.name) })),
])

/** Classe do cartão de escolha, marcado ou não. */
const choice = (on: boolean, disabled = false) =>
  cn('rounded-md border p-3 text-left', on && 'border-foreground', disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-accent')

/** Troca o alvo; a transferência só vale para cliente. */
function chooseTarget(target: RuleForm['target']) {
  form.value = { ...form.value, target, transfer: target === 'client' ? form.value.transfer : '' }
}

/** Cria ou troca a regra no papel. */
async function save() {
  if (!valid.value) return
  busy.value = true
  try {
    const body = ruleBody(form.value, lang.value)
    if (props.rule) await commissionService.updateRule(props.role.id, props.rule.id, body)
    else await commissionService.createRule(props.role.id, body)
    toast.success(props.rule ? t('com.ruleSaved') : t('com.ruleCreated'), { description: props.rule ? t('com.card.note') : undefined })
    open.value = false
    emit('saved')
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <Dialog v-model:open="open" class="max-w-[680px]" :title="rule ? t('com.rule.editTitle') : t('com.rule.createTitle')" :desc="t('com.rule.dialogDesc', { role: pick(role.name) })">
    <form id="commission-rule" class="grid gap-5" novalidate @submit.prevent="save">
      <fieldset class="grid gap-2">
        <legend class="mb-2 text-[13px] font-medium text-muted-foreground">{{ t('com.kind.title') }}</legend>
        <div class="grid gap-2 sm:grid-cols-2">
          <label v-for="kind in KINDS" :key="kind" :class="choice(form.kind === kind)">
            <span class="flex items-center gap-2 text-[14px] font-medium"><input v-model="form.kind" type="radio" name="kind" :value="kind" class="accent-[hsl(var(--foreground))]" />{{ t(`com.kind.${kind}` as Key) }}</span>
            <span class="mt-1 block text-[12px] text-muted-foreground">{{ t(`com.kind.${kind}Hint` as Key) }}</span>
          </label>
        </div>
      </fieldset>
      <fieldset class="grid gap-2">
        <legend class="mb-2 text-[13px] font-medium text-muted-foreground">{{ t('com.target.title') }}</legend>
        <div class="grid gap-2 sm:grid-cols-3">
          <label v-for="target in TARGETS" :key="target" :class="choice(form.target === target, taken.has(eventOf(form.kind, target)))">
            <span class="flex items-center gap-2 text-[14px] font-medium">
              <input type="radio" name="target" :checked="form.target === target" :disabled="taken.has(eventOf(form.kind, target))" class="accent-[hsl(var(--foreground))]" @change="chooseTarget(target)" />{{ t(`com.target.${target}` as Key) }}
            </span>
            <span class="mt-1 block text-[12px] text-muted-foreground">{{
              taken.has(eventOf(form.kind, target)) ? t('com.taken') : t(`com.hint.${eventOf(form.kind, target)}` as Key)
            }}</span>
          </label>
        </div>
        <p v-if="duplicate" class="text-[13px] text-bad">{{ t('com.taken') }}</p>
      </fieldset>
      <div v-if="form.kind === 'reactivated'" class="flex gap-3 rounded-md border bg-muted p-3 text-[13px]">
        <RefreshCw class="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" /><span>{{ t('com.reactivationNote') }}</span>
      </div>
      <div class="grid items-start gap-4 sm:grid-cols-3">
        <Field id="rule-percentage" :label="t('com.percentage')" :error="form.percentage !== '' && errors.percentage && t('com.errPercentage')">
          <div class="relative">
            <Input id="rule-percentage" v-model="form.percentage" inputmode="decimal" class="pr-8 tnum" placeholder="5" />
            <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[14px] text-muted-foreground">%</span>
          </div>
        </Field>
        <Field id="rule-offset" :label="t('com.offset')" :hint="t('com.offsetHint')" :error="errors.offset && t('com.errOffset')">
          <Input id="rule-offset" v-model="form.offset" inputmode="numeric" class="tnum" />
        </Field>
        <Field id="rule-duration" :label="t('com.duration')" :error="errors.duration && t('com.errDuration')">
          <Input id="rule-duration" v-model="form.duration" inputmode="numeric" class="tnum" :disabled="form.noEnd" />
          <Checkbox id="rule-no-end" v-model="form.noEnd" :label="t('com.noEnd')" />
        </Field>
      </div>
      <Field id="rule-transfer" :label="t('com.transfer')" :hint="canTransfer ? t('com.transferHint') : t('com.transferClientOnly')">
        <NativeSelect id="rule-transfer" v-model="form.transfer" :options="transferOptions" class="sm:w-[320px]" :disabled="!canTransfer" />
      </Field>
    </form>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button type="submit" form="commission-rule" :disabled="!valid" :loading="busy">{{ t('com.saveRule') }}</Button>
    </template>
  </Dialog>
</template>
