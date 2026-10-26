<script setup lang="ts">
/** Tela de login com email e senha (ou Google). */
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import GoogleG from '@/components/GoogleG.vue'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import AuthFrame from '@/layouts/AuthFrame.vue'
import { API, ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { safeNext } from '@/lib/nav'
import { useSession } from '@/stores/session'

const session = useSession()
const route = useRoute()
const router = useRouter()
const email = ref('')
const password = ref('')
const busy = ref(false)
// A volta do Google chega com ?erro=<code>.
const error = ref<string | null>(typeof route.query.erro === 'string' ? errorText(route.query.erro) : null)
const next = computed(() => safeNext(route.query.next))

/** Entra com email e senha; com 2FA segue para o código. */
async function submit() {
  if (!email.value.trim() || !password.value) return
  busy.value = true
  error.value = null
  try {
    const result = await session.login(email.value.trim(), password.value)
    await router.push(result.mfa_required ? { path: '/entrar/2fa', query: { next: next.value } } : next.value)
  } catch (failure) {
    error.value = failure instanceof ApiError ? errorText(failure.code, { s: failure.retryAfter ?? 60 }) : errorText('unknown')
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <AuthFrame>
    <h1 class="text-center text-[28px] font-semibold tracking-[-0.03em]">{{ t('login.title') }}</h1>
    <div class="mt-8 grid gap-3">
      <a
        :href="`${API}/auth/google/start`"
        class="inline-flex h-12 items-center justify-center gap-2 rounded-md border bg-background text-[15px] font-medium hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        ><GoogleG />{{ t('login.google') }}</a
      >
    </div>
    <div class="my-6 flex items-center gap-3 text-[13px] text-muted-foreground">
      <span class="h-px flex-1 bg-border" />{{ t('login.or') }}<span class="h-px flex-1 bg-border" />
    </div>
    <form class="grid gap-3" novalidate @submit.prevent="submit">
      <Input v-model="email" :aria-label="t('login.email')" :placeholder="t('login.email')" class="h-12 text-[15px]" type="email" autocomplete="email" required />
      <Input
        v-model="password"
        :aria-label="t('login.password')"
        :placeholder="t('login.password')"
        class="h-12 text-[15px]"
        type="password"
        autocomplete="current-password"
        required
      />
      <p v-if="error" class="text-[13px] text-bad" role="alert">{{ error }}</p>
      <Button type="submit" size="lg" :loading="busy" :disabled="!email.trim() || !password">{{ t('login.submit') }}</Button>
    </form>
    <div class="mt-6 grid gap-2 text-center text-[14px]">
      <RouterLink to="/esqueci-a-senha" class="text-link hover:underline focus-visible:underline focus-visible:outline-none">{{ t('login.forgot') }}</RouterLink>
      <p class="text-muted-foreground">{{ t('login.noaccount') }}</p>
    </div>
  </AuthFrame>
</template>
