<script setup lang="ts">
/** Menu para trocar a Empresa ativa da sessão; aparece em todas as telas, painel interno incluído. */
import { useRoute, useRouter } from 'vue-router'
import { DropdownMenuLabel, DropdownMenuRoot, DropdownMenuSeparator, DropdownMenuTrigger } from 'reka-ui'
import { Check, ChevronsUpDown } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import Badge from '@/components/ui/Badge.vue'
import CompanyIcon from '@/components/CompanyIcon.vue'
import MenuContent from '@/components/ui/MenuContent.vue'
import MenuItem from '@/components/ui/MenuItem.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { useSession } from '@/stores/session'

const session = useSession()
const route = useRoute()
const router = useRouter()

/** Troca a Empresa ativa e volta ao início se a tela atual não servir. */
async function pick(id: string) {
  if (id === session.company?.id) return
  try {
    await session.switchCompany(id)
    // Dados da outra Empresa: volta ao início para nada da anterior ficar na tela.
    if (route.path !== '/') await router.push('/')
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  }
}
</script>

<template>
  <DropdownMenuRoot v-if="session.company">
    <DropdownMenuTrigger
      class="flex min-w-0 items-center gap-2 rounded-md px-1.5 py-1.5 text-left text-[14px] font-medium hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <CompanyIcon :name="session.company.name" :image-url="session.company.image_url" :size="20" />
      <span class="min-w-0 truncate">{{ session.company.name }}</span>
      <ChevronsUpDown class="size-4 shrink-0 text-muted-foreground" />
    </DropdownMenuTrigger>
    <MenuContent class="w-64">
      <DropdownMenuLabel class="px-2 py-1.5 text-[12px] text-muted-foreground">{{ t('top.companies') }}</DropdownMenuLabel>
      <template v-if="session.internalCompany">
        <MenuItem @select="pick(session.internalCompany.id)">
          <CompanyIcon :name="session.internalCompany.name" :image-url="session.internalCompany.image_url" :size="20" />
          <span class="min-w-0 truncate">{{ session.internalCompany.name }}</span>
          <Badge class="ml-auto">{{ t('top.internalBadge') }}</Badge>
          <Check v-if="session.internalCompany.id === session.company.id" />
        </MenuItem>
        <DropdownMenuSeparator v-if="session.clientCompanies.length" class="-mx-1 my-1 h-px bg-border" />
      </template>
      <MenuItem v-for="clientCompany in session.clientCompanies" :key="clientCompany.id" @select="pick(clientCompany.id)">
        <CompanyIcon :name="clientCompany.name" :image-url="clientCompany.image_url" :size="20" />
        <span class="min-w-0 truncate">{{ clientCompany.name }}</span>
        <Check v-if="clientCompany.id === session.company.id" class="ml-auto" />
      </MenuItem>
    </MenuContent>
  </DropdownMenuRoot>
</template>
