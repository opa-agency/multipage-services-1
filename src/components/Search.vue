<template>
  <div class="group relative flex md:flex-auto">
    <input
      type="search"
      placeholder="Find something..."
      aria-label="Search"
      class="flex-auto appearance-none bg-transparent pl-10 text-zinc-900 outline-none placeholder:text-zinc-500 focus:w-full focus:flex-none dark:text-white sm:text-sm [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden"
    />
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 stroke-zinc-500"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m13 13 4.5 4.5m-9-3a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z"
      />
    </svg>
  </div>
</template>

<script setup>
</script>
