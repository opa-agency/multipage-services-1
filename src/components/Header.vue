<template>
  <div
    class="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80 backdrop-blur-sm"
    :class="[
      'bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]',
    ]"
    :style="{
      '--bg-opacity-light': '90%',
      '--bg-opacity-dark': '80%',
    }"
  >
    <div
      class="absolute inset-x-0 top-full h-px transition bg-zinc-900/7.5 dark:bg-white/7.5"
    />
    <Search />
    <div class="flex items-center gap-5 lg:hidden">
      <router-link to="/" aria-label="Home">
        <Logo class="h-6" />
      </router-link>
    </div>
    <div class="flex items-center gap-5">
      <nav class="hidden md:block">
        <ul role="list" class="flex items-center gap-8">
          <li>
            <router-link
              to="/"
              class="text-sm/5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              API
            </router-link>
          </li>
          <li>
            <a
              href="#"
              class="text-sm/5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              Documentation
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-sm/5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              Support
            </a>
          </li>
        </ul>
      </nav>
      <div class="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
      <div class="flex gap-4">
        <ThemeToggle />
      </div>
      <div class="hidden min-[416px]:contents">
        <Button href="#">Sign in</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from './Logo.vue'
import Search from './Search.vue'
import ThemeToggle from './ThemeToggle.vue'
import Button from './Button.vue'
</script>
