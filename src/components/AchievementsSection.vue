<script setup>
import SectionHeader from './ui/SectionHeader.vue'
import CounterStat from './ui/CounterStat.vue'
import TiltCard from './ui/TiltCard.vue'

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
  <section id="achievements" class="glass-card glow-border relative px-6 py-10 sm:px-10">
    <SectionHeader
      title="Highlights"
      subtitle="Key numbers that reflect my journey so far."
      badge="At a Glance"
    />

    <div class="stagger-children grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <TiltCard v-for="stat in stats" :key="stat.label">
        <article
          class="reveal group relative overflow-hidden rounded-2xl border border-primary-500/20 bg-white/40 p-6 text-center transition-all duration-300 hover:border-primary-500/40 hover:shadow-glow dark:bg-brand-surface/40"
        >
          <div
            class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/15 text-primary-600 transition-all duration-300 group-hover:bg-primary-500/25 group-hover:shadow-glow dark:text-primary-300"
          >
            <i :class="['fas', stat.icon, 'text-lg']"></i>
          </div>
          <p class="text-3xl font-bold text-brand-text-light dark:text-brand-text-dark">
            <CounterStat :end="stat.value" :suffix="stat.suffix || ''" />
          </p>
          <p class="mt-2 text-sm text-brand-text-light/60 dark:text-brand-text-dark/60">{{ stat.label }}</p>
        </article>
      </TiltCard>
    </div>
  </section>
</template>
