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

async function load() {
  loadError.value = null
  try {
    sessions.value = await api.get<AuthSession[]>('/auth/sessions')
  } catch (e) {
    loadError.value = errorText(e instanceof ApiError ? e.code : 'unknown')
  }
}
onMounted(load)
defineExpose({ load })

function label(s: AuthSession) {
  const d = device(s.user_agent)
  if (d.browser && d.os) return t('ses.on', { browser: d.browser, os: d.os })
  return d.browser ?? d.os ?? t('ses.unknown')
}

const fail = (e: unknown) => toast.error(errorText(e instanceof ApiError ? e.code : 'unknown'))

async function end(s: AuthSession) {
  ending.value = s.id
  try {
    await api.delete(`/auth/sessions/${s.id}`)
    sessions.value = sessions.value?.filter((x) => x.id !== s.id) ?? null
    toast.success(t('ses.ended'))
  } catch (e) {
    fail(e)
  } finally {
    ending.value = null
  }
}

async function endOthers() {
  endingOthers.value = true
  try {
    const { revoked } = await api.post<{ revoked: number }>('/auth/sessions/revoke-others')
    sessions.value = sessions.value?.filter((x) => x.current) ?? null
    toast.success(t('ses.endedN', { n: revoked }))
  } catch (e) {
    fail(e)
  } finally {
    endingOthers.value = false
  }
}
</script>

<template>
  <Card :title="t('ses.title')" :desc="t('ses.desc')">
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <ul v-else-if="sessions" class="-my-3 divide-y">
      <li v-for="s in sessions" :key="s.id" class="flex flex-wrap items-center gap-x-4 gap-y-1 py-3">
        <div class="min-w-0 flex-1">
          <div class="flex flex-wrap items-center gap-2 text-[14px] font-medium">
            {{ label(s) }}<Badge v-if="s.current">{{ t('ses.current') }}</Badge>
          </div>
          <div class="mt-0.5 text-[13px] text-muted-foreground">
            <span v-if="s.ip" class="font-mono">{{ s.ip }}</span
            ><span v-if="s.ip"> · </span>{{ t('ses.lastSeen') }}
            <time :datetime="s.last_seen_at" :title="formatDate(s.last_seen_at)">{{ formatAgo(s.last_seen_at) }}</time>
            · {{ t('ses.started') }}
            {{ formatDate(s.created_at) }}
          </div>
        </div>
        <Button
          v-if="!s.current"
          variant="outline"
          size="sm"
          :loading="ending === s.id"
          :aria-label="t('ses.endLabel', { device: label(s) })"
          @click="end(s)"
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
