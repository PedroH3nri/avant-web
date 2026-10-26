<script setup lang="ts">
/** Trocar a senha: a sessão atual continua e as outras caem. */
import { computed, ref } from 'vue'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { accountService } from '@/modules/account/service'

const emit = defineEmits<{ changed: [] }>()
const current = ref('')
const password = ref('')
const password2 = ref('')
const wrong = ref(false)
const busy = ref(false)
const short = computed(() => password.value.length > 0 && password.value.length < 10)
const mismatch = computed(() => password2.value.length > 0 && password.value !== password2.value)
const ready = computed(() => current.value && password.value && !short.value && password.value === password2.value)

/** Troca a senha depois de conferir a atual. */
async function submit() {
  if (!ready.value) return
  busy.value = true
  wrong.value = false
  try {
    await accountService.changePassword({
      current_password: current.value,
      new_password: password.value,
    })
    current.value = password.value = password2.value = ''
    toast.success(t('pw.done'))
    emit('changed')
  } catch (error) {
    const code = error instanceof ApiError ? error.code : 'unknown'
    if (code === 'invalid_credentials') wrong.value = true
    else toast.error(errorText(code))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <Card :title="t('pw.title')" :desc="t('pw.desc')">
    <form id="pw-form" class="grid max-w-[360px] gap-4" @submit.prevent="submit">
      <Field id="pw-current" :label="t('pw.current')" :error="wrong && t('pw.wrong')">
        <Input id="pw-current" v-model="current" type="password" autocomplete="current-password" :invalid="wrong" @input="wrong = false" />
      </Field>
      <Field id="pw-new" :label="t('pw.new')" :hint="t('invite.pwHint')" :error="short && t('invite.pwShort', { n: password.length })">
        <Input id="pw-new" v-model="password" type="password" autocomplete="new-password" :invalid="short" />
      </Field>
      <Field id="pw-new2" :label="t('invite.pw2')" :error="mismatch && t('invite.pwMismatch')">
        <Input id="pw-new2" v-model="password2" type="password" autocomplete="new-password" :invalid="mismatch" />
      </Field>
    </form>
    <template #footer>
      <Button type="submit" form="pw-form" :loading="busy" :disabled="!ready">{{ t('pw.submit') }}</Button>
    </template>
  </Card>
</template>
