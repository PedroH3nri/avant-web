<script setup lang="ts">
/** Tarefas de suporte da equipe Groone: as minhas ou todas, com filtros, e a janela de tarefa nova. */
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { Plus, Search } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { clientService } from '@/modules/internal/clients/service'
import { staffService } from '@/modules/internal/staff/service'
import NewTaskDialog from '@/modules/internal/tasks/components/NewTaskDialog.vue'
import {
  PRIORITIES,
  STATUSES,
  STATUS_TONE,
  priorityLabel,
  statusLabel,
  statusesFor,
  taskPlace,
  type StatusFilter,
} from '@/modules/internal/tasks/rules'
import { taskService } from '@/modules/internal/tasks/service'
import type { SupportTask, SupportTaskDetail, TaskPriority, TaskScope } from '@/modules/internal/tasks/types'
import { useSession } from '@/stores/session'

const ANY = 'any'
const session = useSession()
const router = useRouter()
const canSeeAll = computed(() => session.can('internal.tasks.all'))

const tasks = ref<SupportTask[] | null>(null)
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const scope = ref<TaskScope>('mine')
const status = ref<StatusFilter>('active')
const priority = ref<TaskPriority | typeof ANY>(ANY)
const query = ref('')
const creating = ref(false)
const clients = ref<{ value: string; label: string }[]>([])
const staff = ref<{ value: string; label: string }[]>([])
const loadError = ref<string | null>(null)
let ticket = 0
let typing: ReturnType<typeof setTimeout> | undefined

const statusOptions = computed(() => [
  { value: 'active', label: t('task.activeStatuses') },
  ...STATUSES.map((value) => ({ value, label: statusLabel(value) })),
  { value: ANY, label: t('task.allStatuses') },
])
const priorityOptions = computed(() => [{ value: ANY, label: t('task.allPriorities') }, ...PRIORITIES.map((value) => ({ value, label: priorityLabel(value) }))])
const scopes = computed(() => [
  { value: 'mine' as const, label: t('task.scope.mine') },
  { value: 'all' as const, label: t('task.scope.all') },
])

/** Carrega a página com os filtros; uma resposta de filtros antigos é ignorada. */
async function load() {
  const mine = ++ticket
  loadError.value = null
  try {
    const found = await taskService.list({
      page: page.value,
      scope: scope.value,
      status: statusesFor(status.value),
      priority: priority.value === ANY ? undefined : priority.value,
      q: query.value.trim() || undefined,
    })
    if (mine !== ticket) return
    tasks.value = found.items
    total.value = found.total
    pages.value = found.pages
  } catch (error) {
    if (mine === ticket) loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** Carrega clientes e equipe para a janela de tarefa nova; sem acesso, o seletor fica vazio. */
async function loadOptions() {
  const [clientList, staffList] = await Promise.allSettled([clientService.options(), staffService.options()])
  if (clientList.status === 'fulfilled') clients.value = clientList.value.items.map((item) => ({ value: item.id, label: item.name }))
  if (staffList.status === 'fulfilled') staff.value = staffList.value.items.map((member) => ({ value: member.user.id, label: member.user.name }))
}

/** Volta para a primeira página e recarrega. */
function reload() {
  if (page.value === 1) void load()
  else page.value = 1
}

onMounted(() => {
  void load()
  void loadOptions()
})
watch(page, load)
watch([scope, status, priority], reload)
watch(query, () => {
  clearTimeout(typing)
  typing = setTimeout(reload, 300)
})

/** Abre a tarefa recém-criada. */
const openCreated = (task: SupportTaskDetail) => router.push(`/interno/tarefas/${task.id}`)
</script>

<template>
  <PageHeader :title="t('task.title')" :sub="t('task.sub')">
    <template #actions>
      <Button @click="creating = true"><Plus class="size-4" />{{ t('task.new') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <div class="flex flex-wrap items-center gap-3">
      <div v-if="canSeeAll" class="flex rounded-md border bg-card p-0.5" role="tablist" :aria-label="t('task.scope.label')">
        <button
          v-for="option in scopes"
          :key="option.value"
          role="tab"
          :aria-selected="scope === option.value"
          :class="['h-8 rounded-[4px] px-3 text-[13px] font-medium', scope === option.value ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground']"
          @click="scope = option.value"
        >
          {{ option.label }}
        </button>
      </div>
      <div class="relative w-full sm:w-[260px]">
        <Search class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input v-model="query" :aria-label="t('task.search')" class="h-9 pl-9" :placeholder="t('task.searchPlaceholder')" />
      </div>
      <NativeSelect v-model="status" :options="statusOptions" :aria-label="t('task.status')" class="w-full sm:w-[230px] [&_select]:h-9" />
      <NativeSelect v-model="priority" :options="priorityOptions" :aria-label="t('task.priority')" class="w-full sm:w-[170px] [&_select]:h-9" />
    </div>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <p v-else-if="!tasks" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <template v-else>
      <DataTable :min="860">
        <thead>
          <tr>
            <th :class="th">{{ t('task.col.task') }}</th>
            <th :class="th">{{ t('task.client') }}</th>
            <th :class="th">{{ t('task.priority') }}</th>
            <th :class="th">{{ t('task.status') }}</th>
            <th :class="th">{{ t('task.assignee') }}</th>
            <th :class="th">{{ t('task.col.updated') }}</th>
          </tr>
        </thead>
        <tbody>
          <TableState :cols="6" :empty="tasks.length === 0" :desc="t('task.empty')" />
          <tr v-for="task in tasks" :key="task.id" class="hover:bg-muted">
            <td :class="td">
              <RouterLink :to="`/interno/tarefas/${task.id}`" class="font-medium hover:underline focus-visible:underline focus-visible:outline-none">{{ task.subject }}</RouterLink>
            </td>
            <td :class="[td, 'text-muted-foreground']">
              {{ task.client?.name ?? '–' }}
              <span v-if="taskPlace(task)" class="block break-all font-mono text-[12px]">{{ taskPlace(task)?.domain }}</span>
            </td>
            <td :class="td">
              <span v-if="task.priority === 'high'" class="font-medium text-bad">{{ priorityLabel(task.priority) }}</span>
              <span v-else class="text-muted-foreground">{{ priorityLabel(task.priority) }}</span>
            </td>
            <td :class="td"><Status :tone="STATUS_TONE[task.status]">{{ statusLabel(task.status) }}</Status></td>
            <td :class="[td, 'text-muted-foreground']">{{ task.assignee?.name ?? t('task.noAssignee') }}</td>
            <td :class="[td, 'whitespace-nowrap tnum text-[13px] text-muted-foreground']">{{ formatDate(task.updated_at) }}</td>
          </tr>
        </tbody>
      </DataTable>
      <Pagination v-model:page="page" :total="total" :pages="pages" />
    </template>
  </PageBody>
  <NewTaskDialog v-model:open="creating" :clients="clients" :staff="staff" @created="openCreated" />
</template>
