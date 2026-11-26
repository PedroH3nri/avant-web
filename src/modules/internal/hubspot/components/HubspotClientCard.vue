<script setup lang="ts">
/** Carrega e mostra o contato do cliente no HubSpot; o erro do HubSpot fica no card, sem derrubar a tela. */
import { onMounted, ref, watch } from 'vue'
import HubspotRecordCard from '@/modules/internal/hubspot/components/HubspotRecordCard.vue'
import { ApiError } from '@/lib/api'
import { errorText } from '@/lib/i18n'
import { hubspotService } from '@/modules/internal/hubspot/service'
import type { HubspotClientCards } from '@/modules/internal/hubspot/types'

const props = defineProps<{ clientId: string; class?: string }>()

const cards = ref<HubspotClientCards | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

/** Lê o card do cliente no HubSpot. */
async function load() {
  loading.value = true
  error.value = null
  try {
    cards.value = await hubspotService.client(props.clientId)
  } catch (failure) {
    error.value = errorText(failure instanceof ApiError ? failure.code : 'unknown')
  } finally {
    loading.value = false
  }
}
onMounted(load)
watch(() => props.clientId, load)
</script>

<template>
  <HubspotRecordCard kind="contact" :card="cards?.contact ?? null" :configured="cards?.configured ?? true" :loading="loading" :error="error" :class="$props.class" />
</template>
