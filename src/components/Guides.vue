<template>
  <div class="my-16">
    <h2 class="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-8">
      Guides
    </h2>
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-2">
      <div
        v-for="guide in guides"
        :key="guide.title"
        class="group relative flex flex-col gap-6 rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800"
      >
        <component :is="guide.icon" class="h-8 w-8 fill-zinc-700 dark:fill-zinc-400" />
        <div>
          <h3 class="text-base font-semibold text-zinc-900 dark:text-white">
            {{ guide.title }}
          </h3>
          <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {{ guide.description }}
          </p>
        </div>
        <Button variant="text" arrow="right" :to="guide.href">Read more</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { markRaw } from 'vue'
import Button from './Button.vue'
import UserIcon from './icons/UserIcon.vue'
import ListIcon from './icons/ListIcon.vue'
import BellIcon from './icons/BellIcon.vue'
import EnvelopeIcon from './icons/EnvelopeIcon.vue'

const guides = [
  {
    href: '/authentication',
    title: 'Authentication',
    description: 'Learn how to authenticate your API requests.',
    icon: markRaw(UserIcon),
  },
  {
    href: '/pagination',
    title: 'Pagination',
    description: 'Understand how to work with paginated responses.',
    icon: markRaw(ListIcon),
  },
  {
    href: '/errors',
    title: 'Errors',
    description: 'Read about the different types of errors returned by the API.',
    icon: markRaw(BellIcon),
  },
  {
    href: '/webhooks',
    title: 'Webhooks',
    description: 'Learn how to programmatically configure webhooks for your app.',
    icon: markRaw(EnvelopeIcon),
  },
]
</script>
