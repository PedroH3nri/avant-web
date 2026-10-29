<script setup lang="ts">
/** Painel interno: um cliente. Situação, convite de dono, cadastro, dados fiscais, vagas, dono, equipe e atividade. */
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { toast } from 'vue-sonner'
import { ArrowLeft, Lock, Mail } from 'lucide-vue-next'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import ClientProfileForm from '@/modules/internal/clients/components/ClientProfileForm.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import CompanyImageCard from '@/components/CompanyImageCard.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Pagination from '@/components/ui/Pagination.vue'
import Status from '@/components/ui/Status.vue'
import { ApiError } from '@/lib/api'
import { emptyProfile, profileBody, profileInput, profileOk, STAFF_STATUSES, STATUS_TONE } from '@/modules/internal/clients/rules'
import { taxTypeLabel } from '@/modules/company/fiscal'
import { auditText, errorText, formatAgo, formatDate, pick, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import type { Page } from '@/lib/types'
import type { CompanyStatus } from '@/modules/company/types'
import type { AuditEntry, ClientDetail, OwnerInvitation } from '@/modules/internal/clients/types'
import { useSession } from '@/stores/session'
import { clientService } from '@/modules/internal/clients/service'

const route = useRoute()
const session = useSession()
const id = computed(() => String(route.params.id))
const canManage = computed(() => session.can('internal.clients.manage'))
const canOwner = computed(() => session.can('internal.owner.change'))

const client = ref<ClientDetail | null>(null)
const loadError = ref<string | null>(null)
const seats = ref('')
const saving = ref(false)
const statusBusy = ref(false)
const nextStatus = ref<CompanyStatus | null>(null)
const statusOpen = computed({ get: () => nextStatus.value !== null, set: (value) => !value && (nextStatus.value = null) })
const inviteBusy = ref(false)
const ownerInvite = ref<OwnerInvitation | null>(null)
const editing = ref(false)
const profile = ref(emptyProfile())
const profileBusy = ref(false)
const referrers = ref<{ id: string; name: string }[]>([])
const ownerOpen = ref(false)
const ownerPick = ref('')
const ownerBusy = ref(false)
const audit = ref<AuditEntry[]>([])
const auditPage = ref(1)
const auditTotal = ref(0)
const auditPages = ref(0)

/** Mostra o erro num aviso. */
const fail = (error: unknown) => toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))

/** Envia a imagem nova do cliente e recarrega a página com a auditoria. */
async function saveImage(file: File) {
  await clientService.setImage(id.value, file)
  await reload()
}

/** Tira a imagem do cliente e recarrega a página com a auditoria. */
async function removeImage() {
  await clientService.removeImage(id.value)
  await reload()
}

