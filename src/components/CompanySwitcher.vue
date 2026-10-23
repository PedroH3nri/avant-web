<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { DropdownMenuLabel, DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import { Check, ChevronsUpDown } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import Avatar from '@/components/ui/Avatar.vue'
import Badge from '@/components/ui/Badge.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { useSession } from '@/stores/session'

const session = useSession()
const route = useRoute()
const router = useRouter()

async function pick(id: string) {
  if (id === session.company?.id) return
  try {
    await session.switchCompany(id)
    // Dados da outra Empresa: volta ao início para nada da anterior ficar na tela.
    if (route.path !== '/') await router.push('/')
  } catch (e) {
    toast.error(errorText(e instanceof ApiError ? e.code : 'unknown'))
  }
}
</script>

<template>
  <span v-if="route.meta.internal" class="flex min-w-0 items-center gap-2 text-[14px] font-medium">
    Groone<Badge>{{ t('nav.internal') }}</Badge>
  </span>
  <DropdownMenuRoot v-else-if="session.company">
    <DropdownMenuTrigger
      class="flex min-w-0 items-center gap-2 rounded-md px-1.5 py-1.5 text-left text-[14px] font-medium hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Avatar :name="session.company.name" :size="20" />
      <span class="min-w-0 truncate">{{ session.company.name }}</span>
      <ChevronsUpDown class="size-4 shrink-0 text-muted-foreground" />
    </DropdownMenuTrigger>
    <MenuContent class="w-64">
      <DropdownMenuLabel class="px-2 py-1.5 text-[12px] text-muted-foreground">{{ t('top.companies') }}</DropdownMenuLabel>
      <!-- A Company Groone entra pelo painel interno, no menu lateral. -->
      <MenuItem v-for="c in session.clientCompanies" :key="c.id" @select="pick(c.id)">
        <Avatar :name="c.name" :size="20" />
        <span class="min-w-0 truncate">{{ c.name }}</span>
        <Check v-if="c.id === session.company.id" class="ml-auto" />
      </MenuItem>
    </MenuContent>
  </DropdownMenuRoot>
</template>
