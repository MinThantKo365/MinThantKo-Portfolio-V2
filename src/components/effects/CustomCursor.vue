<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useIsTouchDevice } from '../../composables/useDevice.js'

const { isTouch } = useIsTouchDevice()

const onClick = (e) => {
  const ripple = document.createElement('div')
  ripple.className = 'cursor-ripple'
  ripple.style.left = `${e.clientX}px`
  ripple.style.top = `${e.clientY}px`
  document.body.appendChild(ripple)
  setTimeout(() => ripple.remove(), 600)
}

onMounted(() => {
  if (isTouch.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  document.addEventListener('click', onClick)
})

onUnmounted(() => {
  document.removeEventListener('click', onClick)
})
</script>

<template>
  <span class="hidden" aria-hidden="true"></span>
</template>

<style>
.cursor-ripple {
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(61, 122, 82, 0.35);
  transform: translate(-50%, -50%) scale(0);
  animation: cursor-ripple-anim 0.6s ease-out forwards;
  pointer-events: none;
  z-index: 9998;
}

@keyframes cursor-ripple-anim {
  to {
    transform: translate(-50%, -50%) scale(6);
    opacity: 0;
  }
}
</style>
