<script setup lang="ts">
/** Abas da Equipe: Membros e Convites trocam na própria tela; Grupos tem a sua rota. */
import { computed } from 'vue'
import { t } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { useSession } from '@/stores/session'

type TeamTab = 'members' | 'pending' | 'groups'

const props = defineProps<{ current: TeamTab; counts: Partial<Record<TeamTab, number>> }>()
const emit = defineEmits<{ select: [tab: 'members' | 'pending'] }>()
const session = useSession()

const tabs = computed(() =>
  [
    { id: 'members' as const, label: t('team.members') },
    { id: 'pending' as const, label: t('team.pending') },
    { id: 'groups' as const, label: t('groups.tab') },
  ].filter((tab) => tab.id !== 'groups' || session.can('groups.view')),
)

/** Classes da aba, ativa ou não. */
const tabClass = (active: boolean) =>
  cn(
    'inline-flex h-8 items-center gap-1 whitespace-nowrap rounded-[4px] px-3 text-[13px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    active ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground',
  )

/** Rota da aba quando ela fica em outra tela que não a atual. */
function routeFor(tab: TeamTab): string | null {
  if (tab === 'groups') return props.current === 'groups' ? null : '/equipe/grupos'
  if (props.current !== 'groups') return null
  return tab === 'pending' ? '/equipe?aba=convites' : '/equipe'
}
</script>

<template>
  <div class="flex min-w-0 max-w-full overflow-x-auto rounded-md border bg-card p-0.5" role="tablist" :aria-label="t('team.title')">
    <template v-for="tab in tabs" :key="tab.id">
      <RouterLink v-if="routeFor(tab.id)" :to="routeFor(tab.id)!" role="tab" :aria-selected="false" :class="tabClass(false)">
        {{ tab.label }} <span v-if="counts[tab.id] !== undefined" class="text-muted-foreground tnum">{{ counts[tab.id] }}</span>
      </RouterLink>
      <button v-else type="button" role="tab" :aria-selected="current === tab.id" :class="tabClass(current === tab.id)" @click="tab.id !== 'groups' && emit('select', tab.id)">
        {{ tab.label }} <span v-if="counts[tab.id] !== undefined" class="text-muted-foreground tnum">{{ counts[tab.id] }}</span>
      </button>
    </template>
  </div>
</template>
