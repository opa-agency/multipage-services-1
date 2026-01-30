<template>
  <div :class="{ dark: isDark }" class="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Layout from './components/Layout.vue'

const isDark = ref(false)

onMounted(() => {
  // Check localStorage first, then system preference
  const saved = localStorage.getItem('theme')
  if (saved) {
    isDark.value = saved === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  
  // Apply initial theme
  applyTheme(isDark.value)
  
  // Listen for theme changes from ThemeToggle
  window.addEventListener('theme-toggle', (e) => {
    isDark.value = e.detail.isDark
  })
})

const applyTheme = (dark) => {
  if (dark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>
