<template>
  <component
    :is="componentType"
    :class="buttonClass"
    v-bind="linkProps"
  >
    <svg
      v-if="arrow === 'left'"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      :class="arrowClass"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
      />
    </svg>
    <slot />
    <svg
      v-if="arrow === 'right'"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      :class="arrowClass"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
      />
    </svg>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import clsx from 'clsx'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  },
  arrow: {
    type: String,
    default: null
  },
  href: {
    type: String,
    default: undefined
  },
  to: {
    type: [String, Object],
    default: undefined
  }
})

const variantStyles = {
  primary:
    'rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-1 dark:ring-inset dark:ring-emerald-400/20 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300 dark:hover:ring-emerald-300',
  secondary:
    'rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300',
  filled:
    'rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-400',
  outline:
    'rounded-full py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white',
  text: 'text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500',
}

const buttonClass = computed(() =>
  clsx(
    'inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition',
    variantStyles[props.variant],
  )
)

const arrowClass = computed(() =>
  clsx(
    'mt-0.5 h-5 w-5',
    props.variant === 'text' && 'relative top-px',
    props.arrow === 'left' && '-ml-1 rotate-180',
    props.arrow === 'right' && '-mr-1',
  )
)

const componentType = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})

const linkProps = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) return { href: props.href }
  return {}
})
</script>
