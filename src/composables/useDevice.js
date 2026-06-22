import { ref, onMounted, onUnmounted } from 'vue'

export function useIsTouchDevice() {
  const isTouch = ref(
    typeof window !== 'undefined' &&
      ('ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches),
  )

  onMounted(() => {
    isTouch.value =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches
  })

  return { isTouch }
}

export function useReducedMotion() {
  const prefersReduced = ref(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  onMounted(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReduced.value = mq.matches
    const handler = (e) => {
      prefersReduced.value = e.matches
    }
    mq.addEventListener('change', handler)
    onUnmounted(() => mq.removeEventListener('change', handler))
  })

  return { prefersReduced }
}
