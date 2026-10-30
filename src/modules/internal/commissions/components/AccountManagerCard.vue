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
import { errorText, pick, t, type Key } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { profileBody, profileInput } from '@/modules/internal/clients/rules'
import { clientService } from '@/modules/internal/clients/service'
import type { Client, ClientDetail } from '@/modules/internal/clients/types'
import { managerChange } from '@/modules/internal/commissions/rules'
import { staffService } from '@/modules/internal/staff/service'
import type { Member } from '@/modules/team/types'
import { useSession } from '@/stores/session'

const props = defineProps<{ client: ClientDetail }>()
const emit = defineEmits<{ saved: [client: Client] }>()
const session = useSession()
const staff = ref<Member[]>([])
const open = ref(false)
const picked = ref('')
const busy = ref(false)

/** A equipe Groone inteira, página por página. */
async function loadStaff() {
  const found: Member[] = []
  for (let page = 1; ; page++) {
    const result = await staffService.list({ page })
    found.push(...result.items)
    if (page >= result.pages) break
  }
  staff.value = found.filter((member) => member.status === 'active')
}
onMounted(() => void loadStaff().catch(() => (staff.value = [])))

const managerId = computed(() => props.client.profile?.account_manager_id ?? null)
const manager = computed(() => staff.value.find((member) => member.user.id === managerId.value) ?? null)
const canChange = computed(() => !!props.client.profile && session.can('internal.clients.manage') && (managerId.value === null || session.can('internal.commissions.manage')))
const options = computed(() =>
  staff.value
    .filter((member) => member.user.id !== managerId.value)
    .map((member) => ({ value: member.user.id, label: `${member.user.name} · ${member.role ? pick(member.role.name) : t('com.manager.noRole')}` })),
)
const next = computed(() => staff.value.find((member) => member.user.id === picked.value) ?? null)
const change = computed(() => managerChange(managerId.value === null ? null : (manager.value?.role?.id ?? ''), next.value?.role?.id ?? null))
const changeText = computed(() => (next.value ? t(`com.manager.${change.value}` as Key, { name: next.value.user.name }) : ''))

watch(open, (opened) => {
  if (opened) picked.value = options.value[0]?.value ?? ''
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
    <div v-if="manager" class="flex items-center gap-3">
      <Avatar :name="manager.user.name" :image-url="manager.user.image_url" />
      <div>
        <div class="text-[14px] font-medium">{{ manager.user.name }}</div>
        <div class="text-[13px] text-muted-foreground">{{ manager.role ? pick(manager.role.name) : t('com.manager.noRole') }}</div>
      </div>
    </div>
    <p v-else class="text-[14px] text-muted-foreground">{{ t('com.manager.none') }}</p>
    <template v-if="canChange" #footer>
      <Button size="sm" variant="outline" class="bg-card" :disabled="options.length === 0" @click="open = true">
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
        <NativeSelect id="account-manager" v-model="picked" :options="options" />
      </Field>
      <div v-if="next" :class="cn('flex gap-3 rounded-md border p-3 text-[13px]', change === 'stops' ? 'border-ochre/40 bg-ochre-soft' : 'bg-muted')">
        <Info :class="cn('mt-0.5 size-4 shrink-0', change === 'stops' ? 'text-ochre' : 'text-muted-foreground')" aria-hidden="true" />
        <span>{{ changeText }}</span>
      </div>
    </div>
    <template #footer>
      <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button :disabled="!picked" :loading="busy" @click="save">{{ t('com.manager.save') }}</Button>
    </template>
  </Dialog>
</template>
