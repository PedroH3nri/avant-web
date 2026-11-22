<script setup lang="ts">
/** A campanha do rascunho: conta, nome, objetivo, categoria especial, orçamento, lance, limite de gasto e se nasce ligada. */
import { computed } from 'vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import Segmented from '@/components/ui/Segmented.vue'
import { t, type Key } from '@/lib/i18n'
import { OBJECTIVES, SPECIAL_CATEGORIES, UNSUPPORTED_OBJECTIVES, withObjective } from '@/modules/facebook/draft-rules'
import type { FacebookAccount, FacebookDraftInput, FacebookObjective } from '@/modules/facebook/types'

const draft = defineModel<FacebookDraftInput>({ required: true })
const props = defineProps<{ accounts: FacebookAccount[] }>()

const account = computed(() => props.accounts.find((item) => item.id === draft.value.account_id) ?? null)
const accountOptions = computed(() => props.accounts.map((item) => ({ value: item.id, label: item.name })))
const bidOptions = computed(() => (['volume', 'cost_cap', 'bid_cap'] as const).map((bid) => ({ value: bid, label: t(`fb.create.bid.${bid}` as Key) })))

/** Muda campos da campanha. */
function patch(changes: Partial<FacebookDraftInput>) {
  draft.value = { ...draft.value, ...changes }
}

/** Troca o objetivo e ajusta a otimização dos conjuntos. */
function pickObjective(objective: FacebookObjective) {
  draft.value = withObjective(draft.value, objective)
}

/** Marca ou desmarca uma categoria especial. */
function toggleSpecial(category: string, checked: boolean) {
  const rest = draft.value.special_categories.filter((item) => item !== category)
  patch({ special_categories: checked ? [...rest, category] : rest })
}

const budgetAt = computed({ get: () => draft.value.budget_at, set: (value: string) => patch({ budget_at: value as FacebookDraftInput['budget_at'] }) })
const budgetKind = computed({ get: () => draft.value.budget_kind, set: (value: string) => patch({ budget_kind: value as FacebookDraftInput['budget_kind'] }) })
const startOn = computed({ get: () => (draft.value.start_active ? 'active' : 'paused'), set: (value: string) => patch({ start_active: value === 'active' }) })
</script>

