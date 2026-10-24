<script setup lang="ts">
/** Painel interno: um cliente. Rede e vagas, suspender, trocar o dono, equipe e atividade. */
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { toast } from 'vue-sonner'
import { ArrowLeft } from 'lucide-vue-next'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadError from '@/components/LoadError.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import Status from '@/components/ui/Status.vue'
import { api, ApiError } from '@/lib/api'
import { auditText, errorText, formatAgo, formatDate, pick, t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import type { AuditEntry, Client, ClientDetail, CompanyPlan, Items } from '@/lib/types'
import { useSession } from '@/stores/session'

const route = useRoute()
const session = useSession()
const id = computed(() => String(route.params.id))
const canManage = computed(() => session.can('internal.clients.manage'))
const canOwner = computed(() => session.can('internal.owner.change'))

const client = ref<ClientDetail | null>(null)
const loadError = ref<string | null>(null)
const plan = ref<CompanyPlan>('groone_network')
const seats = ref('')
const saving = ref(false)
const statusBusy = ref(false)
const confirmSuspend = ref(false)
const ownerOpen = ref(false)
const ownerPick = ref('')
const ownerBusy = ref(false)
const audit = ref<AuditEntry[]>([])
const cursor = ref<string | null>(null)
const auditBusy = ref(false)

/** Mostra o erro num aviso. */
const fail = (error: unknown) => toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))

/** Carrega o cliente e a auditoria. */
async function load() {
  loadError.value = null
  try {
    const [clientDetail, auditPage] = await Promise.all([
      api.get<ClientDetail>(`/internal/clients/${id.value}`),
      api.get<Items<AuditEntry>>(`/internal/clients/${id.value}/audit`, { limit: 30 }),
    ])
    client.value = clientDetail
    plan.value = clientDetail.plan
    seats.value = String(clientDetail.seat_limit)
    audit.value = auditPage.items
    cursor.value = auditPage.next_cursor
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)

/** Carrega mais entradas da auditoria. */
async function more() {
  if (!cursor.value) return
  auditBusy.value = true
  try {
    const items = await api.get<Items<AuditEntry>>(`/internal/clients/${id.value}/audit`, { limit: 30, cursor: cursor.value })
    audit.value = [...audit.value, ...items.items]
    cursor.value = items.next_cursor
  } catch (error) {
    fail(error)
  } finally {
    auditBusy.value = false
  }
}

const planOptions = computed(() => (['groone_network', 'external'] as const).map((plan) => ({ value: plan, label: t(`int.plan.${plan}`) })))
const seatsNum = computed(() => Number(seats.value))
const seatsLow = computed(() => !!client.value && seatsNum.value < client.value.seats_used)
const seatsOk = computed(() => Number.isInteger(seatsNum.value) && seatsNum.value >= 1 && seatsNum.value <= 10000 && !seatsLow.value)
const changed = computed(() => !!client.value && (plan.value !== client.value.plan || seatsNum.value !== client.value.seat_limit))

/** Salva o limite de vagas e o plano. */
async function save() {
  const current = client.value
  if (!current || !seatsOk.value) return
  saving.value = true
  try {
    const body: Record<string, unknown> = {}
    if (plan.value !== current.plan) body.plan = plan.value
    if (seatsNum.value !== current.seat_limit) body.seat_limit = seatsNum.value
    const fresh = await api.patch<Client>(`/internal/clients/${current.id}`, body)
    client.value = { ...current, ...fresh }
    toast.success(t('common.saved'))
    await reloadAudit()
  } catch (error) {
    fail(error)
  } finally {
    saving.value = false
  }
}

/** Recarrega a auditoria do começo. */
async function reloadAudit() {
  const items = await api.get<Items<AuditEntry>>(`/internal/clients/${id.value}/audit`, { limit: 30 }).catch(() => null)
  if (items) {
    audit.value = items.items
    cursor.value = items.next_cursor
  }
}

/** Suspende ou reativa o cliente. */
async function setStatus(suspended: boolean) {
  const current = client.value
  if (!current) return
  statusBusy.value = true
  try {
    await api.post(`/internal/clients/${current.id}/${suspended ? 'suspend' : 'reactivate'}`)
    client.value = { ...current, status: suspended ? 'suspended' : 'active' }
    confirmSuspend.value = false
    toast.success(suspended ? t('int.suspendedNow') : t('int.reactivatedNow'))
    await reloadAudit()
  } catch (error) {
    fail(error)
  } finally {
    statusBusy.value = false
  }
}

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
    await api.post(`/internal/clients/${current.id}/owner`, { membership_id: ownerPick.value })
    ownerOpen.value = false
    toast.success(t('int.ownerChanged'))
    await load()
  } catch (error) {
    fail(error)
  } finally {
    ownerBusy.value = false
  }
}

