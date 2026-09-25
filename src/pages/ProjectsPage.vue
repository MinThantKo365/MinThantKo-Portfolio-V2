<script setup>
import ProjectsSection from '../components/ProjectsSection.vue'
</script>

<template>
  <div class="page-stack page-stack--routed">
    <header class="page-masthead reveal">
      <p class="page-kicker">Selected work</p>
      <h1 class="page-title">Projects</h1>
      <p class="page-lede">
        Pieces that show how I shape systems — from Laravel backends to mobile and data design.
      </p>
    </header>
    <ProjectsSection hide-header />
  </div>
</template>
