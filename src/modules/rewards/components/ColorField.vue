<script setup lang="ts">
/** Escolha de cor: amostra que abre o seletor do navegador e o código em hexadecimal ao lado. */
import { ref, watch } from 'vue'
import Field from '@/components/ui/Field.vue'
import { t } from '@/lib/i18n'

const color = defineModel<string>({ required: true })
defineProps<{ id: string; label: string }>()
const text = ref(color.value.slice(1).toUpperCase())

watch(color, (value) => {
  text.value = value.slice(1).toUpperCase()
})

/** Aceita só hexadecimal e troca a cor quando os 6 dígitos estão completos. */
function typed(event: Event) {
  const next = (event.target as HTMLInputElement).value.replace(/[^0-9a-f]/gi, '').slice(0, 6)
  text.value = next.toUpperCase()
  if (next.length === 6) color.value = `#${next.toLowerCase()}`
}

/** Troca a cor pelo seletor do navegador. */
function picked(event: Event) {
  color.value = (event.target as HTMLInputElement).value
}
</script>

<template>
  <Field :id="id" :label="label">
    <div class="flex items-center gap-2">
      <label class="relative size-9 shrink-0 cursor-pointer overflow-hidden rounded-md border" :style="{ background: color }">
        <span class="sr-only">{{ t('rw.colorPick', { label: label.toLowerCase() }) }}</span>
        <input type="color" :value="color" class="absolute inset-0 size-full cursor-pointer opacity-0" @input="picked" />
      </label>
      <div class="relative min-w-0 flex-1">
        <span class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-mono text-[13px] text-muted-foreground">#</span>
        <input
          :id="id"
          :value="text"
          maxlength="6"
          class="flex h-9 w-full rounded-md border border-input bg-background pl-6 pr-3 font-mono text-[13px] uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          @input="typed"
        />
      </div>
    </div>
  </Field>
</template>
