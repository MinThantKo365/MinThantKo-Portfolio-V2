<script setup>
import SectionHeader from './ui/SectionHeader.vue'
import CounterStat from './ui/CounterStat.vue'

defineProps({
  stats: {
    type: Array,
    default: () => [
      { label: 'Projects Completed', value: 20, icon: 'fa-code', suffix: '+' },
      { label: 'Years of IT Experience', value: 4, icon: 'fa-briefcase', suffix: '+' },
      { label: 'Job Experiences', value: 2, icon: 'fa-graduation-cap', suffix: '+' },
      { label: 'Technologies Skilled', value: 9, icon: 'fa-layer-group', suffix: '+' },
    ],
  },
})
</script>

<template>
  <section id="achievements" class="relative">
    <SectionHeader
      title="Highlights"
      subtitle="Key numbers that reflect my journey so far."
      badge="At a Glance"
    />

    <div class="stagger-children grid gap-px border border-[color:var(--color-border)] bg-[color:var(--color-border)] sm:grid-cols-2 lg:grid-cols-4">
      <article
        v-for="stat in stats"
        :key="stat.label"
        class="stat-panel reveal group relative p-6 text-center transition-colors duration-300 sm:p-7"
      >
        <div
          class="mx-auto mb-4 flex h-11 w-11 items-center justify-center border border-[color:var(--color-border)] text-[color:var(--color-primary)] transition-colors group-hover:border-[color:var(--color-accent)] group-hover:text-[color:var(--color-accent)]"
        >
          <i :class="['fas', stat.icon, 'text-base']"></i>
        </div>
        <p class="font-display text-3xl font-semibold tracking-tight text-[color:var(--color-text)] sm:text-4xl">
          <CounterStat :end="stat.value" :suffix="stat.suffix || ''" />
        </p>
        <p class="mt-2 text-sm text-[color:var(--color-muted)]">{{ stat.label }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.stat-panel {
  background: var(--color-card);
}

.stat-panel:hover {
  background: color-mix(in srgb, var(--color-card) 85%, var(--color-primary) 10%);
}
</style>
