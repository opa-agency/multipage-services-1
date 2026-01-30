<template>
  <nav :class="className">
    <ul role="list">
      <template v-for="(group, groupIndex) in navigation" :key="group.title">
        <li :class="groupIndex === 0 ? 'md:mt-0' : 'relative mt-6'">
          <h2 class="text-xs font-semibold text-zinc-900 dark:text-white px-4">
            {{ group.title }}
          </h2>
          <div class="relative mt-3 pl-2">
            <div class="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5" />
            <ul role="list" class="border-l border-transparent">
              <li v-for="link in group.links" :key="link.href" class="relative">
                <router-link
                  :to="link.href"
                  :aria-current="$route.path === link.href ? 'page' : undefined"
                  class="flex justify-between gap-2 py-1 pr-3 pl-4 text-sm transition"
                  :class="
                    $route.path === link.href
                      ? 'text-zinc-900 dark:text-white'
                      : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                  "
                >
                  <span class="truncate">{{ link.title }}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script setup>
import { navigation } from '../lib/navigation.js'

defineProps({
  className: String
})
</script>
