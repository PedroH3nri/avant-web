<script setup lang="ts">
/** O sino da navbar: o número de não lidas (conferido a cada minuto) e o painel com a lista, o filtro e o "marcar todas". */
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
import { Bell, BellOff, CheckCheck, Loader2, Send } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import { ApiError } from '@/lib/api'
import { errorText, formatAgo, t } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { useSession } from '@/stores/session'
import SendNotificationDialog from '@/modules/notifications/components/SendNotificationDialog.vue'
import { ICON_COMPONENTS } from '@/modules/notifications/icons'
import { isExternal, noticeText, noticeTitle, UNREAD_POLL_MS } from '@/modules/notifications/rules'
import { notificationService } from '@/modules/notifications/service'
import type { AppNotification } from '@/modules/notifications/types'

defineProps<{ class?: string }>()
const session = useSession()
const router = useRouter()
const open = ref(false)
const composing = ref(false)
const unread = ref(0)
const unreadOnly = ref(false)
const items = ref<AppNotification[]>([])
const loading = ref(false)
let timer: ReturnType<typeof setInterval> | undefined

const internal = computed(() => session.company?.is_internal ?? false)
const canSend = computed(() => session.can(internal.value ? 'internal.notifications.send' : 'notifications.send'))
const badge = computed(() => (unread.value > 9 ? '9+' : String(unread.value)))

/** Atualiza o número do sino; um erro de rede só espera a próxima volta. */
async function refreshCount() {
  try {
    unread.value = (await notificationService.unreadCount()).unread
  } catch {
    return
  }
}

/** Carrega a lista do painel aberto, com ou sem as já lidas. */
async function loadList() {
  loading.value = true
  try {
    items.value = (await notificationService.list(unreadOnly.value)).items
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    loading.value = false
  }
}

