<script setup lang="ts">
/** Papéis da equipe Groone: criar e editar o papel e as regras de comissão de cada um. */
import { computed, onMounted, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import { DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { MoreHorizontal, Pencil, Plus } from 'lucide-vue-next'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Field from '@/components/ui/Field.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import { ApiError } from '@/lib/api'
import { errorText, lang, locale, pick, t, type Key } from '@/lib/i18n'
import { formatMetric } from '@/lib/metrics'
import { td, th } from '@/lib/table'
import { cn } from '@/lib/utils'
import RuleDialog from '@/modules/internal/commissions/components/RuleDialog.vue'
import { personGoalAmount, splitEvent } from '@/modules/internal/commissions/rules'
import { commissionService } from '@/modules/internal/commissions/service'
import type { CommissionRule } from '@/modules/internal/commissions/types'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import GoalTemplatesDialog from '@/modules/internal/goals/components/GoalTemplatesDialog.vue'
import { formatAmount, monthOptions } from '@/modules/internal/goals/rules'
import { goalService } from '@/modules/internal/goals/service'
import type { GoalMode, GoalTemplate, RoleGoal } from '@/modules/internal/goals/types'
import RoleDialog from '@/modules/team/components/RoleDialog.vue'
import { teamService } from '@/modules/team/service'
import type { Permission, Role } from '@/modules/team/types'
import { useSession } from '@/stores/session'

const EVENTS_PER_ROLE = 6
const session = useSession()
const roles = ref<Role[]>([])
const permissions = ref<Permission[]>([])
const rules = ref<CommissionRule[]>([])
const counts = ref<Map<string, number>>(new Map())
const roleId = ref('')
const loaded = ref(false)
const loadError = ref<string | null>(null)
const roleDialog = ref(false)
const editingRole = ref<Role | null>(null)
const ruleDialog = ref(false)
const editingRule = ref<CommissionRule | null>(null)
const removing = ref<CommissionRule | null>(null)
const busy = ref(false)
const removeOpen = computed({ get: () => removing.value !== null, set: (value) => !value && (removing.value = null) })
const canManage = computed(() => session.can('internal.commissions.manage'))
const canRoles = computed(() => session.can('roles.manage'))
const current = computed(() => roles.value.find((role) => role.id === roleId.value) ?? null)
const today = new Date().toISOString().slice(0, 10)
const templates = ref<GoalTemplate[]>([])
const roleGoals = ref<RoleGoal[]>([])
const templatesOpen = ref(false)
const goalBusy = ref(false)
const MODES: GoalMode[] = ['per_member', 'split']
const goal = computed(() => roleGoals.value.find((item) => item.role_id === roleId.value) ?? null)
const template = computed(() => templates.value.find((item) => item.id === goal.value?.goal_template_id) ?? null)
const templateOptions = computed(() => [{ value: '', label: t('goals.noGoalOption') }, ...templates.value.filter((item) => !item.is_company_goal).map((item) => ({ value: item.id, label: item.name.includes(String(item.year)) ? item.name : `${item.name} (${item.year})` }))])
/** A frase do valor da meta de cada pessoa no mês atual. */
const goalText = computed(() => {
  const chosen = template.value
  const role = current.value
  if (!chosen || !goal.value || !role) return ''
  if (chosen.year !== Number(today.slice(0, 4))) return t('com.goal.otherYear', { year: chosen.year, current: today.slice(0, 4) })
  const amount = personGoalAmount(chosen.months, goal.value.goal_mode, role.member_count, today.slice(0, 7))
  if (amount === null) return t('com.goal.noPeople')
  const month = monthOptions(today, locale.value)[0]?.label ?? ''
  const text = t('com.goal.amount', { month, amount: formatMetric(amount, 'currency', locale.value) })
  if (goal.value.goal_mode !== 'split') return `${text}.`
  const total = formatMetric(Number(chosen.months[Number(today.slice(5, 7)) - 1]), 'currency', locale.value)
  return `${text} ${t('com.goal.splitOf', { total, n: role.member_count })}.`
})

/** Todos os papéis da Company Groone, página por página (os predefinidos são dos clientes). */
async function allRoles(): Promise<Role[]> {
  const found: Role[] = []
  for (let page = 1; ; page++) {
    const result = await teamService.roles({ page })
    found.push(...result.items)
    if (page >= result.pages) return found.filter((role) => !role.is_system)
  }
}

/** Quantas regras cada papel tem, para a lista da esquerda. */
async function countRules(list: Role[]) {
  const pairs = await Promise.all(list.map(async (role) => [role.id, (await commissionService.rules(role.id)).items.length] as const))
  counts.value = new Map(pairs)
}

/** Carrega papéis, permissões e as regras do papel escolhido. */
async function load() {
  loadError.value = null
  try {
    const [list, catalog] = await Promise.all([allRoles(), teamService.permissions(), loadGoals()])
    roles.value = list
    permissions.value = catalog.items
    if (!list.some((role) => role.id === roleId.value)) roleId.value = list[0]?.id ?? ''
    await Promise.all([loadRules(), countRules(list)])
    loaded.value = true
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)
watch(() => session.me?.active_company_id, load)

/** Os modelos de meta e a meta de cada papel. */
async function loadGoals() {
  const [templateList, goalList] = await Promise.all([goalService.templates(), goalService.roleGoals()])
  templates.value = templateList.items
  roleGoals.value = goalList.items
}
/** Troca o modelo ou o modo da meta do papel escolhido. */
async function setGoal(templateId: string, mode: GoalMode) {
  const role = current.value
  if (!role) return
  goalBusy.value = true
  try {
    await goalService.setRoleGoal(role.id, templateId || null, mode)
    roleGoals.value = (await goalService.roleGoals()).items
    toast.success(t('goals.roleSaved', { role: pick(role.name) }))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    goalBusy.value = false
  }
}

/** As regras do papel escolhido. */
async function loadRules() {
  rules.value = roleId.value ? (await commissionService.rules(roleId.value)).items : []
  counts.value = new Map(counts.value).set(roleId.value, rules.value.length)
}
watch(roleId, () => void loadRules().catch((error) => toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))))

/** Resumo do papel na lista: pessoas e regras de comissão. */
function roleLine(role: Role): string {
  const people = t('com.roles.people', { n: role.member_count })
  const total = counts.value.get(role.id) ?? 0
  return `${people} · ${total ? t('com.roles.rules', { n: total }) : t('com.roles.noCommission')}`
}
/** Abre o papel para criar (null) ou editar. */
function openRole(role: Role | null) {
  editingRole.value = role
  roleDialog.value = true
}
/** Depois de salvar o papel: recarrega e, se for novo, já mostra ele. */
async function roleSaved(role: Role) {
  const created = editingRole.value === null
  roleId.value = role.id
  await load()
  if (created) toast.success(t('com.roles.created'), { description: t('com.roles.createdDesc') })
}
/** Abre a regra para criar (null) ou editar. */
function openRule(rule: CommissionRule | null) {
  editingRule.value = rule
  ruleDialog.value = true
}
/** Apaga a regra escolhida. */
async function removeRule() {
  const rule = removing.value
  if (!rule) return
  busy.value = true
  try {
    await commissionService.deleteRule(rule.id)
    removing.value = null
    toast(t('com.ruleDeleted'))
    await loadRules()
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
/** Nome do evento da regra. */
const ruleName = (rule: CommissionRule) => t(`com.event.${rule.event}` as Key)
/** Tipo da regra (cadastro ou reativação). */
const ruleKind = (rule: CommissionRule) => t(`com.kind.${splitEvent(rule.event).kind}` as Key)
/** O que acontece no fim do prazo. */
function ruleEnd(rule: CommissionRule): string {
  const target = roles.value.find((role) => role.id === rule.transfer_to_role_id)
  return target ? t('com.passesTo', { role: pick(target.name) }) : t('com.staysWith')
}
</script>

<template>
  <PageHeader :title="t('com.roles.title')" :sub="t('com.roles.sub')">
    <template v-if="canRoles" #actions>
      <Button @click="openRole(null)"><Plus />{{ t('com.roles.new') }}</Button>
    </template>
  </PageHeader>
  <PageBody class="lg:grid-cols-[280px_minmax(0,1fr)]">
    <LoadError v-if="loadError" class="lg:col-span-2" :message="loadError" @retry="load" />
    <p v-else-if="!loaded" class="text-[14px] text-muted-foreground lg:col-span-2" role="status">{{ t('common.loading') }}</p>
    <p v-else-if="roles.length === 0" class="text-[14px] text-muted-foreground lg:col-span-2">{{ t('com.roles.empty') }}</p>
    <template v-else>
      <nav class="grid content-start gap-1" :aria-label="t('com.nav.roles')">
        <button
          v-for="role in roles"
          :key="role.id"
          type="button"
          :aria-current="roleId === role.id ? 'page' : undefined"
          :class="cn('rounded-md border bg-card px-3 py-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', roleId === role.id ? 'border-foreground' : 'hover:bg-accent')"
          @click="roleId = role.id"
        >
          <span class="block text-[14px] font-medium">{{ pick(role.name) }}</span>
          <span class="block text-[13px] text-muted-foreground">{{ roleLine(role) }}</span>
        </button>
      </nav>
      <div v-if="current" class="grid content-start gap-6">
        <Card :title="t('com.card.title', { role: pick(current.name) })" :desc="t('com.card.desc')" :footer-note="t('com.card.note')">
          <p v-if="rules.length === 0" class="text-[14px] text-muted-foreground">{{ t('com.card.none') }}</p>
          <DataTable v-else :min="720">
            <thead>
              <tr>
                <th :class="th">{{ t('com.col.rule') }}</th>
                <th :class="[th, 'text-right']">{{ t('com.col.percentage') }}</th>
                <th :class="[th, 'text-right']">{{ t('com.col.offset') }}</th>
                <th :class="[th, 'text-right']">{{ t('com.col.duration') }}</th>
                <th :class="th">{{ t('com.col.end') }}</th>
                <th :class="[th, 'w-12']"><span class="sr-only">{{ t('team.actions') }}</span></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rule in rules" :key="rule.id" class="hover:bg-muted">
                <td :class="td">
                  <div class="font-medium">{{ ruleName(rule) }}</div>
                  <div class="text-[12px] text-muted-foreground">{{ ruleKind(rule) }}</div>
                </td>
                <td :class="[td, 'text-right tnum']">{{ formatAmount(rule.percentage, lang) }}%</td>
                <td :class="[td, 'whitespace-nowrap text-right tnum']">{{ rule.start_offset_days ? t('com.days', { n: rule.start_offset_days }) : '–' }}</td>
                <td :class="[td, 'whitespace-nowrap text-right tnum']">{{ rule.duration_days ? t('com.days', { n: rule.duration_days }) : t('com.noEnd') }}</td>
                <td :class="[td, 'whitespace-nowrap text-muted-foreground']">{{ ruleEnd(rule) }}</td>
                <td :class="td">
                  <DropdownMenuRoot v-if="canManage">
                    <DropdownMenuTrigger as-child>
                      <Button variant="ghost" size="icon" class="size-8" :aria-label="t('com.ruleActions', { rule: ruleName(rule) })"><MoreHorizontal /></Button>
                    </DropdownMenuTrigger>
                    <MenuContent align="end" class="w-40">
                      <MenuItem @select="openRule(rule)">{{ t('common.edit') }}</MenuItem>
                      <MenuItem danger @select="removing = rule">{{ t('common.delete') }}</MenuItem>
                    </MenuContent>
                  </DropdownMenuRoot>
                </td>
              </tr>
            </tbody>
          </DataTable>
          <template #footer>
            <Button v-if="canRoles" size="sm" variant="outline" class="bg-card" @click="openRole(current)"><Pencil />{{ t('com.roles.editRole') }}</Button>
            <Button v-if="canManage" size="sm" :disabled="rules.length === EVENTS_PER_ROLE" @click="openRule(null)"><Plus />{{ t('com.rule.new') }}</Button>
          </template>
        </Card>
        <Card :title="t('com.goal.title')" :desc="t('com.goal.desc')">
          <div class="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto]">
            <Field id="role-goal" :label="t('com.goal.template')">
              <NativeSelect
                id="role-goal"
                :model-value="goal?.goal_template_id ?? ''"
                :options="templateOptions"
                :disabled="!canManage || goalBusy"
                @update:model-value="(value) => setGoal(value, goal?.goal_mode ?? 'per_member')"
              />
            </Field>
            <Button v-if="canManage" variant="outline" class="self-end" @click="templatesOpen = true">{{ t('goals.templatesTitle') }}</Button>
          </div>
          <div v-if="goal" class="mt-4 grid gap-3">
            <fieldset class="grid gap-2 sm:grid-cols-2" :disabled="!canManage || goalBusy">
              <legend class="sr-only">{{ t('goals.modeLabel') }}</legend>
              <label v-for="mode in MODES" :key="mode" :class="cn('flex cursor-pointer items-start gap-3 rounded-md border p-3', goal.goal_mode === mode && 'border-foreground')">
                <input type="radio" name="goal-mode" :checked="goal.goal_mode === mode" class="mt-1 accent-[hsl(var(--foreground))]" @change="setGoal(goal.goal_template_id, mode)" />
                <span>
                  <span class="block text-[14px] font-medium">{{ t(`goals.mode.${mode}`) }}</span>
                  <span class="block text-[13px] text-muted-foreground">{{ mode === 'split' ? t('com.goal.splitHint') : t('com.goal.perMemberHint') }}</span>
                </span>
              </label>
            </fieldset>
            <p class="text-[14px]">{{ goalText }}</p>
          </div>
        </Card>
      </div>
    </template>
  </PageBody>
  <GoalTemplatesDialog v-model:open="templatesOpen" :year="Number(today.slice(0, 4))" @changed="loadGoals" />
  <RoleDialog v-model:open="roleDialog" :role="editingRole" :permissions="permissions" @saved="roleSaved" />
  <RuleDialog v-if="current" v-model:open="ruleDialog" :role="current" :roles="roles" :rules="rules" :rule="editingRule" @saved="loadRules" />
  <ConfirmDialog
    v-model:open="removeOpen"
    :title="t('com.deleteTitle', { rule: removing ? ruleName(removing).toLowerCase() : '' })"
    :desc="t('com.deleteDesc')"
    :action="t('common.delete')"
    :busy="busy"
    @confirm="removeRule"
  />
</template>
