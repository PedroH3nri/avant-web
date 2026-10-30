<script setup lang="ts">
/** Comissões da equipe: o mês de cada pessoa, os prazos dela, desconto, emissão e a data de início. */
import { computed, onMounted, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import { DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { MoreHorizontal } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Avatar from '@/components/ui/Avatar.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, lang, locale, t, type Key } from '@/lib/i18n'
import { formatMetric, toNumber } from '@/lib/metrics'
import { td, th } from '@/lib/table'
import AdjustmentDialog from '@/modules/internal/commissions/components/AdjustmentDialog.vue'
import CommissionKpis from '@/modules/internal/commissions/components/CommissionKpis.vue'
import { STATUS_TONE, toIssue } from '@/modules/internal/commissions/rules'
import { commissionService } from '@/modules/internal/commissions/service'
import type { PersonMonth, WindowMonth } from '@/modules/internal/commissions/types'
import { formatAmount, monthOptions } from '@/modules/internal/goals/rules'
import { useSession } from '@/stores/session'

const session = useSession()
const today = new Date().toISOString().slice(0, 10)
const months = computed(() => monthOptions(today, locale.value))
const month = ref(today.slice(0, 7))
const people = ref<PersonMonth[] | null>(null)
const loadError = ref<string | null>(null)
const canManage = computed(() => session.can('internal.commissions.manage'))
const detail = ref<PersonMonth | null>(null)
const detailWindows = ref<WindowMonth[] | null>(null)
const detailOpen = computed({ get: () => detail.value !== null, set: (value) => !value && (detail.value = null) })
const adjusting = ref<PersonMonth | null>(null)
const adjustOpen = computed({ get: () => adjusting.value !== null, set: (value) => !value && (adjusting.value = null) })
const issuing = ref(false)
const startsOn = ref('')
const savedStart = ref<string | null>(null)
const startBusy = ref(false)

/** Carrega a comissão de cada pessoa no mês e, para quem administra, a data de início. */
async function load() {
  loadError.value = null
  try {
    const [found, settings] = await Promise.all([commissionService.team(month.value), canManage.value ? commissionService.settings() : Promise.resolve(null)])
    people.value = found.items
    if (settings) {
      savedStart.value = settings.starts_on
      startsOn.value = settings.starts_on ?? ''
    }
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)
watch(month, load)

/** Valor em dólar no idioma da pessoa. */
const money = (value: string) => formatMetric(toNumber(value), 'currency', locale.value)
/** Valor descontado, com o sinal de menos; zero vira traço. */
const minus = (value: string) => ((toNumber(value) ?? 0) === 0 ? '–' : `− ${money(value)}`)
/** Soma um campo do mês de todas as pessoas, em texto com duas casas. */
const sum = (list: PersonMonth[], field: 'total' | 'adjustments') => list.reduce((total, person) => total + (toNumber(person.month[field]) ?? 0), 0).toFixed(2)
const ready = computed(() => toIssue(people.value ?? []))
const monthLabel = computed(() => months.value.find((item) => item.value === month.value)?.label ?? month.value)
const kpis = computed(() => {
  const list = people.value ?? []
  return [
    { label: t('com.team.kpiTotal'), value: money(sum(list, 'total')), hint: t('com.kpi.totalHint') },
    { label: t('com.team.kpiPeople'), value: String(list.length), hint: t('com.team.kpiPeopleHint') },
    { label: t('com.team.kpiToIssue'), value: String(ready.value.length), hint: t('com.team.kpiToIssueHint') },
    { label: t('com.team.kpiAdjustments'), value: money(sum(list, 'adjustments')), hint: t('com.team.kpiAdjustmentsHint') },
  ]
})

/** Abre os prazos da pessoa no mês. */
async function openDetail(person: PersonMonth) {
  detail.value = person
  detailWindows.value = null
  try {
    detailWindows.value = (await commissionService.person(person.user.id, month.value)).items
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}
/** Marca como emitido o mês das pessoas da lista. */
async function issue(list: PersonMonth[]) {
  issuing.value = true
  try {
    for (const person of list) await commissionService.issue(person.user.id, month.value)
    const [first] = list
    const title = list.length === 1 && first ? t('com.team.issuedOne', { name: first.user.name }) : t('com.team.issuedAll', { n: list.length })
    toast.success(title, { description: t('com.team.issuedDesc') })
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    issuing.value = false
    await load()
  }
}
/** Grava a data de início da comissão no Avant. */
async function saveStart() {
  startBusy.value = true
  try {
    const saved = await commissionService.setStart(startsOn.value)
    savedStart.value = saved.starts_on
    toast.success(t('com.start.saved'))
    await load()
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    startBusy.value = false
  }
}
</script>

<template>
  <PageHeader :title="t('com.team.title')" :sub="t('com.team.sub')">
    <template #actions>
      <NativeSelect v-model="month" :options="months" :aria-label="t('com.month')" class="h-9 w-[200px]" />
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <p v-else-if="!people" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <template v-else>
      <CommissionKpis :items="kpis" />
      <DataTable :min="960">
        <thead>
          <tr>
            <th :class="th">{{ t('com.col.person') }}</th>
            <th :class="th">{{ t('com.col.role') }}</th>
            <th :class="[th, 'text-right']">{{ t('com.col.commission') }}</th>
            <th :class="[th, 'text-right']">{{ t('com.col.deduction') }}</th>
            <th :class="[th, 'text-right']">{{ t('com.col.adjustments') }}</th>
            <th :class="[th, 'text-right']">{{ t('com.col.total') }}</th>
            <th :class="th">{{ t('com.col.status') }}</th>
            <th :class="[th, 'w-12']"><span class="sr-only">{{ t('team.actions') }}</span></th>
          </tr>
        </thead>
        <tbody>
          <TableState :cols="8" :empty="people.length === 0" :desc="t('com.team.empty')" />
          <tr v-for="person in people" :key="person.user.id" class="hover:bg-muted">
            <td :class="td">
              <button type="button" class="flex items-center gap-2.5 font-medium hover:underline focus-visible:underline focus-visible:outline-none" @click="openDetail(person)">
                <Avatar :name="person.user.name" :image-url="person.user.image_url" />{{ person.user.name }}
              </button>
            </td>
            <td :class="[td, 'whitespace-nowrap text-muted-foreground']">{{ person.role_name ?? '–' }}</td>
            <td :class="[td, 'text-right tnum']">{{ money(person.month.commission) }}</td>
            <td :class="[td, 'text-right tnum text-muted-foreground']">{{ minus(person.month.deduction) }}</td>
            <td :class="[td, 'text-right tnum text-muted-foreground']">{{ minus(person.month.adjustments) }}</td>
            <td :class="[td, 'text-right tnum font-medium']">{{ money(person.month.total) }}</td>
            <td :class="td"><Status :tone="STATUS_TONE[person.month.status]">{{ t(`com.status.${person.month.status}` as Key) }}</Status></td>
            <td :class="td">
              <DropdownMenuRoot>
                <DropdownMenuTrigger as-child>
                  <Button variant="ghost" size="icon" class="size-8" :aria-label="t('com.actions', { name: person.user.name })"><MoreHorizontal /></Button>
                </DropdownMenuTrigger>
                <MenuContent align="end" class="w-52">
                  <MenuItem @select="openDetail(person)">{{ t('com.action.view') }}</MenuItem>
                  <template v-if="canManage">
                    <MenuItem :disabled="person.month.status !== 'validated'" @select="adjusting = person">{{ t('com.action.adjust') }}</MenuItem>
                    <MenuItem :disabled="person.month.status !== 'validated'" @select="issue([person])">{{ t('com.action.issue') }}</MenuItem>
                  </template>
                </MenuContent>
              </DropdownMenuRoot>
            </td>
          </tr>
        </tbody>
      </DataTable>
      <div v-if="canManage && ready.length > 0" class="flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-card px-4 py-3 text-[14px]">
        <span class="text-muted-foreground">{{ t('com.team.toIssue', { n: ready.length }) }}</span>
        <Button variant="outline" :loading="issuing" @click="issue(ready)">{{ t('com.team.issueAll') }}</Button>
      </div>
      <Card v-if="canManage" :title="t('com.start.title')" :desc="t('com.start.desc')" :footer-note="savedStart ? undefined : t('com.start.missing')">
        <Field id="commission-start" :label="t('com.start.label')">
          <Input id="commission-start" v-model="startsOn" type="date" class="max-w-[200px] tnum" />
        </Field>
        <template #footer>
          <Button size="sm" :disabled="!startsOn || startsOn === savedStart" :loading="startBusy" @click="saveStart">{{ t('com.start.save') }}</Button>
        </template>
      </Card>
    </template>
  </PageBody>
  <Dialog
    v-model:open="detailOpen"
    class="max-w-[640px]"
    :title="t('com.person.title', { name: detail?.user.name ?? '', month: monthLabel })"
    :desc="detail ? `${detail.role_name ?? '–'} · ${t(`com.status.${detail.month.status}` as Key).toLowerCase()}` : undefined"
  >
    <p v-if="detailWindows === null" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <p v-else-if="detailWindows.length === 0" class="text-[14px] text-muted-foreground">{{ t('com.person.noWindows') }}</p>
    <div v-else class="grid gap-3">
      <div v-for="entry in detailWindows" :key="entry.id" class="rounded-md border p-3 text-[14px]">
        <div class="flex items-center justify-between gap-3">
          <span class="font-medium">{{ entry.target_name }}</span><span class="font-medium tnum">{{ money(entry.commission) }}</span>
        </div>
        <div class="mt-1 text-[13px] text-muted-foreground">{{ t(`com.event.${entry.event}` as Key) }}{{ entry.percentage ? ` · ${formatAmount(entry.percentage, lang)}%` : '' }}</div>
        <div class="mt-2 text-[12px] text-muted-foreground tnum">{{ t('com.person.line', { base: money(entry.base), commission: money(entry.commission), deduction: minus(entry.deduction) }) }}</div>
      </div>
    </div>
  </Dialog>
  <AdjustmentDialog v-model:open="adjustOpen" :person="adjusting" :month="month" @saved="load" />
</template>
