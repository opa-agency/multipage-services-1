<template>
  <svg viewBox="0 0 20 20" aria-hidden="true" v-bind="$attrs">
    <path
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m10 5.5-7.5-3v12l7.5 3m0-12 7.5-3v12l-7.5 3m0-12v12"
    />
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m17.5 2.5-7.5 3v12l7.5-3v-12Z"
    />
  </svg>
</template>

<script setup>
defineOptions({ inheritAttrs: false })
</script>
