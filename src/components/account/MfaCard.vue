<script setup lang="ts">
/**
 * 2FA: ativar (QR code, código, códigos de recuperação), gerar novos códigos e desligar.
 * A equipe Groone não pode desligar; a API recusaria com mfa_required.
 */
import { computed, ref } from 'vue'
import { toast } from 'vue-sonner'
import QRCode from 'qrcode'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Dialog from '@/components/ui/Dialog.vue'
import Field from '@/components/ui/Field.vue'
import Input from '@/components/ui/Input.vue'
import RecoveryCodes from '@/components/account/RecoveryCodes.vue'
import { api, ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import type { MfaSetup, RecoveryCodes as Codes } from '@/lib/types'
import { useSession } from '@/stores/session'

type Mode = 'setup' | 'regen' | 'disable'

const session = useSession()
const enabled = computed(() => session.me?.mfa_enabled ?? false)
const open = ref(false)
const mode = ref<Mode>('setup')
const setup = ref<MfaSetup | null>(null)
const qr = ref('')
const code = ref('')
const codeError = ref<string | null>(null)
const codes = ref<string[] | null>(null)
const busy = ref(false)

const title = computed(() =>
  codes.value ? t('rec.title') : mode.value === 'setup' ? t('mfa2.enable') : mode.value === 'regen' ? t('mfa2.newCodes') : t('mfa2.disable'),
)
const desc = computed(() =>
  codes.value ? t('rec.desc') : mode.value === 'regen' ? t('mfa2.newCodesDesc') : mode.value === 'disable' ? t('mfa2.disableDesc') : undefined,
)
// Na ativação o app dá 6 dígitos; nos outros casos também vale um código de recuperação.
const codeOk = computed(() => (mode.value === 'setup' ? /^\d{6}$/.test(code.value.trim()) : code.value.trim().length >= 6))

function fail(e: unknown) {
  const c = e instanceof ApiError ? e.code : 'unknown'
  if (c === 'invalid_mfa_code') codeError.value = errorText(c)
  else toast.error(errorText(c))
}

async function start(m: Mode) {
  mode.value = m
  code.value = ''
  codeError.value = null
  codes.value = null
  setup.value = null
  if (m === 'setup') {
    busy.value = true
    try {
      setup.value = await api.post<MfaSetup>('/auth/mfa/setup')
      qr.value = await QRCode.toDataURL(setup.value.uri, {
        margin: 1,
        width: 176,
      })
    } catch (e) {
      fail(e)
      return
    } finally {
      busy.value = false
    }
  }
  open.value = true
}

async function submit() {
  if (!codeOk.value) return
  busy.value = true
  codeError.value = null
  const body = { code: code.value.trim() }
  try {
    if (mode.value === 'setup') {
      codes.value = (await api.post<Codes>('/auth/mfa/confirm', body)).recovery_codes
      toast.success(t('mfa2.enabled'))
      await session.load()
    } else if (mode.value === 'regen') {
      codes.value = (await api.post<Codes>('/auth/mfa/recovery-codes', body)).recovery_codes
    } else {
      await api.delete('/auth/mfa', body)
      open.value = false
      toast.success(t('mfa2.disabled'))
      await session.load()
    }
  } catch (e) {
    fail(e)
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <Card :title="t('mfa2.title')" :desc="enabled ? t('mfa2.descOn') : t('mfa2.descOff')">
    <Badge :tone="enabled ? 'neutral' : 'ochre'">{{ enabled ? t('mfa2.on') : t('mfa2.off') }}</Badge>
    <template v-if="enabled && session.me?.is_staff" #note>{{ t('mfa2.staffNote') }}</template>
    <template #footer>
      <template v-if="enabled">
        <Button variant="outline" @click="start('regen')">{{ t('mfa2.newCodes') }}</Button>
        <Button v-if="!session.me?.is_staff" variant="destructive" @click="start('disable')">{{ t('mfa2.disable') }}</Button>
      </template>
      <Button v-else :loading="busy && !open" @click="start('setup')">{{ t('mfa2.enable') }}</Button>
    </template>
  </Card>

  <Dialog v-model:open="open" :title="title" :desc="desc" class="max-w-[520px]">
    <RecoveryCodes v-if="codes" :codes="codes" />
    <form v-else id="mfa-form" class="grid gap-5" @submit.prevent="submit">
      <div v-if="mode === 'setup' && setup" class="grid gap-3">
        <h3 class="text-[14px] font-medium">{{ t('mfa2.step1') }}</h3>
        <div class="flex flex-wrap items-center gap-4">
          <img :src="qr" :alt="t('mfa2.qrAlt')" width="176" height="176" class="rounded-md border bg-white" />
          <div class="min-w-0 flex-1 text-[13px] text-muted-foreground">
            {{ t('mfa2.manual') }}
            <code class="mt-1.5 block break-all rounded bg-muted px-2 py-1.5 font-mono text-[13px] text-foreground">{{ setup.secret }}</code>
          </div>
        </div>
      </div>
      <Field
        id="mfa-code"
        :label="mode === 'setup' ? t('mfa2.step2') : t('mfa.code')"
        :hint="mode === 'setup' ? undefined : t('mfa2.codeAsk')"
        :error="codeError"
      >
        <Input
          id="mfa-code"
          v-model="code"
          class="max-w-[200px] font-mono tracking-[0.1em]"
          :inputmode="mode === 'setup' ? 'numeric' : 'text'"
          autocomplete="one-time-code"
          maxlength="16"
          :invalid="!!codeError"
          @input="codeError = null"
        />
      </Field>
    </form>
    <template #footer>
      <Button v-if="codes" @click="open = false">{{ t('rec.done') }}</Button>
      <template v-else>
        <Button variant="outline" @click="open = false">{{ t('common.cancel') }}</Button>
        <Button type="submit" form="mfa-form" :variant="mode === 'disable' ? 'danger' : 'default'" :loading="busy" :disabled="!codeOk">
          {{ mode === 'setup' ? t('mfa2.confirm') : mode === 'regen' ? t('mfa2.generate') : t('mfa2.disable') }}
        </Button>
      </template>
    </template>
  </Dialog>
</template>
