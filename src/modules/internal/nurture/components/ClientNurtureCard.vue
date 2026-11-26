<script setup lang="ts">
/** O card "Nutrição" da página do cliente: a régua em que ele está e os e-mails que recebeu. */
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import LoadError from '@/components/LoadError.vue'
import Status from '@/components/ui/Status.vue'
import { ApiError } from '@/lib/api'
import { errorText, formatDate, t } from '@/lib/i18n'
import { SEND_LABEL, SEND_TONE } from '@/modules/internal/nurture/rules'
import { nurtureService } from '@/modules/internal/nurture/service'
import type { NurtureClient } from '@/modules/internal/nurture/types'

const props = defineProps<{ clientId: string }>()
const router = useRouter()
const found = ref<NurtureClient | null>(null)
const loadError = ref<string | null>(null)

/** Carrega a nutrição do cliente. */
async function load() {
  loadError.value = null
  try {
    found.value = await nurtureService.client(props.clientId)
  } catch (error) {
    loadError.value = errorText(error instanceof ApiError ? error.code : 'unknown')
  }
}

/** O que falta na régua atual: o próximo e-mail ou nenhum. */
function pending(card: NurtureClient) {
  const current = card.current
  if (!current || current.next_email >= card.current_total || !current.next_send_at) return t('nurture.noPending')
  return t('nurture.nextEmail', { n: current.next_email + 1, when: formatDate(current.next_send_at, false) })
}

onMounted(load)
</script>

<template>
  <Card :title="t('nurture.title')" :desc="t('nurture.clientDesc')">
    <LoadError v-if="loadError" :message="loadError" @retry="load" />
    <template v-else-if="found">
      <div class="flex flex-wrap items-center gap-2 text-[14px]">
        <Status v-if="!found.subscribed" tone="bad">{{ t('nurture.member.unsubscribed') }}</Status>
        <template v-else-if="found.current">
          <Status tone="ochre">{{ t('nurture.inRule', { name: found.current_rule ?? '' }) }}</Status>
          <span class="text-muted-foreground">{{ t('nurture.since', { when: formatDate(found.current.entered_at, false) }) }} · {{ pending(found) }}</span>
        </template>
        <span v-else class="text-muted-foreground">{{ t('nurture.outOfRules') }}</span>
      </div>
      <ul v-if="found.history.length" class="mt-4 divide-y border-t">
        <li v-for="send in found.history" :key="send.id" class="flex flex-wrap items-start justify-between gap-2 py-3 text-[13px]">
          <div>
            <div>{{ t('nurture.historyLine', { rule: send.rule_name, n: send.email_index + 1, to: send.to_email }) }}</div>
            <div class="tnum text-muted-foreground">{{ formatDate(send.sent_at ?? send.created_at) }}</div>
          </div>
          <Status :tone="SEND_TONE[send.status]">{{ t(SEND_LABEL[send.status]) }}</Status>
        </li>
      </ul>
      <p v-else class="mt-4 text-[13px] text-muted-foreground">{{ t('nurture.noHistory') }}</p>
    </template>
    <template #footer>
      <Button size="sm" variant="outline" @click="router.push('/interno/nutricao')">{{ t('nurture.seeRules') }}</Button>
    </template>
  </Card>
</template>
