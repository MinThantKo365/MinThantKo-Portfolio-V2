<script setup>
import { ref, onMounted } from 'vue'
import SectionHeader from './ui/SectionHeader.vue'
import CounterStat from './ui/CounterStat.vue'

const counterDuration = ref(1200)

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    counterDuration.value = 1
  }
})

defineProps({
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
</script>

<template>
  <section id="skills" class="skills-section glass-card glow-border relative overflow-hidden px-4 py-8 sm:px-8 sm:py-10 lg:px-10">
    <SectionHeader
      title="Skills & Tech Stack"
      subtitle="A snapshot of the tools and technologies I work with daily."
      badge="Always learning & iterating"
    />

    <div class="skills-grid stagger-children">
      <article
        v-for="group in skills"
        :key="group.category"
        class="skills-panel reveal group"
      >
        <div class="skills-panel-body">
          <header class="skills-panel-header">
            <div class="skills-panel-title">
              <div class="skills-panel-icon">
                <i :class="['fas', group.icon || 'fa-layer-group']"></i>
              </div>
              <h3 class="skills-panel-name">{{ group.category }}</h3>
            </div>
            <span class="skills-level-badge">
              <CounterStat :end="group.level" suffix="%" :duration="counterDuration" />
            </span>
          </header>

          <div class="skills-meter" role="progressbar" :aria-valuenow="group.level" aria-valuemin="0" aria-valuemax="100">
            <div class="skills-meter-track">
              <div class="skills-meter-fill" :style="{ '--target': `${group.level}%` }"></div>
            </div>
          </div>

          <ul class="skills-tags">
            <li v-for="item in group.items" :key="item" class="skill-chip">
              {{ item }}
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;
}

@media (min-width: 640px) {
  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
  }
}

.skills-panel {
  position: relative;
  display: flex;
  min-width: 0;
  overflow: hidden;
  border-radius: 1.25rem;
  border: 1px solid rgba(196, 98, 45, 0.22);
  background: rgba(255, 252, 247, 0.72);
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.dark .skills-panel {
  border-color: rgba(232, 185, 35, 0.2);
  background: rgba(30, 43, 36, 0.55);
}

.theme-monochrome .skills-panel {
  border-color: rgba(212, 212, 212, 0.2);
  background: rgba(23, 23, 23, 0.72);
}

.skills-panel:hover {
  border-color: rgba(196, 98, 45, 0.45);
  box-shadow: 0 12px 32px rgba(26, 36, 32, 0.08);
  transform: translateY(-2px);
}

.dark .skills-panel:hover {
  border-color: rgba(232, 185, 35, 0.38);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.28);
}

.skills-panel-body {
  min-width: 0;
  flex: 1;
  padding: 1rem;
}

@media (min-width: 640px) {
  .skills-panel-body {
    padding: 1.25rem;
  }
}

.skills-panel-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.85rem;
}

.skills-panel-title {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  min-width: 0;
}

.skills-panel-icon {
  display: flex;
  height: 2.25rem;
  width: 2.25rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  background: rgba(61, 122, 82, 0.14);
  color: #2D5A3D;
  font-size: 0.95rem;
}

.dark .skills-panel-icon {
  background: rgba(107, 175, 132, 0.16);
  color: #A8D1B8;
}

.theme-monochrome .skills-panel-icon {
  background: rgba(163, 163, 163, 0.18);
  color: #E5E5E5;
}

.skills-panel-name {
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.35;
  color: #1A2420;
  word-break: break-word;
}

.dark .skills-panel-name {
  color: #EDF5F0;
}

.skills-level-badge {
  flex-shrink: 0;
  border-radius: 9999px;
  border: 1px solid rgba(196, 98, 45, 0.35);
  background: rgba(196, 98, 45, 0.1);
  padding: 0.2rem 0.55rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #C4622D;
  font-variant-numeric: tabular-nums;
}

.dark .skills-level-badge {
  border-color: rgba(232, 185, 35, 0.35);
  background: rgba(232, 185, 35, 0.12);
  color: #E8B923;
}

.theme-monochrome .skills-level-badge {
  border-color: rgba(212, 212, 212, 0.35);
  background: rgba(163, 163, 163, 0.12);
  color: #F5F5F5;
}

.skills-meter {
  margin-bottom: 0.9rem;
}

.skills-meter-track {
  height: 0.4rem;
  overflow: hidden;
  border-radius: 9999px;
  background: rgba(61, 122, 82, 0.12);
}

.dark .skills-meter-track {
  background: rgba(168, 209, 184, 0.14);
}

.theme-monochrome .skills-meter-track {
  background: rgba(163, 163, 163, 0.2);
}

.skills-meter-fill {
  width: 0;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #3D7A52, #C4622D);
  box-shadow: 0 0 10px rgba(61, 122, 82, 0.25);
  transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.skills-panel.revealed .skills-meter-fill {
  width: var(--target);
}

.dark .skills-meter-fill {
  background: linear-gradient(90deg, #6BAF84, #E8B923);
  box-shadow: 0 0 10px rgba(107, 175, 132, 0.22);
}

.theme-monochrome .skills-meter-fill {
  background: linear-gradient(90deg, #A3A3A3, #F5F5F5);
  box-shadow: none;
}

.skills-tags {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.45rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

@media (min-width: 480px) {
  .skills-tags {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.skills-tags .skill-chip {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2rem;
  text-align: center;
  line-height: 1.2;
  word-break: break-word;
}

@media (prefers-reduced-motion: reduce) {
  .skills-meter-fill {
    width: var(--target);
    transition: none;
  }
}
</style>
