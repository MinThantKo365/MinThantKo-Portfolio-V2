<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import SectionHeader from './ui/SectionHeader.vue'
import TiltCard from './ui/TiltCard.vue'
import MagneticButton from './ui/MagneticButton.vue'

const props = defineProps({
  projects: {
    type: Array,
    default: () => [
      {
        name: 'Tours & Travel Website',
        description:
          'A Laravel-based tours and travel platform with role-based access, middleware, bookings, payment system, and MySQL integration.',
        stack: ['Laravel', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'MySQL'],
        link: 'https://github.com/MinThantKo365/Tour-Travel-Website',
      },
      {
        name: 'M-hike Android App',
        description:
          'A Kotlin hiking application with hike history, hiking plans, observations, and database integration.',
        stack: ['Kotlin', 'Android', 'Database'],
        link: 'https://github.com/MinThantKo365/m-hike-Kotlin',
      },
      {
        name: 'Cooking Recipes Website',
        description:
          'Laravel recipes website with role-based access, middleware, bookmarks, and MySQL-backed content.',
        stack: ['Laravel', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'MySQL'],
        link: 'https://github.com/MinThantKo365/Cooking-Recipes-Website',
      },
      {
        name: 'Moonvale University Website',
        description:
          'Group project website with Laravel, role-based access, middleware, CRUD operations, and MySQL integration, where I focused mainly on backend development.',
        stack: ['Laravel', 'HTML', 'CSS', 'Bootstrap', 'MySQL'],
        link: 'https://github.com/MoonvaleUniversity/MagazineContributionBackend',
      },
      {
        name: 'Tea Sine Order Management',
        description:
          'Order management system using Laravel and Vue.js with role-based access, middleware, payment system, and MySQL integration, designed heavily with AI assistance.',
        stack: ['Laravel', 'Vue.js', 'HTML', 'CSS', 'Bootstrap', 'MySQL'],
        link: 'https://github.com/MinThantKo365/Tea-Sine',
      },
      {
        name: 'POS Website',
        description:
          'Point of Sale (POS) system built with Laravel developed by following a CodeLab tutorial, implementing role-based access, middleware, payment system, and MySQL database.',
        stack: ['Laravel', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'MySQL'],
        link: 'https://github.com/MinThantKo365/POS',
      },
      {
        name: 'E-commerce Website',
        description:
          'E‑commerce platform built with Laravel, implementing role-based access, middleware, payment system, and MySQL database.',
        stack: ['Laravel', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'MySQL'],
        link: 'https://github.com/MinThantKo365/ecommerce',
      },
      {
        name: 'Retail Camping Company Website',
        description:
          'Responsive frontend-only website for a camping retail company using modern HTML, CSS, and JavaScript.',
        stack: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://github.com/MinThantKo365/Retail-Camping-Company',
      },
      {
        name: 'IT Product & Service Center Database',
        description:
          'MySQL database design with relationships, normalization, and triggers for an IT product and service center system.',
        stack: ['MySQL', 'Database Design'],
        link: 'https://github.com/MinThantKo365/IT-Product-and-Service-Center-MySQL-Project-',
      },
      {
        name: 'News Website Using API',
        description:
          'Dynamic news website built with PHP, HTML, CSS, JavaScript, and MySQL, consuming APIs across most pages.',
        stack: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'APIs'],
        link: 'https://github.com/MinThantKo365/News-Website-Using-API',
      },
      {
        name: 'Sportswear Collection Website',
        description:
          'Responsive showcase site for a sportswear collection created with HTML, CSS, and JavaScript.',
        stack: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://github.com/MinThantKo365/Sportswear-Collection-Website',
      },
    ],
  },
})

const showAll = ref(false)
const initialCount = 6

const displayedProjects = computed(() => {
  return showAll.value ? props.projects : props.projects.slice(0, initialCount)
})

const hasMoreProjects = computed(() => {
  return props.projects.length > initialCount
})

const toggleShowMore = () => {
  showAll.value = !showAll.value
  if (showAll.value) {
    setTimeout(() => {
      const firstNewProject = document.querySelector('.project-item-popup')
      if (firstNewProject) {
        firstNewProject.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }
    }, 100)
  }
}

const projectGradients = [
  'from-primary-500/20 to-primary-300/10',
  'from-primary-600/20 to-primary-400/10',
  'from-primary-400/20 to-primary-200/10',
  'from-primary-700/15 to-primary-500/10',
]
</script>

<template>
  <section id="projects" class="glass-card glow-border relative px-6 py-10 sm:px-10">
    <SectionHeader
      title="Selected Projects"
      subtitle="A few pieces of work that represent how I think and build."
    />

    <div class="stagger-children grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <TiltCard
        v-for="(project, index) in displayedProjects"
        :key="project.name"
        :strength="index < 2 ? 8 : 10"
      >
        <article
          :class="[
            'reveal glow-border group relative flex flex-col overflow-hidden rounded-2xl border border-primary-500/20 bg-white/40 transition-all duration-300 hover:border-primary-500/40 hover:shadow-glow dark:bg-brand-surface/40',
            index < 2 ? 'lg:col-span-1' : '',
            index >= initialCount && showAll ? 'project-item-popup' : '',
          ]"
          :style="index >= initialCount && showAll ? { animationDelay: `${(index - initialCount) * 0.1}s` } : {}"
        >
          <!-- Project image placeholder with gradient -->
          <div
            class="relative h-36 overflow-hidden border-b border-primary-500/10"
            :class="`bg-gradient-to-br ${projectGradients[index % projectGradients.length]}`"
          >
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm dark:bg-black/20">
                <i class="fas fa-code text-2xl text-primary-600 dark:text-primary-300"></i>
              </div>
            </div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-brand-surface/80"
            ></div>
          </div>

          <div class="flex flex-1 flex-col p-5">
            <h3
              class="mb-2 text-sm font-semibold text-brand-text-light transition-colors dark:text-brand-text-dark"
              :class="index < 2 ? 'text-base' : ''"
            >
              {{ project.name }}
            </h3>

            <p class="mb-4 flex-1 text-xs leading-relaxed text-brand-text-light/70 dark:text-brand-text-dark/70">
              {{ project.description }}
            </p>

            <ul class="mb-4 flex flex-wrap gap-1.5">
              <li
                v-for="tag in project.stack"
                :key="tag"
                class="rounded-full border border-primary-500/15 bg-primary-500/8 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-brand-text-light/70 dark:text-brand-text-dark/70"
              >
                {{ tag }}
              </li>
            </ul>

            <div class="mt-auto flex items-center pt-2">
              <a
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="group/github inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-700 transition-all hover:border-primary-500/60 hover:bg-primary-500/20 hover:shadow-glow dark:text-primary-300"
                data-cursor="link"
              >
                <svg class="h-4 w-4 transition-transform group-hover/github:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View On GitHub
              </a>
            </div>
          </div>
        </article>
      </TiltCard>
    </div>

    <div v-if="hasMoreProjects" class="mt-8 flex justify-center">
      <MagneticButton tag="button" class="btn-secondary !px-8" @click="toggleShowMore">
        <span>{{ showAll ? 'Show Less' : 'See More' }}</span>
        <i :class="['fas transition-transform duration-300', showAll ? 'fa-chevron-up' : 'fa-chevron-down']"></i>
      </MagneticButton>
    </div>
  </section>
</template>
