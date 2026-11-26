<script setup lang="ts">
/**
 * Painel interno: uma Empresa cliente com tudo o que é dela. Dono (a conta do cliente, que não
 * muda), imagem, vagas, convites, networks, pessoas da equipe e grupos; o cadastro fica no cliente.
 */
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft, Building2 } from 'lucide-vue-next'
import CompanyImageCard from '@/components/CompanyImageCard.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Status from '@/components/ui/Status.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatAgo, formatDate, pick, t } from '@/lib/i18n'
import { staleAccess } from '@/modules/internal/clients/rules'
import { td, th } from '@/lib/table'
import type { Group } from '@/modules/groups/types'
import ClientNetworksCard from '@/modules/internal/inventory/components/ClientNetworksCard.vue'
import { clientService } from '@/modules/internal/clients/service'
import type { ClientDetail } from '@/modules/internal/clients/types'
import { useSession } from '@/stores/session'

const route = useRoute()
const router = useRouter()
const session = useSession()
const company = ref<ClientDetail | null>(null)
const groups = ref<Group[] | null>(null)
const loadError = ref<string | null>(null)

const companyId = computed(() => String(route.params.id))
const canManage = computed(() => session.can('internal.clients.manage'))
const members = computed(() => (company.value?.members ?? []).filter((member) => member.status !== 'removed'))
const namesByMembership = computed(() => new Map(members.value.map((member) => [member.id, member.user.name])))
const pending = computed(() => (company.value?.invitations ?? []).filter((invitation) => invitation.status === 'pending' && invitation.role_id !== null))

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

/** Envia a imagem nova da Empresa e recarrega a página. */
async function saveImage(file: File) {
  await clientService.setImage(companyId.value, file)
  await load()
}

/** Tira a imagem da Empresa e recarrega a página. */
async function removeImage() {
  await clientService.removeImage(companyId.value)
  await load()
}

/** Os nomes das pessoas do grupo, na ordem em que entraram. */
function groupPeople(group: Group) {
  return group.members.map((member) => namesByMembership.value.get(member.membership_id) ?? t('int.none.dash'))
}
</script>

<template>
  <PageHeader :title="company?.company?.name ?? company?.name ?? t('int.company')" :sub="company?.company?.slug">
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
      <Card :title="t('int.owner')" :desc="t('int.ownerDesc')">
        <template v-if="company.owner">
          <div class="text-[14px] font-medium">{{ company.owner.name }}</div>
          <div class="text-[13px] text-muted-foreground">{{ company.owner.email }}</div>
        </template>
        <p v-else class="text-[14px] text-muted-foreground">{{ t('int.noOwner') }}</p>
      </Card>

      <CompanyImageCard :name="company.name" :image-url="company.image_url" staff :readonly="!canManage" :save="saveImage" :remove="removeImage" />

      <Card :class="pending.length ? '' : 'lg:col-span-2'" :title="t('int.seatsTitle')" :desc="t('int.companySeatsDesc')">
        <p class="text-[14px] tnum">{{ t('int.seatsLabel', { used: company.seats_used, limit: company.seat_limit }) }}</p>
      </Card>

      <Card v-if="pending.length" :title="t('int.invites')">
        <ul class="-my-3 divide-y">
          <li v-for="invitation in pending" :key="invitation.id" class="flex flex-wrap items-center justify-between gap-2 py-3 text-[14px]">
            <span class="font-medium">{{ invitation.email }}</span>
            <span class="text-[13px] text-muted-foreground">{{ t('int.expires', { when: formatAgo(invitation.expires_at) }) }}</span>
          </li>
        </ul>
      </Card>

      <ClientNetworksCard v-if="company.company" :client-id="company.company.id" :client-name="company.company.name" />

      <div class="grid gap-3 lg:col-span-2">
        <h2 class="text-[13px] font-medium text-muted-foreground">{{ t('int.members') }}</h2>
        <DataTable :min="640">
          <thead>
            <tr>
              <th :class="th">{{ t('int.person') }}</th>
              <th :class="th">{{ t('team.role') }}</th>
              <th :class="th">{{ t('team.status') }}</th>
              <th :class="th">{{ t('team.since') }}</th>
              <th :class="th">{{ t('int.column.last_access') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="member in members" :key="member.id">
              <td :class="td">
                <div class="font-medium">{{ member.user.name }}</div>
                <div class="text-[13px] text-muted-foreground">{{ member.user.email }}</div>
              </td>
              <td :class="td">
                <Badge v-if="member.is_owner">{{ t('team.owner') }}</Badge>
                <template v-else>{{ pick(member.role?.name) }}</template>
              </td>
              <td :class="td">
                <Status :tone="member.status === 'active' ? 'ok' : 'neutral'">{{ member.status === 'active' ? t('team.active') : t('team.suspended') }}</Status>
              </td>
              <td :class="[td, 'text-muted-foreground']">{{ formatDate(member.joined_at, false) }}</td>
              <td :class="[td, 'text-[13px]', staleAccess(member.last_access_at) ? 'text-ochre' : 'text-muted-foreground']">
                {{ member.last_access_at ? formatAgo(member.last_access_at) : t('int.neverAccessed') }}
              </td>
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
