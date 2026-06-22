<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  end: { type: Number, required: true },
  duration: { type: Number, default: 2000 },
  suffix: { type: String, default: '' },
  prefix: { type: String, default: '' },
})

const displayValue = ref(0)
const counterRef = ref(null)
let hasAnimated = false

const animate = () => {
  if (hasAnimated) return
  hasAnimated = true
  const start = performance.now()
  const tick = (now) => {
    const elapsed = now - start
    const progress = Math.min(elapsed / props.duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    displayValue.value = Math.round(eased * props.end)
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    displayValue.value = props.end
    hasAnimated = true
    return
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animate()
        observer.disconnect()
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  )
  if (counterRef.value) observer.observe(counterRef.value)
})

watch(() => props.end, () => {
  hasAnimated = false
  displayValue.value = 0
})
</script>

<template>
  <span ref="counterRef" class="tabular-nums">
    {{ prefix }}{{ displayValue }}{{ suffix }}
  </span>
</template>
