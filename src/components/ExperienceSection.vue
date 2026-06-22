<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SectionHeader from './ui/SectionHeader.vue'
import TiltCard from './ui/TiltCard.vue'

const props = defineProps({
  experiences: {
    type: Array,
    default: () => [
      {
        role: 'Junior Web Developer',
        company: 'Global Technology Company · Full-time',
        period: 'Jul 2025 – Present · Yangon, Myanmar · On-site',
        summary:
          'Developing and maintaining web applications as part of a global technology team, contributing to frontend and backend features in an on-site environment.',
      },
      {
        role: 'AI Developer (Internship)',
        company: 'My Day Thu Kywal',
        period: 'Apr 2025 – Jul 2025 · On-site',
        summary:
          'Worked as an AI Developer intern, supporting AI-driven features and tools while collaborating with the engineering team.',
      },
    ],
  },
})

const timelineRef = ref(null)
const lineHeight = ref(0)

const updateTimeline = () => {
  if (!timelineRef.value) return
  const rect = timelineRef.value.getBoundingClientRect()
  const windowHeight = window.innerHeight
  const start = rect.top
  const total = rect.height
  const scrolled = windowHeight * 0.6 - start
  lineHeight.value = Math.max(0, Math.min(scrolled, total))
}

onMounted(() => {
  window.addEventListener('scroll', updateTimeline, { passive: true })
  updateTimeline()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateTimeline)
})
</script>

<template>
  <section id="experience" class="glass-card glow-border relative px-6 py-10 sm:px-10">
    <SectionHeader
      title="Work Experience"
      subtitle="Recent roles and responsibilities."
    />

    <div ref="timelineRef" class="relative pl-8 sm:pl-12">
      <!-- Background line -->
      <div class="absolute left-3 top-0 h-full w-0.5 bg-primary-500/15 sm:left-5"></div>
      <!-- Animated progress line -->
      <div
        class="timeline-line absolute left-3 sm:left-5"
        :style="{ height: `${lineHeight}px` }"
      ></div>

      <ol class="space-y-6">
        <li v-for="(item, index) in experiences" :key="item.role + item.company">
          <TiltCard>
            <article
              class="reveal group relative rounded-2xl border border-primary-500/20 bg-white/40 p-5 transition-all duration-300 hover:border-primary-500/40 hover:shadow-glow dark:bg-brand-surface/40"
              :style="{ transitionDelay: `${index * 100}ms` }"
            >
              <span
                class="absolute -left-[1.65rem] top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 border-brand-bg-light bg-primary-500 shadow-glow dark:border-brand-bg-dark sm:-left-[2.15rem]"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-white"></span>
              </span>

              <header class="mb-2 flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h3 class="text-sm font-semibold text-brand-text-light dark:text-brand-text-dark sm:text-base">
                    {{ item.role }}
                  </h3>
                  <p class="text-xs text-brand-text-light/60 dark:text-brand-text-dark/60">{{ item.company }}</p>
                </div>
                <p class="text-[11px] uppercase tracking-[0.16em] text-primary-600/70 dark:text-primary-300/70">
                  {{ item.period }}
                </p>
              </header>
              <p class="text-sm leading-relaxed text-brand-text-light/75 dark:text-brand-text-dark/75">
                {{ item.summary }}
              </p>
            </article>
          </TiltCard>
        </li>
      </ol>
    </div>
  </section>
</template>
