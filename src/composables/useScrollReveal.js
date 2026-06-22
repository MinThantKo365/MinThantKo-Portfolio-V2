import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let observer = null

  onMounted(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      document.querySelectorAll('.reveal, .reveal-scale').forEach((el) => {
        el.classList.add('revealed')
      })
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    document.querySelectorAll('.reveal, .reveal-scale').forEach((el) => {
      observer.observe(el)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
