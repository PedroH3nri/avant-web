<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import AuthFrame from '@/layouts/AuthFrame.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { safeNext } from '@/lib/nav'
import { useSession } from '@/stores/session'

const session = useSession()
const route = useRoute()
const router = useRouter()
const code = ref('')
const busy = ref(false)
const error = ref<string | null>(null)

async function submit() {
  busy.value = true
  error.value = null
  try {
    await session.verifyMfa(code.value.trim())
    await router.push(safeNext(route.query.next))
  } catch (e) {
    const c = e instanceof ApiError ? e.code : 'unknown'
    if (c === 'mfa_attempts_exceeded' || c === 'not_authenticated') {
      await router.push({ path: '/entrar', query: { erro: c === 'not_authenticated' ? 'mfa_expired' : c } })
      return
    }
    error.value = errorText(c)
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <AuthFrame>
    <h1 class="text-[28px] font-semibold tracking-[-0.03em]">{{ t('mfa.title') }}</h1>
    <p class="mt-2 text-[14px] text-muted-foreground">{{ t('mfa.sub') }}</p>
    <form class="mt-8 grid gap-4" @submit.prevent="submit">
      <Field id="mfa-code" :label="t('mfa.code')" :error="error">
        <Input
          id="mfa-code"
          v-model="code"
          class="h-12 font-mono text-[18px] tracking-[0.2em] tnum"
          inputmode="numeric"
          autocomplete="one-time-code"
          maxlength="16"
          :invalid="!!error"
          autofocus
        />
      </Field>
      <Button type="submit" size="form" :loading="busy" :disabled="code.trim().length < 6">{{ t('mfa.submit') }}</Button>
      <RouterLink to="/entrar" class="text-center text-[14px] text-link hover:underline">{{ t('mfa.back') }}</RouterLink>
    </form>
  </AuthFrame>
</template>
