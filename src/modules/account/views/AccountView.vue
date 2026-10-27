<script setup lang="ts">
/**
 * Minha conta (/configuracoes/conta). A equipe Groone sem 2FA cai aqui e só vê senha, 2FA e
 * sessões: as outras rotas da API recusam até o 2FA ser ativado.
 */
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { ShieldAlert } from 'lucide-vue-next'
import AccentCard from '@/modules/account/components/AccentCard.vue'
import ApiKeysCard from '@/modules/account/components/ApiKeysCard.vue'
import CurrencyCard from '@/modules/account/components/CurrencyCard.vue'
import GoogleCard from '@/modules/account/components/GoogleCard.vue'
import MfaCard from '@/modules/account/components/MfaCard.vue'
import PasswordCard from '@/modules/account/components/PasswordCard.vue'
import ProfileImageCard from '@/modules/account/components/ProfileImageCard.vue'
import SessionsCard from '@/modules/account/components/SessionsCard.vue'
import ThemeCard from '@/modules/account/components/ThemeCard.vue'
import LangSwitch from '@/components/LangSwitch.vue'
import PageBody from '@/components/PageBody.vue'
import PageHeader from '@/components/PageHeader.vue'
import Card from '@/components/ui/Card.vue'
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

    <template v-if="!session.me?.mfa_setup_required">
      <h2 class="text-[13px] font-medium text-muted-foreground">
        {{ t('photo.title') }}
      </h2>
      <ProfileImageCard />
    </template>

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

    <template v-if="!session.me?.mfa_setup_required">
      <h2 class="text-[13px] font-medium text-muted-foreground">
        {{ t('acc.preferences') }}
      </h2>
      <CurrencyCard />

      <h2 class="text-[13px] font-medium text-muted-foreground">
        {{ t('set.appearance') }}
      </h2>
      <AccentCard />
      <ThemeCard />
      <Card :title="t('set.language')" :desc="t('set.langDesc')">
        <LangSwitch class="max-w-[360px]" />
      </Card>
    </template>
  </PageBody>
</template>
