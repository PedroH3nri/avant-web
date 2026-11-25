<script setup lang="ts">
/** Janela de envio manual: ícone, título, descrição, link e para quem, com a prévia no sino; aba com os enviados e quantas pessoas leram. */
import { computed, ref, watch } from 'vue'
import { Send, X } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { useSession } from '@/stores/session'
import { teamService } from '@/modules/team/service'
import type { Member } from '@/modules/team/types'
import { ICON_COMPONENTS } from '@/modules/notifications/icons'
import { MAX_TEXT, MAX_TITLE, NOTIFICATION_ICONS, validLink } from '@/modules/notifications/rules'
import { notificationService } from '@/modules/notifications/service'
import type { NotificationAudience, NotificationIcon, NotificationSend } from '@/modules/notifications/types'

const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ internal: boolean }>()
const emit = defineEmits<{ sent: [] }>()
const session = useSession()
const tab = ref<'new' | 'sent'>('new')
const icon = ref<NotificationIcon>('megaphone')
const title = ref('')
const text = ref('')
const link = ref('')
const audience = ref<NotificationAudience>(props.internal ? 'groone' : 'company')
const chosen = ref<string[]>([])
const members = ref<Member[]>([])
const sentList = ref<NotificationSend[]>([])
const sending = ref(false)

const audiences = computed<NotificationAudience[]>(() => (props.internal ? ['groone', 'all_clients', 'clients'] : session.can('team.view') ? ['company', 'people'] : ['company']))
const choices = computed(() =>
  audience.value === 'clients'
    ? session.clientCompanies.map((company) => ({ id: company.id, name: company.name }))
    : members.value.filter((member) => member.status === 'active').map((member) => ({ id: member.user.id, name: member.user.name })),
)
const picking = computed(() => audience.value === 'clients' || audience.value === 'people')
const linkError = computed(() => (validLink(link.value.trim(), props.internal) ? null : t(props.internal ? 'notif.linkErrorStaff' : 'notif.linkError')))
const ready = computed(() => title.value.trim() !== '' && text.value.trim() !== '' && !linkError.value && (!picking.value || chosen.value.length > 0))
const PreviewIcon = computed(() => iconOf(icon.value))

/** O componente do ícone escolhido. */
function iconOf(name: NotificationIcon) {
  return ICON_COMPONENTS[name]
}

/** Volta o formulário ao começo. */
function reset() {
  tab.value = 'new'
  icon.value = 'megaphone'
  title.value = text.value = link.value = ''
  audience.value = audiences.value[0] ?? 'company'
  chosen.value = []
}

/** Carrega as pessoas da Empresa para escolher, só quando a opção aparece. */
async function loadMembers() {
  if (members.value.length || props.internal) return
  members.value = (await teamService.memberOptions().catch(() => ({ items: [] }))).items
}

