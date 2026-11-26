<script setup lang="ts">
/** O link de agendamento da pessoa da equipe Groone: o "Marcar uma conversa" da central de ajuda dos clientes dela. */
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import { ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import { accountService } from '@/modules/account/service'
import { useSession } from '@/stores/session'

const session = useSession()
const link = ref(session.me?.user.meeting_url ?? '')
const busy = ref(false)
const unchanged = computed(() => link.value.trim() === (session.me?.user.meeting_url ?? ''))

watch(
  () => session.me?.user.meeting_url,
  (saved) => (link.value = saved ?? ''),
)

/** Grava o link (vazio tira) e atualiza a pessoa da sessão. */
async function save() {
  busy.value = true
  try {
    session.setUser(await accountService.setMeetingUrl(link.value.trim()))
    toast.success(t('meet.saved'))
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <Card :title="t('meet.title')" :desc="t('meet.desc')">
    <Field id="meeting-url" :label="t('meet.label')" :hint="t('meet.hint')" class="max-w-[520px]">
      <Input id="meeting-url" v-model="link" type="url" inputmode="url" :maxlength="300" placeholder="https://meetings.hubspot.com/..." />
    </Field>
    <template #footer>
      <Button :loading="busy" :disabled="unchanged" @click="save">{{ t('meet.save') }}</Button>
    </template>
  </Card>
</template>
