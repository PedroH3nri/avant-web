<script setup lang="ts">
/** Página do grupo: as pessoas (a última não sai), renomear, excluir e o estado inativo. */
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { DropdownMenuRoot, DropdownMenuSeparator, DropdownMenuTrigger } from 'reka-ui'
import { ArrowLeft, Lock, MoreHorizontal, Plus, Users } from 'lucide-vue-next'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Avatar from '@/components/ui/Avatar.vue'
import Badge from '@/components/ui/Badge.vue'
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
import { ApiError } from '@/lib/api'
import { errorText, formatDate, pick, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { freeMembers, nameTaken } from '@/modules/groups/rules'
import { groupService } from '@/modules/groups/service'
import type { Group } from '@/modules/groups/types'
import { teamService } from '@/modules/team/service'
import type { Member } from '@/modules/team/types'
import { useSession } from '@/stores/session'

const route = useRoute()
const router = useRouter()
const session = useSession()
const groupId = String(route.params.id)

const group = ref<Group | null>(null)
const groups = ref<Group[]>([])
const members = ref<Member[]>([])
const loadError = ref<string | null>(null)
const notFound = ref(false)
const busy = ref(false)

const canManage = computed(() => session.can('groups.manage'))
const free = computed(() => freeMembers(groups.value, members.value))
const isLast = computed(() => group.value?.members.length === 1)
const rows = computed(() =>
  (group.value?.members ?? []).map((groupMember) => ({
    groupMember,
    member: members.value.find((member) => member.id === groupMember.membership_id) ?? null,
  })),
)

/** Carrega o grupo, os outros grupos (para saber quem está livre) e a equipe. */
async function load() {
  loadError.value = null
  try {
    const [detail, groupPage, memberPage] = await Promise.all([groupService.show(groupId), groupService.list(), teamService.members()])
    group.value = detail
    groups.value = groupPage.items
    members.value = memberPage.items.filter((member) => member.status !== 'removed')
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) notFound.value = true
    else loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)

/** Mostra o erro num aviso. */
const errorToast = (error: unknown) => toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))

/** Troca o grupo mostrado e a cópia dele na lista de grupos. */
function replace(updated: Group) {
  group.value = updated
  groups.value = groups.value.map((existing) => (existing.id === updated.id ? updated : existing))
}

/** Roda uma ação no grupo com os botões ocupados; devolve se deu certo. */
async function run(action: () => Promise<void>): Promise<boolean> {
  busy.value = true
  try {
    await action()
    return true
  } catch (error) {
    errorToast(error)
    return false
  } finally {
    busy.value = false
  }
}

// Adicionar pessoa
const adding = ref(false)
const pickedMember = ref('')
const freeOptions = computed(() => free.value.map((member) => ({ value: member.id, label: member.user.name })))

/** Abre o diálogo já com a primeira pessoa livre escolhida. */
function openAdd() {
  pickedMember.value = freeOptions.value[0]?.value ?? ''
  adding.value = true
}

/** Põe a pessoa escolhida no grupo; o grupo inativo volta a ficar ativo. */
async function addMember() {
  const current = group.value
  if (!current || !pickedMember.value) return
  const wasInactive = current.status === 'inactive'
  const name = members.value.find((member) => member.id === pickedMember.value)?.user.name ?? ''
  const done = await run(async () => replace(await groupService.addMembers(current.id, [pickedMember.value])))
  if (!done) return
  adding.value = false
  toast.success(t('groups.memberAdded', { name }), { description: wasInactive ? t('groups.reactivated') : undefined })
}

/** Tira a pessoa do grupo; a última pessoa só sai excluindo o grupo. */
async function removeMember(member: Member) {
  const current = group.value
  if (!current) return
  const done = await run(async () => replace(await groupService.removeMember(current.id, member.id)))
  if (done) toast(t('groups.memberRemoved', { name: member.user.name }))
}

