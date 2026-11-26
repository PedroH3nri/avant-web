<script setup lang="ts">
/** O cartão de atendimento: o gerente de conta do cliente, o link de agendamento dele e o WhatsApp da Groone. */
import { computed } from 'vue'
import { CalendarClock } from 'lucide-vue-next'
import Avatar from '@/components/ui/Avatar.vue'
import { t } from '@/lib/i18n'
import WhatsappIcon from '@/modules/help/components/WhatsappIcon.vue'
import { whatsappLink } from '@/modules/help/rules'
import type { SupportContact } from '@/modules/help/types'
import { useSession } from '@/stores/session'

const props = defineProps<{ contact: SupportContact | null }>()
const session = useSession()
const manager = computed(() => props.contact?.manager ?? null)
const whatsapp = computed(() =>
  whatsappLink(props.contact?.whatsapp, t('help.whatsappHello', { name: session.me?.user.name ?? '', company: session.company?.name ?? '' })),
)
const linkClass =
  'inline-flex h-9 items-center gap-2 rounded-md px-4 text-[14px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&_svg]:size-4'
</script>

<template>
  <section class="flex flex-wrap items-center gap-4 rounded-lg border bg-card p-6">
    <Avatar v-if="manager" :name="manager.name" :image-url="manager.image_url" :size="48" />
    <div class="min-w-0 flex-1">
      <template v-if="manager">
        <div class="text-[13px] text-muted-foreground">{{ t('help.managerIs') }}</div>
        <div class="text-[18px] font-semibold tracking-tight">{{ manager.name }}</div>
      </template>
      <div v-else class="text-[18px] font-semibold tracking-tight">{{ t('help.talkToGroone') }}</div>
      <div class="text-[13px] text-muted-foreground">{{ t('help.hours') }}</div>
    </div>
    <div class="flex flex-wrap gap-2">
      <a v-if="manager?.meeting_url" :href="manager.meeting_url" target="_blank" rel="noopener noreferrer" :class="[linkClass, 'border bg-card hover:bg-muted']">
        <CalendarClock aria-hidden="true" />{{ t('help.bookMeeting') }}
      </a>
      <a v-if="whatsapp" :href="whatsapp" target="_blank" rel="noopener noreferrer" :class="[linkClass, 'bg-primary text-primary-foreground hover:bg-primary/90']">
        <WhatsappIcon />{{ t('help.whatsapp') }}
      </a>
    </div>
  </section>
</template>
