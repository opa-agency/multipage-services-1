<template>
  <div class="my-16">
    <h2 class="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-8">
      Resources
    </h2>
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-2">
      <div
        v-for="resource in resources"
        :key="resource.title"
        class="group relative flex flex-col gap-6 rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800"
      >
        <component :is="resource.icon" class="h-8 w-8 fill-zinc-700 dark:fill-zinc-400" />
        <div>
          <h3 class="text-base font-semibold text-zinc-900 dark:text-white">
            {{ resource.title }}
          </h3>
          <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {{ resource.description }}
          </p>
        </div>
        <Button variant="text" arrow="right" :to="resource.href">Read more</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { markRaw } from 'vue'
import Button from './Button.vue'
import UserIcon from './icons/UserIcon.vue'
import ChatBubbleIcon from './icons/ChatBubbleIcon.vue'
import EnvelopeIcon from './icons/EnvelopeIcon.vue'
import UsersIcon from './icons/UsersIcon.vue'
import PaperClipIcon from './icons/PaperClipIcon.vue'

const resources = [
  {
    href: '/contacts',
    title: 'Contacts',
    description: 'Manage contacts and their details.',
    icon: markRaw(UserIcon),
  },
  {
    href: '/conversations',
    title: 'Conversations',
    description: 'Access and manage conversations.',
    icon: markRaw(ChatBubbleIcon),
  },
  {
    href: '/messages',
    title: 'Messages',
    description: 'Send and receive messages.',
    icon: markRaw(EnvelopeIcon),
  },
  {
    href: '/groups',
    title: 'Groups',
    description: 'Work with group messaging.',
    icon: markRaw(UsersIcon),
  },
  {
    href: '/attachments',
    title: 'Attachments',
    description: 'Handle file attachments.',
    icon: markRaw(PaperClipIcon),
  },
]
</script>
