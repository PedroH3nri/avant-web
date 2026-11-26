<script setup lang="ts">
/** Uma régua de nutrição: condição, quem entra, e-mails, HubSpot e repetição, mais os clientes e os envios. */
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { ArrowLeft, Plus } from 'lucide-vue-next'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import Select from '@/components/ui/Select.vue'
import Switch from '@/components/ui/Switch.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { latestCall } from '@/lib/latest'
import { cn } from '@/lib/utils'
import ConditionText from '@/modules/internal/nurture/components/ConditionText.vue'
import NurtureEmailEditor from '@/modules/internal/nurture/components/NurtureEmailEditor.vue'
import NurtureEmailPreview from '@/modules/internal/nurture/components/NurtureEmailPreview.vue'
import NurtureMembersTable from '@/modules/internal/nurture/components/NurtureMembersTable.vue'
import NurtureSendsTable from '@/modules/internal/nurture/components/NurtureSendsTable.vue'
import {
  COMPARISON_LABEL,
  COMPARISONS,
  DUE_LABEL,
  emptyEmail,
  emptyRule,
  MAX_EMAILS,
  MEASURE_LABEL,
  MEASURE_UNIT,
  MEASURES,
  REPEAT_LABEL,
  REPEATS,
  repeatDays,
  repeatOf,
  ruleProblem,
  STEP_LABEL,
  STEPS,
  TASK_DUES,
  type Repeat,
} from '@/modules/internal/nurture/rules'
import { nurtureService } from '@/modules/internal/nurture/service'
import type { NurtureEmail, NurtureLang, NurtureMember, NurtureRuleInput, NurtureSend } from '@/modules/internal/nurture/types'
import { staffService } from '@/modules/internal/staff/service'
import { useSession } from '@/stores/session'

type Tab = 'rule' | 'members' | 'sends'
const COUNT_WAIT_MS = 400
const NONE = 'none'
const ALL = 'all'

const route = useRoute()
const router = useRouter()
const session = useSession()
const ruleId = computed(() => (route.params.id === 'nova' ? null : String(route.params.id)))
const draft = ref<NurtureRuleInput>(emptyRule())
const savedName = ref('')
const loaded = ref(false)
const loadError = ref<string | null>(null)
const saving = ref(false)
const tab = ref<Tab>('rule')
const members = ref<NurtureMember[] | null>(null)
const sends = ref<NurtureSend[] | null>(null)
const managers = ref<{ value: string; label: string }[]>([])
const matching = ref<number | null>(null)
const previewing = ref<{ email: NurtureEmail; lang: NurtureLang } | null>(null)
const confirmDelete = ref(false)
const countCall = latestCall()
let countTimer: ReturnType<typeof setTimeout> | undefined

const canManage = computed(() => session.can('internal.nurture.manage'))
const problem = computed(() => ruleProblem(draft.value))
const valueLabel = computed(() => t(MEASURE_UNIT[draft.value.measure] === 'nurture.unit.days' ? 'nurture.field.days' : 'nurture.field.value'))
const measureOptions = computed(() => MEASURES.map((value) => ({ value, label: t(MEASURE_LABEL[value]) })))
const comparisonOptions = computed(() => COMPARISONS.map((value) => ({ value, label: t(COMPARISON_LABEL[value]) })))
const stepOptions = computed(() => STEPS.map((value) => ({ value, label: t(STEP_LABEL[value]) })))
const dueOptions = computed(() => TASK_DUES.map((value) => ({ value, label: t(DUE_LABEL[value]) })))
const repeatOptions = computed(() => REPEATS.map((value) => ({ value, label: t(REPEAT_LABEL[value]) })))
const managerOptions = computed(() => [{ value: ALL, label: t('nurture.anyManager') }, ...managers.value, { value: NONE, label: t('nurture.noManager') }])
const tabs = computed(() =>
  ruleId.value
    ? [
        { id: 'rule' as Tab, label: t('nurture.tab.rule') },
        { id: 'members' as Tab, label: members.value ? t('nurture.tab.membersN', { n: members.value.length }) : t('nurture.tab.members') },
        { id: 'sends' as Tab, label: t('nurture.tab.sends') },
      ]
    : [],
)
const manager = computed({
  get: () => (draft.value.manager_scope === 'one' ? (draft.value.manager_id ?? ALL) : draft.value.manager_scope),
  set: (value: string) => {
    if (value === ALL || value === NONE) draft.value = { ...draft.value, manager_scope: value, manager_id: null }
    else draft.value = { ...draft.value, manager_scope: 'one', manager_id: value }
  },
})
const repeat = computed({
  get: () => repeatOf(draft.value.repeat_days),
  set: (value: string) => (draft.value = { ...draft.value, repeat_days: repeatDays(value as Repeat) }),
})
const step = computed({
  get: () => draft.value.step ?? 'ad_tag',
  set: (value: string) => (draft.value = { ...draft.value, step: value as NurtureRuleInput['step'] }),
})