// Renomear
const renaming = ref(false)
const newName = ref('')
const newDescription = ref('')
const renameTaken = computed(() => nameTaken(groups.value, newName.value, groupId))

/** Abre o diálogo com o nome e a descrição atuais. */
function openRename() {
  newName.value = group.value?.name ?? ''
  newDescription.value = group.value?.description ?? ''
  renaming.value = true
}

/** Salva o nome e a descrição novos. */
async function rename() {
  const current = group.value
  if (!current || !newName.value.trim() || renameTaken.value) return
  const body = { name: newName.value.trim(), description: newDescription.value.trim() || null }
  const done = await run(async () => replace(await groupService.update(current.id, body)))
  if (!done) return
  renaming.value = false
  toast.success(t('groups.renamed'))
}

// Excluir
const deleting = ref(false)

/** Exclui o grupo e volta para a lista. */
async function deleteGroup() {
  const current = group.value
  if (!current) return
  const done = await run(() => groupService.remove(current.id))
  if (!done) return
  deleting.value = false
  toast(t('groups.deleted', { name: current.name }))
  router.push('/equipe/grupos')
}

const deleteDesc = computed(() => {
  const count = group.value?.members.length ?? 0
  return count > 0 ? t('groups.deleteDesc', { n: count }) : t('groups.deleteDescEmpty')
})
</script>

