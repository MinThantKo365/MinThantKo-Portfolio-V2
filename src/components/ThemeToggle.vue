<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const isDark = computed({
  get: () => props.modelValue === 'dark',
  set: (val) => emit('update:modelValue', val ? 'dark' : 'light'),
})
</script>

<template>
  <button
    class="relative inline-flex h-10 items-center rounded-full border border-slate-300 bg-slate-100 px-1 text-xs font-medium text-slate-700 shadow-soft-lg ring-primary-500/40 transition hover:border-primary-400/80 hover:bg-slate-200 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-900/90 dark:hover:text-white dark:focus-visible:ring-offset-slate-950"
    type="button"
    @click="isDark = !isDark"
  >
    <span
      class="absolute inset-y-1 w-1/2 rounded-full bg-gradient-to-tr from-primary-500/80 via-sky-400/90 to-emerald-400/80 shadow-lg transition-all duration-300 ease-out"
      :class="isDark ? 'left-1/2' : 'left-1'"
    ></span>
    <span
      class="relative z-10 flex w-1/2 items-center justify-center px-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors"
      :class="isDark ? 'text-slate-400' : 'text-slate-800'"
    >
      Light
    </span>
    <span
      class="relative z-10 flex w-1/2 items-center justify-center px-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors"
      :class="isDark ? 'text-slate-50' : 'text-slate-400'"
    >
      Dark
    </span>
  </button>
</template>

