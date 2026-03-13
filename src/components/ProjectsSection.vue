<script setup>
import { ref, computed } from 'vue'

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
    // Scroll to the newly revealed projects smoothly
    setTimeout(() => {
      const firstNewProject = document.querySelector('.project-item-popup')
      if (firstNewProject) {
        firstNewProject.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }
    }, 100)
  }
}
</script>

<template>
  <section id="projects" class="relative rounded-3xl border border-slate-200 bg-white px-6 py-10 transition-colors dark:border-slate-800/70 dark:bg-slate-950/80 sm:px-10">
    <div class="mb-6 flex items-center justify-between gap-4">
      <div>
        <h2 class="text-lg font-semibold tracking-tight text-slate-900 transition-colors dark:text-slate-50 sm:text-xl">Selected Projects</h2>
        <p class="text-sm text-slate-600 transition-colors dark:text-slate-400">A few pieces of work that represent how I think and build.</p>
      </div>
      <!-- <span class="hidden text-xs text-slate-500 transition-colors dark:text-slate-500 sm:inline">More available on request</span> -->
    </div>

    <div class="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="(project, index) in displayedProjects"
        :key="project.name"
        :class="[
          'group relative flex flex-col overflow-hidden rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-5 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-primary-400/80 hover:shadow-2xl hover:shadow-primary-500/20 dark:border-slate-800/70 dark:from-slate-900/90 dark:via-slate-950 dark:to-slate-950/95 dark:shadow-slate-950/80 dark:hover:border-primary-500/60 dark:hover:shadow-[0_32px_100px_rgba(15,23,42,0.95)]',
          index >= initialCount && showAll ? 'project-item-popup' : ''
        ]"
        :style="index >= initialCount && showAll ? { animationDelay: `${(index - initialCount) * 0.1}s` } : {}"
      >
        <div
          class="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-500/20 blur-3xl transition-transform duration-500 group-hover:translate-y-3 group-hover:translate-x-3"
        ></div>

        <h3 class="mb-2 text-sm font-semibold tracking-tight text-slate-900 transition-colors dark:text-slate-50">
          {{ project.name }}
        </h3>

        <p class="mb-4 text-xs leading-relaxed text-slate-600 transition-colors dark:text-slate-300">
          {{ project.description }}
        </p>

        <ul class="mb-4 flex flex-wrap gap-2">
          <li
            v-for="tag in project.stack"
            :key="tag"
            class="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-700 transition-colors dark:bg-slate-900/80 dark:text-slate-200"
          >
            {{ tag }}
          </li>
        </ul>

        <div class="mt-auto flex items-center justify-between pt-2 text-xs text-slate-500 transition-colors dark:text-slate-400">
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="group/github inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-3 py-1.5 text-[11px] font-medium tracking-[0.16em] uppercase text-slate-700 transition hover:border-primary-400/80 hover:bg-slate-100 hover:text-primary-600 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:text-primary-100"
          >
            <svg
              class="h-4 w-4 transition-transform group-hover/github:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            View On GitHub

          </a>
        </div>
      </article>
    </div>

    <div v-if="hasMoreProjects" class="mt-8 flex justify-center">
      <button
        @click="toggleShowMore"
        class="group inline-flex items-center gap-2 rounded-full border-2 border-primary-500/80 bg-primary-500/10 px-6 py-3 text-sm font-semibold tracking-wide text-primary-600 shadow-lg shadow-primary-500/20 transition-all duration-300 hover:scale-105 hover:bg-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/80 focus-visible:ring-offset-2 dark:bg-primary-500/20 dark:text-primary-300 dark:hover:bg-primary-500/30 focus-visible:ring-offset-slate-950"
      >
        <span>{{ showAll ? 'Show Less' : 'See More' }}</span>
        <i
          :class="[
            'fas transition-transform duration-300',
            showAll ? 'fa-chevron-up' : 'fa-chevron-down',
            'group-hover:translate-y-0.5'
          ]"
        ></i>
      </button>
    </div>
  </section>
</template>

<style scoped>
.project-item-popup {
  animation: popupFadeIn 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

@keyframes popupFadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
