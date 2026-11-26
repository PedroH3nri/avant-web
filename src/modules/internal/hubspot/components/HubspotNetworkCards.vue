<script setup lang="ts">
/** Carrega e mostra a empresa da network e o negócio do contrato no HubSpot, cada um no seu card. */
import { computed, onMounted, ref, watch } from 'vue'
import HubspotRecordCard from '@/modules/internal/hubspot/components/HubspotRecordCard.vue'
import { ApiError } from '@/lib/api'
import { errorText } from '@/lib/i18n'
import { hubspotService } from '@/modules/internal/hubspot/service'
import type { HubspotNetworkCards } from '@/modules/internal/hubspot/types'

const props = defineProps<{ networkId: string }>()

const cards = ref<HubspotNetworkCards | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)
const withDeal = computed(() => loading.value || Boolean(error.value) || Boolean(cards.value?.deal))

/** Lê os cards da network no HubSpot. */
async function load() {
  loading.value = true
  error.value = null
  try {
    cards.value = await hubspotService.network(props.networkId)
  } catch (failure) {
    error.value = errorText(failure instanceof ApiError ? failure.code : 'unknown')
  } finally {
    loading.value = false
  }
}
onMounted(load)
watch(() => props.networkId, load)
</script>

<template>
  <HubspotRecordCard kind="company" :class="withDeal ? '' : 'lg:col-span-2'" :card="cards?.company ?? null" :configured="cards?.configured ?? true" :loading="loading" :error="error" />
  <HubspotRecordCard v-if="withDeal" kind="deal" :card="cards?.deal ?? null" :configured="cards?.configured ?? true" :loading="loading" :error="error" />
</template>
