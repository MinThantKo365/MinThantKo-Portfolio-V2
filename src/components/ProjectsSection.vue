<script setup>
import SectionHeader from './ui/SectionHeader.vue'

defineProps({
  hideHeader: { type: Boolean, default: false },
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
</script>

<template>
  <section id="projects" class="relative">
    <SectionHeader
      v-if="!hideHeader"
      title="Selected Projects"
      subtitle="A few pieces of work that represent how I think and build."
    />

    <div class="stagger-children grid gap-px border border-[color:var(--color-border)] bg-[color:var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="(project, index) in projects"
        :key="project.name"
        class="project-card reveal group relative flex flex-col transition-colors duration-300"
      >
        <div class="project-mark relative flex h-28 items-end border-b border-[color:var(--color-border)] p-5">
          <span class="font-display text-4xl font-semibold text-[color:var(--color-primary)]/25 transition-colors group-hover:text-[color:var(--color-accent)]/40">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
        </div>

        <div class="flex flex-1 flex-col p-5">
          <h3 class="mb-2 font-display text-lg font-semibold text-[color:var(--color-text)]">
            {{ project.name }}
          </h3>

          <p class="mb-4 flex-1 text-sm leading-relaxed text-[color:var(--color-muted)]">
            {{ project.description }}
          </p>

          <ul class="mb-5 flex flex-wrap gap-1.5">
            <li
              v-for="tag in project.stack"
              :key="tag"
              class="border border-[color:var(--color-border)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[color:var(--color-muted)]"
            >
              {{ tag }}
            </li>
          </ul>

          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent)] transition-colors hover:text-[color:var(--color-primary)]"
            data-cursor="link"
          >
            <i class="fab fa-github"></i>
            View on GitHub
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.project-card {
  background: var(--color-card);
}

.project-card:hover {
  background: color-mix(in srgb, var(--color-card) 85%, var(--color-primary) 10%);
}
</style>