<template>
  <PageHeader :title="group?.name ?? ''" :sub="group?.description ?? undefined">
    <template #back>
      <RouterLink to="/equipe/grupos" class="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground">
        <ArrowLeft class="size-4" />{{ t('groups.back') }}
      </RouterLink>
    </template>
    <template v-if="group && canManage" #actions>
      <Button v-if="group.status === 'active'" :disabled="free.length === 0" :title="free.length === 0 ? t('groups.noneFree') : undefined" @click="openAdd">
        <Plus />{{ t('groups.addPerson') }}
      </Button>
      <DropdownMenuRoot>
        <DropdownMenuTrigger as-child>
          <Button variant="outline" size="icon" :aria-label="t('groups.moreActions')"><MoreHorizontal /></Button>
        </DropdownMenuTrigger>
        <MenuContent align="end" class="w-48">
          <MenuItem @select="openRename">{{ t('groups.rename') }}</MenuItem>
          <DropdownMenuSeparator class="-mx-1 my-1 h-px bg-border" />
          <MenuItem danger @select="deleting = true">{{ t('groups.delete') }}</MenuItem>
        </MenuContent>
      </DropdownMenuRoot>
    </template>
  </PageHeader>
  <PageBody>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <Card v-else-if="notFound" :desc="t('groups.notFound')" />
    <p v-else-if="!group" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <template v-else>
      <section v-if="group.status === 'inactive'" class="flex flex-wrap items-center gap-4 rounded-lg border bg-card p-5">
        <span class="flex size-10 shrink-0 items-center justify-center rounded-full border text-muted-foreground"><Users class="size-4" /></span>
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-3">
            <span class="font-medium">{{ t('groups.inactiveTitle') }}</span><Status tone="neutral">{{ t('groups.nobody') }}</Status>
          </div>
          <p class="text-[14px] text-muted-foreground">{{ t('groups.inactiveDesc') }}</p>
        </div>
        <div v-if="canManage" class="flex gap-2">
          <Button size="sm" :disabled="free.length === 0" @click="openAdd">{{ t('groups.addPerson') }}</Button>
          <Button size="sm" variant="outline" class="text-bad hover:text-bad" @click="deleting = true">{{ t('groups.delete') }}</Button>
        </div>
      </section>

      <DataTable v-if="rows.length > 0" :min="600">
        <thead>
          <tr>
            <th :class="th">{{ t('team.person') }}</th>
            <th :class="th">{{ t('team.role') }}</th>
            <th :class="th">{{ t('groups.since') }}</th>
            <th :class="[th, 'w-12']"><span class="sr-only">{{ t('team.actions') }}</span></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.groupMember.membership_id" class="hover:bg-muted">
            <td :class="td">
              <div class="flex items-center gap-3">
                <Avatar :name="row.member?.user.name ?? '?'" />
                <div class="min-w-0">
                  <RouterLink v-if="row.member" :to="`/equipe/${row.member.id}`" class="font-medium hover:underline focus-visible:underline focus-visible:outline-none">{{
                    row.member.user.name
                  }}</RouterLink>
                  <div class="truncate text-[13px] text-muted-foreground">{{ row.member?.user.email }}</div>
                </div>
              </div>
            </td>
            <td :class="td">
              <Badge v-if="row.member?.is_owner">{{ t('team.owner') }}</Badge><template v-else>{{ pick(row.member?.role?.name) }}</template>
            </td>
            <td :class="[td, 'text-muted-foreground tnum']">{{ formatDate(row.groupMember.added_at, false) }}</td>
            <td :class="td">
              <span v-if="isLast" class="flex size-8 items-center justify-center text-muted-foreground" :title="t('groups.lastLock')">
                <Lock class="size-4" aria-hidden="true" /><span class="sr-only">{{ t('groups.lastLock') }}</span>
              </span>
              <DropdownMenuRoot v-else-if="canManage && row.member">
                <DropdownMenuTrigger as-child>
                  <Button variant="ghost" size="icon" class="size-8" :aria-label="t('team.actionsFor', { name: row.member.user.name })"><MoreHorizontal /></Button>
                </DropdownMenuTrigger>
                <MenuContent align="end" class="w-52">
                  <MenuItem @select="router.push(`/equipe/${row.member.id}`)">{{ t('groups.openPerson') }}</MenuItem>
                  <DropdownMenuSeparator class="-mx-1 my-1 h-px bg-border" />
                  <MenuItem danger :disabled="busy" @select="row.member && removeMember(row.member)">{{ t('groups.removePerson') }}</MenuItem>
                </MenuContent>
              </DropdownMenuRoot>
            </td>
          </tr>
        </tbody>
      </DataTable>
      <p v-if="isLast" class="-mt-3 text-[13px] text-muted-foreground">{{ t('groups.lastHint') }}</p>
    </template>

    <Dialog v-model:open="adding" :title="t('groups.addTo', { name: group?.name ?? '' })" :desc="t('groups.addDesc')">
      <Field id="group-add" :label="t('team.person')">
        <NativeSelect id="group-add" v-model="pickedMember" :options="freeOptions" />
      </Field>
      <template #footer>
        <Button variant="outline" @click="adding = false">{{ t('common.cancel') }}</Button>
        <Button :loading="busy" :disabled="!pickedMember" @click="addMember">{{ t('groups.add') }}</Button>
      </template>
    </Dialog>

    <Dialog v-model:open="renaming" :title="t('groups.rename')">
      <form id="rename-group" class="grid gap-4" novalidate @submit.prevent="rename">
        <Field id="rename-name" :label="t('groups.name')" :error="renameTaken && t('groups.nameTaken')">
          <Input id="rename-name" v-model="newName" maxlength="80" :invalid="renameTaken" />
        </Field>
        <Field id="rename-description" :label="t('groups.description')">
          <Input id="rename-description" v-model="newDescription" maxlength="280" />
        </Field>
      </form>
      <template #footer>
        <Button variant="outline" @click="renaming = false">{{ t('common.cancel') }}</Button>
        <Button form="rename-group" type="submit" :loading="busy" :disabled="!newName.trim() || renameTaken">{{ t('common.save') }}</Button>
      </template>
    </Dialog>

    <ConfirmDialog
      v-model:open="deleting"
      :title="t('groups.deleteTitle', { name: group?.name ?? '' })"
      :desc="deleteDesc"
      :action="t('groups.delete')"
      :busy="busy"
      @confirm="deleteGroup"
    />
  </PageBody>
</template>