/** Troca um campo do rascunho. */
function set<Name extends keyof NurtureRuleInput>(name: Name, value: NurtureRuleInput[Name]) {
  draft.value = { ...draft.value, [name]: value }
}

/** Troca um campo de número do rascunho a partir do texto do campo. */
function setNumber(name: 'priority' | 'value' | 'min_client_age_days', text: string) {
  set(name, Math.max(0, Math.trunc(Number(text) || 0)))
}

/** Troca a medida; a etapa só vale para a medida do onboarding. */
function setMeasure(value: string) {
  const measure = value as NurtureRuleInput['measure']
  draft.value = { ...draft.value, measure, step: measure === 'onboarding_step' ? (draft.value.step ?? 'ad_tag') : null }
}

/** Troca um e-mail da lista. */
function setEmail(position: number, email: NurtureEmail) {
  set(
    'emails',
    draft.value.emails.map((item, index) => (index === position ? email : item)),
  )
}

/** Tira um e-mail da lista. */
function removeEmail(position: number) {
  set(
    'emails',
    draft.value.emails.filter((_item, index) => index !== position),
  )
}

/** Põe um e-mail novo no fim. */
function addEmail() {
  set('emails', [...draft.value.emails, emptyEmail(false)])
}

/** Carrega a régua, os gerentes e, na régua salva, os clientes e os envios. */
async function load() {
  loadError.value = null
  try {
    const [found, people] = await Promise.all([ruleId.value ? nurtureService.rule(ruleId.value) : Promise.resolve(null), staffService.options()])
    managers.value = people.items.map((person) => ({ value: person.user.id, label: person.user.name }))
    if (found) {
      const { id: _id, created_at: _created, updated_at: _updated, ...input } = found.rule
      draft.value = { ...input, step: input.step ?? null }
      savedName.value = found.rule.name
      void loadLists()
    }
    loaded.value = true
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Carrega os clientes e os envios da régua salva. */
async function loadLists() {
  if (!ruleId.value) return
  const [foundMembers, foundSends] = await Promise.all([nurtureService.members(ruleId.value), nurtureService.sends(ruleId.value)])
  members.value = foundMembers.items
  sends.value = foundSends.items
}

/** Conta quantos clientes ativos atendem a condição hoje, um pouco depois da última mudança. */
function countLater() {
  clearTimeout(countTimer)
  countTimer = setTimeout(async () => {
    const rule = draft.value
    try {
      const result = await countCall(() =>
        nurtureService.condition({
          measure: rule.measure,
          comparison: rule.comparison,
          value: rule.value,
          step: rule.step,
          manager_scope: rule.manager_scope,
          manager_id: rule.manager_id,
          min_client_age_days: rule.min_client_age_days,
        }),
      )
      if (result) matching.value = result.matching
    } catch {
      matching.value = null
    }
  }, COUNT_WAIT_MS)
}

/** Grava a régua e volta para a lista. */
async function save() {
  if (problem.value) return
  saving.value = true
  const body = { ...draft.value, name: draft.value.name.trim(), stage: draft.value.stage?.trim() || null }
  try {
    if (ruleId.value) await nurtureService.update(ruleId.value, body)
    else await nurtureService.create(body)
    toast.success(t(ruleId.value ? 'nurture.saved' : 'nurture.created'), { description: t(body.enabled ? 'nurture.turnedOnHint' : 'nurture.savedOffHint') })
    await router.push('/interno/nutricao')
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    saving.value = false
  }
}

/** Apaga a régua com as passagens e os envios. */
async function remove() {
  if (!ruleId.value) return
  saving.value = true
  try {
    await nurtureService.remove(ruleId.value)
    toast.success(t('nurture.deleted', { name: savedName.value }))
    await router.push('/interno/nutricao')
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    saving.value = false
    confirmDelete.value = false
  }
}

watch(
  () => [draft.value.measure, draft.value.comparison, draft.value.value, draft.value.step, draft.value.manager_scope, draft.value.manager_id, draft.value.min_client_age_days],
  countLater,
  { immediate: true },
)
onMounted(load)
</script>

<template>
  <PageHeader :title="ruleId ? draft.name || savedName || t('nurture.rule') : t('nurture.new')" :sub="ruleId ? undefined : t('nurture.newSub')">
    <template #back>
      <RouterLink to="/interno/nutricao" class="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground"><ArrowLeft class="size-4" />{{ t('nurture.title') }}</RouterLink>
    </template>
    <template v-if="ruleId" #meta>
      <p class="mt-2 text-[15px] text-muted-foreground"><ConditionText :rule="draft" /></p>
    </template>
    <template v-if="canManage" #actions>
      <label class="flex items-center gap-2 text-[14px]"><Switch :model-value="draft.enabled" :label="t('nurture.col.on')" @update:model-value="(enabled: boolean) => set('enabled', enabled)" />{{ draft.enabled ? t('nurture.on') : t('nurture.off') }}</label>
      <Button v-if="ruleId" variant="outline" :disabled="saving" @click="confirmDelete = true">{{ t('common.delete') }}</Button>
      <Button :disabled="!loaded || saving || problem !== null" :title="problem ? t(problem) : undefined" @click="save">{{ t('common.save') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else-if="loaded">
      <div v-if="tabs.length" class="flex flex-wrap gap-1 rounded-md border bg-background p-0.5 sm:w-fit" role="tablist" :aria-label="t('nurture.sections')">
        <button
          v-for="option in tabs"
          :key="option.id"
          type="button"
          role="tab"
          :aria-selected="tab === option.id"
          :class="cn('h-8 rounded px-3 text-[13px]', tab === option.id ? 'bg-secondary font-medium' : 'text-muted-foreground hover:text-foreground')"
          @click="tab = option.id"
        >
          {{ option.label }}
        </button>
      </div>
      <div v-if="tab === 'rule'" class="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div class="grid min-w-0 gap-6">
          <Card :title="t('nurture.card.condition')" :desc="t('nurture.card.conditionDesc')">
            <div class="grid gap-4">
              <Field id="rule-name" :label="t('nurture.field.name')">
                <Input id="rule-name" :model-value="draft.name" class="h-10" maxlength="80" :placeholder="t('nurture.field.namePlaceholder')" @update:model-value="(text: string) => set('name', text)" />
              </Field>
              <div class="grid gap-3 sm:grid-cols-[1.4fr_1fr_120px]">
                <Field id="rule-measure" :label="t('nurture.field.measure')">
                  <Select id="rule-measure" :model-value="draft.measure" :options="measureOptions" class="h-10" @update:model-value="setMeasure" />
                </Field>
                <Field v-if="draft.measure === 'onboarding_step'" id="rule-step" :label="t('nurture.field.step')">
                  <Select id="rule-step" v-model="step" :options="stepOptions" class="h-10" />
                </Field>
                <Field v-else id="rule-comparison" :label="t('nurture.field.comparison')">
                  <Select id="rule-comparison" :model-value="draft.comparison" :options="comparisonOptions" class="h-10" @update:model-value="(value: string) => set('comparison', value as NurtureRuleInput['comparison'])" />
                </Field>
                <Field id="rule-value" :label="valueLabel">
                  <Input id="rule-value" :model-value="String(draft.value)" type="number" min="0" max="3650" class="h-10 tnum" @update:model-value="(text: string) => setNumber('value', text)" />
                </Field>
              </div>
              <p class="rounded-md border bg-muted/40 px-3 py-2 text-[13px]">
                <span class="font-medium"><ConditionText :rule="draft" />.</span>
                <span v-if="matching !== null" class="ml-1 text-muted-foreground">{{ t('nurture.matching', { n: matching }) }}</span>
              </p>
            </div>
          </Card>
          <Card :title="t('nurture.card.audience')" :desc="t('nurture.card.audienceDesc')">
            <div class="grid gap-3 sm:grid-cols-2">
              <Field id="rule-manager" :label="t('nurture.field.manager')">
                <Select id="rule-manager" v-model="manager" :options="managerOptions" class="h-10" />
              </Field>
              <Field id="rule-age" :label="t('nurture.field.age')" :hint="t('nurture.field.ageHint')">
                <Input id="rule-age" :model-value="String(draft.min_client_age_days)" type="number" min="0" class="h-10 tnum" @update:model-value="(text: string) => setNumber('min_client_age_days', text)" />
              </Field>
            </div>
          </Card>
          <Card :title="t('nurture.card.emails')" :desc="t('nurture.card.emailsDesc')" :footer-note="draft.emails.length >= MAX_EMAILS ? t('nurture.maxEmails') : undefined">
            <ol class="grid gap-3">
              <NurtureEmailEditor
                v-for="(email, position) in draft.emails"
                :key="position"
                :model-value="email"
                :position="position"
                :total="draft.emails.length"
                :disabled="!canManage"
                @update:model-value="(next: NurtureEmail) => setEmail(position, next)"
                @remove="removeEmail(position)"
                @preview="(lang: NurtureLang) => (previewing = { email, lang })"
              />
            </ol>
            <div class="mt-4 flex flex-wrap items-center gap-1.5 text-[12px]">
              <span class="text-muted-foreground">{{ t('nurture.variables') }}</span>
              <code v-for="variable in ['{nome}', '{empresa}', '{gerente}', '{dias_sem_acesso}', '{link_avant}', '{link_guia_ad_tag}', '{link_equipe}', '{link_agenda}', '{link_ajuda}']" :key="variable" class="rounded border bg-muted px-1.5 py-0.5 font-mono">{{ variable }}</code>
            </div>
            <template v-if="canManage && draft.emails.length < MAX_EMAILS" #footer>
              <Button size="sm" variant="outline" @click="addEmail"><Plus class="size-4" aria-hidden="true" />{{ t('nurture.addEmail') }}</Button>
            </template>
          </Card>
        </div>
        <div class="grid content-start gap-6">
          <Card :title="t('nurture.card.hubspot')" :desc="t('nurture.card.hubspotDesc')">
            <div class="grid gap-4">
              <label class="flex items-start justify-between gap-3 text-[14px]">
                <span
                  ><span class="font-medium">{{ t('nurture.field.task') }}</span
                  ><span class="block text-[13px] text-muted-foreground">{{ t('nurture.field.taskHint') }}</span></span
                >
                <Switch :model-value="draft.hubspot_task" :label="t('nurture.field.task')" @update:model-value="(enabled: boolean) => set('hubspot_task', enabled)" />
              </label>
              <Field v-if="draft.hubspot_task" id="rule-due" :label="t('nurture.field.due')">
                <Select id="rule-due" :model-value="draft.task_due" :options="dueOptions" class="h-10" @update:model-value="(value: string) => set('task_due', value as NurtureRuleInput['task_due'])" />
              </Field>
              <Field id="rule-stage" :label="t('nurture.field.stage')" :hint="t('nurture.field.stageHint')" :error="problem === 'nurture.problem.stage' && t(problem)">
                <Input id="rule-stage" :model-value="draft.stage ?? ''" class="h-10 font-mono" maxlength="64" placeholder="esfriando" @update:model-value="(text: string) => set('stage', text || null)" />
              </Field>
            </div>
          </Card>
          <Card :title="t('nurture.card.repeat')">
            <div class="grid gap-4">
              <Field id="rule-repeat" :label="t('nurture.field.repeat')">
                <Select id="rule-repeat" v-model="repeat" :options="repeatOptions" class="h-10" />
              </Field>
              <Field id="rule-priority" :label="t('nurture.field.priority')" :hint="t('nurture.field.priorityHint')">
                <Input id="rule-priority" :model-value="String(draft.priority)" type="number" min="1" max="99" class="h-10 w-24 tnum" @update:model-value="(text: string) => setNumber('priority', text)" />
              </Field>
            </div>
          </Card>
          <Card :title="t('nurture.card.exit')">
            <ul class="grid gap-2 text-[13px] text-muted-foreground">
              <li>{{ t('nurture.exit.condition') }}</li>
              <li>{{ t('nurture.exit.completed') }}</li>
              <li>{{ t('nurture.exit.unsubscribed') }}</li>
            </ul>
          </Card>
        </div>
      </div>
      <NurtureMembersTable v-else-if="tab === 'members'" :members="members" />
      <NurtureSendsTable v-else :sends="sends" />
    </template>
  </PageBody>
  <NurtureEmailPreview :open="previewing !== null" :email="previewing?.email ?? null" :lang="previewing?.lang ?? 'pt'" @update:open="(isOpen: boolean) => !isOpen && (previewing = null)" />
  <ConfirmDialog v-model:open="confirmDelete" :title="t('nurture.deleteTitle', { name: savedName })" :desc="t('nurture.deleteDesc')" :action="t('common.delete')" :busy="saving" @confirm="remove" />
</template>
