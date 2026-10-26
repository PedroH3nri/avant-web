<script setup lang="ts">
/** Ligar ou desligar o login com Google. Ligar sai do painel e volta em ?google=ligado ou ?erro=. */
import { onMounted, ref } from 'vue'
import { toast } from 'vue-sonner'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import GoogleG from '@/components/GoogleG.vue'
import { API, ApiError } from '@/lib/api'
import { errorText, t } from '@/lib/i18n'
import type { GoogleStatus } from '@/modules/account/types'
import { useSession } from '@/stores/session'
import { accountService } from '@/modules/account/service'

const session = useSession()
const status = ref<GoogleStatus | null>(null)
const confirm = ref(false)
const busy = ref(false)
const linkUrl = `${API}/auth/google/start?mode=link`

/** Carrega se o login com Google está disponível e ligado. */
async function load() {
  try {
    status.value = await accountService.googleStatus()
  } catch {
    status.value = null
  }
}
onMounted(load)
defineExpose({ load })

/** Desliga a conta Google. */
async function unlink() {
  busy.value = true
  try {
    await accountService.unlinkGoogle()
    confirm.value = false
    toast.success(t('g.removed'))
    await load()
  } catch (error) {
    toast.error(errorText(error instanceof ApiError ? error.code : 'unknown'))
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <Card
    v-if="status"
    :title="t('g.title')"
    :desc="!status.available ? t('g.unavailable') : status.linked ? t('g.descOn') : t('g.descOff', { email: session.me?.user.email ?? '' })"
  >
    <Badge v-if="status.linked">{{ t('g.linked') }}</Badge>
    <template v-if="status.available" #footer>
      <Button v-if="status.linked" variant="destructive" @click="confirm = true">{{ t('g.unlink') }}</Button>
      <a
        v-else
        :href="linkUrl"
        class="inline-flex h-9 items-center gap-2 rounded-md border bg-background px-4 text-[14px] font-medium hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        ><GoogleG class="size-4" />{{ t('g.link') }}</a
      >
    </template>
  </Card>
  <ConfirmDialog
    v-model:open="confirm"
    :title="t('g.unlinkTitle')"
    :desc="t('g.unlinkDesc')"
    :action="t('g.unlink')"
    :busy="busy"
    @confirm="unlink"
  />
</template>
