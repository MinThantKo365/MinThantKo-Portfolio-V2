<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  badge: { type: String, default: '' },
})
</script>

<template>
  <div class="reveal mb-8 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <h2 class="section-title gradient-text">{{ title }}</h2>
      <p v-if="subtitle" class="body-text mt-2 text-brand-text-light/70 dark:text-brand-text-dark/70">
        {{ subtitle }}
      </p>
    </div>
    <span
      v-if="badge"
      class="hidden self-start rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-700 dark:text-primary-300 sm:inline-flex"
    >
      {{ badge }}
    </span>
  </div>
</template>
