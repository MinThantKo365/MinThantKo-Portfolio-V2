<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  strength: { type: Number, default: 4 },
})

const cardRef = ref(null)
const target = { rotateX: 0, rotateY: 0 }
const current = { rotateX: 0, rotateY: 0 }
let rafId = null
let enabled = false

const applyTransform = () => {
  const el = cardRef.value
  if (!el) return
  el.style.transform = `perspective(900px) rotateX(${current.rotateX.toFixed(2)}deg) rotateY(${current.rotateY.toFixed(2)}deg)`
}

const tick = () => {
  const ease = 0.08
  current.rotateX += (target.rotateX - current.rotateX) * ease
  current.rotateY += (target.rotateY - current.rotateY) * ease
  applyTransform()

  const settled =
    Math.abs(target.rotateX - current.rotateX) < 0.05 &&
    Math.abs(target.rotateY - current.rotateY) < 0.05

  if (settled) {
    current.rotateX = target.rotateX
    current.rotateY = target.rotateY
    applyTransform()
    rafId = null
    return
  }

  rafId = requestAnimationFrame(tick)
}

const startAnimation = () => {
  if (rafId === null) rafId = requestAnimationFrame(tick)
}

const onMouseMove = (e) => {
  if (!enabled) return
  const el = cardRef.value
  if (!el) return

  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2

  target.rotateX = ((y - centerY) / centerY) * -props.strength
  target.rotateY = ((x - centerX) / centerX) * props.strength
  startAnimation()
}

const onMouseLeave = () => {
  target.rotateX = 0
  target.rotateY = 0
  startAnimation()
}

onMounted(() => {
  enabled =
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
    !window.matchMedia('(pointer: coarse)').matches
})

onUnmounted(() => {
  if (rafId !== null) cancelAnimationFrame(rafId)
})
</script>

<template>
  <div
    ref="cardRef"
    class="tilt-card will-change-transform"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <slot />
  </div>
</template>
