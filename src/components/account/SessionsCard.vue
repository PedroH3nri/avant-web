<script setup lang="ts">
/** Onde a pessoa está conectada: encerrar uma sessão ou todas as outras. */
import { onMounted, ref } from 'vue'
import { toast } from 'vue-sonner'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import LoadError from '@/components/LoadError.vue'
import { device } from '@/lib/account'
import { api, ApiError } from '@/lib/api'
import { errorText, formatAgo, formatDate, t } from '@/lib/i18n'
import type { AuthSession } from '@/lib/types'

const sessions = ref<AuthSession[] | null>(null)
const loadError = ref<string | null>(null)
const ending = ref<string | null>(null)
const endingOthers = ref(false)

/** Carrega as sessões abertas da pessoa. */
async function load() {
  loadError.value = null
  try {
    sessions.value = await api.get<AuthSession[]>('/auth/sessions')
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}
onMounted(load)
defineExpose({ load })

/** Nome legível do aparelho da sessão. */
function label(session: AuthSession) {
  const deviceInfo = device(session.user_agent)
  if (deviceInfo.browser && deviceInfo.os) return t('ses.on', { browser: deviceInfo.browser, os: deviceInfo.os })
  return deviceInfo.browser ?? deviceInfo.os ?? t('ses.unknown')
}

/** Mostra o erro num aviso. */
const fail = (error: unknown) => toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))

/** Encerra uma sessão. */
async function end(session: AuthSession) {
  ending.value = session.id
  try {
    await api.delete(`/auth/sessions/${session.id}`)
    sessions.value = sessions.value?.filter((other) => other.id !== session.id) ?? null
    toast.success(t('ses.ended'))
  } catch (error) {
    fail(error)
  } finally {
    ending.value = null
  }
}

/** Encerra todas as sessões menos a atual. */
async function endOthers() {
  endingOthers.value = true
  try {
    const { revoked } = await api.post<{ revoked: number }>('/auth/sessions/revoke-others')
    sessions.value = sessions.value?.filter((session) => session.current) ?? null
    toast.success(t('ses.endedN', { n: revoked }))
  } catch (error) {
    fail(error)
  } finally {
    endingOthers.value = false
  }
}
</script>

<template>
  <Card :title="t('ses.title')" :desc="t('ses.desc')">
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <ul v-else-if="sessions" class="-my-3 divide-y">
      <li v-for="session in sessions" :key="session.id" class="flex flex-wrap items-center gap-x-4 gap-y-1 py-3">
        <div class="min-w-0 flex-1">
          <div class="flex flex-wrap items-center gap-2 text-[14px] font-medium">
            {{ label(session) }}<Badge v-if="session.current">{{ t('ses.current') }}</Badge>
          </div>
          <div class="mt-0.5 text-[13px] text-muted-foreground">
            <span v-if="session.ip" class="font-mono">{{ session.ip }}</span
            ><span v-if="session.ip"> · </span>{{ t('ses.lastSeen') }}
            <time :datetime="session.last_seen_at" :title="formatDate(session.last_seen_at)">{{ formatAgo(session.last_seen_at) }}</time>
            · {{ t('ses.started') }}
            {{ formatDate(session.created_at) }}
          </div>
        </div>
        <Button
          v-if="!session.current"
          variant="outline"
          size="sm"
          :loading="ending === session.id"
          :aria-label="t('ses.endLabel', { device: label(session) })"
          @click="end(session)"
          >{{ t('ses.end') }}</Button
        >
      </li>
    </ul>
    <template v-if="sessions" #note>{{ sessions.length <= 1 ? t('ses.onlyThis') : '' }}</template>
    <template v-if="sessions && sessions.length > 1" #footer>
      <Button variant="outline" :loading="endingOthers" @click="endOthers">{{ t('ses.endOthers') }}</Button>
    </template>
  </Card>
</template>
