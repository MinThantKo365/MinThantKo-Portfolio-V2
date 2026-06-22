<script setup>
import SectionHeader from './ui/SectionHeader.vue'
import TiltCard from './ui/TiltCard.vue'

const props = defineProps({
  skills: {
    type: Array,
    default: () => [
      {
        category: 'Programming Languages',
        items: ['PHP', 'Python', 'JavaScript', 'C# (basic)'],
        level: 85,
        icon: 'fa-code',
      },
      {
        category: 'Web Technologies',
        items: ['Laravel', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Vue.js'],
        level: 90,
        icon: 'fa-globe',
      },
      {
        category: 'Databases & Tools',
        items: ['MySQL', 'VS Code', 'Cursor', 'Git / GitHub', 'Cisco Packet Tracer (basic)', 'StarUML'],
        level: 80,
        icon: 'fa-database',
      },
      {
        category: 'Operating Systems',
        items: ['Windows', 'Linux (basic)'],
        level: 75,
        icon: 'fa-server',
      },
    ],
  },
})

const categoryIcons = {
  'Programming Languages': 'fa-code',
  'Web Technologies': 'fa-globe',
  'Databases & Tools': 'fa-database',
  'Operating Systems': 'fa-server',
}

const categoryLevels = {
  'Programming Languages': 85,
  'Web Technologies': 90,
  'Databases & Tools': 80,
  'Operating Systems': 75,
}
</script>

<template>
  <section id="skills" class="glass-card glow-border relative px-6 py-10 sm:px-10">
    <SectionHeader
      title="Skills & Tech Stack"
      subtitle="A snapshot of the tools and technologies I work with daily."
      badge="Always learning & iterating"
    />

    <div class="skills-scroll stagger-children md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      <TiltCard v-for="group in skills" :key="group.category">
        <article
          class="reveal glow-border group relative overflow-hidden rounded-2xl border border-primary-500/20 bg-white/40 p-6 transition-all duration-300 hover:border-primary-500/40 hover:shadow-glow dark:bg-brand-surface/40"
        >
          <div
            class="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary-500/10 blur-2xl transition-opacity group-hover:opacity-100"
          ></div>

          <div class="mb-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/15 text-primary-600 dark:text-primary-300"
              >
                <i :class="['fas', categoryIcons[group.category] || 'fa-layer-group']"></i>
              </div>
              <h3 class="text-sm font-semibold text-brand-text-light dark:text-brand-text-dark">{{ group.category }}</h3>
            </div>
            <div class="relative h-12 w-12">
              <svg class="h-12 w-12 -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(57,167,255,0.15)" stroke-width="3" />
                <circle
                  cx="18"
                  cy="18"
                  r="15.5"
                  fill="none"
                  stroke="url(#skillGradient)"
                  stroke-width="3"
                  stroke-linecap="round"
                  :stroke-dasharray="`${(categoryLevels[group.category] || 80) * 0.97} 100`"
                  class="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#3D7A52" />
                    <stop offset="100%" stop-color="#C4622D" />
                  </linearGradient>
                </defs>
              </svg>
              <span class="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-primary-600 dark:text-primary-300">
                {{ categoryLevels[group.category] }}%
              </span>
            </div>
          </div>

          <div class="skill-progress mb-4">
            <div
              class="skill-progress-bar"
              :style="{ width: `${categoryLevels[group.category]}%` }"
            ></div>
          </div>

          <ul class="flex flex-wrap gap-2">
            <li
              v-for="item in group.items"
              :key="item"
              class="skill-chip"
            >
              {{ item }}
            </li>
          </ul>
        </article>
      </TiltCard>
    </div>
  </section>
</template>

<style scoped>
.skills-scroll {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.skills-scroll::-webkit-scrollbar {
  display: none;
}

.skills-scroll > * {
  flex-shrink: 0;
  min-width: 300px;
  scroll-snap-align: start;
}

@media (min-width: 768px) {
  .skills-scroll {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow: visible;
    padding-bottom: 0;
  }

  .skills-scroll > * {
    min-width: unset;
  }
}
</style>
