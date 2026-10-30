<script setup lang="ts">
/** Metas da equipe Groone: a minha meta, a da Groone, a de cada pessoa e a meta de cada papel. */
import { computed, onMounted, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import { Target } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, locale, pick, t } from '@/lib/i18n'
import { formatMetric, toNumber } from '@/lib/metrics'
import { td, th } from '@/lib/table'
import GoalBar from '@/modules/internal/goals/components/GoalBar.vue'
import GoalTemplatesDialog from '@/modules/internal/goals/components/GoalTemplatesDialog.vue'
import { goalTone, monthOptions, roleTemplates } from '@/modules/internal/goals/rules'
import { goalService } from '@/modules/internal/goals/service'
import type { GoalMode, GoalTemplate, PersonGoal, RoleGoal, TeamGoals } from '@/modules/internal/goals/types'
import { teamService } from '@/modules/team/service'
import type { RoleOption } from '@/modules/team/types'
import { useSession } from '@/stores/session'

const session = useSession()
const today = new Date().toISOString().slice(0, 10)
const months = computed(() => monthOptions(today, locale.value))
const month = ref(today.slice(0, 7))
const mine = ref<PersonGoal | null>(null)
const team = ref<TeamGoals | null>(null)
const templates = ref<GoalTemplate[]>([])
const roleGoals = ref<RoleGoal[]>([])
const roles = ref<RoleOption[]>([])
const loadError = ref<string | null>(null)
const templatesOpen = ref(false)
const canView = computed(() => session.can('internal.commissions.view'))
const canManage = computed(() => session.can('internal.commissions.manage'))
const modes = computed(() => (['per_member', 'split'] as GoalMode[]).map((value) => ({ value, label: t(`goals.mode.${value}`) })))
const templateOptions = computed(() => [{ value: '', label: t('goals.noGoalOption') }, ...templates.value.map((item) => ({ value: item.id, label: item.name.includes(String(item.year)) ? item.name : `${item.name} (${item.year})` }))])

