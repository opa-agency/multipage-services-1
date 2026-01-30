<template>
  <svg aria-hidden="true" v-bind="$attrs">
    <defs>
      <pattern
        :id="patternId"
        :width="width"
        :height="height"
        patternUnits="userSpaceOnUse"
        :x="x"
        :y="y"
      >
        <path :d="`M.5 ${height}V.5H${width}`" fill="none" />
      </pattern>
    </defs>
    <rect
      width="100%"
      height="100%"
      :stroke-width="0"
      :fill="`url(#${patternId})`"
    />
    <svg v-if="squares" :x="x" :y="y" class="overflow-visible">
      <rect
        v-for="[sx, sy] in squares"
        :key="`${sx}-${sy}`"
        stroke-width="0"
        :width="width + 1"
        :height="height + 1"
        :x="sx * width"
        :y="sy * height"
      />
    </svg>
  </svg>
</template>

<script setup>
import { useId } from 'vue'

defineProps({
  width: Number,
  height: Number,
  x: Number,
  y: Number,
  squares: Array
})

defineOptions({ inheritAttrs: false })

const patternId = useId()
</script>
