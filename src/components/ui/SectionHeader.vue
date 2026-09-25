<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  badge: { type: String, default: '' },
})
</script>

<template>
  <div class="reveal mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <p v-if="badge" class="mb-2 text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--color-accent)]">
        {{ badge }}
      </p>
      <h2 class="section-title">{{ title }}</h2>
      <p v-if="subtitle" class="body-text mt-3 max-w-xl text-[color:var(--color-muted)]">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>