/** Carrega os envios já feitos. */
async function loadSent() {
  try {
    sentList.value = (await notificationService.sent(props.internal)).items
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}

/** Marca ou desmarca uma Empresa ou pessoa. */
function toggle(id: string) {
  chosen.value = chosen.value.includes(id) ? chosen.value.filter((item) => item !== id) : [...chosen.value, id]
}

/** Manda a notificação; a API confere tudo de novo. */
async function submit() {
  if (!ready.value || sending.value) return
  sending.value = true
  try {
    const result = await notificationService.send(
      { icon: icon.value, title: title.value.trim(), text: text.value.trim(), link: link.value.trim() || null, audience: audience.value, target_ids: picking.value ? chosen.value : [] },
      props.internal,
    )
    toast.success(t('notif.sentToast', { n: result.recipients }))
    emit('sent')
    reset()
    open.value = false
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    sending.value = false
  }
}

watch(audience, (value) => {
  chosen.value = []
  if (value === 'people') void loadMembers()
})
watch(tab, (value) => {
  if (value === 'sent') void loadSent()
})
watch(open, (isOpen) => {
  if (!isOpen) tab.value = 'new'
})
</script>

<template>
  <Dialog v-model:open="open" :title="t('notif.sendTitle')" :desc="t('notif.sendDesc')" class="max-w-[760px]">
    <div class="-mt-1 mb-5 flex gap-1 border-b text-[13px]" role="tablist">
      <button
        v-for="option in ['new', 'sent'] as const"
        :key="option"
        type="button"
        role="tab"
        :aria-selected="tab === option"
        :class="cn('-mb-px border-b-2 px-3 py-2 font-medium transition-colors', tab === option ? 'border-foreground text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground')"
        @click="tab = option"
      >
        {{ option === 'new' ? t('notif.tabNew') : t('notif.tabSent') }}
      </button>
    </div>
    <form v-if="tab === 'new'" id="send-notification" class="grid gap-6 md:grid-cols-[1fr_240px]" @submit.prevent="submit">
      <div class="grid content-start gap-4">
        <fieldset>
          <legend class="mb-2 text-[13px] font-medium text-muted-foreground">{{ t('notif.icon') }}</legend>
          <div class="grid grid-cols-7 gap-1.5" role="radiogroup" :aria-label="t('notif.icon')">
            <button
              v-for="option in NOTIFICATION_ICONS"
              :key="option"
              type="button"
              role="radio"
              :aria-checked="icon === option"
              :aria-label="t(`notif.icons.${option}`)"
              :title="t(`notif.icons.${option}`)"
              :class="cn('flex h-9 items-center justify-center rounded-md border transition-[border-color,transform,background-color] duration-150 hover:-translate-y-px motion-reduce:hover:translate-y-0', icon === option ? 'border-foreground bg-secondary' : 'hover:border-[hsl(var(--ring)/0.45)]')"
              @click="icon = option"
            >
              <component :is="iconOf(option)" class="size-4" aria-hidden="true" />
            </button>
          </div>
        </fieldset>
        <Field id="notif-title" :label="t('notif.fieldTitle')" :hint="t('notif.counter', { n: title.length, max: MAX_TITLE })">
          <Input id="notif-title" v-model="title" :maxlength="MAX_TITLE" required />
        </Field>
        <Field id="notif-text" :label="t('notif.fieldText')" :hint="t('notif.counter', { n: text.length, max: MAX_TEXT })">
          <textarea
            id="notif-text"
            v-model="text"
            rows="3"
            :maxlength="MAX_TEXT"
            required
            class="min-h-20 w-full rounded-md border border-input bg-[hsl(var(--field))] px-3 py-2 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </Field>
        <Field id="notif-link" :label="t('notif.fieldLink')" :hint="t(internal ? 'notif.linkHintStaff' : 'notif.linkHint')" :error="link.trim() ? linkError : null">
          <Input id="notif-link" v-model="link" :placeholder="internal ? '/relatorios ou https://' : '/relatorios'" :invalid="Boolean(link.trim() && linkError)" />
        </Field>
        <fieldset class="grid gap-2">
          <legend class="mb-2 text-[13px] font-medium text-muted-foreground">{{ t('notif.audience') }}</legend>
          <label
            v-for="option in audiences"
            :key="option"
            :class="cn('flex cursor-pointer items-start gap-3 rounded-md border px-3 py-2.5 transition-colors', audience === option ? 'border-foreground bg-secondary/60' : 'hover:bg-muted')"
          >
            <input v-model="audience" type="radio" name="notif-audience" :value="option" class="mt-1" />
            <span>
              <span class="block text-[13px] font-medium">{{ t(`notif.aud.${option}`) }}</span>
              <span class="block text-[12px] text-muted-foreground">{{ t(`notif.aud.${option}Hint`) }}</span>
            </span>
          </label>
          <div v-if="picking" class="flex flex-wrap gap-1.5 pt-1 animate-in fade-in-0">
            <button
              v-for="choice in choices"
              :key="choice.id"
              type="button"
              :aria-pressed="chosen.includes(choice.id)"
              :class="cn('inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[12px] font-medium transition-colors', chosen.includes(choice.id) ? 'border-foreground bg-foreground text-background' : 'text-muted-foreground hover:text-foreground')"
              @click="toggle(choice.id)"
            >
              {{ choice.name }}<X v-if="chosen.includes(choice.id)" class="size-3" aria-hidden="true" />
            </button>
            <p v-if="!choices.length" class="text-[12px] text-muted-foreground">{{ t('notif.noChoices') }}</p>
          </div>
        </fieldset>
      </div>
      <div>
        <div class="mb-2 text-[13px] font-medium text-muted-foreground">{{ t('notif.preview') }}</div>
        <div class="rounded-lg border bg-background shadow-sm">
          <div class="grid grid-cols-[28px_1fr_8px] gap-3 bg-[hsl(var(--muted)/0.5)] px-4 py-3">
            <span class="flex size-7 items-center justify-center rounded-full border bg-background"><component :is="PreviewIcon" class="size-3.5" aria-hidden="true" /></span>
            <span class="min-w-0">
              <span class="block break-words text-[13px] font-semibold">{{ title.trim() || t('notif.fieldTitle') }}</span>
              <span class="block break-words text-[13px] leading-snug text-muted-foreground">{{ text.trim() || t('notif.fieldText') }}</span>
              <span class="mt-1 block text-[12px] text-muted-foreground">{{ t('notif.now') }}</span>
            </span>
            <span class="mt-1.5 size-2 rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </form>
    <ul v-else class="divide-y rounded-md border">
      <li v-for="item in sentList" :key="item.id" class="grid grid-cols-[28px_1fr_auto] items-start gap-3 px-4 py-3 text-[13px] animate-in fade-in-0">
        <span class="flex size-7 items-center justify-center rounded-full border"><component :is="iconOf(item.icon)" class="size-3.5" aria-hidden="true" /></span>
        <span class="min-w-0">
          <span class="block break-words font-medium">{{ item.title }}</span>
          <span class="block text-muted-foreground">{{ t(`notif.aud.${item.audience}`) }} · {{ item.sender?.name ?? '—' }} · {{ formatDate(item.created_at) }}</span>
        </span>
        <span class="text-right tabular-nums">
          <span class="block font-medium">{{ t('notif.readOf', { read: item.read, n: item.recipients }) }}</span>
        </span>
      </li>
      <li v-if="!sentList.length" class="px-4 py-8 text-center text-[13px] text-muted-foreground">{{ t('notif.noneSent') }}</li>
    </ul>
    <template v-if="tab === 'new'" #footer>
      <Button variant="outline" type="button" @click="open = false">{{ t('common.cancel') }}</Button>
      <Button type="submit" form="send-notification" :disabled="!ready" :loading="sending"><Send aria-hidden="true" />{{ t('notif.send') }}</Button>
    </template>
  </Dialog>
</template>