/** Marca como lidas (as dadas ou todas) e atualiza o número e a lista. */
async function markRead(ids: string[] | null) {
  try {
    await notificationService.read(ids)
    const now = new Date().toISOString()
    items.value = items.value.map((item) => (ids === null || ids.includes(item.id) ? { ...item, read_at: item.read_at ?? now } : item))
    if (unreadOnly.value) items.value = items.value.filter((item) => !item.read_at)
    await refreshCount()
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}

/** Abre o aviso: marca como lido e segue o link (fora do painel, em outra aba). */
async function choose(item: AppNotification) {
  if (!item.read_at) await markRead([item.id])
  if (!item.link) return
  open.value = false
  if (isExternal(item.link)) window.open(item.link, '_blank', 'noopener,noreferrer')
  else await router.push(item.link)
}

/** Depois de enviar: confere de novo, porque quem envia também pode receber. */
async function sent() {
  await refreshCount()
  if (open.value) await loadList()
}

watch(open, (isOpen) => {
  if (isOpen) void loadList()
})
watch(unreadOnly, () => void loadList())
watch(
  () => session.me?.active_company_id,
  () => {
    items.value = []
    void refreshCount()
  },
)

/** Volta a conferir quando a aba fica visível de novo. */
function onVisible() {
  if (document.visibilityState === 'visible') void refreshCount()
}

onMounted(() => {
  void refreshCount()
  timer = setInterval(refreshCount, UNREAD_POLL_MS)
  document.addEventListener('visibilitychange', onVisible)
})
onBeforeUnmount(() => {
  clearInterval(timer)
  document.removeEventListener('visibilitychange', onVisible)
})
</script>

<template>
  <PopoverRoot v-model:open="open">
    <PopoverTrigger
      :aria-label="unread ? t('notif.ariaUnread', { n: unread }) : t('notif.title')"
      :class="
        cn(
          'relative flex size-8 shrink-0 items-center justify-center rounded-md border bg-background text-muted-foreground transition-[border-color,transform,box-shadow,color] duration-200 hover:-translate-y-px hover:border-[hsl(var(--ring)/0.45)] hover:text-foreground hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:hover:translate-y-0',
          $props.class,
        )
      "
    >
      <Bell :key="unread" :class="cn('size-4', unread > 0 && 'bell-ring')" aria-hidden="true" />
      <span
        v-if="unread > 0"
        class="absolute -right-1.5 -top-1.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[hsl(var(--highlight))] px-1 text-[11px] font-semibold leading-none text-[hsl(var(--background))] tabular-nums ring-2 ring-background animate-in zoom-in-50"
        >{{ badge }}</span
      >
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        align="end"
        :side-offset="6"
        :collision-padding="8"
        class="z-50 w-[min(380px,calc(100vw-16px))] rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
      >
        <div class="flex items-center gap-1 border-b px-4 py-3">
          <h2 class="mr-auto text-[14px] font-semibold">{{ t('notif.title') }}</h2>
          <button
            v-if="canSend"
            type="button"
            class="inline-flex items-center gap-1 rounded px-1.5 py-1 text-[12px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            @click="composing = true"
          >
            <Send class="size-3.5" aria-hidden="true" />{{ t('notif.send') }}
          </button>
          <button
            type="button"
            :disabled="!unread"
            class="inline-flex items-center gap-1 rounded px-1.5 py-1 text-[12px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
            @click="markRead(null)"
          >
            <CheckCheck class="size-3.5" aria-hidden="true" />{{ t('notif.readAll') }}
          </button>
        </div>
        <div class="flex gap-1 border-b px-3 py-2 text-[13px]">
          <button
            v-for="option in [false, true]"
            :key="String(option)"
            type="button"
            :aria-pressed="unreadOnly === option"
            :class="cn('rounded-md px-2.5 py-1 font-medium transition-colors', unreadOnly === option ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground')"
            @click="unreadOnly = option"
          >
            {{ option ? (unread ? t('notif.unreadCount', { n: unread }) : t('notif.unread')) : t('notif.all') }}
          </button>
        </div>
        <div v-if="loading && !items.length" class="flex justify-center py-10 text-muted-foreground"><Loader2 class="size-5 animate-spin" aria-hidden="true" /></div>
        <ul v-else class="max-h-[min(420px,60vh)] divide-y overflow-y-auto">
          <li v-for="(item, index) in items" :key="item.id" class="animate-in fade-in-0 slide-in-from-top-1 fill-mode-both" :style="{ animationDelay: `${Math.min(index, 8) * 30}ms` }">
            <button
              type="button"
              :class="cn('grid w-full grid-cols-[28px_1fr_8px] gap-3 px-4 py-3 text-left transition-colors hover:bg-muted', !item.read_at && 'bg-[hsl(var(--muted)/0.5)]')"
              @click="choose(item)"
            >
              <span class="flex size-7 items-center justify-center rounded-full border bg-background">
                <component :is="ICON_COMPONENTS[item.icon]" :class="cn('size-3.5', item.icon === 'alert' ? 'text-bad' : 'text-foreground')" aria-hidden="true" />
              </span>
              <span class="min-w-0">
                <span :class="cn('block break-words text-[13px]', item.read_at ? 'font-medium' : 'font-semibold')">{{ noticeTitle(item) }}</span>
                <span class="block break-words text-[13px] leading-snug text-muted-foreground">{{ noticeText(item) }}</span>
                <span class="mt-1 block text-[12px] text-muted-foreground">{{ formatAgo(item.created_at) }}</span>
              </span>
              <span v-if="!item.read_at" class="mt-1.5 size-2 rounded-full bg-primary" :aria-label="t('notif.unreadOne')" />
              <span v-else />
            </button>
          </li>
          <li v-if="!items.length" class="flex flex-col items-center gap-2 px-4 py-10 text-center text-[13px] text-muted-foreground">
            <BellOff class="size-5" aria-hidden="true" />{{ unreadOnly ? t('notif.emptyUnread') : t('notif.empty') }}
          </li>
        </ul>
        <p class="border-t px-4 py-2.5 text-[12px] text-muted-foreground">{{ t('notif.footer') }}</p>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
  <SendNotificationDialog v-if="canSend" v-model:open="composing" :internal="internal" @sent="sent" />
</template>
