<script setup lang="ts">
import { computed } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const button = cva(
  'inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-[14px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline: 'border bg-background hover:bg-accent',
        ghost: 'hover:bg-accent',
        destructive: 'text-bad hover:bg-bad-soft',
        danger: 'bg-bad text-white hover:bg-bad/90',
        link: 'h-auto px-0 text-link underline-offset-[3px] hover:underline',
      },
      size: {
        default: 'h-9 px-4',
        sm: 'h-8 px-3 text-[13px]',
        form: 'h-10 px-4',
        lg: 'h-12 px-5 text-[15px]',
        icon: 'h-9 w-9',
      },
    },
    // Link é texto: sem a altura e o recuo dos tamanhos.
    compoundVariants: [{ variant: 'link', class: 'h-auto px-0' }],
    defaultVariants: { variant: 'default', size: 'default' },
  },
)
type Props = VariantProps<typeof button>

const props = withDefaults(
  defineProps<{
    variant?: Props['variant']
    size?: Props['size']
    type?: 'button' | 'submit'
    loading?: boolean
    disabled?: boolean
    class?: string
  }>(),
  { type: 'button' },
)
const classes = computed(() => cn(button({ variant: props.variant, size: props.size }), props.class))
</script>

<template>
  <button :type="type" :class="classes" :disabled="disabled || loading" :aria-busy="loading || undefined">
    <Loader2 v-if="loading" class="animate-spin" aria-hidden="true" />
    <slot />
  </button>
</template>
