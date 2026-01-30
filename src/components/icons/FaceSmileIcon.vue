<template>
  <svg viewBox="0 0 20 20" aria-hidden="true" v-bind="$attrs">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M10 1.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17Z"
    />
    <path
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M7.5 6.5v2M12.5 6.5v2M5.5 11.5s1 3 4.5 3 4.5-3 4.5-3"
    />
  </svg>
</template>

<script setup>
defineOptions({ inheritAttrs: false })
</script>