<template>
  <section class="overflow-hidden rounded-lg border bg-card">
    <div class="p-6">
      <h2 class="text-[20px] font-semibold tracking-tight">{{ t('fb.level.campaign') }}</h2>
      <p class="mt-2 text-[14px] text-muted-foreground">{{ t('fb.create.campaignDesc') }}</p>
    </div>
    <div class="border-t p-6">
      <div class="text-[14px] font-medium">{{ t('fb.create.accountAndName') }}</div>
      <div class="mt-4 grid items-start gap-4 sm:grid-cols-2">
        <Field id="fb-new-account" :label="t('fb.create.account')" :error="account && !account.site_id && t('fb.problem.account_without_site')">
          <Select id="fb-new-account" :model-value="draft.account_id" :options="accountOptions" @update:model-value="patch({ account_id: $event })" />
        </Field>
        <Field id="fb-new-name" :label="t('fb.create.campaignName')">
          <Input id="fb-new-name" :model-value="draft.name" maxlength="400" @update:model-value="patch({ name: $event })" />
        </Field>
      </div>
    </div>
    <div class="border-t p-6">
      <div class="text-[14px] font-medium">{{ t('fb.create.objective') }}</div>
      <p class="mt-1 max-w-[70ch] text-[13px] text-muted-foreground">{{ t('fb.create.objectiveDesc') }}</p>
      <div class="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3" role="radiogroup" :aria-label="t('fb.create.objective')">
        <button
          v-for="objective in OBJECTIVES"
          :key="objective"
          type="button"
          role="radio"
          :aria-checked="draft.objective === objective"
          :disabled="UNSUPPORTED_OBJECTIVES.includes(objective)"
          :class="['rounded-md border p-3 text-left disabled:cursor-not-allowed disabled:opacity-50', draft.objective === objective ? 'border-foreground ring-1 ring-foreground' : 'hover:bg-muted']"
          @click="pickObjective(objective)"
        >
          <span class="block text-[14px] font-medium">{{ t(`fb.objective.${objective}` as Key) }}</span>
          <span class="mt-1 block text-[12px] text-muted-foreground">{{ t(`fb.objective.${objective}Desc` as Key) }}</span>
        </button>
      </div>
    </div>
    <div class="border-t p-6">
      <div class="text-[14px] font-medium">{{ t('fb.create.special') }}</div>
      <p class="mt-1 max-w-[70ch] text-[13px] text-muted-foreground">{{ t('fb.create.specialDesc') }}</p>
      <div class="mt-4 grid gap-2 sm:grid-cols-2">
        <Checkbox
          v-for="category in SPECIAL_CATEGORIES"
          :id="`fb-special-${category}`"
          :key="category"
          :label="t(`fb.special.${category}` as Key)"
          :model-value="draft.special_categories.includes(category)"
          @update:model-value="toggleSpecial(category, $event)"
        />
      </div>
    </div>
    <div class="border-t p-6">
      <div class="text-[14px] font-medium">{{ t('fb.create.budgetAndBid') }}</div>
      <div class="mt-4 grid items-start gap-4 sm:grid-cols-2">
        <div class="grid gap-2">
          <span class="text-[13px] font-medium text-muted-foreground">{{ t('fb.create.budgetAt') }}</span>
          <Segmented v-model="budgetAt" :label="t('fb.create.budgetAt')" :options="[{ value: 'campaign', label: t('fb.create.budgetAt.campaign') }, { value: 'adset', label: t('fb.create.budgetAt.adset') }]" />
        </div>
        <div class="grid gap-2">
          <span class="text-[13px] font-medium text-muted-foreground">{{ t('fb.create.budgetKind') }}</span>
          <Segmented v-model="budgetKind" :label="t('fb.create.budgetKind')" :options="[{ value: 'daily', label: t('fb.create.daily') }, { value: 'lifetime', label: t('fb.create.lifetime') }]" />
        </div>
        <Field v-if="draft.budget_at === 'campaign'" id="fb-new-budget" :label="t(draft.budget_kind === 'daily' ? 'fb.create.daily' : 'fb.create.lifetime')" :hint="draft.budget_kind === 'lifetime' ? t('fb.create.lifetimeHint') : t('fb.create.currencyHint', { currency: account?.currency ?? '' })">
          <Input id="fb-new-budget" inputmode="decimal" class="tnum" :model-value="draft.budget ?? ''" @update:model-value="patch({ budget: $event.replace(',', '.') || null })" />
        </Field>
        <Field id="fb-new-bid" :label="t('fb.create.bid')">
          <Select id="fb-new-bid" :model-value="draft.bid" :options="bidOptions" @update:model-value="patch({ bid: $event as FacebookDraftInput['bid'] })" />
        </Field>
        <Field v-if="draft.bid !== 'volume'" id="fb-new-bid-value" :label="t(draft.bid === 'cost_cap' ? 'fb.create.costCap' : 'fb.create.bidCap')">
          <Input id="fb-new-bid-value" inputmode="decimal" class="tnum" :model-value="draft.bid_amount ?? ''" @update:model-value="patch({ bid_amount: $event.replace(',', '.') || null })" />
        </Field>
        <Field id="fb-new-spend-cap" :label="t('fb.create.spendCap')" :hint="t('fb.create.spendCapHint')">
          <Input id="fb-new-spend-cap" inputmode="decimal" class="tnum" :model-value="draft.spend_cap ?? ''" @update:model-value="patch({ spend_cap: $event.replace(',', '.') || null })" />
        </Field>
        <div class="grid gap-2">
          <span class="text-[13px] font-medium text-muted-foreground">{{ t('fb.create.onCreate') }}</span>
          <Segmented v-model="startOn" :label="t('fb.create.onCreate')" :options="[{ value: 'paused', label: t('fb.create.startPaused') }, { value: 'active', label: t('fb.create.startActive') }]" />
        </div>
      </div>
    </div>
  </section>
</template>
