<script setup lang="ts">
/** Painel interno: uma Empresa cliente, com as pessoas da equipe e os grupos que ela cadastrou. */
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft, Building2 } from 'lucide-vue-next'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Status from '@/components/ui/Status.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, pick, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import type { Group } from '@/modules/groups/types'
import { clientService } from '@/modules/internal/clients/service'
import type { ClientDetail } from '@/modules/internal/clients/types'

const route = useRoute()
const router = useRouter()
const company = ref<ClientDetail | null>(null)
const groups = ref<Group[] | null>(null)
const loadError = ref<string | null>(null)

const companyId = computed(() => String(route.params.id))
const members = computed(() => (company.value?.members ?? []).filter((member) => member.status !== 'removed'))
const namesByMembership = computed(() => new Map(members.value.map((member) => [member.id, member.user.name])))

/** Carrega a Empresa e os grupos dela juntos. */
async function load() {
  loadError.value = null
  try {
    const [detail, found] = await Promise.all([clientService.show(companyId.value), clientService.groups(companyId.value)])
    company.value = detail
    groups.value = found.items
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
watch(companyId, load, { immediate: true })

/** Os nomes das pessoas do grupo, na ordem em que entraram. */
function groupPeople(group: Group) {
  return group.members.map((member) => namesByMembership.value.get(member.membership_id) ?? t('int.none.dash'))
}
</script>

<template>
  <PageHeader :title="company?.name ?? t('int.company')" :sub="company ? company.slug : undefined">
    <template #back>
      <RouterLink to="/interno/empresas" class="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground">
        <ArrowLeft class="size-4" />{{ t('int.companies') }}
      </RouterLink>
    </template>
    <template v-if="company" #actions>
      <Button variant="outline" @click="router.push(`/interno/clientes/${company.id}`)"><Building2 />{{ t('int.openClient') }}</Button>
    </template>
  </PageHeader>
  <PageBody class="lg:grid-cols-2">
    <LoadError v-if="loadError" class="lg:col-span-2" :message="loadError" @retry="load" />
    <template v-if="company && groups">
      <div class="grid gap-3 lg:col-span-2">
        <h2 class="text-[13px] font-medium text-muted-foreground">{{ t('int.members') }}</h2>
        <DataTable :min="640">
          <thead>
            <tr>
              <th :class="th">{{ t('int.person') }}</th>
              <th :class="th">{{ t('team.role') }}</th>
              <th :class="th">{{ t('team.status') }}</th>
              <th :class="th">{{ t('team.since') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="member in members" :key="member.id">
              <td :class="td">
                <div class="font-medium">{{ member.user.name }}</div>
                <div class="text-[13px] text-muted-foreground">{{ member.user.email }}</div>
              </td>
              <td :class="td">
                <Badge v-if="member.is_owner">{{ t('int.owner') }}</Badge>
                <template v-else>{{ pick(member.role?.name) }}</template>
              </td>
              <td :class="td">
                <Status :tone="member.status === 'active' ? 'ok' : 'neutral'">{{ member.status === 'active' ? t('team.active') : t('team.suspended') }}</Status>
              </td>
              <td :class="[td, 'text-muted-foreground']">{{ formatDate(member.joined_at, false) }}</td>
            </tr>
          </tbody>
        </DataTable>
      </div>

      <div class="grid gap-1 lg:col-span-2">
        <h2 class="text-[13px] font-medium text-muted-foreground">{{ t('int.companyGroups') }}</h2>
        <p class="text-[13px] text-muted-foreground">{{ t('int.companyGroupsDesc') }}</p>
      </div>
      <Card v-if="!groups.length" class="lg:col-span-2">
        <p class="text-[14px] text-muted-foreground">{{ t('int.companyGroupsNone') }}</p>
      </Card>
      <Card v-for="group in groups" :key="group.id" :title="group.name" :desc="group.description ?? undefined">
        <ul class="-my-2 divide-y text-[14px]">
          <li v-for="(person, position) in groupPeople(group)" :key="`${group.id}-${position}`" class="py-2">{{ person }}</li>
        </ul>
        <template #note>{{ t('int.groupPeople', { n: group.members.length }) }}</template>
        <template #footer>
          <Status :tone="group.status === 'active' ? 'ok' : 'neutral'">{{ group.status === 'active' ? t('groups.active') : t('groups.inactive') }}</Status>
        </template>
      </Card>
    </template>
  </PageBody>
</template>
