<script setup lang="ts">
/** Tela de aceite de convite, com conta nova ou logada. */
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import LoadError from '@/components/LoadError.vue'
import AuthFrame from '@/layouts/AuthFrame.vue'
import { api, ApiError } from '@/lib/api'
import { errorText, formatDate, lang, pick, t } from '@/lib/i18n'
import type { InvitationPreview, Me } from '@/lib/types'
import { useSession } from '@/stores/session'

const route = useRoute()
const router = useRouter()
const session = useSession()
const token = String(route.params.token)

const invite = ref<InvitationPreview | null>(null)
const gone = ref(false)
const loadError = ref<string | null>(null)
const name = ref('')
const password = ref('')
const password2 = ref('')
const companyName = ref('')
const busy = ref(false)
const error = ref<string | null>(null)

const owner = computed(() => invite.value?.kind === 'owner')
const short = computed(() => password.value.length > 0 && password.value.length < 10)
const mismatch = computed(() => password2.value.length > 0 && password.value !== password2.value)
const sameEmail = computed(() => session.me?.user.email.toLowerCase() === invite.value?.email.toLowerCase())
const companyOk = computed(() => !owner.value || companyName.value.trim().length >= 2)
const formOk = computed(
  () => name.value.trim() !== '' && password.value.length >= 10 && password.value === password2.value && companyOk.value,
)
const loginLink = computed(() => ({ path: '/entrar', query: { next: route.fullPath } }))

/** Carrega o convite pelo token. */
async function load() {
  loadError.value = null
  try {
    invite.value = await api.get<InvitationPreview>(`/auth/invitations/${encodeURIComponent(token)}`)
    gone.value = invite.value.status !== 'pending'
  } catch (error) {
    if (error instanceof ApiError && ['not_found', 'invalid_token', 'invitation_expired'].includes(error.code)) gone.value = true
    else loadError.value = error instanceof ApiError ? errorText(error.code) : errorText('unknown')
  }
}
onMounted(load)

/** Aceita o convite e entra no painel. */
async function accept() {
  busy.value = true
  error.value = null
  const body: Record<string, unknown> = { locale: lang.value }
  if (!session.me) Object.assign(body, { name: name.value.trim(), password: password.value })
  if (owner.value) body.company = { name: companyName.value.trim() }
  try {
    session.set(await api.post<Me>(`/auth/invitations/${encodeURIComponent(token)}/accept`, body))
    await router.push('/')
  } catch (failure) {
    const code = failure instanceof ApiError ? failure.code : 'unknown'
    if (code === 'invitation_expired' || code === 'invitation_not_pending' || code === 'invalid_token') gone.value = true
    else error.value = errorText(code)
  } finally {
    busy.value = false
  }
}

/** Sai da conta logada para aceitar com outra. */
async function switchAccount() {
  await session.logout()
}
</script>

<template>
  <AuthFrame>
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else-if="gone">
      <h1 class="text-[28px] font-semibold tracking-[-0.03em]">{{ t('invite.gone') }}</h1>
      <p class="mt-2 text-[14px] text-muted-foreground">{{ t('invite.goneSub') }}</p>
      <RouterLink to="/entrar" class="mt-6 block text-[14px] text-link hover:underline">{{ t('forgot.back') }}</RouterLink>
    </template>
    <p v-else-if="!invite" class="text-[14px] text-muted-foreground" role="status">{{ t('common.loading') }}</p>
    <template v-else>
      <h1 class="text-[28px] font-semibold tracking-[-0.03em]">
        {{ owner ? t('invite.titleOwner') : t('invite.title', { company: invite.company_name ?? '' }) }}
      </h1>
      <p class="mt-2 text-[14px] text-muted-foreground">
        {{
          owner
            ? t('invite.owner', { email: invite.email, date: formatDate(invite.expires_at) })
            : t('invite.as', { email: invite.email, role: pick(invite.role_name), date: formatDate(invite.expires_at) })
        }}
      </p>

      <!-- Logado: aceita com a conta atual, se o e-mail for o do convite. -->
      <template v-if="session.me">
        <p class="mt-6 text-[14px]">{{ t('invite.loggedAs', { email: session.me.user.email }) }}</p>
        <p v-if="!sameEmail" class="mt-3 text-[13px] text-bad" role="alert">{{ errorText('invitation_email_mismatch') }}</p>
        <form v-else class="mt-6 grid gap-4" @submit.prevent="accept">
          <Field v-if="owner" id="inv-company" :label="t('company.name')" :hint="t('company.nameHint')">
            <Input id="inv-company" v-model="companyName" maxlength="120" />
          </Field>
          <p v-if="error" class="text-[13px] text-bad" role="alert">{{ error }}</p>
          <Button type="submit" size="form" :loading="busy" :disabled="!companyOk">{{ t('invite.acceptLogged') }}</Button>
        </form>
        <Button variant="link" class="mt-4 px-0" @click="switchAccount">{{ t('invite.switch') }}</Button>
      </template>

      <!-- Já tem conta: entra e volta para cá. -->
      <template v-else-if="invite.account_exists">
        <p class="mt-6 rounded-lg border bg-card p-4 text-[14px]">{{ t('invite.existing') }}</p>
        <RouterLink :to="loginLink" class="mt-4 inline-flex h-11 w-full items-center justify-center rounded-md bg-primary text-[15px] font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          {{ t('invite.signIn') }}
        </RouterLink>
      </template>

      <!-- Conta nova. -->
      <form v-else class="mt-8 grid gap-4" @submit.prevent="accept">
        <Field id="inv-name" :label="t('invite.name')">
          <Input id="inv-name" v-model="name" autocomplete="name" maxlength="120" />
        </Field>
        <Field id="inv-email" :label="t('login.email')">
          <Input id="inv-email" :model-value="invite.email" disabled />
        </Field>
        <Field id="inv-pw" :label="t('login.password')" :hint="t('invite.pwHint')" :error="short && t('invite.pwShort', { n: password.length })">
          <Input id="inv-pw" v-model="password" type="password" autocomplete="new-password" :invalid="short" />
        </Field>
        <Field id="inv-pw2" :label="t('invite.pw2')" :error="mismatch && t('invite.pwMismatch')">
          <Input id="inv-pw2" v-model="password2" type="password" autocomplete="new-password" :invalid="mismatch" />
        </Field>
        <Field v-if="owner" id="inv-company" :label="t('company.name')" :hint="t('company.nameHint')">
          <Input id="inv-company" v-model="companyName" maxlength="120" />
        </Field>
        <p v-if="error" class="text-[13px] text-bad" role="alert">{{ error }}</p>
        <Button type="submit" size="form" :loading="busy" :disabled="!formOk">{{ t('invite.submit') }}</Button>
        <p class="text-[13px] text-muted-foreground">{{ t('invite.google') }}</p>
      </form>
    </template>
  </AuthFrame>
</template>
