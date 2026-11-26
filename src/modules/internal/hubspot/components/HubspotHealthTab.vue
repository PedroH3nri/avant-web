<script setup lang="ts">
/** Aba Saúde e onboarding: as propriedades `avant_*` de saúde no contato do HubSpot, com a chave para enviar ou não cada uma. */
import { computed } from 'vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import DataTable from '@/components/ui/DataTable.vue'
import Switch from '@/components/ui/Switch.vue'
import { t } from '@/lib/i18n'
import { td, th } from '@/lib/table'
import { HEALTH_GROUP_LABEL, healthGroup, healthLabel } from '@/modules/internal/hubspot/rules'
import type { HubspotHealthProperty } from '@/modules/internal/hubspot/types'

const props = defineProps<{ properties: HubspotHealthProperty[]; canRun: boolean; dirty: boolean; saving: boolean }>()
const emit = defineEmits<{ save: [] }>()
const enabled = defineModel<Record<string, boolean>>({ required: true })
const rows = computed(() => props.properties.map((property) => ({ ...property, label: healthLabel(property), group: healthGroup(property.name) })))

/** Liga ou desliga o envio da propriedade. */
function toggle(name: string, on: boolean) {
  enabled.value = { ...enabled.value, [name]: on }
}
</script>

<template>
  <Card :title="t('hsh.title')" :desc="t('hsh.desc')" :footer-note="t('hsh.footer')">
    <div class="-mx-6 -my-2">
      <DataTable :min="640">
        <thead>
          <tr>
            <th :class="th">{{ t('hsh.col.group') }}</th>
            <th :class="th">{{ t('hsh.col.property') }}</th>
            <th :class="th">{{ t('hsh.col.name') }}</th>
            <th :class="[th, 'text-right']">{{ t('hsh.col.send') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.name" :class="['hover:bg-muted', enabled[row.name] ? '' : 'text-muted-foreground']">
            <td :class="td"><Badge>{{ t(HEALTH_GROUP_LABEL[row.group]) }}</Badge></td>
            <td :class="[td, 'font-medium']">{{ row.label }}</td>
            <td :class="td"><code class="font-mono text-[13px]">{{ row.name }}</code></td>
            <td :class="[td, 'text-right']">
              <Switch :model-value="enabled[row.name] ?? true" :label="row.label" :disabled="!canRun" @update:model-value="(on: boolean) => toggle(row.name, on)" />
            </td>
          </tr>
        </tbody>
      </DataTable>
    </div>
    <template v-if="canRun" #footer>
      <Button :disabled="!dirty" :loading="saving" @click="emit('save')">{{ t('hst.save') }}</Button>
    </template>
  </Card>
</template>
