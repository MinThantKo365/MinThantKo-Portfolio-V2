<script setup>
import { useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
import MobileMenu from './MobileMenu.vue'

defineProps({
  theme: { type: String, required: true },
})

const emit = defineEmits(['update:theme'])
const route = useRoute()

const navLinks = [
  { name: 'Home', to: '/', match: 'home' },
  { name: 'Projects', to: '/projects', match: 'projects' },
  { name: 'Journey', to: '/journey', match: 'journey' },
  { name: 'Contact', to: '/contact', match: 'contact' },
]

const isActive = (match) => route.name === match
</script>

<template>
  <header class="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
    <div
      class="glass-nav mono-grayscale mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
    >
      <RouterLink to="/" class="group flex items-center gap-3" data-cursor="link">
        <div
          class="flex h-9 w-9 items-center justify-center border border-[color:var(--color-accent)]/40 bg-[color:var(--color-primary)]/15 font-display text-sm font-semibold text-[color:var(--color-primary)] transition-colors group-hover:border-[color:var(--color-accent)] group-hover:text-[color:var(--color-accent)]"
        >
          M
        </div>
        <div class="leading-tight">
          <p class="font-display text-base font-semibold tracking-tight">Min Thant Ko</p>
          <p class="text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-muted)]">Portfolio</p>
        </div>
      </RouterLink>

      <nav class="hidden items-center gap-1 sm:flex" aria-label="Main navigation">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="relative px-3.5 py-2 text-xs font-medium uppercase tracking-[0.16em] transition-colors duration-300"
          :class="
            isActive(link.match)
              ? 'text-[color:var(--color-accent)]'
              : 'text-[color:var(--color-muted)] hover:text-[color:var(--color-text)]'
          "
          data-cursor="link"
        >
          {{ link.name }}
          <span
            v-if="isActive(link.match)"
            class="absolute bottom-0 left-1/2 h-px w-5 -translate-x-1/2 bg-[color:var(--color-accent)]"
          ></span>
        </RouterLink>
      </nav>

      <div class="flex items-center gap-3">
        <div class="hidden sm:block">
          <ThemeToggle :model-value="theme" @update:model-value="emit('update:theme', $event)" />
        </div>
        <MobileMenu
          :theme="theme"
          @update:theme="emit('update:theme', $event)"
        />
      </div>
    </div>
  </header>
</template>
