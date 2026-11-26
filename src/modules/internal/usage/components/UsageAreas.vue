<script setup lang="ts">
/** As áreas mais usadas, com a parte de cada uma nas telas vistas. */
import { computed } from 'vue'
import { t } from '@/lib/i18n'
import { areaLabel, areaShares } from '@/modules/internal/usage/rules'

const props = defineProps<{ areas: Record<string, number> }>()
const shares = computed(() => areaShares(props.areas))
</script>

<template>
  <div>
    <div class="mb-2 text-[13px] font-medium">
      {{ t('usage.areas') }} <span class="font-normal text-muted-foreground">{{ t('usage.areasNote') }}</span>
    </div>
    <ul v-if="shares.length" class="grid gap-2">
      <li v-for="entry in shares" :key="entry.area" class="grid grid-cols-[96px_1fr_40px] items-center gap-2 text-[13px]">
        <span class="truncate">{{ areaLabel(entry.area) }}</span>
        <span class="h-2 overflow-hidden rounded-full bg-muted"><span class="block h-full rounded-full bg-foreground" :style="{ width: `${entry.share}%` }" /></span>
        <span class="text-right tnum text-muted-foreground">{{ entry.share }}%</span>
      </li>
    </ul>
    <p v-else class="text-[13px] text-muted-foreground">{{ t('usage.noScreens') }}</p>
  </div>
</template>
