<script setup lang="ts">
/** Equipe › Grupos: os grupos da Empresa com as pessoas e a situação de cada um. */
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { Plus, UsersRound } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Avatar from '@/components/ui/Avatar.vue'
import Button from '@/components/ui/Button.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Status from '@/components/ui/Status.vue'
import TableState from '@/components/ui/TableState.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import NewGroupDialog from '@/modules/groups/components/NewGroupDialog.vue'
import { freeMembers } from '@/modules/groups/rules'
import { groupService } from '@/modules/groups/service'
import type { Group } from '@/modules/groups/types'
import TeamTabs from '@/modules/team/components/TeamTabs.vue'
import { teamService } from '@/modules/team/service'
import type { Member } from '@/modules/team/types'
import { useSession } from '@/stores/session'

const session = useSession()
const router = useRouter()
const groups = ref<Group[]>([])
const allGroups = ref<Group[]>([])
const page = ref(1)
const total = ref(0)
const pages = ref(0)
const members = ref<Member[]>([])
const pendingCount = ref(0)
const loaded = ref(false)
const loadError = ref<string | null>(null)
const creating = ref(false)

const canManage = computed(() => session.can('groups.manage'))
const loose = computed(() => freeMembers(allGroups.value, members.value))

/** Carrega a página dos grupos, todos os grupos, as pessoas da equipe e quantos convites estão pendentes. */
async function load() {
  loadError.value = null
  try {
    const [groupPage, groupList, memberPage, invitationPage] = await Promise.all([
      groupService.list({ page: page.value }),
      groupService.options(),
      teamService.memberOptions(),
      teamService.invitations(),
    ])
    groups.value = groupPage.items
    total.value = groupPage.total
    pages.value = groupPage.pages
    allGroups.value = groupList.items
    members.value = memberPage.items.filter((member) => member.status !== 'removed')
    pendingCount.value = invitationPage.total
    loaded.value = true
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)
watch(() => session.me?.active_company_id, load)

/** Troca só a página dos grupos; as listas inteiras já estão carregadas. */
async function loadGroups() {
  try {
    const groupPage = await groupService.list({ page: page.value })
    groups.value = groupPage.items
    total.value = groupPage.total
    pages.value = groupPage.pages
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
watch(page, loadGroups)

/** Nome da pessoa pelo id do vínculo. */
const nameOf = (membershipId: string) => members.value.find((member) => member.id === membershipId)?.user.name ?? '?'
/** Foto da pessoa do vínculo, se ela tiver uma. */
const imageOf = (membershipId: string) => members.value.find((member) => member.id === membershipId)?.user.image_url ?? null

/** Volta para a primeira página, onde o grupo novo aparece, e avisa. */
function created(group: Group) {
  if (page.value === 1) void load()
  else page.value = 1
  toast.success(t('groups.created', { name: group.name }), { description: t('groups.peopleCount', { n: group.members.length }) })
}

/** Volta para a tela da equipe na aba escolhida. */
const openTab = (tab: 'members' | 'pending') => router.push(tab === 'pending' ? '/equipe?aba=convites' : '/equipe')
</script>

<template>
  <PageHeader :title="t('team.title')" :sub="t('groups.sub')">
    <template v-if="canManage" #actions>
      <Button :disabled="!loaded" @click="creating = true"><Plus />{{ t('groups.new') }}</Button>
    </template>
  </PageHeader>
  <PageBody>
    <div class="flex flex-wrap items-center gap-3">
      <TeamTabs current="groups" :counts="{ members: members.length, pending: pendingCount, groups: total }" @select="openTab" />
    </div>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <p v-else-if="!loaded" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <template v-else>
      <DataTable :min="640">
        <thead>
          <tr>
            <th :class="th">{{ t('groups.group') }}</th>
            <th :class="th">{{ t('groups.people') }}</th>
            <th :class="th">{{ t('team.status') }}</th>
            <th :class="[th, 'w-20']"><span class="sr-only">{{ t('groups.open') }}</span></th>
          </tr>
        </thead>
        <tbody>
          <TableState :cols="4" :empty="groups.length === 0" :icon="UsersRound" :title="t('groups.empty')" :desc="t('groups.emptyDesc')">
            <Button v-if="canManage" size="sm" variant="outline" @click="creating = true"><Plus />{{ t('groups.new') }}</Button>
          </TableState>
          <tr v-for="group in groups" :key="group.id" class="hover:bg-muted">
            <td :class="td">
              <RouterLink :to="`/equipe/grupos/${group.id}`" class="font-medium hover:underline focus-visible:underline focus-visible:outline-none">{{ group.name }}</RouterLink>
              <div v-if="group.description" class="max-w-[40ch] truncate text-[13px] text-muted-foreground">{{ group.description }}</div>
            </td>
            <td :class="td">
              <span v-if="group.members.length === 0" class="text-[13px] text-muted-foreground">{{ t('groups.nobody') }}</span>
              <div v-else class="flex items-center gap-2">
                <div class="flex -space-x-2">
                  <span v-for="member in group.members.slice(0, 3)" :key="member.membership_id" class="rounded-full ring-2 ring-card" :title="nameOf(member.membership_id)">
                    <Avatar :name="nameOf(member.membership_id)" :image-url="imageOf(member.membership_id)" :size="24" />
                  </span>
                </div>
                <span class="text-[13px] text-muted-foreground tnum">{{ group.members.length }}</span>
              </div>
            </td>
            <td :class="td">
              <Status :tone="group.status === 'active' ? 'ok' : 'neutral'">{{ t(group.status === 'active' ? 'groups.active' : 'groups.inactive') }}</Status>
            </td>
            <td :class="td">
              <Button variant="ghost" size="sm" @click="router.push(`/equipe/grupos/${group.id}`)">{{ t('groups.open') }}</Button>
            </td>
          </tr>
        </tbody>
      </DataTable>
      <Pagination v-model:page="page" :total="total" :pages="pages" />
      <p v-if="loose.length > 0 && allGroups.length > 0" class="text-[13px] text-muted-foreground">
        {{ t('groups.loose', { names: loose.map((member) => member.user.name).join(', ') }) }}
      </p>
    </template>
    <NewGroupDialog v-model:open="creating" :members="members" :groups="allGroups" @created="created" />
  </PageBody>
</template>
