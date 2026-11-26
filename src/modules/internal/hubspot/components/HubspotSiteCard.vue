<script setup lang="ts">
/** Carrega e mostra o site personalizado no HubSpot; o erro do HubSpot fica no card, sem derrubar a tela. */
import { onMounted, ref, watch } from 'vue'
import HubspotRecordCard from '@/modules/internal/hubspot/components/HubspotRecordCard.vue'
import { ApiError } from '@/lib/api'
import { errorText } from '@/lib/i18n'
import { hubspotService } from '@/modules/internal/hubspot/service'
import type { HubspotSiteCards } from '@/modules/internal/hubspot/types'

const props = defineProps<{ siteId: string; class?: string }>()

const cards = ref<HubspotSiteCards | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

/** Lê o card do site no HubSpot. */
async function load() {
  loading.value = true
  error.value = null
  try {
    cards.value = await hubspotService.site(props.siteId)
  } catch (failure) {
    error.value = errorText(failure instanceof ApiError ? failure.code : 'unknown')
  } finally {
    loading.value = false
  }
}
onMounted(load)
watch(() => props.siteId, load)
</script>

<template>
  <HubspotRecordCard kind="site" :card="cards?.site ?? null" :configured="cards?.configured ?? true" :loading="loading" :error="error" :class="$props.class" />
</template>
