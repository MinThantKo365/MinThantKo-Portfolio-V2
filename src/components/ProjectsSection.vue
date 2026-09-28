<script setup>
import SectionHeader from './ui/SectionHeader.vue'

defineProps({
  hideHeader: { type: Boolean, default: false },
  projects: {
    type: Array,
    default: () => [
      {
        name: 'Movie Reservation System',
        description:
          'A Laravel backend API for browsing movies, booking seats for showtimes, and managing reservations with admin reporting. Built as a solution to the Movie Reservation System project on roadmap.sh.',
        stack: ['Laravel', 'MySQL'],
        link: 'https://github.com/MinThantKo365/Movie-Reservation-System',
        linkLabel: 'View on GitHub',
        linkIcon: 'fab fa-github',
      },
      {
        name: 'Tours & Travel Website',
        description:
          'A Laravel-based tours and travel platform with role-based access, middleware, bookings, payment system, and MySQL integration.',
        stack: ['Laravel', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'MySQL'],
        link: 'https://github.com/MinThantKo365/Tour-Travel-Website',
        linkLabel: 'View on GitHub',
        linkIcon: 'fab fa-github',
      },
      {
        name: 'M-hike Android App',
        description:
          'A Kotlin hiking application with hike history, hiking plans, observations, and database integration.',
        stack: ['Kotlin', 'Android', 'Database'],
        link: 'https://github.com/MinThantKo365/m-hike-Kotlin',
        linkLabel: 'View on GitHub',
        linkIcon: 'fab fa-github',
      },
      {
        name: 'Cooking Recipes Website',
        description:
          'Laravel recipes website with role-based access, middleware, bookmarks, and MySQL-backed content.',
        stack: ['Laravel', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'MySQL'],
        link: 'https://github.com/MinThantKo365/Cooking-Recipes-Website',
        linkLabel: 'View on GitHub',
        linkIcon: 'fab fa-github',
      },
      {
        name: 'Moonvale University Website',
        description:
          'Group project website with Laravel, role-based access, middleware, CRUD operations, and MySQL integration, where I focused mainly on backend development.',
        stack: ['Laravel', 'HTML', 'CSS', 'Bootstrap', 'MySQL'],
        link: 'https://github.com/MoonvaleUniversity/MagazineContributionBackend',
        linkLabel: 'View on GitHub',
        linkIcon: 'fab fa-github',
      },
      {
        name: 'Tea Sine Order Management',
        description:
          'Order management system using Laravel and Vue.js with role-based access, middleware, payment system, and MySQL integration, designed heavily with AI assistance.',
        stack: ['Laravel', 'Vue.js', 'HTML', 'CSS', 'Bootstrap', 'MySQL'],
        link: 'https://github.com/MinThantKo365/Tea-Sine',
        linkLabel: 'View on GitHub',
        linkIcon: 'fab fa-github',
      },
      {
        name: 'QR Attendance System',
        description:
          'An event check-in web app that replaces paper lists with unique guest QR codes. The idea for this system was inspired by a concept I came across on TikTok.',
        stack: ['Laravel', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'MySQL'],
        link: 'https://github.com/MinThantKo365/QR-Attendance-System',
        linkLabel: 'View on GitHub',
        linkIcon: 'fab fa-github',
      },
      {
        name: 'SQL Laravel Converter',
        description:
          'A SQL to Laravel Converter designed to help developers quickly transform raw SQL queries into Laravel Query Builder or Eloquent code.',
        stack: ['Vue.js', 'TypeScript', 'CSS'],
        link: 'https://mtk-converter.vercel.app/',
        linkLabel: 'View on Web',
        linkIcon: 'fas fa-globe',
      },
      {
        name: 'Movie Reservation Frontend',
        description:
          'Frontend that calls the Movie Reservation System API. Developed using agentic coding principles.',
        stack: ['Vue.js', 'TypeScript', 'HTML', 'CSS'],
        link: 'https://github.com/MinThantKo365/Movie-Reservation-Frontend',
        linkLabel: 'View on GitHub',
        linkIcon: 'fab fa-github',
      },
      {
        name: 'Appointment Scheduler',
        description:
          'A web application built with Laravel, implementing authentication, role-based permissions, CRUD operations, appointment reminders, and MySQL database management.',
        stack: ['Laravel', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'MySQL'],
        link: 'https://github.com/MinThantKo365/AppointmentSchedulerProject',
        linkLabel: 'View on GitHub',
        linkIcon: 'fab fa-github',
      },
      {
        name: 'POS Website',
        description:
          'Point of Sale (POS) system built with Laravel developed by following a CodeLab tutorial, implementing role-based access, middleware, payment system, and MySQL database.',
        stack: ['Laravel', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'MySQL'],
        link: 'https://github.com/MinThantKo365/POS',
        linkLabel: 'View on GitHub',
        linkIcon: 'fab fa-github',
      },
      {
        name: 'E-commerce Website',
        description:
          'E-commerce platform built with Laravel, implementing role-based access, middleware, payment system, and MySQL database.',
        stack: ['Laravel', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'MySQL'],
        link: 'https://github.com/MinThantKo365/ecommerce',
        linkLabel: 'View on GitHub',
        linkIcon: 'fab fa-github',
      },
      {
        name: 'Retail Camping Company Website',
        description:
          'Responsive frontend-only website for a camping retail company using modern HTML, CSS, and JavaScript.',
        stack: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://github.com/MinThantKo365/Retail-Camping-Company',
        linkLabel: 'View on GitHub',
        linkIcon: 'fab fa-github',
      },
      {
        name: 'IT Product & Service Center Database',
        description:
          'MySQL database design with relationships, normalization, and triggers for an IT product and service center system.',
        stack: ['MySQL', 'Database Design'],
        link: 'https://github.com/MinThantKo365/IT-Product-and-Service-Center-MySQL-Project-',
        linkLabel: 'View on GitHub',
        linkIcon: 'fab fa-github',
      },
      {
        name: 'News Website Using API',
        description:
          'Dynamic news website built with PHP, HTML, CSS, JavaScript, and MySQL, consuming APIs across most pages.',
        stack: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'APIs'],
        link: 'https://github.com/MinThantKo365/News-Website-Using-API',
        linkLabel: 'View on GitHub',
        linkIcon: 'fab fa-github',
      },
      {
        name: 'Sportswear Collection Website',
        description:
          'Responsive showcase site for a sportswear collection created with HTML, CSS, and JavaScript.',
        stack: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://github.com/MinThantKo365/Sportswear-Collection-Website',
        linkLabel: 'View on GitHub',
        linkIcon: 'fab fa-github',
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
            <i :class="project.linkIcon || 'fab fa-github'"></i>
            {{ project.linkLabel || 'View on GitHub' }}
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
