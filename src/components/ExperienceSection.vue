<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SectionHeader from './ui/SectionHeader.vue'

defineProps({
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
  <section id="experience" class="relative">
    <SectionHeader
      title="Work Experience"
      subtitle="Recent chapters along the path."
      badge="Highlights"
    />

    <div ref="timelineRef" class="relative pl-8 sm:pl-12">
      <div class="absolute left-3 top-0 h-full w-px bg-[color:var(--color-border)] sm:left-5"></div>
      <div
        class="timeline-line absolute left-3 sm:left-5"
        :style="{ height: `${lineHeight}px` }"
      ></div>

      <ol class="space-y-8">
        <li v-for="(item, index) in experiences" :key="item.role + item.company">
          <article
            class="reveal group relative border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-5 transition-colors duration-300 hover:border-[color:var(--color-accent)]/50 sm:p-6"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <span
              class="absolute -left-[1.7rem] top-7 h-2.5 w-2.5 border border-[color:var(--color-bg)] bg-[color:var(--color-accent)] sm:-left-[2.2rem]"
            ></span>

            <header class="mb-3 flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 class="font-display text-lg font-semibold text-[color:var(--color-text)]">
                  {{ item.role }}
                </h3>
                <p class="mt-1 text-sm text-[color:var(--color-muted)]">{{ item.company }}</p>
              </div>
              <p class="text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                {{ item.period }}
              </p>
            </header>
            <p class="text-sm leading-relaxed text-[color:var(--color-muted)]">
              {{ item.summary }}
            </p>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>