const members = computed(() => (client.value?.members ?? []).filter((member) => member.status !== 'removed'))
const pending = computed(() => (client.value?.invitations ?? []).filter((invitation) => invitation.status === 'pending'))
const names = computed(() => new Map((client.value?.members ?? []).map((member) => [member.user.id, member.user.name])))
/** Quem fez a ação: o nome da pessoa ou o tipo de autor. */
function who(auditEntry: AuditEntry) {
  const name = auditEntry.actor_user_id ? names.value.get(auditEntry.actor_user_id) : undefined
  return name ?? t(`int.by.${auditEntry.actor_kind as 'member' | 'staff' | 'api_key' | 'system'}`)
}
</script>

<template>
  <PageHeader :title="client?.name ?? t('int.client')" :sub="client ? `${client.slug} · ${client.owner.email}` : undefined">
    <template #back>
      <RouterLink to="/interno" class="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground">
        <ArrowLeft class="size-4" />{{ t('int.back') }}
      </RouterLink>
    </template>
  </PageHeader>
  <PageBody class="[&>*]:max-w-[960px]">
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-if="client">
      <Card :title="t('int.planSeats')" :desc="t('int.planSeatsDesc')">
        <div class="grid max-w-[480px] gap-4 sm:grid-cols-[1fr_120px]">
          <Field id="cl-plan" :label="t('int.plan')">
            <NativeSelect id="cl-plan" v-model="plan" :options="planOptions" :disabled="!canManage" />
          </Field>
          <Field id="cl-seats" :label="t('int.seats')" :error="seatsLow && t('int.seatsMin', { n: client.seats_used })">
            <Input id="cl-seats" v-model="seats" type="number" min="1" max="10000" class="tnum" :disabled="!canManage" :invalid="!seatsOk" />
          </Field>
        </div>
        <template #note>{{ t('int.seatsLabel', { used: client.seats_used, limit: client.seat_limit }) }}</template>
        <template v-if="canManage" #footer>
          <Button :loading="saving" :disabled="!changed || !seatsOk" @click="save">{{ t('common.save') }}</Button>
        </template>
      </Card>

      <Card :title="t('int.access')" :desc="t('int.suspendDesc')">
        <Status :tone="client.status === 'active' ? 'ok' : 'bad'">{{ t(`int.status.${client.status}`) }}</Status>
        <template v-if="canManage" #footer>
          <Button v-if="client.status === 'active'" variant="destructive" @click="confirmSuspend = true">{{ t('int.suspend') }}</Button>
          <Button v-else variant="outline" :loading="statusBusy" @click="setStatus(false)">{{ t('int.reactivate') }}</Button>
        </template>
      </Card>

      <Card :title="t('int.owner')" :desc="t('int.ownerDesc')">
        <div class="text-[14px] font-medium">{{ client.owner.name }}</div>
        <div class="text-[13px] text-muted-foreground">{{ client.owner.email }}</div>
        <template v-if="canOwner" #note>{{ candidates.length ? '' : t('int.noOtherMembers') }}</template>
        <template v-if="canOwner" #footer>
          <Button variant="outline" :disabled="!candidates.length" @click="openOwner">{{ t('int.changeOwner') }}</Button>
        </template>
      </Card>

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
        <template v-if="cursor" #footer>
          <Button variant="outline" :loading="auditBusy" @click="more">{{ t('int.more') }}</Button>
        </template>
      </Card>
    </template>
  </PageBody>

  <ConfirmDialog
    v-model:open="confirmSuspend"
    :title="t('int.suspendTitle', { name: client?.name ?? '' })"
    :desc="t('int.suspendDesc')"
    :action="t('int.suspend')"
    :busy="statusBusy"
    @confirm="setStatus(true)"
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
