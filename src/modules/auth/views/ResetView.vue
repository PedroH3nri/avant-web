<script setup lang="ts">
/** Tela para definir a nova senha pelo link do email. */
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import AuthFrame from '@/layouts/AuthFrame.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { useSession } from '@/stores/session'
import { authService } from '@/modules/auth/service'

const route = useRoute()
const router = useRouter()
const session = useSession()
const password = ref('')
const password2 = ref('')
const mfa = ref('')
const busy = ref(false)
const error = ref<string | null>(null)
const short = computed(() => password.value.length > 0 && password.value.length < 10)
const mismatch = computed(() => password2.value.length > 0 && password.value !== password2.value)

/** Grava a nova senha. */
async function submit() {
  busy.value = true
  error.value = null
  try {
    await authService.resetPassword({
      token: String(route.params.token),
      password: password.value,
      mfa_code: mfa.value.trim() || null,
    })
    session.set(null)
    toast.success(t('reset.done'))
    await router.push('/entrar')
  } catch (failure) {
    error.value = failure instanceof ApiError ? errorText(failure.code, { s: failure.retryAfter ?? 60 }) : errorText('unknown')
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <AuthFrame>
    <h1 class="text-[28px] font-semibold tracking-[-0.03em]">{{ t('reset.title') }}</h1>
    <p class="mt-2 text-[14px] text-muted-foreground">{{ t('reset.sub') }}</p>
    <form class="mt-8 grid gap-4" @submit.prevent="submit">
      <Field id="reset-pw" :label="t('login.password')" :hint="t('invite.pwHint')" :error="short && t('invite.pwShort', { n: password.length })">
        <Input id="reset-pw" v-model="password" type="password" autocomplete="new-password" :invalid="short" />
      </Field>
      <Field id="reset-pw2" :label="t('invite.pw2')" :error="mismatch && t('invite.pwMismatch')">
        <Input id="reset-pw2" v-model="password2" type="password" autocomplete="new-password" :invalid="mismatch" />
      </Field>
      <Field id="reset-mfa" :label="t('reset.mfa')">
        <Input id="reset-mfa" v-model="mfa" class="font-mono tnum" inputmode="numeric" autocomplete="one-time-code" maxlength="16" />
      </Field>
      <p v-if="error" class="text-[13px] text-bad" role="alert">{{ error }}</p>
      <Button type="submit" size="form" :loading="busy" :disabled="!password || short || mismatch || password !== password2">{{
        t('reset.submit')
      }}</Button>
    </form>
  </AuthFrame>
</template>
