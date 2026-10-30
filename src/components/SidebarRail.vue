<script setup lang="ts">
/** Sidebar em trilho: um ícone por grupo; passar o mouse ou focar abre, por cima da página, o painel com os itens do grupo. */
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { LogOut, UserRound } from 'lucide-vue-next'
import Avatar from '@/components/ui/Avatar.vue'
import Mark from '@/components/ui/Mark.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import { t } from '@/lib/i18n'
import { useNavigation, type NavGroup } from '@/lib/navigation'
import { cn } from '@/lib/utils'

const OPEN_DELAY_MS = 120
const SWITCH_DELAY_MS = 250
const CLOSE_DELAY_MS = 200
const hovered = ref<string | null>(null)
const { session, route, ready, groups, active, groupActive, openLink, account, logout } = useNavigation(() => (hovered.value = null))
const lastShown = ref<string | null>(null)
let closing: ReturnType<typeof setTimeout> | null = null
let switching: ReturnType<typeof setTimeout> | null = null

const open = computed(() => hovered.value !== null)
const shown = computed(() => groups.value.find((section) => section.id === (hovered.value ?? lastShown.value)) ?? null)
watch(() => route.path, () => (hovered.value = null))
onBeforeUnmount(cancel)

/** Cancela a troca e o fechamento que ainda estão esperando. */
function cancel() {
  if (closing) clearTimeout(closing)
  if (switching) clearTimeout(switching)
}

/** Mostra o painel do grupo na hora; grupo de um item só não tem painel. */
function show(section: NavGroup) {
  cancel()
  if (section.items.length < 2) {
    hovered.value = null
    return
  }
  hovered.value = section.id
  lastShown.value = section.id
}

/** Abre o painel do grupo sob o mouse depois de uma pequena espera, para o mouse que só passa por cima não trocar os itens. */
function hover(section: NavGroup) {
  cancel()
  if (section.id === hovered.value) return
  switching = setTimeout(() => show(section), open.value ? SWITCH_DELAY_MS : OPEN_DELAY_MS)
}

/** Fecha o painel com um pequeno atraso, para dar tempo de o mouse chegar nele. */
function leave() {
  if (switching) clearTimeout(switching)
  closing = setTimeout(() => (hovered.value = null), CLOSE_DELAY_MS)
}

/** Fecha o painel quando o foco sai do menu inteiro. */
function blur(event: FocusEvent) {
  const next = event.relatedTarget as Node | null
  if (!next || !(event.currentTarget as HTMLElement).contains(next)) hovered.value = null
}

/** Classes do botão do grupo no trilho: ativo, com o painel aberto ou parado. */
const railItem = (section: NavGroup) =>
  cn(
    'flex w-full flex-col items-center gap-1.5 rounded-md py-2.5 text-[12px] font-medium leading-none transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&_svg]:size-[18px]',
    groupActive(section) ? 'bg-secondary text-foreground' : open.value && shown.value?.id === section.id ? 'bg-accent text-foreground' : 'text-muted-foreground hover:bg-accent hover:text-foreground',
  )
/** Classes do link no painel, ativo ou não. */
const panelItem = (on: boolean) =>
  cn(
    'flex h-9 w-full items-center gap-2.5 rounded-md px-2.5 text-left text-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&_svg]:size-4',
    on ? 'bg-secondary font-medium text-foreground' : 'text-muted-foreground hover:bg-accent hover:text-foreground',
  )
</script>

<template>
  <div class="relative flex h-full" @mouseleave="leave" @focusout="blur" @keydown.esc="hovered = null">
    <div class="relative z-10 flex w-[88px] shrink-0 flex-col items-center border-r bg-sidebar py-3">
      <RouterLink to="/" class="rounded-md p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" @mouseenter="leave">
        <Mark :size="28" /><span class="sr-only">Avant</span>
      </RouterLink>
      <nav v-if="ready" class="mt-4 grid w-full gap-1 px-1.5" :aria-label="t('nav.main')">
        <template v-for="section in groups" :key="section.id">
          <RouterLink
            v-if="section.items.length === 1"
            :to="section.items[0]!.to"
            :aria-current="groupActive(section) ? 'page' : undefined"
            :class="railItem(section)"
            @mouseenter="hover(section)"
            @focus="show(section)"
            @click="openLink($event, section.items[0]!.to)"
          >
            <component :is="section.icon" />{{ t(section.label) }}
          </RouterLink>
          <button
            v-else
            type="button"
            :aria-current="groupActive(section) ? 'true' : undefined"
            :aria-expanded="open && shown?.id === section.id"
            aria-controls="rail-panel"
            :class="railItem(section)"
            @mouseenter="hover(section)"
            @focus="show(section)"
            @click="openLink(null, section.items[0]!.to)"
          >
            <component :is="section.icon" />{{ t(section.label) }}
          </button>
        </template>
      </nav>
      <div class="mt-auto flex justify-center" @mouseenter="leave">
        <DropdownMenuRoot>
          <DropdownMenuTrigger class="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" :aria-label="t('nav.account')">
            <Avatar :name="session.me?.user.name ?? ''" :image-url="session.me?.user.image_url" :size="30" />
          </DropdownMenuTrigger>
          <MenuContent side="right" align="end" class="w-56">
            <div class="px-2 py-1.5">
              <div class="truncate text-[13px] font-medium">{{ session.me?.user.name }}</div>
              <div class="truncate text-[12px] text-muted-foreground">{{ session.me?.user.email }}</div>
            </div>
            <MenuItem @select="account">{{ t('nav.account') }}<UserRound class="ml-auto" /></MenuItem>
            <MenuItem @select="logout">{{ t('top.logout') }}<LogOut class="ml-auto" /></MenuItem>
          </MenuContent>
        </DropdownMenuRoot>
      </div>
    </div>
    <div
      id="rail-panel"
      :aria-hidden="!open"
      :inert="!open || undefined"
      :class="
        cn(
          'absolute inset-y-0 left-[88px] flex w-[248px] flex-col border-r bg-sidebar shadow-[8px_0_24px_-12px_rgba(0,0,0,0.18)] transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
          open ? 'translate-x-0 opacity-100 duration-300' : 'pointer-events-none -translate-x-3 opacity-0 duration-200',
        )
      "
      @mouseenter="cancel"
    >
      <template v-if="shown">
        <div class="flex h-14 shrink-0 items-center border-b px-4 text-[14px] font-semibold tracking-tight">{{ t(shown.label) }}</div>
        <nav class="grid gap-0.5 overflow-y-auto p-3" :aria-label="t(shown.label)">
          <RouterLink
            v-for="link in shown.items"
            :key="link.to"
            :to="link.to"
            :aria-current="active(link) ? 'page' : undefined"
            :class="panelItem(active(link))"
            @click="openLink($event, link.to)"
          >
            <component :is="link.icon" />{{ t(link.key) }}
          </RouterLink>
        </nav>
      </template>
    </div>
  </div>
</template>
