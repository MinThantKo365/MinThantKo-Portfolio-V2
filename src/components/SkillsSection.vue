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
        items: ['PHP', 'Python', 'JavaScript', 'C# (basic)', 'Kotlin', 'React Native'],
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
        category: 'Databases Management',
        items: ['MySQL', 'PostgreSQL'],
        level: 85,
        icon: 'fa-database',
      },
      {
        category: 'Cloud & AWS',
        items: ['AWS Cloud Computing', 'EC2', 'S3', 'IAM', 'VPC', 'Cloud fundamentals'],
        level: 70,
        icon: 'fa-cloud',
      },
      {
        category: 'Tools',
        items: ['VS Code', 'Cursor', 'Git / GitHub', 'Cisco Packet Tracer', 'StarUML', 'Axure RP', 'Figma'],
        level: 80,
        icon: 'fa-tools',
      },
      {
        category: 'AI Model Training',
        items: ['Python', 'PyTorch', 'Transformers', 'Tensorflow', 'FastAPI'],
        level: 70,
        icon: 'fa-ai',
      },
    ],
  },
})
</script>

<template>
  <section id="skills" class="skills-section relative">
    <SectionHeader
      title="Skills"
      subtitle="Tools and crafts I keep sharp in day-to-day work."
      badge="Arsenal"
    />

    <div class="skills-grid stagger-children">
      <article
        v-for="group in skills"
        :key="group.category"
        class="skills-panel reveal group"
      >
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
      </article>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1px;
  border: 1px solid var(--color-border);
  background: var(--color-border);
}

@media (min-width: 640px) {
  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.skills-panel {
  min-width: 0;
  background: var(--color-card);
  padding: 1.25rem;
  transition: background 0.3s ease;
}

@media (min-width: 640px) {
  .skills-panel {
    padding: 1.5rem;
  }
}

.skills-panel:hover {
  background: color-mix(in srgb, var(--color-card) 80%, var(--color-primary) 8%);
}

.skills-panel-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.skills-panel-title {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  min-width: 0;
}

.skills-panel-icon {
  display: flex;
  height: 2.25rem;
  width: 2.25rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border);
  color: var(--color-primary);
  font-size: 0.9rem;
}

.skills-panel-name {
  font-family: Fraunces, Georgia, serif;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.3;
  color: var(--color-text);
}

.skills-level-badge {
  flex-shrink: 0;
  border: 1px solid rgba(154, 107, 63, 0.4);
  padding: 0.2rem 0.55rem;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--color-accent);
  font-variant-numeric: tabular-nums;
}

.dark .skills-level-badge {
  border-color: rgba(196, 165, 116, 0.35);
}

.skills-meter {
  margin-bottom: 1rem;
}

.skills-meter-track {
  height: 2px;
  overflow: hidden;
  background: color-mix(in srgb, var(--color-primary) 18%, transparent);
}

.skills-meter-fill {
  width: 0;
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.skills-panel.revealed .skills-meter-fill {
  width: var(--target);
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

@media (prefers-reduced-motion: reduce) {
  .skills-meter-fill {
    width: var(--target);
    transition: none;
  }
}
</style>
