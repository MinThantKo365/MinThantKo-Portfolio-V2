<script setup>
defineProps({
  socials: {
    type: Array,
    default: () => [
      { label: 'Facebook', href: 'https://www.facebook.com/share/19dpo7BhMU/?mibextid=wwXIfr' },
      { label: 'GitHub', href: 'https://github.com/MinThantKo365' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/min-thant-ko-05549a35a/' },
      { label: 'Telegram', href: 'https://t.me/MTK365' },
    ],
  },
})
</script>

<template>
  <footer class="reveal mt-8 border-t border-[color:var(--color-border)] pt-8">
    <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="font-display text-lg font-semibold">Min Thant Ko</p>
        <p class="mt-2 max-w-md text-sm text-[color:var(--color-muted)]">
          © {{ new Date().getFullYear() }} — Full Stack Developer crafting reliable digital systems.
        </p>
      </div>

      <nav class="flex flex-wrap gap-x-5 gap-y-2" aria-label="Social links">
        <a
          v-for="item in socials"
          :key="item.label"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-muted)] transition-colors hover:text-[color:var(--color-accent)]"
          data-cursor="link"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>
  </footer>
</template>