/** Carrega o cliente e a auditoria. */
async function load() {
  loadError.value = null
  try {
    const [clientDetail, found] = await Promise.all([clientService.show(id.value), clientService.audit(id.value, { page: auditPage.value })])
    client.value = clientDetail
    seats.value = String(clientDetail.seat_limit)
    showAudit(found)
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(async () => {
  await load()
  try {
    const list = await clientService.options()
    referrers.value = list.items.map((item) => ({ id: item.id, name: item.name }))
  } catch {
    // sem a lista, a indicação aparece pelo id
  }
})

/** Depois de uma ação: o cliente de novo e a auditoria na página 1, onde a entrada nova aparece. */
async function reload() {
  if (auditPage.value === 1) return load()
  auditPage.value = 1
  const detail = await clientService.show(id.value)
  client.value = detail
  seats.value = String(detail.seat_limit)
}

/** Guarda a página da auditoria. */
function showAudit(found: Page<AuditEntry>) {
  audit.value = found.items
  auditTotal.value = found.total
  auditPages.value = found.pages
}

/** Carrega a página da auditoria escolhida. */
async function loadAudit() {
  try {
    showAudit(await clientService.audit(id.value, { page: auditPage.value }))
  } catch (error) {
    fail(error)
  }
}
watch(auditPage, loadAudit)

const seatsNum = computed(() => Number(seats.value))
const seatsLow = computed(() => !!client.value && seatsNum.value < client.value.seats_used)
const seatsOk = computed(() => Number.isInteger(seatsNum.value) && seatsNum.value >= 1 && seatsNum.value <= 10000 && !seatsLow.value)
const changed = computed(() => !!client.value && seatsNum.value !== client.value.seat_limit)

/** Salva o limite de vagas. */
async function save() {
  const current = client.value
  if (!current || !seatsOk.value) return
  saving.value = true
  try {
    const fresh = await clientService.update(current.id, { seat_limit: seatsNum.value })
    client.value = { ...current, ...fresh }
    toast.success(t('common.saved'))
    await reloadAudit()
  } catch (error) {
    fail(error)
  } finally {
    saving.value = false
  }
}

/** Recarrega a auditoria do começo, onde a ação nova aparece. */
async function reloadAudit() {
  if (auditPage.value !== 1) {
    auditPage.value = 1
    return
  }
  const found = await clientService.audit(id.value, { page: 1 }).catch(() => null)
  if (found) showAudit(found)
}

/** Troca a situação do cliente pela escolhida no diálogo; as networks acompanham. */
async function setStatus() {
  const current = client.value
  const status = nextStatus.value
  if (!current || !status) return
  statusBusy.value = true
  try {
    await clientService.setStatus(current.id, status)
    nextStatus.value = null
    toast.success(t('int.situationChanged'))
    await reload()
  } catch (error) {
    fail(error)
  } finally {
    statusBusy.value = false
  }
}

/** Envia ao contato do cadastro o convite de dono, ou um link novo se já houver. */
async function sendInvite() {
  const current = client.value
  if (!current) return
  inviteBusy.value = true
  try {
    ownerInvite.value = await clientService.inviteOwner(current.id)
    toast.success(t('int.inviteSent', { email: ownerInvite.value.email }))
    await reload()
  } catch (error) {
    fail(error)
  } finally {
    inviteBusy.value = false
  }
}

/** Abre a edição do contato e da indicação, com a lista de clientes que podem ter indicado. */
async function openEdit() {
  const current = client.value
  if (!current) return
  profile.value = current.profile ? profileInput(current.profile) : emptyProfile()
  editing.value = true
  try {
    const list = await clientService.options()
    referrers.value = list.items.filter((item) => item.id !== current.id).map((item) => ({ id: item.id, name: item.name }))
  } catch (error) {
    fail(error)
  }
}

/** Salva o contato e a indicação. */
async function saveProfile() {
  const current = client.value
  if (!current || !profileOk(profile.value)) return
  profileBusy.value = true
  try {
    const fresh = await clientService.update(current.id, { profile: profileBody(profile.value) })
    client.value = { ...current, ...fresh }
    editing.value = false
    toast.success(t('common.saved'))
    await reloadAudit()
  } catch (error) {
    fail(error)
  } finally {
    profileBusy.value = false
  }
}

const statusOptions = computed(() => STAFF_STATUSES.filter((status) => status !== client.value?.status))
const pendingOwnerInvite = computed(() => ownerInvite.value ?? (client.value?.invitations ?? []).find((invitation) => invitation.status === 'pending' && invitation.role_id === null) ?? null)
const referrerName = computed(() => {
  const referrerId = client.value?.profile?.referred_by_company_id
  return referrerId ? (referrers.value.find((item) => item.id === referrerId)?.name ?? referrerId) : null
})
/** Mostra o valor ou o texto de não informado. */
const shown = (value: string | null | undefined) => value || t('int.none.dash')

const candidates = computed(() => (client.value?.members ?? []).filter((member) => member.status === 'active' && !member.is_owner))
const ownerOptions = computed(() => candidates.value.map((candidate) => ({ value: candidate.id, label: `${candidate.user.name} (${candidate.user.email})` })))

/** Abre o diálogo para trocar o dono. */
function openOwner() {
  ownerPick.value = candidates.value[0]?.id ?? ''
  ownerOpen.value = true
}

/** Passa a posse da Empresa para o membro escolhido. */
async function changeOwner() {
  const current = client.value
  if (!current || !ownerPick.value) return
  ownerBusy.value = true
  try {
    await clientService.changeOwner(current.id, ownerPick.value)
    ownerOpen.value = false
    toast.success(t('int.ownerChanged'))
    await reload()
  } catch (error) {
    fail(error)
  } finally {
    ownerBusy.value = false
  }
}

const members = computed(() => (client.value?.members ?? []).filter((member) => member.status !== 'removed'))
const pending = computed(() => (client.value?.invitations ?? []).filter((invitation) => invitation.status === 'pending' && invitation.role_id !== null))
const names = computed(() => new Map((client.value?.members ?? []).map((member) => [member.user.id, member.user.name])))
/** Quem fez a ação: o nome da pessoa ou o tipo de autor. */
function who(auditEntry: AuditEntry) {
  const name = auditEntry.actor_user_id ? names.value.get(auditEntry.actor_user_id) : undefined
  return name ?? t(`int.by.${auditEntry.actor_kind as 'member' | 'staff' | 'api_key' | 'system'}`)
}
</script>

<template>
  <PageHeader :title="client?.name ?? t('int.client')" :sub="client ? client.slug : undefined">
    <template #back>
      <RouterLink to="/interno" class="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground">
        <ArrowLeft class="size-4" />{{ t('int.back') }}
      </RouterLink>
    </template>
    <template v-if="client && canManage && client.status === 'pending' && client.profile" #actions>
      <Button :loading="inviteBusy" @click="sendInvite"><Mail />{{ pendingOwnerInvite ? t('int.resendInvite') : t('int.sendInvite') }}</Button>
    </template>
  </PageHeader>
  <PageBody class="[&>*]:max-w-[960px]">
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-if="client">
      <Card :title="t('int.situation')" :desc="t('int.situationDesc')">
        <Status :tone="STATUS_TONE[client.status]">{{ t(`int.status.${client.status}`) }}</Status>
        <template v-if="client.status === 'pending'" #note>{{ t('int.situationPendingNote') }}</template>
        <template v-if="canManage" #footer>
          <Button
            v-for="status in statusOptions"
            :key="status"
            :variant="status === 'active' ? 'outline' : 'destructive'"
            :disabled="status === 'active' && !client.owner"
            @click="nextStatus = status"
            >{{ t(`int.status.${status}`) }}</Button
          >
        </template>
      </Card>

      <Card v-if="client.status === 'pending'" :title="t('int.ownerInvite')" :desc="t('int.ownerInviteDesc')">
        <p class="text-[14px]">
          <template v-if="pendingOwnerInvite">{{ t('int.ownerInviteSent', { email: pendingOwnerInvite.email, when: t('int.expires', { when: formatAgo(pendingOwnerInvite.expires_at) }) }) }}</template>
          <span v-else class="text-muted-foreground">{{ t('int.ownerInviteNone') }}</span>
        </p>
      </Card>

      <Card :title="t('int.profileTitle')" :desc="t('int.profileDesc')">
        <form v-if="editing" id="client-profile" @submit.prevent="saveProfile">
          <ClientProfileForm v-model="profile" id-prefix="cp" :referrers="referrers" />
        </form>
        <dl v-else-if="client.profile" class="-my-2 grid divide-y text-[14px]">
          <div class="grid gap-1 py-2 sm:grid-cols-[180px_1fr]">
            <dt class="text-muted-foreground">{{ t('int.contact') }}</dt>
            <dd>{{ client.profile.first_name }} {{ client.profile.last_name }} · {{ client.profile.email }}</dd>
          </div>
          <div class="grid gap-1 py-2 sm:grid-cols-[180px_1fr]">
            <dt class="text-muted-foreground">{{ t('int.phone') }}</dt>
            <dd class="tnum">{{ client.profile.phone ? `${client.profile.phone_ddi ?? ''} ${client.profile.phone}` : t('int.none.dash') }}</dd>
          </div>
          <div class="grid gap-1 py-2 sm:grid-cols-[180px_1fr]">
            <dt class="text-muted-foreground">{{ t('int.referredBy') }}</dt>
            <dd>{{ referrerName ? `${referrerName} · ${client.profile.referral_percentage}%` : t('int.nobody') }}</dd>
          </div>
          <div class="grid gap-1 py-2 sm:grid-cols-[180px_1fr]">
            <dt class="text-muted-foreground">{{ t('int.notes') }}</dt>
            <dd>{{ shown(client.profile.notes) }}</dd>
          </div>
        </dl>
        <p v-else class="text-[14px] text-muted-foreground">{{ t('int.noProfile') }}</p>
        <template v-if="canManage" #footer>
          <template v-if="editing">
            <Button variant="outline" @click="editing = false">{{ t('common.cancel') }}</Button>
            <Button type="submit" form="client-profile" :loading="profileBusy" :disabled="!profileOk(profile)">{{ t('common.save') }}</Button>
          </template>
          <Button v-else variant="outline" @click="openEdit">{{ t('int.edit') }}</Button>
        </template>
      </Card>

      <CompanyImageCard :name="client.name" :image-url="client.image_url" staff :readonly="!canManage" :save="saveImage" :remove="removeImage" />

      <Card :title="t('int.fiscalTitle')" :desc="t('int.fiscalDesc')">
        <dl v-if="client.profile?.fiscal" class="-my-2 grid divide-y text-[14px]">
          <div class="grid gap-1 py-2 sm:grid-cols-[180px_1fr]">
            <dt class="text-muted-foreground">{{ t('fiscal.taxType') }}</dt>
            <dd>{{ taxTypeLabel(client.profile.fiscal.tax_type) }} · <span class="tnum">{{ client.profile.fiscal.tax_id }}</span></dd>
          </div>
          <div class="grid gap-1 py-2 sm:grid-cols-[180px_1fr]">
            <dt class="text-muted-foreground">{{ t('fiscal.legalName') }}</dt>
            <dd>{{ client.profile.fiscal.legal_name }}</dd>
          </div>
          <div class="grid gap-1 py-2 sm:grid-cols-[180px_1fr]">
            <dt class="text-muted-foreground">{{ t('fiscal.billingAddress') }}</dt>
            <dd>{{ client.profile.fiscal.billing_address }} · <span class="tnum">{{ client.profile.fiscal.billing_phone_ddi }} {{ client.profile.fiscal.billing_phone }}</span></dd>
          </div>
          <div class="grid gap-1 py-2 sm:grid-cols-[180px_1fr]">
            <dt class="text-muted-foreground">{{ t('fiscal.bank') }}</dt>
            <dd>
              {{ client.profile.fiscal.bank_name }} · <span class="font-mono">{{ client.profile.fiscal.swift_code }}</span> ·
              <span class="tnum">{{ client.profile.fiscal.routing_number }} / {{ client.profile.fiscal.account_number }}</span>
            </dd>
          </div>
        </dl>
        <p v-else class="flex items-center gap-2 text-[14px] text-muted-foreground"><Lock class="size-4" aria-hidden="true" />{{ t('int.fiscalEmpty') }}</p>
      </Card>

      <Card :title="t('int.seatsTitle')" :desc="t('int.seatsDesc')">
        <div class="max-w-[160px]">
          <Field id="cl-seats" :label="t('int.seats')" :error="seatsLow && t('int.seatsMin', { n: client.seats_used })">
            <Input id="cl-seats" v-model="seats" type="number" min="1" max="10000" class="tnum" :disabled="!canManage" :invalid="!seatsOk" />
          </Field>
        </div>
        <template #note>{{ t('int.seatsLabel', { used: client.seats_used, limit: client.seat_limit }) }}</template>
        <template v-if="canManage" #footer>
          <Button :loading="saving" :disabled="!changed || !seatsOk" @click="save">{{ t('common.save') }}</Button>
        </template>
      </Card>

      <Card :title="t('int.owner')" :desc="t('int.ownerDesc')">
        <template v-if="client.owner">
          <div class="text-[14px] font-medium">{{ client.owner.name }}</div>
          <div class="text-[13px] text-muted-foreground">{{ client.owner.email }}</div>
        </template>
        <p v-else class="text-[14px] text-muted-foreground">{{ t('int.noOwner') }}</p>
        <template v-if="canOwner && client.owner" #note>{{ candidates.length ? '' : t('int.noOtherMembers') }}</template>
        <template v-if="canOwner && client.owner" #footer>
          <Button variant="outline" :disabled="!candidates.length" @click="openOwner">{{ t('int.changeOwner') }}</Button>
        </template>
      </Card>

      <template v-if="members.length">
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
      </template>

      <Card v-if="pending.length" :title="t('int.invites')">
        <ul class="-my-3 divide-y">
          <li v-for="invitation in pending" :key="invitation.id" class="flex flex-wrap items-center justify-between gap-2 py-3 text-[14px]">
            <span class="font-medium">{{ invitation.email }}</span>
            <span class="text-[13px] text-muted-foreground">{{ t('int.expires', { when: formatAgo(invitation.expires_at) }) }}</span>
          </li>
        </ul>
      </Card>

      <Card :title="t('int.audit')" :desc="t('int.auditDesc')">
        <p v-if="!audit.length" class="text-[14px] text-muted-foreground">{{ t('int.auditEmpty') }}</p>
        <ol v-else class="-my-3 divide-y">
          <li v-for="entry in audit" :key="entry.id" class="flex flex-wrap items-baseline gap-x-4 gap-y-0.5 py-2.5 text-[14px]">
            <span class="min-w-0 flex-1">
              <span class="font-medium">{{ auditText(entry.action) }}</span>
              <span class="text-muted-foreground"> · {{ who(entry) }}</span>
            </span>
            <time class="tnum text-[13px] text-muted-foreground" :datetime="entry.created_at">{{ formatDate(entry.created_at) }}</time>
          </li>
        </ol>
        <Pagination v-if="auditPages > 1" v-model:page="auditPage" :total="auditTotal" :pages="auditPages" class="mt-3" />
      </Card>
    </template>
  </PageBody>

  <ConfirmDialog
    v-model:open="statusOpen"
    :title="t('int.situationTitle', { name: client?.name ?? '', status: nextStatus ? t(`int.status.${nextStatus}`) : '' })"
    :desc="t('int.situationDesc')"
    :action="t('int.situationChange')"
    :busy="statusBusy"
    @confirm="setStatus"
  />
  <Dialog v-model:open="ownerOpen" :title="t('int.changeOwner')" :desc="t('int.ownerDesc')">
    <Field id="owner-pick" :label="t('int.owner')">
      <NativeSelect id="owner-pick" v-model="ownerPick" :options="ownerOptions" />
    </Field>
    <template #footer>
      <Button variant="outline" @click="ownerOpen = false">{{ t('common.cancel') }}</Button>
      <Button :loading="ownerBusy" :disabled="!ownerPick" @click="changeOwner">{{ t('int.changeOwner') }}</Button>
    </template>
  </Dialog>
</template>
