<script setup lang="ts">
/** Card do responsável Groone do cliente, com a troca e o aviso do que acontece com a comissão. */
import { computed, onMounted, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import { Info } from 'lucide-vue-next'
import Avatar from '@/components/ui/Avatar.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import NativeSelect from '@/components/ui/NativeSelect.vue'
import { ApiError } from '@/lib/api'
import { errorText, pick, t, tn, type Key } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { profileBody, profileInput } from '@/modules/internal/clients/rules'
import { clientService } from '@/modules/internal/clients/service'
import type { Client, ClientDetail } from '@/modules/internal/clients/types'
import { changeNotes, type ChangeNote } from '@/modules/internal/commissions/rules'
import type { ManagerChange } from '@/modules/internal/commissions/types'
import { staffService } from '@/modules/internal/staff/service'
import type { Member } from '@/modules/team/types'
import { useSession } from '@/stores/session'

const props = defineProps<{ client: ClientDetail }>()
const emit = defineEmits<{ saved: [client: Client] }>()
const session = useSession()
const staff = ref<Member[] | null>(null)
const staffError = ref(false)
const open = ref(false)
const picked = ref('')
const busy = ref(false)

/** A equipe Groone inteira, com os suspensos, para achar o responsável e o papel dele. */
async function loadStaff() {
  staffError.value = false
  try {
    staff.value = (await staffService.options()).items
  } catch {
    staffError.value = true
  }
}
onMounted(loadStaff)

const managerId = computed(() => props.client.profile?.account_manager_id ?? null)
const manager = computed(() => staff.value?.find((member) => member.user.id === managerId.value) ?? null)
const canChange = computed(() => !!props.client.profile && session.can('internal.clients.manage') && (managerId.value === null || session.can('internal.commissions.manage')))
const options = computed(() =>
  (staff.value ?? [])
    .filter((member) => member.status === 'active' && member.user.id !== managerId.value)
    .map((member) => ({ value: member.user.id, label: `${member.user.name} · ${member.role ? pick(member.role.name) : t('com.manager.noRole')}` })),
)
const next = computed(() => staff.value?.find((member) => member.user.id === picked.value) ?? null)
const preview = ref<ManagerChange | null>(null)
let previewTicket = 0
const NOTE_KEY: Record<ChangeNote, Key> = {
  continues: 'com.manager.continues',
  stops: 'com.manager.stops',
  arrives: 'com.manager.arrives',
  none: 'com.manager.noWindows',
}
/** As frases do que a troca faz com os prazos, pela prévia da API. */
const changeLines = computed(() => {
  const found = preview.value
  const person = next.value
  if (!found || !person) return []
  return changeNotes(found).map((note) =>
    note === 'arrives' ? tn(NOTE_KEY[note], found.arrives, { name: person.user.name }) : t(NOTE_KEY[note], { name: person.user.name }),
  )
})
const warns = computed(() => (preview.value?.stops ?? 0) > 0)

watch(open, (opened) => {
  if (opened) picked.value = ''
})
watch(picked, (userId) => {
  const mine = ++previewTicket
  preview.value = null
  if (!userId) return
  clientService.managerChange(props.client.id, userId).then(
    (found) => mine === previewTicket && (preview.value = found),
    () => mine === previewTicket && (preview.value = null),
  )
})

/** Grava o novo responsável no cadastro do cliente. */
async function save() {
  const profile = props.client.profile
  if (!profile || !picked.value) return
  busy.value = true
  try {
    const fresh = await clientService.update(props.client.id, { profile: profileBody({ ...profileInput(profile), account_manager_id: picked.value }) })
    toast.success(t('com.manager.saved'))
    open.value = false
    emit('saved', fresh)
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <Card :title="t('com.manager.title')" :desc="t('com.manager.desc')" :footer-note="canChange ? t('com.manager.note') : undefined">
    <p v-if="staffError" class="text-[14px] text-bad">{{ errorText('unknown') }}</p>
    <p v-else-if="staff === null" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <div v-else-if="manager" class="flex items-center gap-3">
      <Avatar :name="manager.user.name" :image-url="manager.user.image_url" />
      <div>
        <div class="text-[14px] font-medium">{{ manager.user.name }}</div>
        <div class="text-[13px] text-muted-foreground">{{ manager.role ? pick(manager.role.name) : t('com.manager.noRole') }}</div>
      </div>
    </div>
    <p v-else class="text-[14px] text-muted-foreground">{{ t('com.manager.none') }}</p>
    <template v-if="canChange" #footer>
      <Button size="sm" variant="outline" class="bg-card" :disabled="staff === null || options.length === 0" @click="open = true">
        {{ managerId ? t('com.manager.change') : t('com.manager.set') }}
      </Button>
    </template>
  </Card>
  <Dialog
    v-model:open="open"
    :title="t('com.manager.dialogTitle')"
    :desc="manager ? t('com.manager.dialogDesc', { client: client.name, name: manager.user.name }) : t('com.manager.dialogDescNone', { client: client.name })"
  >
    <div class="grid gap-4">
      <Field id="account-manager" :label="t('com.manager.pick')">
        <NativeSelect id="account-manager" v-model="picked" :options="[{ value: '', label: t('com.manager.choose') }, ...options]" />
      </Field>
      <div v-if="changeLines.length" :class="cn('flex gap-3 rounded-md border p-3 text-[13px]', warns ? 'border-ochre/40 bg-ochre-soft' : 'bg-muted')">
        <Info :class="cn('mt-0.5 size-4 shrink-0', warns ? 'text-ochre' : 'text-muted-foreground')" aria-hidden="true" />
        <div class="grid gap-1">
          <p v-for="line in changeLines" :key="line">{{ line }}</p>
        </div>
      </div>
    </div>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button :disabled="!picked" :loading="busy" @click="save">{{ t('com.manager.save') }}</Button>
    </template>
  </Dialog>
</template>
