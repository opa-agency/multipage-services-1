<template>
  <div class="relative">
    <HeroPattern />
    
    <div class="mx-auto max-w-2xl">
      <h1 class="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
        API Documentation
      </h1>
      <p class="mt-6 text-base/7 text-zinc-600 dark:text-zinc-400">
        Use the Protocol API to access contacts, conversations, group messages, and more and seamlessly integrate your product into the workflows of dozens of devoted Protocol users.
      </p>

      <div class="mt-6 mb-16 flex gap-3">
        <Button to="/quickstart" arrow="right">Quickstart</Button>
        <Button to="/sdks" variant="outline">Explore SDKs</Button>
      </div>

      <h2 class="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
        Getting started
      </h2>
      <p class="mt-4 text-base/7 text-zinc-600 dark:text-zinc-400">
        To get started, create a new application in your developer settings, then read about how to make requests for the resources you need to access using our HTTP APIs or dedicated client SDKs. When your integration is ready to go live, publish it to our integrations directory to reach the Protocol community.
      </p>

      <div class="mt-4">
        <Button variant="text" arrow="right" href="#">Get your API key</Button>
      </div>

      <Guides />
      <Resources />
    </div>
  </div>
</template>

<script setup>
import HeroPattern from '../components/HeroPattern.vue'
import Button from '../components/Button.vue'
import Guides from '../components/Guides.vue'
import Resources from '../components/Resources.vue'
</script>