/** Carrega a meta do mês e, para quem pode, a da equipe, os modelos e a meta dos papéis. */
async function load() {
  loadError.value = null
  try {
    const [own, everyone] = await Promise.all([goalService.mine(month.value), canView.value ? goalService.team(month.value) : Promise.resolve(null)])
    mine.value = own
    team.value = everyone
    if (canView.value || canManage.value) {
      const [templateList, goalList, roleList] = await Promise.all([goalService.templates(), goalService.roleGoals(), teamService.roleOptions()])
      templates.value = roleTemplates(templateList.items)
      roleGoals.value = goalList.items
      roles.value = roleList.items.filter((role) => !role.is_system)
    }
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)
watch(month, load)

/** A meta de um papel, se houver. */
const goalOf = (role: RoleOption) => roleGoals.value.find((goal) => goal.role_id === role.id)
/** Troca o modelo ou o modo da meta do papel. */
async function setGoal(role: RoleOption, templateId: string, mode: GoalMode) {
  try {
    await goalService.setRoleGoal(role.id, templateId || null, mode)
    roleGoals.value = (await goalService.roleGoals()).items
    toast.success(t('goals.roleSaved', { role: pick(role.name) }))
    void load()
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}
/** Valor em dólar no idioma da pessoa. */
const money = (value: string | null) => formatMetric(toNumber(value), 'currency', locale.value)
/** A fração da meta como porcentagem. */
const percent = (person: PersonGoal) =>
  person.progress.share === null ? '–' : new Intl.NumberFormat(locale.value, { style: 'percent', maximumFractionDigits: 1 }).format(toNumber(person.progress.share) ?? 0)
</script>

<template>
  <PageHeader :title="t('goals.title')" :sub="t('goals.sub')">
    <template #actions>
      <NativeSelect v-model="month" :options="months" class="w-[200px]" :aria-label="t('goals.month')" />
      <Button v-if="canManage" variant="outline" @click="templatesOpen = true">{{ t('goals.templatesTitle') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <div class="grid gap-4 lg:grid-cols-2">
      <Card :title="t('goals.mine')" :desc="mine?.role_name ? t('goals.mineDesc', { role: mine.role_name }) : t('goals.mineNoRole')">
        <GoalBar v-if="mine" :progress="mine.progress" :month="month" :today="today" :label="t('goals.mine')" />
      </Card>
      <Card v-if="team" :title="t('goals.company')" :desc="t('goals.companyDesc')">
        <GoalBar :progress="team.company" :month="month" :today="today" :label="t('goals.company')" />
      </Card>
    </div>

    <section v-if="team" class="grid gap-3">
      <h2 class="text-[16px] font-semibold tracking-tight">{{ t('goals.people') }}</h2>
      <DataTable :min="720">
        <thead>
          <tr>
            <th :class="th">{{ t('goals.person') }}</th>
            <th :class="th">{{ t('goals.role') }}</th>
            <th :class="th">{{ t('goals.progress') }}</th>
            <th :class="[th, 'text-right']">{{ t('goals.projectedShort') }}</th>
          </tr>
        </thead>
        <tbody>
          <TableState :cols="4" :empty="team.people.length === 0" :icon="Target" :desc="t('goals.noPeople')" />
          <tr v-for="person in team.people" :key="person.user_id" class="hover:bg-muted">
            <td :class="[td, 'font-medium whitespace-nowrap']">{{ person.name }}</td>
            <td :class="[td, 'whitespace-nowrap text-muted-foreground']">{{ person.role_name ?? '–' }}</td>
            <td :class="[td, 'min-w-[240px]']">
              <div class="flex items-center justify-between text-[13px] tnum">
                <span>{{ person.progress.goal === null ? money(person.progress.done) : t('goals.doneOf', { done: money(person.progress.done), goal: money(person.progress.goal) }) }}</span>
                <span :class="goalTone(person.progress) === 'ochre' ? 'text-ochre' : goalTone(person.progress) === 'ok' ? 'text-ok' : 'text-muted-foreground'">{{ percent(person) }}</span>
              </div>
              <div v-if="person.progress.goal !== null" class="mt-1.5 h-1.5 rounded-full bg-secondary">
                <div class="h-1.5 rounded-full" :class="goalTone(person.progress) === 'ochre' ? 'bg-ochre' : 'bg-ok'" :style="{ width: `${Math.min(toNumber(person.progress.share) ?? 0, 1) * 100}%` }" />
              </div>
            </td>
            <td :class="[td, 'text-right tnum whitespace-nowrap']">{{ money(person.progress.projected) }}</td>
          </tr>
        </tbody>
      </DataTable>
    </section>

    <section v-if="canManage" class="grid gap-3">
      <div>
        <h2 class="text-[16px] font-semibold tracking-tight">{{ t('goals.roleGoals') }}</h2>
        <p class="mt-1 text-[14px] text-muted-foreground">{{ t('goals.roleGoalsDesc') }}</p>
      </div>
      <DataTable :min="640">
        <thead>
          <tr>
            <th :class="th">{{ t('goals.role') }}</th>
            <th :class="th">{{ t('goals.template') }}</th>
            <th :class="th">{{ t('goals.modeLabel') }}</th>
          </tr>
        </thead>
        <tbody>
          <TableState :cols="3" :empty="roles.length === 0" :desc="t('goals.noRoles')" />
          <tr v-for="role in roles" :key="role.id">
            <td :class="[td, 'font-medium whitespace-nowrap']">{{ pick(role.name) }}</td>
            <td :class="td">
              <NativeSelect
                :model-value="goalOf(role)?.goal_template_id ?? ''"
                :options="templateOptions"
                :aria-label="t('goals.templateOf', { role: pick(role.name) })"
                @update:model-value="(value) => setGoal(role, value, goalOf(role)?.goal_mode ?? 'per_member')"
              />
            </td>
            <td :class="td">
              <NativeSelect
                v-if="goalOf(role)"
                :model-value="goalOf(role)?.goal_mode ?? 'per_member'"
                :options="modes"
                :aria-label="t('goals.modeOf', { role: pick(role.name) })"
                @update:model-value="(value) => setGoal(role, goalOf(role)?.goal_template_id ?? '', value as GoalMode)"
              />
              <span v-else class="text-[13px] text-muted-foreground">–</span>
            </td>
          </tr>
        </tbody>
      </DataTable>
    </section>
  </PageBody>
  <GoalTemplatesDialog v-model:open="templatesOpen" :year="Number(month.slice(0, 4))" @changed="load" />
</template>
