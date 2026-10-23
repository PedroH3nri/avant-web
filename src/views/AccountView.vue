<script setup lang="ts">
/**
 * Minha conta (/configuracoes/conta). A equipe Groone sem 2FA cai aqui e só vê senha, 2FA e
 * sessões: as outras rotas da API recusam até o 2FA ser ativado.
 */
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { ShieldAlert } from 'lucide-vue-next'
import ApiKeysCard from '@/components/account/ApiKeysCard.vue'
import GoogleCard from '@/components/account/GoogleCard.vue'
import MfaCard from '@/components/account/MfaCard.vue'
import PasswordCard from '@/components/account/PasswordCard.vue'
import SessionsCard from '@/components/account/SessionsCard.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import { errorText, t } from '@/lib/i18n'
import { useSession } from '@/stores/session'

const session = useSession()
const route = useRoute()
const router = useRouter()
const sessions = ref<InstanceType<typeof SessionsCard> | null>(null)

// Volta do Google ao ligar a conta: avisa e limpa o endereço.
onMounted(() => {
  const { google, erro } = route.query
  if (google === 'ligado') toast.success(t('g.done'))
  else if (typeof erro === 'string' && erro) toast.error(errorText(erro))
  if (google || erro) void router.replace({ query: {} })
})
</script>

<template>
  <PageHeader :title="t('acc.title')" :sub="t('acc.sub')" />
  <PageBody class="[&>*]:max-w-[880px]">
    <div v-if="session.me?.mfa_setup_required" class="flex items-start gap-3 rounded-lg border border-ochre/30 bg-ochre-soft p-4" role="alert">
      <ShieldAlert class="mt-0.5 size-4 shrink-0 text-ochre" aria-hidden="true" />
      <div class="text-[14px]">
        <p class="font-medium">{{ t('acc.setupTitle') }}</p>
        <p class="mt-1 text-muted-foreground">{{ t('acc.setupBody') }}</p>
      </div>
    </div>

    <h2 class="text-[13px] font-medium text-muted-foreground">
      {{ t('acc.security') }}
    </h2>
    <MfaCard />
    <PasswordCard @changed="sessions?.load()" />
    <GoogleCard v-if="!session.me?.mfa_setup_required" />

    <h2 class="text-[13px] font-medium text-muted-foreground">
      {{ t('acc.access') }}
    </h2>
    <SessionsCard ref="sessions" />
    <ApiKeysCard v-if="!session.me?.mfa_setup_required && session.company" />
  </PageBody>
</template>
