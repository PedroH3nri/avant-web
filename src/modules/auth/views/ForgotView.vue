<script setup lang="ts">
/** Tela para pedir o link de nova senha. */
import { ref } from 'vue'
import Button from '@/components/ui/Button.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import AuthFrame from '@/layouts/AuthFrame.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { authService } from '@/modules/auth/service'

const email = ref('')
const busy = ref(false)
const sent = ref<string | null>(null)
const error = ref<string | null>(null)

/** Pede o link de nova senha para o email. */
async function submit() {
  busy.value = true
  error.value = null
  try {
    await authService.forgotPassword(email.value.trim())
    sent.value = email.value.trim()
  } catch (failure) {
    error.value = failure instanceof ApiError ? errorText(failure.code, { s: failure.retryAfter ?? 60 }) : errorText('unknown')
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <AuthFrame>
    <h1 class="text-[28px] font-semibold tracking-[-0.03em]">{{ t('forgot.title') }}</h1>
    <p class="mt-2 text-[14px] text-muted-foreground">{{ t('forgot.sub') }}</p>
    <p v-if="sent" class="mt-8 rounded-lg border bg-card p-4 text-[14px]" role="status">{{ t('forgot.sent', { email: sent }) }}</p>
    <form v-else class="mt-8 grid gap-4" @submit.prevent="submit">
      <Field id="forgot-email" :label="t('login.email')" :error="error">
        <Input id="forgot-email" v-model="email" type="email" autocomplete="email" :invalid="!!error" />
      </Field>
      <Button type="submit" size="form" :loading="busy" :disabled="!email.includes('@')">{{ t('forgot.submit') }}</Button>
    </form>
    <RouterLink to="/entrar" class="mt-6 block text-center text-[14px] text-link hover:underline">{{ t('forgot.back') }}</RouterLink>
  </AuthFrame>
</template>
